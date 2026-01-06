import { Link } from "react-router-dom";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="space-y-8">
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                            <AlertCircle className="w-8 h-8 text-red-600" />
                        </div>
                        <h1 className="text-4xl font-bold mb-4 text-foreground">Cancellation Policy</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Please read our cancellation policy carefully before making any payment
                        </p>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                                <h2 className="text-xl font-bold text-red-900 mb-3">No Refund Policy</h2>
                                <p className="text-red-800 leading-relaxed text-lg">
                                    Once the payment is made, there is <strong>no policy for refunds, cancellations, or transfers</strong> to another student or any online package of Next Steps, <strong>regardless of the reason</strong>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-8 space-y-4">
                        <h3 className="text-xl font-semibold text-foreground mb-4">What This Means:</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                                <span><strong>No Refunds:</strong> All payments are final and non-refundable under any circumstances.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                                <span><strong>No Cancellations:</strong> You cannot cancel your enrollment after payment has been processed.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 font-bold flex-shrink-0">•</span>
                                <span><strong>No Transfers:</strong> Your enrollment cannot be transferred to another student or exchanged for a different package.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-amber-900 mb-3">Important Notice</h3>
                        <p className="text-amber-800">
                            We strongly encourage all students to:
                        </p>
                        <ul className="mt-3 space-y-2 text-amber-800">
                            <li className="flex items-start gap-2">
                                <span className="font-bold">✓</span>
                                <span>Carefully review all course details and package information before enrollment</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold">✓</span>
                                <span>Read and understand all terms and conditions</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold">✓</span>
                                <span>Contact us with any questions before making payment</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="font-bold">✓</span>
                                <span>Ensure the selected course meets your USMLE preparation needs</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white border border-border rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-3">Need Assistance?</h3>
                        <p className="text-muted-foreground mb-4">
                            If you have any questions or concerns about our courses before enrolling, please contact us:
                        </p>
                        <div className="space-y-2 text-sm">
                            <p>
                                <strong>Email:</strong>{" "}
                                <a href="mailto:usmle@nextstepscareer.com" className="text-primary hover:underline">
                                    usmle@nextstepscareer.com
                                </a>
                            </p>
                            <p>
                                <strong>Phone:</strong> +1 214 306 6111 or local office number
                            </p>
                            <p>
                                <strong>Address:</strong> Next Steps Career Corporation, 30 N Gould St, STE R, Sheridan, WY 82801, USA
                            </p>
                        </div>
                    </div>

                    <div className="text-center space-y-4">
                        <p className="text-sm text-muted-foreground">
                            For complete terms and conditions, please visit our{" "}
                            <Link to="/terms" className="text-primary hover:underline font-medium">
                                Terms & Conditions
                            </Link>{" "}
                            page.
                        </p>
                        <Button asChild variant="default" size="lg">
                            <Link to="/">Return to Home</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CancellationPolicy;
