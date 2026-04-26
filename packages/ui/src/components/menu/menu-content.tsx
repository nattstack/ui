import { Menu as BaseMenu } from "@base-ui/react"
import type { JSX } from "react"
import { MENU_CLASS_NAME } from "./menu-class-names"
import { getMenuClassName } from "./menu-utils"

export interface MenuContentProps
  extends
    Omit<BaseMenu.Popup.Props, "className">,
    Pick<
      BaseMenu.Positioner.Props,
      | "align"
      | "alignOffset"
      | "anchor"
      | "arrowPadding"
      | "collisionAvoidance"
      | "collisionBoundary"
      | "collisionPadding"
      | "disableAnchorTracking"
      | "positionMethod"
      | "side"
      | "sideOffset"
      | "sticky"
    > {
  className?: string
  container?: BaseMenu.Portal.Props["container"]
  keepMounted?: BaseMenu.Portal.Props["keepMounted"]
  showArrow?: boolean
}

export function MenuContent(props: MenuContentProps): JSX.Element {
  const {
    align = "start",
    alignOffset = undefined,
    anchor = undefined,
    arrowPadding = undefined,
    children,
    className: customClassName = "",
    collisionAvoidance = undefined,
    collisionBoundary = undefined,
    collisionPadding = undefined,
    container = undefined,
    disableAnchorTracking = undefined,
    keepMounted = undefined,
    positionMethod = undefined,
    showArrow = false,
    side = "bottom",
    sideOffset = 8,
    sticky = undefined,
    ...rest
  } = props

  const combinedClassName = getMenuClassName(MENU_CLASS_NAME.CONTENT, customClassName)

  return (
    <BaseMenu.Portal container={container} keepMounted={keepMounted}>
      <BaseMenu.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        arrowPadding={arrowPadding}
        className={MENU_CLASS_NAME.CONTENT_POSITIONER}
        collisionAvoidance={collisionAvoidance}
        collisionBoundary={collisionBoundary}
        collisionPadding={collisionPadding}
        disableAnchorTracking={disableAnchorTracking}
        positionMethod={positionMethod}
        side={side}
        sideOffset={sideOffset}
        sticky={sticky}
      >
        <BaseMenu.Popup className={combinedClassName} data-slot="menu-content" {...rest}>
          {showArrow && (
            <BaseMenu.Arrow className={MENU_CLASS_NAME.ARROW}>
              <svg
                className={MENU_CLASS_NAME.ARROW_ICON}
                fill="none"
                height="6"
                viewBox="0 0 12 6"
                width="12"
              >
                <path d="M0 6L5.15 0.85C5.62 0.38 6.38 0.38 6.85 0.85L12 6H0Z" />
              </svg>
            </BaseMenu.Arrow>
          )}
          {children}
        </BaseMenu.Popup>
      </BaseMenu.Positioner>
    </BaseMenu.Portal>
  )
}
