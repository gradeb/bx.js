/* bx.js | India | MIT */

export const on = ( a, b, c ) => el.addEventListener( a, b );

export const off = ( a, b, c ) => a.removeEventListener( b, c );

export const ready = ( a, b ) => {
  a.readyState !== "loading" ? setTimeout( b, 0 ) : on( a, 'DOMContentLoaded', b );
};

export const select = ( a, b = document ) => b.querySelector( a );

export const selectAll = ( a, b = document ) => b.querySelectorAll( a );

export const create = a => document.createElement( a );

export default { on, off, ready, select, selectAll, create };
