import axios from 'axios';

const KEY = 'AIzaSyBbwB__TOHsCbVsOD6LCaTZ_KsCfLBTEm0';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY,
	},
});
