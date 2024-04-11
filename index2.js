const dbconnect = require('./mongodb');
const insert = async()=>{
    const db = await dbconnect();
    const result = await db.insert(
        {name:'note',brand:'vivo',price:'20000'}
    )
    console.log(db);
}
insert();


// const dbconnect = require('./mongodb');

// const insert = async () => {
//     try {
//         const db = await dbconnect();
//         const result = await db.collectionname('pen').insertOne({
//             name: 'note',
//             brand: 'vivo',
//             price: 20000
//         });
//         console.log(result);
//     } catch (error) {
//         console.error('Error inserting document:', error);
//     }
// };

// insert();


