import product from "../models/product.js";

class ProductController {
  static async listarProdutos(req, res) {
    try {
      res.setHeader('Access-Control-Allow-Origin', '*')
      const productsList = await product.find({});
      res.status(200).json(productsList);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisicao` });
    }
  }
  static async listarProdutoPorId(req, res) {
    try {
      const id = req.params.id;
      const foundedProduct = await product.findById(id);
      res.status(200).json(foundedProduct);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisicao do produto` });
    }
  }

  static async cadastrarProdutos(req, res) {
    try {
      const novoProduto = await product.create(req.body);
      res
        .status(201)
        .json({ message: "Criado com sucesso", produto: novoProduto });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar produto` });
    }
  }
  static async atualizarProduto(req, res) {
    try {
      const id = req.params.id;
      await product.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Produto atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização do produto` });
    }
  }
  static async deletarProduto(req, res) {
    try {
      const id = req.params.id;
      await product.findByIdAndDelete(id);
      res.status(200).json({ message: "Produto excluído" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na exclusão do produto` });
    }
  }
}

export default ProductController;
