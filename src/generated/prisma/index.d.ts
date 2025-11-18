
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
 * Model cart_products
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type cart_products = $Result.DefaultSelection<Prisma.$cart_productsPayload>
/**
 * Model carts
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type carts = $Result.DefaultSelection<Prisma.$cartsPayload>
/**
 * Model categories
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model products
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model ratings
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type ratings = $Result.DefaultSelection<Prisma.$ratingsPayload>
/**
 * Model users
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cart_products
 * const cart_products = await prisma.cart_products.findMany()
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
   * // Fetch zero or more Cart_products
   * const cart_products = await prisma.cart_products.findMany()
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
   * `prisma.cart_products`: Exposes CRUD operations for the **cart_products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cart_products
    * const cart_products = await prisma.cart_products.findMany()
    * ```
    */
  get cart_products(): Prisma.cart_productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.cartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratings`: Exposes CRUD operations for the **ratings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.ratings.findMany()
    * ```
    */
  get ratings(): Prisma.ratingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    cart_products: 'cart_products',
    carts: 'carts',
    categories: 'categories',
    products: 'products',
    ratings: 'ratings',
    users: 'users'
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
      modelProps: "cart_products" | "carts" | "categories" | "products" | "ratings" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      cart_products: {
        payload: Prisma.$cart_productsPayload<ExtArgs>
        fields: Prisma.cart_productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cart_productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cart_productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload>
          }
          findFirst: {
            args: Prisma.cart_productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cart_productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload>
          }
          findMany: {
            args: Prisma.cart_productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload>[]
          }
          create: {
            args: Prisma.cart_productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload>
          }
          createMany: {
            args: Prisma.cart_productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cart_productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload>[]
          }
          delete: {
            args: Prisma.cart_productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload>
          }
          update: {
            args: Prisma.cart_productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload>
          }
          deleteMany: {
            args: Prisma.cart_productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cart_productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cart_productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload>[]
          }
          upsert: {
            args: Prisma.cart_productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_productsPayload>
          }
          aggregate: {
            args: Prisma.Cart_productsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart_products>
          }
          groupBy: {
            args: Prisma.cart_productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cart_productsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cart_productsCountArgs<ExtArgs>
            result: $Utils.Optional<Cart_productsCountAggregateOutputType> | number
          }
        }
      }
      carts: {
        payload: Prisma.$cartsPayload<ExtArgs>
        fields: Prisma.cartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findFirst: {
            args: Prisma.cartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findMany: {
            args: Prisma.cartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          create: {
            args: Prisma.cartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          createMany: {
            args: Prisma.cartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          delete: {
            args: Prisma.cartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          update: {
            args: Prisma.cartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          deleteMany: {
            args: Prisma.cartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          upsert: {
            args: Prisma.cartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.cartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      ratings: {
        payload: Prisma.$ratingsPayload<ExtArgs>
        fields: Prisma.ratingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ratingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ratingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          findFirst: {
            args: Prisma.ratingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ratingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          findMany: {
            args: Prisma.ratingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>[]
          }
          create: {
            args: Prisma.ratingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          createMany: {
            args: Prisma.ratingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ratingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>[]
          }
          delete: {
            args: Prisma.ratingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          update: {
            args: Prisma.ratingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          deleteMany: {
            args: Prisma.ratingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ratingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ratingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>[]
          }
          upsert: {
            args: Prisma.ratingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ratingsPayload>
          }
          aggregate: {
            args: Prisma.RatingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatings>
          }
          groupBy: {
            args: Prisma.ratingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ratingsCountArgs<ExtArgs>
            result: $Utils.Optional<RatingsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    cart_products?: cart_productsOmit
    carts?: cartsOmit
    categories?: categoriesOmit
    products?: productsOmit
    ratings?: ratingsOmit
    users?: usersOmit
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
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    cart_products: number
  }

  export type CartsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_products?: boolean | CartsCountOutputTypeCountCart_productsArgs
  }

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCart_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_productsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    cart_products: number
    ratings: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_products?: boolean | ProductsCountOutputTypeCountCart_productsArgs
    ratings?: boolean | ProductsCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCart_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_productsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ratingsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    carts: number
    products: number
    ratings: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | UsersCountOutputTypeCountCartsArgs
    products?: boolean | UsersCountOutputTypeCountProductsArgs
    ratings?: boolean | UsersCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ratingsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model cart_products
   */

  export type AggregateCart_products = {
    _count: Cart_productsCountAggregateOutputType | null
    _avg: Cart_productsAvgAggregateOutputType | null
    _sum: Cart_productsSumAggregateOutputType | null
    _min: Cart_productsMinAggregateOutputType | null
    _max: Cart_productsMaxAggregateOutputType | null
  }

  export type Cart_productsAvgAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Cart_productsSumAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Cart_productsMinAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    created_at: Date | null
  }

  export type Cart_productsMaxAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    quantity: number | null
    created_at: Date | null
  }

  export type Cart_productsCountAggregateOutputType = {
    id: number
    cart_id: number
    product_id: number
    quantity: number
    created_at: number
    _all: number
  }


  export type Cart_productsAvgAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type Cart_productsSumAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type Cart_productsMinAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    created_at?: true
  }

  export type Cart_productsMaxAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    created_at?: true
  }

  export type Cart_productsCountAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    created_at?: true
    _all?: true
  }

  export type Cart_productsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_products to aggregate.
     */
    where?: cart_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_products to fetch.
     */
    orderBy?: cart_productsOrderByWithRelationInput | cart_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cart_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cart_products
    **/
    _count?: true | Cart_productsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cart_productsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cart_productsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cart_productsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cart_productsMaxAggregateInputType
  }

  export type GetCart_productsAggregateType<T extends Cart_productsAggregateArgs> = {
        [P in keyof T & keyof AggregateCart_products]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart_products[P]>
      : GetScalarType<T[P], AggregateCart_products[P]>
  }




  export type cart_productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_productsWhereInput
    orderBy?: cart_productsOrderByWithAggregationInput | cart_productsOrderByWithAggregationInput[]
    by: Cart_productsScalarFieldEnum[] | Cart_productsScalarFieldEnum
    having?: cart_productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cart_productsCountAggregateInputType | true
    _avg?: Cart_productsAvgAggregateInputType
    _sum?: Cart_productsSumAggregateInputType
    _min?: Cart_productsMinAggregateInputType
    _max?: Cart_productsMaxAggregateInputType
  }

  export type Cart_productsGroupByOutputType = {
    id: number
    cart_id: number
    product_id: number
    quantity: number
    created_at: Date | null
    _count: Cart_productsCountAggregateOutputType | null
    _avg: Cart_productsAvgAggregateOutputType | null
    _sum: Cart_productsSumAggregateOutputType | null
    _min: Cart_productsMinAggregateOutputType | null
    _max: Cart_productsMaxAggregateOutputType | null
  }

  type GetCart_productsGroupByPayload<T extends cart_productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cart_productsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cart_productsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cart_productsGroupByOutputType[P]>
            : GetScalarType<T[P], Cart_productsGroupByOutputType[P]>
        }
      >
    >


  export type cart_productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    created_at?: boolean
    carts?: boolean | cartsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_products"]>

  export type cart_productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    created_at?: boolean
    carts?: boolean | cartsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_products"]>

  export type cart_productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    created_at?: boolean
    carts?: boolean | cartsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart_products"]>

  export type cart_productsSelectScalar = {
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    created_at?: boolean
  }

  export type cart_productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cart_id" | "product_id" | "quantity" | "created_at", ExtArgs["result"]["cart_products"]>
  export type cart_productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | cartsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type cart_productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | cartsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type cart_productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | cartsDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $cart_productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart_products"
    objects: {
      carts: Prisma.$cartsPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cart_id: number
      product_id: number
      quantity: number
      created_at: Date | null
    }, ExtArgs["result"]["cart_products"]>
    composites: {}
  }

  type cart_productsGetPayload<S extends boolean | null | undefined | cart_productsDefaultArgs> = $Result.GetResult<Prisma.$cart_productsPayload, S>

  type cart_productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cart_productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cart_productsCountAggregateInputType | true
    }

  export interface cart_productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart_products'], meta: { name: 'cart_products' } }
    /**
     * Find zero or one Cart_products that matches the filter.
     * @param {cart_productsFindUniqueArgs} args - Arguments to find a Cart_products
     * @example
     * // Get one Cart_products
     * const cart_products = await prisma.cart_products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cart_productsFindUniqueArgs>(args: SelectSubset<T, cart_productsFindUniqueArgs<ExtArgs>>): Prisma__cart_productsClient<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart_products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cart_productsFindUniqueOrThrowArgs} args - Arguments to find a Cart_products
     * @example
     * // Get one Cart_products
     * const cart_products = await prisma.cart_products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cart_productsFindUniqueOrThrowArgs>(args: SelectSubset<T, cart_productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cart_productsClient<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_productsFindFirstArgs} args - Arguments to find a Cart_products
     * @example
     * // Get one Cart_products
     * const cart_products = await prisma.cart_products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cart_productsFindFirstArgs>(args?: SelectSubset<T, cart_productsFindFirstArgs<ExtArgs>>): Prisma__cart_productsClient<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_productsFindFirstOrThrowArgs} args - Arguments to find a Cart_products
     * @example
     * // Get one Cart_products
     * const cart_products = await prisma.cart_products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cart_productsFindFirstOrThrowArgs>(args?: SelectSubset<T, cart_productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cart_productsClient<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cart_products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cart_products
     * const cart_products = await prisma.cart_products.findMany()
     * 
     * // Get first 10 Cart_products
     * const cart_products = await prisma.cart_products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cart_productsWithIdOnly = await prisma.cart_products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cart_productsFindManyArgs>(args?: SelectSubset<T, cart_productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart_products.
     * @param {cart_productsCreateArgs} args - Arguments to create a Cart_products.
     * @example
     * // Create one Cart_products
     * const Cart_products = await prisma.cart_products.create({
     *   data: {
     *     // ... data to create a Cart_products
     *   }
     * })
     * 
     */
    create<T extends cart_productsCreateArgs>(args: SelectSubset<T, cart_productsCreateArgs<ExtArgs>>): Prisma__cart_productsClient<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cart_products.
     * @param {cart_productsCreateManyArgs} args - Arguments to create many Cart_products.
     * @example
     * // Create many Cart_products
     * const cart_products = await prisma.cart_products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cart_productsCreateManyArgs>(args?: SelectSubset<T, cart_productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cart_products and returns the data saved in the database.
     * @param {cart_productsCreateManyAndReturnArgs} args - Arguments to create many Cart_products.
     * @example
     * // Create many Cart_products
     * const cart_products = await prisma.cart_products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cart_products and only return the `id`
     * const cart_productsWithIdOnly = await prisma.cart_products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cart_productsCreateManyAndReturnArgs>(args?: SelectSubset<T, cart_productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart_products.
     * @param {cart_productsDeleteArgs} args - Arguments to delete one Cart_products.
     * @example
     * // Delete one Cart_products
     * const Cart_products = await prisma.cart_products.delete({
     *   where: {
     *     // ... filter to delete one Cart_products
     *   }
     * })
     * 
     */
    delete<T extends cart_productsDeleteArgs>(args: SelectSubset<T, cart_productsDeleteArgs<ExtArgs>>): Prisma__cart_productsClient<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart_products.
     * @param {cart_productsUpdateArgs} args - Arguments to update one Cart_products.
     * @example
     * // Update one Cart_products
     * const cart_products = await prisma.cart_products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cart_productsUpdateArgs>(args: SelectSubset<T, cart_productsUpdateArgs<ExtArgs>>): Prisma__cart_productsClient<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cart_products.
     * @param {cart_productsDeleteManyArgs} args - Arguments to filter Cart_products to delete.
     * @example
     * // Delete a few Cart_products
     * const { count } = await prisma.cart_products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cart_productsDeleteManyArgs>(args?: SelectSubset<T, cart_productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cart_products
     * const cart_products = await prisma.cart_products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cart_productsUpdateManyArgs>(args: SelectSubset<T, cart_productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_products and returns the data updated in the database.
     * @param {cart_productsUpdateManyAndReturnArgs} args - Arguments to update many Cart_products.
     * @example
     * // Update many Cart_products
     * const cart_products = await prisma.cart_products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cart_products and only return the `id`
     * const cart_productsWithIdOnly = await prisma.cart_products.updateManyAndReturn({
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
    updateManyAndReturn<T extends cart_productsUpdateManyAndReturnArgs>(args: SelectSubset<T, cart_productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart_products.
     * @param {cart_productsUpsertArgs} args - Arguments to update or create a Cart_products.
     * @example
     * // Update or create a Cart_products
     * const cart_products = await prisma.cart_products.upsert({
     *   create: {
     *     // ... data to create a Cart_products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart_products we want to update
     *   }
     * })
     */
    upsert<T extends cart_productsUpsertArgs>(args: SelectSubset<T, cart_productsUpsertArgs<ExtArgs>>): Prisma__cart_productsClient<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cart_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_productsCountArgs} args - Arguments to filter Cart_products to count.
     * @example
     * // Count the number of Cart_products
     * const count = await prisma.cart_products.count({
     *   where: {
     *     // ... the filter for the Cart_products we want to count
     *   }
     * })
    **/
    count<T extends cart_productsCountArgs>(
      args?: Subset<T, cart_productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cart_productsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_productsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Cart_productsAggregateArgs>(args: Subset<T, Cart_productsAggregateArgs>): Prisma.PrismaPromise<GetCart_productsAggregateType<T>>

    /**
     * Group by Cart_products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_productsGroupByArgs} args - Group by arguments.
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
      T extends cart_productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cart_productsGroupByArgs['orderBy'] }
        : { orderBy?: cart_productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cart_productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_productsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart_products model
   */
  readonly fields: cart_productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart_products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cart_productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends cartsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartsDefaultArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the cart_products model
   */
  interface cart_productsFieldRefs {
    readonly id: FieldRef<"cart_products", 'Int'>
    readonly cart_id: FieldRef<"cart_products", 'Int'>
    readonly product_id: FieldRef<"cart_products", 'Int'>
    readonly quantity: FieldRef<"cart_products", 'Int'>
    readonly created_at: FieldRef<"cart_products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cart_products findUnique
   */
  export type cart_productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    /**
     * Filter, which cart_products to fetch.
     */
    where: cart_productsWhereUniqueInput
  }

  /**
   * cart_products findUniqueOrThrow
   */
  export type cart_productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    /**
     * Filter, which cart_products to fetch.
     */
    where: cart_productsWhereUniqueInput
  }

  /**
   * cart_products findFirst
   */
  export type cart_productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    /**
     * Filter, which cart_products to fetch.
     */
    where?: cart_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_products to fetch.
     */
    orderBy?: cart_productsOrderByWithRelationInput | cart_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_products.
     */
    cursor?: cart_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_products.
     */
    distinct?: Cart_productsScalarFieldEnum | Cart_productsScalarFieldEnum[]
  }

  /**
   * cart_products findFirstOrThrow
   */
  export type cart_productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    /**
     * Filter, which cart_products to fetch.
     */
    where?: cart_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_products to fetch.
     */
    orderBy?: cart_productsOrderByWithRelationInput | cart_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_products.
     */
    cursor?: cart_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_products.
     */
    distinct?: Cart_productsScalarFieldEnum | Cart_productsScalarFieldEnum[]
  }

  /**
   * cart_products findMany
   */
  export type cart_productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    /**
     * Filter, which cart_products to fetch.
     */
    where?: cart_productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_products to fetch.
     */
    orderBy?: cart_productsOrderByWithRelationInput | cart_productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cart_products.
     */
    cursor?: cart_productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_products.
     */
    skip?: number
    distinct?: Cart_productsScalarFieldEnum | Cart_productsScalarFieldEnum[]
  }

  /**
   * cart_products create
   */
  export type cart_productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    /**
     * The data needed to create a cart_products.
     */
    data: XOR<cart_productsCreateInput, cart_productsUncheckedCreateInput>
  }

  /**
   * cart_products createMany
   */
  export type cart_productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cart_products.
     */
    data: cart_productsCreateManyInput | cart_productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart_products createManyAndReturn
   */
  export type cart_productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * The data used to create many cart_products.
     */
    data: cart_productsCreateManyInput | cart_productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart_products update
   */
  export type cart_productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    /**
     * The data needed to update a cart_products.
     */
    data: XOR<cart_productsUpdateInput, cart_productsUncheckedUpdateInput>
    /**
     * Choose, which cart_products to update.
     */
    where: cart_productsWhereUniqueInput
  }

  /**
   * cart_products updateMany
   */
  export type cart_productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cart_products.
     */
    data: XOR<cart_productsUpdateManyMutationInput, cart_productsUncheckedUpdateManyInput>
    /**
     * Filter which cart_products to update
     */
    where?: cart_productsWhereInput
    /**
     * Limit how many cart_products to update.
     */
    limit?: number
  }

  /**
   * cart_products updateManyAndReturn
   */
  export type cart_productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * The data used to update cart_products.
     */
    data: XOR<cart_productsUpdateManyMutationInput, cart_productsUncheckedUpdateManyInput>
    /**
     * Filter which cart_products to update
     */
    where?: cart_productsWhereInput
    /**
     * Limit how many cart_products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart_products upsert
   */
  export type cart_productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    /**
     * The filter to search for the cart_products to update in case it exists.
     */
    where: cart_productsWhereUniqueInput
    /**
     * In case the cart_products found by the `where` argument doesn't exist, create a new cart_products with this data.
     */
    create: XOR<cart_productsCreateInput, cart_productsUncheckedCreateInput>
    /**
     * In case the cart_products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cart_productsUpdateInput, cart_productsUncheckedUpdateInput>
  }

  /**
   * cart_products delete
   */
  export type cart_productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    /**
     * Filter which cart_products to delete.
     */
    where: cart_productsWhereUniqueInput
  }

  /**
   * cart_products deleteMany
   */
  export type cart_productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_products to delete
     */
    where?: cart_productsWhereInput
    /**
     * Limit how many cart_products to delete.
     */
    limit?: number
  }

  /**
   * cart_products without action
   */
  export type cart_productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
  }


  /**
   * Model carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CartsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CartsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    date: Date | null
    created_at: Date | null
  }

  export type CartsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    date: Date | null
    created_at: Date | null
  }

  export type CartsCountAggregateOutputType = {
    id: number
    user_id: number
    date: number
    created_at: number
    _all: number
  }


  export type CartsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartsMinAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    created_at?: true
  }

  export type CartsMaxAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    created_at?: true
  }

  export type CartsCountAggregateInputType = {
    id?: true
    user_id?: true
    date?: true
    created_at?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to aggregate.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type cartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithAggregationInput | cartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: cartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _avg?: CartsAvgAggregateInputType
    _sum?: CartsSumAggregateInputType
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id: number
    user_id: number
    date: Date | null
    created_at: Date | null
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends cartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type cartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    created_at?: boolean
    cart_products?: boolean | carts$cart_productsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    date?: boolean
    created_at?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectScalar = {
    id?: boolean
    user_id?: boolean
    date?: boolean
    created_at?: boolean
  }

  export type cartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "date" | "created_at", ExtArgs["result"]["carts"]>
  export type cartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_products?: boolean | carts$cart_productsArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cartsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type cartsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $cartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carts"
    objects: {
      cart_products: Prisma.$cart_productsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      date: Date | null
      created_at: Date | null
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type cartsGetPayload<S extends boolean | null | undefined | cartsDefaultArgs> = $Result.GetResult<Prisma.$cartsPayload, S>

  type cartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface cartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carts'], meta: { name: 'carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {cartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartsFindUniqueArgs>(args: SelectSubset<T, cartsFindUniqueArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartsFindUniqueOrThrowArgs>(args: SelectSubset<T, cartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartsFindFirstArgs>(args?: SelectSubset<T, cartsFindFirstArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartsFindFirstOrThrowArgs>(args?: SelectSubset<T, cartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartsFindManyArgs>(args?: SelectSubset<T, cartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {cartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends cartsCreateArgs>(args: SelectSubset<T, cartsCreateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartsCreateManyArgs>(args?: SelectSubset<T, cartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartsCreateManyAndReturnArgs>(args?: SelectSubset<T, cartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carts.
     * @param {cartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends cartsDeleteArgs>(args: SelectSubset<T, cartsDeleteArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {cartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartsUpdateArgs>(args: SelectSubset<T, cartsUpdateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartsDeleteManyArgs>(args?: SelectSubset<T, cartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartsUpdateManyArgs>(args: SelectSubset<T, cartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {cartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.updateManyAndReturn({
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
    updateManyAndReturn<T extends cartsUpdateManyAndReturnArgs>(args: SelectSubset<T, cartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carts.
     * @param {cartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends cartsUpsertArgs>(args: SelectSubset<T, cartsUpsertArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartsCountArgs>(
      args?: Subset<T, cartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsGroupByArgs} args - Group by arguments.
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
      T extends cartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartsGroupByArgs['orderBy'] }
        : { orderBy?: cartsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, cartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carts model
   */
  readonly fields: cartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart_products<T extends carts$cart_productsArgs<ExtArgs> = {}>(args?: Subset<T, carts$cart_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the carts model
   */
  interface cartsFieldRefs {
    readonly id: FieldRef<"carts", 'Int'>
    readonly user_id: FieldRef<"carts", 'Int'>
    readonly date: FieldRef<"carts", 'DateTime'>
    readonly created_at: FieldRef<"carts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * carts findUnique
   */
  export type cartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findUniqueOrThrow
   */
  export type cartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findFirst
   */
  export type cartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findFirstOrThrow
   */
  export type cartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findMany
   */
  export type cartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts create
   */
  export type cartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to create a carts.
     */
    data: XOR<cartsCreateInput, cartsUncheckedCreateInput>
  }

  /**
   * carts createMany
   */
  export type cartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carts createManyAndReturn
   */
  export type cartsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carts update
   */
  export type cartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to update a carts.
     */
    data: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
    /**
     * Choose, which carts to update.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts updateMany
   */
  export type cartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * carts updateManyAndReturn
   */
  export type cartsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carts upsert
   */
  export type cartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The filter to search for the carts to update in case it exists.
     */
    where: cartsWhereUniqueInput
    /**
     * In case the carts found by the `where` argument doesn't exist, create a new carts with this data.
     */
    create: XOR<cartsCreateInput, cartsUncheckedCreateInput>
    /**
     * In case the carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
  }

  /**
   * carts delete
   */
  export type cartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter which carts to delete.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts deleteMany
   */
  export type cartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * carts.cart_products
   */
  export type carts$cart_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    where?: cart_productsWhereInput
    orderBy?: cart_productsOrderByWithRelationInput | cart_productsOrderByWithRelationInput[]
    cursor?: cart_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_productsScalarFieldEnum | Cart_productsScalarFieldEnum[]
  }

  /**
   * carts without action
   */
  export type cartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    created_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      created_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    category_id: number | null
    seller_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    category_id: number | null
    seller_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    title: string | null
    price: Decimal | null
    description: string | null
    category_id: number | null
    image: string | null
    seller_id: number | null
    created_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    price: Decimal | null
    description: string | null
    category_id: number | null
    image: string | null
    seller_id: number | null
    created_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    title: number
    price: number
    description: number
    category_id: number
    image: number
    seller_id: number
    created_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    category_id?: true
    seller_id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    category_id?: true
    seller_id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
    description?: true
    category_id?: true
    image?: true
    seller_id?: true
    created_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
    description?: true
    category_id?: true
    image?: true
    seller_id?: true
    created_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    description?: true
    category_id?: true
    image?: true
    seller_id?: true
    created_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    title: string
    price: Decimal
    description: string | null
    category_id: number | null
    image: string | null
    seller_id: number | null
    created_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    category_id?: boolean
    image?: boolean
    seller_id?: boolean
    created_at?: boolean
    cart_products?: boolean | products$cart_productsArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    users?: boolean | products$usersArgs<ExtArgs>
    ratings?: boolean | products$ratingsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    category_id?: boolean
    image?: boolean
    seller_id?: boolean
    created_at?: boolean
    categories?: boolean | products$categoriesArgs<ExtArgs>
    users?: boolean | products$usersArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    category_id?: boolean
    image?: boolean
    seller_id?: boolean
    created_at?: boolean
    categories?: boolean | products$categoriesArgs<ExtArgs>
    users?: boolean | products$usersArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    title?: boolean
    price?: boolean
    description?: boolean
    category_id?: boolean
    image?: boolean
    seller_id?: boolean
    created_at?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "price" | "description" | "category_id" | "image" | "seller_id" | "created_at", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_products?: boolean | products$cart_productsArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    users?: boolean | products$usersArgs<ExtArgs>
    ratings?: boolean | products$ratingsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>
    users?: boolean | products$usersArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>
    users?: boolean | products$usersArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      cart_products: Prisma.$cart_productsPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
      ratings: Prisma.$ratingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      price: Prisma.Decimal
      description: string | null
      category_id: number | null
      image: string | null
      seller_id: number | null
      created_at: Date | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart_products<T extends products$cart_productsArgs<ExtArgs> = {}>(args?: Subset<T, products$cart_productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends products$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, products$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends products$usersArgs<ExtArgs> = {}>(args?: Subset<T, products$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ratings<T extends products$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, products$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly title: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly description: FieldRef<"products", 'String'>
    readonly category_id: FieldRef<"products", 'Int'>
    readonly image: FieldRef<"products", 'String'>
    readonly seller_id: FieldRef<"products", 'Int'>
    readonly created_at: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.cart_products
   */
  export type products$cart_productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_products
     */
    select?: cart_productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_products
     */
    omit?: cart_productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_productsInclude<ExtArgs> | null
    where?: cart_productsWhereInput
    orderBy?: cart_productsOrderByWithRelationInput | cart_productsOrderByWithRelationInput[]
    cursor?: cart_productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_productsScalarFieldEnum | Cart_productsScalarFieldEnum[]
  }

  /**
   * products.categories
   */
  export type products$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * products.users
   */
  export type products$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * products.ratings
   */
  export type products$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    where?: ratingsWhereInput
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    cursor?: ratingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model ratings
   */

  export type AggregateRatings = {
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  export type RatingsAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    rate: number | null
  }

  export type RatingsSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    rate: number | null
  }

  export type RatingsMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    rate: number | null
    comment: string | null
    created_at: Date | null
  }

  export type RatingsMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    rate: number | null
    comment: string | null
    created_at: Date | null
  }

  export type RatingsCountAggregateOutputType = {
    id: number
    product_id: number
    user_id: number
    rate: number
    comment: number
    created_at: number
    _all: number
  }


  export type RatingsAvgAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rate?: true
  }

  export type RatingsSumAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rate?: true
  }

  export type RatingsMinAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rate?: true
    comment?: true
    created_at?: true
  }

  export type RatingsMaxAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rate?: true
    comment?: true
    created_at?: true
  }

  export type RatingsCountAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rate?: true
    comment?: true
    created_at?: true
    _all?: true
  }

  export type RatingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ratings to aggregate.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ratings
    **/
    _count?: true | RatingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingsMaxAggregateInputType
  }

  export type GetRatingsAggregateType<T extends RatingsAggregateArgs> = {
        [P in keyof T & keyof AggregateRatings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatings[P]>
      : GetScalarType<T[P], AggregateRatings[P]>
  }




  export type ratingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ratingsWhereInput
    orderBy?: ratingsOrderByWithAggregationInput | ratingsOrderByWithAggregationInput[]
    by: RatingsScalarFieldEnum[] | RatingsScalarFieldEnum
    having?: ratingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingsCountAggregateInputType | true
    _avg?: RatingsAvgAggregateInputType
    _sum?: RatingsSumAggregateInputType
    _min?: RatingsMinAggregateInputType
    _max?: RatingsMaxAggregateInputType
  }

  export type RatingsGroupByOutputType = {
    id: number
    product_id: number
    user_id: number
    rate: number
    comment: string | null
    created_at: Date | null
    _count: RatingsCountAggregateOutputType | null
    _avg: RatingsAvgAggregateOutputType | null
    _sum: RatingsSumAggregateOutputType | null
    _min: RatingsMinAggregateOutputType | null
    _max: RatingsMaxAggregateOutputType | null
  }

  type GetRatingsGroupByPayload<T extends ratingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingsGroupByOutputType[P]>
            : GetScalarType<T[P], RatingsGroupByOutputType[P]>
        }
      >
    >


  export type ratingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    rate?: boolean
    comment?: boolean
    created_at?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratings"]>

  export type ratingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    rate?: boolean
    comment?: boolean
    created_at?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratings"]>

  export type ratingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    rate?: boolean
    comment?: boolean
    created_at?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ratings"]>

  export type ratingsSelectScalar = {
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    rate?: boolean
    comment?: boolean
    created_at?: boolean
  }

  export type ratingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "user_id" | "rate" | "comment" | "created_at", ExtArgs["result"]["ratings"]>
  export type ratingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type ratingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type ratingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $ratingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ratings"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number
      user_id: number
      rate: number
      comment: string | null
      created_at: Date | null
    }, ExtArgs["result"]["ratings"]>
    composites: {}
  }

  type ratingsGetPayload<S extends boolean | null | undefined | ratingsDefaultArgs> = $Result.GetResult<Prisma.$ratingsPayload, S>

  type ratingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ratingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingsCountAggregateInputType | true
    }

  export interface ratingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ratings'], meta: { name: 'ratings' } }
    /**
     * Find zero or one Ratings that matches the filter.
     * @param {ratingsFindUniqueArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ratingsFindUniqueArgs>(args: SelectSubset<T, ratingsFindUniqueArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ratings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ratingsFindUniqueOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ratingsFindUniqueOrThrowArgs>(args: SelectSubset<T, ratingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindFirstArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ratingsFindFirstArgs>(args?: SelectSubset<T, ratingsFindFirstArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ratings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindFirstOrThrowArgs} args - Arguments to find a Ratings
     * @example
     * // Get one Ratings
     * const ratings = await prisma.ratings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ratingsFindFirstOrThrowArgs>(args?: SelectSubset<T, ratingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.ratings.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.ratings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingsWithIdOnly = await prisma.ratings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ratingsFindManyArgs>(args?: SelectSubset<T, ratingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ratings.
     * @param {ratingsCreateArgs} args - Arguments to create a Ratings.
     * @example
     * // Create one Ratings
     * const Ratings = await prisma.ratings.create({
     *   data: {
     *     // ... data to create a Ratings
     *   }
     * })
     * 
     */
    create<T extends ratingsCreateArgs>(args: SelectSubset<T, ratingsCreateArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {ratingsCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const ratings = await prisma.ratings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ratingsCreateManyArgs>(args?: SelectSubset<T, ratingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {ratingsCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const ratings = await prisma.ratings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingsWithIdOnly = await prisma.ratings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ratingsCreateManyAndReturnArgs>(args?: SelectSubset<T, ratingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ratings.
     * @param {ratingsDeleteArgs} args - Arguments to delete one Ratings.
     * @example
     * // Delete one Ratings
     * const Ratings = await prisma.ratings.delete({
     *   where: {
     *     // ... filter to delete one Ratings
     *   }
     * })
     * 
     */
    delete<T extends ratingsDeleteArgs>(args: SelectSubset<T, ratingsDeleteArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ratings.
     * @param {ratingsUpdateArgs} args - Arguments to update one Ratings.
     * @example
     * // Update one Ratings
     * const ratings = await prisma.ratings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ratingsUpdateArgs>(args: SelectSubset<T, ratingsUpdateArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {ratingsDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.ratings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ratingsDeleteManyArgs>(args?: SelectSubset<T, ratingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ratingsUpdateManyArgs>(args: SelectSubset<T, ratingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {ratingsUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const ratings = await prisma.ratings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingsWithIdOnly = await prisma.ratings.updateManyAndReturn({
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
    updateManyAndReturn<T extends ratingsUpdateManyAndReturnArgs>(args: SelectSubset<T, ratingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ratings.
     * @param {ratingsUpsertArgs} args - Arguments to update or create a Ratings.
     * @example
     * // Update or create a Ratings
     * const ratings = await prisma.ratings.upsert({
     *   create: {
     *     // ... data to create a Ratings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ratings we want to update
     *   }
     * })
     */
    upsert<T extends ratingsUpsertArgs>(args: SelectSubset<T, ratingsUpsertArgs<ExtArgs>>): Prisma__ratingsClient<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.ratings.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends ratingsCountArgs>(
      args?: Subset<T, ratingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingsAggregateArgs>(args: Subset<T, RatingsAggregateArgs>): Prisma.PrismaPromise<GetRatingsAggregateType<T>>

    /**
     * Group by Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ratingsGroupByArgs} args - Group by arguments.
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
      T extends ratingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ratingsGroupByArgs['orderBy'] }
        : { orderBy?: ratingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ratingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ratings model
   */
  readonly fields: ratingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ratings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ratingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ratings model
   */
  interface ratingsFieldRefs {
    readonly id: FieldRef<"ratings", 'Int'>
    readonly product_id: FieldRef<"ratings", 'Int'>
    readonly user_id: FieldRef<"ratings", 'Int'>
    readonly rate: FieldRef<"ratings", 'Int'>
    readonly comment: FieldRef<"ratings", 'String'>
    readonly created_at: FieldRef<"ratings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ratings findUnique
   */
  export type ratingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings findUniqueOrThrow
   */
  export type ratingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings findFirst
   */
  export type ratingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings findFirstOrThrow
   */
  export type ratingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ratings.
     */
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings findMany
   */
  export type ratingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter, which ratings to fetch.
     */
    where?: ratingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ratings to fetch.
     */
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ratings.
     */
    cursor?: ratingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ratings.
     */
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * ratings create
   */
  export type ratingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * The data needed to create a ratings.
     */
    data: XOR<ratingsCreateInput, ratingsUncheckedCreateInput>
  }

  /**
   * ratings createMany
   */
  export type ratingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ratings.
     */
    data: ratingsCreateManyInput | ratingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ratings createManyAndReturn
   */
  export type ratingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * The data used to create many ratings.
     */
    data: ratingsCreateManyInput | ratingsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ratings update
   */
  export type ratingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * The data needed to update a ratings.
     */
    data: XOR<ratingsUpdateInput, ratingsUncheckedUpdateInput>
    /**
     * Choose, which ratings to update.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings updateMany
   */
  export type ratingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ratings.
     */
    data: XOR<ratingsUpdateManyMutationInput, ratingsUncheckedUpdateManyInput>
    /**
     * Filter which ratings to update
     */
    where?: ratingsWhereInput
    /**
     * Limit how many ratings to update.
     */
    limit?: number
  }

  /**
   * ratings updateManyAndReturn
   */
  export type ratingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * The data used to update ratings.
     */
    data: XOR<ratingsUpdateManyMutationInput, ratingsUncheckedUpdateManyInput>
    /**
     * Filter which ratings to update
     */
    where?: ratingsWhereInput
    /**
     * Limit how many ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ratings upsert
   */
  export type ratingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * The filter to search for the ratings to update in case it exists.
     */
    where: ratingsWhereUniqueInput
    /**
     * In case the ratings found by the `where` argument doesn't exist, create a new ratings with this data.
     */
    create: XOR<ratingsCreateInput, ratingsUncheckedCreateInput>
    /**
     * In case the ratings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ratingsUpdateInput, ratingsUncheckedUpdateInput>
  }

  /**
   * ratings delete
   */
  export type ratingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    /**
     * Filter which ratings to delete.
     */
    where: ratingsWhereUniqueInput
  }

  /**
   * ratings deleteMany
   */
  export type ratingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ratings to delete
     */
    where?: ratingsWhereInput
    /**
     * Limit how many ratings to delete.
     */
    limit?: number
  }

  /**
   * ratings without action
   */
  export type ratingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
    carts?: boolean | users$cartsArgs<ExtArgs>
    products?: boolean | users$productsArgs<ExtArgs>
    ratings?: boolean | users$ratingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | users$cartsArgs<ExtArgs>
    products?: boolean | users$productsArgs<ExtArgs>
    ratings?: boolean | users$ratingsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      carts: Prisma.$cartsPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs>[]
      ratings: Prisma.$ratingsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends users$cartsArgs<ExtArgs> = {}>(args?: Subset<T, users$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends users$productsArgs<ExtArgs> = {}>(args?: Subset<T, users$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends users$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, users$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ratingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.carts
   */
  export type users$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    cursor?: cartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * users.products
   */
  export type users$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * users.ratings
   */
  export type users$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ratings
     */
    select?: ratingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ratings
     */
    omit?: ratingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ratingsInclude<ExtArgs> | null
    where?: ratingsWhereInput
    orderBy?: ratingsOrderByWithRelationInput | ratingsOrderByWithRelationInput[]
    cursor?: ratingsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingsScalarFieldEnum | RatingsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
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


  export const Cart_productsScalarFieldEnum: {
    id: 'id',
    cart_id: 'cart_id',
    product_id: 'product_id',
    quantity: 'quantity',
    created_at: 'created_at'
  };

  export type Cart_productsScalarFieldEnum = (typeof Cart_productsScalarFieldEnum)[keyof typeof Cart_productsScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    date: 'date',
    created_at: 'created_at'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price',
    description: 'description',
    category_id: 'category_id',
    image: 'image',
    seller_id: 'seller_id',
    created_at: 'created_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const RatingsScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    user_id: 'user_id',
    rate: 'rate',
    comment: 'comment',
    created_at: 'created_at'
  };

  export type RatingsScalarFieldEnum = (typeof RatingsScalarFieldEnum)[keyof typeof RatingsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type cart_productsWhereInput = {
    AND?: cart_productsWhereInput | cart_productsWhereInput[]
    OR?: cart_productsWhereInput[]
    NOT?: cart_productsWhereInput | cart_productsWhereInput[]
    id?: IntFilter<"cart_products"> | number
    cart_id?: IntFilter<"cart_products"> | number
    product_id?: IntFilter<"cart_products"> | number
    quantity?: IntFilter<"cart_products"> | number
    created_at?: DateTimeNullableFilter<"cart_products"> | Date | string | null
    carts?: XOR<CartsScalarRelationFilter, cartsWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type cart_productsOrderByWithRelationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrderInput | SortOrder
    carts?: cartsOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type cart_productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cart_id_product_id?: cart_productsCart_idProduct_idCompoundUniqueInput
    AND?: cart_productsWhereInput | cart_productsWhereInput[]
    OR?: cart_productsWhereInput[]
    NOT?: cart_productsWhereInput | cart_productsWhereInput[]
    cart_id?: IntFilter<"cart_products"> | number
    product_id?: IntFilter<"cart_products"> | number
    quantity?: IntFilter<"cart_products"> | number
    created_at?: DateTimeNullableFilter<"cart_products"> | Date | string | null
    carts?: XOR<CartsScalarRelationFilter, cartsWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "id" | "cart_id_product_id">

  export type cart_productsOrderByWithAggregationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: cart_productsCountOrderByAggregateInput
    _avg?: cart_productsAvgOrderByAggregateInput
    _max?: cart_productsMaxOrderByAggregateInput
    _min?: cart_productsMinOrderByAggregateInput
    _sum?: cart_productsSumOrderByAggregateInput
  }

  export type cart_productsScalarWhereWithAggregatesInput = {
    AND?: cart_productsScalarWhereWithAggregatesInput | cart_productsScalarWhereWithAggregatesInput[]
    OR?: cart_productsScalarWhereWithAggregatesInput[]
    NOT?: cart_productsScalarWhereWithAggregatesInput | cart_productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart_products"> | number
    cart_id?: IntWithAggregatesFilter<"cart_products"> | number
    product_id?: IntWithAggregatesFilter<"cart_products"> | number
    quantity?: IntWithAggregatesFilter<"cart_products"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"cart_products"> | Date | string | null
  }

  export type cartsWhereInput = {
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    id?: IntFilter<"carts"> | number
    user_id?: IntFilter<"carts"> | number
    date?: DateTimeNullableFilter<"carts"> | Date | string | null
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    cart_products?: Cart_productsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type cartsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    cart_products?: cart_productsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type cartsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    user_id?: IntFilter<"carts"> | number
    date?: DateTimeNullableFilter<"carts"> | Date | string | null
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    cart_products?: Cart_productsListRelationFilter
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id">

  export type cartsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: cartsCountOrderByAggregateInput
    _avg?: cartsAvgOrderByAggregateInput
    _max?: cartsMaxOrderByAggregateInput
    _min?: cartsMinOrderByAggregateInput
    _sum?: cartsSumOrderByAggregateInput
  }

  export type cartsScalarWhereWithAggregatesInput = {
    AND?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    OR?: cartsScalarWhereWithAggregatesInput[]
    NOT?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carts"> | number
    user_id?: IntWithAggregatesFilter<"carts"> | number
    date?: DateTimeNullableWithAggregatesFilter<"carts"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"carts"> | Date | string | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    products?: ProductsListRelationFilter
  }, "id" | "name">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    title?: StringFilter<"products"> | string
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"products"> | string | null
    category_id?: IntNullableFilter<"products"> | number | null
    image?: StringNullableFilter<"products"> | string | null
    seller_id?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    cart_products?: Cart_productsListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    ratings?: RatingsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    seller_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    cart_products?: cart_productsOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
    ratings?: ratingsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    title?: StringFilter<"products"> | string
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"products"> | string | null
    category_id?: IntNullableFilter<"products"> | number | null
    image?: StringNullableFilter<"products"> | string | null
    seller_id?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    cart_products?: Cart_productsListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    ratings?: RatingsListRelationFilter
  }, "id">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    seller_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    title?: StringWithAggregatesFilter<"products"> | string
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    category_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    image?: StringNullableWithAggregatesFilter<"products"> | string | null
    seller_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
  }

  export type ratingsWhereInput = {
    AND?: ratingsWhereInput | ratingsWhereInput[]
    OR?: ratingsWhereInput[]
    NOT?: ratingsWhereInput | ratingsWhereInput[]
    id?: IntFilter<"ratings"> | number
    product_id?: IntFilter<"ratings"> | number
    user_id?: IntFilter<"ratings"> | number
    rate?: IntFilter<"ratings"> | number
    comment?: StringNullableFilter<"ratings"> | string | null
    created_at?: DateTimeNullableFilter<"ratings"> | Date | string | null
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type ratingsOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    products?: productsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type ratingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    product_id_user_id?: ratingsProduct_idUser_idCompoundUniqueInput
    AND?: ratingsWhereInput | ratingsWhereInput[]
    OR?: ratingsWhereInput[]
    NOT?: ratingsWhereInput | ratingsWhereInput[]
    product_id?: IntFilter<"ratings"> | number
    user_id?: IntFilter<"ratings"> | number
    rate?: IntFilter<"ratings"> | number
    comment?: StringNullableFilter<"ratings"> | string | null
    created_at?: DateTimeNullableFilter<"ratings"> | Date | string | null
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "product_id_user_id">

  export type ratingsOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    comment?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: ratingsCountOrderByAggregateInput
    _avg?: ratingsAvgOrderByAggregateInput
    _max?: ratingsMaxOrderByAggregateInput
    _min?: ratingsMinOrderByAggregateInput
    _sum?: ratingsSumOrderByAggregateInput
  }

  export type ratingsScalarWhereWithAggregatesInput = {
    AND?: ratingsScalarWhereWithAggregatesInput | ratingsScalarWhereWithAggregatesInput[]
    OR?: ratingsScalarWhereWithAggregatesInput[]
    NOT?: ratingsScalarWhereWithAggregatesInput | ratingsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ratings"> | number
    product_id?: IntWithAggregatesFilter<"ratings"> | number
    user_id?: IntWithAggregatesFilter<"ratings"> | number
    rate?: IntWithAggregatesFilter<"ratings"> | number
    comment?: StringNullableWithAggregatesFilter<"ratings"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"ratings"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    carts?: CartsListRelationFilter
    products?: ProductsListRelationFilter
    ratings?: RatingsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    carts?: cartsOrderByRelationAggregateInput
    products?: productsOrderByRelationAggregateInput
    ratings?: ratingsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    carts?: CartsListRelationFilter
    products?: ProductsListRelationFilter
    ratings?: RatingsListRelationFilter
  }, "id" | "username" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type cart_productsCreateInput = {
    quantity: number
    created_at?: Date | string | null
    carts: cartsCreateNestedOneWithoutCart_productsInput
    products: productsCreateNestedOneWithoutCart_productsInput
  }

  export type cart_productsUncheckedCreateInput = {
    id?: number
    cart_id: number
    product_id: number
    quantity: number
    created_at?: Date | string | null
  }

  export type cart_productsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateOneRequiredWithoutCart_productsNestedInput
    products?: productsUpdateOneRequiredWithoutCart_productsNestedInput
  }

  export type cart_productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_productsCreateManyInput = {
    id?: number
    cart_id: number
    product_id: number
    quantity: number
    created_at?: Date | string | null
  }

  export type cart_productsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsCreateInput = {
    id: number
    date?: Date | string | null
    created_at?: Date | string | null
    cart_products?: cart_productsCreateNestedManyWithoutCartsInput
    users: usersCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateInput = {
    id: number
    user_id: number
    date?: Date | string | null
    created_at?: Date | string | null
    cart_products?: cart_productsUncheckedCreateNestedManyWithoutCartsInput
  }

  export type cartsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUpdateManyWithoutCartsNestedInput
    users?: usersUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type cartsCreateManyInput = {
    id: number
    user_id: number
    date?: Date | string | null
    created_at?: Date | string | null
  }

  export type cartsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesCreateInput = {
    name: string
    created_at?: Date | string | null
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    created_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
    created_at?: Date | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image?: string | null
    created_at?: Date | string | null
    cart_products?: cart_productsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
    users?: usersCreateNestedOneWithoutProductsInput
    ratings?: ratingsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    category_id?: number | null
    image?: string | null
    seller_id?: number | null
    created_at?: Date | string | null
    cart_products?: cart_productsUncheckedCreateNestedManyWithoutProductsInput
    ratings?: ratingsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
    users?: usersUpdateOneWithoutProductsNestedInput
    ratings?: ratingsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seller_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUncheckedUpdateManyWithoutProductsNestedInput
    ratings?: ratingsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    category_id?: number | null
    image?: string | null
    seller_id?: number | null
    created_at?: Date | string | null
  }

  export type productsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seller_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ratingsCreateInput = {
    rate: number
    comment?: string | null
    created_at?: Date | string | null
    products: productsCreateNestedOneWithoutRatingsInput
    users: usersCreateNestedOneWithoutRatingsInput
  }

  export type ratingsUncheckedCreateInput = {
    id?: number
    product_id: number
    user_id: number
    rate: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type ratingsUpdateInput = {
    rate?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutRatingsNestedInput
    users?: usersUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type ratingsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ratingsCreateManyInput = {
    id?: number
    product_id: number
    user_id: number
    rate: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type ratingsUpdateManyMutationInput = {
    rate?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ratingsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    id: number
    username: string
    email: string
    password: string
    created_at?: Date | string | null
    carts?: cartsCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
    ratings?: ratingsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id: number
    username: string
    email: string
    password: string
    created_at?: Date | string | null
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
    ratings?: ratingsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateManyWithoutUsersNestedInput
    products?: productsUpdateManyWithoutUsersNestedInput
    ratings?: ratingsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
    ratings?: ratingsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id: number
    username: string
    email: string
    password: string
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type CartsScalarRelationFilter = {
    is?: cartsWhereInput
    isNot?: cartsWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cart_productsCart_idProduct_idCompoundUniqueInput = {
    cart_id: number
    product_id: number
  }

  export type cart_productsCountOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
  }

  export type cart_productsAvgOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type cart_productsMaxOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
  }

  export type cart_productsMinOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
  }

  export type cart_productsSumOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
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

  export type Cart_productsListRelationFilter = {
    every?: cart_productsWhereInput
    some?: cart_productsWhereInput
    none?: cart_productsWhereInput
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type cart_productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
  }

  export type cartsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type cartsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
  }

  export type cartsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    date?: SortOrder
    created_at?: SortOrder
  }

  export type cartsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type RatingsListRelationFilter = {
    every?: ratingsWhereInput
    some?: ratingsWhereInput
    none?: ratingsWhereInput
  }

  export type ratingsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    image?: SortOrder
    seller_id?: SortOrder
    created_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    seller_id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    image?: SortOrder
    seller_id?: SortOrder
    created_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    description?: SortOrder
    category_id?: SortOrder
    image?: SortOrder
    seller_id?: SortOrder
    created_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    category_id?: SortOrder
    seller_id?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type ratingsProduct_idUser_idCompoundUniqueInput = {
    product_id: number
    user_id: number
  }

  export type ratingsCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type ratingsAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
  }

  export type ratingsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type ratingsMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
    comment?: SortOrder
    created_at?: SortOrder
  }

  export type ratingsSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rate?: SortOrder
  }

  export type CartsListRelationFilter = {
    every?: cartsWhereInput
    some?: cartsWhereInput
    none?: cartsWhereInput
  }

  export type cartsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cartsCreateNestedOneWithoutCart_productsInput = {
    create?: XOR<cartsCreateWithoutCart_productsInput, cartsUncheckedCreateWithoutCart_productsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_productsInput
    connect?: cartsWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutCart_productsInput = {
    create?: XOR<productsCreateWithoutCart_productsInput, productsUncheckedCreateWithoutCart_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCart_productsInput
    connect?: productsWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type cartsUpdateOneRequiredWithoutCart_productsNestedInput = {
    create?: XOR<cartsCreateWithoutCart_productsInput, cartsUncheckedCreateWithoutCart_productsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_productsInput
    upsert?: cartsUpsertWithoutCart_productsInput
    connect?: cartsWhereUniqueInput
    update?: XOR<XOR<cartsUpdateToOneWithWhereWithoutCart_productsInput, cartsUpdateWithoutCart_productsInput>, cartsUncheckedUpdateWithoutCart_productsInput>
  }

  export type productsUpdateOneRequiredWithoutCart_productsNestedInput = {
    create?: XOR<productsCreateWithoutCart_productsInput, productsUncheckedCreateWithoutCart_productsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCart_productsInput
    upsert?: productsUpsertWithoutCart_productsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutCart_productsInput, productsUpdateWithoutCart_productsInput>, productsUncheckedUpdateWithoutCart_productsInput>
  }

  export type cart_productsCreateNestedManyWithoutCartsInput = {
    create?: XOR<cart_productsCreateWithoutCartsInput, cart_productsUncheckedCreateWithoutCartsInput> | cart_productsCreateWithoutCartsInput[] | cart_productsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_productsCreateOrConnectWithoutCartsInput | cart_productsCreateOrConnectWithoutCartsInput[]
    createMany?: cart_productsCreateManyCartsInputEnvelope
    connect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCartsInput = {
    create?: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput
    connect?: usersWhereUniqueInput
  }

  export type cart_productsUncheckedCreateNestedManyWithoutCartsInput = {
    create?: XOR<cart_productsCreateWithoutCartsInput, cart_productsUncheckedCreateWithoutCartsInput> | cart_productsCreateWithoutCartsInput[] | cart_productsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_productsCreateOrConnectWithoutCartsInput | cart_productsCreateOrConnectWithoutCartsInput[]
    createMany?: cart_productsCreateManyCartsInputEnvelope
    connect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
  }

  export type cart_productsUpdateManyWithoutCartsNestedInput = {
    create?: XOR<cart_productsCreateWithoutCartsInput, cart_productsUncheckedCreateWithoutCartsInput> | cart_productsCreateWithoutCartsInput[] | cart_productsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_productsCreateOrConnectWithoutCartsInput | cart_productsCreateOrConnectWithoutCartsInput[]
    upsert?: cart_productsUpsertWithWhereUniqueWithoutCartsInput | cart_productsUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: cart_productsCreateManyCartsInputEnvelope
    set?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    disconnect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    delete?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    connect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    update?: cart_productsUpdateWithWhereUniqueWithoutCartsInput | cart_productsUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: cart_productsUpdateManyWithWhereWithoutCartsInput | cart_productsUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: cart_productsScalarWhereInput | cart_productsScalarWhereInput[]
  }

  export type usersUpdateOneRequiredWithoutCartsNestedInput = {
    create?: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput
    upsert?: usersUpsertWithoutCartsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCartsInput, usersUpdateWithoutCartsInput>, usersUncheckedUpdateWithoutCartsInput>
  }

  export type cart_productsUncheckedUpdateManyWithoutCartsNestedInput = {
    create?: XOR<cart_productsCreateWithoutCartsInput, cart_productsUncheckedCreateWithoutCartsInput> | cart_productsCreateWithoutCartsInput[] | cart_productsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_productsCreateOrConnectWithoutCartsInput | cart_productsCreateOrConnectWithoutCartsInput[]
    upsert?: cart_productsUpsertWithWhereUniqueWithoutCartsInput | cart_productsUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: cart_productsCreateManyCartsInputEnvelope
    set?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    disconnect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    delete?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    connect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    update?: cart_productsUpdateWithWhereUniqueWithoutCartsInput | cart_productsUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: cart_productsUpdateManyWithWhereWithoutCartsInput | cart_productsUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: cart_productsScalarWhereInput | cart_productsScalarWhereInput[]
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type cart_productsCreateNestedManyWithoutProductsInput = {
    create?: XOR<cart_productsCreateWithoutProductsInput, cart_productsUncheckedCreateWithoutProductsInput> | cart_productsCreateWithoutProductsInput[] | cart_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_productsCreateOrConnectWithoutProductsInput | cart_productsCreateOrConnectWithoutProductsInput[]
    createMany?: cart_productsCreateManyProductsInputEnvelope
    connect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProductsInput = {
    create?: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProductsInput
    connect?: usersWhereUniqueInput
  }

  export type ratingsCreateNestedManyWithoutProductsInput = {
    create?: XOR<ratingsCreateWithoutProductsInput, ratingsUncheckedCreateWithoutProductsInput> | ratingsCreateWithoutProductsInput[] | ratingsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutProductsInput | ratingsCreateOrConnectWithoutProductsInput[]
    createMany?: ratingsCreateManyProductsInputEnvelope
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
  }

  export type cart_productsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<cart_productsCreateWithoutProductsInput, cart_productsUncheckedCreateWithoutProductsInput> | cart_productsCreateWithoutProductsInput[] | cart_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_productsCreateOrConnectWithoutProductsInput | cart_productsCreateOrConnectWithoutProductsInput[]
    createMany?: cart_productsCreateManyProductsInputEnvelope
    connect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
  }

  export type ratingsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<ratingsCreateWithoutProductsInput, ratingsUncheckedCreateWithoutProductsInput> | ratingsCreateWithoutProductsInput[] | ratingsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutProductsInput | ratingsCreateOrConnectWithoutProductsInput[]
    createMany?: ratingsCreateManyProductsInputEnvelope
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type cart_productsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<cart_productsCreateWithoutProductsInput, cart_productsUncheckedCreateWithoutProductsInput> | cart_productsCreateWithoutProductsInput[] | cart_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_productsCreateOrConnectWithoutProductsInput | cart_productsCreateOrConnectWithoutProductsInput[]
    upsert?: cart_productsUpsertWithWhereUniqueWithoutProductsInput | cart_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: cart_productsCreateManyProductsInputEnvelope
    set?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    disconnect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    delete?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    connect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    update?: cart_productsUpdateWithWhereUniqueWithoutProductsInput | cart_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: cart_productsUpdateManyWithWhereWithoutProductsInput | cart_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: cart_productsScalarWhereInput | cart_productsScalarWhereInput[]
  }

  export type categoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type usersUpdateOneWithoutProductsNestedInput = {
    create?: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProductsInput
    upsert?: usersUpsertWithoutProductsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProductsInput, usersUpdateWithoutProductsInput>, usersUncheckedUpdateWithoutProductsInput>
  }

  export type ratingsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ratingsCreateWithoutProductsInput, ratingsUncheckedCreateWithoutProductsInput> | ratingsCreateWithoutProductsInput[] | ratingsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutProductsInput | ratingsCreateOrConnectWithoutProductsInput[]
    upsert?: ratingsUpsertWithWhereUniqueWithoutProductsInput | ratingsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ratingsCreateManyProductsInputEnvelope
    set?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    disconnect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    delete?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    update?: ratingsUpdateWithWhereUniqueWithoutProductsInput | ratingsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ratingsUpdateManyWithWhereWithoutProductsInput | ratingsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ratingsScalarWhereInput | ratingsScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cart_productsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<cart_productsCreateWithoutProductsInput, cart_productsUncheckedCreateWithoutProductsInput> | cart_productsCreateWithoutProductsInput[] | cart_productsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_productsCreateOrConnectWithoutProductsInput | cart_productsCreateOrConnectWithoutProductsInput[]
    upsert?: cart_productsUpsertWithWhereUniqueWithoutProductsInput | cart_productsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: cart_productsCreateManyProductsInputEnvelope
    set?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    disconnect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    delete?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    connect?: cart_productsWhereUniqueInput | cart_productsWhereUniqueInput[]
    update?: cart_productsUpdateWithWhereUniqueWithoutProductsInput | cart_productsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: cart_productsUpdateManyWithWhereWithoutProductsInput | cart_productsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: cart_productsScalarWhereInput | cart_productsScalarWhereInput[]
  }

  export type ratingsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<ratingsCreateWithoutProductsInput, ratingsUncheckedCreateWithoutProductsInput> | ratingsCreateWithoutProductsInput[] | ratingsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutProductsInput | ratingsCreateOrConnectWithoutProductsInput[]
    upsert?: ratingsUpsertWithWhereUniqueWithoutProductsInput | ratingsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: ratingsCreateManyProductsInputEnvelope
    set?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    disconnect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    delete?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    update?: ratingsUpdateWithWhereUniqueWithoutProductsInput | ratingsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: ratingsUpdateManyWithWhereWithoutProductsInput | ratingsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: ratingsScalarWhereInput | ratingsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutRatingsInput = {
    create?: XOR<productsCreateWithoutRatingsInput, productsUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: productsCreateOrConnectWithoutRatingsInput
    connect?: productsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutRatingsInput = {
    create?: XOR<usersCreateWithoutRatingsInput, usersUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutRatingsInput
    connect?: usersWhereUniqueInput
  }

  export type productsUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<productsCreateWithoutRatingsInput, productsUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: productsCreateOrConnectWithoutRatingsInput
    upsert?: productsUpsertWithoutRatingsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutRatingsInput, productsUpdateWithoutRatingsInput>, productsUncheckedUpdateWithoutRatingsInput>
  }

  export type usersUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<usersCreateWithoutRatingsInput, usersUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: usersCreateOrConnectWithoutRatingsInput
    upsert?: usersUpsertWithoutRatingsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRatingsInput, usersUpdateWithoutRatingsInput>, usersUncheckedUpdateWithoutRatingsInput>
  }

  export type cartsCreateNestedManyWithoutUsersInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
  }

  export type productsCreateNestedManyWithoutUsersInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type ratingsCreateNestedManyWithoutUsersInput = {
    create?: XOR<ratingsCreateWithoutUsersInput, ratingsUncheckedCreateWithoutUsersInput> | ratingsCreateWithoutUsersInput[] | ratingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutUsersInput | ratingsCreateOrConnectWithoutUsersInput[]
    createMany?: ratingsCreateManyUsersInputEnvelope
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
  }

  export type cartsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type ratingsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ratingsCreateWithoutUsersInput, ratingsUncheckedCreateWithoutUsersInput> | ratingsCreateWithoutUsersInput[] | ratingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutUsersInput | ratingsCreateOrConnectWithoutUsersInput[]
    createMany?: ratingsCreateManyUsersInputEnvelope
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
  }

  export type cartsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    upsert?: cartsUpsertWithWhereUniqueWithoutUsersInput | cartsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    set?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    disconnect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    delete?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    update?: cartsUpdateWithWhereUniqueWithoutUsersInput | cartsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: cartsUpdateManyWithWhereWithoutUsersInput | cartsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: cartsScalarWhereInput | cartsScalarWhereInput[]
  }

  export type productsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutUsersInput | productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutUsersInput | productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: productsUpdateManyWithWhereWithoutUsersInput | productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type ratingsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ratingsCreateWithoutUsersInput, ratingsUncheckedCreateWithoutUsersInput> | ratingsCreateWithoutUsersInput[] | ratingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutUsersInput | ratingsCreateOrConnectWithoutUsersInput[]
    upsert?: ratingsUpsertWithWhereUniqueWithoutUsersInput | ratingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ratingsCreateManyUsersInputEnvelope
    set?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    disconnect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    delete?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    update?: ratingsUpdateWithWhereUniqueWithoutUsersInput | ratingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ratingsUpdateManyWithWhereWithoutUsersInput | ratingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ratingsScalarWhereInput | ratingsScalarWhereInput[]
  }

  export type cartsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    upsert?: cartsUpsertWithWhereUniqueWithoutUsersInput | cartsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    set?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    disconnect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    delete?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    update?: cartsUpdateWithWhereUniqueWithoutUsersInput | cartsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: cartsUpdateManyWithWhereWithoutUsersInput | cartsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: cartsScalarWhereInput | cartsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput> | productsCreateWithoutUsersInput[] | productsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: productsCreateOrConnectWithoutUsersInput | productsCreateOrConnectWithoutUsersInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutUsersInput | productsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: productsCreateManyUsersInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutUsersInput | productsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: productsUpdateManyWithWhereWithoutUsersInput | productsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type ratingsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ratingsCreateWithoutUsersInput, ratingsUncheckedCreateWithoutUsersInput> | ratingsCreateWithoutUsersInput[] | ratingsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ratingsCreateOrConnectWithoutUsersInput | ratingsCreateOrConnectWithoutUsersInput[]
    upsert?: ratingsUpsertWithWhereUniqueWithoutUsersInput | ratingsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ratingsCreateManyUsersInputEnvelope
    set?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    disconnect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    delete?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    connect?: ratingsWhereUniqueInput | ratingsWhereUniqueInput[]
    update?: ratingsUpdateWithWhereUniqueWithoutUsersInput | ratingsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ratingsUpdateManyWithWhereWithoutUsersInput | ratingsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ratingsScalarWhereInput | ratingsScalarWhereInput[]
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type cartsCreateWithoutCart_productsInput = {
    id: number
    date?: Date | string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutCart_productsInput = {
    id: number
    user_id: number
    date?: Date | string | null
    created_at?: Date | string | null
  }

  export type cartsCreateOrConnectWithoutCart_productsInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutCart_productsInput, cartsUncheckedCreateWithoutCart_productsInput>
  }

  export type productsCreateWithoutCart_productsInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image?: string | null
    created_at?: Date | string | null
    categories?: categoriesCreateNestedOneWithoutProductsInput
    users?: usersCreateNestedOneWithoutProductsInput
    ratings?: ratingsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCart_productsInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    category_id?: number | null
    image?: string | null
    seller_id?: number | null
    created_at?: Date | string | null
    ratings?: ratingsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCart_productsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCart_productsInput, productsUncheckedCreateWithoutCart_productsInput>
  }

  export type cartsUpsertWithoutCart_productsInput = {
    update: XOR<cartsUpdateWithoutCart_productsInput, cartsUncheckedUpdateWithoutCart_productsInput>
    create: XOR<cartsCreateWithoutCart_productsInput, cartsUncheckedCreateWithoutCart_productsInput>
    where?: cartsWhereInput
  }

  export type cartsUpdateToOneWithWhereWithoutCart_productsInput = {
    where?: cartsWhereInput
    data: XOR<cartsUpdateWithoutCart_productsInput, cartsUncheckedUpdateWithoutCart_productsInput>
  }

  export type cartsUpdateWithoutCart_productsInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutCart_productsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpsertWithoutCart_productsInput = {
    update: XOR<productsUpdateWithoutCart_productsInput, productsUncheckedUpdateWithoutCart_productsInput>
    create: XOR<productsCreateWithoutCart_productsInput, productsUncheckedCreateWithoutCart_productsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutCart_productsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutCart_productsInput, productsUncheckedUpdateWithoutCart_productsInput>
  }

  export type productsUpdateWithoutCart_productsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneWithoutProductsNestedInput
    users?: usersUpdateOneWithoutProductsNestedInput
    ratings?: ratingsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCart_productsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seller_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ratings?: ratingsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type cart_productsCreateWithoutCartsInput = {
    quantity: number
    created_at?: Date | string | null
    products: productsCreateNestedOneWithoutCart_productsInput
  }

  export type cart_productsUncheckedCreateWithoutCartsInput = {
    id?: number
    product_id: number
    quantity: number
    created_at?: Date | string | null
  }

  export type cart_productsCreateOrConnectWithoutCartsInput = {
    where: cart_productsWhereUniqueInput
    create: XOR<cart_productsCreateWithoutCartsInput, cart_productsUncheckedCreateWithoutCartsInput>
  }

  export type cart_productsCreateManyCartsInputEnvelope = {
    data: cart_productsCreateManyCartsInput | cart_productsCreateManyCartsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCartsInput = {
    id: number
    username: string
    email: string
    password: string
    created_at?: Date | string | null
    products?: productsCreateNestedManyWithoutUsersInput
    ratings?: ratingsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCartsInput = {
    id: number
    username: string
    email: string
    password: string
    created_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
    ratings?: ratingsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCartsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
  }

  export type cart_productsUpsertWithWhereUniqueWithoutCartsInput = {
    where: cart_productsWhereUniqueInput
    update: XOR<cart_productsUpdateWithoutCartsInput, cart_productsUncheckedUpdateWithoutCartsInput>
    create: XOR<cart_productsCreateWithoutCartsInput, cart_productsUncheckedCreateWithoutCartsInput>
  }

  export type cart_productsUpdateWithWhereUniqueWithoutCartsInput = {
    where: cart_productsWhereUniqueInput
    data: XOR<cart_productsUpdateWithoutCartsInput, cart_productsUncheckedUpdateWithoutCartsInput>
  }

  export type cart_productsUpdateManyWithWhereWithoutCartsInput = {
    where: cart_productsScalarWhereInput
    data: XOR<cart_productsUpdateManyMutationInput, cart_productsUncheckedUpdateManyWithoutCartsInput>
  }

  export type cart_productsScalarWhereInput = {
    AND?: cart_productsScalarWhereInput | cart_productsScalarWhereInput[]
    OR?: cart_productsScalarWhereInput[]
    NOT?: cart_productsScalarWhereInput | cart_productsScalarWhereInput[]
    id?: IntFilter<"cart_products"> | number
    cart_id?: IntFilter<"cart_products"> | number
    product_id?: IntFilter<"cart_products"> | number
    quantity?: IntFilter<"cart_products"> | number
    created_at?: DateTimeNullableFilter<"cart_products"> | Date | string | null
  }

  export type usersUpsertWithoutCartsInput = {
    update: XOR<usersUpdateWithoutCartsInput, usersUncheckedUpdateWithoutCartsInput>
    create: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCartsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCartsInput, usersUncheckedUpdateWithoutCartsInput>
  }

  export type usersUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateManyWithoutUsersNestedInput
    ratings?: ratingsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
    ratings?: ratingsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type productsCreateWithoutCategoriesInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image?: string | null
    created_at?: Date | string | null
    cart_products?: cart_productsCreateNestedManyWithoutProductsInput
    users?: usersCreateNestedOneWithoutProductsInput
    ratings?: ratingsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image?: string | null
    seller_id?: number | null
    created_at?: Date | string | null
    cart_products?: cart_productsUncheckedCreateNestedManyWithoutProductsInput
    ratings?: ratingsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: IntFilter<"products"> | number
    title?: StringFilter<"products"> | string
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    description?: StringNullableFilter<"products"> | string | null
    category_id?: IntNullableFilter<"products"> | number | null
    image?: StringNullableFilter<"products"> | string | null
    seller_id?: IntNullableFilter<"products"> | number | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
  }

  export type cart_productsCreateWithoutProductsInput = {
    quantity: number
    created_at?: Date | string | null
    carts: cartsCreateNestedOneWithoutCart_productsInput
  }

  export type cart_productsUncheckedCreateWithoutProductsInput = {
    id?: number
    cart_id: number
    quantity: number
    created_at?: Date | string | null
  }

  export type cart_productsCreateOrConnectWithoutProductsInput = {
    where: cart_productsWhereUniqueInput
    create: XOR<cart_productsCreateWithoutProductsInput, cart_productsUncheckedCreateWithoutProductsInput>
  }

  export type cart_productsCreateManyProductsInputEnvelope = {
    data: cart_productsCreateManyProductsInput | cart_productsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutProductsInput = {
    name: string
    created_at?: Date | string | null
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    created_at?: Date | string | null
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type usersCreateWithoutProductsInput = {
    id: number
    username: string
    email: string
    password: string
    created_at?: Date | string | null
    carts?: cartsCreateNestedManyWithoutUsersInput
    ratings?: ratingsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProductsInput = {
    id: number
    username: string
    email: string
    password: string
    created_at?: Date | string | null
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    ratings?: ratingsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProductsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
  }

  export type ratingsCreateWithoutProductsInput = {
    rate: number
    comment?: string | null
    created_at?: Date | string | null
    users: usersCreateNestedOneWithoutRatingsInput
  }

  export type ratingsUncheckedCreateWithoutProductsInput = {
    id?: number
    user_id: number
    rate: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type ratingsCreateOrConnectWithoutProductsInput = {
    where: ratingsWhereUniqueInput
    create: XOR<ratingsCreateWithoutProductsInput, ratingsUncheckedCreateWithoutProductsInput>
  }

  export type ratingsCreateManyProductsInputEnvelope = {
    data: ratingsCreateManyProductsInput | ratingsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type cart_productsUpsertWithWhereUniqueWithoutProductsInput = {
    where: cart_productsWhereUniqueInput
    update: XOR<cart_productsUpdateWithoutProductsInput, cart_productsUncheckedUpdateWithoutProductsInput>
    create: XOR<cart_productsCreateWithoutProductsInput, cart_productsUncheckedCreateWithoutProductsInput>
  }

  export type cart_productsUpdateWithWhereUniqueWithoutProductsInput = {
    where: cart_productsWhereUniqueInput
    data: XOR<cart_productsUpdateWithoutProductsInput, cart_productsUncheckedUpdateWithoutProductsInput>
  }

  export type cart_productsUpdateManyWithWhereWithoutProductsInput = {
    where: cart_productsScalarWhereInput
    data: XOR<cart_productsUpdateManyMutationInput, cart_productsUncheckedUpdateManyWithoutProductsInput>
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUpsertWithoutProductsInput = {
    update: XOR<usersUpdateWithoutProductsInput, usersUncheckedUpdateWithoutProductsInput>
    create: XOR<usersCreateWithoutProductsInput, usersUncheckedCreateWithoutProductsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProductsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProductsInput, usersUncheckedUpdateWithoutProductsInput>
  }

  export type usersUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateManyWithoutUsersNestedInput
    ratings?: ratingsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    ratings?: ratingsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ratingsUpsertWithWhereUniqueWithoutProductsInput = {
    where: ratingsWhereUniqueInput
    update: XOR<ratingsUpdateWithoutProductsInput, ratingsUncheckedUpdateWithoutProductsInput>
    create: XOR<ratingsCreateWithoutProductsInput, ratingsUncheckedCreateWithoutProductsInput>
  }

  export type ratingsUpdateWithWhereUniqueWithoutProductsInput = {
    where: ratingsWhereUniqueInput
    data: XOR<ratingsUpdateWithoutProductsInput, ratingsUncheckedUpdateWithoutProductsInput>
  }

  export type ratingsUpdateManyWithWhereWithoutProductsInput = {
    where: ratingsScalarWhereInput
    data: XOR<ratingsUpdateManyMutationInput, ratingsUncheckedUpdateManyWithoutProductsInput>
  }

  export type ratingsScalarWhereInput = {
    AND?: ratingsScalarWhereInput | ratingsScalarWhereInput[]
    OR?: ratingsScalarWhereInput[]
    NOT?: ratingsScalarWhereInput | ratingsScalarWhereInput[]
    id?: IntFilter<"ratings"> | number
    product_id?: IntFilter<"ratings"> | number
    user_id?: IntFilter<"ratings"> | number
    rate?: IntFilter<"ratings"> | number
    comment?: StringNullableFilter<"ratings"> | string | null
    created_at?: DateTimeNullableFilter<"ratings"> | Date | string | null
  }

  export type productsCreateWithoutRatingsInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image?: string | null
    created_at?: Date | string | null
    cart_products?: cart_productsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
    users?: usersCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutRatingsInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    category_id?: number | null
    image?: string | null
    seller_id?: number | null
    created_at?: Date | string | null
    cart_products?: cart_productsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutRatingsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutRatingsInput, productsUncheckedCreateWithoutRatingsInput>
  }

  export type usersCreateWithoutRatingsInput = {
    id: number
    username: string
    email: string
    password: string
    created_at?: Date | string | null
    carts?: cartsCreateNestedManyWithoutUsersInput
    products?: productsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutRatingsInput = {
    id: number
    username: string
    email: string
    password: string
    created_at?: Date | string | null
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    products?: productsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutRatingsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRatingsInput, usersUncheckedCreateWithoutRatingsInput>
  }

  export type productsUpsertWithoutRatingsInput = {
    update: XOR<productsUpdateWithoutRatingsInput, productsUncheckedUpdateWithoutRatingsInput>
    create: XOR<productsCreateWithoutRatingsInput, productsUncheckedCreateWithoutRatingsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutRatingsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutRatingsInput, productsUncheckedUpdateWithoutRatingsInput>
  }

  export type productsUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
    users?: usersUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seller_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type usersUpsertWithoutRatingsInput = {
    update: XOR<usersUpdateWithoutRatingsInput, usersUncheckedUpdateWithoutRatingsInput>
    create: XOR<usersCreateWithoutRatingsInput, usersUncheckedCreateWithoutRatingsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRatingsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRatingsInput, usersUncheckedUpdateWithoutRatingsInput>
  }

  export type usersUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateManyWithoutUsersNestedInput
    products?: productsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    products?: productsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type cartsCreateWithoutUsersInput = {
    id: number
    date?: Date | string | null
    created_at?: Date | string | null
    cart_products?: cart_productsCreateNestedManyWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutUsersInput = {
    id: number
    date?: Date | string | null
    created_at?: Date | string | null
    cart_products?: cart_productsUncheckedCreateNestedManyWithoutCartsInput
  }

  export type cartsCreateOrConnectWithoutUsersInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
  }

  export type cartsCreateManyUsersInputEnvelope = {
    data: cartsCreateManyUsersInput | cartsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutUsersInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image?: string | null
    created_at?: Date | string | null
    cart_products?: cart_productsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
    ratings?: ratingsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutUsersInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    category_id?: number | null
    image?: string | null
    created_at?: Date | string | null
    cart_products?: cart_productsUncheckedCreateNestedManyWithoutProductsInput
    ratings?: ratingsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutUsersInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput>
  }

  export type productsCreateManyUsersInputEnvelope = {
    data: productsCreateManyUsersInput | productsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ratingsCreateWithoutUsersInput = {
    rate: number
    comment?: string | null
    created_at?: Date | string | null
    products: productsCreateNestedOneWithoutRatingsInput
  }

  export type ratingsUncheckedCreateWithoutUsersInput = {
    id?: number
    product_id: number
    rate: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type ratingsCreateOrConnectWithoutUsersInput = {
    where: ratingsWhereUniqueInput
    create: XOR<ratingsCreateWithoutUsersInput, ratingsUncheckedCreateWithoutUsersInput>
  }

  export type ratingsCreateManyUsersInputEnvelope = {
    data: ratingsCreateManyUsersInput | ratingsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type cartsUpsertWithWhereUniqueWithoutUsersInput = {
    where: cartsWhereUniqueInput
    update: XOR<cartsUpdateWithoutUsersInput, cartsUncheckedUpdateWithoutUsersInput>
    create: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
  }

  export type cartsUpdateWithWhereUniqueWithoutUsersInput = {
    where: cartsWhereUniqueInput
    data: XOR<cartsUpdateWithoutUsersInput, cartsUncheckedUpdateWithoutUsersInput>
  }

  export type cartsUpdateManyWithWhereWithoutUsersInput = {
    where: cartsScalarWhereInput
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyWithoutUsersInput>
  }

  export type cartsScalarWhereInput = {
    AND?: cartsScalarWhereInput | cartsScalarWhereInput[]
    OR?: cartsScalarWhereInput[]
    NOT?: cartsScalarWhereInput | cartsScalarWhereInput[]
    id?: IntFilter<"carts"> | number
    user_id?: IntFilter<"carts"> | number
    date?: DateTimeNullableFilter<"carts"> | Date | string | null
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
  }

  export type productsUpsertWithWhereUniqueWithoutUsersInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutUsersInput, productsUncheckedUpdateWithoutUsersInput>
    create: XOR<productsCreateWithoutUsersInput, productsUncheckedCreateWithoutUsersInput>
  }

  export type productsUpdateWithWhereUniqueWithoutUsersInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutUsersInput, productsUncheckedUpdateWithoutUsersInput>
  }

  export type productsUpdateManyWithWhereWithoutUsersInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ratingsUpsertWithWhereUniqueWithoutUsersInput = {
    where: ratingsWhereUniqueInput
    update: XOR<ratingsUpdateWithoutUsersInput, ratingsUncheckedUpdateWithoutUsersInput>
    create: XOR<ratingsCreateWithoutUsersInput, ratingsUncheckedCreateWithoutUsersInput>
  }

  export type ratingsUpdateWithWhereUniqueWithoutUsersInput = {
    where: ratingsWhereUniqueInput
    data: XOR<ratingsUpdateWithoutUsersInput, ratingsUncheckedUpdateWithoutUsersInput>
  }

  export type ratingsUpdateManyWithWhereWithoutUsersInput = {
    where: ratingsScalarWhereInput
    data: XOR<ratingsUpdateManyMutationInput, ratingsUncheckedUpdateManyWithoutUsersInput>
  }

  export type cart_productsCreateManyCartsInput = {
    id?: number
    product_id: number
    quantity: number
    created_at?: Date | string | null
  }

  export type cart_productsUpdateWithoutCartsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutCart_productsNestedInput
  }

  export type cart_productsUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_productsUncheckedUpdateManyWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateManyCategoriesInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    image?: string | null
    seller_id?: number | null
    created_at?: Date | string | null
  }

  export type productsUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUpdateManyWithoutProductsNestedInput
    users?: usersUpdateOneWithoutProductsNestedInput
    ratings?: ratingsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seller_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUncheckedUpdateManyWithoutProductsNestedInput
    ratings?: ratingsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    seller_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_productsCreateManyProductsInput = {
    id?: number
    cart_id: number
    quantity: number
    created_at?: Date | string | null
  }

  export type ratingsCreateManyProductsInput = {
    id?: number
    user_id: number
    rate: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type cart_productsUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateOneRequiredWithoutCart_productsNestedInput
  }

  export type cart_productsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_productsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ratingsUpdateWithoutProductsInput = {
    rate?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type ratingsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ratingsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsCreateManyUsersInput = {
    id: number
    date?: Date | string | null
    created_at?: Date | string | null
  }

  export type productsCreateManyUsersInput = {
    id: number
    title: string
    price: Decimal | DecimalJsLike | number | string
    description?: string | null
    category_id?: number | null
    image?: string | null
    created_at?: Date | string | null
  }

  export type ratingsCreateManyUsersInput = {
    id?: number
    product_id: number
    rate: number
    comment?: string | null
    created_at?: Date | string | null
  }

  export type cartsUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUpdateManyWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
    ratings?: ratingsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_products?: cart_productsUncheckedUpdateManyWithoutProductsNestedInput
    ratings?: ratingsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ratingsUpdateWithoutUsersInput = {
    rate?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type ratingsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ratingsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    rate?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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