import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/configStore";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import ScrollToTop from "./components/ScrollRestoration/ScrollRestoration";

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </Provider>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>,
);

reportWebVitals();
