import { OTPFieldPreview as OtpBase } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import styles from "./otp.module.css"

interface OtpProps extends Omit<OtpBase.Root.Props, "disabled"> {
  isDisabled?: OtpBase.Root.Props["disabled"]
}

export function Otp(props: OtpProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${OTP_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return <OtpBase.Root className={combinedClassName} disabled={isDisabled} {...rest} />
}

export const OTP_CLASS_NAME = {
  BASE: styles.otp,
} as const
