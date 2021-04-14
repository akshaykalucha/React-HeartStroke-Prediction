import React, { Component } from 'react'
import axios from 'axios';
import "./home.css"

// rgb(246, 51, 102)
export class home extends Component {
    constructor(){
        super()
        this.state={
            checked: false
        };
    }
    getInfo = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          console.log({ res })
        })
        .catch(err => {
            console.log(err)
        })
    }
    handleCheckClick = () => {
        this.setState({ checked: !this.state.checked });
    }
    ButtonFOcusState = () => {
        console.log("yes focus");
    }
    render() {

        var mytxt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi quasi, possimus enim magnam soluta accusamus beatae temporibus officia error animi dolorum voluptatum iste! Quidem, culpa ipsam! Necessitatibus, voluptatum expedita!"
        if(this.state.checked === true){
            console.log("checked")
        }
        return (
            <div>
                <div className="mainHeading">
                    <h1>Prediction of Survival in Patients with Heart Failure</h1>
                </div>
                <div className="info">
                    <input onFocus={this.ButtonFOcusState} type="checkbox" name="check" checked={this.state.checked} onChange={this.handleCheckClick}/>
                    <span className="checkmark"></span>
                    <p>Information</p>
                </div>
                {this.state.checked ?<p>{mytxt}</p> : ""}
                <button type="button" onClick={()=>{this.getInfo()}}>Call API</button>
            </div>
        )
    }
}

export default home
