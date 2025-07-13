import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-primary-50 py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100 to-transparent rounded-full blur-3xl opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Reliable IT Solutions for{" "}
              <span className="gradient-text">Modern Businesses</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Delivering cutting-edge technology solutions, networking, and software development 
              services since 2016. Your trusted partner for comprehensive IT infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button size="lg" className="w-full sm:w-auto">
                  <ApperIcon name="ArrowRight" className="w-5 h-5 ml-2" />
                  Explore Services
                </Button>
              </Link>
              <Link to="/portal">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  <ApperIcon name="Lock" className="w-5 h-5 mr-2" />
                  Client Portal
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-premium"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <ApperIcon name="Shield" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Secure Infrastructure</h3>
                <p className="text-sm text-slate-600">Enterprise-grade security solutions</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-premium mt-8"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <ApperIcon name="Zap" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Fast Deployment</h3>
                <p className="text-sm text-slate-600">Quick setup and implementation</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-premium"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <ApperIcon name="Users" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">24/7 Support</h3>
                <p className="text-sm text-slate-600">Round-the-clock technical assistance</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-premium mt-8"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <ApperIcon name="Smartphone" className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Mobile Solutions</h3>
                <p className="text-sm text-slate-600">iOS and Android app development</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;