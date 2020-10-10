import { MongoClient, Db, Collection, UpdateWriteOpResult } from "mongodb";

const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const client = new MongoClient(uri, { useUnifiedTopology: true });

(async function run() {
  try {
    await client.connect();

    const database: Db = client.db("db_name");
    const collection: Collection<any> = database.collection("collections_name");
    const document = [
      {
        $set: {
          "array.$.anotherProperty": "test value",
        },
      },
    ];
    const result: UpdateWriteOpResult = await collection.updateOne(
      { property: "value", "array.property": "value" },
      document
    );

    console.log(result.result);
    await client.close();
  } catch (error) {
    console.error("Error: ", error);
  }
})();
