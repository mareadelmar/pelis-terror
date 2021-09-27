import { List, ListItem, ListItemText, Divider, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const useStyle = makeStyles({
    menuList: {
        width: "240px",
        background: "#333333",
        color: "#f2f2f2",
        marginTop: "16px"
    },
    icons: {
        color: "#f2f2f2"
    },
    menuFooter: {
        color: "#f2f2f2",
        display: "flex",
        alignItems: "end",
        height: "96%"
    },
    logoutBtn: {
        textAlign: "center",
        outline: "1px solid white",
    padding: "8px"
    }
});
// ListItemIcon --> agregar íconos
const MenuList = ({ handleLogout }) => {
    const classes = useStyle();

    return (
        <>
        <List component="nav" className={classes.menuList}>
            <ListItem button component="a" href="/profile">
                <ListItemIcon className={classes.icons}>
                    <PersonOutlineIcon />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button component="a" href="/favorites">
                <ListItemIcon className={classes.icons}>
                    <FavoriteBorderRoundedIcon />
                </ListItemIcon>
                <ListItemText primary="Favs" />
            </ListItem>
            <ListItem button component="a" href="/watchlist">
                <ListItemIcon className={classes.icons}>
                    <BookmarkBorderIcon />
                </ListItemIcon>
                <ListItemText primary="Watchlist" />
            </ListItem>
        </List>
        <List component="nav" className={classes.menuFooter}>
            <Divider />
            <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" className={classes.logoutBtn}/>
            </ListItem>
        </List>
        </>
    );
};

export default MenuList;
