import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Your existing content */}

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* Navigation links */}
        <Link href="/shop">
            <h2 className="mb-3 text-2xl font-semibold">Shop</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Acquista upgrade sul server.</p>
        </Link>
        <Link href="/discord">
            <h2 className="mb-3 text-2xl font-semibold">Discord</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Resta aggiornato su Discord.</p>
        </Link>
        <Link href="/instagram">
            <h2 className="mb-3 text-2xl font-semibold">Instagram</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Seguici su Instagram.</p>
        </Link>
        <Link href="/telegram">
            <h2 className="mb-3 text-2xl font-semibold">Telegram</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Trovaci su Telegram.</p>
        </Link>
        <Link href="/vanilla-challenge-rules">
            <h2 className="mb-3 text-2xl font-semibold">Vanilla challenge rules</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Vai alle regole della sfida vanilla.</p>
        </Link>
        <Link href="/vanilla-rules">
            <h2 className="mb-3 text-2xl font-semibold">Vanilla rules</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Vai alle regole del server vanilla.</p>
        </Link>
        <Link href="/vota">
            <h2 className="mb-3 text-2xl font-semibold">Vota</h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">Vota il server.</p>
        </Link>

        {/* Your existing content */}
      </div>
    </main>
  );
}
