/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CounterIncreaseMutationVariables = {};
export type CounterIncreaseMutationResponse = {
    readonly increaseCount: {
        readonly count: number;
    };
};
export type CounterIncreaseMutation = {
    readonly response: CounterIncreaseMutationResponse;
    readonly variables: CounterIncreaseMutationVariables;
};



/*
mutation CounterIncreaseMutation {
  increaseCount {
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
    "name": "CounterIncreaseMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Counter",
        "kind": "LinkedField",
        "name": "increaseCount",
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
    "name": "CounterIncreaseMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Counter",
        "kind": "LinkedField",
        "name": "increaseCount",
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
    "cacheID": "7c72dfb7044d7d84130bfa2777e2e060",
    "id": null,
    "metadata": {},
    "name": "CounterIncreaseMutation",
    "operationKind": "mutation",
    "text": "mutation CounterIncreaseMutation {\n  increaseCount {\n    count\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '7b17e7ffd12e854db4a69d938c22a1c8';
export default node;
