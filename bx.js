/* bx.js | India | MIT */

export const ready = ( a, b ) => a.readyState !== "loading" ? setTimeout( b, 0 ) : a.addEventListener( 'DOMContentLoaded', b );

export const select = ( a, b = document ) => b.querySelector( a );

export const selectAll = ( a, b = document ) => b.querySelectorAll( a );

export const create = a => document.createElement( a );

export default { ready, select, selectAll, create };
