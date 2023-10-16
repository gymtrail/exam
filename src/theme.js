import {
  extendTheme,
  withDefaultColorScheme,
  baseTheme,
} from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.purple,
    },
    fonts: {
      heading: "Inter",
      body: "Inter",
    },
    components: {
      Button: {
        baseStyle: {
          rounded: "full",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default customTheme;
