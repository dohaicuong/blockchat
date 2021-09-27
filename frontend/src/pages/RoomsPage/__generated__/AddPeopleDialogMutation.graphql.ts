/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoomAddUserInput = {
    roomName: string;
    userId: string;
};
export type AddPeopleDialogMutationVariables = {
    input: RoomAddUserInput;
};
export type AddPeopleDialogMutationResponse = {
    readonly roomAddUser: {
        readonly " $fragmentRefs": FragmentRefs<"RoomItem_room">;
    };
};
export type AddPeopleDialogMutation = {
    readonly response: AddPeopleDialogMutationResponse;
    readonly variables: AddPeopleDialogMutationVariables;
};



/*
mutation AddPeopleDialogMutation(
  $input: RoomAddUserInput!
) {
  roomAddUser(input: $input) {
    ...RoomItem_room
    id
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
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AddPeopleDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BlockChatRoom",
        "kind": "LinkedField",
        "name": "roomAddUser",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AddPeopleDialogMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "BlockChatRoom",
        "kind": "LinkedField",
        "name": "roomAddUser",
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
      }
    ]
  },
  "params": {
    "cacheID": "9cf290eb60a788e6df8bf5253eb75efe",
    "id": null,
    "metadata": {},
    "name": "AddPeopleDialogMutation",
    "operationKind": "mutation",
    "text": "mutation AddPeopleDialogMutation(\n  $input: RoomAddUserInput!\n) {\n  roomAddUser(input: $input) {\n    ...RoomItem_room\n    id\n  }\n}\n\nfragment AddPeopleDialog_room on BlockChatRoom {\n  name\n}\n\nfragment RoomItem_room on BlockChatRoom {\n  id\n  name\n  participantIds\n  ...AddPeopleDialog_room\n}\n"
  }
};
})();
(node as any).hash = 'bd5e47595a0d2b7b2afda81912fb291a';
export default node;
