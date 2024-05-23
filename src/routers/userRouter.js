import express from 'express'
import listAll from '../controllers/users/listAll.js'
import getById from '../controllers/users/getById.js'
import create from '../controllers/users/create.js'
import update from '../controllers/users/update.js'
import remove from '../controllers/users/remove.js'

const router = express.Router()

router.get('/', listAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router