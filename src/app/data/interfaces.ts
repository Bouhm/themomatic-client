export interface IPalette {
  primary: string,
  secondary: string,
  primaryText: string,
  secondaryText: string,
  primaryAction: string,
  secondaryAction: string
}

interface ICustomStyles {
  primaryFont: string,
  secondaryFont: string,
  background: string,
  container: string,
  primaryButton: string,
  secondaryButton: string,
  input: string
}

export interface IThemeConfig {
  title: string,
  description: string,
  palette: IPalette,
  customStyles: ICustomStyles
}