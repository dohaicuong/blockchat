/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoomCreateInput = {
    name: string;
};
export type CreateRoomDialogMutationVariables = {
    input: RoomCreateInput;
    connection: Array<string>;
};
export type CreateRoomDialogMutationResponse = {
    readonly roomCreate: {
        readonly room: {
            readonly " $fragmentRefs": FragmentRefs<"RoomItem_room">;
        };
    };
};
export type CreateRoomDialogMutation = {
    readonly response: CreateRoomDialogMutationResponse;
    readonly variables: CreateRoomDialogMutationVariables;
};



/*
mutation CreateRoomDialogMutation(
  $input: RoomCreateInput!
) {
  roomCreate(input: $input) {
    room {
      ...RoomItem_room
      id
    }
  }
}

fragment AddPeopleDialog_room on BlockChatRoom {
  name
}

fragment RoomItem_room on BlockChatRoom {
  id
  name
  participantIds
  ...AddPeopleDialog_room
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connection"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateRoomDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RoomCreatePayload",
        "kind": "LinkedField",
        "name": "roomCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlockChatRoom",
            "kind": "LinkedField",
            "name": "room",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "RoomItem_room"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CreateRoomDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RoomCreatePayload",
        "kind": "LinkedField",
        "name": "roomCreate",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlockChatRoom",
            "kind": "LinkedField",
            "name": "room",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "participantIds",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "room",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connection"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "BlockChatRoomEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "81ec61b8cb496ee9c2ca93dd2c38ab62",
    "id": null,
    "metadata": {},
    "name": "CreateRoomDialogMutation",
    "operationKind": "mutation",
    "text": "mutation CreateRoomDialogMutation(\n  $input: RoomCreateInput!\n) {\n  roomCreate(input: $input) {\n    room {\n      ...RoomItem_room\n      id\n    }\n  }\n}\n\nfragment AddPeopleDialog_room on BlockChatRoom {\n  name\n}\n\nfragment RoomItem_room on BlockChatRoom {\n  id\n  name\n  participantIds\n  ...AddPeopleDialog_room\n}\n"
  }
};
})();
(node as any).hash = '7382269edc2df43b35e228a3eedaebab';
export default node;
