
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WorkspaceUser
 * 
 */
export type WorkspaceUser = $Result.DefaultSelection<Prisma.$WorkspaceUserPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Pipeline
 * 
 */
export type Pipeline = $Result.DefaultSelection<Prisma.$PipelinePayload>
/**
 * Model Stage
 * 
 */
export type Stage = $Result.DefaultSelection<Prisma.$StagePayload>
/**
 * Model Deal
 * 
 */
export type Deal = $Result.DefaultSelection<Prisma.$DealPayload>
/**
 * Model DealContact
 * 
 */
export type DealContact = $Result.DefaultSelection<Prisma.$DealContactPayload>
/**
 * Model Activity
 * 
 */
export type Activity = $Result.DefaultSelection<Prisma.$ActivityPayload>
/**
 * Model Note
 * 
 */
export type Note = $Result.DefaultSelection<Prisma.$NotePayload>
/**
 * Model WebhookEndpoint
 * 
 */
export type WebhookEndpoint = $Result.DefaultSelection<Prisma.$WebhookEndpointPayload>
/**
 * Model ApiKey
 * 
 */
export type ApiKey = $Result.DefaultSelection<Prisma.$ApiKeyPayload>
/**
 * Model EventLog
 * 
 */
export type EventLog = $Result.DefaultSelection<Prisma.$EventLogPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Workspaces
 * const workspaces = await prisma.workspace.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Workspaces
   * const workspaces = await prisma.workspace.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.workspaceUser`: Exposes CRUD operations for the **WorkspaceUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceUsers
    * const workspaceUsers = await prisma.workspaceUser.findMany()
    * ```
    */
  get workspaceUser(): Prisma.WorkspaceUserDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs>;

  /**
   * `prisma.pipeline`: Exposes CRUD operations for the **Pipeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pipelines
    * const pipelines = await prisma.pipeline.findMany()
    * ```
    */
  get pipeline(): Prisma.PipelineDelegate<ExtArgs>;

  /**
   * `prisma.stage`: Exposes CRUD operations for the **Stage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stages
    * const stages = await prisma.stage.findMany()
    * ```
    */
  get stage(): Prisma.StageDelegate<ExtArgs>;

  /**
   * `prisma.deal`: Exposes CRUD operations for the **Deal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deals
    * const deals = await prisma.deal.findMany()
    * ```
    */
  get deal(): Prisma.DealDelegate<ExtArgs>;

  /**
   * `prisma.dealContact`: Exposes CRUD operations for the **DealContact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DealContacts
    * const dealContacts = await prisma.dealContact.findMany()
    * ```
    */
  get dealContact(): Prisma.DealContactDelegate<ExtArgs>;

  /**
   * `prisma.activity`: Exposes CRUD operations for the **Activity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Activities
    * const activities = await prisma.activity.findMany()
    * ```
    */
  get activity(): Prisma.ActivityDelegate<ExtArgs>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **Note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.NoteDelegate<ExtArgs>;

  /**
   * `prisma.webhookEndpoint`: Exposes CRUD operations for the **WebhookEndpoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebhookEndpoints
    * const webhookEndpoints = await prisma.webhookEndpoint.findMany()
    * ```
    */
  get webhookEndpoint(): Prisma.WebhookEndpointDelegate<ExtArgs>;

  /**
   * `prisma.apiKey`: Exposes CRUD operations for the **ApiKey** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ApiKeys
    * const apiKeys = await prisma.apiKey.findMany()
    * ```
    */
  get apiKey(): Prisma.ApiKeyDelegate<ExtArgs>;

  /**
   * `prisma.eventLog`: Exposes CRUD operations for the **EventLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventLogs
    * const eventLogs = await prisma.eventLog.findMany()
    * ```
    */
  get eventLog(): Prisma.EventLogDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Workspace: 'Workspace',
    User: 'User',
    WorkspaceUser: 'WorkspaceUser',
    Contact: 'Contact',
    Pipeline: 'Pipeline',
    Stage: 'Stage',
    Deal: 'Deal',
    DealContact: 'DealContact',
    Activity: 'Activity',
    Note: 'Note',
    WebhookEndpoint: 'WebhookEndpoint',
    ApiKey: 'ApiKey',
    EventLog: 'EventLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "workspace" | "user" | "workspaceUser" | "contact" | "pipeline" | "stage" | "deal" | "dealContact" | "activity" | "note" | "webhookEndpoint" | "apiKey" | "eventLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WorkspaceUser: {
        payload: Prisma.$WorkspaceUserPayload<ExtArgs>
        fields: Prisma.WorkspaceUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          findFirst: {
            args: Prisma.WorkspaceUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          findMany: {
            args: Prisma.WorkspaceUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>[]
          }
          create: {
            args: Prisma.WorkspaceUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          createMany: {
            args: Prisma.WorkspaceUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>[]
          }
          delete: {
            args: Prisma.WorkspaceUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          update: {
            args: Prisma.WorkspaceUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkspaceUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceUserPayload>
          }
          aggregate: {
            args: Prisma.WorkspaceUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaceUser>
          }
          groupBy: {
            args: Prisma.WorkspaceUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceUserCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceUserCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Pipeline: {
        payload: Prisma.$PipelinePayload<ExtArgs>
        fields: Prisma.PipelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PipelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PipelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          findFirst: {
            args: Prisma.PipelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PipelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          findMany: {
            args: Prisma.PipelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>[]
          }
          create: {
            args: Prisma.PipelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          createMany: {
            args: Prisma.PipelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PipelineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>[]
          }
          delete: {
            args: Prisma.PipelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          update: {
            args: Prisma.PipelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          deleteMany: {
            args: Prisma.PipelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PipelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PipelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PipelinePayload>
          }
          aggregate: {
            args: Prisma.PipelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePipeline>
          }
          groupBy: {
            args: Prisma.PipelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<PipelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.PipelineCountArgs<ExtArgs>
            result: $Utils.Optional<PipelineCountAggregateOutputType> | number
          }
        }
      }
      Stage: {
        payload: Prisma.$StagePayload<ExtArgs>
        fields: Prisma.StageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findFirst: {
            args: Prisma.StageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          findMany: {
            args: Prisma.StageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          create: {
            args: Prisma.StageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          createMany: {
            args: Prisma.StageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>[]
          }
          delete: {
            args: Prisma.StageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          update: {
            args: Prisma.StageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          deleteMany: {
            args: Prisma.StageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StagePayload>
          }
          aggregate: {
            args: Prisma.StageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStage>
          }
          groupBy: {
            args: Prisma.StageGroupByArgs<ExtArgs>
            result: $Utils.Optional<StageGroupByOutputType>[]
          }
          count: {
            args: Prisma.StageCountArgs<ExtArgs>
            result: $Utils.Optional<StageCountAggregateOutputType> | number
          }
        }
      }
      Deal: {
        payload: Prisma.$DealPayload<ExtArgs>
        fields: Prisma.DealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          findFirst: {
            args: Prisma.DealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          findMany: {
            args: Prisma.DealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>[]
          }
          create: {
            args: Prisma.DealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          createMany: {
            args: Prisma.DealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>[]
          }
          delete: {
            args: Prisma.DealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          update: {
            args: Prisma.DealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          deleteMany: {
            args: Prisma.DealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealPayload>
          }
          aggregate: {
            args: Prisma.DealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeal>
          }
          groupBy: {
            args: Prisma.DealGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealCountArgs<ExtArgs>
            result: $Utils.Optional<DealCountAggregateOutputType> | number
          }
        }
      }
      DealContact: {
        payload: Prisma.$DealContactPayload<ExtArgs>
        fields: Prisma.DealContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DealContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DealContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealContactPayload>
          }
          findFirst: {
            args: Prisma.DealContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DealContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealContactPayload>
          }
          findMany: {
            args: Prisma.DealContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealContactPayload>[]
          }
          create: {
            args: Prisma.DealContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealContactPayload>
          }
          createMany: {
            args: Prisma.DealContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DealContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealContactPayload>[]
          }
          delete: {
            args: Prisma.DealContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealContactPayload>
          }
          update: {
            args: Prisma.DealContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealContactPayload>
          }
          deleteMany: {
            args: Prisma.DealContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DealContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DealContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DealContactPayload>
          }
          aggregate: {
            args: Prisma.DealContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDealContact>
          }
          groupBy: {
            args: Prisma.DealContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<DealContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.DealContactCountArgs<ExtArgs>
            result: $Utils.Optional<DealContactCountAggregateOutputType> | number
          }
        }
      }
      Activity: {
        payload: Prisma.$ActivityPayload<ExtArgs>
        fields: Prisma.ActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findFirst: {
            args: Prisma.ActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          findMany: {
            args: Prisma.ActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          create: {
            args: Prisma.ActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          createMany: {
            args: Prisma.ActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>[]
          }
          delete: {
            args: Prisma.ActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          update: {
            args: Prisma.ActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          deleteMany: {
            args: Prisma.ActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityPayload>
          }
          aggregate: {
            args: Prisma.ActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivity>
          }
          groupBy: {
            args: Prisma.ActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityCountAggregateOutputType> | number
          }
        }
      }
      Note: {
        payload: Prisma.$NotePayload<ExtArgs>
        fields: Prisma.NoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findFirst: {
            args: Prisma.NoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          findMany: {
            args: Prisma.NoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          create: {
            args: Prisma.NoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          createMany: {
            args: Prisma.NoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>[]
          }
          delete: {
            args: Prisma.NoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          update: {
            args: Prisma.NoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          deleteMany: {
            args: Prisma.NoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.NoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      WebhookEndpoint: {
        payload: Prisma.$WebhookEndpointPayload<ExtArgs>
        fields: Prisma.WebhookEndpointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebhookEndpointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebhookEndpointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          findFirst: {
            args: Prisma.WebhookEndpointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebhookEndpointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          findMany: {
            args: Prisma.WebhookEndpointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>[]
          }
          create: {
            args: Prisma.WebhookEndpointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          createMany: {
            args: Prisma.WebhookEndpointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebhookEndpointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>[]
          }
          delete: {
            args: Prisma.WebhookEndpointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          update: {
            args: Prisma.WebhookEndpointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          deleteMany: {
            args: Prisma.WebhookEndpointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebhookEndpointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WebhookEndpointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebhookEndpointPayload>
          }
          aggregate: {
            args: Prisma.WebhookEndpointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebhookEndpoint>
          }
          groupBy: {
            args: Prisma.WebhookEndpointGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebhookEndpointGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebhookEndpointCountArgs<ExtArgs>
            result: $Utils.Optional<WebhookEndpointCountAggregateOutputType> | number
          }
        }
      }
      ApiKey: {
        payload: Prisma.$ApiKeyPayload<ExtArgs>
        fields: Prisma.ApiKeyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiKeyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiKeyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findFirst: {
            args: Prisma.ApiKeyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiKeyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          findMany: {
            args: Prisma.ApiKeyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          create: {
            args: Prisma.ApiKeyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          createMany: {
            args: Prisma.ApiKeyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiKeyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>[]
          }
          delete: {
            args: Prisma.ApiKeyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          update: {
            args: Prisma.ApiKeyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          deleteMany: {
            args: Prisma.ApiKeyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiKeyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ApiKeyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiKeyPayload>
          }
          aggregate: {
            args: Prisma.ApiKeyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApiKey>
          }
          groupBy: {
            args: Prisma.ApiKeyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiKeyCountArgs<ExtArgs>
            result: $Utils.Optional<ApiKeyCountAggregateOutputType> | number
          }
        }
      }
      EventLog: {
        payload: Prisma.$EventLogPayload<ExtArgs>
        fields: Prisma.EventLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findFirst: {
            args: Prisma.EventLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          findMany: {
            args: Prisma.EventLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          create: {
            args: Prisma.EventLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          createMany: {
            args: Prisma.EventLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>[]
          }
          delete: {
            args: Prisma.EventLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          update: {
            args: Prisma.EventLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          deleteMany: {
            args: Prisma.EventLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventLogPayload>
          }
          aggregate: {
            args: Prisma.EventLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventLog>
          }
          groupBy: {
            args: Prisma.EventLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventLogCountArgs<ExtArgs>
            result: $Utils.Optional<EventLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    users: number
    contacts: number
    pipelines: number
    deals: number
    activities: number
    notes: number
    webhooks: number
    apiKeys: number
    eventLogs: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | WorkspaceCountOutputTypeCountUsersArgs
    contacts?: boolean | WorkspaceCountOutputTypeCountContactsArgs
    pipelines?: boolean | WorkspaceCountOutputTypeCountPipelinesArgs
    deals?: boolean | WorkspaceCountOutputTypeCountDealsArgs
    activities?: boolean | WorkspaceCountOutputTypeCountActivitiesArgs
    notes?: boolean | WorkspaceCountOutputTypeCountNotesArgs
    webhooks?: boolean | WorkspaceCountOutputTypeCountWebhooksArgs
    apiKeys?: boolean | WorkspaceCountOutputTypeCountApiKeysArgs
    eventLogs?: boolean | WorkspaceCountOutputTypeCountEventLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceUserWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountPipelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PipelineWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountDealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountWebhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEndpointWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountApiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountEventLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    workspaces: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | UserCountOutputTypeCountWorkspacesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceUserWhereInput
  }


  /**
   * Count Type ContactCountOutputType
   */

  export type ContactCountOutputType = {
    deals: number
    activities: number
    notes: number
  }

  export type ContactCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deals?: boolean | ContactCountOutputTypeCountDealsArgs
    activities?: boolean | ContactCountOutputTypeCountActivitiesArgs
    notes?: boolean | ContactCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactCountOutputType
     */
    select?: ContactCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountDealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealContactWhereInput
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * ContactCountOutputType without action
   */
  export type ContactCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Count Type PipelineCountOutputType
   */

  export type PipelineCountOutputType = {
    stages: number
    deals: number
  }

  export type PipelineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stages?: boolean | PipelineCountOutputTypeCountStagesArgs
    deals?: boolean | PipelineCountOutputTypeCountDealsArgs
  }

  // Custom InputTypes
  /**
   * PipelineCountOutputType without action
   */
  export type PipelineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PipelineCountOutputType
     */
    select?: PipelineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PipelineCountOutputType without action
   */
  export type PipelineCountOutputTypeCountStagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
  }

  /**
   * PipelineCountOutputType without action
   */
  export type PipelineCountOutputTypeCountDealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealWhereInput
  }


  /**
   * Count Type StageCountOutputType
   */

  export type StageCountOutputType = {
    deals: number
  }

  export type StageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deals?: boolean | StageCountOutputTypeCountDealsArgs
  }

  // Custom InputTypes
  /**
   * StageCountOutputType without action
   */
  export type StageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StageCountOutputType
     */
    select?: StageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StageCountOutputType without action
   */
  export type StageCountOutputTypeCountDealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealWhereInput
  }


  /**
   * Count Type DealCountOutputType
   */

  export type DealCountOutputType = {
    contacts: number
    activities: number
    notes: number
  }

  export type DealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contacts?: boolean | DealCountOutputTypeCountContactsArgs
    activities?: boolean | DealCountOutputTypeCountActivitiesArgs
    notes?: boolean | DealCountOutputTypeCountNotesArgs
  }

  // Custom InputTypes
  /**
   * DealCountOutputType without action
   */
  export type DealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealCountOutputType
     */
    select?: DealCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DealCountOutputType without action
   */
  export type DealCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealContactWhereInput
  }

  /**
   * DealCountOutputType without action
   */
  export type DealCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
  }

  /**
   * DealCountOutputType without action
   */
  export type DealCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    plan: number
    settings: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    settings?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    slug: string
    plan: string
    settings: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Workspace$usersArgs<ExtArgs>
    contacts?: boolean | Workspace$contactsArgs<ExtArgs>
    pipelines?: boolean | Workspace$pipelinesArgs<ExtArgs>
    deals?: boolean | Workspace$dealsArgs<ExtArgs>
    activities?: boolean | Workspace$activitiesArgs<ExtArgs>
    notes?: boolean | Workspace$notesArgs<ExtArgs>
    webhooks?: boolean | Workspace$webhooksArgs<ExtArgs>
    apiKeys?: boolean | Workspace$apiKeysArgs<ExtArgs>
    eventLogs?: boolean | Workspace$eventLogsArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    settings?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Workspace$usersArgs<ExtArgs>
    contacts?: boolean | Workspace$contactsArgs<ExtArgs>
    pipelines?: boolean | Workspace$pipelinesArgs<ExtArgs>
    deals?: boolean | Workspace$dealsArgs<ExtArgs>
    activities?: boolean | Workspace$activitiesArgs<ExtArgs>
    notes?: boolean | Workspace$notesArgs<ExtArgs>
    webhooks?: boolean | Workspace$webhooksArgs<ExtArgs>
    apiKeys?: boolean | Workspace$apiKeysArgs<ExtArgs>
    eventLogs?: boolean | Workspace$eventLogsArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      users: Prisma.$WorkspaceUserPayload<ExtArgs>[]
      contacts: Prisma.$ContactPayload<ExtArgs>[]
      pipelines: Prisma.$PipelinePayload<ExtArgs>[]
      deals: Prisma.$DealPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
      webhooks: Prisma.$WebhookEndpointPayload<ExtArgs>[]
      apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[]
      eventLogs: Prisma.$EventLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      plan: string
      settings: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Workspace$usersArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findMany"> | Null>
    contacts<T extends Workspace$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany"> | Null>
    pipelines<T extends Workspace$pipelinesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$pipelinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findMany"> | Null>
    deals<T extends Workspace$dealsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$dealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findMany"> | Null>
    activities<T extends Workspace$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany"> | Null>
    notes<T extends Workspace$notesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany"> | Null>
    webhooks<T extends Workspace$webhooksArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$webhooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findMany"> | Null>
    apiKeys<T extends Workspace$apiKeysArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany"> | Null>
    eventLogs<T extends Workspace$eventLogsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$eventLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workspace model
   */ 
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly slug: FieldRef<"Workspace", 'String'>
    readonly plan: FieldRef<"Workspace", 'String'>
    readonly settings: FieldRef<"Workspace", 'Json'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
    readonly updatedAt: FieldRef<"Workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
  }

  /**
   * Workspace.users
   */
  export type Workspace$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    where?: WorkspaceUserWhereInput
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    cursor?: WorkspaceUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * Workspace.contacts
   */
  export type Workspace$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Workspace.pipelines
   */
  export type Workspace$pipelinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    where?: PipelineWhereInput
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    cursor?: PipelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * Workspace.deals
   */
  export type Workspace$dealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    where?: DealWhereInput
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    cursor?: DealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[]
  }

  /**
   * Workspace.activities
   */
  export type Workspace$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Workspace.notes
   */
  export type Workspace$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Workspace.webhooks
   */
  export type Workspace$webhooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    where?: WebhookEndpointWhereInput
    orderBy?: WebhookEndpointOrderByWithRelationInput | WebhookEndpointOrderByWithRelationInput[]
    cursor?: WebhookEndpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebhookEndpointScalarFieldEnum | WebhookEndpointScalarFieldEnum[]
  }

  /**
   * Workspace.apiKeys
   */
  export type Workspace$apiKeysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    cursor?: ApiKeyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * Workspace.eventLogs
   */
  export type Workspace$eventLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    cursor?: EventLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    firstName: string | null
    lastName: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
    resetToken: string | null
    resetTokenExpiry: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    firstName: number
    lastName: number
    avatar: number
    createdAt: number
    updatedAt: number
    resetToken: number
    resetTokenExpiry: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    firstName?: true
    lastName?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    resetToken?: true
    resetTokenExpiry?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    firstName: string
    lastName: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    resetToken: string | null
    resetTokenExpiry: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    firstName?: boolean
    lastName?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | User$workspacesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspaces: Prisma.$WorkspaceUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      firstName: string
      lastName: string | null
      avatar: string | null
      createdAt: Date
      updatedAt: Date
      resetToken: string | null
      resetTokenExpiry: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspaces<T extends User$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, User$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.workspaces
   */
  export type User$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    where?: WorkspaceUserWhereInput
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    cursor?: WorkspaceUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WorkspaceUser
   */

  export type AggregateWorkspaceUser = {
    _count: WorkspaceUserCountAggregateOutputType | null
    _min: WorkspaceUserMinAggregateOutputType | null
    _max: WorkspaceUserMaxAggregateOutputType | null
  }

  export type WorkspaceUserMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    userId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type WorkspaceUserMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    userId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type WorkspaceUserCountAggregateOutputType = {
    id: number
    workspaceId: number
    userId: number
    role: number
    createdAt: number
    _all: number
  }


  export type WorkspaceUserMinAggregateInputType = {
    id?: true
    workspaceId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type WorkspaceUserMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    userId?: true
    role?: true
    createdAt?: true
  }

  export type WorkspaceUserCountAggregateInputType = {
    id?: true
    workspaceId?: true
    userId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type WorkspaceUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceUser to aggregate.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceUsers
    **/
    _count?: true | WorkspaceUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceUserMaxAggregateInputType
  }

  export type GetWorkspaceUserAggregateType<T extends WorkspaceUserAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceUser[P]>
      : GetScalarType<T[P], AggregateWorkspaceUser[P]>
  }




  export type WorkspaceUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceUserWhereInput
    orderBy?: WorkspaceUserOrderByWithAggregationInput | WorkspaceUserOrderByWithAggregationInput[]
    by: WorkspaceUserScalarFieldEnum[] | WorkspaceUserScalarFieldEnum
    having?: WorkspaceUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceUserCountAggregateInputType | true
    _min?: WorkspaceUserMinAggregateInputType
    _max?: WorkspaceUserMaxAggregateInputType
  }

  export type WorkspaceUserGroupByOutputType = {
    id: string
    workspaceId: string
    userId: string
    role: string
    createdAt: Date
    _count: WorkspaceUserCountAggregateOutputType | null
    _min: WorkspaceUserMinAggregateOutputType | null
    _max: WorkspaceUserMaxAggregateOutputType | null
  }

  type GetWorkspaceUserGroupByPayload<T extends WorkspaceUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceUserGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceUserGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceUser"]>

  export type WorkspaceUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceUser"]>

  export type WorkspaceUserSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type WorkspaceUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkspaceUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkspaceUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkspaceUser"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      userId: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["workspaceUser"]>
    composites: {}
  }

  type WorkspaceUserGetPayload<S extends boolean | null | undefined | WorkspaceUserDefaultArgs> = $Result.GetResult<Prisma.$WorkspaceUserPayload, S>

  type WorkspaceUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkspaceUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkspaceUserCountAggregateInputType | true
    }

  export interface WorkspaceUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkspaceUser'], meta: { name: 'WorkspaceUser' } }
    /**
     * Find zero or one WorkspaceUser that matches the filter.
     * @param {WorkspaceUserFindUniqueArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceUserFindUniqueArgs>(args: SelectSubset<T, WorkspaceUserFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WorkspaceUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkspaceUserFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceUserFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WorkspaceUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserFindFirstArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceUserFindFirstArgs>(args?: SelectSubset<T, WorkspaceUserFindFirstArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WorkspaceUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserFindFirstOrThrowArgs} args - Arguments to find a WorkspaceUser
     * @example
     * // Get one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceUserFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WorkspaceUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceUsers
     * const workspaceUsers = await prisma.workspaceUser.findMany()
     * 
     * // Get first 10 WorkspaceUsers
     * const workspaceUsers = await prisma.workspaceUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceUserWithIdOnly = await prisma.workspaceUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceUserFindManyArgs>(args?: SelectSubset<T, WorkspaceUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WorkspaceUser.
     * @param {WorkspaceUserCreateArgs} args - Arguments to create a WorkspaceUser.
     * @example
     * // Create one WorkspaceUser
     * const WorkspaceUser = await prisma.workspaceUser.create({
     *   data: {
     *     // ... data to create a WorkspaceUser
     *   }
     * })
     * 
     */
    create<T extends WorkspaceUserCreateArgs>(args: SelectSubset<T, WorkspaceUserCreateArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WorkspaceUsers.
     * @param {WorkspaceUserCreateManyArgs} args - Arguments to create many WorkspaceUsers.
     * @example
     * // Create many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceUserCreateManyArgs>(args?: SelectSubset<T, WorkspaceUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkspaceUsers and returns the data saved in the database.
     * @param {WorkspaceUserCreateManyAndReturnArgs} args - Arguments to create many WorkspaceUsers.
     * @example
     * // Create many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkspaceUsers and only return the `id`
     * const workspaceUserWithIdOnly = await prisma.workspaceUser.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceUserCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WorkspaceUser.
     * @param {WorkspaceUserDeleteArgs} args - Arguments to delete one WorkspaceUser.
     * @example
     * // Delete one WorkspaceUser
     * const WorkspaceUser = await prisma.workspaceUser.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceUser
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceUserDeleteArgs>(args: SelectSubset<T, WorkspaceUserDeleteArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WorkspaceUser.
     * @param {WorkspaceUserUpdateArgs} args - Arguments to update one WorkspaceUser.
     * @example
     * // Update one WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUserUpdateArgs>(args: SelectSubset<T, WorkspaceUserUpdateArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WorkspaceUsers.
     * @param {WorkspaceUserDeleteManyArgs} args - Arguments to filter WorkspaceUsers to delete.
     * @example
     * // Delete a few WorkspaceUsers
     * const { count } = await prisma.workspaceUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceUserDeleteManyArgs>(args?: SelectSubset<T, WorkspaceUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceUsers
     * const workspaceUser = await prisma.workspaceUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUserUpdateManyArgs>(args: SelectSubset<T, WorkspaceUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkspaceUser.
     * @param {WorkspaceUserUpsertArgs} args - Arguments to update or create a WorkspaceUser.
     * @example
     * // Update or create a WorkspaceUser
     * const workspaceUser = await prisma.workspaceUser.upsert({
     *   create: {
     *     // ... data to create a WorkspaceUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceUser we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUserUpsertArgs>(args: SelectSubset<T, WorkspaceUserUpsertArgs<ExtArgs>>): Prisma__WorkspaceUserClient<$Result.GetResult<Prisma.$WorkspaceUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WorkspaceUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserCountArgs} args - Arguments to filter WorkspaceUsers to count.
     * @example
     * // Count the number of WorkspaceUsers
     * const count = await prisma.workspaceUser.count({
     *   where: {
     *     // ... the filter for the WorkspaceUsers we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceUserCountArgs>(
      args?: Subset<T, WorkspaceUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceUserAggregateArgs>(args: Subset<T, WorkspaceUserAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceUserAggregateType<T>>

    /**
     * Group by WorkspaceUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceUserGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkspaceUser model
   */
  readonly fields: WorkspaceUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkspaceUser model
   */ 
  interface WorkspaceUserFieldRefs {
    readonly id: FieldRef<"WorkspaceUser", 'String'>
    readonly workspaceId: FieldRef<"WorkspaceUser", 'String'>
    readonly userId: FieldRef<"WorkspaceUser", 'String'>
    readonly role: FieldRef<"WorkspaceUser", 'String'>
    readonly createdAt: FieldRef<"WorkspaceUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkspaceUser findUnique
   */
  export type WorkspaceUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser findUniqueOrThrow
   */
  export type WorkspaceUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser findFirst
   */
  export type WorkspaceUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceUsers.
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceUsers.
     */
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * WorkspaceUser findFirstOrThrow
   */
  export type WorkspaceUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUser to fetch.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceUsers.
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceUsers.
     */
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * WorkspaceUser findMany
   */
  export type WorkspaceUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceUsers to fetch.
     */
    where?: WorkspaceUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceUsers to fetch.
     */
    orderBy?: WorkspaceUserOrderByWithRelationInput | WorkspaceUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceUsers.
     */
    cursor?: WorkspaceUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceUsers.
     */
    skip?: number
    distinct?: WorkspaceUserScalarFieldEnum | WorkspaceUserScalarFieldEnum[]
  }

  /**
   * WorkspaceUser create
   */
  export type WorkspaceUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkspaceUser.
     */
    data: XOR<WorkspaceUserCreateInput, WorkspaceUserUncheckedCreateInput>
  }

  /**
   * WorkspaceUser createMany
   */
  export type WorkspaceUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkspaceUsers.
     */
    data: WorkspaceUserCreateManyInput | WorkspaceUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkspaceUser createManyAndReturn
   */
  export type WorkspaceUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WorkspaceUsers.
     */
    data: WorkspaceUserCreateManyInput | WorkspaceUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceUser update
   */
  export type WorkspaceUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkspaceUser.
     */
    data: XOR<WorkspaceUserUpdateInput, WorkspaceUserUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceUser to update.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser updateMany
   */
  export type WorkspaceUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkspaceUsers.
     */
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceUsers to update
     */
    where?: WorkspaceUserWhereInput
  }

  /**
   * WorkspaceUser upsert
   */
  export type WorkspaceUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkspaceUser to update in case it exists.
     */
    where: WorkspaceUserWhereUniqueInput
    /**
     * In case the WorkspaceUser found by the `where` argument doesn't exist, create a new WorkspaceUser with this data.
     */
    create: XOR<WorkspaceUserCreateInput, WorkspaceUserUncheckedCreateInput>
    /**
     * In case the WorkspaceUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUserUpdateInput, WorkspaceUserUncheckedUpdateInput>
  }

  /**
   * WorkspaceUser delete
   */
  export type WorkspaceUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
    /**
     * Filter which WorkspaceUser to delete.
     */
    where: WorkspaceUserWhereUniqueInput
  }

  /**
   * WorkspaceUser deleteMany
   */
  export type WorkspaceUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceUsers to delete
     */
    where?: WorkspaceUserWhereInput
  }

  /**
   * WorkspaceUser without action
   */
  export type WorkspaceUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceUser
     */
    select?: WorkspaceUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceUserInclude<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    score: number | null
  }

  export type ContactSumAggregateOutputType = {
    score: number | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    status: string | null
    source: string | null
    score: number | null
    companyId: string | null
    ownerId: string | null
    isArchived: boolean | null
    mergedInto: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastContactedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    status: string | null
    source: string | null
    score: number | null
    companyId: string | null
    ownerId: string | null
    isArchived: boolean | null
    mergedInto: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastContactedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    workspaceId: number
    firstName: number
    lastName: number
    email: number
    phone: number
    avatar: number
    status: number
    source: number
    score: number
    tags: number
    companyId: number
    ownerId: number
    channels: number
    customData: number
    isArchived: number
    mergedInto: number
    createdAt: number
    updatedAt: number
    lastContactedAt: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    score?: true
  }

  export type ContactSumAggregateInputType = {
    score?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    workspaceId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    avatar?: true
    status?: true
    source?: true
    score?: true
    companyId?: true
    ownerId?: true
    isArchived?: true
    mergedInto?: true
    createdAt?: true
    updatedAt?: true
    lastContactedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    avatar?: true
    status?: true
    source?: true
    score?: true
    companyId?: true
    ownerId?: true
    isArchived?: true
    mergedInto?: true
    createdAt?: true
    updatedAt?: true
    lastContactedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    workspaceId?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    avatar?: true
    status?: true
    source?: true
    score?: true
    tags?: true
    companyId?: true
    ownerId?: true
    channels?: true
    customData?: true
    isArchived?: true
    mergedInto?: true
    createdAt?: true
    updatedAt?: true
    lastContactedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    workspaceId: string
    firstName: string
    lastName: string | null
    email: string | null
    phone: string | null
    avatar: string | null
    status: string
    source: string
    score: number
    tags: string[]
    companyId: string | null
    ownerId: string | null
    channels: JsonValue
    customData: JsonValue
    isArchived: boolean
    mergedInto: string | null
    createdAt: Date
    updatedAt: Date
    lastContactedAt: Date | null
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    status?: boolean
    source?: boolean
    score?: boolean
    tags?: boolean
    companyId?: boolean
    ownerId?: boolean
    channels?: boolean
    customData?: boolean
    isArchived?: boolean
    mergedInto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastContactedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    deals?: boolean | Contact$dealsArgs<ExtArgs>
    activities?: boolean | Contact$activitiesArgs<ExtArgs>
    notes?: boolean | Contact$notesArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    status?: boolean
    source?: boolean
    score?: boolean
    tags?: boolean
    companyId?: boolean
    ownerId?: boolean
    channels?: boolean
    customData?: boolean
    isArchived?: boolean
    mergedInto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastContactedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    avatar?: boolean
    status?: boolean
    source?: boolean
    score?: boolean
    tags?: boolean
    companyId?: boolean
    ownerId?: boolean
    channels?: boolean
    customData?: boolean
    isArchived?: boolean
    mergedInto?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastContactedAt?: boolean
  }

  export type ContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    deals?: boolean | Contact$dealsArgs<ExtArgs>
    activities?: boolean | Contact$activitiesArgs<ExtArgs>
    notes?: boolean | Contact$notesArgs<ExtArgs>
    _count?: boolean | ContactCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      deals: Prisma.$DealContactPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      firstName: string
      lastName: string | null
      email: string | null
      phone: string | null
      avatar: string | null
      status: string
      source: string
      score: number
      tags: string[]
      companyId: string | null
      ownerId: string | null
      channels: Prisma.JsonValue
      customData: Prisma.JsonValue
      isArchived: boolean
      mergedInto: string | null
      createdAt: Date
      updatedAt: Date
      lastContactedAt: Date | null
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    deals<T extends Contact$dealsArgs<ExtArgs> = {}>(args?: Subset<T, Contact$dealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "findMany"> | Null>
    activities<T extends Contact$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Contact$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany"> | Null>
    notes<T extends Contact$notesArgs<ExtArgs> = {}>(args?: Subset<T, Contact$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly workspaceId: FieldRef<"Contact", 'String'>
    readonly firstName: FieldRef<"Contact", 'String'>
    readonly lastName: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly avatar: FieldRef<"Contact", 'String'>
    readonly status: FieldRef<"Contact", 'String'>
    readonly source: FieldRef<"Contact", 'String'>
    readonly score: FieldRef<"Contact", 'Int'>
    readonly tags: FieldRef<"Contact", 'String[]'>
    readonly companyId: FieldRef<"Contact", 'String'>
    readonly ownerId: FieldRef<"Contact", 'String'>
    readonly channels: FieldRef<"Contact", 'Json'>
    readonly customData: FieldRef<"Contact", 'Json'>
    readonly isArchived: FieldRef<"Contact", 'Boolean'>
    readonly mergedInto: FieldRef<"Contact", 'String'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
    readonly lastContactedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
  }

  /**
   * Contact.deals
   */
  export type Contact$dealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    where?: DealContactWhereInput
    orderBy?: DealContactOrderByWithRelationInput | DealContactOrderByWithRelationInput[]
    cursor?: DealContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealContactScalarFieldEnum | DealContactScalarFieldEnum[]
  }

  /**
   * Contact.activities
   */
  export type Contact$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Contact.notes
   */
  export type Contact$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
  }


  /**
   * Model Pipeline
   */

  export type AggregatePipeline = {
    _count: PipelineCountAggregateOutputType | null
    _min: PipelineMinAggregateOutputType | null
    _max: PipelineMaxAggregateOutputType | null
  }

  export type PipelineMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PipelineMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PipelineCountAggregateOutputType = {
    id: number
    workspaceId: number
    name: number
    isDefault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PipelineMinAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PipelineMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PipelineCountAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PipelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pipeline to aggregate.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pipelines
    **/
    _count?: true | PipelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PipelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PipelineMaxAggregateInputType
  }

  export type GetPipelineAggregateType<T extends PipelineAggregateArgs> = {
        [P in keyof T & keyof AggregatePipeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePipeline[P]>
      : GetScalarType<T[P], AggregatePipeline[P]>
  }




  export type PipelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PipelineWhereInput
    orderBy?: PipelineOrderByWithAggregationInput | PipelineOrderByWithAggregationInput[]
    by: PipelineScalarFieldEnum[] | PipelineScalarFieldEnum
    having?: PipelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PipelineCountAggregateInputType | true
    _min?: PipelineMinAggregateInputType
    _max?: PipelineMaxAggregateInputType
  }

  export type PipelineGroupByOutputType = {
    id: string
    workspaceId: string
    name: string
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    _count: PipelineCountAggregateOutputType | null
    _min: PipelineMinAggregateOutputType | null
    _max: PipelineMaxAggregateOutputType | null
  }

  type GetPipelineGroupByPayload<T extends PipelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PipelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PipelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PipelineGroupByOutputType[P]>
            : GetScalarType<T[P], PipelineGroupByOutputType[P]>
        }
      >
    >


  export type PipelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    stages?: boolean | Pipeline$stagesArgs<ExtArgs>
    deals?: boolean | Pipeline$dealsArgs<ExtArgs>
    _count?: boolean | PipelineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pipeline"]>

  export type PipelineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pipeline"]>

  export type PipelineSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PipelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    stages?: boolean | Pipeline$stagesArgs<ExtArgs>
    deals?: boolean | Pipeline$dealsArgs<ExtArgs>
    _count?: boolean | PipelineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PipelineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $PipelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pipeline"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      stages: Prisma.$StagePayload<ExtArgs>[]
      deals: Prisma.$DealPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      name: string
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pipeline"]>
    composites: {}
  }

  type PipelineGetPayload<S extends boolean | null | undefined | PipelineDefaultArgs> = $Result.GetResult<Prisma.$PipelinePayload, S>

  type PipelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PipelineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PipelineCountAggregateInputType | true
    }

  export interface PipelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pipeline'], meta: { name: 'Pipeline' } }
    /**
     * Find zero or one Pipeline that matches the filter.
     * @param {PipelineFindUniqueArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PipelineFindUniqueArgs>(args: SelectSubset<T, PipelineFindUniqueArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Pipeline that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PipelineFindUniqueOrThrowArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PipelineFindUniqueOrThrowArgs>(args: SelectSubset<T, PipelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Pipeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineFindFirstArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PipelineFindFirstArgs>(args?: SelectSubset<T, PipelineFindFirstArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Pipeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineFindFirstOrThrowArgs} args - Arguments to find a Pipeline
     * @example
     * // Get one Pipeline
     * const pipeline = await prisma.pipeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PipelineFindFirstOrThrowArgs>(args?: SelectSubset<T, PipelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Pipelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pipelines
     * const pipelines = await prisma.pipeline.findMany()
     * 
     * // Get first 10 Pipelines
     * const pipelines = await prisma.pipeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pipelineWithIdOnly = await prisma.pipeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PipelineFindManyArgs>(args?: SelectSubset<T, PipelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Pipeline.
     * @param {PipelineCreateArgs} args - Arguments to create a Pipeline.
     * @example
     * // Create one Pipeline
     * const Pipeline = await prisma.pipeline.create({
     *   data: {
     *     // ... data to create a Pipeline
     *   }
     * })
     * 
     */
    create<T extends PipelineCreateArgs>(args: SelectSubset<T, PipelineCreateArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Pipelines.
     * @param {PipelineCreateManyArgs} args - Arguments to create many Pipelines.
     * @example
     * // Create many Pipelines
     * const pipeline = await prisma.pipeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PipelineCreateManyArgs>(args?: SelectSubset<T, PipelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pipelines and returns the data saved in the database.
     * @param {PipelineCreateManyAndReturnArgs} args - Arguments to create many Pipelines.
     * @example
     * // Create many Pipelines
     * const pipeline = await prisma.pipeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pipelines and only return the `id`
     * const pipelineWithIdOnly = await prisma.pipeline.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PipelineCreateManyAndReturnArgs>(args?: SelectSubset<T, PipelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Pipeline.
     * @param {PipelineDeleteArgs} args - Arguments to delete one Pipeline.
     * @example
     * // Delete one Pipeline
     * const Pipeline = await prisma.pipeline.delete({
     *   where: {
     *     // ... filter to delete one Pipeline
     *   }
     * })
     * 
     */
    delete<T extends PipelineDeleteArgs>(args: SelectSubset<T, PipelineDeleteArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Pipeline.
     * @param {PipelineUpdateArgs} args - Arguments to update one Pipeline.
     * @example
     * // Update one Pipeline
     * const pipeline = await prisma.pipeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PipelineUpdateArgs>(args: SelectSubset<T, PipelineUpdateArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Pipelines.
     * @param {PipelineDeleteManyArgs} args - Arguments to filter Pipelines to delete.
     * @example
     * // Delete a few Pipelines
     * const { count } = await prisma.pipeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PipelineDeleteManyArgs>(args?: SelectSubset<T, PipelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pipelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pipelines
     * const pipeline = await prisma.pipeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PipelineUpdateManyArgs>(args: SelectSubset<T, PipelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pipeline.
     * @param {PipelineUpsertArgs} args - Arguments to update or create a Pipeline.
     * @example
     * // Update or create a Pipeline
     * const pipeline = await prisma.pipeline.upsert({
     *   create: {
     *     // ... data to create a Pipeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pipeline we want to update
     *   }
     * })
     */
    upsert<T extends PipelineUpsertArgs>(args: SelectSubset<T, PipelineUpsertArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Pipelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineCountArgs} args - Arguments to filter Pipelines to count.
     * @example
     * // Count the number of Pipelines
     * const count = await prisma.pipeline.count({
     *   where: {
     *     // ... the filter for the Pipelines we want to count
     *   }
     * })
    **/
    count<T extends PipelineCountArgs>(
      args?: Subset<T, PipelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PipelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pipeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PipelineAggregateArgs>(args: Subset<T, PipelineAggregateArgs>): Prisma.PrismaPromise<GetPipelineAggregateType<T>>

    /**
     * Group by Pipeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PipelineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PipelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PipelineGroupByArgs['orderBy'] }
        : { orderBy?: PipelineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PipelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPipelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pipeline model
   */
  readonly fields: PipelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pipeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PipelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    stages<T extends Pipeline$stagesArgs<ExtArgs> = {}>(args?: Subset<T, Pipeline$stagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findMany"> | Null>
    deals<T extends Pipeline$dealsArgs<ExtArgs> = {}>(args?: Subset<T, Pipeline$dealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pipeline model
   */ 
  interface PipelineFieldRefs {
    readonly id: FieldRef<"Pipeline", 'String'>
    readonly workspaceId: FieldRef<"Pipeline", 'String'>
    readonly name: FieldRef<"Pipeline", 'String'>
    readonly isDefault: FieldRef<"Pipeline", 'Boolean'>
    readonly createdAt: FieldRef<"Pipeline", 'DateTime'>
    readonly updatedAt: FieldRef<"Pipeline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pipeline findUnique
   */
  export type PipelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline findUniqueOrThrow
   */
  export type PipelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline findFirst
   */
  export type PipelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pipelines.
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pipelines.
     */
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * Pipeline findFirstOrThrow
   */
  export type PipelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipeline to fetch.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pipelines.
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pipelines.
     */
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * Pipeline findMany
   */
  export type PipelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter, which Pipelines to fetch.
     */
    where?: PipelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pipelines to fetch.
     */
    orderBy?: PipelineOrderByWithRelationInput | PipelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pipelines.
     */
    cursor?: PipelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pipelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pipelines.
     */
    skip?: number
    distinct?: PipelineScalarFieldEnum | PipelineScalarFieldEnum[]
  }

  /**
   * Pipeline create
   */
  export type PipelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * The data needed to create a Pipeline.
     */
    data: XOR<PipelineCreateInput, PipelineUncheckedCreateInput>
  }

  /**
   * Pipeline createMany
   */
  export type PipelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pipelines.
     */
    data: PipelineCreateManyInput | PipelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pipeline createManyAndReturn
   */
  export type PipelineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Pipelines.
     */
    data: PipelineCreateManyInput | PipelineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pipeline update
   */
  export type PipelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * The data needed to update a Pipeline.
     */
    data: XOR<PipelineUpdateInput, PipelineUncheckedUpdateInput>
    /**
     * Choose, which Pipeline to update.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline updateMany
   */
  export type PipelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pipelines.
     */
    data: XOR<PipelineUpdateManyMutationInput, PipelineUncheckedUpdateManyInput>
    /**
     * Filter which Pipelines to update
     */
    where?: PipelineWhereInput
  }

  /**
   * Pipeline upsert
   */
  export type PipelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * The filter to search for the Pipeline to update in case it exists.
     */
    where: PipelineWhereUniqueInput
    /**
     * In case the Pipeline found by the `where` argument doesn't exist, create a new Pipeline with this data.
     */
    create: XOR<PipelineCreateInput, PipelineUncheckedCreateInput>
    /**
     * In case the Pipeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PipelineUpdateInput, PipelineUncheckedUpdateInput>
  }

  /**
   * Pipeline delete
   */
  export type PipelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
    /**
     * Filter which Pipeline to delete.
     */
    where: PipelineWhereUniqueInput
  }

  /**
   * Pipeline deleteMany
   */
  export type PipelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pipelines to delete
     */
    where?: PipelineWhereInput
  }

  /**
   * Pipeline.stages
   */
  export type Pipeline$stagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    where?: StageWhereInput
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    cursor?: StageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Pipeline.deals
   */
  export type Pipeline$dealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    where?: DealWhereInput
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    cursor?: DealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[]
  }

  /**
   * Pipeline without action
   */
  export type PipelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pipeline
     */
    select?: PipelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PipelineInclude<ExtArgs> | null
  }


  /**
   * Model Stage
   */

  export type AggregateStage = {
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  export type StageAvgAggregateOutputType = {
    position: number | null
    probability: number | null
    rottenAfterDays: number | null
  }

  export type StageSumAggregateOutputType = {
    position: number | null
    probability: number | null
    rottenAfterDays: number | null
  }

  export type StageMinAggregateOutputType = {
    id: string | null
    pipelineId: string | null
    name: string | null
    position: number | null
    color: string | null
    probability: number | null
    isWon: boolean | null
    isLost: boolean | null
    rottenAfterDays: number | null
  }

  export type StageMaxAggregateOutputType = {
    id: string | null
    pipelineId: string | null
    name: string | null
    position: number | null
    color: string | null
    probability: number | null
    isWon: boolean | null
    isLost: boolean | null
    rottenAfterDays: number | null
  }

  export type StageCountAggregateOutputType = {
    id: number
    pipelineId: number
    name: number
    position: number
    color: number
    probability: number
    isWon: number
    isLost: number
    rottenAfterDays: number
    _all: number
  }


  export type StageAvgAggregateInputType = {
    position?: true
    probability?: true
    rottenAfterDays?: true
  }

  export type StageSumAggregateInputType = {
    position?: true
    probability?: true
    rottenAfterDays?: true
  }

  export type StageMinAggregateInputType = {
    id?: true
    pipelineId?: true
    name?: true
    position?: true
    color?: true
    probability?: true
    isWon?: true
    isLost?: true
    rottenAfterDays?: true
  }

  export type StageMaxAggregateInputType = {
    id?: true
    pipelineId?: true
    name?: true
    position?: true
    color?: true
    probability?: true
    isWon?: true
    isLost?: true
    rottenAfterDays?: true
  }

  export type StageCountAggregateInputType = {
    id?: true
    pipelineId?: true
    name?: true
    position?: true
    color?: true
    probability?: true
    isWon?: true
    isLost?: true
    rottenAfterDays?: true
    _all?: true
  }

  export type StageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stage to aggregate.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stages
    **/
    _count?: true | StageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StageMaxAggregateInputType
  }

  export type GetStageAggregateType<T extends StageAggregateArgs> = {
        [P in keyof T & keyof AggregateStage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStage[P]>
      : GetScalarType<T[P], AggregateStage[P]>
  }




  export type StageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StageWhereInput
    orderBy?: StageOrderByWithAggregationInput | StageOrderByWithAggregationInput[]
    by: StageScalarFieldEnum[] | StageScalarFieldEnum
    having?: StageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StageCountAggregateInputType | true
    _avg?: StageAvgAggregateInputType
    _sum?: StageSumAggregateInputType
    _min?: StageMinAggregateInputType
    _max?: StageMaxAggregateInputType
  }

  export type StageGroupByOutputType = {
    id: string
    pipelineId: string
    name: string
    position: number
    color: string
    probability: number | null
    isWon: boolean
    isLost: boolean
    rottenAfterDays: number | null
    _count: StageCountAggregateOutputType | null
    _avg: StageAvgAggregateOutputType | null
    _sum: StageSumAggregateOutputType | null
    _min: StageMinAggregateOutputType | null
    _max: StageMaxAggregateOutputType | null
  }

  type GetStageGroupByPayload<T extends StageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StageGroupByOutputType[P]>
            : GetScalarType<T[P], StageGroupByOutputType[P]>
        }
      >
    >


  export type StageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pipelineId?: boolean
    name?: boolean
    position?: boolean
    color?: boolean
    probability?: boolean
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: boolean
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    deals?: boolean | Stage$dealsArgs<ExtArgs>
    _count?: boolean | StageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stage"]>

  export type StageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pipelineId?: boolean
    name?: boolean
    position?: boolean
    color?: boolean
    probability?: boolean
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: boolean
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stage"]>

  export type StageSelectScalar = {
    id?: boolean
    pipelineId?: boolean
    name?: boolean
    position?: boolean
    color?: boolean
    probability?: boolean
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: boolean
  }

  export type StageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    deals?: boolean | Stage$dealsArgs<ExtArgs>
    _count?: boolean | StageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
  }

  export type $StagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stage"
    objects: {
      pipeline: Prisma.$PipelinePayload<ExtArgs>
      deals: Prisma.$DealPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pipelineId: string
      name: string
      position: number
      color: string
      probability: number | null
      isWon: boolean
      isLost: boolean
      rottenAfterDays: number | null
    }, ExtArgs["result"]["stage"]>
    composites: {}
  }

  type StageGetPayload<S extends boolean | null | undefined | StageDefaultArgs> = $Result.GetResult<Prisma.$StagePayload, S>

  type StageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StageCountAggregateInputType | true
    }

  export interface StageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stage'], meta: { name: 'Stage' } }
    /**
     * Find zero or one Stage that matches the filter.
     * @param {StageFindUniqueArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StageFindUniqueArgs>(args: SelectSubset<T, StageFindUniqueArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Stage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StageFindUniqueOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StageFindUniqueOrThrowArgs>(args: SelectSubset<T, StageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Stage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StageFindFirstArgs>(args?: SelectSubset<T, StageFindFirstArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Stage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindFirstOrThrowArgs} args - Arguments to find a Stage
     * @example
     * // Get one Stage
     * const stage = await prisma.stage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StageFindFirstOrThrowArgs>(args?: SelectSubset<T, StageFindFirstOrThrowArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Stages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stages
     * const stages = await prisma.stage.findMany()
     * 
     * // Get first 10 Stages
     * const stages = await prisma.stage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stageWithIdOnly = await prisma.stage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StageFindManyArgs>(args?: SelectSubset<T, StageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Stage.
     * @param {StageCreateArgs} args - Arguments to create a Stage.
     * @example
     * // Create one Stage
     * const Stage = await prisma.stage.create({
     *   data: {
     *     // ... data to create a Stage
     *   }
     * })
     * 
     */
    create<T extends StageCreateArgs>(args: SelectSubset<T, StageCreateArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Stages.
     * @param {StageCreateManyArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stage = await prisma.stage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StageCreateManyArgs>(args?: SelectSubset<T, StageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stages and returns the data saved in the database.
     * @param {StageCreateManyAndReturnArgs} args - Arguments to create many Stages.
     * @example
     * // Create many Stages
     * const stage = await prisma.stage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stages and only return the `id`
     * const stageWithIdOnly = await prisma.stage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StageCreateManyAndReturnArgs>(args?: SelectSubset<T, StageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Stage.
     * @param {StageDeleteArgs} args - Arguments to delete one Stage.
     * @example
     * // Delete one Stage
     * const Stage = await prisma.stage.delete({
     *   where: {
     *     // ... filter to delete one Stage
     *   }
     * })
     * 
     */
    delete<T extends StageDeleteArgs>(args: SelectSubset<T, StageDeleteArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Stage.
     * @param {StageUpdateArgs} args - Arguments to update one Stage.
     * @example
     * // Update one Stage
     * const stage = await prisma.stage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StageUpdateArgs>(args: SelectSubset<T, StageUpdateArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Stages.
     * @param {StageDeleteManyArgs} args - Arguments to filter Stages to delete.
     * @example
     * // Delete a few Stages
     * const { count } = await prisma.stage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StageDeleteManyArgs>(args?: SelectSubset<T, StageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stages
     * const stage = await prisma.stage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StageUpdateManyArgs>(args: SelectSubset<T, StageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Stage.
     * @param {StageUpsertArgs} args - Arguments to update or create a Stage.
     * @example
     * // Update or create a Stage
     * const stage = await prisma.stage.upsert({
     *   create: {
     *     // ... data to create a Stage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stage we want to update
     *   }
     * })
     */
    upsert<T extends StageUpsertArgs>(args: SelectSubset<T, StageUpsertArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Stages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageCountArgs} args - Arguments to filter Stages to count.
     * @example
     * // Count the number of Stages
     * const count = await prisma.stage.count({
     *   where: {
     *     // ... the filter for the Stages we want to count
     *   }
     * })
    **/
    count<T extends StageCountArgs>(
      args?: Subset<T, StageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StageAggregateArgs>(args: Subset<T, StageAggregateArgs>): Prisma.PrismaPromise<GetStageAggregateType<T>>

    /**
     * Group by Stage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StageGroupByArgs['orderBy'] }
        : { orderBy?: StageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stage model
   */
  readonly fields: StageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pipeline<T extends PipelineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PipelineDefaultArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    deals<T extends Stage$dealsArgs<ExtArgs> = {}>(args?: Subset<T, Stage$dealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stage model
   */ 
  interface StageFieldRefs {
    readonly id: FieldRef<"Stage", 'String'>
    readonly pipelineId: FieldRef<"Stage", 'String'>
    readonly name: FieldRef<"Stage", 'String'>
    readonly position: FieldRef<"Stage", 'Int'>
    readonly color: FieldRef<"Stage", 'String'>
    readonly probability: FieldRef<"Stage", 'Int'>
    readonly isWon: FieldRef<"Stage", 'Boolean'>
    readonly isLost: FieldRef<"Stage", 'Boolean'>
    readonly rottenAfterDays: FieldRef<"Stage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Stage findUnique
   */
  export type StageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage findUniqueOrThrow
   */
  export type StageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage findFirst
   */
  export type StageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage findFirstOrThrow
   */
  export type StageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stage to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stages.
     */
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage findMany
   */
  export type StageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter, which Stages to fetch.
     */
    where?: StageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stages to fetch.
     */
    orderBy?: StageOrderByWithRelationInput | StageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stages.
     */
    cursor?: StageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stages.
     */
    skip?: number
    distinct?: StageScalarFieldEnum | StageScalarFieldEnum[]
  }

  /**
   * Stage create
   */
  export type StageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The data needed to create a Stage.
     */
    data: XOR<StageCreateInput, StageUncheckedCreateInput>
  }

  /**
   * Stage createMany
   */
  export type StageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stages.
     */
    data: StageCreateManyInput | StageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stage createManyAndReturn
   */
  export type StageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Stages.
     */
    data: StageCreateManyInput | StageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stage update
   */
  export type StageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The data needed to update a Stage.
     */
    data: XOR<StageUpdateInput, StageUncheckedUpdateInput>
    /**
     * Choose, which Stage to update.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage updateMany
   */
  export type StageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stages.
     */
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyInput>
    /**
     * Filter which Stages to update
     */
    where?: StageWhereInput
  }

  /**
   * Stage upsert
   */
  export type StageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * The filter to search for the Stage to update in case it exists.
     */
    where: StageWhereUniqueInput
    /**
     * In case the Stage found by the `where` argument doesn't exist, create a new Stage with this data.
     */
    create: XOR<StageCreateInput, StageUncheckedCreateInput>
    /**
     * In case the Stage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StageUpdateInput, StageUncheckedUpdateInput>
  }

  /**
   * Stage delete
   */
  export type StageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
    /**
     * Filter which Stage to delete.
     */
    where: StageWhereUniqueInput
  }

  /**
   * Stage deleteMany
   */
  export type StageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stages to delete
     */
    where?: StageWhereInput
  }

  /**
   * Stage.deals
   */
  export type Stage$dealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    where?: DealWhereInput
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    cursor?: DealWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[]
  }

  /**
   * Stage without action
   */
  export type StageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stage
     */
    select?: StageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StageInclude<ExtArgs> | null
  }


  /**
   * Model Deal
   */

  export type AggregateDeal = {
    _count: DealCountAggregateOutputType | null
    _avg: DealAvgAggregateOutputType | null
    _sum: DealSumAggregateOutputType | null
    _min: DealMinAggregateOutputType | null
    _max: DealMaxAggregateOutputType | null
  }

  export type DealAvgAggregateOutputType = {
    value: Decimal | null
    probability: number | null
    position: number | null
  }

  export type DealSumAggregateOutputType = {
    value: Decimal | null
    probability: number | null
    position: number | null
  }

  export type DealMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    title: string | null
    value: Decimal | null
    currency: string | null
    probability: number | null
    pipelineId: string | null
    stageId: string | null
    position: number | null
    companyId: string | null
    ownerId: string | null
    status: string | null
    expectedCloseDate: Date | null
    isArchived: boolean | null
    stageEnteredAt: Date | null
    closedAt: Date | null
    closedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DealMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    title: string | null
    value: Decimal | null
    currency: string | null
    probability: number | null
    pipelineId: string | null
    stageId: string | null
    position: number | null
    companyId: string | null
    ownerId: string | null
    status: string | null
    expectedCloseDate: Date | null
    isArchived: boolean | null
    stageEnteredAt: Date | null
    closedAt: Date | null
    closedReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DealCountAggregateOutputType = {
    id: number
    workspaceId: number
    title: number
    value: number
    currency: number
    probability: number
    pipelineId: number
    stageId: number
    position: number
    companyId: number
    ownerId: number
    status: number
    expectedCloseDate: number
    isArchived: number
    stageEnteredAt: number
    closedAt: number
    closedReason: number
    customData: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DealAvgAggregateInputType = {
    value?: true
    probability?: true
    position?: true
  }

  export type DealSumAggregateInputType = {
    value?: true
    probability?: true
    position?: true
  }

  export type DealMinAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    value?: true
    currency?: true
    probability?: true
    pipelineId?: true
    stageId?: true
    position?: true
    companyId?: true
    ownerId?: true
    status?: true
    expectedCloseDate?: true
    isArchived?: true
    stageEnteredAt?: true
    closedAt?: true
    closedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DealMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    value?: true
    currency?: true
    probability?: true
    pipelineId?: true
    stageId?: true
    position?: true
    companyId?: true
    ownerId?: true
    status?: true
    expectedCloseDate?: true
    isArchived?: true
    stageEnteredAt?: true
    closedAt?: true
    closedReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DealCountAggregateInputType = {
    id?: true
    workspaceId?: true
    title?: true
    value?: true
    currency?: true
    probability?: true
    pipelineId?: true
    stageId?: true
    position?: true
    companyId?: true
    ownerId?: true
    status?: true
    expectedCloseDate?: true
    isArchived?: true
    stageEnteredAt?: true
    closedAt?: true
    closedReason?: true
    customData?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deal to aggregate.
     */
    where?: DealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deals
    **/
    _count?: true | DealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealMaxAggregateInputType
  }

  export type GetDealAggregateType<T extends DealAggregateArgs> = {
        [P in keyof T & keyof AggregateDeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeal[P]>
      : GetScalarType<T[P], AggregateDeal[P]>
  }




  export type DealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealWhereInput
    orderBy?: DealOrderByWithAggregationInput | DealOrderByWithAggregationInput[]
    by: DealScalarFieldEnum[] | DealScalarFieldEnum
    having?: DealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealCountAggregateInputType | true
    _avg?: DealAvgAggregateInputType
    _sum?: DealSumAggregateInputType
    _min?: DealMinAggregateInputType
    _max?: DealMaxAggregateInputType
  }

  export type DealGroupByOutputType = {
    id: string
    workspaceId: string
    title: string
    value: Decimal | null
    currency: string
    probability: number | null
    pipelineId: string
    stageId: string
    position: number
    companyId: string | null
    ownerId: string | null
    status: string
    expectedCloseDate: Date | null
    isArchived: boolean
    stageEnteredAt: Date
    closedAt: Date | null
    closedReason: string | null
    customData: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: DealCountAggregateOutputType | null
    _avg: DealAvgAggregateOutputType | null
    _sum: DealSumAggregateOutputType | null
    _min: DealMinAggregateOutputType | null
    _max: DealMaxAggregateOutputType | null
  }

  type GetDealGroupByPayload<T extends DealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealGroupByOutputType[P]>
            : GetScalarType<T[P], DealGroupByOutputType[P]>
        }
      >
    >


  export type DealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    value?: boolean
    currency?: boolean
    probability?: boolean
    pipelineId?: boolean
    stageId?: boolean
    position?: boolean
    companyId?: boolean
    ownerId?: boolean
    status?: boolean
    expectedCloseDate?: boolean
    isArchived?: boolean
    stageEnteredAt?: boolean
    closedAt?: boolean
    closedReason?: boolean
    customData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    stage?: boolean | StageDefaultArgs<ExtArgs>
    contacts?: boolean | Deal$contactsArgs<ExtArgs>
    activities?: boolean | Deal$activitiesArgs<ExtArgs>
    notes?: boolean | Deal$notesArgs<ExtArgs>
    _count?: boolean | DealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deal"]>

  export type DealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    value?: boolean
    currency?: boolean
    probability?: boolean
    pipelineId?: boolean
    stageId?: boolean
    position?: boolean
    companyId?: boolean
    ownerId?: boolean
    status?: boolean
    expectedCloseDate?: boolean
    isArchived?: boolean
    stageEnteredAt?: boolean
    closedAt?: boolean
    closedReason?: boolean
    customData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    stage?: boolean | StageDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deal"]>

  export type DealSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    title?: boolean
    value?: boolean
    currency?: boolean
    probability?: boolean
    pipelineId?: boolean
    stageId?: boolean
    position?: boolean
    companyId?: boolean
    ownerId?: boolean
    status?: boolean
    expectedCloseDate?: boolean
    isArchived?: boolean
    stageEnteredAt?: boolean
    closedAt?: boolean
    closedReason?: boolean
    customData?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    stage?: boolean | StageDefaultArgs<ExtArgs>
    contacts?: boolean | Deal$contactsArgs<ExtArgs>
    activities?: boolean | Deal$activitiesArgs<ExtArgs>
    notes?: boolean | Deal$notesArgs<ExtArgs>
    _count?: boolean | DealCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    pipeline?: boolean | PipelineDefaultArgs<ExtArgs>
    stage?: boolean | StageDefaultArgs<ExtArgs>
  }

  export type $DealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deal"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      pipeline: Prisma.$PipelinePayload<ExtArgs>
      stage: Prisma.$StagePayload<ExtArgs>
      contacts: Prisma.$DealContactPayload<ExtArgs>[]
      activities: Prisma.$ActivityPayload<ExtArgs>[]
      notes: Prisma.$NotePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      title: string
      value: Prisma.Decimal | null
      currency: string
      probability: number | null
      pipelineId: string
      stageId: string
      position: number
      companyId: string | null
      ownerId: string | null
      status: string
      expectedCloseDate: Date | null
      isArchived: boolean
      stageEnteredAt: Date
      closedAt: Date | null
      closedReason: string | null
      customData: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["deal"]>
    composites: {}
  }

  type DealGetPayload<S extends boolean | null | undefined | DealDefaultArgs> = $Result.GetResult<Prisma.$DealPayload, S>

  type DealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DealFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DealCountAggregateInputType | true
    }

  export interface DealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deal'], meta: { name: 'Deal' } }
    /**
     * Find zero or one Deal that matches the filter.
     * @param {DealFindUniqueArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealFindUniqueArgs>(args: SelectSubset<T, DealFindUniqueArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Deal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DealFindUniqueOrThrowArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealFindUniqueOrThrowArgs>(args: SelectSubset<T, DealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Deal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealFindFirstArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealFindFirstArgs>(args?: SelectSubset<T, DealFindFirstArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Deal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealFindFirstOrThrowArgs} args - Arguments to find a Deal
     * @example
     * // Get one Deal
     * const deal = await prisma.deal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealFindFirstOrThrowArgs>(args?: SelectSubset<T, DealFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Deals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deals
     * const deals = await prisma.deal.findMany()
     * 
     * // Get first 10 Deals
     * const deals = await prisma.deal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dealWithIdOnly = await prisma.deal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DealFindManyArgs>(args?: SelectSubset<T, DealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Deal.
     * @param {DealCreateArgs} args - Arguments to create a Deal.
     * @example
     * // Create one Deal
     * const Deal = await prisma.deal.create({
     *   data: {
     *     // ... data to create a Deal
     *   }
     * })
     * 
     */
    create<T extends DealCreateArgs>(args: SelectSubset<T, DealCreateArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Deals.
     * @param {DealCreateManyArgs} args - Arguments to create many Deals.
     * @example
     * // Create many Deals
     * const deal = await prisma.deal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealCreateManyArgs>(args?: SelectSubset<T, DealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deals and returns the data saved in the database.
     * @param {DealCreateManyAndReturnArgs} args - Arguments to create many Deals.
     * @example
     * // Create many Deals
     * const deal = await prisma.deal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deals and only return the `id`
     * const dealWithIdOnly = await prisma.deal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealCreateManyAndReturnArgs>(args?: SelectSubset<T, DealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Deal.
     * @param {DealDeleteArgs} args - Arguments to delete one Deal.
     * @example
     * // Delete one Deal
     * const Deal = await prisma.deal.delete({
     *   where: {
     *     // ... filter to delete one Deal
     *   }
     * })
     * 
     */
    delete<T extends DealDeleteArgs>(args: SelectSubset<T, DealDeleteArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Deal.
     * @param {DealUpdateArgs} args - Arguments to update one Deal.
     * @example
     * // Update one Deal
     * const deal = await prisma.deal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealUpdateArgs>(args: SelectSubset<T, DealUpdateArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Deals.
     * @param {DealDeleteManyArgs} args - Arguments to filter Deals to delete.
     * @example
     * // Delete a few Deals
     * const { count } = await prisma.deal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealDeleteManyArgs>(args?: SelectSubset<T, DealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deals
     * const deal = await prisma.deal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealUpdateManyArgs>(args: SelectSubset<T, DealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Deal.
     * @param {DealUpsertArgs} args - Arguments to update or create a Deal.
     * @example
     * // Update or create a Deal
     * const deal = await prisma.deal.upsert({
     *   create: {
     *     // ... data to create a Deal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deal we want to update
     *   }
     * })
     */
    upsert<T extends DealUpsertArgs>(args: SelectSubset<T, DealUpsertArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Deals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealCountArgs} args - Arguments to filter Deals to count.
     * @example
     * // Count the number of Deals
     * const count = await prisma.deal.count({
     *   where: {
     *     // ... the filter for the Deals we want to count
     *   }
     * })
    **/
    count<T extends DealCountArgs>(
      args?: Subset<T, DealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DealAggregateArgs>(args: Subset<T, DealAggregateArgs>): Prisma.PrismaPromise<GetDealAggregateType<T>>

    /**
     * Group by Deal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealGroupByArgs['orderBy'] }
        : { orderBy?: DealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deal model
   */
  readonly fields: DealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pipeline<T extends PipelineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PipelineDefaultArgs<ExtArgs>>): Prisma__PipelineClient<$Result.GetResult<Prisma.$PipelinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    stage<T extends StageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StageDefaultArgs<ExtArgs>>): Prisma__StageClient<$Result.GetResult<Prisma.$StagePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    contacts<T extends Deal$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Deal$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "findMany"> | Null>
    activities<T extends Deal$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Deal$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany"> | Null>
    notes<T extends Deal$notesArgs<ExtArgs> = {}>(args?: Subset<T, Deal$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deal model
   */ 
  interface DealFieldRefs {
    readonly id: FieldRef<"Deal", 'String'>
    readonly workspaceId: FieldRef<"Deal", 'String'>
    readonly title: FieldRef<"Deal", 'String'>
    readonly value: FieldRef<"Deal", 'Decimal'>
    readonly currency: FieldRef<"Deal", 'String'>
    readonly probability: FieldRef<"Deal", 'Int'>
    readonly pipelineId: FieldRef<"Deal", 'String'>
    readonly stageId: FieldRef<"Deal", 'String'>
    readonly position: FieldRef<"Deal", 'Int'>
    readonly companyId: FieldRef<"Deal", 'String'>
    readonly ownerId: FieldRef<"Deal", 'String'>
    readonly status: FieldRef<"Deal", 'String'>
    readonly expectedCloseDate: FieldRef<"Deal", 'DateTime'>
    readonly isArchived: FieldRef<"Deal", 'Boolean'>
    readonly stageEnteredAt: FieldRef<"Deal", 'DateTime'>
    readonly closedAt: FieldRef<"Deal", 'DateTime'>
    readonly closedReason: FieldRef<"Deal", 'String'>
    readonly customData: FieldRef<"Deal", 'Json'>
    readonly createdAt: FieldRef<"Deal", 'DateTime'>
    readonly updatedAt: FieldRef<"Deal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Deal findUnique
   */
  export type DealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter, which Deal to fetch.
     */
    where: DealWhereUniqueInput
  }

  /**
   * Deal findUniqueOrThrow
   */
  export type DealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter, which Deal to fetch.
     */
    where: DealWhereUniqueInput
  }

  /**
   * Deal findFirst
   */
  export type DealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter, which Deal to fetch.
     */
    where?: DealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deals.
     */
    cursor?: DealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deals.
     */
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[]
  }

  /**
   * Deal findFirstOrThrow
   */
  export type DealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter, which Deal to fetch.
     */
    where?: DealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deals.
     */
    cursor?: DealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deals.
     */
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[]
  }

  /**
   * Deal findMany
   */
  export type DealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter, which Deals to fetch.
     */
    where?: DealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deals to fetch.
     */
    orderBy?: DealOrderByWithRelationInput | DealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deals.
     */
    cursor?: DealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deals.
     */
    skip?: number
    distinct?: DealScalarFieldEnum | DealScalarFieldEnum[]
  }

  /**
   * Deal create
   */
  export type DealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * The data needed to create a Deal.
     */
    data: XOR<DealCreateInput, DealUncheckedCreateInput>
  }

  /**
   * Deal createMany
   */
  export type DealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deals.
     */
    data: DealCreateManyInput | DealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deal createManyAndReturn
   */
  export type DealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Deals.
     */
    data: DealCreateManyInput | DealCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deal update
   */
  export type DealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * The data needed to update a Deal.
     */
    data: XOR<DealUpdateInput, DealUncheckedUpdateInput>
    /**
     * Choose, which Deal to update.
     */
    where: DealWhereUniqueInput
  }

  /**
   * Deal updateMany
   */
  export type DealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deals.
     */
    data: XOR<DealUpdateManyMutationInput, DealUncheckedUpdateManyInput>
    /**
     * Filter which Deals to update
     */
    where?: DealWhereInput
  }

  /**
   * Deal upsert
   */
  export type DealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * The filter to search for the Deal to update in case it exists.
     */
    where: DealWhereUniqueInput
    /**
     * In case the Deal found by the `where` argument doesn't exist, create a new Deal with this data.
     */
    create: XOR<DealCreateInput, DealUncheckedCreateInput>
    /**
     * In case the Deal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealUpdateInput, DealUncheckedUpdateInput>
  }

  /**
   * Deal delete
   */
  export type DealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    /**
     * Filter which Deal to delete.
     */
    where: DealWhereUniqueInput
  }

  /**
   * Deal deleteMany
   */
  export type DealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deals to delete
     */
    where?: DealWhereInput
  }

  /**
   * Deal.contacts
   */
  export type Deal$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    where?: DealContactWhereInput
    orderBy?: DealContactOrderByWithRelationInput | DealContactOrderByWithRelationInput[]
    cursor?: DealContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DealContactScalarFieldEnum | DealContactScalarFieldEnum[]
  }

  /**
   * Deal.activities
   */
  export type Deal$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    cursor?: ActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Deal.notes
   */
  export type Deal$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    cursor?: NoteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Deal without action
   */
  export type DealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
  }


  /**
   * Model DealContact
   */

  export type AggregateDealContact = {
    _count: DealContactCountAggregateOutputType | null
    _min: DealContactMinAggregateOutputType | null
    _max: DealContactMaxAggregateOutputType | null
  }

  export type DealContactMinAggregateOutputType = {
    dealId: string | null
    contactId: string | null
    role: string | null
  }

  export type DealContactMaxAggregateOutputType = {
    dealId: string | null
    contactId: string | null
    role: string | null
  }

  export type DealContactCountAggregateOutputType = {
    dealId: number
    contactId: number
    role: number
    _all: number
  }


  export type DealContactMinAggregateInputType = {
    dealId?: true
    contactId?: true
    role?: true
  }

  export type DealContactMaxAggregateInputType = {
    dealId?: true
    contactId?: true
    role?: true
  }

  export type DealContactCountAggregateInputType = {
    dealId?: true
    contactId?: true
    role?: true
    _all?: true
  }

  export type DealContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealContact to aggregate.
     */
    where?: DealContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealContacts to fetch.
     */
    orderBy?: DealContactOrderByWithRelationInput | DealContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DealContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DealContacts
    **/
    _count?: true | DealContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DealContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DealContactMaxAggregateInputType
  }

  export type GetDealContactAggregateType<T extends DealContactAggregateArgs> = {
        [P in keyof T & keyof AggregateDealContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDealContact[P]>
      : GetScalarType<T[P], AggregateDealContact[P]>
  }




  export type DealContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DealContactWhereInput
    orderBy?: DealContactOrderByWithAggregationInput | DealContactOrderByWithAggregationInput[]
    by: DealContactScalarFieldEnum[] | DealContactScalarFieldEnum
    having?: DealContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DealContactCountAggregateInputType | true
    _min?: DealContactMinAggregateInputType
    _max?: DealContactMaxAggregateInputType
  }

  export type DealContactGroupByOutputType = {
    dealId: string
    contactId: string
    role: string | null
    _count: DealContactCountAggregateOutputType | null
    _min: DealContactMinAggregateOutputType | null
    _max: DealContactMaxAggregateOutputType | null
  }

  type GetDealContactGroupByPayload<T extends DealContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DealContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DealContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DealContactGroupByOutputType[P]>
            : GetScalarType<T[P], DealContactGroupByOutputType[P]>
        }
      >
    >


  export type DealContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dealId?: boolean
    contactId?: boolean
    role?: boolean
    deal?: boolean | DealDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealContact"]>

  export type DealContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    dealId?: boolean
    contactId?: boolean
    role?: boolean
    deal?: boolean | DealDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dealContact"]>

  export type DealContactSelectScalar = {
    dealId?: boolean
    contactId?: boolean
    role?: boolean
  }

  export type DealContactInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }
  export type DealContactIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deal?: boolean | DealDefaultArgs<ExtArgs>
    contact?: boolean | ContactDefaultArgs<ExtArgs>
  }

  export type $DealContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DealContact"
    objects: {
      deal: Prisma.$DealPayload<ExtArgs>
      contact: Prisma.$ContactPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      dealId: string
      contactId: string
      role: string | null
    }, ExtArgs["result"]["dealContact"]>
    composites: {}
  }

  type DealContactGetPayload<S extends boolean | null | undefined | DealContactDefaultArgs> = $Result.GetResult<Prisma.$DealContactPayload, S>

  type DealContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DealContactFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DealContactCountAggregateInputType | true
    }

  export interface DealContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DealContact'], meta: { name: 'DealContact' } }
    /**
     * Find zero or one DealContact that matches the filter.
     * @param {DealContactFindUniqueArgs} args - Arguments to find a DealContact
     * @example
     * // Get one DealContact
     * const dealContact = await prisma.dealContact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DealContactFindUniqueArgs>(args: SelectSubset<T, DealContactFindUniqueArgs<ExtArgs>>): Prisma__DealContactClient<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DealContact that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DealContactFindUniqueOrThrowArgs} args - Arguments to find a DealContact
     * @example
     * // Get one DealContact
     * const dealContact = await prisma.dealContact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DealContactFindUniqueOrThrowArgs>(args: SelectSubset<T, DealContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DealContactClient<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DealContact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealContactFindFirstArgs} args - Arguments to find a DealContact
     * @example
     * // Get one DealContact
     * const dealContact = await prisma.dealContact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DealContactFindFirstArgs>(args?: SelectSubset<T, DealContactFindFirstArgs<ExtArgs>>): Prisma__DealContactClient<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DealContact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealContactFindFirstOrThrowArgs} args - Arguments to find a DealContact
     * @example
     * // Get one DealContact
     * const dealContact = await prisma.dealContact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DealContactFindFirstOrThrowArgs>(args?: SelectSubset<T, DealContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__DealContactClient<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DealContacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DealContacts
     * const dealContacts = await prisma.dealContact.findMany()
     * 
     * // Get first 10 DealContacts
     * const dealContacts = await prisma.dealContact.findMany({ take: 10 })
     * 
     * // Only select the `dealId`
     * const dealContactWithDealIdOnly = await prisma.dealContact.findMany({ select: { dealId: true } })
     * 
     */
    findMany<T extends DealContactFindManyArgs>(args?: SelectSubset<T, DealContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DealContact.
     * @param {DealContactCreateArgs} args - Arguments to create a DealContact.
     * @example
     * // Create one DealContact
     * const DealContact = await prisma.dealContact.create({
     *   data: {
     *     // ... data to create a DealContact
     *   }
     * })
     * 
     */
    create<T extends DealContactCreateArgs>(args: SelectSubset<T, DealContactCreateArgs<ExtArgs>>): Prisma__DealContactClient<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DealContacts.
     * @param {DealContactCreateManyArgs} args - Arguments to create many DealContacts.
     * @example
     * // Create many DealContacts
     * const dealContact = await prisma.dealContact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DealContactCreateManyArgs>(args?: SelectSubset<T, DealContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DealContacts and returns the data saved in the database.
     * @param {DealContactCreateManyAndReturnArgs} args - Arguments to create many DealContacts.
     * @example
     * // Create many DealContacts
     * const dealContact = await prisma.dealContact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DealContacts and only return the `dealId`
     * const dealContactWithDealIdOnly = await prisma.dealContact.createManyAndReturn({ 
     *   select: { dealId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DealContactCreateManyAndReturnArgs>(args?: SelectSubset<T, DealContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DealContact.
     * @param {DealContactDeleteArgs} args - Arguments to delete one DealContact.
     * @example
     * // Delete one DealContact
     * const DealContact = await prisma.dealContact.delete({
     *   where: {
     *     // ... filter to delete one DealContact
     *   }
     * })
     * 
     */
    delete<T extends DealContactDeleteArgs>(args: SelectSubset<T, DealContactDeleteArgs<ExtArgs>>): Prisma__DealContactClient<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DealContact.
     * @param {DealContactUpdateArgs} args - Arguments to update one DealContact.
     * @example
     * // Update one DealContact
     * const dealContact = await prisma.dealContact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DealContactUpdateArgs>(args: SelectSubset<T, DealContactUpdateArgs<ExtArgs>>): Prisma__DealContactClient<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DealContacts.
     * @param {DealContactDeleteManyArgs} args - Arguments to filter DealContacts to delete.
     * @example
     * // Delete a few DealContacts
     * const { count } = await prisma.dealContact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DealContactDeleteManyArgs>(args?: SelectSubset<T, DealContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DealContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DealContacts
     * const dealContact = await prisma.dealContact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DealContactUpdateManyArgs>(args: SelectSubset<T, DealContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DealContact.
     * @param {DealContactUpsertArgs} args - Arguments to update or create a DealContact.
     * @example
     * // Update or create a DealContact
     * const dealContact = await prisma.dealContact.upsert({
     *   create: {
     *     // ... data to create a DealContact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DealContact we want to update
     *   }
     * })
     */
    upsert<T extends DealContactUpsertArgs>(args: SelectSubset<T, DealContactUpsertArgs<ExtArgs>>): Prisma__DealContactClient<$Result.GetResult<Prisma.$DealContactPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DealContacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealContactCountArgs} args - Arguments to filter DealContacts to count.
     * @example
     * // Count the number of DealContacts
     * const count = await prisma.dealContact.count({
     *   where: {
     *     // ... the filter for the DealContacts we want to count
     *   }
     * })
    **/
    count<T extends DealContactCountArgs>(
      args?: Subset<T, DealContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DealContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DealContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DealContactAggregateArgs>(args: Subset<T, DealContactAggregateArgs>): Prisma.PrismaPromise<GetDealContactAggregateType<T>>

    /**
     * Group by DealContact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DealContactGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DealContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DealContactGroupByArgs['orderBy'] }
        : { orderBy?: DealContactGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DealContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDealContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DealContact model
   */
  readonly fields: DealContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DealContact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DealContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deal<T extends DealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DealDefaultArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    contact<T extends ContactDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContactDefaultArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DealContact model
   */ 
  interface DealContactFieldRefs {
    readonly dealId: FieldRef<"DealContact", 'String'>
    readonly contactId: FieldRef<"DealContact", 'String'>
    readonly role: FieldRef<"DealContact", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DealContact findUnique
   */
  export type DealContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    /**
     * Filter, which DealContact to fetch.
     */
    where: DealContactWhereUniqueInput
  }

  /**
   * DealContact findUniqueOrThrow
   */
  export type DealContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    /**
     * Filter, which DealContact to fetch.
     */
    where: DealContactWhereUniqueInput
  }

  /**
   * DealContact findFirst
   */
  export type DealContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    /**
     * Filter, which DealContact to fetch.
     */
    where?: DealContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealContacts to fetch.
     */
    orderBy?: DealContactOrderByWithRelationInput | DealContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealContacts.
     */
    cursor?: DealContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealContacts.
     */
    distinct?: DealContactScalarFieldEnum | DealContactScalarFieldEnum[]
  }

  /**
   * DealContact findFirstOrThrow
   */
  export type DealContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    /**
     * Filter, which DealContact to fetch.
     */
    where?: DealContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealContacts to fetch.
     */
    orderBy?: DealContactOrderByWithRelationInput | DealContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DealContacts.
     */
    cursor?: DealContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealContacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DealContacts.
     */
    distinct?: DealContactScalarFieldEnum | DealContactScalarFieldEnum[]
  }

  /**
   * DealContact findMany
   */
  export type DealContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    /**
     * Filter, which DealContacts to fetch.
     */
    where?: DealContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DealContacts to fetch.
     */
    orderBy?: DealContactOrderByWithRelationInput | DealContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DealContacts.
     */
    cursor?: DealContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DealContacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DealContacts.
     */
    skip?: number
    distinct?: DealContactScalarFieldEnum | DealContactScalarFieldEnum[]
  }

  /**
   * DealContact create
   */
  export type DealContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    /**
     * The data needed to create a DealContact.
     */
    data: XOR<DealContactCreateInput, DealContactUncheckedCreateInput>
  }

  /**
   * DealContact createMany
   */
  export type DealContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DealContacts.
     */
    data: DealContactCreateManyInput | DealContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DealContact createManyAndReturn
   */
  export type DealContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DealContacts.
     */
    data: DealContactCreateManyInput | DealContactCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DealContact update
   */
  export type DealContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    /**
     * The data needed to update a DealContact.
     */
    data: XOR<DealContactUpdateInput, DealContactUncheckedUpdateInput>
    /**
     * Choose, which DealContact to update.
     */
    where: DealContactWhereUniqueInput
  }

  /**
   * DealContact updateMany
   */
  export type DealContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DealContacts.
     */
    data: XOR<DealContactUpdateManyMutationInput, DealContactUncheckedUpdateManyInput>
    /**
     * Filter which DealContacts to update
     */
    where?: DealContactWhereInput
  }

  /**
   * DealContact upsert
   */
  export type DealContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    /**
     * The filter to search for the DealContact to update in case it exists.
     */
    where: DealContactWhereUniqueInput
    /**
     * In case the DealContact found by the `where` argument doesn't exist, create a new DealContact with this data.
     */
    create: XOR<DealContactCreateInput, DealContactUncheckedCreateInput>
    /**
     * In case the DealContact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DealContactUpdateInput, DealContactUncheckedUpdateInput>
  }

  /**
   * DealContact delete
   */
  export type DealContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
    /**
     * Filter which DealContact to delete.
     */
    where: DealContactWhereUniqueInput
  }

  /**
   * DealContact deleteMany
   */
  export type DealContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DealContacts to delete
     */
    where?: DealContactWhereInput
  }

  /**
   * DealContact without action
   */
  export type DealContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DealContact
     */
    select?: DealContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealContactInclude<ExtArgs> | null
  }


  /**
   * Model Activity
   */

  export type AggregateActivity = {
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  export type ActivityMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    type: string | null
    entityType: string | null
    entityId: string | null
    contactId: string | null
    dealId: string | null
    userId: string | null
    source: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    type: string | null
    entityType: string | null
    entityId: string | null
    contactId: string | null
    dealId: string | null
    userId: string | null
    source: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
  }

  export type ActivityCountAggregateOutputType = {
    id: number
    workspaceId: number
    type: number
    entityType: number
    entityId: number
    contactId: number
    dealId: number
    userId: number
    source: number
    title: number
    description: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type ActivityMinAggregateInputType = {
    id?: true
    workspaceId?: true
    type?: true
    entityType?: true
    entityId?: true
    contactId?: true
    dealId?: true
    userId?: true
    source?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type ActivityMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    type?: true
    entityType?: true
    entityId?: true
    contactId?: true
    dealId?: true
    userId?: true
    source?: true
    title?: true
    description?: true
    createdAt?: true
  }

  export type ActivityCountAggregateInputType = {
    id?: true
    workspaceId?: true
    type?: true
    entityType?: true
    entityId?: true
    contactId?: true
    dealId?: true
    userId?: true
    source?: true
    title?: true
    description?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type ActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activity to aggregate.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Activities
    **/
    _count?: true | ActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityMaxAggregateInputType
  }

  export type GetActivityAggregateType<T extends ActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivity[P]>
      : GetScalarType<T[P], AggregateActivity[P]>
  }




  export type ActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityWhereInput
    orderBy?: ActivityOrderByWithAggregationInput | ActivityOrderByWithAggregationInput[]
    by: ActivityScalarFieldEnum[] | ActivityScalarFieldEnum
    having?: ActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityCountAggregateInputType | true
    _min?: ActivityMinAggregateInputType
    _max?: ActivityMaxAggregateInputType
  }

  export type ActivityGroupByOutputType = {
    id: string
    workspaceId: string
    type: string
    entityType: string
    entityId: string
    contactId: string | null
    dealId: string | null
    userId: string | null
    source: string | null
    title: string
    description: string | null
    metadata: JsonValue | null
    createdAt: Date
    _count: ActivityCountAggregateOutputType | null
    _min: ActivityMinAggregateOutputType | null
    _max: ActivityMaxAggregateOutputType | null
  }

  type GetActivityGroupByPayload<T extends ActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityGroupByOutputType[P]>
        }
      >
    >


  export type ActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    type?: boolean
    entityType?: boolean
    entityId?: boolean
    contactId?: boolean
    dealId?: boolean
    userId?: boolean
    source?: boolean
    title?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    contact?: boolean | Activity$contactArgs<ExtArgs>
    deal?: boolean | Activity$dealArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    type?: boolean
    entityType?: boolean
    entityId?: boolean
    contactId?: boolean
    dealId?: boolean
    userId?: boolean
    source?: boolean
    title?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    contact?: boolean | Activity$contactArgs<ExtArgs>
    deal?: boolean | Activity$dealArgs<ExtArgs>
  }, ExtArgs["result"]["activity"]>

  export type ActivitySelectScalar = {
    id?: boolean
    workspaceId?: boolean
    type?: boolean
    entityType?: boolean
    entityId?: boolean
    contactId?: boolean
    dealId?: boolean
    userId?: boolean
    source?: boolean
    title?: boolean
    description?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type ActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    contact?: boolean | Activity$contactArgs<ExtArgs>
    deal?: boolean | Activity$dealArgs<ExtArgs>
  }
  export type ActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    contact?: boolean | Activity$contactArgs<ExtArgs>
    deal?: boolean | Activity$dealArgs<ExtArgs>
  }

  export type $ActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Activity"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      contact: Prisma.$ContactPayload<ExtArgs> | null
      deal: Prisma.$DealPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      type: string
      entityType: string
      entityId: string
      contactId: string | null
      dealId: string | null
      userId: string | null
      source: string | null
      title: string
      description: string | null
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["activity"]>
    composites: {}
  }

  type ActivityGetPayload<S extends boolean | null | undefined | ActivityDefaultArgs> = $Result.GetResult<Prisma.$ActivityPayload, S>

  type ActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActivityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActivityCountAggregateInputType | true
    }

  export interface ActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Activity'], meta: { name: 'Activity' } }
    /**
     * Find zero or one Activity that matches the filter.
     * @param {ActivityFindUniqueArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityFindUniqueArgs>(args: SelectSubset<T, ActivityFindUniqueArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Activity that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ActivityFindUniqueOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Activity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityFindFirstArgs>(args?: SelectSubset<T, ActivityFindFirstArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Activity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindFirstOrThrowArgs} args - Arguments to find a Activity
     * @example
     * // Get one Activity
     * const activity = await prisma.activity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Activities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Activities
     * const activities = await prisma.activity.findMany()
     * 
     * // Get first 10 Activities
     * const activities = await prisma.activity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityWithIdOnly = await prisma.activity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityFindManyArgs>(args?: SelectSubset<T, ActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Activity.
     * @param {ActivityCreateArgs} args - Arguments to create a Activity.
     * @example
     * // Create one Activity
     * const Activity = await prisma.activity.create({
     *   data: {
     *     // ... data to create a Activity
     *   }
     * })
     * 
     */
    create<T extends ActivityCreateArgs>(args: SelectSubset<T, ActivityCreateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Activities.
     * @param {ActivityCreateManyArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityCreateManyArgs>(args?: SelectSubset<T, ActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Activities and returns the data saved in the database.
     * @param {ActivityCreateManyAndReturnArgs} args - Arguments to create many Activities.
     * @example
     * // Create many Activities
     * const activity = await prisma.activity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Activities and only return the `id`
     * const activityWithIdOnly = await prisma.activity.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Activity.
     * @param {ActivityDeleteArgs} args - Arguments to delete one Activity.
     * @example
     * // Delete one Activity
     * const Activity = await prisma.activity.delete({
     *   where: {
     *     // ... filter to delete one Activity
     *   }
     * })
     * 
     */
    delete<T extends ActivityDeleteArgs>(args: SelectSubset<T, ActivityDeleteArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Activity.
     * @param {ActivityUpdateArgs} args - Arguments to update one Activity.
     * @example
     * // Update one Activity
     * const activity = await prisma.activity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityUpdateArgs>(args: SelectSubset<T, ActivityUpdateArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Activities.
     * @param {ActivityDeleteManyArgs} args - Arguments to filter Activities to delete.
     * @example
     * // Delete a few Activities
     * const { count } = await prisma.activity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityDeleteManyArgs>(args?: SelectSubset<T, ActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Activities
     * const activity = await prisma.activity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityUpdateManyArgs>(args: SelectSubset<T, ActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Activity.
     * @param {ActivityUpsertArgs} args - Arguments to update or create a Activity.
     * @example
     * // Update or create a Activity
     * const activity = await prisma.activity.upsert({
     *   create: {
     *     // ... data to create a Activity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Activity we want to update
     *   }
     * })
     */
    upsert<T extends ActivityUpsertArgs>(args: SelectSubset<T, ActivityUpsertArgs<ExtArgs>>): Prisma__ActivityClient<$Result.GetResult<Prisma.$ActivityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Activities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityCountArgs} args - Arguments to filter Activities to count.
     * @example
     * // Count the number of Activities
     * const count = await prisma.activity.count({
     *   where: {
     *     // ... the filter for the Activities we want to count
     *   }
     * })
    **/
    count<T extends ActivityCountArgs>(
      args?: Subset<T, ActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivityAggregateArgs>(args: Subset<T, ActivityAggregateArgs>): Prisma.PrismaPromise<GetActivityAggregateType<T>>

    /**
     * Group by Activity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityGroupByArgs['orderBy'] }
        : { orderBy?: ActivityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Activity model
   */
  readonly fields: ActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Activity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    contact<T extends Activity$contactArgs<ExtArgs> = {}>(args?: Subset<T, Activity$contactArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    deal<T extends Activity$dealArgs<ExtArgs> = {}>(args?: Subset<T, Activity$dealArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Activity model
   */ 
  interface ActivityFieldRefs {
    readonly id: FieldRef<"Activity", 'String'>
    readonly workspaceId: FieldRef<"Activity", 'String'>
    readonly type: FieldRef<"Activity", 'String'>
    readonly entityType: FieldRef<"Activity", 'String'>
    readonly entityId: FieldRef<"Activity", 'String'>
    readonly contactId: FieldRef<"Activity", 'String'>
    readonly dealId: FieldRef<"Activity", 'String'>
    readonly userId: FieldRef<"Activity", 'String'>
    readonly source: FieldRef<"Activity", 'String'>
    readonly title: FieldRef<"Activity", 'String'>
    readonly description: FieldRef<"Activity", 'String'>
    readonly metadata: FieldRef<"Activity", 'Json'>
    readonly createdAt: FieldRef<"Activity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Activity findUnique
   */
  export type ActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findUniqueOrThrow
   */
  export type ActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity findFirst
   */
  export type ActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findFirstOrThrow
   */
  export type ActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activity to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Activities.
     */
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity findMany
   */
  export type ActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter, which Activities to fetch.
     */
    where?: ActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Activities to fetch.
     */
    orderBy?: ActivityOrderByWithRelationInput | ActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Activities.
     */
    cursor?: ActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Activities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Activities.
     */
    skip?: number
    distinct?: ActivityScalarFieldEnum | ActivityScalarFieldEnum[]
  }

  /**
   * Activity create
   */
  export type ActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a Activity.
     */
    data: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
  }

  /**
   * Activity createMany
   */
  export type ActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Activity createManyAndReturn
   */
  export type ActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Activities.
     */
    data: ActivityCreateManyInput | ActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Activity update
   */
  export type ActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a Activity.
     */
    data: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
    /**
     * Choose, which Activity to update.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity updateMany
   */
  export type ActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Activities.
     */
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyInput>
    /**
     * Filter which Activities to update
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity upsert
   */
  export type ActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the Activity to update in case it exists.
     */
    where: ActivityWhereUniqueInput
    /**
     * In case the Activity found by the `where` argument doesn't exist, create a new Activity with this data.
     */
    create: XOR<ActivityCreateInput, ActivityUncheckedCreateInput>
    /**
     * In case the Activity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityUpdateInput, ActivityUncheckedUpdateInput>
  }

  /**
   * Activity delete
   */
  export type ActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
    /**
     * Filter which Activity to delete.
     */
    where: ActivityWhereUniqueInput
  }

  /**
   * Activity deleteMany
   */
  export type ActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Activities to delete
     */
    where?: ActivityWhereInput
  }

  /**
   * Activity.contact
   */
  export type Activity$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
  }

  /**
   * Activity.deal
   */
  export type Activity$dealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    where?: DealWhereInput
  }

  /**
   * Activity without action
   */
  export type ActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Activity
     */
    select?: ActivitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityInclude<ExtArgs> | null
  }


  /**
   * Model Note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    content: string | null
    entityType: string | null
    entityId: string | null
    contactId: string | null
    dealId: string | null
    userId: string | null
    isPinned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    content: string | null
    entityType: string | null
    entityId: string | null
    contactId: string | null
    dealId: string | null
    userId: string | null
    isPinned: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    workspaceId: number
    content: number
    entityType: number
    entityId: number
    contactId: number
    dealId: number
    userId: number
    isPinned: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NoteMinAggregateInputType = {
    id?: true
    workspaceId?: true
    content?: true
    entityType?: true
    entityId?: true
    contactId?: true
    dealId?: true
    userId?: true
    isPinned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    content?: true
    entityType?: true
    entityId?: true
    contactId?: true
    dealId?: true
    userId?: true
    isPinned?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    workspaceId?: true
    content?: true
    entityType?: true
    entityId?: true
    contactId?: true
    dealId?: true
    userId?: true
    isPinned?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Note to aggregate.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type NoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoteWhereInput
    orderBy?: NoteOrderByWithAggregationInput | NoteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: NoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: string
    workspaceId: string
    content: string
    entityType: string
    entityId: string
    contactId: string | null
    dealId: string | null
    userId: string | null
    isPinned: boolean
    createdAt: Date
    updatedAt: Date
    _count: NoteCountAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends NoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type NoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    content?: boolean
    entityType?: boolean
    entityId?: boolean
    contactId?: boolean
    dealId?: boolean
    userId?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    contact?: boolean | Note$contactArgs<ExtArgs>
    deal?: boolean | Note$dealArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    content?: boolean
    entityType?: boolean
    entityId?: boolean
    contactId?: boolean
    dealId?: boolean
    userId?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    contact?: boolean | Note$contactArgs<ExtArgs>
    deal?: boolean | Note$dealArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type NoteSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    content?: boolean
    entityType?: boolean
    entityId?: boolean
    contactId?: boolean
    dealId?: boolean
    userId?: boolean
    isPinned?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    contact?: boolean | Note$contactArgs<ExtArgs>
    deal?: boolean | Note$dealArgs<ExtArgs>
  }
  export type NoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    contact?: boolean | Note$contactArgs<ExtArgs>
    deal?: boolean | Note$dealArgs<ExtArgs>
  }

  export type $NotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Note"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      contact: Prisma.$ContactPayload<ExtArgs> | null
      deal: Prisma.$DealPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      content: string
      entityType: string
      entityId: string
      contactId: string | null
      dealId: string | null
      userId: string | null
      isPinned: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type NoteGetPayload<S extends boolean | null | undefined | NoteDefaultArgs> = $Result.GetResult<Prisma.$NotePayload, S>

  type NoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NoteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface NoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Note'], meta: { name: 'Note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {NoteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoteFindUniqueArgs>(args: SelectSubset<T, NoteFindUniqueArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NoteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoteFindUniqueOrThrowArgs>(args: SelectSubset<T, NoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoteFindFirstArgs>(args?: SelectSubset<T, NoteFindFirstArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoteFindFirstOrThrowArgs>(args?: SelectSubset<T, NoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoteFindManyArgs>(args?: SelectSubset<T, NoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Note.
     * @param {NoteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends NoteCreateArgs>(args: SelectSubset<T, NoteCreateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notes.
     * @param {NoteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoteCreateManyArgs>(args?: SelectSubset<T, NoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {NoteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NoteCreateManyAndReturnArgs>(args?: SelectSubset<T, NoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Note.
     * @param {NoteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends NoteDeleteArgs>(args: SelectSubset<T, NoteDeleteArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Note.
     * @param {NoteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoteUpdateArgs>(args: SelectSubset<T, NoteUpdateArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notes.
     * @param {NoteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoteDeleteManyArgs>(args?: SelectSubset<T, NoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoteUpdateManyArgs>(args: SelectSubset<T, NoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Note.
     * @param {NoteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends NoteUpsertArgs>(args: SelectSubset<T, NoteUpsertArgs<ExtArgs>>): Prisma__NoteClient<$Result.GetResult<Prisma.$NotePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends NoteCountArgs>(
      args?: Subset<T, NoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoteGroupByArgs['orderBy'] }
        : { orderBy?: NoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Note model
   */
  readonly fields: NoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    contact<T extends Note$contactArgs<ExtArgs> = {}>(args?: Subset<T, Note$contactArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    deal<T extends Note$dealArgs<ExtArgs> = {}>(args?: Subset<T, Note$dealArgs<ExtArgs>>): Prisma__DealClient<$Result.GetResult<Prisma.$DealPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Note model
   */ 
  interface NoteFieldRefs {
    readonly id: FieldRef<"Note", 'String'>
    readonly workspaceId: FieldRef<"Note", 'String'>
    readonly content: FieldRef<"Note", 'String'>
    readonly entityType: FieldRef<"Note", 'String'>
    readonly entityId: FieldRef<"Note", 'String'>
    readonly contactId: FieldRef<"Note", 'String'>
    readonly dealId: FieldRef<"Note", 'String'>
    readonly userId: FieldRef<"Note", 'String'>
    readonly isPinned: FieldRef<"Note", 'Boolean'>
    readonly createdAt: FieldRef<"Note", 'DateTime'>
    readonly updatedAt: FieldRef<"Note", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Note findUnique
   */
  export type NoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findUniqueOrThrow
   */
  export type NoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note findFirst
   */
  export type NoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findFirstOrThrow
   */
  export type NoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Note to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note findMany
   */
  export type NoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter, which Notes to fetch.
     */
    where?: NoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notes to fetch.
     */
    orderBy?: NoteOrderByWithRelationInput | NoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notes.
     */
    cursor?: NoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * Note create
   */
  export type NoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to create a Note.
     */
    data: XOR<NoteCreateInput, NoteUncheckedCreateInput>
  }

  /**
   * Note createMany
   */
  export type NoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Note createManyAndReturn
   */
  export type NoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notes.
     */
    data: NoteCreateManyInput | NoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Note update
   */
  export type NoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The data needed to update a Note.
     */
    data: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
    /**
     * Choose, which Note to update.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note updateMany
   */
  export type NoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notes.
     */
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyInput>
    /**
     * Filter which Notes to update
     */
    where?: NoteWhereInput
  }

  /**
   * Note upsert
   */
  export type NoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * The filter to search for the Note to update in case it exists.
     */
    where: NoteWhereUniqueInput
    /**
     * In case the Note found by the `where` argument doesn't exist, create a new Note with this data.
     */
    create: XOR<NoteCreateInput, NoteUncheckedCreateInput>
    /**
     * In case the Note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoteUpdateInput, NoteUncheckedUpdateInput>
  }

  /**
   * Note delete
   */
  export type NoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
    /**
     * Filter which Note to delete.
     */
    where: NoteWhereUniqueInput
  }

  /**
   * Note deleteMany
   */
  export type NoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notes to delete
     */
    where?: NoteWhereInput
  }

  /**
   * Note.contact
   */
  export type Note$contactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
  }

  /**
   * Note.deal
   */
  export type Note$dealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deal
     */
    select?: DealSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DealInclude<ExtArgs> | null
    where?: DealWhereInput
  }

  /**
   * Note without action
   */
  export type NoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Note
     */
    select?: NoteSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoteInclude<ExtArgs> | null
  }


  /**
   * Model WebhookEndpoint
   */

  export type AggregateWebhookEndpoint = {
    _count: WebhookEndpointCountAggregateOutputType | null
    _avg: WebhookEndpointAvgAggregateOutputType | null
    _sum: WebhookEndpointSumAggregateOutputType | null
    _min: WebhookEndpointMinAggregateOutputType | null
    _max: WebhookEndpointMaxAggregateOutputType | null
  }

  export type WebhookEndpointAvgAggregateOutputType = {
    failureCount: number | null
    lastStatusCode: number | null
  }

  export type WebhookEndpointSumAggregateOutputType = {
    failureCount: number | null
    lastStatusCode: number | null
  }

  export type WebhookEndpointMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    url: string | null
    secret: string | null
    isActive: boolean | null
    failureCount: number | null
    lastTriggeredAt: Date | null
    lastStatusCode: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookEndpointMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    url: string | null
    secret: string | null
    isActive: boolean | null
    failureCount: number | null
    lastTriggeredAt: Date | null
    lastStatusCode: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebhookEndpointCountAggregateOutputType = {
    id: number
    workspaceId: number
    name: number
    url: number
    secret: number
    events: number
    isActive: number
    failureCount: number
    lastTriggeredAt: number
    lastStatusCode: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebhookEndpointAvgAggregateInputType = {
    failureCount?: true
    lastStatusCode?: true
  }

  export type WebhookEndpointSumAggregateInputType = {
    failureCount?: true
    lastStatusCode?: true
  }

  export type WebhookEndpointMinAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    url?: true
    secret?: true
    isActive?: true
    failureCount?: true
    lastTriggeredAt?: true
    lastStatusCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookEndpointMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    url?: true
    secret?: true
    isActive?: true
    failureCount?: true
    lastTriggeredAt?: true
    lastStatusCode?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebhookEndpointCountAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    url?: true
    secret?: true
    events?: true
    isActive?: true
    failureCount?: true
    lastTriggeredAt?: true
    lastStatusCode?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebhookEndpointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEndpoint to aggregate.
     */
    where?: WebhookEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEndpoints to fetch.
     */
    orderBy?: WebhookEndpointOrderByWithRelationInput | WebhookEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebhookEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEndpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebhookEndpoints
    **/
    _count?: true | WebhookEndpointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebhookEndpointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebhookEndpointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebhookEndpointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebhookEndpointMaxAggregateInputType
  }

  export type GetWebhookEndpointAggregateType<T extends WebhookEndpointAggregateArgs> = {
        [P in keyof T & keyof AggregateWebhookEndpoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebhookEndpoint[P]>
      : GetScalarType<T[P], AggregateWebhookEndpoint[P]>
  }




  export type WebhookEndpointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebhookEndpointWhereInput
    orderBy?: WebhookEndpointOrderByWithAggregationInput | WebhookEndpointOrderByWithAggregationInput[]
    by: WebhookEndpointScalarFieldEnum[] | WebhookEndpointScalarFieldEnum
    having?: WebhookEndpointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebhookEndpointCountAggregateInputType | true
    _avg?: WebhookEndpointAvgAggregateInputType
    _sum?: WebhookEndpointSumAggregateInputType
    _min?: WebhookEndpointMinAggregateInputType
    _max?: WebhookEndpointMaxAggregateInputType
  }

  export type WebhookEndpointGroupByOutputType = {
    id: string
    workspaceId: string
    name: string
    url: string
    secret: string | null
    events: string[]
    isActive: boolean
    failureCount: number
    lastTriggeredAt: Date | null
    lastStatusCode: number | null
    createdAt: Date
    updatedAt: Date
    _count: WebhookEndpointCountAggregateOutputType | null
    _avg: WebhookEndpointAvgAggregateOutputType | null
    _sum: WebhookEndpointSumAggregateOutputType | null
    _min: WebhookEndpointMinAggregateOutputType | null
    _max: WebhookEndpointMaxAggregateOutputType | null
  }

  type GetWebhookEndpointGroupByPayload<T extends WebhookEndpointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebhookEndpointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebhookEndpointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebhookEndpointGroupByOutputType[P]>
            : GetScalarType<T[P], WebhookEndpointGroupByOutputType[P]>
        }
      >
    >


  export type WebhookEndpointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    failureCount?: boolean
    lastTriggeredAt?: boolean
    lastStatusCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookEndpoint"]>

  export type WebhookEndpointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    failureCount?: boolean
    lastTriggeredAt?: boolean
    lastStatusCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webhookEndpoint"]>

  export type WebhookEndpointSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    url?: boolean
    secret?: boolean
    events?: boolean
    isActive?: boolean
    failureCount?: boolean
    lastTriggeredAt?: boolean
    lastStatusCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebhookEndpointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WebhookEndpointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $WebhookEndpointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebhookEndpoint"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      name: string
      url: string
      secret: string | null
      events: string[]
      isActive: boolean
      failureCount: number
      lastTriggeredAt: Date | null
      lastStatusCode: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["webhookEndpoint"]>
    composites: {}
  }

  type WebhookEndpointGetPayload<S extends boolean | null | undefined | WebhookEndpointDefaultArgs> = $Result.GetResult<Prisma.$WebhookEndpointPayload, S>

  type WebhookEndpointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WebhookEndpointFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WebhookEndpointCountAggregateInputType | true
    }

  export interface WebhookEndpointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebhookEndpoint'], meta: { name: 'WebhookEndpoint' } }
    /**
     * Find zero or one WebhookEndpoint that matches the filter.
     * @param {WebhookEndpointFindUniqueArgs} args - Arguments to find a WebhookEndpoint
     * @example
     * // Get one WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebhookEndpointFindUniqueArgs>(args: SelectSubset<T, WebhookEndpointFindUniqueArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WebhookEndpoint that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WebhookEndpointFindUniqueOrThrowArgs} args - Arguments to find a WebhookEndpoint
     * @example
     * // Get one WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebhookEndpointFindUniqueOrThrowArgs>(args: SelectSubset<T, WebhookEndpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WebhookEndpoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointFindFirstArgs} args - Arguments to find a WebhookEndpoint
     * @example
     * // Get one WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebhookEndpointFindFirstArgs>(args?: SelectSubset<T, WebhookEndpointFindFirstArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WebhookEndpoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointFindFirstOrThrowArgs} args - Arguments to find a WebhookEndpoint
     * @example
     * // Get one WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebhookEndpointFindFirstOrThrowArgs>(args?: SelectSubset<T, WebhookEndpointFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WebhookEndpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebhookEndpoints
     * const webhookEndpoints = await prisma.webhookEndpoint.findMany()
     * 
     * // Get first 10 WebhookEndpoints
     * const webhookEndpoints = await prisma.webhookEndpoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webhookEndpointWithIdOnly = await prisma.webhookEndpoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebhookEndpointFindManyArgs>(args?: SelectSubset<T, WebhookEndpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WebhookEndpoint.
     * @param {WebhookEndpointCreateArgs} args - Arguments to create a WebhookEndpoint.
     * @example
     * // Create one WebhookEndpoint
     * const WebhookEndpoint = await prisma.webhookEndpoint.create({
     *   data: {
     *     // ... data to create a WebhookEndpoint
     *   }
     * })
     * 
     */
    create<T extends WebhookEndpointCreateArgs>(args: SelectSubset<T, WebhookEndpointCreateArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WebhookEndpoints.
     * @param {WebhookEndpointCreateManyArgs} args - Arguments to create many WebhookEndpoints.
     * @example
     * // Create many WebhookEndpoints
     * const webhookEndpoint = await prisma.webhookEndpoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebhookEndpointCreateManyArgs>(args?: SelectSubset<T, WebhookEndpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebhookEndpoints and returns the data saved in the database.
     * @param {WebhookEndpointCreateManyAndReturnArgs} args - Arguments to create many WebhookEndpoints.
     * @example
     * // Create many WebhookEndpoints
     * const webhookEndpoint = await prisma.webhookEndpoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebhookEndpoints and only return the `id`
     * const webhookEndpointWithIdOnly = await prisma.webhookEndpoint.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebhookEndpointCreateManyAndReturnArgs>(args?: SelectSubset<T, WebhookEndpointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WebhookEndpoint.
     * @param {WebhookEndpointDeleteArgs} args - Arguments to delete one WebhookEndpoint.
     * @example
     * // Delete one WebhookEndpoint
     * const WebhookEndpoint = await prisma.webhookEndpoint.delete({
     *   where: {
     *     // ... filter to delete one WebhookEndpoint
     *   }
     * })
     * 
     */
    delete<T extends WebhookEndpointDeleteArgs>(args: SelectSubset<T, WebhookEndpointDeleteArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WebhookEndpoint.
     * @param {WebhookEndpointUpdateArgs} args - Arguments to update one WebhookEndpoint.
     * @example
     * // Update one WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebhookEndpointUpdateArgs>(args: SelectSubset<T, WebhookEndpointUpdateArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WebhookEndpoints.
     * @param {WebhookEndpointDeleteManyArgs} args - Arguments to filter WebhookEndpoints to delete.
     * @example
     * // Delete a few WebhookEndpoints
     * const { count } = await prisma.webhookEndpoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebhookEndpointDeleteManyArgs>(args?: SelectSubset<T, WebhookEndpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebhookEndpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebhookEndpoints
     * const webhookEndpoint = await prisma.webhookEndpoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebhookEndpointUpdateManyArgs>(args: SelectSubset<T, WebhookEndpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WebhookEndpoint.
     * @param {WebhookEndpointUpsertArgs} args - Arguments to update or create a WebhookEndpoint.
     * @example
     * // Update or create a WebhookEndpoint
     * const webhookEndpoint = await prisma.webhookEndpoint.upsert({
     *   create: {
     *     // ... data to create a WebhookEndpoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebhookEndpoint we want to update
     *   }
     * })
     */
    upsert<T extends WebhookEndpointUpsertArgs>(args: SelectSubset<T, WebhookEndpointUpsertArgs<ExtArgs>>): Prisma__WebhookEndpointClient<$Result.GetResult<Prisma.$WebhookEndpointPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WebhookEndpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointCountArgs} args - Arguments to filter WebhookEndpoints to count.
     * @example
     * // Count the number of WebhookEndpoints
     * const count = await prisma.webhookEndpoint.count({
     *   where: {
     *     // ... the filter for the WebhookEndpoints we want to count
     *   }
     * })
    **/
    count<T extends WebhookEndpointCountArgs>(
      args?: Subset<T, WebhookEndpointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebhookEndpointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebhookEndpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WebhookEndpointAggregateArgs>(args: Subset<T, WebhookEndpointAggregateArgs>): Prisma.PrismaPromise<GetWebhookEndpointAggregateType<T>>

    /**
     * Group by WebhookEndpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebhookEndpointGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WebhookEndpointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebhookEndpointGroupByArgs['orderBy'] }
        : { orderBy?: WebhookEndpointGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WebhookEndpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebhookEndpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebhookEndpoint model
   */
  readonly fields: WebhookEndpointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebhookEndpoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebhookEndpointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WebhookEndpoint model
   */ 
  interface WebhookEndpointFieldRefs {
    readonly id: FieldRef<"WebhookEndpoint", 'String'>
    readonly workspaceId: FieldRef<"WebhookEndpoint", 'String'>
    readonly name: FieldRef<"WebhookEndpoint", 'String'>
    readonly url: FieldRef<"WebhookEndpoint", 'String'>
    readonly secret: FieldRef<"WebhookEndpoint", 'String'>
    readonly events: FieldRef<"WebhookEndpoint", 'String[]'>
    readonly isActive: FieldRef<"WebhookEndpoint", 'Boolean'>
    readonly failureCount: FieldRef<"WebhookEndpoint", 'Int'>
    readonly lastTriggeredAt: FieldRef<"WebhookEndpoint", 'DateTime'>
    readonly lastStatusCode: FieldRef<"WebhookEndpoint", 'Int'>
    readonly createdAt: FieldRef<"WebhookEndpoint", 'DateTime'>
    readonly updatedAt: FieldRef<"WebhookEndpoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebhookEndpoint findUnique
   */
  export type WebhookEndpointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEndpoint to fetch.
     */
    where: WebhookEndpointWhereUniqueInput
  }

  /**
   * WebhookEndpoint findUniqueOrThrow
   */
  export type WebhookEndpointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEndpoint to fetch.
     */
    where: WebhookEndpointWhereUniqueInput
  }

  /**
   * WebhookEndpoint findFirst
   */
  export type WebhookEndpointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEndpoint to fetch.
     */
    where?: WebhookEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEndpoints to fetch.
     */
    orderBy?: WebhookEndpointOrderByWithRelationInput | WebhookEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEndpoints.
     */
    cursor?: WebhookEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEndpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEndpoints.
     */
    distinct?: WebhookEndpointScalarFieldEnum | WebhookEndpointScalarFieldEnum[]
  }

  /**
   * WebhookEndpoint findFirstOrThrow
   */
  export type WebhookEndpointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEndpoint to fetch.
     */
    where?: WebhookEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEndpoints to fetch.
     */
    orderBy?: WebhookEndpointOrderByWithRelationInput | WebhookEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebhookEndpoints.
     */
    cursor?: WebhookEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEndpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebhookEndpoints.
     */
    distinct?: WebhookEndpointScalarFieldEnum | WebhookEndpointScalarFieldEnum[]
  }

  /**
   * WebhookEndpoint findMany
   */
  export type WebhookEndpointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter, which WebhookEndpoints to fetch.
     */
    where?: WebhookEndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebhookEndpoints to fetch.
     */
    orderBy?: WebhookEndpointOrderByWithRelationInput | WebhookEndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebhookEndpoints.
     */
    cursor?: WebhookEndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebhookEndpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebhookEndpoints.
     */
    skip?: number
    distinct?: WebhookEndpointScalarFieldEnum | WebhookEndpointScalarFieldEnum[]
  }

  /**
   * WebhookEndpoint create
   */
  export type WebhookEndpointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * The data needed to create a WebhookEndpoint.
     */
    data: XOR<WebhookEndpointCreateInput, WebhookEndpointUncheckedCreateInput>
  }

  /**
   * WebhookEndpoint createMany
   */
  export type WebhookEndpointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebhookEndpoints.
     */
    data: WebhookEndpointCreateManyInput | WebhookEndpointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebhookEndpoint createManyAndReturn
   */
  export type WebhookEndpointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WebhookEndpoints.
     */
    data: WebhookEndpointCreateManyInput | WebhookEndpointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebhookEndpoint update
   */
  export type WebhookEndpointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * The data needed to update a WebhookEndpoint.
     */
    data: XOR<WebhookEndpointUpdateInput, WebhookEndpointUncheckedUpdateInput>
    /**
     * Choose, which WebhookEndpoint to update.
     */
    where: WebhookEndpointWhereUniqueInput
  }

  /**
   * WebhookEndpoint updateMany
   */
  export type WebhookEndpointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebhookEndpoints.
     */
    data: XOR<WebhookEndpointUpdateManyMutationInput, WebhookEndpointUncheckedUpdateManyInput>
    /**
     * Filter which WebhookEndpoints to update
     */
    where?: WebhookEndpointWhereInput
  }

  /**
   * WebhookEndpoint upsert
   */
  export type WebhookEndpointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * The filter to search for the WebhookEndpoint to update in case it exists.
     */
    where: WebhookEndpointWhereUniqueInput
    /**
     * In case the WebhookEndpoint found by the `where` argument doesn't exist, create a new WebhookEndpoint with this data.
     */
    create: XOR<WebhookEndpointCreateInput, WebhookEndpointUncheckedCreateInput>
    /**
     * In case the WebhookEndpoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebhookEndpointUpdateInput, WebhookEndpointUncheckedUpdateInput>
  }

  /**
   * WebhookEndpoint delete
   */
  export type WebhookEndpointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
    /**
     * Filter which WebhookEndpoint to delete.
     */
    where: WebhookEndpointWhereUniqueInput
  }

  /**
   * WebhookEndpoint deleteMany
   */
  export type WebhookEndpointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebhookEndpoints to delete
     */
    where?: WebhookEndpointWhereInput
  }

  /**
   * WebhookEndpoint without action
   */
  export type WebhookEndpointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebhookEndpoint
     */
    select?: WebhookEndpointSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebhookEndpointInclude<ExtArgs> | null
  }


  /**
   * Model ApiKey
   */

  export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  export type ApiKeyMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    keyHash: string | null
    keyPrefix: string | null
    lastUsedAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ApiKeyMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    keyHash: string | null
    keyPrefix: string | null
    lastUsedAt: Date | null
    expiresAt: Date | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ApiKeyCountAggregateOutputType = {
    id: number
    workspaceId: number
    name: number
    keyHash: number
    keyPrefix: number
    lastUsedAt: number
    expiresAt: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ApiKeyMinAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    keyHash?: true
    keyPrefix?: true
    lastUsedAt?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
  }

  export type ApiKeyMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    keyHash?: true
    keyPrefix?: true
    lastUsedAt?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
  }

  export type ApiKeyCountAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    keyHash?: true
    keyPrefix?: true
    lastUsedAt?: true
    expiresAt?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ApiKeyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKey to aggregate.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ApiKeys
    **/
    _count?: true | ApiKeyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiKeyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiKeyMaxAggregateInputType
  }

  export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
        [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApiKey[P]>
      : GetScalarType<T[P], AggregateApiKey[P]>
  }




  export type ApiKeyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiKeyWhereInput
    orderBy?: ApiKeyOrderByWithAggregationInput | ApiKeyOrderByWithAggregationInput[]
    by: ApiKeyScalarFieldEnum[] | ApiKeyScalarFieldEnum
    having?: ApiKeyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiKeyCountAggregateInputType | true
    _min?: ApiKeyMinAggregateInputType
    _max?: ApiKeyMaxAggregateInputType
  }

  export type ApiKeyGroupByOutputType = {
    id: string
    workspaceId: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt: Date | null
    expiresAt: Date | null
    isActive: boolean
    createdAt: Date
    _count: ApiKeyCountAggregateOutputType | null
    _min: ApiKeyMinAggregateOutputType | null
    _max: ApiKeyMaxAggregateOutputType | null
  }

  type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiKeyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
            : GetScalarType<T[P], ApiKeyGroupByOutputType[P]>
        }
      >
    >


  export type ApiKeySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    keyHash?: boolean
    keyPrefix?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    keyHash?: boolean
    keyPrefix?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["apiKey"]>

  export type ApiKeySelectScalar = {
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    keyHash?: boolean
    keyPrefix?: boolean
    lastUsedAt?: boolean
    expiresAt?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ApiKeyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $ApiKeyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ApiKey"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      name: string
      keyHash: string
      keyPrefix: string
      lastUsedAt: Date | null
      expiresAt: Date | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["apiKey"]>
    composites: {}
  }

  type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = $Result.GetResult<Prisma.$ApiKeyPayload, S>

  type ApiKeyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ApiKeyCountAggregateInputType | true
    }

  export interface ApiKeyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'], meta: { name: 'ApiKey' } }
    /**
     * Find zero or one ApiKey that matches the filter.
     * @param {ApiKeyFindUniqueArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiKeyFindUniqueArgs>(args: SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ApiKey that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ApiKeyFindUniqueOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ApiKey that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiKeyFindFirstArgs>(args?: SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ApiKey that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindFirstOrThrowArgs} args - Arguments to find a ApiKey
     * @example
     * // Get one ApiKey
     * const apiKey = await prisma.apiKey.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ApiKeys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ApiKeys
     * const apiKeys = await prisma.apiKey.findMany()
     * 
     * // Get first 10 ApiKeys
     * const apiKeys = await prisma.apiKey.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiKeyFindManyArgs>(args?: SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ApiKey.
     * @param {ApiKeyCreateArgs} args - Arguments to create a ApiKey.
     * @example
     * // Create one ApiKey
     * const ApiKey = await prisma.apiKey.create({
     *   data: {
     *     // ... data to create a ApiKey
     *   }
     * })
     * 
     */
    create<T extends ApiKeyCreateArgs>(args: SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ApiKeys.
     * @param {ApiKeyCreateManyArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiKeyCreateManyArgs>(args?: SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ApiKeys and returns the data saved in the database.
     * @param {ApiKeyCreateManyAndReturnArgs} args - Arguments to create many ApiKeys.
     * @example
     * // Create many ApiKeys
     * const apiKey = await prisma.apiKey.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ApiKeys and only return the `id`
     * const apiKeyWithIdOnly = await prisma.apiKey.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ApiKey.
     * @param {ApiKeyDeleteArgs} args - Arguments to delete one ApiKey.
     * @example
     * // Delete one ApiKey
     * const ApiKey = await prisma.apiKey.delete({
     *   where: {
     *     // ... filter to delete one ApiKey
     *   }
     * })
     * 
     */
    delete<T extends ApiKeyDeleteArgs>(args: SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ApiKey.
     * @param {ApiKeyUpdateArgs} args - Arguments to update one ApiKey.
     * @example
     * // Update one ApiKey
     * const apiKey = await prisma.apiKey.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiKeyUpdateArgs>(args: SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ApiKeys.
     * @param {ApiKeyDeleteManyArgs} args - Arguments to filter ApiKeys to delete.
     * @example
     * // Delete a few ApiKeys
     * const { count } = await prisma.apiKey.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ApiKeys
     * const apiKey = await prisma.apiKey.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiKeyUpdateManyArgs>(args: SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ApiKey.
     * @param {ApiKeyUpsertArgs} args - Arguments to update or create a ApiKey.
     * @example
     * // Update or create a ApiKey
     * const apiKey = await prisma.apiKey.upsert({
     *   create: {
     *     // ... data to create a ApiKey
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ApiKey we want to update
     *   }
     * })
     */
    upsert<T extends ApiKeyUpsertArgs>(args: SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma__ApiKeyClient<$Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ApiKeys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyCountArgs} args - Arguments to filter ApiKeys to count.
     * @example
     * // Count the number of ApiKeys
     * const count = await prisma.apiKey.count({
     *   where: {
     *     // ... the filter for the ApiKeys we want to count
     *   }
     * })
    **/
    count<T extends ApiKeyCountArgs>(
      args?: Subset<T, ApiKeyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiKeyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApiKeyAggregateArgs>(args: Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>

    /**
     * Group by ApiKey.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiKeyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApiKeyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiKeyGroupByArgs['orderBy'] }
        : { orderBy?: ApiKeyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ApiKey model
   */
  readonly fields: ApiKeyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ApiKey.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ApiKey model
   */ 
  interface ApiKeyFieldRefs {
    readonly id: FieldRef<"ApiKey", 'String'>
    readonly workspaceId: FieldRef<"ApiKey", 'String'>
    readonly name: FieldRef<"ApiKey", 'String'>
    readonly keyHash: FieldRef<"ApiKey", 'String'>
    readonly keyPrefix: FieldRef<"ApiKey", 'String'>
    readonly lastUsedAt: FieldRef<"ApiKey", 'DateTime'>
    readonly expiresAt: FieldRef<"ApiKey", 'DateTime'>
    readonly isActive: FieldRef<"ApiKey", 'Boolean'>
    readonly createdAt: FieldRef<"ApiKey", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ApiKey findUnique
   */
  export type ApiKeyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findUniqueOrThrow
   */
  export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey findFirst
   */
  export type ApiKeyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findFirstOrThrow
   */
  export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKey to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ApiKeys.
     */
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey findMany
   */
  export type ApiKeyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter, which ApiKeys to fetch.
     */
    where?: ApiKeyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ApiKeys to fetch.
     */
    orderBy?: ApiKeyOrderByWithRelationInput | ApiKeyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ApiKeys.
     */
    cursor?: ApiKeyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ApiKeys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ApiKeys.
     */
    skip?: number
    distinct?: ApiKeyScalarFieldEnum | ApiKeyScalarFieldEnum[]
  }

  /**
   * ApiKey create
   */
  export type ApiKeyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to create a ApiKey.
     */
    data: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
  }

  /**
   * ApiKey createMany
   */
  export type ApiKeyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ApiKey createManyAndReturn
   */
  export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ApiKeys.
     */
    data: ApiKeyCreateManyInput | ApiKeyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ApiKey update
   */
  export type ApiKeyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The data needed to update a ApiKey.
     */
    data: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
    /**
     * Choose, which ApiKey to update.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey updateMany
   */
  export type ApiKeyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ApiKeys.
     */
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyInput>
    /**
     * Filter which ApiKeys to update
     */
    where?: ApiKeyWhereInput
  }

  /**
   * ApiKey upsert
   */
  export type ApiKeyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * The filter to search for the ApiKey to update in case it exists.
     */
    where: ApiKeyWhereUniqueInput
    /**
     * In case the ApiKey found by the `where` argument doesn't exist, create a new ApiKey with this data.
     */
    create: XOR<ApiKeyCreateInput, ApiKeyUncheckedCreateInput>
    /**
     * In case the ApiKey was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiKeyUpdateInput, ApiKeyUncheckedUpdateInput>
  }

  /**
   * ApiKey delete
   */
  export type ApiKeyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
    /**
     * Filter which ApiKey to delete.
     */
    where: ApiKeyWhereUniqueInput
  }

  /**
   * ApiKey deleteMany
   */
  export type ApiKeyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ApiKeys to delete
     */
    where?: ApiKeyWhereInput
  }

  /**
   * ApiKey without action
   */
  export type ApiKeyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiKey
     */
    select?: ApiKeySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiKeyInclude<ExtArgs> | null
  }


  /**
   * Model EventLog
   */

  export type AggregateEventLog = {
    _count: EventLogCountAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  export type EventLogMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    event: string | null
    createdAt: Date | null
  }

  export type EventLogMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    event: string | null
    createdAt: Date | null
  }

  export type EventLogCountAggregateOutputType = {
    id: number
    workspaceId: number
    event: number
    payload: number
    createdAt: number
    _all: number
  }


  export type EventLogMinAggregateInputType = {
    id?: true
    workspaceId?: true
    event?: true
    createdAt?: true
  }

  export type EventLogMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    event?: true
    createdAt?: true
  }

  export type EventLogCountAggregateInputType = {
    id?: true
    workspaceId?: true
    event?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type EventLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLog to aggregate.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventLogs
    **/
    _count?: true | EventLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventLogMaxAggregateInputType
  }

  export type GetEventLogAggregateType<T extends EventLogAggregateArgs> = {
        [P in keyof T & keyof AggregateEventLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventLog[P]>
      : GetScalarType<T[P], AggregateEventLog[P]>
  }




  export type EventLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventLogWhereInput
    orderBy?: EventLogOrderByWithAggregationInput | EventLogOrderByWithAggregationInput[]
    by: EventLogScalarFieldEnum[] | EventLogScalarFieldEnum
    having?: EventLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventLogCountAggregateInputType | true
    _min?: EventLogMinAggregateInputType
    _max?: EventLogMaxAggregateInputType
  }

  export type EventLogGroupByOutputType = {
    id: string
    workspaceId: string
    event: string
    payload: JsonValue
    createdAt: Date
    _count: EventLogCountAggregateOutputType | null
    _min: EventLogMinAggregateOutputType | null
    _max: EventLogMaxAggregateOutputType | null
  }

  type GetEventLogGroupByPayload<T extends EventLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventLogGroupByOutputType[P]>
            : GetScalarType<T[P], EventLogGroupByOutputType[P]>
        }
      >
    >


  export type EventLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    event?: boolean
    payload?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    event?: boolean
    payload?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventLog"]>

  export type EventLogSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    event?: boolean
    payload?: boolean
    createdAt?: boolean
  }

  export type EventLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type EventLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $EventLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventLog"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      event: string
      payload: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["eventLog"]>
    composites: {}
  }

  type EventLogGetPayload<S extends boolean | null | undefined | EventLogDefaultArgs> = $Result.GetResult<Prisma.$EventLogPayload, S>

  type EventLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventLogCountAggregateInputType | true
    }

  export interface EventLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventLog'], meta: { name: 'EventLog' } }
    /**
     * Find zero or one EventLog that matches the filter.
     * @param {EventLogFindUniqueArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventLogFindUniqueArgs>(args: SelectSubset<T, EventLogFindUniqueArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one EventLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventLogFindUniqueOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventLogFindUniqueOrThrowArgs>(args: SelectSubset<T, EventLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first EventLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventLogFindFirstArgs>(args?: SelectSubset<T, EventLogFindFirstArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first EventLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindFirstOrThrowArgs} args - Arguments to find a EventLog
     * @example
     * // Get one EventLog
     * const eventLog = await prisma.eventLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventLogFindFirstOrThrowArgs>(args?: SelectSubset<T, EventLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more EventLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventLogs
     * const eventLogs = await prisma.eventLog.findMany()
     * 
     * // Get first 10 EventLogs
     * const eventLogs = await prisma.eventLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventLogWithIdOnly = await prisma.eventLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventLogFindManyArgs>(args?: SelectSubset<T, EventLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a EventLog.
     * @param {EventLogCreateArgs} args - Arguments to create a EventLog.
     * @example
     * // Create one EventLog
     * const EventLog = await prisma.eventLog.create({
     *   data: {
     *     // ... data to create a EventLog
     *   }
     * })
     * 
     */
    create<T extends EventLogCreateArgs>(args: SelectSubset<T, EventLogCreateArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many EventLogs.
     * @param {EventLogCreateManyArgs} args - Arguments to create many EventLogs.
     * @example
     * // Create many EventLogs
     * const eventLog = await prisma.eventLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventLogCreateManyArgs>(args?: SelectSubset<T, EventLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventLogs and returns the data saved in the database.
     * @param {EventLogCreateManyAndReturnArgs} args - Arguments to create many EventLogs.
     * @example
     * // Create many EventLogs
     * const eventLog = await prisma.eventLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventLogs and only return the `id`
     * const eventLogWithIdOnly = await prisma.eventLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventLogCreateManyAndReturnArgs>(args?: SelectSubset<T, EventLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a EventLog.
     * @param {EventLogDeleteArgs} args - Arguments to delete one EventLog.
     * @example
     * // Delete one EventLog
     * const EventLog = await prisma.eventLog.delete({
     *   where: {
     *     // ... filter to delete one EventLog
     *   }
     * })
     * 
     */
    delete<T extends EventLogDeleteArgs>(args: SelectSubset<T, EventLogDeleteArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one EventLog.
     * @param {EventLogUpdateArgs} args - Arguments to update one EventLog.
     * @example
     * // Update one EventLog
     * const eventLog = await prisma.eventLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventLogUpdateArgs>(args: SelectSubset<T, EventLogUpdateArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more EventLogs.
     * @param {EventLogDeleteManyArgs} args - Arguments to filter EventLogs to delete.
     * @example
     * // Delete a few EventLogs
     * const { count } = await prisma.eventLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventLogDeleteManyArgs>(args?: SelectSubset<T, EventLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventLogs
     * const eventLog = await prisma.eventLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventLogUpdateManyArgs>(args: SelectSubset<T, EventLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EventLog.
     * @param {EventLogUpsertArgs} args - Arguments to update or create a EventLog.
     * @example
     * // Update or create a EventLog
     * const eventLog = await prisma.eventLog.upsert({
     *   create: {
     *     // ... data to create a EventLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventLog we want to update
     *   }
     * })
     */
    upsert<T extends EventLogUpsertArgs>(args: SelectSubset<T, EventLogUpsertArgs<ExtArgs>>): Prisma__EventLogClient<$Result.GetResult<Prisma.$EventLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of EventLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogCountArgs} args - Arguments to filter EventLogs to count.
     * @example
     * // Count the number of EventLogs
     * const count = await prisma.eventLog.count({
     *   where: {
     *     // ... the filter for the EventLogs we want to count
     *   }
     * })
    **/
    count<T extends EventLogCountArgs>(
      args?: Subset<T, EventLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventLogAggregateArgs>(args: Subset<T, EventLogAggregateArgs>): Prisma.PrismaPromise<GetEventLogAggregateType<T>>

    /**
     * Group by EventLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventLogGroupByArgs['orderBy'] }
        : { orderBy?: EventLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventLog model
   */
  readonly fields: EventLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventLog model
   */ 
  interface EventLogFieldRefs {
    readonly id: FieldRef<"EventLog", 'String'>
    readonly workspaceId: FieldRef<"EventLog", 'String'>
    readonly event: FieldRef<"EventLog", 'String'>
    readonly payload: FieldRef<"EventLog", 'Json'>
    readonly createdAt: FieldRef<"EventLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventLog findUnique
   */
  export type EventLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog findUniqueOrThrow
   */
  export type EventLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog findFirst
   */
  export type EventLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog findFirstOrThrow
   */
  export type EventLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLog to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventLogs.
     */
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog findMany
   */
  export type EventLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter, which EventLogs to fetch.
     */
    where?: EventLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventLogs to fetch.
     */
    orderBy?: EventLogOrderByWithRelationInput | EventLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventLogs.
     */
    cursor?: EventLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventLogs.
     */
    skip?: number
    distinct?: EventLogScalarFieldEnum | EventLogScalarFieldEnum[]
  }

  /**
   * EventLog create
   */
  export type EventLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The data needed to create a EventLog.
     */
    data: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
  }

  /**
   * EventLog createMany
   */
  export type EventLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventLogs.
     */
    data: EventLogCreateManyInput | EventLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventLog createManyAndReturn
   */
  export type EventLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many EventLogs.
     */
    data: EventLogCreateManyInput | EventLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventLog update
   */
  export type EventLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The data needed to update a EventLog.
     */
    data: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
    /**
     * Choose, which EventLog to update.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog updateMany
   */
  export type EventLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventLogs.
     */
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyInput>
    /**
     * Filter which EventLogs to update
     */
    where?: EventLogWhereInput
  }

  /**
   * EventLog upsert
   */
  export type EventLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * The filter to search for the EventLog to update in case it exists.
     */
    where: EventLogWhereUniqueInput
    /**
     * In case the EventLog found by the `where` argument doesn't exist, create a new EventLog with this data.
     */
    create: XOR<EventLogCreateInput, EventLogUncheckedCreateInput>
    /**
     * In case the EventLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventLogUpdateInput, EventLogUncheckedUpdateInput>
  }

  /**
   * EventLog delete
   */
  export type EventLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
    /**
     * Filter which EventLog to delete.
     */
    where: EventLogWhereUniqueInput
  }

  /**
   * EventLog deleteMany
   */
  export type EventLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventLogs to delete
     */
    where?: EventLogWhereInput
  }

  /**
   * EventLog without action
   */
  export type EventLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventLog
     */
    select?: EventLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    plan: 'plan',
    settings: 'settings',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    firstName: 'firstName',
    lastName: 'lastName',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceUserScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    userId: 'userId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type WorkspaceUserScalarFieldEnum = (typeof WorkspaceUserScalarFieldEnum)[keyof typeof WorkspaceUserScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    avatar: 'avatar',
    status: 'status',
    source: 'source',
    score: 'score',
    tags: 'tags',
    companyId: 'companyId',
    ownerId: 'ownerId',
    channels: 'channels',
    customData: 'customData',
    isArchived: 'isArchived',
    mergedInto: 'mergedInto',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastContactedAt: 'lastContactedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const PipelineScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    name: 'name',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PipelineScalarFieldEnum = (typeof PipelineScalarFieldEnum)[keyof typeof PipelineScalarFieldEnum]


  export const StageScalarFieldEnum: {
    id: 'id',
    pipelineId: 'pipelineId',
    name: 'name',
    position: 'position',
    color: 'color',
    probability: 'probability',
    isWon: 'isWon',
    isLost: 'isLost',
    rottenAfterDays: 'rottenAfterDays'
  };

  export type StageScalarFieldEnum = (typeof StageScalarFieldEnum)[keyof typeof StageScalarFieldEnum]


  export const DealScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    title: 'title',
    value: 'value',
    currency: 'currency',
    probability: 'probability',
    pipelineId: 'pipelineId',
    stageId: 'stageId',
    position: 'position',
    companyId: 'companyId',
    ownerId: 'ownerId',
    status: 'status',
    expectedCloseDate: 'expectedCloseDate',
    isArchived: 'isArchived',
    stageEnteredAt: 'stageEnteredAt',
    closedAt: 'closedAt',
    closedReason: 'closedReason',
    customData: 'customData',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DealScalarFieldEnum = (typeof DealScalarFieldEnum)[keyof typeof DealScalarFieldEnum]


  export const DealContactScalarFieldEnum: {
    dealId: 'dealId',
    contactId: 'contactId',
    role: 'role'
  };

  export type DealContactScalarFieldEnum = (typeof DealContactScalarFieldEnum)[keyof typeof DealContactScalarFieldEnum]


  export const ActivityScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    type: 'type',
    entityType: 'entityType',
    entityId: 'entityId',
    contactId: 'contactId',
    dealId: 'dealId',
    userId: 'userId',
    source: 'source',
    title: 'title',
    description: 'description',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type ActivityScalarFieldEnum = (typeof ActivityScalarFieldEnum)[keyof typeof ActivityScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    content: 'content',
    entityType: 'entityType',
    entityId: 'entityId',
    contactId: 'contactId',
    dealId: 'dealId',
    userId: 'userId',
    isPinned: 'isPinned',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const WebhookEndpointScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    name: 'name',
    url: 'url',
    secret: 'secret',
    events: 'events',
    isActive: 'isActive',
    failureCount: 'failureCount',
    lastTriggeredAt: 'lastTriggeredAt',
    lastStatusCode: 'lastStatusCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebhookEndpointScalarFieldEnum = (typeof WebhookEndpointScalarFieldEnum)[keyof typeof WebhookEndpointScalarFieldEnum]


  export const ApiKeyScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    name: 'name',
    keyHash: 'keyHash',
    keyPrefix: 'keyPrefix',
    lastUsedAt: 'lastUsedAt',
    expiresAt: 'expiresAt',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ApiKeyScalarFieldEnum = (typeof ApiKeyScalarFieldEnum)[keyof typeof ApiKeyScalarFieldEnum]


  export const EventLogScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    event: 'event',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type EventLogScalarFieldEnum = (typeof EventLogScalarFieldEnum)[keyof typeof EventLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    slug?: StringFilter<"Workspace"> | string
    plan?: StringFilter<"Workspace"> | string
    settings?: JsonFilter<"Workspace">
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    users?: WorkspaceUserListRelationFilter
    contacts?: ContactListRelationFilter
    pipelines?: PipelineListRelationFilter
    deals?: DealListRelationFilter
    activities?: ActivityListRelationFilter
    notes?: NoteListRelationFilter
    webhooks?: WebhookEndpointListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    eventLogs?: EventLogListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: WorkspaceUserOrderByRelationAggregateInput
    contacts?: ContactOrderByRelationAggregateInput
    pipelines?: PipelineOrderByRelationAggregateInput
    deals?: DealOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
    webhooks?: WebhookEndpointOrderByRelationAggregateInput
    apiKeys?: ApiKeyOrderByRelationAggregateInput
    eventLogs?: EventLogOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    plan?: StringFilter<"Workspace"> | string
    settings?: JsonFilter<"Workspace">
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    users?: WorkspaceUserListRelationFilter
    contacts?: ContactListRelationFilter
    pipelines?: PipelineListRelationFilter
    deals?: DealListRelationFilter
    activities?: ActivityListRelationFilter
    notes?: NoteListRelationFilter
    webhooks?: WebhookEndpointListRelationFilter
    apiKeys?: ApiKeyListRelationFilter
    eventLogs?: EventLogListRelationFilter
  }, "id" | "slug">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    slug?: StringWithAggregatesFilter<"Workspace"> | string
    plan?: StringWithAggregatesFilter<"Workspace"> | string
    settings?: JsonWithAggregatesFilter<"Workspace">
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    workspaces?: WorkspaceUserListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    workspaces?: WorkspaceUserOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    resetToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    workspaces?: WorkspaceUserListRelationFilter
  }, "id" | "email" | "resetToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type WorkspaceUserWhereInput = {
    AND?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    OR?: WorkspaceUserWhereInput[]
    NOT?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    id?: StringFilter<"WorkspaceUser"> | string
    workspaceId?: StringFilter<"WorkspaceUser"> | string
    userId?: StringFilter<"WorkspaceUser"> | string
    role?: StringFilter<"WorkspaceUser"> | string
    createdAt?: DateTimeFilter<"WorkspaceUser"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WorkspaceUserOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WorkspaceUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspaceId_userId?: WorkspaceUserWorkspaceIdUserIdCompoundUniqueInput
    AND?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    OR?: WorkspaceUserWhereInput[]
    NOT?: WorkspaceUserWhereInput | WorkspaceUserWhereInput[]
    workspaceId?: StringFilter<"WorkspaceUser"> | string
    userId?: StringFilter<"WorkspaceUser"> | string
    role?: StringFilter<"WorkspaceUser"> | string
    createdAt?: DateTimeFilter<"WorkspaceUser"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "workspaceId_userId">

  export type WorkspaceUserOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: WorkspaceUserCountOrderByAggregateInput
    _max?: WorkspaceUserMaxOrderByAggregateInput
    _min?: WorkspaceUserMinOrderByAggregateInput
  }

  export type WorkspaceUserScalarWhereWithAggregatesInput = {
    AND?: WorkspaceUserScalarWhereWithAggregatesInput | WorkspaceUserScalarWhereWithAggregatesInput[]
    OR?: WorkspaceUserScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceUserScalarWhereWithAggregatesInput | WorkspaceUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkspaceUser"> | string
    workspaceId?: StringWithAggregatesFilter<"WorkspaceUser"> | string
    userId?: StringWithAggregatesFilter<"WorkspaceUser"> | string
    role?: StringWithAggregatesFilter<"WorkspaceUser"> | string
    createdAt?: DateTimeWithAggregatesFilter<"WorkspaceUser"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    workspaceId?: StringFilter<"Contact"> | string
    firstName?: StringFilter<"Contact"> | string
    lastName?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    avatar?: StringNullableFilter<"Contact"> | string | null
    status?: StringFilter<"Contact"> | string
    source?: StringFilter<"Contact"> | string
    score?: IntFilter<"Contact"> | number
    tags?: StringNullableListFilter<"Contact">
    companyId?: StringNullableFilter<"Contact"> | string | null
    ownerId?: StringNullableFilter<"Contact"> | string | null
    channels?: JsonFilter<"Contact">
    customData?: JsonFilter<"Contact">
    isArchived?: BoolFilter<"Contact"> | boolean
    mergedInto?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    lastContactedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    deals?: DealContactListRelationFilter
    activities?: ActivityListRelationFilter
    notes?: NoteListRelationFilter
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    status?: SortOrder
    source?: SortOrder
    score?: SortOrder
    tags?: SortOrder
    companyId?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    channels?: SortOrder
    customData?: SortOrder
    isArchived?: SortOrder
    mergedInto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastContactedAt?: SortOrderInput | SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    deals?: DealContactOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    workspaceId?: StringFilter<"Contact"> | string
    firstName?: StringFilter<"Contact"> | string
    lastName?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    avatar?: StringNullableFilter<"Contact"> | string | null
    status?: StringFilter<"Contact"> | string
    source?: StringFilter<"Contact"> | string
    score?: IntFilter<"Contact"> | number
    tags?: StringNullableListFilter<"Contact">
    companyId?: StringNullableFilter<"Contact"> | string | null
    ownerId?: StringNullableFilter<"Contact"> | string | null
    channels?: JsonFilter<"Contact">
    customData?: JsonFilter<"Contact">
    isArchived?: BoolFilter<"Contact"> | boolean
    mergedInto?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    lastContactedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    deals?: DealContactListRelationFilter
    activities?: ActivityListRelationFilter
    notes?: NoteListRelationFilter
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    status?: SortOrder
    source?: SortOrder
    score?: SortOrder
    tags?: SortOrder
    companyId?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    channels?: SortOrder
    customData?: SortOrder
    isArchived?: SortOrder
    mergedInto?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastContactedAt?: SortOrderInput | SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    workspaceId?: StringWithAggregatesFilter<"Contact"> | string
    firstName?: StringWithAggregatesFilter<"Contact"> | string
    lastName?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    status?: StringWithAggregatesFilter<"Contact"> | string
    source?: StringWithAggregatesFilter<"Contact"> | string
    score?: IntWithAggregatesFilter<"Contact"> | number
    tags?: StringNullableListFilter<"Contact">
    companyId?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    ownerId?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    channels?: JsonWithAggregatesFilter<"Contact">
    customData?: JsonWithAggregatesFilter<"Contact">
    isArchived?: BoolWithAggregatesFilter<"Contact"> | boolean
    mergedInto?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    lastContactedAt?: DateTimeNullableWithAggregatesFilter<"Contact"> | Date | string | null
  }

  export type PipelineWhereInput = {
    AND?: PipelineWhereInput | PipelineWhereInput[]
    OR?: PipelineWhereInput[]
    NOT?: PipelineWhereInput | PipelineWhereInput[]
    id?: StringFilter<"Pipeline"> | string
    workspaceId?: StringFilter<"Pipeline"> | string
    name?: StringFilter<"Pipeline"> | string
    isDefault?: BoolFilter<"Pipeline"> | boolean
    createdAt?: DateTimeFilter<"Pipeline"> | Date | string
    updatedAt?: DateTimeFilter<"Pipeline"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    stages?: StageListRelationFilter
    deals?: DealListRelationFilter
  }

  export type PipelineOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    stages?: StageOrderByRelationAggregateInput
    deals?: DealOrderByRelationAggregateInput
  }

  export type PipelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PipelineWhereInput | PipelineWhereInput[]
    OR?: PipelineWhereInput[]
    NOT?: PipelineWhereInput | PipelineWhereInput[]
    workspaceId?: StringFilter<"Pipeline"> | string
    name?: StringFilter<"Pipeline"> | string
    isDefault?: BoolFilter<"Pipeline"> | boolean
    createdAt?: DateTimeFilter<"Pipeline"> | Date | string
    updatedAt?: DateTimeFilter<"Pipeline"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    stages?: StageListRelationFilter
    deals?: DealListRelationFilter
  }, "id">

  export type PipelineOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PipelineCountOrderByAggregateInput
    _max?: PipelineMaxOrderByAggregateInput
    _min?: PipelineMinOrderByAggregateInput
  }

  export type PipelineScalarWhereWithAggregatesInput = {
    AND?: PipelineScalarWhereWithAggregatesInput | PipelineScalarWhereWithAggregatesInput[]
    OR?: PipelineScalarWhereWithAggregatesInput[]
    NOT?: PipelineScalarWhereWithAggregatesInput | PipelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Pipeline"> | string
    workspaceId?: StringWithAggregatesFilter<"Pipeline"> | string
    name?: StringWithAggregatesFilter<"Pipeline"> | string
    isDefault?: BoolWithAggregatesFilter<"Pipeline"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Pipeline"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pipeline"> | Date | string
  }

  export type StageWhereInput = {
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    id?: StringFilter<"Stage"> | string
    pipelineId?: StringFilter<"Stage"> | string
    name?: StringFilter<"Stage"> | string
    position?: IntFilter<"Stage"> | number
    color?: StringFilter<"Stage"> | string
    probability?: IntNullableFilter<"Stage"> | number | null
    isWon?: BoolFilter<"Stage"> | boolean
    isLost?: BoolFilter<"Stage"> | boolean
    rottenAfterDays?: IntNullableFilter<"Stage"> | number | null
    pipeline?: XOR<PipelineRelationFilter, PipelineWhereInput>
    deals?: DealListRelationFilter
  }

  export type StageOrderByWithRelationInput = {
    id?: SortOrder
    pipelineId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    color?: SortOrder
    probability?: SortOrderInput | SortOrder
    isWon?: SortOrder
    isLost?: SortOrder
    rottenAfterDays?: SortOrderInput | SortOrder
    pipeline?: PipelineOrderByWithRelationInput
    deals?: DealOrderByRelationAggregateInput
  }

  export type StageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StageWhereInput | StageWhereInput[]
    OR?: StageWhereInput[]
    NOT?: StageWhereInput | StageWhereInput[]
    pipelineId?: StringFilter<"Stage"> | string
    name?: StringFilter<"Stage"> | string
    position?: IntFilter<"Stage"> | number
    color?: StringFilter<"Stage"> | string
    probability?: IntNullableFilter<"Stage"> | number | null
    isWon?: BoolFilter<"Stage"> | boolean
    isLost?: BoolFilter<"Stage"> | boolean
    rottenAfterDays?: IntNullableFilter<"Stage"> | number | null
    pipeline?: XOR<PipelineRelationFilter, PipelineWhereInput>
    deals?: DealListRelationFilter
  }, "id">

  export type StageOrderByWithAggregationInput = {
    id?: SortOrder
    pipelineId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    color?: SortOrder
    probability?: SortOrderInput | SortOrder
    isWon?: SortOrder
    isLost?: SortOrder
    rottenAfterDays?: SortOrderInput | SortOrder
    _count?: StageCountOrderByAggregateInput
    _avg?: StageAvgOrderByAggregateInput
    _max?: StageMaxOrderByAggregateInput
    _min?: StageMinOrderByAggregateInput
    _sum?: StageSumOrderByAggregateInput
  }

  export type StageScalarWhereWithAggregatesInput = {
    AND?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    OR?: StageScalarWhereWithAggregatesInput[]
    NOT?: StageScalarWhereWithAggregatesInput | StageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stage"> | string
    pipelineId?: StringWithAggregatesFilter<"Stage"> | string
    name?: StringWithAggregatesFilter<"Stage"> | string
    position?: IntWithAggregatesFilter<"Stage"> | number
    color?: StringWithAggregatesFilter<"Stage"> | string
    probability?: IntNullableWithAggregatesFilter<"Stage"> | number | null
    isWon?: BoolWithAggregatesFilter<"Stage"> | boolean
    isLost?: BoolWithAggregatesFilter<"Stage"> | boolean
    rottenAfterDays?: IntNullableWithAggregatesFilter<"Stage"> | number | null
  }

  export type DealWhereInput = {
    AND?: DealWhereInput | DealWhereInput[]
    OR?: DealWhereInput[]
    NOT?: DealWhereInput | DealWhereInput[]
    id?: StringFilter<"Deal"> | string
    workspaceId?: StringFilter<"Deal"> | string
    title?: StringFilter<"Deal"> | string
    value?: DecimalNullableFilter<"Deal"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Deal"> | string
    probability?: IntNullableFilter<"Deal"> | number | null
    pipelineId?: StringFilter<"Deal"> | string
    stageId?: StringFilter<"Deal"> | string
    position?: IntFilter<"Deal"> | number
    companyId?: StringNullableFilter<"Deal"> | string | null
    ownerId?: StringNullableFilter<"Deal"> | string | null
    status?: StringFilter<"Deal"> | string
    expectedCloseDate?: DateTimeNullableFilter<"Deal"> | Date | string | null
    isArchived?: BoolFilter<"Deal"> | boolean
    stageEnteredAt?: DateTimeFilter<"Deal"> | Date | string
    closedAt?: DateTimeNullableFilter<"Deal"> | Date | string | null
    closedReason?: StringNullableFilter<"Deal"> | string | null
    customData?: JsonFilter<"Deal">
    createdAt?: DateTimeFilter<"Deal"> | Date | string
    updatedAt?: DateTimeFilter<"Deal"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    pipeline?: XOR<PipelineRelationFilter, PipelineWhereInput>
    stage?: XOR<StageRelationFilter, StageWhereInput>
    contacts?: DealContactListRelationFilter
    activities?: ActivityListRelationFilter
    notes?: NoteListRelationFilter
  }

  export type DealOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    value?: SortOrderInput | SortOrder
    currency?: SortOrder
    probability?: SortOrderInput | SortOrder
    pipelineId?: SortOrder
    stageId?: SortOrder
    position?: SortOrder
    companyId?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    status?: SortOrder
    expectedCloseDate?: SortOrderInput | SortOrder
    isArchived?: SortOrder
    stageEnteredAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    closedReason?: SortOrderInput | SortOrder
    customData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    pipeline?: PipelineOrderByWithRelationInput
    stage?: StageOrderByWithRelationInput
    contacts?: DealContactOrderByRelationAggregateInput
    activities?: ActivityOrderByRelationAggregateInput
    notes?: NoteOrderByRelationAggregateInput
  }

  export type DealWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DealWhereInput | DealWhereInput[]
    OR?: DealWhereInput[]
    NOT?: DealWhereInput | DealWhereInput[]
    workspaceId?: StringFilter<"Deal"> | string
    title?: StringFilter<"Deal"> | string
    value?: DecimalNullableFilter<"Deal"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Deal"> | string
    probability?: IntNullableFilter<"Deal"> | number | null
    pipelineId?: StringFilter<"Deal"> | string
    stageId?: StringFilter<"Deal"> | string
    position?: IntFilter<"Deal"> | number
    companyId?: StringNullableFilter<"Deal"> | string | null
    ownerId?: StringNullableFilter<"Deal"> | string | null
    status?: StringFilter<"Deal"> | string
    expectedCloseDate?: DateTimeNullableFilter<"Deal"> | Date | string | null
    isArchived?: BoolFilter<"Deal"> | boolean
    stageEnteredAt?: DateTimeFilter<"Deal"> | Date | string
    closedAt?: DateTimeNullableFilter<"Deal"> | Date | string | null
    closedReason?: StringNullableFilter<"Deal"> | string | null
    customData?: JsonFilter<"Deal">
    createdAt?: DateTimeFilter<"Deal"> | Date | string
    updatedAt?: DateTimeFilter<"Deal"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    pipeline?: XOR<PipelineRelationFilter, PipelineWhereInput>
    stage?: XOR<StageRelationFilter, StageWhereInput>
    contacts?: DealContactListRelationFilter
    activities?: ActivityListRelationFilter
    notes?: NoteListRelationFilter
  }, "id">

  export type DealOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    value?: SortOrderInput | SortOrder
    currency?: SortOrder
    probability?: SortOrderInput | SortOrder
    pipelineId?: SortOrder
    stageId?: SortOrder
    position?: SortOrder
    companyId?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    status?: SortOrder
    expectedCloseDate?: SortOrderInput | SortOrder
    isArchived?: SortOrder
    stageEnteredAt?: SortOrder
    closedAt?: SortOrderInput | SortOrder
    closedReason?: SortOrderInput | SortOrder
    customData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DealCountOrderByAggregateInput
    _avg?: DealAvgOrderByAggregateInput
    _max?: DealMaxOrderByAggregateInput
    _min?: DealMinOrderByAggregateInput
    _sum?: DealSumOrderByAggregateInput
  }

  export type DealScalarWhereWithAggregatesInput = {
    AND?: DealScalarWhereWithAggregatesInput | DealScalarWhereWithAggregatesInput[]
    OR?: DealScalarWhereWithAggregatesInput[]
    NOT?: DealScalarWhereWithAggregatesInput | DealScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Deal"> | string
    workspaceId?: StringWithAggregatesFilter<"Deal"> | string
    title?: StringWithAggregatesFilter<"Deal"> | string
    value?: DecimalNullableWithAggregatesFilter<"Deal"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringWithAggregatesFilter<"Deal"> | string
    probability?: IntNullableWithAggregatesFilter<"Deal"> | number | null
    pipelineId?: StringWithAggregatesFilter<"Deal"> | string
    stageId?: StringWithAggregatesFilter<"Deal"> | string
    position?: IntWithAggregatesFilter<"Deal"> | number
    companyId?: StringNullableWithAggregatesFilter<"Deal"> | string | null
    ownerId?: StringNullableWithAggregatesFilter<"Deal"> | string | null
    status?: StringWithAggregatesFilter<"Deal"> | string
    expectedCloseDate?: DateTimeNullableWithAggregatesFilter<"Deal"> | Date | string | null
    isArchived?: BoolWithAggregatesFilter<"Deal"> | boolean
    stageEnteredAt?: DateTimeWithAggregatesFilter<"Deal"> | Date | string
    closedAt?: DateTimeNullableWithAggregatesFilter<"Deal"> | Date | string | null
    closedReason?: StringNullableWithAggregatesFilter<"Deal"> | string | null
    customData?: JsonWithAggregatesFilter<"Deal">
    createdAt?: DateTimeWithAggregatesFilter<"Deal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Deal"> | Date | string
  }

  export type DealContactWhereInput = {
    AND?: DealContactWhereInput | DealContactWhereInput[]
    OR?: DealContactWhereInput[]
    NOT?: DealContactWhereInput | DealContactWhereInput[]
    dealId?: StringFilter<"DealContact"> | string
    contactId?: StringFilter<"DealContact"> | string
    role?: StringNullableFilter<"DealContact"> | string | null
    deal?: XOR<DealRelationFilter, DealWhereInput>
    contact?: XOR<ContactRelationFilter, ContactWhereInput>
  }

  export type DealContactOrderByWithRelationInput = {
    dealId?: SortOrder
    contactId?: SortOrder
    role?: SortOrderInput | SortOrder
    deal?: DealOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
  }

  export type DealContactWhereUniqueInput = Prisma.AtLeast<{
    dealId_contactId?: DealContactDealIdContactIdCompoundUniqueInput
    AND?: DealContactWhereInput | DealContactWhereInput[]
    OR?: DealContactWhereInput[]
    NOT?: DealContactWhereInput | DealContactWhereInput[]
    dealId?: StringFilter<"DealContact"> | string
    contactId?: StringFilter<"DealContact"> | string
    role?: StringNullableFilter<"DealContact"> | string | null
    deal?: XOR<DealRelationFilter, DealWhereInput>
    contact?: XOR<ContactRelationFilter, ContactWhereInput>
  }, "dealId_contactId">

  export type DealContactOrderByWithAggregationInput = {
    dealId?: SortOrder
    contactId?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: DealContactCountOrderByAggregateInput
    _max?: DealContactMaxOrderByAggregateInput
    _min?: DealContactMinOrderByAggregateInput
  }

  export type DealContactScalarWhereWithAggregatesInput = {
    AND?: DealContactScalarWhereWithAggregatesInput | DealContactScalarWhereWithAggregatesInput[]
    OR?: DealContactScalarWhereWithAggregatesInput[]
    NOT?: DealContactScalarWhereWithAggregatesInput | DealContactScalarWhereWithAggregatesInput[]
    dealId?: StringWithAggregatesFilter<"DealContact"> | string
    contactId?: StringWithAggregatesFilter<"DealContact"> | string
    role?: StringNullableWithAggregatesFilter<"DealContact"> | string | null
  }

  export type ActivityWhereInput = {
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    id?: StringFilter<"Activity"> | string
    workspaceId?: StringFilter<"Activity"> | string
    type?: StringFilter<"Activity"> | string
    entityType?: StringFilter<"Activity"> | string
    entityId?: StringFilter<"Activity"> | string
    contactId?: StringNullableFilter<"Activity"> | string | null
    dealId?: StringNullableFilter<"Activity"> | string | null
    userId?: StringNullableFilter<"Activity"> | string | null
    source?: StringNullableFilter<"Activity"> | string | null
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    metadata?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    contact?: XOR<ContactNullableRelationFilter, ContactWhereInput> | null
    deal?: XOR<DealNullableRelationFilter, DealWhereInput> | null
  }

  export type ActivityOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    type?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    dealId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
    deal?: DealOrderByWithRelationInput
  }

  export type ActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ActivityWhereInput | ActivityWhereInput[]
    OR?: ActivityWhereInput[]
    NOT?: ActivityWhereInput | ActivityWhereInput[]
    workspaceId?: StringFilter<"Activity"> | string
    type?: StringFilter<"Activity"> | string
    entityType?: StringFilter<"Activity"> | string
    entityId?: StringFilter<"Activity"> | string
    contactId?: StringNullableFilter<"Activity"> | string | null
    dealId?: StringNullableFilter<"Activity"> | string | null
    userId?: StringNullableFilter<"Activity"> | string | null
    source?: StringNullableFilter<"Activity"> | string | null
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    metadata?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    contact?: XOR<ContactNullableRelationFilter, ContactWhereInput> | null
    deal?: XOR<DealNullableRelationFilter, DealWhereInput> | null
  }, "id">

  export type ActivityOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    type?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    dealId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    source?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivityCountOrderByAggregateInput
    _max?: ActivityMaxOrderByAggregateInput
    _min?: ActivityMinOrderByAggregateInput
  }

  export type ActivityScalarWhereWithAggregatesInput = {
    AND?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    OR?: ActivityScalarWhereWithAggregatesInput[]
    NOT?: ActivityScalarWhereWithAggregatesInput | ActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Activity"> | string
    workspaceId?: StringWithAggregatesFilter<"Activity"> | string
    type?: StringWithAggregatesFilter<"Activity"> | string
    entityType?: StringWithAggregatesFilter<"Activity"> | string
    entityId?: StringWithAggregatesFilter<"Activity"> | string
    contactId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    dealId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    source?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    title?: StringWithAggregatesFilter<"Activity"> | string
    description?: StringNullableWithAggregatesFilter<"Activity"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Activity">
    createdAt?: DateTimeWithAggregatesFilter<"Activity"> | Date | string
  }

  export type NoteWhereInput = {
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    id?: StringFilter<"Note"> | string
    workspaceId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    entityType?: StringFilter<"Note"> | string
    entityId?: StringFilter<"Note"> | string
    contactId?: StringNullableFilter<"Note"> | string | null
    dealId?: StringNullableFilter<"Note"> | string | null
    userId?: StringNullableFilter<"Note"> | string | null
    isPinned?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    contact?: XOR<ContactNullableRelationFilter, ContactWhereInput> | null
    deal?: XOR<DealNullableRelationFilter, DealWhereInput> | null
  }

  export type NoteOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    content?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    dealId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    contact?: ContactOrderByWithRelationInput
    deal?: DealOrderByWithRelationInput
  }

  export type NoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoteWhereInput | NoteWhereInput[]
    OR?: NoteWhereInput[]
    NOT?: NoteWhereInput | NoteWhereInput[]
    workspaceId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    entityType?: StringFilter<"Note"> | string
    entityId?: StringFilter<"Note"> | string
    contactId?: StringNullableFilter<"Note"> | string | null
    dealId?: StringNullableFilter<"Note"> | string | null
    userId?: StringNullableFilter<"Note"> | string | null
    isPinned?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    contact?: XOR<ContactNullableRelationFilter, ContactWhereInput> | null
    deal?: XOR<DealNullableRelationFilter, DealWhereInput> | null
  }, "id">

  export type NoteOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    content?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    contactId?: SortOrderInput | SortOrder
    dealId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NoteCountOrderByAggregateInput
    _max?: NoteMaxOrderByAggregateInput
    _min?: NoteMinOrderByAggregateInput
  }

  export type NoteScalarWhereWithAggregatesInput = {
    AND?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    OR?: NoteScalarWhereWithAggregatesInput[]
    NOT?: NoteScalarWhereWithAggregatesInput | NoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Note"> | string
    workspaceId?: StringWithAggregatesFilter<"Note"> | string
    content?: StringWithAggregatesFilter<"Note"> | string
    entityType?: StringWithAggregatesFilter<"Note"> | string
    entityId?: StringWithAggregatesFilter<"Note"> | string
    contactId?: StringNullableWithAggregatesFilter<"Note"> | string | null
    dealId?: StringNullableWithAggregatesFilter<"Note"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Note"> | string | null
    isPinned?: BoolWithAggregatesFilter<"Note"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Note"> | Date | string
  }

  export type WebhookEndpointWhereInput = {
    AND?: WebhookEndpointWhereInput | WebhookEndpointWhereInput[]
    OR?: WebhookEndpointWhereInput[]
    NOT?: WebhookEndpointWhereInput | WebhookEndpointWhereInput[]
    id?: StringFilter<"WebhookEndpoint"> | string
    workspaceId?: StringFilter<"WebhookEndpoint"> | string
    name?: StringFilter<"WebhookEndpoint"> | string
    url?: StringFilter<"WebhookEndpoint"> | string
    secret?: StringNullableFilter<"WebhookEndpoint"> | string | null
    events?: StringNullableListFilter<"WebhookEndpoint">
    isActive?: BoolFilter<"WebhookEndpoint"> | boolean
    failureCount?: IntFilter<"WebhookEndpoint"> | number
    lastTriggeredAt?: DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null
    lastStatusCode?: IntNullableFilter<"WebhookEndpoint"> | number | null
    createdAt?: DateTimeFilter<"WebhookEndpoint"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookEndpoint"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
  }

  export type WebhookEndpointOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrderInput | SortOrder
    events?: SortOrder
    isActive?: SortOrder
    failureCount?: SortOrder
    lastTriggeredAt?: SortOrderInput | SortOrder
    lastStatusCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type WebhookEndpointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebhookEndpointWhereInput | WebhookEndpointWhereInput[]
    OR?: WebhookEndpointWhereInput[]
    NOT?: WebhookEndpointWhereInput | WebhookEndpointWhereInput[]
    workspaceId?: StringFilter<"WebhookEndpoint"> | string
    name?: StringFilter<"WebhookEndpoint"> | string
    url?: StringFilter<"WebhookEndpoint"> | string
    secret?: StringNullableFilter<"WebhookEndpoint"> | string | null
    events?: StringNullableListFilter<"WebhookEndpoint">
    isActive?: BoolFilter<"WebhookEndpoint"> | boolean
    failureCount?: IntFilter<"WebhookEndpoint"> | number
    lastTriggeredAt?: DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null
    lastStatusCode?: IntNullableFilter<"WebhookEndpoint"> | number | null
    createdAt?: DateTimeFilter<"WebhookEndpoint"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookEndpoint"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type WebhookEndpointOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrderInput | SortOrder
    events?: SortOrder
    isActive?: SortOrder
    failureCount?: SortOrder
    lastTriggeredAt?: SortOrderInput | SortOrder
    lastStatusCode?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebhookEndpointCountOrderByAggregateInput
    _avg?: WebhookEndpointAvgOrderByAggregateInput
    _max?: WebhookEndpointMaxOrderByAggregateInput
    _min?: WebhookEndpointMinOrderByAggregateInput
    _sum?: WebhookEndpointSumOrderByAggregateInput
  }

  export type WebhookEndpointScalarWhereWithAggregatesInput = {
    AND?: WebhookEndpointScalarWhereWithAggregatesInput | WebhookEndpointScalarWhereWithAggregatesInput[]
    OR?: WebhookEndpointScalarWhereWithAggregatesInput[]
    NOT?: WebhookEndpointScalarWhereWithAggregatesInput | WebhookEndpointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebhookEndpoint"> | string
    workspaceId?: StringWithAggregatesFilter<"WebhookEndpoint"> | string
    name?: StringWithAggregatesFilter<"WebhookEndpoint"> | string
    url?: StringWithAggregatesFilter<"WebhookEndpoint"> | string
    secret?: StringNullableWithAggregatesFilter<"WebhookEndpoint"> | string | null
    events?: StringNullableListFilter<"WebhookEndpoint">
    isActive?: BoolWithAggregatesFilter<"WebhookEndpoint"> | boolean
    failureCount?: IntWithAggregatesFilter<"WebhookEndpoint"> | number
    lastTriggeredAt?: DateTimeNullableWithAggregatesFilter<"WebhookEndpoint"> | Date | string | null
    lastStatusCode?: IntNullableWithAggregatesFilter<"WebhookEndpoint"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"WebhookEndpoint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WebhookEndpoint"> | Date | string
  }

  export type ApiKeyWhereInput = {
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    workspaceId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
  }

  export type ApiKeyOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyPrefix?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    keyHash?: string
    AND?: ApiKeyWhereInput | ApiKeyWhereInput[]
    OR?: ApiKeyWhereInput[]
    NOT?: ApiKeyWhereInput | ApiKeyWhereInput[]
    workspaceId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
  }, "id" | "keyHash">

  export type ApiKeyOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyPrefix?: SortOrder
    lastUsedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ApiKeyCountOrderByAggregateInput
    _max?: ApiKeyMaxOrderByAggregateInput
    _min?: ApiKeyMinOrderByAggregateInput
  }

  export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    OR?: ApiKeyScalarWhereWithAggregatesInput[]
    NOT?: ApiKeyScalarWhereWithAggregatesInput | ApiKeyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ApiKey"> | string
    workspaceId?: StringWithAggregatesFilter<"ApiKey"> | string
    name?: StringWithAggregatesFilter<"ApiKey"> | string
    keyHash?: StringWithAggregatesFilter<"ApiKey"> | string
    keyPrefix?: StringWithAggregatesFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"ApiKey"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ApiKey"> | Date | string
  }

  export type EventLogWhereInput = {
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    id?: StringFilter<"EventLog"> | string
    workspaceId?: StringFilter<"EventLog"> | string
    event?: StringFilter<"EventLog"> | string
    payload?: JsonFilter<"EventLog">
    createdAt?: DateTimeFilter<"EventLog"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
  }

  export type EventLogOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type EventLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventLogWhereInput | EventLogWhereInput[]
    OR?: EventLogWhereInput[]
    NOT?: EventLogWhereInput | EventLogWhereInput[]
    workspaceId?: StringFilter<"EventLog"> | string
    event?: StringFilter<"EventLog"> | string
    payload?: JsonFilter<"EventLog">
    createdAt?: DateTimeFilter<"EventLog"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type EventLogOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    _count?: EventLogCountOrderByAggregateInput
    _max?: EventLogMaxOrderByAggregateInput
    _min?: EventLogMinOrderByAggregateInput
  }

  export type EventLogScalarWhereWithAggregatesInput = {
    AND?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    OR?: EventLogScalarWhereWithAggregatesInput[]
    NOT?: EventLogScalarWhereWithAggregatesInput | EventLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventLog"> | string
    workspaceId?: StringWithAggregatesFilter<"EventLog"> | string
    event?: StringWithAggregatesFilter<"EventLog"> | string
    payload?: JsonWithAggregatesFilter<"EventLog">
    createdAt?: DateTimeWithAggregatesFilter<"EventLog"> | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineCreateNestedManyWithoutWorkspaceInput
    deals?: DealCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactUncheckedCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutWorkspaceInput
    deals?: DealUncheckedCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUncheckedUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    workspaces?: WorkspaceUserCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    workspaces?: WorkspaceUserUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUserUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspaces?: WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceUserCreateInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutWorkspacesInput
  }

  export type WorkspaceUserUncheckedCreateInput = {
    id?: string
    workspaceId: string
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type WorkspaceUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type WorkspaceUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUserCreateManyInput = {
    id?: string
    workspaceId: string
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type WorkspaceUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutContactsInput
    deals?: DealContactCreateNestedManyWithoutContactInput
    activities?: ActivityCreateNestedManyWithoutContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    workspaceId: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
    deals?: DealContactUncheckedCreateNestedManyWithoutContactInput
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutContactsNestedInput
    deals?: DealContactUpdateManyWithoutContactNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deals?: DealContactUncheckedUpdateManyWithoutContactNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactCreateManyInput = {
    id?: string
    workspaceId: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PipelineCreateInput = {
    id?: string
    name: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutPipelinesInput
    stages?: StageCreateNestedManyWithoutPipelineInput
    deals?: DealCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUncheckedCreateInput = {
    id?: string
    workspaceId: string
    name: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: StageUncheckedCreateNestedManyWithoutPipelineInput
    deals?: DealUncheckedCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutPipelinesNestedInput
    stages?: StageUpdateManyWithoutPipelineNestedInput
    deals?: DealUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StageUncheckedUpdateManyWithoutPipelineNestedInput
    deals?: DealUncheckedUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineCreateManyInput = {
    id?: string
    workspaceId: string
    name: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PipelineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PipelineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageCreateInput = {
    id?: string
    name: string
    position: number
    color?: string
    probability?: number | null
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: number | null
    pipeline: PipelineCreateNestedOneWithoutStagesInput
    deals?: DealCreateNestedManyWithoutStageInput
  }

  export type StageUncheckedCreateInput = {
    id?: string
    pipelineId: string
    name: string
    position: number
    color?: string
    probability?: number | null
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: number | null
    deals?: DealUncheckedCreateNestedManyWithoutStageInput
  }

  export type StageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    isWon?: BoolFieldUpdateOperationsInput | boolean
    isLost?: BoolFieldUpdateOperationsInput | boolean
    rottenAfterDays?: NullableIntFieldUpdateOperationsInput | number | null
    pipeline?: PipelineUpdateOneRequiredWithoutStagesNestedInput
    deals?: DealUpdateManyWithoutStageNestedInput
  }

  export type StageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    isWon?: BoolFieldUpdateOperationsInput | boolean
    isLost?: BoolFieldUpdateOperationsInput | boolean
    rottenAfterDays?: NullableIntFieldUpdateOperationsInput | number | null
    deals?: DealUncheckedUpdateManyWithoutStageNestedInput
  }

  export type StageCreateManyInput = {
    id?: string
    pipelineId: string
    name: string
    position: number
    color?: string
    probability?: number | null
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: number | null
  }

  export type StageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    isWon?: BoolFieldUpdateOperationsInput | boolean
    isLost?: BoolFieldUpdateOperationsInput | boolean
    rottenAfterDays?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    isWon?: BoolFieldUpdateOperationsInput | boolean
    isLost?: BoolFieldUpdateOperationsInput | boolean
    rottenAfterDays?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DealCreateInput = {
    id?: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutDealsInput
    pipeline: PipelineCreateNestedOneWithoutDealsInput
    stage: StageCreateNestedOneWithoutDealsInput
    contacts?: DealContactCreateNestedManyWithoutDealInput
    activities?: ActivityCreateNestedManyWithoutDealInput
    notes?: NoteCreateNestedManyWithoutDealInput
  }

  export type DealUncheckedCreateInput = {
    id?: string
    workspaceId: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    pipelineId: string
    stageId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: DealContactUncheckedCreateNestedManyWithoutDealInput
    activities?: ActivityUncheckedCreateNestedManyWithoutDealInput
    notes?: NoteUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutDealsNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutDealsNestedInput
    stage?: StageUpdateOneRequiredWithoutDealsNestedInput
    contacts?: DealContactUpdateManyWithoutDealNestedInput
    activities?: ActivityUpdateManyWithoutDealNestedInput
    notes?: NoteUpdateManyWithoutDealNestedInput
  }

  export type DealUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    pipelineId?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: DealContactUncheckedUpdateManyWithoutDealNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutDealNestedInput
    notes?: NoteUncheckedUpdateManyWithoutDealNestedInput
  }

  export type DealCreateManyInput = {
    id?: string
    workspaceId: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    pipelineId: string
    stageId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    pipelineId?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealContactCreateInput = {
    role?: string | null
    deal: DealCreateNestedOneWithoutContactsInput
    contact: ContactCreateNestedOneWithoutDealsInput
  }

  export type DealContactUncheckedCreateInput = {
    dealId: string
    contactId: string
    role?: string | null
  }

  export type DealContactUpdateInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    deal?: DealUpdateOneRequiredWithoutContactsNestedInput
    contact?: ContactUpdateOneRequiredWithoutDealsNestedInput
  }

  export type DealContactUncheckedUpdateInput = {
    dealId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DealContactCreateManyInput = {
    dealId: string
    contactId: string
    role?: string | null
  }

  export type DealContactUpdateManyMutationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DealContactUncheckedUpdateManyInput = {
    dealId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityCreateInput = {
    id?: string
    type: string
    entityType: string
    entityId: string
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutActivitiesInput
    contact?: ContactCreateNestedOneWithoutActivitiesInput
    deal?: DealCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateInput = {
    id?: string
    workspaceId: string
    type: string
    entityType: string
    entityId: string
    contactId?: string | null
    dealId?: string | null
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutActivitiesNestedInput
    contact?: ContactUpdateOneWithoutActivitiesNestedInput
    deal?: DealUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityCreateManyInput = {
    id?: string
    workspaceId: string
    type: string
    entityType: string
    entityId: string
    contactId?: string | null
    dealId?: string | null
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateInput = {
    id?: string
    content: string
    entityType: string
    entityId: string
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutNotesInput
    contact?: ContactCreateNestedOneWithoutNotesInput
    deal?: DealCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateInput = {
    id?: string
    workspaceId: string
    content: string
    entityType: string
    entityId: string
    contactId?: string | null
    dealId?: string | null
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutNotesNestedInput
    contact?: ContactUpdateOneWithoutNotesNestedInput
    deal?: DealUpdateOneWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteCreateManyInput = {
    id?: string
    workspaceId: string
    content: string
    entityType: string
    entityId: string
    contactId?: string | null
    dealId?: string | null
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEndpointCreateInput = {
    id?: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    failureCount?: number
    lastTriggeredAt?: Date | string | null
    lastStatusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutWebhooksInput
  }

  export type WebhookEndpointUncheckedCreateInput = {
    id?: string
    workspaceId: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    failureCount?: number
    lastTriggeredAt?: Date | string | null
    lastStatusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookEndpointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutWebhooksNestedInput
  }

  export type WebhookEndpointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEndpointCreateManyInput = {
    id?: string
    workspaceId: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    failureCount?: number
    lastTriggeredAt?: Date | string | null
    lastStatusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookEndpointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEndpointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateInput = {
    id?: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutApiKeysInput
  }

  export type ApiKeyUncheckedCreateInput = {
    id?: string
    workspaceId: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ApiKeyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutApiKeysNestedInput
  }

  export type ApiKeyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyCreateManyInput = {
    id?: string
    workspaceId: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ApiKeyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogCreateInput = {
    id?: string
    event: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutEventLogsInput
  }

  export type EventLogUncheckedCreateInput = {
    id?: string
    workspaceId: string
    event: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutEventLogsNestedInput
  }

  export type EventLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogCreateManyInput = {
    id?: string
    workspaceId: string
    event: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type WorkspaceUserListRelationFilter = {
    every?: WorkspaceUserWhereInput
    some?: WorkspaceUserWhereInput
    none?: WorkspaceUserWhereInput
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type PipelineListRelationFilter = {
    every?: PipelineWhereInput
    some?: PipelineWhereInput
    none?: PipelineWhereInput
  }

  export type DealListRelationFilter = {
    every?: DealWhereInput
    some?: DealWhereInput
    none?: DealWhereInput
  }

  export type ActivityListRelationFilter = {
    every?: ActivityWhereInput
    some?: ActivityWhereInput
    none?: ActivityWhereInput
  }

  export type NoteListRelationFilter = {
    every?: NoteWhereInput
    some?: NoteWhereInput
    none?: NoteWhereInput
  }

  export type WebhookEndpointListRelationFilter = {
    every?: WebhookEndpointWhereInput
    some?: WebhookEndpointWhereInput
    none?: WebhookEndpointWhereInput
  }

  export type ApiKeyListRelationFilter = {
    every?: ApiKeyWhereInput
    some?: ApiKeyWhereInput
    none?: ApiKeyWhereInput
  }

  export type EventLogListRelationFilter = {
    every?: EventLogWhereInput
    some?: EventLogWhereInput
    none?: EventLogWhereInput
  }

  export type WorkspaceUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PipelineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DealOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebhookEndpointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiKeyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    settings?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type WorkspaceRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WorkspaceUserWorkspaceIdUserIdCompoundUniqueInput = {
    workspaceId: string
    userId: string
  }

  export type WorkspaceUserCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceUserMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceUserMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DealContactListRelationFilter = {
    every?: DealContactWhereInput
    some?: DealContactWhereInput
    none?: DealContactWhereInput
  }

  export type DealContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    source?: SortOrder
    score?: SortOrder
    tags?: SortOrder
    companyId?: SortOrder
    ownerId?: SortOrder
    channels?: SortOrder
    customData?: SortOrder
    isArchived?: SortOrder
    mergedInto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastContactedAt?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    source?: SortOrder
    score?: SortOrder
    companyId?: SortOrder
    ownerId?: SortOrder
    isArchived?: SortOrder
    mergedInto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastContactedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    source?: SortOrder
    score?: SortOrder
    companyId?: SortOrder
    ownerId?: SortOrder
    isArchived?: SortOrder
    mergedInto?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastContactedAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StageListRelationFilter = {
    every?: StageWhereInput
    some?: StageWhereInput
    none?: StageWhereInput
  }

  export type StageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PipelineCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PipelineMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PipelineMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PipelineRelationFilter = {
    is?: PipelineWhereInput
    isNot?: PipelineWhereInput
  }

  export type StageCountOrderByAggregateInput = {
    id?: SortOrder
    pipelineId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    color?: SortOrder
    probability?: SortOrder
    isWon?: SortOrder
    isLost?: SortOrder
    rottenAfterDays?: SortOrder
  }

  export type StageAvgOrderByAggregateInput = {
    position?: SortOrder
    probability?: SortOrder
    rottenAfterDays?: SortOrder
  }

  export type StageMaxOrderByAggregateInput = {
    id?: SortOrder
    pipelineId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    color?: SortOrder
    probability?: SortOrder
    isWon?: SortOrder
    isLost?: SortOrder
    rottenAfterDays?: SortOrder
  }

  export type StageMinOrderByAggregateInput = {
    id?: SortOrder
    pipelineId?: SortOrder
    name?: SortOrder
    position?: SortOrder
    color?: SortOrder
    probability?: SortOrder
    isWon?: SortOrder
    isLost?: SortOrder
    rottenAfterDays?: SortOrder
  }

  export type StageSumOrderByAggregateInput = {
    position?: SortOrder
    probability?: SortOrder
    rottenAfterDays?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type StageRelationFilter = {
    is?: StageWhereInput
    isNot?: StageWhereInput
  }

  export type DealCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    value?: SortOrder
    currency?: SortOrder
    probability?: SortOrder
    pipelineId?: SortOrder
    stageId?: SortOrder
    position?: SortOrder
    companyId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    expectedCloseDate?: SortOrder
    isArchived?: SortOrder
    stageEnteredAt?: SortOrder
    closedAt?: SortOrder
    closedReason?: SortOrder
    customData?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealAvgOrderByAggregateInput = {
    value?: SortOrder
    probability?: SortOrder
    position?: SortOrder
  }

  export type DealMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    value?: SortOrder
    currency?: SortOrder
    probability?: SortOrder
    pipelineId?: SortOrder
    stageId?: SortOrder
    position?: SortOrder
    companyId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    expectedCloseDate?: SortOrder
    isArchived?: SortOrder
    stageEnteredAt?: SortOrder
    closedAt?: SortOrder
    closedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    title?: SortOrder
    value?: SortOrder
    currency?: SortOrder
    probability?: SortOrder
    pipelineId?: SortOrder
    stageId?: SortOrder
    position?: SortOrder
    companyId?: SortOrder
    ownerId?: SortOrder
    status?: SortOrder
    expectedCloseDate?: SortOrder
    isArchived?: SortOrder
    stageEnteredAt?: SortOrder
    closedAt?: SortOrder
    closedReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DealSumOrderByAggregateInput = {
    value?: SortOrder
    probability?: SortOrder
    position?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DealRelationFilter = {
    is?: DealWhereInput
    isNot?: DealWhereInput
  }

  export type ContactRelationFilter = {
    is?: ContactWhereInput
    isNot?: ContactWhereInput
  }

  export type DealContactDealIdContactIdCompoundUniqueInput = {
    dealId: string
    contactId: string
  }

  export type DealContactCountOrderByAggregateInput = {
    dealId?: SortOrder
    contactId?: SortOrder
    role?: SortOrder
  }

  export type DealContactMaxOrderByAggregateInput = {
    dealId?: SortOrder
    contactId?: SortOrder
    role?: SortOrder
  }

  export type DealContactMinOrderByAggregateInput = {
    dealId?: SortOrder
    contactId?: SortOrder
    role?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ContactNullableRelationFilter = {
    is?: ContactWhereInput | null
    isNot?: ContactWhereInput | null
  }

  export type DealNullableRelationFilter = {
    is?: DealWhereInput | null
    isNot?: DealWhereInput | null
  }

  export type ActivityCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    type?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    contactId?: SortOrder
    dealId?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    title?: SortOrder
    description?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    type?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    contactId?: SortOrder
    dealId?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivityMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    type?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    contactId?: SortOrder
    dealId?: SortOrder
    userId?: SortOrder
    source?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type NoteCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    content?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    contactId?: SortOrder
    dealId?: SortOrder
    userId?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    content?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    contactId?: SortOrder
    dealId?: SortOrder
    userId?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NoteMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    content?: SortOrder
    entityType?: SortOrder
    entityId?: SortOrder
    contactId?: SortOrder
    dealId?: SortOrder
    userId?: SortOrder
    isPinned?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookEndpointCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    events?: SortOrder
    isActive?: SortOrder
    failureCount?: SortOrder
    lastTriggeredAt?: SortOrder
    lastStatusCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookEndpointAvgOrderByAggregateInput = {
    failureCount?: SortOrder
    lastStatusCode?: SortOrder
  }

  export type WebhookEndpointMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    isActive?: SortOrder
    failureCount?: SortOrder
    lastTriggeredAt?: SortOrder
    lastStatusCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookEndpointMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    url?: SortOrder
    secret?: SortOrder
    isActive?: SortOrder
    failureCount?: SortOrder
    lastTriggeredAt?: SortOrder
    lastStatusCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebhookEndpointSumOrderByAggregateInput = {
    failureCount?: SortOrder
    lastStatusCode?: SortOrder
  }

  export type ApiKeyCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyPrefix?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyPrefix?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ApiKeyMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    keyHash?: SortOrder
    keyPrefix?: SortOrder
    lastUsedAt?: SortOrder
    expiresAt?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type EventLogCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    event?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type EventLogMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    event?: SortOrder
    createdAt?: SortOrder
  }

  export type EventLogMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    event?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceUserCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type ContactCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ContactCreateWithoutWorkspaceInput, ContactUncheckedCreateWithoutWorkspaceInput> | ContactCreateWithoutWorkspaceInput[] | ContactUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutWorkspaceInput | ContactCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ContactCreateManyWorkspaceInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type PipelineCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<PipelineCreateWithoutWorkspaceInput, PipelineUncheckedCreateWithoutWorkspaceInput> | PipelineCreateWithoutWorkspaceInput[] | PipelineUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: PipelineCreateOrConnectWithoutWorkspaceInput | PipelineCreateOrConnectWithoutWorkspaceInput[]
    createMany?: PipelineCreateManyWorkspaceInputEnvelope
    connect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
  }

  export type DealCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<DealCreateWithoutWorkspaceInput, DealUncheckedCreateWithoutWorkspaceInput> | DealCreateWithoutWorkspaceInput[] | DealUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: DealCreateOrConnectWithoutWorkspaceInput | DealCreateOrConnectWithoutWorkspaceInput[]
    createMany?: DealCreateManyWorkspaceInputEnvelope
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ActivityCreateWithoutWorkspaceInput, ActivityUncheckedCreateWithoutWorkspaceInput> | ActivityCreateWithoutWorkspaceInput[] | ActivityUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutWorkspaceInput | ActivityCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ActivityCreateManyWorkspaceInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput> | NoteCreateWithoutWorkspaceInput[] | NoteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutWorkspaceInput | NoteCreateOrConnectWithoutWorkspaceInput[]
    createMany?: NoteCreateManyWorkspaceInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type WebhookEndpointCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WebhookEndpointCreateWithoutWorkspaceInput, WebhookEndpointUncheckedCreateWithoutWorkspaceInput> | WebhookEndpointCreateWithoutWorkspaceInput[] | WebhookEndpointUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WebhookEndpointCreateOrConnectWithoutWorkspaceInput | WebhookEndpointCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WebhookEndpointCreateManyWorkspaceInputEnvelope
    connect?: WebhookEndpointWhereUniqueInput | WebhookEndpointWhereUniqueInput[]
  }

  export type ApiKeyCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ApiKeyCreateWithoutWorkspaceInput, ApiKeyUncheckedCreateWithoutWorkspaceInput> | ApiKeyCreateWithoutWorkspaceInput[] | ApiKeyUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutWorkspaceInput | ApiKeyCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ApiKeyCreateManyWorkspaceInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type EventLogCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<EventLogCreateWithoutWorkspaceInput, EventLogUncheckedCreateWithoutWorkspaceInput> | EventLogCreateWithoutWorkspaceInput[] | EventLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutWorkspaceInput | EventLogCreateOrConnectWithoutWorkspaceInput[]
    createMany?: EventLogCreateManyWorkspaceInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ContactCreateWithoutWorkspaceInput, ContactUncheckedCreateWithoutWorkspaceInput> | ContactCreateWithoutWorkspaceInput[] | ContactUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutWorkspaceInput | ContactCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ContactCreateManyWorkspaceInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type PipelineUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<PipelineCreateWithoutWorkspaceInput, PipelineUncheckedCreateWithoutWorkspaceInput> | PipelineCreateWithoutWorkspaceInput[] | PipelineUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: PipelineCreateOrConnectWithoutWorkspaceInput | PipelineCreateOrConnectWithoutWorkspaceInput[]
    createMany?: PipelineCreateManyWorkspaceInputEnvelope
    connect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
  }

  export type DealUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<DealCreateWithoutWorkspaceInput, DealUncheckedCreateWithoutWorkspaceInput> | DealCreateWithoutWorkspaceInput[] | DealUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: DealCreateOrConnectWithoutWorkspaceInput | DealCreateOrConnectWithoutWorkspaceInput[]
    createMany?: DealCreateManyWorkspaceInputEnvelope
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ActivityCreateWithoutWorkspaceInput, ActivityUncheckedCreateWithoutWorkspaceInput> | ActivityCreateWithoutWorkspaceInput[] | ActivityUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutWorkspaceInput | ActivityCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ActivityCreateManyWorkspaceInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput> | NoteCreateWithoutWorkspaceInput[] | NoteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutWorkspaceInput | NoteCreateOrConnectWithoutWorkspaceInput[]
    createMany?: NoteCreateManyWorkspaceInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type WebhookEndpointUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WebhookEndpointCreateWithoutWorkspaceInput, WebhookEndpointUncheckedCreateWithoutWorkspaceInput> | WebhookEndpointCreateWithoutWorkspaceInput[] | WebhookEndpointUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WebhookEndpointCreateOrConnectWithoutWorkspaceInput | WebhookEndpointCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WebhookEndpointCreateManyWorkspaceInputEnvelope
    connect?: WebhookEndpointWhereUniqueInput | WebhookEndpointWhereUniqueInput[]
  }

  export type ApiKeyUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ApiKeyCreateWithoutWorkspaceInput, ApiKeyUncheckedCreateWithoutWorkspaceInput> | ApiKeyCreateWithoutWorkspaceInput[] | ApiKeyUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutWorkspaceInput | ApiKeyCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ApiKeyCreateManyWorkspaceInputEnvelope
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
  }

  export type EventLogUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<EventLogCreateWithoutWorkspaceInput, EventLogUncheckedCreateWithoutWorkspaceInput> | EventLogCreateWithoutWorkspaceInput[] | EventLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutWorkspaceInput | EventLogCreateOrConnectWithoutWorkspaceInput[]
    createMany?: EventLogCreateManyWorkspaceInputEnvelope
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkspaceUserUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type ContactUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ContactCreateWithoutWorkspaceInput, ContactUncheckedCreateWithoutWorkspaceInput> | ContactCreateWithoutWorkspaceInput[] | ContactUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutWorkspaceInput | ContactCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutWorkspaceInput | ContactUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ContactCreateManyWorkspaceInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutWorkspaceInput | ContactUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutWorkspaceInput | ContactUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type PipelineUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<PipelineCreateWithoutWorkspaceInput, PipelineUncheckedCreateWithoutWorkspaceInput> | PipelineCreateWithoutWorkspaceInput[] | PipelineUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: PipelineCreateOrConnectWithoutWorkspaceInput | PipelineCreateOrConnectWithoutWorkspaceInput[]
    upsert?: PipelineUpsertWithWhereUniqueWithoutWorkspaceInput | PipelineUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: PipelineCreateManyWorkspaceInputEnvelope
    set?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    disconnect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    delete?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    connect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    update?: PipelineUpdateWithWhereUniqueWithoutWorkspaceInput | PipelineUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: PipelineUpdateManyWithWhereWithoutWorkspaceInput | PipelineUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: PipelineScalarWhereInput | PipelineScalarWhereInput[]
  }

  export type DealUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<DealCreateWithoutWorkspaceInput, DealUncheckedCreateWithoutWorkspaceInput> | DealCreateWithoutWorkspaceInput[] | DealUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: DealCreateOrConnectWithoutWorkspaceInput | DealCreateOrConnectWithoutWorkspaceInput[]
    upsert?: DealUpsertWithWhereUniqueWithoutWorkspaceInput | DealUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: DealCreateManyWorkspaceInputEnvelope
    set?: DealWhereUniqueInput | DealWhereUniqueInput[]
    disconnect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    delete?: DealWhereUniqueInput | DealWhereUniqueInput[]
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    update?: DealUpdateWithWhereUniqueWithoutWorkspaceInput | DealUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: DealUpdateManyWithWhereWithoutWorkspaceInput | DealUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: DealScalarWhereInput | DealScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ActivityCreateWithoutWorkspaceInput, ActivityUncheckedCreateWithoutWorkspaceInput> | ActivityCreateWithoutWorkspaceInput[] | ActivityUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutWorkspaceInput | ActivityCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutWorkspaceInput | ActivityUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ActivityCreateManyWorkspaceInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutWorkspaceInput | ActivityUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutWorkspaceInput | ActivityUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput> | NoteCreateWithoutWorkspaceInput[] | NoteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutWorkspaceInput | NoteCreateOrConnectWithoutWorkspaceInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutWorkspaceInput | NoteUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: NoteCreateManyWorkspaceInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutWorkspaceInput | NoteUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutWorkspaceInput | NoteUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type WebhookEndpointUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WebhookEndpointCreateWithoutWorkspaceInput, WebhookEndpointUncheckedCreateWithoutWorkspaceInput> | WebhookEndpointCreateWithoutWorkspaceInput[] | WebhookEndpointUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WebhookEndpointCreateOrConnectWithoutWorkspaceInput | WebhookEndpointCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WebhookEndpointUpsertWithWhereUniqueWithoutWorkspaceInput | WebhookEndpointUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WebhookEndpointCreateManyWorkspaceInputEnvelope
    set?: WebhookEndpointWhereUniqueInput | WebhookEndpointWhereUniqueInput[]
    disconnect?: WebhookEndpointWhereUniqueInput | WebhookEndpointWhereUniqueInput[]
    delete?: WebhookEndpointWhereUniqueInput | WebhookEndpointWhereUniqueInput[]
    connect?: WebhookEndpointWhereUniqueInput | WebhookEndpointWhereUniqueInput[]
    update?: WebhookEndpointUpdateWithWhereUniqueWithoutWorkspaceInput | WebhookEndpointUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WebhookEndpointUpdateManyWithWhereWithoutWorkspaceInput | WebhookEndpointUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WebhookEndpointScalarWhereInput | WebhookEndpointScalarWhereInput[]
  }

  export type ApiKeyUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ApiKeyCreateWithoutWorkspaceInput, ApiKeyUncheckedCreateWithoutWorkspaceInput> | ApiKeyCreateWithoutWorkspaceInput[] | ApiKeyUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutWorkspaceInput | ApiKeyCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutWorkspaceInput | ApiKeyUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ApiKeyCreateManyWorkspaceInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutWorkspaceInput | ApiKeyUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutWorkspaceInput | ApiKeyUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type EventLogUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<EventLogCreateWithoutWorkspaceInput, EventLogUncheckedCreateWithoutWorkspaceInput> | EventLogCreateWithoutWorkspaceInput[] | EventLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutWorkspaceInput | EventLogCreateOrConnectWithoutWorkspaceInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutWorkspaceInput | EventLogUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: EventLogCreateManyWorkspaceInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutWorkspaceInput | EventLogUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutWorkspaceInput | EventLogUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput> | WorkspaceUserCreateWithoutWorkspaceInput[] | WorkspaceUserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutWorkspaceInput | WorkspaceUserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceUserCreateManyWorkspaceInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ContactCreateWithoutWorkspaceInput, ContactUncheckedCreateWithoutWorkspaceInput> | ContactCreateWithoutWorkspaceInput[] | ContactUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutWorkspaceInput | ContactCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutWorkspaceInput | ContactUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ContactCreateManyWorkspaceInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutWorkspaceInput | ContactUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutWorkspaceInput | ContactUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<PipelineCreateWithoutWorkspaceInput, PipelineUncheckedCreateWithoutWorkspaceInput> | PipelineCreateWithoutWorkspaceInput[] | PipelineUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: PipelineCreateOrConnectWithoutWorkspaceInput | PipelineCreateOrConnectWithoutWorkspaceInput[]
    upsert?: PipelineUpsertWithWhereUniqueWithoutWorkspaceInput | PipelineUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: PipelineCreateManyWorkspaceInputEnvelope
    set?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    disconnect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    delete?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    connect?: PipelineWhereUniqueInput | PipelineWhereUniqueInput[]
    update?: PipelineUpdateWithWhereUniqueWithoutWorkspaceInput | PipelineUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: PipelineUpdateManyWithWhereWithoutWorkspaceInput | PipelineUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: PipelineScalarWhereInput | PipelineScalarWhereInput[]
  }

  export type DealUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<DealCreateWithoutWorkspaceInput, DealUncheckedCreateWithoutWorkspaceInput> | DealCreateWithoutWorkspaceInput[] | DealUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: DealCreateOrConnectWithoutWorkspaceInput | DealCreateOrConnectWithoutWorkspaceInput[]
    upsert?: DealUpsertWithWhereUniqueWithoutWorkspaceInput | DealUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: DealCreateManyWorkspaceInputEnvelope
    set?: DealWhereUniqueInput | DealWhereUniqueInput[]
    disconnect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    delete?: DealWhereUniqueInput | DealWhereUniqueInput[]
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    update?: DealUpdateWithWhereUniqueWithoutWorkspaceInput | DealUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: DealUpdateManyWithWhereWithoutWorkspaceInput | DealUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: DealScalarWhereInput | DealScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ActivityCreateWithoutWorkspaceInput, ActivityUncheckedCreateWithoutWorkspaceInput> | ActivityCreateWithoutWorkspaceInput[] | ActivityUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutWorkspaceInput | ActivityCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutWorkspaceInput | ActivityUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ActivityCreateManyWorkspaceInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutWorkspaceInput | ActivityUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutWorkspaceInput | ActivityUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput> | NoteCreateWithoutWorkspaceInput[] | NoteUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutWorkspaceInput | NoteCreateOrConnectWithoutWorkspaceInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutWorkspaceInput | NoteUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: NoteCreateManyWorkspaceInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutWorkspaceInput | NoteUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutWorkspaceInput | NoteUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type WebhookEndpointUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WebhookEndpointCreateWithoutWorkspaceInput, WebhookEndpointUncheckedCreateWithoutWorkspaceInput> | WebhookEndpointCreateWithoutWorkspaceInput[] | WebhookEndpointUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WebhookEndpointCreateOrConnectWithoutWorkspaceInput | WebhookEndpointCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WebhookEndpointUpsertWithWhereUniqueWithoutWorkspaceInput | WebhookEndpointUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WebhookEndpointCreateManyWorkspaceInputEnvelope
    set?: WebhookEndpointWhereUniqueInput | WebhookEndpointWhereUniqueInput[]
    disconnect?: WebhookEndpointWhereUniqueInput | WebhookEndpointWhereUniqueInput[]
    delete?: WebhookEndpointWhereUniqueInput | WebhookEndpointWhereUniqueInput[]
    connect?: WebhookEndpointWhereUniqueInput | WebhookEndpointWhereUniqueInput[]
    update?: WebhookEndpointUpdateWithWhereUniqueWithoutWorkspaceInput | WebhookEndpointUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WebhookEndpointUpdateManyWithWhereWithoutWorkspaceInput | WebhookEndpointUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WebhookEndpointScalarWhereInput | WebhookEndpointScalarWhereInput[]
  }

  export type ApiKeyUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ApiKeyCreateWithoutWorkspaceInput, ApiKeyUncheckedCreateWithoutWorkspaceInput> | ApiKeyCreateWithoutWorkspaceInput[] | ApiKeyUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ApiKeyCreateOrConnectWithoutWorkspaceInput | ApiKeyCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ApiKeyUpsertWithWhereUniqueWithoutWorkspaceInput | ApiKeyUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ApiKeyCreateManyWorkspaceInputEnvelope
    set?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    disconnect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    delete?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    connect?: ApiKeyWhereUniqueInput | ApiKeyWhereUniqueInput[]
    update?: ApiKeyUpdateWithWhereUniqueWithoutWorkspaceInput | ApiKeyUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ApiKeyUpdateManyWithWhereWithoutWorkspaceInput | ApiKeyUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
  }

  export type EventLogUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<EventLogCreateWithoutWorkspaceInput, EventLogUncheckedCreateWithoutWorkspaceInput> | EventLogCreateWithoutWorkspaceInput[] | EventLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: EventLogCreateOrConnectWithoutWorkspaceInput | EventLogCreateOrConnectWithoutWorkspaceInput[]
    upsert?: EventLogUpsertWithWhereUniqueWithoutWorkspaceInput | EventLogUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: EventLogCreateManyWorkspaceInputEnvelope
    set?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    disconnect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    delete?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    connect?: EventLogWhereUniqueInput | EventLogWhereUniqueInput[]
    update?: EventLogUpdateWithWhereUniqueWithoutWorkspaceInput | EventLogUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: EventLogUpdateManyWithWhereWithoutWorkspaceInput | EventLogUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
  }

  export type WorkspaceUserCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type WorkspaceUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type WorkspaceUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutUserInput | WorkspaceUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutUserInput | WorkspaceUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutUserInput | WorkspaceUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput> | WorkspaceUserCreateWithoutUserInput[] | WorkspaceUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceUserCreateOrConnectWithoutUserInput | WorkspaceUserCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUserUpsertWithWhereUniqueWithoutUserInput | WorkspaceUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceUserCreateManyUserInputEnvelope
    set?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    disconnect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    delete?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    connect?: WorkspaceUserWhereUniqueInput | WorkspaceUserWhereUniqueInput[]
    update?: WorkspaceUserUpdateWithWhereUniqueWithoutUserInput | WorkspaceUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUserUpdateManyWithWhereWithoutUserInput | WorkspaceUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutUsersInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    upsert?: WorkspaceUpsertWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutUsersInput, WorkspaceUpdateWithoutUsersInput>, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput
    upsert?: UserUpsertWithoutWorkspacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspacesInput, UserUpdateWithoutWorkspacesInput>, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type ContactCreatetagsInput = {
    set: string[]
  }

  export type WorkspaceCreateNestedOneWithoutContactsInput = {
    create?: XOR<WorkspaceCreateWithoutContactsInput, WorkspaceUncheckedCreateWithoutContactsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutContactsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type DealContactCreateNestedManyWithoutContactInput = {
    create?: XOR<DealContactCreateWithoutContactInput, DealContactUncheckedCreateWithoutContactInput> | DealContactCreateWithoutContactInput[] | DealContactUncheckedCreateWithoutContactInput[]
    connectOrCreate?: DealContactCreateOrConnectWithoutContactInput | DealContactCreateOrConnectWithoutContactInput[]
    createMany?: DealContactCreateManyContactInputEnvelope
    connect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutContactInput = {
    create?: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput> | ActivityCreateWithoutContactInput[] | ActivityUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutContactInput | ActivityCreateOrConnectWithoutContactInput[]
    createMany?: ActivityCreateManyContactInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutContactInput = {
    create?: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput> | NoteCreateWithoutContactInput[] | NoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutContactInput | NoteCreateOrConnectWithoutContactInput[]
    createMany?: NoteCreateManyContactInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type DealContactUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<DealContactCreateWithoutContactInput, DealContactUncheckedCreateWithoutContactInput> | DealContactCreateWithoutContactInput[] | DealContactUncheckedCreateWithoutContactInput[]
    connectOrCreate?: DealContactCreateOrConnectWithoutContactInput | DealContactCreateOrConnectWithoutContactInput[]
    createMany?: DealContactCreateManyContactInputEnvelope
    connect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput> | ActivityCreateWithoutContactInput[] | ActivityUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutContactInput | ActivityCreateOrConnectWithoutContactInput[]
    createMany?: ActivityCreateManyContactInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput> | NoteCreateWithoutContactInput[] | NoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutContactInput | NoteCreateOrConnectWithoutContactInput[]
    createMany?: NoteCreateManyContactInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ContactUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkspaceUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutContactsInput, WorkspaceUncheckedCreateWithoutContactsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutContactsInput
    upsert?: WorkspaceUpsertWithoutContactsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutContactsInput, WorkspaceUpdateWithoutContactsInput>, WorkspaceUncheckedUpdateWithoutContactsInput>
  }

  export type DealContactUpdateManyWithoutContactNestedInput = {
    create?: XOR<DealContactCreateWithoutContactInput, DealContactUncheckedCreateWithoutContactInput> | DealContactCreateWithoutContactInput[] | DealContactUncheckedCreateWithoutContactInput[]
    connectOrCreate?: DealContactCreateOrConnectWithoutContactInput | DealContactCreateOrConnectWithoutContactInput[]
    upsert?: DealContactUpsertWithWhereUniqueWithoutContactInput | DealContactUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: DealContactCreateManyContactInputEnvelope
    set?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    disconnect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    delete?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    connect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    update?: DealContactUpdateWithWhereUniqueWithoutContactInput | DealContactUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: DealContactUpdateManyWithWhereWithoutContactInput | DealContactUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: DealContactScalarWhereInput | DealContactScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutContactNestedInput = {
    create?: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput> | ActivityCreateWithoutContactInput[] | ActivityUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutContactInput | ActivityCreateOrConnectWithoutContactInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutContactInput | ActivityUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ActivityCreateManyContactInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutContactInput | ActivityUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutContactInput | ActivityUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutContactNestedInput = {
    create?: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput> | NoteCreateWithoutContactInput[] | NoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutContactInput | NoteCreateOrConnectWithoutContactInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutContactInput | NoteUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: NoteCreateManyContactInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutContactInput | NoteUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutContactInput | NoteUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type DealContactUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<DealContactCreateWithoutContactInput, DealContactUncheckedCreateWithoutContactInput> | DealContactCreateWithoutContactInput[] | DealContactUncheckedCreateWithoutContactInput[]
    connectOrCreate?: DealContactCreateOrConnectWithoutContactInput | DealContactCreateOrConnectWithoutContactInput[]
    upsert?: DealContactUpsertWithWhereUniqueWithoutContactInput | DealContactUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: DealContactCreateManyContactInputEnvelope
    set?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    disconnect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    delete?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    connect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    update?: DealContactUpdateWithWhereUniqueWithoutContactInput | DealContactUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: DealContactUpdateManyWithWhereWithoutContactInput | DealContactUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: DealContactScalarWhereInput | DealContactScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput> | ActivityCreateWithoutContactInput[] | ActivityUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutContactInput | ActivityCreateOrConnectWithoutContactInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutContactInput | ActivityUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ActivityCreateManyContactInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutContactInput | ActivityUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutContactInput | ActivityUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput> | NoteCreateWithoutContactInput[] | NoteUncheckedCreateWithoutContactInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutContactInput | NoteCreateOrConnectWithoutContactInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutContactInput | NoteUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: NoteCreateManyContactInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutContactInput | NoteUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutContactInput | NoteUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutPipelinesInput = {
    create?: XOR<WorkspaceCreateWithoutPipelinesInput, WorkspaceUncheckedCreateWithoutPipelinesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPipelinesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type StageCreateNestedManyWithoutPipelineInput = {
    create?: XOR<StageCreateWithoutPipelineInput, StageUncheckedCreateWithoutPipelineInput> | StageCreateWithoutPipelineInput[] | StageUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: StageCreateOrConnectWithoutPipelineInput | StageCreateOrConnectWithoutPipelineInput[]
    createMany?: StageCreateManyPipelineInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type DealCreateNestedManyWithoutPipelineInput = {
    create?: XOR<DealCreateWithoutPipelineInput, DealUncheckedCreateWithoutPipelineInput> | DealCreateWithoutPipelineInput[] | DealUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: DealCreateOrConnectWithoutPipelineInput | DealCreateOrConnectWithoutPipelineInput[]
    createMany?: DealCreateManyPipelineInputEnvelope
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
  }

  export type StageUncheckedCreateNestedManyWithoutPipelineInput = {
    create?: XOR<StageCreateWithoutPipelineInput, StageUncheckedCreateWithoutPipelineInput> | StageCreateWithoutPipelineInput[] | StageUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: StageCreateOrConnectWithoutPipelineInput | StageCreateOrConnectWithoutPipelineInput[]
    createMany?: StageCreateManyPipelineInputEnvelope
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
  }

  export type DealUncheckedCreateNestedManyWithoutPipelineInput = {
    create?: XOR<DealCreateWithoutPipelineInput, DealUncheckedCreateWithoutPipelineInput> | DealCreateWithoutPipelineInput[] | DealUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: DealCreateOrConnectWithoutPipelineInput | DealCreateOrConnectWithoutPipelineInput[]
    createMany?: DealCreateManyPipelineInputEnvelope
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutPipelinesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutPipelinesInput, WorkspaceUncheckedCreateWithoutPipelinesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPipelinesInput
    upsert?: WorkspaceUpsertWithoutPipelinesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutPipelinesInput, WorkspaceUpdateWithoutPipelinesInput>, WorkspaceUncheckedUpdateWithoutPipelinesInput>
  }

  export type StageUpdateManyWithoutPipelineNestedInput = {
    create?: XOR<StageCreateWithoutPipelineInput, StageUncheckedCreateWithoutPipelineInput> | StageCreateWithoutPipelineInput[] | StageUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: StageCreateOrConnectWithoutPipelineInput | StageCreateOrConnectWithoutPipelineInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutPipelineInput | StageUpsertWithWhereUniqueWithoutPipelineInput[]
    createMany?: StageCreateManyPipelineInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutPipelineInput | StageUpdateWithWhereUniqueWithoutPipelineInput[]
    updateMany?: StageUpdateManyWithWhereWithoutPipelineInput | StageUpdateManyWithWhereWithoutPipelineInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type DealUpdateManyWithoutPipelineNestedInput = {
    create?: XOR<DealCreateWithoutPipelineInput, DealUncheckedCreateWithoutPipelineInput> | DealCreateWithoutPipelineInput[] | DealUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: DealCreateOrConnectWithoutPipelineInput | DealCreateOrConnectWithoutPipelineInput[]
    upsert?: DealUpsertWithWhereUniqueWithoutPipelineInput | DealUpsertWithWhereUniqueWithoutPipelineInput[]
    createMany?: DealCreateManyPipelineInputEnvelope
    set?: DealWhereUniqueInput | DealWhereUniqueInput[]
    disconnect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    delete?: DealWhereUniqueInput | DealWhereUniqueInput[]
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    update?: DealUpdateWithWhereUniqueWithoutPipelineInput | DealUpdateWithWhereUniqueWithoutPipelineInput[]
    updateMany?: DealUpdateManyWithWhereWithoutPipelineInput | DealUpdateManyWithWhereWithoutPipelineInput[]
    deleteMany?: DealScalarWhereInput | DealScalarWhereInput[]
  }

  export type StageUncheckedUpdateManyWithoutPipelineNestedInput = {
    create?: XOR<StageCreateWithoutPipelineInput, StageUncheckedCreateWithoutPipelineInput> | StageCreateWithoutPipelineInput[] | StageUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: StageCreateOrConnectWithoutPipelineInput | StageCreateOrConnectWithoutPipelineInput[]
    upsert?: StageUpsertWithWhereUniqueWithoutPipelineInput | StageUpsertWithWhereUniqueWithoutPipelineInput[]
    createMany?: StageCreateManyPipelineInputEnvelope
    set?: StageWhereUniqueInput | StageWhereUniqueInput[]
    disconnect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    delete?: StageWhereUniqueInput | StageWhereUniqueInput[]
    connect?: StageWhereUniqueInput | StageWhereUniqueInput[]
    update?: StageUpdateWithWhereUniqueWithoutPipelineInput | StageUpdateWithWhereUniqueWithoutPipelineInput[]
    updateMany?: StageUpdateManyWithWhereWithoutPipelineInput | StageUpdateManyWithWhereWithoutPipelineInput[]
    deleteMany?: StageScalarWhereInput | StageScalarWhereInput[]
  }

  export type DealUncheckedUpdateManyWithoutPipelineNestedInput = {
    create?: XOR<DealCreateWithoutPipelineInput, DealUncheckedCreateWithoutPipelineInput> | DealCreateWithoutPipelineInput[] | DealUncheckedCreateWithoutPipelineInput[]
    connectOrCreate?: DealCreateOrConnectWithoutPipelineInput | DealCreateOrConnectWithoutPipelineInput[]
    upsert?: DealUpsertWithWhereUniqueWithoutPipelineInput | DealUpsertWithWhereUniqueWithoutPipelineInput[]
    createMany?: DealCreateManyPipelineInputEnvelope
    set?: DealWhereUniqueInput | DealWhereUniqueInput[]
    disconnect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    delete?: DealWhereUniqueInput | DealWhereUniqueInput[]
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    update?: DealUpdateWithWhereUniqueWithoutPipelineInput | DealUpdateWithWhereUniqueWithoutPipelineInput[]
    updateMany?: DealUpdateManyWithWhereWithoutPipelineInput | DealUpdateManyWithWhereWithoutPipelineInput[]
    deleteMany?: DealScalarWhereInput | DealScalarWhereInput[]
  }

  export type PipelineCreateNestedOneWithoutStagesInput = {
    create?: XOR<PipelineCreateWithoutStagesInput, PipelineUncheckedCreateWithoutStagesInput>
    connectOrCreate?: PipelineCreateOrConnectWithoutStagesInput
    connect?: PipelineWhereUniqueInput
  }

  export type DealCreateNestedManyWithoutStageInput = {
    create?: XOR<DealCreateWithoutStageInput, DealUncheckedCreateWithoutStageInput> | DealCreateWithoutStageInput[] | DealUncheckedCreateWithoutStageInput[]
    connectOrCreate?: DealCreateOrConnectWithoutStageInput | DealCreateOrConnectWithoutStageInput[]
    createMany?: DealCreateManyStageInputEnvelope
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
  }

  export type DealUncheckedCreateNestedManyWithoutStageInput = {
    create?: XOR<DealCreateWithoutStageInput, DealUncheckedCreateWithoutStageInput> | DealCreateWithoutStageInput[] | DealUncheckedCreateWithoutStageInput[]
    connectOrCreate?: DealCreateOrConnectWithoutStageInput | DealCreateOrConnectWithoutStageInput[]
    createMany?: DealCreateManyStageInputEnvelope
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PipelineUpdateOneRequiredWithoutStagesNestedInput = {
    create?: XOR<PipelineCreateWithoutStagesInput, PipelineUncheckedCreateWithoutStagesInput>
    connectOrCreate?: PipelineCreateOrConnectWithoutStagesInput
    upsert?: PipelineUpsertWithoutStagesInput
    connect?: PipelineWhereUniqueInput
    update?: XOR<XOR<PipelineUpdateToOneWithWhereWithoutStagesInput, PipelineUpdateWithoutStagesInput>, PipelineUncheckedUpdateWithoutStagesInput>
  }

  export type DealUpdateManyWithoutStageNestedInput = {
    create?: XOR<DealCreateWithoutStageInput, DealUncheckedCreateWithoutStageInput> | DealCreateWithoutStageInput[] | DealUncheckedCreateWithoutStageInput[]
    connectOrCreate?: DealCreateOrConnectWithoutStageInput | DealCreateOrConnectWithoutStageInput[]
    upsert?: DealUpsertWithWhereUniqueWithoutStageInput | DealUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: DealCreateManyStageInputEnvelope
    set?: DealWhereUniqueInput | DealWhereUniqueInput[]
    disconnect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    delete?: DealWhereUniqueInput | DealWhereUniqueInput[]
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    update?: DealUpdateWithWhereUniqueWithoutStageInput | DealUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: DealUpdateManyWithWhereWithoutStageInput | DealUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: DealScalarWhereInput | DealScalarWhereInput[]
  }

  export type DealUncheckedUpdateManyWithoutStageNestedInput = {
    create?: XOR<DealCreateWithoutStageInput, DealUncheckedCreateWithoutStageInput> | DealCreateWithoutStageInput[] | DealUncheckedCreateWithoutStageInput[]
    connectOrCreate?: DealCreateOrConnectWithoutStageInput | DealCreateOrConnectWithoutStageInput[]
    upsert?: DealUpsertWithWhereUniqueWithoutStageInput | DealUpsertWithWhereUniqueWithoutStageInput[]
    createMany?: DealCreateManyStageInputEnvelope
    set?: DealWhereUniqueInput | DealWhereUniqueInput[]
    disconnect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    delete?: DealWhereUniqueInput | DealWhereUniqueInput[]
    connect?: DealWhereUniqueInput | DealWhereUniqueInput[]
    update?: DealUpdateWithWhereUniqueWithoutStageInput | DealUpdateWithWhereUniqueWithoutStageInput[]
    updateMany?: DealUpdateManyWithWhereWithoutStageInput | DealUpdateManyWithWhereWithoutStageInput[]
    deleteMany?: DealScalarWhereInput | DealScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutDealsInput = {
    create?: XOR<WorkspaceCreateWithoutDealsInput, WorkspaceUncheckedCreateWithoutDealsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutDealsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type PipelineCreateNestedOneWithoutDealsInput = {
    create?: XOR<PipelineCreateWithoutDealsInput, PipelineUncheckedCreateWithoutDealsInput>
    connectOrCreate?: PipelineCreateOrConnectWithoutDealsInput
    connect?: PipelineWhereUniqueInput
  }

  export type StageCreateNestedOneWithoutDealsInput = {
    create?: XOR<StageCreateWithoutDealsInput, StageUncheckedCreateWithoutDealsInput>
    connectOrCreate?: StageCreateOrConnectWithoutDealsInput
    connect?: StageWhereUniqueInput
  }

  export type DealContactCreateNestedManyWithoutDealInput = {
    create?: XOR<DealContactCreateWithoutDealInput, DealContactUncheckedCreateWithoutDealInput> | DealContactCreateWithoutDealInput[] | DealContactUncheckedCreateWithoutDealInput[]
    connectOrCreate?: DealContactCreateOrConnectWithoutDealInput | DealContactCreateOrConnectWithoutDealInput[]
    createMany?: DealContactCreateManyDealInputEnvelope
    connect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
  }

  export type ActivityCreateNestedManyWithoutDealInput = {
    create?: XOR<ActivityCreateWithoutDealInput, ActivityUncheckedCreateWithoutDealInput> | ActivityCreateWithoutDealInput[] | ActivityUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDealInput | ActivityCreateOrConnectWithoutDealInput[]
    createMany?: ActivityCreateManyDealInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NoteCreateNestedManyWithoutDealInput = {
    create?: XOR<NoteCreateWithoutDealInput, NoteUncheckedCreateWithoutDealInput> | NoteCreateWithoutDealInput[] | NoteUncheckedCreateWithoutDealInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutDealInput | NoteCreateOrConnectWithoutDealInput[]
    createMany?: NoteCreateManyDealInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type DealContactUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<DealContactCreateWithoutDealInput, DealContactUncheckedCreateWithoutDealInput> | DealContactCreateWithoutDealInput[] | DealContactUncheckedCreateWithoutDealInput[]
    connectOrCreate?: DealContactCreateOrConnectWithoutDealInput | DealContactCreateOrConnectWithoutDealInput[]
    createMany?: DealContactCreateManyDealInputEnvelope
    connect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
  }

  export type ActivityUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<ActivityCreateWithoutDealInput, ActivityUncheckedCreateWithoutDealInput> | ActivityCreateWithoutDealInput[] | ActivityUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDealInput | ActivityCreateOrConnectWithoutDealInput[]
    createMany?: ActivityCreateManyDealInputEnvelope
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
  }

  export type NoteUncheckedCreateNestedManyWithoutDealInput = {
    create?: XOR<NoteCreateWithoutDealInput, NoteUncheckedCreateWithoutDealInput> | NoteCreateWithoutDealInput[] | NoteUncheckedCreateWithoutDealInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutDealInput | NoteCreateOrConnectWithoutDealInput[]
    createMany?: NoteCreateManyDealInputEnvelope
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type WorkspaceUpdateOneRequiredWithoutDealsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutDealsInput, WorkspaceUncheckedCreateWithoutDealsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutDealsInput
    upsert?: WorkspaceUpsertWithoutDealsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutDealsInput, WorkspaceUpdateWithoutDealsInput>, WorkspaceUncheckedUpdateWithoutDealsInput>
  }

  export type PipelineUpdateOneRequiredWithoutDealsNestedInput = {
    create?: XOR<PipelineCreateWithoutDealsInput, PipelineUncheckedCreateWithoutDealsInput>
    connectOrCreate?: PipelineCreateOrConnectWithoutDealsInput
    upsert?: PipelineUpsertWithoutDealsInput
    connect?: PipelineWhereUniqueInput
    update?: XOR<XOR<PipelineUpdateToOneWithWhereWithoutDealsInput, PipelineUpdateWithoutDealsInput>, PipelineUncheckedUpdateWithoutDealsInput>
  }

  export type StageUpdateOneRequiredWithoutDealsNestedInput = {
    create?: XOR<StageCreateWithoutDealsInput, StageUncheckedCreateWithoutDealsInput>
    connectOrCreate?: StageCreateOrConnectWithoutDealsInput
    upsert?: StageUpsertWithoutDealsInput
    connect?: StageWhereUniqueInput
    update?: XOR<XOR<StageUpdateToOneWithWhereWithoutDealsInput, StageUpdateWithoutDealsInput>, StageUncheckedUpdateWithoutDealsInput>
  }

  export type DealContactUpdateManyWithoutDealNestedInput = {
    create?: XOR<DealContactCreateWithoutDealInput, DealContactUncheckedCreateWithoutDealInput> | DealContactCreateWithoutDealInput[] | DealContactUncheckedCreateWithoutDealInput[]
    connectOrCreate?: DealContactCreateOrConnectWithoutDealInput | DealContactCreateOrConnectWithoutDealInput[]
    upsert?: DealContactUpsertWithWhereUniqueWithoutDealInput | DealContactUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: DealContactCreateManyDealInputEnvelope
    set?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    disconnect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    delete?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    connect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    update?: DealContactUpdateWithWhereUniqueWithoutDealInput | DealContactUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: DealContactUpdateManyWithWhereWithoutDealInput | DealContactUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: DealContactScalarWhereInput | DealContactScalarWhereInput[]
  }

  export type ActivityUpdateManyWithoutDealNestedInput = {
    create?: XOR<ActivityCreateWithoutDealInput, ActivityUncheckedCreateWithoutDealInput> | ActivityCreateWithoutDealInput[] | ActivityUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDealInput | ActivityCreateOrConnectWithoutDealInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutDealInput | ActivityUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: ActivityCreateManyDealInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutDealInput | ActivityUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutDealInput | ActivityUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NoteUpdateManyWithoutDealNestedInput = {
    create?: XOR<NoteCreateWithoutDealInput, NoteUncheckedCreateWithoutDealInput> | NoteCreateWithoutDealInput[] | NoteUncheckedCreateWithoutDealInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutDealInput | NoteCreateOrConnectWithoutDealInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutDealInput | NoteUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: NoteCreateManyDealInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutDealInput | NoteUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutDealInput | NoteUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type DealContactUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<DealContactCreateWithoutDealInput, DealContactUncheckedCreateWithoutDealInput> | DealContactCreateWithoutDealInput[] | DealContactUncheckedCreateWithoutDealInput[]
    connectOrCreate?: DealContactCreateOrConnectWithoutDealInput | DealContactCreateOrConnectWithoutDealInput[]
    upsert?: DealContactUpsertWithWhereUniqueWithoutDealInput | DealContactUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: DealContactCreateManyDealInputEnvelope
    set?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    disconnect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    delete?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    connect?: DealContactWhereUniqueInput | DealContactWhereUniqueInput[]
    update?: DealContactUpdateWithWhereUniqueWithoutDealInput | DealContactUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: DealContactUpdateManyWithWhereWithoutDealInput | DealContactUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: DealContactScalarWhereInput | DealContactScalarWhereInput[]
  }

  export type ActivityUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<ActivityCreateWithoutDealInput, ActivityUncheckedCreateWithoutDealInput> | ActivityCreateWithoutDealInput[] | ActivityUncheckedCreateWithoutDealInput[]
    connectOrCreate?: ActivityCreateOrConnectWithoutDealInput | ActivityCreateOrConnectWithoutDealInput[]
    upsert?: ActivityUpsertWithWhereUniqueWithoutDealInput | ActivityUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: ActivityCreateManyDealInputEnvelope
    set?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    disconnect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    delete?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    connect?: ActivityWhereUniqueInput | ActivityWhereUniqueInput[]
    update?: ActivityUpdateWithWhereUniqueWithoutDealInput | ActivityUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: ActivityUpdateManyWithWhereWithoutDealInput | ActivityUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
  }

  export type NoteUncheckedUpdateManyWithoutDealNestedInput = {
    create?: XOR<NoteCreateWithoutDealInput, NoteUncheckedCreateWithoutDealInput> | NoteCreateWithoutDealInput[] | NoteUncheckedCreateWithoutDealInput[]
    connectOrCreate?: NoteCreateOrConnectWithoutDealInput | NoteCreateOrConnectWithoutDealInput[]
    upsert?: NoteUpsertWithWhereUniqueWithoutDealInput | NoteUpsertWithWhereUniqueWithoutDealInput[]
    createMany?: NoteCreateManyDealInputEnvelope
    set?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    disconnect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    delete?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    connect?: NoteWhereUniqueInput | NoteWhereUniqueInput[]
    update?: NoteUpdateWithWhereUniqueWithoutDealInput | NoteUpdateWithWhereUniqueWithoutDealInput[]
    updateMany?: NoteUpdateManyWithWhereWithoutDealInput | NoteUpdateManyWithWhereWithoutDealInput[]
    deleteMany?: NoteScalarWhereInput | NoteScalarWhereInput[]
  }

  export type DealCreateNestedOneWithoutContactsInput = {
    create?: XOR<DealCreateWithoutContactsInput, DealUncheckedCreateWithoutContactsInput>
    connectOrCreate?: DealCreateOrConnectWithoutContactsInput
    connect?: DealWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutDealsInput = {
    create?: XOR<ContactCreateWithoutDealsInput, ContactUncheckedCreateWithoutDealsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutDealsInput
    connect?: ContactWhereUniqueInput
  }

  export type DealUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<DealCreateWithoutContactsInput, DealUncheckedCreateWithoutContactsInput>
    connectOrCreate?: DealCreateOrConnectWithoutContactsInput
    upsert?: DealUpsertWithoutContactsInput
    connect?: DealWhereUniqueInput
    update?: XOR<XOR<DealUpdateToOneWithWhereWithoutContactsInput, DealUpdateWithoutContactsInput>, DealUncheckedUpdateWithoutContactsInput>
  }

  export type ContactUpdateOneRequiredWithoutDealsNestedInput = {
    create?: XOR<ContactCreateWithoutDealsInput, ContactUncheckedCreateWithoutDealsInput>
    connectOrCreate?: ContactCreateOrConnectWithoutDealsInput
    upsert?: ContactUpsertWithoutDealsInput
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutDealsInput, ContactUpdateWithoutDealsInput>, ContactUncheckedUpdateWithoutDealsInput>
  }

  export type WorkspaceCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<WorkspaceCreateWithoutActivitiesInput, WorkspaceUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutActivitiesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<ContactCreateWithoutActivitiesInput, ContactUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutActivitiesInput
    connect?: ContactWhereUniqueInput
  }

  export type DealCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<DealCreateWithoutActivitiesInput, DealUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DealCreateOrConnectWithoutActivitiesInput
    connect?: DealWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutActivitiesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutActivitiesInput, WorkspaceUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutActivitiesInput
    upsert?: WorkspaceUpsertWithoutActivitiesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutActivitiesInput, WorkspaceUpdateWithoutActivitiesInput>, WorkspaceUncheckedUpdateWithoutActivitiesInput>
  }

  export type ContactUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<ContactCreateWithoutActivitiesInput, ContactUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutActivitiesInput
    upsert?: ContactUpsertWithoutActivitiesInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutActivitiesInput, ContactUpdateWithoutActivitiesInput>, ContactUncheckedUpdateWithoutActivitiesInput>
  }

  export type DealUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<DealCreateWithoutActivitiesInput, DealUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: DealCreateOrConnectWithoutActivitiesInput
    upsert?: DealUpsertWithoutActivitiesInput
    disconnect?: DealWhereInput | boolean
    delete?: DealWhereInput | boolean
    connect?: DealWhereUniqueInput
    update?: XOR<XOR<DealUpdateToOneWithWhereWithoutActivitiesInput, DealUpdateWithoutActivitiesInput>, DealUncheckedUpdateWithoutActivitiesInput>
  }

  export type WorkspaceCreateNestedOneWithoutNotesInput = {
    create?: XOR<WorkspaceCreateWithoutNotesInput, WorkspaceUncheckedCreateWithoutNotesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutNotesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type ContactCreateNestedOneWithoutNotesInput = {
    create?: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutNotesInput
    connect?: ContactWhereUniqueInput
  }

  export type DealCreateNestedOneWithoutNotesInput = {
    create?: XOR<DealCreateWithoutNotesInput, DealUncheckedCreateWithoutNotesInput>
    connectOrCreate?: DealCreateOrConnectWithoutNotesInput
    connect?: DealWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutNotesInput, WorkspaceUncheckedCreateWithoutNotesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutNotesInput
    upsert?: WorkspaceUpsertWithoutNotesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutNotesInput, WorkspaceUpdateWithoutNotesInput>, WorkspaceUncheckedUpdateWithoutNotesInput>
  }

  export type ContactUpdateOneWithoutNotesNestedInput = {
    create?: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
    connectOrCreate?: ContactCreateOrConnectWithoutNotesInput
    upsert?: ContactUpsertWithoutNotesInput
    disconnect?: ContactWhereInput | boolean
    delete?: ContactWhereInput | boolean
    connect?: ContactWhereUniqueInput
    update?: XOR<XOR<ContactUpdateToOneWithWhereWithoutNotesInput, ContactUpdateWithoutNotesInput>, ContactUncheckedUpdateWithoutNotesInput>
  }

  export type DealUpdateOneWithoutNotesNestedInput = {
    create?: XOR<DealCreateWithoutNotesInput, DealUncheckedCreateWithoutNotesInput>
    connectOrCreate?: DealCreateOrConnectWithoutNotesInput
    upsert?: DealUpsertWithoutNotesInput
    disconnect?: DealWhereInput | boolean
    delete?: DealWhereInput | boolean
    connect?: DealWhereUniqueInput
    update?: XOR<XOR<DealUpdateToOneWithWhereWithoutNotesInput, DealUpdateWithoutNotesInput>, DealUncheckedUpdateWithoutNotesInput>
  }

  export type WebhookEndpointCreateeventsInput = {
    set: string[]
  }

  export type WorkspaceCreateNestedOneWithoutWebhooksInput = {
    create?: XOR<WorkspaceCreateWithoutWebhooksInput, WorkspaceUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutWebhooksInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WebhookEndpointUpdateeventsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WorkspaceUpdateOneRequiredWithoutWebhooksNestedInput = {
    create?: XOR<WorkspaceCreateWithoutWebhooksInput, WorkspaceUncheckedCreateWithoutWebhooksInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutWebhooksInput
    upsert?: WorkspaceUpsertWithoutWebhooksInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutWebhooksInput, WorkspaceUpdateWithoutWebhooksInput>, WorkspaceUncheckedUpdateWithoutWebhooksInput>
  }

  export type WorkspaceCreateNestedOneWithoutApiKeysInput = {
    create?: XOR<WorkspaceCreateWithoutApiKeysInput, WorkspaceUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutApiKeysInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: XOR<WorkspaceCreateWithoutApiKeysInput, WorkspaceUncheckedCreateWithoutApiKeysInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutApiKeysInput
    upsert?: WorkspaceUpsertWithoutApiKeysInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutApiKeysInput, WorkspaceUpdateWithoutApiKeysInput>, WorkspaceUncheckedUpdateWithoutApiKeysInput>
  }

  export type WorkspaceCreateNestedOneWithoutEventLogsInput = {
    create?: XOR<WorkspaceCreateWithoutEventLogsInput, WorkspaceUncheckedCreateWithoutEventLogsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutEventLogsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutEventLogsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutEventLogsInput, WorkspaceUncheckedCreateWithoutEventLogsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutEventLogsInput
    upsert?: WorkspaceUpsertWithoutEventLogsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutEventLogsInput, WorkspaceUpdateWithoutEventLogsInput>, WorkspaceUncheckedUpdateWithoutEventLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkspaceUserCreateWithoutWorkspaceInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWorkspacesInput
  }

  export type WorkspaceUserUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type WorkspaceUserCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceUserWhereUniqueInput
    create: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceUserCreateManyWorkspaceInputEnvelope = {
    data: WorkspaceUserCreateManyWorkspaceInput | WorkspaceUserCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type ContactCreateWithoutWorkspaceInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
    deals?: DealContactCreateNestedManyWithoutContactInput
    activities?: ActivityCreateNestedManyWithoutContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
    deals?: DealContactUncheckedCreateNestedManyWithoutContactInput
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutWorkspaceInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutWorkspaceInput, ContactUncheckedCreateWithoutWorkspaceInput>
  }

  export type ContactCreateManyWorkspaceInputEnvelope = {
    data: ContactCreateManyWorkspaceInput | ContactCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type PipelineCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: StageCreateNestedManyWithoutPipelineInput
    deals?: DealCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: StageUncheckedCreateNestedManyWithoutPipelineInput
    deals?: DealUncheckedCreateNestedManyWithoutPipelineInput
  }

  export type PipelineCreateOrConnectWithoutWorkspaceInput = {
    where: PipelineWhereUniqueInput
    create: XOR<PipelineCreateWithoutWorkspaceInput, PipelineUncheckedCreateWithoutWorkspaceInput>
  }

  export type PipelineCreateManyWorkspaceInputEnvelope = {
    data: PipelineCreateManyWorkspaceInput | PipelineCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type DealCreateWithoutWorkspaceInput = {
    id?: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    pipeline: PipelineCreateNestedOneWithoutDealsInput
    stage: StageCreateNestedOneWithoutDealsInput
    contacts?: DealContactCreateNestedManyWithoutDealInput
    activities?: ActivityCreateNestedManyWithoutDealInput
    notes?: NoteCreateNestedManyWithoutDealInput
  }

  export type DealUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    pipelineId: string
    stageId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: DealContactUncheckedCreateNestedManyWithoutDealInput
    activities?: ActivityUncheckedCreateNestedManyWithoutDealInput
    notes?: NoteUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealCreateOrConnectWithoutWorkspaceInput = {
    where: DealWhereUniqueInput
    create: XOR<DealCreateWithoutWorkspaceInput, DealUncheckedCreateWithoutWorkspaceInput>
  }

  export type DealCreateManyWorkspaceInputEnvelope = {
    data: DealCreateManyWorkspaceInput | DealCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutWorkspaceInput = {
    id?: string
    type: string
    entityType: string
    entityId: string
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    contact?: ContactCreateNestedOneWithoutActivitiesInput
    deal?: DealCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    type: string
    entityType: string
    entityId: string
    contactId?: string | null
    dealId?: string | null
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutWorkspaceInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutWorkspaceInput, ActivityUncheckedCreateWithoutWorkspaceInput>
  }

  export type ActivityCreateManyWorkspaceInputEnvelope = {
    data: ActivityCreateManyWorkspaceInput | ActivityCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutWorkspaceInput = {
    id?: string
    content: string
    entityType: string
    entityId: string
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    contact?: ContactCreateNestedOneWithoutNotesInput
    deal?: DealCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    content: string
    entityType: string
    entityId: string
    contactId?: string | null
    dealId?: string | null
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutWorkspaceInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput>
  }

  export type NoteCreateManyWorkspaceInputEnvelope = {
    data: NoteCreateManyWorkspaceInput | NoteCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type WebhookEndpointCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    failureCount?: number
    lastTriggeredAt?: Date | string | null
    lastStatusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookEndpointUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    failureCount?: number
    lastTriggeredAt?: Date | string | null
    lastStatusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookEndpointCreateOrConnectWithoutWorkspaceInput = {
    where: WebhookEndpointWhereUniqueInput
    create: XOR<WebhookEndpointCreateWithoutWorkspaceInput, WebhookEndpointUncheckedCreateWithoutWorkspaceInput>
  }

  export type WebhookEndpointCreateManyWorkspaceInputEnvelope = {
    data: WebhookEndpointCreateManyWorkspaceInput | WebhookEndpointCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type ApiKeyCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ApiKeyUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ApiKeyCreateOrConnectWithoutWorkspaceInput = {
    where: ApiKeyWhereUniqueInput
    create: XOR<ApiKeyCreateWithoutWorkspaceInput, ApiKeyUncheckedCreateWithoutWorkspaceInput>
  }

  export type ApiKeyCreateManyWorkspaceInputEnvelope = {
    data: ApiKeyCreateManyWorkspaceInput | ApiKeyCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type EventLogCreateWithoutWorkspaceInput = {
    id?: string
    event: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventLogUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    event: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type EventLogCreateOrConnectWithoutWorkspaceInput = {
    where: EventLogWhereUniqueInput
    create: XOR<EventLogCreateWithoutWorkspaceInput, EventLogUncheckedCreateWithoutWorkspaceInput>
  }

  export type EventLogCreateManyWorkspaceInputEnvelope = {
    data: EventLogCreateManyWorkspaceInput | EventLogCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUserUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceUserWhereUniqueInput
    update: XOR<WorkspaceUserUpdateWithoutWorkspaceInput, WorkspaceUserUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceUserCreateWithoutWorkspaceInput, WorkspaceUserUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceUserUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceUserWhereUniqueInput
    data: XOR<WorkspaceUserUpdateWithoutWorkspaceInput, WorkspaceUserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceUserUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WorkspaceUserScalarWhereInput
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type WorkspaceUserScalarWhereInput = {
    AND?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
    OR?: WorkspaceUserScalarWhereInput[]
    NOT?: WorkspaceUserScalarWhereInput | WorkspaceUserScalarWhereInput[]
    id?: StringFilter<"WorkspaceUser"> | string
    workspaceId?: StringFilter<"WorkspaceUser"> | string
    userId?: StringFilter<"WorkspaceUser"> | string
    role?: StringFilter<"WorkspaceUser"> | string
    createdAt?: DateTimeFilter<"WorkspaceUser"> | Date | string
  }

  export type ContactUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutWorkspaceInput, ContactUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ContactCreateWithoutWorkspaceInput, ContactUncheckedCreateWithoutWorkspaceInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutWorkspaceInput, ContactUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ContactUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: StringFilter<"Contact"> | string
    workspaceId?: StringFilter<"Contact"> | string
    firstName?: StringFilter<"Contact"> | string
    lastName?: StringNullableFilter<"Contact"> | string | null
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    avatar?: StringNullableFilter<"Contact"> | string | null
    status?: StringFilter<"Contact"> | string
    source?: StringFilter<"Contact"> | string
    score?: IntFilter<"Contact"> | number
    tags?: StringNullableListFilter<"Contact">
    companyId?: StringNullableFilter<"Contact"> | string | null
    ownerId?: StringNullableFilter<"Contact"> | string | null
    channels?: JsonFilter<"Contact">
    customData?: JsonFilter<"Contact">
    isArchived?: BoolFilter<"Contact"> | boolean
    mergedInto?: StringNullableFilter<"Contact"> | string | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
    lastContactedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
  }

  export type PipelineUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: PipelineWhereUniqueInput
    update: XOR<PipelineUpdateWithoutWorkspaceInput, PipelineUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<PipelineCreateWithoutWorkspaceInput, PipelineUncheckedCreateWithoutWorkspaceInput>
  }

  export type PipelineUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: PipelineWhereUniqueInput
    data: XOR<PipelineUpdateWithoutWorkspaceInput, PipelineUncheckedUpdateWithoutWorkspaceInput>
  }

  export type PipelineUpdateManyWithWhereWithoutWorkspaceInput = {
    where: PipelineScalarWhereInput
    data: XOR<PipelineUpdateManyMutationInput, PipelineUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type PipelineScalarWhereInput = {
    AND?: PipelineScalarWhereInput | PipelineScalarWhereInput[]
    OR?: PipelineScalarWhereInput[]
    NOT?: PipelineScalarWhereInput | PipelineScalarWhereInput[]
    id?: StringFilter<"Pipeline"> | string
    workspaceId?: StringFilter<"Pipeline"> | string
    name?: StringFilter<"Pipeline"> | string
    isDefault?: BoolFilter<"Pipeline"> | boolean
    createdAt?: DateTimeFilter<"Pipeline"> | Date | string
    updatedAt?: DateTimeFilter<"Pipeline"> | Date | string
  }

  export type DealUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: DealWhereUniqueInput
    update: XOR<DealUpdateWithoutWorkspaceInput, DealUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<DealCreateWithoutWorkspaceInput, DealUncheckedCreateWithoutWorkspaceInput>
  }

  export type DealUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: DealWhereUniqueInput
    data: XOR<DealUpdateWithoutWorkspaceInput, DealUncheckedUpdateWithoutWorkspaceInput>
  }

  export type DealUpdateManyWithWhereWithoutWorkspaceInput = {
    where: DealScalarWhereInput
    data: XOR<DealUpdateManyMutationInput, DealUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type DealScalarWhereInput = {
    AND?: DealScalarWhereInput | DealScalarWhereInput[]
    OR?: DealScalarWhereInput[]
    NOT?: DealScalarWhereInput | DealScalarWhereInput[]
    id?: StringFilter<"Deal"> | string
    workspaceId?: StringFilter<"Deal"> | string
    title?: StringFilter<"Deal"> | string
    value?: DecimalNullableFilter<"Deal"> | Decimal | DecimalJsLike | number | string | null
    currency?: StringFilter<"Deal"> | string
    probability?: IntNullableFilter<"Deal"> | number | null
    pipelineId?: StringFilter<"Deal"> | string
    stageId?: StringFilter<"Deal"> | string
    position?: IntFilter<"Deal"> | number
    companyId?: StringNullableFilter<"Deal"> | string | null
    ownerId?: StringNullableFilter<"Deal"> | string | null
    status?: StringFilter<"Deal"> | string
    expectedCloseDate?: DateTimeNullableFilter<"Deal"> | Date | string | null
    isArchived?: BoolFilter<"Deal"> | boolean
    stageEnteredAt?: DateTimeFilter<"Deal"> | Date | string
    closedAt?: DateTimeNullableFilter<"Deal"> | Date | string | null
    closedReason?: StringNullableFilter<"Deal"> | string | null
    customData?: JsonFilter<"Deal">
    createdAt?: DateTimeFilter<"Deal"> | Date | string
    updatedAt?: DateTimeFilter<"Deal"> | Date | string
  }

  export type ActivityUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutWorkspaceInput, ActivityUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ActivityCreateWithoutWorkspaceInput, ActivityUncheckedCreateWithoutWorkspaceInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutWorkspaceInput, ActivityUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ActivityUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type ActivityScalarWhereInput = {
    AND?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    OR?: ActivityScalarWhereInput[]
    NOT?: ActivityScalarWhereInput | ActivityScalarWhereInput[]
    id?: StringFilter<"Activity"> | string
    workspaceId?: StringFilter<"Activity"> | string
    type?: StringFilter<"Activity"> | string
    entityType?: StringFilter<"Activity"> | string
    entityId?: StringFilter<"Activity"> | string
    contactId?: StringNullableFilter<"Activity"> | string | null
    dealId?: StringNullableFilter<"Activity"> | string | null
    userId?: StringNullableFilter<"Activity"> | string | null
    source?: StringNullableFilter<"Activity"> | string | null
    title?: StringFilter<"Activity"> | string
    description?: StringNullableFilter<"Activity"> | string | null
    metadata?: JsonNullableFilter<"Activity">
    createdAt?: DateTimeFilter<"Activity"> | Date | string
  }

  export type NoteUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutWorkspaceInput, NoteUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<NoteCreateWithoutWorkspaceInput, NoteUncheckedCreateWithoutWorkspaceInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutWorkspaceInput, NoteUncheckedUpdateWithoutWorkspaceInput>
  }

  export type NoteUpdateManyWithWhereWithoutWorkspaceInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type NoteScalarWhereInput = {
    AND?: NoteScalarWhereInput | NoteScalarWhereInput[]
    OR?: NoteScalarWhereInput[]
    NOT?: NoteScalarWhereInput | NoteScalarWhereInput[]
    id?: StringFilter<"Note"> | string
    workspaceId?: StringFilter<"Note"> | string
    content?: StringFilter<"Note"> | string
    entityType?: StringFilter<"Note"> | string
    entityId?: StringFilter<"Note"> | string
    contactId?: StringNullableFilter<"Note"> | string | null
    dealId?: StringNullableFilter<"Note"> | string | null
    userId?: StringNullableFilter<"Note"> | string | null
    isPinned?: BoolFilter<"Note"> | boolean
    createdAt?: DateTimeFilter<"Note"> | Date | string
    updatedAt?: DateTimeFilter<"Note"> | Date | string
  }

  export type WebhookEndpointUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WebhookEndpointWhereUniqueInput
    update: XOR<WebhookEndpointUpdateWithoutWorkspaceInput, WebhookEndpointUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WebhookEndpointCreateWithoutWorkspaceInput, WebhookEndpointUncheckedCreateWithoutWorkspaceInput>
  }

  export type WebhookEndpointUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WebhookEndpointWhereUniqueInput
    data: XOR<WebhookEndpointUpdateWithoutWorkspaceInput, WebhookEndpointUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WebhookEndpointUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WebhookEndpointScalarWhereInput
    data: XOR<WebhookEndpointUpdateManyMutationInput, WebhookEndpointUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type WebhookEndpointScalarWhereInput = {
    AND?: WebhookEndpointScalarWhereInput | WebhookEndpointScalarWhereInput[]
    OR?: WebhookEndpointScalarWhereInput[]
    NOT?: WebhookEndpointScalarWhereInput | WebhookEndpointScalarWhereInput[]
    id?: StringFilter<"WebhookEndpoint"> | string
    workspaceId?: StringFilter<"WebhookEndpoint"> | string
    name?: StringFilter<"WebhookEndpoint"> | string
    url?: StringFilter<"WebhookEndpoint"> | string
    secret?: StringNullableFilter<"WebhookEndpoint"> | string | null
    events?: StringNullableListFilter<"WebhookEndpoint">
    isActive?: BoolFilter<"WebhookEndpoint"> | boolean
    failureCount?: IntFilter<"WebhookEndpoint"> | number
    lastTriggeredAt?: DateTimeNullableFilter<"WebhookEndpoint"> | Date | string | null
    lastStatusCode?: IntNullableFilter<"WebhookEndpoint"> | number | null
    createdAt?: DateTimeFilter<"WebhookEndpoint"> | Date | string
    updatedAt?: DateTimeFilter<"WebhookEndpoint"> | Date | string
  }

  export type ApiKeyUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ApiKeyWhereUniqueInput
    update: XOR<ApiKeyUpdateWithoutWorkspaceInput, ApiKeyUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ApiKeyCreateWithoutWorkspaceInput, ApiKeyUncheckedCreateWithoutWorkspaceInput>
  }

  export type ApiKeyUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ApiKeyWhereUniqueInput
    data: XOR<ApiKeyUpdateWithoutWorkspaceInput, ApiKeyUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ApiKeyUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ApiKeyScalarWhereInput
    data: XOR<ApiKeyUpdateManyMutationInput, ApiKeyUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type ApiKeyScalarWhereInput = {
    AND?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    OR?: ApiKeyScalarWhereInput[]
    NOT?: ApiKeyScalarWhereInput | ApiKeyScalarWhereInput[]
    id?: StringFilter<"ApiKey"> | string
    workspaceId?: StringFilter<"ApiKey"> | string
    name?: StringFilter<"ApiKey"> | string
    keyHash?: StringFilter<"ApiKey"> | string
    keyPrefix?: StringFilter<"ApiKey"> | string
    lastUsedAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ApiKey"> | Date | string | null
    isActive?: BoolFilter<"ApiKey"> | boolean
    createdAt?: DateTimeFilter<"ApiKey"> | Date | string
  }

  export type EventLogUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: EventLogWhereUniqueInput
    update: XOR<EventLogUpdateWithoutWorkspaceInput, EventLogUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<EventLogCreateWithoutWorkspaceInput, EventLogUncheckedCreateWithoutWorkspaceInput>
  }

  export type EventLogUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: EventLogWhereUniqueInput
    data: XOR<EventLogUpdateWithoutWorkspaceInput, EventLogUncheckedUpdateWithoutWorkspaceInput>
  }

  export type EventLogUpdateManyWithWhereWithoutWorkspaceInput = {
    where: EventLogScalarWhereInput
    data: XOR<EventLogUpdateManyMutationInput, EventLogUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type EventLogScalarWhereInput = {
    AND?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
    OR?: EventLogScalarWhereInput[]
    NOT?: EventLogScalarWhereInput | EventLogScalarWhereInput[]
    id?: StringFilter<"EventLog"> | string
    workspaceId?: StringFilter<"EventLog"> | string
    event?: StringFilter<"EventLog"> | string
    payload?: JsonFilter<"EventLog">
    createdAt?: DateTimeFilter<"EventLog"> | Date | string
  }

  export type WorkspaceUserCreateWithoutUserInput = {
    id?: string
    role?: string
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
  }

  export type WorkspaceUserUncheckedCreateWithoutUserInput = {
    id?: string
    workspaceId: string
    role?: string
    createdAt?: Date | string
  }

  export type WorkspaceUserCreateOrConnectWithoutUserInput = {
    where: WorkspaceUserWhereUniqueInput
    create: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceUserCreateManyUserInputEnvelope = {
    data: WorkspaceUserCreateManyUserInput | WorkspaceUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUserUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkspaceUserWhereUniqueInput
    update: XOR<WorkspaceUserUpdateWithoutUserInput, WorkspaceUserUncheckedUpdateWithoutUserInput>
    create: XOR<WorkspaceUserCreateWithoutUserInput, WorkspaceUserUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceUserUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkspaceUserWhereUniqueInput
    data: XOR<WorkspaceUserUpdateWithoutUserInput, WorkspaceUserUncheckedUpdateWithoutUserInput>
  }

  export type WorkspaceUserUpdateManyWithWhereWithoutUserInput = {
    where: WorkspaceUserScalarWhereInput
    data: XOR<WorkspaceUserUpdateManyMutationInput, WorkspaceUserUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkspaceCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineCreateNestedManyWithoutWorkspaceInput
    deals?: DealCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: ContactUncheckedCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutWorkspaceInput
    deals?: DealUncheckedCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutUsersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutWorkspacesInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type UserUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    email: string
    passwordHash: string
    firstName: string
    lastName?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
  }

  export type UserCreateOrConnectWithoutWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
  }

  export type WorkspaceUpsertWithoutUsersInput = {
    update: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutUsersInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type WorkspaceUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: ContactUncheckedUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUncheckedUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithoutWorkspacesInput = {
    update: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<UserCreateWithoutWorkspacesInput, UserUncheckedCreateWithoutWorkspacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspacesInput, UserUncheckedUpdateWithoutWorkspacesInput>
  }

  export type UserUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WorkspaceCreateWithoutContactsInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineCreateNestedManyWithoutWorkspaceInput
    deals?: DealCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutContactsInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutWorkspaceInput
    deals?: DealUncheckedCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutContactsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutContactsInput, WorkspaceUncheckedCreateWithoutContactsInput>
  }

  export type DealContactCreateWithoutContactInput = {
    role?: string | null
    deal: DealCreateNestedOneWithoutContactsInput
  }

  export type DealContactUncheckedCreateWithoutContactInput = {
    dealId: string
    role?: string | null
  }

  export type DealContactCreateOrConnectWithoutContactInput = {
    where: DealContactWhereUniqueInput
    create: XOR<DealContactCreateWithoutContactInput, DealContactUncheckedCreateWithoutContactInput>
  }

  export type DealContactCreateManyContactInputEnvelope = {
    data: DealContactCreateManyContactInput | DealContactCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutContactInput = {
    id?: string
    type: string
    entityType: string
    entityId: string
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutActivitiesInput
    deal?: DealCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutContactInput = {
    id?: string
    workspaceId: string
    type: string
    entityType: string
    entityId: string
    dealId?: string | null
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutContactInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput>
  }

  export type ActivityCreateManyContactInputEnvelope = {
    data: ActivityCreateManyContactInput | ActivityCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutContactInput = {
    id?: string
    content: string
    entityType: string
    entityId: string
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutNotesInput
    deal?: DealCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutContactInput = {
    id?: string
    workspaceId: string
    content: string
    entityType: string
    entityId: string
    dealId?: string | null
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutContactInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput>
  }

  export type NoteCreateManyContactInputEnvelope = {
    data: NoteCreateManyContactInput | NoteCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutContactsInput = {
    update: XOR<WorkspaceUpdateWithoutContactsInput, WorkspaceUncheckedUpdateWithoutContactsInput>
    create: XOR<WorkspaceCreateWithoutContactsInput, WorkspaceUncheckedCreateWithoutContactsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutContactsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutContactsInput, WorkspaceUncheckedUpdateWithoutContactsInput>
  }

  export type WorkspaceUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUncheckedUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type DealContactUpsertWithWhereUniqueWithoutContactInput = {
    where: DealContactWhereUniqueInput
    update: XOR<DealContactUpdateWithoutContactInput, DealContactUncheckedUpdateWithoutContactInput>
    create: XOR<DealContactCreateWithoutContactInput, DealContactUncheckedCreateWithoutContactInput>
  }

  export type DealContactUpdateWithWhereUniqueWithoutContactInput = {
    where: DealContactWhereUniqueInput
    data: XOR<DealContactUpdateWithoutContactInput, DealContactUncheckedUpdateWithoutContactInput>
  }

  export type DealContactUpdateManyWithWhereWithoutContactInput = {
    where: DealContactScalarWhereInput
    data: XOR<DealContactUpdateManyMutationInput, DealContactUncheckedUpdateManyWithoutContactInput>
  }

  export type DealContactScalarWhereInput = {
    AND?: DealContactScalarWhereInput | DealContactScalarWhereInput[]
    OR?: DealContactScalarWhereInput[]
    NOT?: DealContactScalarWhereInput | DealContactScalarWhereInput[]
    dealId?: StringFilter<"DealContact"> | string
    contactId?: StringFilter<"DealContact"> | string
    role?: StringNullableFilter<"DealContact"> | string | null
  }

  export type ActivityUpsertWithWhereUniqueWithoutContactInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutContactInput, ActivityUncheckedUpdateWithoutContactInput>
    create: XOR<ActivityCreateWithoutContactInput, ActivityUncheckedCreateWithoutContactInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutContactInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutContactInput, ActivityUncheckedUpdateWithoutContactInput>
  }

  export type ActivityUpdateManyWithWhereWithoutContactInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutContactInput>
  }

  export type NoteUpsertWithWhereUniqueWithoutContactInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutContactInput, NoteUncheckedUpdateWithoutContactInput>
    create: XOR<NoteCreateWithoutContactInput, NoteUncheckedCreateWithoutContactInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutContactInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutContactInput, NoteUncheckedUpdateWithoutContactInput>
  }

  export type NoteUpdateManyWithWhereWithoutContactInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutContactInput>
  }

  export type WorkspaceCreateWithoutPipelinesInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactCreateNestedManyWithoutWorkspaceInput
    deals?: DealCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutPipelinesInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactUncheckedCreateNestedManyWithoutWorkspaceInput
    deals?: DealUncheckedCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutPipelinesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutPipelinesInput, WorkspaceUncheckedCreateWithoutPipelinesInput>
  }

  export type StageCreateWithoutPipelineInput = {
    id?: string
    name: string
    position: number
    color?: string
    probability?: number | null
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: number | null
    deals?: DealCreateNestedManyWithoutStageInput
  }

  export type StageUncheckedCreateWithoutPipelineInput = {
    id?: string
    name: string
    position: number
    color?: string
    probability?: number | null
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: number | null
    deals?: DealUncheckedCreateNestedManyWithoutStageInput
  }

  export type StageCreateOrConnectWithoutPipelineInput = {
    where: StageWhereUniqueInput
    create: XOR<StageCreateWithoutPipelineInput, StageUncheckedCreateWithoutPipelineInput>
  }

  export type StageCreateManyPipelineInputEnvelope = {
    data: StageCreateManyPipelineInput | StageCreateManyPipelineInput[]
    skipDuplicates?: boolean
  }

  export type DealCreateWithoutPipelineInput = {
    id?: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutDealsInput
    stage: StageCreateNestedOneWithoutDealsInput
    contacts?: DealContactCreateNestedManyWithoutDealInput
    activities?: ActivityCreateNestedManyWithoutDealInput
    notes?: NoteCreateNestedManyWithoutDealInput
  }

  export type DealUncheckedCreateWithoutPipelineInput = {
    id?: string
    workspaceId: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    stageId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: DealContactUncheckedCreateNestedManyWithoutDealInput
    activities?: ActivityUncheckedCreateNestedManyWithoutDealInput
    notes?: NoteUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealCreateOrConnectWithoutPipelineInput = {
    where: DealWhereUniqueInput
    create: XOR<DealCreateWithoutPipelineInput, DealUncheckedCreateWithoutPipelineInput>
  }

  export type DealCreateManyPipelineInputEnvelope = {
    data: DealCreateManyPipelineInput | DealCreateManyPipelineInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutPipelinesInput = {
    update: XOR<WorkspaceUpdateWithoutPipelinesInput, WorkspaceUncheckedUpdateWithoutPipelinesInput>
    create: XOR<WorkspaceCreateWithoutPipelinesInput, WorkspaceUncheckedCreateWithoutPipelinesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutPipelinesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutPipelinesInput, WorkspaceUncheckedUpdateWithoutPipelinesInput>
  }

  export type WorkspaceUpdateWithoutPipelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutPipelinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUncheckedUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type StageUpsertWithWhereUniqueWithoutPipelineInput = {
    where: StageWhereUniqueInput
    update: XOR<StageUpdateWithoutPipelineInput, StageUncheckedUpdateWithoutPipelineInput>
    create: XOR<StageCreateWithoutPipelineInput, StageUncheckedCreateWithoutPipelineInput>
  }

  export type StageUpdateWithWhereUniqueWithoutPipelineInput = {
    where: StageWhereUniqueInput
    data: XOR<StageUpdateWithoutPipelineInput, StageUncheckedUpdateWithoutPipelineInput>
  }

  export type StageUpdateManyWithWhereWithoutPipelineInput = {
    where: StageScalarWhereInput
    data: XOR<StageUpdateManyMutationInput, StageUncheckedUpdateManyWithoutPipelineInput>
  }

  export type StageScalarWhereInput = {
    AND?: StageScalarWhereInput | StageScalarWhereInput[]
    OR?: StageScalarWhereInput[]
    NOT?: StageScalarWhereInput | StageScalarWhereInput[]
    id?: StringFilter<"Stage"> | string
    pipelineId?: StringFilter<"Stage"> | string
    name?: StringFilter<"Stage"> | string
    position?: IntFilter<"Stage"> | number
    color?: StringFilter<"Stage"> | string
    probability?: IntNullableFilter<"Stage"> | number | null
    isWon?: BoolFilter<"Stage"> | boolean
    isLost?: BoolFilter<"Stage"> | boolean
    rottenAfterDays?: IntNullableFilter<"Stage"> | number | null
  }

  export type DealUpsertWithWhereUniqueWithoutPipelineInput = {
    where: DealWhereUniqueInput
    update: XOR<DealUpdateWithoutPipelineInput, DealUncheckedUpdateWithoutPipelineInput>
    create: XOR<DealCreateWithoutPipelineInput, DealUncheckedCreateWithoutPipelineInput>
  }

  export type DealUpdateWithWhereUniqueWithoutPipelineInput = {
    where: DealWhereUniqueInput
    data: XOR<DealUpdateWithoutPipelineInput, DealUncheckedUpdateWithoutPipelineInput>
  }

  export type DealUpdateManyWithWhereWithoutPipelineInput = {
    where: DealScalarWhereInput
    data: XOR<DealUpdateManyMutationInput, DealUncheckedUpdateManyWithoutPipelineInput>
  }

  export type PipelineCreateWithoutStagesInput = {
    id?: string
    name: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutPipelinesInput
    deals?: DealCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUncheckedCreateWithoutStagesInput = {
    id?: string
    workspaceId: string
    name: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    deals?: DealUncheckedCreateNestedManyWithoutPipelineInput
  }

  export type PipelineCreateOrConnectWithoutStagesInput = {
    where: PipelineWhereUniqueInput
    create: XOR<PipelineCreateWithoutStagesInput, PipelineUncheckedCreateWithoutStagesInput>
  }

  export type DealCreateWithoutStageInput = {
    id?: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutDealsInput
    pipeline: PipelineCreateNestedOneWithoutDealsInput
    contacts?: DealContactCreateNestedManyWithoutDealInput
    activities?: ActivityCreateNestedManyWithoutDealInput
    notes?: NoteCreateNestedManyWithoutDealInput
  }

  export type DealUncheckedCreateWithoutStageInput = {
    id?: string
    workspaceId: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    pipelineId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: DealContactUncheckedCreateNestedManyWithoutDealInput
    activities?: ActivityUncheckedCreateNestedManyWithoutDealInput
    notes?: NoteUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealCreateOrConnectWithoutStageInput = {
    where: DealWhereUniqueInput
    create: XOR<DealCreateWithoutStageInput, DealUncheckedCreateWithoutStageInput>
  }

  export type DealCreateManyStageInputEnvelope = {
    data: DealCreateManyStageInput | DealCreateManyStageInput[]
    skipDuplicates?: boolean
  }

  export type PipelineUpsertWithoutStagesInput = {
    update: XOR<PipelineUpdateWithoutStagesInput, PipelineUncheckedUpdateWithoutStagesInput>
    create: XOR<PipelineCreateWithoutStagesInput, PipelineUncheckedCreateWithoutStagesInput>
    where?: PipelineWhereInput
  }

  export type PipelineUpdateToOneWithWhereWithoutStagesInput = {
    where?: PipelineWhereInput
    data: XOR<PipelineUpdateWithoutStagesInput, PipelineUncheckedUpdateWithoutStagesInput>
  }

  export type PipelineUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutPipelinesNestedInput
    deals?: DealUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateWithoutStagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deals?: DealUncheckedUpdateManyWithoutPipelineNestedInput
  }

  export type DealUpsertWithWhereUniqueWithoutStageInput = {
    where: DealWhereUniqueInput
    update: XOR<DealUpdateWithoutStageInput, DealUncheckedUpdateWithoutStageInput>
    create: XOR<DealCreateWithoutStageInput, DealUncheckedCreateWithoutStageInput>
  }

  export type DealUpdateWithWhereUniqueWithoutStageInput = {
    where: DealWhereUniqueInput
    data: XOR<DealUpdateWithoutStageInput, DealUncheckedUpdateWithoutStageInput>
  }

  export type DealUpdateManyWithWhereWithoutStageInput = {
    where: DealScalarWhereInput
    data: XOR<DealUpdateManyMutationInput, DealUncheckedUpdateManyWithoutStageInput>
  }

  export type WorkspaceCreateWithoutDealsInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutDealsInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactUncheckedCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutDealsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutDealsInput, WorkspaceUncheckedCreateWithoutDealsInput>
  }

  export type PipelineCreateWithoutDealsInput = {
    id?: string
    name: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutPipelinesInput
    stages?: StageCreateNestedManyWithoutPipelineInput
  }

  export type PipelineUncheckedCreateWithoutDealsInput = {
    id?: string
    workspaceId: string
    name: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stages?: StageUncheckedCreateNestedManyWithoutPipelineInput
  }

  export type PipelineCreateOrConnectWithoutDealsInput = {
    where: PipelineWhereUniqueInput
    create: XOR<PipelineCreateWithoutDealsInput, PipelineUncheckedCreateWithoutDealsInput>
  }

  export type StageCreateWithoutDealsInput = {
    id?: string
    name: string
    position: number
    color?: string
    probability?: number | null
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: number | null
    pipeline: PipelineCreateNestedOneWithoutStagesInput
  }

  export type StageUncheckedCreateWithoutDealsInput = {
    id?: string
    pipelineId: string
    name: string
    position: number
    color?: string
    probability?: number | null
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: number | null
  }

  export type StageCreateOrConnectWithoutDealsInput = {
    where: StageWhereUniqueInput
    create: XOR<StageCreateWithoutDealsInput, StageUncheckedCreateWithoutDealsInput>
  }

  export type DealContactCreateWithoutDealInput = {
    role?: string | null
    contact: ContactCreateNestedOneWithoutDealsInput
  }

  export type DealContactUncheckedCreateWithoutDealInput = {
    contactId: string
    role?: string | null
  }

  export type DealContactCreateOrConnectWithoutDealInput = {
    where: DealContactWhereUniqueInput
    create: XOR<DealContactCreateWithoutDealInput, DealContactUncheckedCreateWithoutDealInput>
  }

  export type DealContactCreateManyDealInputEnvelope = {
    data: DealContactCreateManyDealInput | DealContactCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type ActivityCreateWithoutDealInput = {
    id?: string
    type: string
    entityType: string
    entityId: string
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutActivitiesInput
    contact?: ContactCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityUncheckedCreateWithoutDealInput = {
    id?: string
    workspaceId: string
    type: string
    entityType: string
    entityId: string
    contactId?: string | null
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ActivityCreateOrConnectWithoutDealInput = {
    where: ActivityWhereUniqueInput
    create: XOR<ActivityCreateWithoutDealInput, ActivityUncheckedCreateWithoutDealInput>
  }

  export type ActivityCreateManyDealInputEnvelope = {
    data: ActivityCreateManyDealInput | ActivityCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type NoteCreateWithoutDealInput = {
    id?: string
    content: string
    entityType: string
    entityId: string
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutNotesInput
    contact?: ContactCreateNestedOneWithoutNotesInput
  }

  export type NoteUncheckedCreateWithoutDealInput = {
    id?: string
    workspaceId: string
    content: string
    entityType: string
    entityId: string
    contactId?: string | null
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NoteCreateOrConnectWithoutDealInput = {
    where: NoteWhereUniqueInput
    create: XOR<NoteCreateWithoutDealInput, NoteUncheckedCreateWithoutDealInput>
  }

  export type NoteCreateManyDealInputEnvelope = {
    data: NoteCreateManyDealInput | NoteCreateManyDealInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutDealsInput = {
    update: XOR<WorkspaceUpdateWithoutDealsInput, WorkspaceUncheckedUpdateWithoutDealsInput>
    create: XOR<WorkspaceCreateWithoutDealsInput, WorkspaceUncheckedCreateWithoutDealsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutDealsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutDealsInput, WorkspaceUncheckedUpdateWithoutDealsInput>
  }

  export type WorkspaceUpdateWithoutDealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutDealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type PipelineUpsertWithoutDealsInput = {
    update: XOR<PipelineUpdateWithoutDealsInput, PipelineUncheckedUpdateWithoutDealsInput>
    create: XOR<PipelineCreateWithoutDealsInput, PipelineUncheckedCreateWithoutDealsInput>
    where?: PipelineWhereInput
  }

  export type PipelineUpdateToOneWithWhereWithoutDealsInput = {
    where?: PipelineWhereInput
    data: XOR<PipelineUpdateWithoutDealsInput, PipelineUncheckedUpdateWithoutDealsInput>
  }

  export type PipelineUpdateWithoutDealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutPipelinesNestedInput
    stages?: StageUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateWithoutDealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StageUncheckedUpdateManyWithoutPipelineNestedInput
  }

  export type StageUpsertWithoutDealsInput = {
    update: XOR<StageUpdateWithoutDealsInput, StageUncheckedUpdateWithoutDealsInput>
    create: XOR<StageCreateWithoutDealsInput, StageUncheckedCreateWithoutDealsInput>
    where?: StageWhereInput
  }

  export type StageUpdateToOneWithWhereWithoutDealsInput = {
    where?: StageWhereInput
    data: XOR<StageUpdateWithoutDealsInput, StageUncheckedUpdateWithoutDealsInput>
  }

  export type StageUpdateWithoutDealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    isWon?: BoolFieldUpdateOperationsInput | boolean
    isLost?: BoolFieldUpdateOperationsInput | boolean
    rottenAfterDays?: NullableIntFieldUpdateOperationsInput | number | null
    pipeline?: PipelineUpdateOneRequiredWithoutStagesNestedInput
  }

  export type StageUncheckedUpdateWithoutDealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pipelineId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    isWon?: BoolFieldUpdateOperationsInput | boolean
    isLost?: BoolFieldUpdateOperationsInput | boolean
    rottenAfterDays?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DealContactUpsertWithWhereUniqueWithoutDealInput = {
    where: DealContactWhereUniqueInput
    update: XOR<DealContactUpdateWithoutDealInput, DealContactUncheckedUpdateWithoutDealInput>
    create: XOR<DealContactCreateWithoutDealInput, DealContactUncheckedCreateWithoutDealInput>
  }

  export type DealContactUpdateWithWhereUniqueWithoutDealInput = {
    where: DealContactWhereUniqueInput
    data: XOR<DealContactUpdateWithoutDealInput, DealContactUncheckedUpdateWithoutDealInput>
  }

  export type DealContactUpdateManyWithWhereWithoutDealInput = {
    where: DealContactScalarWhereInput
    data: XOR<DealContactUpdateManyMutationInput, DealContactUncheckedUpdateManyWithoutDealInput>
  }

  export type ActivityUpsertWithWhereUniqueWithoutDealInput = {
    where: ActivityWhereUniqueInput
    update: XOR<ActivityUpdateWithoutDealInput, ActivityUncheckedUpdateWithoutDealInput>
    create: XOR<ActivityCreateWithoutDealInput, ActivityUncheckedCreateWithoutDealInput>
  }

  export type ActivityUpdateWithWhereUniqueWithoutDealInput = {
    where: ActivityWhereUniqueInput
    data: XOR<ActivityUpdateWithoutDealInput, ActivityUncheckedUpdateWithoutDealInput>
  }

  export type ActivityUpdateManyWithWhereWithoutDealInput = {
    where: ActivityScalarWhereInput
    data: XOR<ActivityUpdateManyMutationInput, ActivityUncheckedUpdateManyWithoutDealInput>
  }

  export type NoteUpsertWithWhereUniqueWithoutDealInput = {
    where: NoteWhereUniqueInput
    update: XOR<NoteUpdateWithoutDealInput, NoteUncheckedUpdateWithoutDealInput>
    create: XOR<NoteCreateWithoutDealInput, NoteUncheckedCreateWithoutDealInput>
  }

  export type NoteUpdateWithWhereUniqueWithoutDealInput = {
    where: NoteWhereUniqueInput
    data: XOR<NoteUpdateWithoutDealInput, NoteUncheckedUpdateWithoutDealInput>
  }

  export type NoteUpdateManyWithWhereWithoutDealInput = {
    where: NoteScalarWhereInput
    data: XOR<NoteUpdateManyMutationInput, NoteUncheckedUpdateManyWithoutDealInput>
  }

  export type DealCreateWithoutContactsInput = {
    id?: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutDealsInput
    pipeline: PipelineCreateNestedOneWithoutDealsInput
    stage: StageCreateNestedOneWithoutDealsInput
    activities?: ActivityCreateNestedManyWithoutDealInput
    notes?: NoteCreateNestedManyWithoutDealInput
  }

  export type DealUncheckedCreateWithoutContactsInput = {
    id?: string
    workspaceId: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    pipelineId: string
    stageId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    activities?: ActivityUncheckedCreateNestedManyWithoutDealInput
    notes?: NoteUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealCreateOrConnectWithoutContactsInput = {
    where: DealWhereUniqueInput
    create: XOR<DealCreateWithoutContactsInput, DealUncheckedCreateWithoutContactsInput>
  }

  export type ContactCreateWithoutDealsInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutContactsInput
    activities?: ActivityCreateNestedManyWithoutContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutDealsInput = {
    id?: string
    workspaceId: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutDealsInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutDealsInput, ContactUncheckedCreateWithoutDealsInput>
  }

  export type DealUpsertWithoutContactsInput = {
    update: XOR<DealUpdateWithoutContactsInput, DealUncheckedUpdateWithoutContactsInput>
    create: XOR<DealCreateWithoutContactsInput, DealUncheckedCreateWithoutContactsInput>
    where?: DealWhereInput
  }

  export type DealUpdateToOneWithWhereWithoutContactsInput = {
    where?: DealWhereInput
    data: XOR<DealUpdateWithoutContactsInput, DealUncheckedUpdateWithoutContactsInput>
  }

  export type DealUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutDealsNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutDealsNestedInput
    stage?: StageUpdateOneRequiredWithoutDealsNestedInput
    activities?: ActivityUpdateManyWithoutDealNestedInput
    notes?: NoteUpdateManyWithoutDealNestedInput
  }

  export type DealUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    pipelineId?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    activities?: ActivityUncheckedUpdateManyWithoutDealNestedInput
    notes?: NoteUncheckedUpdateManyWithoutDealNestedInput
  }

  export type ContactUpsertWithoutDealsInput = {
    update: XOR<ContactUpdateWithoutDealsInput, ContactUncheckedUpdateWithoutDealsInput>
    create: XOR<ContactCreateWithoutDealsInput, ContactUncheckedCreateWithoutDealsInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutDealsInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutDealsInput, ContactUncheckedUpdateWithoutDealsInput>
  }

  export type ContactUpdateWithoutDealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutContactsNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutDealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
  }

  export type WorkspaceCreateWithoutActivitiesInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineCreateNestedManyWithoutWorkspaceInput
    deals?: DealCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutActivitiesInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactUncheckedCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutWorkspaceInput
    deals?: DealUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutActivitiesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutActivitiesInput, WorkspaceUncheckedCreateWithoutActivitiesInput>
  }

  export type ContactCreateWithoutActivitiesInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutContactsInput
    deals?: DealContactCreateNestedManyWithoutContactInput
    notes?: NoteCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutActivitiesInput = {
    id?: string
    workspaceId: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
    deals?: DealContactUncheckedCreateNestedManyWithoutContactInput
    notes?: NoteUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutActivitiesInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutActivitiesInput, ContactUncheckedCreateWithoutActivitiesInput>
  }

  export type DealCreateWithoutActivitiesInput = {
    id?: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutDealsInput
    pipeline: PipelineCreateNestedOneWithoutDealsInput
    stage: StageCreateNestedOneWithoutDealsInput
    contacts?: DealContactCreateNestedManyWithoutDealInput
    notes?: NoteCreateNestedManyWithoutDealInput
  }

  export type DealUncheckedCreateWithoutActivitiesInput = {
    id?: string
    workspaceId: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    pipelineId: string
    stageId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: DealContactUncheckedCreateNestedManyWithoutDealInput
    notes?: NoteUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealCreateOrConnectWithoutActivitiesInput = {
    where: DealWhereUniqueInput
    create: XOR<DealCreateWithoutActivitiesInput, DealUncheckedCreateWithoutActivitiesInput>
  }

  export type WorkspaceUpsertWithoutActivitiesInput = {
    update: XOR<WorkspaceUpdateWithoutActivitiesInput, WorkspaceUncheckedUpdateWithoutActivitiesInput>
    create: XOR<WorkspaceCreateWithoutActivitiesInput, WorkspaceUncheckedCreateWithoutActivitiesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutActivitiesInput, WorkspaceUncheckedUpdateWithoutActivitiesInput>
  }

  export type WorkspaceUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type ContactUpsertWithoutActivitiesInput = {
    update: XOR<ContactUpdateWithoutActivitiesInput, ContactUncheckedUpdateWithoutActivitiesInput>
    create: XOR<ContactCreateWithoutActivitiesInput, ContactUncheckedCreateWithoutActivitiesInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutActivitiesInput, ContactUncheckedUpdateWithoutActivitiesInput>
  }

  export type ContactUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutContactsNestedInput
    deals?: DealContactUpdateManyWithoutContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deals?: DealContactUncheckedUpdateManyWithoutContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
  }

  export type DealUpsertWithoutActivitiesInput = {
    update: XOR<DealUpdateWithoutActivitiesInput, DealUncheckedUpdateWithoutActivitiesInput>
    create: XOR<DealCreateWithoutActivitiesInput, DealUncheckedCreateWithoutActivitiesInput>
    where?: DealWhereInput
  }

  export type DealUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: DealWhereInput
    data: XOR<DealUpdateWithoutActivitiesInput, DealUncheckedUpdateWithoutActivitiesInput>
  }

  export type DealUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutDealsNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutDealsNestedInput
    stage?: StageUpdateOneRequiredWithoutDealsNestedInput
    contacts?: DealContactUpdateManyWithoutDealNestedInput
    notes?: NoteUpdateManyWithoutDealNestedInput
  }

  export type DealUncheckedUpdateWithoutActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    pipelineId?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: DealContactUncheckedUpdateManyWithoutDealNestedInput
    notes?: NoteUncheckedUpdateManyWithoutDealNestedInput
  }

  export type WorkspaceCreateWithoutNotesInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineCreateNestedManyWithoutWorkspaceInput
    deals?: DealCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutNotesInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactUncheckedCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutWorkspaceInput
    deals?: DealUncheckedCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutNotesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutNotesInput, WorkspaceUncheckedCreateWithoutNotesInput>
  }

  export type ContactCreateWithoutNotesInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
    workspace: WorkspaceCreateNestedOneWithoutContactsInput
    deals?: DealContactCreateNestedManyWithoutContactInput
    activities?: ActivityCreateNestedManyWithoutContactInput
  }

  export type ContactUncheckedCreateWithoutNotesInput = {
    id?: string
    workspaceId: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
    deals?: DealContactUncheckedCreateNestedManyWithoutContactInput
    activities?: ActivityUncheckedCreateNestedManyWithoutContactInput
  }

  export type ContactCreateOrConnectWithoutNotesInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
  }

  export type DealCreateWithoutNotesInput = {
    id?: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutDealsInput
    pipeline: PipelineCreateNestedOneWithoutDealsInput
    stage: StageCreateNestedOneWithoutDealsInput
    contacts?: DealContactCreateNestedManyWithoutDealInput
    activities?: ActivityCreateNestedManyWithoutDealInput
  }

  export type DealUncheckedCreateWithoutNotesInput = {
    id?: string
    workspaceId: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    pipelineId: string
    stageId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    contacts?: DealContactUncheckedCreateNestedManyWithoutDealInput
    activities?: ActivityUncheckedCreateNestedManyWithoutDealInput
  }

  export type DealCreateOrConnectWithoutNotesInput = {
    where: DealWhereUniqueInput
    create: XOR<DealCreateWithoutNotesInput, DealUncheckedCreateWithoutNotesInput>
  }

  export type WorkspaceUpsertWithoutNotesInput = {
    update: XOR<WorkspaceUpdateWithoutNotesInput, WorkspaceUncheckedUpdateWithoutNotesInput>
    create: XOR<WorkspaceCreateWithoutNotesInput, WorkspaceUncheckedCreateWithoutNotesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutNotesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutNotesInput, WorkspaceUncheckedUpdateWithoutNotesInput>
  }

  export type WorkspaceUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUncheckedUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type ContactUpsertWithoutNotesInput = {
    update: XOR<ContactUpdateWithoutNotesInput, ContactUncheckedUpdateWithoutNotesInput>
    create: XOR<ContactCreateWithoutNotesInput, ContactUncheckedCreateWithoutNotesInput>
    where?: ContactWhereInput
  }

  export type ContactUpdateToOneWithWhereWithoutNotesInput = {
    where?: ContactWhereInput
    data: XOR<ContactUpdateWithoutNotesInput, ContactUncheckedUpdateWithoutNotesInput>
  }

  export type ContactUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutContactsNestedInput
    deals?: DealContactUpdateManyWithoutContactNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deals?: DealContactUncheckedUpdateManyWithoutContactNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
  }

  export type DealUpsertWithoutNotesInput = {
    update: XOR<DealUpdateWithoutNotesInput, DealUncheckedUpdateWithoutNotesInput>
    create: XOR<DealCreateWithoutNotesInput, DealUncheckedCreateWithoutNotesInput>
    where?: DealWhereInput
  }

  export type DealUpdateToOneWithWhereWithoutNotesInput = {
    where?: DealWhereInput
    data: XOR<DealUpdateWithoutNotesInput, DealUncheckedUpdateWithoutNotesInput>
  }

  export type DealUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutDealsNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutDealsNestedInput
    stage?: StageUpdateOneRequiredWithoutDealsNestedInput
    contacts?: DealContactUpdateManyWithoutDealNestedInput
    activities?: ActivityUpdateManyWithoutDealNestedInput
  }

  export type DealUncheckedUpdateWithoutNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    pipelineId?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: DealContactUncheckedUpdateManyWithoutDealNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutDealNestedInput
  }

  export type WorkspaceCreateWithoutWebhooksInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineCreateNestedManyWithoutWorkspaceInput
    deals?: DealCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutWebhooksInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactUncheckedCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutWorkspaceInput
    deals?: DealUncheckedCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutWebhooksInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutWebhooksInput, WorkspaceUncheckedCreateWithoutWebhooksInput>
  }

  export type WorkspaceUpsertWithoutWebhooksInput = {
    update: XOR<WorkspaceUpdateWithoutWebhooksInput, WorkspaceUncheckedUpdateWithoutWebhooksInput>
    create: XOR<WorkspaceCreateWithoutWebhooksInput, WorkspaceUncheckedCreateWithoutWebhooksInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutWebhooksInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutWebhooksInput, WorkspaceUncheckedUpdateWithoutWebhooksInput>
  }

  export type WorkspaceUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutWebhooksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUncheckedUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutApiKeysInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineCreateNestedManyWithoutWorkspaceInput
    deals?: DealCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutApiKeysInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactUncheckedCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutWorkspaceInput
    deals?: DealUncheckedCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    eventLogs?: EventLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutApiKeysInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutApiKeysInput, WorkspaceUncheckedCreateWithoutApiKeysInput>
  }

  export type WorkspaceUpsertWithoutApiKeysInput = {
    update: XOR<WorkspaceUpdateWithoutApiKeysInput, WorkspaceUncheckedUpdateWithoutApiKeysInput>
    create: XOR<WorkspaceCreateWithoutApiKeysInput, WorkspaceUncheckedCreateWithoutApiKeysInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutApiKeysInput, WorkspaceUncheckedUpdateWithoutApiKeysInput>
  }

  export type WorkspaceUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutApiKeysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUncheckedUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    eventLogs?: EventLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutEventLogsInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineCreateNestedManyWithoutWorkspaceInput
    deals?: DealCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityCreateNestedManyWithoutWorkspaceInput
    notes?: NoteCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutEventLogsInput = {
    id?: string
    name: string
    slug: string
    plan?: string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: WorkspaceUserUncheckedCreateNestedManyWithoutWorkspaceInput
    contacts?: ContactUncheckedCreateNestedManyWithoutWorkspaceInput
    pipelines?: PipelineUncheckedCreateNestedManyWithoutWorkspaceInput
    deals?: DealUncheckedCreateNestedManyWithoutWorkspaceInput
    activities?: ActivityUncheckedCreateNestedManyWithoutWorkspaceInput
    notes?: NoteUncheckedCreateNestedManyWithoutWorkspaceInput
    webhooks?: WebhookEndpointUncheckedCreateNestedManyWithoutWorkspaceInput
    apiKeys?: ApiKeyUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutEventLogsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutEventLogsInput, WorkspaceUncheckedCreateWithoutEventLogsInput>
  }

  export type WorkspaceUpsertWithoutEventLogsInput = {
    update: XOR<WorkspaceUpdateWithoutEventLogsInput, WorkspaceUncheckedUpdateWithoutEventLogsInput>
    create: XOR<WorkspaceCreateWithoutEventLogsInput, WorkspaceUncheckedCreateWithoutEventLogsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutEventLogsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutEventLogsInput, WorkspaceUncheckedUpdateWithoutEventLogsInput>
  }

  export type WorkspaceUpdateWithoutEventLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutEventLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    settings?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: WorkspaceUserUncheckedUpdateManyWithoutWorkspaceNestedInput
    contacts?: ContactUncheckedUpdateManyWithoutWorkspaceNestedInput
    pipelines?: PipelineUncheckedUpdateManyWithoutWorkspaceNestedInput
    deals?: DealUncheckedUpdateManyWithoutWorkspaceNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutWorkspaceNestedInput
    notes?: NoteUncheckedUpdateManyWithoutWorkspaceNestedInput
    webhooks?: WebhookEndpointUncheckedUpdateManyWithoutWorkspaceNestedInput
    apiKeys?: ApiKeyUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUserCreateManyWorkspaceInput = {
    id?: string
    userId: string
    role?: string
    createdAt?: Date | string
  }

  export type ContactCreateManyWorkspaceInput = {
    id?: string
    firstName: string
    lastName?: string | null
    email?: string | null
    phone?: string | null
    avatar?: string | null
    status?: string
    source?: string
    score?: number
    tags?: ContactCreatetagsInput | string[]
    companyId?: string | null
    ownerId?: string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: boolean
    mergedInto?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastContactedAt?: Date | string | null
  }

  export type PipelineCreateManyWorkspaceInput = {
    id?: string
    name: string
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealCreateManyWorkspaceInput = {
    id?: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    pipelineId: string
    stageId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ActivityCreateManyWorkspaceInput = {
    id?: string
    type: string
    entityType: string
    entityId: string
    contactId?: string | null
    dealId?: string | null
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NoteCreateManyWorkspaceInput = {
    id?: string
    content: string
    entityType: string
    entityId: string
    contactId?: string | null
    dealId?: string | null
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebhookEndpointCreateManyWorkspaceInput = {
    id?: string
    name: string
    url: string
    secret?: string | null
    events?: WebhookEndpointCreateeventsInput | string[]
    isActive?: boolean
    failureCount?: number
    lastTriggeredAt?: Date | string | null
    lastStatusCode?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApiKeyCreateManyWorkspaceInput = {
    id?: string
    name: string
    keyHash: string
    keyPrefix: string
    lastUsedAt?: Date | string | null
    expiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type EventLogCreateManyWorkspaceInput = {
    id?: string
    event: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkspaceUserUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkspacesNestedInput
  }

  export type WorkspaceUserUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deals?: DealContactUpdateManyWithoutContactNestedInput
    activities?: ActivityUpdateManyWithoutContactNestedInput
    notes?: NoteUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deals?: DealContactUncheckedUpdateManyWithoutContactNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutContactNestedInput
    notes?: NoteUncheckedUpdateManyWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    tags?: ContactUpdatetagsInput | string[]
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    channels?: JsonNullValueInput | InputJsonValue
    customData?: JsonNullValueInput | InputJsonValue
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    mergedInto?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastContactedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PipelineUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StageUpdateManyWithoutPipelineNestedInput
    deals?: DealUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stages?: StageUncheckedUpdateManyWithoutPipelineNestedInput
    deals?: DealUncheckedUpdateManyWithoutPipelineNestedInput
  }

  export type PipelineUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pipeline?: PipelineUpdateOneRequiredWithoutDealsNestedInput
    stage?: StageUpdateOneRequiredWithoutDealsNestedInput
    contacts?: DealContactUpdateManyWithoutDealNestedInput
    activities?: ActivityUpdateManyWithoutDealNestedInput
    notes?: NoteUpdateManyWithoutDealNestedInput
  }

  export type DealUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    pipelineId?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: DealContactUncheckedUpdateManyWithoutDealNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutDealNestedInput
    notes?: NoteUncheckedUpdateManyWithoutDealNestedInput
  }

  export type DealUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    pipelineId?: StringFieldUpdateOperationsInput | string
    stageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneWithoutActivitiesNestedInput
    deal?: DealUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contact?: ContactUpdateOneWithoutNotesNestedInput
    deal?: DealUpdateOneWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEndpointUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEndpointUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebhookEndpointUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    secret?: NullableStringFieldUpdateOperationsInput | string | null
    events?: WebhookEndpointUpdateeventsInput | string[]
    isActive?: BoolFieldUpdateOperationsInput | boolean
    failureCount?: IntFieldUpdateOperationsInput | number
    lastTriggeredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lastStatusCode?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiKeyUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    keyHash?: StringFieldUpdateOperationsInput | string
    keyPrefix?: StringFieldUpdateOperationsInput | string
    lastUsedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventLogUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUserCreateManyUserInput = {
    id?: string
    workspaceId: string
    role?: string
    createdAt?: Date | string
  }

  export type WorkspaceUserUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
  }

  export type WorkspaceUserUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUserUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealContactCreateManyContactInput = {
    dealId: string
    role?: string | null
  }

  export type ActivityCreateManyContactInput = {
    id?: string
    workspaceId: string
    type: string
    entityType: string
    entityId: string
    dealId?: string | null
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NoteCreateManyContactInput = {
    id?: string
    workspaceId: string
    content: string
    entityType: string
    entityId: string
    dealId?: string | null
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealContactUpdateWithoutContactInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    deal?: DealUpdateOneRequiredWithoutContactsNestedInput
  }

  export type DealContactUncheckedUpdateWithoutContactInput = {
    dealId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DealContactUncheckedUpdateManyWithoutContactInput = {
    dealId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutActivitiesNestedInput
    deal?: DealUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutNotesNestedInput
    deal?: DealUpdateOneWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    dealId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StageCreateManyPipelineInput = {
    id?: string
    name: string
    position: number
    color?: string
    probability?: number | null
    isWon?: boolean
    isLost?: boolean
    rottenAfterDays?: number | null
  }

  export type DealCreateManyPipelineInput = {
    id?: string
    workspaceId: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    stageId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StageUpdateWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    isWon?: BoolFieldUpdateOperationsInput | boolean
    isLost?: BoolFieldUpdateOperationsInput | boolean
    rottenAfterDays?: NullableIntFieldUpdateOperationsInput | number | null
    deals?: DealUpdateManyWithoutStageNestedInput
  }

  export type StageUncheckedUpdateWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    isWon?: BoolFieldUpdateOperationsInput | boolean
    isLost?: BoolFieldUpdateOperationsInput | boolean
    rottenAfterDays?: NullableIntFieldUpdateOperationsInput | number | null
    deals?: DealUncheckedUpdateManyWithoutStageNestedInput
  }

  export type StageUncheckedUpdateManyWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    color?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    isWon?: BoolFieldUpdateOperationsInput | boolean
    isLost?: BoolFieldUpdateOperationsInput | boolean
    rottenAfterDays?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DealUpdateWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutDealsNestedInput
    stage?: StageUpdateOneRequiredWithoutDealsNestedInput
    contacts?: DealContactUpdateManyWithoutDealNestedInput
    activities?: ActivityUpdateManyWithoutDealNestedInput
    notes?: NoteUpdateManyWithoutDealNestedInput
  }

  export type DealUncheckedUpdateWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: DealContactUncheckedUpdateManyWithoutDealNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutDealNestedInput
    notes?: NoteUncheckedUpdateManyWithoutDealNestedInput
  }

  export type DealUncheckedUpdateManyWithoutPipelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    stageId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealCreateManyStageInput = {
    id?: string
    workspaceId: string
    title: string
    value?: Decimal | DecimalJsLike | number | string | null
    currency?: string
    probability?: number | null
    pipelineId: string
    position?: number
    companyId?: string | null
    ownerId?: string | null
    status?: string
    expectedCloseDate?: Date | string | null
    isArchived?: boolean
    stageEnteredAt?: Date | string
    closedAt?: Date | string | null
    closedReason?: string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealUpdateWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutDealsNestedInput
    pipeline?: PipelineUpdateOneRequiredWithoutDealsNestedInput
    contacts?: DealContactUpdateManyWithoutDealNestedInput
    activities?: ActivityUpdateManyWithoutDealNestedInput
    notes?: NoteUpdateManyWithoutDealNestedInput
  }

  export type DealUncheckedUpdateWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    pipelineId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contacts?: DealContactUncheckedUpdateManyWithoutDealNestedInput
    activities?: ActivityUncheckedUpdateManyWithoutDealNestedInput
    notes?: NoteUncheckedUpdateManyWithoutDealNestedInput
  }

  export type DealUncheckedUpdateManyWithoutStageInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    currency?: StringFieldUpdateOperationsInput | string
    probability?: NullableIntFieldUpdateOperationsInput | number | null
    pipelineId?: StringFieldUpdateOperationsInput | string
    position?: IntFieldUpdateOperationsInput | number
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    expectedCloseDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    stageEnteredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closedReason?: NullableStringFieldUpdateOperationsInput | string | null
    customData?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DealContactCreateManyDealInput = {
    contactId: string
    role?: string | null
  }

  export type ActivityCreateManyDealInput = {
    id?: string
    workspaceId: string
    type: string
    entityType: string
    entityId: string
    contactId?: string | null
    userId?: string | null
    source?: string | null
    title: string
    description?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NoteCreateManyDealInput = {
    id?: string
    workspaceId: string
    content: string
    entityType: string
    entityId: string
    contactId?: string | null
    userId?: string | null
    isPinned?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DealContactUpdateWithoutDealInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: ContactUpdateOneRequiredWithoutDealsNestedInput
  }

  export type DealContactUncheckedUpdateWithoutDealInput = {
    contactId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DealContactUncheckedUpdateManyWithoutDealInput = {
    contactId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivityUpdateWithoutDealInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutActivitiesNestedInput
    contact?: ContactUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityUncheckedUpdateWithoutDealInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivityUncheckedUpdateManyWithoutDealInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    source?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUpdateWithoutDealInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutNotesNestedInput
    contact?: ContactUpdateOneWithoutNotesNestedInput
  }

  export type NoteUncheckedUpdateWithoutDealInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NoteUncheckedUpdateManyWithoutDealInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    entityType?: StringFieldUpdateOperationsInput | string
    entityId?: StringFieldUpdateOperationsInput | string
    contactId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WorkspaceCountOutputTypeDefaultArgs instead
     */
    export type WorkspaceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactCountOutputTypeDefaultArgs instead
     */
    export type ContactCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PipelineCountOutputTypeDefaultArgs instead
     */
    export type PipelineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PipelineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StageCountOutputTypeDefaultArgs instead
     */
    export type StageCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StageCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DealCountOutputTypeDefaultArgs instead
     */
    export type DealCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DealCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkspaceDefaultArgs instead
     */
    export type WorkspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkspaceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkspaceUserDefaultArgs instead
     */
    export type WorkspaceUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkspaceUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDefaultArgs instead
     */
    export type ContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PipelineDefaultArgs instead
     */
    export type PipelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PipelineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StageDefaultArgs instead
     */
    export type StageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DealDefaultArgs instead
     */
    export type DealArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DealDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DealContactDefaultArgs instead
     */
    export type DealContactArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DealContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActivityDefaultArgs instead
     */
    export type ActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActivityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NoteDefaultArgs instead
     */
    export type NoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NoteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WebhookEndpointDefaultArgs instead
     */
    export type WebhookEndpointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WebhookEndpointDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ApiKeyDefaultArgs instead
     */
    export type ApiKeyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ApiKeyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventLogDefaultArgs instead
     */
    export type EventLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventLogDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}