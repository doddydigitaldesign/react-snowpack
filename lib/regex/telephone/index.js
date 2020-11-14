import {validators} from "./lang/index.js";
import {assertIValidators} from "./util/assertValidator.js";
import {createRegExp as createRegExp2} from "./util/createRegExp.js";
export const phoneNumberValidators = (lang2) => {
  const langSpecificValidators = validators[lang2];
  assertIValidators(langSpecificValidators);
  const regex = createRegExp2(langSpecificValidators);
  return regex;
};
