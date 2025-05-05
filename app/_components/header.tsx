import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Githubicon } from "@/public/icons/githubicons";
import Link from "next/link";
import React from "react";
import { Section } from "./section";
import { LinkedInIcon } from "@/public/icons/linkdin";
import { FacebookIcon } from "@/public/icons/facebook";
import { WhatsAppIcon } from "@/public/icons/whatsapp";

export default function _Header() {
  return (
    <header className="sticky top-0 -mt-6">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-shadow-primary-foreground text-gray-700 dark:text-gray-200">
          Hasina RAK.com
        </h1>
        <div className="flex">
          <ul className="flex flex-row gap-2">
            <li>
              <Link
                href="https://github.com/hasinarak"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-6 p-0"
                )}
              >
                <Githubicon size={12} className="text-foreground" />
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com/in/tolojanahary-rakotoarisoa-80450711b"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-6 p-0"
                )}
              >
                <LinkedInIcon size={12} className="text-foreground" />
              </Link>
            </li>
            <li>
              <Link
                href="https://web.facebook.com/hasina.eric/"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-6 p-0"
                )}
              >
                <FacebookIcon size={12} className="text-foreground" />
              </Link>
            </li>
            <li>
              <Link
                href="https://web.whatsapp.com/+261349485241"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "size-6 p-0"
                )}
              >
                <WhatsAppIcon size={12} className="text-foreground" />
              </Link>
            </li>

            {/* <Button className="size-6 p-0" variant="outline">
              <Githubicon size={16} className="text-foreground" />
            </Button> */}
          </ul>
        </div>
      </Section>
    </header>
  );
}
