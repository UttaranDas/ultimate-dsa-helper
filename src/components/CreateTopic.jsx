import React, { useState } from "react";

function CreateTopic(props) {
    const [topic, setTopic] = useState({ topic: "", list:[]});

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
        setTopic({topic: "", list:[]});
    }

    return (
        <div>
            <form>
                <input name="topic" onChange={handleChange} value={topic.topic} placeholder="Add a new topic" />
                <button onClick={submitTopic}>Add</button>
            </form>
        </div>
    );
}

export default CreateTopic;
