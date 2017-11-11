const MongoClient = require('mongodb').MongoClient ;
const ObjectID = require('mongodb').ObjectID ;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect mongodb.');   
    }
    console.log('Connected to mongodb.');
    
    db.collection('tests').findOneAndUpdate({
        _id: new ObjectID('5a06f6e29b0bd777e5f817d0')
    }, {
        $set: {
            text: 'Hello World'
        },
        $inc: {
            a: 1
        }
    }, {
        returnOriginal: false     
    }).then((result) => {
        console.log(result);
    });
    
    db.close();
});