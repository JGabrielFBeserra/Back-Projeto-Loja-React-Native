import { PrismaClient } from '@prisma/client'
import { z } from "zod"

const prisma = new PrismaClient();

const produtoSchema = z.object({
    id: z.number({
        required_error: "ID é obrigatório.",
        invalid_type_error: "O ID deve ser um número inteiro.",
    }),
    nome: z.string({
        required_error: "Nome é obrigatório.",
        invalid_type_error: "O nome deve ser uma string.",
    })
        .min(3, { message: 'O nome deve ter no mínimo 3 letras.' })
        .max(255, { message: 'O nome deve ter no máximo 255 caracteres.' }),
    photo: z.string({
        required_error: "A foto é obrigatória.",
        invalid_type_error: "A foto deve ser uma url válida.",
    })
        .url({ message: 'Url da foto inválida.' })
        .max(1000, { message: 'A foto deve ter no máximo 1000 caracteres.' }),
    preco: z.number({
        required_error: "O preço é obrigatório.",
        invalid_type_error: "O preço deve deve ter somente números inteiros.",

    }),
    categoria: z.number({
        required_error: "A categoria é obrigatória.",
        invalid_type_error: "A categoria deve ser um número inteiro.",
    })
        .min(1, { message: 'A descrição deve ter no mínimo 1 caracter.' })
        .max(1, { message: 'O nome deve ter no máximo 1 caracter.' }),  
    descricao: z.string({
        required_error: "A descrição é obrigatória.",
        invalid_type_error: "A descrição deve ser uma string.",
    })
        .min(3, { message: 'A descrição deve ter no mínimo 3 caracteres.' })
        .max(255, { message: 'A descrição deve ter no máximo 255 caracteres.' }),

})

const validateProdutoToCreate = (produtos) => {
    const partialProdutoSchema = produtoSchema.partial({ id: true })
    return partialProdutoSchema.safeParse(produtos)
}

const validateProdutoToUpdate = (produtos) => {
    const partialProdutoSchema = produtoSchema.partial({ id: true })
    return partialProdutoSchema.safeParse(produtos)
}


const create = async (produtos) => {
    return await prisma.produtos.create({
        data: produtos
    })
}

const getAll = async () => {
    return await prisma.produtos.findMany()
}

const getById = async (id) => {
    return await prisma.produtos.findUnique({
        where: {
            id
        }
    })
}

const remove = async (id) => {
    return await prisma.produtos.delete({
        where: {
            id
        }
    })
}

const edit = async (produtos) => {
    return await prisma.produtos.update({
        where: {
            id: produtos.id
        },
        data: produtos
    })
}


export default { create, getAll, getById, edit, remove, validateProdutoToCreate, validateProdutoToUpdate }