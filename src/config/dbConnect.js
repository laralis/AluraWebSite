import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.uaj96fe.mongodb.net/CosmeticsStore?retryWrites=true&w=majority"
  );

  return mongoose.connection;
}

export default conectaNaDatabase;
