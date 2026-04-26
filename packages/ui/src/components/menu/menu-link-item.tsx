import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"

export interface MenuLinkItemProps extends BaseMenu.LinkItem.Props {}

export function MenuLinkItem(props: MenuLinkItemProps): JSX.Element {
  const { children, ...rest } = props

  return (
    <BaseMenu.LinkItem data-slot="menu-link-item" {...rest}>
      {children}
    </BaseMenu.LinkItem>
  )
}
