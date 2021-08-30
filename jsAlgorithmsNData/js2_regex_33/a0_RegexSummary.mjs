/*
/Hello/ - literal match of the string Hello
/yes|no/ - alternation or OR operator: |

'string'.match(/regex/);
/regex/.test('string');
.match() method to extract the string coding.
.test() method return true false.

global flag g - return all match
insensitive (ignore case) flag i
wildcard char (aka dot and period) .  match any one char.  (1+)

[group of char]  
/[a-z0-9]/ig  
negated character set : [^set] = not s,e,t
    /^Ricky/ - no Ricky at beginning of str
    /Ricky$/ - no Ricky at end of str
/a+/ : a (1+) - aa , aaaa, a , ...
* : (0+) 
? : (0 or 1)

normal state: greedy match  - titanic
/t[a-z]*i/  - titanic
lazy match - ?
/t[a-z]*?i/ - ti

. wildcard char, match any one character.
\w equal [A-Za-z0-9_] and  _
    \W is ^\w or [^A-Za-z0-9_]
\d equal [0-9]
    \D is ^\d or [^0-9]
\s equal [ \r\t\f\n\v]  
    \S is ^\s or [^ \r\t\f\n\v]
Quantity specifiers are used with curly brackets  { and }
    between x and y times {x,y}
    at least x times {x,}
    exact x times {x}

Lookeadhead
    positive lookahead (?=...) - (true)
    negative lookahead (?!...) - (false)
        /(?=\w{3,6})(?=\D*\d)/ 
            looks for between 3 and 6 characters 
            AND at least one number
    !!! condition check , does NOT return ... in (...) !!!
    
parentheses () - mixed group of chars, 
to recall the group () in the same syntax use \1 , \2 , ...
access capture groups in the replacement string with dollar signs ($)



*/

// Reuse Patterns Using Capture Groups

const showMatching = false;
const arrRegexObjKey = ["regexSyntax", "regexComment", "replace"];
const arrRegexCheck = [
  [/^(\d+) \1 \1$/, "", ""],
  [/(\d+) \1 \1/, "", ""],
  [/(\d+) \1{2}/, "", ""],
  [/(\d+) (\d+) (\d+)/, "", ""],
];
const arrStrObjKey = ["strTest", "correctTestResult", "strComment"];
const arrStrValue = [
  ["42 42 42", true, ""],
  ["42 42 42 42", false, ""],
  ["11 12 13", false, ""],
  ["1 2 3", false, ""],
  ["42 42", false, ""],
  ["42 42 42 ", false, ""],

  ["1 42 42 42", ""],
  ["42 42 42 1", ""],
];
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

const arrObjStr = arrsKeyValueCombine(arrStrObjKey, arrStrValue);
const arrRegex = arrsKeyValueCombine(arrRegexObjKey, arrRegexCheck);
// console.log(arrsKeyValueCombine(arrStrObjKey, arrStrValue));
// console.log(arrsKeyValueCombine(arrRegexObjKey, arrRegexCheck));

// ==================================================
// Doing directly with array input

const checkRegexArr = (arrStr, arrRegex, showMatching) => {
  arrRegex.forEach((regexSyntax) => {
    logRegexInfo(regexSyntax[0], regexSyntax[1]);
    arrStr.forEach((str) => {
      logTestResult(str[0], regexSyntax[0], str[1]);
      logMatchResult(showMatching, str[0], regexSyntax[0]);
    });
  });
};

const checkRegexReplace = (arrStr, arrRegex, showMatching) => {
  arrRegex.forEach((regexSyntax) => {
    logRegexReplaceInfo(regexSyntax[0], regexSyntax[2], regexSyntax[1]);
    arrStr.forEach((str) => {
      logReplaceCheck(str[0], regexSyntax[0], regexSyntax[2], str[1]);
      logReplaceResult(showMatching, str[0], regexSyntax[0], regexSyntax[2]);
    });
  });
};

// ==================================================

const matchMethod = (str, regex) => str.match(regex);
const testMethod = (str, regex) => regex.test(str);

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
        ? "❎"
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
        ? "❎"
        : correctResult === ""
        ? "❔"
        : "❌"
    }`
  );

// export { checkRegexObj, checkRegexArr, checkRegexReplace };
// checkRegexObj(arrObjStr, arrRegex, showMatching);
// checkRegexArr(arrStrValue, arrRegexCheck, showMatching);

// ➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰➰
const arrRegexTestt = [
  [/^(\s+)(\S.*\S)(\s+)$/, "my sol", "$2"],
  [/^\s+|\s+$/g, "fcc sol", ""],
];
const arrStrTestt = [["   Hello, World!  ", "Hello, World!", ""]];
// checkRegexReplace(arrStrTestt, arrRegexTestt, showMatching);
// ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
// ONE or MORE CRIME
const arrUserRegex = [
  [/(?=\w{2,}|)^([a-z]+)(\d*)$/i, "my sol", ""],
  [/^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i, "fcc sol 1", ""],
  [/^[a-z]([0-9]{2,}|[a-z]+\d*)$/i, "fcc sol 2", ""],
];
const arrUserName = [
  ["JACK", true, ""],
  ["J", false, ""],
  ["Jo", true, ""],
  ["Oceans11", true, ""],
  ["RegexGuru", true, ""],
  ["007", false, ""],
  ["9", false, ""],
  ["A1", false, ""],
  ["BadUs3rnam3", false, ""],
  ["Z97", true, ""],
  ["Jc57bT3", false, ""],
  ["AB1", true, ""],
  ["J%4", false, ""],
];

// checkRegexArr(arrUserName, arrUserRegex, showMatching);
