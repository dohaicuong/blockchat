// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Counter {
  address public owner = msg.sender;
  int32 public counter = 0;

  modifier onlyOwner() {
    require(
      msg.sender == owner,
      "Only owner can do this"
    );
    _;
  }

  function read() public view returns (int32) {
    return (counter);
  }

  function increase() public onlyOwner {
    counter += 1;
  }

  function decrease() public onlyOwner {
    counter -= 1;
  }

  function reset() public onlyOwner {
    counter = 0;
  }
}
