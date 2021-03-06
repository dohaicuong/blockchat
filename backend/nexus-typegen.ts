/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./api/context/index"
import type { core, connectionPluginCore } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  MessageSendInput: { // input type
    message: string; // String!
    room: string; // String!
  }
  RoomAddUserInput: { // input type
    roomName: string; // String!
    userId: string; // ID!
  }
  RoomCreateInput: { // input type
    name: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Account: { // root type
    id: string; // ID!
  }
  BlockChatMessage: { // root type
    authorId: string; // String!
    message: string; // String!
    roomName: string; // String!
  }
  BlockChatMessageConnection: { // root type
    edges: NexusGenRootTypes['BlockChatMessageEdge'][]; // [BlockChatMessageEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BlockChatMessageEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['BlockChatMessage']; // BlockChatMessage!
  }
  BlockChatRoom: { // root type
    hostId: string; // ID!
    name: string; // String!
    participantIds: string[]; // [ID!]!
  }
  BlockChatRoomConnection: { // root type
    edges: NexusGenRootTypes['BlockChatRoomEdge'][]; // [BlockChatRoomEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BlockChatRoomEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['BlockChatRoom']; // BlockChatRoom!
  }
  Counter: { // root type
    count: number; // Int!
    id: string; // ID!
  }
  MessageAddedPayload: { // root type
    message: NexusGenRootTypes['BlockChatMessage']; // BlockChatMessage!
  }
  MessageSendPayload: { // root type
    message: NexusGenRootTypes['BlockChatMessage']; // BlockChatMessage!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Query: {};
  RoomCreatePayload: { // root type
    room: NexusGenRootTypes['BlockChatRoom']; // BlockChatRoom!
  }
  Subscription: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Account: { // field return type
    id: string; // ID!
  }
  BlockChatMessage: { // field return type
    authorId: string; // String!
    id: string; // ID!
    message: string; // String!
    roomName: string; // String!
  }
  BlockChatMessageConnection: { // field return type
    edges: NexusGenRootTypes['BlockChatMessageEdge'][]; // [BlockChatMessageEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BlockChatMessageEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BlockChatMessage']; // BlockChatMessage!
  }
  BlockChatRoom: { // field return type
    hostId: string; // ID!
    id: string; // ID!
    messages: NexusGenRootTypes['BlockChatMessageConnection'] | null; // BlockChatMessageConnection
    name: string; // String!
    participantIds: string[]; // [ID!]!
  }
  BlockChatRoomConnection: { // field return type
    edges: NexusGenRootTypes['BlockChatRoomEdge'][]; // [BlockChatRoomEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  BlockChatRoomEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['BlockChatRoom']; // BlockChatRoom!
  }
  Counter: { // field return type
    count: number; // Int!
    id: string; // ID!
  }
  MessageAddedPayload: { // field return type
    message: NexusGenRootTypes['BlockChatMessage']; // BlockChatMessage!
  }
  MessageSendPayload: { // field return type
    message: NexusGenRootTypes['BlockChatMessage']; // BlockChatMessage!
  }
  Mutation: { // field return type
    decreaseCount: NexusGenRootTypes['Counter']; // Counter!
    increaseCount: NexusGenRootTypes['Counter']; // Counter!
    messageSend: NexusGenRootTypes['MessageSendPayload']; // MessageSendPayload!
    resetCount: NexusGenRootTypes['Counter']; // Counter!
    roomAddUser: NexusGenRootTypes['BlockChatRoom']; // BlockChatRoom!
    roomCreate: NexusGenRootTypes['RoomCreatePayload']; // RoomCreatePayload!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Query: { // field return type
    accounts: NexusGenRootTypes['Account'][]; // [Account!]!
    getCount: NexusGenRootTypes['Counter']; // Counter!
    room: NexusGenRootTypes['BlockChatRoom']; // BlockChatRoom!
    rooms: NexusGenRootTypes['BlockChatRoomConnection'] | null; // BlockChatRoomConnection
  }
  RoomCreatePayload: { // field return type
    room: NexusGenRootTypes['BlockChatRoom']; // BlockChatRoom!
  }
  Subscription: { // field return type
    messageAdded: NexusGenRootTypes['MessageAddedPayload']; // MessageAddedPayload!
  }
}

export interface NexusGenFieldTypeNames {
  Account: { // field return type name
    id: 'ID'
  }
  BlockChatMessage: { // field return type name
    authorId: 'String'
    id: 'ID'
    message: 'String'
    roomName: 'String'
  }
  BlockChatMessageConnection: { // field return type name
    edges: 'BlockChatMessageEdge'
    pageInfo: 'PageInfo'
  }
  BlockChatMessageEdge: { // field return type name
    cursor: 'String'
    node: 'BlockChatMessage'
  }
  BlockChatRoom: { // field return type name
    hostId: 'ID'
    id: 'ID'
    messages: 'BlockChatMessageConnection'
    name: 'String'
    participantIds: 'ID'
  }
  BlockChatRoomConnection: { // field return type name
    edges: 'BlockChatRoomEdge'
    pageInfo: 'PageInfo'
  }
  BlockChatRoomEdge: { // field return type name
    cursor: 'String'
    node: 'BlockChatRoom'
  }
  Counter: { // field return type name
    count: 'Int'
    id: 'ID'
  }
  MessageAddedPayload: { // field return type name
    message: 'BlockChatMessage'
  }
  MessageSendPayload: { // field return type name
    message: 'BlockChatMessage'
  }
  Mutation: { // field return type name
    decreaseCount: 'Counter'
    increaseCount: 'Counter'
    messageSend: 'MessageSendPayload'
    resetCount: 'Counter'
    roomAddUser: 'BlockChatRoom'
    roomCreate: 'RoomCreatePayload'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Query: { // field return type name
    accounts: 'Account'
    getCount: 'Counter'
    room: 'BlockChatRoom'
    rooms: 'BlockChatRoomConnection'
  }
  RoomCreatePayload: { // field return type name
    room: 'BlockChatRoom'
  }
  Subscription: { // field return type name
    messageAdded: 'MessageAddedPayload'
  }
}

export interface NexusGenArgTypes {
  BlockChatRoom: {
    messages: { // args
      after?: string | null; // String
      first: number; // Int!
    }
  }
  Mutation: {
    messageSend: { // args
      input: NexusGenInputs['MessageSendInput']; // MessageSendInput!
    }
    roomAddUser: { // args
      input: NexusGenInputs['RoomAddUserInput']; // RoomAddUserInput!
    }
    roomCreate: { // args
      input: NexusGenInputs['RoomCreateInput']; // RoomCreateInput!
    }
  }
  Query: {
    room: { // args
      id: string; // ID!
    }
    rooms: { // args
      after?: string | null; // String
      first: number; // Int!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}