const request = require('request');
const apiOptions = {server: 'http://localhost:3000'}

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://webframeworks-cuwx.onrender.com';
}

  const loadRegisterPage = function(req, res,func){
    res.render('Register', 
      {
          title: 'Register',
          pageHeader: {
          title: 'Register',
          },
          register: func
      });
  };

  const Register = function(req, res){
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
        loadRegisterPage(req, res, body);
    });
};

module.exports = {
  loadRegisterPage,Register
};
