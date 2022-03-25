import React from "react";
import { AppBar,Toolbar, Typography, IconButton, Badge } from "@material-ui/core";
import { Home, ContactPage, GitHub } from "@mui/icons-material";
import { Link } from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import useStyle from "./style";

const NavBar=()=>{
    const classes=useStyle()
    return(
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar className={classes.toolBar}>
                <Typography variant="h6" color="primary">My Portfolio</Typography>
                <div className={classes.iconButton}>
                    <IconButton component={Link} to="/" color="primary">
                        <Badge>
                            <Home/>
                        </Badge>
                    </IconButton>
                    <IconButton component={Link} to="/contact-page" color="primary">
                        <Badge>
                                <ContactPage/>
                        </Badge>
                    </IconButton >
                    <IconButton component={Link} to="/about-me" color="primary" >
                        <Badge>
                                <InfoIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton component={Link} to="/project-details" color="primary">
                        <Badge>
                                <WorkIcon/>
                        </Badge>
                    </IconButton>
                    <IconButton color="primary">
                        <Badge>
                                <a href="https://github.com/Ammundhe"><GitHub/></a>
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar;