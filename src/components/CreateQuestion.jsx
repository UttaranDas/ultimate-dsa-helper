import React, { useState } from "react";

function CreateQuestion(props) {
    const [question, setQuestion] = useState({question: "",
        link: "https://www.youtube.com/watch?v=iik25wqIuFo",
        status: "done",
        note: "hehe"});

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
        props.onAdd(question);
        event.preventDefault(); 
        setQuestion({question: "",
            link: "https://www.youtube.com/watch?v=iik25wqIuFo",
            status: "done",
            note: "hehe"});
    }

    return (
        <div>
            <form>
                <input name="question" onChange={handleChange} value={question.question} placeholder="Add a new question" />
                <button onClick={submitQuestion}>Add</button>
            </form>
        </div>
    );
}

export default CreateQuestion;
