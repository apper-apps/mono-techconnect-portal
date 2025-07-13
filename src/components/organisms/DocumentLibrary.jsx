import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import DocumentCard from "@/components/molecules/DocumentCard";
import ApperIcon from "@/components/ApperIcon";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { documentService } from "@/services/api/documentService";

const DocumentLibrary = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState("All");

  const loadDocuments = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await documentService.getAll();
      setDocuments(data);
    } catch (err) {
      setError("Failed to load documents. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  const handleDownload = (document) => {
    toast.success(`Downloading ${document.name}...`);
    // Simulate download
    setTimeout(() => {
      toast.info(`${document.name} download completed`);
    }, 2000);
  };

  const categories = ["All", "Invoice", "Report", "Contract", "Project Files"];
  
  const filteredDocuments = filter === "All" 
    ? documents 
    : documents.filter(doc => doc.category === filter);

  if (loading) return <Loading type="cards" />;
  if (error) return <Error message={error} onRetry={loadDocuments} />;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Document Library</h2>
          <p className="text-slate-600">Access and download your project documents</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-slate-500">
          <ApperIcon name="Download" className="w-4 h-4" />
          <span>{documents.length} documents available</span>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === category
                ? "bg-primary-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Documents Grid */}
      {filteredDocuments.length === 0 ? (
        <Empty 
          icon="FileText"
          title="No documents found"
          description="No documents match your current filter."
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDocuments.map((document) => (
            <DocumentCard
              key={document.Id}
              document={document}
              onDownload={handleDownload}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DocumentLibrary;