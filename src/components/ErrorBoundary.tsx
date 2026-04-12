import * as React from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      let errorMessage = 'An unexpected error occurred. Our team has been notified.';
      
      try {
        if (this.state.error?.message) {
          const parsedError = JSON.parse(this.state.error.message);
          if (parsedError.error && parsedError.operationType) {
            errorMessage = `A database error occurred during a ${parsedError.operationType} operation. Please check your connection or permissions.`;
          }
        }
      } catch (e) {
        // Not a JSON error, use default
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
          <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-12 text-center border border-slate-100">
            <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <AlertTriangle size={48} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Something went wrong</h1>
            <p className="text-slate-600 mb-10 leading-relaxed">
              {errorMessage}
            </p>
            <div className="flex flex-col gap-4">
              <button
                onClick={this.handleReset}
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
              >
                <RefreshCw size={20} /> Try Again
              </button>
              <Link
                to="/"
                onClick={() => this.setState({ hasError: false, error: null })}
                className="w-full bg-slate-100 text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Home size={20} /> Back to Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
