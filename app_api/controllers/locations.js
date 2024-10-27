
const Register = function(req, res){
    res.render('register', { title: 'Register' });
  };
  
  const SignIn = function(req, res){
    res.render('signin', { title: 'Sign In' });
  };

  const books = function(req, res){
    res.render('books', 
      {
          title: 'BookShelf',
          pageHeader: {
          title: 'Books',
          strapline: 'Review all of your favourite novels!'
          },
          books: [
              {
                  name: 'Name of the Wind',
                  author: 'Patrick Rothfuss',
                  rating: 4,
                  genres: ['Fiction', 'Fantasy', 'Adventure'],
                  synopsis: "Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.",
              },
              {
                  name: 'The 5th Wave',
                  author: 'Rick Yancey',
                  rating: 2,
                  genres: ['Fiction', 'Dystopian'],
                  synopsis: "On a lonely stretch of highway, Cassie runs. Runs from the beings that only look human, who have scattered Earth's last survivors",
              },
              {
                  name: 'Persepolis',
                  author: 'Marjane Satrapi',
                  rating: 5,
                  genres: ['Non-Fiction', 'Memoir','Graphic Novel'],
                  synopsis:"In powerful black-and-white comic strip images, Satrapi tells the story of her life in Tehran from ages six to fourteen, years that saw the overthrow of the Shah’s regime, the triumph of the Islamic Revolution, and the devastating effects of war with Iraq.",
              },
            ]
      });
  };


  
  module.exports = {
    Register, SignIn, books
  };