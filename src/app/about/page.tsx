import Title from "@/components/layout/title";
import { TypographyP } from "@/components/typography/p";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <>
      <Title title="About Me" />
      <TypographyP>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        reprehenderit iste delectus quidem voluptatibus. Facilis corporis
        explicabo enim ex aspernatur quidem voluptas nostrum recusandae, nihil
        laudantium accusamus laborum fuga in.
      </TypographyP>
      <div className="flex flex-wrap gap-2 py-4">
        <Button variant={"default"}>default</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"link"}>link</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"secondary"}>secondary</Button>
      </div>
    </>
  );
}
