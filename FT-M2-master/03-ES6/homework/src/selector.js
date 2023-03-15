var traverseDomAndCollectElements = function (matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl)
  for (let i = 0; i < startEl.childen.length; i++) {
    let resul = traverseDomAndCollectElements(matchFunc,startEl.childen[i])
    resultSet = [...resul, ...resultSet]
  }
  return resultSet 
};
// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function (selector) {
  // ("#pagetitle")   (".photos") ("tag.class")
  // tu código aquí
  if ("#" === selector[0]) return "id";
  if ("." === selector[0]) return "class";
  for (let i = 1; i < selector.length; i++) {
    if ("." === selector[i]) return "tag.class";
  }
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function (selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction; // return true or false
  if (selectorType === "id") {
    matchFunction = (e) => `#${e.id}` === selector; // ("#fufu")  (".wewe")
  } else if (selectorType === "class") {
    matchFunction = (e) => {
      for (let i = 0; i < e.classList.length; i++) {
        // small lead wewe  e.classList -> ["small", "lead", "wewe"]
        if (`.${e.classList[i]}` === selector) return true;
      }
      return false;
    };
  } else if (selectorType === "tag.class") {
    // ("div.lead")
    matchFunction = (e) => {
      let [tag, cla] = selector.split("."); // [ "div", "lead"]
      // let tagg = selector.split(".")[0]
      // let claa = selector.split(".")[1]
      let funcClass = matchFunctionMaker("."+cla);
      let funcTag = matchFunctionMaker(tag);
      return funcTag(e) && funcClass(e);
    };
  } else if (selectorType === "tag") {
    // DIV ("div")
    matchFunction = (e) => e.tagName === selector.toUpperCase();
  }
  return matchFunction; // function -> la usaremos para obtener true or false
};
// matchFunction  -> (e) => `#${e.id}` === selector; <- <div id="fufu"></div>
var $ = function (selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);// -> (e) => `#${e.id}` === selector
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
