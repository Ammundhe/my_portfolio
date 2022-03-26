import { makeStyles } from "@material-ui/core";
import { textAlign } from "@mui/system";


export default makeStyles((theme)=>({
    toolbar:theme.mixins.toolbar,
    AboutMe:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
    },
    personalIntro:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    skills:{
        width:"100%",
        border:"1px, solid, black"
    },
    education:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
    },
    languages:{
        display:"flex",
        justifyContent:"space-around",
        listStyle:"none"
    },
    edu:{
        display:"flex",
        justifyContent:"space-around"
    }

}))