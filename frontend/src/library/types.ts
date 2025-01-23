import { ID } from "./alias";
type Style = {[key: string]: any};

type Route = { href: string; text: string; };

type Props = {
  id?: ID;
  css?: Style;
  classname?: string;
};

export type { Props, Route, ID }