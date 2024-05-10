import express from 'express'
import listAll from '../controllers/produtos/listAll.js'
import getById from '../controllers/produtos/getById.js'
import create from '../controllers/produtos/create.js'
import update from '../controllers/produtos/update.js'
import remove from '../controllers/produtos/remove.js'

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/', update)
router.delete('/:id', remove)

export default router