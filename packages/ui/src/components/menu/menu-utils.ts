import { normalizeWhitespace } from "../../utils/normalize-whitespace"

export function getMenuClassName(baseClassName: string, customClassName: string): string {
  return normalizeWhitespace(`
    ${baseClassName}
    ${customClassName}
  `)
}
