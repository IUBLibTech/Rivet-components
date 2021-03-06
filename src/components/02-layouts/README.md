# Layouts
Pre-built layouts to give developers a head start when building websites and apps.

## Overview
Every Rivet layout starts with a small amount of HTML with specific CSS classes applied. This is the most basic Rivet Layout that includes the base `rvt-layout` CSS class, a version of the [Rivet header](/docs/components/header/), and a version of the [Rivet footer](/docs/components/footer/).

## Usage
With the `rvt-layout__wrapper` CSS class applied to the `main` element it will automatically push the footer to the bottom of the viewport if there is not enough content to fill up the screen.

```html
<body class="rvt-layout">
  <header class="rvt-header-wrapper">
    <!-- Rivet header markup -->
  </header>
  <main class="rvt-layout__wrapper rvt-container-lg">
    <!-- Site or App specific Layout content -->
  </main>
  <footer class="rvt-footer-base">
    <!-- Rivet footer markup -->
  </footer>
</body>
```

### Using Rivet container utilities with Layouts
Note the use of the additional [Rivet container](#) `rvt-container-lg` CSS utility class on the layout wrapper. The is used to constrain the maximum width of the layout. It is possible to use any of the Rivet container size utilities, but the "large" or `rvt-container-lg` variant is a good default. This container size should match the size used in the [header](#) and [footer](#) of you site or app.

### Details Layouts
There are two versions of the Details layout. A single column version and a two-column (on larger screens) version with the [Sidenav component](/docs/components/sidenav/) included for section navigation.

#### Single column markup
```html
<body class="rvt-layout">
  <header class="rvt-header-wrapper">
    <!-- Rivet header markup -->
  </header>
  <main class="rvt-layout__wrapper rvt-layout__wrapper--single rvt-container-sm">
    <!-- Site or App specific Layout content -->
  </main>
  <footer class="rvt-footer-base">
    <!-- Rivet footer markup -->
  </footer>
</body>
```

Note the use of the `rvt-container-sm` layout utility here. Using a small [Rivet container](/docs/utilities/container/) in this case will help constrain the running text to a readable width, which is important for usability reasons.

### Two-column markup
In addition to the base Rivet Layout elements `rvt-layout` and `rvt-layout__wrapper`, developers can create a common two-column layout on larger screens with two additional elements using the CSS classes `rvt-layout__sidebar` and `rvt-layout__content`.

```html
<body class="rvt-layout">
  <header class="rvt-header-wrapper">
    <!-- Rivet header markup -->
  </header>
  <main class="rvt-layout__wrapper rvt-layout__wrapper--details">
    <div class="rvt-layout__sidebar">
      <!-- Rivet Sidenav component -->
    </div>
    <div class="rvt-layout__content">
      <!-- Site or App specific Layout content -->
    </div>
  </main>
  <footer class="rvt-footer-base">
    <!-- Rivet footer markup -->
  </footer>
</body>
```

Note that the two-column details layout requires the addition of a `rvt-layout__wrapper--details` modifier CSS class on the `main` element.

### The "Break out" element
You can apply the `rvt-layout__break-out` CSS class to an element within the `rvt-layout__content` column to make that content break out of the main column. The breakout element is useful for elements like images and stats that you want to call out within a column of running text.

```html
<main class="rvt-layout__wrapper">
  <div class="rvt-layout__sidebar">
    <!-- Rivet Sidenav component -->
  </div>
  <div class="rvt-layout__content">
    <!-- Site or App specific Layout content -->
    <div class="rvt-layout__break-out">
      <!--
        This image will be slightly wider than the rest of the main content column
      -->
      <img src="...">
  </div>
</main>
```

#### Do
- Use the break out element to call attention to an important piece or section of content.
- Only use the break out element inside the main content area (with the CSS class of `rvt-layout__content`)

#### Don't
- Use more than one or two break out elements per page layout.
- Use the break out element outside of the main content layout element

### The "Feature slot" element
The Feature slot provides a way to create an additional call out at the top of the main content column in the generic details Layout. Applying then `rvt-layout__feature-slot` CSS class to the first child of the `rvt-layout__content` element will create a space that causes running text to wrap around it and pulls the area out of the main content column.

- Possible uses include a small feature illustration or image
- Contact information for a person profile
- An important time-sensitive call-to-action

#### Do
- Use to call out important information
- Use to add visual interest to the intro of a page with an image or illustration

#### Don't
- Use more than one Feature slot per page
- Use the Feature Slot outside of the main content area (`rvt-layout__content`)