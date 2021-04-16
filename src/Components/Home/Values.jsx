import React from 'react';
import './Values.css'

export default function Values(props) {
    console.log(props.open)
    return (
        <div className="Jsoninfo">
            {!props.open ?
                <div>
                <p>{"{"}</p>
                <p>
                "Age":1
                <br />
                "Sex":"Male"<br />
                "Anaemia":"Yes"<br />
                "Creatinine phosphokinase (mcg/L)":1<br />
                "Diabetes":"Yes"<br />
                "Ejection fraction %":1<br />
                "High blood pressure":"Yes"<br />
                "Platelets (kiloplatelets/mL)":0<br />
                "Serum creatinine (mg/dL)":0<br />
                "Serum sodium (mEq/L)":1<br />
                "Smoking":"Yes"<br />
                "Time (follow-up-period)":1<br />
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
