exports.up = async function up(sql) {
  await sql`Create TABLE books (
	id integer PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
	title varchar(70) NOT NULL,
	author varchar(70) NOT NULL,
	price numeric(5,2) NOT NULL,
genre varchar(30),
imgadress varchar(70)
)`;
};
exports.down = async function down(sql) {
  await sql`
	DROP TABLE books
	`;
};