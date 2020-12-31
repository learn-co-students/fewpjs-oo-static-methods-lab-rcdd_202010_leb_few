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
    
  //   let a=string.split(' ');
  //   a[0]=this.capitalize(a[0]);
  //   for(let i=1; i<a.length; i++)
  //   {if((a[i]!="the")$$(a[i]!="a")$$(a[i]!="an")$$(a[i]!="but")$$(a[i]!="from")$$(a[i]!="of")$$(a[i]!="and")$$(a[i]!="for")$$(a[i]!="at")$$(a[i]!="by")){
      
      
      
      
      
  //   a[i]=this.capitalize(a[i];}
  //   }
  // }
   let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let a = string.split( " " );
    result.push( this.capitalize( a[0] ) )
    for ( let i = 1; i < a.length; i++ ) {
      
        
        if ( exceptions.includes( a[i] ) ) {
          result.push( a[i] )
        } else {
          result.push( this.capitalize( a[i] ) )
        }
      }

    
    return result.join( " " );
  }
}