const url = 'http://localhost:3030/jsonstore/advanced/articles/details/'+id
    const response = await fetch(url);
    const data = await response.json();