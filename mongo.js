const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const database = 'e-comerce';
const datab = 'student';

async function getdata(){
     let result = await client.connect();
    let db = result.db(database)
    let db2 = result.db(datab);
    let collection = db.collection('products');
    let collection2 = db2.collection('pen')
    let response = await collection.find({}).toArray();
    let response2 = await collection2.find({}).toArray();
    console.log(response);
    console.log(response2)
}
getdata();
 










// const {MongoClient} = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);
// const database = 'e-comerce';
// async  function getdata(){
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('prducts');
//     let response = await collection.find({}).toArray();
//     console.log(response)
// }
// getdata();