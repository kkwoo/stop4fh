import m from 'mithril';

var titleMC = {
  view: function(vnode) {
    return(m("h1", {}, "Enc"));
  }
};

var buildMC = {
  view: function(vnode) {
    return(m("div", {}, `Build: ${BUILD_TIMESTAMP}`));
  }
};

var preambleMC = {
  view: function(vnode) {
    var result = m("div",
                   {class: "header"},
                   [
                    titleMC,
                    buildMC,
                  ].map(x => m(x, vnode.attrs)));
    return(result);
  }
}

export { preambleMC };