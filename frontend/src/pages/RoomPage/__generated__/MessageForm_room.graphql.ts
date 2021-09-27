/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MessageForm_room = {
    readonly id: string;
    readonly name: string;
    readonly " $refType": "MessageForm_room";
};
export type MessageForm_room$data = MessageForm_room;
export type MessageForm_room$key = {
    readonly " $data"?: MessageForm_room$data;
    readonly " $fragmentRefs": FragmentRefs<"MessageForm_room">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MessageForm_room",
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
    }
  ],
  "type": "BlockChatRoom",
  "abstractKey": null
};
(node as any).hash = '95097748ba900b67bcbb493c094b9322';
export default node;
