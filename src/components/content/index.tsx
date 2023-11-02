import { ReactElement } from "react";

interface contentProps {
  style?: string;
  border: string;
  children: ReactElement;
}

export default function Content({ style, children, border }: contentProps) {
  return (
    <div className="relatie      ">
      {/* <div className={`${border}`}></div> */}

      <div className={`${style}`}> {children}</div>
      {border && <div className={`${border}`}></div>}
    </div>
  );
}
