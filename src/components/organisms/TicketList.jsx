import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import TicketCard from "@/components/molecules/TicketCard";
import Button from "@/components/atoms/Button";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { ticketService } from "@/services/api/ticketService";

const TicketList = ({ onCreateTicket, onViewTicket }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  const loadTickets = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await ticketService.getAll();
      setTickets(data);
    } catch (err) {
      setError("Failed to load tickets. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);

  const handleMessage = (ticket) => {
    toast.info(`Opening message thread for ticket #${ticket.id}`);
  };

  const filters = ["All", "Open", "In Progress", "Pending", "Resolved", "Closed"];
  
  const filteredTickets = filter === "All" 
    ? tickets 
    : tickets.filter(ticket => ticket.status === filter);

  if (loading) return <Loading type="cards" />;
  if (error) return <Error message={error} onRetry={loadTickets} />;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Support Tickets</h2>
          <p className="text-slate-600">Manage and track your support requests</p>
        </div>
        <Button onClick={onCreateTicket}>
          <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
          Create Ticket
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filterOption) => (
          <button
            key={filterOption}
            onClick={() => setFilter(filterOption)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === filterOption
                ? "bg-primary-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {filterOption}
          </button>
        ))}
      </div>

      {/* Tickets Grid */}
      {filteredTickets.length === 0 ? (
        <Empty 
          icon="Ticket"
          title="No tickets found"
          description="No support tickets match your current filter."
          actionLabel="Create New Ticket"
          onAction={onCreateTicket}
        />
      ) : (
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          layout
        >
          {filteredTickets.map((ticket) => (
            <TicketCard
              key={ticket.Id}
              ticket={ticket}
              onView={onViewTicket}
              onMessage={handleMessage}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default TicketList;