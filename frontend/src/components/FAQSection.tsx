import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is NextStepsUSMLE?",
        answer: "NextStepsUSMLE is an online platform that provides a comprehensive question bank designed to help medical students and professionals prepare for the USMLE exams. Our goal is to offer high-quality, up-to-date practice questions that simulate the real exam experience."
    },
    {
        question: "What are Standard Mode, SA Mode, and Custom Mode?",
        answer: (
            <div className="space-y-4">
                <p><strong>Standard Mode:</strong> In Standard Mode, students can create a practice block tailored to their needs, choosing from topics based on systems, subjects, or a combination of multiple topics. Each block can contain a maximum of 40 questions.</p>
                <p><strong>SA Mode (Self-Assessment Mode):</strong> SA Mode allows students to simulate a real exam experience. Students can create personalized assessments based on the systems they have studied. They can choose to generate multiple blocks, ranging from 2 to 7, depending on their preferences and convenience.</p>
                <p><strong>Custom Mode:</strong> Custom Mode is designed for referral tests. Students can input a test ID to recreate a specific set of questions, allowing them to take the same test as others for comparison or practice.</p>
            </div>
        )
    },
    {
        question: "How do I use the Notes feature?",
        answer: (
            <div className="space-y-4">
                <p>While reviewing the explanations for each question, you can add important points or key takeaways directly into your notes. Simply highlight the must-review information within the explanation and save it.</p>
                <p>Once you've completed a system or topic, return to the Notes section, where you can filter your notes by subject, system, or topic. You can then download your notes for easy access.</p>
                <p>For convenience, print the downloaded soft copy and convert it into a hard copy. This will allow you to carry it around for quick and effective revision on the go.</p>
            </div>
        )
    },
    {
        question: "How accurate is the Self-Assessment score?",
        answer: "Within ±5 points of your real Step 1 score, based on 2,000+ verified results."
    },
    {
        question: "Can I keep my notes forever?",
        answer: "Yes. Download them anytime—even after your subscription ends."
    },
    {
        question: "What makes NextStepsUSMLE different from other question banks?",
        answer: (
            <div className="space-y-4">
                <p>NextStepsUSMLE stands out by offering one of the most advanced testing platforms available. It features 7 different test forms that simulate the real exam, along with a question bank containing nearly 3,000 questions. These can be taken in Standard Mode or SA Mode, which closely mimics the real exam experience.</p>
                <p>What truly sets NextStepsUSMLE apart is its flexibility: it's the only platform that allows students to create customized tests with up to 7 blocks in SA Mode, providing a highly personalized and comprehensive study experience.</p>
            </div>
        )
    }
];

const FAQSection = () => {
    return (
        <section id="faq" className="py-24 bg-background border-t border-border">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-muted/30 border border-border rounded-xl px-6 transition-all hover:bg-muted/50 data-[state=open]:bg-muted/50 data-[state=open]:border-primary/20"
                            >
                                <AccordionTrigger className="text-left py-6 hover:no-underline font-semibold text-lg hover:text-primary transition-colors">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
