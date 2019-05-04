import React from "react";

const styles = {
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  margin: "10px 40px 40px 40px",
  width: "200px"
};

let Campaign = ({ campaign }) => (
  <div className="card m-10" style={styles}>
    {" "}
    {campaign}{" "}
  </div>
);

export default Campaign;
