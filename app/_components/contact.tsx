"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { _CarouselReseau } from "./carousel_reseau";

export default function _Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email sending logic here
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="p-6"
      id="contact"
    >
      <h1 className="text-3xl font-bold text-center text-gray-700 mb-8 dark:text-white">
        Contactez-moi
      </h1>
      <div className="flex md:flex-row gap-6 justify-evenly items-center flex-col">
        <div className="w-md items-end">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Button type="submit">Envoyer le message</Button>
          </form>
        </div>

        <div className="items-center flex flex-col">
          <h2 className="text-xl font-semibold text-center">Mes réseaux</h2>
          <span className="flex items-center justify-center mt-4">
            <_CarouselReseau />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

{
  /* <ul className="grid grid-cols-2 grid-rows-2 gap-4 justify-items-center">
            <li>
              <Link
                href="https://linkedin.com/in/tolojanahary-rakotoarisoa-80450711b"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "size-6 p-0"
                )}
              >
                <LinkedInIcon size={12} className="text-foreground" />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/hasinarak"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "size-6 p-0"
                )}
              >
                <Githubicon size={120} className="text-foreground" />
              </Link>
            </li>
            <li>
              <Link
                href="https://web.facebook.com/hasina.eric/"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "size-max p-0"
                )}
              >
                <FacebookIcon className="text-foreground" />
              </Link>
            </li>
            <li>
              <Link
                href="https://web.whatsapp.com/+261349485241"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "size-6 p-0"
                )}
              >
                <WhatsAppIcon size={12} className="text-foreground" />
              </Link>
            </li>
          </ul> */
}
