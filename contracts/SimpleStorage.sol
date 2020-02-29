pragma solidity ^0.6.3;

contract SimpleStorage{

    string _message;

    constructor(string memory src)public{
        _message = src;
    }

    function setMessage(string memory message) public {
        _message = message;
    }
    function getMessage()public view returns(string memory){
        return _message;
    }
}