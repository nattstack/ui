import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"

export interface MenuTriggerProps extends BaseMenu.Trigger.Props {}

export function MenuTrigger(props: MenuTriggerProps): JSX.Element {
  const { ...rest } = props

  return <BaseMenu.Trigger data-slot="menu-trigger" {...rest} />
}
