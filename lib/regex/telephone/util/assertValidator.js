const comparisonObj = {
  intlLandline: "someString",
  intlMobile: "someString",
  landline: "someString",
  mobile: "someString"
};
export function assertIValidators(validator) {
  const arr = [];
  if (validator && typeof validator === "object") {
    for (const key in comparisonObj) {
      if (Object.prototype.hasOwnProperty.call(comparisonObj, key)) {
        arr.push(key in validator);
      }
    }
  }
  if (!arr.every((x) => x === true)) {
    throw new TypeError("The type of validator does not match the interface IValidators.");
  }
}
