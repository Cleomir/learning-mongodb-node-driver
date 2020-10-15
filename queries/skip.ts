import { MongoClient, Db, Collection, Cursor } from "mongodb";

const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const client = new MongoClient(uri, { useUnifiedTopology: true });

(async function run() {
  try {
    await client.connect();

    const database: Db = client.db("db_name");
    const collection: Collection<any> = database.collection("collections_name");
    const result: Cursor<any> = collection.find(
      {
        name: "some name",
        date: {
          $gte: new Date(new Date().setHours(0, 0, 0)),
          $lt: new Date(new Date().setHours(23, 59, 59)),
        },
      },
      { skip: 10 }
    );

    await result.forEach((record) => console.log(record));
    await client.close();
  } catch (error) {
    console.error("Error: ", error);
  }
})();
