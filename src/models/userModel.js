import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


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


export default {create, getAll, getById, edit, remove}