import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/atoms/Card";
import { clientService } from "@/services/api/clientService";

const PortalLogin = () => {
  const [step, setStep] = useState(1); // 1: Email, 2: OTP
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulate OTP sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success("OTP sent to your email address");
      setStep(2);
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const client = await clientService.authenticate(email, otp);
      localStorage.setItem("client", JSON.stringify(client));
      toast.success(`Welcome back, ${client.contactPerson}!`);
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.message || "Invalid OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const demoCredentials = [
    { email: "admin@techcorp.com", company: "TechCorp Solutions" },
    { email: "it@innovate.in", company: "Innovate Industries" },
    { email: "support@digitalwave.com", company: "Digital Wave Enterprises" },
    { email: "admin@futuretech.co.in", company: "Future Tech Systems" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side - Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center">
                <ApperIcon name="Zap" className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Techlopers Solutions</h1>
                <p className="text-slate-600">Client Portal</p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Welcome to Your IT Service Hub
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Access your support tickets, project documents, and communicate with our team 
              through your secure client portal.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <ApperIcon name="Check" className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700">Track support tickets in real-time</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <ApperIcon name="Check" className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700">Download project documents and reports</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <ApperIcon name="Check" className="w-4 h-4 text-green-600" />
                </div>
                <span className="text-slate-700">Direct communication with our technical team</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-premium">
            <CardHeader>
              <CardTitle className="text-2xl">
                {step === 1 ? "Sign In to Portal" : "Enter Verification Code"}
              </CardTitle>
              <p className="text-slate-600">
                {step === 1 
                  ? "Enter your registered email address to receive an OTP"
                  : `We've sent a 6-digit code to ${email}`
                }
              </p>
            </CardHeader>
            <CardContent>
              {step === 1 ? (
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your registered email"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <ApperIcon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                        Sending OTP...
                      </>
                    ) : (
                      <>
                        <ApperIcon name="Mail" className="w-4 h-4 mr-2" />
                        Send OTP
                      </>
                    )}
                  </Button>
                </form>
              ) : (
                <form onSubmit={handleOtpSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Verification Code
                    </label>
                    <Input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      placeholder="Enter 6-digit OTP"
                      maxLength={6}
                      required
                    />
                    <p className="text-sm text-slate-500 mt-2">
                      Demo OTP: <strong>123456</strong>
                    </p>
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <ApperIcon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                        Verifying...
                      </>
                    ) : (
                      <>
                        <ApperIcon name="LogIn" className="w-4 h-4 mr-2" />
                        Sign In
                      </>
                    )}
                  </Button>
                  
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full text-sm text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    ← Back to email entry
                  </button>
                </form>
              )}

              {/* Demo Credentials */}
              <div className="mt-8 p-4 bg-slate-50 rounded-lg">
                <h3 className="text-sm font-medium text-slate-900 mb-3">Demo Accounts:</h3>
                <div className="space-y-2 text-xs">
                  {demoCredentials.map((cred, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="text-slate-600">{cred.company}:</span>
                      <button
                        onClick={() => setEmail(cred.email)}
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        {cred.email}
                      </button>
                    </div>
                  ))}
                </div>
                <p className="text-slate-500 mt-2">OTP for all accounts: <strong>123456</strong></p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PortalLogin;