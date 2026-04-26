import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"

export interface MenuProps extends Omit<BaseMenu.Root.Props, "disabled" | "onOpenChange" | "open"> {
  isDisabled?: BaseMenu.Root.Props["disabled"]
  isOpen?: BaseMenu.Root.Props["open"]
  onIsOpenChange?: BaseMenu.Root.Props["onOpenChange"]
}

export function Menu(props: MenuProps): JSX.Element {
  const { isDisabled = false, isOpen = undefined, onIsOpenChange = undefined, ...rest } = props

  return (
    <BaseMenu.Root
      data-slot="menu"
      disabled={isDisabled}
      onOpenChange={onIsOpenChange}
      open={isOpen}
      {...rest}
    />
  )
}

export const createMenuHandle = BaseMenu.createHandle
