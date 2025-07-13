import { motion } from "framer-motion";
import { format } from "date-fns";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import { Card, CardContent } from "@/components/atoms/Card";

const DocumentCard = ({ document, onDownload }) => {
  const getFileIcon = (type) => {
    const icons = {
      "PDF": "FileText",
      "DOC": "FileText", 
      "DOCX": "FileText",
      "XLS": "FileSpreadsheet",
      "XLSX": "FileSpreadsheet",
      "ZIP": "Archive",
      "IMAGE": "Image"
    };
    return icons[type] || "File";
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full">
        <CardContent className="p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center flex-shrink-0">
              <ApperIcon name={getFileIcon(document.type)} className="w-5 h-5 text-slate-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-slate-900 truncate">{document.name}</h3>
              <div className="flex items-center space-x-4 text-sm text-slate-500 mt-1">
                <span>{document.type}</span>
                <span>{formatFileSize(document.size)}</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {format(new Date(document.uploadDate), "MMM dd, yyyy")}
              </p>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
              {document.category}
            </span>
            <Button 
              size="sm" 
              variant="secondary"
              onClick={() => onDownload(document)}
            >
              <ApperIcon name="Download" className="w-4 h-4 mr-1" />
              Download
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DocumentCard;