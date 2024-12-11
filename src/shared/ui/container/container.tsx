import * as React from "react";
import styles from "./container.module.scss";

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};
