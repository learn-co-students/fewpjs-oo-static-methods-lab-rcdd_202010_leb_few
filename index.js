class Formatter {
  //add static methods here
  static capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice( 1 )
  }

static sanitize(string){
   return string.replace( /[^A-Za-z0-9 '-]/g, '' )
}

static titleize(string){
const words = string.split(" ");

for(let i = 1; i < words.length; i++) {
  words[0] = words[0][0].toUpperCase() + words[0].substr(1);
if(words[i]==="the" || words[i]==="a" || words[i]==="an" || words[i]==="but" || words[i]==="of" || words[i]==="and" || words[i]==="for" || words[i]==="at" || words[i]==="by" || words[i]==="from"){
  words[i] = words[i][0].toLowerCase() + words[i].substr(1);
}else{
  words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
  }
return words.join(" ");
}
}
