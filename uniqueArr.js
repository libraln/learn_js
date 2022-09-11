function unique(arr) {
    let resArr = [];
    for (let i=0; i<arr.length; i++) {
        if( resArr.includes(arr[i])){
            continue;
        }
        resArr.push(arr[i]);
    }
    return resArr;
  }
  
  let strings = ["Привіт", "Світ", "Привіт", "Світ",
    "Привіт", "Привіт", "Світ", "Світ", ":-O"
  ];
  
  alert( unique(strings) ); // Привіт, Світ, :-O