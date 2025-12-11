import { Switch, Route } from "wouter";
import { Router as WouterRouter } from "wouter";

import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/lib/theme-provider";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import Home from "@/pages/Home";
import DocPage from "@/pages/DocPage";
import NotFound from "@/pages/not-found";
import PricingSection from "@/pages/Pricing"; // adjust the path if needed


function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/docs/*" component={DocPage} />
      <Route path="/pricing" component={PricingSection} />  {/* <-- Add this */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base="/">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">
                <AppRoutes />
              </main>
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </WouterRouter>
  );
}

export default App;
