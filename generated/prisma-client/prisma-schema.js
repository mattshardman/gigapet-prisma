module.exports = {
        typeDefs: /* GraphQL */ `type AggregateChild {
  count: Int!
}

type AggregateFoodEntry {
  count: Int!
}

type AggregateParent {
  count: Int!
}

type AggregatePet {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Child {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  pet_id: Pet
  pet_name: String!
  pet_experience: Int!
  parent: Parent
  foodEntries(where: FoodEntryWhereInput, orderBy: FoodEntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FoodEntry!]
}

type ChildConnection {
  pageInfo: PageInfo!
  edges: [ChildEdge]!
  aggregate: AggregateChild!
}

input ChildCreateInput {
  name: String!
  pet_id: PetCreateOneInput
  pet_name: String!
  pet_experience: Int!
  parent: ParentCreateOneWithoutChildrenInput
  foodEntries: FoodEntryCreateManyWithoutChildInput
}

input ChildCreateManyWithoutParentInput {
  create: [ChildCreateWithoutParentInput!]
  connect: [ChildWhereUniqueInput!]
}

input ChildCreateOneWithoutFoodEntriesInput {
  create: ChildCreateWithoutFoodEntriesInput
  connect: ChildWhereUniqueInput
}

input ChildCreateWithoutFoodEntriesInput {
  name: String!
  pet_id: PetCreateOneInput
  pet_name: String!
  pet_experience: Int!
  parent: ParentCreateOneWithoutChildrenInput
}

input ChildCreateWithoutParentInput {
  name: String!
  pet_id: PetCreateOneInput
  pet_name: String!
  pet_experience: Int!
  foodEntries: FoodEntryCreateManyWithoutChildInput
}

type ChildEdge {
  node: Child!
  cursor: String!
}

enum ChildOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  pet_name_ASC
  pet_name_DESC
  pet_experience_ASC
  pet_experience_DESC
}

type ChildPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  pet_id: PetUpdateOneInput
  pet_name: String
  pet_experience: Int
  parent: ParentUpdateOneWithoutChildrenInput
  foodEntries: FoodEntryUpdateManyWithoutChildInput
}

input ChildUpdateManyWithoutParentInput {
  create: [ChildCreateWithoutParentInput!]
  delete: [ChildWhereUniqueInput!]
  connect: [ChildWhereUniqueInput!]
  disconnect: [ChildWhereUniqueInput!]
  update: [ChildUpdateWithWhereUniqueWithoutParentInput!]
  upsert: [ChildUpsertWithWhereUniqueWithoutParentInput!]
}

input ChildUpdateOneWithoutFoodEntriesInput {
  create: ChildCreateWithoutFoodEntriesInput
  update: ChildUpdateWithoutFoodEntriesDataInput
  upsert: ChildUpsertWithoutFoodEntriesInput
  delete: Boolean
  disconnect: Boolean
  connect: ChildWhereUniqueInput
}

input ChildUpdateWithoutFoodEntriesDataInput {
  name: String
  pet_id: PetUpdateOneInput
  pet_name: String
  pet_experience: Int
  parent: ParentUpdateOneWithoutChildrenInput
}

input ChildUpdateWithoutParentDataInput {
  name: String
  pet_id: PetUpdateOneInput
  pet_name: String
  pet_experience: Int
  foodEntries: FoodEntryUpdateManyWithoutChildInput
}

input ChildUpdateWithWhereUniqueWithoutParentInput {
  where: ChildWhereUniqueInput!
  data: ChildUpdateWithoutParentDataInput!
}

input ChildUpsertWithoutFoodEntriesInput {
  update: ChildUpdateWithoutFoodEntriesDataInput!
  create: ChildCreateWithoutFoodEntriesInput!
}

input ChildUpsertWithWhereUniqueWithoutParentInput {
  where: ChildWhereUniqueInput!
  update: ChildUpdateWithoutParentDataInput!
  create: ChildCreateWithoutParentInput!
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  pet_id: PetWhereInput
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
  foodEntries_every: FoodEntryWhereInput
  foodEntries_some: FoodEntryWhereInput
  foodEntries_none: FoodEntryWhereInput
  AND: [ChildWhereInput!]
  OR: [ChildWhereInput!]
  NOT: [ChildWhereInput!]
}

input ChildWhereUniqueInput {
  id: ID
}

scalar DateTime

type FoodEntry {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  meal: String!
  category: String!
  date_added: String!
  date_updated: String!
  child: Child
}

type FoodEntryConnection {
  pageInfo: PageInfo!
  edges: [FoodEntryEdge]!
  aggregate: AggregateFoodEntry!
}

input FoodEntryCreateInput {
  name: String!
  meal: String!
  category: String!
  date_added: String!
  date_updated: String!
  child: ChildCreateOneWithoutFoodEntriesInput
}

input FoodEntryCreateManyWithoutChildInput {
  create: [FoodEntryCreateWithoutChildInput!]
  connect: [FoodEntryWhereUniqueInput!]
}

input FoodEntryCreateWithoutChildInput {
  name: String!
  meal: String!
  category: String!
  date_added: String!
  date_updated: String!
}

type FoodEntryEdge {
  node: FoodEntry!
  cursor: String!
}

enum FoodEntryOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  meal_ASC
  meal_DESC
  category_ASC
  category_DESC
  date_added_ASC
  date_added_DESC
  date_updated_ASC
  date_updated_DESC
}

type FoodEntryPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  meal: String!
  category: String!
  date_added: String!
  date_updated: String!
}

type FoodEntrySubscriptionPayload {
  mutation: MutationType!
  node: FoodEntry
  updatedFields: [String!]
  previousValues: FoodEntryPreviousValues
}

input FoodEntrySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: FoodEntryWhereInput
  AND: [FoodEntrySubscriptionWhereInput!]
  OR: [FoodEntrySubscriptionWhereInput!]
  NOT: [FoodEntrySubscriptionWhereInput!]
}

input FoodEntryUpdateInput {
  name: String
  meal: String
  category: String
  date_added: String
  date_updated: String
  child: ChildUpdateOneWithoutFoodEntriesInput
}

input FoodEntryUpdateManyWithoutChildInput {
  create: [FoodEntryCreateWithoutChildInput!]
  delete: [FoodEntryWhereUniqueInput!]
  connect: [FoodEntryWhereUniqueInput!]
  disconnect: [FoodEntryWhereUniqueInput!]
  update: [FoodEntryUpdateWithWhereUniqueWithoutChildInput!]
  upsert: [FoodEntryUpsertWithWhereUniqueWithoutChildInput!]
}

input FoodEntryUpdateWithoutChildDataInput {
  name: String
  meal: String
  category: String
  date_added: String
  date_updated: String
}

input FoodEntryUpdateWithWhereUniqueWithoutChildInput {
  where: FoodEntryWhereUniqueInput!
  data: FoodEntryUpdateWithoutChildDataInput!
}

input FoodEntryUpsertWithWhereUniqueWithoutChildInput {
  where: FoodEntryWhereUniqueInput!
  update: FoodEntryUpdateWithoutChildDataInput!
  create: FoodEntryCreateWithoutChildInput!
}

input FoodEntryWhereInput {
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  meal: String
  meal_not: String
  meal_in: [String!]
  meal_not_in: [String!]
  meal_lt: String
  meal_lte: String
  meal_gt: String
  meal_gte: String
  meal_contains: String
  meal_not_contains: String
  meal_starts_with: String
  meal_not_starts_with: String
  meal_ends_with: String
  meal_not_ends_with: String
  category: String
  category_not: String
  category_in: [String!]
  category_not_in: [String!]
  category_lt: String
  category_lte: String
  category_gt: String
  category_gte: String
  category_contains: String
  category_not_contains: String
  category_starts_with: String
  category_not_starts_with: String
  category_ends_with: String
  category_not_ends_with: String
  date_added: String
  date_added_not: String
  date_added_in: [String!]
  date_added_not_in: [String!]
  date_added_lt: String
  date_added_lte: String
  date_added_gt: String
  date_added_gte: String
  date_added_contains: String
  date_added_not_contains: String
  date_added_starts_with: String
  date_added_not_starts_with: String
  date_added_ends_with: String
  date_added_not_ends_with: String
  date_updated: String
  date_updated_not: String
  date_updated_in: [String!]
  date_updated_not_in: [String!]
  date_updated_lt: String
  date_updated_lte: String
  date_updated_gt: String
  date_updated_gte: String
  date_updated_contains: String
  date_updated_not_contains: String
  date_updated_starts_with: String
  date_updated_not_starts_with: String
  date_updated_ends_with: String
  date_updated_not_ends_with: String
  child: ChildWhereInput
  AND: [FoodEntryWhereInput!]
  OR: [FoodEntryWhereInput!]
  NOT: [FoodEntryWhereInput!]
}

input FoodEntryWhereUniqueInput {
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
  createFoodEntry(data: FoodEntryCreateInput!): FoodEntry!
  updateFoodEntry(data: FoodEntryUpdateInput!, where: FoodEntryWhereUniqueInput!): FoodEntry
  updateManyFoodEntries(data: FoodEntryUpdateInput!, where: FoodEntryWhereInput): BatchPayload!
  upsertFoodEntry(where: FoodEntryWhereUniqueInput!, create: FoodEntryCreateInput!, update: FoodEntryUpdateInput!): FoodEntry!
  deleteFoodEntry(where: FoodEntryWhereUniqueInput!): FoodEntry
  deleteManyFoodEntries(where: FoodEntryWhereInput): BatchPayload!
  createParent(data: ParentCreateInput!): Parent!
  updateParent(data: ParentUpdateInput!, where: ParentWhereUniqueInput!): Parent
  updateManyParents(data: ParentUpdateInput!, where: ParentWhereInput): BatchPayload!
  upsertParent(where: ParentWhereUniqueInput!, create: ParentCreateInput!, update: ParentUpdateInput!): Parent!
  deleteParent(where: ParentWhereUniqueInput!): Parent
  deleteManyParents(where: ParentWhereInput): BatchPayload!
  createPet(data: PetCreateInput!): Pet!
  updatePet(data: PetUpdateInput!, where: PetWhereUniqueInput!): Pet
  updateManyPets(data: PetUpdateInput!, where: PetWhereInput): BatchPayload!
  upsertPet(where: PetWhereUniqueInput!, create: PetCreateInput!, update: PetUpdateInput!): Pet!
  deletePet(where: PetWhereUniqueInput!): Pet
  deleteManyPets(where: PetWhereInput): BatchPayload!
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
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String!
  username: String!
  password: String!
  pin: String!
  img_url: String!
  children(where: ChildWhereInput, orderBy: ChildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Child!]
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
  children: ChildCreateManyWithoutParentInput
}

input ParentCreateOneWithoutChildrenInput {
  create: ParentCreateWithoutChildrenInput
  connect: ParentWhereUniqueInput
}

input ParentCreateWithoutChildrenInput {
  name: String!
  email: String!
  username: String!
  password: String!
  pin: String!
  img_url: String!
}

type ParentEdge {
  node: Parent!
  cursor: String!
}

enum ParentOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
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
}

type ParentPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
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

input ParentUpdateInput {
  name: String
  email: String
  username: String
  password: String
  pin: String
  img_url: String
  children: ChildUpdateManyWithoutParentInput
}

input ParentUpdateOneWithoutChildrenInput {
  create: ParentCreateWithoutChildrenInput
  update: ParentUpdateWithoutChildrenDataInput
  upsert: ParentUpsertWithoutChildrenInput
  delete: Boolean
  disconnect: Boolean
  connect: ParentWhereUniqueInput
}

input ParentUpdateWithoutChildrenDataInput {
  name: String
  email: String
  username: String
  password: String
  pin: String
  img_url: String
}

input ParentUpsertWithoutChildrenInput {
  update: ParentUpdateWithoutChildrenDataInput!
  create: ParentCreateWithoutChildrenInput!
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
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
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
  children_every: ChildWhereInput
  children_some: ChildWhereInput
  children_none: ChildWhereInput
  AND: [ParentWhereInput!]
  OR: [ParentWhereInput!]
  NOT: [ParentWhereInput!]
}

input ParentWhereUniqueInput {
  id: ID
  username: String
}

type Pet {
  id: ID!
  species: String!
  description: String!
  happy: String!
  ok: String!
  sad: String!
  sick: String!
  eating: String!
}

type PetConnection {
  pageInfo: PageInfo!
  edges: [PetEdge]!
  aggregate: AggregatePet!
}

input PetCreateInput {
  species: String!
  description: String!
  happy: String!
  ok: String!
  sad: String!
  sick: String!
  eating: String!
}

input PetCreateOneInput {
  create: PetCreateInput
  connect: PetWhereUniqueInput
}

type PetEdge {
  node: Pet!
  cursor: String!
}

enum PetOrderByInput {
  id_ASC
  id_DESC
  species_ASC
  species_DESC
  description_ASC
  description_DESC
  happy_ASC
  happy_DESC
  ok_ASC
  ok_DESC
  sad_ASC
  sad_DESC
  sick_ASC
  sick_DESC
  eating_ASC
  eating_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PetPreviousValues {
  id: ID!
  species: String!
  description: String!
  happy: String!
  ok: String!
  sad: String!
  sick: String!
  eating: String!
}

type PetSubscriptionPayload {
  mutation: MutationType!
  node: Pet
  updatedFields: [String!]
  previousValues: PetPreviousValues
}

input PetSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PetWhereInput
  AND: [PetSubscriptionWhereInput!]
  OR: [PetSubscriptionWhereInput!]
  NOT: [PetSubscriptionWhereInput!]
}

input PetUpdateDataInput {
  species: String
  description: String
  happy: String
  ok: String
  sad: String
  sick: String
  eating: String
}

input PetUpdateInput {
  species: String
  description: String
  happy: String
  ok: String
  sad: String
  sick: String
  eating: String
}

input PetUpdateOneInput {
  create: PetCreateInput
  update: PetUpdateDataInput
  upsert: PetUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: PetWhereUniqueInput
}

input PetUpsertNestedInput {
  update: PetUpdateDataInput!
  create: PetCreateInput!
}

input PetWhereInput {
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
  species: String
  species_not: String
  species_in: [String!]
  species_not_in: [String!]
  species_lt: String
  species_lte: String
  species_gt: String
  species_gte: String
  species_contains: String
  species_not_contains: String
  species_starts_with: String
  species_not_starts_with: String
  species_ends_with: String
  species_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  happy: String
  happy_not: String
  happy_in: [String!]
  happy_not_in: [String!]
  happy_lt: String
  happy_lte: String
  happy_gt: String
  happy_gte: String
  happy_contains: String
  happy_not_contains: String
  happy_starts_with: String
  happy_not_starts_with: String
  happy_ends_with: String
  happy_not_ends_with: String
  ok: String
  ok_not: String
  ok_in: [String!]
  ok_not_in: [String!]
  ok_lt: String
  ok_lte: String
  ok_gt: String
  ok_gte: String
  ok_contains: String
  ok_not_contains: String
  ok_starts_with: String
  ok_not_starts_with: String
  ok_ends_with: String
  ok_not_ends_with: String
  sad: String
  sad_not: String
  sad_in: [String!]
  sad_not_in: [String!]
  sad_lt: String
  sad_lte: String
  sad_gt: String
  sad_gte: String
  sad_contains: String
  sad_not_contains: String
  sad_starts_with: String
  sad_not_starts_with: String
  sad_ends_with: String
  sad_not_ends_with: String
  sick: String
  sick_not: String
  sick_in: [String!]
  sick_not_in: [String!]
  sick_lt: String
  sick_lte: String
  sick_gt: String
  sick_gte: String
  sick_contains: String
  sick_not_contains: String
  sick_starts_with: String
  sick_not_starts_with: String
  sick_ends_with: String
  sick_not_ends_with: String
  eating: String
  eating_not: String
  eating_in: [String!]
  eating_not_in: [String!]
  eating_lt: String
  eating_lte: String
  eating_gt: String
  eating_gte: String
  eating_contains: String
  eating_not_contains: String
  eating_starts_with: String
  eating_not_starts_with: String
  eating_ends_with: String
  eating_not_ends_with: String
  AND: [PetWhereInput!]
  OR: [PetWhereInput!]
  NOT: [PetWhereInput!]
}

input PetWhereUniqueInput {
  id: ID
  happy: String
}

type Query {
  child(where: ChildWhereUniqueInput!): Child
  children(where: ChildWhereInput, orderBy: ChildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Child]!
  childrenConnection(where: ChildWhereInput, orderBy: ChildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ChildConnection!
  foodEntry(where: FoodEntryWhereUniqueInput!): FoodEntry
  foodEntries(where: FoodEntryWhereInput, orderBy: FoodEntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [FoodEntry]!
  foodEntriesConnection(where: FoodEntryWhereInput, orderBy: FoodEntryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FoodEntryConnection!
  parent(where: ParentWhereUniqueInput!): Parent
  parents(where: ParentWhereInput, orderBy: ParentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Parent]!
  parentsConnection(where: ParentWhereInput, orderBy: ParentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParentConnection!
  pet(where: PetWhereUniqueInput!): Pet
  pets(where: PetWhereInput, orderBy: PetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pet]!
  petsConnection(where: PetWhereInput, orderBy: PetOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PetConnection!
  node(id: ID!): Node
}

type Subscription {
  child(where: ChildSubscriptionWhereInput): ChildSubscriptionPayload
  foodEntry(where: FoodEntrySubscriptionWhereInput): FoodEntrySubscriptionPayload
  parent(where: ParentSubscriptionWhereInput): ParentSubscriptionPayload
  pet(where: PetSubscriptionWhereInput): PetSubscriptionPayload
}
`
      }
    