class Formatter {
  //add static methods here
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string){
    return string.replace(/[^A-Za-z-0-9 '-]/g,'');
  }
  
  static titleize(string){
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let newArray = [];
    let array = string.split(" ");

    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        newArray.push(string.toUpperCase())
      } else {
        if (except.includes(array[i])) {
          newArray.push(array[i])
        } else {
          newArray.push(string.toUpperCase())
        }
      }
    }
    return newArray.join(" ");
  }
}