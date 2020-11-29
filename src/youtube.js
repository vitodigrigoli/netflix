import axios from 'axios'
const API_KEY = 'AIzaSyDaTerg3vxHDE0TeZodEVXvKCZ6N_jxHr4'


export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params:{
		part: 'snippet',
		maxResults: 1,
		key: API_KEY,
	}
})