import express from 'express'
import { PORT, HOST } from './config.js'
import produtosRouter from './routers/produtosRouter.js'
import userRouter from './routers/userRouter.js'
import logger from './middlewares/logger.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

app.use(logger)
app.use(cookieParser())
app.use(cors())
app.use(express.json())

app.use('/produtos', produtosRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
    console.log(`Server running on ${HOST}:${PORT}`)
})