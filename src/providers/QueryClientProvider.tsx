"use client";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Configura el QueryClient con opciones predeterminadas
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // Reintenta dos veces antes de fallar
      refetchOnWindowFocus: false, // No refetch cuando la ventana gana foco
    },
  },
});

type Props = {
  children: ReactNode;
};

export const CustomQueryClientProvider = ({ children }: Props) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
