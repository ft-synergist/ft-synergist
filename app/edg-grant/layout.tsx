
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "EDG Grant Advisory & Eligibility | FT Synergist",
    description: "Check your eligibility for the Enterprise Development Grant (EDG). FT Synergist helps Singapore SMEs secure up to 50% funding for strategic growth and expansion projects.",
};

export default function EDGGrantLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
