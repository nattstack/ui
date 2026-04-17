import { OTPFieldPreview as OtpBase } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import styles from "./otp-input.module.css"

interface OtpInputProps extends Omit<OtpBase.Input.Props, "disabled"> {
  isDisabled?: OtpBase.Input.Props["disabled"]
}

export function OtpInput(props: OtpInputProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${OTP_INPUT_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <OtpBase.Input className={combinedClassName} disabled={isDisabled} {...rest} />
}

export const OTP_INPUT_CLASS_NAME = {
  BASE: styles.otp_input,
} as const
