interface PageHeadingProps {
  children: React.ReactNode;
}

export function PageHeading({ children }: PageHeadingProps) {
  return <h1 className="mb-4 text-xl font-bold">{children}</h1>;
}
