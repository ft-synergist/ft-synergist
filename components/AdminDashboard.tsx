"use client";

import { useState } from "react";
import { Event, Report } from "@/lib/data";
import { updateEventsAction, updateReportsAction } from "@/app/actions";
import { Loader2, Plus, Trash2, Save, LogOut } from "lucide-react";

interface AdminDashboardProps {
    initialEvents: Event[];
    initialReports: Report[];
}

export function AdminDashboard({ initialEvents, initialReports }: AdminDashboardProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState("");
    const [activeTab, setActiveTab] = useState<"events" | "reports">("events");

    const [events, setEvents] = useState<Event[]>(initialEvents);
    const [reports, setReports] = useState<Report[]>(initialReports);
    const [isSaving, setIsSaving] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "admin123") { // Simple hardcoded password for MVP
            setIsAuthenticated(true);
        } else {
            alert("Invalid password");
        }
    };

    const handleSaveEvents = async () => {
        setIsSaving(true);
        await updateEventsAction(events);
        setIsSaving(false);
        alert("Events saved successfully!");
    };

    const handleSaveReports = async () => {
        setIsSaving(true);
        await updateReportsAction(reports);
        setIsSaving(false);
        alert("Reports saved successfully!");
    };

    const addEvent = () => {
        const newEvent: Event = {
            id: Date.now(),
            title: "New Event",
            date: "YYYY-MM-DD",
            time: "00:00 AM - 00:00 PM",
            location: "Location",
            type: "Online",
            description: "Description",
        };
        setEvents([...events, newEvent]);
    };

    const addReport = () => {
        const newReport: Report = {
            id: Date.now(),
            title: "New Report",
            description: "Description",
            date: "MMM YYYY",
            category: "Category",
            driveLink: "",
        };
        setReports([...reports, newReport]);
    };

    const deleteEvent = (id: number) => {
        setEvents(events.filter(e => e.id !== id));
    };

    const deleteReport = (id: number) => {
        setReports(reports.filter(r => r.id !== id));
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full border p-2 rounded mb-4"
                    />
                    <button type="submit" className="w-full bg-primary text-white p-2 rounded hover:bg-primary/90">
                        Login
                    </button>
                    <p className="text-xs text-center mt-4 text-gray-400">Hint: admin123</p>
                </form>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                    <button onClick={() => setIsAuthenticated(false)} className="flex items-center text-red-500 hover:text-red-700">
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                    </button>
                </div>

                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <div className="flex border-b">
                        <button
                            className={`px-6 py-4 font-medium ${activeTab === "events" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                            onClick={() => setActiveTab("events")}
                        >
                            Manage Events
                        </button>
                        <button
                            className={`px-6 py-4 font-medium ${activeTab === "reports" ? "border-b-2 border-primary text-primary" : "text-gray-500"}`}
                            onClick={() => setActiveTab("reports")}
                        >
                            Manage Insights
                        </button>
                    </div>

                    <div className="p-6">
                        {activeTab === "events" ? (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-semibold">Events List</h2>
                                    <div className="flex gap-2">
                                        <button onClick={addEvent} className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                                            <Plus className="w-4 h-4 mr-2" /> Add Event
                                        </button>
                                        <button onClick={handleSaveEvents} disabled={isSaving} className="flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                                            {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />} Save Changes
                                        </button>
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    {events.map((event, index) => (
                                        <div key={event.id} className="border p-4 rounded-lg bg-gray-50">
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <input
                                                    value={event.title}
                                                    onChange={(e) => {
                                                        const newEvents = [...events];
                                                        newEvents[index].title = e.target.value;
                                                        setEvents(newEvents);
                                                    }}
                                                    className="border p-2 rounded"
                                                    placeholder="Event Title"
                                                />
                                                <input
                                                    value={event.date}
                                                    onChange={(e) => {
                                                        const newEvents = [...events];
                                                        newEvents[index].date = e.target.value;
                                                        setEvents(newEvents);
                                                    }}
                                                    className="border p-2 rounded"
                                                    placeholder="Date"
                                                />
                                                <input
                                                    value={event.time}
                                                    onChange={(e) => {
                                                        const newEvents = [...events];
                                                        newEvents[index].time = e.target.value;
                                                        setEvents(newEvents);
                                                    }}
                                                    className="border p-2 rounded"
                                                    placeholder="Time"
                                                />
                                                <input
                                                    value={event.location}
                                                    onChange={(e) => {
                                                        const newEvents = [...events];
                                                        newEvents[index].location = e.target.value;
                                                        setEvents(newEvents);
                                                    }}
                                                    className="border p-2 rounded"
                                                    placeholder="Location"
                                                />
                                                <select
                                                    value={event.type}
                                                    onChange={(e) => {
                                                        const newEvents = [...events];
                                                        newEvents[index].type = e.target.value;
                                                        setEvents(newEvents);
                                                    }}
                                                    className="border p-2 rounded"
                                                >
                                                    <option value="In-Person">In-Person</option>
                                                    <option value="Online">Online</option>
                                                </select>
                                                <textarea
                                                    value={event.description}
                                                    onChange={(e) => {
                                                        const newEvents = [...events];
                                                        newEvents[index].description = e.target.value;
                                                        setEvents(newEvents);
                                                    }}
                                                    className="border p-2 rounded col-span-2"
                                                    placeholder="Description"
                                                    rows={2}
                                                />
                                            </div>
                                            <button onClick={() => deleteEvent(event.id)} className="text-red-500 text-sm hover:underline flex items-center">
                                                <Trash2 className="w-3 h-3 mr-1" /> Delete Event
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-xl font-semibold">Insights List</h2>
                                    <div className="flex gap-2">
                                        <button onClick={addReport} className="flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                                            <Plus className="w-4 h-4 mr-2" /> Add Report
                                        </button>
                                        <button onClick={handleSaveReports} disabled={isSaving} className="flex items-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
                                            {isSaving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />} Save Changes
                                        </button>
                                    </div>
                                </div>

                                <div className="grid gap-4">
                                    {reports.map((report, index) => (
                                        <div key={report.id} className="border p-4 rounded-lg bg-gray-50">
                                            <div className="grid grid-cols-2 gap-4 mb-4">
                                                <input
                                                    value={report.title}
                                                    onChange={(e) => {
                                                        const newReports = [...reports];
                                                        newReports[index].title = e.target.value;
                                                        setReports(newReports);
                                                    }}
                                                    className="border p-2 rounded"
                                                    placeholder="Report Title"
                                                />
                                                <input
                                                    value={report.date}
                                                    onChange={(e) => {
                                                        const newReports = [...reports];
                                                        newReports[index].date = e.target.value;
                                                        setReports(newReports);
                                                    }}
                                                    className="border p-2 rounded"
                                                    placeholder="Date"
                                                />
                                                <input
                                                    value={report.category}
                                                    onChange={(e) => {
                                                        const newReports = [...reports];
                                                        newReports[index].category = e.target.value;
                                                        setReports(newReports);
                                                    }}
                                                    className="border p-2 rounded"
                                                    placeholder="Category"
                                                />
                                                <input
                                                    value={report.driveLink || ""}
                                                    onChange={(e) => {
                                                        const newReports = [...reports];
                                                        newReports[index].driveLink = e.target.value;
                                                        setReports(newReports);
                                                    }}
                                                    className="border p-2 rounded"
                                                    placeholder="Google Drive Link (Required for direct download)"
                                                />
                                                <textarea
                                                    value={report.description}
                                                    onChange={(e) => {
                                                        const newReports = [...reports];
                                                        newReports[index].description = e.target.value;
                                                        setReports(newReports);
                                                    }}
                                                    className="border p-2 rounded col-span-2"
                                                    placeholder="Description"
                                                    rows={2}
                                                />
                                            </div>
                                            <button onClick={() => deleteReport(report.id)} className="text-red-500 text-sm hover:underline flex items-center">
                                                <Trash2 className="w-3 h-3 mr-1" /> Delete Report
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
