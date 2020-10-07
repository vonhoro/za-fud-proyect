import "../styles/globals.css";
import { ThemeProvider } from "@chakra-ui/core";
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
// , createHttpLink
import { ApolloProvider } from "@apollo/client";
const link = createHttpLink({
  uri: "http://localhost:8000/graphql",
  credentials: "include",
  // headers: {
  // cookie: req.header("Cookie"),
  // },
});

const client = new ApolloClient({
  // uri: "http://localhost:8000/graphql",
  cache: new InMemoryCache(),
  link,
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider>
        {" "}
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
