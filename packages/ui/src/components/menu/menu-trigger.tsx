import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { getMenuClassName } from "./menu-utils"

export interface MenuTriggerProps extends Omit<BaseMenu.Trigger.Props, "className" | "disabled"> {
  className?: string
  isDisabled?: BaseMenu.Trigger.Props["disabled"]
}

export function MenuTrigger(props: MenuTriggerProps): JSX.Element {
  const { className: customClassName = "", isDisabled = false, ...rest } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.TRIGGER, customClassName)

  return (
    <BaseMenu.Trigger
      className={combinedClassName}
      data-slot="menu-trigger"
      disabled={isDisabled}
      {...rest}
    />
  )
}
