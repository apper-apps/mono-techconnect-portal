import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent } from "@/components/atoms/Card";

const ServiceCard = ({ icon, title, description, features }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full bg-gradient-to-br from-white to-slate-50">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
            <ApperIcon name={icon} className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
          <p className="text-slate-600 mb-4">{description}</p>
          {features && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-slate-600">
                  <ApperIcon name="Check" className="w-4 h-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;