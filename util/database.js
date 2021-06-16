// import camecaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';
import setPostgresDefaultsOnHeroku from './setPostgresDefaultsOnHeroku';

setPostgresDefaultsOnHeroku();

// Access enviromental variables for calling the DB
dotenvSafe.config();
// connect to DB
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();
// Get all books from DB for products Page
export async function getBooks() {
  const books = await sql`SELECT * FROM books`;
  return books.map((book) => book);
}

// Get one book specified by Id from DB for productId Page
export async function getBookById(id) {
  if (isNaN(id)) return;
  const books = await sql`
    SELECT
      *
    FROM
      books
    WHERE
      id = ${id}
  `;
  return books[0];
}
