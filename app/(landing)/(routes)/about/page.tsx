import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import LandingHeading from "../../components/landing-heading";

const AboutPage = () => {
  return (
    <section className="text-slate-300 px-8 md:px-12 mt-28 mb-20 h-full">
      <div className="relative flex flex-col items-center text-center mb-32">
        <LandingHeading
          title={"We are a group of people who love AI"}
          subtitle={
            " Dolore dolor esse labore enim amet magna deserunt aliquip aliqua do etaute enim excepteur."
          }
          paragraph="Veniam dolor minim et anim ut. Aliquip qui aliqua ad reprehenderit
          ullamco. Cillum proident cupidatat irure commodo tempor fugiat Lorem
          fugiat ad id. Aliqua officia dolore id in aliqua. Consequat
          consectetur reprehenderit et consectetur ea. Elit exercitation
          consequat dolor quis proident non irure occaecat adipisicing veniam
          voluptate ea aute culpa."
        />
        <div className="absolute w-64 h-64 rounded-full bg-orange-500/20 blur-3xl md:-top-18 max-md:top-10 right-10" />
        <div className="absolute w-64 h-64 rounded-full bg-purple-500/20 blur-3xl md:top-32 max-md:top-40 left-40" />
        <div className="absolute w-64 h-64 rounded-full bg-blue-500/20 blur-3xl md:-top-10 max-md:-top-20" />
      </div>

      <Card className="text-center bg-slate-100 relative py-10 md:mb-20 mb-12">
        <CardHeader>
          <CardTitle className="text-3xl">Our customers love us</CardTitle>
        </CardHeader>
        <CardContent className="w-2/3 mx-auto">
          <p>
            Aliquip minim non mollit occaecat irure voluptate sint in amet
            cillum officia veniam ad. Nisi duis aliqua incididunt incididunt
            veniam qui et voluptate. Magna dolor eiusmod veniam labore sit
            consectetur officia do.
          </p>
        </CardContent>
        <div className="absolute w-60 h-60 rounded-full md:bg-emerald-400/50 bg-transparent blur-3xl top-0 right-20" />
        <div className="absolute w-60 h-60 rounded-full bg-purple-500/20 blur-3xl top-0 left-96" />
        <div className="absolute w-60 h-60 rounded-full bg-blue-500/20 blur-3xl -top-10" />
      </Card>

      <div className="flex flex-col md:flex-row items-center max-md:gap-12">
        <div className="flex flex-col flex-1 max-md:items-center">
          <h1 className="md:text-5xl text-3xl font-bold text-white mb-8">
            Our mission
          </h1>
          <p className="leading-relaxed max-md:text-center">
            Dolor laborum et anim deserunt pariatur. Sit minim magna tempor enim
            pariatur in excepteur cupidatat ex incididunt voluptate in sunt.
            Velit dolore non incididunt labore cillum duis Lorem et id commodo.
          </p>
        </div>
        <div className="flex-1 relative w-full aspect-video">
          <Image
            src={"/logo.png"}
            alt={"logo"}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
