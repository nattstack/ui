import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"

export interface MenuSubmenuProps extends Omit<
  BaseMenu.SubmenuRoot.Props,
  "disabled" | "onOpenChange" | "open"
> {
  isDisabled?: BaseMenu.SubmenuRoot.Props["disabled"]
  isOpen?: BaseMenu.SubmenuRoot.Props["open"]
  onIsOpenChange?: BaseMenu.SubmenuRoot.Props["onOpenChange"]
}

export function MenuSubmenu(props: MenuSubmenuProps): JSX.Element {
  const { isDisabled = false, isOpen = undefined, onIsOpenChange = undefined, ...rest } = props

  return (
    <BaseMenu.SubmenuRoot
      data-slot="menu-submenu"
      disabled={isDisabled}
      onOpenChange={onIsOpenChange}
      open={isOpen}
      {...rest}
    />
  )
}
