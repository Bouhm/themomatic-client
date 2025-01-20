export interface IPalette {
  primaryColor: string,
  secondaryColor: string,
  primaryTextColor: string,
  secondaryTextColor: string,
  primaryActionColor: string,
  secondaryActionColor: string
}

interface ICustomStyles {
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
  customStyles: ICustomStyles
}