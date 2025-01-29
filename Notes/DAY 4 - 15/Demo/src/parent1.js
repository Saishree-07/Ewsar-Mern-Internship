import React, { useState } from 'react';
import { Child1 } from './childcomp';
import { Grandmother } from './grandmother';

export const Parent1 = () => { 
    const [msg, setMsg] = useState("Hi from parent");
    const [childMsg, setChildMsg] = useState('__');
    const [grandmaMsg, setGrandmaMsg] = useState('__');

    const onChange = (message, message2) => {
        setChildMsg(message);
        setGrandmaMsg(message2);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <h1>{msg}</h1>
            <h2>{childMsg}</h2>
            <h2>{grandmaMsg}</h2>
            <Child1 msg={msg} dataFromChild={onChange} />
        </div>
    );
};
