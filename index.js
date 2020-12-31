class Formatter {
  //add static methods here
  static capitalize(string){
    let a=string.split("")
   return string.charAt(0).toUpperCase()+string.slice(1);
   
  }
  
  // static sanitizee(string){
  //   return string.replace(/[^A-Za-z0-9]/g, '');
  // }
  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  
  // static sanitize(string){
  //   let a =string.split("/[^A-Za-z0-9 '-]/g")
  //   return a.join('');
  // }
  
  static titleize(string){
    
    let a=string.split(' ');
    let b=[];
    b.push(this.capitalize(a[0]));
    for(let i=1; i<a.length; i++)
    {if((a[i]!="the")&&(a[i]!="a")&&(a[i]!="an")&&(a[i]!="but")&&(a[i]!="from")&&(a[i]!="of")&&(a[i]!="and")&&(a[i]!="for")&&(a[i]!="at")&&(a[i]!="by")){
      
      
      
      
      
    b.push(this.capitalize(a[i]));}
    else b.push(a[i])
    }
    return b.join(" ");
  }
}