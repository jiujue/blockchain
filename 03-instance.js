let Web3 = require("web3");
web3 = new Web3()
let {abi, bytecode} = require('./01-compile')

web3.setProvider("HTTP://127.0.0.1:7545")
instance = new web3.eth.Contract(abi,"0x117582De7203137591400bE34Ed14845291e6c26")
module.exports = instance
// mycontract.methods.getMessage().call({from:"0x2d5730fFCCD08b5c6b5250E814Ac417EDa085ECe"})
// mycontract.methods.getMessage().send({from:"0x2d5730fFCCD08b5c6b5250E814Ac417EDa085ECe"}).then(res=>{
//     console.log(res)
// })



