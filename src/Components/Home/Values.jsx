import React from 'react';
import './Values.css';
import { useSelector } from "react-redux";


export default function Values(props) {
    // console.log(props.open)
    const vals = useSelector(state => state.UserReducer.UserVals);
    return (
        <div className="Jsoninfo">
            {!props.open ?
                <div>
                <p>{"{"}</p>
                <p>
                "Age": {vals.age}
                <br />
                "Sex": "{vals.gender.val}"<br />
                "Anaemia": "{vals.anemia.val}"<br />
                "Creatinine phosphokinase (mcg/L)": {vals.creatine}<br />
                "Diabetes": "{vals.diabetes}"<br />
                "Ejection fraction %": {vals.ejection}<br />
                "High blood pressure": "{vals.highBP.val}"<br />
                "Platelets (kiloplatelets/mL)": 0<br />
                "Serum creatinine (mg/dL)": 0<br />
                "Serum sodium (mEq/L)": 1<br />
                "Smoking": "Yes"<br />
                "Time (follow-up-period)": 1<br />
                </p>
                <p>{"}"}</p>
            </div>
            :
            <p>
            {"{ ... }"}
            </p>
            }
        </div>
    )
}
