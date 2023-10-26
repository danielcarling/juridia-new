import "styled-components";

import Theme from "@/styles/themes";

export type ITheme = typeof Theme;

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
