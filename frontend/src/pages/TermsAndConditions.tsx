import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const TermsAndConditions = () => {
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
                    <h1 className="text-4xl font-bold mb-8 text-foreground">Terms and Conditions</h1>

                    <div className="space-y-6 text-muted-foreground">
                        <p>
                            These terms and conditions apply to Packages provided by Next Steps Career Corporation 30 N Gould St, STE R, Sheridan, WY 82801 ("Next Steps" or "we" or "us").
                        </p>

                        <p>
                            You may contact us on <a href="mailto:usmle@nextstepscareer.com" className="text-primary hover:underline">usmle@nextstepscareer.com</a> and/or +1 214 306 6111 or local office telephone number.
                        </p>

                        <p>
                            These terms and conditions are in addition to the disclaimer and apply to the sale of any training package for USMLE. Please read these terms and conditions carefully before purchasing package(s) and print off a copy for your records.
                        </p>

                        <p>
                            If there is any conflict between our any package specific terms and conditions which might apply to a specific package then the conflict shall be resolved by applying the following order of priority:
                        </p>

                        <ul className="list-disc pl-6">
                            <li>Package Specific Terms and Conditions</li>
                            <li>These Standard Terms for the USMLE Training Packages</li>
                        </ul>

                        <p>
                            For purchases via our website or payment links, by clicking on the "Display agreement to legal terms" checkbox you agree to the terms of this agreement which will bind you. If you do not agree to these terms and conditions, you must cease to continue to purchase any Packages from us.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">1. Definitions</h2>
                        <p>
                            <strong>"Confidential Information"</strong> means information provided by one party to the other in written, graphic, recorded, machine readable or other form concerning the business, clients, suppliers, finances and other areas of the other party's business or products, including, without limitation, the course materials, but does not include information in the public domain other than through the default of the party disclosing the information, information required to be disclosed by any court or regulatory authority, or any information already in the possession or control of the disclosing party.
                        </p>

                        <p>
                            <strong>"Course Materials"</strong> means the information provided by Next Steps to accompany a course provided as part of the Packages in hard copy or electronic form.
                        </p>

                        <p>
                            <strong>"Fees"</strong> means the fees paid by you to Next Steps for the Packages.
                        </p>

                        <p>
                            <strong>"Intellectual Property Rights"</strong> means copyright, rights in or relating to databases, patent rights, performers' rights, designs and registered designs, trademarks, rights in or relating to Confidential Information and other intellectual property rights (registered or unregistered) throughout the world.
                        </p>

                        <p>
                            <strong>"Online Course"</strong> means the delivery by us of an online course pursuant to which you learn course materials remotely.
                        </p>

                        <p>
                            <strong>"Packages"</strong> means the provision of the training and/or the training materials together with such other Packages as agreed from time to time and purchased by you through the website or by email or by telephone.
                        </p>

                        <p>
                            <strong>"Taught Course"</strong> means a course taught by us in a classroom setting to which you attend in person.
                        </p>

                        <p>
                            <strong>"Website"</strong> means www.nextstepscareer.com, and www.app.nextstepscareer.com
                        </p>

                        <p>
                            <strong>"you"</strong> means the individual purchasing the Packages.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">2. The Packages</h2>
                        <p>
                            <strong>2.1.</strong> A description of the Packages together with the dates on which the Packages will begin are indicated below. We will provide the Packages with reasonable care and skill in accordance with the description set out on the website.
                        </p>
                        <p>
                            <strong>2.2.</strong> We reserve the right to vary or withdraw any of the Packages described on the Website without notice.
                        </p>
                        <p>
                            <strong>2.3.</strong> We expect you to confirm that the Packages you are purchasing will meet your needs. We do not make any guarantee to you that you will obtain a particular result, professional qualification or employment opportunity from your purchase and completion of any of the Packages.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">3. Ordering Packages</h2>
                        <p>
                            <strong>3.1.</strong> In order to purchase any of the Packages on-line you must register for an account with us via the website.
                        </p>
                        <p>
                            <strong>3.2.</strong> To purchase a package over the telephone please call +1 214 306 6111 or local office telephone number. You do not need to have registered for an account with us to purchase any of the Packages over the telephone. You must, however, register for an account with us to access your course on-line.
                        </p>
                        <p>
                            <strong>3.3.</strong> When you place an order for a Service via the website, or telephone you are offering to purchase the Packages on these terms and conditions. Next Steps reserves the right to cancel or decline your order or any part of your order at any time until it has been confirmed in accordance with clause 3.5 below.
                        </p>
                        <p>
                            <strong>3.4.</strong> Following receipt by us of your order for Packages via the website or on the telephone we will contact you confirming receipt of your order.
                        </p>
                        <p>
                            <strong>3.5.</strong> A legally binding agreement between us and you shall come into existence when we have:
                        </p>
                        <p className="pl-6">
                            <strong>3.5.1.</strong> accepted your offer to purchase Packages from us by sending you an email confirming the purchase; and
                        </p>
                        <p className="pl-6">
                            <strong>3.5.2.</strong> received payment of the relevant Fees from you in accordance with clause 5 below.
                        </p>
                        <p>
                            <strong>3.6.</strong> Next Steps does not and is not responsible for booking any examination with any professional body or examination board. It is your responsibility to ensure that you book prior to the relevant closing date any exam necessary that you wish to take and which may or may not be associated with the subject matter of the Packages provided to you by Next Steps.
                        </p>
                        <p>
                            <strong>3.7.</strong> Next Steps is not responsible for booking of visa slots or obtaining financial statements for US visa application. Next Steps only provides professional credentials documentation for visa application.
                        </p>
                        <p>
                            <strong>3.8.</strong> If the student chooses to commit to the rotation program in advance, he/she may be required to make an upfront payment for the rotation fee from their package. The rotation fee will be discussed with your upcoming coordinator prior to the rotation period.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">4. Cancellation and Variation</h2>
                        <p>
                            <strong>4.1.</strong> Subject to clause 4.2 below, where we have accepted / confirmed the packages being purchased by you and formed a legally binding agreement with you in accordance with clause 3.5 above, then you are permitted within 7 calendar days starting on the day after the date we have concluded our agreement in accordance with clause 3.4, to cancel your purchase of the packages.
                        </p>
                        <p>
                            <strong>4.2.</strong> If you have purchased an online course and have already accessed, downloaded all or part of the online course and/or started to use that online course then you shall have no right to cancel your order.
                        </p>
                        <p>
                            <strong>4.3.</strong> If you have already accessed training material provided to you as part of your purchase you shall have no right to cancel your order.
                        </p>
                        <p>
                            <strong>4.4.</strong> Notwithstanding clause 4.1 there is no other right to cancel or vary your purchase of Packages and any other cancellation and / or variation of course dates will be at the entire discretion of Next Steps.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">5. Fees</h2>
                        <p>
                            <strong>5.1.</strong> The Fees for the packages shall be as set out on the website or as told to you over the telephone at the time you placed an order for them.
                        </p>
                        <p>
                            <strong>5.2.</strong> Unless otherwise specified at the time you purchase the Packages the Fees are exclusive of VAT or other local taxes, the cost of some course Materials and any delivery costs payable in respect of the delivery of course material to you. Each of these costs will be set out on the website or told to you over the telephone prior to your purchase the Packages.
                        </p>
                        <p>
                            <strong>5.3.</strong> Save where specifically stated otherwise on the Website, all Fees shall be exclusive of any amounts payable to any professional body for registration and examination entry. These are payable by you directly to the relevant professional body or examination board and we accept no responsibility or liability for your failure to book your exam with the relevant professional body or examination.
                        </p>
                        <p>
                            <strong>5.4.</strong> Fees for the Packages selected by you on the website or purchased over the telephone shall be debited from your credit / debit card at the time of purchase. Enrolment Fees must be paid in full prior to you attending any course or accessing any training material.
                        </p>
                        <p>
                            <strong>5.5.</strong> Any fees charged by your debit or credit card provider in connection with your purchase of Packages are for your own account and Next Steps shall not be responsible for these.
                        </p>
                        <p>
                            <strong>5.6.</strong> You shall be responsible for all costs you incur in connection with your attendance at any in person attendance including but not limited to costs of travel and accommodation.
                        </p>
                        <p>
                            <strong>5.7.</strong> The delay fee for this service is 1% per week, meaning that for every week of delay, a penalty of 1% of the total amount will be charged.
                        </p>
                        <p>
                            <strong>5.8.</strong> Please note that the registration/enrollment fee you have paid is non-refundable. For any further inquiries, feel free to contact us.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">6. Liability</h2>
                        <p>
                            <strong>6.1.</strong> No part of the provision of the Packages shall be deemed to be, nor is it intended to be, nor should it be taken to be, the provision of investment advice.
                        </p>
                        <p>
                            <strong>6.2.</strong> Although Next Steps aims to provide the Packages to the highest standards of the industry, neither it, nor its trainers accept any liability for (i) any inaccuracy or misleading information provided in the courses or course materials and any reliance by Client on any such information, (ii) any loss or corruption of data, (iii) any loss of profit, revenue or goodwill, or (iv) any indirect, special or consequential loss arising from any breach of the terms of this Agreement.
                        </p>
                        <p>
                            <strong>6.3.</strong> Except to the extent that they are expressly set out in these terms and conditions, no conditions, warranties or other terms shall apply to the Packages. Subject to clause 6.5 no implied conditions, warranties or other terms apply (including any implied terms as to satisfactory quality, fitness for purpose or conformance with description).
                        </p>
                        <p>
                            <strong>6.4.</strong> Next Steps total liability arising from or in connection with these terms and conditions and in relation to anything which we may have done or not done in connection with these terms and conditions and the delivery of the Service (and whether the liability arises because of breach of contract, negligence or for any other reason) shall be limited to the Fees received by us in connection with the relevant Package in relation to which a dispute has arisen.
                        </p>
                        <p>
                            <strong>6.5.</strong> No claim may be brought more than six months after the last date on which the Packages concerned have finished or ceased to be provided by us.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">7. Intellectual Property</h2>
                        <p>
                            <strong>7.1.</strong> All Intellectual Property Rights in the Course Materials, Online Courses and the speeches made by trainers at the Taught Courses are, and remain, the intellectual property of Next Steps or its licensors, whether adapted, written for or customized for the Client or not.
                        </p>
                        <p>
                            <strong>7.2.</strong> You are not authorized to:
                        </p>
                        <p className="pl-6">
                            <strong>7.2.1.</strong> copy, modify, reproduce, re-publish, sub-license, sell, upload, broadcast, post, transmit or distribute any of the Course Materials without prior written permission
                        </p>
                        <p className="pl-6">
                            <strong>7.2.2.</strong> record on video or audio tape, relay by videophone or other means the Online Course or Taught Course given
                        </p>
                        <p className="pl-6">
                            <strong>7.2.3.</strong> Use the Course Materials in the provision of any other course or training whether given by us or any third party trainer
                        </p>
                        <p className="pl-6">
                            <strong>7.2.4.</strong> Remove any copyright or other notice of Next Steps on the Course Materials
                        </p>
                        <p className="pl-6">
                            <strong>7.2.5.</strong> Modify, adapt, merge, translate, disassemble, decompile, reverse engineer (save to the extent permitted by law) any software forming part of the Online Courses.
                        </p>
                        <p>
                            <strong>7.3.</strong> Breach by you of this clause 7.2 shall allow us to immediately terminate these terms and conditions with you and cease to provide you with any Packages, including but not limited to access to the Online Courses.
                        </p>
                        <p>
                            <strong>7.4.</strong> In consideration of the Fees paid by you, we grant to you a limited, non-transferable, non-exclusive license to use the Course Materials and the software in respect of the Online Course for the sole purpose of completing the Online Course and / or attending the Taught Course.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">8. Confidentiality</h2>
                        <p>
                            <strong>8.1.</strong> Each party shall keep the other party's Confidential Information strictly confidential and not use it otherwise than for the purposes of these terms and conditions, and shall return it on demand and not retain copies of it.
                        </p>
                        <p>
                            <strong>8.2.</strong> Either party may disclose Confidential Information to its legal and other advisors for the purposes of obtaining advice from them.
                        </p>
                        <p>
                            <strong>8.3.</strong> This clause shall continue notwithstanding termination of these terms and conditions.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">9. Termination</h2>
                        <p>
                            <strong>9.1.</strong> We shall be entitled to terminate these terms and conditions and cease to provide you with any Packages with immediate effect in the event that you:
                        </p>
                        <p className="pl-6">
                            <strong>9.1.1.</strong> Fail to pay when due your Fees
                        </p>
                        <p className="pl-6">
                            <strong>9.1.2.</strong> Act in an aggressive, bullying, offensive, threatening or harassing manner towards any employee of Next Steps, any teacher or lecturer who provides the Taught Courses or any student who attends any Taught Course
                        </p>
                        <p className="pl-6">
                            <strong>9.1.3.</strong> Cheat or plagiarize any work which you are required to prepare or submit in connection with the Packages or during any examination taken in connection with the Packages
                        </p>
                        <p className="pl-6">
                            <strong>9.1.4.</strong> Steal or act in fraudulent or deceitful manner towards us or our employees or any other students who may be on our premises or attending our Taught Courses
                        </p>
                        <p className="pl-6">
                            <strong>9.1.5.</strong> Intentionally or recklessly damage our property or the property of our employees or other students attending our premises
                        </p>
                        <p className="pl-6">
                            <strong>9.1.6.</strong> Are intoxicated through alcohol or illegal drugs while on our premises
                        </p>
                        <p className="pl-6">
                            <strong>9.1.7.</strong> Commit any criminal offence committed on our premises or where the victim is our employee or student
                        </p>
                        <p className="pl-6">
                            <strong>9.1.8.</strong> Are in breach of these terms and conditions.
                        </p>
                        <p>
                            <strong>9.2.</strong> On termination clause 6 (liability), 7 (intellectual property rights), 8 (confidentiality) and 10 (restrictions) shall continue notwithstanding such termination.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">10. Assignment</h2>
                        <p>
                            Any Packages provided by us under these terms and conditions are personal to you and cannot be transferred or assigned to any other person. We shall be entitled to assign these terms and conditions to any other company without prior notice to you.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">11. Disclaimer</h2>
                        <p>
                            Before proceeding with the payment for registration or enrolment, please carefully review the terms and conditions.
                        </p>
                        <ul className="list-disc pl-6">
                            <li>Once the quotation, including dates and installment plans, has been finalized, your coordinator or finance team does not have the authority to modify it.</li>
                            <li>The next installment must be paid on or before the due date. Failure to do so will result in the immediate suspension of your course access. Please note that "Next Steps" does not control the Learning Management System (LMS) software. Payments should be made 4 days prior to the due date to smooth flow of course.</li>
                            <li>Due to any financial issues, you are allowed only 1 week grace period after the due date to pay instalments. After 1 week, a fine will be imposed without exception if payment is not made.</li>
                            <li>Any student intending to take a break or pause their program must inform their designated coordinator in advance. Additionally, the student is required to send an official email to support@nextstepsusmle.com clearly stating the duration and reason for the break. Failure to follow this protocol may result in administrative action and disruption of course access. No verbal communication will be considered valid without written confirmation.</li>
                            <li>To extend the break period, one installment must be paid to revise the installment dates. This change is allowed only once; further changes will incur additional charges. No exceptions will be made.</li>
                            <li><strong>No Refund Policy:</strong> Once the payment has been successfully made, it is non-refundable under any circumstances. We encourage students to carefully review the course details and policies before proceeding with enrollment or installment.</li>
                            <li><strong>No Course Downgrade or Degrade:</strong> After enrollment, students are not permitted to degrade, downgrade, or switch to a lower-tier course. Please ensure you are selecting the course that best fits your USMLE preparation needs.</li>
                            <li><strong>Agreement for Installments:</strong> Students are advised to proceed with the next installment only if they are fully satisfied with the coaching, services, and all the terms and conditions set by Next Steps. Continuing payment signifies your acceptance of these terms.</li>
                            <li>All students will have access to the Step 1 or Step 2 CK preparation for a period of 1 year.</li>
                            <li>Students enrolled in Step 1 + Step 2 CK, Primary, or Comprehensive courses will have extended access as per their package terms.</li>
                        </ul>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">12. Entire Agreement</h2>
                        <p>
                            These terms and conditions, together with the information on the website and Course Specific Terms and Conditions are the entire agreement between the parties and supersede any prior agreements and arrangements, whether written or oral. You confirm that you have not relied on any representations in entering these and any other terms and conditions with us. Nothing in this clause or terms and conditions shall limit liability for any fraudulent misrepresentation.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">13. Force Majeure</h2>
                        <p>
                            Next Steps shall not be liable to you for any breach of its obligations or termination under these terms and conditions arising from causes beyond its reasonable control, including, but not limited to, fires, floods, earthquakes, volcanoes and other Acts of God, terrorism, strikes, delay caused by transport disputes, failure to provide a course caused by a death in the trainer's family, illness of the trainer, Government edict or regulation.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">14. Assignment</h2>
                        <p>
                            We may assign, transfer, sub-contract any of our rights or obligations to any third party at our discretion.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">15. Data Protection</h2>
                        <p>
                            <strong>15.1.</strong> The nature of the Packages provided by us means that we will obtain, use and disclose (together "Use") certain information about you ("Data"). This statement sets out the principles governing our Use of Data. By purchasing the Packages you agree to this Use.
                        </p>
                        <p>
                            <strong>15.2.</strong> When you register with us you will need to provide certain Data such as your contact details and demographic information. We will store this Data and use it to contact you, provide you with details of the Packages you have purchased and otherwise as required during the normal provision of the course.
                        </p>
                        <p>
                            <strong>15.3.</strong> We may also use the above Data, and similar Data you provide us in response to surveys, to aggregate user profiles and, unless you click on the relevant button on the Registration Form, provide you with communications. We will not pass any personal data onto anyone outside of Next Steps.
                        </p>
                        <p>
                            <strong>15.4.</strong> To enable us to monitor and improve our Packages, we gather certain aggregated information about you, including details of your operating system, browser version, domain name and IP address, the URL you came from and go to and the parts of the Website you visit.
                        </p>
                        <p>
                            <strong>15.5.</strong> We use information such as your User ID, session identifiers and password to enable us to identify whether you are using our Packages, assist with the provision of Packages and to ensure that you have access to relevant products. We will only read cookies from your cookie file placed there through your web browser's interaction with the Website.
                        </p>
                        <p>
                            <strong>15.6.</strong> Our products may link to third party websites, and we are not responsible for their data policies or procedures or their content.
                        </p>
                        <p>
                            <strong>15.7.</strong> Next Steps endeavor to take all reasonable steps to protect your personal Data including the use of encryption technology but cannot guarantee the security of any Data you disclose. You accept the inherent security implications of being and transacting on line over the internet and will not hold us responsible for any breach of security.
                        </p>
                        <p>
                            <strong>15.8.</strong> Next Steps may supplement the information that you provide with information we receive from third parties, such as exam registration bodies or your employer.
                        </p>
                        <p>
                            <strong>15.9.</strong> If you wish to change or update the data we hold about you, please e-mail <a href="mailto:usmle@nextstepscareer.com" className="text-primary hover:underline">usmle@nextstepscareer.com</a> and/or +91 7619260054 or local office telephone number.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">16. Law and Jurisdiction</h2>
                        <p>
                            This Agreement is subject to USA law and the parties submit to the exclusive jurisdiction of the Wyoming courts in connection with any dispute hereunder.
                        </p>

                        <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground">17. Notices</h2>
                        <p>
                            You can contact us by any of the following methods:
                        </p>
                        <ul className="list-none pl-0">
                            <li><strong>Email:</strong> <a href="mailto:usmle@nextstepscareer.com" className="text-primary hover:underline">usmle@nextstepscareer.com</a></li>
                            <li><strong>Post:</strong> Next Steps Career Corporation 30 N Gould St, STE R, Sheridan, WY 82801, USA</li>
                            <li><strong>Telephone:</strong> +91 7619260054</li>
                        </ul>
                    </div>

                    <div className="mt-12 text-center">
                        <Button asChild variant="outline" size="lg">
                            <Link to="/">Return to Home</Link>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TermsAndConditions;
