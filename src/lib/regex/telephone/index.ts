import { validators } from './lang';
import type { IValidators } from './lang/types/validator';
import { assertIValidators } from './util/assertValidator';
import { createRegExp } from './util/createRegExp';

export const phoneNumberValidators = (
  lang: keyof typeof validators,
): IValidators => {
  const langSpecificValidators = validators[lang];

  assertIValidators(langSpecificValidators);

  const regex = createRegExp(langSpecificValidators);

  return regex;
};
