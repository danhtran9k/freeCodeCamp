// TestCase project
// let arrRegexObjKey = ["regexSyntax", "regexComment", "replace"];
// let arrStrObjKey = ["strTest", "correctTestResult", "strComment"];

// Check matching with array input
const matchMethod = (str, regex) => str.match(regex);
const testMethod = (str, regex) => regex.test(str);

const checkRegexArr = (arrStr, arrRegex, showMatching) => {
  arrRegex.forEach((regexSyntax) => {
    logRegexInfo(regexSyntax[0], regexSyntax[1]);
    arrStr.forEach((str) => {
      logTestResult(str[0], regexSyntax[0], str[1]);
      logMatchResult(showMatching, str[0], regexSyntax[0]);
    });
  });
};

// Check replace with array input
const checkRegexReplace = (arrStr, arrRegex, showMatching) => {
  arrRegex.forEach((regexSyntax) => {
    logRegexReplaceInfo(regexSyntax[0], regexSyntax[2], regexSyntax[1]);
    arrStr.forEach((str) => {
      logReplaceCheck(str[0], regexSyntax[0], regexSyntax[2], str[1]);
      logReplaceResult(showMatching, str[0], regexSyntax[0], regexSyntax[2]);
    });
  });
};

// ➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰
//  Console log function

const logRegexInfo = (syntax, syntaxComment) => {
  console.log("➿➿➿➿➿➿➿➿➿➿➿");
  console.log(`➤ ${syntax} : ${syntaxComment}`);
};

const logRegexReplaceInfo = (syntax, strReplace, comment) => {
  console.log("➿➿➿➿➿➿➿➿➿➿➿");
  console.log(`➤ ${syntax} replace "${strReplace}" : ${comment}`);
};

const logReplaceResult = (show, str, regex, replaceStr) =>
  show ? console.log(str.replace(regex, replaceStr)) : "";

const logMatchResult = (show, str, regex) =>
  show ? console.log(str.match(regex)) : "";

const logTestResult = (str, regex, correctResult) => {
  console.log(
    ` ✍ [${str}] - correct result: ${correctResult} ${
      regex.test(str) === correctResult
        ? "✅"
        : correctResult === ""
        ? "❔"
        : "❌"
    }`
  );
};
const logReplaceCheck = (str, regex, replaceStr, correctResult) =>
  console.log(
    ` ✍ [${str}] - correct result: ${correctResult} ${
      str.replace(regex, replaceStr) === correctResult
        ? "✅"
        : correctResult === ""
        ? "❔"
        : "❌"
    }`
  );

// ➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰
// for reference only
// Check matching with object input, need combine-convert step

const checkRegexObj = (arrObjStr, arrRegex, showMatching) => {
  arrRegex.forEach((regexEle) => {
    logRegexInfo(regexEle.regexSyntax, regexEle.regexComment);
    arrObjStr.forEach((strEle) => {
      logTestResult(
        strEle.strTest,
        regexEle.regexSyntax,
        strEle.correctTestResult
      );
      logMatchResult(showMatching, strEle.strTest, regexEle.regexSyntax);
    });
  });
};

// Combine arr key with arr value to create new arr obj key-value
const arrsKeyValueCombine = (arrObjKey, arrObjValue) => {
  const arrConvert = [];
  arrObjValue.forEach((objValue) => {
    const objKeyValue = {};
    arrObjKey.forEach((key, index) => {
      objKeyValue[key] = objValue[index];
    });
    arrConvert.push(objKeyValue);
  });
  return arrConvert;
};

// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
// ➿ test-run func combine array key and value ➿
// console.log(arrsKeyValueCombine(arrStrObjKey, arrStrValue));
// console.log(arrsKeyValueCombine(arrRegexObjKey, arrRegexCheck));
// ➿ test-run func match regex using object ➿
// checkRegexObj(
//   arrsKeyValueCombine(arrStrObjKey, arrStrValue),
//   arrsKeyValueCombine(arrRegexObjKey, arrRegexCheck),
//   showMatching
// );
// ➿ test-run func match regex using array input directly ➿
// checkRegexArr(arrStrValue, arrRegexCheck, showMatching);
// checkRegexReplace(arrStrTestt, arrRegexTestt, showMatching);

// Export - run-test directly
export { checkRegexObj, checkRegexArr, checkRegexReplace, arrsKeyValueCombine };
//
import * as varTest from "./fcc_algoVars.js";

const arrStr = varTest.arrStrReuse;
const arrRegex = varTest.arrRegexReuse;
const showMatching = true;
checkRegexArr(arrStr, arrRegex, showMatching);
// checkRegexReplace(arrStr, arrRegex, showMatching);
