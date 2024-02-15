// if you wrap m in curly braces, the code fails silently
// import m from 'mithril/mithril.min.js'; // this also works
// from https://mithril.js.org/installation.html
import m from 'mithril';
// require doesn't work either
// var m = require("mithril");
// import { customDate, customTime } from './util.js';

// gui.cssgrid is broken at the moment, rebuild a smaller MVP for mithril and css grid
import { encSplash } from './gui.cssgrid/enc/encSplash.js';
import { decSplash } from './gui.cssgrid/dec/decSplash.js';

function mountMithril() {
  var root = document.getElementById('mithrilSpace');
  m.route(root, `/enc`, {
    "/enc": encSplash,
    "/dec/:crypttext": decSplash
  });
}

export { mountMithril };
