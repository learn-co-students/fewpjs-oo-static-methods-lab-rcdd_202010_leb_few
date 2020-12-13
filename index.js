class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1)
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    let str=string.split(" ");
    let newstr= []
      newstr.push(this.capitalize(str[0]));
    for(let i=1; i<str.length;i++){
    if(str[i] !== "the" && str[i] !== "a" && str[i]  !== "an" && str[i]  !== "but" && str[i]  !== "of" && str[i]  !== "and" && str[i] !== "for" && str[i]  !== "at" && str[i]  !== "by" && str[i]  !== "from"){
      newstr.push(this.capitalize(str[i]));
    }
    else {
      newstr.push(str[i])
    }
    }
    return newstr.join(" ");
  }
}