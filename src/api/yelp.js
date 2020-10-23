import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer www2TCtEE-H_R0DIiJTcblEF0se40DM-BFPm1wZdUstL59y3HCt3LenB5B-cDA75ZhQHaGjQRDds8BQGm5hqSjR-hcBcODyDNIQ744_0fFROB_F-mcqEW2e2j8uRX3Yx',
	},
});
