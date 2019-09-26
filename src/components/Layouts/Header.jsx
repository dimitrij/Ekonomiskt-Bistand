import React from 'react';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
const AppHeader = ({ appLanguageData: { title } }) => {
  return (
    <Box fontWeight="fontWeightBold" m={1} fontSize="h6.fontSize" textAlign="center">
      {title}
    </Box>
  )
}

const mapStateToProps = ({ appLanguageData }) => ({ appLanguageData })
export default connect(mapStateToProps)(AppHeader);


