"use client";

import React from 'react';
import { useConsent } from '@/components/providers/ConsentProvider';

export default function PrivacyPolicy() {
    const { togglePreferences } = useConsent();

    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8">FT Synergist Privacy Policy</h1>

            <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-6">
                    FT Synergist and its affiliates ("FT Synergist," "we," or "us") are committed to protecting your privacy and personal data in strict compliance with the Singapore Personal Data Protection Act 2012 (PDPA). This Privacy Policy describes how we collect, use, disclose, and manage your personal data when you interact with our websites, digital platforms (collectively, our "Sites"), and through our external business activities, and how we uphold the principles of data protection and accountability.
                </p>
                <p className="mb-6">
                    By interacting with our Sites or providing your personal data, you acknowledge and consent to the practices described in this Privacy Policy.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 my-8">
                    <h2 className="text-xl font-bold mb-4">FT Synergist Data Protection Officer (DPO) Contact</h2>
                    <p className="mb-4">
                        In accordance with the PDPA Accountability Obligation, FT Synergist has designated a Data Protection Officer (DPO) whose business contact information is publicly available to facilitate access, correction, and withdrawal of consent requests.
                    </p>
                    <p className="mb-4">
                        For all enquiries, feedback, or to exercise your statutory data protection rights, please contact the DPO directly:
                    </p>
                    <ul className="list-none space-y-2">
                        <li><strong>Designated DPO:</strong> Frederick Tan</li>
                        <li><strong>DPO Email:</strong> <a href="mailto:fredtan@ftsynergist.com" className="text-primary hover:underline">fredtan@ftsynergist.com</a></li>
                        <li><strong>DPO Phone:</strong> +65 98628906</li>
                        <li><strong>Mailing Address:</strong> 6 Eu Tong Sen St, #10-20 The Central, Singapore 059817</li>
                    </ul>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">1. Definitions and Scope</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">A. Personal Data Defined</h3>
                <p className="mb-4">
                    "Personal data" means data, whether true or not, about an individual who can be identified: (a) from that data; or (b) from that data and other information to which we have or are likely to have access. Examples we may collect include name, contact information, employment information, and digital identifiers (IP address, device ID).
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">B. Business Contact Information (BCI) Exemption</h3>
                <p className="mb-4">
                    Under the PDPA, Business Contact Information (BCI) (e.g., an individual's full name, job title, business contact number, business address, business email address) is generally not considered personal data when collected, used, or disclosed solely for business-to-business (B2B) transactions.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">C. Data Controller and DPO</h3>
                <p className="mb-4">
                    FT Synergist acts as the Data Controller for the personal data collected, determining the purposes and means of processing your data. The DPO is responsible for overseeing compliance with the PDPA.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Collect Your Personal Data</h2>
                <p className="mb-4">
                    We collect personal data that identifies or can reasonably be used to identify you. We will only collect data that has been provided to us voluntarily by you directly or via a duly authorised third party, after you have been notified of the purposes for which the data is collected and consent has been obtained.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">A. Data Collected Directly From You</h3>
                <p className="mb-4">We collect this data when you voluntarily provide it through:</p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Forms and Submissions:</strong> Contact forms, service requests, and registration forms.</li>
                    <li><strong>Correspondence:</strong> Email, phone, or in-person interactions.</li>
                    <li><strong>Job Applications:</strong> Information submitted for employment or internship purposes (with specific retention limits outlined in Section 7).</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-3">B. Data Collected Indirectly and Automatically (Digital Mechanisms)</h3>
                <p className="mb-4">
                    We collect digital data automatically when you interact with our Sites. This includes data collected through cookies and tracking technologies, such as IP address, browser type, and usage patterns. We rely on your explicit consent via a Consent Management Platform (CMP) for the collection of this data for non-essential purposes (e.g., targeted advertising, analytics) before it is processed.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">3. Purposes for Using Your Personal Data (Notification and Purpose Limitation)</h2>
                <p className="mb-4">
                    We will only collect, use, and disclose your personal data for purposes that we have notified you of and for which you have consented, or where otherwise authorized by the PDPA.
                </p>
                <div className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse border border-gray-300 text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2 text-left">Purpose Category</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Categories of Personal Data Used</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Legal Basis (PDPA)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Service Delivery & Relationship Management</td>
                                <td className="border border-gray-300 px-4 py-2">Name, Contact Information, Company, Job Title, Inquiry Details, Billing Information</td>
                                <td className="border border-gray-300 px-4 py-2">Legitimate Interest; Contract Fulfillment</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Recruitment and Human Resources</td>
                                <td className="border border-gray-300 px-4 py-2">CV, Educational Background, Employment Information</td>
                                <td className="border border-gray-300 px-4 py-2">Consent; Legitimate Interest (Job processing)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Marketing and Communications</td>
                                <td className="border border-gray-300 px-4 py-2">Name, Email Address, Subscription Preferences, Browsing Behavior (with consent)</td>
                                <td className="border border-gray-300 px-4 py-2">Consent (Opt-In Required)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Website Performance & Security</td>
                                <td className="border border-gray-300 px-4 py-2">IP Address, Device ID, Aggregate Usage Data, Activity Logs</td>
                                <td className="border border-gray-300 px-4 py-2">Legitimate Interest (Ensuring security and functionality)</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">Compliance and Legal</td>
                                <td className="border border-gray-300 px-4 py-2">Data specific to the legal requirement</td>
                                <td className="border border-gray-300 px-4 py-2">Legal Obligation (e.g., assisting in law enforcement)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mb-4">
                    We will notify you and obtain fresh consent before using your personal data for any new purpose that has not been previously notified.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">4. Consent and Withdrawal of Consent (Opt-Out Rights)</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">A. Valid Consent</h3>
                <p className="mb-4">
                    Consent is required before collecting, using, or disclosing your personal data unless permitted by law. Consent is not valid if it is obtained through deception or if it is a mandatory condition for providing a product or service beyond what is reasonably necessary.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">B. Withdrawal of Consent</h3>
                <p className="mb-4">
                    You maintain the statutory right to withdraw your consent to the collection, use, or disclosure of your personal data for any purpose, or all purposes, at any time.
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Submission of Request:</strong> Withdrawal requests must be submitted in writing (email is acceptable) to the Data Protection Officer (DPO) using the contact information provided in this Policy.</li>
                    <li><strong>Processing Timeline:</strong> We will seek to process your request within ten (10) business days of receiving it. Should we require a longer time (up to 30 days) due to complexity, we will notify you of the expected timeline.</li>
                    <li><strong>Legal Exception:</strong> Withdrawal of consent does not affect our right to continue to collect, use, or disclose personal data where such processing without consent is permitted or required under applicable laws.</li>
                </ul>

                <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 my-8">
                    <h3 className="text-lg font-bold mb-3 text-primary">Manage Your Cookie Preferences</h3>
                    <p className="mb-4 text-sm">
                        You can manage your digital consent preferences directly through our Consent Management Platform.
                    </p>
                    <button
                        onClick={() => togglePreferences(true)}
                        className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
                    >
                        Open Cookie Preferences
                    </button>
                </div>

                <h2 className="text-2xl font-bold mt-8 mb-4">5. Disclosure of Personal Data and International Transfers</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">A. Disclosure to Third Parties</h3>
                <p className="mb-4">
                    We may disclose your personal data with your consent to third-party service providers, agents, and other organizations we have engaged to perform functions on our behalf (e.g., IT support, marketing agencies). Any third party engaged by us will be contractually bound to keep all personal data confidential and implement necessary security measures.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">B. Data Intermediary Clause</h3>
                <p className="mb-4">
                    If your request (access, correction, or withdrawal) relates to personal data which we are processing on behalf of another organization (acting as a Data Intermediary), we will forward your request to the relevant organization for their necessary action.
                </p>
                <h3 className="text-xl font-semibold mt-6 mb-3">C. Transfer Limitation Obligation</h3>
                <p className="mb-4">
                    Unless for necessary business-related needs, we generally do not transfer your personal data outside of Singapore. If we do so, we will take steps to ensure that your personal data continues to receive a standard of protection that is at least comparable to that provided under the PDPA, including entering into an agreement with the receiving party to accord similar levels of data protection as those in Singapore.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">6. Data Protection and Security</h2>
                <p className="mb-4">
                    We adhere to the Protection Obligation by implementing appropriate administrative, physical, and technical measures to safeguard personal data from unauthorized risks. These measures include up-to-date antivirus protection, encryption, and the use of privacy filters to secure data storage and transmission, and we disclose personal data only on a need-to-know basis. We are constantly reviewing and enhancing our information security measures.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">7. Retention Limitation and Unsolicited Data</h2>
                <h3 className="text-xl font-semibold mt-6 mb-3">A. Retention Limitation</h3>
                <p className="mb-4">
                    We will retain your personal data only for as long as it is necessary to fulfil the purpose(s) for which it was collected, or as required or permitted by applicable laws. Once the retention limit is reached, we dispose of or destroy the data in a secure manner.
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Post-Termination:</strong> The purposes for which we collect data may continue to apply even if your relationship with us has been terminated, for a reasonable period thereafter (e.g., to enforce our rights under a contract).</li>
                    <li><strong>Job Applicants:</strong> Personal data submitted for job applications will be retained for a maximum of six (6) months from the application date, after which it will be securely disposed of, unless specific consent for longer retention is obtained.</li>
                </ul>
                <h3 className="text-xl font-semibold mt-6 mb-3">B. Handling Unsolicited Data</h3>
                <p className="mb-4">
                    In the case where we receive unsolicited personal data via email or any other communication channels, the unsolicited personal data will not be retained and will be securely disposed of immediately.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">8. Your Data Protection Rights (Access, Correction, and Portability)</h2>
                <p className="mb-4">
                    You may submit a request in writing or via email to our Data Protection Officer (DPO) to exercise the following statutory rights:
                </p>
                <ul className="list-disc pl-6 mb-4">
                    <li><strong>Access Request:</strong> To request access to a copy of the personal data we hold about you or information about the ways we use or disclose it. A reasonable administrative fee may be charged for an access request, and you will be informed of this fee before we process the request.</li>
                    <li><strong>Correction Request:</strong> To correct or update any of your personal data which we hold about you, ensuring adherence to the Accuracy Obligation. We generally rely on personal data provided by you, and you must update us if there are changes to your personal data.</li>
                    <li><strong>Data Portability Request:</strong> To request a copy of your personal data in a structured, commonly used, and machine-readable format to transmit to another organization.</li>
                </ul>
                <p className="mb-4">
                    <strong>Response Timeline:</strong> We will respond to your access or correction request as soon as reasonably possible, and within thirty (30) days of receiving your request. If we require more time, we will inform you in writing of the time by which we will be able to respond.
                </p>

                <h2 className="text-2xl font-bold mt-8 mb-4">9. Data Breach Notification</h2>
                <p className="mb-4">
                    In the event of a breach of security leading to accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data, we will promptly assess the impact. Where the data breach is determined to be notifiable, we will report it to the Personal Data Protection Commission (PDPC) within 3 calendar days of becoming aware of the breach and notify affected parties if the breach is likely to result in significant harm to them.
                </p>
            </div>
        </div>
    );
}
