import React from "react";
import LandingHeading from "../../components/landing-heading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MAX_FREE_COUNTS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const pricing = [
  {
    title: "Free Plan",
    description: `Free plan includes ${MAX_FREE_COUNTS} generate limits`,
    cost: "Free",
    button: "Start free",
    features: [
      `Up to ${MAX_FREE_COUNTS} generate limits`,
      "All AI generations available",
    ],
  },
  {
    title: "Monthly Plan",
    description: "Monthly plan allows unlimited generation",
    cost: "$20 /month",
    button: "Subscribe",
    features: ["Unlimited AI generation", "All AI generations available"],
  },
];

const PricingPage = () => {
  return (
    <section className="flex flex-col text-slate-300 px-8 md:px-12 mt-28 mb-20 h-full">
      <LandingHeading
        className="mx-auto text-center"
        title={"Pricing plans"}
        subtitle={"Easy and flexible pricing for everyone."}
      />
      <div className="grid md:grid-cols-2 gap-8">
        {pricing.map((item) => (
          <Card
            className="bg-gradient-to-br from-black to-slate-800 text-slate-300 border-slate-700 p-6"
            key={item.title}
          >
            <CardHeader>
              <CardTitle className="text-white">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-8">
              <Link href={"/dashboard"}>
                <Button
                  variant={item.title === "Free Plan" ? "outline" : "premium"}
                  className={cn(
                    "",
                    item.title === "Free Plan" &&
                      "bg-transparent hover:text-white hover:bg-transparent border border-slate-400 hover:border-slate-50"
                  )}
                >
                  {item.button}
                </Button>
              </Link>
              <ul>
                {item.features.map((item) => (
                  <li key={item} className="mb-4 text-sm flex gap-x-4">
                    <Check className="h-4 w-4 text-purple-400"/>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PricingPage;
