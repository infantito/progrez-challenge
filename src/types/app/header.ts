type SubMenu = {
  title: string
}

type MenuItem = {
  title: string
  children: SubMenu[]
}

type HeaderProps = {
  menu: MenuItem[]
}

type HeaderChildrenProps = {
  options: SubMenu[]
}

export type { HeaderProps, HeaderChildrenProps }
