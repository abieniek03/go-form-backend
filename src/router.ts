import express from 'express';
import userControler from './controllers/user-controler';

const router = express.Router();

router.get('/download-plan/:id', userControler.downloadPlan);
router.post('/calc-parameters', userControler.sendResponse);

export = router;
