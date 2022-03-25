import { Typography, IconButton, Badge } from "@material-ui/core";
import { Email, LinkedIn } from "@mui/icons-material";
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import useStyle from "./style";

const ContactUs=()=>{
    const classes=useStyle()
    return(
        <>
            <div className={classes.toolBar}/>
                <Typography variant="h2" align="center">Contact Me</Typography>
                <Typography variant="subtitle1" align="center">Get in touch with me </Typography>
            <div  className={classes.Iconbutton}>
                <div className={classes.Iconitem}>
                    <IconButton>
                        <Badge>
                            <Email style={{width:"60px", height:"60px"}}/>
                        </Badge>
                    </IconButton>
                    <Typography variant="h6">Email</Typography>
                    <Typography variant="h6">amolmundhe544@gmail.com</Typography>
                </div>
                <div className={classes.Iconitem}>
                    <IconButton>
                        <Badge>
                            <MobileScreenShareIcon style={{width:"60px", height:"60px"}}/>
                        </Badge>
                    </IconButton>
                    <Typography variant="h6">Mobile Number</Typography>
                    <Typography variant="h6">9527760226</Typography>
                </div>
                <div className={classes.Iconitem}>
                    <IconButton>
                        <Badge>
                            <LinkedIn style={{width:"60px", height:"60px"}}/>
                        </Badge>
                    </IconButton>
                    <Typography variant="h6">LinkDin User Name</Typography>
                    <Typography variant="h6">Am_mundhe</Typography>
                </div>
            </div>
        </>
    )
}
export default ContactUs;