import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white/95 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://content.jdmagicbox.com/v2/comp/delhi/k4/011pxx11.xx11.160322121532.x7k4/catalogue/techlopers-solutions-pvt-ltd-laxmi-nagar-delhi-logo-designers-ucan4jlj72.jpg"
                alt="Techlopers Solutions"
                className="h-12 w-auto"
              />

            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "text-primary-700"
                    : "text-slate-600 hover:text-primary-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/portal">
              <Button size="sm" className="ml-4">
                <ApperIcon name="Lock" className="w-4 h-4 mr-2" />
                Client Portal
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-primary-700 focus:outline-none"
            >
              <ApperIcon name={isOpen ? "X" : "Menu"} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200 py-4"
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium py-2 transition-colors duration-200 ${
                      isActive(item.path)
                        ? "text-primary-700"
                        : "text-slate-600 hover:text-primary-700"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/portal" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="w-full justify-center mt-4">
                    <ApperIcon name="Lock" className="w-4 h-4 mr-2" />
                    Client Portal
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;