import { makeStyles } from "@material-ui/core";

const drawerWidth=0
export default makeStyles((theme)=>({
    toolbar:theme.mixins.toolbar,
    Intro:{
        display:"flex",
        margin:"0%",
        padding:"0%",
        width:"100%",
        height:"100vh",
        backgroundColor:"#444444",
    },
    title:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"25px",
        color:"whitesmoke"
    },
    profile:{
        marginLeft:"60px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
   
}))