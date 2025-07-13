import documentsData from "@/services/mockData/documents.json";

class DocumentService {
  constructor() {
    this.documents = [...documentsData];
  }

  async getAll() {
    await this.delay(250);
    return [...this.documents];
  }

  async getById(id) {
    await this.delay(200);
    const document = this.documents.find(d => d.Id === parseInt(id));
    if (!document) {
      throw new Error("Document not found");
    }
    return { ...document };
  }

  async create(documentData) {
    await this.delay(400);
    const newDocument = {
      ...documentData,
      Id: Math.max(...this.documents.map(d => d.Id)) + 1,
      uploadDate: new Date().toISOString()
    };
    this.documents.push(newDocument);
    return { ...newDocument };
  }

  async update(id, updateData) {
    await this.delay(300);
    const index = this.documents.findIndex(d => d.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Document not found");
    }
    this.documents[index] = { ...this.documents[index], ...updateData };
    return { ...this.documents[index] };
  }

  async delete(id) {
    await this.delay(200);
    const index = this.documents.findIndex(d => d.Id === parseInt(id));
    if (index === -1) {
      throw new Error("Document not found");
    }
    this.documents.splice(index, 1);
    return true;
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export const documentService = new DocumentService();