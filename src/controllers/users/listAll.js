import produtosModel from "../../models/produtosModel.js"

const listAll = async (req, res) => {
    try{
        const produtos = await produtosModel.getAll()
        return res.json({
            success: 'Produtos listados com sucesso!',
            produtos
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default listAll