const MongoClient = require('mongodb').MongoClient ;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect mongodb.');   
    }
    console.log('Connected to mongodb.');
    
//    db.collection('Users').deleteMany({
//        age: 21
//    }).then( (result) => {
//        console.log(result);
//    });
    
//    db.collection('tests').deleteOne({
//        completed: false
//    }).then( (result) => {
//        console.log(result);
//    });
    
    db.collection('test').findOneAndDelete({
        text: 'testing using nodejs'
    }).then((result) => {
        console.log(result);
    });
    
    db.close();
});