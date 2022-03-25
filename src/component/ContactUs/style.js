import { makeStyles } from "@material-ui/core";


export default makeStyles((theme)=>({
    toolBar:theme.mixins.toolbar,
    Iconbutton:{
        display:"flex",
        justifyContent:"space-evenly"
    },
    Iconitem:{
        display:"flex",
        flexDirection:"column",
        textAlign:"center",        
    }
}))