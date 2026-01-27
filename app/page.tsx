import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-black mb-6 text-6xl font-bold">
              A better way to track your job application.
            </h1>
            <p className="text-muted-foreground mb-10 text-xl">
              Capture, organize, and manage your job in one place.
            </p>
            <div className="flex flex-col items-center gap-4">
              <Button
                className="bg-black hover:bg-gray-700 h-12 px-8 text-lg font-medium"
                size="lg"
              >
                Start for free
              </Button>
              <p>Free foreven. No credit card required</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
