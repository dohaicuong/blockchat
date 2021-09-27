// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract BlockChatMessage {
  struct Message {
    uint id;
    string message;
    address authorId;
    string roomName;
  }

  mapping(string => uint) public roomMessageCount;
  mapping(string => Message[]) public roomMessages;

  function getMessageCount(string memory _roomName) public view returns (uint) {
    return roomMessageCount[_roomName];
  }

  function findMessageByIndex(string memory _roomName, uint _index) public view returns (Message memory) {
    Message[] storage messages = roomMessages[_roomName];
    return messages[_index];
  }

  function findAllMessageByRoom(string memory _roomName) public view returns(Message[] memory) {
    Message[] storage messages = roomMessages[_roomName];
    return messages;
  }

  function sendMessage(string memory _roomName, string memory _message) public {
    uint newMessageCount = roomMessageCount[_roomName]++;
    Message memory newMessage = Message(newMessageCount, _message, msg.sender, _roomName);
    Message[] storage messages = roomMessages[_roomName];
    messages.push(newMessage);
  }
}
