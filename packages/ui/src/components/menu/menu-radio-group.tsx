import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { getMenuClassName } from "./menu-utils"

export interface MenuRadioGroupProps extends Omit<
  BaseMenu.RadioGroup.Props,
  "className" | "disabled"
> {
  className?: string
  isDisabled?: BaseMenu.RadioGroup.Props["disabled"]
}

export function MenuRadioGroup(props: MenuRadioGroupProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.RADIO_GROUP, customClassName)

  return (
    <BaseMenu.RadioGroup
      className={combinedClassName}
      data-slot="menu-radio-group"
      disabled={isDisabled}
      {...rest}
    />
  )
}
