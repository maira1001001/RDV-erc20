// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RDVCoin is ERC20 {

    address public admin;

    constructor(uint totalSupply) ERC20('RDV Life Coin','RDV') {
        _mint(msg.sender, totalSupply);
        admin = msg.sender;
    }

    function mint(address to, uint amount) external {
        require(msg.sender == admin, 'Only admin');
        _mint(to, amount);
    }

    function burn(uint amount) external {
        _burn(msg.sender, amount);
    }
}