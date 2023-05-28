"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const setFileName = (planID) => {
    console.log('PLAN ID: ' + planID);
    let fileName;
    switch (Number(planID)) {
        case 2:
            fileName = 'Plan treningowy (4-dniowy)';
            break;
        case 3:
            fileName = 'Plan treningowy (5-dniowy)';
            break;
        case 10:
            fileName = 'Plan treningowy dla kobiet';
            break;
        default:
            fileName = 'Plan trenigowy - FBW';
    }
    return fileName;
};
exports.default = setFileName;
