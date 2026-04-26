import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX, ReactNode } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { MenuItemContent } from "./menu-item-content"
import { getMenuClassName } from "./menu-utils"

export interface MenuLinkItemProps extends Omit<BaseMenu.LinkItem.Props, "className"> {
  className?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
}

export function MenuLinkItem(props: MenuLinkItemProps): JSX.Element {
  const {
    children,
    className: customClassName = "",
    iconEnd = undefined,
    iconStart = undefined,
    ...rest
  } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.LINK_ITEM, customClassName)

  return (
    <BaseMenu.LinkItem className={combinedClassName} data-slot="menu-link-item" {...rest}>
      <MenuItemContent iconEnd={iconEnd} iconStart={iconStart}>
        {children}
      </MenuItemContent>
    </BaseMenu.LinkItem>
  )
}
