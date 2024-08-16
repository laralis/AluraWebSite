import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    descricao: { type: String },
    preco: { type: Number },
    tag: { type: String },
  },
  { versionKey: false }
);
const product = mongoose.model("products", productSchema);
export default product;
