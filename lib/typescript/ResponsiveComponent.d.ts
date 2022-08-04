import { Component } from "react";
import { ScaledSize } from "react-native";
interface ResponsiveComponentProps {
}
interface ResponsiveComponentState {
    window: ScaledSize;
}
export default abstract class ResponsiveComponent extends Component<ResponsiveComponentProps, ResponsiveComponentState> {
    state: {
        window: ScaledSize;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    onDimensionChange: (dims: ResponsiveComponentState) => void;
}
export {};
