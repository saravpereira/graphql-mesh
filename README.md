# graphql-mesh
Hackathon 2023 project :rocket: :honeybee: :nail_care: :wrench: :dizzy:

### Set up project

1. Use node version `v16.0.0`
2. Install dependencies
```
npm i
```
2. Add existing api's bearer and/or update graphQL api's in `.meshrc.yaml`
3. Start Apollo server. Keep it running in the background. The server will be accessible via `http://localhost:4000/`
```
npm run devNew
```
4. (optional) Start GraphQL Mesh server. This is a useful UI to help write out your query.
```
npm run dev
```
5. Navigate to `client/graphql-mesh-client` dir
6. Create an `.env` file in this directory
```
REACT_APP_BEARER = <api_bearer>
REACT_APP_API_URL = <GET_api_endpoint>
REACT_APP_POST_API_URL = <POST_api_endpoint>
REACT_APP_TEST_ID = <any_id_needed_for_GET_call>
REACT_APP_TEST_ID_POST_CALL = <any_id_needed_for_POST_call>
```
7. Start the React app to see the difference in response structure of GraphQL vs. REST API call! View the application at `https://local.uniphorecloud.com:9092/`
```
npm start
```
