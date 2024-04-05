import { cn } from "@/lib/utils";

type StyleBlockProps = {
  children: React.ReactNode;
  className?: string;
};
export default function StyleBlock({ children, className }: StyleBlockProps) {
  return (
    <div
      className={cn(
        "h-full w-full overflow-hidden rounded-md bg-zinc-100 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  );
}
