import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex w-[300px] gap-2">
        <Link href="/todo" className="flex-1">
          <Button className="w-full">Todo App</Button>
        </Link>
        <Link href="/table" className="flex-1">
          <Button className="w-full">Table</Button>
        </Link>
      </div>
    </main>
  );
}
