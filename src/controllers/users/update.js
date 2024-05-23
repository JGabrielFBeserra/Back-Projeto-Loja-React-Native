import userModel from "../../models/userModel.js"
import zodErrorFormat from "../../../helpers/zodErrorFormat.js"

const update = async (req, res) => {
    try{
        const id = +req.params.id
        const user = req.body
        const validarResult = userModel.validateUserToUpdate(user)
        if(!validarResult.success){
            return res.status(400).json({
                error: `Dados de Atualização Inválido`,
                fields: zodErrorFormat(validarResult.error)
            })
        }
        const result = await userModel.edit({id, ...user})
        res.json({
            success: `User ${user.nome} editado com sucesso!`,
            user: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default update