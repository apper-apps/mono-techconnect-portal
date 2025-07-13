import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ApperIcon from "@/components/ApperIcon";

const ClientStats = () => {
  const [counts, setCounts] = useState({
    tickets: 0,
    resolved: 0,
    response: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const targets = {
      tickets: 1250,
      resolved: 98,
      response: 24,
      satisfaction: 96
    };

    const animateCount = (key, target, duration = 2000) => {
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    setTimeout(() => {
      animateCount("tickets", targets.tickets);
      animateCount("resolved", targets.resolved);
      animateCount("response", targets.response);
      animateCount("satisfaction", targets.satisfaction);
    }, 500);
  }, []);

  const stats = [
    {
      icon: "Ticket",
      value: counts.tickets,
      label: "Tickets Resolved",
      suffix: "+"
    },
    {
      icon: "CheckCircle",
      value: counts.resolved,
      label: "Success Rate",
      suffix: "%"
    },
    {
      icon: "Clock",
      value: counts.response,
      label: "Avg Response Time",
      suffix: "h"
    },
    {
      icon: "Heart",
      value: counts.satisfaction,
      label: "Client Satisfaction",
      suffix: "%"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-primary-100 text-lg">
            Our track record speaks for itself with industry-leading performance metrics
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center mx-auto mb-4">
                <ApperIcon name={stat.icon} className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-primary-100 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientStats;