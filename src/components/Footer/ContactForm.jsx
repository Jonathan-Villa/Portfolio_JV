import React from "react";
import TextField from "@material-ui/core/TextField";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
function ContactForm() {
  const classes = useStyles();
  const [userInput, setInput] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setInput({ ...userInput, [e.target.name]: value });
  };

  return (
    <Grid className={classes.gridFooterFormWrapper} item xs={12} lg={6}>
      <form onChange={handleChange} className={classes.formWrapper}>
        <h2>Contact Me</h2>
        <TextField
          className={classes.txtField}
          type="text"
          required
          label="Name"
          size="small"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          name="name"
          value={userInput.name}
        />
        <TextField
          className={classes.txtField}
          type="text"
          required
          label="Email"
          size="small"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          name="email"
          value={userInput.email}
        />
        <TextField
          className={classes.txtField}
          type="text"
          required
          multiline
          rows={7}
          label="Message"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          name="message"
          value={userInput.message}
        />
        <Button type="POST" variant="outlined" color="default">
          Send
        </Button>
      </form>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  gridFooterFormWrapper: {
    boxSizing: "border-box",
    padding: "25px 20px",
    fontSize: "1.0em",
    backgroundColor: "#ffffff",
    borderRadius: "2%",
  },
  formWrapper: {
    boxSizing: "border-box",
    justifyContent: "space-evenly",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "30em",
    position: "relative",
  },
  txtField: {},
}));

export default ContactForm;
