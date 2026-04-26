import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { getMenuClassName } from "./menu-utils"

export interface MenuGroupLabelProps extends Omit<BaseMenu.GroupLabel.Props, "className"> {
  className?: string
}

export function MenuGroupLabel(props: MenuGroupLabelProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.GROUP_LABEL, customClassName)

  return (
    <BaseMenu.GroupLabel className={combinedClassName} data-slot="menu-group-label" {...rest} />
  )
}
