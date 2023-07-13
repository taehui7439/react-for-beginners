import { PropTypes } from "prop-types";
import styles from "./Button.module.css"

function Button({ text }) {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    );
}

Button.prototypes = {
    text: PropTypes.string.isRequired,
};

export default Button;