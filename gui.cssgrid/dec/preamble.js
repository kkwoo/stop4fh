import m from 'mithril';

var titleMC = {
  view: function(vnode) {
    return(m("h1", {}, "Dec"));
  }
};

var legendMC = {
  view: function(vnode) {
    return(m("legend", {}, "MVP: add endDate and refactor code"));
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
                    legendMC,
                    buildMC,
                  ].map(x => m(x, vnode.attrs)));
    return(result);
  }
}

export { preambleMC };