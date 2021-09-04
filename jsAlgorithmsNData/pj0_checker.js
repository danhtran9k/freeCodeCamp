import * as varTest from "./fcc_algoVars.js";
const testInput = varTest.arrStrReuse;
const testArgs = varTest.arrRegexReuse;
const showReturn = true;
const oneToOne = true;
// One to One should set to false for most regex case, and set to true for case where args is all fixed and is pre-provided.
const doubleCheck = false;
// doubleCheck should set to false, only in some special case we need to use another way to recheck result

const testSuiteChecker = (
  testInput,
  testArgs,
  showReturn,
  oneToOne,
  callback,
  doubleCheck,
  callDoubleCheck
) => {
  testArgs.forEach((eleArgs, index) => {
    logArgsInfo(eleArgs);
    let resultReturn;
    if (!oneToOne) {
      testInput.forEach((eleInput) => {
        resultReturn = callback(eleInput, eleArgs);
        logResultCheck(eleInput[0], resultReturn, eleInput[1]);
        if (showReturn) {
          console.log(
            doubleCheck ? callDoubleCheck(eleInput, eleArgs) : resultReturn
          );
        }
      });
    }
    if (oneToOne) {
      let eleInput = testInput[index];
      resultReturn = callback(eleInput, eleArgs);
      logResultCheck(eleInput[0], resultReturn, eleInput[1]);
      if (showReturn) {
        console.log(
          doubleCheck ? callDoubleCheck(eleInput, eleArgs) : resultReturn
        );
      }
    }
  });
};

const logArgsInfo = (testArgs) => {
  console.log("➿➿➿➿➿➿➿➿➿➿➿");
  const strArgsInfo = testArgs.reduce((str, ele) => {
    return (str += ele + " : ");
  }, `➤ `);
  console.log(strArgsInfo);
};

const logResultCheck = (input, resultReturn, correctResult) => {
  console.log(
    ` ✍ [${input}] - correct result: ${correctResult} ${
      resultReturn === correctResult ? "✅" : correctResult === "" ? "❔" : "❌"
    }`
  );
};

// check
const testMethod = (str, regex) => regex.test(str);
const wrapCallback = (testInput, testArgs) => {
  const str = testInput[0];
  const regex = testArgs[0];
  return testMethod(str, regex);
};
// doublecheck
const matchMethod = (str, regex) => str.match(regex);

const wrapDoubleCheck = (testInput, testArgs) => {
  const str = testInput[0];
  const regex = testArgs[0];
  return matchMethod(str, regex);
};

testSuiteChecker(
  testInput,
  testArgs,
  showReturn,
  oneToOne,
  wrapCallback,
  doubleCheck,
  wrapDoubleCheck
);
