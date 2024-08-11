import { ButtonIcon } from "@/components/layout/buttons/button-icon";
import IconCard from "@/components/layout/sidebar/icon-card";
import { TypographyH4 } from "@/components/typography/h4";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Cake, Facebook, Github, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const CONTACT_INFO = [
  {
    icon: <Mail className="h-4 w-4" />,
    title: "Email",
    content: "nguyenvanle.work@gmail.com",
    href: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSHxjWFscMFxrwfzzNCdkSqBGRNchRJsrXhvmxfKfvXpnlsSJtkJNVvktFkMlQSzwNpVKtML",
  },
  {
    icon: <Phone className="h-4 w-4" />,
    title: "Phone",
    content: "0357483702",
    href: "tel:0357483702",
  },
  {
    icon: <Cake className="h-4 w-4" />,
    title: "Birthday",
    content: "12/06/2003",
    href: "https://en.wikipedia.org/wiki/Gemini_(astrology)",
  },
  {
    icon: <MapPin className="h-4 w-4" />,
    title: "Location",
    content: "Ninh Kieu, Can Tho, Viet Nam",
    href: "https://maps.app.goo.gl/PaxSjb9Vix1DDQZb8",
  },
];

const SOCIAL_INFO = [
  {
    icon: <Facebook className="h-4 w-4" />,
    title: "lenguyen.1206",
    href: "https://www.facebook.com/lenguyen.1206/",
  },
  {
    icon: <Github className="h-4 w-4" />,
    title: "Nguyenvanle",
    href: "https://github.com/Nguyenvanle",
  },
];

const ContactItem = ({
  icon,
  title,
  content,
  href,
}: {
  icon: ReactNode;
  title: string;
  content: string;
  href: string;
}) => (
  <CardHeader className="flex flex-row gap-2 pt-0">
    <IconCard>
      <Link href={href} className="flex flex-col justify-center">
        <ButtonIcon>{icon}</ButtonIcon>
      </Link>
    </IconCard>
    <div className="flex flex-col">
      <p className="font-semibold">{title}</p>
      <p title={content} className="text-xs truncate ">
        {content}
      </p>
    </div>
  </CardHeader>
);

export default function Sidebar() {
  return (
    <Card className="flex flex-col border-0 min-w-72">
      <CardContent className="p-4 pb-4 lg:p-8">
        <div className="relative aspect-square">
          <Image
            src="/images/avatar-me-crop.jpg"
            alt="Nguyễn Văn Lẹ"
            layout="fill"
            objectFit="cover"
            className="rounded"
            loading="eager"
            priority
          />
        </div>
      </CardContent>
      <CardHeader className="p-0 gap-4 m-4 text-center">
        <TypographyH4>Nguyễn Văn Lẹ</TypographyH4>
        <Badge
          variant="default"
          className="p-2 px-4 mx-4 sm:mx-0 md:mx-4 justify-center"
        >
          Software Engineer
        </Badge>
        <Separator className="bg-background" />
      </CardHeader>
      {CONTACT_INFO.map((item, index) => (
        <ContactItem key={index} {...item} />
      ))}
      <CardFooter className="flex justify-center p-4 pt-0 gap-2">
        {SOCIAL_INFO.map((item, index) => (
          <Link href={item.href} key={index}>
            <ButtonIcon>{item.icon}</ButtonIcon>
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
}
