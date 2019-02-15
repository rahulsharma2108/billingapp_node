const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/billingplayground',(err,client)=>{
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb');

	// insert record
	const db = client.db('billingplayground')
	db.collection('playground').insertOne({
		"text": "this is a test"
	},(err,result) => {
		if(err){
			return console.log("Error adding record",err);
		}
		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	

	client.close();
});