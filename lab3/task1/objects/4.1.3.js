
function multiplyNumeric(a){
    for(let key in a){
        if(typeof(a[key])=='number'){
            a[key]*=2;
        }
    }
}

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);
  
  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };