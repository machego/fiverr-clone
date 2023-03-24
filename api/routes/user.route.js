import express from 'express';
import {deleteUser} from '../../api/controllers/user.controller.js'


const router = express.Router();

router.delete('/:id', deleteUser)
router.get('/login', )

export default router; 