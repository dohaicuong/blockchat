/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LoginAccountQueryVariables = {};
export type LoginAccountQueryResponse = {
    readonly accounts: ReadonlyArray<{
        readonly id: string;
    }>;
};
export type LoginAccountQuery = {
    readonly response: LoginAccountQueryResponse;
    readonly variables: LoginAccountQueryVariables;
};



/*
query LoginAccountQuery {
  accounts {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Account",
    "kind": "LinkedField",
    "name": "accounts",
    "plural": true,
    "selections": [
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
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginAccountQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LoginAccountQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "03c9157c3bd3df5dd6352b7f2b97a5c4",
    "id": null,
    "metadata": {},
    "name": "LoginAccountQuery",
    "operationKind": "query",
    "text": "query LoginAccountQuery {\n  accounts {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f29c978c20320a5e3c3262d89ae0dc15';
export default node;
