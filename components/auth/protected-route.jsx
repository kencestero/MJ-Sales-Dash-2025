"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LayoutLoader from "@/components/layout-loader";

const ProtectedRoute = ({ children }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/en/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <LayoutLoader />;
  }
  
  if (status === "unauthenticated") {
    return null; // Or a redirect, but let the useEffect handle it
  }

  return children;
};

export default ProtectedRoute;
