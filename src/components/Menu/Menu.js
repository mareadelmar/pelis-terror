import React, { useState } from "react";
import useUserData from "../../hooks/useUserData";
import { Button, makeStyles } from "@material-ui/core";
import { Hidden, Drawer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import MenuList from "./MenuList";

/*
Menu --> icono hamburguecita

REFERENCIAS de hidden: como una mediaquery
- breackpoint (igual a bootstrap): xs, sm, md, lg, xl
- < o > : down o up
por ejemplo:
xsDown --> para xs o menores
mdUp --> para md o mayores


======

<Hidden smDown>
    Al menú se accede por botón con nombre del usuarix y es un dropdown. Si la pantalla es sm o menor (smDown), se esconde.
</Hidden>

<Hidden mdUp>
    el menú va a tener ícono de hamburguesita y va a ser un drawer (cajón). Si la pantalla es md o mayor (mdUp), se esconde.  
</Hidden>


*/

const useStyles = makeStyles({
    btnCustom: {
        margin: "0.5em 0",
    },
});

const Menu = () => {
    const [showDrawer, setShowDrawer] = useState(false);
    const { logOut, userData } = useUserData();
    const classes = useStyles();
    const mailName = userData
        ? userData.email.substring(0, userData.email.lastIndexOf("@"))
        : "anónima";

    const handleDrawer = () => {
        setShowDrawer(!showDrawer);
    };

    return (
        <div>
            <Hidden smDown>
                <Button
                    className={classes.btnCustom}
                    onClick={handleDrawer}
                    color="primary"
                    variant="outlined"
                >
                    {mailName}
                </Button>
            </Hidden>

            <Hidden mdUp>
                <IconButton aria-label="menu" onClick={handleDrawer}>
                    <MenuIcon color="primary" />
                </IconButton>
            </Hidden>

            <Drawer
                variant="temporary"
                open={showDrawer}
                onClose={handleDrawer}
                anchor="right"
            >
                <MenuList handleLogout={logOut} />
            </Drawer>
        </div>
    );
};

export default Menu;
