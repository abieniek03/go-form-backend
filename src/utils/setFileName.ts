const setFileName = (planID: string) => {
	let fileName: string;

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

export default setFileName;
