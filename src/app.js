import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("erro de conexão", erro);
});

conexao.once("open", () => {
  console.log("Conexao com o banco feita com sucesso");
});

const app = express();
routes(app);

app.delete("/products/:id", (req, res) => {
  const index = buscaProduto(req.params.id);
  products.splice(index, 1);
  res.status(200).send("O produto foi deletado com sucesso");
});

export default app;
