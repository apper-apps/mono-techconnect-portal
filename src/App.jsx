import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Public Pages
import Layout from "@/components/pages/Layout";
import Home from "@/components/pages/Home";
import About from "@/components/pages/About";
import Services from "@/components/pages/Services";
import Contact from "@/components/pages/Contact";
import PortalLogin from "@/components/pages/PortalLogin";

// Portal Pages
import PortalLayout from "@/components/pages/PortalLayout";
import Dashboard from "@/components/pages/Dashboard";
import ClientTickets from "@/components/pages/ClientTickets";
import ClientDocuments from "@/components/pages/ClientDocuments";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          
          {/* Portal Login */}
          <Route path="/portal" element={<PortalLogin />} />
          
          {/* Portal Routes */}
          <Route path="/" element={<PortalLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="tickets" element={<ClientTickets />} />
            <Route path="documents" element={<ClientDocuments />} />
          </Route>
        </Routes>
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          toastStyle={{
            fontSize: "14px",
            borderRadius: "12px",
            fontFamily: "Inter, sans-serif"
          }}
          style={{ zIndex: 9999 }}
        />
      </div>
    </Router>
  );
}

export default App;