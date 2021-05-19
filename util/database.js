const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

// const mongoConnect = (callback) => { 
//   MongoClient.connect('mongodb+srv://mathiusj:RU4realio@cluster0.c35hv.mongodb.net/node_complete?retryWrites=true&w=majority')
//     .then(client => {
//       console.log('Connected!');
//       _db = client.db();
//       callback(client);
//     })
//     .catch(err => {
//       console.log(err)
//       throw err;
//     })

// }
// mongodb+srv://mathiusj:<password>@cluster0.c35hv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// 

const mongoConnect = callback => {
  MongoClient.connect('mongodb+srv://mathiusj:RU4realio@cluster0.c35hv.mongodb.net/node_complete?retryWrites=true&w=majority')

    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  }

  throw 'No database found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

