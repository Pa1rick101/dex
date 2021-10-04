pragma solidity ^0.5.0;

//import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Token {
    // variables
    string public name = "Blue Ocean";
    string public symbol = "BLUE";
    uint256 public decimals = 18;
    uint256 public totalSupply;

    constructor() public {
        totalSupply = 1000000 * (10**decimals);
    }
}
