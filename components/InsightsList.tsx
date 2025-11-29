"use client";

import { useState } from "react";
import { FileText, Download, Calendar } from "lucide-react";
import { LeadCaptureModal } from "@/components/LeadCaptureModal";
import { Report } from "@/lib/data";

interface InsightsListProps {
    initialReports: Report[];
}

export function InsightsList({ initialReports }: InsightsListProps) {
    const [selectedReport, setSelectedReport] = useState<Report | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleDownloadClick = (report: Report) => {
        setSelectedReport(report);
        setIsModalOpen(true);
    };

    const handleDownloadSuccess = () => {
        alert(`Thank you! The report "${selectedReport?.title}" has been sent to your email.`);
    };

    return (
        <div className="min-h-screen bg-secondary/5 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Insights & Reports</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Stay ahead of the curve with our latest research, whitepapers, and industry analysis.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {initialReports.map((report) => (
                        <div key={report.id} className="group flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50">
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <FileText className="h-6 w-6" />
                            </div>

                            <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                                <span className="rounded-full bg-secondary px-2 py-1 font-medium text-secondary-foreground">
                                    {report.category}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-3 w-3" />
                                    {report.date}
                                </span>
                            </div>

                            <h3 className="mb-2 text-xl font-bold group-hover:text-primary transition-colors">
                                {report.title}
                            </h3>
                            <p className="mb-6 flex-grow text-sm text-muted-foreground">
                                {report.description}
                            </p>

                            <button
                                onClick={() => handleDownloadClick(report)}
                                className="mt-auto flex w-full items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground group-hover:border-primary/50"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download Report
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <LeadCaptureModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                reportTitle={selectedReport?.title || ""}
                driveLink={selectedReport?.driveLink}
                onSuccess={handleDownloadSuccess}
            />
        </div>
    );
}
