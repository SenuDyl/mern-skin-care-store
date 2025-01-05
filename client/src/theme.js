export const colorTokens = {
    grey: {
        0: "#FFFFFF",
        10: "#F5F5F5",
        50: "#E8E8E8",
        100: "#D0D0D0",
        200: "#B3B3B3",
        300: "#8F8F8F",
        400: "#6C6C6C",
        500: "#4B4B4B",
        600: "#383838",
        700: "#2B2B2B",
        800: "#1F1F1F",
        900: "#121212",
        1000: "#000000",
    },
    primary: {
        50: "#E0F7FA",
        100: "#B2EBF2",
        200: "#80DEEA",
        300: "#4DD0E1",
        400: "#26C6DA",
        500: "#00BCD4",
        600: "#00ACC1",
        700: "#0097A7",
        800: "#00838F",
        900: "#006064",
    },
    secondary: {
        50: "#FBE9E7",
        100: "#FFCCBC",
        200: "#FFAB91",
        300: "#FF8A65",
        400: "#FF7043",
        500: "#FF5722",
        600: "#F4511E",
        700: "#E64A19",
        800: "#D84315",
        900: "#BF360C",
    }
}

export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        dark: colorTokens.primary[300],
                        main: colorTokens.primary[500],
                        light: colorTokens.primary[700],
                    },
                    secondary: {
                        dark: colorTokens.secondary[300],
                        main: colorTokens.secondary[500],
                        light: colorTokens.secondary[700],
                    },
                    neutral: {
                        dark: colorTokens.grey[200],
                        main: colorTokens.grey[300],
                        mediumMain: colorTokens.grey[400],
                        medium: colorTokens.grey[500],
                        light: colorTokens.grey[700],
                    },
                    background: {
                        default: colorTokens.grey[900],
                        alt: colorTokens.grey[800],
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        dark: colorTokens.primary[700],
                        main: colorTokens.primary[500],
                        light: colorTokens.primary[50],
                    },
                    secondary: {
                        dark: colorTokens.secondary[700],
                        main: colorTokens.secondary[500],
                        light: colorTokens.secondary[50],
                    },
                    neutral: {
                        dark: colorTokens.grey[700],
                        main: colorTokens.grey[500],
                        mediumMain: colorTokens.grey[400],
                        medium: colorTokens.grey[300],
                        light: colorTokens.grey[50],
                    },
                    background: {
                        default: colorTokens.grey[10],
                        alt: colorTokens.grey[0],
                    },
                }),
        },
        typography: {
            fontFamily: ["Arial", "sans-serif"].join(","),
            fontSize: 14,
            h1: {
                fontFamily: ["Arial", "sans-serif"].join(","),
                fontSize: 36,
            },
            h2: {
                fontFamily: ["Arial", "sans-serif"].join(","),
                fontSize: 28,
            },
            h3: {
                fontFamily: ["Arial", "sans-serif"].join(","),
                fontSize: 22,
            },
            h4: {
                fontFamily: ["Arial", "sans-serif"].join(","),
                fontSize: 18,
            },
            h5: {
                fontFamily: ["Arial", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Arial", "sans-serif"].join(","),
                fontSize: 14,
            },
        }


    }
}