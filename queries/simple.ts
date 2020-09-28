import { MongoClient, Db, Collection } from "mongodb";

const uri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const client = new MongoClient(uri, {useUnifiedTopology: true});

(async function run(){
  try {
    await client.connect();

    const database: Db = client.db("sample_mflix");
    const collection: Collection<any> = database.collection("movies");
    const query = { title: "Back to the future" };
    const movie = await collection.findOne(query);

    console.log(movie);
    await client.close();
  } catch (error) {
    console.error("Error: ", error);
  } 
})();
