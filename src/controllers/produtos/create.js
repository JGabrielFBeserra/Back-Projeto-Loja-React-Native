import produtosModel from "../../models/produtosModel.js"
import zodErrorFormat from "../../../helpers/zodErrorFormat.js"

const create = async (req, res) => {
    try{
        const produto = req.body
        const validarResult = produtosModel.validateProdutoToCreate(produto)
        if(!validarResult.success){
            return res.status(400).json({
                error: `Dados de Cadastro Inválido`,
                fields: zodErrorFormat(validarResult.error)
            })
        }
        const result = await produtosModel.create(produto)
        return res.json({
            success: `Produto ${result.id} criado com sucesso!`,
            produtos: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create