import userModel from "../../models/userModel.js"

const getById = async (req, res) => {
    try{
        const id = req.params.id
        const produto = await userModel.getById(+id)
        res.json({
            success: `Produto ${id} encontrado com sucesso!`,
            produto
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default getById