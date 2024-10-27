
const Register = function(req, res){
    res.render('register', { title: 'Register' });
  };
  
  const SignIn = function(req, res){
    res.render('signin', { title: 'Sign In' });
  };

  const Display = function(req, res){
    res.render('Display', 
      {
          title: 'BookShelf',
          pageHeader: {
          title: 'BookShelf',
          strapline: 'Review all of your favourite novels!'
          },
          books: [
              {
                  name: 'Name of the Wind',
                  author: 'Patrick Rothfuss',
                  synopsis: "Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.",
                  rating: 4,
                  genres: ['Fiction', 'Fantasy', 'Adventure'],
              },
              {
                  name: 'The 5th Wave',
                  author: 'Rick Yancey',
                  synopsis: "On a lonely stretch of highway, Cassie runs. Runs from the beings that only look human, who have scattered Earth's last survivors",
                  rating: 2,
                  genres: ['Fiction', 'Dystopian'],
              },
              {
                  name: 'Persepolis',
                  author: 'Marjane Satrapi',
                  synopsis:"In powerful black-and-white comic strip images, Satrapi tells the story of her life in Tehran from ages six to fourteen, years that saw the overthrow of the Shah’s regime, the triumph of the Islamic Revolution, and the devastating effects of war with Iraq.",
                  rating: 5,
                  genres: ['Non-Fiction', 'Memoir','Graphic Novel'],
              },
            ]
      });
  };

  module.exports = {
    Register, SignIn, Display
  };