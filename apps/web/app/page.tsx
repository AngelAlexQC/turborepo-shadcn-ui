import { buttonVariants } from "@ui/components/button";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>We Active</h1>
      <Link href="dashboard" className={buttonVariants({ variant: "default" })}>
        Go to dashboard
      </Link>
    </main>
  );
}
