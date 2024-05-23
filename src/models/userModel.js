import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const prisma = new PrismaClient()

const userSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "O ID deve ser um número inteiro.",
    }),
    nome: z.string({
        required_error: "Nome é obrigatório.",
        invalid_type_error: "O nome deve ser uma string.",
    })
        .min(3, { message: 'O nome deve ter no mínimo 3 letras.' })
        .max(200, { message: 'O nome deve ter no máximo 200 caracteres.' }),
    photo: z.string({
        required_error: "A foto é obrigatória.",
        invalid_type_error: "A foto deve ser uma url válida.",
    })
        .url({ message: 'Url da foto inválida.' })
        .max(1000, { message: 'A foto deve ter no máximo 1000 caracteres.' }),
    pass: z.string({
        required_error: "A senha é obrigatória.",
        invalid_type_error: "A senha deve ser uma string.",
    })
        .min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }),
    email: z.string({
        required_error: "O email é obrigatório.",
        invalid_type_error: "O email deve ser uma string.",
    })
        .email({ message: 'Email inválido.' })
        .max(500, { message: 'O email deve ter no máximo 500 caracteres.' }),


})

const validateUserToCreate = (user) => {
    const partialUserSchemaa = userSchema.partial({ id: true })
    return partialUserSchemaa.safeParse(user)
}

const validateUserToUpdate = (user) => {
    const partialUserSchemaa = userSchema.partial({ id: true })
    return partialUserSchemaa.safeParse(user)
}


const create = async (user) => {
    return await prisma.users.create({
        data: user
    })
}

const getAll = async () => {
    return await prisma.users.findMany()
}

const getById = async (id) => {
    return await prisma.users.findUnique({
        where: {
            id
        }
    })
}

const remove = async (id) => {
    return await prisma.users.delete({
        where: {
            id
        }
    })
}

const edit = async (user) => {
    return await prisma.users.update({
        where: {
            id: user.id
        },
        data: user
    })
}


export default { create, getAll, getById, edit, remove, validateUserToCreate, validateUserToUpdate }