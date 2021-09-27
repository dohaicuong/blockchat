/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AddPeopleDialog_room = {
    readonly name: string;
    readonly " $refType": "AddPeopleDialog_room";
};
export type AddPeopleDialog_room$data = AddPeopleDialog_room;
export type AddPeopleDialog_room$key = {
    readonly " $data"?: AddPeopleDialog_room$data;
    readonly " $fragmentRefs": FragmentRefs<"AddPeopleDialog_room">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AddPeopleDialog_room",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "BlockChatRoom",
  "abstractKey": null
};
(node as any).hash = '0f9e858a79e16bf953dc65b55fb8b628';
export default node;
