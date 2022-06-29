import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
import AppRouter from "./appRouter";
import "./index.scss";

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  const token = localStorage.getItem("loginToken");

  return {
    headers: {
      ...headers,
      authorization: token ? `bearer ${token}` : "",
    },
  };
});

const server = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ApolloProvider client={server}>
      <AppRouter />
    </ApolloProvider>
  </BrowserRouter>
);
