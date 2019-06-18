/* bx.js | India | MIT */

export const ready = (doc, fn) => {
  doc.readyState !== "loading"
    ? setTimeout(fn, 0)
    : doc.addEventListener('DOMContentLoaded', fn);
};

export const select = (sel, ctx = document) => ctx.querySelector(sel);

export const create = type => document.createElement(type);

export default { ready, select, create };
