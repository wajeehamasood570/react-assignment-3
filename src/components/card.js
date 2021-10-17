import { render } from "@testing-library/react";

import React, { Component } from "react";

class Card extends Component{
    render(){
        this.state = {
            images:["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"]
        }        
    return(
        <div className="card">
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"/>
            <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"/>
            <h2>{this.state.images.map((item)=>{
            return <> {item} </>
            
            })}</h2>
        </div>
    )
}
}
export default Card;