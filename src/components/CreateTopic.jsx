import React, { useState } from "react";


function CreateTopic(props) {
    const [topic, setTopic] = useState({ topic: "" });

    function handleChange(event) {
        const { name, value } = event.target;

        setTopic(prevTopic => {
            return {
                ...prevTopic,
                [name]: value
            };
        });
    }

    function submitTopic(event) {
        props.onAdd(topic);
        event.preventDefault();
        setTopic({topic: ""});
    }

    return (
        <div>
            <form>
                <input name="topic" onChange={handleChange} value={topic.topic} placeholder="Add new topic" />
                <button onClick={submitTopic}>Add</button>
            </form>
        </div>
    );
}

export default CreateTopic;
