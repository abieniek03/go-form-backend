import { Request, Response } from 'express';

import { calcBMI, calcKcal } from '../utils/calcParameters';
import setFileName from '../utils/setFileName';

import path from 'path';

const sendResponse = (req: Request, res: Response) => {
	if (req.body) {
		const bmi: number = calcBMI(req.body.height, req.body.weight);
		const kcal: number = calcKcal(req.body.weight, req.body.sex, req.body.activityLevel);
		const planID: number = Number(req.body.sex) === 0 ? 10 : Number(req.body.trening);
		res.status(200).json({ bmi, kcal, planID });
	} else {
		res.status(404).json({ info: 'Not found' });
	}
};

const downloadPlan = (req: Request, res: Response) => {
	const planID: string = req.url.split('/')[2];

	const filePath = path.join(__dirname, `../../public/plans/${planID}.pdf`);
	const fileName = `${setFileName(planID)}.pdf`;

	res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
	res.download(filePath, fileName);
};

export default { sendResponse, downloadPlan };
