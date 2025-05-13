export default function CastCrew() {
    return (
        <div className="space-y-8">
            <h1 className="text-4xl">Cast & Crew</h1>

            <section className="space-y-6">
                <h2 className="text-2xl">Cast</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Cast member cards will go here */}
                    <div className="border rounded-lg p-4">
                        <h3 className="text-xl">[Cast Member Name]</h3>
                        <p className="text-gray-600">[Character Name]</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl">Creative Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Crew member cards will go here */}
                    <div className="border rounded-lg p-4">
                        <h3 className="text-xl">[Crew Member Name]</h3>
                        <p className="text-gray-600">[Role]</p>
                    </div>
                </div>
            </section>
        </div>
    );
} 