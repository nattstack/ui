import { Tabs as BaseTabs } from "@base-ui/react"
import type { JSX } from "react"
import { normalizeWhitespace } from "../../utils/normalize-whitespace"
import { TabsUnderlineIndicator } from "./tabs-underline-indicator"
import styles from "./tabs-underline-list.module.css"

export interface TabsUnderlineListProps extends BaseTabs.List.Props {}

export function TabsUnderlineList(props: TabsUnderlineListProps): JSX.Element {
  const { className: customClassName = "", children = "", ...rest } = props

  const combinedClassName = normalizeWhitespace(`
    ${TABS_UNDERLINE_LIST_CLASS_NAME.BASE}
    ${customClassName}
  `)

  return (
    <BaseTabs.List className={combinedClassName} data-slot="tabs-underline-list" {...rest}>
      {children}
      <TabsUnderlineIndicator />
    </BaseTabs.List>
  )
}

export const TABS_UNDERLINE_LIST_CLASS_NAME = {
  BASE: styles.tabs_underline_list,
} as const
