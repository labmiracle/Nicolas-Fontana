const adnCleaner = (adn: string): string => {
    if (typeof adn != "string") {
        throw new Error("Must be a string");
    }
    if (adn === "") {
      return adn
    }
    const canonicalBases = ["C", "T", "A", "G"];
    let cleanADN = "";
    for (let i = 0; i < adn.length; i++) {
      if(canonicalBases.includes(adn[i])) {
        cleanADN += adn[i]
      }
    }
    return cleanADN;
};

export default adnCleaner;
