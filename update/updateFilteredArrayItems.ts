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
        $push: {
          "array.$[filter].anotherProperty": "test value",
        },
      },
    ];
    const filterOptions = {
      arrayFilters: [
        {
          "filter.property": "value",
          "filter.property2": "value2",
        },
      ],
    };
    const result: UpdateWriteOpResult = await collection.updateOne(
      { property: "value" },
      document,
      filterOptions
    );

    console.log(result.result);
    await client.close();
  } catch (error) {
    console.error("Error: ", error);
  }
})();
