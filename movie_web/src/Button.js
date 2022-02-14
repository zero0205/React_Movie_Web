import propTypes from "prop-types";
import styles from "./Button.module.css";

function Button(props){
    return <button className={styles.btn}>{props.text}</button>
}

Button.propTypes = {
    text: propTypes.string.isRequired,
}

export default Button;