import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';







function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}



function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginTop: 50,
    '& .MuiTab-root': {
      flex: 1,
      maxWidth: 'unset',
      minWidth: 'unset'
    }
  },
  indicator: {

  }
}));

const GuideTabs = ({ Guide: { sections } }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h2>Försök titta på dessa andra möjligheter</h2>
      <AppBar position="static">
        <Tabs TabIndicatorProps={{
          style: {
            backgroundColor: "white"
          }
        }} className={classes.indicator} value={value} onChange={handleChange} aria-label="simple tabs example">
          {sections.map(({ title }, index) => <Tab key={index} label={index + 1}{...a11yProps(index)} />)}
        </Tabs>
      </AppBar>
      {sections.map(({ subtitle, title, links }, index) => <TabPanel key={index} value={value} index={index}>
        <h3>{title}</h3>
        {subtitle}
        {links.map(({ title, link }, index) => <h5 key={index}><a rel="noopener noreferrer" href={link} target='_blank'>{title}</a></h5>)}
      </TabPanel>)}

    </div>
  );
}
export default GuideTabs;