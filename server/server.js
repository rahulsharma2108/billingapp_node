var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/billing');

// create Modal for Todo

var Todo = mongoose.model('Todo',{
	text:{
		type:String
	},
	completed:{
		type:Boolean
	},
	completedAt:{
		type:Number
	}
});


var newTodo = new Todo({
	text:'Cool dinner'
});

newTodo.save().then((doc)=>{
	console.log('saved todo', doc);
},(e)=>{
	console.log('Unable to save todo')
});
