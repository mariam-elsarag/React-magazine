# Button Component

A customizable button component that can render either as a native `<button>` or a React Router `<Link>`. Supports loading state, styling variants, size options, and navigation.

---

## Props

| Prop         | Type                                               | Default     | Description                                                          |
| ------------ | -------------------------------------------------- | ----------- | -------------------------------------------------------------------- |
| `children`   | `React.ReactNode`                                  | —           | The content inside the button. **Required.**                         |
| `onClick`    | `(e: React.MouseEvent<HTMLButtonElement>) => void` | —           | Function to call on button click.                                    |
| `to`         | `string`                                           | —           | If provided, the button renders as a `<Link>` pointing to this path. |
| `type`       | `"primary"` \| `"outline"`                         | `"primary"` | Determines the button's visual style.                                |
| `buttonType` | `"button"` \| `"submit"` \| `"reset"`              | `"submit"`  | Native button type. Ignored when `to` is set.                        |
| `disabled`   | `boolean`                                          | `false`     | Disables the button interaction.                                     |
| `loading`    | `boolean`                                          | `false`     | Shows a spinner and disables the button when `true`.                 |
| `className`  | `string`                                           | —           | Additional Tailwind or custom CSS classes.                           |
| `target`     | `"_blank"` \| `"_self"` \| `"_parent"` \| `"_top"` | —           | Specifies the target for the `<Link>` when `to` is used.             |
| `size`       | `"lg"` \| `"sm"`                                   | `"lg"`      | Sets button size (`lg`: larger and responsive; `sm`: compact).       |

---

## Behavior

- Renders a `<Link>` if `to` is provided.
- Otherwise, renders a standard `<button>`.
- Displays a loading spinner next to children when `loading` is `true`.
- Applies different styles based on the `type` and `size` props.

---

## Styling

Uses Tailwind CSS classes with built-in responsive and hover styles:

- **primary**: Solid background with white text.
- **outline**: Transparent background with border and primary-colored text.
- **lg**: Taller height, responsive adjustments.
- **sm**: Compact height.

---

## Example Usage

```tsx
<Button onClick={handleSubmit}>Submit</Button>

<Button type="outline" to="/about" target="_blank">
  Learn More
</Button>

<Button loading disabled>
  Saving...
</Button>

<Button size="sm" type="primary">
  Small Button
</Button>
```
