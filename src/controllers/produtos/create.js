import produtosModel from "../../models/produtosModel.js"

const create = async (req, res) => {
    try{
        const produtos = req.body
        const novoProduto = await produtosModel.create(produtos)
        return res.json({
            success: `Produto ${novoProduto.id} criado com sucesso!`,
            produtos: novoProduto
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create