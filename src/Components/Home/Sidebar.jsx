import React, { Component } from 'react';
import './sidebar.css';
import { connect } from "react-redux";
import { setAge, setGender, setCustomAge, setAnemia, setCreatine, setCustomCreatine, setDiabetes, setEjection, setCustomEjection, setHighBP } from '../Store/action'


export class Sidebar extends Component {
    state={
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
        this.showDiabVals()
        this.props.setDiabetes(event.currentTarget.dataset.id)
    }
    incrementAge = () => {
        this.props.incrementAge(1);
    }
    incrementAgeCustom = (event) => {
        this.props.setCusAge(event.target.value === "" ? "" : parseInt(event.target.value))
    }
    decrementAge = () => {
        this.props.incrementAge(-1)
    }
    genderToggle = (event) => {
        this.props.gendrToggle(event.target.value)
    }
    toggleAnemia = (event) => {
        this.props.setAnemia(event.target.value)
    }

    incrementCreatine = () => {
        this.props.incrementCreatine(1);
    }
    decrementCreatine = () => {
        this.props.incrementCreatine(-1)
    }
    incrementCreatineCustom = (event) => {
        this.props.setCusCreatine(event.target.value === "" ? "" : parseInt(event.target.value))
    }
    incrementEjection = () => {
        this.props.incrementEjection(1);
    }
    decrementEjection = () => {
        this.props.incrementEjection(-1)
    }
    incrementEjectionCustom = (event) => {
        this.props.setCusEjection(event.target.value === "" ? "" : parseInt(event.target.value))
    }

    toggleHighBP = (event) => {
        this.props.setBP(event.target.value)
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
                                <button onClick={this.decrementAge}>-</button>
                            </div>
                            </div>
                        </div>
                        <div className="GenderBox element-container">
                            <label htmlFor="Age">Sex</label>
                            <div className="GenderRadioGroup RadioGroup">
                            <input type="radio" name="GenderRadio" checked={this.props.val.gender.male} onChange={this.genderToggle} value="Male" id=""/>
                            <label htmlFor="male">Male</label><br />
                            <input type="radio" name="GenderRadio" checked={this.props.val.gender.female} onChange={this.genderToggle} value="Female" id=""/>
                            <label htmlFor="female">Female</label><br />
                            </div>
                        </div>
                        <div className="AnemiaBox element-container">
                            <label htmlFor="Anemia">Anemia?</label>
                            <div className="RadioGroup AnemiaRadioGroup">
                            <input type="radio" name="AnemiaRadio" checked={this.props.val.anemia.yes} onChange={this.toggleAnemia} value="Yes" id=""/>
                            <label htmlFor="male">Yes</label><br />
                            <input type="radio" name="AnemiaRadio" checked={this.props.val.anemia.no} onChange={this.toggleAnemia} value="No" id=""/>
                            <label htmlFor="No">No</label><br />
                            </div>
                        </div>
                        <div className="Creatine element-container">
                            <label htmlFor="Creatinine">Creatinine phosphokinase (mcg/L)</label>
                            <div className="inputContainer">
                            <input type="number" value={this.props.val.creatine} onChange={this.incrementCreatineCustom} name="Creatine" id=""/>
                            <div className="controls controlAge">
                                <button onClick={this.incrementCreatine}>+</button>
                                <button onClick={this.decrementCreatine}>-</button>
                            </div>
                            </div>
                        </div>
                        <div ref={node => { this.node = node; }} className="Diabetes element-container">
                            <label htmlFor="Diabetes">Diabetes</label>
                            <div className="inputContainer">
                                <input onClick={this.showDiabVals} readOnly type="Text" value={this.props.val.diabetes} name="Creatine" id=""/>
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
                            <input type="number" value={this.props.val.ejection} onChange={this.incrementEjectionCustom} name="ejection_frac" id=""/>
                            <div className="controls controlEjection">
                                <button onClick={this.incrementEjection}>+</button>
                                <button onClick={this.decrementEjection}>-</button>
                            </div>
                            </div>
                        </div>
                        <div className="BloodPressure element-container">
                            <label htmlFor="BloodPressure">High blood pressure</label>
                            <div className="RadioGroup BPRadioGroup">
                            <input type="radio" name="BPRadio" checked={this.props.val.highBP.yes} onChange={this.toggleHighBP} value="Yes" id=""/>
                            <label htmlFor="male">Yes</label><br />
                            <input type="radio" name="BPRadio" checked={this.props.val.highBP.no} onChange={this.toggleHighBP} value="No" id=""/>
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
                            <input type="radio" name="SmokingRadio" checked={this.props.val.smoking.yes} value="Yes" id=""/>
                            <label htmlFor="male">Yes</label><br />
                            <input type="radio" name="SmokingRadio" checked={this.props.val.smoking.no} value="No" id=""/>
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
        setCusAge: (age) => dispatch(setCustomAge(age)),
        gendrToggle: (sex) => dispatch(setGender(sex)),
        setAnemia: (val) => dispatch(setAnemia(val)),
        incrementCreatine: (num) => dispatch(setCreatine(num)),
        setCusCreatine: (creatine) => dispatch(setCustomCreatine(creatine)),
        setDiabetes: (val) => dispatch(setDiabetes(val)),
        incrementEjection: (num) => dispatch(setEjection(num)),
        setCusEjection: (ejection) => dispatch(setCustomEjection(ejection)),
        setBP: (val) => dispatch(setHighBP(val)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
