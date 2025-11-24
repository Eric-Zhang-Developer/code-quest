import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BackToDashBoardLink() {
  return (
    <Link
      href="/dashboard"
      className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-opacity hover:opacity-80"
      style={{
        backgroundColor: "#232331",
        color: "#be9661",
        border: "0.5px solid rgba(190, 150, 97, 0.3)",
      }}
    >
      <ArrowLeft size={18} />
      <span>Back to Dashboard</span>
    </Link>
  );
}
