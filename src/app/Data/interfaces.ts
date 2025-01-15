interface IPalette {
  backgroundColor: string,
  primaryTextColor: string,
  secondaryTextColor: string,
  primaryActionColor: string,
  secondaryActionColor: string
}

interface ICustomStyle {
  font: string,
  backgroundStyle: string,
  containerStyle: string,
  buttonStyle: string
}

export interface IThemeConfig {
  name: string,
  description: string,
  palette: IPalette,
  customStyle: ICustomStyle
}