import { MongoClient, Db, Collection, InsertOneWriteOpResult } from "mongodb";

const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const client = new MongoClient(uri, { useUnifiedTopology: true });

(async function run() {
  try {
    await client.connect();

    const database: Db = client.db("db_name");
    const collection: Collection<any> = database.collection("collections_name");
    const document = {
        title: "test title",
        date: new Date()
    };
    const result: InsertOneWriteOpResult<any> = await collection.insertOne(document);

    console.log(result.insertedCount);
    await client.close();
  } catch (error) {
    console.error("Error: ", error);
  }
})();
