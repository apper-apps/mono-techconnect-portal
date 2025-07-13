import { motion } from "framer-motion";
import ServiceCard from "@/components/molecules/ServiceCard";
import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent } from "@/components/atoms/Card";
import Button from "@/components/atoms/Button";

const Services = () => {
  const services = [
    {
      icon: "Settings",
      title: "End-to-End IT Consulting",
      description: "Comprehensive IT strategy and consulting services to optimize your technology infrastructure and drive digital transformation.",
      features: ["Technology Assessment", "Strategic IT Planning", "Digital Transformation", "Risk Management", "Compliance Consulting"]
    },
    {
      icon: "Network",
      title: "Network Architecture & Implementation",
      description: "Design, implement, and maintain robust network infrastructure solutions that ensure reliable connectivity and optimal performance.",
      features: ["Network Design & Planning", "LAN/WAN Implementation", "Network Security Setup", "Performance Optimization", "Wireless Solutions"]
    },
    {
      icon: "Server",
      title: "Server & Hardware Setup",
      description: "Complete server installation, configuration, and hardware setup services for optimal system performance and reliability.",
      features: ["Server Installation", "Hardware Configuration", "System Integration", "Performance Tuning", "Maintenance Support"]
    },
    {
      icon: "Code",
      title: "Custom ERP/CRM Software",
      description: "Tailored enterprise resource planning and customer relationship management solutions designed for your specific business needs.",
      features: ["Custom ERP Development", "CRM Solutions", "Database Design", "API Development", "System Integration"]
    },
    {
      icon: "Smartphone",
      title: "Android and iOS App Development",
      description: "Native mobile application development for both Android and iOS platforms with modern UI/UX and robust functionality.",
      features: ["Native Android Apps", "iOS Development", "Cross-platform Solutions", "UI/UX Design", "App Store Deployment"]
    },
    {
      icon: "Wrench",
      title: "AMC and Long-term IT Support",
      description: "Comprehensive annual maintenance contracts and ongoing IT support to ensure your systems run smoothly year-round.",
      features: ["24/7 Technical Support", "Regular System Maintenance", "Software Updates", "Hardware Monitoring", "Emergency Response"]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "We begin with a detailed consultation to understand your business requirements and technical challenges."
    },
    {
      step: "2", 
      title: "Assessment",
      description: "Our experts conduct a thorough assessment of your current infrastructure and identify improvement opportunities."
    },
    {
      step: "3",
      title: "Solution Design",
      description: "We design a customized solution that aligns with your business goals and technical requirements."
    },
    {
      step: "4",
      title: "Implementation",
      description: "Our skilled team implements the solution with minimal disruption to your business operations."
    },
    {
      step: "5",
      title: "Support",
      description: "We provide ongoing support and maintenance to ensure optimal performance and continuous improvement."
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive IT solutions tailored to meet your business requirements with 
            cutting-edge technology and expert implementation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
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

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results for every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-primary-200 -z-10"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our expert team can help you achieve your technology goals 
                with customized solutions and reliable support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  <ApperIcon name="Phone" className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
                <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white/10">
                  <ApperIcon name="FileText" className="w-5 h-5 mr-2" />
                  Get Quote
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;