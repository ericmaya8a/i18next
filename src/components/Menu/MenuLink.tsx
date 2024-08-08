import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuLinkProps {
  url: string;
  text: string;
}

export function MenuLink({ url, text }: MenuLinkProps) {
  const pathname = usePathname();
  const className =
    url === pathname
      ? "rounded-md border border-slate-400 bg-slate-500 px-3 py-2 text-white hover:opacity-50"
      : "rounded-md border border-slate-400 px-3 py-2 hover:opacity-50";

  return (
    <Link className={className} href={url}>
      {text}
    </Link>
  );
}
