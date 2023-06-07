import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Button } from "@mui/material";

const GET_QUERY = gql`
  {
    usalesConvComments(convId: 15057621) {
      comment
    }
  }
`;

function App() {
  const [dataset, setDataset] = useState([]);
  const { loading, error, data } = useQuery(GET_QUERY);

  useEffect(() => {
    console.log("DATA ****", data?.usalesConvComments);
    setDataset(data?.usalesConvComments);
  }, [data]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        height: "100vh",
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {dataset?.map((item) => {
        return <div>{item.comment}</div>;
      })}
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <Button variant="contained">GraphQL</Button>
        <Button variant="contained">Rest API</Button>
      </div>
    </div>
  );
}

export default App;
