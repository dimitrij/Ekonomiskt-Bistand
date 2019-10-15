import React from 'react';
import AppHeader from './components/Layouts/Header';
import StepperBar from './components/Layouts/StepperBar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { connect } from 'react-redux';
import queryString from 'query-string'
import './App.css'
const parsed = queryString.parse(window.location.search);
const outerTheme = createMuiTheme({
  palette: {
    primary: {
      main: parsed.main || '#CC0150',
      mainLight: parsed.mainLight || '#fbf8f8',
      second: parsed.second || '#AE0A06'
    },
  },
});
function App({ appLanguageData: { leftToRight } }) {
  return (
    <ThemeProvider theme={outerTheme}>
      <Container fixed style={{ minHeight: '100vh', display: 'flex', alignItems: 'stretch', flexDirection: 'column', textAlign: leftToRight ? 'left' : 'right' }}>
        <Typography component="div" color="primary">
          <AppHeader />
        </Typography>
        <StepperBar />
      </Container>
    </ThemeProvider>
  );
}
const mapStateToProps = ({ appLanguageData }) => ({ appLanguageData })
export default connect(mapStateToProps)(App);
