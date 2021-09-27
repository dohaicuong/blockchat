/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoomListPaginationQueryVariables = {
    count?: number | null;
    cursor?: string | null;
};
export type RoomListPaginationQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"RoomList_query">;
};
export type RoomListPaginationQuery = {
    readonly response: RoomListPaginationQueryResponse;
    readonly variables: RoomListPaginationQueryVariables;
};



/*
query RoomListPaginationQuery(
  $count: Int = 10
  $cursor: String
) {
  ...RoomList_query_1G22uz
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

fragment RoomList_query_1G22uz on Query {
  rooms(first: $count, after: $cursor) {
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
    "defaultValue": 10,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RoomListPaginationQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count"
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor"
          }
        ],
        "kind": "FragmentSpread",
        "name": "RoomList_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RoomListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "RoomList_query_rooms",
        "kind": "LinkedHandle",
        "name": "rooms"
      }
    ]
  },
  "params": {
    "cacheID": "f07c85bc521ce0905050e947da2e9651",
    "id": null,
    "metadata": {},
    "name": "RoomListPaginationQuery",
    "operationKind": "query",
    "text": "query RoomListPaginationQuery(\n  $count: Int = 10\n  $cursor: String\n) {\n  ...RoomList_query_1G22uz\n}\n\nfragment AddPeopleDialog_room on BlockChatRoom {\n  name\n}\n\nfragment RoomItem_room on BlockChatRoom {\n  id\n  name\n  participantIds\n  ...AddPeopleDialog_room\n}\n\nfragment RoomList_query_1G22uz on Query {\n  rooms(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...RoomItem_room\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b5cb9f11cca22992bcec99106774d9f3';
export default node;
