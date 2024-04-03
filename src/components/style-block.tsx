type StyleBlockProps = {
  children: React.ReactNode;
};
export default function StyleBlock({ children }: StyleBlockProps) {
  return (
    <div className="h-full w-full overflow-hidden rounded-md bg-zinc-100 shadow-sm">
      {children}
    </div>
  );
}
