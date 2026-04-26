import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { getMenuClassName } from "./menu-utils"

export interface MenuViewportProps extends Omit<BaseMenu.Viewport.Props, "className"> {
  className?: string
}

export function MenuViewport(props: MenuViewportProps): JSX.Element {
  const { className: customClassName = "", ...rest } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.VIEWPORT, customClassName)

  return <BaseMenu.Viewport className={combinedClassName} data-slot="menu-viewport" {...rest} />
}
