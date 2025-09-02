"use client";
import { useAuth } from "@/provider/auth.provider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LayoutLoader from "@/components/layout-loader";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/en/auth/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return <LayoutLoader />;
  }
  if (!user) {
    return null; // Or a redirect, but let the useEffect handle it
  }

  return children;
};

export default ProtectedRoute;
