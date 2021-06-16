// exports.up = async function up(sql) {
//   await sql`
// 	INSERT INTO books (title, author, price, genre, imgadress)
// 	VALUES
// 	('Book 1', 'Author 1', '16.99', 'Horror', '../book-covers-big1.jpg'),
// 	('Book 2', 'Author 2', '18.99', 'Drama',  '..\36809135.jpg'),
// 	('Book 3', 'Author 3', '24.99', 'History', '..\2458079.jpg'),
// 	('Book 4', 'Author 4', '21.99', 'Science', '..\Science_books_9781101875209.jpg'),
// 	('Book 5', 'Author 5', '19.99', 'Religion', '..\Cool-Memoir_Inspirational-Book-Cover.jpg'),
// 	('Book 6', 'Author 6', '13.99', 'Biography', '..\Sienna-Napoleon-Illustration-Book-Cover.jpg'),
// 	('Book 7', 'Author 7', '17.99', 'Philosophy', '..\9781951142858.jpg'),
// 	('Book 8', 'Author 8', '29.99', 'Horror', '..\61ZKNw0xixL.jpg'),
// 	('Book 9', 'Author 9', '25.99', 'Drama', '..\t9i-edit-book-covers-online.jpg'),
// 	('Book 10', 'Author 10', '27.99', 'Science', '..\d3s-design-book-covers.jpg'),
// 	('Book 11', 'Author 11', '13.99', 'Poetry', '..\Book-Cover-11aa.jpg'),
// 	('Book 12', 'Author 12', '16.99', 'History', '..\last-good-300.png'),
// 	('Book 13', 'Author 13', '11.99', 'Poetry', '..\Book-cover-page-3-CRC.png'),
// 	('Book 14', 'Author 14', '9.99', 'Sci-fi', '..\photo_14601_0-5.jpg'),
// 	('Book 15', 'Author 15', '23.99', 'Fantasy', '..\cover00031.jpg')
// 	`;
// };
// exports.down = async function down(sql) {
//   await sql`
// 	DELETE FROM books WHERE
// 	id=1 OR
// 	id=2 OR
// 	id=3 OR
// 	id=4 OR
// 	id=5 OR
// 	id=6 OR
// 	id=7 OR
// 	id=8 OR
// 	id=9 OR
// 	id=10 OR
// 	id=11 OR
// 	id=12 OR
// 	id=13 OR
// 	id=14 OR
// 	id=15
// 	`;
// };

const books = [
  {
    title: 'Book 1',
    author: 'Author 1',
    price: '16.99',
    genre: 'Horror',
    imgadress: '../book-covers-big1.jpg',
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    price: '18.99',
    genre: 'Drama',
    imgadress: '../36809135.jpg',
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    price: '24.99',
    genre: 'History',
    imgadress: '../2458079.jpg',
  },
  {
    title: 'Book 4',
    author: 'Author 4',
    price: '21.99',
    genre: 'Science',
    imgadress: '../Science_books_9781101875209.jpg',
  },
  {
    title: 'Book 5',
    author: 'Author 5',
    price: '19.99',
    genre: 'Religion',
    imgadress: '../Cool-Memoir_Inspirational-Book-Cover.jpg',
  },
  {
    title: 'Book 6',
    author: 'Author 6',
    price: '13.99',
    genre: 'Biography',
    imgadress: '../Sienna-Napoleon-Illustration-Book-Cover.jpg',
  },
  {
    title: 'Book 7',
    author: 'Author 7',
    price: '17.99',
    genre: 'Philosophy',
    imgadress: '../9781951142858.jpg',
  },
  {
    title: 'Book 8',
    author: 'Author 8',
    price: '29.99',
    genre: 'Horror',
    imgadress: '../61ZKNw0xixL.jpg',
  },
  {
    title: 'Book 9',
    author: 'Author 9',
    price: '25.99',
    genre: 'Drama',
    imgadress: '../t9i-edit-book-covers-online.jpg',
  },
  {
    title: 'Book 10',
    author: 'Author 10',
    price: '27.99',
    genre: 'Science',
    imgadress: '../d3s-design-book-covers.jpg',
  },
  {
    title: 'Book 11',
    author: 'Author 11',
    price: '13.99',
    genre: 'Poetry',
    imgadress: '../Book-Cover-11aa.jpg',
  },
  {
    title: 'Book 12',
    author: 'Author 12',
    price: '16.99',
    genre: 'History',
    imgadress: '../last-good-300.png',
  },
  {
    title: 'Book 13',
    author: 'Author 13',
    price: '11.99',
    genre: 'Poetry',
    imgadress: '../Book-cover-page-3-CRC.png',
  },
  {
    title: 'Book 14',
    author: 'Author 14',
    price: '9.99',
    genre: 'Sci-fi',
    imgadress: '../photo_14601_0-5.jpg',
  },
  {
    title: 'Book 15',
    author: 'Author 15',
    price: '23.99',
    genre: 'Fantasy',
    imgadress: '../cover00031.jpg',
  },
];
exports.up = async function up(sql) {
  await sql`
    INSERT INTO books ${sql(
      books,
      'title',
      'author',
      'price',
      'genre',
      'imgadress',
    )}
  `;
};

exports.down = async function down(sql) {
  for (const book of books) {
    await sql`
      DELETE FROM
        books
      WHERE
				title=${book.title}
    `;
  }
};
