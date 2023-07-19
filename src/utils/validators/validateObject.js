/**
 * Validates the provided configuration object by checking each of its properties using the provided validation rules.
 *
 * @function
 * @name validateObject
 * @param {Object} obj - The object to validate.
 * @param {Object} validationRules - An object mapping properties to validation functions.
 * @throws {Error} Will throw an error if a property does not satisfy its associated validation function.
 */
function validateObject(object, rules) {
    if (!object || !rules) {
        throw new Error('Object and rules cannot be null or undefined');
    }

    for (const rule of rules) {
      const value = object[rule.key];
  
      if (value === undefined) {
        throw new Error(`${rule.key} configuration is missing`);
      }
  
      if (typeof value !== rule.type) {
        throw new Error(`${rule.key} configuration is not a ${rule.type}`);
      }
  
      if (rule.validate && !rule.validate(value)) {
        throw new Error(`${rule.key} configuration is invalid`);
      }
    }
}
