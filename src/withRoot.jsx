import React from 'react';
import { MuiThemeProvider, createMuiTheme }
    from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';


const theme = createMuiTheme({
    palette: {
        primary: {
            light: purple[300],
            main: purple[500],
            dark: purple[700],
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
    },
});

function withRoot(Wrapped) {
    return (props) =>
        (
            <MuiThemeProvider theme={theme}>
                <Wrapped {...props} />
            </MuiThemeProvider>
        );



}

export default withRoot;