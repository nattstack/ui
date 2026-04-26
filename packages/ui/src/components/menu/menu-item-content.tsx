import type { JSX, ReactNode } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"

export interface MenuItemContentProps {
  children?: ReactNode
  iconEnd?: ReactNode
  iconStart?: ReactNode
}

export function MenuItemContent(props: MenuItemContentProps): JSX.Element {
  const { children, iconEnd = undefined, iconStart = undefined } = props

  return (
    <>
      {iconStart && <span className={MENU_CLASS_NAME.ITEM_ICON}>{iconStart}</span>}
      <span className={MENU_CLASS_NAME.ITEM_LABEL}>{children}</span>
      {iconEnd && <span className={MENU_CLASS_NAME.ITEM_ICON}>{iconEnd}</span>}
    </>
  )
}
