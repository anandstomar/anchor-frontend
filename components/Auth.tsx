import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Logo } from './ui/Assets';
import { Toast } from './ui/Toast';
import { Eye, EyeOff, ArrowRight, Lock, Mail, ShieldCheck } from 'lucide-react';

const formInputClass = "w-full bg-[#fcfbf9] border border-[#d6d3d0] rounded-lg px-3 py-2.5 text-sm text-[#1f1e1d] placeholder-[#a8a29e] focus:outline-none focus:ring-1 focus:ring-[#BE3F2F] focus:border-[#BE3F2F] transition-all shadow-sm pl-10";
const btnPrimary = "w-full py-2.5 bg-[#BE3F2F] text-white text-sm font-medium rounded-lg shadow-md hover:bg-[#a33224] transition-all flex justify-center items-center gap-2 transform active:scale-[0.98]";

interface AuthProps {
  onLogin: () => void;
}

export const Login: React.FC<AuthProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock API
    setTimeout(() => {
        setLoading(false);
        onLogin();
        navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa] flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#BE3F2F]/5 blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-[#d6d3d0]/20 blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-[380px]">
        <div className="mb-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="scale-150 mb-6 p-4 bg-white rounded-2xl shadow-sm border border-[#e0e0dc]"><Logo /></div>
            <h1 className="text-2xl font-light text-[#1f1e1d] tracking-tight text-center">Anchor Enterprise</h1>
            <p className="text-sm text-[#8c8b88] mt-2">Sign in to access your console</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e0e0dc] animate-in zoom-in-95 duration-500">
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#5d5c58] uppercase tracking-wider ml-1">Email</label>
                    <div className="relative group">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8b88] group-focus-within:text-[#BE3F2F] transition-colors" size={18} />
                        <input type="email" placeholder="name@company.com" className={formInputClass} required defaultValue="demo@anchor.io" />
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label className="text-xs font-bold text-[#5d5c58] uppercase tracking-wider ml-1">Password</label>
                    <div className="relative group">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8b88] group-focus-within:text-[#BE3F2F] transition-colors" size={18} />
                        <input 
                            type={showPwd ? "text" : "password"} 
                            placeholder="••••••••" 
                            className={formInputClass} 
                            required 
                            defaultValue="password"
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPwd(!showPwd)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8b88] hover:text-[#5d5c58] p-1 rounded-md hover:bg-[#fbfbfa] transition-colors"
                        >
                            {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                </div>

                <div className="flex justify-between items-center text-xs pt-1">
                    <label className="flex items-center gap-2 text-[#5d5c58] cursor-pointer hover:text-[#1f1e1d] select-none">
                        <input type="checkbox" className="accent-[#BE3F2F] w-3.5 h-3.5 rounded border-gray-300" /> Remember me
                    </label>
                    <a href="#" className="text-[#BE3F2F] hover:text-[#a33224] font-medium transition-colors">Forgot password?</a>
                </div>

                <button type="submit" disabled={loading} className={btnPrimary}>
                    {loading ? "Verifying Credentials..." : "Sign In"} 
                    {!loading && <ArrowRight size={16} />}
                </button>
            </form>

            <div className="mt-8 pt-6 border-t border-[#f1f0ee] text-center text-xs text-[#5d5c58]">
                Need an account? <Link to="/signup" className="text-[#BE3F2F] font-bold hover:underline ml-1">Request Access</Link>
            </div>
        </div>
        
        <div className="mt-8 flex justify-center gap-6 text-[10px] text-[#8c8b88] uppercase tracking-widest font-medium">
             <span className="flex items-center gap-1.5"><ShieldCheck size={12} /> Enterprise Grade Security</span>
        </div>
      </div>
    </div>
  );
};

export const Signup: React.FC<AuthProps> = ({ onLogin }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        onLogin();
        navigate('/');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#fbfbfa] flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#BE3F2F]/5 blur-3xl" />
        </div>

        <div className="relative z-10 w-full max-w-[420px]">
            <div className="bg-white p-8 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#e0e0dc] animate-in slide-in-from-bottom-8 duration-500">
                <div className="mb-8 text-center">
                    <h2 className="text-xl font-bold text-[#1f1e1d]">Create Account</h2>
                    <p className="text-sm text-[#8c8b88] mt-1">Join your organization's workspace</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-[#5d5c58] uppercase tracking-wider ml-1">First Name</label>
                            <input type="text" placeholder="John" className={`${formInputClass} pl-3`} required />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold text-[#5d5c58] uppercase tracking-wider ml-1">Last Name</label>
                            <input type="text" placeholder="Doe" className={`${formInputClass} pl-3`} required />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#5d5c58] uppercase tracking-wider ml-1">Work Email</label>
                        <div className="relative group">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8b88] group-focus-within:text-[#BE3F2F] transition-colors" size={18} />
                            <input type="email" placeholder="name@company.com" className={formInputClass} required />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-[#5d5c58] uppercase tracking-wider ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8c8b88] group-focus-within:text-[#BE3F2F] transition-colors" size={18} />
                            <input 
                                type={showPwd ? "text" : "password"} 
                                placeholder="Create a password" 
                                className={formInputClass} 
                                required 
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPwd(!showPwd)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8c8b88] hover:text-[#5d5c58] p-1 rounded-md hover:bg-[#fbfbfa] transition-colors"
                            >
                                {showPwd ? <EyeOff size={16} /> : <Eye size={16} />}
                            </button>
                        </div>
                    </div>

                    <button type="submit" disabled={loading} className={btnPrimary}>
                        {loading ? "Creating Account..." : "Sign Up"} 
                        {!loading && <ArrowRight size={16} />}
                    </button>
                </form>

                <div className="mt-6 pt-6 border-t border-[#f1f0ee] text-center text-xs text-[#5d5c58]">
                    Already have an account? <Link to="/login" className="text-[#BE3F2F] font-bold hover:underline ml-1">Sign In</Link>
                </div>
            </div>
            
            <div className="mt-8 text-center">
                 <Link to="/login" className="text-xs text-[#8c8b88] hover:text-[#BE3F2F] transition-colors flex items-center justify-center gap-1">
                    <ArrowRight size={12} className="rotate-180" /> Back to Login
                 </Link>
            </div>
        </div>
    </div>
  );
};