import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, CreditCard, DollarSign, User, Mail, Phone, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Payment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    paymentType: "",
    studentId: "",
    notes: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, paymentType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.amount || !formData.paymentType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    const amount = parseFloat(formData.amount);
    if (isNaN(amount) || amount <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid payment amount.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    toast({
      title: "Payment Submitted",
      description: `Your payment of $${amount.toFixed(2)} has been submitted successfully. Our team will process it shortly.`,
    });
    
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      amount: "",
      paymentType: "",
      studentId: "",
      notes: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-muted/30 to-background">
      {/* Header */}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Make a Payment
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto">
              Pay your enrollment fee or installment securely. Enter the amount communicated by your enrollment advisor.
            </p>
          </div>

          {/* Payment Form Card */}
          <Card className="shadow-card border-border/50">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl">Payment Details</CardTitle>
              <CardDescription>
                Fill in your details and the payment amount below
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Personal Information
                  </h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="studentId" className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        Student ID (if applicable)
                      </Label>
                      <Input
                        id="studentId"
                        name="studentId"
                        placeholder="STU-12345"
                        value={formData.studentId}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Payment Information
                  </h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="paymentType">Payment Type *</Label>
                      <Select value={formData.paymentType} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enrollment">Enrollment Fee</SelectItem>
                          <SelectItem value="installment">Installment Payment</SelectItem>
                          <SelectItem value="full">Full Course Payment</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="amount" className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        Amount (USD) *
                      </Label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-medium">
                          $
                        </span>
                        <Input
                          id="amount"
                          name="amount"
                          type="number"
                          min="1"
                          step="0.01"
                          placeholder="0.00"
                          className="pl-8"
                          value={formData.amount}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Input
                      id="notes"
                      name="notes"
                      placeholder="Any additional information (e.g., invoice number, program name)"
                      value={formData.notes}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                {/* Amount Summary */}
                {formData.amount && parseFloat(formData.amount) > 0 && (
                  <div className="bg-muted/50 rounded-lg p-4 border">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Payment Amount</span>
                      <span className="text-2xl font-bold text-primary">
                        ${parseFloat(formData.amount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full gradient-primary text-primary-foreground font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CreditCard className="h-5 w-5 mr-2" />
                      Proceed to Payment
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By proceeding, you agree to our payment terms. For any queries, contact your enrollment advisor.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Need help? Contact us at{" "}
              <a href="mailto:payments@usmleprep.com" className="text-primary hover:underline">
                payments@usmleprep.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
