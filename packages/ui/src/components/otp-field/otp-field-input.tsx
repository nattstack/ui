import { OTPFieldPreview as OTPFieldBase } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import styles from "./otp-field-input.module.css"

interface OTPFieldInputProps extends Omit<OTPFieldBase.Input.Props, "disabled"> {
  isDisabled?: OTPFieldBase.Input.Props["disabled"]
}

export function OTPFieldInput(props: OTPFieldInputProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${OTP_FIELD_INPUT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <OTPFieldBase.Input className={combinedClassName} disabled={isDisabled} {...rest} />
}

export const OTP_FIELD_INPUT_CLASS_NAME = {
  BASE: styles.otp_field_input,
} as const
