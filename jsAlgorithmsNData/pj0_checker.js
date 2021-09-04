import * as varTest from "./fcc_algoVars.js";
const testInput = varTest.arrStrReuse;
const testArgs = varTest.arrRegexReuse;
const showReturn = true;
const oneToOne = false;
// One to One should set to false for most regex case, and set to true for case where args is all fixed and is pre-provided.
const doubleCheck = false;
// doubleCheck should set to false, only in some special case we need to use another way to recheck result

export const testSuiteChecker = (
  testInput,
  testArgs,
  showReturn,
  doubleCheck,
  oneToOne,
  callback,
  callDoubleCheck
) => {
  testArgs.forEach((eleArgs, index) => {
    logArgsInfo(eleArgs);
    if (!oneToOne) {
      testInput.forEach((eleInput) => {
        testRunCheckAndShow(
          eleInput,
          eleArgs,
          showReturn,
          doubleCheck,
          callback,
          callDoubleCheck
        );
      });
    }
    if (oneToOne) {
      let eleInput = testInput[index];
      testRunCheckAndShow(
        eleInput,
        eleArgs,
        showReturn,
        doubleCheck,
        callback,
        callDoubleCheck
      );
    }
  });
};

// logging function
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

// reformat - ??
const testRunCheckAndShow = (
  eleInput,
  eleArgs,
  showReturn,
  doubleCheck,
  callback,
  callDoubleCheck
) => {
  let resultReturn = callback(eleInput, eleArgs);
  logResultCheck(eleInput[0], resultReturn, eleInput[1]);
  if (showReturn) {
    console.log(
      doubleCheck ? callDoubleCheck(eleInput, eleArgs) : resultReturn
    );
  }
};

// Wrapping and Callback
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

// Running
// testSuiteChecker(
//   testInput,
//   testArgs,
//   showReturn,
//   doubleCheck,
//   oneToOne,
//   wrapCallback,
//   wrapDoubleCheck
// );
