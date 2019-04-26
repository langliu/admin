import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework?: string;
}

interface ShoppingListStates {
  name: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, ShoppingListStates> {
  state: Readonly<ShoppingListStates> = {
    name: "Allen"
  };

  render() {
    return (
      <h1>
        {this.state.name} Hello from {this.props.compiler} and{" "}
        {this.props.framework}!
      </h1>
    );
  }
}

export const ShoppingList: React.FC<HelloProps> = (
  props = { compiler: "123", framework: "123" }
) => {
  return (
    <div>
      <h2>
        {props.compiler} and {props.framework}!
      </h2>
    </div>
  );
};
