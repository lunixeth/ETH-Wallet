const express = require('express');
const app = require('express')();
const cors = require('cors');
const ethers = require('ethers');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// Middleware
app.use(cors());
app.use(bodyParser());
app.use(express.json());

// Login Route
app.post('/login', async (req, res) => {
    const { mnemonic, privateKey } = req.body;
    console.log(mnemonic)
    const wallet = await ethers.Wallet.fromMnemonic(mnemonic);
    const token = jwt.sign({wallet}, 'xdxdxd');
    res.json(token);
})

// Route 
app.get('/', async (req, res) => {
    const wallet = await new ethers.Wallet.createRandom();
    const response = [
        wallet,
        wallet.address,
        wallet.privateKey,
        wallet.mnemonic
    ]
    res.send(response)
})

// Server 
app.listen(8080, () => {
    console.log('Server started. 🌏')
})