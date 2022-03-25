import { makeStyles } from "@material-ui/core";

const drawerWidth=0
export default makeStyles((theme)=>({
    toolbar:theme.mixins.toolbar,
    Intro:{
        display:"flex",
        width:"100%",
        margin:"0%",
        height:"100vh",
    },
    title:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"25px"
    },
    profile:{
        marginLeft:"60px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
}))