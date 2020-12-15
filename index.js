class Formatter {
  //add static methods here
  static  capitalize(a ){
  return  a .charAt(0).toUpperCase()+a .slice(1)
  }

  static sanitize(a){
  return a.replace( /[^A-Za-z0-9 '-]/g, '')
  }

  static titleize( sentence ) {
     let nonReplaced = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
     let result = [];
     let arrayOfWords = sentence.split( " " )
     for ( let n = 0; n < arrayOfWords.length; n++ ) {
       if ( n == 0 ) {
         result.push( this.capitalize( arrayOfWords[ n ] ) )
       } else {
         if ( nonReplaced.includes( arrayOfWords[ n ] ) ) {
           result.push( arrayOfWords[ n ] )
         } else {
           result.push( this.capitalize( arrayOfWords[ n ] ) )
         }
       }

     }
     return result.join( " " );
   }

}
