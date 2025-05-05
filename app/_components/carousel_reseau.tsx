import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import facebook from "@/public/icons/facebook.svg";
import github from "@/public/icons/github-icon.svg";
import linkedIn from "@/public/icons/linkedin-icon.svg";
import whatsapp from "@/public/icons/whatsapp-icon.svg";
import { Linden_Hill } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

export const _CarouselReseau = () => {
  return (
    <Carousel className="w-full max-w-sm" opts={{ loop: true }}>
      <CarouselContent className="-ml-1">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 pl-2 md:pl-4">
          <div className="p-1">
            <Card className="dark:bg-white">
              <CardContent className="flex items-center justify-center p-6">
                <Link
                  href="https://linkedin.com/in/tolojanahary-rakotoarisoa-80450711b"
                  target="_blank"
                >
                  <Image
                    src={linkedIn}
                    alt="linkedIn"
                    className="w-max h-max"
                  />
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="dark:bg-white">
              <CardContent className="flex items-center justify-center p-6">
                <Link href="https://github.com/hasinarak" target="_blank">
                  <Image src={github} alt="github" className="w-max h-max" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="dark:bg-white">
              <CardContent className="flex items-center justify-center p-6">
                <Link
                  href="https://web.whatsapp.com/+261349485241"
                  target="_blank"
                >
                  <Image
                    src={whatsapp}
                    alt="whatsapp"
                    className="w-max h-max"
                  />
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Card className="dark:bg-white">
              <CardContent className="flex items-center justify-center p-6">
                <Link
                  href="https://web.facebook.com/hasina.eric/"
                  target="_blank"
                >
                  <Image
                    src={facebook}
                    alt="facebook"
                    className="w-max h-max"
                  />
                </Link>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
