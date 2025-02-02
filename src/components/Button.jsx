import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const ButtonPrimary = ({
    href,
    label,    target="_self",

    icon,
    classes
}) => {
  return (
    <>
    {
      href?
      <Link to={href} target={target} className={"btn btn-primary "+classes}>{label} {icon}</Link>
    :
    <button className={"btn btn-primary "+classes}></button>
    }
    </>
  )
}

ButtonPrimary.propTypes={
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

const ButtonOutline = ({
    href,
    label,
    icon,
    classes
}) => {
  return (
    <>
    {
      href?
      <Link to={href}  className={"btn btn-outline "+classes}>{label} {icon}</Link>
    :
    <button className={"btn btn-outline "+classes}></button>
    }
    </>
  )
}

ButtonOutline.propTypes={
    href: PropTypes.string.isRequired,
    target: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}


export {
    ButtonPrimary,
    ButtonOutline
}