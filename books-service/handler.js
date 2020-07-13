'use strict';
const dbjs = require('./db.js');

module.exports.getBooks = async event => {
  const db = await dbjs.get();

  const books = await db.collection('books').find().toArray();
  return { statusCode: 200, body: JSON.stringify({ books: books }) };
};
