import { Provider } from "@/components/ui/provider";
import type React from "react";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider>{children}</Provider>;
};

export default AppProvider;
