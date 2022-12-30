import _ from 'underscore';
/**
 * Esta Funcion crea un Deck
 * @param {array} tipoCarta 
 * @param {array} tiposEspeciales 
 * @returns {array}
 */
export const crearDeck = (tipoCarta, tiposEspeciales) => {
     if(!tipoCarta || tipoCarta.length === 0) throw new Error ('TiposCartas es obligatorio');

     let deck = [];

     for( let i = 2; i <= 10; i++ ) {
         for( let tipo of tipoCarta ) {
             deck.push( i + tipo);
         }
     }
 
     for( let tipo of tipoCarta ) {
         for( let esp of tiposEspeciales ) {
             deck.push( esp + tipo);
         }
     }
     // console.log( deck );
     deck = _.shuffle( deck );
     console.log( deck );
     return deck;
 }
 