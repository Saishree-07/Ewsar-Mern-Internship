import React, { useState } from 'react';
import { Grandmother } from './grandmother';

export const Child1 = (props) => { 
    const [childMsg, setChildMsg] = useState("hello from child");
    const [grandmaMsg, setGrandmaMsg] = useState('__');

    const onChange3 = (message3, message4) => {
        setGrandmaMsg(message3);
        props.dataFromChild(childMsg, message4);
    };

    const sendMsgToParent = () => {
        props.dataFromChild(childMsg);
    };

    return (
        <div>
            <h1>Child Component</h1>
            <h2>Data from Parent: {props.msg}</h2>
            <h2>Data from Grandmother: {grandmaMsg}</h2>
            <button onClick={sendMsgToParent}>Send to Parent</button>
            <Grandmother msg={grandmaMsg} dataFromGrandmother={onChange3} />
        </div>
    );
};
