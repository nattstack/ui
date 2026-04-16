import { Drawer as BaseDrawer } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import { DialogResponsiveBackdrop } from "./dialog-responsive-backdrop"
import { DialogResponsiveBar } from "./dialog-responsive-bar"
import { DialogResponsivePortal } from "./dialog-responsive-portal"
import { DialogResponsiveViewport } from "./dialog-responsive-viewport"
import styles from "./dialog-responsive-popup.module.css"

export interface DialogResponsivePopupProps extends BaseDrawer.Popup.Props {}

export function DialogResponsivePopup(props: DialogResponsivePopupProps): JSX.Element {
  const { children, className: customClassName = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${DIALOG_RESPONSIVE_POPUP_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <DialogResponsivePortal>
      <DialogResponsiveBackdrop />
      <DialogResponsiveViewport>
        <BaseDrawer.Popup
          className={combinedClassName}
          data-slot="dialog-responsive-popup"
          {...rest}
        >
          <DialogResponsiveBar />
          {children}
        </BaseDrawer.Popup>
      </DialogResponsiveViewport>
    </DialogResponsivePortal>
  )
}

export const DIALOG_RESPONSIVE_POPUP_CLASS_NAME = {
  BASE: styles.dialog_responsive_popup,
} as const
