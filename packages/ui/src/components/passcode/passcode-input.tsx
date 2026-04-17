import { OTPFieldPreview as PasscodeBase } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import styles from "./passcode-input.module.css"

interface PasscodeInputProps extends Omit<PasscodeBase.Input.Props, "disabled"> {
  isDisabled?: PasscodeBase.Input.Props["disabled"]
}

export function PasscodeInput(props: PasscodeInputProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${PASSCODE_INPUT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <PasscodeBase.Input className={combinedClassName} disabled={isDisabled} {...rest} />
}

export const PASSCODE_INPUT_CLASS_NAME = {
  BASE: styles.passcode_input,
} as const
