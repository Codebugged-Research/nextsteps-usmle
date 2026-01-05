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
    country: "",
    paymentType: "",
    studentId: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.paymentType || !formData.country) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Information Submitted",
      description: `Thank you, ${formData.name}. Our team will contact you shortly with the payment details for your region.`,
    });

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      country: "",
      paymentType: "",
      studentId: "",
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
              Please provide your details below. Our team will contact you with the specific enrollment and payment information tailored to your region.
            </p>
          </div>

          {/* Payment Form Card */}
          <Card className="shadow-card border-border/50">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl">Student Details</CardTitle>
              <CardDescription>
                Fill in your details below to proceed
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
                        value={formData.studentId}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Course & Region Information */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Course & Region
                  </h3>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="paymentType">Payment For *</Label>
                      <Select value={formData.paymentType} onValueChange={(v) => handleSelectChange('paymentType', v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type" />
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
                      <Label htmlFor="country">Country *</Label>
                      <Select value={formData.country} onValueChange={(v) => handleSelectChange('country', v)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="others">Others</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

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
                      Proceed to Details
                    </>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Our team will follow up with the specific payment gateway Link for your chosen region.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Help Section */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Need help? Contact us at{" "}
              <a href="mailto:admin@nextstepsusmle.com" className="text-primary hover:underline">
                admin@nextstepsusmle.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
