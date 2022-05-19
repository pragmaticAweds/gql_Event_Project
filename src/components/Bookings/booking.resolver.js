const books = [
  {
    id: 1,
    title: "The journey of a thousand miles",
    author: "aweda",
  },
  {
    id: 1,
    title: "The journey of a thousand miles",
    author: "aweda",
  },
  {
    id: 2,
    title: "The journey of a thousand miles",
    author: "aweda",
  },
  {
    id: 3,
    title: "The journey of a thousand miles",
    author: "aweda",
  },
  {
    id: 4,
    title: "The journey of a thousand miles",
    author: "aweda",
  },
];

module.exports = {
  allBooks: () => books,
  findBook: (_, args) => {
    return books.find((book) => book.id === +args.id);
  },
};
