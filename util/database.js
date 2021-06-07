// import camecaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// Access enviromental variables for calling the DB
dotenvSafe.config();
// connect to DB
const sql = postgres();

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
