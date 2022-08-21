let login = prompt('Input your login', '');
if( login === '' || login === null ) {
    alert('Cancelled');
} else if( login === 'Admin') {
    let password = prompt('Input your password', '');
    if( password === 'TheMaster') {
        alert('Hello!');
    } else if( password === '' || password === null ){
        alert('Cancelled');
      } else {
        alert('Wrong password');
      }
} else { 
    alert('I don`t know you');
}