// get cssgrid working for the extra +15 button et al.
// import './layout.css';
import { smlr } from '../../util.js';
import m from 'mithril';
import { CryptoJS } from '../../CryptoJS.trimmed.js';
import { preambleMC} from './preamble.js';

var enckey = "passphrase please";
var plaintext = "plaintext please";
var debug02 = "PBKDF2 output";
var debug03 = "debug03";
var debug04 = "debug04";
var deliverable = "";

function processFields() {
  var salt4now = CryptoJS.lib.WordArray.random(128/8);
  var key512Bits1000Iterations = CryptoJS.PBKDF2(enckey, salt4now, { keySize: 512/32, iterations: 1000 });
  debug02 = smlr(key512Bits1000Iterations.toString(CryptoJS.enc.Base64));

  // var encrypted = CryptoJS.AES.encrypt(plaintext, enckey); // works but is it correct usage?
  var encrypted = CryptoJS.AES.encrypt(plaintext, atob(key512Bits1000Iterations));
  deliverable = btoa(JSON.stringify({
    salt: salt4now,
    ciphertext: btoa(encrypted)
  }));

  // debug03 = btoa(JSON.stringify(deliverable));

  var decrypted = CryptoJS.AES.decrypt(encrypted, atob(key512Bits1000Iterations));
  debug04 = decrypted.toString(CryptoJS.enc.Latin1);
}

var encSplash = {
  view: function(vnode) {
    var result = [
      m(preambleMC, vnode.attrs),
      m("label", {}, "passphrase"),
      m("input", {
        name: "enckey",
        id: "enckey",
        value: enckey,
        onchange: function(e) {
          enckey = e.target.value;
          processFields();
        }
      }),
      m("label", {}, "plaintext"),
      m("textarea", {
        name: "plaintext",
        id: "plaintext",
        value: plaintext,
        onchange: function(e) {
          plaintext = e.target.value;
          processFields();
        }
      }, "plaintext please"),
      m("a", {href: "./#!/dec/" + deliverable}, "Click through to decrypt"),
      m("div", {}, "deliverable: " + smlr(deliverable)),
      // m("div", {}, "debug01: " + btoa(enckey + plaintext)),
      m("div", {}, "debug02: " + debug02),
      /* m("div", {}, "debug03: " + debug03),
      m("div", {}, "debug04: " + debug04), */
    ];
    
    return(result);
  }
};

export { encSplash };