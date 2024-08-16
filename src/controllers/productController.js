import product from "../models/product.js";

class ProductController {
  static async listarProdutos(req, res) {
    try {
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
        .json({ message: `${erro.message} - falha na requisicao do livro` });
    }
  }

  static async cadastrarProdutos(req, res) {
    try {
      const novoProduto = await product.create(req.body);
      res
        .status(201)
        .json({ message: "Criado com sucesso", livro: novoProduto });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao cadastrar livro` });
    }
  }
  static async atualizarProduto(req, res) {
    try {
      const id = req.params.id;
      await product.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Livro atualizado" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na atualização do livro` });
    }
  }
  static async deletarProduto(req, res) {
    try {
      const id = req.params.id;
      await product.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro excluído" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na exclusão do livro` });
    }
  }
}

export default ProductController;
