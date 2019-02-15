const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/billingplayground',(err,client)=>{
	if(err){
		return console.log('Unable to connect to mongodb server');
	}
	console.log('Connected to mongodb');

	// find record
	// .find() will fetch all records
	// .find({obj}) will be the filter 
	const db = client.db('billingplayground')
	db.collection('playground').find({text:'this is a test'}).toArray().then((docs)=>{
		console.log(JSON.stringify(docs, undefined, 2))
	},(err) => {
		console.log("Unable to fetch records");
	});

	

	client.close();
});