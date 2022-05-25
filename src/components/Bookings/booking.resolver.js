module.exports = {
  allBooks: () => books,
  findBook: (_, args) => {
    return books.find((book) => book.id === +args.id);
  },
};
