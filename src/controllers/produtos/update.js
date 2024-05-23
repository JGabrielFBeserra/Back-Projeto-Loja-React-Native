import produtosModel from "../../models/produtosModel.js"
import zodErrorFormat from "../../../helpers/zodErrorFormat.js"

const update = async (req, res) => {
    try{
        const id = +req.params.id
        const produto = req.body
        const validarResult = produtosModel.validateProdutoToUpdate(produto)
        if(!validarResult.success){
            return res.status(400).json({
                error: `Dados de Atualização Inválido`,
                fields: zodErrorFormat(validarResult.error)
            })
        }
        const result = await produtosModel.edit({id, ...produto})
        res.json({
            success: `Produto ${id} editado com sucesso!`,
            produto: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update