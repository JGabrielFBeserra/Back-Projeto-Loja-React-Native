import produtosModel from "../../models/produtosModel.js"

const update = async (req, res) => {
    try{
        const id = +req.params.id
        const produtos = req.body
        const result = await produtosModel.edit({id, ...produtos})
        res.json({
            success: `Produto ${id} editado com sucesso!`,
            produtos: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update