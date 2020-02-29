let myContractInstance = require('./03-instance')

// myContractInstance.methods.getMessage().call().then(res => {
//     console.log(res)
//     //                         setMessage
//     myContractInstance.methods.setMessage("jiujue 3 mmp").send({
//         from: "0x2d5730fFCCD08b5c6b5250E814Ac417EDa085ECe",
//         value: 0,
//     }).then(res => {
//         console.log('res', res)
//
//     })
// }
let go = async () => {
    try {
        let res1 = await myContractInstance.methods.getMessage().call()
        console.log(res1)
        let res2 = await myContractInstance.methods.setMessage(res1 + "L").send({
            from: "0x2d5730fFCCD08b5c6b5250E814Ac417EDa085ECe",
            value: 0,
        })
        console.log(res2)
        let res3 = await myContractInstance.methods.getMessage().call()
        console.log(res3)
    } catch (e) {
        console.log(e)
    }
}

go()