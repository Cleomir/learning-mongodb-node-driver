import {
  MongoClient,
  Db,
  Collection,
  DeleteWriteOpResultObject,
} from "mongodb";

const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const client = new MongoClient(uri, { useUnifiedTopology: true });

(async function run() {
  try {
    await client.connect();

    const database: Db = client.db("db_name");
    const collection: Collection<any> = database.collection("collections_name");
    const documents = [
      {
        title: "test title",
        date: new Date(),
      },
      { title: "test title 2", date: new Date() },
    ];
    const result: DeleteWriteOpResultObject = await collection.deleteMany(
      documents
    );

    console.log(result.result);
    await client.close();
  } catch (error) {
    console.error("Error: ", error);
  }
})();
