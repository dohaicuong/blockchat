/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MessageSendInput = {
    message: string;
    room: string;
};
export type MessageFormMutationVariables = {
    input: MessageSendInput;
    connections: Array<string>;
};
export type MessageFormMutationResponse = {
    readonly messageSend: {
        readonly message: {
            readonly id: string;
            readonly message: string;
            readonly authorId: string;
        };
    };
};
export type MessageFormMutation = {
    readonly response: MessageFormMutationResponse;
    readonly variables: MessageFormMutationVariables;
};



/*
mutation MessageFormMutation(
  $input: MessageSendInput!
) {
  messageSend(input: $input) {
    message {
      id
      message
      authorId
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
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
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "BlockChatMessage",
  "kind": "LinkedField",
  "name": "message",
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
      "name": "message",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "authorId",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MessageFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MessageSendPayload",
        "kind": "LinkedField",
        "name": "messageSend",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "MessageFormMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "MessageSendPayload",
        "kind": "LinkedField",
        "name": "messageSend",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "message",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "BlockChatMessageEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "63231ed8c34129d6de7a1402ecd11e4a",
    "id": null,
    "metadata": {},
    "name": "MessageFormMutation",
    "operationKind": "mutation",
    "text": "mutation MessageFormMutation(\n  $input: MessageSendInput!\n) {\n  messageSend(input: $input) {\n    message {\n      id\n      message\n      authorId\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c6b53b969077795bc8a747d019cde4d4';
export default node;
