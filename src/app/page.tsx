import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-[20px] p-24">
      <h1 className="text-[30px]">Learn Next js</h1>

      <Link className="bg-blue-900 text-[#fff] p-[10px] rounded-xl shadow-xl" href='/cars'>Go to Home Work 1</Link>
    </main>
  );
}