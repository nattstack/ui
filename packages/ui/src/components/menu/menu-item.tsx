import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX, ReactNode } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { MenuItemContent } from "./menu-item-content"
import { getMenuClassName } from "./menu-utils"

export interface MenuItemProps extends Omit<BaseMenu.Item.Props, "className" | "disabled"> {
  className?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isDisabled?: BaseMenu.Item.Props["disabled"]
}

export function MenuItem(props: MenuItemProps): JSX.Element {
  const {
    children,
    className: customClassName = "",
    iconEnd = undefined,
    iconStart = undefined,
    isDisabled = false,
    ...rest
  } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.ITEM, customClassName)

  return (
    <BaseMenu.Item
      className={combinedClassName}
      data-slot="menu-item"
      disabled={isDisabled}
      {...rest}
    >
      <MenuItemContent iconEnd={iconEnd} iconStart={iconStart}>
        {children}
      </MenuItemContent>
    </BaseMenu.Item>
  )
}
