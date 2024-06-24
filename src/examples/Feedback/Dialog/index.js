import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import EditCard from "layouts/travel/EditCard";

export default function FormDialog({
  title,
  description,
  textlabel,
  open,
  handleClose,
  component,
  showTextField,
  onEnter,
  ExitButton,
  SaveButton,
  isFormValid,
  onInput,
  inputValue,
}) {
  const [values, setValues] = React.useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    const logEntry = { event: newValue };
    console.log(JSON.stringify(logEntry));
    setValues({
      ...values,
      [event.target.name]: newValue,
    });
    onInput(newValue);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
          {showTextField && (
            <TextField
              autoFocus
              margin="dense"
              label={textlabel}
              defaultValue={inputValue}
              fullWidth
              variant="standard"
              name="entry"
              type="entry"
              noValidate
              autoComplete="off"
              onChange={handleChange}
            />
          )}
          {component}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{ExitButton}</Button>
          <Button type="submit" onClick={onEnter} disabled={!isFormValid}>
            {SaveButton}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

FormDialog.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  textlabel: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  component: PropTypes.element.isRequired,
  showTextField: PropTypes.bool.isRequired,
  onEnter: PropTypes.func.isRequired,
  ExitButton: PropTypes.string.isRequired,
  SaveButton: PropTypes.string.isRequired,
  isFormValid: PropTypes.bool.isRequired,
  onInput: PropTypes.func.isRequired,
  inputValue: PropTypes.string,
};

FormDialog.defaultProps = {
  title: "Default Title",
  description: "Default Description",
  textlabel: "Default Label",
  open: false,
  showTextField: true,
  ExitButton: "Cancel",
  SaveButton: "Save",
};
