import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentSuccess = () => {
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
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-background flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-green-100">
                    <div className="mb-6 flex justify-center">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center animate-in zoom-in duration-500">
                            <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-900 mb-3">
                        Payment Successful!
                    </h1>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Thank you for your payment. Your transaction has been completed successfully.
                        Our team will contact you shortly with the next steps.
                    </p>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                        <p className="text-sm text-green-800">
                            A confirmation email has been sent to your registered email address.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <Button
                            onClick={() => navigate("/")}
                            className="w-full bg-green-600 hover:bg-green-700 text-white"
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

export default PaymentSuccess;
