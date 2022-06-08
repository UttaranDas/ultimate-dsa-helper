import React, { useState } from "react";
import Data from "./Data";

function AddQuestion(props) {
    const [question, setQuestion] = useState(Data[props.index]);

    function handleChange(event) {
        const { name, value } = event.target;

        setQuestion(prevQuestions => {
            return {
                ...prevQuestions,
                [name]: value
            };
        });
    }

    function submitQuestion(event) {
        // props.onAdd(topic);
        // event.preventDefault();
        // setQuestion({topic: ""});
    }

    return (
        <div>
            <form>
                <input name="question" onChange={handleChange} value={topic.topic} placeholder="Add new topic" />
                <button onClick={submitQuestion}>Add</button>
            </form>
        </div>
    );
}

export default AddQuestion;
