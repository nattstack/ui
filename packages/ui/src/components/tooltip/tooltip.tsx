import { Tooltip as BaseTooltip } from "@base-ui/react"
import type { JSX } from "react"

export interface TooltipProps extends Omit<BaseTooltip.Root.Props, "disabled"> {
  isDisabled?: BaseTooltip.Root.Props["disabled"]
}

export function Tooltip(props: TooltipProps): JSX.Element {
  const { isDisabled = false, ...rest } = props

  return (
    <BaseTooltip.Root data-slot="tooltip" disabled={isDisabled} disableHoverablePopup {...rest} />
  )
}
