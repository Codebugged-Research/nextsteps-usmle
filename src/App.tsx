import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import AuthStep1 from "./pages/AuthStep1";
import AuthStep2 from "./pages/AuthStep2";
import AuthCV from "./pages/AuthCV";
import Payment from "./pages/Payment";
import USMLECv from "./pages/USMLECv";
import ClinicalRotations from "./pages/ClinicalRotations";
import ResidencyMatch from "./pages/ResidencyMatch";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <Toaster />
    <Sonner />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/auth/step1" element={<AuthStep1 />} />
        <Route path="/auth/step2" element={<AuthStep2 />} />
        <Route path="/auth/cv" element={<AuthCV />} />
        <Route path="/programs/usmle-cv" element={<USMLECv />} />
        <Route path="/programs/clinical-rotations" element={<ClinicalRotations />} />
        <Route path="/programs/residency-match" element={<ResidencyMatch />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </TooltipProvider>
);

export default App;
