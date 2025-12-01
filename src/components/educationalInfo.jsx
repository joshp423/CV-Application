import { useState } from "react";
import '../styles/eduStyle.css';

export default function EduInfo({ formState }){
    const [eduInfo, setEduInfo] = useState(
        {schoolName: "", studyTitle: "", studyDate: ""}
    );

    function updateValues(e) {
        setEduInfo({
            ...eduInfo,
            [e.target.name]: e.target.value
        })
    }

    if (formState === 0) {
        return (
            <div className="eduInfoForm">
                <input
                    type="text"
                    name="schoolName"
                    placeholder="School name"
                    onChange={(e) => updateValues(e)}
                />
                <input 
                    type="text"
                    name="studyTitle"
                    placeholder="Title of study"
                    onChange={(e) => updateValues(e)}
                />
                <input
                    type="date"
                    name="studyDate"
                    placeholder="date completed"
                    onChange={(e) => updateValues(e)}
                />
            </div>
        )
    }
    else {
        return (
            <div className="eduInfoDisplay">
                <h1>{eduInfo.schoolName}</h1>
                <p>{eduInfo.studyTitle}</p>
                <p>{eduInfo.studyDate}</p>
            </div>
        )
    }
}