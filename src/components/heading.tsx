import { cn } from "@/lib/utils";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h1 className={cn("text-2xl font-medium leading-6 text-white", className)}>
      {children}
    </h1>
  );
}
