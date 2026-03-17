
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
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Dog
 * 
 */
export type Dog = $Result.DefaultSelection<Prisma.$DogPayload>
/**
 * Model Lead
 * 
 */
export type Lead = $Result.DefaultSelection<Prisma.$LeadPayload>
/**
 * Model Litter
 * 
 */
export type Litter = $Result.DefaultSelection<Prisma.$LitterPayload>
/**
 * Model Puppy
 * 
 */
export type Puppy = $Result.DefaultSelection<Prisma.$PuppyPayload>
/**
 * Model SiteConfig
 * 
 */
export type SiteConfig = $Result.DefaultSelection<Prisma.$SiteConfigPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model Vaccine
 * 
 */
export type Vaccine = $Result.DefaultSelection<Prisma.$VaccinePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Clients
 * const clients = await prisma.client.findMany()
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
   * // Fetch zero or more Clients
   * const clients = await prisma.client.findMany()
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
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.dog`: Exposes CRUD operations for the **Dog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dogs
    * const dogs = await prisma.dog.findMany()
    * ```
    */
  get dog(): Prisma.DogDelegate<ExtArgs>;

  /**
   * `prisma.lead`: Exposes CRUD operations for the **Lead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leads
    * const leads = await prisma.lead.findMany()
    * ```
    */
  get lead(): Prisma.LeadDelegate<ExtArgs>;

  /**
   * `prisma.litter`: Exposes CRUD operations for the **Litter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Litters
    * const litters = await prisma.litter.findMany()
    * ```
    */
  get litter(): Prisma.LitterDelegate<ExtArgs>;

  /**
   * `prisma.puppy`: Exposes CRUD operations for the **Puppy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Puppies
    * const puppies = await prisma.puppy.findMany()
    * ```
    */
  get puppy(): Prisma.PuppyDelegate<ExtArgs>;

  /**
   * `prisma.siteConfig`: Exposes CRUD operations for the **SiteConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteConfigs
    * const siteConfigs = await prisma.siteConfig.findMany()
    * ```
    */
  get siteConfig(): Prisma.SiteConfigDelegate<ExtArgs>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs>;

  /**
   * `prisma.vaccine`: Exposes CRUD operations for the **Vaccine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vaccines
    * const vaccines = await prisma.vaccine.findMany()
    * ```
    */
  get vaccine(): Prisma.VaccineDelegate<ExtArgs>;
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
    Client: 'Client',
    Dog: 'Dog',
    Lead: 'Lead',
    Litter: 'Litter',
    Puppy: 'Puppy',
    SiteConfig: 'SiteConfig',
    Transaction: 'Transaction',
    Vaccine: 'Vaccine'
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
      modelProps: "client" | "dog" | "lead" | "litter" | "puppy" | "siteConfig" | "transaction" | "vaccine"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Dog: {
        payload: Prisma.$DogPayload<ExtArgs>
        fields: Prisma.DogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          findFirst: {
            args: Prisma.DogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          findMany: {
            args: Prisma.DogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>[]
          }
          create: {
            args: Prisma.DogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          createMany: {
            args: Prisma.DogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>[]
          }
          delete: {
            args: Prisma.DogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          update: {
            args: Prisma.DogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          deleteMany: {
            args: Prisma.DogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DogPayload>
          }
          aggregate: {
            args: Prisma.DogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDog>
          }
          groupBy: {
            args: Prisma.DogGroupByArgs<ExtArgs>
            result: $Utils.Optional<DogGroupByOutputType>[]
          }
          count: {
            args: Prisma.DogCountArgs<ExtArgs>
            result: $Utils.Optional<DogCountAggregateOutputType> | number
          }
        }
      }
      Lead: {
        payload: Prisma.$LeadPayload<ExtArgs>
        fields: Prisma.LeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findFirst: {
            args: Prisma.LeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          findMany: {
            args: Prisma.LeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          create: {
            args: Prisma.LeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          createMany: {
            args: Prisma.LeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>[]
          }
          delete: {
            args: Prisma.LeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          update: {
            args: Prisma.LeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          deleteMany: {
            args: Prisma.LeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeadPayload>
          }
          aggregate: {
            args: Prisma.LeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLead>
          }
          groupBy: {
            args: Prisma.LeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeadCountArgs<ExtArgs>
            result: $Utils.Optional<LeadCountAggregateOutputType> | number
          }
        }
      }
      Litter: {
        payload: Prisma.$LitterPayload<ExtArgs>
        fields: Prisma.LitterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LitterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LitterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LitterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LitterPayload>
          }
          findFirst: {
            args: Prisma.LitterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LitterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LitterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LitterPayload>
          }
          findMany: {
            args: Prisma.LitterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LitterPayload>[]
          }
          create: {
            args: Prisma.LitterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LitterPayload>
          }
          createMany: {
            args: Prisma.LitterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LitterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LitterPayload>[]
          }
          delete: {
            args: Prisma.LitterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LitterPayload>
          }
          update: {
            args: Prisma.LitterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LitterPayload>
          }
          deleteMany: {
            args: Prisma.LitterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LitterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LitterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LitterPayload>
          }
          aggregate: {
            args: Prisma.LitterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLitter>
          }
          groupBy: {
            args: Prisma.LitterGroupByArgs<ExtArgs>
            result: $Utils.Optional<LitterGroupByOutputType>[]
          }
          count: {
            args: Prisma.LitterCountArgs<ExtArgs>
            result: $Utils.Optional<LitterCountAggregateOutputType> | number
          }
        }
      }
      Puppy: {
        payload: Prisma.$PuppyPayload<ExtArgs>
        fields: Prisma.PuppyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PuppyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuppyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PuppyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuppyPayload>
          }
          findFirst: {
            args: Prisma.PuppyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuppyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PuppyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuppyPayload>
          }
          findMany: {
            args: Prisma.PuppyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuppyPayload>[]
          }
          create: {
            args: Prisma.PuppyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuppyPayload>
          }
          createMany: {
            args: Prisma.PuppyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PuppyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuppyPayload>[]
          }
          delete: {
            args: Prisma.PuppyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuppyPayload>
          }
          update: {
            args: Prisma.PuppyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuppyPayload>
          }
          deleteMany: {
            args: Prisma.PuppyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PuppyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PuppyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuppyPayload>
          }
          aggregate: {
            args: Prisma.PuppyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePuppy>
          }
          groupBy: {
            args: Prisma.PuppyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PuppyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PuppyCountArgs<ExtArgs>
            result: $Utils.Optional<PuppyCountAggregateOutputType> | number
          }
        }
      }
      SiteConfig: {
        payload: Prisma.$SiteConfigPayload<ExtArgs>
        fields: Prisma.SiteConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          findFirst: {
            args: Prisma.SiteConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          findMany: {
            args: Prisma.SiteConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>[]
          }
          create: {
            args: Prisma.SiteConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          createMany: {
            args: Prisma.SiteConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>[]
          }
          delete: {
            args: Prisma.SiteConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          update: {
            args: Prisma.SiteConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          deleteMany: {
            args: Prisma.SiteConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SiteConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteConfigPayload>
          }
          aggregate: {
            args: Prisma.SiteConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteConfig>
          }
          groupBy: {
            args: Prisma.SiteConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SiteConfigCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      Vaccine: {
        payload: Prisma.$VaccinePayload<ExtArgs>
        fields: Prisma.VaccineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VaccineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VaccineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          findFirst: {
            args: Prisma.VaccineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VaccineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          findMany: {
            args: Prisma.VaccineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>[]
          }
          create: {
            args: Prisma.VaccineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          createMany: {
            args: Prisma.VaccineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VaccineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>[]
          }
          delete: {
            args: Prisma.VaccineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          update: {
            args: Prisma.VaccineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          deleteMany: {
            args: Prisma.VaccineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VaccineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VaccineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VaccinePayload>
          }
          aggregate: {
            args: Prisma.VaccineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVaccine>
          }
          groupBy: {
            args: Prisma.VaccineGroupByArgs<ExtArgs>
            result: $Utils.Optional<VaccineGroupByOutputType>[]
          }
          count: {
            args: Prisma.VaccineCountArgs<ExtArgs>
            result: $Utils.Optional<VaccineCountAggregateOutputType> | number
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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    Puppy: number
    Transaction: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Puppy?: boolean | ClientCountOutputTypeCountPuppyArgs
    Transaction?: boolean | ClientCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountPuppyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PuppyWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type DogCountOutputType
   */

  export type DogCountOutputType = {
    other_Dog_Dog_damIdToDog: number
    other_Dog_Dog_sireIdToDog: number
    Litter_Litter_damIdToDog: number
    Litter_Litter_sireIdToDog: number
    Vaccine: number
  }

  export type DogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_Dog_Dog_damIdToDog?: boolean | DogCountOutputTypeCountOther_Dog_Dog_damIdToDogArgs
    other_Dog_Dog_sireIdToDog?: boolean | DogCountOutputTypeCountOther_Dog_Dog_sireIdToDogArgs
    Litter_Litter_damIdToDog?: boolean | DogCountOutputTypeCountLitter_Litter_damIdToDogArgs
    Litter_Litter_sireIdToDog?: boolean | DogCountOutputTypeCountLitter_Litter_sireIdToDogArgs
    Vaccine?: boolean | DogCountOutputTypeCountVaccineArgs
  }

  // Custom InputTypes
  /**
   * DogCountOutputType without action
   */
  export type DogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DogCountOutputType
     */
    select?: DogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DogCountOutputType without action
   */
  export type DogCountOutputTypeCountOther_Dog_Dog_damIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DogWhereInput
  }

  /**
   * DogCountOutputType without action
   */
  export type DogCountOutputTypeCountOther_Dog_Dog_sireIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DogWhereInput
  }

  /**
   * DogCountOutputType without action
   */
  export type DogCountOutputTypeCountLitter_Litter_damIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LitterWhereInput
  }

  /**
   * DogCountOutputType without action
   */
  export type DogCountOutputTypeCountLitter_Litter_sireIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LitterWhereInput
  }

  /**
   * DogCountOutputType without action
   */
  export type DogCountOutputTypeCountVaccineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaccineWhereInput
  }


  /**
   * Count Type LitterCountOutputType
   */

  export type LitterCountOutputType = {
    Puppy: number
  }

  export type LitterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Puppy?: boolean | LitterCountOutputTypeCountPuppyArgs
  }

  // Custom InputTypes
  /**
   * LitterCountOutputType without action
   */
  export type LitterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LitterCountOutputType
     */
    select?: LitterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LitterCountOutputType without action
   */
  export type LitterCountOutputTypeCountPuppyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PuppyWhereInput
  }


  /**
   * Count Type PuppyCountOutputType
   */

  export type PuppyCountOutputType = {
    Vaccine: number
  }

  export type PuppyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vaccine?: boolean | PuppyCountOutputTypeCountVaccineArgs
  }

  // Custom InputTypes
  /**
   * PuppyCountOutputType without action
   */
  export type PuppyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuppyCountOutputType
     */
    select?: PuppyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PuppyCountOutputType without action
   */
  export type PuppyCountOutputTypeCountVaccineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaccineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    email: string | null
    phone: string | null
    address: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cpf: string | null
    email: string | null
    phone: string | null
    address: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    cpf: number
    email: number
    phone: number
    address: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    phone?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    phone?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    cpf?: true
    email?: true
    phone?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    cpf: string | null
    email: string | null
    phone: string
    address: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Puppy?: boolean | Client$PuppyArgs<ExtArgs>
    Transaction?: boolean | Client$TransactionArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    cpf?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Puppy?: boolean | Client$PuppyArgs<ExtArgs>
    Transaction?: boolean | Client$TransactionArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      Puppy: Prisma.$PuppyPayload<ExtArgs>[]
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cpf: string | null
      email: string | null
      phone: string
      address: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Puppy<T extends Client$PuppyArgs<ExtArgs> = {}>(args?: Subset<T, Client$PuppyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "findMany"> | Null>
    Transaction<T extends Client$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Client$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly cpf: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly notes: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }

  /**
   * Client.Puppy
   */
  export type Client$PuppyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    where?: PuppyWhereInput
    orderBy?: PuppyOrderByWithRelationInput | PuppyOrderByWithRelationInput[]
    cursor?: PuppyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PuppyScalarFieldEnum | PuppyScalarFieldEnum[]
  }

  /**
   * Client.Transaction
   */
  export type Client$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Dog
   */

  export type AggregateDog = {
    _count: DogCountAggregateOutputType | null
    _avg: DogAvgAggregateOutputType | null
    _sum: DogSumAggregateOutputType | null
    _min: DogMinAggregateOutputType | null
    _max: DogMaxAggregateOutputType | null
  }

  export type DogAvgAggregateOutputType = {
    height: number | null
  }

  export type DogSumAggregateOutputType = {
    height: number | null
  }

  export type DogMinAggregateOutputType = {
    id: string | null
    registrySystem: string | null
    nickname: string | null
    name: string | null
    registrationName: string | null
    breed: string | null
    variety: string | null
    birthDate: Date | null
    color: string | null
    arrivalDate: Date | null
    height: number | null
    nationality: string | null
    sex: string | null
    temperament: string | null
    status: string | null
    showGenealogy: boolean | null
    notes: string | null
    coat: string | null
    profilePhoto: string | null
    media: string | null
    videos: string | null
    microchip: string | null
    microchipDate: Date | null
    dnaProfile: string | null
    tagId: string | null
    tattoo: string | null
    coi: string | null
    hipDysplasia: string | null
    elbowDysplasia: string | null
    patellaLuxation: string | null
    healthDocsUrls: string | null
    sireId: string | null
    damId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pedigreeDocUrl: string | null
    pedigreeId: string | null
  }

  export type DogMaxAggregateOutputType = {
    id: string | null
    registrySystem: string | null
    nickname: string | null
    name: string | null
    registrationName: string | null
    breed: string | null
    variety: string | null
    birthDate: Date | null
    color: string | null
    arrivalDate: Date | null
    height: number | null
    nationality: string | null
    sex: string | null
    temperament: string | null
    status: string | null
    showGenealogy: boolean | null
    notes: string | null
    coat: string | null
    profilePhoto: string | null
    media: string | null
    videos: string | null
    microchip: string | null
    microchipDate: Date | null
    dnaProfile: string | null
    tagId: string | null
    tattoo: string | null
    coi: string | null
    hipDysplasia: string | null
    elbowDysplasia: string | null
    patellaLuxation: string | null
    healthDocsUrls: string | null
    sireId: string | null
    damId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    pedigreeDocUrl: string | null
    pedigreeId: string | null
  }

  export type DogCountAggregateOutputType = {
    id: number
    registrySystem: number
    nickname: number
    name: number
    registrationName: number
    breed: number
    variety: number
    birthDate: number
    color: number
    arrivalDate: number
    height: number
    nationality: number
    sex: number
    temperament: number
    status: number
    showGenealogy: number
    notes: number
    coat: number
    profilePhoto: number
    media: number
    videos: number
    microchip: number
    microchipDate: number
    dnaProfile: number
    tagId: number
    tattoo: number
    coi: number
    hipDysplasia: number
    elbowDysplasia: number
    patellaLuxation: number
    healthDocsUrls: number
    sireId: number
    damId: number
    createdAt: number
    updatedAt: number
    pedigreeDocUrl: number
    pedigreeId: number
    _all: number
  }


  export type DogAvgAggregateInputType = {
    height?: true
  }

  export type DogSumAggregateInputType = {
    height?: true
  }

  export type DogMinAggregateInputType = {
    id?: true
    registrySystem?: true
    nickname?: true
    name?: true
    registrationName?: true
    breed?: true
    variety?: true
    birthDate?: true
    color?: true
    arrivalDate?: true
    height?: true
    nationality?: true
    sex?: true
    temperament?: true
    status?: true
    showGenealogy?: true
    notes?: true
    coat?: true
    profilePhoto?: true
    media?: true
    videos?: true
    microchip?: true
    microchipDate?: true
    dnaProfile?: true
    tagId?: true
    tattoo?: true
    coi?: true
    hipDysplasia?: true
    elbowDysplasia?: true
    patellaLuxation?: true
    healthDocsUrls?: true
    sireId?: true
    damId?: true
    createdAt?: true
    updatedAt?: true
    pedigreeDocUrl?: true
    pedigreeId?: true
  }

  export type DogMaxAggregateInputType = {
    id?: true
    registrySystem?: true
    nickname?: true
    name?: true
    registrationName?: true
    breed?: true
    variety?: true
    birthDate?: true
    color?: true
    arrivalDate?: true
    height?: true
    nationality?: true
    sex?: true
    temperament?: true
    status?: true
    showGenealogy?: true
    notes?: true
    coat?: true
    profilePhoto?: true
    media?: true
    videos?: true
    microchip?: true
    microchipDate?: true
    dnaProfile?: true
    tagId?: true
    tattoo?: true
    coi?: true
    hipDysplasia?: true
    elbowDysplasia?: true
    patellaLuxation?: true
    healthDocsUrls?: true
    sireId?: true
    damId?: true
    createdAt?: true
    updatedAt?: true
    pedigreeDocUrl?: true
    pedigreeId?: true
  }

  export type DogCountAggregateInputType = {
    id?: true
    registrySystem?: true
    nickname?: true
    name?: true
    registrationName?: true
    breed?: true
    variety?: true
    birthDate?: true
    color?: true
    arrivalDate?: true
    height?: true
    nationality?: true
    sex?: true
    temperament?: true
    status?: true
    showGenealogy?: true
    notes?: true
    coat?: true
    profilePhoto?: true
    media?: true
    videos?: true
    microchip?: true
    microchipDate?: true
    dnaProfile?: true
    tagId?: true
    tattoo?: true
    coi?: true
    hipDysplasia?: true
    elbowDysplasia?: true
    patellaLuxation?: true
    healthDocsUrls?: true
    sireId?: true
    damId?: true
    createdAt?: true
    updatedAt?: true
    pedigreeDocUrl?: true
    pedigreeId?: true
    _all?: true
  }

  export type DogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dog to aggregate.
     */
    where?: DogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dogs to fetch.
     */
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dogs
    **/
    _count?: true | DogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DogMaxAggregateInputType
  }

  export type GetDogAggregateType<T extends DogAggregateArgs> = {
        [P in keyof T & keyof AggregateDog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDog[P]>
      : GetScalarType<T[P], AggregateDog[P]>
  }




  export type DogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DogWhereInput
    orderBy?: DogOrderByWithAggregationInput | DogOrderByWithAggregationInput[]
    by: DogScalarFieldEnum[] | DogScalarFieldEnum
    having?: DogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DogCountAggregateInputType | true
    _avg?: DogAvgAggregateInputType
    _sum?: DogSumAggregateInputType
    _min?: DogMinAggregateInputType
    _max?: DogMaxAggregateInputType
  }

  export type DogGroupByOutputType = {
    id: string
    registrySystem: string | null
    nickname: string | null
    name: string
    registrationName: string | null
    breed: string
    variety: string | null
    birthDate: Date | null
    color: string
    arrivalDate: Date | null
    height: number | null
    nationality: string | null
    sex: string
    temperament: string | null
    status: string
    showGenealogy: boolean
    notes: string | null
    coat: string | null
    profilePhoto: string | null
    media: string | null
    videos: string | null
    microchip: string | null
    microchipDate: Date | null
    dnaProfile: string | null
    tagId: string | null
    tattoo: string | null
    coi: string | null
    hipDysplasia: string | null
    elbowDysplasia: string | null
    patellaLuxation: string | null
    healthDocsUrls: string | null
    sireId: string | null
    damId: string | null
    createdAt: Date
    updatedAt: Date
    pedigreeDocUrl: string | null
    pedigreeId: string | null
    _count: DogCountAggregateOutputType | null
    _avg: DogAvgAggregateOutputType | null
    _sum: DogSumAggregateOutputType | null
    _min: DogMinAggregateOutputType | null
    _max: DogMaxAggregateOutputType | null
  }

  type GetDogGroupByPayload<T extends DogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DogGroupByOutputType[P]>
            : GetScalarType<T[P], DogGroupByOutputType[P]>
        }
      >
    >


  export type DogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrySystem?: boolean
    nickname?: boolean
    name?: boolean
    registrationName?: boolean
    breed?: boolean
    variety?: boolean
    birthDate?: boolean
    color?: boolean
    arrivalDate?: boolean
    height?: boolean
    nationality?: boolean
    sex?: boolean
    temperament?: boolean
    status?: boolean
    showGenealogy?: boolean
    notes?: boolean
    coat?: boolean
    profilePhoto?: boolean
    media?: boolean
    videos?: boolean
    microchip?: boolean
    microchipDate?: boolean
    dnaProfile?: boolean
    tagId?: boolean
    tattoo?: boolean
    coi?: boolean
    hipDysplasia?: boolean
    elbowDysplasia?: boolean
    patellaLuxation?: boolean
    healthDocsUrls?: boolean
    sireId?: boolean
    damId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pedigreeDocUrl?: boolean
    pedigreeId?: boolean
    Dog_Dog_damIdToDog?: boolean | Dog$Dog_Dog_damIdToDogArgs<ExtArgs>
    other_Dog_Dog_damIdToDog?: boolean | Dog$other_Dog_Dog_damIdToDogArgs<ExtArgs>
    Dog_Dog_sireIdToDog?: boolean | Dog$Dog_Dog_sireIdToDogArgs<ExtArgs>
    other_Dog_Dog_sireIdToDog?: boolean | Dog$other_Dog_Dog_sireIdToDogArgs<ExtArgs>
    Litter_Litter_damIdToDog?: boolean | Dog$Litter_Litter_damIdToDogArgs<ExtArgs>
    Litter_Litter_sireIdToDog?: boolean | Dog$Litter_Litter_sireIdToDogArgs<ExtArgs>
    Vaccine?: boolean | Dog$VaccineArgs<ExtArgs>
    _count?: boolean | DogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dog"]>

  export type DogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    registrySystem?: boolean
    nickname?: boolean
    name?: boolean
    registrationName?: boolean
    breed?: boolean
    variety?: boolean
    birthDate?: boolean
    color?: boolean
    arrivalDate?: boolean
    height?: boolean
    nationality?: boolean
    sex?: boolean
    temperament?: boolean
    status?: boolean
    showGenealogy?: boolean
    notes?: boolean
    coat?: boolean
    profilePhoto?: boolean
    media?: boolean
    videos?: boolean
    microchip?: boolean
    microchipDate?: boolean
    dnaProfile?: boolean
    tagId?: boolean
    tattoo?: boolean
    coi?: boolean
    hipDysplasia?: boolean
    elbowDysplasia?: boolean
    patellaLuxation?: boolean
    healthDocsUrls?: boolean
    sireId?: boolean
    damId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pedigreeDocUrl?: boolean
    pedigreeId?: boolean
    Dog_Dog_damIdToDog?: boolean | Dog$Dog_Dog_damIdToDogArgs<ExtArgs>
    Dog_Dog_sireIdToDog?: boolean | Dog$Dog_Dog_sireIdToDogArgs<ExtArgs>
  }, ExtArgs["result"]["dog"]>

  export type DogSelectScalar = {
    id?: boolean
    registrySystem?: boolean
    nickname?: boolean
    name?: boolean
    registrationName?: boolean
    breed?: boolean
    variety?: boolean
    birthDate?: boolean
    color?: boolean
    arrivalDate?: boolean
    height?: boolean
    nationality?: boolean
    sex?: boolean
    temperament?: boolean
    status?: boolean
    showGenealogy?: boolean
    notes?: boolean
    coat?: boolean
    profilePhoto?: boolean
    media?: boolean
    videos?: boolean
    microchip?: boolean
    microchipDate?: boolean
    dnaProfile?: boolean
    tagId?: boolean
    tattoo?: boolean
    coi?: boolean
    hipDysplasia?: boolean
    elbowDysplasia?: boolean
    patellaLuxation?: boolean
    healthDocsUrls?: boolean
    sireId?: boolean
    damId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pedigreeDocUrl?: boolean
    pedigreeId?: boolean
  }

  export type DogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dog_Dog_damIdToDog?: boolean | Dog$Dog_Dog_damIdToDogArgs<ExtArgs>
    other_Dog_Dog_damIdToDog?: boolean | Dog$other_Dog_Dog_damIdToDogArgs<ExtArgs>
    Dog_Dog_sireIdToDog?: boolean | Dog$Dog_Dog_sireIdToDogArgs<ExtArgs>
    other_Dog_Dog_sireIdToDog?: boolean | Dog$other_Dog_Dog_sireIdToDogArgs<ExtArgs>
    Litter_Litter_damIdToDog?: boolean | Dog$Litter_Litter_damIdToDogArgs<ExtArgs>
    Litter_Litter_sireIdToDog?: boolean | Dog$Litter_Litter_sireIdToDogArgs<ExtArgs>
    Vaccine?: boolean | Dog$VaccineArgs<ExtArgs>
    _count?: boolean | DogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dog_Dog_damIdToDog?: boolean | Dog$Dog_Dog_damIdToDogArgs<ExtArgs>
    Dog_Dog_sireIdToDog?: boolean | Dog$Dog_Dog_sireIdToDogArgs<ExtArgs>
  }

  export type $DogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dog"
    objects: {
      Dog_Dog_damIdToDog: Prisma.$DogPayload<ExtArgs> | null
      other_Dog_Dog_damIdToDog: Prisma.$DogPayload<ExtArgs>[]
      Dog_Dog_sireIdToDog: Prisma.$DogPayload<ExtArgs> | null
      other_Dog_Dog_sireIdToDog: Prisma.$DogPayload<ExtArgs>[]
      Litter_Litter_damIdToDog: Prisma.$LitterPayload<ExtArgs>[]
      Litter_Litter_sireIdToDog: Prisma.$LitterPayload<ExtArgs>[]
      Vaccine: Prisma.$VaccinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      registrySystem: string | null
      nickname: string | null
      name: string
      registrationName: string | null
      breed: string
      variety: string | null
      birthDate: Date | null
      color: string
      arrivalDate: Date | null
      height: number | null
      nationality: string | null
      sex: string
      temperament: string | null
      status: string
      showGenealogy: boolean
      notes: string | null
      coat: string | null
      profilePhoto: string | null
      media: string | null
      videos: string | null
      microchip: string | null
      microchipDate: Date | null
      dnaProfile: string | null
      tagId: string | null
      tattoo: string | null
      coi: string | null
      hipDysplasia: string | null
      elbowDysplasia: string | null
      patellaLuxation: string | null
      healthDocsUrls: string | null
      sireId: string | null
      damId: string | null
      createdAt: Date
      updatedAt: Date
      pedigreeDocUrl: string | null
      pedigreeId: string | null
    }, ExtArgs["result"]["dog"]>
    composites: {}
  }

  type DogGetPayload<S extends boolean | null | undefined | DogDefaultArgs> = $Result.GetResult<Prisma.$DogPayload, S>

  type DogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DogCountAggregateInputType | true
    }

  export interface DogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dog'], meta: { name: 'Dog' } }
    /**
     * Find zero or one Dog that matches the filter.
     * @param {DogFindUniqueArgs} args - Arguments to find a Dog
     * @example
     * // Get one Dog
     * const dog = await prisma.dog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DogFindUniqueArgs>(args: SelectSubset<T, DogFindUniqueArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Dog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DogFindUniqueOrThrowArgs} args - Arguments to find a Dog
     * @example
     * // Get one Dog
     * const dog = await prisma.dog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DogFindUniqueOrThrowArgs>(args: SelectSubset<T, DogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Dog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogFindFirstArgs} args - Arguments to find a Dog
     * @example
     * // Get one Dog
     * const dog = await prisma.dog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DogFindFirstArgs>(args?: SelectSubset<T, DogFindFirstArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Dog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogFindFirstOrThrowArgs} args - Arguments to find a Dog
     * @example
     * // Get one Dog
     * const dog = await prisma.dog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DogFindFirstOrThrowArgs>(args?: SelectSubset<T, DogFindFirstOrThrowArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Dogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dogs
     * const dogs = await prisma.dog.findMany()
     * 
     * // Get first 10 Dogs
     * const dogs = await prisma.dog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dogWithIdOnly = await prisma.dog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DogFindManyArgs>(args?: SelectSubset<T, DogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Dog.
     * @param {DogCreateArgs} args - Arguments to create a Dog.
     * @example
     * // Create one Dog
     * const Dog = await prisma.dog.create({
     *   data: {
     *     // ... data to create a Dog
     *   }
     * })
     * 
     */
    create<T extends DogCreateArgs>(args: SelectSubset<T, DogCreateArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Dogs.
     * @param {DogCreateManyArgs} args - Arguments to create many Dogs.
     * @example
     * // Create many Dogs
     * const dog = await prisma.dog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DogCreateManyArgs>(args?: SelectSubset<T, DogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dogs and returns the data saved in the database.
     * @param {DogCreateManyAndReturnArgs} args - Arguments to create many Dogs.
     * @example
     * // Create many Dogs
     * const dog = await prisma.dog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dogs and only return the `id`
     * const dogWithIdOnly = await prisma.dog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DogCreateManyAndReturnArgs>(args?: SelectSubset<T, DogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Dog.
     * @param {DogDeleteArgs} args - Arguments to delete one Dog.
     * @example
     * // Delete one Dog
     * const Dog = await prisma.dog.delete({
     *   where: {
     *     // ... filter to delete one Dog
     *   }
     * })
     * 
     */
    delete<T extends DogDeleteArgs>(args: SelectSubset<T, DogDeleteArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Dog.
     * @param {DogUpdateArgs} args - Arguments to update one Dog.
     * @example
     * // Update one Dog
     * const dog = await prisma.dog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DogUpdateArgs>(args: SelectSubset<T, DogUpdateArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Dogs.
     * @param {DogDeleteManyArgs} args - Arguments to filter Dogs to delete.
     * @example
     * // Delete a few Dogs
     * const { count } = await prisma.dog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DogDeleteManyArgs>(args?: SelectSubset<T, DogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dogs
     * const dog = await prisma.dog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DogUpdateManyArgs>(args: SelectSubset<T, DogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dog.
     * @param {DogUpsertArgs} args - Arguments to update or create a Dog.
     * @example
     * // Update or create a Dog
     * const dog = await prisma.dog.upsert({
     *   create: {
     *     // ... data to create a Dog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dog we want to update
     *   }
     * })
     */
    upsert<T extends DogUpsertArgs>(args: SelectSubset<T, DogUpsertArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Dogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogCountArgs} args - Arguments to filter Dogs to count.
     * @example
     * // Count the number of Dogs
     * const count = await prisma.dog.count({
     *   where: {
     *     // ... the filter for the Dogs we want to count
     *   }
     * })
    **/
    count<T extends DogCountArgs>(
      args?: Subset<T, DogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DogAggregateArgs>(args: Subset<T, DogAggregateArgs>): Prisma.PrismaPromise<GetDogAggregateType<T>>

    /**
     * Group by Dog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DogGroupByArgs} args - Group by arguments.
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
      T extends DogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DogGroupByArgs['orderBy'] }
        : { orderBy?: DogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dog model
   */
  readonly fields: DogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Dog_Dog_damIdToDog<T extends Dog$Dog_Dog_damIdToDogArgs<ExtArgs> = {}>(args?: Subset<T, Dog$Dog_Dog_damIdToDogArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    other_Dog_Dog_damIdToDog<T extends Dog$other_Dog_Dog_damIdToDogArgs<ExtArgs> = {}>(args?: Subset<T, Dog$other_Dog_Dog_damIdToDogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findMany"> | Null>
    Dog_Dog_sireIdToDog<T extends Dog$Dog_Dog_sireIdToDogArgs<ExtArgs> = {}>(args?: Subset<T, Dog$Dog_Dog_sireIdToDogArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    other_Dog_Dog_sireIdToDog<T extends Dog$other_Dog_Dog_sireIdToDogArgs<ExtArgs> = {}>(args?: Subset<T, Dog$other_Dog_Dog_sireIdToDogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findMany"> | Null>
    Litter_Litter_damIdToDog<T extends Dog$Litter_Litter_damIdToDogArgs<ExtArgs> = {}>(args?: Subset<T, Dog$Litter_Litter_damIdToDogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "findMany"> | Null>
    Litter_Litter_sireIdToDog<T extends Dog$Litter_Litter_sireIdToDogArgs<ExtArgs> = {}>(args?: Subset<T, Dog$Litter_Litter_sireIdToDogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "findMany"> | Null>
    Vaccine<T extends Dog$VaccineArgs<ExtArgs> = {}>(args?: Subset<T, Dog$VaccineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Dog model
   */ 
  interface DogFieldRefs {
    readonly id: FieldRef<"Dog", 'String'>
    readonly registrySystem: FieldRef<"Dog", 'String'>
    readonly nickname: FieldRef<"Dog", 'String'>
    readonly name: FieldRef<"Dog", 'String'>
    readonly registrationName: FieldRef<"Dog", 'String'>
    readonly breed: FieldRef<"Dog", 'String'>
    readonly variety: FieldRef<"Dog", 'String'>
    readonly birthDate: FieldRef<"Dog", 'DateTime'>
    readonly color: FieldRef<"Dog", 'String'>
    readonly arrivalDate: FieldRef<"Dog", 'DateTime'>
    readonly height: FieldRef<"Dog", 'Float'>
    readonly nationality: FieldRef<"Dog", 'String'>
    readonly sex: FieldRef<"Dog", 'String'>
    readonly temperament: FieldRef<"Dog", 'String'>
    readonly status: FieldRef<"Dog", 'String'>
    readonly showGenealogy: FieldRef<"Dog", 'Boolean'>
    readonly notes: FieldRef<"Dog", 'String'>
    readonly coat: FieldRef<"Dog", 'String'>
    readonly profilePhoto: FieldRef<"Dog", 'String'>
    readonly media: FieldRef<"Dog", 'String'>
    readonly videos: FieldRef<"Dog", 'String'>
    readonly microchip: FieldRef<"Dog", 'String'>
    readonly microchipDate: FieldRef<"Dog", 'DateTime'>
    readonly dnaProfile: FieldRef<"Dog", 'String'>
    readonly tagId: FieldRef<"Dog", 'String'>
    readonly tattoo: FieldRef<"Dog", 'String'>
    readonly coi: FieldRef<"Dog", 'String'>
    readonly hipDysplasia: FieldRef<"Dog", 'String'>
    readonly elbowDysplasia: FieldRef<"Dog", 'String'>
    readonly patellaLuxation: FieldRef<"Dog", 'String'>
    readonly healthDocsUrls: FieldRef<"Dog", 'String'>
    readonly sireId: FieldRef<"Dog", 'String'>
    readonly damId: FieldRef<"Dog", 'String'>
    readonly createdAt: FieldRef<"Dog", 'DateTime'>
    readonly updatedAt: FieldRef<"Dog", 'DateTime'>
    readonly pedigreeDocUrl: FieldRef<"Dog", 'String'>
    readonly pedigreeId: FieldRef<"Dog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dog findUnique
   */
  export type DogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter, which Dog to fetch.
     */
    where: DogWhereUniqueInput
  }

  /**
   * Dog findUniqueOrThrow
   */
  export type DogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter, which Dog to fetch.
     */
    where: DogWhereUniqueInput
  }

  /**
   * Dog findFirst
   */
  export type DogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter, which Dog to fetch.
     */
    where?: DogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dogs to fetch.
     */
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dogs.
     */
    cursor?: DogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dogs.
     */
    distinct?: DogScalarFieldEnum | DogScalarFieldEnum[]
  }

  /**
   * Dog findFirstOrThrow
   */
  export type DogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter, which Dog to fetch.
     */
    where?: DogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dogs to fetch.
     */
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dogs.
     */
    cursor?: DogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dogs.
     */
    distinct?: DogScalarFieldEnum | DogScalarFieldEnum[]
  }

  /**
   * Dog findMany
   */
  export type DogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter, which Dogs to fetch.
     */
    where?: DogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dogs to fetch.
     */
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dogs.
     */
    cursor?: DogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dogs.
     */
    skip?: number
    distinct?: DogScalarFieldEnum | DogScalarFieldEnum[]
  }

  /**
   * Dog create
   */
  export type DogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * The data needed to create a Dog.
     */
    data: XOR<DogCreateInput, DogUncheckedCreateInput>
  }

  /**
   * Dog createMany
   */
  export type DogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dogs.
     */
    data: DogCreateManyInput | DogCreateManyInput[]
  }

  /**
   * Dog createManyAndReturn
   */
  export type DogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Dogs.
     */
    data: DogCreateManyInput | DogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dog update
   */
  export type DogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * The data needed to update a Dog.
     */
    data: XOR<DogUpdateInput, DogUncheckedUpdateInput>
    /**
     * Choose, which Dog to update.
     */
    where: DogWhereUniqueInput
  }

  /**
   * Dog updateMany
   */
  export type DogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dogs.
     */
    data: XOR<DogUpdateManyMutationInput, DogUncheckedUpdateManyInput>
    /**
     * Filter which Dogs to update
     */
    where?: DogWhereInput
  }

  /**
   * Dog upsert
   */
  export type DogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * The filter to search for the Dog to update in case it exists.
     */
    where: DogWhereUniqueInput
    /**
     * In case the Dog found by the `where` argument doesn't exist, create a new Dog with this data.
     */
    create: XOR<DogCreateInput, DogUncheckedCreateInput>
    /**
     * In case the Dog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DogUpdateInput, DogUncheckedUpdateInput>
  }

  /**
   * Dog delete
   */
  export type DogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    /**
     * Filter which Dog to delete.
     */
    where: DogWhereUniqueInput
  }

  /**
   * Dog deleteMany
   */
  export type DogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dogs to delete
     */
    where?: DogWhereInput
  }

  /**
   * Dog.Dog_Dog_damIdToDog
   */
  export type Dog$Dog_Dog_damIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    where?: DogWhereInput
  }

  /**
   * Dog.other_Dog_Dog_damIdToDog
   */
  export type Dog$other_Dog_Dog_damIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    where?: DogWhereInput
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    cursor?: DogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DogScalarFieldEnum | DogScalarFieldEnum[]
  }

  /**
   * Dog.Dog_Dog_sireIdToDog
   */
  export type Dog$Dog_Dog_sireIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    where?: DogWhereInput
  }

  /**
   * Dog.other_Dog_Dog_sireIdToDog
   */
  export type Dog$other_Dog_Dog_sireIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    where?: DogWhereInput
    orderBy?: DogOrderByWithRelationInput | DogOrderByWithRelationInput[]
    cursor?: DogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DogScalarFieldEnum | DogScalarFieldEnum[]
  }

  /**
   * Dog.Litter_Litter_damIdToDog
   */
  export type Dog$Litter_Litter_damIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    where?: LitterWhereInput
    orderBy?: LitterOrderByWithRelationInput | LitterOrderByWithRelationInput[]
    cursor?: LitterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LitterScalarFieldEnum | LitterScalarFieldEnum[]
  }

  /**
   * Dog.Litter_Litter_sireIdToDog
   */
  export type Dog$Litter_Litter_sireIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    where?: LitterWhereInput
    orderBy?: LitterOrderByWithRelationInput | LitterOrderByWithRelationInput[]
    cursor?: LitterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LitterScalarFieldEnum | LitterScalarFieldEnum[]
  }

  /**
   * Dog.Vaccine
   */
  export type Dog$VaccineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    where?: VaccineWhereInput
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    cursor?: VaccineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Dog without action
   */
  export type DogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
  }


  /**
   * Model Lead
   */

  export type AggregateLead = {
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  export type LeadMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    interest: string | null
    status: string | null
    answers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    interest: string | null
    status: string | null
    answers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LeadCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    interest: number
    status: number
    answers: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LeadMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    interest?: true
    status?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    interest?: true
    status?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LeadCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    interest?: true
    status?: true
    answers?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lead to aggregate.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leads
    **/
    _count?: true | LeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeadMaxAggregateInputType
  }

  export type GetLeadAggregateType<T extends LeadAggregateArgs> = {
        [P in keyof T & keyof AggregateLead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLead[P]>
      : GetScalarType<T[P], AggregateLead[P]>
  }




  export type LeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeadWhereInput
    orderBy?: LeadOrderByWithAggregationInput | LeadOrderByWithAggregationInput[]
    by: LeadScalarFieldEnum[] | LeadScalarFieldEnum
    having?: LeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeadCountAggregateInputType | true
    _min?: LeadMinAggregateInputType
    _max?: LeadMaxAggregateInputType
  }

  export type LeadGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    interest: string
    status: string
    answers: string
    createdAt: Date
    updatedAt: Date
    _count: LeadCountAggregateOutputType | null
    _min: LeadMinAggregateOutputType | null
    _max: LeadMaxAggregateOutputType | null
  }

  type GetLeadGroupByPayload<T extends LeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeadGroupByOutputType[P]>
            : GetScalarType<T[P], LeadGroupByOutputType[P]>
        }
      >
    >


  export type LeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    interest?: boolean
    status?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    interest?: boolean
    status?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lead"]>

  export type LeadSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    interest?: boolean
    status?: boolean
    answers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $LeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lead"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      interest: string
      status: string
      answers: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lead"]>
    composites: {}
  }

  type LeadGetPayload<S extends boolean | null | undefined | LeadDefaultArgs> = $Result.GetResult<Prisma.$LeadPayload, S>

  type LeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LeadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LeadCountAggregateInputType | true
    }

  export interface LeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lead'], meta: { name: 'Lead' } }
    /**
     * Find zero or one Lead that matches the filter.
     * @param {LeadFindUniqueArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeadFindUniqueArgs>(args: SelectSubset<T, LeadFindUniqueArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lead that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LeadFindUniqueOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeadFindUniqueOrThrowArgs>(args: SelectSubset<T, LeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeadFindFirstArgs>(args?: SelectSubset<T, LeadFindFirstArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindFirstOrThrowArgs} args - Arguments to find a Lead
     * @example
     * // Get one Lead
     * const lead = await prisma.lead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeadFindFirstOrThrowArgs>(args?: SelectSubset<T, LeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Leads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leads
     * const leads = await prisma.lead.findMany()
     * 
     * // Get first 10 Leads
     * const leads = await prisma.lead.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leadWithIdOnly = await prisma.lead.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeadFindManyArgs>(args?: SelectSubset<T, LeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lead.
     * @param {LeadCreateArgs} args - Arguments to create a Lead.
     * @example
     * // Create one Lead
     * const Lead = await prisma.lead.create({
     *   data: {
     *     // ... data to create a Lead
     *   }
     * })
     * 
     */
    create<T extends LeadCreateArgs>(args: SelectSubset<T, LeadCreateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Leads.
     * @param {LeadCreateManyArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeadCreateManyArgs>(args?: SelectSubset<T, LeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leads and returns the data saved in the database.
     * @param {LeadCreateManyAndReturnArgs} args - Arguments to create many Leads.
     * @example
     * // Create many Leads
     * const lead = await prisma.lead.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leads and only return the `id`
     * const leadWithIdOnly = await prisma.lead.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeadCreateManyAndReturnArgs>(args?: SelectSubset<T, LeadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Lead.
     * @param {LeadDeleteArgs} args - Arguments to delete one Lead.
     * @example
     * // Delete one Lead
     * const Lead = await prisma.lead.delete({
     *   where: {
     *     // ... filter to delete one Lead
     *   }
     * })
     * 
     */
    delete<T extends LeadDeleteArgs>(args: SelectSubset<T, LeadDeleteArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lead.
     * @param {LeadUpdateArgs} args - Arguments to update one Lead.
     * @example
     * // Update one Lead
     * const lead = await prisma.lead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeadUpdateArgs>(args: SelectSubset<T, LeadUpdateArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Leads.
     * @param {LeadDeleteManyArgs} args - Arguments to filter Leads to delete.
     * @example
     * // Delete a few Leads
     * const { count } = await prisma.lead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeadDeleteManyArgs>(args?: SelectSubset<T, LeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leads
     * const lead = await prisma.lead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeadUpdateManyArgs>(args: SelectSubset<T, LeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lead.
     * @param {LeadUpsertArgs} args - Arguments to update or create a Lead.
     * @example
     * // Update or create a Lead
     * const lead = await prisma.lead.upsert({
     *   create: {
     *     // ... data to create a Lead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lead we want to update
     *   }
     * })
     */
    upsert<T extends LeadUpsertArgs>(args: SelectSubset<T, LeadUpsertArgs<ExtArgs>>): Prisma__LeadClient<$Result.GetResult<Prisma.$LeadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Leads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadCountArgs} args - Arguments to filter Leads to count.
     * @example
     * // Count the number of Leads
     * const count = await prisma.lead.count({
     *   where: {
     *     // ... the filter for the Leads we want to count
     *   }
     * })
    **/
    count<T extends LeadCountArgs>(
      args?: Subset<T, LeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeadAggregateArgs>(args: Subset<T, LeadAggregateArgs>): Prisma.PrismaPromise<GetLeadAggregateType<T>>

    /**
     * Group by Lead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeadGroupByArgs} args - Group by arguments.
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
      T extends LeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeadGroupByArgs['orderBy'] }
        : { orderBy?: LeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lead model
   */
  readonly fields: LeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Lead model
   */ 
  interface LeadFieldRefs {
    readonly id: FieldRef<"Lead", 'String'>
    readonly name: FieldRef<"Lead", 'String'>
    readonly email: FieldRef<"Lead", 'String'>
    readonly phone: FieldRef<"Lead", 'String'>
    readonly interest: FieldRef<"Lead", 'String'>
    readonly status: FieldRef<"Lead", 'String'>
    readonly answers: FieldRef<"Lead", 'String'>
    readonly createdAt: FieldRef<"Lead", 'DateTime'>
    readonly updatedAt: FieldRef<"Lead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lead findUnique
   */
  export type LeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findUniqueOrThrow
   */
  export type LeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead findFirst
   */
  export type LeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findFirstOrThrow
   */
  export type LeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Filter, which Lead to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leads.
     */
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead findMany
   */
  export type LeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Filter, which Leads to fetch.
     */
    where?: LeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leads to fetch.
     */
    orderBy?: LeadOrderByWithRelationInput | LeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leads.
     */
    cursor?: LeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leads.
     */
    skip?: number
    distinct?: LeadScalarFieldEnum | LeadScalarFieldEnum[]
  }

  /**
   * Lead create
   */
  export type LeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * The data needed to create a Lead.
     */
    data: XOR<LeadCreateInput, LeadUncheckedCreateInput>
  }

  /**
   * Lead createMany
   */
  export type LeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
  }

  /**
   * Lead createManyAndReturn
   */
  export type LeadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Leads.
     */
    data: LeadCreateManyInput | LeadCreateManyInput[]
  }

  /**
   * Lead update
   */
  export type LeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * The data needed to update a Lead.
     */
    data: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
    /**
     * Choose, which Lead to update.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead updateMany
   */
  export type LeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leads.
     */
    data: XOR<LeadUpdateManyMutationInput, LeadUncheckedUpdateManyInput>
    /**
     * Filter which Leads to update
     */
    where?: LeadWhereInput
  }

  /**
   * Lead upsert
   */
  export type LeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * The filter to search for the Lead to update in case it exists.
     */
    where: LeadWhereUniqueInput
    /**
     * In case the Lead found by the `where` argument doesn't exist, create a new Lead with this data.
     */
    create: XOR<LeadCreateInput, LeadUncheckedCreateInput>
    /**
     * In case the Lead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeadUpdateInput, LeadUncheckedUpdateInput>
  }

  /**
   * Lead delete
   */
  export type LeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
    /**
     * Filter which Lead to delete.
     */
    where: LeadWhereUniqueInput
  }

  /**
   * Lead deleteMany
   */
  export type LeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leads to delete
     */
    where?: LeadWhereInput
  }

  /**
   * Lead without action
   */
  export type LeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lead
     */
    select?: LeadSelect<ExtArgs> | null
  }


  /**
   * Model Litter
   */

  export type AggregateLitter = {
    _count: LitterCountAggregateOutputType | null
    _avg: LitterAvgAggregateOutputType | null
    _sum: LitterSumAggregateOutputType | null
    _min: LitterMinAggregateOutputType | null
    _max: LitterMaxAggregateOutputType | null
  }

  export type LitterAvgAggregateOutputType = {
    price: number | null
  }

  export type LitterSumAggregateOutputType = {
    price: number | null
  }

  export type LitterMinAggregateOutputType = {
    id: string | null
    title: string | null
    matingDate: Date | null
    expectedBirthDate: Date | null
    birthDate: Date | null
    status: string | null
    sireId: string | null
    damId: string | null
    media: string | null
    createdAt: Date | null
    updatedAt: Date | null
    price: number | null
  }

  export type LitterMaxAggregateOutputType = {
    id: string | null
    title: string | null
    matingDate: Date | null
    expectedBirthDate: Date | null
    birthDate: Date | null
    status: string | null
    sireId: string | null
    damId: string | null
    media: string | null
    createdAt: Date | null
    updatedAt: Date | null
    price: number | null
  }

  export type LitterCountAggregateOutputType = {
    id: number
    title: number
    matingDate: number
    expectedBirthDate: number
    birthDate: number
    status: number
    sireId: number
    damId: number
    media: number
    createdAt: number
    updatedAt: number
    price: number
    _all: number
  }


  export type LitterAvgAggregateInputType = {
    price?: true
  }

  export type LitterSumAggregateInputType = {
    price?: true
  }

  export type LitterMinAggregateInputType = {
    id?: true
    title?: true
    matingDate?: true
    expectedBirthDate?: true
    birthDate?: true
    status?: true
    sireId?: true
    damId?: true
    media?: true
    createdAt?: true
    updatedAt?: true
    price?: true
  }

  export type LitterMaxAggregateInputType = {
    id?: true
    title?: true
    matingDate?: true
    expectedBirthDate?: true
    birthDate?: true
    status?: true
    sireId?: true
    damId?: true
    media?: true
    createdAt?: true
    updatedAt?: true
    price?: true
  }

  export type LitterCountAggregateInputType = {
    id?: true
    title?: true
    matingDate?: true
    expectedBirthDate?: true
    birthDate?: true
    status?: true
    sireId?: true
    damId?: true
    media?: true
    createdAt?: true
    updatedAt?: true
    price?: true
    _all?: true
  }

  export type LitterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Litter to aggregate.
     */
    where?: LitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Litters to fetch.
     */
    orderBy?: LitterOrderByWithRelationInput | LitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Litters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Litters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Litters
    **/
    _count?: true | LitterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LitterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LitterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LitterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LitterMaxAggregateInputType
  }

  export type GetLitterAggregateType<T extends LitterAggregateArgs> = {
        [P in keyof T & keyof AggregateLitter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLitter[P]>
      : GetScalarType<T[P], AggregateLitter[P]>
  }




  export type LitterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LitterWhereInput
    orderBy?: LitterOrderByWithAggregationInput | LitterOrderByWithAggregationInput[]
    by: LitterScalarFieldEnum[] | LitterScalarFieldEnum
    having?: LitterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LitterCountAggregateInputType | true
    _avg?: LitterAvgAggregateInputType
    _sum?: LitterSumAggregateInputType
    _min?: LitterMinAggregateInputType
    _max?: LitterMaxAggregateInputType
  }

  export type LitterGroupByOutputType = {
    id: string
    title: string | null
    matingDate: Date | null
    expectedBirthDate: Date | null
    birthDate: Date | null
    status: string
    sireId: string | null
    damId: string | null
    media: string | null
    createdAt: Date
    updatedAt: Date
    price: number | null
    _count: LitterCountAggregateOutputType | null
    _avg: LitterAvgAggregateOutputType | null
    _sum: LitterSumAggregateOutputType | null
    _min: LitterMinAggregateOutputType | null
    _max: LitterMaxAggregateOutputType | null
  }

  type GetLitterGroupByPayload<T extends LitterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LitterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LitterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LitterGroupByOutputType[P]>
            : GetScalarType<T[P], LitterGroupByOutputType[P]>
        }
      >
    >


  export type LitterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    matingDate?: boolean
    expectedBirthDate?: boolean
    birthDate?: boolean
    status?: boolean
    sireId?: boolean
    damId?: boolean
    media?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    price?: boolean
    Dog_Litter_damIdToDog?: boolean | Litter$Dog_Litter_damIdToDogArgs<ExtArgs>
    Dog_Litter_sireIdToDog?: boolean | Litter$Dog_Litter_sireIdToDogArgs<ExtArgs>
    Puppy?: boolean | Litter$PuppyArgs<ExtArgs>
    _count?: boolean | LitterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["litter"]>

  export type LitterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    matingDate?: boolean
    expectedBirthDate?: boolean
    birthDate?: boolean
    status?: boolean
    sireId?: boolean
    damId?: boolean
    media?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    price?: boolean
    Dog_Litter_damIdToDog?: boolean | Litter$Dog_Litter_damIdToDogArgs<ExtArgs>
    Dog_Litter_sireIdToDog?: boolean | Litter$Dog_Litter_sireIdToDogArgs<ExtArgs>
  }, ExtArgs["result"]["litter"]>

  export type LitterSelectScalar = {
    id?: boolean
    title?: boolean
    matingDate?: boolean
    expectedBirthDate?: boolean
    birthDate?: boolean
    status?: boolean
    sireId?: boolean
    damId?: boolean
    media?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    price?: boolean
  }

  export type LitterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dog_Litter_damIdToDog?: boolean | Litter$Dog_Litter_damIdToDogArgs<ExtArgs>
    Dog_Litter_sireIdToDog?: boolean | Litter$Dog_Litter_sireIdToDogArgs<ExtArgs>
    Puppy?: boolean | Litter$PuppyArgs<ExtArgs>
    _count?: boolean | LitterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LitterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Dog_Litter_damIdToDog?: boolean | Litter$Dog_Litter_damIdToDogArgs<ExtArgs>
    Dog_Litter_sireIdToDog?: boolean | Litter$Dog_Litter_sireIdToDogArgs<ExtArgs>
  }

  export type $LitterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Litter"
    objects: {
      Dog_Litter_damIdToDog: Prisma.$DogPayload<ExtArgs> | null
      Dog_Litter_sireIdToDog: Prisma.$DogPayload<ExtArgs> | null
      Puppy: Prisma.$PuppyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      matingDate: Date | null
      expectedBirthDate: Date | null
      birthDate: Date | null
      status: string
      sireId: string | null
      damId: string | null
      media: string | null
      createdAt: Date
      updatedAt: Date
      price: number | null
    }, ExtArgs["result"]["litter"]>
    composites: {}
  }

  type LitterGetPayload<S extends boolean | null | undefined | LitterDefaultArgs> = $Result.GetResult<Prisma.$LitterPayload, S>

  type LitterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LitterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LitterCountAggregateInputType | true
    }

  export interface LitterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Litter'], meta: { name: 'Litter' } }
    /**
     * Find zero or one Litter that matches the filter.
     * @param {LitterFindUniqueArgs} args - Arguments to find a Litter
     * @example
     * // Get one Litter
     * const litter = await prisma.litter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LitterFindUniqueArgs>(args: SelectSubset<T, LitterFindUniqueArgs<ExtArgs>>): Prisma__LitterClient<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Litter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LitterFindUniqueOrThrowArgs} args - Arguments to find a Litter
     * @example
     * // Get one Litter
     * const litter = await prisma.litter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LitterFindUniqueOrThrowArgs>(args: SelectSubset<T, LitterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LitterClient<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Litter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LitterFindFirstArgs} args - Arguments to find a Litter
     * @example
     * // Get one Litter
     * const litter = await prisma.litter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LitterFindFirstArgs>(args?: SelectSubset<T, LitterFindFirstArgs<ExtArgs>>): Prisma__LitterClient<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Litter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LitterFindFirstOrThrowArgs} args - Arguments to find a Litter
     * @example
     * // Get one Litter
     * const litter = await prisma.litter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LitterFindFirstOrThrowArgs>(args?: SelectSubset<T, LitterFindFirstOrThrowArgs<ExtArgs>>): Prisma__LitterClient<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Litters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LitterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Litters
     * const litters = await prisma.litter.findMany()
     * 
     * // Get first 10 Litters
     * const litters = await prisma.litter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const litterWithIdOnly = await prisma.litter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LitterFindManyArgs>(args?: SelectSubset<T, LitterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Litter.
     * @param {LitterCreateArgs} args - Arguments to create a Litter.
     * @example
     * // Create one Litter
     * const Litter = await prisma.litter.create({
     *   data: {
     *     // ... data to create a Litter
     *   }
     * })
     * 
     */
    create<T extends LitterCreateArgs>(args: SelectSubset<T, LitterCreateArgs<ExtArgs>>): Prisma__LitterClient<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Litters.
     * @param {LitterCreateManyArgs} args - Arguments to create many Litters.
     * @example
     * // Create many Litters
     * const litter = await prisma.litter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LitterCreateManyArgs>(args?: SelectSubset<T, LitterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Litters and returns the data saved in the database.
     * @param {LitterCreateManyAndReturnArgs} args - Arguments to create many Litters.
     * @example
     * // Create many Litters
     * const litter = await prisma.litter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Litters and only return the `id`
     * const litterWithIdOnly = await prisma.litter.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LitterCreateManyAndReturnArgs>(args?: SelectSubset<T, LitterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Litter.
     * @param {LitterDeleteArgs} args - Arguments to delete one Litter.
     * @example
     * // Delete one Litter
     * const Litter = await prisma.litter.delete({
     *   where: {
     *     // ... filter to delete one Litter
     *   }
     * })
     * 
     */
    delete<T extends LitterDeleteArgs>(args: SelectSubset<T, LitterDeleteArgs<ExtArgs>>): Prisma__LitterClient<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Litter.
     * @param {LitterUpdateArgs} args - Arguments to update one Litter.
     * @example
     * // Update one Litter
     * const litter = await prisma.litter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LitterUpdateArgs>(args: SelectSubset<T, LitterUpdateArgs<ExtArgs>>): Prisma__LitterClient<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Litters.
     * @param {LitterDeleteManyArgs} args - Arguments to filter Litters to delete.
     * @example
     * // Delete a few Litters
     * const { count } = await prisma.litter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LitterDeleteManyArgs>(args?: SelectSubset<T, LitterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Litters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LitterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Litters
     * const litter = await prisma.litter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LitterUpdateManyArgs>(args: SelectSubset<T, LitterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Litter.
     * @param {LitterUpsertArgs} args - Arguments to update or create a Litter.
     * @example
     * // Update or create a Litter
     * const litter = await prisma.litter.upsert({
     *   create: {
     *     // ... data to create a Litter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Litter we want to update
     *   }
     * })
     */
    upsert<T extends LitterUpsertArgs>(args: SelectSubset<T, LitterUpsertArgs<ExtArgs>>): Prisma__LitterClient<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Litters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LitterCountArgs} args - Arguments to filter Litters to count.
     * @example
     * // Count the number of Litters
     * const count = await prisma.litter.count({
     *   where: {
     *     // ... the filter for the Litters we want to count
     *   }
     * })
    **/
    count<T extends LitterCountArgs>(
      args?: Subset<T, LitterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LitterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Litter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LitterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LitterAggregateArgs>(args: Subset<T, LitterAggregateArgs>): Prisma.PrismaPromise<GetLitterAggregateType<T>>

    /**
     * Group by Litter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LitterGroupByArgs} args - Group by arguments.
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
      T extends LitterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LitterGroupByArgs['orderBy'] }
        : { orderBy?: LitterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LitterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLitterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Litter model
   */
  readonly fields: LitterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Litter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LitterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Dog_Litter_damIdToDog<T extends Litter$Dog_Litter_damIdToDogArgs<ExtArgs> = {}>(args?: Subset<T, Litter$Dog_Litter_damIdToDogArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Dog_Litter_sireIdToDog<T extends Litter$Dog_Litter_sireIdToDogArgs<ExtArgs> = {}>(args?: Subset<T, Litter$Dog_Litter_sireIdToDogArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Puppy<T extends Litter$PuppyArgs<ExtArgs> = {}>(args?: Subset<T, Litter$PuppyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Litter model
   */ 
  interface LitterFieldRefs {
    readonly id: FieldRef<"Litter", 'String'>
    readonly title: FieldRef<"Litter", 'String'>
    readonly matingDate: FieldRef<"Litter", 'DateTime'>
    readonly expectedBirthDate: FieldRef<"Litter", 'DateTime'>
    readonly birthDate: FieldRef<"Litter", 'DateTime'>
    readonly status: FieldRef<"Litter", 'String'>
    readonly sireId: FieldRef<"Litter", 'String'>
    readonly damId: FieldRef<"Litter", 'String'>
    readonly media: FieldRef<"Litter", 'String'>
    readonly createdAt: FieldRef<"Litter", 'DateTime'>
    readonly updatedAt: FieldRef<"Litter", 'DateTime'>
    readonly price: FieldRef<"Litter", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Litter findUnique
   */
  export type LitterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    /**
     * Filter, which Litter to fetch.
     */
    where: LitterWhereUniqueInput
  }

  /**
   * Litter findUniqueOrThrow
   */
  export type LitterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    /**
     * Filter, which Litter to fetch.
     */
    where: LitterWhereUniqueInput
  }

  /**
   * Litter findFirst
   */
  export type LitterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    /**
     * Filter, which Litter to fetch.
     */
    where?: LitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Litters to fetch.
     */
    orderBy?: LitterOrderByWithRelationInput | LitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Litters.
     */
    cursor?: LitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Litters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Litters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Litters.
     */
    distinct?: LitterScalarFieldEnum | LitterScalarFieldEnum[]
  }

  /**
   * Litter findFirstOrThrow
   */
  export type LitterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    /**
     * Filter, which Litter to fetch.
     */
    where?: LitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Litters to fetch.
     */
    orderBy?: LitterOrderByWithRelationInput | LitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Litters.
     */
    cursor?: LitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Litters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Litters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Litters.
     */
    distinct?: LitterScalarFieldEnum | LitterScalarFieldEnum[]
  }

  /**
   * Litter findMany
   */
  export type LitterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    /**
     * Filter, which Litters to fetch.
     */
    where?: LitterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Litters to fetch.
     */
    orderBy?: LitterOrderByWithRelationInput | LitterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Litters.
     */
    cursor?: LitterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Litters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Litters.
     */
    skip?: number
    distinct?: LitterScalarFieldEnum | LitterScalarFieldEnum[]
  }

  /**
   * Litter create
   */
  export type LitterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    /**
     * The data needed to create a Litter.
     */
    data: XOR<LitterCreateInput, LitterUncheckedCreateInput>
  }

  /**
   * Litter createMany
   */
  export type LitterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Litters.
     */
    data: LitterCreateManyInput | LitterCreateManyInput[]
  }

  /**
   * Litter createManyAndReturn
   */
  export type LitterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Litters.
     */
    data: LitterCreateManyInput | LitterCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Litter update
   */
  export type LitterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    /**
     * The data needed to update a Litter.
     */
    data: XOR<LitterUpdateInput, LitterUncheckedUpdateInput>
    /**
     * Choose, which Litter to update.
     */
    where: LitterWhereUniqueInput
  }

  /**
   * Litter updateMany
   */
  export type LitterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Litters.
     */
    data: XOR<LitterUpdateManyMutationInput, LitterUncheckedUpdateManyInput>
    /**
     * Filter which Litters to update
     */
    where?: LitterWhereInput
  }

  /**
   * Litter upsert
   */
  export type LitterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    /**
     * The filter to search for the Litter to update in case it exists.
     */
    where: LitterWhereUniqueInput
    /**
     * In case the Litter found by the `where` argument doesn't exist, create a new Litter with this data.
     */
    create: XOR<LitterCreateInput, LitterUncheckedCreateInput>
    /**
     * In case the Litter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LitterUpdateInput, LitterUncheckedUpdateInput>
  }

  /**
   * Litter delete
   */
  export type LitterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
    /**
     * Filter which Litter to delete.
     */
    where: LitterWhereUniqueInput
  }

  /**
   * Litter deleteMany
   */
  export type LitterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Litters to delete
     */
    where?: LitterWhereInput
  }

  /**
   * Litter.Dog_Litter_damIdToDog
   */
  export type Litter$Dog_Litter_damIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    where?: DogWhereInput
  }

  /**
   * Litter.Dog_Litter_sireIdToDog
   */
  export type Litter$Dog_Litter_sireIdToDogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    where?: DogWhereInput
  }

  /**
   * Litter.Puppy
   */
  export type Litter$PuppyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    where?: PuppyWhereInput
    orderBy?: PuppyOrderByWithRelationInput | PuppyOrderByWithRelationInput[]
    cursor?: PuppyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PuppyScalarFieldEnum | PuppyScalarFieldEnum[]
  }

  /**
   * Litter without action
   */
  export type LitterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Litter
     */
    select?: LitterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LitterInclude<ExtArgs> | null
  }


  /**
   * Model Puppy
   */

  export type AggregatePuppy = {
    _count: PuppyCountAggregateOutputType | null
    _avg: PuppyAvgAggregateOutputType | null
    _sum: PuppySumAggregateOutputType | null
    _min: PuppyMinAggregateOutputType | null
    _max: PuppyMaxAggregateOutputType | null
  }

  export type PuppyAvgAggregateOutputType = {
    price: number | null
    birthWeight: number | null
  }

  export type PuppySumAggregateOutputType = {
    price: number | null
    birthWeight: number | null
  }

  export type PuppyMinAggregateOutputType = {
    id: string | null
    name: string | null
    sex: string | null
    color: string | null
    coat: string | null
    price: number | null
    status: string | null
    buyerId: string | null
    saleDate: Date | null
    litterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    birthWeight: number | null
    photo: string | null
  }

  export type PuppyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sex: string | null
    color: string | null
    coat: string | null
    price: number | null
    status: string | null
    buyerId: string | null
    saleDate: Date | null
    litterId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    birthWeight: number | null
    photo: string | null
  }

  export type PuppyCountAggregateOutputType = {
    id: number
    name: number
    sex: number
    color: number
    coat: number
    price: number
    status: number
    buyerId: number
    saleDate: number
    litterId: number
    createdAt: number
    updatedAt: number
    birthWeight: number
    photo: number
    _all: number
  }


  export type PuppyAvgAggregateInputType = {
    price?: true
    birthWeight?: true
  }

  export type PuppySumAggregateInputType = {
    price?: true
    birthWeight?: true
  }

  export type PuppyMinAggregateInputType = {
    id?: true
    name?: true
    sex?: true
    color?: true
    coat?: true
    price?: true
    status?: true
    buyerId?: true
    saleDate?: true
    litterId?: true
    createdAt?: true
    updatedAt?: true
    birthWeight?: true
    photo?: true
  }

  export type PuppyMaxAggregateInputType = {
    id?: true
    name?: true
    sex?: true
    color?: true
    coat?: true
    price?: true
    status?: true
    buyerId?: true
    saleDate?: true
    litterId?: true
    createdAt?: true
    updatedAt?: true
    birthWeight?: true
    photo?: true
  }

  export type PuppyCountAggregateInputType = {
    id?: true
    name?: true
    sex?: true
    color?: true
    coat?: true
    price?: true
    status?: true
    buyerId?: true
    saleDate?: true
    litterId?: true
    createdAt?: true
    updatedAt?: true
    birthWeight?: true
    photo?: true
    _all?: true
  }

  export type PuppyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Puppy to aggregate.
     */
    where?: PuppyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Puppies to fetch.
     */
    orderBy?: PuppyOrderByWithRelationInput | PuppyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PuppyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Puppies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Puppies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Puppies
    **/
    _count?: true | PuppyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PuppyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PuppySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PuppyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PuppyMaxAggregateInputType
  }

  export type GetPuppyAggregateType<T extends PuppyAggregateArgs> = {
        [P in keyof T & keyof AggregatePuppy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePuppy[P]>
      : GetScalarType<T[P], AggregatePuppy[P]>
  }




  export type PuppyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PuppyWhereInput
    orderBy?: PuppyOrderByWithAggregationInput | PuppyOrderByWithAggregationInput[]
    by: PuppyScalarFieldEnum[] | PuppyScalarFieldEnum
    having?: PuppyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PuppyCountAggregateInputType | true
    _avg?: PuppyAvgAggregateInputType
    _sum?: PuppySumAggregateInputType
    _min?: PuppyMinAggregateInputType
    _max?: PuppyMaxAggregateInputType
  }

  export type PuppyGroupByOutputType = {
    id: string
    name: string | null
    sex: string
    color: string
    coat: string | null
    price: number | null
    status: string
    buyerId: string | null
    saleDate: Date | null
    litterId: string
    createdAt: Date
    updatedAt: Date
    birthWeight: number | null
    photo: string | null
    _count: PuppyCountAggregateOutputType | null
    _avg: PuppyAvgAggregateOutputType | null
    _sum: PuppySumAggregateOutputType | null
    _min: PuppyMinAggregateOutputType | null
    _max: PuppyMaxAggregateOutputType | null
  }

  type GetPuppyGroupByPayload<T extends PuppyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PuppyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PuppyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PuppyGroupByOutputType[P]>
            : GetScalarType<T[P], PuppyGroupByOutputType[P]>
        }
      >
    >


  export type PuppySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sex?: boolean
    color?: boolean
    coat?: boolean
    price?: boolean
    status?: boolean
    buyerId?: boolean
    saleDate?: boolean
    litterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    birthWeight?: boolean
    photo?: boolean
    Litter?: boolean | LitterDefaultArgs<ExtArgs>
    Client?: boolean | Puppy$ClientArgs<ExtArgs>
    Vaccine?: boolean | Puppy$VaccineArgs<ExtArgs>
    _count?: boolean | PuppyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["puppy"]>

  export type PuppySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sex?: boolean
    color?: boolean
    coat?: boolean
    price?: boolean
    status?: boolean
    buyerId?: boolean
    saleDate?: boolean
    litterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    birthWeight?: boolean
    photo?: boolean
    Litter?: boolean | LitterDefaultArgs<ExtArgs>
    Client?: boolean | Puppy$ClientArgs<ExtArgs>
  }, ExtArgs["result"]["puppy"]>

  export type PuppySelectScalar = {
    id?: boolean
    name?: boolean
    sex?: boolean
    color?: boolean
    coat?: boolean
    price?: boolean
    status?: boolean
    buyerId?: boolean
    saleDate?: boolean
    litterId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    birthWeight?: boolean
    photo?: boolean
  }

  export type PuppyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Litter?: boolean | LitterDefaultArgs<ExtArgs>
    Client?: boolean | Puppy$ClientArgs<ExtArgs>
    Vaccine?: boolean | Puppy$VaccineArgs<ExtArgs>
    _count?: boolean | PuppyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PuppyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Litter?: boolean | LitterDefaultArgs<ExtArgs>
    Client?: boolean | Puppy$ClientArgs<ExtArgs>
  }

  export type $PuppyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Puppy"
    objects: {
      Litter: Prisma.$LitterPayload<ExtArgs>
      Client: Prisma.$ClientPayload<ExtArgs> | null
      Vaccine: Prisma.$VaccinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      sex: string
      color: string
      coat: string | null
      price: number | null
      status: string
      buyerId: string | null
      saleDate: Date | null
      litterId: string
      createdAt: Date
      updatedAt: Date
      birthWeight: number | null
      photo: string | null
    }, ExtArgs["result"]["puppy"]>
    composites: {}
  }

  type PuppyGetPayload<S extends boolean | null | undefined | PuppyDefaultArgs> = $Result.GetResult<Prisma.$PuppyPayload, S>

  type PuppyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PuppyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PuppyCountAggregateInputType | true
    }

  export interface PuppyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Puppy'], meta: { name: 'Puppy' } }
    /**
     * Find zero or one Puppy that matches the filter.
     * @param {PuppyFindUniqueArgs} args - Arguments to find a Puppy
     * @example
     * // Get one Puppy
     * const puppy = await prisma.puppy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PuppyFindUniqueArgs>(args: SelectSubset<T, PuppyFindUniqueArgs<ExtArgs>>): Prisma__PuppyClient<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Puppy that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PuppyFindUniqueOrThrowArgs} args - Arguments to find a Puppy
     * @example
     * // Get one Puppy
     * const puppy = await prisma.puppy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PuppyFindUniqueOrThrowArgs>(args: SelectSubset<T, PuppyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PuppyClient<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Puppy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuppyFindFirstArgs} args - Arguments to find a Puppy
     * @example
     * // Get one Puppy
     * const puppy = await prisma.puppy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PuppyFindFirstArgs>(args?: SelectSubset<T, PuppyFindFirstArgs<ExtArgs>>): Prisma__PuppyClient<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Puppy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuppyFindFirstOrThrowArgs} args - Arguments to find a Puppy
     * @example
     * // Get one Puppy
     * const puppy = await prisma.puppy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PuppyFindFirstOrThrowArgs>(args?: SelectSubset<T, PuppyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PuppyClient<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Puppies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuppyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Puppies
     * const puppies = await prisma.puppy.findMany()
     * 
     * // Get first 10 Puppies
     * const puppies = await prisma.puppy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const puppyWithIdOnly = await prisma.puppy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PuppyFindManyArgs>(args?: SelectSubset<T, PuppyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Puppy.
     * @param {PuppyCreateArgs} args - Arguments to create a Puppy.
     * @example
     * // Create one Puppy
     * const Puppy = await prisma.puppy.create({
     *   data: {
     *     // ... data to create a Puppy
     *   }
     * })
     * 
     */
    create<T extends PuppyCreateArgs>(args: SelectSubset<T, PuppyCreateArgs<ExtArgs>>): Prisma__PuppyClient<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Puppies.
     * @param {PuppyCreateManyArgs} args - Arguments to create many Puppies.
     * @example
     * // Create many Puppies
     * const puppy = await prisma.puppy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PuppyCreateManyArgs>(args?: SelectSubset<T, PuppyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Puppies and returns the data saved in the database.
     * @param {PuppyCreateManyAndReturnArgs} args - Arguments to create many Puppies.
     * @example
     * // Create many Puppies
     * const puppy = await prisma.puppy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Puppies and only return the `id`
     * const puppyWithIdOnly = await prisma.puppy.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PuppyCreateManyAndReturnArgs>(args?: SelectSubset<T, PuppyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Puppy.
     * @param {PuppyDeleteArgs} args - Arguments to delete one Puppy.
     * @example
     * // Delete one Puppy
     * const Puppy = await prisma.puppy.delete({
     *   where: {
     *     // ... filter to delete one Puppy
     *   }
     * })
     * 
     */
    delete<T extends PuppyDeleteArgs>(args: SelectSubset<T, PuppyDeleteArgs<ExtArgs>>): Prisma__PuppyClient<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Puppy.
     * @param {PuppyUpdateArgs} args - Arguments to update one Puppy.
     * @example
     * // Update one Puppy
     * const puppy = await prisma.puppy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PuppyUpdateArgs>(args: SelectSubset<T, PuppyUpdateArgs<ExtArgs>>): Prisma__PuppyClient<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Puppies.
     * @param {PuppyDeleteManyArgs} args - Arguments to filter Puppies to delete.
     * @example
     * // Delete a few Puppies
     * const { count } = await prisma.puppy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PuppyDeleteManyArgs>(args?: SelectSubset<T, PuppyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Puppies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuppyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Puppies
     * const puppy = await prisma.puppy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PuppyUpdateManyArgs>(args: SelectSubset<T, PuppyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Puppy.
     * @param {PuppyUpsertArgs} args - Arguments to update or create a Puppy.
     * @example
     * // Update or create a Puppy
     * const puppy = await prisma.puppy.upsert({
     *   create: {
     *     // ... data to create a Puppy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Puppy we want to update
     *   }
     * })
     */
    upsert<T extends PuppyUpsertArgs>(args: SelectSubset<T, PuppyUpsertArgs<ExtArgs>>): Prisma__PuppyClient<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Puppies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuppyCountArgs} args - Arguments to filter Puppies to count.
     * @example
     * // Count the number of Puppies
     * const count = await prisma.puppy.count({
     *   where: {
     *     // ... the filter for the Puppies we want to count
     *   }
     * })
    **/
    count<T extends PuppyCountArgs>(
      args?: Subset<T, PuppyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PuppyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Puppy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuppyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PuppyAggregateArgs>(args: Subset<T, PuppyAggregateArgs>): Prisma.PrismaPromise<GetPuppyAggregateType<T>>

    /**
     * Group by Puppy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuppyGroupByArgs} args - Group by arguments.
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
      T extends PuppyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PuppyGroupByArgs['orderBy'] }
        : { orderBy?: PuppyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PuppyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPuppyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Puppy model
   */
  readonly fields: PuppyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Puppy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PuppyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Litter<T extends LitterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LitterDefaultArgs<ExtArgs>>): Prisma__LitterClient<$Result.GetResult<Prisma.$LitterPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    Client<T extends Puppy$ClientArgs<ExtArgs> = {}>(args?: Subset<T, Puppy$ClientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Vaccine<T extends Puppy$VaccineArgs<ExtArgs> = {}>(args?: Subset<T, Puppy$VaccineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Puppy model
   */ 
  interface PuppyFieldRefs {
    readonly id: FieldRef<"Puppy", 'String'>
    readonly name: FieldRef<"Puppy", 'String'>
    readonly sex: FieldRef<"Puppy", 'String'>
    readonly color: FieldRef<"Puppy", 'String'>
    readonly coat: FieldRef<"Puppy", 'String'>
    readonly price: FieldRef<"Puppy", 'Float'>
    readonly status: FieldRef<"Puppy", 'String'>
    readonly buyerId: FieldRef<"Puppy", 'String'>
    readonly saleDate: FieldRef<"Puppy", 'DateTime'>
    readonly litterId: FieldRef<"Puppy", 'String'>
    readonly createdAt: FieldRef<"Puppy", 'DateTime'>
    readonly updatedAt: FieldRef<"Puppy", 'DateTime'>
    readonly birthWeight: FieldRef<"Puppy", 'Float'>
    readonly photo: FieldRef<"Puppy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Puppy findUnique
   */
  export type PuppyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    /**
     * Filter, which Puppy to fetch.
     */
    where: PuppyWhereUniqueInput
  }

  /**
   * Puppy findUniqueOrThrow
   */
  export type PuppyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    /**
     * Filter, which Puppy to fetch.
     */
    where: PuppyWhereUniqueInput
  }

  /**
   * Puppy findFirst
   */
  export type PuppyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    /**
     * Filter, which Puppy to fetch.
     */
    where?: PuppyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Puppies to fetch.
     */
    orderBy?: PuppyOrderByWithRelationInput | PuppyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Puppies.
     */
    cursor?: PuppyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Puppies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Puppies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Puppies.
     */
    distinct?: PuppyScalarFieldEnum | PuppyScalarFieldEnum[]
  }

  /**
   * Puppy findFirstOrThrow
   */
  export type PuppyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    /**
     * Filter, which Puppy to fetch.
     */
    where?: PuppyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Puppies to fetch.
     */
    orderBy?: PuppyOrderByWithRelationInput | PuppyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Puppies.
     */
    cursor?: PuppyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Puppies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Puppies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Puppies.
     */
    distinct?: PuppyScalarFieldEnum | PuppyScalarFieldEnum[]
  }

  /**
   * Puppy findMany
   */
  export type PuppyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    /**
     * Filter, which Puppies to fetch.
     */
    where?: PuppyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Puppies to fetch.
     */
    orderBy?: PuppyOrderByWithRelationInput | PuppyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Puppies.
     */
    cursor?: PuppyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Puppies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Puppies.
     */
    skip?: number
    distinct?: PuppyScalarFieldEnum | PuppyScalarFieldEnum[]
  }

  /**
   * Puppy create
   */
  export type PuppyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    /**
     * The data needed to create a Puppy.
     */
    data: XOR<PuppyCreateInput, PuppyUncheckedCreateInput>
  }

  /**
   * Puppy createMany
   */
  export type PuppyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Puppies.
     */
    data: PuppyCreateManyInput | PuppyCreateManyInput[]
  }

  /**
   * Puppy createManyAndReturn
   */
  export type PuppyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Puppies.
     */
    data: PuppyCreateManyInput | PuppyCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Puppy update
   */
  export type PuppyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    /**
     * The data needed to update a Puppy.
     */
    data: XOR<PuppyUpdateInput, PuppyUncheckedUpdateInput>
    /**
     * Choose, which Puppy to update.
     */
    where: PuppyWhereUniqueInput
  }

  /**
   * Puppy updateMany
   */
  export type PuppyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Puppies.
     */
    data: XOR<PuppyUpdateManyMutationInput, PuppyUncheckedUpdateManyInput>
    /**
     * Filter which Puppies to update
     */
    where?: PuppyWhereInput
  }

  /**
   * Puppy upsert
   */
  export type PuppyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    /**
     * The filter to search for the Puppy to update in case it exists.
     */
    where: PuppyWhereUniqueInput
    /**
     * In case the Puppy found by the `where` argument doesn't exist, create a new Puppy with this data.
     */
    create: XOR<PuppyCreateInput, PuppyUncheckedCreateInput>
    /**
     * In case the Puppy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PuppyUpdateInput, PuppyUncheckedUpdateInput>
  }

  /**
   * Puppy delete
   */
  export type PuppyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    /**
     * Filter which Puppy to delete.
     */
    where: PuppyWhereUniqueInput
  }

  /**
   * Puppy deleteMany
   */
  export type PuppyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Puppies to delete
     */
    where?: PuppyWhereInput
  }

  /**
   * Puppy.Client
   */
  export type Puppy$ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Puppy.Vaccine
   */
  export type Puppy$VaccineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    where?: VaccineWhereInput
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    cursor?: VaccineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Puppy without action
   */
  export type PuppyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
  }


  /**
   * Model SiteConfig
   */

  export type AggregateSiteConfig = {
    _count: SiteConfigCountAggregateOutputType | null
    _min: SiteConfigMinAggregateOutputType | null
    _max: SiteConfigMaxAggregateOutputType | null
  }

  export type SiteConfigMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    label: string | null
    type: string | null
    updatedAt: Date | null
  }

  export type SiteConfigMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    label: string | null
    type: string | null
    updatedAt: Date | null
  }

  export type SiteConfigCountAggregateOutputType = {
    id: number
    key: number
    value: number
    label: number
    type: number
    updatedAt: number
    _all: number
  }


  export type SiteConfigMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    label?: true
    type?: true
    updatedAt?: true
  }

  export type SiteConfigMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    label?: true
    type?: true
    updatedAt?: true
  }

  export type SiteConfigCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    label?: true
    type?: true
    updatedAt?: true
    _all?: true
  }

  export type SiteConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteConfig to aggregate.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteConfigs
    **/
    _count?: true | SiteConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteConfigMaxAggregateInputType
  }

  export type GetSiteConfigAggregateType<T extends SiteConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteConfig[P]>
      : GetScalarType<T[P], AggregateSiteConfig[P]>
  }




  export type SiteConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteConfigWhereInput
    orderBy?: SiteConfigOrderByWithAggregationInput | SiteConfigOrderByWithAggregationInput[]
    by: SiteConfigScalarFieldEnum[] | SiteConfigScalarFieldEnum
    having?: SiteConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteConfigCountAggregateInputType | true
    _min?: SiteConfigMinAggregateInputType
    _max?: SiteConfigMaxAggregateInputType
  }

  export type SiteConfigGroupByOutputType = {
    id: string
    key: string
    value: string
    label: string | null
    type: string
    updatedAt: Date
    _count: SiteConfigCountAggregateOutputType | null
    _min: SiteConfigMinAggregateOutputType | null
    _max: SiteConfigMaxAggregateOutputType | null
  }

  type GetSiteConfigGroupByPayload<T extends SiteConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SiteConfigGroupByOutputType[P]>
        }
      >
    >


  export type SiteConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    label?: boolean
    type?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteConfig"]>

  export type SiteConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    label?: boolean
    type?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["siteConfig"]>

  export type SiteConfigSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    label?: boolean
    type?: boolean
    updatedAt?: boolean
  }


  export type $SiteConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      label: string | null
      type: string
      updatedAt: Date
    }, ExtArgs["result"]["siteConfig"]>
    composites: {}
  }

  type SiteConfigGetPayload<S extends boolean | null | undefined | SiteConfigDefaultArgs> = $Result.GetResult<Prisma.$SiteConfigPayload, S>

  type SiteConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SiteConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SiteConfigCountAggregateInputType | true
    }

  export interface SiteConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteConfig'], meta: { name: 'SiteConfig' } }
    /**
     * Find zero or one SiteConfig that matches the filter.
     * @param {SiteConfigFindUniqueArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteConfigFindUniqueArgs>(args: SelectSubset<T, SiteConfigFindUniqueArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SiteConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SiteConfigFindUniqueOrThrowArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SiteConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigFindFirstArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteConfigFindFirstArgs>(args?: SelectSubset<T, SiteConfigFindFirstArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SiteConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigFindFirstOrThrowArgs} args - Arguments to find a SiteConfig
     * @example
     * // Get one SiteConfig
     * const siteConfig = await prisma.siteConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SiteConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteConfigs
     * const siteConfigs = await prisma.siteConfig.findMany()
     * 
     * // Get first 10 SiteConfigs
     * const siteConfigs = await prisma.siteConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteConfigWithIdOnly = await prisma.siteConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteConfigFindManyArgs>(args?: SelectSubset<T, SiteConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SiteConfig.
     * @param {SiteConfigCreateArgs} args - Arguments to create a SiteConfig.
     * @example
     * // Create one SiteConfig
     * const SiteConfig = await prisma.siteConfig.create({
     *   data: {
     *     // ... data to create a SiteConfig
     *   }
     * })
     * 
     */
    create<T extends SiteConfigCreateArgs>(args: SelectSubset<T, SiteConfigCreateArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SiteConfigs.
     * @param {SiteConfigCreateManyArgs} args - Arguments to create many SiteConfigs.
     * @example
     * // Create many SiteConfigs
     * const siteConfig = await prisma.siteConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteConfigCreateManyArgs>(args?: SelectSubset<T, SiteConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteConfigs and returns the data saved in the database.
     * @param {SiteConfigCreateManyAndReturnArgs} args - Arguments to create many SiteConfigs.
     * @example
     * // Create many SiteConfigs
     * const siteConfig = await prisma.siteConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteConfigs and only return the `id`
     * const siteConfigWithIdOnly = await prisma.siteConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SiteConfig.
     * @param {SiteConfigDeleteArgs} args - Arguments to delete one SiteConfig.
     * @example
     * // Delete one SiteConfig
     * const SiteConfig = await prisma.siteConfig.delete({
     *   where: {
     *     // ... filter to delete one SiteConfig
     *   }
     * })
     * 
     */
    delete<T extends SiteConfigDeleteArgs>(args: SelectSubset<T, SiteConfigDeleteArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SiteConfig.
     * @param {SiteConfigUpdateArgs} args - Arguments to update one SiteConfig.
     * @example
     * // Update one SiteConfig
     * const siteConfig = await prisma.siteConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteConfigUpdateArgs>(args: SelectSubset<T, SiteConfigUpdateArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SiteConfigs.
     * @param {SiteConfigDeleteManyArgs} args - Arguments to filter SiteConfigs to delete.
     * @example
     * // Delete a few SiteConfigs
     * const { count } = await prisma.siteConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteConfigDeleteManyArgs>(args?: SelectSubset<T, SiteConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteConfigs
     * const siteConfig = await prisma.siteConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteConfigUpdateManyArgs>(args: SelectSubset<T, SiteConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SiteConfig.
     * @param {SiteConfigUpsertArgs} args - Arguments to update or create a SiteConfig.
     * @example
     * // Update or create a SiteConfig
     * const siteConfig = await prisma.siteConfig.upsert({
     *   create: {
     *     // ... data to create a SiteConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteConfig we want to update
     *   }
     * })
     */
    upsert<T extends SiteConfigUpsertArgs>(args: SelectSubset<T, SiteConfigUpsertArgs<ExtArgs>>): Prisma__SiteConfigClient<$Result.GetResult<Prisma.$SiteConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SiteConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigCountArgs} args - Arguments to filter SiteConfigs to count.
     * @example
     * // Count the number of SiteConfigs
     * const count = await prisma.siteConfig.count({
     *   where: {
     *     // ... the filter for the SiteConfigs we want to count
     *   }
     * })
    **/
    count<T extends SiteConfigCountArgs>(
      args?: Subset<T, SiteConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteConfigAggregateArgs>(args: Subset<T, SiteConfigAggregateArgs>): Prisma.PrismaPromise<GetSiteConfigAggregateType<T>>

    /**
     * Group by SiteConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteConfigGroupByArgs} args - Group by arguments.
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
      T extends SiteConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteConfigGroupByArgs['orderBy'] }
        : { orderBy?: SiteConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteConfig model
   */
  readonly fields: SiteConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SiteConfig model
   */ 
  interface SiteConfigFieldRefs {
    readonly id: FieldRef<"SiteConfig", 'String'>
    readonly key: FieldRef<"SiteConfig", 'String'>
    readonly value: FieldRef<"SiteConfig", 'String'>
    readonly label: FieldRef<"SiteConfig", 'String'>
    readonly type: FieldRef<"SiteConfig", 'String'>
    readonly updatedAt: FieldRef<"SiteConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SiteConfig findUnique
   */
  export type SiteConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig findUniqueOrThrow
   */
  export type SiteConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig findFirst
   */
  export type SiteConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteConfigs.
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteConfigs.
     */
    distinct?: SiteConfigScalarFieldEnum | SiteConfigScalarFieldEnum[]
  }

  /**
   * SiteConfig findFirstOrThrow
   */
  export type SiteConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter, which SiteConfig to fetch.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteConfigs.
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteConfigs.
     */
    distinct?: SiteConfigScalarFieldEnum | SiteConfigScalarFieldEnum[]
  }

  /**
   * SiteConfig findMany
   */
  export type SiteConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter, which SiteConfigs to fetch.
     */
    where?: SiteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteConfigs to fetch.
     */
    orderBy?: SiteConfigOrderByWithRelationInput | SiteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteConfigs.
     */
    cursor?: SiteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteConfigs.
     */
    skip?: number
    distinct?: SiteConfigScalarFieldEnum | SiteConfigScalarFieldEnum[]
  }

  /**
   * SiteConfig create
   */
  export type SiteConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * The data needed to create a SiteConfig.
     */
    data: XOR<SiteConfigCreateInput, SiteConfigUncheckedCreateInput>
  }

  /**
   * SiteConfig createMany
   */
  export type SiteConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteConfigs.
     */
    data: SiteConfigCreateManyInput | SiteConfigCreateManyInput[]
  }

  /**
   * SiteConfig createManyAndReturn
   */
  export type SiteConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SiteConfigs.
     */
    data: SiteConfigCreateManyInput | SiteConfigCreateManyInput[]
  }

  /**
   * SiteConfig update
   */
  export type SiteConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * The data needed to update a SiteConfig.
     */
    data: XOR<SiteConfigUpdateInput, SiteConfigUncheckedUpdateInput>
    /**
     * Choose, which SiteConfig to update.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig updateMany
   */
  export type SiteConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteConfigs.
     */
    data: XOR<SiteConfigUpdateManyMutationInput, SiteConfigUncheckedUpdateManyInput>
    /**
     * Filter which SiteConfigs to update
     */
    where?: SiteConfigWhereInput
  }

  /**
   * SiteConfig upsert
   */
  export type SiteConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * The filter to search for the SiteConfig to update in case it exists.
     */
    where: SiteConfigWhereUniqueInput
    /**
     * In case the SiteConfig found by the `where` argument doesn't exist, create a new SiteConfig with this data.
     */
    create: XOR<SiteConfigCreateInput, SiteConfigUncheckedCreateInput>
    /**
     * In case the SiteConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteConfigUpdateInput, SiteConfigUncheckedUpdateInput>
  }

  /**
   * SiteConfig delete
   */
  export type SiteConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
    /**
     * Filter which SiteConfig to delete.
     */
    where: SiteConfigWhereUniqueInput
  }

  /**
   * SiteConfig deleteMany
   */
  export type SiteConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteConfigs to delete
     */
    where?: SiteConfigWhereInput
  }

  /**
   * SiteConfig without action
   */
  export type SiteConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteConfig
     */
    select?: SiteConfigSelect<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    type: string | null
    category: string | null
    description: string | null
    amount: number | null
    date: Date | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    type: string | null
    category: string | null
    description: string | null
    amount: number | null
    date: Date | null
    clientId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    type: number
    category: number
    description: number
    amount: number
    date: number
    clientId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    type?: true
    category?: true
    description?: true
    amount?: true
    date?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    type?: true
    category?: true
    description?: true
    amount?: true
    date?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    type?: true
    category?: true
    description?: true
    amount?: true
    date?: true
    clientId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    type: string
    category: string
    description: string
    amount: number
    date: Date
    clientId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Client?: boolean | Transaction$ClientArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Client?: boolean | Transaction$ClientArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    type?: boolean
    category?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    clientId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Client?: boolean | Transaction$ClientArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Client?: boolean | Transaction$ClientArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      Client: Prisma.$ClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      category: string
      description: string
      amount: number
      date: Date
      clientId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Client<T extends Transaction$ClientArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$ClientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Transaction model
   */ 
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly type: FieldRef<"Transaction", 'String'>
    readonly category: FieldRef<"Transaction", 'String'>
    readonly description: FieldRef<"Transaction", 'String'>
    readonly amount: FieldRef<"Transaction", 'Float'>
    readonly date: FieldRef<"Transaction", 'DateTime'>
    readonly clientId: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
  }

  /**
   * Transaction.Client
   */
  export type Transaction$ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model Vaccine
   */

  export type AggregateVaccine = {
    _count: VaccineCountAggregateOutputType | null
    _min: VaccineMinAggregateOutputType | null
    _max: VaccineMaxAggregateOutputType | null
  }

  export type VaccineMinAggregateOutputType = {
    id: string | null
    name: string | null
    dueDate: Date | null
    appliedDate: Date | null
    status: string | null
    notes: string | null
    dogId: string | null
    puppyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VaccineMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dueDate: Date | null
    appliedDate: Date | null
    status: string | null
    notes: string | null
    dogId: string | null
    puppyId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VaccineCountAggregateOutputType = {
    id: number
    name: number
    dueDate: number
    appliedDate: number
    status: number
    notes: number
    dogId: number
    puppyId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VaccineMinAggregateInputType = {
    id?: true
    name?: true
    dueDate?: true
    appliedDate?: true
    status?: true
    notes?: true
    dogId?: true
    puppyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VaccineMaxAggregateInputType = {
    id?: true
    name?: true
    dueDate?: true
    appliedDate?: true
    status?: true
    notes?: true
    dogId?: true
    puppyId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VaccineCountAggregateInputType = {
    id?: true
    name?: true
    dueDate?: true
    appliedDate?: true
    status?: true
    notes?: true
    dogId?: true
    puppyId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VaccineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaccine to aggregate.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vaccines
    **/
    _count?: true | VaccineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VaccineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VaccineMaxAggregateInputType
  }

  export type GetVaccineAggregateType<T extends VaccineAggregateArgs> = {
        [P in keyof T & keyof AggregateVaccine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVaccine[P]>
      : GetScalarType<T[P], AggregateVaccine[P]>
  }




  export type VaccineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VaccineWhereInput
    orderBy?: VaccineOrderByWithAggregationInput | VaccineOrderByWithAggregationInput[]
    by: VaccineScalarFieldEnum[] | VaccineScalarFieldEnum
    having?: VaccineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VaccineCountAggregateInputType | true
    _min?: VaccineMinAggregateInputType
    _max?: VaccineMaxAggregateInputType
  }

  export type VaccineGroupByOutputType = {
    id: string
    name: string
    dueDate: Date
    appliedDate: Date | null
    status: string
    notes: string | null
    dogId: string | null
    puppyId: string | null
    createdAt: Date
    updatedAt: Date
    _count: VaccineCountAggregateOutputType | null
    _min: VaccineMinAggregateOutputType | null
    _max: VaccineMaxAggregateOutputType | null
  }

  type GetVaccineGroupByPayload<T extends VaccineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VaccineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VaccineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VaccineGroupByOutputType[P]>
            : GetScalarType<T[P], VaccineGroupByOutputType[P]>
        }
      >
    >


  export type VaccineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dueDate?: boolean
    appliedDate?: boolean
    status?: boolean
    notes?: boolean
    dogId?: boolean
    puppyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Puppy?: boolean | Vaccine$PuppyArgs<ExtArgs>
    Dog?: boolean | Vaccine$DogArgs<ExtArgs>
  }, ExtArgs["result"]["vaccine"]>

  export type VaccineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dueDate?: boolean
    appliedDate?: boolean
    status?: boolean
    notes?: boolean
    dogId?: boolean
    puppyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Puppy?: boolean | Vaccine$PuppyArgs<ExtArgs>
    Dog?: boolean | Vaccine$DogArgs<ExtArgs>
  }, ExtArgs["result"]["vaccine"]>

  export type VaccineSelectScalar = {
    id?: boolean
    name?: boolean
    dueDate?: boolean
    appliedDate?: boolean
    status?: boolean
    notes?: boolean
    dogId?: boolean
    puppyId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VaccineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Puppy?: boolean | Vaccine$PuppyArgs<ExtArgs>
    Dog?: boolean | Vaccine$DogArgs<ExtArgs>
  }
  export type VaccineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Puppy?: boolean | Vaccine$PuppyArgs<ExtArgs>
    Dog?: boolean | Vaccine$DogArgs<ExtArgs>
  }

  export type $VaccinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vaccine"
    objects: {
      Puppy: Prisma.$PuppyPayload<ExtArgs> | null
      Dog: Prisma.$DogPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dueDate: Date
      appliedDate: Date | null
      status: string
      notes: string | null
      dogId: string | null
      puppyId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vaccine"]>
    composites: {}
  }

  type VaccineGetPayload<S extends boolean | null | undefined | VaccineDefaultArgs> = $Result.GetResult<Prisma.$VaccinePayload, S>

  type VaccineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VaccineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VaccineCountAggregateInputType | true
    }

  export interface VaccineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vaccine'], meta: { name: 'Vaccine' } }
    /**
     * Find zero or one Vaccine that matches the filter.
     * @param {VaccineFindUniqueArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VaccineFindUniqueArgs>(args: SelectSubset<T, VaccineFindUniqueArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Vaccine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VaccineFindUniqueOrThrowArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VaccineFindUniqueOrThrowArgs>(args: SelectSubset<T, VaccineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Vaccine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineFindFirstArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VaccineFindFirstArgs>(args?: SelectSubset<T, VaccineFindFirstArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Vaccine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineFindFirstOrThrowArgs} args - Arguments to find a Vaccine
     * @example
     * // Get one Vaccine
     * const vaccine = await prisma.vaccine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VaccineFindFirstOrThrowArgs>(args?: SelectSubset<T, VaccineFindFirstOrThrowArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Vaccines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vaccines
     * const vaccines = await prisma.vaccine.findMany()
     * 
     * // Get first 10 Vaccines
     * const vaccines = await prisma.vaccine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vaccineWithIdOnly = await prisma.vaccine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VaccineFindManyArgs>(args?: SelectSubset<T, VaccineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Vaccine.
     * @param {VaccineCreateArgs} args - Arguments to create a Vaccine.
     * @example
     * // Create one Vaccine
     * const Vaccine = await prisma.vaccine.create({
     *   data: {
     *     // ... data to create a Vaccine
     *   }
     * })
     * 
     */
    create<T extends VaccineCreateArgs>(args: SelectSubset<T, VaccineCreateArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Vaccines.
     * @param {VaccineCreateManyArgs} args - Arguments to create many Vaccines.
     * @example
     * // Create many Vaccines
     * const vaccine = await prisma.vaccine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VaccineCreateManyArgs>(args?: SelectSubset<T, VaccineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vaccines and returns the data saved in the database.
     * @param {VaccineCreateManyAndReturnArgs} args - Arguments to create many Vaccines.
     * @example
     * // Create many Vaccines
     * const vaccine = await prisma.vaccine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vaccines and only return the `id`
     * const vaccineWithIdOnly = await prisma.vaccine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VaccineCreateManyAndReturnArgs>(args?: SelectSubset<T, VaccineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Vaccine.
     * @param {VaccineDeleteArgs} args - Arguments to delete one Vaccine.
     * @example
     * // Delete one Vaccine
     * const Vaccine = await prisma.vaccine.delete({
     *   where: {
     *     // ... filter to delete one Vaccine
     *   }
     * })
     * 
     */
    delete<T extends VaccineDeleteArgs>(args: SelectSubset<T, VaccineDeleteArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Vaccine.
     * @param {VaccineUpdateArgs} args - Arguments to update one Vaccine.
     * @example
     * // Update one Vaccine
     * const vaccine = await prisma.vaccine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VaccineUpdateArgs>(args: SelectSubset<T, VaccineUpdateArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Vaccines.
     * @param {VaccineDeleteManyArgs} args - Arguments to filter Vaccines to delete.
     * @example
     * // Delete a few Vaccines
     * const { count } = await prisma.vaccine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VaccineDeleteManyArgs>(args?: SelectSubset<T, VaccineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vaccines
     * const vaccine = await prisma.vaccine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VaccineUpdateManyArgs>(args: SelectSubset<T, VaccineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vaccine.
     * @param {VaccineUpsertArgs} args - Arguments to update or create a Vaccine.
     * @example
     * // Update or create a Vaccine
     * const vaccine = await prisma.vaccine.upsert({
     *   create: {
     *     // ... data to create a Vaccine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vaccine we want to update
     *   }
     * })
     */
    upsert<T extends VaccineUpsertArgs>(args: SelectSubset<T, VaccineUpsertArgs<ExtArgs>>): Prisma__VaccineClient<$Result.GetResult<Prisma.$VaccinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Vaccines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineCountArgs} args - Arguments to filter Vaccines to count.
     * @example
     * // Count the number of Vaccines
     * const count = await prisma.vaccine.count({
     *   where: {
     *     // ... the filter for the Vaccines we want to count
     *   }
     * })
    **/
    count<T extends VaccineCountArgs>(
      args?: Subset<T, VaccineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VaccineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vaccine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VaccineAggregateArgs>(args: Subset<T, VaccineAggregateArgs>): Prisma.PrismaPromise<GetVaccineAggregateType<T>>

    /**
     * Group by Vaccine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VaccineGroupByArgs} args - Group by arguments.
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
      T extends VaccineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VaccineGroupByArgs['orderBy'] }
        : { orderBy?: VaccineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VaccineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVaccineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vaccine model
   */
  readonly fields: VaccineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vaccine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VaccineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Puppy<T extends Vaccine$PuppyArgs<ExtArgs> = {}>(args?: Subset<T, Vaccine$PuppyArgs<ExtArgs>>): Prisma__PuppyClient<$Result.GetResult<Prisma.$PuppyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Dog<T extends Vaccine$DogArgs<ExtArgs> = {}>(args?: Subset<T, Vaccine$DogArgs<ExtArgs>>): Prisma__DogClient<$Result.GetResult<Prisma.$DogPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Vaccine model
   */ 
  interface VaccineFieldRefs {
    readonly id: FieldRef<"Vaccine", 'String'>
    readonly name: FieldRef<"Vaccine", 'String'>
    readonly dueDate: FieldRef<"Vaccine", 'DateTime'>
    readonly appliedDate: FieldRef<"Vaccine", 'DateTime'>
    readonly status: FieldRef<"Vaccine", 'String'>
    readonly notes: FieldRef<"Vaccine", 'String'>
    readonly dogId: FieldRef<"Vaccine", 'String'>
    readonly puppyId: FieldRef<"Vaccine", 'String'>
    readonly createdAt: FieldRef<"Vaccine", 'DateTime'>
    readonly updatedAt: FieldRef<"Vaccine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vaccine findUnique
   */
  export type VaccineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine findUniqueOrThrow
   */
  export type VaccineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine findFirst
   */
  export type VaccineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaccines.
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaccines.
     */
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Vaccine findFirstOrThrow
   */
  export type VaccineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccine to fetch.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vaccines.
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vaccines.
     */
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Vaccine findMany
   */
  export type VaccineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter, which Vaccines to fetch.
     */
    where?: VaccineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vaccines to fetch.
     */
    orderBy?: VaccineOrderByWithRelationInput | VaccineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vaccines.
     */
    cursor?: VaccineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vaccines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vaccines.
     */
    skip?: number
    distinct?: VaccineScalarFieldEnum | VaccineScalarFieldEnum[]
  }

  /**
   * Vaccine create
   */
  export type VaccineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * The data needed to create a Vaccine.
     */
    data: XOR<VaccineCreateInput, VaccineUncheckedCreateInput>
  }

  /**
   * Vaccine createMany
   */
  export type VaccineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vaccines.
     */
    data: VaccineCreateManyInput | VaccineCreateManyInput[]
  }

  /**
   * Vaccine createManyAndReturn
   */
  export type VaccineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Vaccines.
     */
    data: VaccineCreateManyInput | VaccineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vaccine update
   */
  export type VaccineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * The data needed to update a Vaccine.
     */
    data: XOR<VaccineUpdateInput, VaccineUncheckedUpdateInput>
    /**
     * Choose, which Vaccine to update.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine updateMany
   */
  export type VaccineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vaccines.
     */
    data: XOR<VaccineUpdateManyMutationInput, VaccineUncheckedUpdateManyInput>
    /**
     * Filter which Vaccines to update
     */
    where?: VaccineWhereInput
  }

  /**
   * Vaccine upsert
   */
  export type VaccineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * The filter to search for the Vaccine to update in case it exists.
     */
    where: VaccineWhereUniqueInput
    /**
     * In case the Vaccine found by the `where` argument doesn't exist, create a new Vaccine with this data.
     */
    create: XOR<VaccineCreateInput, VaccineUncheckedCreateInput>
    /**
     * In case the Vaccine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VaccineUpdateInput, VaccineUncheckedUpdateInput>
  }

  /**
   * Vaccine delete
   */
  export type VaccineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
    /**
     * Filter which Vaccine to delete.
     */
    where: VaccineWhereUniqueInput
  }

  /**
   * Vaccine deleteMany
   */
  export type VaccineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vaccines to delete
     */
    where?: VaccineWhereInput
  }

  /**
   * Vaccine.Puppy
   */
  export type Vaccine$PuppyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Puppy
     */
    select?: PuppySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuppyInclude<ExtArgs> | null
    where?: PuppyWhereInput
  }

  /**
   * Vaccine.Dog
   */
  export type Vaccine$DogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dog
     */
    select?: DogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DogInclude<ExtArgs> | null
    where?: DogWhereInput
  }

  /**
   * Vaccine without action
   */
  export type VaccineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vaccine
     */
    select?: VaccineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VaccineInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cpf: 'cpf',
    email: 'email',
    phone: 'phone',
    address: 'address',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const DogScalarFieldEnum: {
    id: 'id',
    registrySystem: 'registrySystem',
    nickname: 'nickname',
    name: 'name',
    registrationName: 'registrationName',
    breed: 'breed',
    variety: 'variety',
    birthDate: 'birthDate',
    color: 'color',
    arrivalDate: 'arrivalDate',
    height: 'height',
    nationality: 'nationality',
    sex: 'sex',
    temperament: 'temperament',
    status: 'status',
    showGenealogy: 'showGenealogy',
    notes: 'notes',
    coat: 'coat',
    profilePhoto: 'profilePhoto',
    media: 'media',
    videos: 'videos',
    microchip: 'microchip',
    microchipDate: 'microchipDate',
    dnaProfile: 'dnaProfile',
    tagId: 'tagId',
    tattoo: 'tattoo',
    coi: 'coi',
    hipDysplasia: 'hipDysplasia',
    elbowDysplasia: 'elbowDysplasia',
    patellaLuxation: 'patellaLuxation',
    healthDocsUrls: 'healthDocsUrls',
    sireId: 'sireId',
    damId: 'damId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    pedigreeDocUrl: 'pedigreeDocUrl',
    pedigreeId: 'pedigreeId'
  };

  export type DogScalarFieldEnum = (typeof DogScalarFieldEnum)[keyof typeof DogScalarFieldEnum]


  export const LeadScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    interest: 'interest',
    status: 'status',
    answers: 'answers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LeadScalarFieldEnum = (typeof LeadScalarFieldEnum)[keyof typeof LeadScalarFieldEnum]


  export const LitterScalarFieldEnum: {
    id: 'id',
    title: 'title',
    matingDate: 'matingDate',
    expectedBirthDate: 'expectedBirthDate',
    birthDate: 'birthDate',
    status: 'status',
    sireId: 'sireId',
    damId: 'damId',
    media: 'media',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    price: 'price'
  };

  export type LitterScalarFieldEnum = (typeof LitterScalarFieldEnum)[keyof typeof LitterScalarFieldEnum]


  export const PuppyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sex: 'sex',
    color: 'color',
    coat: 'coat',
    price: 'price',
    status: 'status',
    buyerId: 'buyerId',
    saleDate: 'saleDate',
    litterId: 'litterId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    birthWeight: 'birthWeight',
    photo: 'photo'
  };

  export type PuppyScalarFieldEnum = (typeof PuppyScalarFieldEnum)[keyof typeof PuppyScalarFieldEnum]


  export const SiteConfigScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    label: 'label',
    type: 'type',
    updatedAt: 'updatedAt'
  };

  export type SiteConfigScalarFieldEnum = (typeof SiteConfigScalarFieldEnum)[keyof typeof SiteConfigScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    category: 'category',
    description: 'description',
    amount: 'amount',
    date: 'date',
    clientId: 'clientId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const VaccineScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dueDate: 'dueDate',
    appliedDate: 'appliedDate',
    status: 'status',
    notes: 'notes',
    dogId: 'dogId',
    puppyId: 'puppyId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VaccineScalarFieldEnum = (typeof VaccineScalarFieldEnum)[keyof typeof VaccineScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    cpf?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringFilter<"Client"> | string
    address?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    Puppy?: PuppyListRelationFilter
    Transaction?: TransactionListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Puppy?: PuppyOrderByRelationAggregateInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    cpf?: StringNullableFilter<"Client"> | string | null
    email?: StringNullableFilter<"Client"> | string | null
    phone?: StringFilter<"Client"> | string
    address?: StringNullableFilter<"Client"> | string | null
    notes?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    Puppy?: PuppyListRelationFilter
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    cpf?: StringNullableWithAggregatesFilter<"Client"> | string | null
    email?: StringNullableWithAggregatesFilter<"Client"> | string | null
    phone?: StringWithAggregatesFilter<"Client"> | string
    address?: StringNullableWithAggregatesFilter<"Client"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type DogWhereInput = {
    AND?: DogWhereInput | DogWhereInput[]
    OR?: DogWhereInput[]
    NOT?: DogWhereInput | DogWhereInput[]
    id?: StringFilter<"Dog"> | string
    registrySystem?: StringNullableFilter<"Dog"> | string | null
    nickname?: StringNullableFilter<"Dog"> | string | null
    name?: StringFilter<"Dog"> | string
    registrationName?: StringNullableFilter<"Dog"> | string | null
    breed?: StringFilter<"Dog"> | string
    variety?: StringNullableFilter<"Dog"> | string | null
    birthDate?: DateTimeNullableFilter<"Dog"> | Date | string | null
    color?: StringFilter<"Dog"> | string
    arrivalDate?: DateTimeNullableFilter<"Dog"> | Date | string | null
    height?: FloatNullableFilter<"Dog"> | number | null
    nationality?: StringNullableFilter<"Dog"> | string | null
    sex?: StringFilter<"Dog"> | string
    temperament?: StringNullableFilter<"Dog"> | string | null
    status?: StringFilter<"Dog"> | string
    showGenealogy?: BoolFilter<"Dog"> | boolean
    notes?: StringNullableFilter<"Dog"> | string | null
    coat?: StringNullableFilter<"Dog"> | string | null
    profilePhoto?: StringNullableFilter<"Dog"> | string | null
    media?: StringNullableFilter<"Dog"> | string | null
    videos?: StringNullableFilter<"Dog"> | string | null
    microchip?: StringNullableFilter<"Dog"> | string | null
    microchipDate?: DateTimeNullableFilter<"Dog"> | Date | string | null
    dnaProfile?: StringNullableFilter<"Dog"> | string | null
    tagId?: StringNullableFilter<"Dog"> | string | null
    tattoo?: StringNullableFilter<"Dog"> | string | null
    coi?: StringNullableFilter<"Dog"> | string | null
    hipDysplasia?: StringNullableFilter<"Dog"> | string | null
    elbowDysplasia?: StringNullableFilter<"Dog"> | string | null
    patellaLuxation?: StringNullableFilter<"Dog"> | string | null
    healthDocsUrls?: StringNullableFilter<"Dog"> | string | null
    sireId?: StringNullableFilter<"Dog"> | string | null
    damId?: StringNullableFilter<"Dog"> | string | null
    createdAt?: DateTimeFilter<"Dog"> | Date | string
    updatedAt?: DateTimeFilter<"Dog"> | Date | string
    pedigreeDocUrl?: StringNullableFilter<"Dog"> | string | null
    pedigreeId?: StringNullableFilter<"Dog"> | string | null
    Dog_Dog_damIdToDog?: XOR<DogNullableRelationFilter, DogWhereInput> | null
    other_Dog_Dog_damIdToDog?: DogListRelationFilter
    Dog_Dog_sireIdToDog?: XOR<DogNullableRelationFilter, DogWhereInput> | null
    other_Dog_Dog_sireIdToDog?: DogListRelationFilter
    Litter_Litter_damIdToDog?: LitterListRelationFilter
    Litter_Litter_sireIdToDog?: LitterListRelationFilter
    Vaccine?: VaccineListRelationFilter
  }

  export type DogOrderByWithRelationInput = {
    id?: SortOrder
    registrySystem?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    name?: SortOrder
    registrationName?: SortOrderInput | SortOrder
    breed?: SortOrder
    variety?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    color?: SortOrder
    arrivalDate?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    sex?: SortOrder
    temperament?: SortOrderInput | SortOrder
    status?: SortOrder
    showGenealogy?: SortOrder
    notes?: SortOrderInput | SortOrder
    coat?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    videos?: SortOrderInput | SortOrder
    microchip?: SortOrderInput | SortOrder
    microchipDate?: SortOrderInput | SortOrder
    dnaProfile?: SortOrderInput | SortOrder
    tagId?: SortOrderInput | SortOrder
    tattoo?: SortOrderInput | SortOrder
    coi?: SortOrderInput | SortOrder
    hipDysplasia?: SortOrderInput | SortOrder
    elbowDysplasia?: SortOrderInput | SortOrder
    patellaLuxation?: SortOrderInput | SortOrder
    healthDocsUrls?: SortOrderInput | SortOrder
    sireId?: SortOrderInput | SortOrder
    damId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pedigreeDocUrl?: SortOrderInput | SortOrder
    pedigreeId?: SortOrderInput | SortOrder
    Dog_Dog_damIdToDog?: DogOrderByWithRelationInput
    other_Dog_Dog_damIdToDog?: DogOrderByRelationAggregateInput
    Dog_Dog_sireIdToDog?: DogOrderByWithRelationInput
    other_Dog_Dog_sireIdToDog?: DogOrderByRelationAggregateInput
    Litter_Litter_damIdToDog?: LitterOrderByRelationAggregateInput
    Litter_Litter_sireIdToDog?: LitterOrderByRelationAggregateInput
    Vaccine?: VaccineOrderByRelationAggregateInput
  }

  export type DogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DogWhereInput | DogWhereInput[]
    OR?: DogWhereInput[]
    NOT?: DogWhereInput | DogWhereInput[]
    registrySystem?: StringNullableFilter<"Dog"> | string | null
    nickname?: StringNullableFilter<"Dog"> | string | null
    name?: StringFilter<"Dog"> | string
    registrationName?: StringNullableFilter<"Dog"> | string | null
    breed?: StringFilter<"Dog"> | string
    variety?: StringNullableFilter<"Dog"> | string | null
    birthDate?: DateTimeNullableFilter<"Dog"> | Date | string | null
    color?: StringFilter<"Dog"> | string
    arrivalDate?: DateTimeNullableFilter<"Dog"> | Date | string | null
    height?: FloatNullableFilter<"Dog"> | number | null
    nationality?: StringNullableFilter<"Dog"> | string | null
    sex?: StringFilter<"Dog"> | string
    temperament?: StringNullableFilter<"Dog"> | string | null
    status?: StringFilter<"Dog"> | string
    showGenealogy?: BoolFilter<"Dog"> | boolean
    notes?: StringNullableFilter<"Dog"> | string | null
    coat?: StringNullableFilter<"Dog"> | string | null
    profilePhoto?: StringNullableFilter<"Dog"> | string | null
    media?: StringNullableFilter<"Dog"> | string | null
    videos?: StringNullableFilter<"Dog"> | string | null
    microchip?: StringNullableFilter<"Dog"> | string | null
    microchipDate?: DateTimeNullableFilter<"Dog"> | Date | string | null
    dnaProfile?: StringNullableFilter<"Dog"> | string | null
    tagId?: StringNullableFilter<"Dog"> | string | null
    tattoo?: StringNullableFilter<"Dog"> | string | null
    coi?: StringNullableFilter<"Dog"> | string | null
    hipDysplasia?: StringNullableFilter<"Dog"> | string | null
    elbowDysplasia?: StringNullableFilter<"Dog"> | string | null
    patellaLuxation?: StringNullableFilter<"Dog"> | string | null
    healthDocsUrls?: StringNullableFilter<"Dog"> | string | null
    sireId?: StringNullableFilter<"Dog"> | string | null
    damId?: StringNullableFilter<"Dog"> | string | null
    createdAt?: DateTimeFilter<"Dog"> | Date | string
    updatedAt?: DateTimeFilter<"Dog"> | Date | string
    pedigreeDocUrl?: StringNullableFilter<"Dog"> | string | null
    pedigreeId?: StringNullableFilter<"Dog"> | string | null
    Dog_Dog_damIdToDog?: XOR<DogNullableRelationFilter, DogWhereInput> | null
    other_Dog_Dog_damIdToDog?: DogListRelationFilter
    Dog_Dog_sireIdToDog?: XOR<DogNullableRelationFilter, DogWhereInput> | null
    other_Dog_Dog_sireIdToDog?: DogListRelationFilter
    Litter_Litter_damIdToDog?: LitterListRelationFilter
    Litter_Litter_sireIdToDog?: LitterListRelationFilter
    Vaccine?: VaccineListRelationFilter
  }, "id">

  export type DogOrderByWithAggregationInput = {
    id?: SortOrder
    registrySystem?: SortOrderInput | SortOrder
    nickname?: SortOrderInput | SortOrder
    name?: SortOrder
    registrationName?: SortOrderInput | SortOrder
    breed?: SortOrder
    variety?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    color?: SortOrder
    arrivalDate?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    nationality?: SortOrderInput | SortOrder
    sex?: SortOrder
    temperament?: SortOrderInput | SortOrder
    status?: SortOrder
    showGenealogy?: SortOrder
    notes?: SortOrderInput | SortOrder
    coat?: SortOrderInput | SortOrder
    profilePhoto?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    videos?: SortOrderInput | SortOrder
    microchip?: SortOrderInput | SortOrder
    microchipDate?: SortOrderInput | SortOrder
    dnaProfile?: SortOrderInput | SortOrder
    tagId?: SortOrderInput | SortOrder
    tattoo?: SortOrderInput | SortOrder
    coi?: SortOrderInput | SortOrder
    hipDysplasia?: SortOrderInput | SortOrder
    elbowDysplasia?: SortOrderInput | SortOrder
    patellaLuxation?: SortOrderInput | SortOrder
    healthDocsUrls?: SortOrderInput | SortOrder
    sireId?: SortOrderInput | SortOrder
    damId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pedigreeDocUrl?: SortOrderInput | SortOrder
    pedigreeId?: SortOrderInput | SortOrder
    _count?: DogCountOrderByAggregateInput
    _avg?: DogAvgOrderByAggregateInput
    _max?: DogMaxOrderByAggregateInput
    _min?: DogMinOrderByAggregateInput
    _sum?: DogSumOrderByAggregateInput
  }

  export type DogScalarWhereWithAggregatesInput = {
    AND?: DogScalarWhereWithAggregatesInput | DogScalarWhereWithAggregatesInput[]
    OR?: DogScalarWhereWithAggregatesInput[]
    NOT?: DogScalarWhereWithAggregatesInput | DogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dog"> | string
    registrySystem?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    nickname?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    name?: StringWithAggregatesFilter<"Dog"> | string
    registrationName?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    breed?: StringWithAggregatesFilter<"Dog"> | string
    variety?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Dog"> | Date | string | null
    color?: StringWithAggregatesFilter<"Dog"> | string
    arrivalDate?: DateTimeNullableWithAggregatesFilter<"Dog"> | Date | string | null
    height?: FloatNullableWithAggregatesFilter<"Dog"> | number | null
    nationality?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    sex?: StringWithAggregatesFilter<"Dog"> | string
    temperament?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    status?: StringWithAggregatesFilter<"Dog"> | string
    showGenealogy?: BoolWithAggregatesFilter<"Dog"> | boolean
    notes?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    coat?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    profilePhoto?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    media?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    videos?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    microchip?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    microchipDate?: DateTimeNullableWithAggregatesFilter<"Dog"> | Date | string | null
    dnaProfile?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    tagId?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    tattoo?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    coi?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    hipDysplasia?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    elbowDysplasia?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    patellaLuxation?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    healthDocsUrls?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    sireId?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    damId?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dog"> | Date | string
    pedigreeDocUrl?: StringNullableWithAggregatesFilter<"Dog"> | string | null
    pedigreeId?: StringNullableWithAggregatesFilter<"Dog"> | string | null
  }

  export type LeadWhereInput = {
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    id?: StringFilter<"Lead"> | string
    name?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    interest?: StringFilter<"Lead"> | string
    status?: StringFilter<"Lead"> | string
    answers?: StringFilter<"Lead"> | string
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }

  export type LeadOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    interest?: SortOrder
    status?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeadWhereInput | LeadWhereInput[]
    OR?: LeadWhereInput[]
    NOT?: LeadWhereInput | LeadWhereInput[]
    name?: StringFilter<"Lead"> | string
    email?: StringFilter<"Lead"> | string
    phone?: StringFilter<"Lead"> | string
    interest?: StringFilter<"Lead"> | string
    status?: StringFilter<"Lead"> | string
    answers?: StringFilter<"Lead"> | string
    createdAt?: DateTimeFilter<"Lead"> | Date | string
    updatedAt?: DateTimeFilter<"Lead"> | Date | string
  }, "id">

  export type LeadOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    interest?: SortOrder
    status?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LeadCountOrderByAggregateInput
    _max?: LeadMaxOrderByAggregateInput
    _min?: LeadMinOrderByAggregateInput
  }

  export type LeadScalarWhereWithAggregatesInput = {
    AND?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    OR?: LeadScalarWhereWithAggregatesInput[]
    NOT?: LeadScalarWhereWithAggregatesInput | LeadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lead"> | string
    name?: StringWithAggregatesFilter<"Lead"> | string
    email?: StringWithAggregatesFilter<"Lead"> | string
    phone?: StringWithAggregatesFilter<"Lead"> | string
    interest?: StringWithAggregatesFilter<"Lead"> | string
    status?: StringWithAggregatesFilter<"Lead"> | string
    answers?: StringWithAggregatesFilter<"Lead"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lead"> | Date | string
  }

  export type LitterWhereInput = {
    AND?: LitterWhereInput | LitterWhereInput[]
    OR?: LitterWhereInput[]
    NOT?: LitterWhereInput | LitterWhereInput[]
    id?: StringFilter<"Litter"> | string
    title?: StringNullableFilter<"Litter"> | string | null
    matingDate?: DateTimeNullableFilter<"Litter"> | Date | string | null
    expectedBirthDate?: DateTimeNullableFilter<"Litter"> | Date | string | null
    birthDate?: DateTimeNullableFilter<"Litter"> | Date | string | null
    status?: StringFilter<"Litter"> | string
    sireId?: StringNullableFilter<"Litter"> | string | null
    damId?: StringNullableFilter<"Litter"> | string | null
    media?: StringNullableFilter<"Litter"> | string | null
    createdAt?: DateTimeFilter<"Litter"> | Date | string
    updatedAt?: DateTimeFilter<"Litter"> | Date | string
    price?: FloatNullableFilter<"Litter"> | number | null
    Dog_Litter_damIdToDog?: XOR<DogNullableRelationFilter, DogWhereInput> | null
    Dog_Litter_sireIdToDog?: XOR<DogNullableRelationFilter, DogWhereInput> | null
    Puppy?: PuppyListRelationFilter
  }

  export type LitterOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    matingDate?: SortOrderInput | SortOrder
    expectedBirthDate?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    status?: SortOrder
    sireId?: SortOrderInput | SortOrder
    damId?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrderInput | SortOrder
    Dog_Litter_damIdToDog?: DogOrderByWithRelationInput
    Dog_Litter_sireIdToDog?: DogOrderByWithRelationInput
    Puppy?: PuppyOrderByRelationAggregateInput
  }

  export type LitterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LitterWhereInput | LitterWhereInput[]
    OR?: LitterWhereInput[]
    NOT?: LitterWhereInput | LitterWhereInput[]
    title?: StringNullableFilter<"Litter"> | string | null
    matingDate?: DateTimeNullableFilter<"Litter"> | Date | string | null
    expectedBirthDate?: DateTimeNullableFilter<"Litter"> | Date | string | null
    birthDate?: DateTimeNullableFilter<"Litter"> | Date | string | null
    status?: StringFilter<"Litter"> | string
    sireId?: StringNullableFilter<"Litter"> | string | null
    damId?: StringNullableFilter<"Litter"> | string | null
    media?: StringNullableFilter<"Litter"> | string | null
    createdAt?: DateTimeFilter<"Litter"> | Date | string
    updatedAt?: DateTimeFilter<"Litter"> | Date | string
    price?: FloatNullableFilter<"Litter"> | number | null
    Dog_Litter_damIdToDog?: XOR<DogNullableRelationFilter, DogWhereInput> | null
    Dog_Litter_sireIdToDog?: XOR<DogNullableRelationFilter, DogWhereInput> | null
    Puppy?: PuppyListRelationFilter
  }, "id">

  export type LitterOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    matingDate?: SortOrderInput | SortOrder
    expectedBirthDate?: SortOrderInput | SortOrder
    birthDate?: SortOrderInput | SortOrder
    status?: SortOrder
    sireId?: SortOrderInput | SortOrder
    damId?: SortOrderInput | SortOrder
    media?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrderInput | SortOrder
    _count?: LitterCountOrderByAggregateInput
    _avg?: LitterAvgOrderByAggregateInput
    _max?: LitterMaxOrderByAggregateInput
    _min?: LitterMinOrderByAggregateInput
    _sum?: LitterSumOrderByAggregateInput
  }

  export type LitterScalarWhereWithAggregatesInput = {
    AND?: LitterScalarWhereWithAggregatesInput | LitterScalarWhereWithAggregatesInput[]
    OR?: LitterScalarWhereWithAggregatesInput[]
    NOT?: LitterScalarWhereWithAggregatesInput | LitterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Litter"> | string
    title?: StringNullableWithAggregatesFilter<"Litter"> | string | null
    matingDate?: DateTimeNullableWithAggregatesFilter<"Litter"> | Date | string | null
    expectedBirthDate?: DateTimeNullableWithAggregatesFilter<"Litter"> | Date | string | null
    birthDate?: DateTimeNullableWithAggregatesFilter<"Litter"> | Date | string | null
    status?: StringWithAggregatesFilter<"Litter"> | string
    sireId?: StringNullableWithAggregatesFilter<"Litter"> | string | null
    damId?: StringNullableWithAggregatesFilter<"Litter"> | string | null
    media?: StringNullableWithAggregatesFilter<"Litter"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Litter"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Litter"> | Date | string
    price?: FloatNullableWithAggregatesFilter<"Litter"> | number | null
  }

  export type PuppyWhereInput = {
    AND?: PuppyWhereInput | PuppyWhereInput[]
    OR?: PuppyWhereInput[]
    NOT?: PuppyWhereInput | PuppyWhereInput[]
    id?: StringFilter<"Puppy"> | string
    name?: StringNullableFilter<"Puppy"> | string | null
    sex?: StringFilter<"Puppy"> | string
    color?: StringFilter<"Puppy"> | string
    coat?: StringNullableFilter<"Puppy"> | string | null
    price?: FloatNullableFilter<"Puppy"> | number | null
    status?: StringFilter<"Puppy"> | string
    buyerId?: StringNullableFilter<"Puppy"> | string | null
    saleDate?: DateTimeNullableFilter<"Puppy"> | Date | string | null
    litterId?: StringFilter<"Puppy"> | string
    createdAt?: DateTimeFilter<"Puppy"> | Date | string
    updatedAt?: DateTimeFilter<"Puppy"> | Date | string
    birthWeight?: FloatNullableFilter<"Puppy"> | number | null
    photo?: StringNullableFilter<"Puppy"> | string | null
    Litter?: XOR<LitterRelationFilter, LitterWhereInput>
    Client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
    Vaccine?: VaccineListRelationFilter
  }

  export type PuppyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    sex?: SortOrder
    color?: SortOrder
    coat?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    buyerId?: SortOrderInput | SortOrder
    saleDate?: SortOrderInput | SortOrder
    litterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    birthWeight?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    Litter?: LitterOrderByWithRelationInput
    Client?: ClientOrderByWithRelationInput
    Vaccine?: VaccineOrderByRelationAggregateInput
  }

  export type PuppyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PuppyWhereInput | PuppyWhereInput[]
    OR?: PuppyWhereInput[]
    NOT?: PuppyWhereInput | PuppyWhereInput[]
    name?: StringNullableFilter<"Puppy"> | string | null
    sex?: StringFilter<"Puppy"> | string
    color?: StringFilter<"Puppy"> | string
    coat?: StringNullableFilter<"Puppy"> | string | null
    price?: FloatNullableFilter<"Puppy"> | number | null
    status?: StringFilter<"Puppy"> | string
    buyerId?: StringNullableFilter<"Puppy"> | string | null
    saleDate?: DateTimeNullableFilter<"Puppy"> | Date | string | null
    litterId?: StringFilter<"Puppy"> | string
    createdAt?: DateTimeFilter<"Puppy"> | Date | string
    updatedAt?: DateTimeFilter<"Puppy"> | Date | string
    birthWeight?: FloatNullableFilter<"Puppy"> | number | null
    photo?: StringNullableFilter<"Puppy"> | string | null
    Litter?: XOR<LitterRelationFilter, LitterWhereInput>
    Client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
    Vaccine?: VaccineListRelationFilter
  }, "id">

  export type PuppyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    sex?: SortOrder
    color?: SortOrder
    coat?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    status?: SortOrder
    buyerId?: SortOrderInput | SortOrder
    saleDate?: SortOrderInput | SortOrder
    litterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    birthWeight?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    _count?: PuppyCountOrderByAggregateInput
    _avg?: PuppyAvgOrderByAggregateInput
    _max?: PuppyMaxOrderByAggregateInput
    _min?: PuppyMinOrderByAggregateInput
    _sum?: PuppySumOrderByAggregateInput
  }

  export type PuppyScalarWhereWithAggregatesInput = {
    AND?: PuppyScalarWhereWithAggregatesInput | PuppyScalarWhereWithAggregatesInput[]
    OR?: PuppyScalarWhereWithAggregatesInput[]
    NOT?: PuppyScalarWhereWithAggregatesInput | PuppyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Puppy"> | string
    name?: StringNullableWithAggregatesFilter<"Puppy"> | string | null
    sex?: StringWithAggregatesFilter<"Puppy"> | string
    color?: StringWithAggregatesFilter<"Puppy"> | string
    coat?: StringNullableWithAggregatesFilter<"Puppy"> | string | null
    price?: FloatNullableWithAggregatesFilter<"Puppy"> | number | null
    status?: StringWithAggregatesFilter<"Puppy"> | string
    buyerId?: StringNullableWithAggregatesFilter<"Puppy"> | string | null
    saleDate?: DateTimeNullableWithAggregatesFilter<"Puppy"> | Date | string | null
    litterId?: StringWithAggregatesFilter<"Puppy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Puppy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Puppy"> | Date | string
    birthWeight?: FloatNullableWithAggregatesFilter<"Puppy"> | number | null
    photo?: StringNullableWithAggregatesFilter<"Puppy"> | string | null
  }

  export type SiteConfigWhereInput = {
    AND?: SiteConfigWhereInput | SiteConfigWhereInput[]
    OR?: SiteConfigWhereInput[]
    NOT?: SiteConfigWhereInput | SiteConfigWhereInput[]
    id?: StringFilter<"SiteConfig"> | string
    key?: StringFilter<"SiteConfig"> | string
    value?: StringFilter<"SiteConfig"> | string
    label?: StringNullableFilter<"SiteConfig"> | string | null
    type?: StringFilter<"SiteConfig"> | string
    updatedAt?: DateTimeFilter<"SiteConfig"> | Date | string
  }

  export type SiteConfigOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    label?: SortOrderInput | SortOrder
    type?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: SiteConfigWhereInput | SiteConfigWhereInput[]
    OR?: SiteConfigWhereInput[]
    NOT?: SiteConfigWhereInput | SiteConfigWhereInput[]
    value?: StringFilter<"SiteConfig"> | string
    label?: StringNullableFilter<"SiteConfig"> | string | null
    type?: StringFilter<"SiteConfig"> | string
    updatedAt?: DateTimeFilter<"SiteConfig"> | Date | string
  }, "id" | "key">

  export type SiteConfigOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    label?: SortOrderInput | SortOrder
    type?: SortOrder
    updatedAt?: SortOrder
    _count?: SiteConfigCountOrderByAggregateInput
    _max?: SiteConfigMaxOrderByAggregateInput
    _min?: SiteConfigMinOrderByAggregateInput
  }

  export type SiteConfigScalarWhereWithAggregatesInput = {
    AND?: SiteConfigScalarWhereWithAggregatesInput | SiteConfigScalarWhereWithAggregatesInput[]
    OR?: SiteConfigScalarWhereWithAggregatesInput[]
    NOT?: SiteConfigScalarWhereWithAggregatesInput | SiteConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SiteConfig"> | string
    key?: StringWithAggregatesFilter<"SiteConfig"> | string
    value?: StringWithAggregatesFilter<"SiteConfig"> | string
    label?: StringNullableWithAggregatesFilter<"SiteConfig"> | string | null
    type?: StringWithAggregatesFilter<"SiteConfig"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteConfig"> | Date | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    clientId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    Client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    clientId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Client?: ClientOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    type?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    clientId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    Client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    clientId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    type?: StringWithAggregatesFilter<"Transaction"> | string
    category?: StringWithAggregatesFilter<"Transaction"> | string
    description?: StringWithAggregatesFilter<"Transaction"> | string
    amount?: FloatWithAggregatesFilter<"Transaction"> | number
    date?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    clientId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type VaccineWhereInput = {
    AND?: VaccineWhereInput | VaccineWhereInput[]
    OR?: VaccineWhereInput[]
    NOT?: VaccineWhereInput | VaccineWhereInput[]
    id?: StringFilter<"Vaccine"> | string
    name?: StringFilter<"Vaccine"> | string
    dueDate?: DateTimeFilter<"Vaccine"> | Date | string
    appliedDate?: DateTimeNullableFilter<"Vaccine"> | Date | string | null
    status?: StringFilter<"Vaccine"> | string
    notes?: StringNullableFilter<"Vaccine"> | string | null
    dogId?: StringNullableFilter<"Vaccine"> | string | null
    puppyId?: StringNullableFilter<"Vaccine"> | string | null
    createdAt?: DateTimeFilter<"Vaccine"> | Date | string
    updatedAt?: DateTimeFilter<"Vaccine"> | Date | string
    Puppy?: XOR<PuppyNullableRelationFilter, PuppyWhereInput> | null
    Dog?: XOR<DogNullableRelationFilter, DogWhereInput> | null
  }

  export type VaccineOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dueDate?: SortOrder
    appliedDate?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    dogId?: SortOrderInput | SortOrder
    puppyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Puppy?: PuppyOrderByWithRelationInput
    Dog?: DogOrderByWithRelationInput
  }

  export type VaccineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VaccineWhereInput | VaccineWhereInput[]
    OR?: VaccineWhereInput[]
    NOT?: VaccineWhereInput | VaccineWhereInput[]
    name?: StringFilter<"Vaccine"> | string
    dueDate?: DateTimeFilter<"Vaccine"> | Date | string
    appliedDate?: DateTimeNullableFilter<"Vaccine"> | Date | string | null
    status?: StringFilter<"Vaccine"> | string
    notes?: StringNullableFilter<"Vaccine"> | string | null
    dogId?: StringNullableFilter<"Vaccine"> | string | null
    puppyId?: StringNullableFilter<"Vaccine"> | string | null
    createdAt?: DateTimeFilter<"Vaccine"> | Date | string
    updatedAt?: DateTimeFilter<"Vaccine"> | Date | string
    Puppy?: XOR<PuppyNullableRelationFilter, PuppyWhereInput> | null
    Dog?: XOR<DogNullableRelationFilter, DogWhereInput> | null
  }, "id">

  export type VaccineOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dueDate?: SortOrder
    appliedDate?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    dogId?: SortOrderInput | SortOrder
    puppyId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VaccineCountOrderByAggregateInput
    _max?: VaccineMaxOrderByAggregateInput
    _min?: VaccineMinOrderByAggregateInput
  }

  export type VaccineScalarWhereWithAggregatesInput = {
    AND?: VaccineScalarWhereWithAggregatesInput | VaccineScalarWhereWithAggregatesInput[]
    OR?: VaccineScalarWhereWithAggregatesInput[]
    NOT?: VaccineScalarWhereWithAggregatesInput | VaccineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vaccine"> | string
    name?: StringWithAggregatesFilter<"Vaccine"> | string
    dueDate?: DateTimeWithAggregatesFilter<"Vaccine"> | Date | string
    appliedDate?: DateTimeNullableWithAggregatesFilter<"Vaccine"> | Date | string | null
    status?: StringWithAggregatesFilter<"Vaccine"> | string
    notes?: StringNullableWithAggregatesFilter<"Vaccine"> | string | null
    dogId?: StringNullableWithAggregatesFilter<"Vaccine"> | string | null
    puppyId?: StringNullableWithAggregatesFilter<"Vaccine"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Vaccine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Vaccine"> | Date | string
  }

  export type ClientCreateInput = {
    id: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Puppy?: PuppyCreateNestedManyWithoutClientInput
    Transaction?: TransactionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Puppy?: PuppyUncheckedCreateNestedManyWithoutClientInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Puppy?: PuppyUpdateManyWithoutClientNestedInput
    Transaction?: TransactionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Puppy?: PuppyUncheckedUpdateManyWithoutClientNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DogCreateInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    Dog_Dog_damIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_damIdToDogInput
    other_Dog_Dog_damIdToDog?: DogCreateNestedManyWithoutDog_Dog_damIdToDogInput
    Dog_Dog_sireIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_sireIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    sireId?: string | null
    damId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_damIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    Dog_Dog_damIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_damIdToDogNestedInput
    other_Dog_Dog_damIdToDog?: DogUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    Dog_Dog_sireIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_sireIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUncheckedUpdateManyWithoutDogNestedInput
  }

  export type DogCreateManyInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    sireId?: string | null
    damId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
  }

  export type DogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeadCreateInput = {
    id: string
    name: string
    email: string
    phone: string
    interest: string
    status?: string
    answers: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type LeadUncheckedCreateInput = {
    id: string
    name: string
    email: string
    phone: string
    interest: string
    status?: string
    answers: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type LeadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadCreateManyInput = {
    id: string
    name: string
    email: string
    phone: string
    interest: string
    status?: string
    answers: string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type LeadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LeadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    answers?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LitterCreateInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
    Dog_Litter_damIdToDog?: DogCreateNestedOneWithoutLitter_Litter_damIdToDogInput
    Dog_Litter_sireIdToDog?: DogCreateNestedOneWithoutLitter_Litter_sireIdToDogInput
    Puppy?: PuppyCreateNestedManyWithoutLitterInput
  }

  export type LitterUncheckedCreateInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    sireId?: string | null
    damId?: string | null
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
    Puppy?: PuppyUncheckedCreateNestedManyWithoutLitterInput
  }

  export type LitterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    Dog_Litter_damIdToDog?: DogUpdateOneWithoutLitter_Litter_damIdToDogNestedInput
    Dog_Litter_sireIdToDog?: DogUpdateOneWithoutLitter_Litter_sireIdToDogNestedInput
    Puppy?: PuppyUpdateManyWithoutLitterNestedInput
  }

  export type LitterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    Puppy?: PuppyUncheckedUpdateManyWithoutLitterNestedInput
  }

  export type LitterCreateManyInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    sireId?: string | null
    damId?: string | null
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
  }

  export type LitterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LitterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PuppyCreateInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    saleDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
    Litter: LitterCreateNestedOneWithoutPuppyInput
    Client?: ClientCreateNestedOneWithoutPuppyInput
    Vaccine?: VaccineCreateNestedManyWithoutPuppyInput
  }

  export type PuppyUncheckedCreateInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    buyerId?: string | null
    saleDate?: Date | string | null
    litterId: string
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutPuppyInput
  }

  export type PuppyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Litter?: LitterUpdateOneRequiredWithoutPuppyNestedInput
    Client?: ClientUpdateOneWithoutPuppyNestedInput
    Vaccine?: VaccineUpdateManyWithoutPuppyNestedInput
  }

  export type PuppyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    litterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Vaccine?: VaccineUncheckedUpdateManyWithoutPuppyNestedInput
  }

  export type PuppyCreateManyInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    buyerId?: string | null
    saleDate?: Date | string | null
    litterId: string
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
  }

  export type PuppyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PuppyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    litterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiteConfigCreateInput = {
    id: string
    key: string
    value: string
    label?: string | null
    type?: string
    updatedAt: Date | string
  }

  export type SiteConfigUncheckedCreateInput = {
    id: string
    key: string
    value: string
    label?: string | null
    type?: string
    updatedAt: Date | string
  }

  export type SiteConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteConfigCreateManyInput = {
    id: string
    key: string
    value: string
    label?: string | null
    type?: string
    updatedAt: Date | string
  }

  export type SiteConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateInput = {
    id: string
    type: string
    category: string
    description: string
    amount: number
    date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
    Client?: ClientCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id: string
    type: string
    category: string
    description: string
    amount: number
    date: Date | string
    clientId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Client?: ClientUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id: string
    type: string
    category: string
    description: string
    amount: number
    date: Date | string
    clientId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccineCreateInput = {
    id: string
    name: string
    dueDate: Date | string
    appliedDate?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Puppy?: PuppyCreateNestedOneWithoutVaccineInput
    Dog?: DogCreateNestedOneWithoutVaccineInput
  }

  export type VaccineUncheckedCreateInput = {
    id: string
    name: string
    dueDate: Date | string
    appliedDate?: Date | string | null
    status?: string
    notes?: string | null
    dogId?: string | null
    puppyId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type VaccineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Puppy?: PuppyUpdateOneWithoutVaccineNestedInput
    Dog?: DogUpdateOneWithoutVaccineNestedInput
  }

  export type VaccineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dogId?: NullableStringFieldUpdateOperationsInput | string | null
    puppyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccineCreateManyInput = {
    id: string
    name: string
    dueDate: Date | string
    appliedDate?: Date | string | null
    status?: string
    notes?: string | null
    dogId?: string | null
    puppyId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type VaccineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dogId?: NullableStringFieldUpdateOperationsInput | string | null
    puppyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PuppyListRelationFilter = {
    every?: PuppyWhereInput
    some?: PuppyWhereInput
    none?: PuppyWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PuppyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cpf?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DogNullableRelationFilter = {
    is?: DogWhereInput | null
    isNot?: DogWhereInput | null
  }

  export type DogListRelationFilter = {
    every?: DogWhereInput
    some?: DogWhereInput
    none?: DogWhereInput
  }

  export type LitterListRelationFilter = {
    every?: LitterWhereInput
    some?: LitterWhereInput
    none?: LitterWhereInput
  }

  export type VaccineListRelationFilter = {
    every?: VaccineWhereInput
    some?: VaccineWhereInput
    none?: VaccineWhereInput
  }

  export type DogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LitterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VaccineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DogCountOrderByAggregateInput = {
    id?: SortOrder
    registrySystem?: SortOrder
    nickname?: SortOrder
    name?: SortOrder
    registrationName?: SortOrder
    breed?: SortOrder
    variety?: SortOrder
    birthDate?: SortOrder
    color?: SortOrder
    arrivalDate?: SortOrder
    height?: SortOrder
    nationality?: SortOrder
    sex?: SortOrder
    temperament?: SortOrder
    status?: SortOrder
    showGenealogy?: SortOrder
    notes?: SortOrder
    coat?: SortOrder
    profilePhoto?: SortOrder
    media?: SortOrder
    videos?: SortOrder
    microchip?: SortOrder
    microchipDate?: SortOrder
    dnaProfile?: SortOrder
    tagId?: SortOrder
    tattoo?: SortOrder
    coi?: SortOrder
    hipDysplasia?: SortOrder
    elbowDysplasia?: SortOrder
    patellaLuxation?: SortOrder
    healthDocsUrls?: SortOrder
    sireId?: SortOrder
    damId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pedigreeDocUrl?: SortOrder
    pedigreeId?: SortOrder
  }

  export type DogAvgOrderByAggregateInput = {
    height?: SortOrder
  }

  export type DogMaxOrderByAggregateInput = {
    id?: SortOrder
    registrySystem?: SortOrder
    nickname?: SortOrder
    name?: SortOrder
    registrationName?: SortOrder
    breed?: SortOrder
    variety?: SortOrder
    birthDate?: SortOrder
    color?: SortOrder
    arrivalDate?: SortOrder
    height?: SortOrder
    nationality?: SortOrder
    sex?: SortOrder
    temperament?: SortOrder
    status?: SortOrder
    showGenealogy?: SortOrder
    notes?: SortOrder
    coat?: SortOrder
    profilePhoto?: SortOrder
    media?: SortOrder
    videos?: SortOrder
    microchip?: SortOrder
    microchipDate?: SortOrder
    dnaProfile?: SortOrder
    tagId?: SortOrder
    tattoo?: SortOrder
    coi?: SortOrder
    hipDysplasia?: SortOrder
    elbowDysplasia?: SortOrder
    patellaLuxation?: SortOrder
    healthDocsUrls?: SortOrder
    sireId?: SortOrder
    damId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pedigreeDocUrl?: SortOrder
    pedigreeId?: SortOrder
  }

  export type DogMinOrderByAggregateInput = {
    id?: SortOrder
    registrySystem?: SortOrder
    nickname?: SortOrder
    name?: SortOrder
    registrationName?: SortOrder
    breed?: SortOrder
    variety?: SortOrder
    birthDate?: SortOrder
    color?: SortOrder
    arrivalDate?: SortOrder
    height?: SortOrder
    nationality?: SortOrder
    sex?: SortOrder
    temperament?: SortOrder
    status?: SortOrder
    showGenealogy?: SortOrder
    notes?: SortOrder
    coat?: SortOrder
    profilePhoto?: SortOrder
    media?: SortOrder
    videos?: SortOrder
    microchip?: SortOrder
    microchipDate?: SortOrder
    dnaProfile?: SortOrder
    tagId?: SortOrder
    tattoo?: SortOrder
    coi?: SortOrder
    hipDysplasia?: SortOrder
    elbowDysplasia?: SortOrder
    patellaLuxation?: SortOrder
    healthDocsUrls?: SortOrder
    sireId?: SortOrder
    damId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pedigreeDocUrl?: SortOrder
    pedigreeId?: SortOrder
  }

  export type DogSumOrderByAggregateInput = {
    height?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type LeadCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    interest?: SortOrder
    status?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    interest?: SortOrder
    status?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LeadMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    interest?: SortOrder
    status?: SortOrder
    answers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LitterCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    matingDate?: SortOrder
    expectedBirthDate?: SortOrder
    birthDate?: SortOrder
    status?: SortOrder
    sireId?: SortOrder
    damId?: SortOrder
    media?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
  }

  export type LitterAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type LitterMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    matingDate?: SortOrder
    expectedBirthDate?: SortOrder
    birthDate?: SortOrder
    status?: SortOrder
    sireId?: SortOrder
    damId?: SortOrder
    media?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
  }

  export type LitterMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    matingDate?: SortOrder
    expectedBirthDate?: SortOrder
    birthDate?: SortOrder
    status?: SortOrder
    sireId?: SortOrder
    damId?: SortOrder
    media?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    price?: SortOrder
  }

  export type LitterSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type LitterRelationFilter = {
    is?: LitterWhereInput
    isNot?: LitterWhereInput
  }

  export type ClientNullableRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type PuppyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    color?: SortOrder
    coat?: SortOrder
    price?: SortOrder
    status?: SortOrder
    buyerId?: SortOrder
    saleDate?: SortOrder
    litterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    birthWeight?: SortOrder
    photo?: SortOrder
  }

  export type PuppyAvgOrderByAggregateInput = {
    price?: SortOrder
    birthWeight?: SortOrder
  }

  export type PuppyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    color?: SortOrder
    coat?: SortOrder
    price?: SortOrder
    status?: SortOrder
    buyerId?: SortOrder
    saleDate?: SortOrder
    litterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    birthWeight?: SortOrder
    photo?: SortOrder
  }

  export type PuppyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sex?: SortOrder
    color?: SortOrder
    coat?: SortOrder
    price?: SortOrder
    status?: SortOrder
    buyerId?: SortOrder
    saleDate?: SortOrder
    litterId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    birthWeight?: SortOrder
    photo?: SortOrder
  }

  export type PuppySumOrderByAggregateInput = {
    price?: SortOrder
    birthWeight?: SortOrder
  }

  export type SiteConfigCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    label?: SortOrder
    type?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    label?: SortOrder
    type?: SortOrder
    updatedAt?: SortOrder
  }

  export type SiteConfigMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    label?: SortOrder
    type?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    category?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    clientId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PuppyNullableRelationFilter = {
    is?: PuppyWhereInput | null
    isNot?: PuppyWhereInput | null
  }

  export type VaccineCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dueDate?: SortOrder
    appliedDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    dogId?: SortOrder
    puppyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaccineMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dueDate?: SortOrder
    appliedDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    dogId?: SortOrder
    puppyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VaccineMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dueDate?: SortOrder
    appliedDate?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    dogId?: SortOrder
    puppyId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PuppyCreateNestedManyWithoutClientInput = {
    create?: XOR<PuppyCreateWithoutClientInput, PuppyUncheckedCreateWithoutClientInput> | PuppyCreateWithoutClientInput[] | PuppyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PuppyCreateOrConnectWithoutClientInput | PuppyCreateOrConnectWithoutClientInput[]
    createMany?: PuppyCreateManyClientInputEnvelope
    connect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutClientInput = {
    create?: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput> | TransactionCreateWithoutClientInput[] | TransactionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutClientInput | TransactionCreateOrConnectWithoutClientInput[]
    createMany?: TransactionCreateManyClientInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PuppyUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<PuppyCreateWithoutClientInput, PuppyUncheckedCreateWithoutClientInput> | PuppyCreateWithoutClientInput[] | PuppyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PuppyCreateOrConnectWithoutClientInput | PuppyCreateOrConnectWithoutClientInput[]
    createMany?: PuppyCreateManyClientInputEnvelope
    connect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput> | TransactionCreateWithoutClientInput[] | TransactionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutClientInput | TransactionCreateOrConnectWithoutClientInput[]
    createMany?: TransactionCreateManyClientInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PuppyUpdateManyWithoutClientNestedInput = {
    create?: XOR<PuppyCreateWithoutClientInput, PuppyUncheckedCreateWithoutClientInput> | PuppyCreateWithoutClientInput[] | PuppyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PuppyCreateOrConnectWithoutClientInput | PuppyCreateOrConnectWithoutClientInput[]
    upsert?: PuppyUpsertWithWhereUniqueWithoutClientInput | PuppyUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PuppyCreateManyClientInputEnvelope
    set?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    disconnect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    delete?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    connect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    update?: PuppyUpdateWithWhereUniqueWithoutClientInput | PuppyUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PuppyUpdateManyWithWhereWithoutClientInput | PuppyUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PuppyScalarWhereInput | PuppyScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutClientNestedInput = {
    create?: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput> | TransactionCreateWithoutClientInput[] | TransactionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutClientInput | TransactionCreateOrConnectWithoutClientInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutClientInput | TransactionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TransactionCreateManyClientInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutClientInput | TransactionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutClientInput | TransactionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PuppyUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<PuppyCreateWithoutClientInput, PuppyUncheckedCreateWithoutClientInput> | PuppyCreateWithoutClientInput[] | PuppyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: PuppyCreateOrConnectWithoutClientInput | PuppyCreateOrConnectWithoutClientInput[]
    upsert?: PuppyUpsertWithWhereUniqueWithoutClientInput | PuppyUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: PuppyCreateManyClientInputEnvelope
    set?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    disconnect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    delete?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    connect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    update?: PuppyUpdateWithWhereUniqueWithoutClientInput | PuppyUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: PuppyUpdateManyWithWhereWithoutClientInput | PuppyUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: PuppyScalarWhereInput | PuppyScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput> | TransactionCreateWithoutClientInput[] | TransactionUncheckedCreateWithoutClientInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutClientInput | TransactionCreateOrConnectWithoutClientInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutClientInput | TransactionUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: TransactionCreateManyClientInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutClientInput | TransactionUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutClientInput | TransactionUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type DogCreateNestedOneWithoutOther_Dog_Dog_damIdToDogInput = {
    create?: XOR<DogCreateWithoutOther_Dog_Dog_damIdToDogInput, DogUncheckedCreateWithoutOther_Dog_Dog_damIdToDogInput>
    connectOrCreate?: DogCreateOrConnectWithoutOther_Dog_Dog_damIdToDogInput
    connect?: DogWhereUniqueInput
  }

  export type DogCreateNestedManyWithoutDog_Dog_damIdToDogInput = {
    create?: XOR<DogCreateWithoutDog_Dog_damIdToDogInput, DogUncheckedCreateWithoutDog_Dog_damIdToDogInput> | DogCreateWithoutDog_Dog_damIdToDogInput[] | DogUncheckedCreateWithoutDog_Dog_damIdToDogInput[]
    connectOrCreate?: DogCreateOrConnectWithoutDog_Dog_damIdToDogInput | DogCreateOrConnectWithoutDog_Dog_damIdToDogInput[]
    createMany?: DogCreateManyDog_Dog_damIdToDogInputEnvelope
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
  }

  export type DogCreateNestedOneWithoutOther_Dog_Dog_sireIdToDogInput = {
    create?: XOR<DogCreateWithoutOther_Dog_Dog_sireIdToDogInput, DogUncheckedCreateWithoutOther_Dog_Dog_sireIdToDogInput>
    connectOrCreate?: DogCreateOrConnectWithoutOther_Dog_Dog_sireIdToDogInput
    connect?: DogWhereUniqueInput
  }

  export type DogCreateNestedManyWithoutDog_Dog_sireIdToDogInput = {
    create?: XOR<DogCreateWithoutDog_Dog_sireIdToDogInput, DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput> | DogCreateWithoutDog_Dog_sireIdToDogInput[] | DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput[]
    connectOrCreate?: DogCreateOrConnectWithoutDog_Dog_sireIdToDogInput | DogCreateOrConnectWithoutDog_Dog_sireIdToDogInput[]
    createMany?: DogCreateManyDog_Dog_sireIdToDogInputEnvelope
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
  }

  export type LitterCreateNestedManyWithoutDog_Litter_damIdToDogInput = {
    create?: XOR<LitterCreateWithoutDog_Litter_damIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput> | LitterCreateWithoutDog_Litter_damIdToDogInput[] | LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput[]
    connectOrCreate?: LitterCreateOrConnectWithoutDog_Litter_damIdToDogInput | LitterCreateOrConnectWithoutDog_Litter_damIdToDogInput[]
    createMany?: LitterCreateManyDog_Litter_damIdToDogInputEnvelope
    connect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
  }

  export type LitterCreateNestedManyWithoutDog_Litter_sireIdToDogInput = {
    create?: XOR<LitterCreateWithoutDog_Litter_sireIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput> | LitterCreateWithoutDog_Litter_sireIdToDogInput[] | LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput[]
    connectOrCreate?: LitterCreateOrConnectWithoutDog_Litter_sireIdToDogInput | LitterCreateOrConnectWithoutDog_Litter_sireIdToDogInput[]
    createMany?: LitterCreateManyDog_Litter_sireIdToDogInputEnvelope
    connect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
  }

  export type VaccineCreateNestedManyWithoutDogInput = {
    create?: XOR<VaccineCreateWithoutDogInput, VaccineUncheckedCreateWithoutDogInput> | VaccineCreateWithoutDogInput[] | VaccineUncheckedCreateWithoutDogInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutDogInput | VaccineCreateOrConnectWithoutDogInput[]
    createMany?: VaccineCreateManyDogInputEnvelope
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
  }

  export type DogUncheckedCreateNestedManyWithoutDog_Dog_damIdToDogInput = {
    create?: XOR<DogCreateWithoutDog_Dog_damIdToDogInput, DogUncheckedCreateWithoutDog_Dog_damIdToDogInput> | DogCreateWithoutDog_Dog_damIdToDogInput[] | DogUncheckedCreateWithoutDog_Dog_damIdToDogInput[]
    connectOrCreate?: DogCreateOrConnectWithoutDog_Dog_damIdToDogInput | DogCreateOrConnectWithoutDog_Dog_damIdToDogInput[]
    createMany?: DogCreateManyDog_Dog_damIdToDogInputEnvelope
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
  }

  export type DogUncheckedCreateNestedManyWithoutDog_Dog_sireIdToDogInput = {
    create?: XOR<DogCreateWithoutDog_Dog_sireIdToDogInput, DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput> | DogCreateWithoutDog_Dog_sireIdToDogInput[] | DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput[]
    connectOrCreate?: DogCreateOrConnectWithoutDog_Dog_sireIdToDogInput | DogCreateOrConnectWithoutDog_Dog_sireIdToDogInput[]
    createMany?: DogCreateManyDog_Dog_sireIdToDogInputEnvelope
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
  }

  export type LitterUncheckedCreateNestedManyWithoutDog_Litter_damIdToDogInput = {
    create?: XOR<LitterCreateWithoutDog_Litter_damIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput> | LitterCreateWithoutDog_Litter_damIdToDogInput[] | LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput[]
    connectOrCreate?: LitterCreateOrConnectWithoutDog_Litter_damIdToDogInput | LitterCreateOrConnectWithoutDog_Litter_damIdToDogInput[]
    createMany?: LitterCreateManyDog_Litter_damIdToDogInputEnvelope
    connect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
  }

  export type LitterUncheckedCreateNestedManyWithoutDog_Litter_sireIdToDogInput = {
    create?: XOR<LitterCreateWithoutDog_Litter_sireIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput> | LitterCreateWithoutDog_Litter_sireIdToDogInput[] | LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput[]
    connectOrCreate?: LitterCreateOrConnectWithoutDog_Litter_sireIdToDogInput | LitterCreateOrConnectWithoutDog_Litter_sireIdToDogInput[]
    createMany?: LitterCreateManyDog_Litter_sireIdToDogInputEnvelope
    connect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
  }

  export type VaccineUncheckedCreateNestedManyWithoutDogInput = {
    create?: XOR<VaccineCreateWithoutDogInput, VaccineUncheckedCreateWithoutDogInput> | VaccineCreateWithoutDogInput[] | VaccineUncheckedCreateWithoutDogInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutDogInput | VaccineCreateOrConnectWithoutDogInput[]
    createMany?: VaccineCreateManyDogInputEnvelope
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DogUpdateOneWithoutOther_Dog_Dog_damIdToDogNestedInput = {
    create?: XOR<DogCreateWithoutOther_Dog_Dog_damIdToDogInput, DogUncheckedCreateWithoutOther_Dog_Dog_damIdToDogInput>
    connectOrCreate?: DogCreateOrConnectWithoutOther_Dog_Dog_damIdToDogInput
    upsert?: DogUpsertWithoutOther_Dog_Dog_damIdToDogInput
    disconnect?: DogWhereInput | boolean
    delete?: DogWhereInput | boolean
    connect?: DogWhereUniqueInput
    update?: XOR<XOR<DogUpdateToOneWithWhereWithoutOther_Dog_Dog_damIdToDogInput, DogUpdateWithoutOther_Dog_Dog_damIdToDogInput>, DogUncheckedUpdateWithoutOther_Dog_Dog_damIdToDogInput>
  }

  export type DogUpdateManyWithoutDog_Dog_damIdToDogNestedInput = {
    create?: XOR<DogCreateWithoutDog_Dog_damIdToDogInput, DogUncheckedCreateWithoutDog_Dog_damIdToDogInput> | DogCreateWithoutDog_Dog_damIdToDogInput[] | DogUncheckedCreateWithoutDog_Dog_damIdToDogInput[]
    connectOrCreate?: DogCreateOrConnectWithoutDog_Dog_damIdToDogInput | DogCreateOrConnectWithoutDog_Dog_damIdToDogInput[]
    upsert?: DogUpsertWithWhereUniqueWithoutDog_Dog_damIdToDogInput | DogUpsertWithWhereUniqueWithoutDog_Dog_damIdToDogInput[]
    createMany?: DogCreateManyDog_Dog_damIdToDogInputEnvelope
    set?: DogWhereUniqueInput | DogWhereUniqueInput[]
    disconnect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    delete?: DogWhereUniqueInput | DogWhereUniqueInput[]
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    update?: DogUpdateWithWhereUniqueWithoutDog_Dog_damIdToDogInput | DogUpdateWithWhereUniqueWithoutDog_Dog_damIdToDogInput[]
    updateMany?: DogUpdateManyWithWhereWithoutDog_Dog_damIdToDogInput | DogUpdateManyWithWhereWithoutDog_Dog_damIdToDogInput[]
    deleteMany?: DogScalarWhereInput | DogScalarWhereInput[]
  }

  export type DogUpdateOneWithoutOther_Dog_Dog_sireIdToDogNestedInput = {
    create?: XOR<DogCreateWithoutOther_Dog_Dog_sireIdToDogInput, DogUncheckedCreateWithoutOther_Dog_Dog_sireIdToDogInput>
    connectOrCreate?: DogCreateOrConnectWithoutOther_Dog_Dog_sireIdToDogInput
    upsert?: DogUpsertWithoutOther_Dog_Dog_sireIdToDogInput
    disconnect?: DogWhereInput | boolean
    delete?: DogWhereInput | boolean
    connect?: DogWhereUniqueInput
    update?: XOR<XOR<DogUpdateToOneWithWhereWithoutOther_Dog_Dog_sireIdToDogInput, DogUpdateWithoutOther_Dog_Dog_sireIdToDogInput>, DogUncheckedUpdateWithoutOther_Dog_Dog_sireIdToDogInput>
  }

  export type DogUpdateManyWithoutDog_Dog_sireIdToDogNestedInput = {
    create?: XOR<DogCreateWithoutDog_Dog_sireIdToDogInput, DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput> | DogCreateWithoutDog_Dog_sireIdToDogInput[] | DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput[]
    connectOrCreate?: DogCreateOrConnectWithoutDog_Dog_sireIdToDogInput | DogCreateOrConnectWithoutDog_Dog_sireIdToDogInput[]
    upsert?: DogUpsertWithWhereUniqueWithoutDog_Dog_sireIdToDogInput | DogUpsertWithWhereUniqueWithoutDog_Dog_sireIdToDogInput[]
    createMany?: DogCreateManyDog_Dog_sireIdToDogInputEnvelope
    set?: DogWhereUniqueInput | DogWhereUniqueInput[]
    disconnect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    delete?: DogWhereUniqueInput | DogWhereUniqueInput[]
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    update?: DogUpdateWithWhereUniqueWithoutDog_Dog_sireIdToDogInput | DogUpdateWithWhereUniqueWithoutDog_Dog_sireIdToDogInput[]
    updateMany?: DogUpdateManyWithWhereWithoutDog_Dog_sireIdToDogInput | DogUpdateManyWithWhereWithoutDog_Dog_sireIdToDogInput[]
    deleteMany?: DogScalarWhereInput | DogScalarWhereInput[]
  }

  export type LitterUpdateManyWithoutDog_Litter_damIdToDogNestedInput = {
    create?: XOR<LitterCreateWithoutDog_Litter_damIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput> | LitterCreateWithoutDog_Litter_damIdToDogInput[] | LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput[]
    connectOrCreate?: LitterCreateOrConnectWithoutDog_Litter_damIdToDogInput | LitterCreateOrConnectWithoutDog_Litter_damIdToDogInput[]
    upsert?: LitterUpsertWithWhereUniqueWithoutDog_Litter_damIdToDogInput | LitterUpsertWithWhereUniqueWithoutDog_Litter_damIdToDogInput[]
    createMany?: LitterCreateManyDog_Litter_damIdToDogInputEnvelope
    set?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    disconnect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    delete?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    connect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    update?: LitterUpdateWithWhereUniqueWithoutDog_Litter_damIdToDogInput | LitterUpdateWithWhereUniqueWithoutDog_Litter_damIdToDogInput[]
    updateMany?: LitterUpdateManyWithWhereWithoutDog_Litter_damIdToDogInput | LitterUpdateManyWithWhereWithoutDog_Litter_damIdToDogInput[]
    deleteMany?: LitterScalarWhereInput | LitterScalarWhereInput[]
  }

  export type LitterUpdateManyWithoutDog_Litter_sireIdToDogNestedInput = {
    create?: XOR<LitterCreateWithoutDog_Litter_sireIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput> | LitterCreateWithoutDog_Litter_sireIdToDogInput[] | LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput[]
    connectOrCreate?: LitterCreateOrConnectWithoutDog_Litter_sireIdToDogInput | LitterCreateOrConnectWithoutDog_Litter_sireIdToDogInput[]
    upsert?: LitterUpsertWithWhereUniqueWithoutDog_Litter_sireIdToDogInput | LitterUpsertWithWhereUniqueWithoutDog_Litter_sireIdToDogInput[]
    createMany?: LitterCreateManyDog_Litter_sireIdToDogInputEnvelope
    set?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    disconnect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    delete?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    connect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    update?: LitterUpdateWithWhereUniqueWithoutDog_Litter_sireIdToDogInput | LitterUpdateWithWhereUniqueWithoutDog_Litter_sireIdToDogInput[]
    updateMany?: LitterUpdateManyWithWhereWithoutDog_Litter_sireIdToDogInput | LitterUpdateManyWithWhereWithoutDog_Litter_sireIdToDogInput[]
    deleteMany?: LitterScalarWhereInput | LitterScalarWhereInput[]
  }

  export type VaccineUpdateManyWithoutDogNestedInput = {
    create?: XOR<VaccineCreateWithoutDogInput, VaccineUncheckedCreateWithoutDogInput> | VaccineCreateWithoutDogInput[] | VaccineUncheckedCreateWithoutDogInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutDogInput | VaccineCreateOrConnectWithoutDogInput[]
    upsert?: VaccineUpsertWithWhereUniqueWithoutDogInput | VaccineUpsertWithWhereUniqueWithoutDogInput[]
    createMany?: VaccineCreateManyDogInputEnvelope
    set?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    disconnect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    delete?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    update?: VaccineUpdateWithWhereUniqueWithoutDogInput | VaccineUpdateWithWhereUniqueWithoutDogInput[]
    updateMany?: VaccineUpdateManyWithWhereWithoutDogInput | VaccineUpdateManyWithWhereWithoutDogInput[]
    deleteMany?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
  }

  export type DogUncheckedUpdateManyWithoutDog_Dog_damIdToDogNestedInput = {
    create?: XOR<DogCreateWithoutDog_Dog_damIdToDogInput, DogUncheckedCreateWithoutDog_Dog_damIdToDogInput> | DogCreateWithoutDog_Dog_damIdToDogInput[] | DogUncheckedCreateWithoutDog_Dog_damIdToDogInput[]
    connectOrCreate?: DogCreateOrConnectWithoutDog_Dog_damIdToDogInput | DogCreateOrConnectWithoutDog_Dog_damIdToDogInput[]
    upsert?: DogUpsertWithWhereUniqueWithoutDog_Dog_damIdToDogInput | DogUpsertWithWhereUniqueWithoutDog_Dog_damIdToDogInput[]
    createMany?: DogCreateManyDog_Dog_damIdToDogInputEnvelope
    set?: DogWhereUniqueInput | DogWhereUniqueInput[]
    disconnect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    delete?: DogWhereUniqueInput | DogWhereUniqueInput[]
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    update?: DogUpdateWithWhereUniqueWithoutDog_Dog_damIdToDogInput | DogUpdateWithWhereUniqueWithoutDog_Dog_damIdToDogInput[]
    updateMany?: DogUpdateManyWithWhereWithoutDog_Dog_damIdToDogInput | DogUpdateManyWithWhereWithoutDog_Dog_damIdToDogInput[]
    deleteMany?: DogScalarWhereInput | DogScalarWhereInput[]
  }

  export type DogUncheckedUpdateManyWithoutDog_Dog_sireIdToDogNestedInput = {
    create?: XOR<DogCreateWithoutDog_Dog_sireIdToDogInput, DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput> | DogCreateWithoutDog_Dog_sireIdToDogInput[] | DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput[]
    connectOrCreate?: DogCreateOrConnectWithoutDog_Dog_sireIdToDogInput | DogCreateOrConnectWithoutDog_Dog_sireIdToDogInput[]
    upsert?: DogUpsertWithWhereUniqueWithoutDog_Dog_sireIdToDogInput | DogUpsertWithWhereUniqueWithoutDog_Dog_sireIdToDogInput[]
    createMany?: DogCreateManyDog_Dog_sireIdToDogInputEnvelope
    set?: DogWhereUniqueInput | DogWhereUniqueInput[]
    disconnect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    delete?: DogWhereUniqueInput | DogWhereUniqueInput[]
    connect?: DogWhereUniqueInput | DogWhereUniqueInput[]
    update?: DogUpdateWithWhereUniqueWithoutDog_Dog_sireIdToDogInput | DogUpdateWithWhereUniqueWithoutDog_Dog_sireIdToDogInput[]
    updateMany?: DogUpdateManyWithWhereWithoutDog_Dog_sireIdToDogInput | DogUpdateManyWithWhereWithoutDog_Dog_sireIdToDogInput[]
    deleteMany?: DogScalarWhereInput | DogScalarWhereInput[]
  }

  export type LitterUncheckedUpdateManyWithoutDog_Litter_damIdToDogNestedInput = {
    create?: XOR<LitterCreateWithoutDog_Litter_damIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput> | LitterCreateWithoutDog_Litter_damIdToDogInput[] | LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput[]
    connectOrCreate?: LitterCreateOrConnectWithoutDog_Litter_damIdToDogInput | LitterCreateOrConnectWithoutDog_Litter_damIdToDogInput[]
    upsert?: LitterUpsertWithWhereUniqueWithoutDog_Litter_damIdToDogInput | LitterUpsertWithWhereUniqueWithoutDog_Litter_damIdToDogInput[]
    createMany?: LitterCreateManyDog_Litter_damIdToDogInputEnvelope
    set?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    disconnect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    delete?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    connect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    update?: LitterUpdateWithWhereUniqueWithoutDog_Litter_damIdToDogInput | LitterUpdateWithWhereUniqueWithoutDog_Litter_damIdToDogInput[]
    updateMany?: LitterUpdateManyWithWhereWithoutDog_Litter_damIdToDogInput | LitterUpdateManyWithWhereWithoutDog_Litter_damIdToDogInput[]
    deleteMany?: LitterScalarWhereInput | LitterScalarWhereInput[]
  }

  export type LitterUncheckedUpdateManyWithoutDog_Litter_sireIdToDogNestedInput = {
    create?: XOR<LitterCreateWithoutDog_Litter_sireIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput> | LitterCreateWithoutDog_Litter_sireIdToDogInput[] | LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput[]
    connectOrCreate?: LitterCreateOrConnectWithoutDog_Litter_sireIdToDogInput | LitterCreateOrConnectWithoutDog_Litter_sireIdToDogInput[]
    upsert?: LitterUpsertWithWhereUniqueWithoutDog_Litter_sireIdToDogInput | LitterUpsertWithWhereUniqueWithoutDog_Litter_sireIdToDogInput[]
    createMany?: LitterCreateManyDog_Litter_sireIdToDogInputEnvelope
    set?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    disconnect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    delete?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    connect?: LitterWhereUniqueInput | LitterWhereUniqueInput[]
    update?: LitterUpdateWithWhereUniqueWithoutDog_Litter_sireIdToDogInput | LitterUpdateWithWhereUniqueWithoutDog_Litter_sireIdToDogInput[]
    updateMany?: LitterUpdateManyWithWhereWithoutDog_Litter_sireIdToDogInput | LitterUpdateManyWithWhereWithoutDog_Litter_sireIdToDogInput[]
    deleteMany?: LitterScalarWhereInput | LitterScalarWhereInput[]
  }

  export type VaccineUncheckedUpdateManyWithoutDogNestedInput = {
    create?: XOR<VaccineCreateWithoutDogInput, VaccineUncheckedCreateWithoutDogInput> | VaccineCreateWithoutDogInput[] | VaccineUncheckedCreateWithoutDogInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutDogInput | VaccineCreateOrConnectWithoutDogInput[]
    upsert?: VaccineUpsertWithWhereUniqueWithoutDogInput | VaccineUpsertWithWhereUniqueWithoutDogInput[]
    createMany?: VaccineCreateManyDogInputEnvelope
    set?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    disconnect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    delete?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    update?: VaccineUpdateWithWhereUniqueWithoutDogInput | VaccineUpdateWithWhereUniqueWithoutDogInput[]
    updateMany?: VaccineUpdateManyWithWhereWithoutDogInput | VaccineUpdateManyWithWhereWithoutDogInput[]
    deleteMany?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
  }

  export type DogCreateNestedOneWithoutLitter_Litter_damIdToDogInput = {
    create?: XOR<DogCreateWithoutLitter_Litter_damIdToDogInput, DogUncheckedCreateWithoutLitter_Litter_damIdToDogInput>
    connectOrCreate?: DogCreateOrConnectWithoutLitter_Litter_damIdToDogInput
    connect?: DogWhereUniqueInput
  }

  export type DogCreateNestedOneWithoutLitter_Litter_sireIdToDogInput = {
    create?: XOR<DogCreateWithoutLitter_Litter_sireIdToDogInput, DogUncheckedCreateWithoutLitter_Litter_sireIdToDogInput>
    connectOrCreate?: DogCreateOrConnectWithoutLitter_Litter_sireIdToDogInput
    connect?: DogWhereUniqueInput
  }

  export type PuppyCreateNestedManyWithoutLitterInput = {
    create?: XOR<PuppyCreateWithoutLitterInput, PuppyUncheckedCreateWithoutLitterInput> | PuppyCreateWithoutLitterInput[] | PuppyUncheckedCreateWithoutLitterInput[]
    connectOrCreate?: PuppyCreateOrConnectWithoutLitterInput | PuppyCreateOrConnectWithoutLitterInput[]
    createMany?: PuppyCreateManyLitterInputEnvelope
    connect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
  }

  export type PuppyUncheckedCreateNestedManyWithoutLitterInput = {
    create?: XOR<PuppyCreateWithoutLitterInput, PuppyUncheckedCreateWithoutLitterInput> | PuppyCreateWithoutLitterInput[] | PuppyUncheckedCreateWithoutLitterInput[]
    connectOrCreate?: PuppyCreateOrConnectWithoutLitterInput | PuppyCreateOrConnectWithoutLitterInput[]
    createMany?: PuppyCreateManyLitterInputEnvelope
    connect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
  }

  export type DogUpdateOneWithoutLitter_Litter_damIdToDogNestedInput = {
    create?: XOR<DogCreateWithoutLitter_Litter_damIdToDogInput, DogUncheckedCreateWithoutLitter_Litter_damIdToDogInput>
    connectOrCreate?: DogCreateOrConnectWithoutLitter_Litter_damIdToDogInput
    upsert?: DogUpsertWithoutLitter_Litter_damIdToDogInput
    disconnect?: DogWhereInput | boolean
    delete?: DogWhereInput | boolean
    connect?: DogWhereUniqueInput
    update?: XOR<XOR<DogUpdateToOneWithWhereWithoutLitter_Litter_damIdToDogInput, DogUpdateWithoutLitter_Litter_damIdToDogInput>, DogUncheckedUpdateWithoutLitter_Litter_damIdToDogInput>
  }

  export type DogUpdateOneWithoutLitter_Litter_sireIdToDogNestedInput = {
    create?: XOR<DogCreateWithoutLitter_Litter_sireIdToDogInput, DogUncheckedCreateWithoutLitter_Litter_sireIdToDogInput>
    connectOrCreate?: DogCreateOrConnectWithoutLitter_Litter_sireIdToDogInput
    upsert?: DogUpsertWithoutLitter_Litter_sireIdToDogInput
    disconnect?: DogWhereInput | boolean
    delete?: DogWhereInput | boolean
    connect?: DogWhereUniqueInput
    update?: XOR<XOR<DogUpdateToOneWithWhereWithoutLitter_Litter_sireIdToDogInput, DogUpdateWithoutLitter_Litter_sireIdToDogInput>, DogUncheckedUpdateWithoutLitter_Litter_sireIdToDogInput>
  }

  export type PuppyUpdateManyWithoutLitterNestedInput = {
    create?: XOR<PuppyCreateWithoutLitterInput, PuppyUncheckedCreateWithoutLitterInput> | PuppyCreateWithoutLitterInput[] | PuppyUncheckedCreateWithoutLitterInput[]
    connectOrCreate?: PuppyCreateOrConnectWithoutLitterInput | PuppyCreateOrConnectWithoutLitterInput[]
    upsert?: PuppyUpsertWithWhereUniqueWithoutLitterInput | PuppyUpsertWithWhereUniqueWithoutLitterInput[]
    createMany?: PuppyCreateManyLitterInputEnvelope
    set?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    disconnect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    delete?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    connect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    update?: PuppyUpdateWithWhereUniqueWithoutLitterInput | PuppyUpdateWithWhereUniqueWithoutLitterInput[]
    updateMany?: PuppyUpdateManyWithWhereWithoutLitterInput | PuppyUpdateManyWithWhereWithoutLitterInput[]
    deleteMany?: PuppyScalarWhereInput | PuppyScalarWhereInput[]
  }

  export type PuppyUncheckedUpdateManyWithoutLitterNestedInput = {
    create?: XOR<PuppyCreateWithoutLitterInput, PuppyUncheckedCreateWithoutLitterInput> | PuppyCreateWithoutLitterInput[] | PuppyUncheckedCreateWithoutLitterInput[]
    connectOrCreate?: PuppyCreateOrConnectWithoutLitterInput | PuppyCreateOrConnectWithoutLitterInput[]
    upsert?: PuppyUpsertWithWhereUniqueWithoutLitterInput | PuppyUpsertWithWhereUniqueWithoutLitterInput[]
    createMany?: PuppyCreateManyLitterInputEnvelope
    set?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    disconnect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    delete?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    connect?: PuppyWhereUniqueInput | PuppyWhereUniqueInput[]
    update?: PuppyUpdateWithWhereUniqueWithoutLitterInput | PuppyUpdateWithWhereUniqueWithoutLitterInput[]
    updateMany?: PuppyUpdateManyWithWhereWithoutLitterInput | PuppyUpdateManyWithWhereWithoutLitterInput[]
    deleteMany?: PuppyScalarWhereInput | PuppyScalarWhereInput[]
  }

  export type LitterCreateNestedOneWithoutPuppyInput = {
    create?: XOR<LitterCreateWithoutPuppyInput, LitterUncheckedCreateWithoutPuppyInput>
    connectOrCreate?: LitterCreateOrConnectWithoutPuppyInput
    connect?: LitterWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutPuppyInput = {
    create?: XOR<ClientCreateWithoutPuppyInput, ClientUncheckedCreateWithoutPuppyInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPuppyInput
    connect?: ClientWhereUniqueInput
  }

  export type VaccineCreateNestedManyWithoutPuppyInput = {
    create?: XOR<VaccineCreateWithoutPuppyInput, VaccineUncheckedCreateWithoutPuppyInput> | VaccineCreateWithoutPuppyInput[] | VaccineUncheckedCreateWithoutPuppyInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPuppyInput | VaccineCreateOrConnectWithoutPuppyInput[]
    createMany?: VaccineCreateManyPuppyInputEnvelope
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
  }

  export type VaccineUncheckedCreateNestedManyWithoutPuppyInput = {
    create?: XOR<VaccineCreateWithoutPuppyInput, VaccineUncheckedCreateWithoutPuppyInput> | VaccineCreateWithoutPuppyInput[] | VaccineUncheckedCreateWithoutPuppyInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPuppyInput | VaccineCreateOrConnectWithoutPuppyInput[]
    createMany?: VaccineCreateManyPuppyInputEnvelope
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
  }

  export type LitterUpdateOneRequiredWithoutPuppyNestedInput = {
    create?: XOR<LitterCreateWithoutPuppyInput, LitterUncheckedCreateWithoutPuppyInput>
    connectOrCreate?: LitterCreateOrConnectWithoutPuppyInput
    upsert?: LitterUpsertWithoutPuppyInput
    connect?: LitterWhereUniqueInput
    update?: XOR<XOR<LitterUpdateToOneWithWhereWithoutPuppyInput, LitterUpdateWithoutPuppyInput>, LitterUncheckedUpdateWithoutPuppyInput>
  }

  export type ClientUpdateOneWithoutPuppyNestedInput = {
    create?: XOR<ClientCreateWithoutPuppyInput, ClientUncheckedCreateWithoutPuppyInput>
    connectOrCreate?: ClientCreateOrConnectWithoutPuppyInput
    upsert?: ClientUpsertWithoutPuppyInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutPuppyInput, ClientUpdateWithoutPuppyInput>, ClientUncheckedUpdateWithoutPuppyInput>
  }

  export type VaccineUpdateManyWithoutPuppyNestedInput = {
    create?: XOR<VaccineCreateWithoutPuppyInput, VaccineUncheckedCreateWithoutPuppyInput> | VaccineCreateWithoutPuppyInput[] | VaccineUncheckedCreateWithoutPuppyInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPuppyInput | VaccineCreateOrConnectWithoutPuppyInput[]
    upsert?: VaccineUpsertWithWhereUniqueWithoutPuppyInput | VaccineUpsertWithWhereUniqueWithoutPuppyInput[]
    createMany?: VaccineCreateManyPuppyInputEnvelope
    set?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    disconnect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    delete?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    update?: VaccineUpdateWithWhereUniqueWithoutPuppyInput | VaccineUpdateWithWhereUniqueWithoutPuppyInput[]
    updateMany?: VaccineUpdateManyWithWhereWithoutPuppyInput | VaccineUpdateManyWithWhereWithoutPuppyInput[]
    deleteMany?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
  }

  export type VaccineUncheckedUpdateManyWithoutPuppyNestedInput = {
    create?: XOR<VaccineCreateWithoutPuppyInput, VaccineUncheckedCreateWithoutPuppyInput> | VaccineCreateWithoutPuppyInput[] | VaccineUncheckedCreateWithoutPuppyInput[]
    connectOrCreate?: VaccineCreateOrConnectWithoutPuppyInput | VaccineCreateOrConnectWithoutPuppyInput[]
    upsert?: VaccineUpsertWithWhereUniqueWithoutPuppyInput | VaccineUpsertWithWhereUniqueWithoutPuppyInput[]
    createMany?: VaccineCreateManyPuppyInputEnvelope
    set?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    disconnect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    delete?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    connect?: VaccineWhereUniqueInput | VaccineWhereUniqueInput[]
    update?: VaccineUpdateWithWhereUniqueWithoutPuppyInput | VaccineUpdateWithWhereUniqueWithoutPuppyInput[]
    updateMany?: VaccineUpdateManyWithWhereWithoutPuppyInput | VaccineUpdateManyWithWhereWithoutPuppyInput[]
    deleteMany?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutTransactionInput = {
    create?: XOR<ClientCreateWithoutTransactionInput, ClientUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTransactionInput
    connect?: ClientWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClientUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<ClientCreateWithoutTransactionInput, ClientUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTransactionInput
    upsert?: ClientUpsertWithoutTransactionInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTransactionInput, ClientUpdateWithoutTransactionInput>, ClientUncheckedUpdateWithoutTransactionInput>
  }

  export type PuppyCreateNestedOneWithoutVaccineInput = {
    create?: XOR<PuppyCreateWithoutVaccineInput, PuppyUncheckedCreateWithoutVaccineInput>
    connectOrCreate?: PuppyCreateOrConnectWithoutVaccineInput
    connect?: PuppyWhereUniqueInput
  }

  export type DogCreateNestedOneWithoutVaccineInput = {
    create?: XOR<DogCreateWithoutVaccineInput, DogUncheckedCreateWithoutVaccineInput>
    connectOrCreate?: DogCreateOrConnectWithoutVaccineInput
    connect?: DogWhereUniqueInput
  }

  export type PuppyUpdateOneWithoutVaccineNestedInput = {
    create?: XOR<PuppyCreateWithoutVaccineInput, PuppyUncheckedCreateWithoutVaccineInput>
    connectOrCreate?: PuppyCreateOrConnectWithoutVaccineInput
    upsert?: PuppyUpsertWithoutVaccineInput
    disconnect?: PuppyWhereInput | boolean
    delete?: PuppyWhereInput | boolean
    connect?: PuppyWhereUniqueInput
    update?: XOR<XOR<PuppyUpdateToOneWithWhereWithoutVaccineInput, PuppyUpdateWithoutVaccineInput>, PuppyUncheckedUpdateWithoutVaccineInput>
  }

  export type DogUpdateOneWithoutVaccineNestedInput = {
    create?: XOR<DogCreateWithoutVaccineInput, DogUncheckedCreateWithoutVaccineInput>
    connectOrCreate?: DogCreateOrConnectWithoutVaccineInput
    upsert?: DogUpsertWithoutVaccineInput
    disconnect?: DogWhereInput | boolean
    delete?: DogWhereInput | boolean
    connect?: DogWhereUniqueInput
    update?: XOR<XOR<DogUpdateToOneWithWhereWithoutVaccineInput, DogUpdateWithoutVaccineInput>, DogUncheckedUpdateWithoutVaccineInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PuppyCreateWithoutClientInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    saleDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
    Litter: LitterCreateNestedOneWithoutPuppyInput
    Vaccine?: VaccineCreateNestedManyWithoutPuppyInput
  }

  export type PuppyUncheckedCreateWithoutClientInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    saleDate?: Date | string | null
    litterId: string
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutPuppyInput
  }

  export type PuppyCreateOrConnectWithoutClientInput = {
    where: PuppyWhereUniqueInput
    create: XOR<PuppyCreateWithoutClientInput, PuppyUncheckedCreateWithoutClientInput>
  }

  export type PuppyCreateManyClientInputEnvelope = {
    data: PuppyCreateManyClientInput | PuppyCreateManyClientInput[]
  }

  export type TransactionCreateWithoutClientInput = {
    id: string
    type: string
    category: string
    description: string
    amount: number
    date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TransactionUncheckedCreateWithoutClientInput = {
    id: string
    type: string
    category: string
    description: string
    amount: number
    date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type TransactionCreateOrConnectWithoutClientInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput>
  }

  export type TransactionCreateManyClientInputEnvelope = {
    data: TransactionCreateManyClientInput | TransactionCreateManyClientInput[]
  }

  export type PuppyUpsertWithWhereUniqueWithoutClientInput = {
    where: PuppyWhereUniqueInput
    update: XOR<PuppyUpdateWithoutClientInput, PuppyUncheckedUpdateWithoutClientInput>
    create: XOR<PuppyCreateWithoutClientInput, PuppyUncheckedCreateWithoutClientInput>
  }

  export type PuppyUpdateWithWhereUniqueWithoutClientInput = {
    where: PuppyWhereUniqueInput
    data: XOR<PuppyUpdateWithoutClientInput, PuppyUncheckedUpdateWithoutClientInput>
  }

  export type PuppyUpdateManyWithWhereWithoutClientInput = {
    where: PuppyScalarWhereInput
    data: XOR<PuppyUpdateManyMutationInput, PuppyUncheckedUpdateManyWithoutClientInput>
  }

  export type PuppyScalarWhereInput = {
    AND?: PuppyScalarWhereInput | PuppyScalarWhereInput[]
    OR?: PuppyScalarWhereInput[]
    NOT?: PuppyScalarWhereInput | PuppyScalarWhereInput[]
    id?: StringFilter<"Puppy"> | string
    name?: StringNullableFilter<"Puppy"> | string | null
    sex?: StringFilter<"Puppy"> | string
    color?: StringFilter<"Puppy"> | string
    coat?: StringNullableFilter<"Puppy"> | string | null
    price?: FloatNullableFilter<"Puppy"> | number | null
    status?: StringFilter<"Puppy"> | string
    buyerId?: StringNullableFilter<"Puppy"> | string | null
    saleDate?: DateTimeNullableFilter<"Puppy"> | Date | string | null
    litterId?: StringFilter<"Puppy"> | string
    createdAt?: DateTimeFilter<"Puppy"> | Date | string
    updatedAt?: DateTimeFilter<"Puppy"> | Date | string
    birthWeight?: FloatNullableFilter<"Puppy"> | number | null
    photo?: StringNullableFilter<"Puppy"> | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutClientInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutClientInput, TransactionUncheckedUpdateWithoutClientInput>
    create: XOR<TransactionCreateWithoutClientInput, TransactionUncheckedCreateWithoutClientInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutClientInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutClientInput, TransactionUncheckedUpdateWithoutClientInput>
  }

  export type TransactionUpdateManyWithWhereWithoutClientInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutClientInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    type?: StringFilter<"Transaction"> | string
    category?: StringFilter<"Transaction"> | string
    description?: StringFilter<"Transaction"> | string
    amount?: FloatFilter<"Transaction"> | number
    date?: DateTimeFilter<"Transaction"> | Date | string
    clientId?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type DogCreateWithoutOther_Dog_Dog_damIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    Dog_Dog_damIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_damIdToDogInput
    Dog_Dog_sireIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_sireIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateWithoutOther_Dog_Dog_damIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    sireId?: string | null
    damId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    other_Dog_Dog_sireIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogCreateOrConnectWithoutOther_Dog_Dog_damIdToDogInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutOther_Dog_Dog_damIdToDogInput, DogUncheckedCreateWithoutOther_Dog_Dog_damIdToDogInput>
  }

  export type DogCreateWithoutDog_Dog_damIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    other_Dog_Dog_damIdToDog?: DogCreateNestedManyWithoutDog_Dog_damIdToDogInput
    Dog_Dog_sireIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_sireIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateWithoutDog_Dog_damIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    sireId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_damIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogCreateOrConnectWithoutDog_Dog_damIdToDogInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutDog_Dog_damIdToDogInput, DogUncheckedCreateWithoutDog_Dog_damIdToDogInput>
  }

  export type DogCreateManyDog_Dog_damIdToDogInputEnvelope = {
    data: DogCreateManyDog_Dog_damIdToDogInput | DogCreateManyDog_Dog_damIdToDogInput[]
  }

  export type DogCreateWithoutOther_Dog_Dog_sireIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    Dog_Dog_damIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_damIdToDogInput
    other_Dog_Dog_damIdToDog?: DogCreateNestedManyWithoutDog_Dog_damIdToDogInput
    Dog_Dog_sireIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateWithoutOther_Dog_Dog_sireIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    sireId?: string | null
    damId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_damIdToDogInput
    Litter_Litter_damIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogCreateOrConnectWithoutOther_Dog_Dog_sireIdToDogInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutOther_Dog_Dog_sireIdToDogInput, DogUncheckedCreateWithoutOther_Dog_Dog_sireIdToDogInput>
  }

  export type DogCreateWithoutDog_Dog_sireIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    Dog_Dog_damIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_damIdToDogInput
    other_Dog_Dog_damIdToDog?: DogCreateNestedManyWithoutDog_Dog_damIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    damId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_damIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogCreateOrConnectWithoutDog_Dog_sireIdToDogInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutDog_Dog_sireIdToDogInput, DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput>
  }

  export type DogCreateManyDog_Dog_sireIdToDogInputEnvelope = {
    data: DogCreateManyDog_Dog_sireIdToDogInput | DogCreateManyDog_Dog_sireIdToDogInput[]
  }

  export type LitterCreateWithoutDog_Litter_damIdToDogInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
    Dog_Litter_sireIdToDog?: DogCreateNestedOneWithoutLitter_Litter_sireIdToDogInput
    Puppy?: PuppyCreateNestedManyWithoutLitterInput
  }

  export type LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    sireId?: string | null
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
    Puppy?: PuppyUncheckedCreateNestedManyWithoutLitterInput
  }

  export type LitterCreateOrConnectWithoutDog_Litter_damIdToDogInput = {
    where: LitterWhereUniqueInput
    create: XOR<LitterCreateWithoutDog_Litter_damIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput>
  }

  export type LitterCreateManyDog_Litter_damIdToDogInputEnvelope = {
    data: LitterCreateManyDog_Litter_damIdToDogInput | LitterCreateManyDog_Litter_damIdToDogInput[]
  }

  export type LitterCreateWithoutDog_Litter_sireIdToDogInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
    Dog_Litter_damIdToDog?: DogCreateNestedOneWithoutLitter_Litter_damIdToDogInput
    Puppy?: PuppyCreateNestedManyWithoutLitterInput
  }

  export type LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    damId?: string | null
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
    Puppy?: PuppyUncheckedCreateNestedManyWithoutLitterInput
  }

  export type LitterCreateOrConnectWithoutDog_Litter_sireIdToDogInput = {
    where: LitterWhereUniqueInput
    create: XOR<LitterCreateWithoutDog_Litter_sireIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput>
  }

  export type LitterCreateManyDog_Litter_sireIdToDogInputEnvelope = {
    data: LitterCreateManyDog_Litter_sireIdToDogInput | LitterCreateManyDog_Litter_sireIdToDogInput[]
  }

  export type VaccineCreateWithoutDogInput = {
    id: string
    name: string
    dueDate: Date | string
    appliedDate?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Puppy?: PuppyCreateNestedOneWithoutVaccineInput
  }

  export type VaccineUncheckedCreateWithoutDogInput = {
    id: string
    name: string
    dueDate: Date | string
    appliedDate?: Date | string | null
    status?: string
    notes?: string | null
    puppyId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type VaccineCreateOrConnectWithoutDogInput = {
    where: VaccineWhereUniqueInput
    create: XOR<VaccineCreateWithoutDogInput, VaccineUncheckedCreateWithoutDogInput>
  }

  export type VaccineCreateManyDogInputEnvelope = {
    data: VaccineCreateManyDogInput | VaccineCreateManyDogInput[]
  }

  export type DogUpsertWithoutOther_Dog_Dog_damIdToDogInput = {
    update: XOR<DogUpdateWithoutOther_Dog_Dog_damIdToDogInput, DogUncheckedUpdateWithoutOther_Dog_Dog_damIdToDogInput>
    create: XOR<DogCreateWithoutOther_Dog_Dog_damIdToDogInput, DogUncheckedCreateWithoutOther_Dog_Dog_damIdToDogInput>
    where?: DogWhereInput
  }

  export type DogUpdateToOneWithWhereWithoutOther_Dog_Dog_damIdToDogInput = {
    where?: DogWhereInput
    data: XOR<DogUpdateWithoutOther_Dog_Dog_damIdToDogInput, DogUncheckedUpdateWithoutOther_Dog_Dog_damIdToDogInput>
  }

  export type DogUpdateWithoutOther_Dog_Dog_damIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    Dog_Dog_damIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_damIdToDogNestedInput
    Dog_Dog_sireIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_sireIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateWithoutOther_Dog_Dog_damIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    other_Dog_Dog_sireIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUncheckedUpdateManyWithoutDogNestedInput
  }

  export type DogUpsertWithWhereUniqueWithoutDog_Dog_damIdToDogInput = {
    where: DogWhereUniqueInput
    update: XOR<DogUpdateWithoutDog_Dog_damIdToDogInput, DogUncheckedUpdateWithoutDog_Dog_damIdToDogInput>
    create: XOR<DogCreateWithoutDog_Dog_damIdToDogInput, DogUncheckedCreateWithoutDog_Dog_damIdToDogInput>
  }

  export type DogUpdateWithWhereUniqueWithoutDog_Dog_damIdToDogInput = {
    where: DogWhereUniqueInput
    data: XOR<DogUpdateWithoutDog_Dog_damIdToDogInput, DogUncheckedUpdateWithoutDog_Dog_damIdToDogInput>
  }

  export type DogUpdateManyWithWhereWithoutDog_Dog_damIdToDogInput = {
    where: DogScalarWhereInput
    data: XOR<DogUpdateManyMutationInput, DogUncheckedUpdateManyWithoutDog_Dog_damIdToDogInput>
  }

  export type DogScalarWhereInput = {
    AND?: DogScalarWhereInput | DogScalarWhereInput[]
    OR?: DogScalarWhereInput[]
    NOT?: DogScalarWhereInput | DogScalarWhereInput[]
    id?: StringFilter<"Dog"> | string
    registrySystem?: StringNullableFilter<"Dog"> | string | null
    nickname?: StringNullableFilter<"Dog"> | string | null
    name?: StringFilter<"Dog"> | string
    registrationName?: StringNullableFilter<"Dog"> | string | null
    breed?: StringFilter<"Dog"> | string
    variety?: StringNullableFilter<"Dog"> | string | null
    birthDate?: DateTimeNullableFilter<"Dog"> | Date | string | null
    color?: StringFilter<"Dog"> | string
    arrivalDate?: DateTimeNullableFilter<"Dog"> | Date | string | null
    height?: FloatNullableFilter<"Dog"> | number | null
    nationality?: StringNullableFilter<"Dog"> | string | null
    sex?: StringFilter<"Dog"> | string
    temperament?: StringNullableFilter<"Dog"> | string | null
    status?: StringFilter<"Dog"> | string
    showGenealogy?: BoolFilter<"Dog"> | boolean
    notes?: StringNullableFilter<"Dog"> | string | null
    coat?: StringNullableFilter<"Dog"> | string | null
    profilePhoto?: StringNullableFilter<"Dog"> | string | null
    media?: StringNullableFilter<"Dog"> | string | null
    videos?: StringNullableFilter<"Dog"> | string | null
    microchip?: StringNullableFilter<"Dog"> | string | null
    microchipDate?: DateTimeNullableFilter<"Dog"> | Date | string | null
    dnaProfile?: StringNullableFilter<"Dog"> | string | null
    tagId?: StringNullableFilter<"Dog"> | string | null
    tattoo?: StringNullableFilter<"Dog"> | string | null
    coi?: StringNullableFilter<"Dog"> | string | null
    hipDysplasia?: StringNullableFilter<"Dog"> | string | null
    elbowDysplasia?: StringNullableFilter<"Dog"> | string | null
    patellaLuxation?: StringNullableFilter<"Dog"> | string | null
    healthDocsUrls?: StringNullableFilter<"Dog"> | string | null
    sireId?: StringNullableFilter<"Dog"> | string | null
    damId?: StringNullableFilter<"Dog"> | string | null
    createdAt?: DateTimeFilter<"Dog"> | Date | string
    updatedAt?: DateTimeFilter<"Dog"> | Date | string
    pedigreeDocUrl?: StringNullableFilter<"Dog"> | string | null
    pedigreeId?: StringNullableFilter<"Dog"> | string | null
  }

  export type DogUpsertWithoutOther_Dog_Dog_sireIdToDogInput = {
    update: XOR<DogUpdateWithoutOther_Dog_Dog_sireIdToDogInput, DogUncheckedUpdateWithoutOther_Dog_Dog_sireIdToDogInput>
    create: XOR<DogCreateWithoutOther_Dog_Dog_sireIdToDogInput, DogUncheckedCreateWithoutOther_Dog_Dog_sireIdToDogInput>
    where?: DogWhereInput
  }

  export type DogUpdateToOneWithWhereWithoutOther_Dog_Dog_sireIdToDogInput = {
    where?: DogWhereInput
    data: XOR<DogUpdateWithoutOther_Dog_Dog_sireIdToDogInput, DogUncheckedUpdateWithoutOther_Dog_Dog_sireIdToDogInput>
  }

  export type DogUpdateWithoutOther_Dog_Dog_sireIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    Dog_Dog_damIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_damIdToDogNestedInput
    other_Dog_Dog_damIdToDog?: DogUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    Dog_Dog_sireIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateWithoutOther_Dog_Dog_sireIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUncheckedUpdateManyWithoutDogNestedInput
  }

  export type DogUpsertWithWhereUniqueWithoutDog_Dog_sireIdToDogInput = {
    where: DogWhereUniqueInput
    update: XOR<DogUpdateWithoutDog_Dog_sireIdToDogInput, DogUncheckedUpdateWithoutDog_Dog_sireIdToDogInput>
    create: XOR<DogCreateWithoutDog_Dog_sireIdToDogInput, DogUncheckedCreateWithoutDog_Dog_sireIdToDogInput>
  }

  export type DogUpdateWithWhereUniqueWithoutDog_Dog_sireIdToDogInput = {
    where: DogWhereUniqueInput
    data: XOR<DogUpdateWithoutDog_Dog_sireIdToDogInput, DogUncheckedUpdateWithoutDog_Dog_sireIdToDogInput>
  }

  export type DogUpdateManyWithWhereWithoutDog_Dog_sireIdToDogInput = {
    where: DogScalarWhereInput
    data: XOR<DogUpdateManyMutationInput, DogUncheckedUpdateManyWithoutDog_Dog_sireIdToDogInput>
  }

  export type LitterUpsertWithWhereUniqueWithoutDog_Litter_damIdToDogInput = {
    where: LitterWhereUniqueInput
    update: XOR<LitterUpdateWithoutDog_Litter_damIdToDogInput, LitterUncheckedUpdateWithoutDog_Litter_damIdToDogInput>
    create: XOR<LitterCreateWithoutDog_Litter_damIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_damIdToDogInput>
  }

  export type LitterUpdateWithWhereUniqueWithoutDog_Litter_damIdToDogInput = {
    where: LitterWhereUniqueInput
    data: XOR<LitterUpdateWithoutDog_Litter_damIdToDogInput, LitterUncheckedUpdateWithoutDog_Litter_damIdToDogInput>
  }

  export type LitterUpdateManyWithWhereWithoutDog_Litter_damIdToDogInput = {
    where: LitterScalarWhereInput
    data: XOR<LitterUpdateManyMutationInput, LitterUncheckedUpdateManyWithoutDog_Litter_damIdToDogInput>
  }

  export type LitterScalarWhereInput = {
    AND?: LitterScalarWhereInput | LitterScalarWhereInput[]
    OR?: LitterScalarWhereInput[]
    NOT?: LitterScalarWhereInput | LitterScalarWhereInput[]
    id?: StringFilter<"Litter"> | string
    title?: StringNullableFilter<"Litter"> | string | null
    matingDate?: DateTimeNullableFilter<"Litter"> | Date | string | null
    expectedBirthDate?: DateTimeNullableFilter<"Litter"> | Date | string | null
    birthDate?: DateTimeNullableFilter<"Litter"> | Date | string | null
    status?: StringFilter<"Litter"> | string
    sireId?: StringNullableFilter<"Litter"> | string | null
    damId?: StringNullableFilter<"Litter"> | string | null
    media?: StringNullableFilter<"Litter"> | string | null
    createdAt?: DateTimeFilter<"Litter"> | Date | string
    updatedAt?: DateTimeFilter<"Litter"> | Date | string
    price?: FloatNullableFilter<"Litter"> | number | null
  }

  export type LitterUpsertWithWhereUniqueWithoutDog_Litter_sireIdToDogInput = {
    where: LitterWhereUniqueInput
    update: XOR<LitterUpdateWithoutDog_Litter_sireIdToDogInput, LitterUncheckedUpdateWithoutDog_Litter_sireIdToDogInput>
    create: XOR<LitterCreateWithoutDog_Litter_sireIdToDogInput, LitterUncheckedCreateWithoutDog_Litter_sireIdToDogInput>
  }

  export type LitterUpdateWithWhereUniqueWithoutDog_Litter_sireIdToDogInput = {
    where: LitterWhereUniqueInput
    data: XOR<LitterUpdateWithoutDog_Litter_sireIdToDogInput, LitterUncheckedUpdateWithoutDog_Litter_sireIdToDogInput>
  }

  export type LitterUpdateManyWithWhereWithoutDog_Litter_sireIdToDogInput = {
    where: LitterScalarWhereInput
    data: XOR<LitterUpdateManyMutationInput, LitterUncheckedUpdateManyWithoutDog_Litter_sireIdToDogInput>
  }

  export type VaccineUpsertWithWhereUniqueWithoutDogInput = {
    where: VaccineWhereUniqueInput
    update: XOR<VaccineUpdateWithoutDogInput, VaccineUncheckedUpdateWithoutDogInput>
    create: XOR<VaccineCreateWithoutDogInput, VaccineUncheckedCreateWithoutDogInput>
  }

  export type VaccineUpdateWithWhereUniqueWithoutDogInput = {
    where: VaccineWhereUniqueInput
    data: XOR<VaccineUpdateWithoutDogInput, VaccineUncheckedUpdateWithoutDogInput>
  }

  export type VaccineUpdateManyWithWhereWithoutDogInput = {
    where: VaccineScalarWhereInput
    data: XOR<VaccineUpdateManyMutationInput, VaccineUncheckedUpdateManyWithoutDogInput>
  }

  export type VaccineScalarWhereInput = {
    AND?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
    OR?: VaccineScalarWhereInput[]
    NOT?: VaccineScalarWhereInput | VaccineScalarWhereInput[]
    id?: StringFilter<"Vaccine"> | string
    name?: StringFilter<"Vaccine"> | string
    dueDate?: DateTimeFilter<"Vaccine"> | Date | string
    appliedDate?: DateTimeNullableFilter<"Vaccine"> | Date | string | null
    status?: StringFilter<"Vaccine"> | string
    notes?: StringNullableFilter<"Vaccine"> | string | null
    dogId?: StringNullableFilter<"Vaccine"> | string | null
    puppyId?: StringNullableFilter<"Vaccine"> | string | null
    createdAt?: DateTimeFilter<"Vaccine"> | Date | string
    updatedAt?: DateTimeFilter<"Vaccine"> | Date | string
  }

  export type DogCreateWithoutLitter_Litter_damIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    Dog_Dog_damIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_damIdToDogInput
    other_Dog_Dog_damIdToDog?: DogCreateNestedManyWithoutDog_Dog_damIdToDogInput
    Dog_Dog_sireIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_sireIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_sireIdToDog?: LitterCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateWithoutLitter_Litter_damIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    sireId?: string | null
    damId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_damIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_sireIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_sireIdToDogInput
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogCreateOrConnectWithoutLitter_Litter_damIdToDogInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutLitter_Litter_damIdToDogInput, DogUncheckedCreateWithoutLitter_Litter_damIdToDogInput>
  }

  export type DogCreateWithoutLitter_Litter_sireIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    Dog_Dog_damIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_damIdToDogInput
    other_Dog_Dog_damIdToDog?: DogCreateNestedManyWithoutDog_Dog_damIdToDogInput
    Dog_Dog_sireIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_sireIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Vaccine?: VaccineCreateNestedManyWithoutDogInput
  }

  export type DogUncheckedCreateWithoutLitter_Litter_sireIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    sireId?: string | null
    damId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_damIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutDogInput
  }

  export type DogCreateOrConnectWithoutLitter_Litter_sireIdToDogInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutLitter_Litter_sireIdToDogInput, DogUncheckedCreateWithoutLitter_Litter_sireIdToDogInput>
  }

  export type PuppyCreateWithoutLitterInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    saleDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
    Client?: ClientCreateNestedOneWithoutPuppyInput
    Vaccine?: VaccineCreateNestedManyWithoutPuppyInput
  }

  export type PuppyUncheckedCreateWithoutLitterInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    buyerId?: string | null
    saleDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
    Vaccine?: VaccineUncheckedCreateNestedManyWithoutPuppyInput
  }

  export type PuppyCreateOrConnectWithoutLitterInput = {
    where: PuppyWhereUniqueInput
    create: XOR<PuppyCreateWithoutLitterInput, PuppyUncheckedCreateWithoutLitterInput>
  }

  export type PuppyCreateManyLitterInputEnvelope = {
    data: PuppyCreateManyLitterInput | PuppyCreateManyLitterInput[]
  }

  export type DogUpsertWithoutLitter_Litter_damIdToDogInput = {
    update: XOR<DogUpdateWithoutLitter_Litter_damIdToDogInput, DogUncheckedUpdateWithoutLitter_Litter_damIdToDogInput>
    create: XOR<DogCreateWithoutLitter_Litter_damIdToDogInput, DogUncheckedCreateWithoutLitter_Litter_damIdToDogInput>
    where?: DogWhereInput
  }

  export type DogUpdateToOneWithWhereWithoutLitter_Litter_damIdToDogInput = {
    where?: DogWhereInput
    data: XOR<DogUpdateWithoutLitter_Litter_damIdToDogInput, DogUncheckedUpdateWithoutLitter_Litter_damIdToDogInput>
  }

  export type DogUpdateWithoutLitter_Litter_damIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    Dog_Dog_damIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_damIdToDogNestedInput
    other_Dog_Dog_damIdToDog?: DogUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    Dog_Dog_sireIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_sireIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateWithoutLitter_Litter_damIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUncheckedUpdateManyWithoutDogNestedInput
  }

  export type DogUpsertWithoutLitter_Litter_sireIdToDogInput = {
    update: XOR<DogUpdateWithoutLitter_Litter_sireIdToDogInput, DogUncheckedUpdateWithoutLitter_Litter_sireIdToDogInput>
    create: XOR<DogCreateWithoutLitter_Litter_sireIdToDogInput, DogUncheckedCreateWithoutLitter_Litter_sireIdToDogInput>
    where?: DogWhereInput
  }

  export type DogUpdateToOneWithWhereWithoutLitter_Litter_sireIdToDogInput = {
    where?: DogWhereInput
    data: XOR<DogUpdateWithoutLitter_Litter_sireIdToDogInput, DogUncheckedUpdateWithoutLitter_Litter_sireIdToDogInput>
  }

  export type DogUpdateWithoutLitter_Litter_sireIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    Dog_Dog_damIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_damIdToDogNestedInput
    other_Dog_Dog_damIdToDog?: DogUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    Dog_Dog_sireIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_sireIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Vaccine?: VaccineUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateWithoutLitter_Litter_sireIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Vaccine?: VaccineUncheckedUpdateManyWithoutDogNestedInput
  }

  export type PuppyUpsertWithWhereUniqueWithoutLitterInput = {
    where: PuppyWhereUniqueInput
    update: XOR<PuppyUpdateWithoutLitterInput, PuppyUncheckedUpdateWithoutLitterInput>
    create: XOR<PuppyCreateWithoutLitterInput, PuppyUncheckedCreateWithoutLitterInput>
  }

  export type PuppyUpdateWithWhereUniqueWithoutLitterInput = {
    where: PuppyWhereUniqueInput
    data: XOR<PuppyUpdateWithoutLitterInput, PuppyUncheckedUpdateWithoutLitterInput>
  }

  export type PuppyUpdateManyWithWhereWithoutLitterInput = {
    where: PuppyScalarWhereInput
    data: XOR<PuppyUpdateManyMutationInput, PuppyUncheckedUpdateManyWithoutLitterInput>
  }

  export type LitterCreateWithoutPuppyInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
    Dog_Litter_damIdToDog?: DogCreateNestedOneWithoutLitter_Litter_damIdToDogInput
    Dog_Litter_sireIdToDog?: DogCreateNestedOneWithoutLitter_Litter_sireIdToDogInput
  }

  export type LitterUncheckedCreateWithoutPuppyInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    sireId?: string | null
    damId?: string | null
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
  }

  export type LitterCreateOrConnectWithoutPuppyInput = {
    where: LitterWhereUniqueInput
    create: XOR<LitterCreateWithoutPuppyInput, LitterUncheckedCreateWithoutPuppyInput>
  }

  export type ClientCreateWithoutPuppyInput = {
    id: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Transaction?: TransactionCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutPuppyInput = {
    id: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutPuppyInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutPuppyInput, ClientUncheckedCreateWithoutPuppyInput>
  }

  export type VaccineCreateWithoutPuppyInput = {
    id: string
    name: string
    dueDate: Date | string
    appliedDate?: Date | string | null
    status?: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Dog?: DogCreateNestedOneWithoutVaccineInput
  }

  export type VaccineUncheckedCreateWithoutPuppyInput = {
    id: string
    name: string
    dueDate: Date | string
    appliedDate?: Date | string | null
    status?: string
    notes?: string | null
    dogId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type VaccineCreateOrConnectWithoutPuppyInput = {
    where: VaccineWhereUniqueInput
    create: XOR<VaccineCreateWithoutPuppyInput, VaccineUncheckedCreateWithoutPuppyInput>
  }

  export type VaccineCreateManyPuppyInputEnvelope = {
    data: VaccineCreateManyPuppyInput | VaccineCreateManyPuppyInput[]
  }

  export type LitterUpsertWithoutPuppyInput = {
    update: XOR<LitterUpdateWithoutPuppyInput, LitterUncheckedUpdateWithoutPuppyInput>
    create: XOR<LitterCreateWithoutPuppyInput, LitterUncheckedCreateWithoutPuppyInput>
    where?: LitterWhereInput
  }

  export type LitterUpdateToOneWithWhereWithoutPuppyInput = {
    where?: LitterWhereInput
    data: XOR<LitterUpdateWithoutPuppyInput, LitterUncheckedUpdateWithoutPuppyInput>
  }

  export type LitterUpdateWithoutPuppyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    Dog_Litter_damIdToDog?: DogUpdateOneWithoutLitter_Litter_damIdToDogNestedInput
    Dog_Litter_sireIdToDog?: DogUpdateOneWithoutLitter_Litter_sireIdToDogNestedInput
  }

  export type LitterUncheckedUpdateWithoutPuppyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ClientUpsertWithoutPuppyInput = {
    update: XOR<ClientUpdateWithoutPuppyInput, ClientUncheckedUpdateWithoutPuppyInput>
    create: XOR<ClientCreateWithoutPuppyInput, ClientUncheckedCreateWithoutPuppyInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutPuppyInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutPuppyInput, ClientUncheckedUpdateWithoutPuppyInput>
  }

  export type ClientUpdateWithoutPuppyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutPuppyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutClientNestedInput
  }

  export type VaccineUpsertWithWhereUniqueWithoutPuppyInput = {
    where: VaccineWhereUniqueInput
    update: XOR<VaccineUpdateWithoutPuppyInput, VaccineUncheckedUpdateWithoutPuppyInput>
    create: XOR<VaccineCreateWithoutPuppyInput, VaccineUncheckedCreateWithoutPuppyInput>
  }

  export type VaccineUpdateWithWhereUniqueWithoutPuppyInput = {
    where: VaccineWhereUniqueInput
    data: XOR<VaccineUpdateWithoutPuppyInput, VaccineUncheckedUpdateWithoutPuppyInput>
  }

  export type VaccineUpdateManyWithWhereWithoutPuppyInput = {
    where: VaccineScalarWhereInput
    data: XOR<VaccineUpdateManyMutationInput, VaccineUncheckedUpdateManyWithoutPuppyInput>
  }

  export type ClientCreateWithoutTransactionInput = {
    id: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Puppy?: PuppyCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutTransactionInput = {
    id: string
    name: string
    cpf?: string | null
    email?: string | null
    phone: string
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    Puppy?: PuppyUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutTransactionInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTransactionInput, ClientUncheckedCreateWithoutTransactionInput>
  }

  export type ClientUpsertWithoutTransactionInput = {
    update: XOR<ClientUpdateWithoutTransactionInput, ClientUncheckedUpdateWithoutTransactionInput>
    create: XOR<ClientCreateWithoutTransactionInput, ClientUncheckedCreateWithoutTransactionInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutTransactionInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutTransactionInput, ClientUncheckedUpdateWithoutTransactionInput>
  }

  export type ClientUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Puppy?: PuppyUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cpf?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Puppy?: PuppyUncheckedUpdateManyWithoutClientNestedInput
  }

  export type PuppyCreateWithoutVaccineInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    saleDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
    Litter: LitterCreateNestedOneWithoutPuppyInput
    Client?: ClientCreateNestedOneWithoutPuppyInput
  }

  export type PuppyUncheckedCreateWithoutVaccineInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    buyerId?: string | null
    saleDate?: Date | string | null
    litterId: string
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
  }

  export type PuppyCreateOrConnectWithoutVaccineInput = {
    where: PuppyWhereUniqueInput
    create: XOR<PuppyCreateWithoutVaccineInput, PuppyUncheckedCreateWithoutVaccineInput>
  }

  export type DogCreateWithoutVaccineInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    Dog_Dog_damIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_damIdToDogInput
    other_Dog_Dog_damIdToDog?: DogCreateNestedManyWithoutDog_Dog_damIdToDogInput
    Dog_Dog_sireIdToDog?: DogCreateNestedOneWithoutOther_Dog_Dog_sireIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterCreateNestedManyWithoutDog_Litter_sireIdToDogInput
  }

  export type DogUncheckedCreateWithoutVaccineInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    sireId?: string | null
    damId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_damIdToDogInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedCreateNestedManyWithoutDog_Dog_sireIdToDogInput
    Litter_Litter_damIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_damIdToDogInput
    Litter_Litter_sireIdToDog?: LitterUncheckedCreateNestedManyWithoutDog_Litter_sireIdToDogInput
  }

  export type DogCreateOrConnectWithoutVaccineInput = {
    where: DogWhereUniqueInput
    create: XOR<DogCreateWithoutVaccineInput, DogUncheckedCreateWithoutVaccineInput>
  }

  export type PuppyUpsertWithoutVaccineInput = {
    update: XOR<PuppyUpdateWithoutVaccineInput, PuppyUncheckedUpdateWithoutVaccineInput>
    create: XOR<PuppyCreateWithoutVaccineInput, PuppyUncheckedCreateWithoutVaccineInput>
    where?: PuppyWhereInput
  }

  export type PuppyUpdateToOneWithWhereWithoutVaccineInput = {
    where?: PuppyWhereInput
    data: XOR<PuppyUpdateWithoutVaccineInput, PuppyUncheckedUpdateWithoutVaccineInput>
  }

  export type PuppyUpdateWithoutVaccineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Litter?: LitterUpdateOneRequiredWithoutPuppyNestedInput
    Client?: ClientUpdateOneWithoutPuppyNestedInput
  }

  export type PuppyUncheckedUpdateWithoutVaccineInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    litterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DogUpsertWithoutVaccineInput = {
    update: XOR<DogUpdateWithoutVaccineInput, DogUncheckedUpdateWithoutVaccineInput>
    create: XOR<DogCreateWithoutVaccineInput, DogUncheckedCreateWithoutVaccineInput>
    where?: DogWhereInput
  }

  export type DogUpdateToOneWithWhereWithoutVaccineInput = {
    where?: DogWhereInput
    data: XOR<DogUpdateWithoutVaccineInput, DogUncheckedUpdateWithoutVaccineInput>
  }

  export type DogUpdateWithoutVaccineInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    Dog_Dog_damIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_damIdToDogNestedInput
    other_Dog_Dog_damIdToDog?: DogUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    Dog_Dog_sireIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_sireIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
  }

  export type DogUncheckedUpdateWithoutVaccineInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
  }

  export type PuppyCreateManyClientInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    saleDate?: Date | string | null
    litterId: string
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
  }

  export type TransactionCreateManyClientInput = {
    id: string
    type: string
    category: string
    description: string
    amount: number
    date: Date | string
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type PuppyUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Litter?: LitterUpdateOneRequiredWithoutPuppyNestedInput
    Vaccine?: VaccineUpdateManyWithoutPuppyNestedInput
  }

  export type PuppyUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    litterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Vaccine?: VaccineUncheckedUpdateManyWithoutPuppyNestedInput
  }

  export type PuppyUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    litterId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TransactionUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DogCreateManyDog_Dog_damIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    sireId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
  }

  export type DogCreateManyDog_Dog_sireIdToDogInput = {
    id: string
    registrySystem?: string | null
    nickname?: string | null
    name: string
    registrationName?: string | null
    breed: string
    variety?: string | null
    birthDate?: Date | string | null
    color: string
    arrivalDate?: Date | string | null
    height?: number | null
    nationality?: string | null
    sex: string
    temperament?: string | null
    status?: string
    showGenealogy?: boolean
    notes?: string | null
    coat?: string | null
    profilePhoto?: string | null
    media?: string | null
    videos?: string | null
    microchip?: string | null
    microchipDate?: Date | string | null
    dnaProfile?: string | null
    tagId?: string | null
    tattoo?: string | null
    coi?: string | null
    hipDysplasia?: string | null
    elbowDysplasia?: string | null
    patellaLuxation?: string | null
    healthDocsUrls?: string | null
    damId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    pedigreeDocUrl?: string | null
    pedigreeId?: string | null
  }

  export type LitterCreateManyDog_Litter_damIdToDogInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    sireId?: string | null
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
  }

  export type LitterCreateManyDog_Litter_sireIdToDogInput = {
    id: string
    title?: string | null
    matingDate?: Date | string | null
    expectedBirthDate?: Date | string | null
    birthDate?: Date | string | null
    status?: string
    damId?: string | null
    media?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
    price?: number | null
  }

  export type VaccineCreateManyDogInput = {
    id: string
    name: string
    dueDate: Date | string
    appliedDate?: Date | string | null
    status?: string
    notes?: string | null
    puppyId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type DogUpdateWithoutDog_Dog_damIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    other_Dog_Dog_damIdToDog?: DogUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    Dog_Dog_sireIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_sireIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateWithoutDog_Dog_damIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUncheckedUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateManyWithoutDog_Dog_damIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DogUpdateWithoutDog_Dog_sireIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    Dog_Dog_damIdToDog?: DogUpdateOneWithoutOther_Dog_Dog_damIdToDogNestedInput
    other_Dog_Dog_damIdToDog?: DogUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateWithoutDog_Dog_sireIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
    other_Dog_Dog_damIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_damIdToDogNestedInput
    other_Dog_Dog_sireIdToDog?: DogUncheckedUpdateManyWithoutDog_Dog_sireIdToDogNestedInput
    Litter_Litter_damIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_damIdToDogNestedInput
    Litter_Litter_sireIdToDog?: LitterUncheckedUpdateManyWithoutDog_Litter_sireIdToDogNestedInput
    Vaccine?: VaccineUncheckedUpdateManyWithoutDogNestedInput
  }

  export type DogUncheckedUpdateManyWithoutDog_Dog_sireIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    registrySystem?: NullableStringFieldUpdateOperationsInput | string | null
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    registrationName?: NullableStringFieldUpdateOperationsInput | string | null
    breed?: StringFieldUpdateOperationsInput | string
    variety?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    color?: StringFieldUpdateOperationsInput | string
    arrivalDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    height?: NullableFloatFieldUpdateOperationsInput | number | null
    nationality?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    temperament?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    showGenealogy?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    profilePhoto?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    videos?: NullableStringFieldUpdateOperationsInput | string | null
    microchip?: NullableStringFieldUpdateOperationsInput | string | null
    microchipDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dnaProfile?: NullableStringFieldUpdateOperationsInput | string | null
    tagId?: NullableStringFieldUpdateOperationsInput | string | null
    tattoo?: NullableStringFieldUpdateOperationsInput | string | null
    coi?: NullableStringFieldUpdateOperationsInput | string | null
    hipDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    elbowDysplasia?: NullableStringFieldUpdateOperationsInput | string | null
    patellaLuxation?: NullableStringFieldUpdateOperationsInput | string | null
    healthDocsUrls?: NullableStringFieldUpdateOperationsInput | string | null
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pedigreeDocUrl?: NullableStringFieldUpdateOperationsInput | string | null
    pedigreeId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LitterUpdateWithoutDog_Litter_damIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    Dog_Litter_sireIdToDog?: DogUpdateOneWithoutLitter_Litter_sireIdToDogNestedInput
    Puppy?: PuppyUpdateManyWithoutLitterNestedInput
  }

  export type LitterUncheckedUpdateWithoutDog_Litter_damIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    Puppy?: PuppyUncheckedUpdateManyWithoutLitterNestedInput
  }

  export type LitterUncheckedUpdateManyWithoutDog_Litter_damIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    sireId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type LitterUpdateWithoutDog_Litter_sireIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    Dog_Litter_damIdToDog?: DogUpdateOneWithoutLitter_Litter_damIdToDogNestedInput
    Puppy?: PuppyUpdateManyWithoutLitterNestedInput
  }

  export type LitterUncheckedUpdateWithoutDog_Litter_sireIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    Puppy?: PuppyUncheckedUpdateManyWithoutLitterNestedInput
  }

  export type LitterUncheckedUpdateManyWithoutDog_Litter_sireIdToDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    matingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expectedBirthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    birthDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    damId?: NullableStringFieldUpdateOperationsInput | string | null
    media?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type VaccineUpdateWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Puppy?: PuppyUpdateOneWithoutVaccineNestedInput
  }

  export type VaccineUncheckedUpdateWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    puppyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccineUncheckedUpdateManyWithoutDogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    puppyId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuppyCreateManyLitterInput = {
    id: string
    name?: string | null
    sex: string
    color: string
    coat?: string | null
    price?: number | null
    status?: string
    buyerId?: string | null
    saleDate?: Date | string | null
    createdAt?: Date | string
    updatedAt: Date | string
    birthWeight?: number | null
    photo?: string | null
  }

  export type PuppyUpdateWithoutLitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Client?: ClientUpdateOneWithoutPuppyNestedInput
    Vaccine?: VaccineUpdateManyWithoutPuppyNestedInput
  }

  export type PuppyUncheckedUpdateWithoutLitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    Vaccine?: VaccineUncheckedUpdateManyWithoutPuppyNestedInput
  }

  export type PuppyUncheckedUpdateManyWithoutLitterInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    sex?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    coat?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buyerId?: NullableStringFieldUpdateOperationsInput | string | null
    saleDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    birthWeight?: NullableFloatFieldUpdateOperationsInput | number | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VaccineCreateManyPuppyInput = {
    id: string
    name: string
    dueDate: Date | string
    appliedDate?: Date | string | null
    status?: string
    notes?: string | null
    dogId?: string | null
    createdAt?: Date | string
    updatedAt: Date | string
  }

  export type VaccineUpdateWithoutPuppyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Dog?: DogUpdateOneWithoutVaccineNestedInput
  }

  export type VaccineUncheckedUpdateWithoutPuppyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dogId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VaccineUncheckedUpdateManyWithoutPuppyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    dogId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DogCountOutputTypeDefaultArgs instead
     */
    export type DogCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DogCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LitterCountOutputTypeDefaultArgs instead
     */
    export type LitterCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LitterCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PuppyCountOutputTypeDefaultArgs instead
     */
    export type PuppyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PuppyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DogDefaultArgs instead
     */
    export type DogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LeadDefaultArgs instead
     */
    export type LeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LeadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LitterDefaultArgs instead
     */
    export type LitterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LitterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PuppyDefaultArgs instead
     */
    export type PuppyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PuppyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SiteConfigDefaultArgs instead
     */
    export type SiteConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SiteConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TransactionDefaultArgs instead
     */
    export type TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TransactionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VaccineDefaultArgs instead
     */
    export type VaccineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VaccineDefaultArgs<ExtArgs>

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