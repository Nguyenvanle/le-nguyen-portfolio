import { Button } from "@/components/ui/button";

export function ButtonIcon({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Button
      variant="link"
      size="icon"
      className="hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </Button>
  );
}
