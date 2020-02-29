let Web3 = require("web3");

let {abi, bytecode} = require('./01-compile')

// console.log(abi, bytecode)


let account = '0x6e7D7bcE417d34fEB011ED2058C1836324DA7B12'
let web3 = new Web3()
web3.setProvider("HTTP://127.0.0.1:7545")
// console.log(web3.eth.currentProvider)

let mycontract = new web3.eth.Contract(abi)

mycontract.deploy({
    data: bytecode,
    arguments: ["hello world"]
}).send({
    from: account,
    gas: 1500000,
    gasPrice: '1'
}).then(Instance => {
    console.log("addr :", Instance.options.address) // instance with the new contract address
});
