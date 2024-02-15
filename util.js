function smlr(iStr) {
    return (iStr.slice(0, 8) +
            "..." + 
            iStr.slice(-8));
  }

  export { smlr };