import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

type aboutItems = {
  title: string;
  description: string;
};

const _CardAbout = ({ title, description }: aboutItems) => {
  return (
    <Card className="bg-white shadow-md opacity-90 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 ease-in-out w-auto md:w-96">
      <CardHeader>
        <CardTitle className="text-2xl font-bold  text-center dark:text-gray-700">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-justify dark:text-gray-700">
        {description}
      </CardContent>
    </Card>
  );
};

export default _CardAbout;
