interface IPalette {
  backgroundColor: string,
  containerColor: string,
  primaryTextColor: string,
  secondaryTextColor: string,
  primaryActionColor: string,
  secondaryActionColor: string
}

interface ICustomStyle {
  font: string,
  backgroundStyle: string,
  containerStyle: string,
  buttonStyle: string,
  inputStyle: string
}

export interface IThemeConfig {
  title: string,
  description: string,
  palette: IPalette,
  customStyle: ICustomStyle
}