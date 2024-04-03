type HeadingProps = {
  children: React.ReactNode;
};

export default function Heading({ children }: HeadingProps) {
  return <h1 className="text-2xl font-medium leading-6">{children}</h1>;
}
