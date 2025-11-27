import { useState } from "react";

export default function GeneralInfo({ formState }){
    const [genInfo, setGenInfo] = useState({
        name: "",
        email: "",
        phoneNumber: ""
    });

    function updateValues(e) {
        setGenInfo({
            ...genInfo,
        [e.target.name]: e.target.value   
        })
    }

    if (formState === 0) {
        return (
            <div className="generalInfoForm">
                <input
                    placeholder="Name"
                    name="name"
                    value={genInfo.name}
                    onChange={updateValues}
                />

                <input
                    placeholder="Email"
                    name="email"
                    value={genInfo.email}
                    onChange={updateValues}
                />
                <input
                    placeholder="Phone Number"
                    name="phoneNumber"
                    value={genInfo.phoneNumber}
                    onChange={updateValues}
                />
            </div>
        )
    }
    else {
        return (
            <div className="generalInfoDisplay">
                <h1>{genInfo.name}</h1>
                <p>{genInfo.email}</p>
                <p>{genInfo.phoneNumber}</p>
            </div>
        )
    }

}