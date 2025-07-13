import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent } from "@/components/atoms/Card";

const AboutSection = () => {
  const highlights = [
    {
      icon: "Award",
      title: "8+ Years Experience",
      description: "Established in 2016, serving clients across industries"
    },
    {
      icon: "Users",
      title: "Expert Team",
      description: "Skilled professionals with proven delivery record"
    },
    {
      icon: "Target",
      title: "Client-First Approach",
      description: "Personalized solutions tailored to your needs"
    },
    {
      icon: "DollarSign",
      title: "Competitive Pricing",
      description: "Quality services at affordable rates"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              About <span className="gradient-text">Techlopers Solutions</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Techlopers Solutions Private Limited is a leading IT company committed to delivering 
              reliable, efficient, and cutting-edge technology solutions. Founded in 2016 under the 
              Companies Act of India, we specialize in comprehensive IT services that empower businesses 
              to thrive in the digital age.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-slate-600">
                  To become a trusted IT partner for businesses across industries by delivering 
                  sustainable and scalable technology solutions.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-slate-600">
                  Empower organizations with secure, agile, and modern IT infrastructure through 
                  innovation, technical excellence, and personalized support.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <ApperIcon name="MapPin" className="w-4 h-4 text-primary-600" />
                <span className="text-slate-600">Head Office: Delhi, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Building" className="w-4 h-4 text-primary-600" />
                <span className="text-slate-600">Operations: Noida Sector 128</span>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-primary-50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <ApperIcon name={highlight.icon} className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{highlight.title}</h3>
                    <p className="text-sm text-slate-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;