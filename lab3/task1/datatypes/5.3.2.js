function checkSpam(str) {
    let s = str.toLowerCase();

    return s.includes('viagra') || s.includes('xxx');
  }
  
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );