import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Press Kit | Apprehension Play - Media Resources",
    description: "Press kit and media resources for Apprehension play. Download press releases, production photos, and contact information for media inquiries.",
    openGraph: {
        title: "Press Kit | Apprehension Play - Media Resources",
        description: "Media resources and press materials for the psychological thriller Apprehension.",
    },
};

export default function PressKit() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl">Press Kit</h1>

            <section className="space-y-6">
                <h2 className="text-2xl">Press Materials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border rounded-lg p-6">
                        <h3 className="text-xl mb-2">Press Release</h3>
                        <p className="text-gray-600 mb-4">Download our latest press release</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Download PDF
                        </button>
                    </div>
                    <div className="border rounded-lg p-6">
                        <h3 className="text-xl mb-2">Production Photos</h3>
                        <p className="text-gray-600 mb-4">High-resolution production photos</p>
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                            Download ZIP
                        </button>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl">Contact</h2>
                <div className="border rounded-lg p-6">
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg">Press Inquiries</h3>
                            <p className="text-gray-600">[Press Contact Name]</p>
                            <p className="text-gray-600">[Press Contact Email]</p>
                            <p className="text-gray-600">[Press Contact Phone]</p>
                        </div>
                        <div>
                            <h3 className="text-lg">General Inquiries</h3>
                            <p className="text-gray-600">[General Contact Email]</p>
                            <p className="text-gray-600">[General Contact Phone]</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
} 