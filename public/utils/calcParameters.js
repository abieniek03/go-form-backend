"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcKcal = exports.calcBMI = void 0;
const calcBMI = (height, weight) => {
    return Number(((weight / Math.pow(height, 2)) * 10000).toFixed(1));
};
exports.calcBMI = calcBMI;
const calcKcal = (weight, sex, activityLevel) => {
    switch (Number(activityLevel)) {
        case 1:
            activityLevel = 1.2;
            break;
        case 2:
            activityLevel = 1.4;
            break;
        case 3:
            activityLevel = 1.6;
            break;
        case 4:
            activityLevel = 1.8;
            break;
        default:
            activityLevel = 1.1;
    }
    return Math.round(weight * (sex === 0 ? 22 : 24) * activityLevel);
};
exports.calcKcal = calcKcal;
