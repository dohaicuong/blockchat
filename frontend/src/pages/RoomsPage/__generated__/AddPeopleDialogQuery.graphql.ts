/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AddPeopleDialogQueryVariables = {};
export type AddPeopleDialogQueryResponse = {
    readonly accounts: ReadonlyArray<{
        readonly id: string;
    }>;
};
export type AddPeopleDialogQuery = {
    readonly response: AddPeopleDialogQueryResponse;
    readonly variables: AddPeopleDialogQueryVariables;
};



/*
query AddPeopleDialogQuery {
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
    "name": "AddPeopleDialogQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AddPeopleDialogQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "8ddcf3703c04358aed8469491b87e032",
    "id": null,
    "metadata": {},
    "name": "AddPeopleDialogQuery",
    "operationKind": "query",
    "text": "query AddPeopleDialogQuery {\n  accounts {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bb9df33e393fe8080eb209f7d7b12d74';
export default node;
