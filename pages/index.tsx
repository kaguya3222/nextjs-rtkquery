import Link from "next/link";

interface someProps {}

export default function Some({}: someProps) {
  return (
    <div>
      <Link href="/pikachu">Go to pokemon</Link>
    </div>
  );
}
