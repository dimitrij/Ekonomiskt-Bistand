import React from 'react';
import AppHeader from './components/Layouts/Header';
import StatusBar from './components/Layouts/StepperBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import queryString from 'query-string'
const parsed = queryString.parse(window.location.search);
const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: parsed.main || '#D34F98',
      mainLight: parsed.mainLight || '#fbf8f8',
      second: parsed.second || '#712082'
    },
  },
});
console.log(parsed);

function App(props) {
  console.log(window.location.search)
  return (
    <ThemeProvider theme={outerTheme}>
      <Container fixed style={{ minHeight: '100vh', display: 'flex', alignItems: 'stretch', flexDirection: 'column' }}>
        <Typography component="div" color="primary">
          <AppHeader />
        </Typography>
        <StatusBar />
      </Container>
    </ThemeProvider>
  );
}
const mapStateToProps = ({ infoSection }) => ({ infoSection })
export default connect(mapStateToProps)(App);


//ThemeProvider
//Typography