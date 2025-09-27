
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
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model Cabinet
 * 
 */
export type Cabinet = $Result.DefaultSelection<Prisma.$CabinetPayload>
/**
 * Model GameMix
 * 
 */
export type GameMix = $Result.DefaultSelection<Prisma.$GameMixPayload>
/**
 * Model SlotMachine
 * 
 */
export type SlotMachine = $Result.DefaultSelection<Prisma.$SlotMachinePayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Invoice
 * 
 */
export type Invoice = $Result.DefaultSelection<Prisma.$InvoicePayload>
/**
 * Model Platform
 * 
 */
export type Platform = $Result.DefaultSelection<Prisma.$PlatformPayload>
/**
 * Model Metrology
 * 
 */
export type Metrology = $Result.DefaultSelection<Prisma.$MetrologyPayload>
/**
 * Model MetrologyApproval
 * 
 */
export type MetrologyApproval = $Result.DefaultSelection<Prisma.$MetrologyApprovalPayload>
/**
 * Model MetrologyCommission
 * 
 */
export type MetrologyCommission = $Result.DefaultSelection<Prisma.$MetrologyCommissionPayload>
/**
 * Model MetrologyAuthority
 * 
 */
export type MetrologyAuthority = $Result.DefaultSelection<Prisma.$MetrologyAuthorityPayload>
/**
 * Model MetrologySoftware
 * 
 */
export type MetrologySoftware = $Result.DefaultSelection<Prisma.$MetrologySoftwarePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Providers
 * const providers = await prisma.provider.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Providers
   * const providers = await prisma.provider.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cabinet`: Exposes CRUD operations for the **Cabinet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cabinets
    * const cabinets = await prisma.cabinet.findMany()
    * ```
    */
  get cabinet(): Prisma.CabinetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameMix`: Exposes CRUD operations for the **GameMix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameMixes
    * const gameMixes = await prisma.gameMix.findMany()
    * ```
    */
  get gameMix(): Prisma.GameMixDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.slotMachine`: Exposes CRUD operations for the **SlotMachine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SlotMachines
    * const slotMachines = await prisma.slotMachine.findMany()
    * ```
    */
  get slotMachine(): Prisma.SlotMachineDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **Invoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invoices
    * const invoices = await prisma.invoice.findMany()
    * ```
    */
  get invoice(): Prisma.InvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.platform`: Exposes CRUD operations for the **Platform** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Platforms
    * const platforms = await prisma.platform.findMany()
    * ```
    */
  get platform(): Prisma.PlatformDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metrology`: Exposes CRUD operations for the **Metrology** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Metrologies
    * const metrologies = await prisma.metrology.findMany()
    * ```
    */
  get metrology(): Prisma.MetrologyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metrologyApproval`: Exposes CRUD operations for the **MetrologyApproval** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetrologyApprovals
    * const metrologyApprovals = await prisma.metrologyApproval.findMany()
    * ```
    */
  get metrologyApproval(): Prisma.MetrologyApprovalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metrologyCommission`: Exposes CRUD operations for the **MetrologyCommission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetrologyCommissions
    * const metrologyCommissions = await prisma.metrologyCommission.findMany()
    * ```
    */
  get metrologyCommission(): Prisma.MetrologyCommissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metrologyAuthority`: Exposes CRUD operations for the **MetrologyAuthority** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetrologyAuthorities
    * const metrologyAuthorities = await prisma.metrologyAuthority.findMany()
    * ```
    */
  get metrologyAuthority(): Prisma.MetrologyAuthorityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.metrologySoftware`: Exposes CRUD operations for the **MetrologySoftware** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MetrologySoftwares
    * const metrologySoftwares = await prisma.metrologySoftware.findMany()
    * ```
    */
  get metrologySoftware(): Prisma.MetrologySoftwareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Provider: 'Provider',
    Location: 'Location',
    Cabinet: 'Cabinet',
    GameMix: 'GameMix',
    SlotMachine: 'SlotMachine',
    Company: 'Company',
    Invoice: 'Invoice',
    Platform: 'Platform',
    Metrology: 'Metrology',
    MetrologyApproval: 'MetrologyApproval',
    MetrologyCommission: 'MetrologyCommission',
    MetrologyAuthority: 'MetrologyAuthority',
    MetrologySoftware: 'MetrologySoftware',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "provider" | "location" | "cabinet" | "gameMix" | "slotMachine" | "company" | "invoice" | "platform" | "metrology" | "metrologyApproval" | "metrologyCommission" | "metrologyAuthority" | "metrologySoftware" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      Cabinet: {
        payload: Prisma.$CabinetPayload<ExtArgs>
        fields: Prisma.CabinetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CabinetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CabinetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          findFirst: {
            args: Prisma.CabinetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CabinetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          findMany: {
            args: Prisma.CabinetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>[]
          }
          create: {
            args: Prisma.CabinetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          createMany: {
            args: Prisma.CabinetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CabinetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>[]
          }
          delete: {
            args: Prisma.CabinetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          update: {
            args: Prisma.CabinetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          deleteMany: {
            args: Prisma.CabinetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CabinetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CabinetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>[]
          }
          upsert: {
            args: Prisma.CabinetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CabinetPayload>
          }
          aggregate: {
            args: Prisma.CabinetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCabinet>
          }
          groupBy: {
            args: Prisma.CabinetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CabinetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CabinetCountArgs<ExtArgs>
            result: $Utils.Optional<CabinetCountAggregateOutputType> | number
          }
        }
      }
      GameMix: {
        payload: Prisma.$GameMixPayload<ExtArgs>
        fields: Prisma.GameMixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameMixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameMixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload>
          }
          findFirst: {
            args: Prisma.GameMixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameMixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload>
          }
          findMany: {
            args: Prisma.GameMixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload>[]
          }
          create: {
            args: Prisma.GameMixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload>
          }
          createMany: {
            args: Prisma.GameMixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameMixCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload>[]
          }
          delete: {
            args: Prisma.GameMixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload>
          }
          update: {
            args: Prisma.GameMixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload>
          }
          deleteMany: {
            args: Prisma.GameMixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameMixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameMixUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload>[]
          }
          upsert: {
            args: Prisma.GameMixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameMixPayload>
          }
          aggregate: {
            args: Prisma.GameMixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameMix>
          }
          groupBy: {
            args: Prisma.GameMixGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameMixGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameMixCountArgs<ExtArgs>
            result: $Utils.Optional<GameMixCountAggregateOutputType> | number
          }
        }
      }
      SlotMachine: {
        payload: Prisma.$SlotMachinePayload<ExtArgs>
        fields: Prisma.SlotMachineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlotMachineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlotMachineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload>
          }
          findFirst: {
            args: Prisma.SlotMachineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlotMachineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload>
          }
          findMany: {
            args: Prisma.SlotMachineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload>[]
          }
          create: {
            args: Prisma.SlotMachineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload>
          }
          createMany: {
            args: Prisma.SlotMachineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SlotMachineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload>[]
          }
          delete: {
            args: Prisma.SlotMachineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload>
          }
          update: {
            args: Prisma.SlotMachineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload>
          }
          deleteMany: {
            args: Prisma.SlotMachineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SlotMachineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SlotMachineUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload>[]
          }
          upsert: {
            args: Prisma.SlotMachineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SlotMachinePayload>
          }
          aggregate: {
            args: Prisma.SlotMachineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSlotMachine>
          }
          groupBy: {
            args: Prisma.SlotMachineGroupByArgs<ExtArgs>
            result: $Utils.Optional<SlotMachineGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlotMachineCountArgs<ExtArgs>
            result: $Utils.Optional<SlotMachineCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Invoice: {
        payload: Prisma.$InvoicePayload<ExtArgs>
        fields: Prisma.InvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findFirst: {
            args: Prisma.InvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          findMany: {
            args: Prisma.InvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          create: {
            args: Prisma.InvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          createMany: {
            args: Prisma.InvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          delete: {
            args: Prisma.InvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          update: {
            args: Prisma.InvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          deleteMany: {
            args: Prisma.InvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>[]
          }
          upsert: {
            args: Prisma.InvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvoicePayload>
          }
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvoice>
          }
          groupBy: {
            args: Prisma.InvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number
          }
        }
      }
      Platform: {
        payload: Prisma.$PlatformPayload<ExtArgs>
        fields: Prisma.PlatformFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlatformFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlatformFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findFirst: {
            args: Prisma.PlatformFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlatformFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          findMany: {
            args: Prisma.PlatformFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          create: {
            args: Prisma.PlatformCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          createMany: {
            args: Prisma.PlatformCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlatformCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          delete: {
            args: Prisma.PlatformDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          update: {
            args: Prisma.PlatformUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          deleteMany: {
            args: Prisma.PlatformDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlatformUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlatformUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>[]
          }
          upsert: {
            args: Prisma.PlatformUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlatformPayload>
          }
          aggregate: {
            args: Prisma.PlatformAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlatform>
          }
          groupBy: {
            args: Prisma.PlatformGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlatformGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlatformCountArgs<ExtArgs>
            result: $Utils.Optional<PlatformCountAggregateOutputType> | number
          }
        }
      }
      Metrology: {
        payload: Prisma.$MetrologyPayload<ExtArgs>
        fields: Prisma.MetrologyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetrologyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetrologyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload>
          }
          findFirst: {
            args: Prisma.MetrologyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetrologyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload>
          }
          findMany: {
            args: Prisma.MetrologyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload>[]
          }
          create: {
            args: Prisma.MetrologyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload>
          }
          createMany: {
            args: Prisma.MetrologyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetrologyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload>[]
          }
          delete: {
            args: Prisma.MetrologyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload>
          }
          update: {
            args: Prisma.MetrologyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload>
          }
          deleteMany: {
            args: Prisma.MetrologyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetrologyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetrologyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload>[]
          }
          upsert: {
            args: Prisma.MetrologyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyPayload>
          }
          aggregate: {
            args: Prisma.MetrologyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetrology>
          }
          groupBy: {
            args: Prisma.MetrologyGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetrologyGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetrologyCountArgs<ExtArgs>
            result: $Utils.Optional<MetrologyCountAggregateOutputType> | number
          }
        }
      }
      MetrologyApproval: {
        payload: Prisma.$MetrologyApprovalPayload<ExtArgs>
        fields: Prisma.MetrologyApprovalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetrologyApprovalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetrologyApprovalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload>
          }
          findFirst: {
            args: Prisma.MetrologyApprovalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetrologyApprovalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload>
          }
          findMany: {
            args: Prisma.MetrologyApprovalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload>[]
          }
          create: {
            args: Prisma.MetrologyApprovalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload>
          }
          createMany: {
            args: Prisma.MetrologyApprovalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetrologyApprovalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload>[]
          }
          delete: {
            args: Prisma.MetrologyApprovalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload>
          }
          update: {
            args: Prisma.MetrologyApprovalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload>
          }
          deleteMany: {
            args: Prisma.MetrologyApprovalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetrologyApprovalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetrologyApprovalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload>[]
          }
          upsert: {
            args: Prisma.MetrologyApprovalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyApprovalPayload>
          }
          aggregate: {
            args: Prisma.MetrologyApprovalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetrologyApproval>
          }
          groupBy: {
            args: Prisma.MetrologyApprovalGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetrologyApprovalGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetrologyApprovalCountArgs<ExtArgs>
            result: $Utils.Optional<MetrologyApprovalCountAggregateOutputType> | number
          }
        }
      }
      MetrologyCommission: {
        payload: Prisma.$MetrologyCommissionPayload<ExtArgs>
        fields: Prisma.MetrologyCommissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetrologyCommissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetrologyCommissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload>
          }
          findFirst: {
            args: Prisma.MetrologyCommissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetrologyCommissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload>
          }
          findMany: {
            args: Prisma.MetrologyCommissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload>[]
          }
          create: {
            args: Prisma.MetrologyCommissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload>
          }
          createMany: {
            args: Prisma.MetrologyCommissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetrologyCommissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload>[]
          }
          delete: {
            args: Prisma.MetrologyCommissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload>
          }
          update: {
            args: Prisma.MetrologyCommissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload>
          }
          deleteMany: {
            args: Prisma.MetrologyCommissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetrologyCommissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetrologyCommissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload>[]
          }
          upsert: {
            args: Prisma.MetrologyCommissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyCommissionPayload>
          }
          aggregate: {
            args: Prisma.MetrologyCommissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetrologyCommission>
          }
          groupBy: {
            args: Prisma.MetrologyCommissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetrologyCommissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetrologyCommissionCountArgs<ExtArgs>
            result: $Utils.Optional<MetrologyCommissionCountAggregateOutputType> | number
          }
        }
      }
      MetrologyAuthority: {
        payload: Prisma.$MetrologyAuthorityPayload<ExtArgs>
        fields: Prisma.MetrologyAuthorityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetrologyAuthorityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetrologyAuthorityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload>
          }
          findFirst: {
            args: Prisma.MetrologyAuthorityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetrologyAuthorityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload>
          }
          findMany: {
            args: Prisma.MetrologyAuthorityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload>[]
          }
          create: {
            args: Prisma.MetrologyAuthorityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload>
          }
          createMany: {
            args: Prisma.MetrologyAuthorityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetrologyAuthorityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload>[]
          }
          delete: {
            args: Prisma.MetrologyAuthorityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload>
          }
          update: {
            args: Prisma.MetrologyAuthorityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload>
          }
          deleteMany: {
            args: Prisma.MetrologyAuthorityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetrologyAuthorityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetrologyAuthorityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload>[]
          }
          upsert: {
            args: Prisma.MetrologyAuthorityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologyAuthorityPayload>
          }
          aggregate: {
            args: Prisma.MetrologyAuthorityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetrologyAuthority>
          }
          groupBy: {
            args: Prisma.MetrologyAuthorityGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetrologyAuthorityGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetrologyAuthorityCountArgs<ExtArgs>
            result: $Utils.Optional<MetrologyAuthorityCountAggregateOutputType> | number
          }
        }
      }
      MetrologySoftware: {
        payload: Prisma.$MetrologySoftwarePayload<ExtArgs>
        fields: Prisma.MetrologySoftwareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MetrologySoftwareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MetrologySoftwareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload>
          }
          findFirst: {
            args: Prisma.MetrologySoftwareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MetrologySoftwareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload>
          }
          findMany: {
            args: Prisma.MetrologySoftwareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload>[]
          }
          create: {
            args: Prisma.MetrologySoftwareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload>
          }
          createMany: {
            args: Prisma.MetrologySoftwareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MetrologySoftwareCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload>[]
          }
          delete: {
            args: Prisma.MetrologySoftwareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload>
          }
          update: {
            args: Prisma.MetrologySoftwareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload>
          }
          deleteMany: {
            args: Prisma.MetrologySoftwareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MetrologySoftwareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MetrologySoftwareUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload>[]
          }
          upsert: {
            args: Prisma.MetrologySoftwareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MetrologySoftwarePayload>
          }
          aggregate: {
            args: Prisma.MetrologySoftwareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMetrologySoftware>
          }
          groupBy: {
            args: Prisma.MetrologySoftwareGroupByArgs<ExtArgs>
            result: $Utils.Optional<MetrologySoftwareGroupByOutputType>[]
          }
          count: {
            args: Prisma.MetrologySoftwareCountArgs<ExtArgs>
            result: $Utils.Optional<MetrologySoftwareCountAggregateOutputType> | number
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    provider?: ProviderOmit
    location?: LocationOmit
    cabinet?: CabinetOmit
    gameMix?: GameMixOmit
    slotMachine?: SlotMachineOmit
    company?: CompanyOmit
    invoice?: InvoiceOmit
    platform?: PlatformOmit
    metrology?: MetrologyOmit
    metrologyApproval?: MetrologyApprovalOmit
    metrologyCommission?: MetrologyCommissionOmit
    metrologyAuthority?: MetrologyAuthorityOmit
    metrologySoftware?: MetrologySoftwareOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    cabinets: number
    gameMixes: number
    slots: number
    metrologyApprovals: number
    metrologySoftware: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinets?: boolean | ProviderCountOutputTypeCountCabinetsArgs
    gameMixes?: boolean | ProviderCountOutputTypeCountGameMixesArgs
    slots?: boolean | ProviderCountOutputTypeCountSlotsArgs
    metrologyApprovals?: boolean | ProviderCountOutputTypeCountMetrologyApprovalsArgs
    metrologySoftware?: boolean | ProviderCountOutputTypeCountMetrologySoftwareArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountCabinetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabinetWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountGameMixesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameMixWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotMachineWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountMetrologyApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologyApprovalWhereInput
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountMetrologySoftwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologySoftwareWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    slots: number
    invoices: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | LocationCountOutputTypeCountSlotsArgs
    invoices?: boolean | LocationCountOutputTypeCountInvoicesArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotMachineWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
  }


  /**
   * Count Type CabinetCountOutputType
   */

  export type CabinetCountOutputType = {
    slots: number
    metrologyApprovals: number
    metrologySoftware: number
  }

  export type CabinetCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | CabinetCountOutputTypeCountSlotsArgs
    metrologyApprovals?: boolean | CabinetCountOutputTypeCountMetrologyApprovalsArgs
    metrologySoftware?: boolean | CabinetCountOutputTypeCountMetrologySoftwareArgs
  }

  // Custom InputTypes
  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CabinetCountOutputType
     */
    select?: CabinetCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotMachineWhereInput
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountMetrologyApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologyApprovalWhereInput
  }

  /**
   * CabinetCountOutputType without action
   */
  export type CabinetCountOutputTypeCountMetrologySoftwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologySoftwareWhereInput
  }


  /**
   * Count Type GameMixCountOutputType
   */

  export type GameMixCountOutputType = {
    slots: number
    metrologyApprovals: number
    metrologySoftware: number
  }

  export type GameMixCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | GameMixCountOutputTypeCountSlotsArgs
    metrologyApprovals?: boolean | GameMixCountOutputTypeCountMetrologyApprovalsArgs
    metrologySoftware?: boolean | GameMixCountOutputTypeCountMetrologySoftwareArgs
  }

  // Custom InputTypes
  /**
   * GameMixCountOutputType without action
   */
  export type GameMixCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMixCountOutputType
     */
    select?: GameMixCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameMixCountOutputType without action
   */
  export type GameMixCountOutputTypeCountSlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotMachineWhereInput
  }

  /**
   * GameMixCountOutputType without action
   */
  export type GameMixCountOutputTypeCountMetrologyApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologyApprovalWhereInput
  }

  /**
   * GameMixCountOutputType without action
   */
  export type GameMixCountOutputTypeCountMetrologySoftwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologySoftwareWhereInput
  }


  /**
   * Count Type MetrologySoftwareCountOutputType
   */

  export type MetrologySoftwareCountOutputType = {
    approvals: number
  }

  export type MetrologySoftwareCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvals?: boolean | MetrologySoftwareCountOutputTypeCountApprovalsArgs
  }

  // Custom InputTypes
  /**
   * MetrologySoftwareCountOutputType without action
   */
  export type MetrologySoftwareCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftwareCountOutputType
     */
    select?: MetrologySoftwareCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MetrologySoftwareCountOutputType without action
   */
  export type MetrologySoftwareCountOutputTypeCountApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologyApprovalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    name: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderMinAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    name?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: string
    name: string
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cabinets?: boolean | Provider$cabinetsArgs<ExtArgs>
    gameMixes?: boolean | Provider$gameMixesArgs<ExtArgs>
    slots?: boolean | Provider$slotsArgs<ExtArgs>
    metrologyApprovals?: boolean | Provider$metrologyApprovalsArgs<ExtArgs>
    metrologySoftware?: boolean | Provider$metrologySoftwareArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    name?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["provider"]>
  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cabinets?: boolean | Provider$cabinetsArgs<ExtArgs>
    gameMixes?: boolean | Provider$gameMixesArgs<ExtArgs>
    slots?: boolean | Provider$slotsArgs<ExtArgs>
    metrologyApprovals?: boolean | Provider$metrologyApprovalsArgs<ExtArgs>
    metrologySoftware?: boolean | Provider$metrologySoftwareArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      cabinets: Prisma.$CabinetPayload<ExtArgs>[]
      gameMixes: Prisma.$GameMixPayload<ExtArgs>[]
      slots: Prisma.$SlotMachinePayload<ExtArgs>[]
      metrologyApprovals: Prisma.$MetrologyApprovalPayload<ExtArgs>[]
      metrologySoftware: Prisma.$MetrologySoftwarePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
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
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cabinets<T extends Provider$cabinetsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$cabinetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameMixes<T extends Provider$gameMixesArgs<ExtArgs> = {}>(args?: Subset<T, Provider$gameMixesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    slots<T extends Provider$slotsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrologyApprovals<T extends Provider$metrologyApprovalsArgs<ExtArgs> = {}>(args?: Subset<T, Provider$metrologyApprovalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrologySoftware<T extends Provider$metrologySoftwareArgs<ExtArgs> = {}>(args?: Subset<T, Provider$metrologySoftwareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Provider model
   */
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'String'>
    readonly name: FieldRef<"Provider", 'String'>
    readonly avatar: FieldRef<"Provider", 'String'>
    readonly createdAt: FieldRef<"Provider", 'DateTime'>
    readonly updatedAt: FieldRef<"Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider updateManyAndReturn
   */
  export type ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Provider.cabinets
   */
  export type Provider$cabinetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    where?: CabinetWhereInput
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    cursor?: CabinetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Provider.gameMixes
   */
  export type Provider$gameMixesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    where?: GameMixWhereInput
    orderBy?: GameMixOrderByWithRelationInput | GameMixOrderByWithRelationInput[]
    cursor?: GameMixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameMixScalarFieldEnum | GameMixScalarFieldEnum[]
  }

  /**
   * Provider.slots
   */
  export type Provider$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    where?: SlotMachineWhereInput
    orderBy?: SlotMachineOrderByWithRelationInput | SlotMachineOrderByWithRelationInput[]
    cursor?: SlotMachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotMachineScalarFieldEnum | SlotMachineScalarFieldEnum[]
  }

  /**
   * Provider.metrologyApprovals
   */
  export type Provider$metrologyApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    where?: MetrologyApprovalWhereInput
    orderBy?: MetrologyApprovalOrderByWithRelationInput | MetrologyApprovalOrderByWithRelationInput[]
    cursor?: MetrologyApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetrologyApprovalScalarFieldEnum | MetrologyApprovalScalarFieldEnum[]
  }

  /**
   * Provider.metrologySoftware
   */
  export type Provider$metrologySoftwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    where?: MetrologySoftwareWhereInput
    orderBy?: MetrologySoftwareOrderByWithRelationInput | MetrologySoftwareOrderByWithRelationInput[]
    cursor?: MetrologySoftwareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetrologySoftwareScalarFieldEnum | MetrologySoftwareScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    name: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    name: string
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slots?: boolean | Location$slotsArgs<ExtArgs>
    invoices?: boolean | Location$invoicesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slots?: boolean | Location$slotsArgs<ExtArgs>
    invoices?: boolean | Location$invoicesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      slots: Prisma.$SlotMachinePayload<ExtArgs>[]
      invoices: Prisma.$InvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slots<T extends Location$slotsArgs<ExtArgs> = {}>(args?: Subset<T, Location$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invoices<T extends Location$invoicesArgs<ExtArgs> = {}>(args?: Subset<T, Location$invoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly address: FieldRef<"Location", 'String'>
    readonly createdAt: FieldRef<"Location", 'DateTime'>
    readonly updatedAt: FieldRef<"Location", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.slots
   */
  export type Location$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    where?: SlotMachineWhereInput
    orderBy?: SlotMachineOrderByWithRelationInput | SlotMachineOrderByWithRelationInput[]
    cursor?: SlotMachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotMachineScalarFieldEnum | SlotMachineScalarFieldEnum[]
  }

  /**
   * Location.invoices
   */
  export type Location$invoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    cursor?: InvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model Cabinet
   */

  export type AggregateCabinet = {
    _count: CabinetCountAggregateOutputType | null
    _min: CabinetMinAggregateOutputType | null
    _max: CabinetMaxAggregateOutputType | null
  }

  export type CabinetMinAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    manufacturer: string | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CabinetMaxAggregateOutputType = {
    id: string | null
    name: string | null
    model: string | null
    manufacturer: string | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CabinetCountAggregateOutputType = {
    id: number
    name: number
    model: number
    manufacturer: number
    providerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CabinetMinAggregateInputType = {
    id?: true
    name?: true
    model?: true
    manufacturer?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CabinetMaxAggregateInputType = {
    id?: true
    name?: true
    model?: true
    manufacturer?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CabinetCountAggregateInputType = {
    id?: true
    name?: true
    model?: true
    manufacturer?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CabinetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cabinet to aggregate.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cabinets
    **/
    _count?: true | CabinetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CabinetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CabinetMaxAggregateInputType
  }

  export type GetCabinetAggregateType<T extends CabinetAggregateArgs> = {
        [P in keyof T & keyof AggregateCabinet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCabinet[P]>
      : GetScalarType<T[P], AggregateCabinet[P]>
  }




  export type CabinetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CabinetWhereInput
    orderBy?: CabinetOrderByWithAggregationInput | CabinetOrderByWithAggregationInput[]
    by: CabinetScalarFieldEnum[] | CabinetScalarFieldEnum
    having?: CabinetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CabinetCountAggregateInputType | true
    _min?: CabinetMinAggregateInputType
    _max?: CabinetMaxAggregateInputType
  }

  export type CabinetGroupByOutputType = {
    id: string
    name: string
    model: string | null
    manufacturer: string
    providerId: string
    createdAt: Date
    updatedAt: Date
    _count: CabinetCountAggregateOutputType | null
    _min: CabinetMinAggregateOutputType | null
    _max: CabinetMaxAggregateOutputType | null
  }

  type GetCabinetGroupByPayload<T extends CabinetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CabinetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CabinetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CabinetGroupByOutputType[P]>
            : GetScalarType<T[P], CabinetGroupByOutputType[P]>
        }
      >
    >


  export type CabinetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    manufacturer?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    slots?: boolean | Cabinet$slotsArgs<ExtArgs>
    metrologyApprovals?: boolean | Cabinet$metrologyApprovalsArgs<ExtArgs>
    metrologySoftware?: boolean | Cabinet$metrologySoftwareArgs<ExtArgs>
    _count?: boolean | CabinetCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinet"]>

  export type CabinetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    manufacturer?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinet"]>

  export type CabinetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    model?: boolean
    manufacturer?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cabinet"]>

  export type CabinetSelectScalar = {
    id?: boolean
    name?: boolean
    model?: boolean
    manufacturer?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CabinetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "model" | "manufacturer" | "providerId" | "createdAt" | "updatedAt", ExtArgs["result"]["cabinet"]>
  export type CabinetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    slots?: boolean | Cabinet$slotsArgs<ExtArgs>
    metrologyApprovals?: boolean | Cabinet$metrologyApprovalsArgs<ExtArgs>
    metrologySoftware?: boolean | Cabinet$metrologySoftwareArgs<ExtArgs>
    _count?: boolean | CabinetCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CabinetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type CabinetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $CabinetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cabinet"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
      slots: Prisma.$SlotMachinePayload<ExtArgs>[]
      metrologyApprovals: Prisma.$MetrologyApprovalPayload<ExtArgs>[]
      metrologySoftware: Prisma.$MetrologySoftwarePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      model: string | null
      manufacturer: string
      providerId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cabinet"]>
    composites: {}
  }

  type CabinetGetPayload<S extends boolean | null | undefined | CabinetDefaultArgs> = $Result.GetResult<Prisma.$CabinetPayload, S>

  type CabinetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CabinetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CabinetCountAggregateInputType | true
    }

  export interface CabinetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cabinet'], meta: { name: 'Cabinet' } }
    /**
     * Find zero or one Cabinet that matches the filter.
     * @param {CabinetFindUniqueArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CabinetFindUniqueArgs>(args: SelectSubset<T, CabinetFindUniqueArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cabinet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CabinetFindUniqueOrThrowArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CabinetFindUniqueOrThrowArgs>(args: SelectSubset<T, CabinetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cabinet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindFirstArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CabinetFindFirstArgs>(args?: SelectSubset<T, CabinetFindFirstArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cabinet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindFirstOrThrowArgs} args - Arguments to find a Cabinet
     * @example
     * // Get one Cabinet
     * const cabinet = await prisma.cabinet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CabinetFindFirstOrThrowArgs>(args?: SelectSubset<T, CabinetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cabinets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cabinets
     * const cabinets = await prisma.cabinet.findMany()
     * 
     * // Get first 10 Cabinets
     * const cabinets = await prisma.cabinet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cabinetWithIdOnly = await prisma.cabinet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CabinetFindManyArgs>(args?: SelectSubset<T, CabinetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cabinet.
     * @param {CabinetCreateArgs} args - Arguments to create a Cabinet.
     * @example
     * // Create one Cabinet
     * const Cabinet = await prisma.cabinet.create({
     *   data: {
     *     // ... data to create a Cabinet
     *   }
     * })
     * 
     */
    create<T extends CabinetCreateArgs>(args: SelectSubset<T, CabinetCreateArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cabinets.
     * @param {CabinetCreateManyArgs} args - Arguments to create many Cabinets.
     * @example
     * // Create many Cabinets
     * const cabinet = await prisma.cabinet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CabinetCreateManyArgs>(args?: SelectSubset<T, CabinetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cabinets and returns the data saved in the database.
     * @param {CabinetCreateManyAndReturnArgs} args - Arguments to create many Cabinets.
     * @example
     * // Create many Cabinets
     * const cabinet = await prisma.cabinet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cabinets and only return the `id`
     * const cabinetWithIdOnly = await prisma.cabinet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CabinetCreateManyAndReturnArgs>(args?: SelectSubset<T, CabinetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cabinet.
     * @param {CabinetDeleteArgs} args - Arguments to delete one Cabinet.
     * @example
     * // Delete one Cabinet
     * const Cabinet = await prisma.cabinet.delete({
     *   where: {
     *     // ... filter to delete one Cabinet
     *   }
     * })
     * 
     */
    delete<T extends CabinetDeleteArgs>(args: SelectSubset<T, CabinetDeleteArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cabinet.
     * @param {CabinetUpdateArgs} args - Arguments to update one Cabinet.
     * @example
     * // Update one Cabinet
     * const cabinet = await prisma.cabinet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CabinetUpdateArgs>(args: SelectSubset<T, CabinetUpdateArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cabinets.
     * @param {CabinetDeleteManyArgs} args - Arguments to filter Cabinets to delete.
     * @example
     * // Delete a few Cabinets
     * const { count } = await prisma.cabinet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CabinetDeleteManyArgs>(args?: SelectSubset<T, CabinetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cabinets
     * const cabinet = await prisma.cabinet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CabinetUpdateManyArgs>(args: SelectSubset<T, CabinetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cabinets and returns the data updated in the database.
     * @param {CabinetUpdateManyAndReturnArgs} args - Arguments to update many Cabinets.
     * @example
     * // Update many Cabinets
     * const cabinet = await prisma.cabinet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cabinets and only return the `id`
     * const cabinetWithIdOnly = await prisma.cabinet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CabinetUpdateManyAndReturnArgs>(args: SelectSubset<T, CabinetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cabinet.
     * @param {CabinetUpsertArgs} args - Arguments to update or create a Cabinet.
     * @example
     * // Update or create a Cabinet
     * const cabinet = await prisma.cabinet.upsert({
     *   create: {
     *     // ... data to create a Cabinet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cabinet we want to update
     *   }
     * })
     */
    upsert<T extends CabinetUpsertArgs>(args: SelectSubset<T, CabinetUpsertArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cabinets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetCountArgs} args - Arguments to filter Cabinets to count.
     * @example
     * // Count the number of Cabinets
     * const count = await prisma.cabinet.count({
     *   where: {
     *     // ... the filter for the Cabinets we want to count
     *   }
     * })
    **/
    count<T extends CabinetCountArgs>(
      args?: Subset<T, CabinetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CabinetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CabinetAggregateArgs>(args: Subset<T, CabinetAggregateArgs>): Prisma.PrismaPromise<GetCabinetAggregateType<T>>

    /**
     * Group by Cabinet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CabinetGroupByArgs} args - Group by arguments.
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
      T extends CabinetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CabinetGroupByArgs['orderBy'] }
        : { orderBy?: CabinetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CabinetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCabinetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cabinet model
   */
  readonly fields: CabinetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cabinet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CabinetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slots<T extends Cabinet$slotsArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrologyApprovals<T extends Cabinet$metrologyApprovalsArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$metrologyApprovalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrologySoftware<T extends Cabinet$metrologySoftwareArgs<ExtArgs> = {}>(args?: Subset<T, Cabinet$metrologySoftwareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cabinet model
   */
  interface CabinetFieldRefs {
    readonly id: FieldRef<"Cabinet", 'String'>
    readonly name: FieldRef<"Cabinet", 'String'>
    readonly model: FieldRef<"Cabinet", 'String'>
    readonly manufacturer: FieldRef<"Cabinet", 'String'>
    readonly providerId: FieldRef<"Cabinet", 'String'>
    readonly createdAt: FieldRef<"Cabinet", 'DateTime'>
    readonly updatedAt: FieldRef<"Cabinet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cabinet findUnique
   */
  export type CabinetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet findUniqueOrThrow
   */
  export type CabinetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet findFirst
   */
  export type CabinetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabinets.
     */
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet findFirstOrThrow
   */
  export type CabinetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinet to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cabinets.
     */
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet findMany
   */
  export type CabinetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter, which Cabinets to fetch.
     */
    where?: CabinetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cabinets to fetch.
     */
    orderBy?: CabinetOrderByWithRelationInput | CabinetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cabinets.
     */
    cursor?: CabinetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cabinets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cabinets.
     */
    skip?: number
    distinct?: CabinetScalarFieldEnum | CabinetScalarFieldEnum[]
  }

  /**
   * Cabinet create
   */
  export type CabinetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * The data needed to create a Cabinet.
     */
    data: XOR<CabinetCreateInput, CabinetUncheckedCreateInput>
  }

  /**
   * Cabinet createMany
   */
  export type CabinetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cabinets.
     */
    data: CabinetCreateManyInput | CabinetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cabinet createManyAndReturn
   */
  export type CabinetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * The data used to create many Cabinets.
     */
    data: CabinetCreateManyInput | CabinetCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cabinet update
   */
  export type CabinetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * The data needed to update a Cabinet.
     */
    data: XOR<CabinetUpdateInput, CabinetUncheckedUpdateInput>
    /**
     * Choose, which Cabinet to update.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet updateMany
   */
  export type CabinetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cabinets.
     */
    data: XOR<CabinetUpdateManyMutationInput, CabinetUncheckedUpdateManyInput>
    /**
     * Filter which Cabinets to update
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to update.
     */
    limit?: number
  }

  /**
   * Cabinet updateManyAndReturn
   */
  export type CabinetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * The data used to update Cabinets.
     */
    data: XOR<CabinetUpdateManyMutationInput, CabinetUncheckedUpdateManyInput>
    /**
     * Filter which Cabinets to update
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cabinet upsert
   */
  export type CabinetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * The filter to search for the Cabinet to update in case it exists.
     */
    where: CabinetWhereUniqueInput
    /**
     * In case the Cabinet found by the `where` argument doesn't exist, create a new Cabinet with this data.
     */
    create: XOR<CabinetCreateInput, CabinetUncheckedCreateInput>
    /**
     * In case the Cabinet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CabinetUpdateInput, CabinetUncheckedUpdateInput>
  }

  /**
   * Cabinet delete
   */
  export type CabinetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    /**
     * Filter which Cabinet to delete.
     */
    where: CabinetWhereUniqueInput
  }

  /**
   * Cabinet deleteMany
   */
  export type CabinetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cabinets to delete
     */
    where?: CabinetWhereInput
    /**
     * Limit how many Cabinets to delete.
     */
    limit?: number
  }

  /**
   * Cabinet.slots
   */
  export type Cabinet$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    where?: SlotMachineWhereInput
    orderBy?: SlotMachineOrderByWithRelationInput | SlotMachineOrderByWithRelationInput[]
    cursor?: SlotMachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotMachineScalarFieldEnum | SlotMachineScalarFieldEnum[]
  }

  /**
   * Cabinet.metrologyApprovals
   */
  export type Cabinet$metrologyApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    where?: MetrologyApprovalWhereInput
    orderBy?: MetrologyApprovalOrderByWithRelationInput | MetrologyApprovalOrderByWithRelationInput[]
    cursor?: MetrologyApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetrologyApprovalScalarFieldEnum | MetrologyApprovalScalarFieldEnum[]
  }

  /**
   * Cabinet.metrologySoftware
   */
  export type Cabinet$metrologySoftwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    where?: MetrologySoftwareWhereInput
    orderBy?: MetrologySoftwareOrderByWithRelationInput | MetrologySoftwareOrderByWithRelationInput[]
    cursor?: MetrologySoftwareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetrologySoftwareScalarFieldEnum | MetrologySoftwareScalarFieldEnum[]
  }

  /**
   * Cabinet without action
   */
  export type CabinetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
  }


  /**
   * Model GameMix
   */

  export type AggregateGameMix = {
    _count: GameMixCountAggregateOutputType | null
    _avg: GameMixAvgAggregateOutputType | null
    _sum: GameMixSumAggregateOutputType | null
    _min: GameMixMinAggregateOutputType | null
    _max: GameMixMaxAggregateOutputType | null
  }

  export type GameMixAvgAggregateOutputType = {
    gameCount: number | null
  }

  export type GameMixSumAggregateOutputType = {
    gameCount: number | null
  }

  export type GameMixMinAggregateOutputType = {
    id: string | null
    name: string | null
    providerId: string | null
    games: string | null
    gameCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMixMaxAggregateOutputType = {
    id: string | null
    name: string | null
    providerId: string | null
    games: string | null
    gameCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMixCountAggregateOutputType = {
    id: number
    name: number
    providerId: number
    games: number
    gameCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameMixAvgAggregateInputType = {
    gameCount?: true
  }

  export type GameMixSumAggregateInputType = {
    gameCount?: true
  }

  export type GameMixMinAggregateInputType = {
    id?: true
    name?: true
    providerId?: true
    games?: true
    gameCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMixMaxAggregateInputType = {
    id?: true
    name?: true
    providerId?: true
    games?: true
    gameCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMixCountAggregateInputType = {
    id?: true
    name?: true
    providerId?: true
    games?: true
    gameCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameMixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameMix to aggregate.
     */
    where?: GameMixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameMixes to fetch.
     */
    orderBy?: GameMixOrderByWithRelationInput | GameMixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameMixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameMixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameMixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameMixes
    **/
    _count?: true | GameMixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameMixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameMixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMixMaxAggregateInputType
  }

  export type GetGameMixAggregateType<T extends GameMixAggregateArgs> = {
        [P in keyof T & keyof AggregateGameMix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameMix[P]>
      : GetScalarType<T[P], AggregateGameMix[P]>
  }




  export type GameMixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameMixWhereInput
    orderBy?: GameMixOrderByWithAggregationInput | GameMixOrderByWithAggregationInput[]
    by: GameMixScalarFieldEnum[] | GameMixScalarFieldEnum
    having?: GameMixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameMixCountAggregateInputType | true
    _avg?: GameMixAvgAggregateInputType
    _sum?: GameMixSumAggregateInputType
    _min?: GameMixMinAggregateInputType
    _max?: GameMixMaxAggregateInputType
  }

  export type GameMixGroupByOutputType = {
    id: string
    name: string
    providerId: string
    games: string | null
    gameCount: number | null
    createdAt: Date
    updatedAt: Date
    _count: GameMixCountAggregateOutputType | null
    _avg: GameMixAvgAggregateOutputType | null
    _sum: GameMixSumAggregateOutputType | null
    _min: GameMixMinAggregateOutputType | null
    _max: GameMixMaxAggregateOutputType | null
  }

  type GetGameMixGroupByPayload<T extends GameMixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameMixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameMixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameMixGroupByOutputType[P]>
            : GetScalarType<T[P], GameMixGroupByOutputType[P]>
        }
      >
    >


  export type GameMixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    providerId?: boolean
    games?: boolean
    gameCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    slots?: boolean | GameMix$slotsArgs<ExtArgs>
    metrologyApprovals?: boolean | GameMix$metrologyApprovalsArgs<ExtArgs>
    metrologySoftware?: boolean | GameMix$metrologySoftwareArgs<ExtArgs>
    _count?: boolean | GameMixCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameMix"]>

  export type GameMixSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    providerId?: boolean
    games?: boolean
    gameCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameMix"]>

  export type GameMixSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    providerId?: boolean
    games?: boolean
    gameCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameMix"]>

  export type GameMixSelectScalar = {
    id?: boolean
    name?: boolean
    providerId?: boolean
    games?: boolean
    gameCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameMixOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "providerId" | "games" | "gameCount" | "createdAt" | "updatedAt", ExtArgs["result"]["gameMix"]>
  export type GameMixInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    slots?: boolean | GameMix$slotsArgs<ExtArgs>
    metrologyApprovals?: boolean | GameMix$metrologyApprovalsArgs<ExtArgs>
    metrologySoftware?: boolean | GameMix$metrologySoftwareArgs<ExtArgs>
    _count?: boolean | GameMixCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameMixIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }
  export type GameMixIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
  }

  export type $GameMixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameMix"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
      slots: Prisma.$SlotMachinePayload<ExtArgs>[]
      metrologyApprovals: Prisma.$MetrologyApprovalPayload<ExtArgs>[]
      metrologySoftware: Prisma.$MetrologySoftwarePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      providerId: string
      games: string | null
      gameCount: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameMix"]>
    composites: {}
  }

  type GameMixGetPayload<S extends boolean | null | undefined | GameMixDefaultArgs> = $Result.GetResult<Prisma.$GameMixPayload, S>

  type GameMixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameMixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameMixCountAggregateInputType | true
    }

  export interface GameMixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameMix'], meta: { name: 'GameMix' } }
    /**
     * Find zero or one GameMix that matches the filter.
     * @param {GameMixFindUniqueArgs} args - Arguments to find a GameMix
     * @example
     * // Get one GameMix
     * const gameMix = await prisma.gameMix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameMixFindUniqueArgs>(args: SelectSubset<T, GameMixFindUniqueArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameMix that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameMixFindUniqueOrThrowArgs} args - Arguments to find a GameMix
     * @example
     * // Get one GameMix
     * const gameMix = await prisma.gameMix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameMixFindUniqueOrThrowArgs>(args: SelectSubset<T, GameMixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameMix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMixFindFirstArgs} args - Arguments to find a GameMix
     * @example
     * // Get one GameMix
     * const gameMix = await prisma.gameMix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameMixFindFirstArgs>(args?: SelectSubset<T, GameMixFindFirstArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameMix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMixFindFirstOrThrowArgs} args - Arguments to find a GameMix
     * @example
     * // Get one GameMix
     * const gameMix = await prisma.gameMix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameMixFindFirstOrThrowArgs>(args?: SelectSubset<T, GameMixFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameMixes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameMixes
     * const gameMixes = await prisma.gameMix.findMany()
     * 
     * // Get first 10 GameMixes
     * const gameMixes = await prisma.gameMix.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameMixWithIdOnly = await prisma.gameMix.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameMixFindManyArgs>(args?: SelectSubset<T, GameMixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameMix.
     * @param {GameMixCreateArgs} args - Arguments to create a GameMix.
     * @example
     * // Create one GameMix
     * const GameMix = await prisma.gameMix.create({
     *   data: {
     *     // ... data to create a GameMix
     *   }
     * })
     * 
     */
    create<T extends GameMixCreateArgs>(args: SelectSubset<T, GameMixCreateArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameMixes.
     * @param {GameMixCreateManyArgs} args - Arguments to create many GameMixes.
     * @example
     * // Create many GameMixes
     * const gameMix = await prisma.gameMix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameMixCreateManyArgs>(args?: SelectSubset<T, GameMixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameMixes and returns the data saved in the database.
     * @param {GameMixCreateManyAndReturnArgs} args - Arguments to create many GameMixes.
     * @example
     * // Create many GameMixes
     * const gameMix = await prisma.gameMix.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameMixes and only return the `id`
     * const gameMixWithIdOnly = await prisma.gameMix.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameMixCreateManyAndReturnArgs>(args?: SelectSubset<T, GameMixCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameMix.
     * @param {GameMixDeleteArgs} args - Arguments to delete one GameMix.
     * @example
     * // Delete one GameMix
     * const GameMix = await prisma.gameMix.delete({
     *   where: {
     *     // ... filter to delete one GameMix
     *   }
     * })
     * 
     */
    delete<T extends GameMixDeleteArgs>(args: SelectSubset<T, GameMixDeleteArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameMix.
     * @param {GameMixUpdateArgs} args - Arguments to update one GameMix.
     * @example
     * // Update one GameMix
     * const gameMix = await prisma.gameMix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameMixUpdateArgs>(args: SelectSubset<T, GameMixUpdateArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameMixes.
     * @param {GameMixDeleteManyArgs} args - Arguments to filter GameMixes to delete.
     * @example
     * // Delete a few GameMixes
     * const { count } = await prisma.gameMix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameMixDeleteManyArgs>(args?: SelectSubset<T, GameMixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameMixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameMixes
     * const gameMix = await prisma.gameMix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameMixUpdateManyArgs>(args: SelectSubset<T, GameMixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameMixes and returns the data updated in the database.
     * @param {GameMixUpdateManyAndReturnArgs} args - Arguments to update many GameMixes.
     * @example
     * // Update many GameMixes
     * const gameMix = await prisma.gameMix.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameMixes and only return the `id`
     * const gameMixWithIdOnly = await prisma.gameMix.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameMixUpdateManyAndReturnArgs>(args: SelectSubset<T, GameMixUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameMix.
     * @param {GameMixUpsertArgs} args - Arguments to update or create a GameMix.
     * @example
     * // Update or create a GameMix
     * const gameMix = await prisma.gameMix.upsert({
     *   create: {
     *     // ... data to create a GameMix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameMix we want to update
     *   }
     * })
     */
    upsert<T extends GameMixUpsertArgs>(args: SelectSubset<T, GameMixUpsertArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameMixes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMixCountArgs} args - Arguments to filter GameMixes to count.
     * @example
     * // Count the number of GameMixes
     * const count = await prisma.gameMix.count({
     *   where: {
     *     // ... the filter for the GameMixes we want to count
     *   }
     * })
    **/
    count<T extends GameMixCountArgs>(
      args?: Subset<T, GameMixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameMixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameMix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameMixAggregateArgs>(args: Subset<T, GameMixAggregateArgs>): Prisma.PrismaPromise<GetGameMixAggregateType<T>>

    /**
     * Group by GameMix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameMixGroupByArgs} args - Group by arguments.
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
      T extends GameMixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameMixGroupByArgs['orderBy'] }
        : { orderBy?: GameMixGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameMixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameMixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameMix model
   */
  readonly fields: GameMixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameMix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameMixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    slots<T extends GameMix$slotsArgs<ExtArgs> = {}>(args?: Subset<T, GameMix$slotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrologyApprovals<T extends GameMix$metrologyApprovalsArgs<ExtArgs> = {}>(args?: Subset<T, GameMix$metrologyApprovalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    metrologySoftware<T extends GameMix$metrologySoftwareArgs<ExtArgs> = {}>(args?: Subset<T, GameMix$metrologySoftwareArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GameMix model
   */
  interface GameMixFieldRefs {
    readonly id: FieldRef<"GameMix", 'String'>
    readonly name: FieldRef<"GameMix", 'String'>
    readonly providerId: FieldRef<"GameMix", 'String'>
    readonly games: FieldRef<"GameMix", 'String'>
    readonly gameCount: FieldRef<"GameMix", 'Int'>
    readonly createdAt: FieldRef<"GameMix", 'DateTime'>
    readonly updatedAt: FieldRef<"GameMix", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameMix findUnique
   */
  export type GameMixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    /**
     * Filter, which GameMix to fetch.
     */
    where: GameMixWhereUniqueInput
  }

  /**
   * GameMix findUniqueOrThrow
   */
  export type GameMixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    /**
     * Filter, which GameMix to fetch.
     */
    where: GameMixWhereUniqueInput
  }

  /**
   * GameMix findFirst
   */
  export type GameMixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    /**
     * Filter, which GameMix to fetch.
     */
    where?: GameMixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameMixes to fetch.
     */
    orderBy?: GameMixOrderByWithRelationInput | GameMixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameMixes.
     */
    cursor?: GameMixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameMixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameMixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameMixes.
     */
    distinct?: GameMixScalarFieldEnum | GameMixScalarFieldEnum[]
  }

  /**
   * GameMix findFirstOrThrow
   */
  export type GameMixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    /**
     * Filter, which GameMix to fetch.
     */
    where?: GameMixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameMixes to fetch.
     */
    orderBy?: GameMixOrderByWithRelationInput | GameMixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameMixes.
     */
    cursor?: GameMixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameMixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameMixes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameMixes.
     */
    distinct?: GameMixScalarFieldEnum | GameMixScalarFieldEnum[]
  }

  /**
   * GameMix findMany
   */
  export type GameMixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    /**
     * Filter, which GameMixes to fetch.
     */
    where?: GameMixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameMixes to fetch.
     */
    orderBy?: GameMixOrderByWithRelationInput | GameMixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameMixes.
     */
    cursor?: GameMixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameMixes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameMixes.
     */
    skip?: number
    distinct?: GameMixScalarFieldEnum | GameMixScalarFieldEnum[]
  }

  /**
   * GameMix create
   */
  export type GameMixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    /**
     * The data needed to create a GameMix.
     */
    data: XOR<GameMixCreateInput, GameMixUncheckedCreateInput>
  }

  /**
   * GameMix createMany
   */
  export type GameMixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameMixes.
     */
    data: GameMixCreateManyInput | GameMixCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameMix createManyAndReturn
   */
  export type GameMixCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * The data used to create many GameMixes.
     */
    data: GameMixCreateManyInput | GameMixCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameMix update
   */
  export type GameMixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    /**
     * The data needed to update a GameMix.
     */
    data: XOR<GameMixUpdateInput, GameMixUncheckedUpdateInput>
    /**
     * Choose, which GameMix to update.
     */
    where: GameMixWhereUniqueInput
  }

  /**
   * GameMix updateMany
   */
  export type GameMixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameMixes.
     */
    data: XOR<GameMixUpdateManyMutationInput, GameMixUncheckedUpdateManyInput>
    /**
     * Filter which GameMixes to update
     */
    where?: GameMixWhereInput
    /**
     * Limit how many GameMixes to update.
     */
    limit?: number
  }

  /**
   * GameMix updateManyAndReturn
   */
  export type GameMixUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * The data used to update GameMixes.
     */
    data: XOR<GameMixUpdateManyMutationInput, GameMixUncheckedUpdateManyInput>
    /**
     * Filter which GameMixes to update
     */
    where?: GameMixWhereInput
    /**
     * Limit how many GameMixes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameMix upsert
   */
  export type GameMixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    /**
     * The filter to search for the GameMix to update in case it exists.
     */
    where: GameMixWhereUniqueInput
    /**
     * In case the GameMix found by the `where` argument doesn't exist, create a new GameMix with this data.
     */
    create: XOR<GameMixCreateInput, GameMixUncheckedCreateInput>
    /**
     * In case the GameMix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameMixUpdateInput, GameMixUncheckedUpdateInput>
  }

  /**
   * GameMix delete
   */
  export type GameMixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    /**
     * Filter which GameMix to delete.
     */
    where: GameMixWhereUniqueInput
  }

  /**
   * GameMix deleteMany
   */
  export type GameMixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameMixes to delete
     */
    where?: GameMixWhereInput
    /**
     * Limit how many GameMixes to delete.
     */
    limit?: number
  }

  /**
   * GameMix.slots
   */
  export type GameMix$slotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    where?: SlotMachineWhereInput
    orderBy?: SlotMachineOrderByWithRelationInput | SlotMachineOrderByWithRelationInput[]
    cursor?: SlotMachineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SlotMachineScalarFieldEnum | SlotMachineScalarFieldEnum[]
  }

  /**
   * GameMix.metrologyApprovals
   */
  export type GameMix$metrologyApprovalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    where?: MetrologyApprovalWhereInput
    orderBy?: MetrologyApprovalOrderByWithRelationInput | MetrologyApprovalOrderByWithRelationInput[]
    cursor?: MetrologyApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetrologyApprovalScalarFieldEnum | MetrologyApprovalScalarFieldEnum[]
  }

  /**
   * GameMix.metrologySoftware
   */
  export type GameMix$metrologySoftwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    where?: MetrologySoftwareWhereInput
    orderBy?: MetrologySoftwareOrderByWithRelationInput | MetrologySoftwareOrderByWithRelationInput[]
    cursor?: MetrologySoftwareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetrologySoftwareScalarFieldEnum | MetrologySoftwareScalarFieldEnum[]
  }

  /**
   * GameMix without action
   */
  export type GameMixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
  }


  /**
   * Model SlotMachine
   */

  export type AggregateSlotMachine = {
    _count: SlotMachineCountAggregateOutputType | null
    _avg: SlotMachineAvgAggregateOutputType | null
    _sum: SlotMachineSumAggregateOutputType | null
    _min: SlotMachineMinAggregateOutputType | null
    _max: SlotMachineMaxAggregateOutputType | null
  }

  export type SlotMachineAvgAggregateOutputType = {
    productionYear: number | null
    denomination: number | null
    maxBet: number | null
    rtp: number | null
    gamingPlaces: number | null
  }

  export type SlotMachineSumAggregateOutputType = {
    productionYear: number | null
    denomination: number | null
    maxBet: number | null
    rtp: number | null
    gamingPlaces: number | null
  }

  export type SlotMachineMinAggregateOutputType = {
    id: string | null
    serialNumber: string | null
    manufacturer: string | null
    providerId: string | null
    cabinetId: string | null
    gameMixId: string | null
    locationId: string | null
    productionYear: number | null
    denomination: number | null
    maxBet: number | null
    rtp: number | null
    gamingPlaces: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlotMachineMaxAggregateOutputType = {
    id: string | null
    serialNumber: string | null
    manufacturer: string | null
    providerId: string | null
    cabinetId: string | null
    gameMixId: string | null
    locationId: string | null
    productionYear: number | null
    denomination: number | null
    maxBet: number | null
    rtp: number | null
    gamingPlaces: number | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SlotMachineCountAggregateOutputType = {
    id: number
    serialNumber: number
    manufacturer: number
    providerId: number
    cabinetId: number
    gameMixId: number
    locationId: number
    productionYear: number
    denomination: number
    maxBet: number
    rtp: number
    gamingPlaces: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SlotMachineAvgAggregateInputType = {
    productionYear?: true
    denomination?: true
    maxBet?: true
    rtp?: true
    gamingPlaces?: true
  }

  export type SlotMachineSumAggregateInputType = {
    productionYear?: true
    denomination?: true
    maxBet?: true
    rtp?: true
    gamingPlaces?: true
  }

  export type SlotMachineMinAggregateInputType = {
    id?: true
    serialNumber?: true
    manufacturer?: true
    providerId?: true
    cabinetId?: true
    gameMixId?: true
    locationId?: true
    productionYear?: true
    denomination?: true
    maxBet?: true
    rtp?: true
    gamingPlaces?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlotMachineMaxAggregateInputType = {
    id?: true
    serialNumber?: true
    manufacturer?: true
    providerId?: true
    cabinetId?: true
    gameMixId?: true
    locationId?: true
    productionYear?: true
    denomination?: true
    maxBet?: true
    rtp?: true
    gamingPlaces?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SlotMachineCountAggregateInputType = {
    id?: true
    serialNumber?: true
    manufacturer?: true
    providerId?: true
    cabinetId?: true
    gameMixId?: true
    locationId?: true
    productionYear?: true
    denomination?: true
    maxBet?: true
    rtp?: true
    gamingPlaces?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SlotMachineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlotMachine to aggregate.
     */
    where?: SlotMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotMachines to fetch.
     */
    orderBy?: SlotMachineOrderByWithRelationInput | SlotMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlotMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SlotMachines
    **/
    _count?: true | SlotMachineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlotMachineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlotMachineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotMachineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotMachineMaxAggregateInputType
  }

  export type GetSlotMachineAggregateType<T extends SlotMachineAggregateArgs> = {
        [P in keyof T & keyof AggregateSlotMachine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlotMachine[P]>
      : GetScalarType<T[P], AggregateSlotMachine[P]>
  }




  export type SlotMachineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotMachineWhereInput
    orderBy?: SlotMachineOrderByWithAggregationInput | SlotMachineOrderByWithAggregationInput[]
    by: SlotMachineScalarFieldEnum[] | SlotMachineScalarFieldEnum
    having?: SlotMachineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotMachineCountAggregateInputType | true
    _avg?: SlotMachineAvgAggregateInputType
    _sum?: SlotMachineSumAggregateInputType
    _min?: SlotMachineMinAggregateInputType
    _max?: SlotMachineMaxAggregateInputType
  }

  export type SlotMachineGroupByOutputType = {
    id: string
    serialNumber: string
    manufacturer: string
    providerId: string
    cabinetId: string
    gameMixId: string | null
    locationId: string | null
    productionYear: number | null
    denomination: number | null
    maxBet: number | null
    rtp: number | null
    gamingPlaces: number
    status: string
    createdAt: Date
    updatedAt: Date
    _count: SlotMachineCountAggregateOutputType | null
    _avg: SlotMachineAvgAggregateOutputType | null
    _sum: SlotMachineSumAggregateOutputType | null
    _min: SlotMachineMinAggregateOutputType | null
    _max: SlotMachineMaxAggregateOutputType | null
  }

  type GetSlotMachineGroupByPayload<T extends SlotMachineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotMachineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotMachineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotMachineGroupByOutputType[P]>
            : GetScalarType<T[P], SlotMachineGroupByOutputType[P]>
        }
      >
    >


  export type SlotMachineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    manufacturer?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    locationId?: boolean
    productionYear?: boolean
    denomination?: boolean
    maxBet?: boolean
    rtp?: boolean
    gamingPlaces?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
    gameMix?: boolean | SlotMachine$gameMixArgs<ExtArgs>
    location?: boolean | SlotMachine$locationArgs<ExtArgs>
  }, ExtArgs["result"]["slotMachine"]>

  export type SlotMachineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    manufacturer?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    locationId?: boolean
    productionYear?: boolean
    denomination?: boolean
    maxBet?: boolean
    rtp?: boolean
    gamingPlaces?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
    gameMix?: boolean | SlotMachine$gameMixArgs<ExtArgs>
    location?: boolean | SlotMachine$locationArgs<ExtArgs>
  }, ExtArgs["result"]["slotMachine"]>

  export type SlotMachineSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    manufacturer?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    locationId?: boolean
    productionYear?: boolean
    denomination?: boolean
    maxBet?: boolean
    rtp?: boolean
    gamingPlaces?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
    gameMix?: boolean | SlotMachine$gameMixArgs<ExtArgs>
    location?: boolean | SlotMachine$locationArgs<ExtArgs>
  }, ExtArgs["result"]["slotMachine"]>

  export type SlotMachineSelectScalar = {
    id?: boolean
    serialNumber?: boolean
    manufacturer?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    locationId?: boolean
    productionYear?: boolean
    denomination?: boolean
    maxBet?: boolean
    rtp?: boolean
    gamingPlaces?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SlotMachineOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serialNumber" | "manufacturer" | "providerId" | "cabinetId" | "gameMixId" | "locationId" | "productionYear" | "denomination" | "maxBet" | "rtp" | "gamingPlaces" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["slotMachine"]>
  export type SlotMachineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
    gameMix?: boolean | SlotMachine$gameMixArgs<ExtArgs>
    location?: boolean | SlotMachine$locationArgs<ExtArgs>
  }
  export type SlotMachineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
    gameMix?: boolean | SlotMachine$gameMixArgs<ExtArgs>
    location?: boolean | SlotMachine$locationArgs<ExtArgs>
  }
  export type SlotMachineIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    cabinet?: boolean | CabinetDefaultArgs<ExtArgs>
    gameMix?: boolean | SlotMachine$gameMixArgs<ExtArgs>
    location?: boolean | SlotMachine$locationArgs<ExtArgs>
  }

  export type $SlotMachinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SlotMachine"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
      cabinet: Prisma.$CabinetPayload<ExtArgs>
      gameMix: Prisma.$GameMixPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serialNumber: string
      manufacturer: string
      providerId: string
      cabinetId: string
      gameMixId: string | null
      locationId: string | null
      productionYear: number | null
      denomination: number | null
      maxBet: number | null
      rtp: number | null
      gamingPlaces: number
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["slotMachine"]>
    composites: {}
  }

  type SlotMachineGetPayload<S extends boolean | null | undefined | SlotMachineDefaultArgs> = $Result.GetResult<Prisma.$SlotMachinePayload, S>

  type SlotMachineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SlotMachineFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SlotMachineCountAggregateInputType | true
    }

  export interface SlotMachineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SlotMachine'], meta: { name: 'SlotMachine' } }
    /**
     * Find zero or one SlotMachine that matches the filter.
     * @param {SlotMachineFindUniqueArgs} args - Arguments to find a SlotMachine
     * @example
     * // Get one SlotMachine
     * const slotMachine = await prisma.slotMachine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SlotMachineFindUniqueArgs>(args: SelectSubset<T, SlotMachineFindUniqueArgs<ExtArgs>>): Prisma__SlotMachineClient<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SlotMachine that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SlotMachineFindUniqueOrThrowArgs} args - Arguments to find a SlotMachine
     * @example
     * // Get one SlotMachine
     * const slotMachine = await prisma.slotMachine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SlotMachineFindUniqueOrThrowArgs>(args: SelectSubset<T, SlotMachineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SlotMachineClient<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlotMachine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotMachineFindFirstArgs} args - Arguments to find a SlotMachine
     * @example
     * // Get one SlotMachine
     * const slotMachine = await prisma.slotMachine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SlotMachineFindFirstArgs>(args?: SelectSubset<T, SlotMachineFindFirstArgs<ExtArgs>>): Prisma__SlotMachineClient<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SlotMachine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotMachineFindFirstOrThrowArgs} args - Arguments to find a SlotMachine
     * @example
     * // Get one SlotMachine
     * const slotMachine = await prisma.slotMachine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SlotMachineFindFirstOrThrowArgs>(args?: SelectSubset<T, SlotMachineFindFirstOrThrowArgs<ExtArgs>>): Prisma__SlotMachineClient<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SlotMachines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotMachineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SlotMachines
     * const slotMachines = await prisma.slotMachine.findMany()
     * 
     * // Get first 10 SlotMachines
     * const slotMachines = await prisma.slotMachine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slotMachineWithIdOnly = await prisma.slotMachine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SlotMachineFindManyArgs>(args?: SelectSubset<T, SlotMachineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SlotMachine.
     * @param {SlotMachineCreateArgs} args - Arguments to create a SlotMachine.
     * @example
     * // Create one SlotMachine
     * const SlotMachine = await prisma.slotMachine.create({
     *   data: {
     *     // ... data to create a SlotMachine
     *   }
     * })
     * 
     */
    create<T extends SlotMachineCreateArgs>(args: SelectSubset<T, SlotMachineCreateArgs<ExtArgs>>): Prisma__SlotMachineClient<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SlotMachines.
     * @param {SlotMachineCreateManyArgs} args - Arguments to create many SlotMachines.
     * @example
     * // Create many SlotMachines
     * const slotMachine = await prisma.slotMachine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SlotMachineCreateManyArgs>(args?: SelectSubset<T, SlotMachineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SlotMachines and returns the data saved in the database.
     * @param {SlotMachineCreateManyAndReturnArgs} args - Arguments to create many SlotMachines.
     * @example
     * // Create many SlotMachines
     * const slotMachine = await prisma.slotMachine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SlotMachines and only return the `id`
     * const slotMachineWithIdOnly = await prisma.slotMachine.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SlotMachineCreateManyAndReturnArgs>(args?: SelectSubset<T, SlotMachineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SlotMachine.
     * @param {SlotMachineDeleteArgs} args - Arguments to delete one SlotMachine.
     * @example
     * // Delete one SlotMachine
     * const SlotMachine = await prisma.slotMachine.delete({
     *   where: {
     *     // ... filter to delete one SlotMachine
     *   }
     * })
     * 
     */
    delete<T extends SlotMachineDeleteArgs>(args: SelectSubset<T, SlotMachineDeleteArgs<ExtArgs>>): Prisma__SlotMachineClient<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SlotMachine.
     * @param {SlotMachineUpdateArgs} args - Arguments to update one SlotMachine.
     * @example
     * // Update one SlotMachine
     * const slotMachine = await prisma.slotMachine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SlotMachineUpdateArgs>(args: SelectSubset<T, SlotMachineUpdateArgs<ExtArgs>>): Prisma__SlotMachineClient<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SlotMachines.
     * @param {SlotMachineDeleteManyArgs} args - Arguments to filter SlotMachines to delete.
     * @example
     * // Delete a few SlotMachines
     * const { count } = await prisma.slotMachine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SlotMachineDeleteManyArgs>(args?: SelectSubset<T, SlotMachineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlotMachines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotMachineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SlotMachines
     * const slotMachine = await prisma.slotMachine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SlotMachineUpdateManyArgs>(args: SelectSubset<T, SlotMachineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SlotMachines and returns the data updated in the database.
     * @param {SlotMachineUpdateManyAndReturnArgs} args - Arguments to update many SlotMachines.
     * @example
     * // Update many SlotMachines
     * const slotMachine = await prisma.slotMachine.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SlotMachines and only return the `id`
     * const slotMachineWithIdOnly = await prisma.slotMachine.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SlotMachineUpdateManyAndReturnArgs>(args: SelectSubset<T, SlotMachineUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SlotMachine.
     * @param {SlotMachineUpsertArgs} args - Arguments to update or create a SlotMachine.
     * @example
     * // Update or create a SlotMachine
     * const slotMachine = await prisma.slotMachine.upsert({
     *   create: {
     *     // ... data to create a SlotMachine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SlotMachine we want to update
     *   }
     * })
     */
    upsert<T extends SlotMachineUpsertArgs>(args: SelectSubset<T, SlotMachineUpsertArgs<ExtArgs>>): Prisma__SlotMachineClient<$Result.GetResult<Prisma.$SlotMachinePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SlotMachines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotMachineCountArgs} args - Arguments to filter SlotMachines to count.
     * @example
     * // Count the number of SlotMachines
     * const count = await prisma.slotMachine.count({
     *   where: {
     *     // ... the filter for the SlotMachines we want to count
     *   }
     * })
    **/
    count<T extends SlotMachineCountArgs>(
      args?: Subset<T, SlotMachineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotMachineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SlotMachine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotMachineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SlotMachineAggregateArgs>(args: Subset<T, SlotMachineAggregateArgs>): Prisma.PrismaPromise<GetSlotMachineAggregateType<T>>

    /**
     * Group by SlotMachine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotMachineGroupByArgs} args - Group by arguments.
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
      T extends SlotMachineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotMachineGroupByArgs['orderBy'] }
        : { orderBy?: SlotMachineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SlotMachineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotMachineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SlotMachine model
   */
  readonly fields: SlotMachineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SlotMachine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotMachineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cabinet<T extends CabinetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CabinetDefaultArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gameMix<T extends SlotMachine$gameMixArgs<ExtArgs> = {}>(args?: Subset<T, SlotMachine$gameMixArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    location<T extends SlotMachine$locationArgs<ExtArgs> = {}>(args?: Subset<T, SlotMachine$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SlotMachine model
   */
  interface SlotMachineFieldRefs {
    readonly id: FieldRef<"SlotMachine", 'String'>
    readonly serialNumber: FieldRef<"SlotMachine", 'String'>
    readonly manufacturer: FieldRef<"SlotMachine", 'String'>
    readonly providerId: FieldRef<"SlotMachine", 'String'>
    readonly cabinetId: FieldRef<"SlotMachine", 'String'>
    readonly gameMixId: FieldRef<"SlotMachine", 'String'>
    readonly locationId: FieldRef<"SlotMachine", 'String'>
    readonly productionYear: FieldRef<"SlotMachine", 'Int'>
    readonly denomination: FieldRef<"SlotMachine", 'Float'>
    readonly maxBet: FieldRef<"SlotMachine", 'Float'>
    readonly rtp: FieldRef<"SlotMachine", 'Float'>
    readonly gamingPlaces: FieldRef<"SlotMachine", 'Int'>
    readonly status: FieldRef<"SlotMachine", 'String'>
    readonly createdAt: FieldRef<"SlotMachine", 'DateTime'>
    readonly updatedAt: FieldRef<"SlotMachine", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SlotMachine findUnique
   */
  export type SlotMachineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    /**
     * Filter, which SlotMachine to fetch.
     */
    where: SlotMachineWhereUniqueInput
  }

  /**
   * SlotMachine findUniqueOrThrow
   */
  export type SlotMachineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    /**
     * Filter, which SlotMachine to fetch.
     */
    where: SlotMachineWhereUniqueInput
  }

  /**
   * SlotMachine findFirst
   */
  export type SlotMachineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    /**
     * Filter, which SlotMachine to fetch.
     */
    where?: SlotMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotMachines to fetch.
     */
    orderBy?: SlotMachineOrderByWithRelationInput | SlotMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlotMachines.
     */
    cursor?: SlotMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlotMachines.
     */
    distinct?: SlotMachineScalarFieldEnum | SlotMachineScalarFieldEnum[]
  }

  /**
   * SlotMachine findFirstOrThrow
   */
  export type SlotMachineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    /**
     * Filter, which SlotMachine to fetch.
     */
    where?: SlotMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotMachines to fetch.
     */
    orderBy?: SlotMachineOrderByWithRelationInput | SlotMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SlotMachines.
     */
    cursor?: SlotMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotMachines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SlotMachines.
     */
    distinct?: SlotMachineScalarFieldEnum | SlotMachineScalarFieldEnum[]
  }

  /**
   * SlotMachine findMany
   */
  export type SlotMachineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    /**
     * Filter, which SlotMachines to fetch.
     */
    where?: SlotMachineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SlotMachines to fetch.
     */
    orderBy?: SlotMachineOrderByWithRelationInput | SlotMachineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SlotMachines.
     */
    cursor?: SlotMachineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SlotMachines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SlotMachines.
     */
    skip?: number
    distinct?: SlotMachineScalarFieldEnum | SlotMachineScalarFieldEnum[]
  }

  /**
   * SlotMachine create
   */
  export type SlotMachineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    /**
     * The data needed to create a SlotMachine.
     */
    data: XOR<SlotMachineCreateInput, SlotMachineUncheckedCreateInput>
  }

  /**
   * SlotMachine createMany
   */
  export type SlotMachineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SlotMachines.
     */
    data: SlotMachineCreateManyInput | SlotMachineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SlotMachine createManyAndReturn
   */
  export type SlotMachineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * The data used to create many SlotMachines.
     */
    data: SlotMachineCreateManyInput | SlotMachineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlotMachine update
   */
  export type SlotMachineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    /**
     * The data needed to update a SlotMachine.
     */
    data: XOR<SlotMachineUpdateInput, SlotMachineUncheckedUpdateInput>
    /**
     * Choose, which SlotMachine to update.
     */
    where: SlotMachineWhereUniqueInput
  }

  /**
   * SlotMachine updateMany
   */
  export type SlotMachineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SlotMachines.
     */
    data: XOR<SlotMachineUpdateManyMutationInput, SlotMachineUncheckedUpdateManyInput>
    /**
     * Filter which SlotMachines to update
     */
    where?: SlotMachineWhereInput
    /**
     * Limit how many SlotMachines to update.
     */
    limit?: number
  }

  /**
   * SlotMachine updateManyAndReturn
   */
  export type SlotMachineUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * The data used to update SlotMachines.
     */
    data: XOR<SlotMachineUpdateManyMutationInput, SlotMachineUncheckedUpdateManyInput>
    /**
     * Filter which SlotMachines to update
     */
    where?: SlotMachineWhereInput
    /**
     * Limit how many SlotMachines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SlotMachine upsert
   */
  export type SlotMachineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    /**
     * The filter to search for the SlotMachine to update in case it exists.
     */
    where: SlotMachineWhereUniqueInput
    /**
     * In case the SlotMachine found by the `where` argument doesn't exist, create a new SlotMachine with this data.
     */
    create: XOR<SlotMachineCreateInput, SlotMachineUncheckedCreateInput>
    /**
     * In case the SlotMachine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotMachineUpdateInput, SlotMachineUncheckedUpdateInput>
  }

  /**
   * SlotMachine delete
   */
  export type SlotMachineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
    /**
     * Filter which SlotMachine to delete.
     */
    where: SlotMachineWhereUniqueInput
  }

  /**
   * SlotMachine deleteMany
   */
  export type SlotMachineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SlotMachines to delete
     */
    where?: SlotMachineWhereInput
    /**
     * Limit how many SlotMachines to delete.
     */
    limit?: number
  }

  /**
   * SlotMachine.gameMix
   */
  export type SlotMachine$gameMixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    where?: GameMixWhereInput
  }

  /**
   * SlotMachine.location
   */
  export type SlotMachine$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * SlotMachine without action
   */
  export type SlotMachineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotMachine
     */
    select?: SlotMachineSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SlotMachine
     */
    omit?: SlotMachineOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SlotMachineInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phone: string | null
    email: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    email: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    email?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    name: string
    address: string | null
    phone: string | null
    email: string | null
    createdAt: Date
    updatedAt: Date
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    email?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "email" | "createdAt" | "updatedAt", ExtArgs["result"]["company"]>

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      phone: string | null
      email: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly name: FieldRef<"Company", 'String'>
    readonly address: FieldRef<"Company", 'String'>
    readonly phone: FieldRef<"Company", 'String'>
    readonly email: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
  }


  /**
   * Model Invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  export type InvoiceAvgAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceSumAggregateOutputType = {
    amount: number | null
  }

  export type InvoiceMinAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    amount: number | null
    currency: string | null
    status: string | null
    serialNumber: string | null
    locationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceMaxAggregateOutputType = {
    id: string | null
    invoiceNumber: string | null
    amount: number | null
    currency: string | null
    status: string | null
    serialNumber: string | null
    locationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InvoiceCountAggregateOutputType = {
    id: number
    invoiceNumber: number
    amount: number
    currency: number
    status: number
    serialNumber: number
    locationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type InvoiceSumAggregateInputType = {
    amount?: true
  }

  export type InvoiceMinAggregateInputType = {
    id?: true
    invoiceNumber?: true
    amount?: true
    currency?: true
    status?: true
    serialNumber?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceMaxAggregateInputType = {
    id?: true
    invoiceNumber?: true
    amount?: true
    currency?: true
    status?: true
    serialNumber?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InvoiceCountAggregateInputType = {
    id?: true
    invoiceNumber?: true
    amount?: true
    currency?: true
    status?: true
    serialNumber?: true
    locationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoice to aggregate.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invoices
    **/
    _count?: true | InvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvoiceMaxAggregateInputType
  }

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>
  }




  export type InvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvoiceWhereInput
    orderBy?: InvoiceOrderByWithAggregationInput | InvoiceOrderByWithAggregationInput[]
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum
    having?: InvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvoiceCountAggregateInputType | true
    _avg?: InvoiceAvgAggregateInputType
    _sum?: InvoiceSumAggregateInputType
    _min?: InvoiceMinAggregateInputType
    _max?: InvoiceMaxAggregateInputType
  }

  export type InvoiceGroupByOutputType = {
    id: string
    invoiceNumber: string
    amount: number
    currency: string
    status: string
    serialNumber: string | null
    locationId: string | null
    createdAt: Date
    updatedAt: Date
    _count: InvoiceCountAggregateOutputType | null
    _avg: InvoiceAvgAggregateOutputType | null
    _sum: InvoiceSumAggregateOutputType | null
    _min: InvoiceMinAggregateOutputType | null
    _max: InvoiceMaxAggregateOutputType | null
  }

  type GetInvoiceGroupByPayload<T extends InvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
        }
      >
    >


  export type InvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    serialNumber?: boolean
    locationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | Invoice$locationArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    serialNumber?: boolean
    locationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | Invoice$locationArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    serialNumber?: boolean
    locationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    location?: boolean | Invoice$locationArgs<ExtArgs>
  }, ExtArgs["result"]["invoice"]>

  export type InvoiceSelectScalar = {
    id?: boolean
    invoiceNumber?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    serialNumber?: boolean
    locationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "invoiceNumber" | "amount" | "currency" | "status" | "serialNumber" | "locationId" | "createdAt" | "updatedAt", ExtArgs["result"]["invoice"]>
  export type InvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | Invoice$locationArgs<ExtArgs>
  }
  export type InvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | Invoice$locationArgs<ExtArgs>
  }
  export type InvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    location?: boolean | Invoice$locationArgs<ExtArgs>
  }

  export type $InvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invoice"
    objects: {
      location: Prisma.$LocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      invoiceNumber: string
      amount: number
      currency: string
      status: string
      serialNumber: string | null
      locationId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["invoice"]>
    composites: {}
  }

  type InvoiceGetPayload<S extends boolean | null | undefined | InvoiceDefaultArgs> = $Result.GetResult<Prisma.$InvoicePayload, S>

  type InvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvoiceCountAggregateInputType | true
    }

  export interface InvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invoice'], meta: { name: 'Invoice' } }
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {InvoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvoiceFindUniqueArgs>(args: SelectSubset<T, InvoiceFindUniqueArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, InvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvoiceFindFirstArgs>(args?: SelectSubset<T, InvoiceFindFirstArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, InvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     * 
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvoiceFindManyArgs>(args?: SelectSubset<T, InvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invoice.
     * @param {InvoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     * 
     */
    create<T extends InvoiceCreateArgs>(args: SelectSubset<T, InvoiceCreateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invoices.
     * @param {InvoiceCreateManyArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvoiceCreateManyArgs>(args?: SelectSubset<T, InvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invoices and returns the data saved in the database.
     * @param {InvoiceCreateManyAndReturnArgs} args - Arguments to create many Invoices.
     * @example
     * // Create many Invoices
     * const invoice = await prisma.invoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, InvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invoice.
     * @param {InvoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     * 
     */
    delete<T extends InvoiceDeleteArgs>(args: SelectSubset<T, InvoiceDeleteArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invoice.
     * @param {InvoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvoiceUpdateArgs>(args: SelectSubset<T, InvoiceUpdateArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invoices.
     * @param {InvoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvoiceDeleteManyArgs>(args?: SelectSubset<T, InvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvoiceUpdateManyArgs>(args: SelectSubset<T, InvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invoices and returns the data updated in the database.
     * @param {InvoiceUpdateManyAndReturnArgs} args - Arguments to update many Invoices.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invoices and only return the `id`
     * const invoiceWithIdOnly = await prisma.invoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, InvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invoice.
     * @param {InvoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     */
    upsert<T extends InvoiceUpsertArgs>(args: SelectSubset<T, InvoiceUpsertArgs<ExtArgs>>): Prisma__InvoiceClient<$Result.GetResult<Prisma.$InvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
    **/
    count<T extends InvoiceCountArgs>(
      args?: Subset<T, InvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InvoiceAggregateArgs>(args: Subset<T, InvoiceAggregateArgs>): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceGroupByArgs} args - Group by arguments.
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
      T extends InvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvoiceGroupByArgs['orderBy'] }
        : { orderBy?: InvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invoice model
   */
  readonly fields: InvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    location<T extends Invoice$locationArgs<ExtArgs> = {}>(args?: Subset<T, Invoice$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Invoice model
   */
  interface InvoiceFieldRefs {
    readonly id: FieldRef<"Invoice", 'String'>
    readonly invoiceNumber: FieldRef<"Invoice", 'String'>
    readonly amount: FieldRef<"Invoice", 'Float'>
    readonly currency: FieldRef<"Invoice", 'String'>
    readonly status: FieldRef<"Invoice", 'String'>
    readonly serialNumber: FieldRef<"Invoice", 'String'>
    readonly locationId: FieldRef<"Invoice", 'String'>
    readonly createdAt: FieldRef<"Invoice", 'DateTime'>
    readonly updatedAt: FieldRef<"Invoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invoice findUnique
   */
  export type InvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findUniqueOrThrow
   */
  export type InvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice findFirst
   */
  export type InvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findFirstOrThrow
   */
  export type InvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoice to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice findMany
   */
  export type InvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter, which Invoices to fetch.
     */
    where?: InvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invoices to fetch.
     */
    orderBy?: InvoiceOrderByWithRelationInput | InvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invoices.
     */
    cursor?: InvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invoices.
     */
    skip?: number
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[]
  }

  /**
   * Invoice create
   */
  export type InvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Invoice.
     */
    data: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
  }

  /**
   * Invoice createMany
   */
  export type InvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invoice createManyAndReturn
   */
  export type InvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many Invoices.
     */
    data: InvoiceCreateManyInput | InvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice update
   */
  export type InvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Invoice.
     */
    data: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
    /**
     * Choose, which Invoice to update.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice updateMany
   */
  export type InvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
  }

  /**
   * Invoice updateManyAndReturn
   */
  export type InvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * The data used to update Invoices.
     */
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyInput>
    /**
     * Filter which Invoices to update
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invoice upsert
   */
  export type InvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Invoice to update in case it exists.
     */
    where: InvoiceWhereUniqueInput
    /**
     * In case the Invoice found by the `where` argument doesn't exist, create a new Invoice with this data.
     */
    create: XOR<InvoiceCreateInput, InvoiceUncheckedCreateInput>
    /**
     * In case the Invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvoiceUpdateInput, InvoiceUncheckedUpdateInput>
  }

  /**
   * Invoice delete
   */
  export type InvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
    /**
     * Filter which Invoice to delete.
     */
    where: InvoiceWhereUniqueInput
  }

  /**
   * Invoice deleteMany
   */
  export type InvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invoices to delete
     */
    where?: InvoiceWhereInput
    /**
     * Limit how many Invoices to delete.
     */
    limit?: number
  }

  /**
   * Invoice.location
   */
  export type Invoice$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * Invoice without action
   */
  export type InvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invoice
     */
    select?: InvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invoice
     */
    omit?: InvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvoiceInclude<ExtArgs> | null
  }


  /**
   * Model Platform
   */

  export type AggregatePlatform = {
    _count: PlatformCountAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  export type PlatformMinAggregateOutputType = {
    id: string | null
    name: string | null
    serialNumbers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformMaxAggregateOutputType = {
    id: string | null
    name: string | null
    serialNumbers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlatformCountAggregateOutputType = {
    id: number
    name: number
    serialNumbers: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlatformMinAggregateInputType = {
    id?: true
    name?: true
    serialNumbers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformMaxAggregateInputType = {
    id?: true
    name?: true
    serialNumbers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlatformCountAggregateInputType = {
    id?: true
    name?: true
    serialNumbers?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlatformAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platform to aggregate.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Platforms
    **/
    _count?: true | PlatformCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlatformMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlatformMaxAggregateInputType
  }

  export type GetPlatformAggregateType<T extends PlatformAggregateArgs> = {
        [P in keyof T & keyof AggregatePlatform]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlatform[P]>
      : GetScalarType<T[P], AggregatePlatform[P]>
  }




  export type PlatformGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlatformWhereInput
    orderBy?: PlatformOrderByWithAggregationInput | PlatformOrderByWithAggregationInput[]
    by: PlatformScalarFieldEnum[] | PlatformScalarFieldEnum
    having?: PlatformScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlatformCountAggregateInputType | true
    _min?: PlatformMinAggregateInputType
    _max?: PlatformMaxAggregateInputType
  }

  export type PlatformGroupByOutputType = {
    id: string
    name: string
    serialNumbers: string | null
    createdAt: Date
    updatedAt: Date
    _count: PlatformCountAggregateOutputType | null
    _min: PlatformMinAggregateOutputType | null
    _max: PlatformMaxAggregateOutputType | null
  }

  type GetPlatformGroupByPayload<T extends PlatformGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlatformGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlatformGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlatformGroupByOutputType[P]>
            : GetScalarType<T[P], PlatformGroupByOutputType[P]>
        }
      >
    >


  export type PlatformSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["platform"]>

  export type PlatformSelectScalar = {
    id?: boolean
    name?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlatformOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "serialNumbers" | "createdAt" | "updatedAt", ExtArgs["result"]["platform"]>

  export type $PlatformPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Platform"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      serialNumbers: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["platform"]>
    composites: {}
  }

  type PlatformGetPayload<S extends boolean | null | undefined | PlatformDefaultArgs> = $Result.GetResult<Prisma.$PlatformPayload, S>

  type PlatformCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlatformFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlatformCountAggregateInputType | true
    }

  export interface PlatformDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Platform'], meta: { name: 'Platform' } }
    /**
     * Find zero or one Platform that matches the filter.
     * @param {PlatformFindUniqueArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlatformFindUniqueArgs>(args: SelectSubset<T, PlatformFindUniqueArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Platform that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlatformFindUniqueOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlatformFindUniqueOrThrowArgs>(args: SelectSubset<T, PlatformFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlatformFindFirstArgs>(args?: SelectSubset<T, PlatformFindFirstArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Platform that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindFirstOrThrowArgs} args - Arguments to find a Platform
     * @example
     * // Get one Platform
     * const platform = await prisma.platform.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlatformFindFirstOrThrowArgs>(args?: SelectSubset<T, PlatformFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Platforms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Platforms
     * const platforms = await prisma.platform.findMany()
     * 
     * // Get first 10 Platforms
     * const platforms = await prisma.platform.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const platformWithIdOnly = await prisma.platform.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlatformFindManyArgs>(args?: SelectSubset<T, PlatformFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Platform.
     * @param {PlatformCreateArgs} args - Arguments to create a Platform.
     * @example
     * // Create one Platform
     * const Platform = await prisma.platform.create({
     *   data: {
     *     // ... data to create a Platform
     *   }
     * })
     * 
     */
    create<T extends PlatformCreateArgs>(args: SelectSubset<T, PlatformCreateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Platforms.
     * @param {PlatformCreateManyArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlatformCreateManyArgs>(args?: SelectSubset<T, PlatformCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Platforms and returns the data saved in the database.
     * @param {PlatformCreateManyAndReturnArgs} args - Arguments to create many Platforms.
     * @example
     * // Create many Platforms
     * const platform = await prisma.platform.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlatformCreateManyAndReturnArgs>(args?: SelectSubset<T, PlatformCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Platform.
     * @param {PlatformDeleteArgs} args - Arguments to delete one Platform.
     * @example
     * // Delete one Platform
     * const Platform = await prisma.platform.delete({
     *   where: {
     *     // ... filter to delete one Platform
     *   }
     * })
     * 
     */
    delete<T extends PlatformDeleteArgs>(args: SelectSubset<T, PlatformDeleteArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Platform.
     * @param {PlatformUpdateArgs} args - Arguments to update one Platform.
     * @example
     * // Update one Platform
     * const platform = await prisma.platform.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlatformUpdateArgs>(args: SelectSubset<T, PlatformUpdateArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Platforms.
     * @param {PlatformDeleteManyArgs} args - Arguments to filter Platforms to delete.
     * @example
     * // Delete a few Platforms
     * const { count } = await prisma.platform.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlatformDeleteManyArgs>(args?: SelectSubset<T, PlatformDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlatformUpdateManyArgs>(args: SelectSubset<T, PlatformUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Platforms and returns the data updated in the database.
     * @param {PlatformUpdateManyAndReturnArgs} args - Arguments to update many Platforms.
     * @example
     * // Update many Platforms
     * const platform = await prisma.platform.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Platforms and only return the `id`
     * const platformWithIdOnly = await prisma.platform.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlatformUpdateManyAndReturnArgs>(args: SelectSubset<T, PlatformUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Platform.
     * @param {PlatformUpsertArgs} args - Arguments to update or create a Platform.
     * @example
     * // Update or create a Platform
     * const platform = await prisma.platform.upsert({
     *   create: {
     *     // ... data to create a Platform
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Platform we want to update
     *   }
     * })
     */
    upsert<T extends PlatformUpsertArgs>(args: SelectSubset<T, PlatformUpsertArgs<ExtArgs>>): Prisma__PlatformClient<$Result.GetResult<Prisma.$PlatformPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Platforms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformCountArgs} args - Arguments to filter Platforms to count.
     * @example
     * // Count the number of Platforms
     * const count = await prisma.platform.count({
     *   where: {
     *     // ... the filter for the Platforms we want to count
     *   }
     * })
    **/
    count<T extends PlatformCountArgs>(
      args?: Subset<T, PlatformCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlatformCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlatformAggregateArgs>(args: Subset<T, PlatformAggregateArgs>): Prisma.PrismaPromise<GetPlatformAggregateType<T>>

    /**
     * Group by Platform.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlatformGroupByArgs} args - Group by arguments.
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
      T extends PlatformGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlatformGroupByArgs['orderBy'] }
        : { orderBy?: PlatformGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlatformGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Platform model
   */
  readonly fields: PlatformFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Platform.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlatformClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Platform model
   */
  interface PlatformFieldRefs {
    readonly id: FieldRef<"Platform", 'String'>
    readonly name: FieldRef<"Platform", 'String'>
    readonly serialNumbers: FieldRef<"Platform", 'String'>
    readonly createdAt: FieldRef<"Platform", 'DateTime'>
    readonly updatedAt: FieldRef<"Platform", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Platform findUnique
   */
  export type PlatformFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findUniqueOrThrow
   */
  export type PlatformFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform findFirst
   */
  export type PlatformFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findFirstOrThrow
   */
  export type PlatformFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Filter, which Platform to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Platforms.
     */
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform findMany
   */
  export type PlatformFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Filter, which Platforms to fetch.
     */
    where?: PlatformWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Platforms to fetch.
     */
    orderBy?: PlatformOrderByWithRelationInput | PlatformOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Platforms.
     */
    cursor?: PlatformWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Platforms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Platforms.
     */
    skip?: number
    distinct?: PlatformScalarFieldEnum | PlatformScalarFieldEnum[]
  }

  /**
   * Platform create
   */
  export type PlatformCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data needed to create a Platform.
     */
    data: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
  }

  /**
   * Platform createMany
   */
  export type PlatformCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform createManyAndReturn
   */
  export type PlatformCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to create many Platforms.
     */
    data: PlatformCreateManyInput | PlatformCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Platform update
   */
  export type PlatformUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data needed to update a Platform.
     */
    data: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
    /**
     * Choose, which Platform to update.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform updateMany
   */
  export type PlatformUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform updateManyAndReturn
   */
  export type PlatformUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The data used to update Platforms.
     */
    data: XOR<PlatformUpdateManyMutationInput, PlatformUncheckedUpdateManyInput>
    /**
     * Filter which Platforms to update
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to update.
     */
    limit?: number
  }

  /**
   * Platform upsert
   */
  export type PlatformUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * The filter to search for the Platform to update in case it exists.
     */
    where: PlatformWhereUniqueInput
    /**
     * In case the Platform found by the `where` argument doesn't exist, create a new Platform with this data.
     */
    create: XOR<PlatformCreateInput, PlatformUncheckedCreateInput>
    /**
     * In case the Platform was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlatformUpdateInput, PlatformUncheckedUpdateInput>
  }

  /**
   * Platform delete
   */
  export type PlatformDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
    /**
     * Filter which Platform to delete.
     */
    where: PlatformWhereUniqueInput
  }

  /**
   * Platform deleteMany
   */
  export type PlatformDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Platforms to delete
     */
    where?: PlatformWhereInput
    /**
     * Limit how many Platforms to delete.
     */
    limit?: number
  }

  /**
   * Platform without action
   */
  export type PlatformDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Platform
     */
    select?: PlatformSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Platform
     */
    omit?: PlatformOmit<ExtArgs> | null
  }


  /**
   * Model Metrology
   */

  export type AggregateMetrology = {
    _count: MetrologyCountAggregateOutputType | null
    _min: MetrologyMinAggregateOutputType | null
    _max: MetrologyMaxAggregateOutputType | null
  }

  export type MetrologyMinAggregateOutputType = {
    id: string | null
    serialNumber: string | null
    certificateType: string | null
    issueDate: Date | null
    expiryDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetrologyMaxAggregateOutputType = {
    id: string | null
    serialNumber: string | null
    certificateType: string | null
    issueDate: Date | null
    expiryDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetrologyCountAggregateOutputType = {
    id: number
    serialNumber: number
    certificateType: number
    issueDate: number
    expiryDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetrologyMinAggregateInputType = {
    id?: true
    serialNumber?: true
    certificateType?: true
    issueDate?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetrologyMaxAggregateInputType = {
    id?: true
    serialNumber?: true
    certificateType?: true
    issueDate?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetrologyCountAggregateInputType = {
    id?: true
    serialNumber?: true
    certificateType?: true
    issueDate?: true
    expiryDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetrologyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrology to aggregate.
     */
    where?: MetrologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrologies to fetch.
     */
    orderBy?: MetrologyOrderByWithRelationInput | MetrologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetrologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Metrologies
    **/
    _count?: true | MetrologyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetrologyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetrologyMaxAggregateInputType
  }

  export type GetMetrologyAggregateType<T extends MetrologyAggregateArgs> = {
        [P in keyof T & keyof AggregateMetrology]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetrology[P]>
      : GetScalarType<T[P], AggregateMetrology[P]>
  }




  export type MetrologyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologyWhereInput
    orderBy?: MetrologyOrderByWithAggregationInput | MetrologyOrderByWithAggregationInput[]
    by: MetrologyScalarFieldEnum[] | MetrologyScalarFieldEnum
    having?: MetrologyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetrologyCountAggregateInputType | true
    _min?: MetrologyMinAggregateInputType
    _max?: MetrologyMaxAggregateInputType
  }

  export type MetrologyGroupByOutputType = {
    id: string
    serialNumber: string
    certificateType: string
    issueDate: Date | null
    expiryDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: MetrologyCountAggregateOutputType | null
    _min: MetrologyMinAggregateOutputType | null
    _max: MetrologyMaxAggregateOutputType | null
  }

  type GetMetrologyGroupByPayload<T extends MetrologyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetrologyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetrologyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetrologyGroupByOutputType[P]>
            : GetScalarType<T[P], MetrologyGroupByOutputType[P]>
        }
      >
    >


  export type MetrologySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    certificateType?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metrology"]>

  export type MetrologySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    certificateType?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metrology"]>

  export type MetrologySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serialNumber?: boolean
    certificateType?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metrology"]>

  export type MetrologySelectScalar = {
    id?: boolean
    serialNumber?: boolean
    certificateType?: boolean
    issueDate?: boolean
    expiryDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetrologyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "serialNumber" | "certificateType" | "issueDate" | "expiryDate" | "createdAt" | "updatedAt", ExtArgs["result"]["metrology"]>

  export type $MetrologyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Metrology"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serialNumber: string
      certificateType: string
      issueDate: Date | null
      expiryDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metrology"]>
    composites: {}
  }

  type MetrologyGetPayload<S extends boolean | null | undefined | MetrologyDefaultArgs> = $Result.GetResult<Prisma.$MetrologyPayload, S>

  type MetrologyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetrologyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetrologyCountAggregateInputType | true
    }

  export interface MetrologyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Metrology'], meta: { name: 'Metrology' } }
    /**
     * Find zero or one Metrology that matches the filter.
     * @param {MetrologyFindUniqueArgs} args - Arguments to find a Metrology
     * @example
     * // Get one Metrology
     * const metrology = await prisma.metrology.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetrologyFindUniqueArgs>(args: SelectSubset<T, MetrologyFindUniqueArgs<ExtArgs>>): Prisma__MetrologyClient<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Metrology that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetrologyFindUniqueOrThrowArgs} args - Arguments to find a Metrology
     * @example
     * // Get one Metrology
     * const metrology = await prisma.metrology.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetrologyFindUniqueOrThrowArgs>(args: SelectSubset<T, MetrologyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetrologyClient<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metrology that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyFindFirstArgs} args - Arguments to find a Metrology
     * @example
     * // Get one Metrology
     * const metrology = await prisma.metrology.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetrologyFindFirstArgs>(args?: SelectSubset<T, MetrologyFindFirstArgs<ExtArgs>>): Prisma__MetrologyClient<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Metrology that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyFindFirstOrThrowArgs} args - Arguments to find a Metrology
     * @example
     * // Get one Metrology
     * const metrology = await prisma.metrology.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetrologyFindFirstOrThrowArgs>(args?: SelectSubset<T, MetrologyFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetrologyClient<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Metrologies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Metrologies
     * const metrologies = await prisma.metrology.findMany()
     * 
     * // Get first 10 Metrologies
     * const metrologies = await prisma.metrology.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metrologyWithIdOnly = await prisma.metrology.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetrologyFindManyArgs>(args?: SelectSubset<T, MetrologyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Metrology.
     * @param {MetrologyCreateArgs} args - Arguments to create a Metrology.
     * @example
     * // Create one Metrology
     * const Metrology = await prisma.metrology.create({
     *   data: {
     *     // ... data to create a Metrology
     *   }
     * })
     * 
     */
    create<T extends MetrologyCreateArgs>(args: SelectSubset<T, MetrologyCreateArgs<ExtArgs>>): Prisma__MetrologyClient<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Metrologies.
     * @param {MetrologyCreateManyArgs} args - Arguments to create many Metrologies.
     * @example
     * // Create many Metrologies
     * const metrology = await prisma.metrology.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetrologyCreateManyArgs>(args?: SelectSubset<T, MetrologyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Metrologies and returns the data saved in the database.
     * @param {MetrologyCreateManyAndReturnArgs} args - Arguments to create many Metrologies.
     * @example
     * // Create many Metrologies
     * const metrology = await prisma.metrology.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Metrologies and only return the `id`
     * const metrologyWithIdOnly = await prisma.metrology.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetrologyCreateManyAndReturnArgs>(args?: SelectSubset<T, MetrologyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Metrology.
     * @param {MetrologyDeleteArgs} args - Arguments to delete one Metrology.
     * @example
     * // Delete one Metrology
     * const Metrology = await prisma.metrology.delete({
     *   where: {
     *     // ... filter to delete one Metrology
     *   }
     * })
     * 
     */
    delete<T extends MetrologyDeleteArgs>(args: SelectSubset<T, MetrologyDeleteArgs<ExtArgs>>): Prisma__MetrologyClient<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Metrology.
     * @param {MetrologyUpdateArgs} args - Arguments to update one Metrology.
     * @example
     * // Update one Metrology
     * const metrology = await prisma.metrology.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetrologyUpdateArgs>(args: SelectSubset<T, MetrologyUpdateArgs<ExtArgs>>): Prisma__MetrologyClient<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Metrologies.
     * @param {MetrologyDeleteManyArgs} args - Arguments to filter Metrologies to delete.
     * @example
     * // Delete a few Metrologies
     * const { count } = await prisma.metrology.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetrologyDeleteManyArgs>(args?: SelectSubset<T, MetrologyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Metrologies
     * const metrology = await prisma.metrology.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetrologyUpdateManyArgs>(args: SelectSubset<T, MetrologyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Metrologies and returns the data updated in the database.
     * @param {MetrologyUpdateManyAndReturnArgs} args - Arguments to update many Metrologies.
     * @example
     * // Update many Metrologies
     * const metrology = await prisma.metrology.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Metrologies and only return the `id`
     * const metrologyWithIdOnly = await prisma.metrology.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetrologyUpdateManyAndReturnArgs>(args: SelectSubset<T, MetrologyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Metrology.
     * @param {MetrologyUpsertArgs} args - Arguments to update or create a Metrology.
     * @example
     * // Update or create a Metrology
     * const metrology = await prisma.metrology.upsert({
     *   create: {
     *     // ... data to create a Metrology
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Metrology we want to update
     *   }
     * })
     */
    upsert<T extends MetrologyUpsertArgs>(args: SelectSubset<T, MetrologyUpsertArgs<ExtArgs>>): Prisma__MetrologyClient<$Result.GetResult<Prisma.$MetrologyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Metrologies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyCountArgs} args - Arguments to filter Metrologies to count.
     * @example
     * // Count the number of Metrologies
     * const count = await prisma.metrology.count({
     *   where: {
     *     // ... the filter for the Metrologies we want to count
     *   }
     * })
    **/
    count<T extends MetrologyCountArgs>(
      args?: Subset<T, MetrologyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetrologyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Metrology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetrologyAggregateArgs>(args: Subset<T, MetrologyAggregateArgs>): Prisma.PrismaPromise<GetMetrologyAggregateType<T>>

    /**
     * Group by Metrology.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyGroupByArgs} args - Group by arguments.
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
      T extends MetrologyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetrologyGroupByArgs['orderBy'] }
        : { orderBy?: MetrologyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetrologyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetrologyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Metrology model
   */
  readonly fields: MetrologyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Metrology.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetrologyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Metrology model
   */
  interface MetrologyFieldRefs {
    readonly id: FieldRef<"Metrology", 'String'>
    readonly serialNumber: FieldRef<"Metrology", 'String'>
    readonly certificateType: FieldRef<"Metrology", 'String'>
    readonly issueDate: FieldRef<"Metrology", 'DateTime'>
    readonly expiryDate: FieldRef<"Metrology", 'DateTime'>
    readonly createdAt: FieldRef<"Metrology", 'DateTime'>
    readonly updatedAt: FieldRef<"Metrology", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Metrology findUnique
   */
  export type MetrologyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * Filter, which Metrology to fetch.
     */
    where: MetrologyWhereUniqueInput
  }

  /**
   * Metrology findUniqueOrThrow
   */
  export type MetrologyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * Filter, which Metrology to fetch.
     */
    where: MetrologyWhereUniqueInput
  }

  /**
   * Metrology findFirst
   */
  export type MetrologyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * Filter, which Metrology to fetch.
     */
    where?: MetrologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrologies to fetch.
     */
    orderBy?: MetrologyOrderByWithRelationInput | MetrologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrologies.
     */
    cursor?: MetrologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrologies.
     */
    distinct?: MetrologyScalarFieldEnum | MetrologyScalarFieldEnum[]
  }

  /**
   * Metrology findFirstOrThrow
   */
  export type MetrologyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * Filter, which Metrology to fetch.
     */
    where?: MetrologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrologies to fetch.
     */
    orderBy?: MetrologyOrderByWithRelationInput | MetrologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Metrologies.
     */
    cursor?: MetrologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrologies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Metrologies.
     */
    distinct?: MetrologyScalarFieldEnum | MetrologyScalarFieldEnum[]
  }

  /**
   * Metrology findMany
   */
  export type MetrologyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * Filter, which Metrologies to fetch.
     */
    where?: MetrologyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Metrologies to fetch.
     */
    orderBy?: MetrologyOrderByWithRelationInput | MetrologyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Metrologies.
     */
    cursor?: MetrologyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Metrologies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Metrologies.
     */
    skip?: number
    distinct?: MetrologyScalarFieldEnum | MetrologyScalarFieldEnum[]
  }

  /**
   * Metrology create
   */
  export type MetrologyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * The data needed to create a Metrology.
     */
    data: XOR<MetrologyCreateInput, MetrologyUncheckedCreateInput>
  }

  /**
   * Metrology createMany
   */
  export type MetrologyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Metrologies.
     */
    data: MetrologyCreateManyInput | MetrologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metrology createManyAndReturn
   */
  export type MetrologyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * The data used to create many Metrologies.
     */
    data: MetrologyCreateManyInput | MetrologyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Metrology update
   */
  export type MetrologyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * The data needed to update a Metrology.
     */
    data: XOR<MetrologyUpdateInput, MetrologyUncheckedUpdateInput>
    /**
     * Choose, which Metrology to update.
     */
    where: MetrologyWhereUniqueInput
  }

  /**
   * Metrology updateMany
   */
  export type MetrologyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Metrologies.
     */
    data: XOR<MetrologyUpdateManyMutationInput, MetrologyUncheckedUpdateManyInput>
    /**
     * Filter which Metrologies to update
     */
    where?: MetrologyWhereInput
    /**
     * Limit how many Metrologies to update.
     */
    limit?: number
  }

  /**
   * Metrology updateManyAndReturn
   */
  export type MetrologyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * The data used to update Metrologies.
     */
    data: XOR<MetrologyUpdateManyMutationInput, MetrologyUncheckedUpdateManyInput>
    /**
     * Filter which Metrologies to update
     */
    where?: MetrologyWhereInput
    /**
     * Limit how many Metrologies to update.
     */
    limit?: number
  }

  /**
   * Metrology upsert
   */
  export type MetrologyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * The filter to search for the Metrology to update in case it exists.
     */
    where: MetrologyWhereUniqueInput
    /**
     * In case the Metrology found by the `where` argument doesn't exist, create a new Metrology with this data.
     */
    create: XOR<MetrologyCreateInput, MetrologyUncheckedCreateInput>
    /**
     * In case the Metrology was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetrologyUpdateInput, MetrologyUncheckedUpdateInput>
  }

  /**
   * Metrology delete
   */
  export type MetrologyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
    /**
     * Filter which Metrology to delete.
     */
    where: MetrologyWhereUniqueInput
  }

  /**
   * Metrology deleteMany
   */
  export type MetrologyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Metrologies to delete
     */
    where?: MetrologyWhereInput
    /**
     * Limit how many Metrologies to delete.
     */
    limit?: number
  }

  /**
   * Metrology without action
   */
  export type MetrologyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Metrology
     */
    select?: MetrologySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Metrology
     */
    omit?: MetrologyOmit<ExtArgs> | null
  }


  /**
   * Model MetrologyApproval
   */

  export type AggregateMetrologyApproval = {
    _count: MetrologyApprovalCountAggregateOutputType | null
    _min: MetrologyApprovalMinAggregateOutputType | null
    _max: MetrologyApprovalMaxAggregateOutputType | null
  }

  export type MetrologyApprovalMinAggregateOutputType = {
    id: string | null
    name: string | null
    dataEmitere: Date | null
    dataExpirare: Date | null
    providerId: string | null
    cabinetId: string | null
    gameMixId: string | null
    softwareId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetrologyApprovalMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dataEmitere: Date | null
    dataExpirare: Date | null
    providerId: string | null
    cabinetId: string | null
    gameMixId: string | null
    softwareId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetrologyApprovalCountAggregateOutputType = {
    id: number
    name: number
    dataEmitere: number
    dataExpirare: number
    providerId: number
    cabinetId: number
    gameMixId: number
    softwareId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetrologyApprovalMinAggregateInputType = {
    id?: true
    name?: true
    dataEmitere?: true
    dataExpirare?: true
    providerId?: true
    cabinetId?: true
    gameMixId?: true
    softwareId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetrologyApprovalMaxAggregateInputType = {
    id?: true
    name?: true
    dataEmitere?: true
    dataExpirare?: true
    providerId?: true
    cabinetId?: true
    gameMixId?: true
    softwareId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetrologyApprovalCountAggregateInputType = {
    id?: true
    name?: true
    dataEmitere?: true
    dataExpirare?: true
    providerId?: true
    cabinetId?: true
    gameMixId?: true
    softwareId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetrologyApprovalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetrologyApproval to aggregate.
     */
    where?: MetrologyApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyApprovals to fetch.
     */
    orderBy?: MetrologyApprovalOrderByWithRelationInput | MetrologyApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetrologyApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetrologyApprovals
    **/
    _count?: true | MetrologyApprovalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetrologyApprovalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetrologyApprovalMaxAggregateInputType
  }

  export type GetMetrologyApprovalAggregateType<T extends MetrologyApprovalAggregateArgs> = {
        [P in keyof T & keyof AggregateMetrologyApproval]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetrologyApproval[P]>
      : GetScalarType<T[P], AggregateMetrologyApproval[P]>
  }




  export type MetrologyApprovalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologyApprovalWhereInput
    orderBy?: MetrologyApprovalOrderByWithAggregationInput | MetrologyApprovalOrderByWithAggregationInput[]
    by: MetrologyApprovalScalarFieldEnum[] | MetrologyApprovalScalarFieldEnum
    having?: MetrologyApprovalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetrologyApprovalCountAggregateInputType | true
    _min?: MetrologyApprovalMinAggregateInputType
    _max?: MetrologyApprovalMaxAggregateInputType
  }

  export type MetrologyApprovalGroupByOutputType = {
    id: string
    name: string
    dataEmitere: Date | null
    dataExpirare: Date | null
    providerId: string | null
    cabinetId: string | null
    gameMixId: string | null
    softwareId: string | null
    createdAt: Date
    updatedAt: Date
    _count: MetrologyApprovalCountAggregateOutputType | null
    _min: MetrologyApprovalMinAggregateOutputType | null
    _max: MetrologyApprovalMaxAggregateOutputType | null
  }

  type GetMetrologyApprovalGroupByPayload<T extends MetrologyApprovalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetrologyApprovalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetrologyApprovalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetrologyApprovalGroupByOutputType[P]>
            : GetScalarType<T[P], MetrologyApprovalGroupByOutputType[P]>
        }
      >
    >


  export type MetrologyApprovalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dataEmitere?: boolean
    dataExpirare?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    softwareId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | MetrologyApproval$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologyApproval$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologyApproval$gameMixArgs<ExtArgs>
    software?: boolean | MetrologyApproval$softwareArgs<ExtArgs>
  }, ExtArgs["result"]["metrologyApproval"]>

  export type MetrologyApprovalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dataEmitere?: boolean
    dataExpirare?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    softwareId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | MetrologyApproval$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologyApproval$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologyApproval$gameMixArgs<ExtArgs>
    software?: boolean | MetrologyApproval$softwareArgs<ExtArgs>
  }, ExtArgs["result"]["metrologyApproval"]>

  export type MetrologyApprovalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dataEmitere?: boolean
    dataExpirare?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    softwareId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | MetrologyApproval$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologyApproval$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologyApproval$gameMixArgs<ExtArgs>
    software?: boolean | MetrologyApproval$softwareArgs<ExtArgs>
  }, ExtArgs["result"]["metrologyApproval"]>

  export type MetrologyApprovalSelectScalar = {
    id?: boolean
    name?: boolean
    dataEmitere?: boolean
    dataExpirare?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    softwareId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetrologyApprovalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dataEmitere" | "dataExpirare" | "providerId" | "cabinetId" | "gameMixId" | "softwareId" | "createdAt" | "updatedAt", ExtArgs["result"]["metrologyApproval"]>
  export type MetrologyApprovalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | MetrologyApproval$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologyApproval$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologyApproval$gameMixArgs<ExtArgs>
    software?: boolean | MetrologyApproval$softwareArgs<ExtArgs>
  }
  export type MetrologyApprovalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | MetrologyApproval$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologyApproval$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologyApproval$gameMixArgs<ExtArgs>
    software?: boolean | MetrologyApproval$softwareArgs<ExtArgs>
  }
  export type MetrologyApprovalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | MetrologyApproval$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologyApproval$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologyApproval$gameMixArgs<ExtArgs>
    software?: boolean | MetrologyApproval$softwareArgs<ExtArgs>
  }

  export type $MetrologyApprovalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetrologyApproval"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs> | null
      cabinet: Prisma.$CabinetPayload<ExtArgs> | null
      gameMix: Prisma.$GameMixPayload<ExtArgs> | null
      software: Prisma.$MetrologySoftwarePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dataEmitere: Date | null
      dataExpirare: Date | null
      providerId: string | null
      cabinetId: string | null
      gameMixId: string | null
      softwareId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metrologyApproval"]>
    composites: {}
  }

  type MetrologyApprovalGetPayload<S extends boolean | null | undefined | MetrologyApprovalDefaultArgs> = $Result.GetResult<Prisma.$MetrologyApprovalPayload, S>

  type MetrologyApprovalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetrologyApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetrologyApprovalCountAggregateInputType | true
    }

  export interface MetrologyApprovalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetrologyApproval'], meta: { name: 'MetrologyApproval' } }
    /**
     * Find zero or one MetrologyApproval that matches the filter.
     * @param {MetrologyApprovalFindUniqueArgs} args - Arguments to find a MetrologyApproval
     * @example
     * // Get one MetrologyApproval
     * const metrologyApproval = await prisma.metrologyApproval.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetrologyApprovalFindUniqueArgs>(args: SelectSubset<T, MetrologyApprovalFindUniqueArgs<ExtArgs>>): Prisma__MetrologyApprovalClient<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetrologyApproval that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetrologyApprovalFindUniqueOrThrowArgs} args - Arguments to find a MetrologyApproval
     * @example
     * // Get one MetrologyApproval
     * const metrologyApproval = await prisma.metrologyApproval.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetrologyApprovalFindUniqueOrThrowArgs>(args: SelectSubset<T, MetrologyApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetrologyApprovalClient<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetrologyApproval that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyApprovalFindFirstArgs} args - Arguments to find a MetrologyApproval
     * @example
     * // Get one MetrologyApproval
     * const metrologyApproval = await prisma.metrologyApproval.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetrologyApprovalFindFirstArgs>(args?: SelectSubset<T, MetrologyApprovalFindFirstArgs<ExtArgs>>): Prisma__MetrologyApprovalClient<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetrologyApproval that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyApprovalFindFirstOrThrowArgs} args - Arguments to find a MetrologyApproval
     * @example
     * // Get one MetrologyApproval
     * const metrologyApproval = await prisma.metrologyApproval.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetrologyApprovalFindFirstOrThrowArgs>(args?: SelectSubset<T, MetrologyApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetrologyApprovalClient<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetrologyApprovals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyApprovalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetrologyApprovals
     * const metrologyApprovals = await prisma.metrologyApproval.findMany()
     * 
     * // Get first 10 MetrologyApprovals
     * const metrologyApprovals = await prisma.metrologyApproval.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metrologyApprovalWithIdOnly = await prisma.metrologyApproval.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetrologyApprovalFindManyArgs>(args?: SelectSubset<T, MetrologyApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetrologyApproval.
     * @param {MetrologyApprovalCreateArgs} args - Arguments to create a MetrologyApproval.
     * @example
     * // Create one MetrologyApproval
     * const MetrologyApproval = await prisma.metrologyApproval.create({
     *   data: {
     *     // ... data to create a MetrologyApproval
     *   }
     * })
     * 
     */
    create<T extends MetrologyApprovalCreateArgs>(args: SelectSubset<T, MetrologyApprovalCreateArgs<ExtArgs>>): Prisma__MetrologyApprovalClient<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetrologyApprovals.
     * @param {MetrologyApprovalCreateManyArgs} args - Arguments to create many MetrologyApprovals.
     * @example
     * // Create many MetrologyApprovals
     * const metrologyApproval = await prisma.metrologyApproval.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetrologyApprovalCreateManyArgs>(args?: SelectSubset<T, MetrologyApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetrologyApprovals and returns the data saved in the database.
     * @param {MetrologyApprovalCreateManyAndReturnArgs} args - Arguments to create many MetrologyApprovals.
     * @example
     * // Create many MetrologyApprovals
     * const metrologyApproval = await prisma.metrologyApproval.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetrologyApprovals and only return the `id`
     * const metrologyApprovalWithIdOnly = await prisma.metrologyApproval.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetrologyApprovalCreateManyAndReturnArgs>(args?: SelectSubset<T, MetrologyApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetrologyApproval.
     * @param {MetrologyApprovalDeleteArgs} args - Arguments to delete one MetrologyApproval.
     * @example
     * // Delete one MetrologyApproval
     * const MetrologyApproval = await prisma.metrologyApproval.delete({
     *   where: {
     *     // ... filter to delete one MetrologyApproval
     *   }
     * })
     * 
     */
    delete<T extends MetrologyApprovalDeleteArgs>(args: SelectSubset<T, MetrologyApprovalDeleteArgs<ExtArgs>>): Prisma__MetrologyApprovalClient<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetrologyApproval.
     * @param {MetrologyApprovalUpdateArgs} args - Arguments to update one MetrologyApproval.
     * @example
     * // Update one MetrologyApproval
     * const metrologyApproval = await prisma.metrologyApproval.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetrologyApprovalUpdateArgs>(args: SelectSubset<T, MetrologyApprovalUpdateArgs<ExtArgs>>): Prisma__MetrologyApprovalClient<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetrologyApprovals.
     * @param {MetrologyApprovalDeleteManyArgs} args - Arguments to filter MetrologyApprovals to delete.
     * @example
     * // Delete a few MetrologyApprovals
     * const { count } = await prisma.metrologyApproval.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetrologyApprovalDeleteManyArgs>(args?: SelectSubset<T, MetrologyApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetrologyApprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyApprovalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetrologyApprovals
     * const metrologyApproval = await prisma.metrologyApproval.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetrologyApprovalUpdateManyArgs>(args: SelectSubset<T, MetrologyApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetrologyApprovals and returns the data updated in the database.
     * @param {MetrologyApprovalUpdateManyAndReturnArgs} args - Arguments to update many MetrologyApprovals.
     * @example
     * // Update many MetrologyApprovals
     * const metrologyApproval = await prisma.metrologyApproval.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetrologyApprovals and only return the `id`
     * const metrologyApprovalWithIdOnly = await prisma.metrologyApproval.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetrologyApprovalUpdateManyAndReturnArgs>(args: SelectSubset<T, MetrologyApprovalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetrologyApproval.
     * @param {MetrologyApprovalUpsertArgs} args - Arguments to update or create a MetrologyApproval.
     * @example
     * // Update or create a MetrologyApproval
     * const metrologyApproval = await prisma.metrologyApproval.upsert({
     *   create: {
     *     // ... data to create a MetrologyApproval
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetrologyApproval we want to update
     *   }
     * })
     */
    upsert<T extends MetrologyApprovalUpsertArgs>(args: SelectSubset<T, MetrologyApprovalUpsertArgs<ExtArgs>>): Prisma__MetrologyApprovalClient<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetrologyApprovals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyApprovalCountArgs} args - Arguments to filter MetrologyApprovals to count.
     * @example
     * // Count the number of MetrologyApprovals
     * const count = await prisma.metrologyApproval.count({
     *   where: {
     *     // ... the filter for the MetrologyApprovals we want to count
     *   }
     * })
    **/
    count<T extends MetrologyApprovalCountArgs>(
      args?: Subset<T, MetrologyApprovalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetrologyApprovalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetrologyApproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyApprovalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetrologyApprovalAggregateArgs>(args: Subset<T, MetrologyApprovalAggregateArgs>): Prisma.PrismaPromise<GetMetrologyApprovalAggregateType<T>>

    /**
     * Group by MetrologyApproval.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyApprovalGroupByArgs} args - Group by arguments.
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
      T extends MetrologyApprovalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetrologyApprovalGroupByArgs['orderBy'] }
        : { orderBy?: MetrologyApprovalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetrologyApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetrologyApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetrologyApproval model
   */
  readonly fields: MetrologyApprovalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetrologyApproval.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetrologyApprovalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends MetrologyApproval$providerArgs<ExtArgs> = {}>(args?: Subset<T, MetrologyApproval$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cabinet<T extends MetrologyApproval$cabinetArgs<ExtArgs> = {}>(args?: Subset<T, MetrologyApproval$cabinetArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gameMix<T extends MetrologyApproval$gameMixArgs<ExtArgs> = {}>(args?: Subset<T, MetrologyApproval$gameMixArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    software<T extends MetrologyApproval$softwareArgs<ExtArgs> = {}>(args?: Subset<T, MetrologyApproval$softwareArgs<ExtArgs>>): Prisma__MetrologySoftwareClient<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MetrologyApproval model
   */
  interface MetrologyApprovalFieldRefs {
    readonly id: FieldRef<"MetrologyApproval", 'String'>
    readonly name: FieldRef<"MetrologyApproval", 'String'>
    readonly dataEmitere: FieldRef<"MetrologyApproval", 'DateTime'>
    readonly dataExpirare: FieldRef<"MetrologyApproval", 'DateTime'>
    readonly providerId: FieldRef<"MetrologyApproval", 'String'>
    readonly cabinetId: FieldRef<"MetrologyApproval", 'String'>
    readonly gameMixId: FieldRef<"MetrologyApproval", 'String'>
    readonly softwareId: FieldRef<"MetrologyApproval", 'String'>
    readonly createdAt: FieldRef<"MetrologyApproval", 'DateTime'>
    readonly updatedAt: FieldRef<"MetrologyApproval", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetrologyApproval findUnique
   */
  export type MetrologyApprovalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    /**
     * Filter, which MetrologyApproval to fetch.
     */
    where: MetrologyApprovalWhereUniqueInput
  }

  /**
   * MetrologyApproval findUniqueOrThrow
   */
  export type MetrologyApprovalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    /**
     * Filter, which MetrologyApproval to fetch.
     */
    where: MetrologyApprovalWhereUniqueInput
  }

  /**
   * MetrologyApproval findFirst
   */
  export type MetrologyApprovalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    /**
     * Filter, which MetrologyApproval to fetch.
     */
    where?: MetrologyApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyApprovals to fetch.
     */
    orderBy?: MetrologyApprovalOrderByWithRelationInput | MetrologyApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetrologyApprovals.
     */
    cursor?: MetrologyApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetrologyApprovals.
     */
    distinct?: MetrologyApprovalScalarFieldEnum | MetrologyApprovalScalarFieldEnum[]
  }

  /**
   * MetrologyApproval findFirstOrThrow
   */
  export type MetrologyApprovalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    /**
     * Filter, which MetrologyApproval to fetch.
     */
    where?: MetrologyApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyApprovals to fetch.
     */
    orderBy?: MetrologyApprovalOrderByWithRelationInput | MetrologyApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetrologyApprovals.
     */
    cursor?: MetrologyApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyApprovals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetrologyApprovals.
     */
    distinct?: MetrologyApprovalScalarFieldEnum | MetrologyApprovalScalarFieldEnum[]
  }

  /**
   * MetrologyApproval findMany
   */
  export type MetrologyApprovalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    /**
     * Filter, which MetrologyApprovals to fetch.
     */
    where?: MetrologyApprovalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyApprovals to fetch.
     */
    orderBy?: MetrologyApprovalOrderByWithRelationInput | MetrologyApprovalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetrologyApprovals.
     */
    cursor?: MetrologyApprovalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyApprovals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyApprovals.
     */
    skip?: number
    distinct?: MetrologyApprovalScalarFieldEnum | MetrologyApprovalScalarFieldEnum[]
  }

  /**
   * MetrologyApproval create
   */
  export type MetrologyApprovalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    /**
     * The data needed to create a MetrologyApproval.
     */
    data: XOR<MetrologyApprovalCreateInput, MetrologyApprovalUncheckedCreateInput>
  }

  /**
   * MetrologyApproval createMany
   */
  export type MetrologyApprovalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetrologyApprovals.
     */
    data: MetrologyApprovalCreateManyInput | MetrologyApprovalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetrologyApproval createManyAndReturn
   */
  export type MetrologyApprovalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * The data used to create many MetrologyApprovals.
     */
    data: MetrologyApprovalCreateManyInput | MetrologyApprovalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetrologyApproval update
   */
  export type MetrologyApprovalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    /**
     * The data needed to update a MetrologyApproval.
     */
    data: XOR<MetrologyApprovalUpdateInput, MetrologyApprovalUncheckedUpdateInput>
    /**
     * Choose, which MetrologyApproval to update.
     */
    where: MetrologyApprovalWhereUniqueInput
  }

  /**
   * MetrologyApproval updateMany
   */
  export type MetrologyApprovalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetrologyApprovals.
     */
    data: XOR<MetrologyApprovalUpdateManyMutationInput, MetrologyApprovalUncheckedUpdateManyInput>
    /**
     * Filter which MetrologyApprovals to update
     */
    where?: MetrologyApprovalWhereInput
    /**
     * Limit how many MetrologyApprovals to update.
     */
    limit?: number
  }

  /**
   * MetrologyApproval updateManyAndReturn
   */
  export type MetrologyApprovalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * The data used to update MetrologyApprovals.
     */
    data: XOR<MetrologyApprovalUpdateManyMutationInput, MetrologyApprovalUncheckedUpdateManyInput>
    /**
     * Filter which MetrologyApprovals to update
     */
    where?: MetrologyApprovalWhereInput
    /**
     * Limit how many MetrologyApprovals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetrologyApproval upsert
   */
  export type MetrologyApprovalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    /**
     * The filter to search for the MetrologyApproval to update in case it exists.
     */
    where: MetrologyApprovalWhereUniqueInput
    /**
     * In case the MetrologyApproval found by the `where` argument doesn't exist, create a new MetrologyApproval with this data.
     */
    create: XOR<MetrologyApprovalCreateInput, MetrologyApprovalUncheckedCreateInput>
    /**
     * In case the MetrologyApproval was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetrologyApprovalUpdateInput, MetrologyApprovalUncheckedUpdateInput>
  }

  /**
   * MetrologyApproval delete
   */
  export type MetrologyApprovalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    /**
     * Filter which MetrologyApproval to delete.
     */
    where: MetrologyApprovalWhereUniqueInput
  }

  /**
   * MetrologyApproval deleteMany
   */
  export type MetrologyApprovalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetrologyApprovals to delete
     */
    where?: MetrologyApprovalWhereInput
    /**
     * Limit how many MetrologyApprovals to delete.
     */
    limit?: number
  }

  /**
   * MetrologyApproval.provider
   */
  export type MetrologyApproval$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * MetrologyApproval.cabinet
   */
  export type MetrologyApproval$cabinetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    where?: CabinetWhereInput
  }

  /**
   * MetrologyApproval.gameMix
   */
  export type MetrologyApproval$gameMixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    where?: GameMixWhereInput
  }

  /**
   * MetrologyApproval.software
   */
  export type MetrologyApproval$softwareArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    where?: MetrologySoftwareWhereInput
  }

  /**
   * MetrologyApproval without action
   */
  export type MetrologyApprovalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
  }


  /**
   * Model MetrologyCommission
   */

  export type AggregateMetrologyCommission = {
    _count: MetrologyCommissionCountAggregateOutputType | null
    _min: MetrologyCommissionMinAggregateOutputType | null
    _max: MetrologyCommissionMaxAggregateOutputType | null
  }

  export type MetrologyCommissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    dataEmitere: Date | null
    dataExpirare: Date | null
    serialNumbers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetrologyCommissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    dataEmitere: Date | null
    dataExpirare: Date | null
    serialNumbers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetrologyCommissionCountAggregateOutputType = {
    id: number
    name: number
    dataEmitere: number
    dataExpirare: number
    serialNumbers: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetrologyCommissionMinAggregateInputType = {
    id?: true
    name?: true
    dataEmitere?: true
    dataExpirare?: true
    serialNumbers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetrologyCommissionMaxAggregateInputType = {
    id?: true
    name?: true
    dataEmitere?: true
    dataExpirare?: true
    serialNumbers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetrologyCommissionCountAggregateInputType = {
    id?: true
    name?: true
    dataEmitere?: true
    dataExpirare?: true
    serialNumbers?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetrologyCommissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetrologyCommission to aggregate.
     */
    where?: MetrologyCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyCommissions to fetch.
     */
    orderBy?: MetrologyCommissionOrderByWithRelationInput | MetrologyCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetrologyCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyCommissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetrologyCommissions
    **/
    _count?: true | MetrologyCommissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetrologyCommissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetrologyCommissionMaxAggregateInputType
  }

  export type GetMetrologyCommissionAggregateType<T extends MetrologyCommissionAggregateArgs> = {
        [P in keyof T & keyof AggregateMetrologyCommission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetrologyCommission[P]>
      : GetScalarType<T[P], AggregateMetrologyCommission[P]>
  }




  export type MetrologyCommissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologyCommissionWhereInput
    orderBy?: MetrologyCommissionOrderByWithAggregationInput | MetrologyCommissionOrderByWithAggregationInput[]
    by: MetrologyCommissionScalarFieldEnum[] | MetrologyCommissionScalarFieldEnum
    having?: MetrologyCommissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetrologyCommissionCountAggregateInputType | true
    _min?: MetrologyCommissionMinAggregateInputType
    _max?: MetrologyCommissionMaxAggregateInputType
  }

  export type MetrologyCommissionGroupByOutputType = {
    id: string
    name: string
    dataEmitere: Date | null
    dataExpirare: Date | null
    serialNumbers: string | null
    createdAt: Date
    updatedAt: Date
    _count: MetrologyCommissionCountAggregateOutputType | null
    _min: MetrologyCommissionMinAggregateOutputType | null
    _max: MetrologyCommissionMaxAggregateOutputType | null
  }

  type GetMetrologyCommissionGroupByPayload<T extends MetrologyCommissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetrologyCommissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetrologyCommissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetrologyCommissionGroupByOutputType[P]>
            : GetScalarType<T[P], MetrologyCommissionGroupByOutputType[P]>
        }
      >
    >


  export type MetrologyCommissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dataEmitere?: boolean
    dataExpirare?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metrologyCommission"]>

  export type MetrologyCommissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dataEmitere?: boolean
    dataExpirare?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metrologyCommission"]>

  export type MetrologyCommissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    dataEmitere?: boolean
    dataExpirare?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metrologyCommission"]>

  export type MetrologyCommissionSelectScalar = {
    id?: boolean
    name?: boolean
    dataEmitere?: boolean
    dataExpirare?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetrologyCommissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "dataEmitere" | "dataExpirare" | "serialNumbers" | "createdAt" | "updatedAt", ExtArgs["result"]["metrologyCommission"]>

  export type $MetrologyCommissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetrologyCommission"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      dataEmitere: Date | null
      dataExpirare: Date | null
      serialNumbers: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metrologyCommission"]>
    composites: {}
  }

  type MetrologyCommissionGetPayload<S extends boolean | null | undefined | MetrologyCommissionDefaultArgs> = $Result.GetResult<Prisma.$MetrologyCommissionPayload, S>

  type MetrologyCommissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetrologyCommissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetrologyCommissionCountAggregateInputType | true
    }

  export interface MetrologyCommissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetrologyCommission'], meta: { name: 'MetrologyCommission' } }
    /**
     * Find zero or one MetrologyCommission that matches the filter.
     * @param {MetrologyCommissionFindUniqueArgs} args - Arguments to find a MetrologyCommission
     * @example
     * // Get one MetrologyCommission
     * const metrologyCommission = await prisma.metrologyCommission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetrologyCommissionFindUniqueArgs>(args: SelectSubset<T, MetrologyCommissionFindUniqueArgs<ExtArgs>>): Prisma__MetrologyCommissionClient<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetrologyCommission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetrologyCommissionFindUniqueOrThrowArgs} args - Arguments to find a MetrologyCommission
     * @example
     * // Get one MetrologyCommission
     * const metrologyCommission = await prisma.metrologyCommission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetrologyCommissionFindUniqueOrThrowArgs>(args: SelectSubset<T, MetrologyCommissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetrologyCommissionClient<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetrologyCommission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyCommissionFindFirstArgs} args - Arguments to find a MetrologyCommission
     * @example
     * // Get one MetrologyCommission
     * const metrologyCommission = await prisma.metrologyCommission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetrologyCommissionFindFirstArgs>(args?: SelectSubset<T, MetrologyCommissionFindFirstArgs<ExtArgs>>): Prisma__MetrologyCommissionClient<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetrologyCommission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyCommissionFindFirstOrThrowArgs} args - Arguments to find a MetrologyCommission
     * @example
     * // Get one MetrologyCommission
     * const metrologyCommission = await prisma.metrologyCommission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetrologyCommissionFindFirstOrThrowArgs>(args?: SelectSubset<T, MetrologyCommissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetrologyCommissionClient<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetrologyCommissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyCommissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetrologyCommissions
     * const metrologyCommissions = await prisma.metrologyCommission.findMany()
     * 
     * // Get first 10 MetrologyCommissions
     * const metrologyCommissions = await prisma.metrologyCommission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metrologyCommissionWithIdOnly = await prisma.metrologyCommission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetrologyCommissionFindManyArgs>(args?: SelectSubset<T, MetrologyCommissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetrologyCommission.
     * @param {MetrologyCommissionCreateArgs} args - Arguments to create a MetrologyCommission.
     * @example
     * // Create one MetrologyCommission
     * const MetrologyCommission = await prisma.metrologyCommission.create({
     *   data: {
     *     // ... data to create a MetrologyCommission
     *   }
     * })
     * 
     */
    create<T extends MetrologyCommissionCreateArgs>(args: SelectSubset<T, MetrologyCommissionCreateArgs<ExtArgs>>): Prisma__MetrologyCommissionClient<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetrologyCommissions.
     * @param {MetrologyCommissionCreateManyArgs} args - Arguments to create many MetrologyCommissions.
     * @example
     * // Create many MetrologyCommissions
     * const metrologyCommission = await prisma.metrologyCommission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetrologyCommissionCreateManyArgs>(args?: SelectSubset<T, MetrologyCommissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetrologyCommissions and returns the data saved in the database.
     * @param {MetrologyCommissionCreateManyAndReturnArgs} args - Arguments to create many MetrologyCommissions.
     * @example
     * // Create many MetrologyCommissions
     * const metrologyCommission = await prisma.metrologyCommission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetrologyCommissions and only return the `id`
     * const metrologyCommissionWithIdOnly = await prisma.metrologyCommission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetrologyCommissionCreateManyAndReturnArgs>(args?: SelectSubset<T, MetrologyCommissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetrologyCommission.
     * @param {MetrologyCommissionDeleteArgs} args - Arguments to delete one MetrologyCommission.
     * @example
     * // Delete one MetrologyCommission
     * const MetrologyCommission = await prisma.metrologyCommission.delete({
     *   where: {
     *     // ... filter to delete one MetrologyCommission
     *   }
     * })
     * 
     */
    delete<T extends MetrologyCommissionDeleteArgs>(args: SelectSubset<T, MetrologyCommissionDeleteArgs<ExtArgs>>): Prisma__MetrologyCommissionClient<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetrologyCommission.
     * @param {MetrologyCommissionUpdateArgs} args - Arguments to update one MetrologyCommission.
     * @example
     * // Update one MetrologyCommission
     * const metrologyCommission = await prisma.metrologyCommission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetrologyCommissionUpdateArgs>(args: SelectSubset<T, MetrologyCommissionUpdateArgs<ExtArgs>>): Prisma__MetrologyCommissionClient<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetrologyCommissions.
     * @param {MetrologyCommissionDeleteManyArgs} args - Arguments to filter MetrologyCommissions to delete.
     * @example
     * // Delete a few MetrologyCommissions
     * const { count } = await prisma.metrologyCommission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetrologyCommissionDeleteManyArgs>(args?: SelectSubset<T, MetrologyCommissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetrologyCommissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyCommissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetrologyCommissions
     * const metrologyCommission = await prisma.metrologyCommission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetrologyCommissionUpdateManyArgs>(args: SelectSubset<T, MetrologyCommissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetrologyCommissions and returns the data updated in the database.
     * @param {MetrologyCommissionUpdateManyAndReturnArgs} args - Arguments to update many MetrologyCommissions.
     * @example
     * // Update many MetrologyCommissions
     * const metrologyCommission = await prisma.metrologyCommission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetrologyCommissions and only return the `id`
     * const metrologyCommissionWithIdOnly = await prisma.metrologyCommission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetrologyCommissionUpdateManyAndReturnArgs>(args: SelectSubset<T, MetrologyCommissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetrologyCommission.
     * @param {MetrologyCommissionUpsertArgs} args - Arguments to update or create a MetrologyCommission.
     * @example
     * // Update or create a MetrologyCommission
     * const metrologyCommission = await prisma.metrologyCommission.upsert({
     *   create: {
     *     // ... data to create a MetrologyCommission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetrologyCommission we want to update
     *   }
     * })
     */
    upsert<T extends MetrologyCommissionUpsertArgs>(args: SelectSubset<T, MetrologyCommissionUpsertArgs<ExtArgs>>): Prisma__MetrologyCommissionClient<$Result.GetResult<Prisma.$MetrologyCommissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetrologyCommissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyCommissionCountArgs} args - Arguments to filter MetrologyCommissions to count.
     * @example
     * // Count the number of MetrologyCommissions
     * const count = await prisma.metrologyCommission.count({
     *   where: {
     *     // ... the filter for the MetrologyCommissions we want to count
     *   }
     * })
    **/
    count<T extends MetrologyCommissionCountArgs>(
      args?: Subset<T, MetrologyCommissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetrologyCommissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetrologyCommission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyCommissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetrologyCommissionAggregateArgs>(args: Subset<T, MetrologyCommissionAggregateArgs>): Prisma.PrismaPromise<GetMetrologyCommissionAggregateType<T>>

    /**
     * Group by MetrologyCommission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyCommissionGroupByArgs} args - Group by arguments.
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
      T extends MetrologyCommissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetrologyCommissionGroupByArgs['orderBy'] }
        : { orderBy?: MetrologyCommissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetrologyCommissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetrologyCommissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetrologyCommission model
   */
  readonly fields: MetrologyCommissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetrologyCommission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetrologyCommissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MetrologyCommission model
   */
  interface MetrologyCommissionFieldRefs {
    readonly id: FieldRef<"MetrologyCommission", 'String'>
    readonly name: FieldRef<"MetrologyCommission", 'String'>
    readonly dataEmitere: FieldRef<"MetrologyCommission", 'DateTime'>
    readonly dataExpirare: FieldRef<"MetrologyCommission", 'DateTime'>
    readonly serialNumbers: FieldRef<"MetrologyCommission", 'String'>
    readonly createdAt: FieldRef<"MetrologyCommission", 'DateTime'>
    readonly updatedAt: FieldRef<"MetrologyCommission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetrologyCommission findUnique
   */
  export type MetrologyCommissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * Filter, which MetrologyCommission to fetch.
     */
    where: MetrologyCommissionWhereUniqueInput
  }

  /**
   * MetrologyCommission findUniqueOrThrow
   */
  export type MetrologyCommissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * Filter, which MetrologyCommission to fetch.
     */
    where: MetrologyCommissionWhereUniqueInput
  }

  /**
   * MetrologyCommission findFirst
   */
  export type MetrologyCommissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * Filter, which MetrologyCommission to fetch.
     */
    where?: MetrologyCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyCommissions to fetch.
     */
    orderBy?: MetrologyCommissionOrderByWithRelationInput | MetrologyCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetrologyCommissions.
     */
    cursor?: MetrologyCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyCommissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetrologyCommissions.
     */
    distinct?: MetrologyCommissionScalarFieldEnum | MetrologyCommissionScalarFieldEnum[]
  }

  /**
   * MetrologyCommission findFirstOrThrow
   */
  export type MetrologyCommissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * Filter, which MetrologyCommission to fetch.
     */
    where?: MetrologyCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyCommissions to fetch.
     */
    orderBy?: MetrologyCommissionOrderByWithRelationInput | MetrologyCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetrologyCommissions.
     */
    cursor?: MetrologyCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyCommissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetrologyCommissions.
     */
    distinct?: MetrologyCommissionScalarFieldEnum | MetrologyCommissionScalarFieldEnum[]
  }

  /**
   * MetrologyCommission findMany
   */
  export type MetrologyCommissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * Filter, which MetrologyCommissions to fetch.
     */
    where?: MetrologyCommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyCommissions to fetch.
     */
    orderBy?: MetrologyCommissionOrderByWithRelationInput | MetrologyCommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetrologyCommissions.
     */
    cursor?: MetrologyCommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyCommissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyCommissions.
     */
    skip?: number
    distinct?: MetrologyCommissionScalarFieldEnum | MetrologyCommissionScalarFieldEnum[]
  }

  /**
   * MetrologyCommission create
   */
  export type MetrologyCommissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * The data needed to create a MetrologyCommission.
     */
    data: XOR<MetrologyCommissionCreateInput, MetrologyCommissionUncheckedCreateInput>
  }

  /**
   * MetrologyCommission createMany
   */
  export type MetrologyCommissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetrologyCommissions.
     */
    data: MetrologyCommissionCreateManyInput | MetrologyCommissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetrologyCommission createManyAndReturn
   */
  export type MetrologyCommissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * The data used to create many MetrologyCommissions.
     */
    data: MetrologyCommissionCreateManyInput | MetrologyCommissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetrologyCommission update
   */
  export type MetrologyCommissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * The data needed to update a MetrologyCommission.
     */
    data: XOR<MetrologyCommissionUpdateInput, MetrologyCommissionUncheckedUpdateInput>
    /**
     * Choose, which MetrologyCommission to update.
     */
    where: MetrologyCommissionWhereUniqueInput
  }

  /**
   * MetrologyCommission updateMany
   */
  export type MetrologyCommissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetrologyCommissions.
     */
    data: XOR<MetrologyCommissionUpdateManyMutationInput, MetrologyCommissionUncheckedUpdateManyInput>
    /**
     * Filter which MetrologyCommissions to update
     */
    where?: MetrologyCommissionWhereInput
    /**
     * Limit how many MetrologyCommissions to update.
     */
    limit?: number
  }

  /**
   * MetrologyCommission updateManyAndReturn
   */
  export type MetrologyCommissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * The data used to update MetrologyCommissions.
     */
    data: XOR<MetrologyCommissionUpdateManyMutationInput, MetrologyCommissionUncheckedUpdateManyInput>
    /**
     * Filter which MetrologyCommissions to update
     */
    where?: MetrologyCommissionWhereInput
    /**
     * Limit how many MetrologyCommissions to update.
     */
    limit?: number
  }

  /**
   * MetrologyCommission upsert
   */
  export type MetrologyCommissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * The filter to search for the MetrologyCommission to update in case it exists.
     */
    where: MetrologyCommissionWhereUniqueInput
    /**
     * In case the MetrologyCommission found by the `where` argument doesn't exist, create a new MetrologyCommission with this data.
     */
    create: XOR<MetrologyCommissionCreateInput, MetrologyCommissionUncheckedCreateInput>
    /**
     * In case the MetrologyCommission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetrologyCommissionUpdateInput, MetrologyCommissionUncheckedUpdateInput>
  }

  /**
   * MetrologyCommission delete
   */
  export type MetrologyCommissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
    /**
     * Filter which MetrologyCommission to delete.
     */
    where: MetrologyCommissionWhereUniqueInput
  }

  /**
   * MetrologyCommission deleteMany
   */
  export type MetrologyCommissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetrologyCommissions to delete
     */
    where?: MetrologyCommissionWhereInput
    /**
     * Limit how many MetrologyCommissions to delete.
     */
    limit?: number
  }

  /**
   * MetrologyCommission without action
   */
  export type MetrologyCommissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyCommission
     */
    select?: MetrologyCommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyCommission
     */
    omit?: MetrologyCommissionOmit<ExtArgs> | null
  }


  /**
   * Model MetrologyAuthority
   */

  export type AggregateMetrologyAuthority = {
    _count: MetrologyAuthorityCountAggregateOutputType | null
    _min: MetrologyAuthorityMinAggregateOutputType | null
    _max: MetrologyAuthorityMaxAggregateOutputType | null
  }

  export type MetrologyAuthorityMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetrologyAuthorityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetrologyAuthorityCountAggregateOutputType = {
    id: number
    name: number
    address: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetrologyAuthorityMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetrologyAuthorityMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetrologyAuthorityCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetrologyAuthorityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetrologyAuthority to aggregate.
     */
    where?: MetrologyAuthorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyAuthorities to fetch.
     */
    orderBy?: MetrologyAuthorityOrderByWithRelationInput | MetrologyAuthorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetrologyAuthorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyAuthorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyAuthorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetrologyAuthorities
    **/
    _count?: true | MetrologyAuthorityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetrologyAuthorityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetrologyAuthorityMaxAggregateInputType
  }

  export type GetMetrologyAuthorityAggregateType<T extends MetrologyAuthorityAggregateArgs> = {
        [P in keyof T & keyof AggregateMetrologyAuthority]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetrologyAuthority[P]>
      : GetScalarType<T[P], AggregateMetrologyAuthority[P]>
  }




  export type MetrologyAuthorityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologyAuthorityWhereInput
    orderBy?: MetrologyAuthorityOrderByWithAggregationInput | MetrologyAuthorityOrderByWithAggregationInput[]
    by: MetrologyAuthorityScalarFieldEnum[] | MetrologyAuthorityScalarFieldEnum
    having?: MetrologyAuthorityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetrologyAuthorityCountAggregateInputType | true
    _min?: MetrologyAuthorityMinAggregateInputType
    _max?: MetrologyAuthorityMaxAggregateInputType
  }

  export type MetrologyAuthorityGroupByOutputType = {
    id: string
    name: string
    address: string | null
    createdAt: Date
    updatedAt: Date
    _count: MetrologyAuthorityCountAggregateOutputType | null
    _min: MetrologyAuthorityMinAggregateOutputType | null
    _max: MetrologyAuthorityMaxAggregateOutputType | null
  }

  type GetMetrologyAuthorityGroupByPayload<T extends MetrologyAuthorityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetrologyAuthorityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetrologyAuthorityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetrologyAuthorityGroupByOutputType[P]>
            : GetScalarType<T[P], MetrologyAuthorityGroupByOutputType[P]>
        }
      >
    >


  export type MetrologyAuthoritySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metrologyAuthority"]>

  export type MetrologyAuthoritySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metrologyAuthority"]>

  export type MetrologyAuthoritySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["metrologyAuthority"]>

  export type MetrologyAuthoritySelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetrologyAuthorityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "createdAt" | "updatedAt", ExtArgs["result"]["metrologyAuthority"]>

  export type $MetrologyAuthorityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetrologyAuthority"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metrologyAuthority"]>
    composites: {}
  }

  type MetrologyAuthorityGetPayload<S extends boolean | null | undefined | MetrologyAuthorityDefaultArgs> = $Result.GetResult<Prisma.$MetrologyAuthorityPayload, S>

  type MetrologyAuthorityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetrologyAuthorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetrologyAuthorityCountAggregateInputType | true
    }

  export interface MetrologyAuthorityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetrologyAuthority'], meta: { name: 'MetrologyAuthority' } }
    /**
     * Find zero or one MetrologyAuthority that matches the filter.
     * @param {MetrologyAuthorityFindUniqueArgs} args - Arguments to find a MetrologyAuthority
     * @example
     * // Get one MetrologyAuthority
     * const metrologyAuthority = await prisma.metrologyAuthority.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetrologyAuthorityFindUniqueArgs>(args: SelectSubset<T, MetrologyAuthorityFindUniqueArgs<ExtArgs>>): Prisma__MetrologyAuthorityClient<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetrologyAuthority that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetrologyAuthorityFindUniqueOrThrowArgs} args - Arguments to find a MetrologyAuthority
     * @example
     * // Get one MetrologyAuthority
     * const metrologyAuthority = await prisma.metrologyAuthority.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetrologyAuthorityFindUniqueOrThrowArgs>(args: SelectSubset<T, MetrologyAuthorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetrologyAuthorityClient<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetrologyAuthority that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyAuthorityFindFirstArgs} args - Arguments to find a MetrologyAuthority
     * @example
     * // Get one MetrologyAuthority
     * const metrologyAuthority = await prisma.metrologyAuthority.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetrologyAuthorityFindFirstArgs>(args?: SelectSubset<T, MetrologyAuthorityFindFirstArgs<ExtArgs>>): Prisma__MetrologyAuthorityClient<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetrologyAuthority that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyAuthorityFindFirstOrThrowArgs} args - Arguments to find a MetrologyAuthority
     * @example
     * // Get one MetrologyAuthority
     * const metrologyAuthority = await prisma.metrologyAuthority.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetrologyAuthorityFindFirstOrThrowArgs>(args?: SelectSubset<T, MetrologyAuthorityFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetrologyAuthorityClient<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetrologyAuthorities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyAuthorityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetrologyAuthorities
     * const metrologyAuthorities = await prisma.metrologyAuthority.findMany()
     * 
     * // Get first 10 MetrologyAuthorities
     * const metrologyAuthorities = await prisma.metrologyAuthority.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metrologyAuthorityWithIdOnly = await prisma.metrologyAuthority.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetrologyAuthorityFindManyArgs>(args?: SelectSubset<T, MetrologyAuthorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetrologyAuthority.
     * @param {MetrologyAuthorityCreateArgs} args - Arguments to create a MetrologyAuthority.
     * @example
     * // Create one MetrologyAuthority
     * const MetrologyAuthority = await prisma.metrologyAuthority.create({
     *   data: {
     *     // ... data to create a MetrologyAuthority
     *   }
     * })
     * 
     */
    create<T extends MetrologyAuthorityCreateArgs>(args: SelectSubset<T, MetrologyAuthorityCreateArgs<ExtArgs>>): Prisma__MetrologyAuthorityClient<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetrologyAuthorities.
     * @param {MetrologyAuthorityCreateManyArgs} args - Arguments to create many MetrologyAuthorities.
     * @example
     * // Create many MetrologyAuthorities
     * const metrologyAuthority = await prisma.metrologyAuthority.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetrologyAuthorityCreateManyArgs>(args?: SelectSubset<T, MetrologyAuthorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetrologyAuthorities and returns the data saved in the database.
     * @param {MetrologyAuthorityCreateManyAndReturnArgs} args - Arguments to create many MetrologyAuthorities.
     * @example
     * // Create many MetrologyAuthorities
     * const metrologyAuthority = await prisma.metrologyAuthority.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetrologyAuthorities and only return the `id`
     * const metrologyAuthorityWithIdOnly = await prisma.metrologyAuthority.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetrologyAuthorityCreateManyAndReturnArgs>(args?: SelectSubset<T, MetrologyAuthorityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetrologyAuthority.
     * @param {MetrologyAuthorityDeleteArgs} args - Arguments to delete one MetrologyAuthority.
     * @example
     * // Delete one MetrologyAuthority
     * const MetrologyAuthority = await prisma.metrologyAuthority.delete({
     *   where: {
     *     // ... filter to delete one MetrologyAuthority
     *   }
     * })
     * 
     */
    delete<T extends MetrologyAuthorityDeleteArgs>(args: SelectSubset<T, MetrologyAuthorityDeleteArgs<ExtArgs>>): Prisma__MetrologyAuthorityClient<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetrologyAuthority.
     * @param {MetrologyAuthorityUpdateArgs} args - Arguments to update one MetrologyAuthority.
     * @example
     * // Update one MetrologyAuthority
     * const metrologyAuthority = await prisma.metrologyAuthority.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetrologyAuthorityUpdateArgs>(args: SelectSubset<T, MetrologyAuthorityUpdateArgs<ExtArgs>>): Prisma__MetrologyAuthorityClient<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetrologyAuthorities.
     * @param {MetrologyAuthorityDeleteManyArgs} args - Arguments to filter MetrologyAuthorities to delete.
     * @example
     * // Delete a few MetrologyAuthorities
     * const { count } = await prisma.metrologyAuthority.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetrologyAuthorityDeleteManyArgs>(args?: SelectSubset<T, MetrologyAuthorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetrologyAuthorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyAuthorityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetrologyAuthorities
     * const metrologyAuthority = await prisma.metrologyAuthority.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetrologyAuthorityUpdateManyArgs>(args: SelectSubset<T, MetrologyAuthorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetrologyAuthorities and returns the data updated in the database.
     * @param {MetrologyAuthorityUpdateManyAndReturnArgs} args - Arguments to update many MetrologyAuthorities.
     * @example
     * // Update many MetrologyAuthorities
     * const metrologyAuthority = await prisma.metrologyAuthority.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetrologyAuthorities and only return the `id`
     * const metrologyAuthorityWithIdOnly = await prisma.metrologyAuthority.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetrologyAuthorityUpdateManyAndReturnArgs>(args: SelectSubset<T, MetrologyAuthorityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetrologyAuthority.
     * @param {MetrologyAuthorityUpsertArgs} args - Arguments to update or create a MetrologyAuthority.
     * @example
     * // Update or create a MetrologyAuthority
     * const metrologyAuthority = await prisma.metrologyAuthority.upsert({
     *   create: {
     *     // ... data to create a MetrologyAuthority
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetrologyAuthority we want to update
     *   }
     * })
     */
    upsert<T extends MetrologyAuthorityUpsertArgs>(args: SelectSubset<T, MetrologyAuthorityUpsertArgs<ExtArgs>>): Prisma__MetrologyAuthorityClient<$Result.GetResult<Prisma.$MetrologyAuthorityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetrologyAuthorities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyAuthorityCountArgs} args - Arguments to filter MetrologyAuthorities to count.
     * @example
     * // Count the number of MetrologyAuthorities
     * const count = await prisma.metrologyAuthority.count({
     *   where: {
     *     // ... the filter for the MetrologyAuthorities we want to count
     *   }
     * })
    **/
    count<T extends MetrologyAuthorityCountArgs>(
      args?: Subset<T, MetrologyAuthorityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetrologyAuthorityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetrologyAuthority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyAuthorityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetrologyAuthorityAggregateArgs>(args: Subset<T, MetrologyAuthorityAggregateArgs>): Prisma.PrismaPromise<GetMetrologyAuthorityAggregateType<T>>

    /**
     * Group by MetrologyAuthority.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologyAuthorityGroupByArgs} args - Group by arguments.
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
      T extends MetrologyAuthorityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetrologyAuthorityGroupByArgs['orderBy'] }
        : { orderBy?: MetrologyAuthorityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetrologyAuthorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetrologyAuthorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetrologyAuthority model
   */
  readonly fields: MetrologyAuthorityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetrologyAuthority.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetrologyAuthorityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MetrologyAuthority model
   */
  interface MetrologyAuthorityFieldRefs {
    readonly id: FieldRef<"MetrologyAuthority", 'String'>
    readonly name: FieldRef<"MetrologyAuthority", 'String'>
    readonly address: FieldRef<"MetrologyAuthority", 'String'>
    readonly createdAt: FieldRef<"MetrologyAuthority", 'DateTime'>
    readonly updatedAt: FieldRef<"MetrologyAuthority", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetrologyAuthority findUnique
   */
  export type MetrologyAuthorityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * Filter, which MetrologyAuthority to fetch.
     */
    where: MetrologyAuthorityWhereUniqueInput
  }

  /**
   * MetrologyAuthority findUniqueOrThrow
   */
  export type MetrologyAuthorityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * Filter, which MetrologyAuthority to fetch.
     */
    where: MetrologyAuthorityWhereUniqueInput
  }

  /**
   * MetrologyAuthority findFirst
   */
  export type MetrologyAuthorityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * Filter, which MetrologyAuthority to fetch.
     */
    where?: MetrologyAuthorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyAuthorities to fetch.
     */
    orderBy?: MetrologyAuthorityOrderByWithRelationInput | MetrologyAuthorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetrologyAuthorities.
     */
    cursor?: MetrologyAuthorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyAuthorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyAuthorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetrologyAuthorities.
     */
    distinct?: MetrologyAuthorityScalarFieldEnum | MetrologyAuthorityScalarFieldEnum[]
  }

  /**
   * MetrologyAuthority findFirstOrThrow
   */
  export type MetrologyAuthorityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * Filter, which MetrologyAuthority to fetch.
     */
    where?: MetrologyAuthorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyAuthorities to fetch.
     */
    orderBy?: MetrologyAuthorityOrderByWithRelationInput | MetrologyAuthorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetrologyAuthorities.
     */
    cursor?: MetrologyAuthorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyAuthorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyAuthorities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetrologyAuthorities.
     */
    distinct?: MetrologyAuthorityScalarFieldEnum | MetrologyAuthorityScalarFieldEnum[]
  }

  /**
   * MetrologyAuthority findMany
   */
  export type MetrologyAuthorityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * Filter, which MetrologyAuthorities to fetch.
     */
    where?: MetrologyAuthorityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologyAuthorities to fetch.
     */
    orderBy?: MetrologyAuthorityOrderByWithRelationInput | MetrologyAuthorityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetrologyAuthorities.
     */
    cursor?: MetrologyAuthorityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologyAuthorities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologyAuthorities.
     */
    skip?: number
    distinct?: MetrologyAuthorityScalarFieldEnum | MetrologyAuthorityScalarFieldEnum[]
  }

  /**
   * MetrologyAuthority create
   */
  export type MetrologyAuthorityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * The data needed to create a MetrologyAuthority.
     */
    data: XOR<MetrologyAuthorityCreateInput, MetrologyAuthorityUncheckedCreateInput>
  }

  /**
   * MetrologyAuthority createMany
   */
  export type MetrologyAuthorityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetrologyAuthorities.
     */
    data: MetrologyAuthorityCreateManyInput | MetrologyAuthorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetrologyAuthority createManyAndReturn
   */
  export type MetrologyAuthorityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * The data used to create many MetrologyAuthorities.
     */
    data: MetrologyAuthorityCreateManyInput | MetrologyAuthorityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetrologyAuthority update
   */
  export type MetrologyAuthorityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * The data needed to update a MetrologyAuthority.
     */
    data: XOR<MetrologyAuthorityUpdateInput, MetrologyAuthorityUncheckedUpdateInput>
    /**
     * Choose, which MetrologyAuthority to update.
     */
    where: MetrologyAuthorityWhereUniqueInput
  }

  /**
   * MetrologyAuthority updateMany
   */
  export type MetrologyAuthorityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetrologyAuthorities.
     */
    data: XOR<MetrologyAuthorityUpdateManyMutationInput, MetrologyAuthorityUncheckedUpdateManyInput>
    /**
     * Filter which MetrologyAuthorities to update
     */
    where?: MetrologyAuthorityWhereInput
    /**
     * Limit how many MetrologyAuthorities to update.
     */
    limit?: number
  }

  /**
   * MetrologyAuthority updateManyAndReturn
   */
  export type MetrologyAuthorityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * The data used to update MetrologyAuthorities.
     */
    data: XOR<MetrologyAuthorityUpdateManyMutationInput, MetrologyAuthorityUncheckedUpdateManyInput>
    /**
     * Filter which MetrologyAuthorities to update
     */
    where?: MetrologyAuthorityWhereInput
    /**
     * Limit how many MetrologyAuthorities to update.
     */
    limit?: number
  }

  /**
   * MetrologyAuthority upsert
   */
  export type MetrologyAuthorityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * The filter to search for the MetrologyAuthority to update in case it exists.
     */
    where: MetrologyAuthorityWhereUniqueInput
    /**
     * In case the MetrologyAuthority found by the `where` argument doesn't exist, create a new MetrologyAuthority with this data.
     */
    create: XOR<MetrologyAuthorityCreateInput, MetrologyAuthorityUncheckedCreateInput>
    /**
     * In case the MetrologyAuthority was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetrologyAuthorityUpdateInput, MetrologyAuthorityUncheckedUpdateInput>
  }

  /**
   * MetrologyAuthority delete
   */
  export type MetrologyAuthorityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
    /**
     * Filter which MetrologyAuthority to delete.
     */
    where: MetrologyAuthorityWhereUniqueInput
  }

  /**
   * MetrologyAuthority deleteMany
   */
  export type MetrologyAuthorityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetrologyAuthorities to delete
     */
    where?: MetrologyAuthorityWhereInput
    /**
     * Limit how many MetrologyAuthorities to delete.
     */
    limit?: number
  }

  /**
   * MetrologyAuthority without action
   */
  export type MetrologyAuthorityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyAuthority
     */
    select?: MetrologyAuthoritySelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyAuthority
     */
    omit?: MetrologyAuthorityOmit<ExtArgs> | null
  }


  /**
   * Model MetrologySoftware
   */

  export type AggregateMetrologySoftware = {
    _count: MetrologySoftwareCountAggregateOutputType | null
    _min: MetrologySoftwareMinAggregateOutputType | null
    _max: MetrologySoftwareMaxAggregateOutputType | null
  }

  export type MetrologySoftwareMinAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    providerId: string | null
    cabinetId: string | null
    gameMixId: string | null
    serialNumbers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetrologySoftwareMaxAggregateOutputType = {
    id: string | null
    name: string | null
    version: string | null
    providerId: string | null
    cabinetId: string | null
    gameMixId: string | null
    serialNumbers: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MetrologySoftwareCountAggregateOutputType = {
    id: number
    name: number
    version: number
    providerId: number
    cabinetId: number
    gameMixId: number
    serialNumbers: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MetrologySoftwareMinAggregateInputType = {
    id?: true
    name?: true
    version?: true
    providerId?: true
    cabinetId?: true
    gameMixId?: true
    serialNumbers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetrologySoftwareMaxAggregateInputType = {
    id?: true
    name?: true
    version?: true
    providerId?: true
    cabinetId?: true
    gameMixId?: true
    serialNumbers?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MetrologySoftwareCountAggregateInputType = {
    id?: true
    name?: true
    version?: true
    providerId?: true
    cabinetId?: true
    gameMixId?: true
    serialNumbers?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MetrologySoftwareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetrologySoftware to aggregate.
     */
    where?: MetrologySoftwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologySoftwares to fetch.
     */
    orderBy?: MetrologySoftwareOrderByWithRelationInput | MetrologySoftwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MetrologySoftwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologySoftwares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologySoftwares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MetrologySoftwares
    **/
    _count?: true | MetrologySoftwareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MetrologySoftwareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MetrologySoftwareMaxAggregateInputType
  }

  export type GetMetrologySoftwareAggregateType<T extends MetrologySoftwareAggregateArgs> = {
        [P in keyof T & keyof AggregateMetrologySoftware]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMetrologySoftware[P]>
      : GetScalarType<T[P], AggregateMetrologySoftware[P]>
  }




  export type MetrologySoftwareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MetrologySoftwareWhereInput
    orderBy?: MetrologySoftwareOrderByWithAggregationInput | MetrologySoftwareOrderByWithAggregationInput[]
    by: MetrologySoftwareScalarFieldEnum[] | MetrologySoftwareScalarFieldEnum
    having?: MetrologySoftwareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MetrologySoftwareCountAggregateInputType | true
    _min?: MetrologySoftwareMinAggregateInputType
    _max?: MetrologySoftwareMaxAggregateInputType
  }

  export type MetrologySoftwareGroupByOutputType = {
    id: string
    name: string
    version: string | null
    providerId: string | null
    cabinetId: string | null
    gameMixId: string | null
    serialNumbers: string | null
    createdAt: Date
    updatedAt: Date
    _count: MetrologySoftwareCountAggregateOutputType | null
    _min: MetrologySoftwareMinAggregateOutputType | null
    _max: MetrologySoftwareMaxAggregateOutputType | null
  }

  type GetMetrologySoftwareGroupByPayload<T extends MetrologySoftwareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MetrologySoftwareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MetrologySoftwareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MetrologySoftwareGroupByOutputType[P]>
            : GetScalarType<T[P], MetrologySoftwareGroupByOutputType[P]>
        }
      >
    >


  export type MetrologySoftwareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | MetrologySoftware$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologySoftware$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologySoftware$gameMixArgs<ExtArgs>
    approvals?: boolean | MetrologySoftware$approvalsArgs<ExtArgs>
    _count?: boolean | MetrologySoftwareCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["metrologySoftware"]>

  export type MetrologySoftwareSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | MetrologySoftware$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologySoftware$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologySoftware$gameMixArgs<ExtArgs>
  }, ExtArgs["result"]["metrologySoftware"]>

  export type MetrologySoftwareSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    version?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | MetrologySoftware$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologySoftware$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologySoftware$gameMixArgs<ExtArgs>
  }, ExtArgs["result"]["metrologySoftware"]>

  export type MetrologySoftwareSelectScalar = {
    id?: boolean
    name?: boolean
    version?: boolean
    providerId?: boolean
    cabinetId?: boolean
    gameMixId?: boolean
    serialNumbers?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MetrologySoftwareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "version" | "providerId" | "cabinetId" | "gameMixId" | "serialNumbers" | "createdAt" | "updatedAt", ExtArgs["result"]["metrologySoftware"]>
  export type MetrologySoftwareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | MetrologySoftware$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologySoftware$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologySoftware$gameMixArgs<ExtArgs>
    approvals?: boolean | MetrologySoftware$approvalsArgs<ExtArgs>
    _count?: boolean | MetrologySoftwareCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MetrologySoftwareIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | MetrologySoftware$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologySoftware$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologySoftware$gameMixArgs<ExtArgs>
  }
  export type MetrologySoftwareIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | MetrologySoftware$providerArgs<ExtArgs>
    cabinet?: boolean | MetrologySoftware$cabinetArgs<ExtArgs>
    gameMix?: boolean | MetrologySoftware$gameMixArgs<ExtArgs>
  }

  export type $MetrologySoftwarePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MetrologySoftware"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs> | null
      cabinet: Prisma.$CabinetPayload<ExtArgs> | null
      gameMix: Prisma.$GameMixPayload<ExtArgs> | null
      approvals: Prisma.$MetrologyApprovalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      version: string | null
      providerId: string | null
      cabinetId: string | null
      gameMixId: string | null
      serialNumbers: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["metrologySoftware"]>
    composites: {}
  }

  type MetrologySoftwareGetPayload<S extends boolean | null | undefined | MetrologySoftwareDefaultArgs> = $Result.GetResult<Prisma.$MetrologySoftwarePayload, S>

  type MetrologySoftwareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MetrologySoftwareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MetrologySoftwareCountAggregateInputType | true
    }

  export interface MetrologySoftwareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MetrologySoftware'], meta: { name: 'MetrologySoftware' } }
    /**
     * Find zero or one MetrologySoftware that matches the filter.
     * @param {MetrologySoftwareFindUniqueArgs} args - Arguments to find a MetrologySoftware
     * @example
     * // Get one MetrologySoftware
     * const metrologySoftware = await prisma.metrologySoftware.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MetrologySoftwareFindUniqueArgs>(args: SelectSubset<T, MetrologySoftwareFindUniqueArgs<ExtArgs>>): Prisma__MetrologySoftwareClient<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MetrologySoftware that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MetrologySoftwareFindUniqueOrThrowArgs} args - Arguments to find a MetrologySoftware
     * @example
     * // Get one MetrologySoftware
     * const metrologySoftware = await prisma.metrologySoftware.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MetrologySoftwareFindUniqueOrThrowArgs>(args: SelectSubset<T, MetrologySoftwareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MetrologySoftwareClient<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetrologySoftware that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologySoftwareFindFirstArgs} args - Arguments to find a MetrologySoftware
     * @example
     * // Get one MetrologySoftware
     * const metrologySoftware = await prisma.metrologySoftware.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MetrologySoftwareFindFirstArgs>(args?: SelectSubset<T, MetrologySoftwareFindFirstArgs<ExtArgs>>): Prisma__MetrologySoftwareClient<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MetrologySoftware that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologySoftwareFindFirstOrThrowArgs} args - Arguments to find a MetrologySoftware
     * @example
     * // Get one MetrologySoftware
     * const metrologySoftware = await prisma.metrologySoftware.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MetrologySoftwareFindFirstOrThrowArgs>(args?: SelectSubset<T, MetrologySoftwareFindFirstOrThrowArgs<ExtArgs>>): Prisma__MetrologySoftwareClient<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MetrologySoftwares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologySoftwareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MetrologySoftwares
     * const metrologySoftwares = await prisma.metrologySoftware.findMany()
     * 
     * // Get first 10 MetrologySoftwares
     * const metrologySoftwares = await prisma.metrologySoftware.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const metrologySoftwareWithIdOnly = await prisma.metrologySoftware.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MetrologySoftwareFindManyArgs>(args?: SelectSubset<T, MetrologySoftwareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MetrologySoftware.
     * @param {MetrologySoftwareCreateArgs} args - Arguments to create a MetrologySoftware.
     * @example
     * // Create one MetrologySoftware
     * const MetrologySoftware = await prisma.metrologySoftware.create({
     *   data: {
     *     // ... data to create a MetrologySoftware
     *   }
     * })
     * 
     */
    create<T extends MetrologySoftwareCreateArgs>(args: SelectSubset<T, MetrologySoftwareCreateArgs<ExtArgs>>): Prisma__MetrologySoftwareClient<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MetrologySoftwares.
     * @param {MetrologySoftwareCreateManyArgs} args - Arguments to create many MetrologySoftwares.
     * @example
     * // Create many MetrologySoftwares
     * const metrologySoftware = await prisma.metrologySoftware.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MetrologySoftwareCreateManyArgs>(args?: SelectSubset<T, MetrologySoftwareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MetrologySoftwares and returns the data saved in the database.
     * @param {MetrologySoftwareCreateManyAndReturnArgs} args - Arguments to create many MetrologySoftwares.
     * @example
     * // Create many MetrologySoftwares
     * const metrologySoftware = await prisma.metrologySoftware.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MetrologySoftwares and only return the `id`
     * const metrologySoftwareWithIdOnly = await prisma.metrologySoftware.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MetrologySoftwareCreateManyAndReturnArgs>(args?: SelectSubset<T, MetrologySoftwareCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MetrologySoftware.
     * @param {MetrologySoftwareDeleteArgs} args - Arguments to delete one MetrologySoftware.
     * @example
     * // Delete one MetrologySoftware
     * const MetrologySoftware = await prisma.metrologySoftware.delete({
     *   where: {
     *     // ... filter to delete one MetrologySoftware
     *   }
     * })
     * 
     */
    delete<T extends MetrologySoftwareDeleteArgs>(args: SelectSubset<T, MetrologySoftwareDeleteArgs<ExtArgs>>): Prisma__MetrologySoftwareClient<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MetrologySoftware.
     * @param {MetrologySoftwareUpdateArgs} args - Arguments to update one MetrologySoftware.
     * @example
     * // Update one MetrologySoftware
     * const metrologySoftware = await prisma.metrologySoftware.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MetrologySoftwareUpdateArgs>(args: SelectSubset<T, MetrologySoftwareUpdateArgs<ExtArgs>>): Prisma__MetrologySoftwareClient<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MetrologySoftwares.
     * @param {MetrologySoftwareDeleteManyArgs} args - Arguments to filter MetrologySoftwares to delete.
     * @example
     * // Delete a few MetrologySoftwares
     * const { count } = await prisma.metrologySoftware.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MetrologySoftwareDeleteManyArgs>(args?: SelectSubset<T, MetrologySoftwareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetrologySoftwares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologySoftwareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MetrologySoftwares
     * const metrologySoftware = await prisma.metrologySoftware.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MetrologySoftwareUpdateManyArgs>(args: SelectSubset<T, MetrologySoftwareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MetrologySoftwares and returns the data updated in the database.
     * @param {MetrologySoftwareUpdateManyAndReturnArgs} args - Arguments to update many MetrologySoftwares.
     * @example
     * // Update many MetrologySoftwares
     * const metrologySoftware = await prisma.metrologySoftware.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MetrologySoftwares and only return the `id`
     * const metrologySoftwareWithIdOnly = await prisma.metrologySoftware.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MetrologySoftwareUpdateManyAndReturnArgs>(args: SelectSubset<T, MetrologySoftwareUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MetrologySoftware.
     * @param {MetrologySoftwareUpsertArgs} args - Arguments to update or create a MetrologySoftware.
     * @example
     * // Update or create a MetrologySoftware
     * const metrologySoftware = await prisma.metrologySoftware.upsert({
     *   create: {
     *     // ... data to create a MetrologySoftware
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MetrologySoftware we want to update
     *   }
     * })
     */
    upsert<T extends MetrologySoftwareUpsertArgs>(args: SelectSubset<T, MetrologySoftwareUpsertArgs<ExtArgs>>): Prisma__MetrologySoftwareClient<$Result.GetResult<Prisma.$MetrologySoftwarePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MetrologySoftwares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologySoftwareCountArgs} args - Arguments to filter MetrologySoftwares to count.
     * @example
     * // Count the number of MetrologySoftwares
     * const count = await prisma.metrologySoftware.count({
     *   where: {
     *     // ... the filter for the MetrologySoftwares we want to count
     *   }
     * })
    **/
    count<T extends MetrologySoftwareCountArgs>(
      args?: Subset<T, MetrologySoftwareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MetrologySoftwareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MetrologySoftware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologySoftwareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MetrologySoftwareAggregateArgs>(args: Subset<T, MetrologySoftwareAggregateArgs>): Prisma.PrismaPromise<GetMetrologySoftwareAggregateType<T>>

    /**
     * Group by MetrologySoftware.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MetrologySoftwareGroupByArgs} args - Group by arguments.
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
      T extends MetrologySoftwareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MetrologySoftwareGroupByArgs['orderBy'] }
        : { orderBy?: MetrologySoftwareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MetrologySoftwareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMetrologySoftwareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MetrologySoftware model
   */
  readonly fields: MetrologySoftwareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MetrologySoftware.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MetrologySoftwareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends MetrologySoftware$providerArgs<ExtArgs> = {}>(args?: Subset<T, MetrologySoftware$providerArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cabinet<T extends MetrologySoftware$cabinetArgs<ExtArgs> = {}>(args?: Subset<T, MetrologySoftware$cabinetArgs<ExtArgs>>): Prisma__CabinetClient<$Result.GetResult<Prisma.$CabinetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    gameMix<T extends MetrologySoftware$gameMixArgs<ExtArgs> = {}>(args?: Subset<T, MetrologySoftware$gameMixArgs<ExtArgs>>): Prisma__GameMixClient<$Result.GetResult<Prisma.$GameMixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    approvals<T extends MetrologySoftware$approvalsArgs<ExtArgs> = {}>(args?: Subset<T, MetrologySoftware$approvalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MetrologyApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MetrologySoftware model
   */
  interface MetrologySoftwareFieldRefs {
    readonly id: FieldRef<"MetrologySoftware", 'String'>
    readonly name: FieldRef<"MetrologySoftware", 'String'>
    readonly version: FieldRef<"MetrologySoftware", 'String'>
    readonly providerId: FieldRef<"MetrologySoftware", 'String'>
    readonly cabinetId: FieldRef<"MetrologySoftware", 'String'>
    readonly gameMixId: FieldRef<"MetrologySoftware", 'String'>
    readonly serialNumbers: FieldRef<"MetrologySoftware", 'String'>
    readonly createdAt: FieldRef<"MetrologySoftware", 'DateTime'>
    readonly updatedAt: FieldRef<"MetrologySoftware", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MetrologySoftware findUnique
   */
  export type MetrologySoftwareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    /**
     * Filter, which MetrologySoftware to fetch.
     */
    where: MetrologySoftwareWhereUniqueInput
  }

  /**
   * MetrologySoftware findUniqueOrThrow
   */
  export type MetrologySoftwareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    /**
     * Filter, which MetrologySoftware to fetch.
     */
    where: MetrologySoftwareWhereUniqueInput
  }

  /**
   * MetrologySoftware findFirst
   */
  export type MetrologySoftwareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    /**
     * Filter, which MetrologySoftware to fetch.
     */
    where?: MetrologySoftwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologySoftwares to fetch.
     */
    orderBy?: MetrologySoftwareOrderByWithRelationInput | MetrologySoftwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetrologySoftwares.
     */
    cursor?: MetrologySoftwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologySoftwares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologySoftwares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetrologySoftwares.
     */
    distinct?: MetrologySoftwareScalarFieldEnum | MetrologySoftwareScalarFieldEnum[]
  }

  /**
   * MetrologySoftware findFirstOrThrow
   */
  export type MetrologySoftwareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    /**
     * Filter, which MetrologySoftware to fetch.
     */
    where?: MetrologySoftwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologySoftwares to fetch.
     */
    orderBy?: MetrologySoftwareOrderByWithRelationInput | MetrologySoftwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MetrologySoftwares.
     */
    cursor?: MetrologySoftwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologySoftwares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologySoftwares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MetrologySoftwares.
     */
    distinct?: MetrologySoftwareScalarFieldEnum | MetrologySoftwareScalarFieldEnum[]
  }

  /**
   * MetrologySoftware findMany
   */
  export type MetrologySoftwareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    /**
     * Filter, which MetrologySoftwares to fetch.
     */
    where?: MetrologySoftwareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MetrologySoftwares to fetch.
     */
    orderBy?: MetrologySoftwareOrderByWithRelationInput | MetrologySoftwareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MetrologySoftwares.
     */
    cursor?: MetrologySoftwareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MetrologySoftwares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MetrologySoftwares.
     */
    skip?: number
    distinct?: MetrologySoftwareScalarFieldEnum | MetrologySoftwareScalarFieldEnum[]
  }

  /**
   * MetrologySoftware create
   */
  export type MetrologySoftwareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    /**
     * The data needed to create a MetrologySoftware.
     */
    data: XOR<MetrologySoftwareCreateInput, MetrologySoftwareUncheckedCreateInput>
  }

  /**
   * MetrologySoftware createMany
   */
  export type MetrologySoftwareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MetrologySoftwares.
     */
    data: MetrologySoftwareCreateManyInput | MetrologySoftwareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MetrologySoftware createManyAndReturn
   */
  export type MetrologySoftwareCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * The data used to create many MetrologySoftwares.
     */
    data: MetrologySoftwareCreateManyInput | MetrologySoftwareCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetrologySoftware update
   */
  export type MetrologySoftwareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    /**
     * The data needed to update a MetrologySoftware.
     */
    data: XOR<MetrologySoftwareUpdateInput, MetrologySoftwareUncheckedUpdateInput>
    /**
     * Choose, which MetrologySoftware to update.
     */
    where: MetrologySoftwareWhereUniqueInput
  }

  /**
   * MetrologySoftware updateMany
   */
  export type MetrologySoftwareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MetrologySoftwares.
     */
    data: XOR<MetrologySoftwareUpdateManyMutationInput, MetrologySoftwareUncheckedUpdateManyInput>
    /**
     * Filter which MetrologySoftwares to update
     */
    where?: MetrologySoftwareWhereInput
    /**
     * Limit how many MetrologySoftwares to update.
     */
    limit?: number
  }

  /**
   * MetrologySoftware updateManyAndReturn
   */
  export type MetrologySoftwareUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * The data used to update MetrologySoftwares.
     */
    data: XOR<MetrologySoftwareUpdateManyMutationInput, MetrologySoftwareUncheckedUpdateManyInput>
    /**
     * Filter which MetrologySoftwares to update
     */
    where?: MetrologySoftwareWhereInput
    /**
     * Limit how many MetrologySoftwares to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MetrologySoftware upsert
   */
  export type MetrologySoftwareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    /**
     * The filter to search for the MetrologySoftware to update in case it exists.
     */
    where: MetrologySoftwareWhereUniqueInput
    /**
     * In case the MetrologySoftware found by the `where` argument doesn't exist, create a new MetrologySoftware with this data.
     */
    create: XOR<MetrologySoftwareCreateInput, MetrologySoftwareUncheckedCreateInput>
    /**
     * In case the MetrologySoftware was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MetrologySoftwareUpdateInput, MetrologySoftwareUncheckedUpdateInput>
  }

  /**
   * MetrologySoftware delete
   */
  export type MetrologySoftwareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
    /**
     * Filter which MetrologySoftware to delete.
     */
    where: MetrologySoftwareWhereUniqueInput
  }

  /**
   * MetrologySoftware deleteMany
   */
  export type MetrologySoftwareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MetrologySoftwares to delete
     */
    where?: MetrologySoftwareWhereInput
    /**
     * Limit how many MetrologySoftwares to delete.
     */
    limit?: number
  }

  /**
   * MetrologySoftware.provider
   */
  export type MetrologySoftware$providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    where?: ProviderWhereInput
  }

  /**
   * MetrologySoftware.cabinet
   */
  export type MetrologySoftware$cabinetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cabinet
     */
    select?: CabinetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cabinet
     */
    omit?: CabinetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CabinetInclude<ExtArgs> | null
    where?: CabinetWhereInput
  }

  /**
   * MetrologySoftware.gameMix
   */
  export type MetrologySoftware$gameMixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameMix
     */
    select?: GameMixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameMix
     */
    omit?: GameMixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameMixInclude<ExtArgs> | null
    where?: GameMixWhereInput
  }

  /**
   * MetrologySoftware.approvals
   */
  export type MetrologySoftware$approvalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologyApproval
     */
    select?: MetrologyApprovalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologyApproval
     */
    omit?: MetrologyApprovalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologyApprovalInclude<ExtArgs> | null
    where?: MetrologyApprovalWhereInput
    orderBy?: MetrologyApprovalOrderByWithRelationInput | MetrologyApprovalOrderByWithRelationInput[]
    cursor?: MetrologyApprovalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MetrologyApprovalScalarFieldEnum | MetrologyApprovalScalarFieldEnum[]
  }

  /**
   * MetrologySoftware without action
   */
  export type MetrologySoftwareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MetrologySoftware
     */
    select?: MetrologySoftwareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MetrologySoftware
     */
    omit?: MetrologySoftwareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MetrologySoftwareInclude<ExtArgs> | null
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
    username: string | null
    email: string | null
    role: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    role: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    role: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    role?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
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
    username: string
    email: string | null
    role: string
    avatar: string | null
    createdAt: Date
    updatedAt: Date
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
    username?: boolean
    email?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    role?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "role" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string | null
      role: string
      avatar: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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


  export const ProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const CabinetScalarFieldEnum: {
    id: 'id',
    name: 'name',
    model: 'model',
    manufacturer: 'manufacturer',
    providerId: 'providerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CabinetScalarFieldEnum = (typeof CabinetScalarFieldEnum)[keyof typeof CabinetScalarFieldEnum]


  export const GameMixScalarFieldEnum: {
    id: 'id',
    name: 'name',
    providerId: 'providerId',
    games: 'games',
    gameCount: 'gameCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameMixScalarFieldEnum = (typeof GameMixScalarFieldEnum)[keyof typeof GameMixScalarFieldEnum]


  export const SlotMachineScalarFieldEnum: {
    id: 'id',
    serialNumber: 'serialNumber',
    manufacturer: 'manufacturer',
    providerId: 'providerId',
    cabinetId: 'cabinetId',
    gameMixId: 'gameMixId',
    locationId: 'locationId',
    productionYear: 'productionYear',
    denomination: 'denomination',
    maxBet: 'maxBet',
    rtp: 'rtp',
    gamingPlaces: 'gamingPlaces',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SlotMachineScalarFieldEnum = (typeof SlotMachineScalarFieldEnum)[keyof typeof SlotMachineScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    email: 'email',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const InvoiceScalarFieldEnum: {
    id: 'id',
    invoiceNumber: 'invoiceNumber',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    serialNumber: 'serialNumber',
    locationId: 'locationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum]


  export const PlatformScalarFieldEnum: {
    id: 'id',
    name: 'name',
    serialNumbers: 'serialNumbers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlatformScalarFieldEnum = (typeof PlatformScalarFieldEnum)[keyof typeof PlatformScalarFieldEnum]


  export const MetrologyScalarFieldEnum: {
    id: 'id',
    serialNumber: 'serialNumber',
    certificateType: 'certificateType',
    issueDate: 'issueDate',
    expiryDate: 'expiryDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetrologyScalarFieldEnum = (typeof MetrologyScalarFieldEnum)[keyof typeof MetrologyScalarFieldEnum]


  export const MetrologyApprovalScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dataEmitere: 'dataEmitere',
    dataExpirare: 'dataExpirare',
    providerId: 'providerId',
    cabinetId: 'cabinetId',
    gameMixId: 'gameMixId',
    softwareId: 'softwareId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetrologyApprovalScalarFieldEnum = (typeof MetrologyApprovalScalarFieldEnum)[keyof typeof MetrologyApprovalScalarFieldEnum]


  export const MetrologyCommissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    dataEmitere: 'dataEmitere',
    dataExpirare: 'dataExpirare',
    serialNumbers: 'serialNumbers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetrologyCommissionScalarFieldEnum = (typeof MetrologyCommissionScalarFieldEnum)[keyof typeof MetrologyCommissionScalarFieldEnum]


  export const MetrologyAuthorityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetrologyAuthorityScalarFieldEnum = (typeof MetrologyAuthorityScalarFieldEnum)[keyof typeof MetrologyAuthorityScalarFieldEnum]


  export const MetrologySoftwareScalarFieldEnum: {
    id: 'id',
    name: 'name',
    version: 'version',
    providerId: 'providerId',
    cabinetId: 'cabinetId',
    gameMixId: 'gameMixId',
    serialNumbers: 'serialNumbers',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MetrologySoftwareScalarFieldEnum = (typeof MetrologySoftwareScalarFieldEnum)[keyof typeof MetrologySoftwareScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    role: 'role',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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


  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: StringFilter<"Provider"> | string
    name?: StringFilter<"Provider"> | string
    avatar?: StringNullableFilter<"Provider"> | string | null
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    cabinets?: CabinetListRelationFilter
    gameMixes?: GameMixListRelationFilter
    slots?: SlotMachineListRelationFilter
    metrologyApprovals?: MetrologyApprovalListRelationFilter
    metrologySoftware?: MetrologySoftwareListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cabinets?: CabinetOrderByRelationAggregateInput
    gameMixes?: GameMixOrderByRelationAggregateInput
    slots?: SlotMachineOrderByRelationAggregateInput
    metrologyApprovals?: MetrologyApprovalOrderByRelationAggregateInput
    metrologySoftware?: MetrologySoftwareOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    avatar?: StringNullableFilter<"Provider"> | string | null
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    cabinets?: CabinetListRelationFilter
    gameMixes?: GameMixListRelationFilter
    slots?: SlotMachineListRelationFilter
    metrologyApprovals?: MetrologyApprovalListRelationFilter
    metrologySoftware?: MetrologySoftwareListRelationFilter
  }, "id" | "name">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Provider"> | string
    name?: StringWithAggregatesFilter<"Provider"> | string
    avatar?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    address?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    slots?: SlotMachineListRelationFilter
    invoices?: InvoiceListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slots?: SlotMachineOrderByRelationAggregateInput
    invoices?: InvoiceOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    address?: StringNullableFilter<"Location"> | string | null
    createdAt?: DateTimeFilter<"Location"> | Date | string
    updatedAt?: DateTimeFilter<"Location"> | Date | string
    slots?: SlotMachineListRelationFilter
    invoices?: InvoiceListRelationFilter
  }, "id" | "name">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    address?: StringNullableWithAggregatesFilter<"Location"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Location"> | Date | string
  }

  export type CabinetWhereInput = {
    AND?: CabinetWhereInput | CabinetWhereInput[]
    OR?: CabinetWhereInput[]
    NOT?: CabinetWhereInput | CabinetWhereInput[]
    id?: StringFilter<"Cabinet"> | string
    name?: StringFilter<"Cabinet"> | string
    model?: StringNullableFilter<"Cabinet"> | string | null
    manufacturer?: StringFilter<"Cabinet"> | string
    providerId?: StringFilter<"Cabinet"> | string
    createdAt?: DateTimeFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeFilter<"Cabinet"> | Date | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    slots?: SlotMachineListRelationFilter
    metrologyApprovals?: MetrologyApprovalListRelationFilter
    metrologySoftware?: MetrologySoftwareListRelationFilter
  }

  export type CabinetOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrderInput | SortOrder
    manufacturer?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    slots?: SlotMachineOrderByRelationAggregateInput
    metrologyApprovals?: MetrologyApprovalOrderByRelationAggregateInput
    metrologySoftware?: MetrologySoftwareOrderByRelationAggregateInput
  }

  export type CabinetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_manufacturer?: CabinetNameManufacturerCompoundUniqueInput
    AND?: CabinetWhereInput | CabinetWhereInput[]
    OR?: CabinetWhereInput[]
    NOT?: CabinetWhereInput | CabinetWhereInput[]
    name?: StringFilter<"Cabinet"> | string
    model?: StringNullableFilter<"Cabinet"> | string | null
    manufacturer?: StringFilter<"Cabinet"> | string
    providerId?: StringFilter<"Cabinet"> | string
    createdAt?: DateTimeFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeFilter<"Cabinet"> | Date | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    slots?: SlotMachineListRelationFilter
    metrologyApprovals?: MetrologyApprovalListRelationFilter
    metrologySoftware?: MetrologySoftwareListRelationFilter
  }, "id" | "name_manufacturer">

  export type CabinetOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrderInput | SortOrder
    manufacturer?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CabinetCountOrderByAggregateInput
    _max?: CabinetMaxOrderByAggregateInput
    _min?: CabinetMinOrderByAggregateInput
  }

  export type CabinetScalarWhereWithAggregatesInput = {
    AND?: CabinetScalarWhereWithAggregatesInput | CabinetScalarWhereWithAggregatesInput[]
    OR?: CabinetScalarWhereWithAggregatesInput[]
    NOT?: CabinetScalarWhereWithAggregatesInput | CabinetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cabinet"> | string
    name?: StringWithAggregatesFilter<"Cabinet"> | string
    model?: StringNullableWithAggregatesFilter<"Cabinet"> | string | null
    manufacturer?: StringWithAggregatesFilter<"Cabinet"> | string
    providerId?: StringWithAggregatesFilter<"Cabinet"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cabinet"> | Date | string
  }

  export type GameMixWhereInput = {
    AND?: GameMixWhereInput | GameMixWhereInput[]
    OR?: GameMixWhereInput[]
    NOT?: GameMixWhereInput | GameMixWhereInput[]
    id?: StringFilter<"GameMix"> | string
    name?: StringFilter<"GameMix"> | string
    providerId?: StringFilter<"GameMix"> | string
    games?: StringNullableFilter<"GameMix"> | string | null
    gameCount?: IntNullableFilter<"GameMix"> | number | null
    createdAt?: DateTimeFilter<"GameMix"> | Date | string
    updatedAt?: DateTimeFilter<"GameMix"> | Date | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    slots?: SlotMachineListRelationFilter
    metrologyApprovals?: MetrologyApprovalListRelationFilter
    metrologySoftware?: MetrologySoftwareListRelationFilter
  }

  export type GameMixOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    games?: SortOrderInput | SortOrder
    gameCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    slots?: SlotMachineOrderByRelationAggregateInput
    metrologyApprovals?: MetrologyApprovalOrderByRelationAggregateInput
    metrologySoftware?: MetrologySoftwareOrderByRelationAggregateInput
  }

  export type GameMixWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_providerId?: GameMixNameProviderIdCompoundUniqueInput
    AND?: GameMixWhereInput | GameMixWhereInput[]
    OR?: GameMixWhereInput[]
    NOT?: GameMixWhereInput | GameMixWhereInput[]
    name?: StringFilter<"GameMix"> | string
    providerId?: StringFilter<"GameMix"> | string
    games?: StringNullableFilter<"GameMix"> | string | null
    gameCount?: IntNullableFilter<"GameMix"> | number | null
    createdAt?: DateTimeFilter<"GameMix"> | Date | string
    updatedAt?: DateTimeFilter<"GameMix"> | Date | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    slots?: SlotMachineListRelationFilter
    metrologyApprovals?: MetrologyApprovalListRelationFilter
    metrologySoftware?: MetrologySoftwareListRelationFilter
  }, "id" | "name_providerId">

  export type GameMixOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    games?: SortOrderInput | SortOrder
    gameCount?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameMixCountOrderByAggregateInput
    _avg?: GameMixAvgOrderByAggregateInput
    _max?: GameMixMaxOrderByAggregateInput
    _min?: GameMixMinOrderByAggregateInput
    _sum?: GameMixSumOrderByAggregateInput
  }

  export type GameMixScalarWhereWithAggregatesInput = {
    AND?: GameMixScalarWhereWithAggregatesInput | GameMixScalarWhereWithAggregatesInput[]
    OR?: GameMixScalarWhereWithAggregatesInput[]
    NOT?: GameMixScalarWhereWithAggregatesInput | GameMixScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameMix"> | string
    name?: StringWithAggregatesFilter<"GameMix"> | string
    providerId?: StringWithAggregatesFilter<"GameMix"> | string
    games?: StringNullableWithAggregatesFilter<"GameMix"> | string | null
    gameCount?: IntNullableWithAggregatesFilter<"GameMix"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"GameMix"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameMix"> | Date | string
  }

  export type SlotMachineWhereInput = {
    AND?: SlotMachineWhereInput | SlotMachineWhereInput[]
    OR?: SlotMachineWhereInput[]
    NOT?: SlotMachineWhereInput | SlotMachineWhereInput[]
    id?: StringFilter<"SlotMachine"> | string
    serialNumber?: StringFilter<"SlotMachine"> | string
    manufacturer?: StringFilter<"SlotMachine"> | string
    providerId?: StringFilter<"SlotMachine"> | string
    cabinetId?: StringFilter<"SlotMachine"> | string
    gameMixId?: StringNullableFilter<"SlotMachine"> | string | null
    locationId?: StringNullableFilter<"SlotMachine"> | string | null
    productionYear?: IntNullableFilter<"SlotMachine"> | number | null
    denomination?: FloatNullableFilter<"SlotMachine"> | number | null
    maxBet?: FloatNullableFilter<"SlotMachine"> | number | null
    rtp?: FloatNullableFilter<"SlotMachine"> | number | null
    gamingPlaces?: IntFilter<"SlotMachine"> | number
    status?: StringFilter<"SlotMachine"> | string
    createdAt?: DateTimeFilter<"SlotMachine"> | Date | string
    updatedAt?: DateTimeFilter<"SlotMachine"> | Date | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
    gameMix?: XOR<GameMixNullableScalarRelationFilter, GameMixWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
  }

  export type SlotMachineOrderByWithRelationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    manufacturer?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    productionYear?: SortOrderInput | SortOrder
    denomination?: SortOrderInput | SortOrder
    maxBet?: SortOrderInput | SortOrder
    rtp?: SortOrderInput | SortOrder
    gamingPlaces?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    cabinet?: CabinetOrderByWithRelationInput
    gameMix?: GameMixOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type SlotMachineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serialNumber?: string
    AND?: SlotMachineWhereInput | SlotMachineWhereInput[]
    OR?: SlotMachineWhereInput[]
    NOT?: SlotMachineWhereInput | SlotMachineWhereInput[]
    manufacturer?: StringFilter<"SlotMachine"> | string
    providerId?: StringFilter<"SlotMachine"> | string
    cabinetId?: StringFilter<"SlotMachine"> | string
    gameMixId?: StringNullableFilter<"SlotMachine"> | string | null
    locationId?: StringNullableFilter<"SlotMachine"> | string | null
    productionYear?: IntNullableFilter<"SlotMachine"> | number | null
    denomination?: FloatNullableFilter<"SlotMachine"> | number | null
    maxBet?: FloatNullableFilter<"SlotMachine"> | number | null
    rtp?: FloatNullableFilter<"SlotMachine"> | number | null
    gamingPlaces?: IntFilter<"SlotMachine"> | number
    status?: StringFilter<"SlotMachine"> | string
    createdAt?: DateTimeFilter<"SlotMachine"> | Date | string
    updatedAt?: DateTimeFilter<"SlotMachine"> | Date | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    cabinet?: XOR<CabinetScalarRelationFilter, CabinetWhereInput>
    gameMix?: XOR<GameMixNullableScalarRelationFilter, GameMixWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
  }, "id" | "serialNumber">

  export type SlotMachineOrderByWithAggregationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    manufacturer?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    productionYear?: SortOrderInput | SortOrder
    denomination?: SortOrderInput | SortOrder
    maxBet?: SortOrderInput | SortOrder
    rtp?: SortOrderInput | SortOrder
    gamingPlaces?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SlotMachineCountOrderByAggregateInput
    _avg?: SlotMachineAvgOrderByAggregateInput
    _max?: SlotMachineMaxOrderByAggregateInput
    _min?: SlotMachineMinOrderByAggregateInput
    _sum?: SlotMachineSumOrderByAggregateInput
  }

  export type SlotMachineScalarWhereWithAggregatesInput = {
    AND?: SlotMachineScalarWhereWithAggregatesInput | SlotMachineScalarWhereWithAggregatesInput[]
    OR?: SlotMachineScalarWhereWithAggregatesInput[]
    NOT?: SlotMachineScalarWhereWithAggregatesInput | SlotMachineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SlotMachine"> | string
    serialNumber?: StringWithAggregatesFilter<"SlotMachine"> | string
    manufacturer?: StringWithAggregatesFilter<"SlotMachine"> | string
    providerId?: StringWithAggregatesFilter<"SlotMachine"> | string
    cabinetId?: StringWithAggregatesFilter<"SlotMachine"> | string
    gameMixId?: StringNullableWithAggregatesFilter<"SlotMachine"> | string | null
    locationId?: StringNullableWithAggregatesFilter<"SlotMachine"> | string | null
    productionYear?: IntNullableWithAggregatesFilter<"SlotMachine"> | number | null
    denomination?: FloatNullableWithAggregatesFilter<"SlotMachine"> | number | null
    maxBet?: FloatNullableWithAggregatesFilter<"SlotMachine"> | number | null
    rtp?: FloatNullableWithAggregatesFilter<"SlotMachine"> | number | null
    gamingPlaces?: IntWithAggregatesFilter<"SlotMachine"> | number
    status?: StringWithAggregatesFilter<"SlotMachine"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SlotMachine"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SlotMachine"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    name?: StringFilter<"Company"> | string
    address?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    email?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    address?: StringNullableFilter<"Company"> | string | null
    phone?: StringNullableFilter<"Company"> | string | null
    email?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
  }, "id" | "name">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    name?: StringWithAggregatesFilter<"Company"> | string
    address?: StringNullableWithAggregatesFilter<"Company"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Company"> | string | null
    email?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
  }

  export type InvoiceWhereInput = {
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    status?: StringFilter<"Invoice"> | string
    serialNumber?: StringNullableFilter<"Invoice"> | string | null
    locationId?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
  }

  export type InvoiceOrderByWithRelationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    location?: LocationOrderByWithRelationInput
  }

  export type InvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: InvoiceWhereInput | InvoiceWhereInput[]
    OR?: InvoiceWhereInput[]
    NOT?: InvoiceWhereInput | InvoiceWhereInput[]
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    status?: StringFilter<"Invoice"> | string
    serialNumber?: StringNullableFilter<"Invoice"> | string | null
    locationId?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
  }, "id" | "invoiceNumber">

  export type InvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    serialNumber?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InvoiceCountOrderByAggregateInput
    _avg?: InvoiceAvgOrderByAggregateInput
    _max?: InvoiceMaxOrderByAggregateInput
    _min?: InvoiceMinOrderByAggregateInput
    _sum?: InvoiceSumOrderByAggregateInput
  }

  export type InvoiceScalarWhereWithAggregatesInput = {
    AND?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    OR?: InvoiceScalarWhereWithAggregatesInput[]
    NOT?: InvoiceScalarWhereWithAggregatesInput | InvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"Invoice"> | string
    amount?: FloatWithAggregatesFilter<"Invoice"> | number
    currency?: StringWithAggregatesFilter<"Invoice"> | string
    status?: StringWithAggregatesFilter<"Invoice"> | string
    serialNumber?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    locationId?: StringNullableWithAggregatesFilter<"Invoice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invoice"> | Date | string
  }

  export type PlatformWhereInput = {
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    id?: StringFilter<"Platform"> | string
    name?: StringFilter<"Platform"> | string
    serialNumbers?: StringNullableFilter<"Platform"> | string | null
    createdAt?: DateTimeFilter<"Platform"> | Date | string
    updatedAt?: DateTimeFilter<"Platform"> | Date | string
  }

  export type PlatformOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumbers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PlatformWhereInput | PlatformWhereInput[]
    OR?: PlatformWhereInput[]
    NOT?: PlatformWhereInput | PlatformWhereInput[]
    serialNumbers?: StringNullableFilter<"Platform"> | string | null
    createdAt?: DateTimeFilter<"Platform"> | Date | string
    updatedAt?: DateTimeFilter<"Platform"> | Date | string
  }, "id" | "name">

  export type PlatformOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumbers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlatformCountOrderByAggregateInput
    _max?: PlatformMaxOrderByAggregateInput
    _min?: PlatformMinOrderByAggregateInput
  }

  export type PlatformScalarWhereWithAggregatesInput = {
    AND?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    OR?: PlatformScalarWhereWithAggregatesInput[]
    NOT?: PlatformScalarWhereWithAggregatesInput | PlatformScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Platform"> | string
    name?: StringWithAggregatesFilter<"Platform"> | string
    serialNumbers?: StringNullableWithAggregatesFilter<"Platform"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Platform"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Platform"> | Date | string
  }

  export type MetrologyWhereInput = {
    AND?: MetrologyWhereInput | MetrologyWhereInput[]
    OR?: MetrologyWhereInput[]
    NOT?: MetrologyWhereInput | MetrologyWhereInput[]
    id?: StringFilter<"Metrology"> | string
    serialNumber?: StringFilter<"Metrology"> | string
    certificateType?: StringFilter<"Metrology"> | string
    issueDate?: DateTimeNullableFilter<"Metrology"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"Metrology"> | Date | string | null
    createdAt?: DateTimeFilter<"Metrology"> | Date | string
    updatedAt?: DateTimeFilter<"Metrology"> | Date | string
  }

  export type MetrologyOrderByWithRelationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    certificateType?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetrologyWhereInput | MetrologyWhereInput[]
    OR?: MetrologyWhereInput[]
    NOT?: MetrologyWhereInput | MetrologyWhereInput[]
    serialNumber?: StringFilter<"Metrology"> | string
    certificateType?: StringFilter<"Metrology"> | string
    issueDate?: DateTimeNullableFilter<"Metrology"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"Metrology"> | Date | string | null
    createdAt?: DateTimeFilter<"Metrology"> | Date | string
    updatedAt?: DateTimeFilter<"Metrology"> | Date | string
  }, "id">

  export type MetrologyOrderByWithAggregationInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    certificateType?: SortOrder
    issueDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetrologyCountOrderByAggregateInput
    _max?: MetrologyMaxOrderByAggregateInput
    _min?: MetrologyMinOrderByAggregateInput
  }

  export type MetrologyScalarWhereWithAggregatesInput = {
    AND?: MetrologyScalarWhereWithAggregatesInput | MetrologyScalarWhereWithAggregatesInput[]
    OR?: MetrologyScalarWhereWithAggregatesInput[]
    NOT?: MetrologyScalarWhereWithAggregatesInput | MetrologyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Metrology"> | string
    serialNumber?: StringWithAggregatesFilter<"Metrology"> | string
    certificateType?: StringWithAggregatesFilter<"Metrology"> | string
    issueDate?: DateTimeNullableWithAggregatesFilter<"Metrology"> | Date | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"Metrology"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Metrology"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Metrology"> | Date | string
  }

  export type MetrologyApprovalWhereInput = {
    AND?: MetrologyApprovalWhereInput | MetrologyApprovalWhereInput[]
    OR?: MetrologyApprovalWhereInput[]
    NOT?: MetrologyApprovalWhereInput | MetrologyApprovalWhereInput[]
    id?: StringFilter<"MetrologyApproval"> | string
    name?: StringFilter<"MetrologyApproval"> | string
    dataEmitere?: DateTimeNullableFilter<"MetrologyApproval"> | Date | string | null
    dataExpirare?: DateTimeNullableFilter<"MetrologyApproval"> | Date | string | null
    providerId?: StringNullableFilter<"MetrologyApproval"> | string | null
    cabinetId?: StringNullableFilter<"MetrologyApproval"> | string | null
    gameMixId?: StringNullableFilter<"MetrologyApproval"> | string | null
    softwareId?: StringNullableFilter<"MetrologyApproval"> | string | null
    createdAt?: DateTimeFilter<"MetrologyApproval"> | Date | string
    updatedAt?: DateTimeFilter<"MetrologyApproval"> | Date | string
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    cabinet?: XOR<CabinetNullableScalarRelationFilter, CabinetWhereInput> | null
    gameMix?: XOR<GameMixNullableScalarRelationFilter, GameMixWhereInput> | null
    software?: XOR<MetrologySoftwareNullableScalarRelationFilter, MetrologySoftwareWhereInput> | null
  }

  export type MetrologyApprovalOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dataEmitere?: SortOrderInput | SortOrder
    dataExpirare?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    cabinetId?: SortOrderInput | SortOrder
    gameMixId?: SortOrderInput | SortOrder
    softwareId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    cabinet?: CabinetOrderByWithRelationInput
    gameMix?: GameMixOrderByWithRelationInput
    software?: MetrologySoftwareOrderByWithRelationInput
  }

  export type MetrologyApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetrologyApprovalWhereInput | MetrologyApprovalWhereInput[]
    OR?: MetrologyApprovalWhereInput[]
    NOT?: MetrologyApprovalWhereInput | MetrologyApprovalWhereInput[]
    name?: StringFilter<"MetrologyApproval"> | string
    dataEmitere?: DateTimeNullableFilter<"MetrologyApproval"> | Date | string | null
    dataExpirare?: DateTimeNullableFilter<"MetrologyApproval"> | Date | string | null
    providerId?: StringNullableFilter<"MetrologyApproval"> | string | null
    cabinetId?: StringNullableFilter<"MetrologyApproval"> | string | null
    gameMixId?: StringNullableFilter<"MetrologyApproval"> | string | null
    softwareId?: StringNullableFilter<"MetrologyApproval"> | string | null
    createdAt?: DateTimeFilter<"MetrologyApproval"> | Date | string
    updatedAt?: DateTimeFilter<"MetrologyApproval"> | Date | string
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    cabinet?: XOR<CabinetNullableScalarRelationFilter, CabinetWhereInput> | null
    gameMix?: XOR<GameMixNullableScalarRelationFilter, GameMixWhereInput> | null
    software?: XOR<MetrologySoftwareNullableScalarRelationFilter, MetrologySoftwareWhereInput> | null
  }, "id">

  export type MetrologyApprovalOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dataEmitere?: SortOrderInput | SortOrder
    dataExpirare?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    cabinetId?: SortOrderInput | SortOrder
    gameMixId?: SortOrderInput | SortOrder
    softwareId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetrologyApprovalCountOrderByAggregateInput
    _max?: MetrologyApprovalMaxOrderByAggregateInput
    _min?: MetrologyApprovalMinOrderByAggregateInput
  }

  export type MetrologyApprovalScalarWhereWithAggregatesInput = {
    AND?: MetrologyApprovalScalarWhereWithAggregatesInput | MetrologyApprovalScalarWhereWithAggregatesInput[]
    OR?: MetrologyApprovalScalarWhereWithAggregatesInput[]
    NOT?: MetrologyApprovalScalarWhereWithAggregatesInput | MetrologyApprovalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetrologyApproval"> | string
    name?: StringWithAggregatesFilter<"MetrologyApproval"> | string
    dataEmitere?: DateTimeNullableWithAggregatesFilter<"MetrologyApproval"> | Date | string | null
    dataExpirare?: DateTimeNullableWithAggregatesFilter<"MetrologyApproval"> | Date | string | null
    providerId?: StringNullableWithAggregatesFilter<"MetrologyApproval"> | string | null
    cabinetId?: StringNullableWithAggregatesFilter<"MetrologyApproval"> | string | null
    gameMixId?: StringNullableWithAggregatesFilter<"MetrologyApproval"> | string | null
    softwareId?: StringNullableWithAggregatesFilter<"MetrologyApproval"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MetrologyApproval"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MetrologyApproval"> | Date | string
  }

  export type MetrologyCommissionWhereInput = {
    AND?: MetrologyCommissionWhereInput | MetrologyCommissionWhereInput[]
    OR?: MetrologyCommissionWhereInput[]
    NOT?: MetrologyCommissionWhereInput | MetrologyCommissionWhereInput[]
    id?: StringFilter<"MetrologyCommission"> | string
    name?: StringFilter<"MetrologyCommission"> | string
    dataEmitere?: DateTimeNullableFilter<"MetrologyCommission"> | Date | string | null
    dataExpirare?: DateTimeNullableFilter<"MetrologyCommission"> | Date | string | null
    serialNumbers?: StringNullableFilter<"MetrologyCommission"> | string | null
    createdAt?: DateTimeFilter<"MetrologyCommission"> | Date | string
    updatedAt?: DateTimeFilter<"MetrologyCommission"> | Date | string
  }

  export type MetrologyCommissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    dataEmitere?: SortOrderInput | SortOrder
    dataExpirare?: SortOrderInput | SortOrder
    serialNumbers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyCommissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetrologyCommissionWhereInput | MetrologyCommissionWhereInput[]
    OR?: MetrologyCommissionWhereInput[]
    NOT?: MetrologyCommissionWhereInput | MetrologyCommissionWhereInput[]
    name?: StringFilter<"MetrologyCommission"> | string
    dataEmitere?: DateTimeNullableFilter<"MetrologyCommission"> | Date | string | null
    dataExpirare?: DateTimeNullableFilter<"MetrologyCommission"> | Date | string | null
    serialNumbers?: StringNullableFilter<"MetrologyCommission"> | string | null
    createdAt?: DateTimeFilter<"MetrologyCommission"> | Date | string
    updatedAt?: DateTimeFilter<"MetrologyCommission"> | Date | string
  }, "id">

  export type MetrologyCommissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    dataEmitere?: SortOrderInput | SortOrder
    dataExpirare?: SortOrderInput | SortOrder
    serialNumbers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetrologyCommissionCountOrderByAggregateInput
    _max?: MetrologyCommissionMaxOrderByAggregateInput
    _min?: MetrologyCommissionMinOrderByAggregateInput
  }

  export type MetrologyCommissionScalarWhereWithAggregatesInput = {
    AND?: MetrologyCommissionScalarWhereWithAggregatesInput | MetrologyCommissionScalarWhereWithAggregatesInput[]
    OR?: MetrologyCommissionScalarWhereWithAggregatesInput[]
    NOT?: MetrologyCommissionScalarWhereWithAggregatesInput | MetrologyCommissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetrologyCommission"> | string
    name?: StringWithAggregatesFilter<"MetrologyCommission"> | string
    dataEmitere?: DateTimeNullableWithAggregatesFilter<"MetrologyCommission"> | Date | string | null
    dataExpirare?: DateTimeNullableWithAggregatesFilter<"MetrologyCommission"> | Date | string | null
    serialNumbers?: StringNullableWithAggregatesFilter<"MetrologyCommission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MetrologyCommission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MetrologyCommission"> | Date | string
  }

  export type MetrologyAuthorityWhereInput = {
    AND?: MetrologyAuthorityWhereInput | MetrologyAuthorityWhereInput[]
    OR?: MetrologyAuthorityWhereInput[]
    NOT?: MetrologyAuthorityWhereInput | MetrologyAuthorityWhereInput[]
    id?: StringFilter<"MetrologyAuthority"> | string
    name?: StringFilter<"MetrologyAuthority"> | string
    address?: StringNullableFilter<"MetrologyAuthority"> | string | null
    createdAt?: DateTimeFilter<"MetrologyAuthority"> | Date | string
    updatedAt?: DateTimeFilter<"MetrologyAuthority"> | Date | string
  }

  export type MetrologyAuthorityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyAuthorityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: MetrologyAuthorityWhereInput | MetrologyAuthorityWhereInput[]
    OR?: MetrologyAuthorityWhereInput[]
    NOT?: MetrologyAuthorityWhereInput | MetrologyAuthorityWhereInput[]
    address?: StringNullableFilter<"MetrologyAuthority"> | string | null
    createdAt?: DateTimeFilter<"MetrologyAuthority"> | Date | string
    updatedAt?: DateTimeFilter<"MetrologyAuthority"> | Date | string
  }, "id" | "name">

  export type MetrologyAuthorityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetrologyAuthorityCountOrderByAggregateInput
    _max?: MetrologyAuthorityMaxOrderByAggregateInput
    _min?: MetrologyAuthorityMinOrderByAggregateInput
  }

  export type MetrologyAuthorityScalarWhereWithAggregatesInput = {
    AND?: MetrologyAuthorityScalarWhereWithAggregatesInput | MetrologyAuthorityScalarWhereWithAggregatesInput[]
    OR?: MetrologyAuthorityScalarWhereWithAggregatesInput[]
    NOT?: MetrologyAuthorityScalarWhereWithAggregatesInput | MetrologyAuthorityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetrologyAuthority"> | string
    name?: StringWithAggregatesFilter<"MetrologyAuthority"> | string
    address?: StringNullableWithAggregatesFilter<"MetrologyAuthority"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MetrologyAuthority"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MetrologyAuthority"> | Date | string
  }

  export type MetrologySoftwareWhereInput = {
    AND?: MetrologySoftwareWhereInput | MetrologySoftwareWhereInput[]
    OR?: MetrologySoftwareWhereInput[]
    NOT?: MetrologySoftwareWhereInput | MetrologySoftwareWhereInput[]
    id?: StringFilter<"MetrologySoftware"> | string
    name?: StringFilter<"MetrologySoftware"> | string
    version?: StringNullableFilter<"MetrologySoftware"> | string | null
    providerId?: StringNullableFilter<"MetrologySoftware"> | string | null
    cabinetId?: StringNullableFilter<"MetrologySoftware"> | string | null
    gameMixId?: StringNullableFilter<"MetrologySoftware"> | string | null
    serialNumbers?: StringNullableFilter<"MetrologySoftware"> | string | null
    createdAt?: DateTimeFilter<"MetrologySoftware"> | Date | string
    updatedAt?: DateTimeFilter<"MetrologySoftware"> | Date | string
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    cabinet?: XOR<CabinetNullableScalarRelationFilter, CabinetWhereInput> | null
    gameMix?: XOR<GameMixNullableScalarRelationFilter, GameMixWhereInput> | null
    approvals?: MetrologyApprovalListRelationFilter
  }

  export type MetrologySoftwareOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    cabinetId?: SortOrderInput | SortOrder
    gameMixId?: SortOrderInput | SortOrder
    serialNumbers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    cabinet?: CabinetOrderByWithRelationInput
    gameMix?: GameMixOrderByWithRelationInput
    approvals?: MetrologyApprovalOrderByRelationAggregateInput
  }

  export type MetrologySoftwareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MetrologySoftwareWhereInput | MetrologySoftwareWhereInput[]
    OR?: MetrologySoftwareWhereInput[]
    NOT?: MetrologySoftwareWhereInput | MetrologySoftwareWhereInput[]
    name?: StringFilter<"MetrologySoftware"> | string
    version?: StringNullableFilter<"MetrologySoftware"> | string | null
    providerId?: StringNullableFilter<"MetrologySoftware"> | string | null
    cabinetId?: StringNullableFilter<"MetrologySoftware"> | string | null
    gameMixId?: StringNullableFilter<"MetrologySoftware"> | string | null
    serialNumbers?: StringNullableFilter<"MetrologySoftware"> | string | null
    createdAt?: DateTimeFilter<"MetrologySoftware"> | Date | string
    updatedAt?: DateTimeFilter<"MetrologySoftware"> | Date | string
    provider?: XOR<ProviderNullableScalarRelationFilter, ProviderWhereInput> | null
    cabinet?: XOR<CabinetNullableScalarRelationFilter, CabinetWhereInput> | null
    gameMix?: XOR<GameMixNullableScalarRelationFilter, GameMixWhereInput> | null
    approvals?: MetrologyApprovalListRelationFilter
  }, "id">

  export type MetrologySoftwareOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrderInput | SortOrder
    providerId?: SortOrderInput | SortOrder
    cabinetId?: SortOrderInput | SortOrder
    gameMixId?: SortOrderInput | SortOrder
    serialNumbers?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MetrologySoftwareCountOrderByAggregateInput
    _max?: MetrologySoftwareMaxOrderByAggregateInput
    _min?: MetrologySoftwareMinOrderByAggregateInput
  }

  export type MetrologySoftwareScalarWhereWithAggregatesInput = {
    AND?: MetrologySoftwareScalarWhereWithAggregatesInput | MetrologySoftwareScalarWhereWithAggregatesInput[]
    OR?: MetrologySoftwareScalarWhereWithAggregatesInput[]
    NOT?: MetrologySoftwareScalarWhereWithAggregatesInput | MetrologySoftwareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MetrologySoftware"> | string
    name?: StringWithAggregatesFilter<"MetrologySoftware"> | string
    version?: StringNullableWithAggregatesFilter<"MetrologySoftware"> | string | null
    providerId?: StringNullableWithAggregatesFilter<"MetrologySoftware"> | string | null
    cabinetId?: StringNullableWithAggregatesFilter<"MetrologySoftware"> | string | null
    gameMixId?: StringNullableWithAggregatesFilter<"MetrologySoftware"> | string | null
    serialNumbers?: StringNullableWithAggregatesFilter<"MetrologySoftware"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MetrologySoftware"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MetrologySoftware"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    role?: SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProviderCreateInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetCreateNestedManyWithoutProviderInput
    gameMixes?: GameMixCreateNestedManyWithoutProviderInput
    slots?: SlotMachineCreateNestedManyWithoutProviderInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutProviderInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetUncheckedCreateNestedManyWithoutProviderInput
    gameMixes?: GameMixUncheckedCreateNestedManyWithoutProviderInput
    slots?: SlotMachineUncheckedCreateNestedManyWithoutProviderInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutProviderInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUpdateManyWithoutProviderNestedInput
    gameMixes?: GameMixUpdateManyWithoutProviderNestedInput
    slots?: SlotMachineUpdateManyWithoutProviderNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutProviderNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUncheckedUpdateManyWithoutProviderNestedInput
    gameMixes?: GameMixUncheckedUpdateManyWithoutProviderNestedInput
    slots?: SlotMachineUncheckedUpdateManyWithoutProviderNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutProviderNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineCreateNestedManyWithoutLocationInput
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineUncheckedCreateNestedManyWithoutLocationInput
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUncheckedUpdateManyWithoutLocationNestedInput
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetCreateInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutCabinetsInput
    slots?: SlotMachineCreateNestedManyWithoutCabinetInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutCabinetInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineUncheckedCreateNestedManyWithoutCabinetInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutCabinetInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutCabinetsNestedInput
    slots?: SlotMachineUpdateManyWithoutCabinetNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutCabinetNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUncheckedUpdateManyWithoutCabinetNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutCabinetNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetCreateManyInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CabinetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameMixCreateInput = {
    id?: string
    name: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutGameMixesInput
    slots?: SlotMachineCreateNestedManyWithoutGameMixInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutGameMixInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutGameMixInput
  }

  export type GameMixUncheckedCreateInput = {
    id?: string
    name: string
    providerId: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineUncheckedCreateNestedManyWithoutGameMixInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutGameMixInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutGameMixInput
  }

  export type GameMixUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutGameMixesNestedInput
    slots?: SlotMachineUpdateManyWithoutGameMixNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutGameMixNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutGameMixNestedInput
  }

  export type GameMixUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUncheckedUpdateManyWithoutGameMixNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutGameMixNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutGameMixNestedInput
  }

  export type GameMixCreateManyInput = {
    id?: string
    name: string
    providerId: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameMixUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameMixUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineCreateInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutSlotsInput
    cabinet: CabinetCreateNestedOneWithoutSlotsInput
    gameMix?: GameMixCreateNestedOneWithoutSlotsInput
    location?: LocationCreateNestedOneWithoutSlotsInput
  }

  export type SlotMachineUncheckedCreateInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    providerId: string
    cabinetId: string
    gameMixId?: string | null
    locationId?: string | null
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotMachineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutSlotsNestedInput
    cabinet?: CabinetUpdateOneRequiredWithoutSlotsNestedInput
    gameMix?: GameMixUpdateOneWithoutSlotsNestedInput
    location?: LocationUpdateOneWithoutSlotsNestedInput
  }

  export type SlotMachineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    cabinetId?: StringFieldUpdateOperationsInput | string
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineCreateManyInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    providerId: string
    cabinetId: string
    gameMixId?: string | null
    locationId?: string | null
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotMachineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    cabinetId?: StringFieldUpdateOperationsInput | string
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    phone?: string | null
    email?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateInput = {
    id?: string
    invoiceNumber: string
    amount: number
    currency?: string
    status?: string
    serialNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    location?: LocationCreateNestedOneWithoutInvoicesInput
  }

  export type InvoiceUncheckedCreateInput = {
    id?: string
    invoiceNumber: string
    amount: number
    currency?: string
    status?: string
    serialNumber?: string | null
    locationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: LocationUpdateOneWithoutInvoicesNestedInput
  }

  export type InvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceCreateManyInput = {
    id?: string
    invoiceNumber: string
    amount: number
    currency?: string
    status?: string
    serialNumber?: string | null
    locationId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformCreateInput = {
    id?: string
    name: string
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformUncheckedCreateInput = {
    id?: string
    name: string
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformCreateManyInput = {
    id?: string
    name: string
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlatformUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlatformUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyCreateInput = {
    id?: string
    serialNumber: string
    certificateType?: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyUncheckedCreateInput = {
    id?: string
    serialNumber: string
    certificateType?: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    certificateType?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    certificateType?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyCreateManyInput = {
    id?: string
    serialNumber: string
    certificateType?: string
    issueDate?: Date | string | null
    expiryDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    certificateType?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    certificateType?: StringFieldUpdateOperationsInput | string
    issueDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalCreateInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutMetrologyApprovalsInput
    cabinet?: CabinetCreateNestedOneWithoutMetrologyApprovalsInput
    gameMix?: GameMixCreateNestedOneWithoutMetrologyApprovalsInput
    software?: MetrologySoftwareCreateNestedOneWithoutApprovalsInput
  }

  export type MetrologyApprovalUncheckedCreateInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    providerId?: string | null
    cabinetId?: string | null
    gameMixId?: string | null
    softwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyApprovalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutMetrologyApprovalsNestedInput
    cabinet?: CabinetUpdateOneWithoutMetrologyApprovalsNestedInput
    gameMix?: GameMixUpdateOneWithoutMetrologyApprovalsNestedInput
    software?: MetrologySoftwareUpdateOneWithoutApprovalsNestedInput
  }

  export type MetrologyApprovalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    softwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalCreateManyInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    providerId?: string | null
    cabinetId?: string | null
    gameMixId?: string | null
    softwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyApprovalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    softwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyCommissionCreateInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyCommissionUncheckedCreateInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyCommissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyCommissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyCommissionCreateManyInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyCommissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyCommissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyAuthorityCreateInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyAuthorityUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyAuthorityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyAuthorityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyAuthorityCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyAuthorityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyAuthorityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologySoftwareCreateInput = {
    id?: string
    name: string
    version?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutMetrologySoftwareInput
    cabinet?: CabinetCreateNestedOneWithoutMetrologySoftwareInput
    gameMix?: GameMixCreateNestedOneWithoutMetrologySoftwareInput
    approvals?: MetrologyApprovalCreateNestedManyWithoutSoftwareInput
  }

  export type MetrologySoftwareUncheckedCreateInput = {
    id?: string
    name: string
    version?: string | null
    providerId?: string | null
    cabinetId?: string | null
    gameMixId?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: MetrologyApprovalUncheckedCreateNestedManyWithoutSoftwareInput
  }

  export type MetrologySoftwareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutMetrologySoftwareNestedInput
    cabinet?: CabinetUpdateOneWithoutMetrologySoftwareNestedInput
    gameMix?: GameMixUpdateOneWithoutMetrologySoftwareNestedInput
    approvals?: MetrologyApprovalUpdateManyWithoutSoftwareNestedInput
  }

  export type MetrologySoftwareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: MetrologyApprovalUncheckedUpdateManyWithoutSoftwareNestedInput
  }

  export type MetrologySoftwareCreateManyInput = {
    id?: string
    name: string
    version?: string | null
    providerId?: string | null
    cabinetId?: string | null
    gameMixId?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologySoftwareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologySoftwareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email?: string | null
    role?: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CabinetListRelationFilter = {
    every?: CabinetWhereInput
    some?: CabinetWhereInput
    none?: CabinetWhereInput
  }

  export type GameMixListRelationFilter = {
    every?: GameMixWhereInput
    some?: GameMixWhereInput
    none?: GameMixWhereInput
  }

  export type SlotMachineListRelationFilter = {
    every?: SlotMachineWhereInput
    some?: SlotMachineWhereInput
    none?: SlotMachineWhereInput
  }

  export type MetrologyApprovalListRelationFilter = {
    every?: MetrologyApprovalWhereInput
    some?: MetrologyApprovalWhereInput
    none?: MetrologyApprovalWhereInput
  }

  export type MetrologySoftwareListRelationFilter = {
    every?: MetrologySoftwareWhereInput
    some?: MetrologySoftwareWhereInput
    none?: MetrologySoftwareWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CabinetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameMixOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SlotMachineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetrologyApprovalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MetrologySoftwareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
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

  export type InvoiceListRelationFilter = {
    every?: InvoiceWhereInput
    some?: InvoiceWhereInput
    none?: InvoiceWhereInput
  }

  export type InvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderScalarRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type CabinetNameManufacturerCompoundUniqueInput = {
    name: string
    manufacturer: string
  }

  export type CabinetCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    manufacturer?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabinetMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    manufacturer?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabinetMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    model?: SortOrder
    manufacturer?: SortOrder
    providerId?: SortOrder
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

  export type GameMixNameProviderIdCompoundUniqueInput = {
    name: string
    providerId: string
  }

  export type GameMixCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    games?: SortOrder
    gameCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMixAvgOrderByAggregateInput = {
    gameCount?: SortOrder
  }

  export type GameMixMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    games?: SortOrder
    gameCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMixMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    providerId?: SortOrder
    games?: SortOrder
    gameCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMixSumOrderByAggregateInput = {
    gameCount?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type CabinetScalarRelationFilter = {
    is?: CabinetWhereInput
    isNot?: CabinetWhereInput
  }

  export type GameMixNullableScalarRelationFilter = {
    is?: GameMixWhereInput | null
    isNot?: GameMixWhereInput | null
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type SlotMachineCountOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    manufacturer?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrder
    locationId?: SortOrder
    productionYear?: SortOrder
    denomination?: SortOrder
    maxBet?: SortOrder
    rtp?: SortOrder
    gamingPlaces?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlotMachineAvgOrderByAggregateInput = {
    productionYear?: SortOrder
    denomination?: SortOrder
    maxBet?: SortOrder
    rtp?: SortOrder
    gamingPlaces?: SortOrder
  }

  export type SlotMachineMaxOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    manufacturer?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrder
    locationId?: SortOrder
    productionYear?: SortOrder
    denomination?: SortOrder
    maxBet?: SortOrder
    rtp?: SortOrder
    gamingPlaces?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlotMachineMinOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    manufacturer?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrder
    locationId?: SortOrder
    productionYear?: SortOrder
    denomination?: SortOrder
    maxBet?: SortOrder
    rtp?: SortOrder
    gamingPlaces?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SlotMachineSumOrderByAggregateInput = {
    productionYear?: SortOrder
    denomination?: SortOrder
    maxBet?: SortOrder
    rtp?: SortOrder
    gamingPlaces?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type InvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    serialNumber?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type InvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    serialNumber?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    invoiceNumber?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    serialNumber?: SortOrder
    locationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type PlatformCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumbers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumbers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlatformMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    serialNumbers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type MetrologyCountOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    certificateType?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyMaxOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    certificateType?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyMinOrderByAggregateInput = {
    id?: SortOrder
    serialNumber?: SortOrder
    certificateType?: SortOrder
    issueDate?: SortOrder
    expiryDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type ProviderNullableScalarRelationFilter = {
    is?: ProviderWhereInput | null
    isNot?: ProviderWhereInput | null
  }

  export type CabinetNullableScalarRelationFilter = {
    is?: CabinetWhereInput | null
    isNot?: CabinetWhereInput | null
  }

  export type MetrologySoftwareNullableScalarRelationFilter = {
    is?: MetrologySoftwareWhereInput | null
    isNot?: MetrologySoftwareWhereInput | null
  }

  export type MetrologyApprovalCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dataEmitere?: SortOrder
    dataExpirare?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrder
    softwareId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyApprovalMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dataEmitere?: SortOrder
    dataExpirare?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrder
    softwareId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyApprovalMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dataEmitere?: SortOrder
    dataExpirare?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrder
    softwareId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyCommissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dataEmitere?: SortOrder
    dataExpirare?: SortOrder
    serialNumbers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyCommissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dataEmitere?: SortOrder
    dataExpirare?: SortOrder
    serialNumbers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyCommissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    dataEmitere?: SortOrder
    dataExpirare?: SortOrder
    serialNumbers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyAuthorityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyAuthorityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologyAuthorityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologySoftwareCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrder
    serialNumbers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologySoftwareMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrder
    serialNumbers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MetrologySoftwareMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    version?: SortOrder
    providerId?: SortOrder
    cabinetId?: SortOrder
    gameMixId?: SortOrder
    serialNumbers?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    role?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CabinetCreateNestedManyWithoutProviderInput = {
    create?: XOR<CabinetCreateWithoutProviderInput, CabinetUncheckedCreateWithoutProviderInput> | CabinetCreateWithoutProviderInput[] | CabinetUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutProviderInput | CabinetCreateOrConnectWithoutProviderInput[]
    createMany?: CabinetCreateManyProviderInputEnvelope
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
  }

  export type GameMixCreateNestedManyWithoutProviderInput = {
    create?: XOR<GameMixCreateWithoutProviderInput, GameMixUncheckedCreateWithoutProviderInput> | GameMixCreateWithoutProviderInput[] | GameMixUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: GameMixCreateOrConnectWithoutProviderInput | GameMixCreateOrConnectWithoutProviderInput[]
    createMany?: GameMixCreateManyProviderInputEnvelope
    connect?: GameMixWhereUniqueInput | GameMixWhereUniqueInput[]
  }

  export type SlotMachineCreateNestedManyWithoutProviderInput = {
    create?: XOR<SlotMachineCreateWithoutProviderInput, SlotMachineUncheckedCreateWithoutProviderInput> | SlotMachineCreateWithoutProviderInput[] | SlotMachineUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutProviderInput | SlotMachineCreateOrConnectWithoutProviderInput[]
    createMany?: SlotMachineCreateManyProviderInputEnvelope
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
  }

  export type MetrologyApprovalCreateNestedManyWithoutProviderInput = {
    create?: XOR<MetrologyApprovalCreateWithoutProviderInput, MetrologyApprovalUncheckedCreateWithoutProviderInput> | MetrologyApprovalCreateWithoutProviderInput[] | MetrologyApprovalUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutProviderInput | MetrologyApprovalCreateOrConnectWithoutProviderInput[]
    createMany?: MetrologyApprovalCreateManyProviderInputEnvelope
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
  }

  export type MetrologySoftwareCreateNestedManyWithoutProviderInput = {
    create?: XOR<MetrologySoftwareCreateWithoutProviderInput, MetrologySoftwareUncheckedCreateWithoutProviderInput> | MetrologySoftwareCreateWithoutProviderInput[] | MetrologySoftwareUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutProviderInput | MetrologySoftwareCreateOrConnectWithoutProviderInput[]
    createMany?: MetrologySoftwareCreateManyProviderInputEnvelope
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
  }

  export type CabinetUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<CabinetCreateWithoutProviderInput, CabinetUncheckedCreateWithoutProviderInput> | CabinetCreateWithoutProviderInput[] | CabinetUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutProviderInput | CabinetCreateOrConnectWithoutProviderInput[]
    createMany?: CabinetCreateManyProviderInputEnvelope
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
  }

  export type GameMixUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<GameMixCreateWithoutProviderInput, GameMixUncheckedCreateWithoutProviderInput> | GameMixCreateWithoutProviderInput[] | GameMixUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: GameMixCreateOrConnectWithoutProviderInput | GameMixCreateOrConnectWithoutProviderInput[]
    createMany?: GameMixCreateManyProviderInputEnvelope
    connect?: GameMixWhereUniqueInput | GameMixWhereUniqueInput[]
  }

  export type SlotMachineUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<SlotMachineCreateWithoutProviderInput, SlotMachineUncheckedCreateWithoutProviderInput> | SlotMachineCreateWithoutProviderInput[] | SlotMachineUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutProviderInput | SlotMachineCreateOrConnectWithoutProviderInput[]
    createMany?: SlotMachineCreateManyProviderInputEnvelope
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
  }

  export type MetrologyApprovalUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<MetrologyApprovalCreateWithoutProviderInput, MetrologyApprovalUncheckedCreateWithoutProviderInput> | MetrologyApprovalCreateWithoutProviderInput[] | MetrologyApprovalUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutProviderInput | MetrologyApprovalCreateOrConnectWithoutProviderInput[]
    createMany?: MetrologyApprovalCreateManyProviderInputEnvelope
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
  }

  export type MetrologySoftwareUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<MetrologySoftwareCreateWithoutProviderInput, MetrologySoftwareUncheckedCreateWithoutProviderInput> | MetrologySoftwareCreateWithoutProviderInput[] | MetrologySoftwareUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutProviderInput | MetrologySoftwareCreateOrConnectWithoutProviderInput[]
    createMany?: MetrologySoftwareCreateManyProviderInputEnvelope
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
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

  export type CabinetUpdateManyWithoutProviderNestedInput = {
    create?: XOR<CabinetCreateWithoutProviderInput, CabinetUncheckedCreateWithoutProviderInput> | CabinetCreateWithoutProviderInput[] | CabinetUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutProviderInput | CabinetCreateOrConnectWithoutProviderInput[]
    upsert?: CabinetUpsertWithWhereUniqueWithoutProviderInput | CabinetUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: CabinetCreateManyProviderInputEnvelope
    set?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    disconnect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    delete?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    update?: CabinetUpdateWithWhereUniqueWithoutProviderInput | CabinetUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: CabinetUpdateManyWithWhereWithoutProviderInput | CabinetUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
  }

  export type GameMixUpdateManyWithoutProviderNestedInput = {
    create?: XOR<GameMixCreateWithoutProviderInput, GameMixUncheckedCreateWithoutProviderInput> | GameMixCreateWithoutProviderInput[] | GameMixUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: GameMixCreateOrConnectWithoutProviderInput | GameMixCreateOrConnectWithoutProviderInput[]
    upsert?: GameMixUpsertWithWhereUniqueWithoutProviderInput | GameMixUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: GameMixCreateManyProviderInputEnvelope
    set?: GameMixWhereUniqueInput | GameMixWhereUniqueInput[]
    disconnect?: GameMixWhereUniqueInput | GameMixWhereUniqueInput[]
    delete?: GameMixWhereUniqueInput | GameMixWhereUniqueInput[]
    connect?: GameMixWhereUniqueInput | GameMixWhereUniqueInput[]
    update?: GameMixUpdateWithWhereUniqueWithoutProviderInput | GameMixUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: GameMixUpdateManyWithWhereWithoutProviderInput | GameMixUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: GameMixScalarWhereInput | GameMixScalarWhereInput[]
  }

  export type SlotMachineUpdateManyWithoutProviderNestedInput = {
    create?: XOR<SlotMachineCreateWithoutProviderInput, SlotMachineUncheckedCreateWithoutProviderInput> | SlotMachineCreateWithoutProviderInput[] | SlotMachineUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutProviderInput | SlotMachineCreateOrConnectWithoutProviderInput[]
    upsert?: SlotMachineUpsertWithWhereUniqueWithoutProviderInput | SlotMachineUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: SlotMachineCreateManyProviderInputEnvelope
    set?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    disconnect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    delete?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    update?: SlotMachineUpdateWithWhereUniqueWithoutProviderInput | SlotMachineUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: SlotMachineUpdateManyWithWhereWithoutProviderInput | SlotMachineUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: SlotMachineScalarWhereInput | SlotMachineScalarWhereInput[]
  }

  export type MetrologyApprovalUpdateManyWithoutProviderNestedInput = {
    create?: XOR<MetrologyApprovalCreateWithoutProviderInput, MetrologyApprovalUncheckedCreateWithoutProviderInput> | MetrologyApprovalCreateWithoutProviderInput[] | MetrologyApprovalUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutProviderInput | MetrologyApprovalCreateOrConnectWithoutProviderInput[]
    upsert?: MetrologyApprovalUpsertWithWhereUniqueWithoutProviderInput | MetrologyApprovalUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: MetrologyApprovalCreateManyProviderInputEnvelope
    set?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    disconnect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    delete?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    update?: MetrologyApprovalUpdateWithWhereUniqueWithoutProviderInput | MetrologyApprovalUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: MetrologyApprovalUpdateManyWithWhereWithoutProviderInput | MetrologyApprovalUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: MetrologyApprovalScalarWhereInput | MetrologyApprovalScalarWhereInput[]
  }

  export type MetrologySoftwareUpdateManyWithoutProviderNestedInput = {
    create?: XOR<MetrologySoftwareCreateWithoutProviderInput, MetrologySoftwareUncheckedCreateWithoutProviderInput> | MetrologySoftwareCreateWithoutProviderInput[] | MetrologySoftwareUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutProviderInput | MetrologySoftwareCreateOrConnectWithoutProviderInput[]
    upsert?: MetrologySoftwareUpsertWithWhereUniqueWithoutProviderInput | MetrologySoftwareUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: MetrologySoftwareCreateManyProviderInputEnvelope
    set?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    disconnect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    delete?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    update?: MetrologySoftwareUpdateWithWhereUniqueWithoutProviderInput | MetrologySoftwareUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: MetrologySoftwareUpdateManyWithWhereWithoutProviderInput | MetrologySoftwareUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: MetrologySoftwareScalarWhereInput | MetrologySoftwareScalarWhereInput[]
  }

  export type CabinetUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<CabinetCreateWithoutProviderInput, CabinetUncheckedCreateWithoutProviderInput> | CabinetCreateWithoutProviderInput[] | CabinetUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: CabinetCreateOrConnectWithoutProviderInput | CabinetCreateOrConnectWithoutProviderInput[]
    upsert?: CabinetUpsertWithWhereUniqueWithoutProviderInput | CabinetUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: CabinetCreateManyProviderInputEnvelope
    set?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    disconnect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    delete?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    connect?: CabinetWhereUniqueInput | CabinetWhereUniqueInput[]
    update?: CabinetUpdateWithWhereUniqueWithoutProviderInput | CabinetUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: CabinetUpdateManyWithWhereWithoutProviderInput | CabinetUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
  }

  export type GameMixUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<GameMixCreateWithoutProviderInput, GameMixUncheckedCreateWithoutProviderInput> | GameMixCreateWithoutProviderInput[] | GameMixUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: GameMixCreateOrConnectWithoutProviderInput | GameMixCreateOrConnectWithoutProviderInput[]
    upsert?: GameMixUpsertWithWhereUniqueWithoutProviderInput | GameMixUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: GameMixCreateManyProviderInputEnvelope
    set?: GameMixWhereUniqueInput | GameMixWhereUniqueInput[]
    disconnect?: GameMixWhereUniqueInput | GameMixWhereUniqueInput[]
    delete?: GameMixWhereUniqueInput | GameMixWhereUniqueInput[]
    connect?: GameMixWhereUniqueInput | GameMixWhereUniqueInput[]
    update?: GameMixUpdateWithWhereUniqueWithoutProviderInput | GameMixUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: GameMixUpdateManyWithWhereWithoutProviderInput | GameMixUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: GameMixScalarWhereInput | GameMixScalarWhereInput[]
  }

  export type SlotMachineUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<SlotMachineCreateWithoutProviderInput, SlotMachineUncheckedCreateWithoutProviderInput> | SlotMachineCreateWithoutProviderInput[] | SlotMachineUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutProviderInput | SlotMachineCreateOrConnectWithoutProviderInput[]
    upsert?: SlotMachineUpsertWithWhereUniqueWithoutProviderInput | SlotMachineUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: SlotMachineCreateManyProviderInputEnvelope
    set?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    disconnect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    delete?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    update?: SlotMachineUpdateWithWhereUniqueWithoutProviderInput | SlotMachineUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: SlotMachineUpdateManyWithWhereWithoutProviderInput | SlotMachineUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: SlotMachineScalarWhereInput | SlotMachineScalarWhereInput[]
  }

  export type MetrologyApprovalUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<MetrologyApprovalCreateWithoutProviderInput, MetrologyApprovalUncheckedCreateWithoutProviderInput> | MetrologyApprovalCreateWithoutProviderInput[] | MetrologyApprovalUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutProviderInput | MetrologyApprovalCreateOrConnectWithoutProviderInput[]
    upsert?: MetrologyApprovalUpsertWithWhereUniqueWithoutProviderInput | MetrologyApprovalUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: MetrologyApprovalCreateManyProviderInputEnvelope
    set?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    disconnect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    delete?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    update?: MetrologyApprovalUpdateWithWhereUniqueWithoutProviderInput | MetrologyApprovalUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: MetrologyApprovalUpdateManyWithWhereWithoutProviderInput | MetrologyApprovalUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: MetrologyApprovalScalarWhereInput | MetrologyApprovalScalarWhereInput[]
  }

  export type MetrologySoftwareUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<MetrologySoftwareCreateWithoutProviderInput, MetrologySoftwareUncheckedCreateWithoutProviderInput> | MetrologySoftwareCreateWithoutProviderInput[] | MetrologySoftwareUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutProviderInput | MetrologySoftwareCreateOrConnectWithoutProviderInput[]
    upsert?: MetrologySoftwareUpsertWithWhereUniqueWithoutProviderInput | MetrologySoftwareUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: MetrologySoftwareCreateManyProviderInputEnvelope
    set?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    disconnect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    delete?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    update?: MetrologySoftwareUpdateWithWhereUniqueWithoutProviderInput | MetrologySoftwareUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: MetrologySoftwareUpdateManyWithWhereWithoutProviderInput | MetrologySoftwareUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: MetrologySoftwareScalarWhereInput | MetrologySoftwareScalarWhereInput[]
  }

  export type SlotMachineCreateNestedManyWithoutLocationInput = {
    create?: XOR<SlotMachineCreateWithoutLocationInput, SlotMachineUncheckedCreateWithoutLocationInput> | SlotMachineCreateWithoutLocationInput[] | SlotMachineUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutLocationInput | SlotMachineCreateOrConnectWithoutLocationInput[]
    createMany?: SlotMachineCreateManyLocationInputEnvelope
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
  }

  export type InvoiceCreateNestedManyWithoutLocationInput = {
    create?: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput> | InvoiceCreateWithoutLocationInput[] | InvoiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutLocationInput | InvoiceCreateOrConnectWithoutLocationInput[]
    createMany?: InvoiceCreateManyLocationInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type SlotMachineUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<SlotMachineCreateWithoutLocationInput, SlotMachineUncheckedCreateWithoutLocationInput> | SlotMachineCreateWithoutLocationInput[] | SlotMachineUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutLocationInput | SlotMachineCreateOrConnectWithoutLocationInput[]
    createMany?: SlotMachineCreateManyLocationInputEnvelope
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
  }

  export type InvoiceUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput> | InvoiceCreateWithoutLocationInput[] | InvoiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutLocationInput | InvoiceCreateOrConnectWithoutLocationInput[]
    createMany?: InvoiceCreateManyLocationInputEnvelope
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
  }

  export type SlotMachineUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SlotMachineCreateWithoutLocationInput, SlotMachineUncheckedCreateWithoutLocationInput> | SlotMachineCreateWithoutLocationInput[] | SlotMachineUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutLocationInput | SlotMachineCreateOrConnectWithoutLocationInput[]
    upsert?: SlotMachineUpsertWithWhereUniqueWithoutLocationInput | SlotMachineUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SlotMachineCreateManyLocationInputEnvelope
    set?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    disconnect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    delete?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    update?: SlotMachineUpdateWithWhereUniqueWithoutLocationInput | SlotMachineUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SlotMachineUpdateManyWithWhereWithoutLocationInput | SlotMachineUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SlotMachineScalarWhereInput | SlotMachineScalarWhereInput[]
  }

  export type InvoiceUpdateManyWithoutLocationNestedInput = {
    create?: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput> | InvoiceCreateWithoutLocationInput[] | InvoiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutLocationInput | InvoiceCreateOrConnectWithoutLocationInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutLocationInput | InvoiceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: InvoiceCreateManyLocationInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutLocationInput | InvoiceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutLocationInput | InvoiceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type SlotMachineUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<SlotMachineCreateWithoutLocationInput, SlotMachineUncheckedCreateWithoutLocationInput> | SlotMachineCreateWithoutLocationInput[] | SlotMachineUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutLocationInput | SlotMachineCreateOrConnectWithoutLocationInput[]
    upsert?: SlotMachineUpsertWithWhereUniqueWithoutLocationInput | SlotMachineUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: SlotMachineCreateManyLocationInputEnvelope
    set?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    disconnect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    delete?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    update?: SlotMachineUpdateWithWhereUniqueWithoutLocationInput | SlotMachineUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: SlotMachineUpdateManyWithWhereWithoutLocationInput | SlotMachineUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: SlotMachineScalarWhereInput | SlotMachineScalarWhereInput[]
  }

  export type InvoiceUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput> | InvoiceCreateWithoutLocationInput[] | InvoiceUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: InvoiceCreateOrConnectWithoutLocationInput | InvoiceCreateOrConnectWithoutLocationInput[]
    upsert?: InvoiceUpsertWithWhereUniqueWithoutLocationInput | InvoiceUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: InvoiceCreateManyLocationInputEnvelope
    set?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    disconnect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    delete?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    connect?: InvoiceWhereUniqueInput | InvoiceWhereUniqueInput[]
    update?: InvoiceUpdateWithWhereUniqueWithoutLocationInput | InvoiceUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: InvoiceUpdateManyWithWhereWithoutLocationInput | InvoiceUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
  }

  export type ProviderCreateNestedOneWithoutCabinetsInput = {
    create?: XOR<ProviderCreateWithoutCabinetsInput, ProviderUncheckedCreateWithoutCabinetsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutCabinetsInput
    connect?: ProviderWhereUniqueInput
  }

  export type SlotMachineCreateNestedManyWithoutCabinetInput = {
    create?: XOR<SlotMachineCreateWithoutCabinetInput, SlotMachineUncheckedCreateWithoutCabinetInput> | SlotMachineCreateWithoutCabinetInput[] | SlotMachineUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutCabinetInput | SlotMachineCreateOrConnectWithoutCabinetInput[]
    createMany?: SlotMachineCreateManyCabinetInputEnvelope
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
  }

  export type MetrologyApprovalCreateNestedManyWithoutCabinetInput = {
    create?: XOR<MetrologyApprovalCreateWithoutCabinetInput, MetrologyApprovalUncheckedCreateWithoutCabinetInput> | MetrologyApprovalCreateWithoutCabinetInput[] | MetrologyApprovalUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutCabinetInput | MetrologyApprovalCreateOrConnectWithoutCabinetInput[]
    createMany?: MetrologyApprovalCreateManyCabinetInputEnvelope
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
  }

  export type MetrologySoftwareCreateNestedManyWithoutCabinetInput = {
    create?: XOR<MetrologySoftwareCreateWithoutCabinetInput, MetrologySoftwareUncheckedCreateWithoutCabinetInput> | MetrologySoftwareCreateWithoutCabinetInput[] | MetrologySoftwareUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutCabinetInput | MetrologySoftwareCreateOrConnectWithoutCabinetInput[]
    createMany?: MetrologySoftwareCreateManyCabinetInputEnvelope
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
  }

  export type SlotMachineUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<SlotMachineCreateWithoutCabinetInput, SlotMachineUncheckedCreateWithoutCabinetInput> | SlotMachineCreateWithoutCabinetInput[] | SlotMachineUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutCabinetInput | SlotMachineCreateOrConnectWithoutCabinetInput[]
    createMany?: SlotMachineCreateManyCabinetInputEnvelope
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
  }

  export type MetrologyApprovalUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<MetrologyApprovalCreateWithoutCabinetInput, MetrologyApprovalUncheckedCreateWithoutCabinetInput> | MetrologyApprovalCreateWithoutCabinetInput[] | MetrologyApprovalUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutCabinetInput | MetrologyApprovalCreateOrConnectWithoutCabinetInput[]
    createMany?: MetrologyApprovalCreateManyCabinetInputEnvelope
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
  }

  export type MetrologySoftwareUncheckedCreateNestedManyWithoutCabinetInput = {
    create?: XOR<MetrologySoftwareCreateWithoutCabinetInput, MetrologySoftwareUncheckedCreateWithoutCabinetInput> | MetrologySoftwareCreateWithoutCabinetInput[] | MetrologySoftwareUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutCabinetInput | MetrologySoftwareCreateOrConnectWithoutCabinetInput[]
    createMany?: MetrologySoftwareCreateManyCabinetInputEnvelope
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
  }

  export type ProviderUpdateOneRequiredWithoutCabinetsNestedInput = {
    create?: XOR<ProviderCreateWithoutCabinetsInput, ProviderUncheckedCreateWithoutCabinetsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutCabinetsInput
    upsert?: ProviderUpsertWithoutCabinetsInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutCabinetsInput, ProviderUpdateWithoutCabinetsInput>, ProviderUncheckedUpdateWithoutCabinetsInput>
  }

  export type SlotMachineUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<SlotMachineCreateWithoutCabinetInput, SlotMachineUncheckedCreateWithoutCabinetInput> | SlotMachineCreateWithoutCabinetInput[] | SlotMachineUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutCabinetInput | SlotMachineCreateOrConnectWithoutCabinetInput[]
    upsert?: SlotMachineUpsertWithWhereUniqueWithoutCabinetInput | SlotMachineUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: SlotMachineCreateManyCabinetInputEnvelope
    set?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    disconnect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    delete?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    update?: SlotMachineUpdateWithWhereUniqueWithoutCabinetInput | SlotMachineUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: SlotMachineUpdateManyWithWhereWithoutCabinetInput | SlotMachineUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: SlotMachineScalarWhereInput | SlotMachineScalarWhereInput[]
  }

  export type MetrologyApprovalUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<MetrologyApprovalCreateWithoutCabinetInput, MetrologyApprovalUncheckedCreateWithoutCabinetInput> | MetrologyApprovalCreateWithoutCabinetInput[] | MetrologyApprovalUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutCabinetInput | MetrologyApprovalCreateOrConnectWithoutCabinetInput[]
    upsert?: MetrologyApprovalUpsertWithWhereUniqueWithoutCabinetInput | MetrologyApprovalUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: MetrologyApprovalCreateManyCabinetInputEnvelope
    set?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    disconnect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    delete?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    update?: MetrologyApprovalUpdateWithWhereUniqueWithoutCabinetInput | MetrologyApprovalUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: MetrologyApprovalUpdateManyWithWhereWithoutCabinetInput | MetrologyApprovalUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: MetrologyApprovalScalarWhereInput | MetrologyApprovalScalarWhereInput[]
  }

  export type MetrologySoftwareUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<MetrologySoftwareCreateWithoutCabinetInput, MetrologySoftwareUncheckedCreateWithoutCabinetInput> | MetrologySoftwareCreateWithoutCabinetInput[] | MetrologySoftwareUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutCabinetInput | MetrologySoftwareCreateOrConnectWithoutCabinetInput[]
    upsert?: MetrologySoftwareUpsertWithWhereUniqueWithoutCabinetInput | MetrologySoftwareUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: MetrologySoftwareCreateManyCabinetInputEnvelope
    set?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    disconnect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    delete?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    update?: MetrologySoftwareUpdateWithWhereUniqueWithoutCabinetInput | MetrologySoftwareUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: MetrologySoftwareUpdateManyWithWhereWithoutCabinetInput | MetrologySoftwareUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: MetrologySoftwareScalarWhereInput | MetrologySoftwareScalarWhereInput[]
  }

  export type SlotMachineUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<SlotMachineCreateWithoutCabinetInput, SlotMachineUncheckedCreateWithoutCabinetInput> | SlotMachineCreateWithoutCabinetInput[] | SlotMachineUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutCabinetInput | SlotMachineCreateOrConnectWithoutCabinetInput[]
    upsert?: SlotMachineUpsertWithWhereUniqueWithoutCabinetInput | SlotMachineUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: SlotMachineCreateManyCabinetInputEnvelope
    set?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    disconnect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    delete?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    update?: SlotMachineUpdateWithWhereUniqueWithoutCabinetInput | SlotMachineUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: SlotMachineUpdateManyWithWhereWithoutCabinetInput | SlotMachineUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: SlotMachineScalarWhereInput | SlotMachineScalarWhereInput[]
  }

  export type MetrologyApprovalUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<MetrologyApprovalCreateWithoutCabinetInput, MetrologyApprovalUncheckedCreateWithoutCabinetInput> | MetrologyApprovalCreateWithoutCabinetInput[] | MetrologyApprovalUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutCabinetInput | MetrologyApprovalCreateOrConnectWithoutCabinetInput[]
    upsert?: MetrologyApprovalUpsertWithWhereUniqueWithoutCabinetInput | MetrologyApprovalUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: MetrologyApprovalCreateManyCabinetInputEnvelope
    set?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    disconnect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    delete?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    update?: MetrologyApprovalUpdateWithWhereUniqueWithoutCabinetInput | MetrologyApprovalUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: MetrologyApprovalUpdateManyWithWhereWithoutCabinetInput | MetrologyApprovalUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: MetrologyApprovalScalarWhereInput | MetrologyApprovalScalarWhereInput[]
  }

  export type MetrologySoftwareUncheckedUpdateManyWithoutCabinetNestedInput = {
    create?: XOR<MetrologySoftwareCreateWithoutCabinetInput, MetrologySoftwareUncheckedCreateWithoutCabinetInput> | MetrologySoftwareCreateWithoutCabinetInput[] | MetrologySoftwareUncheckedCreateWithoutCabinetInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutCabinetInput | MetrologySoftwareCreateOrConnectWithoutCabinetInput[]
    upsert?: MetrologySoftwareUpsertWithWhereUniqueWithoutCabinetInput | MetrologySoftwareUpsertWithWhereUniqueWithoutCabinetInput[]
    createMany?: MetrologySoftwareCreateManyCabinetInputEnvelope
    set?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    disconnect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    delete?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    update?: MetrologySoftwareUpdateWithWhereUniqueWithoutCabinetInput | MetrologySoftwareUpdateWithWhereUniqueWithoutCabinetInput[]
    updateMany?: MetrologySoftwareUpdateManyWithWhereWithoutCabinetInput | MetrologySoftwareUpdateManyWithWhereWithoutCabinetInput[]
    deleteMany?: MetrologySoftwareScalarWhereInput | MetrologySoftwareScalarWhereInput[]
  }

  export type ProviderCreateNestedOneWithoutGameMixesInput = {
    create?: XOR<ProviderCreateWithoutGameMixesInput, ProviderUncheckedCreateWithoutGameMixesInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutGameMixesInput
    connect?: ProviderWhereUniqueInput
  }

  export type SlotMachineCreateNestedManyWithoutGameMixInput = {
    create?: XOR<SlotMachineCreateWithoutGameMixInput, SlotMachineUncheckedCreateWithoutGameMixInput> | SlotMachineCreateWithoutGameMixInput[] | SlotMachineUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutGameMixInput | SlotMachineCreateOrConnectWithoutGameMixInput[]
    createMany?: SlotMachineCreateManyGameMixInputEnvelope
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
  }

  export type MetrologyApprovalCreateNestedManyWithoutGameMixInput = {
    create?: XOR<MetrologyApprovalCreateWithoutGameMixInput, MetrologyApprovalUncheckedCreateWithoutGameMixInput> | MetrologyApprovalCreateWithoutGameMixInput[] | MetrologyApprovalUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutGameMixInput | MetrologyApprovalCreateOrConnectWithoutGameMixInput[]
    createMany?: MetrologyApprovalCreateManyGameMixInputEnvelope
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
  }

  export type MetrologySoftwareCreateNestedManyWithoutGameMixInput = {
    create?: XOR<MetrologySoftwareCreateWithoutGameMixInput, MetrologySoftwareUncheckedCreateWithoutGameMixInput> | MetrologySoftwareCreateWithoutGameMixInput[] | MetrologySoftwareUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutGameMixInput | MetrologySoftwareCreateOrConnectWithoutGameMixInput[]
    createMany?: MetrologySoftwareCreateManyGameMixInputEnvelope
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
  }

  export type SlotMachineUncheckedCreateNestedManyWithoutGameMixInput = {
    create?: XOR<SlotMachineCreateWithoutGameMixInput, SlotMachineUncheckedCreateWithoutGameMixInput> | SlotMachineCreateWithoutGameMixInput[] | SlotMachineUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutGameMixInput | SlotMachineCreateOrConnectWithoutGameMixInput[]
    createMany?: SlotMachineCreateManyGameMixInputEnvelope
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
  }

  export type MetrologyApprovalUncheckedCreateNestedManyWithoutGameMixInput = {
    create?: XOR<MetrologyApprovalCreateWithoutGameMixInput, MetrologyApprovalUncheckedCreateWithoutGameMixInput> | MetrologyApprovalCreateWithoutGameMixInput[] | MetrologyApprovalUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutGameMixInput | MetrologyApprovalCreateOrConnectWithoutGameMixInput[]
    createMany?: MetrologyApprovalCreateManyGameMixInputEnvelope
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
  }

  export type MetrologySoftwareUncheckedCreateNestedManyWithoutGameMixInput = {
    create?: XOR<MetrologySoftwareCreateWithoutGameMixInput, MetrologySoftwareUncheckedCreateWithoutGameMixInput> | MetrologySoftwareCreateWithoutGameMixInput[] | MetrologySoftwareUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutGameMixInput | MetrologySoftwareCreateOrConnectWithoutGameMixInput[]
    createMany?: MetrologySoftwareCreateManyGameMixInputEnvelope
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProviderUpdateOneRequiredWithoutGameMixesNestedInput = {
    create?: XOR<ProviderCreateWithoutGameMixesInput, ProviderUncheckedCreateWithoutGameMixesInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutGameMixesInput
    upsert?: ProviderUpsertWithoutGameMixesInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutGameMixesInput, ProviderUpdateWithoutGameMixesInput>, ProviderUncheckedUpdateWithoutGameMixesInput>
  }

  export type SlotMachineUpdateManyWithoutGameMixNestedInput = {
    create?: XOR<SlotMachineCreateWithoutGameMixInput, SlotMachineUncheckedCreateWithoutGameMixInput> | SlotMachineCreateWithoutGameMixInput[] | SlotMachineUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutGameMixInput | SlotMachineCreateOrConnectWithoutGameMixInput[]
    upsert?: SlotMachineUpsertWithWhereUniqueWithoutGameMixInput | SlotMachineUpsertWithWhereUniqueWithoutGameMixInput[]
    createMany?: SlotMachineCreateManyGameMixInputEnvelope
    set?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    disconnect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    delete?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    update?: SlotMachineUpdateWithWhereUniqueWithoutGameMixInput | SlotMachineUpdateWithWhereUniqueWithoutGameMixInput[]
    updateMany?: SlotMachineUpdateManyWithWhereWithoutGameMixInput | SlotMachineUpdateManyWithWhereWithoutGameMixInput[]
    deleteMany?: SlotMachineScalarWhereInput | SlotMachineScalarWhereInput[]
  }

  export type MetrologyApprovalUpdateManyWithoutGameMixNestedInput = {
    create?: XOR<MetrologyApprovalCreateWithoutGameMixInput, MetrologyApprovalUncheckedCreateWithoutGameMixInput> | MetrologyApprovalCreateWithoutGameMixInput[] | MetrologyApprovalUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutGameMixInput | MetrologyApprovalCreateOrConnectWithoutGameMixInput[]
    upsert?: MetrologyApprovalUpsertWithWhereUniqueWithoutGameMixInput | MetrologyApprovalUpsertWithWhereUniqueWithoutGameMixInput[]
    createMany?: MetrologyApprovalCreateManyGameMixInputEnvelope
    set?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    disconnect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    delete?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    update?: MetrologyApprovalUpdateWithWhereUniqueWithoutGameMixInput | MetrologyApprovalUpdateWithWhereUniqueWithoutGameMixInput[]
    updateMany?: MetrologyApprovalUpdateManyWithWhereWithoutGameMixInput | MetrologyApprovalUpdateManyWithWhereWithoutGameMixInput[]
    deleteMany?: MetrologyApprovalScalarWhereInput | MetrologyApprovalScalarWhereInput[]
  }

  export type MetrologySoftwareUpdateManyWithoutGameMixNestedInput = {
    create?: XOR<MetrologySoftwareCreateWithoutGameMixInput, MetrologySoftwareUncheckedCreateWithoutGameMixInput> | MetrologySoftwareCreateWithoutGameMixInput[] | MetrologySoftwareUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutGameMixInput | MetrologySoftwareCreateOrConnectWithoutGameMixInput[]
    upsert?: MetrologySoftwareUpsertWithWhereUniqueWithoutGameMixInput | MetrologySoftwareUpsertWithWhereUniqueWithoutGameMixInput[]
    createMany?: MetrologySoftwareCreateManyGameMixInputEnvelope
    set?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    disconnect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    delete?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    update?: MetrologySoftwareUpdateWithWhereUniqueWithoutGameMixInput | MetrologySoftwareUpdateWithWhereUniqueWithoutGameMixInput[]
    updateMany?: MetrologySoftwareUpdateManyWithWhereWithoutGameMixInput | MetrologySoftwareUpdateManyWithWhereWithoutGameMixInput[]
    deleteMany?: MetrologySoftwareScalarWhereInput | MetrologySoftwareScalarWhereInput[]
  }

  export type SlotMachineUncheckedUpdateManyWithoutGameMixNestedInput = {
    create?: XOR<SlotMachineCreateWithoutGameMixInput, SlotMachineUncheckedCreateWithoutGameMixInput> | SlotMachineCreateWithoutGameMixInput[] | SlotMachineUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: SlotMachineCreateOrConnectWithoutGameMixInput | SlotMachineCreateOrConnectWithoutGameMixInput[]
    upsert?: SlotMachineUpsertWithWhereUniqueWithoutGameMixInput | SlotMachineUpsertWithWhereUniqueWithoutGameMixInput[]
    createMany?: SlotMachineCreateManyGameMixInputEnvelope
    set?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    disconnect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    delete?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    connect?: SlotMachineWhereUniqueInput | SlotMachineWhereUniqueInput[]
    update?: SlotMachineUpdateWithWhereUniqueWithoutGameMixInput | SlotMachineUpdateWithWhereUniqueWithoutGameMixInput[]
    updateMany?: SlotMachineUpdateManyWithWhereWithoutGameMixInput | SlotMachineUpdateManyWithWhereWithoutGameMixInput[]
    deleteMany?: SlotMachineScalarWhereInput | SlotMachineScalarWhereInput[]
  }

  export type MetrologyApprovalUncheckedUpdateManyWithoutGameMixNestedInput = {
    create?: XOR<MetrologyApprovalCreateWithoutGameMixInput, MetrologyApprovalUncheckedCreateWithoutGameMixInput> | MetrologyApprovalCreateWithoutGameMixInput[] | MetrologyApprovalUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutGameMixInput | MetrologyApprovalCreateOrConnectWithoutGameMixInput[]
    upsert?: MetrologyApprovalUpsertWithWhereUniqueWithoutGameMixInput | MetrologyApprovalUpsertWithWhereUniqueWithoutGameMixInput[]
    createMany?: MetrologyApprovalCreateManyGameMixInputEnvelope
    set?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    disconnect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    delete?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    update?: MetrologyApprovalUpdateWithWhereUniqueWithoutGameMixInput | MetrologyApprovalUpdateWithWhereUniqueWithoutGameMixInput[]
    updateMany?: MetrologyApprovalUpdateManyWithWhereWithoutGameMixInput | MetrologyApprovalUpdateManyWithWhereWithoutGameMixInput[]
    deleteMany?: MetrologyApprovalScalarWhereInput | MetrologyApprovalScalarWhereInput[]
  }

  export type MetrologySoftwareUncheckedUpdateManyWithoutGameMixNestedInput = {
    create?: XOR<MetrologySoftwareCreateWithoutGameMixInput, MetrologySoftwareUncheckedCreateWithoutGameMixInput> | MetrologySoftwareCreateWithoutGameMixInput[] | MetrologySoftwareUncheckedCreateWithoutGameMixInput[]
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutGameMixInput | MetrologySoftwareCreateOrConnectWithoutGameMixInput[]
    upsert?: MetrologySoftwareUpsertWithWhereUniqueWithoutGameMixInput | MetrologySoftwareUpsertWithWhereUniqueWithoutGameMixInput[]
    createMany?: MetrologySoftwareCreateManyGameMixInputEnvelope
    set?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    disconnect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    delete?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    connect?: MetrologySoftwareWhereUniqueInput | MetrologySoftwareWhereUniqueInput[]
    update?: MetrologySoftwareUpdateWithWhereUniqueWithoutGameMixInput | MetrologySoftwareUpdateWithWhereUniqueWithoutGameMixInput[]
    updateMany?: MetrologySoftwareUpdateManyWithWhereWithoutGameMixInput | MetrologySoftwareUpdateManyWithWhereWithoutGameMixInput[]
    deleteMany?: MetrologySoftwareScalarWhereInput | MetrologySoftwareScalarWhereInput[]
  }

  export type ProviderCreateNestedOneWithoutSlotsInput = {
    create?: XOR<ProviderCreateWithoutSlotsInput, ProviderUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutSlotsInput
    connect?: ProviderWhereUniqueInput
  }

  export type CabinetCreateNestedOneWithoutSlotsInput = {
    create?: XOR<CabinetCreateWithoutSlotsInput, CabinetUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutSlotsInput
    connect?: CabinetWhereUniqueInput
  }

  export type GameMixCreateNestedOneWithoutSlotsInput = {
    create?: XOR<GameMixCreateWithoutSlotsInput, GameMixUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: GameMixCreateOrConnectWithoutSlotsInput
    connect?: GameMixWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutSlotsInput = {
    create?: XOR<LocationCreateWithoutSlotsInput, LocationUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSlotsInput
    connect?: LocationWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProviderUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<ProviderCreateWithoutSlotsInput, ProviderUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutSlotsInput
    upsert?: ProviderUpsertWithoutSlotsInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutSlotsInput, ProviderUpdateWithoutSlotsInput>, ProviderUncheckedUpdateWithoutSlotsInput>
  }

  export type CabinetUpdateOneRequiredWithoutSlotsNestedInput = {
    create?: XOR<CabinetCreateWithoutSlotsInput, CabinetUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutSlotsInput
    upsert?: CabinetUpsertWithoutSlotsInput
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutSlotsInput, CabinetUpdateWithoutSlotsInput>, CabinetUncheckedUpdateWithoutSlotsInput>
  }

  export type GameMixUpdateOneWithoutSlotsNestedInput = {
    create?: XOR<GameMixCreateWithoutSlotsInput, GameMixUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: GameMixCreateOrConnectWithoutSlotsInput
    upsert?: GameMixUpsertWithoutSlotsInput
    disconnect?: GameMixWhereInput | boolean
    delete?: GameMixWhereInput | boolean
    connect?: GameMixWhereUniqueInput
    update?: XOR<XOR<GameMixUpdateToOneWithWhereWithoutSlotsInput, GameMixUpdateWithoutSlotsInput>, GameMixUncheckedUpdateWithoutSlotsInput>
  }

  export type LocationUpdateOneWithoutSlotsNestedInput = {
    create?: XOR<LocationCreateWithoutSlotsInput, LocationUncheckedCreateWithoutSlotsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutSlotsInput
    upsert?: LocationUpsertWithoutSlotsInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutSlotsInput, LocationUpdateWithoutSlotsInput>, LocationUncheckedUpdateWithoutSlotsInput>
  }

  export type LocationCreateNestedOneWithoutInvoicesInput = {
    create?: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutInvoicesInput
    connect?: LocationWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LocationUpdateOneWithoutInvoicesNestedInput = {
    create?: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutInvoicesInput
    upsert?: LocationUpsertWithoutInvoicesInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutInvoicesInput, LocationUpdateWithoutInvoicesInput>, LocationUncheckedUpdateWithoutInvoicesInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProviderCreateNestedOneWithoutMetrologyApprovalsInput = {
    create?: XOR<ProviderCreateWithoutMetrologyApprovalsInput, ProviderUncheckedCreateWithoutMetrologyApprovalsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutMetrologyApprovalsInput
    connect?: ProviderWhereUniqueInput
  }

  export type CabinetCreateNestedOneWithoutMetrologyApprovalsInput = {
    create?: XOR<CabinetCreateWithoutMetrologyApprovalsInput, CabinetUncheckedCreateWithoutMetrologyApprovalsInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutMetrologyApprovalsInput
    connect?: CabinetWhereUniqueInput
  }

  export type GameMixCreateNestedOneWithoutMetrologyApprovalsInput = {
    create?: XOR<GameMixCreateWithoutMetrologyApprovalsInput, GameMixUncheckedCreateWithoutMetrologyApprovalsInput>
    connectOrCreate?: GameMixCreateOrConnectWithoutMetrologyApprovalsInput
    connect?: GameMixWhereUniqueInput
  }

  export type MetrologySoftwareCreateNestedOneWithoutApprovalsInput = {
    create?: XOR<MetrologySoftwareCreateWithoutApprovalsInput, MetrologySoftwareUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutApprovalsInput
    connect?: MetrologySoftwareWhereUniqueInput
  }

  export type ProviderUpdateOneWithoutMetrologyApprovalsNestedInput = {
    create?: XOR<ProviderCreateWithoutMetrologyApprovalsInput, ProviderUncheckedCreateWithoutMetrologyApprovalsInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutMetrologyApprovalsInput
    upsert?: ProviderUpsertWithoutMetrologyApprovalsInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutMetrologyApprovalsInput, ProviderUpdateWithoutMetrologyApprovalsInput>, ProviderUncheckedUpdateWithoutMetrologyApprovalsInput>
  }

  export type CabinetUpdateOneWithoutMetrologyApprovalsNestedInput = {
    create?: XOR<CabinetCreateWithoutMetrologyApprovalsInput, CabinetUncheckedCreateWithoutMetrologyApprovalsInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutMetrologyApprovalsInput
    upsert?: CabinetUpsertWithoutMetrologyApprovalsInput
    disconnect?: CabinetWhereInput | boolean
    delete?: CabinetWhereInput | boolean
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutMetrologyApprovalsInput, CabinetUpdateWithoutMetrologyApprovalsInput>, CabinetUncheckedUpdateWithoutMetrologyApprovalsInput>
  }

  export type GameMixUpdateOneWithoutMetrologyApprovalsNestedInput = {
    create?: XOR<GameMixCreateWithoutMetrologyApprovalsInput, GameMixUncheckedCreateWithoutMetrologyApprovalsInput>
    connectOrCreate?: GameMixCreateOrConnectWithoutMetrologyApprovalsInput
    upsert?: GameMixUpsertWithoutMetrologyApprovalsInput
    disconnect?: GameMixWhereInput | boolean
    delete?: GameMixWhereInput | boolean
    connect?: GameMixWhereUniqueInput
    update?: XOR<XOR<GameMixUpdateToOneWithWhereWithoutMetrologyApprovalsInput, GameMixUpdateWithoutMetrologyApprovalsInput>, GameMixUncheckedUpdateWithoutMetrologyApprovalsInput>
  }

  export type MetrologySoftwareUpdateOneWithoutApprovalsNestedInput = {
    create?: XOR<MetrologySoftwareCreateWithoutApprovalsInput, MetrologySoftwareUncheckedCreateWithoutApprovalsInput>
    connectOrCreate?: MetrologySoftwareCreateOrConnectWithoutApprovalsInput
    upsert?: MetrologySoftwareUpsertWithoutApprovalsInput
    disconnect?: MetrologySoftwareWhereInput | boolean
    delete?: MetrologySoftwareWhereInput | boolean
    connect?: MetrologySoftwareWhereUniqueInput
    update?: XOR<XOR<MetrologySoftwareUpdateToOneWithWhereWithoutApprovalsInput, MetrologySoftwareUpdateWithoutApprovalsInput>, MetrologySoftwareUncheckedUpdateWithoutApprovalsInput>
  }

  export type ProviderCreateNestedOneWithoutMetrologySoftwareInput = {
    create?: XOR<ProviderCreateWithoutMetrologySoftwareInput, ProviderUncheckedCreateWithoutMetrologySoftwareInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutMetrologySoftwareInput
    connect?: ProviderWhereUniqueInput
  }

  export type CabinetCreateNestedOneWithoutMetrologySoftwareInput = {
    create?: XOR<CabinetCreateWithoutMetrologySoftwareInput, CabinetUncheckedCreateWithoutMetrologySoftwareInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutMetrologySoftwareInput
    connect?: CabinetWhereUniqueInput
  }

  export type GameMixCreateNestedOneWithoutMetrologySoftwareInput = {
    create?: XOR<GameMixCreateWithoutMetrologySoftwareInput, GameMixUncheckedCreateWithoutMetrologySoftwareInput>
    connectOrCreate?: GameMixCreateOrConnectWithoutMetrologySoftwareInput
    connect?: GameMixWhereUniqueInput
  }

  export type MetrologyApprovalCreateNestedManyWithoutSoftwareInput = {
    create?: XOR<MetrologyApprovalCreateWithoutSoftwareInput, MetrologyApprovalUncheckedCreateWithoutSoftwareInput> | MetrologyApprovalCreateWithoutSoftwareInput[] | MetrologyApprovalUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutSoftwareInput | MetrologyApprovalCreateOrConnectWithoutSoftwareInput[]
    createMany?: MetrologyApprovalCreateManySoftwareInputEnvelope
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
  }

  export type MetrologyApprovalUncheckedCreateNestedManyWithoutSoftwareInput = {
    create?: XOR<MetrologyApprovalCreateWithoutSoftwareInput, MetrologyApprovalUncheckedCreateWithoutSoftwareInput> | MetrologyApprovalCreateWithoutSoftwareInput[] | MetrologyApprovalUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutSoftwareInput | MetrologyApprovalCreateOrConnectWithoutSoftwareInput[]
    createMany?: MetrologyApprovalCreateManySoftwareInputEnvelope
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
  }

  export type ProviderUpdateOneWithoutMetrologySoftwareNestedInput = {
    create?: XOR<ProviderCreateWithoutMetrologySoftwareInput, ProviderUncheckedCreateWithoutMetrologySoftwareInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutMetrologySoftwareInput
    upsert?: ProviderUpsertWithoutMetrologySoftwareInput
    disconnect?: ProviderWhereInput | boolean
    delete?: ProviderWhereInput | boolean
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutMetrologySoftwareInput, ProviderUpdateWithoutMetrologySoftwareInput>, ProviderUncheckedUpdateWithoutMetrologySoftwareInput>
  }

  export type CabinetUpdateOneWithoutMetrologySoftwareNestedInput = {
    create?: XOR<CabinetCreateWithoutMetrologySoftwareInput, CabinetUncheckedCreateWithoutMetrologySoftwareInput>
    connectOrCreate?: CabinetCreateOrConnectWithoutMetrologySoftwareInput
    upsert?: CabinetUpsertWithoutMetrologySoftwareInput
    disconnect?: CabinetWhereInput | boolean
    delete?: CabinetWhereInput | boolean
    connect?: CabinetWhereUniqueInput
    update?: XOR<XOR<CabinetUpdateToOneWithWhereWithoutMetrologySoftwareInput, CabinetUpdateWithoutMetrologySoftwareInput>, CabinetUncheckedUpdateWithoutMetrologySoftwareInput>
  }

  export type GameMixUpdateOneWithoutMetrologySoftwareNestedInput = {
    create?: XOR<GameMixCreateWithoutMetrologySoftwareInput, GameMixUncheckedCreateWithoutMetrologySoftwareInput>
    connectOrCreate?: GameMixCreateOrConnectWithoutMetrologySoftwareInput
    upsert?: GameMixUpsertWithoutMetrologySoftwareInput
    disconnect?: GameMixWhereInput | boolean
    delete?: GameMixWhereInput | boolean
    connect?: GameMixWhereUniqueInput
    update?: XOR<XOR<GameMixUpdateToOneWithWhereWithoutMetrologySoftwareInput, GameMixUpdateWithoutMetrologySoftwareInput>, GameMixUncheckedUpdateWithoutMetrologySoftwareInput>
  }

  export type MetrologyApprovalUpdateManyWithoutSoftwareNestedInput = {
    create?: XOR<MetrologyApprovalCreateWithoutSoftwareInput, MetrologyApprovalUncheckedCreateWithoutSoftwareInput> | MetrologyApprovalCreateWithoutSoftwareInput[] | MetrologyApprovalUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutSoftwareInput | MetrologyApprovalCreateOrConnectWithoutSoftwareInput[]
    upsert?: MetrologyApprovalUpsertWithWhereUniqueWithoutSoftwareInput | MetrologyApprovalUpsertWithWhereUniqueWithoutSoftwareInput[]
    createMany?: MetrologyApprovalCreateManySoftwareInputEnvelope
    set?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    disconnect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    delete?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    update?: MetrologyApprovalUpdateWithWhereUniqueWithoutSoftwareInput | MetrologyApprovalUpdateWithWhereUniqueWithoutSoftwareInput[]
    updateMany?: MetrologyApprovalUpdateManyWithWhereWithoutSoftwareInput | MetrologyApprovalUpdateManyWithWhereWithoutSoftwareInput[]
    deleteMany?: MetrologyApprovalScalarWhereInput | MetrologyApprovalScalarWhereInput[]
  }

  export type MetrologyApprovalUncheckedUpdateManyWithoutSoftwareNestedInput = {
    create?: XOR<MetrologyApprovalCreateWithoutSoftwareInput, MetrologyApprovalUncheckedCreateWithoutSoftwareInput> | MetrologyApprovalCreateWithoutSoftwareInput[] | MetrologyApprovalUncheckedCreateWithoutSoftwareInput[]
    connectOrCreate?: MetrologyApprovalCreateOrConnectWithoutSoftwareInput | MetrologyApprovalCreateOrConnectWithoutSoftwareInput[]
    upsert?: MetrologyApprovalUpsertWithWhereUniqueWithoutSoftwareInput | MetrologyApprovalUpsertWithWhereUniqueWithoutSoftwareInput[]
    createMany?: MetrologyApprovalCreateManySoftwareInputEnvelope
    set?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    disconnect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    delete?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    connect?: MetrologyApprovalWhereUniqueInput | MetrologyApprovalWhereUniqueInput[]
    update?: MetrologyApprovalUpdateWithWhereUniqueWithoutSoftwareInput | MetrologyApprovalUpdateWithWhereUniqueWithoutSoftwareInput[]
    updateMany?: MetrologyApprovalUpdateManyWithWhereWithoutSoftwareInput | MetrologyApprovalUpdateManyWithWhereWithoutSoftwareInput[]
    deleteMany?: MetrologyApprovalScalarWhereInput | MetrologyApprovalScalarWhereInput[]
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type CabinetCreateWithoutProviderInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineCreateNestedManyWithoutCabinetInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutCabinetInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineUncheckedCreateNestedManyWithoutCabinetInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutCabinetInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutProviderInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutProviderInput, CabinetUncheckedCreateWithoutProviderInput>
  }

  export type CabinetCreateManyProviderInputEnvelope = {
    data: CabinetCreateManyProviderInput | CabinetCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type GameMixCreateWithoutProviderInput = {
    id?: string
    name: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineCreateNestedManyWithoutGameMixInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutGameMixInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutGameMixInput
  }

  export type GameMixUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineUncheckedCreateNestedManyWithoutGameMixInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutGameMixInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutGameMixInput
  }

  export type GameMixCreateOrConnectWithoutProviderInput = {
    where: GameMixWhereUniqueInput
    create: XOR<GameMixCreateWithoutProviderInput, GameMixUncheckedCreateWithoutProviderInput>
  }

  export type GameMixCreateManyProviderInputEnvelope = {
    data: GameMixCreateManyProviderInput | GameMixCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type SlotMachineCreateWithoutProviderInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinet: CabinetCreateNestedOneWithoutSlotsInput
    gameMix?: GameMixCreateNestedOneWithoutSlotsInput
    location?: LocationCreateNestedOneWithoutSlotsInput
  }

  export type SlotMachineUncheckedCreateWithoutProviderInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    cabinetId: string
    gameMixId?: string | null
    locationId?: string | null
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotMachineCreateOrConnectWithoutProviderInput = {
    where: SlotMachineWhereUniqueInput
    create: XOR<SlotMachineCreateWithoutProviderInput, SlotMachineUncheckedCreateWithoutProviderInput>
  }

  export type SlotMachineCreateManyProviderInputEnvelope = {
    data: SlotMachineCreateManyProviderInput | SlotMachineCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type MetrologyApprovalCreateWithoutProviderInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinet?: CabinetCreateNestedOneWithoutMetrologyApprovalsInput
    gameMix?: GameMixCreateNestedOneWithoutMetrologyApprovalsInput
    software?: MetrologySoftwareCreateNestedOneWithoutApprovalsInput
  }

  export type MetrologyApprovalUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    cabinetId?: string | null
    gameMixId?: string | null
    softwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyApprovalCreateOrConnectWithoutProviderInput = {
    where: MetrologyApprovalWhereUniqueInput
    create: XOR<MetrologyApprovalCreateWithoutProviderInput, MetrologyApprovalUncheckedCreateWithoutProviderInput>
  }

  export type MetrologyApprovalCreateManyProviderInputEnvelope = {
    data: MetrologyApprovalCreateManyProviderInput | MetrologyApprovalCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type MetrologySoftwareCreateWithoutProviderInput = {
    id?: string
    name: string
    version?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinet?: CabinetCreateNestedOneWithoutMetrologySoftwareInput
    gameMix?: GameMixCreateNestedOneWithoutMetrologySoftwareInput
    approvals?: MetrologyApprovalCreateNestedManyWithoutSoftwareInput
  }

  export type MetrologySoftwareUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    version?: string | null
    cabinetId?: string | null
    gameMixId?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: MetrologyApprovalUncheckedCreateNestedManyWithoutSoftwareInput
  }

  export type MetrologySoftwareCreateOrConnectWithoutProviderInput = {
    where: MetrologySoftwareWhereUniqueInput
    create: XOR<MetrologySoftwareCreateWithoutProviderInput, MetrologySoftwareUncheckedCreateWithoutProviderInput>
  }

  export type MetrologySoftwareCreateManyProviderInputEnvelope = {
    data: MetrologySoftwareCreateManyProviderInput | MetrologySoftwareCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type CabinetUpsertWithWhereUniqueWithoutProviderInput = {
    where: CabinetWhereUniqueInput
    update: XOR<CabinetUpdateWithoutProviderInput, CabinetUncheckedUpdateWithoutProviderInput>
    create: XOR<CabinetCreateWithoutProviderInput, CabinetUncheckedCreateWithoutProviderInput>
  }

  export type CabinetUpdateWithWhereUniqueWithoutProviderInput = {
    where: CabinetWhereUniqueInput
    data: XOR<CabinetUpdateWithoutProviderInput, CabinetUncheckedUpdateWithoutProviderInput>
  }

  export type CabinetUpdateManyWithWhereWithoutProviderInput = {
    where: CabinetScalarWhereInput
    data: XOR<CabinetUpdateManyMutationInput, CabinetUncheckedUpdateManyWithoutProviderInput>
  }

  export type CabinetScalarWhereInput = {
    AND?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
    OR?: CabinetScalarWhereInput[]
    NOT?: CabinetScalarWhereInput | CabinetScalarWhereInput[]
    id?: StringFilter<"Cabinet"> | string
    name?: StringFilter<"Cabinet"> | string
    model?: StringNullableFilter<"Cabinet"> | string | null
    manufacturer?: StringFilter<"Cabinet"> | string
    providerId?: StringFilter<"Cabinet"> | string
    createdAt?: DateTimeFilter<"Cabinet"> | Date | string
    updatedAt?: DateTimeFilter<"Cabinet"> | Date | string
  }

  export type GameMixUpsertWithWhereUniqueWithoutProviderInput = {
    where: GameMixWhereUniqueInput
    update: XOR<GameMixUpdateWithoutProviderInput, GameMixUncheckedUpdateWithoutProviderInput>
    create: XOR<GameMixCreateWithoutProviderInput, GameMixUncheckedCreateWithoutProviderInput>
  }

  export type GameMixUpdateWithWhereUniqueWithoutProviderInput = {
    where: GameMixWhereUniqueInput
    data: XOR<GameMixUpdateWithoutProviderInput, GameMixUncheckedUpdateWithoutProviderInput>
  }

  export type GameMixUpdateManyWithWhereWithoutProviderInput = {
    where: GameMixScalarWhereInput
    data: XOR<GameMixUpdateManyMutationInput, GameMixUncheckedUpdateManyWithoutProviderInput>
  }

  export type GameMixScalarWhereInput = {
    AND?: GameMixScalarWhereInput | GameMixScalarWhereInput[]
    OR?: GameMixScalarWhereInput[]
    NOT?: GameMixScalarWhereInput | GameMixScalarWhereInput[]
    id?: StringFilter<"GameMix"> | string
    name?: StringFilter<"GameMix"> | string
    providerId?: StringFilter<"GameMix"> | string
    games?: StringNullableFilter<"GameMix"> | string | null
    gameCount?: IntNullableFilter<"GameMix"> | number | null
    createdAt?: DateTimeFilter<"GameMix"> | Date | string
    updatedAt?: DateTimeFilter<"GameMix"> | Date | string
  }

  export type SlotMachineUpsertWithWhereUniqueWithoutProviderInput = {
    where: SlotMachineWhereUniqueInput
    update: XOR<SlotMachineUpdateWithoutProviderInput, SlotMachineUncheckedUpdateWithoutProviderInput>
    create: XOR<SlotMachineCreateWithoutProviderInput, SlotMachineUncheckedCreateWithoutProviderInput>
  }

  export type SlotMachineUpdateWithWhereUniqueWithoutProviderInput = {
    where: SlotMachineWhereUniqueInput
    data: XOR<SlotMachineUpdateWithoutProviderInput, SlotMachineUncheckedUpdateWithoutProviderInput>
  }

  export type SlotMachineUpdateManyWithWhereWithoutProviderInput = {
    where: SlotMachineScalarWhereInput
    data: XOR<SlotMachineUpdateManyMutationInput, SlotMachineUncheckedUpdateManyWithoutProviderInput>
  }

  export type SlotMachineScalarWhereInput = {
    AND?: SlotMachineScalarWhereInput | SlotMachineScalarWhereInput[]
    OR?: SlotMachineScalarWhereInput[]
    NOT?: SlotMachineScalarWhereInput | SlotMachineScalarWhereInput[]
    id?: StringFilter<"SlotMachine"> | string
    serialNumber?: StringFilter<"SlotMachine"> | string
    manufacturer?: StringFilter<"SlotMachine"> | string
    providerId?: StringFilter<"SlotMachine"> | string
    cabinetId?: StringFilter<"SlotMachine"> | string
    gameMixId?: StringNullableFilter<"SlotMachine"> | string | null
    locationId?: StringNullableFilter<"SlotMachine"> | string | null
    productionYear?: IntNullableFilter<"SlotMachine"> | number | null
    denomination?: FloatNullableFilter<"SlotMachine"> | number | null
    maxBet?: FloatNullableFilter<"SlotMachine"> | number | null
    rtp?: FloatNullableFilter<"SlotMachine"> | number | null
    gamingPlaces?: IntFilter<"SlotMachine"> | number
    status?: StringFilter<"SlotMachine"> | string
    createdAt?: DateTimeFilter<"SlotMachine"> | Date | string
    updatedAt?: DateTimeFilter<"SlotMachine"> | Date | string
  }

  export type MetrologyApprovalUpsertWithWhereUniqueWithoutProviderInput = {
    where: MetrologyApprovalWhereUniqueInput
    update: XOR<MetrologyApprovalUpdateWithoutProviderInput, MetrologyApprovalUncheckedUpdateWithoutProviderInput>
    create: XOR<MetrologyApprovalCreateWithoutProviderInput, MetrologyApprovalUncheckedCreateWithoutProviderInput>
  }

  export type MetrologyApprovalUpdateWithWhereUniqueWithoutProviderInput = {
    where: MetrologyApprovalWhereUniqueInput
    data: XOR<MetrologyApprovalUpdateWithoutProviderInput, MetrologyApprovalUncheckedUpdateWithoutProviderInput>
  }

  export type MetrologyApprovalUpdateManyWithWhereWithoutProviderInput = {
    where: MetrologyApprovalScalarWhereInput
    data: XOR<MetrologyApprovalUpdateManyMutationInput, MetrologyApprovalUncheckedUpdateManyWithoutProviderInput>
  }

  export type MetrologyApprovalScalarWhereInput = {
    AND?: MetrologyApprovalScalarWhereInput | MetrologyApprovalScalarWhereInput[]
    OR?: MetrologyApprovalScalarWhereInput[]
    NOT?: MetrologyApprovalScalarWhereInput | MetrologyApprovalScalarWhereInput[]
    id?: StringFilter<"MetrologyApproval"> | string
    name?: StringFilter<"MetrologyApproval"> | string
    dataEmitere?: DateTimeNullableFilter<"MetrologyApproval"> | Date | string | null
    dataExpirare?: DateTimeNullableFilter<"MetrologyApproval"> | Date | string | null
    providerId?: StringNullableFilter<"MetrologyApproval"> | string | null
    cabinetId?: StringNullableFilter<"MetrologyApproval"> | string | null
    gameMixId?: StringNullableFilter<"MetrologyApproval"> | string | null
    softwareId?: StringNullableFilter<"MetrologyApproval"> | string | null
    createdAt?: DateTimeFilter<"MetrologyApproval"> | Date | string
    updatedAt?: DateTimeFilter<"MetrologyApproval"> | Date | string
  }

  export type MetrologySoftwareUpsertWithWhereUniqueWithoutProviderInput = {
    where: MetrologySoftwareWhereUniqueInput
    update: XOR<MetrologySoftwareUpdateWithoutProviderInput, MetrologySoftwareUncheckedUpdateWithoutProviderInput>
    create: XOR<MetrologySoftwareCreateWithoutProviderInput, MetrologySoftwareUncheckedCreateWithoutProviderInput>
  }

  export type MetrologySoftwareUpdateWithWhereUniqueWithoutProviderInput = {
    where: MetrologySoftwareWhereUniqueInput
    data: XOR<MetrologySoftwareUpdateWithoutProviderInput, MetrologySoftwareUncheckedUpdateWithoutProviderInput>
  }

  export type MetrologySoftwareUpdateManyWithWhereWithoutProviderInput = {
    where: MetrologySoftwareScalarWhereInput
    data: XOR<MetrologySoftwareUpdateManyMutationInput, MetrologySoftwareUncheckedUpdateManyWithoutProviderInput>
  }

  export type MetrologySoftwareScalarWhereInput = {
    AND?: MetrologySoftwareScalarWhereInput | MetrologySoftwareScalarWhereInput[]
    OR?: MetrologySoftwareScalarWhereInput[]
    NOT?: MetrologySoftwareScalarWhereInput | MetrologySoftwareScalarWhereInput[]
    id?: StringFilter<"MetrologySoftware"> | string
    name?: StringFilter<"MetrologySoftware"> | string
    version?: StringNullableFilter<"MetrologySoftware"> | string | null
    providerId?: StringNullableFilter<"MetrologySoftware"> | string | null
    cabinetId?: StringNullableFilter<"MetrologySoftware"> | string | null
    gameMixId?: StringNullableFilter<"MetrologySoftware"> | string | null
    serialNumbers?: StringNullableFilter<"MetrologySoftware"> | string | null
    createdAt?: DateTimeFilter<"MetrologySoftware"> | Date | string
    updatedAt?: DateTimeFilter<"MetrologySoftware"> | Date | string
  }

  export type SlotMachineCreateWithoutLocationInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutSlotsInput
    cabinet: CabinetCreateNestedOneWithoutSlotsInput
    gameMix?: GameMixCreateNestedOneWithoutSlotsInput
  }

  export type SlotMachineUncheckedCreateWithoutLocationInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    providerId: string
    cabinetId: string
    gameMixId?: string | null
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotMachineCreateOrConnectWithoutLocationInput = {
    where: SlotMachineWhereUniqueInput
    create: XOR<SlotMachineCreateWithoutLocationInput, SlotMachineUncheckedCreateWithoutLocationInput>
  }

  export type SlotMachineCreateManyLocationInputEnvelope = {
    data: SlotMachineCreateManyLocationInput | SlotMachineCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type InvoiceCreateWithoutLocationInput = {
    id?: string
    invoiceNumber: string
    amount: number
    currency?: string
    status?: string
    serialNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceUncheckedCreateWithoutLocationInput = {
    id?: string
    invoiceNumber: string
    amount: number
    currency?: string
    status?: string
    serialNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateOrConnectWithoutLocationInput = {
    where: InvoiceWhereUniqueInput
    create: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput>
  }

  export type InvoiceCreateManyLocationInputEnvelope = {
    data: InvoiceCreateManyLocationInput | InvoiceCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type SlotMachineUpsertWithWhereUniqueWithoutLocationInput = {
    where: SlotMachineWhereUniqueInput
    update: XOR<SlotMachineUpdateWithoutLocationInput, SlotMachineUncheckedUpdateWithoutLocationInput>
    create: XOR<SlotMachineCreateWithoutLocationInput, SlotMachineUncheckedCreateWithoutLocationInput>
  }

  export type SlotMachineUpdateWithWhereUniqueWithoutLocationInput = {
    where: SlotMachineWhereUniqueInput
    data: XOR<SlotMachineUpdateWithoutLocationInput, SlotMachineUncheckedUpdateWithoutLocationInput>
  }

  export type SlotMachineUpdateManyWithWhereWithoutLocationInput = {
    where: SlotMachineScalarWhereInput
    data: XOR<SlotMachineUpdateManyMutationInput, SlotMachineUncheckedUpdateManyWithoutLocationInput>
  }

  export type InvoiceUpsertWithWhereUniqueWithoutLocationInput = {
    where: InvoiceWhereUniqueInput
    update: XOR<InvoiceUpdateWithoutLocationInput, InvoiceUncheckedUpdateWithoutLocationInput>
    create: XOR<InvoiceCreateWithoutLocationInput, InvoiceUncheckedCreateWithoutLocationInput>
  }

  export type InvoiceUpdateWithWhereUniqueWithoutLocationInput = {
    where: InvoiceWhereUniqueInput
    data: XOR<InvoiceUpdateWithoutLocationInput, InvoiceUncheckedUpdateWithoutLocationInput>
  }

  export type InvoiceUpdateManyWithWhereWithoutLocationInput = {
    where: InvoiceScalarWhereInput
    data: XOR<InvoiceUpdateManyMutationInput, InvoiceUncheckedUpdateManyWithoutLocationInput>
  }

  export type InvoiceScalarWhereInput = {
    AND?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    OR?: InvoiceScalarWhereInput[]
    NOT?: InvoiceScalarWhereInput | InvoiceScalarWhereInput[]
    id?: StringFilter<"Invoice"> | string
    invoiceNumber?: StringFilter<"Invoice"> | string
    amount?: FloatFilter<"Invoice"> | number
    currency?: StringFilter<"Invoice"> | string
    status?: StringFilter<"Invoice"> | string
    serialNumber?: StringNullableFilter<"Invoice"> | string | null
    locationId?: StringNullableFilter<"Invoice"> | string | null
    createdAt?: DateTimeFilter<"Invoice"> | Date | string
    updatedAt?: DateTimeFilter<"Invoice"> | Date | string
  }

  export type ProviderCreateWithoutCabinetsInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameMixes?: GameMixCreateNestedManyWithoutProviderInput
    slots?: SlotMachineCreateNestedManyWithoutProviderInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutProviderInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutCabinetsInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    gameMixes?: GameMixUncheckedCreateNestedManyWithoutProviderInput
    slots?: SlotMachineUncheckedCreateNestedManyWithoutProviderInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutProviderInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutCabinetsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutCabinetsInput, ProviderUncheckedCreateWithoutCabinetsInput>
  }

  export type SlotMachineCreateWithoutCabinetInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutSlotsInput
    gameMix?: GameMixCreateNestedOneWithoutSlotsInput
    location?: LocationCreateNestedOneWithoutSlotsInput
  }

  export type SlotMachineUncheckedCreateWithoutCabinetInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    providerId: string
    gameMixId?: string | null
    locationId?: string | null
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotMachineCreateOrConnectWithoutCabinetInput = {
    where: SlotMachineWhereUniqueInput
    create: XOR<SlotMachineCreateWithoutCabinetInput, SlotMachineUncheckedCreateWithoutCabinetInput>
  }

  export type SlotMachineCreateManyCabinetInputEnvelope = {
    data: SlotMachineCreateManyCabinetInput | SlotMachineCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type MetrologyApprovalCreateWithoutCabinetInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutMetrologyApprovalsInput
    gameMix?: GameMixCreateNestedOneWithoutMetrologyApprovalsInput
    software?: MetrologySoftwareCreateNestedOneWithoutApprovalsInput
  }

  export type MetrologyApprovalUncheckedCreateWithoutCabinetInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    providerId?: string | null
    gameMixId?: string | null
    softwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyApprovalCreateOrConnectWithoutCabinetInput = {
    where: MetrologyApprovalWhereUniqueInput
    create: XOR<MetrologyApprovalCreateWithoutCabinetInput, MetrologyApprovalUncheckedCreateWithoutCabinetInput>
  }

  export type MetrologyApprovalCreateManyCabinetInputEnvelope = {
    data: MetrologyApprovalCreateManyCabinetInput | MetrologyApprovalCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type MetrologySoftwareCreateWithoutCabinetInput = {
    id?: string
    name: string
    version?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutMetrologySoftwareInput
    gameMix?: GameMixCreateNestedOneWithoutMetrologySoftwareInput
    approvals?: MetrologyApprovalCreateNestedManyWithoutSoftwareInput
  }

  export type MetrologySoftwareUncheckedCreateWithoutCabinetInput = {
    id?: string
    name: string
    version?: string | null
    providerId?: string | null
    gameMixId?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: MetrologyApprovalUncheckedCreateNestedManyWithoutSoftwareInput
  }

  export type MetrologySoftwareCreateOrConnectWithoutCabinetInput = {
    where: MetrologySoftwareWhereUniqueInput
    create: XOR<MetrologySoftwareCreateWithoutCabinetInput, MetrologySoftwareUncheckedCreateWithoutCabinetInput>
  }

  export type MetrologySoftwareCreateManyCabinetInputEnvelope = {
    data: MetrologySoftwareCreateManyCabinetInput | MetrologySoftwareCreateManyCabinetInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutCabinetsInput = {
    update: XOR<ProviderUpdateWithoutCabinetsInput, ProviderUncheckedUpdateWithoutCabinetsInput>
    create: XOR<ProviderCreateWithoutCabinetsInput, ProviderUncheckedCreateWithoutCabinetsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutCabinetsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutCabinetsInput, ProviderUncheckedUpdateWithoutCabinetsInput>
  }

  export type ProviderUpdateWithoutCabinetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameMixes?: GameMixUpdateManyWithoutProviderNestedInput
    slots?: SlotMachineUpdateManyWithoutProviderNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutProviderNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutCabinetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameMixes?: GameMixUncheckedUpdateManyWithoutProviderNestedInput
    slots?: SlotMachineUncheckedUpdateManyWithoutProviderNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutProviderNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type SlotMachineUpsertWithWhereUniqueWithoutCabinetInput = {
    where: SlotMachineWhereUniqueInput
    update: XOR<SlotMachineUpdateWithoutCabinetInput, SlotMachineUncheckedUpdateWithoutCabinetInput>
    create: XOR<SlotMachineCreateWithoutCabinetInput, SlotMachineUncheckedCreateWithoutCabinetInput>
  }

  export type SlotMachineUpdateWithWhereUniqueWithoutCabinetInput = {
    where: SlotMachineWhereUniqueInput
    data: XOR<SlotMachineUpdateWithoutCabinetInput, SlotMachineUncheckedUpdateWithoutCabinetInput>
  }

  export type SlotMachineUpdateManyWithWhereWithoutCabinetInput = {
    where: SlotMachineScalarWhereInput
    data: XOR<SlotMachineUpdateManyMutationInput, SlotMachineUncheckedUpdateManyWithoutCabinetInput>
  }

  export type MetrologyApprovalUpsertWithWhereUniqueWithoutCabinetInput = {
    where: MetrologyApprovalWhereUniqueInput
    update: XOR<MetrologyApprovalUpdateWithoutCabinetInput, MetrologyApprovalUncheckedUpdateWithoutCabinetInput>
    create: XOR<MetrologyApprovalCreateWithoutCabinetInput, MetrologyApprovalUncheckedCreateWithoutCabinetInput>
  }

  export type MetrologyApprovalUpdateWithWhereUniqueWithoutCabinetInput = {
    where: MetrologyApprovalWhereUniqueInput
    data: XOR<MetrologyApprovalUpdateWithoutCabinetInput, MetrologyApprovalUncheckedUpdateWithoutCabinetInput>
  }

  export type MetrologyApprovalUpdateManyWithWhereWithoutCabinetInput = {
    where: MetrologyApprovalScalarWhereInput
    data: XOR<MetrologyApprovalUpdateManyMutationInput, MetrologyApprovalUncheckedUpdateManyWithoutCabinetInput>
  }

  export type MetrologySoftwareUpsertWithWhereUniqueWithoutCabinetInput = {
    where: MetrologySoftwareWhereUniqueInput
    update: XOR<MetrologySoftwareUpdateWithoutCabinetInput, MetrologySoftwareUncheckedUpdateWithoutCabinetInput>
    create: XOR<MetrologySoftwareCreateWithoutCabinetInput, MetrologySoftwareUncheckedCreateWithoutCabinetInput>
  }

  export type MetrologySoftwareUpdateWithWhereUniqueWithoutCabinetInput = {
    where: MetrologySoftwareWhereUniqueInput
    data: XOR<MetrologySoftwareUpdateWithoutCabinetInput, MetrologySoftwareUncheckedUpdateWithoutCabinetInput>
  }

  export type MetrologySoftwareUpdateManyWithWhereWithoutCabinetInput = {
    where: MetrologySoftwareScalarWhereInput
    data: XOR<MetrologySoftwareUpdateManyMutationInput, MetrologySoftwareUncheckedUpdateManyWithoutCabinetInput>
  }

  export type ProviderCreateWithoutGameMixesInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetCreateNestedManyWithoutProviderInput
    slots?: SlotMachineCreateNestedManyWithoutProviderInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutProviderInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutGameMixesInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetUncheckedCreateNestedManyWithoutProviderInput
    slots?: SlotMachineUncheckedCreateNestedManyWithoutProviderInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutProviderInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutGameMixesInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutGameMixesInput, ProviderUncheckedCreateWithoutGameMixesInput>
  }

  export type SlotMachineCreateWithoutGameMixInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutSlotsInput
    cabinet: CabinetCreateNestedOneWithoutSlotsInput
    location?: LocationCreateNestedOneWithoutSlotsInput
  }

  export type SlotMachineUncheckedCreateWithoutGameMixInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    providerId: string
    cabinetId: string
    locationId?: string | null
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotMachineCreateOrConnectWithoutGameMixInput = {
    where: SlotMachineWhereUniqueInput
    create: XOR<SlotMachineCreateWithoutGameMixInput, SlotMachineUncheckedCreateWithoutGameMixInput>
  }

  export type SlotMachineCreateManyGameMixInputEnvelope = {
    data: SlotMachineCreateManyGameMixInput | SlotMachineCreateManyGameMixInput[]
    skipDuplicates?: boolean
  }

  export type MetrologyApprovalCreateWithoutGameMixInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutMetrologyApprovalsInput
    cabinet?: CabinetCreateNestedOneWithoutMetrologyApprovalsInput
    software?: MetrologySoftwareCreateNestedOneWithoutApprovalsInput
  }

  export type MetrologyApprovalUncheckedCreateWithoutGameMixInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    providerId?: string | null
    cabinetId?: string | null
    softwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyApprovalCreateOrConnectWithoutGameMixInput = {
    where: MetrologyApprovalWhereUniqueInput
    create: XOR<MetrologyApprovalCreateWithoutGameMixInput, MetrologyApprovalUncheckedCreateWithoutGameMixInput>
  }

  export type MetrologyApprovalCreateManyGameMixInputEnvelope = {
    data: MetrologyApprovalCreateManyGameMixInput | MetrologyApprovalCreateManyGameMixInput[]
    skipDuplicates?: boolean
  }

  export type MetrologySoftwareCreateWithoutGameMixInput = {
    id?: string
    name: string
    version?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutMetrologySoftwareInput
    cabinet?: CabinetCreateNestedOneWithoutMetrologySoftwareInput
    approvals?: MetrologyApprovalCreateNestedManyWithoutSoftwareInput
  }

  export type MetrologySoftwareUncheckedCreateWithoutGameMixInput = {
    id?: string
    name: string
    version?: string | null
    providerId?: string | null
    cabinetId?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    approvals?: MetrologyApprovalUncheckedCreateNestedManyWithoutSoftwareInput
  }

  export type MetrologySoftwareCreateOrConnectWithoutGameMixInput = {
    where: MetrologySoftwareWhereUniqueInput
    create: XOR<MetrologySoftwareCreateWithoutGameMixInput, MetrologySoftwareUncheckedCreateWithoutGameMixInput>
  }

  export type MetrologySoftwareCreateManyGameMixInputEnvelope = {
    data: MetrologySoftwareCreateManyGameMixInput | MetrologySoftwareCreateManyGameMixInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutGameMixesInput = {
    update: XOR<ProviderUpdateWithoutGameMixesInput, ProviderUncheckedUpdateWithoutGameMixesInput>
    create: XOR<ProviderCreateWithoutGameMixesInput, ProviderUncheckedCreateWithoutGameMixesInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutGameMixesInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutGameMixesInput, ProviderUncheckedUpdateWithoutGameMixesInput>
  }

  export type ProviderUpdateWithoutGameMixesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUpdateManyWithoutProviderNestedInput
    slots?: SlotMachineUpdateManyWithoutProviderNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutProviderNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutGameMixesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUncheckedUpdateManyWithoutProviderNestedInput
    slots?: SlotMachineUncheckedUpdateManyWithoutProviderNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutProviderNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type SlotMachineUpsertWithWhereUniqueWithoutGameMixInput = {
    where: SlotMachineWhereUniqueInput
    update: XOR<SlotMachineUpdateWithoutGameMixInput, SlotMachineUncheckedUpdateWithoutGameMixInput>
    create: XOR<SlotMachineCreateWithoutGameMixInput, SlotMachineUncheckedCreateWithoutGameMixInput>
  }

  export type SlotMachineUpdateWithWhereUniqueWithoutGameMixInput = {
    where: SlotMachineWhereUniqueInput
    data: XOR<SlotMachineUpdateWithoutGameMixInput, SlotMachineUncheckedUpdateWithoutGameMixInput>
  }

  export type SlotMachineUpdateManyWithWhereWithoutGameMixInput = {
    where: SlotMachineScalarWhereInput
    data: XOR<SlotMachineUpdateManyMutationInput, SlotMachineUncheckedUpdateManyWithoutGameMixInput>
  }

  export type MetrologyApprovalUpsertWithWhereUniqueWithoutGameMixInput = {
    where: MetrologyApprovalWhereUniqueInput
    update: XOR<MetrologyApprovalUpdateWithoutGameMixInput, MetrologyApprovalUncheckedUpdateWithoutGameMixInput>
    create: XOR<MetrologyApprovalCreateWithoutGameMixInput, MetrologyApprovalUncheckedCreateWithoutGameMixInput>
  }

  export type MetrologyApprovalUpdateWithWhereUniqueWithoutGameMixInput = {
    where: MetrologyApprovalWhereUniqueInput
    data: XOR<MetrologyApprovalUpdateWithoutGameMixInput, MetrologyApprovalUncheckedUpdateWithoutGameMixInput>
  }

  export type MetrologyApprovalUpdateManyWithWhereWithoutGameMixInput = {
    where: MetrologyApprovalScalarWhereInput
    data: XOR<MetrologyApprovalUpdateManyMutationInput, MetrologyApprovalUncheckedUpdateManyWithoutGameMixInput>
  }

  export type MetrologySoftwareUpsertWithWhereUniqueWithoutGameMixInput = {
    where: MetrologySoftwareWhereUniqueInput
    update: XOR<MetrologySoftwareUpdateWithoutGameMixInput, MetrologySoftwareUncheckedUpdateWithoutGameMixInput>
    create: XOR<MetrologySoftwareCreateWithoutGameMixInput, MetrologySoftwareUncheckedCreateWithoutGameMixInput>
  }

  export type MetrologySoftwareUpdateWithWhereUniqueWithoutGameMixInput = {
    where: MetrologySoftwareWhereUniqueInput
    data: XOR<MetrologySoftwareUpdateWithoutGameMixInput, MetrologySoftwareUncheckedUpdateWithoutGameMixInput>
  }

  export type MetrologySoftwareUpdateManyWithWhereWithoutGameMixInput = {
    where: MetrologySoftwareScalarWhereInput
    data: XOR<MetrologySoftwareUpdateManyMutationInput, MetrologySoftwareUncheckedUpdateManyWithoutGameMixInput>
  }

  export type ProviderCreateWithoutSlotsInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetCreateNestedManyWithoutProviderInput
    gameMixes?: GameMixCreateNestedManyWithoutProviderInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutProviderInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutSlotsInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetUncheckedCreateNestedManyWithoutProviderInput
    gameMixes?: GameMixUncheckedCreateNestedManyWithoutProviderInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutProviderInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutSlotsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutSlotsInput, ProviderUncheckedCreateWithoutSlotsInput>
  }

  export type CabinetCreateWithoutSlotsInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutCabinetsInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutCabinetInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutSlotsInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutCabinetInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutSlotsInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutSlotsInput, CabinetUncheckedCreateWithoutSlotsInput>
  }

  export type GameMixCreateWithoutSlotsInput = {
    id?: string
    name: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutGameMixesInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutGameMixInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutGameMixInput
  }

  export type GameMixUncheckedCreateWithoutSlotsInput = {
    id?: string
    name: string
    providerId: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutGameMixInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutGameMixInput
  }

  export type GameMixCreateOrConnectWithoutSlotsInput = {
    where: GameMixWhereUniqueInput
    create: XOR<GameMixCreateWithoutSlotsInput, GameMixUncheckedCreateWithoutSlotsInput>
  }

  export type LocationCreateWithoutSlotsInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutSlotsInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    invoices?: InvoiceUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutSlotsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutSlotsInput, LocationUncheckedCreateWithoutSlotsInput>
  }

  export type ProviderUpsertWithoutSlotsInput = {
    update: XOR<ProviderUpdateWithoutSlotsInput, ProviderUncheckedUpdateWithoutSlotsInput>
    create: XOR<ProviderCreateWithoutSlotsInput, ProviderUncheckedCreateWithoutSlotsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutSlotsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutSlotsInput, ProviderUncheckedUpdateWithoutSlotsInput>
  }

  export type ProviderUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUpdateManyWithoutProviderNestedInput
    gameMixes?: GameMixUpdateManyWithoutProviderNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutProviderNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUncheckedUpdateManyWithoutProviderNestedInput
    gameMixes?: GameMixUncheckedUpdateManyWithoutProviderNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutProviderNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type CabinetUpsertWithoutSlotsInput = {
    update: XOR<CabinetUpdateWithoutSlotsInput, CabinetUncheckedUpdateWithoutSlotsInput>
    create: XOR<CabinetCreateWithoutSlotsInput, CabinetUncheckedCreateWithoutSlotsInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutSlotsInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutSlotsInput, CabinetUncheckedUpdateWithoutSlotsInput>
  }

  export type CabinetUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutCabinetsNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutCabinetNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutCabinetNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type GameMixUpsertWithoutSlotsInput = {
    update: XOR<GameMixUpdateWithoutSlotsInput, GameMixUncheckedUpdateWithoutSlotsInput>
    create: XOR<GameMixCreateWithoutSlotsInput, GameMixUncheckedCreateWithoutSlotsInput>
    where?: GameMixWhereInput
  }

  export type GameMixUpdateToOneWithWhereWithoutSlotsInput = {
    where?: GameMixWhereInput
    data: XOR<GameMixUpdateWithoutSlotsInput, GameMixUncheckedUpdateWithoutSlotsInput>
  }

  export type GameMixUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutGameMixesNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutGameMixNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutGameMixNestedInput
  }

  export type GameMixUncheckedUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutGameMixNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutGameMixNestedInput
  }

  export type LocationUpsertWithoutSlotsInput = {
    update: XOR<LocationUpdateWithoutSlotsInput, LocationUncheckedUpdateWithoutSlotsInput>
    create: XOR<LocationCreateWithoutSlotsInput, LocationUncheckedCreateWithoutSlotsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutSlotsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutSlotsInput, LocationUncheckedUpdateWithoutSlotsInput>
  }

  export type LocationUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutSlotsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    invoices?: InvoiceUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateWithoutInvoicesInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutInvoicesInput = {
    id?: string
    name: string
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutInvoicesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
  }

  export type LocationUpsertWithoutInvoicesInput = {
    update: XOR<LocationUpdateWithoutInvoicesInput, LocationUncheckedUpdateWithoutInvoicesInput>
    create: XOR<LocationCreateWithoutInvoicesInput, LocationUncheckedCreateWithoutInvoicesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutInvoicesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutInvoicesInput, LocationUncheckedUpdateWithoutInvoicesInput>
  }

  export type LocationUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type ProviderCreateWithoutMetrologyApprovalsInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetCreateNestedManyWithoutProviderInput
    gameMixes?: GameMixCreateNestedManyWithoutProviderInput
    slots?: SlotMachineCreateNestedManyWithoutProviderInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutMetrologyApprovalsInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetUncheckedCreateNestedManyWithoutProviderInput
    gameMixes?: GameMixUncheckedCreateNestedManyWithoutProviderInput
    slots?: SlotMachineUncheckedCreateNestedManyWithoutProviderInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutMetrologyApprovalsInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutMetrologyApprovalsInput, ProviderUncheckedCreateWithoutMetrologyApprovalsInput>
  }

  export type CabinetCreateWithoutMetrologyApprovalsInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutCabinetsInput
    slots?: SlotMachineCreateNestedManyWithoutCabinetInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutMetrologyApprovalsInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineUncheckedCreateNestedManyWithoutCabinetInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutMetrologyApprovalsInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutMetrologyApprovalsInput, CabinetUncheckedCreateWithoutMetrologyApprovalsInput>
  }

  export type GameMixCreateWithoutMetrologyApprovalsInput = {
    id?: string
    name: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutGameMixesInput
    slots?: SlotMachineCreateNestedManyWithoutGameMixInput
    metrologySoftware?: MetrologySoftwareCreateNestedManyWithoutGameMixInput
  }

  export type GameMixUncheckedCreateWithoutMetrologyApprovalsInput = {
    id?: string
    name: string
    providerId: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineUncheckedCreateNestedManyWithoutGameMixInput
    metrologySoftware?: MetrologySoftwareUncheckedCreateNestedManyWithoutGameMixInput
  }

  export type GameMixCreateOrConnectWithoutMetrologyApprovalsInput = {
    where: GameMixWhereUniqueInput
    create: XOR<GameMixCreateWithoutMetrologyApprovalsInput, GameMixUncheckedCreateWithoutMetrologyApprovalsInput>
  }

  export type MetrologySoftwareCreateWithoutApprovalsInput = {
    id?: string
    name: string
    version?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutMetrologySoftwareInput
    cabinet?: CabinetCreateNestedOneWithoutMetrologySoftwareInput
    gameMix?: GameMixCreateNestedOneWithoutMetrologySoftwareInput
  }

  export type MetrologySoftwareUncheckedCreateWithoutApprovalsInput = {
    id?: string
    name: string
    version?: string | null
    providerId?: string | null
    cabinetId?: string | null
    gameMixId?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologySoftwareCreateOrConnectWithoutApprovalsInput = {
    where: MetrologySoftwareWhereUniqueInput
    create: XOR<MetrologySoftwareCreateWithoutApprovalsInput, MetrologySoftwareUncheckedCreateWithoutApprovalsInput>
  }

  export type ProviderUpsertWithoutMetrologyApprovalsInput = {
    update: XOR<ProviderUpdateWithoutMetrologyApprovalsInput, ProviderUncheckedUpdateWithoutMetrologyApprovalsInput>
    create: XOR<ProviderCreateWithoutMetrologyApprovalsInput, ProviderUncheckedCreateWithoutMetrologyApprovalsInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutMetrologyApprovalsInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutMetrologyApprovalsInput, ProviderUncheckedUpdateWithoutMetrologyApprovalsInput>
  }

  export type ProviderUpdateWithoutMetrologyApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUpdateManyWithoutProviderNestedInput
    gameMixes?: GameMixUpdateManyWithoutProviderNestedInput
    slots?: SlotMachineUpdateManyWithoutProviderNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutMetrologyApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUncheckedUpdateManyWithoutProviderNestedInput
    gameMixes?: GameMixUncheckedUpdateManyWithoutProviderNestedInput
    slots?: SlotMachineUncheckedUpdateManyWithoutProviderNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type CabinetUpsertWithoutMetrologyApprovalsInput = {
    update: XOR<CabinetUpdateWithoutMetrologyApprovalsInput, CabinetUncheckedUpdateWithoutMetrologyApprovalsInput>
    create: XOR<CabinetCreateWithoutMetrologyApprovalsInput, CabinetUncheckedCreateWithoutMetrologyApprovalsInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutMetrologyApprovalsInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutMetrologyApprovalsInput, CabinetUncheckedUpdateWithoutMetrologyApprovalsInput>
  }

  export type CabinetUpdateWithoutMetrologyApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutCabinetsNestedInput
    slots?: SlotMachineUpdateManyWithoutCabinetNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutMetrologyApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUncheckedUpdateManyWithoutCabinetNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type GameMixUpsertWithoutMetrologyApprovalsInput = {
    update: XOR<GameMixUpdateWithoutMetrologyApprovalsInput, GameMixUncheckedUpdateWithoutMetrologyApprovalsInput>
    create: XOR<GameMixCreateWithoutMetrologyApprovalsInput, GameMixUncheckedCreateWithoutMetrologyApprovalsInput>
    where?: GameMixWhereInput
  }

  export type GameMixUpdateToOneWithWhereWithoutMetrologyApprovalsInput = {
    where?: GameMixWhereInput
    data: XOR<GameMixUpdateWithoutMetrologyApprovalsInput, GameMixUncheckedUpdateWithoutMetrologyApprovalsInput>
  }

  export type GameMixUpdateWithoutMetrologyApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutGameMixesNestedInput
    slots?: SlotMachineUpdateManyWithoutGameMixNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutGameMixNestedInput
  }

  export type GameMixUncheckedUpdateWithoutMetrologyApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUncheckedUpdateManyWithoutGameMixNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutGameMixNestedInput
  }

  export type MetrologySoftwareUpsertWithoutApprovalsInput = {
    update: XOR<MetrologySoftwareUpdateWithoutApprovalsInput, MetrologySoftwareUncheckedUpdateWithoutApprovalsInput>
    create: XOR<MetrologySoftwareCreateWithoutApprovalsInput, MetrologySoftwareUncheckedCreateWithoutApprovalsInput>
    where?: MetrologySoftwareWhereInput
  }

  export type MetrologySoftwareUpdateToOneWithWhereWithoutApprovalsInput = {
    where?: MetrologySoftwareWhereInput
    data: XOR<MetrologySoftwareUpdateWithoutApprovalsInput, MetrologySoftwareUncheckedUpdateWithoutApprovalsInput>
  }

  export type MetrologySoftwareUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutMetrologySoftwareNestedInput
    cabinet?: CabinetUpdateOneWithoutMetrologySoftwareNestedInput
    gameMix?: GameMixUpdateOneWithoutMetrologySoftwareNestedInput
  }

  export type MetrologySoftwareUncheckedUpdateWithoutApprovalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateWithoutMetrologySoftwareInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetCreateNestedManyWithoutProviderInput
    gameMixes?: GameMixCreateNestedManyWithoutProviderInput
    slots?: SlotMachineCreateNestedManyWithoutProviderInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateWithoutMetrologySoftwareInput = {
    id?: string
    name: string
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cabinets?: CabinetUncheckedCreateNestedManyWithoutProviderInput
    gameMixes?: GameMixUncheckedCreateNestedManyWithoutProviderInput
    slots?: SlotMachineUncheckedCreateNestedManyWithoutProviderInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderCreateOrConnectWithoutMetrologySoftwareInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutMetrologySoftwareInput, ProviderUncheckedCreateWithoutMetrologySoftwareInput>
  }

  export type CabinetCreateWithoutMetrologySoftwareInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutCabinetsInput
    slots?: SlotMachineCreateNestedManyWithoutCabinetInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutCabinetInput
  }

  export type CabinetUncheckedCreateWithoutMetrologySoftwareInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    providerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineUncheckedCreateNestedManyWithoutCabinetInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutCabinetInput
  }

  export type CabinetCreateOrConnectWithoutMetrologySoftwareInput = {
    where: CabinetWhereUniqueInput
    create: XOR<CabinetCreateWithoutMetrologySoftwareInput, CabinetUncheckedCreateWithoutMetrologySoftwareInput>
  }

  export type GameMixCreateWithoutMetrologySoftwareInput = {
    id?: string
    name: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutGameMixesInput
    slots?: SlotMachineCreateNestedManyWithoutGameMixInput
    metrologyApprovals?: MetrologyApprovalCreateNestedManyWithoutGameMixInput
  }

  export type GameMixUncheckedCreateWithoutMetrologySoftwareInput = {
    id?: string
    name: string
    providerId: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slots?: SlotMachineUncheckedCreateNestedManyWithoutGameMixInput
    metrologyApprovals?: MetrologyApprovalUncheckedCreateNestedManyWithoutGameMixInput
  }

  export type GameMixCreateOrConnectWithoutMetrologySoftwareInput = {
    where: GameMixWhereUniqueInput
    create: XOR<GameMixCreateWithoutMetrologySoftwareInput, GameMixUncheckedCreateWithoutMetrologySoftwareInput>
  }

  export type MetrologyApprovalCreateWithoutSoftwareInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    provider?: ProviderCreateNestedOneWithoutMetrologyApprovalsInput
    cabinet?: CabinetCreateNestedOneWithoutMetrologyApprovalsInput
    gameMix?: GameMixCreateNestedOneWithoutMetrologyApprovalsInput
  }

  export type MetrologyApprovalUncheckedCreateWithoutSoftwareInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    providerId?: string | null
    cabinetId?: string | null
    gameMixId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyApprovalCreateOrConnectWithoutSoftwareInput = {
    where: MetrologyApprovalWhereUniqueInput
    create: XOR<MetrologyApprovalCreateWithoutSoftwareInput, MetrologyApprovalUncheckedCreateWithoutSoftwareInput>
  }

  export type MetrologyApprovalCreateManySoftwareInputEnvelope = {
    data: MetrologyApprovalCreateManySoftwareInput | MetrologyApprovalCreateManySoftwareInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutMetrologySoftwareInput = {
    update: XOR<ProviderUpdateWithoutMetrologySoftwareInput, ProviderUncheckedUpdateWithoutMetrologySoftwareInput>
    create: XOR<ProviderCreateWithoutMetrologySoftwareInput, ProviderUncheckedCreateWithoutMetrologySoftwareInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutMetrologySoftwareInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutMetrologySoftwareInput, ProviderUncheckedUpdateWithoutMetrologySoftwareInput>
  }

  export type ProviderUpdateWithoutMetrologySoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUpdateManyWithoutProviderNestedInput
    gameMixes?: GameMixUpdateManyWithoutProviderNestedInput
    slots?: SlotMachineUpdateManyWithoutProviderNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateWithoutMetrologySoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinets?: CabinetUncheckedUpdateManyWithoutProviderNestedInput
    gameMixes?: GameMixUncheckedUpdateManyWithoutProviderNestedInput
    slots?: SlotMachineUncheckedUpdateManyWithoutProviderNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type CabinetUpsertWithoutMetrologySoftwareInput = {
    update: XOR<CabinetUpdateWithoutMetrologySoftwareInput, CabinetUncheckedUpdateWithoutMetrologySoftwareInput>
    create: XOR<CabinetCreateWithoutMetrologySoftwareInput, CabinetUncheckedCreateWithoutMetrologySoftwareInput>
    where?: CabinetWhereInput
  }

  export type CabinetUpdateToOneWithWhereWithoutMetrologySoftwareInput = {
    where?: CabinetWhereInput
    data: XOR<CabinetUpdateWithoutMetrologySoftwareInput, CabinetUncheckedUpdateWithoutMetrologySoftwareInput>
  }

  export type CabinetUpdateWithoutMetrologySoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutCabinetsNestedInput
    slots?: SlotMachineUpdateManyWithoutCabinetNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutMetrologySoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUncheckedUpdateManyWithoutCabinetNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type GameMixUpsertWithoutMetrologySoftwareInput = {
    update: XOR<GameMixUpdateWithoutMetrologySoftwareInput, GameMixUncheckedUpdateWithoutMetrologySoftwareInput>
    create: XOR<GameMixCreateWithoutMetrologySoftwareInput, GameMixUncheckedCreateWithoutMetrologySoftwareInput>
    where?: GameMixWhereInput
  }

  export type GameMixUpdateToOneWithWhereWithoutMetrologySoftwareInput = {
    where?: GameMixWhereInput
    data: XOR<GameMixUpdateWithoutMetrologySoftwareInput, GameMixUncheckedUpdateWithoutMetrologySoftwareInput>
  }

  export type GameMixUpdateWithoutMetrologySoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutGameMixesNestedInput
    slots?: SlotMachineUpdateManyWithoutGameMixNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutGameMixNestedInput
  }

  export type GameMixUncheckedUpdateWithoutMetrologySoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUncheckedUpdateManyWithoutGameMixNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutGameMixNestedInput
  }

  export type MetrologyApprovalUpsertWithWhereUniqueWithoutSoftwareInput = {
    where: MetrologyApprovalWhereUniqueInput
    update: XOR<MetrologyApprovalUpdateWithoutSoftwareInput, MetrologyApprovalUncheckedUpdateWithoutSoftwareInput>
    create: XOR<MetrologyApprovalCreateWithoutSoftwareInput, MetrologyApprovalUncheckedCreateWithoutSoftwareInput>
  }

  export type MetrologyApprovalUpdateWithWhereUniqueWithoutSoftwareInput = {
    where: MetrologyApprovalWhereUniqueInput
    data: XOR<MetrologyApprovalUpdateWithoutSoftwareInput, MetrologyApprovalUncheckedUpdateWithoutSoftwareInput>
  }

  export type MetrologyApprovalUpdateManyWithWhereWithoutSoftwareInput = {
    where: MetrologyApprovalScalarWhereInput
    data: XOR<MetrologyApprovalUpdateManyMutationInput, MetrologyApprovalUncheckedUpdateManyWithoutSoftwareInput>
  }

  export type CabinetCreateManyProviderInput = {
    id?: string
    name: string
    model?: string | null
    manufacturer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameMixCreateManyProviderInput = {
    id?: string
    name: string
    games?: string | null
    gameCount?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotMachineCreateManyProviderInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    cabinetId: string
    gameMixId?: string | null
    locationId?: string | null
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyApprovalCreateManyProviderInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    cabinetId?: string | null
    gameMixId?: string | null
    softwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologySoftwareCreateManyProviderInput = {
    id?: string
    name: string
    version?: string | null
    cabinetId?: string | null
    gameMixId?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CabinetUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUpdateManyWithoutCabinetNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutCabinetNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUncheckedUpdateManyWithoutCabinetNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutCabinetNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutCabinetNestedInput
  }

  export type CabinetUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    model?: NullableStringFieldUpdateOperationsInput | string | null
    manufacturer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameMixUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUpdateManyWithoutGameMixNestedInput
    metrologyApprovals?: MetrologyApprovalUpdateManyWithoutGameMixNestedInput
    metrologySoftware?: MetrologySoftwareUpdateManyWithoutGameMixNestedInput
  }

  export type GameMixUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slots?: SlotMachineUncheckedUpdateManyWithoutGameMixNestedInput
    metrologyApprovals?: MetrologyApprovalUncheckedUpdateManyWithoutGameMixNestedInput
    metrologySoftware?: MetrologySoftwareUncheckedUpdateManyWithoutGameMixNestedInput
  }

  export type GameMixUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    games?: NullableStringFieldUpdateOperationsInput | string | null
    gameCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinet?: CabinetUpdateOneRequiredWithoutSlotsNestedInput
    gameMix?: GameMixUpdateOneWithoutSlotsNestedInput
    location?: LocationUpdateOneWithoutSlotsNestedInput
  }

  export type SlotMachineUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    cabinetId?: StringFieldUpdateOperationsInput | string
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    cabinetId?: StringFieldUpdateOperationsInput | string
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinet?: CabinetUpdateOneWithoutMetrologyApprovalsNestedInput
    gameMix?: GameMixUpdateOneWithoutMetrologyApprovalsNestedInput
    software?: MetrologySoftwareUpdateOneWithoutApprovalsNestedInput
  }

  export type MetrologyApprovalUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    softwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    softwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologySoftwareUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cabinet?: CabinetUpdateOneWithoutMetrologySoftwareNestedInput
    gameMix?: GameMixUpdateOneWithoutMetrologySoftwareNestedInput
    approvals?: MetrologyApprovalUpdateManyWithoutSoftwareNestedInput
  }

  export type MetrologySoftwareUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: MetrologyApprovalUncheckedUpdateManyWithoutSoftwareNestedInput
  }

  export type MetrologySoftwareUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineCreateManyLocationInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    providerId: string
    cabinetId: string
    gameMixId?: string | null
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InvoiceCreateManyLocationInput = {
    id?: string
    invoiceNumber: string
    amount: number
    currency?: string
    status?: string
    serialNumber?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotMachineUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutSlotsNestedInput
    cabinet?: CabinetUpdateOneRequiredWithoutSlotsNestedInput
    gameMix?: GameMixUpdateOneWithoutSlotsNestedInput
  }

  export type SlotMachineUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    cabinetId?: StringFieldUpdateOperationsInput | string
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    cabinetId?: StringFieldUpdateOperationsInput | string
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvoiceUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineCreateManyCabinetInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    providerId: string
    gameMixId?: string | null
    locationId?: string | null
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyApprovalCreateManyCabinetInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    providerId?: string | null
    gameMixId?: string | null
    softwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologySoftwareCreateManyCabinetInput = {
    id?: string
    name: string
    version?: string | null
    providerId?: string | null
    gameMixId?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotMachineUpdateWithoutCabinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutSlotsNestedInput
    gameMix?: GameMixUpdateOneWithoutSlotsNestedInput
    location?: LocationUpdateOneWithoutSlotsNestedInput
  }

  export type SlotMachineUncheckedUpdateWithoutCabinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineUncheckedUpdateManyWithoutCabinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalUpdateWithoutCabinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutMetrologyApprovalsNestedInput
    gameMix?: GameMixUpdateOneWithoutMetrologyApprovalsNestedInput
    software?: MetrologySoftwareUpdateOneWithoutApprovalsNestedInput
  }

  export type MetrologyApprovalUncheckedUpdateWithoutCabinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    softwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalUncheckedUpdateManyWithoutCabinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    softwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologySoftwareUpdateWithoutCabinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutMetrologySoftwareNestedInput
    gameMix?: GameMixUpdateOneWithoutMetrologySoftwareNestedInput
    approvals?: MetrologyApprovalUpdateManyWithoutSoftwareNestedInput
  }

  export type MetrologySoftwareUncheckedUpdateWithoutCabinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: MetrologyApprovalUncheckedUpdateManyWithoutSoftwareNestedInput
  }

  export type MetrologySoftwareUncheckedUpdateManyWithoutCabinetInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineCreateManyGameMixInput = {
    id?: string
    serialNumber: string
    manufacturer: string
    providerId: string
    cabinetId: string
    locationId?: string | null
    productionYear?: number | null
    denomination?: number | null
    maxBet?: number | null
    rtp?: number | null
    gamingPlaces?: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyApprovalCreateManyGameMixInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    providerId?: string | null
    cabinetId?: string | null
    softwareId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologySoftwareCreateManyGameMixInput = {
    id?: string
    name: string
    version?: string | null
    providerId?: string | null
    cabinetId?: string | null
    serialNumbers?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SlotMachineUpdateWithoutGameMixInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutSlotsNestedInput
    cabinet?: CabinetUpdateOneRequiredWithoutSlotsNestedInput
    location?: LocationUpdateOneWithoutSlotsNestedInput
  }

  export type SlotMachineUncheckedUpdateWithoutGameMixInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    cabinetId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotMachineUncheckedUpdateManyWithoutGameMixInput = {
    id?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    manufacturer?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    cabinetId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    productionYear?: NullableIntFieldUpdateOperationsInput | number | null
    denomination?: NullableFloatFieldUpdateOperationsInput | number | null
    maxBet?: NullableFloatFieldUpdateOperationsInput | number | null
    rtp?: NullableFloatFieldUpdateOperationsInput | number | null
    gamingPlaces?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalUpdateWithoutGameMixInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutMetrologyApprovalsNestedInput
    cabinet?: CabinetUpdateOneWithoutMetrologyApprovalsNestedInput
    software?: MetrologySoftwareUpdateOneWithoutApprovalsNestedInput
  }

  export type MetrologyApprovalUncheckedUpdateWithoutGameMixInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    softwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalUncheckedUpdateManyWithoutGameMixInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    softwareId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologySoftwareUpdateWithoutGameMixInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutMetrologySoftwareNestedInput
    cabinet?: CabinetUpdateOneWithoutMetrologySoftwareNestedInput
    approvals?: MetrologyApprovalUpdateManyWithoutSoftwareNestedInput
  }

  export type MetrologySoftwareUncheckedUpdateWithoutGameMixInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvals?: MetrologyApprovalUncheckedUpdateManyWithoutSoftwareNestedInput
  }

  export type MetrologySoftwareUncheckedUpdateManyWithoutGameMixInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    version?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumbers?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalCreateManySoftwareInput = {
    id?: string
    name: string
    dataEmitere?: Date | string | null
    dataExpirare?: Date | string | null
    providerId?: string | null
    cabinetId?: string | null
    gameMixId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MetrologyApprovalUpdateWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneWithoutMetrologyApprovalsNestedInput
    cabinet?: CabinetUpdateOneWithoutMetrologyApprovalsNestedInput
    gameMix?: GameMixUpdateOneWithoutMetrologyApprovalsNestedInput
  }

  export type MetrologyApprovalUncheckedUpdateWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MetrologyApprovalUncheckedUpdateManyWithoutSoftwareInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    dataEmitere?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    dataExpirare?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    cabinetId?: NullableStringFieldUpdateOperationsInput | string | null
    gameMixId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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