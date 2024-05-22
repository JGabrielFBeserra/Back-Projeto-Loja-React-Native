import userModel from "../../models/userModel"
import zodErrorFormat from "../../../helpers/zodErrorFormat"

const update = async (req, res) => {
    try{
        const id = +req.params.id
        const user = req.body
        const validarResult = produtosModel.validateUserToUpdate(user)
        if(!validarResult.success){
            return res.status(400).json({
                error: `Dados de Atualização Inválido`,
                fields: zodErrorFormat(validarResult.error)
            })
        }
        const result = await userModel.edit({id, ...user})
        res.json({
            success: `User ${id} editado com sucesso!`,
            users: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update