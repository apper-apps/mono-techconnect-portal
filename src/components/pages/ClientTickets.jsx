import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import TicketList from "@/components/organisms/TicketList";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import ApperIcon from "@/components/ApperIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import { ticketService } from "@/services/api/ticketService";

const ClientTickets = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    category: "General Support"
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const categories = [
    "General Support",
    "Email Support", 
    "Network Support",
    "Software Development",
    "Mobile Development",
    "Server Management",
    "Security",
    "Database Support"
  ];

  const priorities = ["Low", "Medium", "High"];

  const handleCreateTicket = () => {
    setShowCreateForm(true);
  };

  const handleViewTicket = (ticket) => {
    navigate(`/tickets/${ticket.Id}`);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const client = JSON.parse(localStorage.getItem("client") || "{}");
      const newTicket = await ticketService.create({
        ...formData,
        clientId: client.Id.toString()
      });
      
      toast.success("Support ticket created successfully!");
      setShowCreateForm(false);
      setFormData({
        title: "",
        description: "",
        priority: "Medium", 
        category: "General Support"
      });
      
      // Refresh the ticket list by navigating to the specific ticket
      navigate(`/tickets/${newTicket.Id}`);
    } catch (error) {
      toast.error("Failed to create ticket. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (showCreateForm) {
    return (
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center space-x-3 mb-8">
            <button
              onClick={() => setShowCreateForm(false)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <ApperIcon name="ArrowLeft" className="w-5 h-5 text-slate-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Create Support Ticket</h1>
              <p className="text-slate-600">Describe your issue and we'll help you resolve it</p>
            </div>
          </div>

          <Card className="shadow-premium">
            <CardHeader>
              <CardTitle>New Support Request</CardTitle>
              <p className="text-slate-600">
                Please provide detailed information about your issue to help us assist you better.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Ticket Title *
                  </label>
                  <Input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Brief description of the issue"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Priority *
                    </label>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      {priorities.map((priority) => (
                        <option key={priority} value={priority}>
                          {priority}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={8}
                    placeholder="Please provide detailed information about your issue, including any error messages, steps to reproduce, and impact on your business operations..."
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                    required
                  />
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setShowCreateForm(false)}
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <>
                        <ApperIcon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                        Creating...
                      </>
                    ) : (
                      <>
                        <ApperIcon name="Send" className="w-4 h-4 mr-2" />
                        Create Ticket
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <TicketList 
      onCreateTicket={handleCreateTicket}
      onViewTicket={handleViewTicket}
    />
  );
};

export default ClientTickets;