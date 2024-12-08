import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  console.log("Executing..."); // 서버 로그에 남는 것
  return (
    <main>
      <Header />
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p>
        <Link href='/about'>About Us</Link>
      </p>
    </main>
  );
}
