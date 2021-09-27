/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type RoomItem_room = {
    readonly id: string;
    readonly name: string;
    readonly participantIds: ReadonlyArray<string>;
    readonly " $fragmentRefs": FragmentRefs<"AddPeopleDialog_room">;
    readonly " $refType": "RoomItem_room";
};
export type RoomItem_room$data = RoomItem_room;
export type RoomItem_room$key = {
    readonly " $data"?: RoomItem_room$data;
    readonly " $fragmentRefs": FragmentRefs<"RoomItem_room">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RoomItem_room",
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "AddPeopleDialog_room"
    }
  ],
  "type": "BlockChatRoom",
  "abstractKey": null
};
(node as any).hash = '33bfb184d1f3a4af19f629470c09cf05';
export default node;
