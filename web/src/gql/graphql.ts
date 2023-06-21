/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any; }
};

/** Autogenerated input type of CreateNote */
export type CreateNoteInput = {
  body: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
};

/** Autogenerated return type of CreateNote. */
export type CreateNotePayload = {
  __typename?: 'CreateNotePayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  errors: Array<Scalars['String']['output']>;
  note: Note;
};

export type Mutation = {
  __typename?: 'Mutation';
  createNote?: Maybe<CreateNotePayload>;
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};


export type MutationCreateNoteArgs = {
  input: CreateNoteInput;
};

export type Note = {
  __typename?: 'Note';
  body?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['ISO8601DateTime']['output'];
  id: Scalars['ID']['output'];
  subject?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['ISO8601DateTime']['output'];
};

export type Query = {
  __typename?: 'Query';
  note: Note;
  notes: Array<Note>;
  /** An example field added by the generator */
  testField: Scalars['String']['output'];
};


export type QueryNoteArgs = {
  id: Scalars['ID']['input'];
};
