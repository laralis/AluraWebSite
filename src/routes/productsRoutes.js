import express from "express";
import ProductController from "../controllers/productController.js";

const routes = express.Router();

routes.get("/products", ProductController.listarProdutos);
routes.get("/products/:id", ProductController.listarProdutoPorId);
routes.post("/products", ProductController.cadastrarProdutos);
routes.put("/products/:id", ProductController.atualizarProduto);
routes.delete("/products/:id", ProductController.deletarProduto);

export default routes;
