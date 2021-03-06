import { MongoClient, Db, Collection, AggregationCursor } from "mongodb";

const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const client = new MongoClient(uri, { useUnifiedTopology: true });

(async function run() {
  try {
    await client.connect();

    const database: Db = client.db("db_name");
    const collection: Collection<any> = database.collection("collections_name");
    const aggregationResult: AggregationCursor = collection.aggregate([
      {
        $group: {
          _id: { property: "condition" },
          property: "condition",
          anotherProperty: "condition",
        },
      },
    ]);

    (await aggregationResult.toArray()).forEach((element) =>
      console.log(element)
    );
    await client.close();
  } catch (error) {
    console.error("Error: ", error);
  }
})();
