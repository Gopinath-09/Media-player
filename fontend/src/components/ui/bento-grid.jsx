import { Edit, Trash } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  key,
  className,
  title,
  header,
}) => {
  return (
    (<div key={key}
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}>
      <iframe src={header} frameBorder="0" allowFullScreen className="w-full h-full"></iframe>
      <div className="">
        <div
          className="text-neutral-200 text-xl mb-2 mt-2">
          {title}
        </div>
        <div className="font-normal text-slate-200 text-xs flex justify-between">
          <Button><Edit/></Button>
          <Button className="bg-red-500 hover:bg-red-800"><Trash/></Button>
        </div>
      </div>
    </div>)
  );
};
