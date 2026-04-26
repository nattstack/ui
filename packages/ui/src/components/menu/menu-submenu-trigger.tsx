import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"

export interface MenuSubmenuTriggerProps extends BaseMenu.SubmenuTrigger.Props {}

export function MenuSubmenuTrigger(props: MenuSubmenuTriggerProps): JSX.Element {
  const { children, ...rest } = props

  return (
    <BaseMenu.SubmenuTrigger data-slot="menu-submenu-trigger" {...rest}>
      {children}
    </BaseMenu.SubmenuTrigger>
  )
}
