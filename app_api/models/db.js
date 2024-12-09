const mongoose = require('mongoose');
const dbURI = "mongodb+srv://djmccarthy:djmac2001@bookshelfcluster.vt0uv.mongodb.net/BookShelf_db?retryWrites=true&w=majority&appName=BookShelfCluster";


try {
  mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
      err=> {console.log(err)}
    );
}
catch (e) {
  console.log("could not connect");
}
require('./books');
require('./accounts');
mongoose.connect(dbURI);
