import configValidator from './configValidator';
import { isPositiveNumber } from './arrayValidator';
import { validateRegionId } from './regionValidator';
import { isNotEmptyArray } from './arrayValidator';

/**
 * Exports the configValidator, isPositiveNumber, validateRegionId, and isNotEmptyArray functions.
 *
 * @module
 * @name Validators
 * @property {function} configValidator - Validates the provided configuration object.
 * @property {function} isPositiveNumber - Checks if a given number is positive.
 * @property {function} validateRegionId - Validates the provided region ID.
 * @property {function} isNotEmptyArray - Checks if a given array is not empty.
 */
export default {configValidator, isPositiveNumber, validateRegionId, isNotEmptyArray}