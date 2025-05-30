import type { ReactElement } from 'react';
import { isElement } from 'react-is';

export function isReactElement(
  maybeElement: unknown
): maybeElement is ReactElement {
  return isElement(maybeElement);
}

/**
 * Turn a maybe array into a single param, preserving types.
 */
export function getSingle<T>(param?: T | T[]): T | undefined {
  if (Array.isArray(param)) {
    return param[0];
  }
  return param;
}

/**
 * Test whether a provided string is numeric, e.g., '9' is numeric while 'nine' is not.
 */
export function isNumericString(key: string | undefined): boolean {
  return Boolean(key && !Number.isNaN(Number(key)));
}
