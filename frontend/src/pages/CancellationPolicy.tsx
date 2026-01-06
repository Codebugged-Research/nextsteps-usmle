import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

const CancellationPolicy = () => {
    return (
        <div className="min-h-screen bg-background">
            <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                            <ArrowLeft className="h-5 w-5" />
                            <span>Back to Home</span>
                        </Link>
                        <h1 className="text-xl font-bold gradient-text">USMLE Prep</h1>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-16 max-w-3xl min-h-[60vh]">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-foreground">Cancellation Policy</h1>
                </div>

                <div className="bg-white border border-border rounded-lg p-8 shadow-sm">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Once the payment is made, there is <strong className="text-foreground">no policy for refunds, cancellations, or transfers</strong> to another student or any online package of Next Steps, regardless of the reason.
                    </p>
                </div>

                <div className="text-center mt-12">
                    <p className="text-sm text-muted-foreground mb-4">
                        For questions, contact us at{" "}
                        <a href="mailto:admin@nextstepsusmle.com" className="text-primary hover:underline">
                            admin@nextstepsusmle.com
                        </a>
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CancellationPolicy;
