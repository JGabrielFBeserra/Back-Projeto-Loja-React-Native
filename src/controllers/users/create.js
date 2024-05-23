import userModel from "../../models/userModel.js"
import zodErrorFormat from "../../../helpers/zodErrorFormat.js"

const create = async (req, res) => {
    try{
        const user = req.body
        const validarResult = userModel.validateUserToCreate(user)
        if(!validarResult.success){
            return res.status(400).json({
                error: `Dados de Cadastro Inválido`,
                fields: zodErrorFormat(validarResult.error)
            })
        }
        const result = await userModel.create(user)
        return res.json({
            success: `User ${result.id} criado com sucesso!`,
            user: result
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            error: 'Opsss erro no servidor, tente novamente!'
        })
    }
}

export default create