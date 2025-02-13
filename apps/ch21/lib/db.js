import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://jh:loobWKvtuIMtXOsE@cluster0.uhj39.mongodb.net/auth-demo?retryWrites=true&w=majority&appName=Cluster0"
  );

  return client;
}
