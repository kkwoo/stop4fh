// get cssgrid working for the extra +15 button et al.
// import './layout.css';
import m from 'mithril';
import { CryptoJS } from '../../CryptoJS.trimmed.js';
import { preambleMC} from './preamble.js';

var debug01 = '';

var enckey = 'open sesame';
var plaintext = 'not telling yet';
var decSplash = {
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
          var deliverable = JSON.parse(atob(vnode.attrs.crypttext));
          debug01 = JSON.stringify(deliverable.salt);
          var key512Bits1000Iterations = CryptoJS.PBKDF2(enckey, deliverable.salt, { keySize: 512/32, iterations: 1000 });        
          var decrypted = CryptoJS.AES.decrypt(atob(deliverable.ciphertext), atob(key512Bits1000Iterations));
          plaintext = decrypted.toString(CryptoJS.enc.Latin1);
        }
      }),
      m("div", {}, "Ciphertext is: " + vnode.attrs.crypttext),
      m("div", {}, "Plaintext is: " + plaintext),      
      m("div", {}, "salt: " + atob(vnode.attrs.crypttext)),      
      m("div", {}, "debug01: " + debug01),      
    ];
    
    return(result);
  }
};

export { decSplash };