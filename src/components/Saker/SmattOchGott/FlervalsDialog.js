import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox, FormControlLabel } from "@mui/material";

function FlervalsDialog({
  setOpen,
  open,
  arr,
  title,
  responseArr,
  setResponseArr,
}) {
  const handelAdd = () => {
    console.log("lägger till");

    let anvandarVal = [...responseArr];

    // setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    console.log(arr);
  };
  const [isChecked, setIsChecked] = useState(() => arr?.map((i) => false));

  const isCheckboxChecked = (index, checked) => {
    setIsChecked((isChecked) => {
      return isChecked.map((c, i) => {
        if (i === index) return checked;
        return c;
      });
    });
  };

  console.log(isChecked);

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle> {title} </DialogTitle>
        <DialogContent>
          {arr?.map((item, index) => {
            return (
              <FormControlLabel
                sx={{
                  "& .MuiFormControlLabel-label": {
                    textAlign: "left",
                    width: "100%",
                    minWidth: "25vw",
                  },
                  pt: 1,
                  pb: 1,
                }}
                key={index + item}
                className="twocolelement"
                control={
                  <Checkbox
                    name={item}
                    value={item}
                    id={index}
                    checked={isChecked[index]}
                    color="primary"
                    onChange={(e) => isCheckboxChecked(index, e.target.checked)}
                  />
                }
                label={item}
              />
            );
          })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Avbryt</Button>
          <Button onClick={handelAdd}>Spara</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default FlervalsDialog;
