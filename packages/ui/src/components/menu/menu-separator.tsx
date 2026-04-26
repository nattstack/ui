import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { getMenuClassName } from "./menu-utils"

export interface MenuSeparatorProps extends Omit<BaseMenu.Separator.Props, "className"> {
  className?: string
}

export function MenuSeparator(props: MenuSeparatorProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.SEPARATOR, customClassName)

  return <BaseMenu.Separator className={combinedClassName} data-slot="menu-separator" {...rest} />
}
