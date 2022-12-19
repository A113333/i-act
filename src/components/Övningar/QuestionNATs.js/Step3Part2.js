import React from "react";
import TextFieldWithAdd from "../../inputs/TextFieldWithAdd";

function Step4Part2({ setFormData, setIsDone, formData }) {
  return (
    <>
      <TextFieldWithAdd
        inputName={"bevisMotTanke"}
        setFormData={setFormData}
        setIsDone={setIsDone}
        formData={formData}
        questionText={"Vilka argument talar emot din tanke?"}
        label={"motbevis"}
      />
    </>
  );
}

export default Step4Part2;
