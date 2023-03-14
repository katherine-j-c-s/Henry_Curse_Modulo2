var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  var objStartEl = startEl.children
  for (const prop in objStartEl) {
    resultSet.push(objStartEl[prop])
  }
  
};
traverseDomAndCollectElements()
// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === "#") {
    return "id"
  }else if (selector[0] === ".") {
    return "class"
  }else if (selector.substr(0,4) === "img.") {
    return "tag.class"
  }else {
    return "tag"
  }
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction = false;
  if (selectorType === "id") { 
   matchFunction = true
  } else if (selectorType === "class") {
    matchFunction = true    
  } else if (selectorType === "tag.class") {
    matchFunction = true
  } else if (selectorType === "tag") {
    matchFunction = true
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
