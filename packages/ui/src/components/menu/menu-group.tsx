import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { getMenuClassName } from "./menu-utils"

export interface MenuGroupProps extends Omit<BaseMenu.Group.Props, "className"> {
  className?: string
}

export function MenuGroup(props: MenuGroupProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.GROUP, customClassName)

  return <BaseMenu.Group className={combinedClassName} data-slot="menu-group" {...rest} />
}
