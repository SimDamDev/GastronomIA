import {validateConfig} from './configValidator.js';
import { isPositiveNumber } from './numberValidator.js';
import { validateRegionId } from './regionValidator.js';
import { isNotEmptyArray } from './arrayValidator.js';

/**
 * Exports the configValidator, isPositiveNumber, validateRegionId, and isNotEmptyArray functions.
 *
 * @module
 * @name Validators
 * @property {function} validateConfig - Validates the provided configuration object.
 * @property {function} isPositiveNumber - Checks if a given number is positive.
 * @property {function} validateRegionId - Validates the provided region ID.
 * @property {function} isNotEmptyArray - Checks if a given array is not empty.
 */
export {validateConfig, isPositiveNumber, validateRegionId, isNotEmptyArray}