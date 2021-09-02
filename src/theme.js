import { createTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';

export const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[500],
        },
        secondary: {
            main: blueGrey[100],
        },
    },
});