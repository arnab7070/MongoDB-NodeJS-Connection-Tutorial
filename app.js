const { MongoClient, ObjectId } = require('mongodb');

// Connection URL
const uri = 'mongodb+srv://test:test@finmaster.nnnelyg.mongodb.net/?retryWrites=true&w=majority';
const dbName = 'users';
const collectionName = 'all_users';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectAndDoStuff() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log('Connected to the database');

        // Access the database
        const db = client.db(dbName);

        // Access the collection
        const collection = db.collection(collectionName);
        // await collection.insertOne({ name: 'Arnab', years: 21, developer: true, salary: 56000, subject: { physics: 97, chemistry: 93, mathematics: 99 } }).then((result) => console.log(result));
        // await collection.findOne({ name: 'Arnab' }).then((result) => console.log(result));
        // await collection.updateOne({ name: 'Arnab' }, { $set: { 'subject.physics': 96, years: 21.3, salary: 60000 } }).then((result) => console.log(result));
        await collection.updateOne({ _id: new ObjectId('64a6b5d87297e1d23472b2a9') }, { $set: { name: 'Arnab Nandi' } }).then((result) => console.log(result));
        // await collection.deleteOne({ 'subject.physics': 96 }).then(result => console.log(result));

        // C - Create
        // await collection.insertMany([
        //     {
        //         item: 'canvas',
        //         qty: 100,
        //         size: { h: 28, w: 35.5, uom: 'cm' },
        //         status: 'A'
        //     },
        //     {
        //         item: 'journal',
        //         qty: 25,
        //         size: { h: 14, w: 21, uom: 'cm' },
        //         status: 'A'
        //     },
        //     {
        //         item: 'mat',
        //         qty: 85,
        //         size: { h: 27.9, w: 35.5, uom: 'cm' },
        //         status: 'A'
        //     },
        //     {
        //         item: 'mousepad',
        //         qty: 25,
        //         size: { h: 19, w: 22.85, uom: 'cm' },
        //         status: 'P'
        //     },
        //     {
        //         item: 'notebook',
        //         qty: 50,
        //         size: { h: 8.5, w: 11, uom: 'in' },
        //         status: 'P'
        //     },
        //     {
        //         item: 'paper',
        //         qty: 100,
        //         size: { h: 8.5, w: 11, uom: 'in' },
        //         status: 'D'
        //     },
        //     {
        //         item: 'planner',
        //         qty: 75,
        //         size: { h: 22.85, w: 30, uom: 'cm' },
        //         status: 'D'
        //     },
        //     {
        //         item: 'postcard',
        //         qty: 45,
        //         size: { h: 10, w: 15.25, uom: 'cm' },
        //         status: 'A'
        //     },
        //     {
        //         item: 'sketchbook',
        //         qty: 80,
        //         size: { h: 14, w: 21, uom: 'cm' },
        //         status: 'A'
        //     },
        //     {
        //         item: 'sketch pad',
        //         qty: 95,
        //         size: { h: 22.85, w: 30.5, uom: 'cm' },
        //         status: 'A'
        //     }
        // ]);

        // R - Read
        // const documents = await collection.find({ item: 'paper' }).toArray();

        // U - Update
        // await collection.updateOne(
        //     { item: 'paper' },
        //     {
        //         $set: { 'size.uom': 'cm', status: 'P', qty: 1000 },
        //         $currentDate: { lastModified: true }
        //     }
        // );
        // console.log("Updated successfully");
        // // Perform database operations
        // // For example, let's find all documents in the collection

        // // D - Delete
        // const previousLength = (await collection.find().toArray()).length;
        // await collection.deleteMany({ status: 'P' });
        // const currentLength = (await collection.find().toArray()).length;
        // console.log("Total number of documents deleted: ", (previousLength - currentLength));


        // console.log('Documents in the collection:');
        // console.log(documents);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        // Close the connection
        await client.close();
        console.log('Disconnected from the database');
    }
}

// Call the function to connect and perform operations
connectAndDoStuff();
