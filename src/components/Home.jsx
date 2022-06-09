import React, { useState } from "react";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import CreateTopic from "./CreateTopic";
import BasicCard from "./Card";
import Data from "./Data";


function Home() {
    const [data, setData] = useState(Data);

    function addTopic(topic) {
        setData(prevData => [...prevData, topic]);
        Data.push(topic);
    }

    function deleteTopic(id) {
        setData(prevData => {
            return prevData.filter((topic, index) => index !== id);
        });
    }

    function editTopic() {

    }

    return (<>
        <CreateTopic onAdd={addTopic} />
        <div className="flex-container">
            {data.map((item, index) => <BasicCard
                topicName={item.topic}
                onEdit={editTopic}
                onDelete={deleteTopic}
                key={index}
                id={index}
            />)}
        </div>
    </>
    );
}

export default Home;