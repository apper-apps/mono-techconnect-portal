import { motion } from "framer-motion";

const Loading = ({ type = "default" }) => {
  if (type === "cards") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl border border-slate-200 p-6"
          >
            <div className="animate-pulse">
              <div className="w-12 h-12 bg-slate-200 rounded-xl mb-4"></div>
              <div className="h-6 bg-slate-200 rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-slate-200 rounded mb-4 w-full"></div>
              <div className="space-y-2">
                <div className="h-3 bg-slate-200 rounded w-full"></div>
                <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                <div className="h-3 bg-slate-200 rounded w-4/6"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  if (type === "table") {
    return (
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="p-6 border-b border-slate-200">
          <div className="animate-pulse">
            <div className="h-6 bg-slate-200 rounded w-1/4"></div>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="animate-pulse flex space-x-4">
                <div className="h-4 bg-slate-200 rounded w-1/6"></div>
                <div className="h-4 bg-slate-200 rounded w-2/6"></div>
                <div className="h-4 bg-slate-200 rounded w-1/6"></div>
                <div className="h-4 bg-slate-200 rounded w-1/6"></div>
                <div className="h-4 bg-slate-200 rounded w-1/6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-8 h-8 border-2 border-primary-600 border-t-transparent rounded-full"
      />
    </div>
  );
};

export default Loading;