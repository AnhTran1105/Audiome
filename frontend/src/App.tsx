import { Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import UserDashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/Dashboard";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/queryClient";
import AdminLayout from "./layouts/AdminLayout";
import Songs from "./pages/admin/Songs";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="songs" element={<Songs />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
