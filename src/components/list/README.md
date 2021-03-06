# List

Group and organize collections of content.

## When to use

- Use unordered lists when your collection has no specific order.
- Use ordered lists when you want to display content in some specific order like ranking or a series of steps in a process.
- Use definition lists to display groups of terms with descriptions like a glossary or other metadata.

## Adding the markup

Lists can be divided into three types: ordered, unordered, and definitions.

### Ordered lists

Ordered lists are created by wrapping an `<ol class="rvt-list">` tag around `li` tags. Each `li` tag represents an item in the ordered list.

```html
<ol class="rvt-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

### Unordered lists

Unordered lists are created by wrapping an `<ul class="rvt-list">` tag around `li` tags. Each `li` tag represents an item in the unordered list.

```html
<ul class="rvt-list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Plain lists

You can use the helper class `rvt-list-plain` to remove list formatting for display purposes.

```html
<ul class="rvt-list-plain">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Inline lists

You can use the helper class `rvt-list-inline` to remove list formatting and display list items inline. Items will wrap across multiple lines as needed.

```html
<ul class="rvt-list-inline">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

### Definition lists

Definition lists are created by wrapping an `dl` tag around `dt` and `dd` tags. Each `dt` tag represents a term in the definition list. It can be paired with any number of `dd` tags, which represent the definitions.

## Implementation notes

- Maintain a parallel structure. If you begin a list item with a verb, all others should begin with a verb too.
- Don’t include punctuation unless a complete sentence follows in the same bullet (like in the sentence above)
