// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.15;

contract SimpleProgram {
    uint public value;

    function get_value() external view returns (uint) {
        return value;
    }

    function set_value(uint _value) external {
        value = _value;
    }
}
