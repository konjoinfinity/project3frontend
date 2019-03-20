const petsUrl = window.location.host.includes("localhost")
	? "http://localhost:3001/api/pets"
	: "https://petz-api.herokuapp.com/api/pets";

// const commentsUrl = window.location.host.includes("localhost")
// 	? "http://localhost:3001/api/comments"
// 	: "https://petz-api.herokuapp.com/api/comments";
export default petsUrl;
