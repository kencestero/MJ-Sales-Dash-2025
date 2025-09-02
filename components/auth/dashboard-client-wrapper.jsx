"use client";

import ProtectedRoute from "@/components/auth/protected-route";
import DashBoardLayoutProvider from "@/provider/dashboard.layout.provider";

const DashboardClientWrapper = ({ children, trans }) => {
  return (
    <ProtectedRoute>
      <DashBoardLayoutProvider trans={trans}>
        {children}
      </DashBoardLayoutProvider>
    </ProtectedRoute>
  );
};

export default DashboardClientWrapper;
