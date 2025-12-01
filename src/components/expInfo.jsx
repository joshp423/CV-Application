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

    function updateValues(e, iteration) {
        
    setExpInfo({
        ...expInfo[iteration],
        [e.target.name]: e.target.value
    })
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
                    <ExpInputs
                        iteration = {0}
                        expInfo = {expInfo}
                        updateValues={updateValues}
                    />
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
        )
    }
    else {
        return (
            <div className="generalInfoDisplay">
                <h1>{expInfo.name}</h1>
                <p>{expInfo.email}</p>
                <p>{expInfo.phoneNumber}</p>
            </div>
        )
    }

}