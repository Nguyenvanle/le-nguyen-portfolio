import { TypographyH4 } from "@/components/typography/h4";
import { TypographyP } from "@/components/typography/p";

export default function IconCard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex flex-row gap-2 ">{children}</div>;
}
