// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// } переписати з використанням тернарного оператора

let result = (a + b < 4) ? 'Below' : 'Over'

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}

message = (login == 'Employee') ? 'Hello' :
          (login == 'Director') ? 'Greetings' :
          (login == '') ? 'No login' : '';