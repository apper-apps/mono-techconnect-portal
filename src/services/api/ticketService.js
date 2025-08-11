import ticketsData from "@/services/mockData/tickets.json";

class TicketService {
  constructor() {
    this.tickets = [...ticketsData];
  }

  async getAll() {
    await this.delay(300);
    return [...this.tickets];
  }

  async getById(id) {
    await this.delay(200);
    const ticket = this.tickets.find(t => t.Id === parseInt(id));
    if (!ticket) {
      throw new Error("Ticket not found");
    }
    return { ...ticket };
  }

  async create(ticketData) {
    await this.delay(400);
    const newTicket = {
      ...ticketData,
      Id: Math.max(...this.tickets.map(t => t.Id)) + 1,
      createdDate: new Date().toISOString(),
      updatedDate: new Date().toISOString(),
      status: "Open"
    };
    this.tickets.push(newTicket);
    return { ...newTicket };
  }

  async update(id, updateData) {
    await this.delay(300);
    const index = this.tickets.findIndex(t => t.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Ticket not found");
    }
    this.tickets[index] = {
      ...this.tickets[index],
      ...updateData,
      updatedDate: new Date().toISOString()
    };
    return { ...this.tickets[index] };
  }

  async delete(id) {
    await this.delay(200);
    const index = this.tickets.findIndex(t => t.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Ticket not found");
    }
    this.tickets.splice(index, 1);
    return true;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const ticketService = new TicketService();