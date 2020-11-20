const API_KEY = "58c95b36a9d24355ed8b9e95f5d5cc29"
const LANGUAGE = "language=it-IT"

const request = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&${LANGUAGE}`,
	fetchNetflixOriginal: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_networks=213`,
	fetchAction: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=28`,
	fetchAdventure: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=12`,
	fetchDocumentary: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=99`,
	fetchHorror: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=27`,
	fetchFantasy: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=14`,
	fetchComedy: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=35`,
	fetchDrama: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=19`,
	fetchFamily: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=1075`,
	fetchHistory: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=36`,
	fetchMystery: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=9648`,
	fetchRomance: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=10749`,
	fetchScience: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=878`,
	fetchTVMovie: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=10770`,
	fetchThriller: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=53`,
	fetchWar: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=10752`,
	fetchWestern: `/discover/tv?api_key=${API_KEY}&${LANGUAGE}&with_genres=37`,
}

export default request