const booklist = function(req, res){
    res.render('book-list', 
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
                rating: 4,
                Genres: ['Fiction', 'Fantasy', 'Adventure'],
            },
            {
                name: 'The 5th Wave',
                author: 'Rick Yancey',
                rating: 2,
                facilities: ['Fiction', 'Dystopian'],
            },
            {
                name: 'Persepolis',
                author: 'Marjane Satrapi',
                rating: 5,
                facilities: ['Non-Fiction', 'Memoir','Graphic Novel'],
                distance: '250m'
            }
        ]
    });
};