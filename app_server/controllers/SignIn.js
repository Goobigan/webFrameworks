const request = require('request');
const apiOptions = {server: 'http://localhost:3000'}

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = ' https://wsrender.onrender.com;'
}

  const loadSignInPage = function(req, res,func){
    res.render('signin', 
      {
          title: 'Sign In',
          pageHeader: {
          title: 'Sign In',
          },
          signin: func
      });
  };

  const SignIn = function(req, res){
    const path = '/api/accounts';
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
        loadSignInPage(req, res, body);
    });
};

module.exports = {
  loadSignInPage,SignIn
};