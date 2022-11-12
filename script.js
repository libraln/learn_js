const url = 'https://jsonplaceholder.typicode.com/users';
function sendRequest (method, url, body = null) {
  return new Promise( (res, rej) => {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/json');
    request.onload = () => {
      if (request.status >= 400) {
        rej(request.response);
      } else {
      res(request.response);
      }
    }
    request.onerror = () => {
      rej(request.response);
    }
    request.send(JSON.stringify(body));
  })
}

sendRequest('GET', url)
.then(data => console.log(data))
.catch(err => console.log(err))

const body = {
  name: 'Helen',
  age: 27
}

sendRequest('POST', url, body )
.then(data => console.log(data))
.catch(err => console.log(err))
