import { Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import Dashboard from "./pages/Dashboard";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
