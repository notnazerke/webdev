function sum(a){
    let s=0;
    for(let key in a){
        s+=a[key];
    }
    return s;
}


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

alert(sum(salaries));