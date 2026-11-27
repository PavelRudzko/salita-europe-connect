import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Electronics from "./pages/Electronics";
import Logistics from "./pages/Logistics";
import Brands from "./pages/Brands";
import BrandPage from "./pages/BrandPage";
import RouteEffects from "./components/RouteEffects";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteEffects />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/electronics/brands" element={<Brands />} />
          <Route path="/electronics/brands/:slug" element={<BrandPage />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
