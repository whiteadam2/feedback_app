import React from "react";
import { useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

export function StatusBar(props) {
  const { error, isSuccess, isLoading, isError } = useSelector(
    (state) => state.feedback
  );

  return (
    <>
      <ClipLoader color="#000000" loading={isLoading} size={40} />
      {isError && <p style={{ color: "red" }}>{error}</p>}
      {isSuccess && (
        <p style={{ color: "green" }}>Feedback was successfully added!</p>
      )}
    </>
  );
}
