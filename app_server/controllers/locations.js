
const Register = function(req, res){
    res.render('register', { title: 'Register' });
  };
  
  const SignIn = function(req, res){
    res.render('signin', { title: 'Sign In' });
  };

  const Display = function(req, res){
    res.render('display', { title: 'Display' });
  };

  module.exports = {
    Register, SignIn, Display
  };