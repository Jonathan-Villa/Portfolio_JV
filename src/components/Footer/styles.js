import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export const useStyles = makeStyles((theme) => ({
    contactContainer: {
      backgroundColor:' #1b262c',
      height: "50vh",
      position:"static",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
      
    },
    heading: {
      color: "black",
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: "1rem",
    },
    paper:{
 
    }, 
    form: {
      margin:"20px",
      position:"static",
      height:"300px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      width:"450px",
      borderRadius:"20px"
    },
    input: {
      color: "black",
    },
    button: {
      marginTop: "1rem",
      color: "black",
      borderColor: "black",
    },
    field: {
      margin: "1rem 0rem",
    },
  }));
  
  export const InputField = withStyles({
    root: {
      "& label.Mui-focused": {
        color: "black",
      },
      "& label": {
        color: "black",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "black",
        },
        "&:hover fieldset": {
          borderColor: "#adb5bd",
        },
        "&.Mui-focused fieldset": {
          color: "#fff",
  
        },
      },
    },
  })(TextField);