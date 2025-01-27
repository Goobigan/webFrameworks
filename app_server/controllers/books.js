const request = require('request');
const apiOptions = {server: 'http://localhost:3000'}

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = ' https://wsrender.onrender.com;'
}

  const loadBooksPage = function(req, res,func){
    res.render('books', 
      {
          title: 'BookShelf',
          pageHeader: {
          title: 'Books',
          strapline: 'Review all of your favourite novels!'
          },
          books: func
      });
  };

  const books = function(req, res){
    const path = '/api/books';
    const requestOptions = {
        url : apiOptions.server + path,
        method: 'GET',
        json: {},
        qs : {}
    };
    request(requestOptions, (err, response, body) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        loadBooksPage(req, res, body);
    });
};

module.exports = {
   loadBooksPage,books
  };