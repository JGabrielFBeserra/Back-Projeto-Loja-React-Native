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


export default {create, getAll}