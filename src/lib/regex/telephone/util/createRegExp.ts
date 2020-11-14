import type { IValidators } from '../lang/types/validator';

export function createRegExp(validators: IValidators) {
  const intlLandline = new RegExp(validators.intlLandline);
  const intlMobile = new RegExp(validators.intlMobile);
  const landline = new RegExp(validators.landline);
  const mobile = new RegExp(validators.mobile);
  return {
    intlLandline,
    intlMobile,
    landline,
    mobile,
  };
}
