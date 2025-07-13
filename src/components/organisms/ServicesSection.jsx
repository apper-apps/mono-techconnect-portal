import { motion } from "framer-motion";
import ServiceCard from "@/components/molecules/ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: "Settings",
      title: "IT Consulting",
      description: "End-to-end IT consulting services to optimize your technology infrastructure",
      features: ["Technology Assessment", "Strategic Planning", "Digital Transformation", "Risk Management"]
    },
    {
      icon: "Network",
      title: "Network Architecture",
      description: "Design and implementation of robust network infrastructure solutions",
      features: ["Network Design", "Implementation", "Security Setup", "Performance Optimization"]
    },
    {
      icon: "Server",
      title: "Server & Hardware Setup",
      description: "Complete server installation and hardware configuration services",
      features: ["Server Installation", "Hardware Configuration", "System Integration", "Performance Tuning"]
    },
    {
      icon: "Code",
      title: "Custom Software Development",
      description: "Tailored ERP/CRM software solutions for your business needs",
      features: ["Custom ERP Systems", "CRM Solutions", "Database Design", "API Development"]
    },
    {
      icon: "Smartphone",
      title: "Mobile App Development",
      description: "Native Android and iOS applications with modern user experiences",
      features: ["Android Development", "iOS Development", "Cross-platform Solutions", "App Store Deployment"]
    },
    {
      icon: "Wrench",
      title: "AMC & Support",
      description: "Long-term IT support and maintenance contracts for peace of mind",
      features: ["24/7 Support", "Regular Maintenance", "System Updates", "Technical Assistance"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to meet your business requirements 
            with cutting-edge technology and expert implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;