import styles from "./menu.module.css"

export const MENU_CLASS_NAME = {
  ARROW: styles.menu_content_arrow,
  ARROW_ICON: styles.menu_content_arrow__icon,
  CHECKBOX_ITEM: styles.menu_checkbox_item,
  CONTENT: styles.menu_content,
  CONTENT_POSITIONER: styles.menu_content_positioner,
  GROUP: styles.menu_group,
  GROUP_LABEL: styles.menu_group_label,
  ITEM: styles.menu_item,
  ITEM_ICON: styles.menu_item__icon,
  ITEM_INDICATOR: styles.menu_item__indicator,
  ITEM_LABEL: styles.menu_item__label,
  LINK_ITEM: styles.menu_link_item,
  RADIO_GROUP: styles.menu_radio_group,
  RADIO_ITEM: styles.menu_radio_item,
  SEPARATOR: styles.menu_separator,
  SUBMENU_TRIGGER: styles.menu_submenu_trigger,
  TRIGGER: styles.menu_trigger,
  VIEWPORT: styles.menu_viewport,
} as const
