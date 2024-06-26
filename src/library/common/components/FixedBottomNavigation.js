/* eslint-disable no-unused-vars */
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { dashboardMainRoutes } from '../../../main/router/routes/dashboardMainRoutes';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import pdfFile from '../../../resources/data/curriculum/cv.pdf';
import { handleDescargarCV } from '../utils/functionUtils';
import { personalInfo } from '../../../resources/data/personalInfo';

// eslint-disable-next-line react/prop-types
export default function FixedBottomNavigation({ children }) {
  const [value, setValue] = React.useState(0);
  return (
    <>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'flex-end', backgroundColor: 'background.paper', alignItems: 'center' }}>
          {/* <Typography color={'grey.800'} variant="subtitle2">
            {personalInfo.variable.shortName.toUpperCase()}
          </Typography> */}
          <Button size="small" variant="outlined" endIcon={<DownloadIcon />} onClick={() => handleDescargarCV(pdfFile)}>
            Descargar CV
          </Button>
        </Toolbar>
      </AppBar>
      {children}
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          {dashboardMainRoutes.map((item, i) => (
            <BottomNavigationAction
              key={i}
              label={item.label}
              icon={item.icon}
              component={RouterLink}
              to={item.route}
            />
          ))}
        </BottomNavigation>
      </Paper>
    </>
  );
}
