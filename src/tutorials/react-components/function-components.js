import styles from "./function-components.module.css";

const style = {
  padding: "2em",
  textAlign: "center",
  marginBottom: "10px",
  backgroundColor: "#ccc",
};

console.log(styles);
export const FunctionComponent1 = () => {
  return (
    <div style={style}>
      <h3 className={`${styles["text-title"]} cbkjdfjd`}>
        Hello Fucntion Component
      </h3>
    </div>
  );
};

export const FunctionComponent2 = (props) => {
  // console.log(props);
  return (
    <div style={style}>
      <h3>{props.title}</h3>
      <p>{props.message}</p>
      {props.children}
    </div>
  );
};

export const FunctionComponent3 = ({ title, message, children }) => {
  //   const {title, message, children} = props
  return (
    <div style={style}>
      <h3>{title}</h3>
      <p>{message}</p>
      {children}
    </div>
  );
};
