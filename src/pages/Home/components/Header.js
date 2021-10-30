import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Bell } from 'react-feather';
import { Avatar } from '@material-ui/core';
import authService from '../../../services/authService';

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
  },
  img: {
    maxHeight: 55,
    maxWidth: 90,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    marginRight: 10
  },
  bell: {
    marginRight: 10
  }
});

function Header() {
  const classes = useStyles();
  const user = authService.getUser();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src="/images/void.png" alt="logo" className={classes.img}></img>
        <div className={classes.grow}></div>
        <div className={classes.userSection}>
        <Button color="primary" variant="contained" className={classes.button}>Novo Post</Button>
        <SvgIcon className={classes.bell}>
          <Bell></Bell>
        </SvgIcon>
        <Avatar alt="Remy Sharp" src={user && user.avatar} />
        </div>
        {/* <div>
          <a href='/'>Project Void</a>
        </div>
        <div>
          
          <span>img1</span>
          <span>img2</span>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}

export default Header;