import React from 'react';
import { Link, useHistory } from "react-router-dom";
import '../Styles/Navigation.css'
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/system';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/base/Tabs';
import TabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import Tab, { tabClasses } from '@mui/base/Tab';
import Mamatha from '../Images/Mamatha.jpg'





const indianRed = {
  50: '#d26c6c',
  100: '#d77c7c',
  200: '#a44949',
  300: '#b85252',
  400: '#d35b2f',
  500: '#d32f2f',
  600: '#cd655c',
  700: '#dc8c8c',
  800: '#e6adad',
  900: '#ebbdbd',
};

const grey = {
  50: '#f6f8fa',
  100: '#eaeef2',
  200: '#d0d7de',
  300: '#afb8c1',
  400: '#8c959f',
  500: '#6e7781',
  600: '#57606a',
  700: '#424a53',
  800: '#32383f',
  900: '#24292f',
};

const StyledTab = styled(Tab)`
    font-family: 'IBM Plex Sans', sans-serif;
    color: #fff;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: 600;
    background-color: transparent;
    width: 100%;
    padding: 10px 12px;
    margin: 6px;
    border: none;
    border-radius: 7px;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: ${indianRed[400]};
    }
  
    &:focus {
      color: #fff;
      outline: 3px solid ${indianRed[200]};
    }
  
    &.${tabClasses.selected} {
      background-color: #fff;
      color: ${indianRed[600]};
    }
  
    &.${buttonClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `;

const StyledTabPanel = styled(TabPanel)(
  ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    padding: 20px 12px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    border-radius: 12px;
    opacity: 0.6;
    `,
);

const StyledTabsList = styled(TabsList)(
  ({ theme }) => `
    min-width: 400px;
    background-color: ${indianRed[500]};
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 30px ${theme.palette.mode === 'dark' ? grey[900] : grey[200]};
    `,
);


function Navigation() {
  // const history = useHistory();
  // const onHomeClick = () => {
  //   history.push("/");
  // };
  // const onResumeClick = () => {
  //   history.push("/resume");
  // };
  // const onContactClick = () => {
  //   history.push("/contact");
  // };
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false"  sx={{ bgcolor: '#161515' }}>
          <Grid container>
            <Grid item xs={4}>
              <div className="name-profile">
                <div className="avatar">
                  <img src={Mamatha} />
                </div>
                <div className="name">Mamatha Gundapaneni</div>
              </div>
            </Grid>

            <Grid item xs={8}>
                <div className='navigation'>
                <Link to="/" className='navigation-item'>Home</Link>
                <Link to="/resume" className='navigation-item'>Resume</Link>
                <Link to="/contact" className='navigation-item'>Contact</Link>
                  {/* <StyledTab value="blog">Blog</StyledTab>
                  <StyledTab value="posts">Posts</StyledTab> */}
                 
                </div>
                {/* <StyledTabPanel value={0}>My account page</StyledTabPanel>
      <StyledTabPanel value={1}>Profile page</StyledTabPanel>
      <StyledTabPanel value={2}>Language page</StyledTabPanel> */}
              
                 
                  

            </Grid>
          </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Navigation;
