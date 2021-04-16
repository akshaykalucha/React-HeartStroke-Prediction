import React, { Component } from 'react';
import './sidebar.css'

export class Sidebar extends Component {
    render() {
        return (
            <div className="SideForm">
                <section className="sidebarView">
                    <div className="Infoboxes">
                        <h1>Prediction Form📋</h1>
                        <div className="ageBox element-container">
                            <label htmlFor="Age">Age</label>
                            <div className="inputContainer">
                            <input type="number" name="ageNum" id=""/>
                            <div className="controls controlAge">
                                <button>+</button>
                                <button>-</button>
                            </div>
                            </div>
                        </div>
                        <div className="GenderBox element-container">
                            <label htmlFor="Age">Sex</label>
                            <div className="GenderRadioGroup RadioGroup">
                            <input type="radio" name="GenderRadio" value="male" id=""/>
                            <label for="male">Male</label><br />
                            <input type="radio" name="GenderRadio" value="female" id=""/>
                            <label for="female">Female</label><br />
                            </div>
                        </div>
                        <div className="AnemiaBox element-container">
                            <label htmlFor="Anemia">Anemia?</label>
                            <div className="RadioGroup AnemiaRadioGroup">
                            <input type="radio" name="AnemiaRadio" value="Yes" id=""/>
                            <label for="male">Yes</label><br />
                            <input type="radio" name="AnemiaRadio" value="No" id=""/>
                            <label for="No">No</label><br />
                            </div>
                        </div>
                        <div className="Creatine element-container">
                            <label htmlFor="Creatinine">Creatinine phosphokinase (mcg/L)</label>
                            <div className="inputContainer">
                            <input type="number" name="Creatine" id=""/>
                            <div className="controls controlAge">
                                <button>+</button>
                                <button>-</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Sidebar
