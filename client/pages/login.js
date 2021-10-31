import React, { useState } from 'react'
import axios from 'axios'
import {useCookies} from "react-cookie"


const login = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['auth']);
    const [ response, setResponse ] = useState();
    const [mnemonic, setMnemonic ] = useState("test ");
    const handleLogin = async () => {
        const resp = await axios.post('http://localhost:8080/login', {mnemonic:mnemonic});
        setResponse(resp.data);
        setCookie('auth', resp.data)
    }
    return (
        <div>
            <input value={mnemonic} onChange={(e) => setMnemonic(e.target.value)}></input>
            <button onClick={handleLogin}>Handle</button>
            {response}
        </div>
    )
}

export default login
