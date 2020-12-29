class Formatter {
  static capitalize(string){
   return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[&\/\*^{}\@!#,+()$~]/g,'')
  }
 
  static titleize(string){
    let words=string.split(" ");
    for (let i=1; i<words.length; i++){
      words[0]=words[0].charAt(0).toUpperCase() + words[0].slice(1)
      if(words[i]==="the"||words[i]==="a"||words[i]==="of"|| words[i]==="and"||words[i]==="for"||words[i]==="at"||words[i]==="but"||words[i]==="an"||words[i]==="or"||words[i]==="from"||words[i]==="by"){
        words[i]=words[i]}
      else{words[i]= words[i].charAt(0).toUpperCase() + words[i].slice(1)}
    } return words.join(" ")
  }
}