import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Button } from "@mui/material";
import axios from "axios";

const GET_QUERY = gql`
  {
    dealSummaryDetailResponse(
      id: ${process.env.REACT_APP_TEST_ID}
      mode: "weekly"
      tz: "America/Los_Angeles"
    ) {
      contacts {
        id
        role
        name
        conversation {
          data {
            convIds
            conversations
            emailIds
            emails
            endDate
          }
        }
      }
    }
  }
`;

const options = {
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    Accept: "application/json",
    "Access-Control-Allow-Credentials": true,
    Authorization: `Bearer ${process.env.REACT_APP_BEARER}`,
  },
};

function App() {
  const [dataset, setDataset] = useState({});
  const [restData, setRestData] = useState({});
  const [showGraphQL, setShowGraphQL] = useState(true);
  const { loading, error, data } = useQuery(GET_QUERY);

  useEffect(() => {
    console.log("DATA ****", data, error, loading);
    setDataset(data);
  }, [data, error, loading]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}`,
        options
      );
      setRestData(response);
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
        height: "90vh",
        padding: 20,
        alignItems: "center",
      }}
    >
      <div
        style={{
          whiteSpace: "pre",
          height: "500px",
          width: "522px",
          overflow: "auto",
          border: "1px solid #1976d2",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {showGraphQL ? (
          <>
            <div style={{ fontWeight: "700" }}>GraphQL</div>
            {JSON.stringify(dataset, null, "\t")}
          </>
        ) : (
          <>
            <div style={{ fontWeight: "700" }}>REST API</div>
            {JSON.stringify(restData, null, "\t")}
          </>
        )}
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
        <Button variant="contained" onClick={() => setShowGraphQL(true)}>
          GraphQL
        </Button>
        <Button variant="contained" onClick={() => setShowGraphQL(false)}>
          Rest API
        </Button>
      </div>
    </div>
  );
}

export default App;
