import type * as React from "react";
import { PlatformOSType } from "react-native";
declare type Orientation = "landscape" | "portrait";
export interface MediaQuery {
    minHeight?: number;
    maxHeight?: number;
    minWidth?: number;
    maxWidth?: number;
    minAspectRatio?: number;
    maxAspectRatio?: number;
    minPixelRatio?: number;
    maxPixelRatio?: number;
    orientation?: Orientation;
    condition?: boolean;
    platform?: PlatformOSType;
}
export declare const isInInterval: (value: number, min?: number | undefined, max?: number | undefined) => boolean;
export declare const mediaQuery: (query: MediaQuery, width: number, height: number) => boolean;
declare const MediaQuery: React.FC<MediaQuery>;
export default MediaQuery;
