const MongoClient = require('mongodb').MongoClient ;
const ObjectID = require('mongodb').ObjectID ;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect mongodb.');   
    }
    console.log('Connected to mongodb.');
    
//    db.collection('tests').insertOne({
//        text: 'testing using nodejs',
//        completed: false 
//    }, (err, result) => {
//        if(err){
//            
//            return console.log('can not insert data cause',result);
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
    
    db.collection('Users').find({
        //completed: false
        _id: new ObjectID("5a03496e5b5357068cf2b62b")
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Cannot fetch data from Users collection', err)
    });
    
//    db.collection('Users').insertOne({
//        name: 'Sikarin Poonsawt',
//        age: 21,
//        location: 'Nakorn si thummarad'
//    }, (err, result) => {
//        if(err){
//            console.log('Can not insert data cause', err);
//            return ;
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
    
    db.close();
});