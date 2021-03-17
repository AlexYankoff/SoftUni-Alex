function loadRepos() {
	const username = document.getElementById('username').value
	const url = `https://api.github.com/users/${username}/repos`;
	//fetch(url).then(handlerResponse);

	const requestPromise = fetch(url) // 1
	console.log(requestPromise)
	requestPromise.then(handlerResponse); //1 заявйа да ни върне промис

	function handlerResponse(response) {  
		console.log( response) ;// 2 печатаме промиса
		const dataPromise = response.json(); //2 .json също ни връща promis но с json data
		console.log(dataPromise)
		dataPromise.then(handleData) // 3. Викаме промиса и той ни дава data


		function handleData( data) {
			const ulElement = document.getElementById('repos');
			ulElement.innerHTML = '';
			data.forEach(repo => {
				const liElement = document.createElement('li');
				liElement.textContent = repo.full_name;
				ulElement.appendChild(liElement)
				
			});

		}
	}
//съкратен вариант с уамбда функции ===>fetch(url).then(response).json()).then(data =>console.log(data));

}