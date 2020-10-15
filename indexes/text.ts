import { Collection, Db, MongoClient } from "mongodb";

// use mongodb+srv://user:pass@host/?option=value for remote servers
const uri =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const client = new MongoClient(uri, { useUnifiedTopology: true });

const connect = async () => {
  try {
    await client.connect();

    const database: Db = client.db("db_name");
    const collection: Collection<any> = database.collection("collections_name");
    const result: string = await collection.createIndex({ property: "text" });
    
    console.log(result);
    await client.close();
  } catch (error) {
    console.log("Could not connect to db, error: ", error);
  }
};

connect();
