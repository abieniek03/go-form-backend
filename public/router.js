"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const user_controler_1 = __importDefault(require("./controllers/user-controler"));
const router = express_1.default.Router();
router.get('/download-plan/:id', user_controler_1.default.downloadPlan);
router.post('/calc-parameters', user_controler_1.default.sendResponse);
module.exports = router;
