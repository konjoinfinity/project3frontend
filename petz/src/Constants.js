const apiUrl = window.location.host.includes("localhost")
	? "http://localhost:3001/api/"
	: "https://petz-api.herokuapp.com/api/";

export default apiUrl;
