"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calcParameters_1 = require("../utils/calcParameters");
const setFileName_1 = __importDefault(require("./setFileName"));
const path_1 = __importDefault(require("path"));
const sendResponse = (req, res) => {
    if (req.body) {
        const bmi = (0, calcParameters_1.calcBMI)(req.body.height, req.body.weight);
        const kcal = (0, calcParameters_1.calcKcal)(req.body.weight, req.body.sex, req.body.activityLevel);
        const planID = Number(req.body.sex) === 0 ? 10 : Number(req.body.trening);
        res.status(200).json({ bmi, kcal, planID });
    }
    else {
        res.status(404).json({ info: 'Not found' });
    }
};
const downloadPlan = (req, res) => {
    const planID = req.url.split('/')[2];
    const filePath = path_1.default.join(__dirname, `../../public/plans/${planID}.pdf`);
    const fileName = `${(0, setFileName_1.default)(planID)}.pdf`;
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    res.download(filePath, fileName);
};
exports.default = { sendResponse, downloadPlan };
