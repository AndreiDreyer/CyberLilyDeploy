import React, { useState } from "react";

import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

import { useFormik } from "formik";
import * as Yup from "yup";

import Link from "next/link";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";

import useMediaQuery from "@material-ui/core/useMediaQuery";

import clsx from "clsx";

import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: "33.38rem",
    maxHeight: "49rem",
    background: "#FFFFFF",
    boxShadow: "0px 8px 24px rgba(77, 77, 77, 0.2)",
    borderRadius: "12px",
    textAlign: "left",
    alignItems: "center",
    paddingLeft: "3rem",
    paddingRight: "3rem",
    [theme.breakpoints.down(420)]: {
      height: "43rem",
      width: "95%",
      paddingLeft: "1rem",
      paddingRight: "1rem",
    },
  },
  innerCard: {
    display: "flex",
    paddingTop: "2.5rem",
    transformStyle: "preserve-3d",
    transition: "0.8s transform",
    [theme.breakpoints.down(415)]: {
      display: "block",
      height: "375px",
    },
  },
  front: {
    minWidth: "100%",
    backfaceVisibility: "hidden",
  },
  textField: {
    width: "100%",
    borderRadius: "0.5rem",
    marginBottom: "1.25rem",
  },
  formFieldLabel: {
    margin: 0,
    paddingBottom: "0.25rem",
  },
  selector: {
    marginTop: "0.25rem",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1.25rem",
    padding: 0,
  },
  radioBorder1: {
    border: "1px solid #141433",
    borderRadius: "0.5rem",
    marginLeft: "0.1rem",
    marginRight: "2rem",
    width: "12.59rem",
    [theme.breakpoints.down(420)]: {
      width: "9.5rem",
      marginRight: "1rem",
    },
  },
  radioBorder2: {
    border: "1px solid #141433",
    borderRadius: "0.5rem",
    marginLeft: "0.1rem",
    marginRight: "0rem !important",
    paddingRight: "0rem !important",
    width: "12.59rem",
    [theme.breakpoints.down(420)]: {
      width: "9.5rem",
    },
  },
  sendButton: {
    color: "#FFFFFF !important",
    backgroundColor: "#EF530B !important",
    marginLeft: "auto",
    marginRight: "auto",
    textTransform: "capitalize !important",
    width: "5.313rem",
    fontWeight: "500",
    lineHeight: "1.25rem",
    height: "2.75rem",
  },
  checkbox: {
    marginTop: -15,
    minWidth: "100%",
    marginBottom: "1.5rem",
  },
  buttonDiv: {
    textAlign: "center",
  },
  bottomText1: {
    marginTop: "1.75rem",
    fontWeight: "400",
    fontSize: "0.75rem",
    lineHeight: "1.75rem",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  bottomText2: {
    fontWeight: "400",
    marginTop: "-1.5rem",
    fontSize: "0.75rem",
    lineHeight: "1.75rem",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
  },
  selectorDiv: {
    display: "none",
    marginBottom: "1.25rem",
  },
  formControl: {
    width: "100%",
  },
  select: {
    width: "100%",
    borderRadius: "0.5rem",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {},
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black !important",
    },
  },
  icon: {
    fill: "#EF530B",
  },
}));

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

const CssSelect = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "#EF530B",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#EF530B",
      },
    },
  },
})(Select);

