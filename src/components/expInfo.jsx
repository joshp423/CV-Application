import { useState } from "react";


function ExpInputs({ iteration, expInfo, updateValues }) {
    return (
        <>
            <input
                placeholder="Company Name"
                name="name"
                value={expInfo[iteration].name}
                onChange={(e) => updateValues(e, iteration)}
                required
            />

            <input
                placeholder="Email"
                name="email"
                value={expInfo[iteration].email}
                onChange={(e) => updateValues(e, iteration)}
                required
            />
            <input
                placeholder="Phone Number"
                name="phoneNumber"
                value={expInfo[iteration].phoneNumber}
                onChange={(e) => updateValues(e, iteration)}
                required
            />
        </>
    )
}

export default function ExpInfo({ formState }){
    const [expInfo, setExpInfo] = useState([
        {name: "", email: "", phoneNumber: ""},
        {name: "", email: "", phoneNumber: ""},
        {name: "", email: "", phoneNumber: ""}
    ]);
    const [expCounter, setExpCounter] = useState(1);

    function addExp() {
        setExpCounter(expCounter +1)
    }

    function removeExp() {
        setExpCounter(expCounter -1)
    }

    function updateValues(e, iteration) {
    
        const updated = [...expInfo]; // because the rendering is referencing the current object we have to make a new object then switch over 
        updated[iteration] = {
            ...updated[iteration],
            [e.target.name]: e.target.value
        };
        setExpInfo(updated)
    }
    
    if (formState === 0) {
        return (
            
            <div className="generalInfoForm">
                {!expInfo || expCounter < 3 && (
                    <button type="button" onClick={addExp}>
                        Add Experience - max 3
                    </button>
                )}
            
                {expCounter === 1 && (
                    <>
                        <ExpInputs
                            iteration = {0}
                            expInfo = {expInfo}
                            updateValues={updateValues}
                        />
                        <button type="button" onClick={removeExp}>Remove Experience</button>
                    </>
                )}

                {expCounter === 2 && (
                    <>
                        <ExpInputs
                            iteration = {0}
                            expInfo = {expInfo}
                            updateValues={updateValues}
                        />
                        <button type="button" onClick={removeExp}>Remove Experience</button>

                        <ExpInputs 
                            iteration = {1}
                            expInfo = {expInfo}
                            updateValues={updateValues}
                        />
                        <button type="button" onClick={removeExp}>Remove Experience</button>
                    </>
                )}

                {expCounter === 3 && (
                    <>
                        <ExpInputs
                            iteration = {0}
                            expInfo = {expInfo}
                            updateValues={updateValues}
                        />
                        <button type="button" onClick={removeExp}>Remove Experience</button>

                        <ExpInputs
                            iteration = {1}
                            expInfo = {expInfo}
                            updateValues={updateValues}
                        />
                        <button type="button" onClick={removeExp}>Remove Experience</button>

                        <ExpInputs
                            iteration = {2}
                            expInfo = {expInfo}
                            updateValues={updateValues} 
                        />
                        <button type="button" onClick={removeExp}>Remove Experience</button>

                    </>
                )}

            </div>
        )
    }
    else {
        return (
            <div className="generalInfoDisplay">
                {expCounter === 1 && (
                    <>
                        <h1>{expInfo[0].name}</h1>
                        <p>{expInfo[0].email}</p>
                        <p>{expInfo[0].phoneNumber}</p>
                        
                    </>
                )}

                {expCounter === 2 && (
                    <>
                        <h1>{expInfo[0].name}</h1>
                        <p>{expInfo[0].email}</p>
                        <p>{expInfo[0].phoneNumber}</p>

                        <h1>{expInfo[1].name}</h1>
                        <p>{expInfo[1].email}</p>
                        <p>{expInfo[1].phoneNumber}</p>
                    </>
                )}

                {expCounter === 3 && (
                    <>
                        <h1>{expInfo[0].name}</h1>
                        <p>{expInfo[0].email}</p>
                        <p>{expInfo[0].phoneNumber}</p>

                        <h1>{expInfo[1].name}</h1>
                        <p>{expInfo[1].email}</p>
                        <p>{expInfo[1].phoneNumber}</p>

                        <h1>{expInfo[2].name}</h1>
                        <p>{expInfo[2].email}</p>
                        <p>{expInfo[2].phoneNumber}</p>
                    </>
                )}
                
            </div>
        )
    }

}