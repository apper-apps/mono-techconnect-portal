import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                <ApperIcon name="Zap" className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Techlopers Solutions</span>
                <p className="text-sm text-slate-400">Private Limited</p>
              </div>
            </div>
            <p className="text-slate-400 mb-4 max-w-md">
              Leading IT company committed to delivering reliable, efficient, and cutting-edge technology solutions since 2016.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <ApperIcon name="Linkedin" className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <ApperIcon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <ApperIcon name="Mail" className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/portal" className="text-slate-400 hover:text-white transition-colors">Client Portal</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <ApperIcon name="MapPin" className="w-5 h-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-400">Head Office:</p>
                  <p className="text-sm">K-1292/15, Ground Floor, Sangam Vihar, South Delhi, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <ApperIcon name="Building" className="w-5 h-5 text-primary-400 mt-0.5" />
                <div>
                  <p className="text-sm text-slate-400">Operational Office:</p>
                  <p className="text-sm">Noida Sector 120 & Noida Sector 128</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Mail" className="w-5 h-5 text-primary-400" />
                <p className="text-sm">info@techlopers.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <ApperIcon name="Phone" className="w-5 h-5 text-primary-400" />
                <p className="text-sm">+91 95607 85875</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 Techlopers Solutions Private Limited. All rights reserved. Incorporated in 2016 under Companies Act, India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;