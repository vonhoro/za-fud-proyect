import React from "react";
import { Button } from "@chakra-ui/core";

export const ImageUploader = ({ onChange }) => {
  let upload;
  return (
    <>
      <input
        style={{ display: "none" }}
        ref={(node) => (upload = node)}
        type="file"
        onChange={onChange}
      />
      <Button
        children={"Sube una imagen"}
        variantColor="orange"
        onClick={(e) => upload.click()}
      />
    </>
  );
};
