import React, { useEffect, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Button } from "@mui/material";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AntSwitch } from "./styles";

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

const POST_QUERY = gql`
  mutation {
    search3(
      advSearchRequestInput: {
        entity: "media-clip"
        criteria: [{ name: "conversation", operator: "in", value: "16726035" }]
      }
    ) {
      status
      startTime
      title
      version
      endTime
      insertTime
      id
      userID {
        fullname
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
  const [showGraphQL, setShowGraphQL] = useState(false);
  const [showGetCall, setShowGetCall] = useState(true);
  const { loading, error, data } = useQuery(GET_QUERY);
  const [
    mutateFunction,
    { loading: postLoading, error: postError, data: postData },
  ] = useMutation(POST_QUERY);

  useEffect(() => {
    if (!showGetCall) {
      async function fetchGraphQL() {
        const response = await mutateFunction({
          variables: {
            advSearchRequestInput: {
              entity: "media-clip",
              criteria: [
                {
                  name: "conversation",
                  operator: "in",
                  value: process.env.REACT_APP_TEST_ID_POST_CALL,
                },
              ],
            },
          },
        });
        setDataset(response);
      }
      fetchGraphQL();
    }
  }, [showGetCall]);

  useEffect(() => {
    if (showGetCall) setDataset(data);
  }, [data, showGetCall]);

  console.log("DATA ****", postData);

  useEffect(() => {
    async function fetchData() {
      if (!showGetCall) {
        const response = await axios.post(
          process.env.REACT_APP_POST_API_URL,
          {
            entity: "media-clip",
            criteria: [
              {
                name: "conversation",
                operator: "in",
                value: process.env.REACT_APP_TEST_ID_POST_CALL,
              },
            ],
          },
          options
        );
        setRestData(response);
      } else {
        const response = await axios.get(
          process.env.REACT_APP_API_URL,
          options
        );
        setRestData(response);
      }
    }
    fetchData();
  }, [showGetCall]);

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
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>POST Call</Typography>
        <AntSwitch
          defaultChecked
          inputProps={{ "aria-label": "ant design" }}
          onChange={(e) => {
            setShowGetCall(e.target.checked);
            setShowGraphQL(false);
          }}
          checked={showGetCall}
        />
        <Typography>GET Call</Typography>
      </Stack>
      <div
        style={{
          whiteSpace: "pre",
          height: "700px",
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
