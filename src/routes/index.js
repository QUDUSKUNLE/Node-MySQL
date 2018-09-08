import express from 'express';
import Store from '../controllers/userController';


const router = express.Router();

router.post('/createuser', Store.createUser);
router.post('/login', Store.authenticate);

export default router;
