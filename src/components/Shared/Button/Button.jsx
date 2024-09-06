import './style.css'

export const Button = ({bg, p="0.75rem", radius="0.5rem", children}) => {
    const style = {
        backgroundColor: bg,
        padding:p,
        borderRadius: radius
    }
  return (
    <div  className="button" style={style}>{children}</div>
  )
}
