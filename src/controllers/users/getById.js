import userModel from "../../models/userModel"

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const produtos = await produtosModel.getById(+id)
        res.json({
            success: `Produto ${id} encontrado com sucesso!`,
            produtos
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById