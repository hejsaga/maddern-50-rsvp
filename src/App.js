import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import RequireAuth from "./components/RequireAuth";
import Media from "react-media";

// components
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Gammelgarden from "./components/Gammelgarden";
import Boende from "./components/Boende";
import AttGora from "./components/AttGora";
import Carpool from "./components/Carpool";
import OSA from "./components/OSA";
import Fest from "./components/Fest";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import NavbarMobile from "./components/NavbarMobile";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 2,
      cacheTime: 1000 * 60 * 60 * 4,
    },
  },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <Router>
            <Media
              queries={{
                small: "(max-width: 999px)",
                large: "(min-width: 999px)",
              }}
            >
              {(matches) => (
                <>
                  {matches.small && <NavbarMobile />}
                  {matches.large && <Navbar />}
                </>
              )}
            </Media>

            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<LogoutPage />} />

              {/* protected routes */}
              <Route
                path="/"
                element={
                  <RequireAuth redirectTo="/login">
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="/fest"
                element={
                  <RequireAuth redirectTo="/login">
                    <Fest />
                  </RequireAuth>
                }
              />
              <Route
                path="/om-gammelgarden"
                element={
                  <RequireAuth redirectTo="/login">
                    <Gammelgarden />
                  </RequireAuth>
                }
              />
              <Route
                path="/boende"
                element={
                  <RequireAuth redirectTo="/login">
                    <Boende />
                  </RequireAuth>
                }
              />
              <Route
                path="/gora-i-ludvika"
                element={
                  <RequireAuth redirectTo="/login">
                    <AttGora />
                  </RequireAuth>
                }
              />
              <Route
                path="/carpool"
                element={
                  <RequireAuth redirectTo="/login">
                    <Carpool />
                  </RequireAuth>
                }
              />
              <Route
                path="/osa"
                element={
                  <RequireAuth redirectTo="/login">
                    <OSA />
                  </RequireAuth>
                }
              />
            </Routes>
          </Router>
        </AuthContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
