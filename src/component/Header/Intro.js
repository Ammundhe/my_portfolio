
import { Typography } from "@material-ui/core";
import useStyle from "./style"
import AmolMundhe from "../../Asset/AmolMundhe.jpg"

const Intro=()=>{
    const classes=useStyle()
    return(
        <>
            <div className={classes.toolbar}/>
            <div className={classes.Intro}>
                <div className={classes.title}>
                    <Typography variant="h2" gutterBottom color="inherit" >Hi! I'm Amol Mundhe</Typography>
                    <Typography variant="h2" gutterBottom>I'm Full Stack Developer</Typography>
                    <Typography variant="subtitle1" gutterBottom color="inherit">BE Graduate, Ability to work with React, Django, Python, JavaScript, Html, CSS, Json, Github, Rest Api.Can work well under pressure and make the best of any situation. Passionate individaul with problem solving skill and communication skills.</Typography>
                </div>
                <img src={AmolMundhe} alt="Amol Mundhe" style={{borderRadius:"50%"}}/>
        
            </div>
        </>
    )
}
export default Intro;