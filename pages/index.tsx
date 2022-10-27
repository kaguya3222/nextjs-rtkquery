import Link from "next/link";

interface IndexProps {}

export default function Index({}: IndexProps) {
  return (
    <div>
      <Link href="/pikachu">Go to pokemon</Link>
    </div>
  );
}
