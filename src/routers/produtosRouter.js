import express from 'express'
import create from '../controllers/produtos/create.js'
import listAll from '../controllers/produtos/listAll.js'


const router = express.Router()


router.post('/', create)
router.get('/', listAll)


export default router