import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    menuList: {
        width: "240px",
        background: "#333333",
        color: "#f2f2f2",
    },
});
// ListItemIcon --> agregar íconos
const MenuList = ({ handleLogout }) => {
    const classes = useStyle();

    return (
        <List component="nav" className={classes.menuList}>
            <ListItem button component="a" href="/profile">
                <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button component="a" href="/favorites">
                <ListItemText primary="Favs" />
            </ListItem>
            <Divider />
            <ListItem button onClick={handleLogout}>
                <ListItemText primary="Logout" />
            </ListItem>
        </List>
    );
};

export default MenuList;
