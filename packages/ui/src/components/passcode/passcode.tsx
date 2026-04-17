import { OTPFieldPreview as PasscodeBase } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import styles from "./passcode.module.css"

interface PasscodeProps extends Omit<PasscodeBase.Root.Props, "disabled"> {
  isDisabled?: PasscodeBase.Root.Props["disabled"]
}

export function Passcode(props: PasscodeProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${PASSCODE_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <PasscodeBase.Root className={combinedClassName} disabled={isDisabled} {...rest} />
}

export const PASSCODE_CLASS_NAME = {
  BASE: styles.passcode,
} as const
