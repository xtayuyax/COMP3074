import React from "react"
import io from "socket.io-client";

class LandingPage extends React.Component{
    state = {
        chatrooms: ["Gardening", "Arrangements", "Off Topic", "Show Off"]
    }

    renderText(){
        return(
            <div className = "landingPageText">
                <span>
                    <span>
                        Floral Chatrooms is a chatroom specifically to discuss gardening, flowers and flower arrangements.
                    </span>
                </span>
            </div>
        )
    }

    renderHeader(){

        return(
            <div className = "landingPageHeader">About us</div>
        )
    }

    render(){
        return(
            <div className = "landingPageMain">
                <div className = "landingPageContent">
                    {this.renderHeader()}
                </div>
                <div className = "landingPageContent">
                    {this.renderText()}
                </div>
            </div>
        )
    }
}

export default LandingPage;