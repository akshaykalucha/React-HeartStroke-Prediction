import React, { Component } from 'react';
import './sidebar.css'

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
                            <label htmlFor="male">Male</label><br />
                            <input type="radio" name="GenderRadio" value="female" id=""/>
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
                    </div>
                </section>
            </div>
        )
    }
}

export default Sidebar
