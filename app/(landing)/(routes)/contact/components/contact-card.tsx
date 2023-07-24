import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ContactCardProps {
  title: string;
  email: string;
  phone: string;
}

const ContactCard = ({ title, email, phone }: ContactCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-black to-slate-900 border-slate-700 text-slate-300">
      <CardHeader>
        <CardTitle className="text-lg text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-y-2">
        <a href={`mailto: ${email}`} className="text-primary">
          {email}
        </a>
        <span>{phone}</span>
      </CardContent>
    </Card>
  );
};

export default ContactCard;
