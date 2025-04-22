import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: { control: "radio", options: ["primary", "outline"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    children: { control: "text" },
    size: { control: "radio", options: ["lg", "sm"] },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A customizable button component with various states (primary, outline, loading, etc.).",
      },
      preview: {
        render: (args) => <Button {...args} />,
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  type: "primary",
  children: "Click Me",
  loading: false,
  size: "lg",
};

export const Primary = () => <Button type="primary">Primary Button</Button>;

export const Outline = () => (
  <Button type="outline" onClick={() => alert("Clicked!")}>
    Outline Button
  </Button>
);

export const Loading = () => <Button loading>Loading...</Button>;
