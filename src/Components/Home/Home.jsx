import React, { Component } from 'react';
// eslint-disable-next-line
import axios from 'axios';
import "./home.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Values from './Values';
import Sidebar from './Sidebar';
import { connect } from "react-redux";


// rgb(246, 51, 102)
export class home extends Component {
    constructor(){
        super()
        this.state={
            checked: false,
            Jsonchecked: false
        };
    }
    handleCheckClick = () => {
        this.setState({ checked: !this.state.checked });
    }
    checkJson = () => {
        this.setState({Jsonchecked: !this.state.Jsonchecked})
    }
    render() {

        var mytxt = "Cardiovascular diseases (CVDs) are the number 1 cause of death globally, taking an estimated 17.9 million lives each year, which accounts for 31% of all deaths worlwide. Heart failure is a common event caused by CVDs. Most cardiovascular diseases can be prevented by addressing behavioural risk factors such as tobacco use, unhealthy diet and obesity, physical inactivity and harmful use of alcohol using population-wide strategies. People with cardiovascular disease or who are at high cardiovascular risk (due to the presence of one or more risk factors such as hypertension, diabetes, hyperlipidaemia or already established disease) need early detection and management wherein a machine learning model can be of great help."
        if(this.state.checked === true){
            // console.log("checked")
        }
        return (
            <div>
                <div className="MainPage">
                    <section className="SideBar">
                        <Sidebar />
                    </section>

                    <section className="mainSection">
                        <div className="mainHeading">
                            <h1>Prediction of Survival in Patients with Heart Failure</h1>
                        </div>
                        <div className="info">
                            <input type="checkbox" name="check" className="c4" checked={this.state.checked} onChange={this.handleCheckClick}/>
                            <span className="checkmark"></span>
                            <p>Information</p>
                        </div>
                        {this.state.checked ?<p>{mytxt}</p> : ""}
                        <div className="vals">
                            <h2>How does it work ❓</h2>
                            <p>Complete all the questions and the machine learning model will predict the survival of patients with heart failure</p>
                            <h2>These are the values you entered 🧑‍⚕</h2>
                        </div>
                        <div className="valuesDiv">
                            {!this.state.Jsonchecked ? <i onClick={this.checkJson} className="fas fa-sort-down openCurly" style={{fontSize:15, opacity:0.6}}></i>:""}
                            {this.state.Jsonchecked ? <i onClick={this.checkJson} className="fas fa-caret-right openCurly
                            " style={{fontSize:15, opacity:0.6}}></i>:""}
                            <Values open={this.state.Jsonchecked} name="akshay" />
                        </div>
                        <button>Predict</button>
                    </section>
            </div>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
        age: state.UserReducer.UserVals.age,
    };
};

const mapDispatchToProps  = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);