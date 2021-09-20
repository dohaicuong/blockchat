/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CounterQueryVariables = {};
export type CounterQueryResponse = {
    readonly getCount: {
        readonly count: number;
    };
};
export type CounterQuery = {
    readonly response: CounterQueryResponse;
    readonly variables: CounterQueryVariables;
};



/*
query CounterQuery {
  getCount {
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
    "name": "CounterQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Counter",
        "kind": "LinkedField",
        "name": "getCount",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CounterQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Counter",
        "kind": "LinkedField",
        "name": "getCount",
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
    "cacheID": "631c63ba813d4ca5f51fda60e7a5d816",
    "id": null,
    "metadata": {},
    "name": "CounterQuery",
    "operationKind": "query",
    "text": "query CounterQuery {\n  getCount {\n    count\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '535ddbcecbffd8496ebd49ba611077e2';
export default node;
