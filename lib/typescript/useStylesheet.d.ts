import type { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { MediaQuery } from "./MediaQuery";
declare type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
interface MediaQueryStyle<T> {
    query: MediaQuery;
    style: NamedStyles<T>;
}
export declare const getStylesheet: <T extends Record<string, unknown>>({ width, height }: {
    width: number;
    height: number;
}, styles: MediaQueryStyle<T>[]) => NamedStyles<T>;
export declare const useStylesheet: <T extends Record<string, unknown>>(styles: MediaQueryStyle<T>[]) => NamedStyles<T>;
export {};
