import Head from 'next/head'
import axios from 'axios'
import React, { useState } from 'react'

export default function Home() {
  const [ response, setResponse ] = useState()
  const createWallet = async () => {
    const response = await axios.get('http://localhost:8080/');
    setResponse(response.data);
  }

  return (
    <div>
      <button onClick={createWallet}>Create Wallet</button>
      {JSON.stringify(response)}
    </div>
  )
}
