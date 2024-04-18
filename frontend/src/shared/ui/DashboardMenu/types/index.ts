export type SidebarDataType = sidebarItem[]
type submenu = {
    label: string;
    icon: string;
    to: string;
    items?: submenu[];
}

type sidebarItem = {
    label: string;
    items: submenu[]
}