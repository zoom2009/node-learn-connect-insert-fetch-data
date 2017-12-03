const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a1cff23e50bc138a4a6ab642' ;

//Todo.find({
//    text: 'Feed the cat' 
//}).then((docs) => {
//    console.log('Docs', docs);
//})
//
//Todo.findOne({
//    text: 'Feed the cat' 
//}).then((doc) => {
//    console.log('Doc', doc);
//})

Todo.findById(id).then((doc) => {
    if(!doc){
        return console.log('ID not found')
    }
    console.log('Doc', doc);
}, (e) => {
    console.log('error');
})
