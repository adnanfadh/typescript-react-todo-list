const Container = ({
  children,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  title?: string;
}) => {
  return (
    <div className="rounded-md border bg-green-600 p-4 shadow">
      {title && <h2 className="pb-2 text-xl text-white">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Container;
