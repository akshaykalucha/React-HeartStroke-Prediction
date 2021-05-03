import React, { Component } from 'react';
import './sidebar.css';
import { connect } from "react-redux";
import { setAge, setGender, setCustomAge } from '../Store/action'


export class Sidebar extends Component {
    state={
        diab: "No",
        showDiab: false
    }


    showDiabVals =()=>{
        if (!this.state.showDiab) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
          } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
          }
      
          this.setState(prevState => ({
            showDiab: !prevState.showDiab,
          }));
    }

    handleOutsideClick = (e) => {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
          return;
        }
        
        this.showDiabVals();
      }
    handleDiab = (event) => {
        this.setState({
        diab: event.currentTarget.dataset.id
        })
        this.showDiabVals()
    }

    incrementAge = () => {
        this.props.incrementAge(1);
    }

    incrementAgeCustom = (event) => {
        this.props.setCusAge(event.target.value === "" ? "" : parseInt(event.target.value))
    }
    

    genderToggle = () => {
        console.log("yyyy", this.props.val.gender)
        this.props.gendrToggle()
    }
    

    render() {
        return (
            <div className="SideForm">
                <section className="sidebarView">
                    <div className="Infoboxes">
                        <h1>Prediction Form📋</h1>
                        <div className="ageBox element-container">
                            <label htmlFor="Age">Age</label>
                            <div className="inputContainer">
                            <input type="number" value={this.props.val.age} onChange={this.incrementAgeCustom} name="ageNum" id=""/>
                            <div className="controls controlAge">
                                <button onClick={this.incrementAge}>+</button>
                                <button>-</button>
                            </div>
                            </div>
                        </div>
                        <div className="GenderBox element-container">
                            <label htmlFor="Age">Sex</label>
                            <div className="GenderRadioGroup RadioGroup">
                            <input type="radio" name="GenderRadio" checked={this.props.val.gender.male} onChange={this.genderToggle} value="male" id=""/>
                            <label htmlFor="male">Male</label><br />
                            <input type="radio" name="GenderRadio" checked={this.props.val.gender.female} onChange={this.genderToggle} value="female" id=""/>
                            <label htmlFor="female">Female</label><br />
                            </div>
                        </div>
                        <div className="AnemiaBox element-container">
                            <label htmlFor="Anemia">Anemia?</label>
                            <div className="RadioGroup AnemiaRadioGroup">
                            <input type="radio" name="AnemiaRadio" value="Yes" id=""/>
                            <label htmlFor="male">Yes</label><br />
                            <input type="radio" name="AnemiaRadio" value="No" id=""/>
                            <label htmlFor="No">No</label><br />
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
                        <div ref={node => { this.node = node; }} className="Diabetes element-container">
                            <label htmlFor="Diabetes">Diabetes</label>
                            <div className="inputContainer">
                                <input onClick={this.showDiabVals} readOnly type="Text" value={this.state.diab} name="Creatine" id=""/>
                            </div>
                            {this.state.showDiab && (
                            <div className="DibVals listbox">
                                <ul className="listVals">
                                    <li onClick={this.handleDiab} data-id="Yes" className="valYes">Yes</li>
                                    <li onClick={this.handleDiab} data-id="No" className="valNo">No</li>
                                </ul>
                            </div>
                            )}
                        </div>
                        <div className="ejection_frac element-container">
                            <label htmlFor="ejection_frac">Ejection fraction %</label>
                            <div className="inputContainer">
                            <input type="number" name="ejection_frac" id=""/>
                            <div className="controls controlEjection">
                                <button>+</button>
                                <button>-</button>
                            </div>
                            </div>
                        </div>
                        <div className="BloodPressure element-container">
                            <label htmlFor="BloodPressure">High blood pressure</label>
                            <div className="RadioGroup BPRadioGroup">
                            <input type="radio" name="BPRadio" value="Yes" id=""/>
                            <label htmlFor="male">Yes</label><br />
                            <input type="radio" name="BPRadio" value="No" id=""/>
                            <label htmlFor="No">No</label><br />
                            </div>
                        </div>
                        <div className="platlets element-container">
                            <label htmlFor="platlets">Platelets (kiloplatelets/mL)</label>
                            <div className="inputContainer">
                            <input type="number" name="platlets" id=""/>
                            <div className="controls controlPlatlets">
                                <button>+</button>
                                <button>-</button>
                            </div>
                            </div>
                        </div>
                        <div className="serumC element-container">
                            <label htmlFor="serumC">Serum creatinine (mg/dL)</label>
                            <div className="inputContainer">
                            <input type="number" name="serumC" id=""/>
                            <div className="controls controlSerumC">
                                <button>+</button>
                                <button>-</button>
                            </div>
                            </div>
                        </div>
                        <div className="serumS element-container">
                            <label htmlFor="serumS">Serum sodium (mEq/L)</label>
                            <div className="inputContainer">
                            <input type="number" name="serumS" id=""/>
                            <div className="controls controlserumS">
                                <button>+</button>
                                <button>-</button>
                            </div>
                            </div>
                        </div>
                        <div className="Smoking element-container">
                            <label htmlFor="Smoking">Smoking</label>
                            <div className="RadioGroup SmokingRadioGroup">
                            <input type="radio" name="SmokingRadio" value="Yes" id=""/>
                            <label htmlFor="male">Yes</label><br />
                            <input type="radio" name="SmokingRadio" value="No" id=""/>
                            <label htmlFor="No">No</label><br />
                            </div>
                        </div>
                        <div className="time element-container">
                            <label htmlFor="time">Time (follow-up-period)</label>
                            <div className="inputContainer">
                            <input type="number" name="time" id=""/>
                            <div className="controls controlTime">
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

const mapStateToProps = state => {
    return {
        val: state.UserReducer.UserVals,
    };
};

const mapDispatchToProps  = (dispatch) => {
    return {
        incrementAge: (num) => dispatch(setAge(num)),
        gendrToggle: () => dispatch(setGender()),
        setCusAge: (age) => dispatch(setCustomAge(age))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
