import React from 'react'

export default function Values(props) {
    console.log(props.open)
    return (
        <div>
            <h3>{"{"}</h3>
            {!props.open ?
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
            :
            ""
            }
            <h3>{"}"}</h3>
        </div>
    )
}
