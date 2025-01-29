import React, { useState } from 'react';

export const Grandmother = (props) => {
    const [gmMsg, setGmMsg] = useState("Hi, I am Grandmother");

    const sendMsgToParentAndChild = () => {
        props.dataFromGrandmother(gmMsg, "Hi, I am GM");
    };

    return (
        <div>
            <h1>Grandmother Component</h1>
            <h1>Data from Parent: {props.msg}</h1>
            <button onClick={sendMsgToParentAndChild}>Send to Parent and Child</button>
        </div>
    );
};
