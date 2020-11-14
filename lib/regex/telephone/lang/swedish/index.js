import countryCodes2 from "../countryCodes.json.proxy.js";
import areaCodes2 from "./areaCodes.json.proxy.js";
const isValidMobileTelephoneNumber = "^0(70|72|73|76|79)(-?)([0-9]{7})$";
const isValidLandlineTelephoneNumber = `^(${areaCodes2.join("|")})(-?)([0-9]{5,14})$`;
const isValidInternationalMobileNumber = `^([+]{1}|00)(${countryCodes2.join("|")})(70|72|73|76|79)(-?)([0-9]{7})$`;
const isValidInternationalLandlineNumber = `^([+]{1}|00)(${countryCodes2.join("|")})([012345689]{1,3})(-?)([0-9]{5,14})$`;
export const swedishValidators = {
  mobile: isValidMobileTelephoneNumber,
  landline: isValidLandlineTelephoneNumber,
  intlMobile: isValidInternationalMobileNumber,
  intlLandline: isValidInternationalLandlineNumber
};
