module.exports = {
        typeDefs: /* GraphQL */ `type AggregateChild {
  count: Int!
}

type AggregateParent {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Child {
  id: ID!
  name: String!
  pet_name: String!
  pet_experience: Int!
  parent: Parent
}

type ChildConnection {
  pageInfo: PageInfo!
  edges: [ChildEdge]!
  aggregate: AggregateChild!
}

input ChildCreateInput {
  name: String!
  pet_name: String!
  pet_experience: Int!
  parent: ParentCreateOneInput
}

type ChildEdge {
  node: Child!
  cursor: String!
}

enum ChildOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  pet_name_ASC
  pet_name_DESC
  pet_experience_ASC
  pet_experience_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ChildPreviousValues {
  id: ID!
  name: String!
  pet_name: String!
  pet_experience: Int!
}

type ChildSubscriptionPayload {
  mutation: MutationType!
  node: Child
  updatedFields: [String!]
  previousValues: ChildPreviousValues
}

input ChildSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ChildWhereInput
  AND: [ChildSubscriptionWhereInput!]
  OR: [ChildSubscriptionWhereInput!]
  NOT: [ChildSubscriptionWhereInput!]
}

input ChildUpdateInput {
  name: String
  pet_name: String
  pet_experience: Int
  parent: ParentUpdateOneInput
}

input ChildWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  pet_name: String
  pet_name_not: String
  pet_name_in: [String!]
  pet_name_not_in: [String!]
  pet_name_lt: String
  pet_name_lte: String
  pet_name_gt: String
  pet_name_gte: String
  pet_name_contains: String
  pet_name_not_contains: String
  pet_name_starts_with: String
  pet_name_not_starts_with: String
  pet_name_ends_with: String
  pet_name_not_ends_with: String
  pet_experience: Int
  pet_experience_not: Int
  pet_experience_in: [Int!]
  pet_experience_not_in: [Int!]
  pet_experience_lt: Int
  pet_experience_lte: Int
  pet_experience_gt: Int
  pet_experience_gte: Int
  parent: ParentWhereInput
  AND: [ChildWhereInput!]
  OR: [ChildWhereInput!]
  NOT: [ChildWhereInput!]
}

input ChildWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createChild(data: ChildCreateInput!): Child!
  updateChild(data: ChildUpdateInput!, where: ChildWhereUniqueInput!): Child
  updateManyChildren(data: ChildUpdateInput!, where: ChildWhereInput): BatchPayload!
  upsertChild(where: ChildWhereUniqueInput!, create: ChildCreateInput!, update: ChildUpdateInput!): Child!
  deleteChild(where: ChildWhereUniqueInput!): Child
  deleteManyChildren(where: ChildWhereInput): BatchPayload!
  createParent(data: ParentCreateInput!): Parent!
  updateParent(data: ParentUpdateInput!, where: ParentWhereUniqueInput!): Parent
  updateManyParents(data: ParentUpdateInput!, where: ParentWhereInput): BatchPayload!
  upsertParent(where: ParentWhereUniqueInput!, create: ParentCreateInput!, update: ParentUpdateInput!): Parent!
  deleteParent(where: ParentWhereUniqueInput!): Parent
  deleteManyParents(where: ParentWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Parent {
  id: ID!
  name: String!
  email: String!
  username: String!
  password: String!
  pin: String!
  img_url: String!
}

type ParentConnection {
  pageInfo: PageInfo!
  edges: [ParentEdge]!
  aggregate: AggregateParent!
}

input ParentCreateInput {
  name: String!
  email: String!
  username: String!
  password: String!
  pin: String!
  img_url: String!
}

input ParentCreateOneInput {
  create: ParentCreateInput
  connect: ParentWhereUniqueInput
}

type ParentEdge {
  node: Parent!
  cursor: String!
}

enum ParentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  pin_ASC
  pin_DESC
  img_url_ASC
  img_url_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ParentPreviousValues {
  id: ID!
  name: String!
  email: String!
  username: String!
  password: String!
  pin: String!
  img_url: String!
}

type ParentSubscriptionPayload {
  mutation: MutationType!
  node: Parent
  updatedFields: [String!]
  previousValues: ParentPreviousValues
}

input ParentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ParentWhereInput
  AND: [ParentSubscriptionWhereInput!]
  OR: [ParentSubscriptionWhereInput!]
  NOT: [ParentSubscriptionWhereInput!]
}

input ParentUpdateDataInput {
  name: String
  email: String
  username: String
  password: String
  pin: String
  img_url: String
}

input ParentUpdateInput {
  name: String
  email: String
  username: String
  password: String
  pin: String
  img_url: String
}

input ParentUpdateOneInput {
  create: ParentCreateInput
  update: ParentUpdateDataInput
  upsert: ParentUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ParentWhereUniqueInput
}

input ParentUpsertNestedInput {
  update: ParentUpdateDataInput!
  create: ParentCreateInput!
}

input ParentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  pin: String
  pin_not: String
  pin_in: [String!]
  pin_not_in: [String!]
  pin_lt: String
  pin_lte: String
  pin_gt: String
  pin_gte: String
  pin_contains: String
  pin_not_contains: String
  pin_starts_with: String
  pin_not_starts_with: String
  pin_ends_with: String
  pin_not_ends_with: String
  img_url: String
  img_url_not: String
  img_url_in: [String!]
  img_url_not_in: [String!]
  img_url_lt: String
  img_url_lte: String
  img_url_gt: String
  img_url_gte: String
  img_url_contains: String
  img_url_not_contains: String
  img_url_starts_with: String
  img_url_not_starts_with: String
  img_url_ends_with: String
  img_url_not_ends_with: String
  AND: [ParentWhereInput!]
  OR: [ParentWhereInput!]
  NOT: [ParentWhereInput!]
}

input ParentWhereUniqueInput {
  id: ID
  username: String
}

type Query {
  child(where: ChildWhereUniqueInput!): Child
  children(where: ChildWhereInput, orderBy: ChildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Child]!
  childrenConnection(where: ChildWhereInput, orderBy: ChildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChildConnection!
  parent(where: ParentWhereUniqueInput!): Parent
  parents(where: ParentWhereInput, orderBy: ParentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Parent]!
  parentsConnection(where: ParentWhereInput, orderBy: ParentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParentConnection!
  node(id: ID!): Node
}

type Subscription {
  child(where: ChildSubscriptionWhereInput): ChildSubscriptionPayload
  parent(where: ParentSubscriptionWhereInput): ParentSubscriptionPayload
}
`
      }
    