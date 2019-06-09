import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import BookIcon from '@material-ui/icons/Book';
import ListIcon from '@material-ui/icons/List';
import AccountIcon from '@material-ui/icons/AccountBox';

import firebase from '../firebase/firebase';
import UserScreen from './userappearance/userscreen';

const styles = {
    stickToBottom: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
    },
};

function HomeBottomNavigation() {
    const [value, setValue] = React.useState(0);
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        style={styles.stickToBottom}
      >
        <BottomNavigationAction label="ホーム" icon={<BookIcon />} />
        <BottomNavigationAction label="一覧" icon={<ListIcon />} />
        <BottomNavigationAction label="アカウント" icon={<AccountIcon />} />
      </BottomNavigation>
    );
  }

export default class HomeScreen extends React.Component {
    useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
    }));

    logout() {
        firebase.auth().signOut();
    }


    render() {
        return (
            <div className={this.useStyles.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        ホーム
                    </Typography>
                    <Button color="inherit" onClick={this.logout}>LogOut</Button>
                </Toolbar>
            </AppBar>
            <UserScreen/>
            <HomeBottomNavigation />
            </div>
        );
    }
  }