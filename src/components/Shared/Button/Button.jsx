import "./style.css";

export const Button = ({
  bg="",
  border="",
  p = "0.75rem",
  radius = "0.5rem",
  children,
  ...props
}) => {
  const style = {
    backgroundColor: bg,
    padding: p,
    borderRadius: radius,
    border: border,
  };
  return (
    <div {...props} className="button" style={style}>
      {children}
    </div>
  );
};
