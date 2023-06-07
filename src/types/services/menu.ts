interface SubMenu {
  title: string
}

interface Menu {
  title: string
  children: SubMenu[]
}

export type { Menu, SubMenu }
