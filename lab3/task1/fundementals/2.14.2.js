function pow(a, b){
    let n=a;
    for(i=0; i<b; i++){
        n*=a;
    }
    return n;
}