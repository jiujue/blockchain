var fs = require("fs");
var solc = require('solc');

var fs = require('fs');
let src = fs.readFileSync("./contracts/SimpleStorage.sol",'utf-8')
// console.log(src)
var input = {
    language: 'Solidity',
    sources: {
        'test.sol': {
            // content: 'contract C { function f() public { } }'
            content: src
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};

var output = JSON.parse(solc.compile(JSON.stringify(input)));


teamJson = {
    'abi': {},
    'bytecode': ''
};

// output 为json对象，根据json结构保存对应的abi和bytecode
for (var contractName in output.contracts['test.sol']) {
    teamJson.abi = output.contracts['test.sol'][contractName].abi;
    teamJson.bytecode = output.contracts['test.sol'][contractName].evm.bytecode.object;
}

// console.log(teamJson);
module.exports = {
    abi : output.contracts['test.sol'][contractName].abi,
    bytecode : output.contracts['test.sol'][contractName].evm.bytecode.object,
}