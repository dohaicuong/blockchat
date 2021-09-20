/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CounterDecreaseMutationVariables = {};
export type CounterDecreaseMutationResponse = {
    readonly decreaseCount: {
        readonly count: number;
    };
};
export type CounterDecreaseMutation = {
    readonly response: CounterDecreaseMutationResponse;
    readonly variables: CounterDecreaseMutationVariables;
};



/*
mutation CounterDecreaseMutation {
  decreaseCount {
    count
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "count",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CounterDecreaseMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Counter",
        "kind": "LinkedField",
        "name": "decreaseCount",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CounterDecreaseMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Counter",
        "kind": "LinkedField",
        "name": "decreaseCount",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e2a34c347124fc74ec7f324551b77a1e",
    "id": null,
    "metadata": {},
    "name": "CounterDecreaseMutation",
    "operationKind": "mutation",
    "text": "mutation CounterDecreaseMutation {\n  decreaseCount {\n    count\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e498d4a6cf6a3d3c9f1a64150cd9a4d7';
export default node;
