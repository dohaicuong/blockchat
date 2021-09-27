// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract BlockChatRoom {
  struct Room {
    uint id;
    string name;
    address host;

    bool isExisted;
  }

  uint public roomCount;
  mapping(uint => Room) public rooms;

  mapping(string => address[]) public roomParticipants;

  struct RoomWithParticipants {
    Room room;
    address[] participants;
  }

  function create(string memory _name) public {
    RoomWithParticipants memory room = findByName(_name);
    if(!room.room.isExisted) {
      uint newRoomCount = roomCount++;

      Room memory newRoom = Room(newRoomCount, _name, msg.sender, true);
      rooms[newRoomCount] = newRoom;
      roomParticipants[_name].push(msg.sender);
    }
    else {
      revert('Room name is existed!');
    }
  }

  function find(uint _index) public view returns (RoomWithParticipants memory) {
    Room memory room = rooms[_index];
    return RoomWithParticipants(room, roomParticipants[room.name]);
  }

  function findByName(string memory _name) public view returns (RoomWithParticipants memory) {
    for (uint i = 0; i < roomCount; i++) {
      Room storage findingRoom = rooms[i];
      if(keccak256(bytes(findingRoom.name)) == keccak256(bytes(_name))) {
        return RoomWithParticipants(findingRoom, roomParticipants[findingRoom.name]);
      }
    }
    // revert();
  }

  function findMany() public view returns (RoomWithParticipants[] memory) {
    RoomWithParticipants[] memory roomList = new RoomWithParticipants[](roomCount);
    for (uint i = 0; i < roomCount; i++) {
      Room storage room = rooms[i];
      roomList[i] = RoomWithParticipants(room, roomParticipants[room.name]);
    }
    return roomList;
  }

  // Participant (on room name)
  

  function addPeople(string memory _roomName, address _userId) public {
    bool isUserInRoom = _checkUserInRoom(_roomName, _userId);
    if (!isUserInRoom) {
      roomParticipants[_roomName].push(_userId);
    }
  }

  function findManyParticipants(string memory _roomName) public view returns (address[] memory) {
    address[] storage users = roomParticipants[_roomName];
    uint userCount = users.length;

    address[] memory userIdList = new address[](userCount);
    for (uint i = 0; i < userCount; i++) {
      address userId = users[i];
      userIdList[i] = userId;
    }
    return userIdList;
  }

  function _checkUserInRoom(string memory _roomName, address _userId) public view returns (bool) {
    address[] storage users = roomParticipants[_roomName];
    bool isUserInRoom = false;
    for (uint i = 0; i < users.length; i++) {
      if (users[i] == _userId) {
        isUserInRoom = true;
      }
    }
    return isUserInRoom;
  }
}
