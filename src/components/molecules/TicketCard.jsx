import { motion } from "framer-motion";
import { format } from "date-fns";
import ApperIcon from "@/components/ApperIcon";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";

const TicketCard = ({ ticket, onView, onMessage }) => {
  const getStatusVariant = (status) => {
    const variants = {
      "Open": "error",
      "In Progress": "warning", 
      "Pending": "pending",
      "Resolved": "success",
      "Closed": "default"
    };
    return variants[status] || "default";
  };

  const getPriorityIcon = (priority) => {
    const icons = {
      "High": "AlertTriangle",
      "Medium": "Clock",
      "Low": "Info"
    };
    return icons[priority] || "Info";
  };

  const getPriorityColor = (priority) => {
    const colors = {
      "High": "text-red-500",
      "Medium": "text-yellow-500",
      "Low": "text-blue-500"
    };
    return colors[priority] || "text-blue-500";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="cursor-pointer">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-lg mb-2">{ticket.title}</CardTitle>
              <div className="flex items-center space-x-4 text-sm text-slate-600">
                <span>#{ticket.id}</span>
                <span>{format(new Date(ticket.createdDate), "MMM dd, yyyy")}</span>
                <div className="flex items-center space-x-1">
                  <ApperIcon 
                    name={getPriorityIcon(ticket.priority)} 
                    className={`w-4 h-4 ${getPriorityColor(ticket.priority)}`} 
                  />
                  <span>{ticket.priority}</span>
                </div>
              </div>
            </div>
            <Badge variant={getStatusVariant(ticket.status)}>
              {ticket.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-slate-600 mb-4 line-clamp-2">{ticket.description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <ApperIcon name="Tag" className="w-4 h-4" />
              <span>{ticket.category}</span>
            </div>
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onMessage(ticket);
                }}
              >
                <ApperIcon name="MessageSquare" className="w-4 h-4 mr-1" />
                Message
              </Button>
              <Button 
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onView(ticket);
                }}
              >
                View Details
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TicketCard;