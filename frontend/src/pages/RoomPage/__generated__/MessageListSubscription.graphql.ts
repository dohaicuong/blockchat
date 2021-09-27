/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MessageListSubscriptionVariables = {
    connections: Array<string>;
};
export type MessageListSubscriptionResponse = {
    readonly messageAdded: {
        readonly message: {
            readonly id: string;
            readonly message: string;
            readonly authorId: string;
        };
    };
};
export type MessageListSubscription = {
    readonly response: MessageListSubscriptionResponse;
    readonly variables: MessageListSubscriptionVariables;
};



/*
subscription MessageListSubscription {
  messageAdded {
    message {
      id
      message
      authorId
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  }
],
v1 = {
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MessageListSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MessageAddedPayload",
        "kind": "LinkedField",
        "name": "messageAdded",
        "plural": false,
        "selections": [
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MessageListSubscription",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MessageAddedPayload",
        "kind": "LinkedField",
        "name": "messageAdded",
        "plural": false,
        "selections": [
          (v1/*: any*/),
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
    "cacheID": "6d9c95588fa623c6286749c266244fe3",
    "id": null,
    "metadata": {},
    "name": "MessageListSubscription",
    "operationKind": "subscription",
    "text": "subscription MessageListSubscription {\n  messageAdded {\n    message {\n      id\n      message\n      authorId\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fc32a5cebd389274b3f0e5f718e80f74';
export default node;
