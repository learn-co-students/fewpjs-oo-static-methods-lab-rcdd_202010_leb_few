class Formatter {
  //add static methods here
 static capitalize(string){
  string.charAt(0).toUpperCase();
  return string.charAt(0).toUpperCase()+string.slice(1)
  }
  
  static sanitize(string){
   return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(string){
    let arr=string.split(' ');
    const map1=arr.map(function(x,index){
      if (index===0){
        return Formatter.capitalize(x);
      }
     else  if((x==='the' || x==='a'|| x==='an'|| x==='but'|| x==='of'|| x==='and'|| x==='for'|| x==='at'|| x==='by'|| x==='from')&& index>=1){
        return x;}
        else{
      return Formatter.capitalize(x)
        }
      
  })
  return map1.join(" ");
  }
}

  

console.log(Formatter.capitalize("hello"));
