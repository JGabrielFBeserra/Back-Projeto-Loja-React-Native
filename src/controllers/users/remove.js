import userModel from "../../models/userModel"

const remove = async (req, res) => {
    try{
        const id = req.params.id
        const result = await userModel.remove(+id)
        res.json({
            success: `User ${id} apagado com sucesso!`,
            users: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}
