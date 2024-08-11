import { TypographyH1 } from "@/components/typography/h1";
import { Badge } from "@/components/ui/badge";

export default function Title({ title }: { title: string }) {
  return (
    <>
      <TypographyH1>{title}</TypographyH1>
      <Badge variant="default" className="min-w-16" />
    </>
  );
}
