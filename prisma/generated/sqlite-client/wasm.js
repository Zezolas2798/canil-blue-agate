
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  Serializable: 'Serializable'
});

exports.Prisma.ClientScalarFieldEnum = {
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

exports.Prisma.DogScalarFieldEnum = {
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

exports.Prisma.LeadScalarFieldEnum = {
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

exports.Prisma.LitterScalarFieldEnum = {
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

exports.Prisma.PuppyScalarFieldEnum = {
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

exports.Prisma.SiteConfigScalarFieldEnum = {
  id: 'id',
  key: 'key',
  value: 'value',
  label: 'label',
  type: 'type',
  updatedAt: 'updatedAt'
};

exports.Prisma.TransactionScalarFieldEnum = {
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

exports.Prisma.VaccineScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Client: 'Client',
  Dog: 'Dog',
  Lead: 'Lead',
  Litter: 'Litter',
  Puppy: 'Puppy',
  SiteConfig: 'SiteConfig',
  Transaction: 'Transaction',
  Vaccine: 'Vaccine'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
