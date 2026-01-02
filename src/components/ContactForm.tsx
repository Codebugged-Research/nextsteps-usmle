import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        medSchool: "",
        message: ""
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", phone: "", medSchool: "", message: "" });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                    <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                    />
                </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                    <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                    />
                </div>
                <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Med School</label>
                    <Input
                        name="medSchool"
                        value={formData.medSchool}
                        onChange={handleChange}
                        placeholder="Your medical school"
                        required
                    />
                </div>
            </div>
            <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    required
                />
            </div>
            <Button type="submit" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
            </Button>
        </form>
    );
};

export default ContactForm;
