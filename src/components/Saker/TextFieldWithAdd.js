import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

import { Stack } from "@mui/system";
import RemoveIcon from "@mui/icons-material/Delete";

// questionText = den fråga man ska besvar i inputs
// inputName = det värdet i svars objectet som ska sättas
// setFormData set function för state objectet som sparar svar
// fromData svars objectet
//setIs done den funktionen som sätter att övningen är färdig
function TextFieldWithAdd({
  questionText,
  inputName,
  setFormData,
  setIsDone,
  formData,
  label,
}) {
  const [userResponse, setUserResponse] = useState([""]);

  useEffect(() => {
    console.log("userResponse.lenght");
    console.log(userResponse.length);
    if (userResponse[0] !== "") {
      setIsDone(true);
    }
    console.log(formData);
    console.log(userResponse);
  }, [userResponse]);

  const setFunction = (event) => {
    setFormData({
      ...formData,
      troPaTanke: event.target.value,
    });
  };

  let handleChange = (i, e) => {
    let newFormValues = [...userResponse];
    newFormValues[i] = e.target.value;
    setUserResponse(newFormValues);
    setFormData({ ...formData, [e.target.name]: newFormValues });
  };

  let addFormFields = (e) => {
    setUserResponse([...userResponse, ""]);
  };

  let removeFormFields = (i, e) => {
    console.log(i);
    let newFormValues = [...userResponse];
    newFormValues.splice(i, 1);
    setUserResponse(newFormValues);
    setFormData({ ...formData, [inputName]: newFormValues });
  };

  return (
    <>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {questionText}
      </Typography>

      {userResponse.map((element, index) => (
        <div className="form-inline" key={index}>
          <Box sx={{ mb: 2, width: "100%", pl: "25px" }}>
            <TextField
              variant="outlined"
              id="MinaBevis"
              value={element}
              label={
                index >= 2
                  ? `Mitt ${index + 1}:e ${label}`
                  : `Mitt ${index + 1}:a ${label}`
              }
              autoComplete="off"
              name={inputName}
              sx={{
                width: { xs: "80%", sm: "70%" },
              }}
              onChange={(e) => handleChange(index, e)}
            />
            {index ? (
              <IconButton
                onClick={(e) => removeFormFields(index, e)}
                aria-label="delete"
                sx={{ pt: 2 }}
              >
                <RemoveIcon
                  color="primary"
                  sx={{ fontSize: "1.2rem", opacity: "50%" }}
                />
              </IconButton>
            ) : (
              <IconButton
                onClick={console.log("hehe")}
                sx={{ pt: 2 }}
                disabled={true}
              >
                <RemoveIcon
                  color="primary"
                  sx={{ fontSize: "1.2rem", opacity: "0%" }}
                />
              </IconButton>
            )}
          </Box>
        </div>
      ))}

      <Button
        variant="outlined"
        size="small"
        color="primary"
        name={inputName}
        onClick={() => addFormFields()}
        aria-label="add"
      >
        Lägg till
      </Button>
    </>
  );
}

export default TextFieldWithAdd;
