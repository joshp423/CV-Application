import { useState } from "react";

export default function ExpInfo({ formState }){
    const [expInfo, setExpInfo] = useState([]);
    const [expCounter, setExpCounter] = useState(1);

    function updateValues(e) {
        setExpInfo({
            ...expInfo,
        [e.target.name]: e.target.value   
        })
    }

    if (formState === 0) {
        return (
            <div className="generalInfoForm">
                <input
                    placeholder="Company Name"
                    name="name"
                    value={expInfo.name}
                    onChange={updateValues}
                />

                <input
                    placeholder="Email"
                    name="email"
                    value={expInfo.email}
                    onChange={updateValues}
                />
                <input
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={expInfo.phoneNumber}
                    onChange={updateValues}
                />
                {!expInfo || expInfo.length < 2 && (
                    <button type="button">
                        Add Experience - max 3
                    </button>
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