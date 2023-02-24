import { CSSProperties } from "styled-components";
export interface ButtonProps {
  iconRight?: boolean;
  iconLeft?: boolean;
  icon?: string;
  className?: string;
  label?: string;
  disabled?: boolean;
  varient?: "text" | "contained" | "outlined";

  theme?: "primary" | "secondary" | "sucess" | "danger";
  shape?: "circle" | "square" | "rounded";
  size?: "small" | "medium" | "large";
  ariaLabel?: string;
  ariaDisabled?: boolean;
  id?: string;
  accesskey?: string;
  autofocus?: boolean;
  style?: CSSProperties;
  form?: string;
  formaction?: string;
  formenctype?: string;
  formmethod?: string;
  formnovalidate?: boolean;
  formtarget?: string;
  name?: string;
  type?: "submit" | "reset" | "button";
  value?: string;
  onClick?: (event: any) => void;
  onDoubleClick?: (event: any) => void;
  onMouseDown?: (event: any) => void;
  onMouseUp?: (event: any) => void;
  onMouseEnter?: (event: any) => void;
  onMouseLeave?: (event: any) => void;
  onMouseMove?: (event: any) => void;
  onKeyDown?: (event: any) => void;
  onKeyUp?: (event: any) => void;
  onKeyPress?: (event: any) => void;
}
