/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoomsPageQueryVariables = {};
export type RoomsPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"RoomList_query">;
};
export type RoomsPageQuery = {
    readonly response: RoomsPageQueryResponse;
    readonly variables: RoomsPageQueryVariables;
};



/*
query RoomsPageQuery {
  ...RoomList_query
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

fragment RoomList_query on Query {
  rooms(first: 10) {
    edges {
      node {
        id
        ...RoomItem_room
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RoomsPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "RoomList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RoomsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "BlockChatRoomConnection",
        "kind": "LinkedField",
        "name": "rooms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "BlockChatRoomEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "BlockChatRoom",
                "kind": "LinkedField",
                "name": "node",
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "rooms(first:10)"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RoomList_query_rooms",
        "kind": "LinkedHandle",
        "name": "rooms"
      }
    ]
  },
  "params": {
    "cacheID": "e2cc0eddb030e66867393888d4c4f761",
    "id": null,
    "metadata": {},
    "name": "RoomsPageQuery",
    "operationKind": "query",
    "text": "query RoomsPageQuery {\n  ...RoomList_query\n}\n\nfragment AddPeopleDialog_room on BlockChatRoom {\n  name\n}\n\nfragment RoomItem_room on BlockChatRoom {\n  id\n  name\n  participantIds\n  ...AddPeopleDialog_room\n}\n\nfragment RoomList_query on Query {\n  rooms(first: 10) {\n    edges {\n      node {\n        id\n        ...RoomItem_room\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3cb8ed80acd51a3a2e43aba2cc91dd0f';
export default node;
