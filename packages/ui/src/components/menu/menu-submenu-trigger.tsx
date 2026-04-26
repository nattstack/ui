import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX, ReactNode } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { MenuItemContent } from "./menu-item-content"
import { getMenuClassName } from "./menu-utils"

export interface MenuSubmenuTriggerProps extends Omit<
  BaseMenu.SubmenuTrigger.Props,
  "className" | "disabled"
> {
  className?: string
  iconEnd?: ReactNode
  iconStart?: ReactNode
  isDisabled?: BaseMenu.SubmenuTrigger.Props["disabled"]
}

export function MenuSubmenuTrigger(props: MenuSubmenuTriggerProps): JSX.Element {
  const {
    children,
    className: customClassName = "",
    iconEnd = undefined,
    iconStart = undefined,
    isDisabled = false,
    ...rest
  } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.SUBMENU_TRIGGER, customClassName)
  const currentIconEnd = iconEnd ?? (
    <svg fill="none" height="16" viewBox="0 0 16 16" width="16">
      <path d="M6 3.5L10.5 8L6 12.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  )

  return (
    <BaseMenu.SubmenuTrigger
      className={combinedClassName}
      data-slot="menu-submenu-trigger"
      disabled={isDisabled}
      {...rest}
    >
      <MenuItemContent iconEnd={currentIconEnd} iconStart={iconStart}>
        {children}
      </MenuItemContent>
    </BaseMenu.SubmenuTrigger>
  )
}
