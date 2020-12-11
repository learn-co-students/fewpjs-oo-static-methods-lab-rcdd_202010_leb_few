class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, ''); 
  }
   static titleize(string){
    return string.split(' ').map((x, i) => {
      if(i === 0){return x.charAt(0).toUpperCase() + x.slice(1)}
      else if(x === 'a' || x === 'an' || x == 'the' || x === 'but' || x === 'of' || x === 'and' || x === 'for' || x === 'at'|| x === 'by' || x === 'from'){return x}
      else {
        return x.charAt(0).toUpperCase() + x.slice(1)
      }
    }).join(' ')
  }
}