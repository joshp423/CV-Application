import { useState } from "react";
import '../styles/eduStyle.css';

function EduInputs({ iteration, eduInfo, updateValues}) {
    return (
        <>
            <input
                type="text"
                name="schoolName"
                value={eduInfo[iteration].schoolName}
                placeholder="School Name"
                onChange={(e) => updateValues(e, iteration)}
            />
            <input 
                type="text"
                name="studyTitle"
                value={eduInfo[iteration].studyTitle}
                placeholder="Title of Study"
                onChange={(e) => updateValues(e, iteration)}
            />
            <input
                type="text"
                name="studyDate"
                value={eduInfo[iteration].studyDate}
                placeholder="Date Completed"
                onChange={(e) => updateValues(e, iteration)}
            />
        </>
    )
}
export default function EduInfo({ formState }){
    const [eduInfo, setEduInfo] = useState([
        {schoolName: "", studyTitle: "", studyDate: ""},
        {schoolName: "", studyTitle: "", studyDate: ""},
        {schoolName: "", studyTitle: "", studyDate: ""}
    ]);

    const [eduCounter, setEduCounter] = useState(1);

    function addEdu() {
        setEduCounter(eduCounter +1);
    }

    function removeEdu() {
        setEduCounter(eduCounter -1);
    }

    function updateValues(e, iteration) {

        const updated = [...eduInfo];
        updated[iteration] = {
            ...updated[iteration],
            [e.target.name]: e.target.value
        };
        setEduInfo(updated);
    }

    if (formState === 0) {
        return (
            <div className="eduInfoForm">
                <div className="eduInfoTitle">

                    <h2>Education</h2>
                    {!eduInfo || eduCounter < 3 && (
                        <button type="button" onClick={addEdu}>
                            Add Education - Max 3
                        </button>
                    )}

                    {eduCounter > 1 && (
                        <button type="button" onClick={removeEdu}>Remove Education</button>
                    )}

                </div>
                
                {eduCounter === 1 && (
                    <EduInputs
                        iteration = {0}
                        eduInfo = {eduInfo}
                        updateValues={updateValues}
                    />
                )}

                {eduCounter === 2 && (
                    <>
                        <div>
                            <EduInputs
                                iteration = {0}
                                eduInfo = {eduInfo}
                                updateValues={updateValues}
                            />
                        </div>
                        <div>
                            <EduInputs 
                                iteration = {1}
                                eduInfo = {eduInfo}
                                updateValues={updateValues}
                            />
                        </div>
                    </>
                )}

                {eduCounter === 3 && (
                    <>
                        <div>
                            <EduInputs
                                iteration = {0}
                                eduInfo = {eduInfo}
                                updateValues={updateValues}
                            />
                        </div>
                        <div>
                            <EduInputs 
                                iteration = {1}
                                eduInfo = {eduInfo}
                                updateValues={updateValues}
                            />
                        </div>
                        <div>
                            <EduInputs 
                                iteration = {2}
                                eduInfo = {eduInfo}
                                updateValues={updateValues}
                            />
                        </div>
                    </>
                )}
                
            </div>
        )
    }
    else {
        return (
            <div className="eduInfoDisplay">
                <div>
                    <h3>Education</h3>
                </div>
                <div className="eduInfoItems">
                    {eduCounter === 1 && (
                        <div>
                            <h1>{eduInfo[0].schoolName}</h1>
                            <p>{eduInfo[0].studyTitle + " - " + eduInfo[0].studyDate}</p>
                        </div>
                    )}

                    {eduCounter === 2 && (
                        <>
                            <div>
                                <h1>{eduInfo[0].schoolName}</h1>
                                <p>{eduInfo[0].studyTitle + " - " + eduInfo[0].studyDate}</p>
                            </div>
                            <div>
                                <h1>{eduInfo[1].schoolName}</h1>
                                <p>{eduInfo[1].studyTitle + " - " + eduInfo[1].studyDate}</p>
                            </div>
                        </>
                    )}

                    {eduCounter === 3 && (
                        <>
                            <div>
                                <h1>{eduInfo[0].schoolName}</h1>
                                <p>{eduInfo[0].studyTitle + " - " + eduInfo[0].studyDate}</p>
                            </div>
                            <div>
                                <h1>{eduInfo[1].schoolName}</h1>
                                <p>{eduInfo[1].studyTitle + " - " + eduInfo[1].studyDate}</p>
                            </div>
                            <div>
                                <h1>{eduInfo[2].schoolName}</h1>
                                <p>{eduInfo[2].studyTitle + " - " + eduInfo[2].studyDate}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        )
    }
}