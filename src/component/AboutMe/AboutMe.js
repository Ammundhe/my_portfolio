
import { Typography, Box, CssBaseline } from "@material-ui/core";
import { Stack } from "@mui/material";
import useStyle from "./style";
import fullStackDeveloper from "../../Asset/full-stack-developer.png"

const AboutMe=()=>{
    const classes=useStyle()
    return(
        <div style={{backgroundColor:"#404040"}}>
            <CssBaseline/>
            <div className={classes.toolbar}/>
            <Typography variant="h2" align="center" style={{color:"white", fontWeight:"bold"}}>About Me</Typography>
            <Box className={classes.AboutMe}>
                <Stack spacing={2} sx={{border:1, margin:"10px", backgroundColor:"#8899A6", borderRadius:"20px"}}>
                    <Typography variant="h4">Personal Information</Typography>
                    <hr/>
                    <Stack direction={{ xs: 'column', sm: 'row'}}spacing={2} className={classes.personalIntro}>
                        <Typography variant="h6"><b>Name:</b>Amol Mundhe</Typography>
                        <Typography variant="h6"><b>Address:</b>Nanded, Maharastra, India</Typography>  
                    </Stack>
                    <Typography variant="h4">Professional Skills</Typography>
                    <hr />
                    <Stack direction={{ xs: 'column', sm: 'row'}} spacing={2} className={classes.personalIntro} sx={{flexShrink:"shrink", padding:"10px"}}>
                        <Typography variant="h6" >React.js</Typography>
                        <Typography variant="h6" >Django</Typography>
                        <Typography variant="h6" >JavaScript</Typography>
                        <Typography variant="h6" >Python</Typography>
                        <Typography variant="h6" >HTML</Typography>
                        <Typography variant="h6" >CSS</Typography>
                        <Typography variant="h6" >Rest Api</Typography>
                        <Typography variant="h6" >Json</Typography>
                        <Typography variant="h6" >Github</Typography>
                    </Stack>
                    <Typography variant="h4">Educations</Typography>
                    <hr />
                    <Stack direction={{ xs: 'column', sm: 'row'}} spacing={2} className={classes.personalIntro}>
                        <Typography variant="h6">Bachelor of Engineering</Typography>
                        <Typography variant="h6">MGM's Colloge Of Engineering Nanded</Typography>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row'}} spacing={2} className={classes.personalIntro}>
                        <Typography variant="h6">Secondary School Certificate</Typography>
                        <Typography variant="h6">Maharashtra State Board</Typography>
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row'}} spacing={2} className={classes.personalIntro}>
                        <Typography variant="h6">Secondary School Certificate</Typography>
                        <Typography variant="h6">Maharashtra State Board</Typography>
                    </Stack>
                    <Typography variant="h4">Languages</Typography>
                    <hr />
                    <Stack direction={{ xs: 'column', sm: 'row'}} spacing={2} className={classes.personalIntro}>
                        <Typography variant="h6">English</Typography>
                        <Typography variant="h6">Hindi</Typography>
                        <Typography variant="h6">Marathi</Typography>
                    </Stack>

                </Stack>
            </Box>
        </div>
    )
}
export default AboutMe;