import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { XCircle, Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentCancel = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    navigate("/");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-background flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-red-100">
                    <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
                            <XCircle className="w-12 h-12 text-red-600" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        Payment Cancelled
                    </h1>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Your payment was not completed. No charges have been made to your account.
                    </p>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-amber-800 font-medium mb-2">
                            Need assistance?
                        </p>
                        <p className="text-sm text-amber-700">
                            If you encountered any issues or have questions about the payment process,
                            please don't hesitate to contact our team.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <Button
                            onClick={() => navigate("/payment")}
                            className="w-full bg-primary hover:bg-primary/90 text-white"
                            size="lg"
                        >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Try Again
                        </Button>

                        <Button
                            onClick={() => navigate("/")}
                            variant="outline"
                            className="w-full"
                            size="lg"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Return to Home
                        </Button>

                        <p className="text-sm text-gray-500">
                            Redirecting automatically in {countdown} seconds...
                        </p>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Questions? Contact us at{" "}
                        <a
                            href="mailto:admin@nextstepsusmle.com"
                            className="text-primary hover:underline font-medium"
                        >
                            admin@nextstepsusmle.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentCancel;
