import React, {Component} from "react"

class Header extends Component {
    render(){
        this.state = {
            name:"Wajiha",
            degree: "MSc",
            skills:["HTML, " , "CSS, " , "JS, ", "WordPress"]
        }

        return(
            <>
            <h2>
                My name is {this.state.name} 
            </h2>
            <h2>
                I have done my {this.state.degree} 
            </h2>
            <h2 className="skills">
                My Skills are {this.state.skills.map((item)=>{
                    return <>{item}</>
                })} 
            </h2>
            </>
        )
    }
}

export default Header;