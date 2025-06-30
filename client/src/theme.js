// color design tokens export
export const colorTokens = {
    grey: {
        0: "#FFFFFF",  // pure white
        10: "#F7F7F7", // very light grey (close to white)
        50: "#EDEDED", // light grey
        100: "#D0D0D0", // light-medium grey
        200: "#B2B2B2", // medium grey
        300: "#999999", // medium grey
        400: "#7F7F7F", // slightly dark grey
        500: "#666666", // neutral grey
        600: "#4D4D4D", // dark grey
        700: "#333333", // very dark grey
        800: "#1A1A1A", // almost black
        900: "#0A0A0A", // dark blackish grey
        1000: "#000000", // pure black
    },
    white: {
        0: "#FFFFFF",  // pure white
        10: "#FAF9FA", // off-white
        20: "#F5F5F5", // warm white
        30: "#F1F1F1", // very light warm greyish white
    },
    primary: {
        50: "#FDE6F0", // light pink
        100: "#FBC9E1", // pink
        200: "#F8A1D2", // soft pink
        300: "#F77AB2", // pink
        400: "#F45394", // bright pink
        500: "#F12C77", // vibrant pink
        600: "#D41F64", // darker pink
        700: "#A31850", // rich pink
        800: "#7B103B", // deep pink
        900: "#4E0626", // dark pink
    },
};

// mui theme settings
export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === "dark"
                ? {
                    // palette values for dark mode
                    primary: {
                        dark: colorTokens.primary[200],
                        main: colorTokens.primary[500],
                        light: colorTokens.primary[800],
                    },
                    neutral: {
                        dark: colorTokens.grey[100],
                        main: colorTokens.grey[200],
                        mediumMain: colorTokens.grey[300],
                        medium: colorTokens.grey[400],
                        light: colorTokens.grey[700],
                    },
                    background: {
                        default: colorTokens.grey[900],
                        alt: colorTokens.grey[800],
                    },
                    white: {
                        light: colorTokens.white[0], // pure white for highlights
                        offWhite: colorTokens.white[10], // off-white for cards, etc.
                    },
                }
                : {
                    // palette values for light mode
                    primary: {
                        dark: colorTokens.primary[700],
                        main: colorTokens.primary[500],
                        light: colorTokens.primary[50],
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
                    white: {
                        light: colorTokens.white[0], // pure white for highlights
                        offWhite: colorTokens.white[10], // off-white for cards, etc.
                    },
                }),
        },
        typography: {
            fontFamily: ["Poppins", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Dancing Script", "Poppins", "sans-serif"].join(","),
                fontSize: 40,
                fontWeight: 300,
            },
            h2: {
                fontFamily: ["Dancing Script", "Poppins", "sans-serif"].join(","),
                fontSize: 32,
                fontWeight: 200,
            },
            h3: {
                fontFamily: ["Dancing Script", "Poppins", "sans-serif"].join(","),
                fontSize: 24,
                fontWeight: 100,
            },
            h4: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 20,
                fontWeight: 500,
            },
            h5: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 16,
                fontWeight: 400,
            },
            h6: {
                fontFamily: ["Poppins", "sans-serif"].join(","),
                fontSize: 14,
                fontWeight: 400,
            },
        },
    };
};
