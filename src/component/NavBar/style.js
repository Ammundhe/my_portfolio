import { makeStyles } from "@material-ui/core";

const drawerWidth=0

export default makeStyles((theme)=>({
    appBar:{
        boxShadow: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
    },
    toolBar:{
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },
    iconButton:{
        width:"60%",
        display:"flex",
        justifyContent:"space-evenly",
    },
   

}))