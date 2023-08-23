import type * as React from "react";
import { PixelRatio, Platform, PlatformOSType } from "react-native";

import useDimensions from "./useDimensions";

type Orientation = "landscape" | "portrait";

export interface MediaQuery {
  children?: any;
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

export const isInInterval = (
  value: number,
  min?: number,
  max?: number
): boolean =>
  (min === undefined || value >= min) && (max === undefined || value <= max);

export const mediaQuery = (
  query: MediaQuery,
  width: number,
  height: number
): boolean => {
  const {
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    minAspectRatio,
    maxAspectRatio,
    minPixelRatio,
    maxPixelRatio,
    orientation,
    platform,
    condition,
  } = query;
  const currentOrientation: Orientation =
    width > height ? "landscape" : "portrait";
  return (
    isInInterval(width, minWidth, maxWidth) &&
    isInInterval(height, minHeight, maxHeight) &&
    isInInterval(width / height, minAspectRatio, maxAspectRatio) &&
    isInInterval(PixelRatio.get(), minPixelRatio, maxPixelRatio) &&
    (orientation === undefined || orientation === currentOrientation) &&
    (platform === undefined || platform === Platform.OS) &&
    (condition === undefined || condition)
  );
};

const MediaQuery: React.FC<MediaQuery> = ({ children, ...props }) => {
  const { width, height } = useDimensions();
  const val = mediaQuery(props, width, height);
  if (val) {
    return children as JSX.Element;
  }
  return null;
};

export default MediaQuery;
