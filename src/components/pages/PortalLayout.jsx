import React, { useContext, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AuthContext } from "@/App";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const PortalLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);
  
  // Get authentication status with proper error handling
  const userState = useSelector((state) => state.user);
  const user = userState?.user;
  const isAuthenticated = userState?.isAuthenticated || false;

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Logout failed");
    }
  };

  const sidebarItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "LayoutDashboard"
    },
    {
      name: "Support Tickets",
      path: "/tickets", 
      icon: "Ticket"
    },
    {
      name: "Documents",
      path: "/documents",
      icon: "FileText"
    },
    {
      name: "Contact Support",
      path: "/contact",
      icon: "MessageSquare"
    }
  ];

  const isActive = (path) => {
    if (path === "/dashboard") {
      return location.pathname === "/dashboard";
    }
    return location.pathname.startsWith(path);
  };

if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
        <div className="flex flex-col flex-grow bg-white border-r border-slate-200 shadow-sm">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 px-6 py-6 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                <ApperIcon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold gradient-text">Techlopers</h1>
                <p className="text-sm text-slate-600">Client Portal</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 flex flex-col px-4 py-6">
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.path)
                      ? "bg-primary-600 text-white shadow-lg"
                      : "text-slate-700 hover:bg-slate-100 hover:text-primary-700"
                  }`}
                >
                  <ApperIcon name={item.icon} className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* User Info */}
          <div className="flex-shrink-0 px-6 py-6 border-t border-slate-200">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                <ApperIcon name="User" className="w-5 h-5 text-slate-600" />
              </div>
<div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-slate-500 truncate">
                  {user.emailAddress}
                </p>
              </div>
            </div>
            <Button 
              variant="secondary" 
              size="sm" 
              className="w-full"
              onClick={handleLogout}
            >
              <ApperIcon name="LogOut" className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden">
        <div className="flex items-center justify-between px-4 py-4 bg-white border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg flex items-center justify-center">
              <ApperIcon name="Zap" className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold gradient-text">Techlopers</span>
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
          >
            <ApperIcon name="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-slate-600 bg-opacity-75 z-20"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed inset-y-0 left-0 w-64 bg-white z-30 shadow-xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-6 border-b border-slate-200">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                      <ApperIcon name="Zap" className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h1 className="text-lg font-bold gradient-text">Techlopers</h1>
                      <p className="text-sm text-slate-600">Client Portal</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 rounded-lg text-slate-600 hover:bg-slate-100"
                  >
                    <ApperIcon name="X" className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 px-4 py-6">
                  <nav className="space-y-2">
                    {sidebarItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setSidebarOpen(false)}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                          isActive(item.path)
                            ? "bg-primary-600 text-white shadow-lg"
                            : "text-slate-700 hover:bg-slate-100 hover:text-primary-700"
                        }`}
                      >
                        <ApperIcon name={item.icon} className="w-5 h-5 mr-3" />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>

                {/* User Info */}
                <div className="px-6 py-6 border-t border-slate-200">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full flex items-center justify-center">
                      <ApperIcon name="User" className="w-5 h-5 text-slate-600" />
</div>
<div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 truncate">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs text-slate-500 truncate">
                        {user.emailAddress}
                      </p>
                    </div>
                  </div>
                  <Button 
                    variant="secondary"
                    size="sm" 
                    className="w-full"
                    onClick={handleLogout}
                  >
                    <ApperIcon name="LogOut" className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="lg:pl-64">
        <main className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortalLayout;