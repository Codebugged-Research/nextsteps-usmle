import { Link } from "react-router-dom";
import { ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
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
                <div className="prose prose-slate max-w-none">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                            <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl font-bold mb-4 text-foreground">Privacy Policy</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Your privacy is important to us. This policy outlines how we collect, use, and protect your data.
                        </p>
                    </div>

                    <div className="space-y-8 text-muted-foreground">
                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Who We Are</h2>
                            <p>
                                Before knowing about our privacy policy, let's know who we are. At <strong>Next Steps</strong>, we help USMLE aspirants from scratch to match. We provide guidance for Step 1, Step 2CK, CV building, Clinical Rotations, and Residency Match Strategy.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Comments</h2>
                            <p>
                                When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor's IP address and browser user agent string to help spam detection.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Media</h2>
                            <p>
                                If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Cookies</h2>
                            <p className="mb-4">
                                If you leave a comment on our site you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
                            </p>
                            <p className="mb-4">
                                If you visit our home page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                            </p>
                            <p>
                                If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Embedded Content from Other Websites</h2>
                            <p className="mb-4">
                                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                            </p>
                            <p>
                                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Who Do We Share Your Data With</h2>
                            <p>
                                We will gather and utilize individual data singularly to satisfy those reasons indicated by us and for other good purposes unless we get the consent of the individual concerned or as required by law.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">How Long We Retain Your Data</h2>
                            <p className="mb-4">
                                If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
                            </p>
                            <p>
                                For users who register on our website (if any), we also store the personal information they provide in their user profile. Website administrators can also see and edit that information.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">What Rights Do You Have Over Your Data</h2>
                            <p>
                                If you have an account on this site or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-foreground">Where Your Data Is Sent</h2>
                            <p>
                                Visitor comments may be checked through an automated spam detection service.
                            </p>
                        </section>

                        <div className="bg-muted/50 rounded-lg p-6 mt-8">
                            <h3 className="text-lg font-semibold text-foreground mb-3">Contact Us</h3>
                            <p className="mb-4">
                                If you have any questions or concerns about our privacy policy, please contact us:
                            </p>
                            <div className="space-y-2 text-sm">
                                <p>
                                    <strong>Email:</strong>{" "}
                                    <a href="mailto:admin@nextstepsusmle.com" className="text-primary hover:underline">
                                        admin@nextstepsusmle.com
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

                        <div className="text-center space-y-4 mt-8">
                            <p className="text-sm text-muted-foreground">
                                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                            </p>
                            <p className="text-sm">
                                For our complete terms and conditions, visit our{" "}
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
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
