/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CounterResetMutationVariables = {};
export type CounterResetMutationResponse = {
    readonly resetCount: {
        readonly count: number;
    };
};
export type CounterResetMutation = {
    readonly response: CounterResetMutationResponse;
    readonly variables: CounterResetMutationVariables;
};



/*
mutation CounterResetMutation {
  resetCount {
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
    "name": "CounterResetMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Counter",
        "kind": "LinkedField",
        "name": "resetCount",
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
    "name": "CounterResetMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Counter",
        "kind": "LinkedField",
        "name": "resetCount",
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
    "cacheID": "21cfbbd16c6c99a2e640320733d4761b",
    "id": null,
    "metadata": {},
    "name": "CounterResetMutation",
    "operationKind": "mutation",
    "text": "mutation CounterResetMutation {\n  resetCount {\n    count\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b2fb50dd119930904ff030b29209ad88';
export default node;
