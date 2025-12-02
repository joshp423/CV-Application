import { useState } from "react";
import "../styles/expStyle.css"

function ExpInputs({ iteration, expInfo, updateValues }) {
    return (
        <div className="expInfoInputs">
            <input
                placeholder="Company Name"
                name="companyName"
                value={expInfo[iteration].companyName}
                type="text"
                onChange={(e) => updateValues(e, iteration)}
            />
            <input
                placeholder="Position Title"
                name="positionTitle"
                value={expInfo[iteration].positionTitle}
                type="text"
                onChange={(e) => updateValues(e, iteration)}
            />
            <input
                placeholder="Description"
                name="description"
                value={expInfo[iteration].description}
                type="text"
                onChange={(e) => updateValues(e, iteration)}
            />
            <input
                placeholder="Start Date"
                name="dateStart"
                value={expInfo[iteration].dateStart}
                type="text"
                onChange={(e) => updateValues(e, iteration)}
            />
            <input
                placeholder="Finish Date"
                name="dateFinish"
                value={expInfo[iteration].dateFinish}
                type="text"
                onChange={(e) => updateValues(e, iteration)}
            />
        </div>
    )
}

export default function ExpInfo({ formState }){
    const [expInfo, setExpInfo] = useState([
        {companyName: "", positionTitle: "", description: "", dateStart: "", dateFinish: ""},
        {companyName: "", positionTitle: "", description: "", dateStart: "", dateFinish: ""},
        {companyName: "", positionTitle: "", description: "", dateStart: "", dateFinish: ""}
    ]);
    const [expCounter, setExpCounter] = useState(1);

    function addExp() {
        setExpCounter(expCounter +1);
    }

    function removeExp() {
        setExpCounter(expCounter -1);
    }

    function updateValues(e, iteration) {
    
        const updated = [...expInfo]; // because the rendering is referencing the current object we have to make a new object then switch over 
        updated[iteration] = {
            ...updated[iteration],
            [e.target.name]: e.target.value
        };
        setExpInfo(updated);
        
    }
    
    if (formState === 0) {
        return (
            
            <div className="expInfoForm">
                <div className="expInfoTitle">
                    <h2>Job Experience</h2>

                    {!expInfo || expCounter < 3 && (
                        <button type="button" onClick={addExp}>
                            Add Experience - Max 3
                        </button>
                    )}

                    {expCounter > 1 && (
                        <button type="button" onClick={removeExp}>Remove Experience</button>
                    )}
                </div>
                <div className="expInfoInputContainer">
            
                    {expCounter === 1 && (
                        <>
                            <ExpInputs
                                iteration = {0}
                                expInfo = {expInfo}
                                updateValues={updateValues}
                            />
                        </>
                    )}

                    {expCounter === 2 && (
                        <>
                            <ExpInputs
                                iteration = {0}
                                expInfo = {expInfo}
                                updateValues={updateValues}
                            />

                            <ExpInputs 
                                iteration = {1}
                                expInfo = {expInfo}
                                updateValues={updateValues}
                            />
                            
                        </>
                    )}

                    {expCounter === 3 && (
                        <>
                            <ExpInputs
                                iteration = {0}
                                expInfo = {expInfo}
                                updateValues={updateValues}
                            />
                            <ExpInputs
                                iteration = {1}
                                expInfo = {expInfo}
                                updateValues={updateValues}
                            />
                            <ExpInputs
                                iteration = {2}
                                expInfo = {expInfo}
                                updateValues={updateValues} 
                            />
                        </>
                    )}

                </div>
            </div>
        )
    }
    else {
        return (
            <div className="expInfoDisplay">
                <h3>Experience</h3>
                {expCounter === 1 && (
                    <>
                        <h1>{expInfo[0].companyName + " - " + expInfo[0].positionTitle}</h1>
                        <p>{expInfo[0].description}</p>
                        <p>{expInfo[0].dateStart + " - " + expInfo[0].dateFinish}</p>
                    </>
                )}

                {expCounter === 2 && (
                    <>
                        <h1>{expInfo[0].companyName + " - " + expInfo[0].positionTitle}</h1>
                        <p>{expInfo[0].description}</p>
                        <p>{expInfo[0].dateStart + " - " + expInfo[0].dateFinish}</p>

                        <h1>{expInfo[1].companyName + " - " + expInfo[1].positionTitle}</h1>
                        <p>{expInfo[1].description}</p>
                        <p>{expInfo[1].dateStart + " - " + expInfo[1].dateFinish}</p>
                    </>
                )}

                {expCounter === 3 && (
                    <>
                        <h1>{expInfo[0].companyName + " - " + expInfo[0].positionTitle}</h1>
                        <p>{expInfo[0].description}</p>
                        <p>{expInfo[0].dateStart + " - " + expInfo[0].dateFinish}</p>

                        <h1>{expInfo[1].companyName + " - " + expInfo[1].positionTitle}</h1>
                        <p>{expInfo[1].description}</p>
                        <p>{expInfo[1].dateStart + " - " + expInfo[1].dateFinish}</p>

                        <h1>{expInfo[2].companyName + " - " + expInfo[2].positionTitle}</h1>
                        <p>{expInfo[2].description}</p>
                        <p>{expInfo[2].dateStart + " - " + expInfo[2].dateFinish}</p>
                    </>
                )}
                
            </div>
        )
    }

}