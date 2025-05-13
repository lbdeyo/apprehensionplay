export default function Media() {
    return (
        <div className="space-y-12">
            <h1 className="text-4xl">Media</h1>

            <section className="space-y-6">
                <h2 className="text-2xl">Photos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Photo gallery will go here */}
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">[Photo Placeholder]</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl">Trailers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Video trailers will go here */}
                    <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                        <p className="text-gray-500">[Video Placeholder]</p>
                    </div>
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-2xl">Pull Quotes</h2>
                <div className="space-y-4">
                    {/* Pull quotes will go here */}
                    <blockquote className="border-l-4 border-gray-200 pl-4 py-2">
                        <p className="text-lg italic">"[Pull quote placeholder]"</p>
                        <footer className="text-sm text-gray-600 mt-2">— [Source]</footer>
                    </blockquote>
                </div>
            </section>
        </div>
    );
} 