const OrangeRadio = withStyles({
  root: {
    color: "#EF530B",
    "&$checked": {
      color: "#EF530B",
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const OrangeCheckbox = withStyles({
  root: {
    color: "#EF530B",
    "&$checked": {
      color: "#EF530B",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

export default function ContactForm() {
  const classes = useStyles();
  const theme = useTheme();

  const [state, setState] = useState(0);
  const [value, setValue] = React.useState("query");
  const [budgetChoice, setBudgetChoice] = React.useState("");

  init(EMAILJS_USER_ID);

  const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit, handleReset, isValid, dirty } = useFormik({
    initialValues: {
      name: "",
      email: "",
      budget: 0,
      nda: false,
      feedback: "",
    },

    validationSchema: Yup.object().shape({
      name: Yup.string().required("Please enter a name"),
      email: Yup.string().email("Please enter a valid email").required("Please enter your email"),
      budget: Yup.number(),
      feedback: Yup.string().required("Please enter a message"),
    }),

    onSubmit: (values, { setSubmitting }) => {
      const templateId = CONTACT_TEMPLATE_ID;
      //This is a custom method from EmailJS that takes the information
      //from the form and sends the email with the information gathered
      //and formats the email based on the templateID provided.

      console.log(values);
      console.log("firing");

      sendFeedback(templateId, {
        message: values.feedback,
        from_name: values.name,
        budget: values.budget,
        reply_to: values.email,
        nda: values.nda,
      });
    },
  });

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.state,
  //   });
  // };

  const handleGroupChange = (event) => {
    setValue(event.target.value);
  };

  // const handleBudgetChange = (event) => {
  //   setBudgetChoice(event.target.value);
  // };

  //Custom EmailJS method
  const sendFeedback = (templateId, variables) => {
    emailjs
      .send(EMAILJS_SERVICE_ID, templateId, variables, EMAILJS_USER_ID)
      .then((res) => {
        // Email successfully sent alert
        Swal.fire({
          title: "Email Successfully Sent",
          icon: "success",
        });
      })
      // Email Failed to send Error alert
      .catch((err) => {
        Swal.fire({
          title: "Email Failed to Send",
          icon: "error",
        });
        console.error("Email Error:", err);
      });
  };

  const mobileBreakpoint = useMediaQuery(theme.breakpoints.down(4000));
  return (
    <form id="root" className={classes.root} onSubmit={handleSubmit}>
      <div className={classes.innerCard}>
        <div className={classes.front}>
          <p className={classes.formFieldLabel}>Full Name</p>
          <CssTextField
            id="name"
            name="name"
            border="1px solid #141433"
            placeholder="e.g. John Doe"
            variant="outlined"
            className={classes.textField}
            aria-describedby="outlined-weight-helper-text"
            required={true}
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.name ? errors.name : ""}
            error={touched.name && !!errors.name}
          />
          <p className={classes.formFieldLabel}>Email address</p>
          <CssTextField
            type="email"
            name="email"
            id="email"
            placeholder="e.g. johndoe@gmail.com"
            variant="outlined"
            className={classes.textField}
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            helperText={touched.email ? errors.email : ""}
            error={touched.email && !!errors.email}
          />
          <p className={classes.formFieldLabel}>How can we help you?</p>
          <div className={classes.selector}>
            <FormControl component="fieldset">
              <RadioGroup row aria-label="choice" name="gender1" value={value} onChange={handleGroupChange}>
                <FormControlLabel
                  className={classes.radioBorder1}
                  id="query"
                  value="query"
                  control={<OrangeRadio inputProps={{ "aria-label": "query" }} />}
                  label="I have a query"
                  onChange={(event) => {
                    document.getElementById("selectorDiv").style.display = "none";
                    document.getElementById("root").style.height = "43rem";
                  }}
                />
                <FormControlLabel
                  className={classes.radioBorder2}
                  id="quote"
                  value="quote"
                  control={<OrangeRadio inputProps={{ "aria-label": "quote" }} />}
                  label="I want a quote"
                  onChange={(event) => {
                    document.getElementById("selectorDiv").style.display = "block";
                    document.getElementById("root").style.height = "55rem";
                  }}
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div id={"selectorDiv"} className={classes.selectorDiv}>
            <p className={classes.formFieldLabel}>What is your estimated budget?</p>
            <FormControl variant="outlined" className={classes.formControl}>
              <CssSelect
                native={true}
                value={values.budget}
                onChange={handleChange}
                id="budget"
                name="budget"
                className={classes.select}
                inputProps={{
                  classes: {
                    icon: classes.icon,
                  },
                }}
                MenuProps={{}}
              >
                <option aria-label="Select budget range USD" value="none">
                  Select budget range USD
                </option>
                <option value={500}>$500-$1000</option>
                <option value={1000}>$1000-$1500</option>
                <option value={1500}>$1500-$3000</option>
                <option value={3000}>$3000-$4000</option>
                <option value={1500}>$4000-$5000</option>
                <option value={1500}>$5000-$6000</option>
                <option value={1500}>$6000-$7000</option>
                <option value={1500}>$7000-$8000</option>
                <option value={1500}>$8000-$9000</option>
                <option value={1500}>$9000-$10 000</option>
                <option value={1500}>$10 000-$10 000+</option>
              </CssSelect>
            </FormControl>
          </div>
          <p className={classes.formFieldLabel}>Tell us more</p>
          <CssTextField
            id="feedback"
            name="feedback"
            className={classes.textField}
            multiline
            rows={4}
            placeholder="Message"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.feedback ? errors.feedback : ""}
            error={touched.feedback && !!errors.feedback}
          />
          <FormControlLabel
            value="end"
            control={
              <OrangeCheckbox
                name="nda"
                id="nda"
                value={values.nda}
                onChange={handleChange}
                onBlur={handleBlur}
                inputProps={{ "aria-label": "query" }}
              />
            }
            label="Send me a non-disclosure agreement."
            labelPlacement="end"
            className={classes.checkbox}
          />
          <div className={classes.buttonDiv}>
            <Button className={classes.sendButton} type="submit" variant="contained" disableElevation>
              Send
            </Button>
          </div>
          <div>
            <p className={classes.bottomText1}>Rest assured, we'll never share sensible information provided to </p>
            <p className={classes.bottomText2}> us about your project publicly.</p>
          </div>
        </div>
      </div>
    </form>
  );
}
