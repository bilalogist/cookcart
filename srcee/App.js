import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/app/" />} />
        <Route path="app">
          {routes.map((route) => (
            <Route
              key={route.path}
              index={route.index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
