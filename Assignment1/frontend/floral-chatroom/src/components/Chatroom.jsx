import React from "react";
import io from "socket.io-client";
import axios from "axios";

class Chatroom extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            user: "",
            message: "",
            tavernMessages: [{}],
            arrangementMessages: [{}],
            typingMessage: "",
            typing: false,
            room: "tavern",
            registered: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUser = this.handleUser.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    addMessage = data => {
        if(this.state.room === "tavern"){
            this.setState({tavernMessages: [...this.state.tavernMessages, data]});
        }
        else{
            this.setState({arrangementMessages: [...this.state.arrangementMessages, data]});
        }
    };

    handleTyping = data => {
        this.setState({typingMessage: data})
    }

    storeEvent(user, event, date){
        let data = {
            date: date,
            user: user,
            event: event,
        }
        axios.post(`http://localhost:8080/api/eventlog/`, data)
    }

    storeMessage(user, message, room, date){
        let data = {
            room: room,
            date: date,
            user: user,
            message: message,
        }
        axios.put(`http://localhost:8080/api/roomhistory/`, data)
    }

    getMessages(room){
        axios.get(`http://localhost:8080/api/roomhistory/${room}`)
            .then((response, error) => {
                if(response.data === ""){   
                    console.log(error);
                }
                else{
                    if(room === "arrangement"){
                        this.setState({arrangementMessages: response.data.messages})
                    }
                    else if(room === "tavern"){
                        this.setState({tavernMessages: response.data.messages})
                    }
                }
            })
            .then(() => {
                if(room === this.state.room){
                    this.socket.emit("joinRoom", this.state.room);
                }});
    }

    createChatroom(room){
        let data = {
            room: room,
            messages: [{}],
        }
        axios.post(`http://localhost:8080/api/history/`, data)
    }

    handleChange(event) {
        this.setState({message: event.target.value});
        this.typingHandler();
    }

    handleUser(event){
        this.setState({user: event.target.value});
    }

    handleRegister(event){
        event.preventDefault();
        this.setState({registered: true});

        this.socket = io("http://localhost:8080");

        this.socket.on("connect", () => {
            this.createChatroom("tavern");
            this.createChatroom("arrangement");
            this.storeEvent(this.state.user, "CONNECT");
            this.socket.emit("connectMessage", this.state.user); 
            this.getMessages("tavern");
            this.getMessages("arrangement");          
        });

        this.socket.on("disconnect", () => {
            this.storeEvent(this.state.user, "DISCONNECT")
            this.socket.emit("disconnectMessage", `${this.state.user}`, Date().toLocaleString());
        })

        this.socket.on("joinMessage", message => {
            this.addMessage(message);
            this.storeEvent(this.state.user, `Joined ${message.room}`, Date().toLocaleString());
        });


        this.socket.on("chatMessage", message => {
            this.addMessage(message);
            this.storeMessage(this.state.user, message.message, this.state.room, Date().toLocaleString());
        });

        this.socket.on("typingMessage", data => {
            this.handleTyping(data);
        });

        this.socket.on("leaveMessage", data => {
            if(data.room === "tavern"){
                this.setState({tavernMessages: [...this.state.tavernMessages, data]});
                this.storeEvent(this.state.user, `Left ${data.room}`);
            }
            else{
                this.setState({arrangementMessages: [...this.state.arrangementMessages, data]});
                this.storeEvent(this.state.user, `Left ${data.room}`);
            }
        })
    }

    typingHandler = () => {
        if(this.state.message === ""){
            this.socket.emit("typing", false);
        }
        else{
            this.socket.emit("typing", this.state.user);
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.socket.emit("message", {
            user: this.state.user,
            message: this.state.message,
        });
        this.setState({message: ""});
        this.socket.emit("typing", false);
    }

    handleClick(room){
        if(this.state.room !== room){
            this.socket.emit("leaveRoom", this.state.room);
            this.socket.emit("joinRoom", room);
            this.setState({room: room})
        }
    }


    renderChat(){
        let x = 0
        let chatroom = [];
        if(this.state.room === "tavern"){
            chatroom = this.state.tavernMessages;
        }
        else{
            chatroom = this.state.arrangementMessages;
        }
        return(
            <div className="messages">
                {chatroom.map(message => {
                    x++;
                    return (
                        <div className = "completeMessage" key = {x}>
                            <span className = "time"></span>
                            <span className = "username">{message.user}</span>
                            <span className = "message">{message.message}</span>
                        </div>
                    )
                })}
            </div>
        )
    }

    renderTyping(){
        return(
            <div className = "typingMessage">
                {this.state.typingMessage}
            </div>)
    }

    renderChatroom(){
        return(
            <div className = "chatroom">
                <div className = "chatRooms">
                    <button onClick = {() => this.handleClick("tavern")}>Tavern</button>
                    <button onClick = {() => this.handleClick("arrangement")}>Floral Arrangements</button>
                </div>
                <div className = "chat">
                    {this.renderChat()}
                    {this.renderTyping()}
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value = {this.state.message} onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
            </div> 
        )
    }

    renderLanding(){
        return(
            <div className = "landing">
                <form onSubmit = {this.handleRegister}>
                    <span>Please enter your username to get started!</span>
                    <br/>
                    <input type = "text" value = {this.state.user} onChange = {this.handleUser}/>
                    <br />
                    <input type = "submit" value = "Start!" />
                </form>
            </div>
        )
    }

    render(){
        return(
            <div>
                {this.state.registered ? this.renderChatroom() : this.renderLanding()}
            </div>
        )
    }
}

export default Chatroom;