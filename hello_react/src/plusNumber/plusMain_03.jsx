import React, { useState} from 'react';

const plusMain_03 = () => {
    
        const [message, setMessage] = useState("");
        const onInput = () => setMessage("어서오세요");
        const onOutput = () => setMessage("안녕히 가세요");
        
        return 
        <div>
            <button onClick={onInput}>입장</button>
            <button onClick={onOutput}>퇴장</button>
            <h1>${message}</h1>
        </div>
    
};

export default plusMain_03;