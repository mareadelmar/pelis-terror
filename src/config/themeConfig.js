import { createTheme } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";

// pink[800]
const theme = createTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorRight: {
                background: "#333333",
            },
        },
    },
    palette: {
        primary: {
            main: pink[800],
        },
    },
});

export default theme;
