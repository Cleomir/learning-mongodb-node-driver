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
        $lookup: {
          from: "collection_to_join",
          localField: "collection_primary_key",
          foreignField: "collection_to_join_foreign_key",
          as: "result_name",
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
