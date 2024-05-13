import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Your existing content */}

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* Navigation links */}
        <Link href="/discord">
            <h2 className="mb-3 text-2xl font-semibold">Discord</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Go to the Discord.</p>
        </Link>

        <Link href="/home">
            <h2 className="mb-3 text-2xl font-semibold">Home</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Go to the Home page.</p>
        </Link>

        <Link href="/asd">
            <h2 className="mb-3 text-2xl font-semibold">Asd</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Go to the Asd page.</p>
        </Link>

        {/* Your existing content */}
      </div>
    </main>
  );
}
