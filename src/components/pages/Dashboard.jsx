import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import Badge from "@/components/atoms/Badge";
import Loading from "@/components/ui/Loading";
import { ticketService } from "@/services/api/ticketService";
import { documentService } from "@/services/api/documentService";

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const client = JSON.parse(localStorage.getItem("client") || "{}");
    if (!client.Id) {
      navigate("/portal");
      return;
    }

    loadDashboardData();
  }, [navigate]);

  const loadDashboardData = async () => {
    try {
      setLoading(true);
      const [ticketsData, documentsData] = await Promise.all([
        ticketService.getAll(),
        documentService.getAll()
      ]);
      setTickets(ticketsData.slice(0, 5)); // Latest 5 tickets
      setDocuments(documentsData.slice(0, 6)); // Latest 6 documents
    } catch (error) {
      console.error("Failed to load dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const client = JSON.parse(localStorage.getItem("client") || "{}");

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

  const stats = [
    {
      icon: "Ticket",
      title: "Active Tickets",
      value: tickets.filter(t => !["Resolved", "Closed"].includes(t.status)).length,
      description: "Currently open support requests"
    },
    {
      icon: "CheckCircle",
      title: "Resolved This Month",
      value: tickets.filter(t => t.status === "Resolved").length,
      description: "Successfully completed tickets"
    },
    {
      icon: "FileText",
      title: "Documents",
      value: documents.length,
      description: "Available for download"
    },
    {
      icon: "Clock",
      title: "Avg Response",
      value: "< 4h",
      description: "Average response time"
    }
  ];

  if (loading) return <Loading />;

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl p-8 text-white"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {client.contactPerson}!
            </h1>
            <p className="text-primary-100 text-lg">
              {client.companyName} • Client Portal Dashboard
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button 
              variant="secondary" 
              onClick={() => navigate("/tickets")}
            >
              <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
              New Ticket
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-gradient-to-br from-white to-slate-50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <ApperIcon name={stat.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                    <p className="text-sm font-medium text-slate-700">{stat.title}</p>
                    <p className="text-xs text-slate-500">{stat.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Tickets */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Recent Tickets</CardTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/tickets")}
              >
                View All
                <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tickets.length === 0 ? (
                  <p className="text-slate-500 text-center py-8">No tickets found</p>
                ) : (
                  tickets.map((ticket) => (
                    <div
                      key={ticket.Id}
                      className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                      onClick={() => navigate(`/tickets/${ticket.Id}`)}
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-slate-900 mb-1">{ticket.title}</h3>
                        <p className="text-sm text-slate-600">#{ticket.id} • {ticket.category}</p>
                      </div>
                      <Badge variant={getStatusVariant(ticket.status)}>
                        {ticket.status}
                      </Badge>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Recent Documents */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Recent Documents</CardTitle>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/documents")}
              >
                View All
                <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {documents.length === 0 ? (
                  <p className="text-slate-500 text-center py-8">No documents found</p>
                ) : (
                  documents.map((doc) => (
                    <div
                      key={doc.Id}
                      className="flex items-center space-x-3 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                        <ApperIcon name="FileText" className="w-5 h-5 text-slate-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-slate-900 truncate">{doc.name}</h3>
                        <p className="text-sm text-slate-500">{doc.category} • {doc.type}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ApperIcon name="Download" className="w-4 h-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-slate-50 to-white">
          <CardHeader>
            <CardTitle className="text-xl">Quick Actions</CardTitle>
            <p className="text-slate-600">Frequently used portal features</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="h-auto p-6 flex-col space-y-2"
                onClick={() => navigate("/tickets/new")}
              >
                <ApperIcon name="Plus" className="w-8 h-8" />
                <span>Create New Ticket</span>
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="h-auto p-6 flex-col space-y-2"
                onClick={() => navigate("/documents")}
              >
                <ApperIcon name="Download" className="w-8 h-8" />
                <span>Download Documents</span>
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="h-auto p-6 flex-col space-y-2"
                onClick={() => navigate("/contact")}
              >
                <ApperIcon name="MessageSquare" className="w-8 h-8" />
                <span>Contact Support</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Dashboard;