import Image from "next/image";

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col bg-white">
        <main className="flex1">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-32">
            <div>
              <h1 className="text-black">A better way to track your job application.</h1>
              <p className="text-muted-foreground">Capture, organize, and manage your job in one place.</p>
            </div>
              <button>Start fro free</button>
              <p>Free foreven. No credit card required</p>
          </section>
        </main>
      </div>
  );
}
