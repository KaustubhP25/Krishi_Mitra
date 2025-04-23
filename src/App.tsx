import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import RegisterPoor from "./pages/RegisterPoor";
import Register from "./pages/Register";
import Calendar from "./pages/Calendar";
import Policies from "./pages/Policies";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import Feedback from "./pages/Feedback";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ChatAssistant from "./pages/ChatAssistant";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register-poor" element={<RegisterPoor />} />
          <Route path="/register" element={<Register />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/news" element={<News />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/chat-assistant" element={<ChatAssistant />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
