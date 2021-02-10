import React from "react";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import emailjs from "emailjs-com";
import { Context } from "../../store/Store";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

function ContactForm() {
  const classes = useStyles();
  const [userInput, setInput] = React.useState({
    fromName: "",
    fromEmail: "",
    message: "",
  });
  const [state, dispatch] = React.useContext(Context);

  const handleChange = (e) => {
    const value = e.target.value;

    setInput({ ...userInput, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "EMAIL_SENT_LOADING" });
    const email = await emailjs
      .sendForm(
        "service_bi860lr",
        "template_4lojy0r",
        e.target,
        "user_lMSBgygKJRurQnDe6BHl8"
      )
      .catch((err) => dispatch({ type: "EMAIL_SENT_FAILED" }));

    if (email) {
      dispatch({ type: "EMAIL_SENT_SUCCESS" });
      setInput({ fromName: "", fromEmail: "", message: "" });
    }
  };

  return (
    <Grid className={classes.rightFooterWrapper} item xs={12} sm={12} md={8} lg={7}>
      <form
        onChange={handleChange}
        onSubmit={handleSubmit}
        className={classes.formWrapper}
      >
        <div className={classes.txtFieldWrapper}>
          <ThemeProvider theme={theme}>
            <TextField
              className={classes.txtField}
              type="text"
              required
              label="Name"
              size="small"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              name="fromName"
              value={userInput.fromName}
            />
            <TextField
              className={classes.txtField}
              type="text"
              required
              onmOUSE
              label="Email"
              size="small"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              name="fromEmail"
              value={userInput.fromEmail}
            />
            <TextField
              className={classes.txtField}
              type="text"
              required
              multiline
              rows={5}
              label="Message"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
              name="message"
              value={userInput.message}
            />
            <Button
              className={classes.btnSubmit}
              fullWidth={false}
              type="POST"
              variant="outlined"
              color="primary"
            >
              Send
            </Button>
          </ThemeProvider>
        </div>
      </form>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  rightFooterWrapper: {
    
    marginRight: "30px",
    fontSize: "1.0em",
  

    [theme.breakpoints.down("sm")]: {
      marginRight: "0px",
    },
  },
  formWrapper: {
    transition: ".7s",
    boxSizing: "border-box",
    justifyContent: "space-between",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "18em",
    padding: "15px 0px",
  },
  txtFieldWrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
  },
  txtField: {},
  btnSubmit: {
    width: "30%",
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2176ff",
    },
    secondary: {
      main: "#f79824",
    },
  },
});

export default ContactForm;
