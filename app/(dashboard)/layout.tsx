import Navbar from "@/components/NavBar";
import { getApiLimitCount } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";
import React from "react";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const isPro = await checkSubscription();
  const apiLimitCount = await getApiLimitCount();

  return (
    <div className="h-full relative">
      <main className="bg-white">
        <Navbar isPro={isPro} apiLimitCount={apiLimitCount} />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
