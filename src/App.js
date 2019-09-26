import React from 'react';
import AppHeader from './components/Layouts/Header';
import StatusBar from './components/Layouts/StepperBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';

const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#D34F98',
      second: '#712082'
    },
  },
});
function App() {
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