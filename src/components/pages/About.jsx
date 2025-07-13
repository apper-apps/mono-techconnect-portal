import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent } from "@/components/atoms/Card";

const About = () => {
  const timeline = [
    {
      year: "2016",
      title: "Company Founded",
      description: "Techlopers Solutions Private Limited incorporated under Companies Act, India"
    },
    {
      year: "2018",
      title: "First Major Project",
      description: "Successfully delivered enterprise-level ERP solution for manufacturing client"
    },
    {
      year: "2020", 
      title: "Team Expansion",
      description: "Expanded development team and opened operational office in Noida Sector 128"
    },
    {
      year: "2022",
      title: "Mobile Solutions",
      description: "Launched dedicated mobile app development division with iOS and Android expertise"
    },
    {
      year: "2024",
      title: "Innovation Focus",
      description: "Continuing to deliver cutting-edge solutions with focus on cloud and AI technologies"
    }
  ];

  const values = [
    {
      icon: "Target",
      title: "Client-First Approach",
      description: "We prioritize our clients' needs and deliver personalized solutions that drive real business value."
    },
    {
      icon: "Award",
      title: "Technical Excellence",
      description: "Our team maintains the highest standards of technical expertise and continuous learning."
    },
    {
      icon: "Shield",
      title: "Reliability & Security",
      description: "We build secure, scalable solutions that businesses can depend on for critical operations."
    },
    {
      icon: "Zap",
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions for modern challenges."
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
            About <span className="gradient-text">Techlopers Solutions</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Since 2016, we've been dedicated to delivering reliable, efficient, and cutting-edge 
            technology solutions that empower businesses to thrive in the digital age.
          </p>
        </motion.div>

        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Techlopers Solutions Private Limited was founded in 2016 under the Companies Act of India 
                with a vision to bridge the technology gap for businesses across industries. What started 
                as a small IT consulting firm has grown into a comprehensive technology solutions provider.
              </p>
              <p>
                With our head office in Delhi and operational office in Noida Sector 128, we serve clients 
                nationwide, delivering everything from network infrastructure to custom software development. 
                Our expertise spans IT consulting, networking, software development, mobile applications, 
                and comprehensive IT support services.
              </p>
              <p>
                Today, we're proud to be a trusted partner for businesses looking to leverage technology 
                for growth, efficiency, and competitive advantage.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become a trusted IT partner for businesses across industries by delivering 
                sustainable and scalable technology solutions that drive long-term success.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                Empower organizations with secure, agile, and modern IT infrastructure through 
                innovation, technical excellence, and personalized support that exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <ApperIcon name="MapPin" className="w-4 h-4 text-primary-600" />
                <span className="text-slate-600">Head Office: Delhi, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Building" className="w-4 h-4 text-primary-600" />
                <span className="text-slate-600">Operations: Noida Sector 128</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="Calendar" className="w-4 h-4 text-primary-600" />
                <span className="text-slate-600">Established: 2016</span>
              </div>
              <div className="flex items-center space-x-2">
                <ApperIcon name="FileText" className="w-4 h-4 text-primary-600" />
                <span className="text-slate-600">Companies Act, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-slate-600">
              Our core values drive everything we do and define how we serve our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full text-center bg-gradient-to-br from-white to-primary-50">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <ApperIcon name={value.icon} className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Journey</h2>
            <p className="text-lg text-slate-600">
              Key milestones in our growth and evolution as a technology partner
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center z-10">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"
                }`}>
                  <Card className="bg-gradient-to-br from-white to-slate-50">
                    <CardContent className="p-6">
                      <div className="text-primary-600 font-bold text-sm mb-1">{item.year}</div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;