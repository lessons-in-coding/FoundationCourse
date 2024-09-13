## 1. Bootstrap Basics

Bootstrap is a popular front-end framework used for designing responsive web pages. It provides pre-built components and utility classes for creating layouts, forms, buttons, and more with minimal custom CSS. Here are the key Bootstrap concepts you should know:

### 1.1. Including Bootstrap

Bootstrap is included in your project via a CDN link in the <head> section:
<!-- 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
 -->
 This link loads Bootstrap’s CSS, which means you can now use its classes in your HTML.

## 2. Responsive Layout

One of Bootstrap’s primary features is its grid system, which allows you to create responsive layouts that adapt to different screen sizes.

### 2.1. Grid System

	•	Columns (col-): Bootstrap uses a 12-column grid system to create flexible layouts.
<!-- 
<div class="col-10 col-md-6 col-lg-5">
 -->
 This means:
	•	On extra-small screens (e.g., mobile), the element takes up 10 out of 12 columns (col-10).
	•	On medium screens (e.g., tablets), it takes up 6 columns (col-md-6).
	•	On large screens (e.g., desktops), it takes up 5 columns (col-lg-5).

### 2.2. Flexbox Utilities

Bootstrap uses Flexbox for alignment and layout, enabling easy vertical and horizontal centering.
<!-- 
<div class="min-vh-100 d-flex align-items-center bg-dark">
 -->
 	•	d-flex: Applies Flexbox display to the container.
	•	align-items-center: Centers items vertically within the container.
	•	min-vh-100: Sets the container’s minimum height to 100% of the viewport’s height (vertical centering).

### 2.3. Justify Content

To align items horizontally, Bootstrap uses justify-content-* classes. In your case:
<!-- 
<section class="w-100 row justify-content-center">
 -->
 	•	justify-content-center: Centers the content horizontally in the container.

## 3. Bootstrap Form Elements

Bootstrap provides a set of predefined styles for form elements, making forms more user-friendly and consistent across devices.

### 3.1. Form Structure

In your form, Bootstrap provides ready-to-use classes for form groups and inputs:
<!-- 
<form class="bg-white my-4 p-4 rounded">
  <div class="form-group">
    <label for="username">Username</label>
    <input type="text" id="username" class="form-control" placeholder="Username" required />
  </div>
</form>
 -->
 	•	form-group: Groups related form elements together (like labels and inputs).
	•	form-control: Applies consistent styling to text inputs.
	•	bg-white my-4 p-4 rounded: Adds background color (bg-white), vertical margin (my-4), padding (p-4), and rounded corners to the form.

### 3.2. Buttons

Bootstrap also offers pre-styled buttons:
<!-- 
<button class="btn btn-block btn-success">Complete Signup!</button>
 -->
 	•	btn: A basic class for all buttons.
	•	btn-block: Makes the button take up the full width of its container.
	•	btn-success: Applies the success (green) color to the button.

## 4. Typography and Spacing

Bootstrap includes typography utilities for managing text size, alignment, and spacing.

### 4.1. Headings and Text
<!-- 
<h1 class="display-3 text-center text-white">Sign Up!</h1>
 -->
 	•	display-3: One of Bootstrap’s large display classes for creating attention-grabbing headings.
	•	text-center: Centers the text horizontally.
	•	text-white: Changes the text color to white (useful on dark backgrounds).

### 4.2. Padding and Margins

Bootstrap’s utility classes for spacing (p-* for padding, m-* for margins) make it easy to add space around elements:
<!-- 
<form class="bg-white my-4 p-4 rounded">
 -->
 	•	my-4: Adds a margin of 4 units (on the y-axis, i.e., top and bottom).
	•	p-4: Adds padding of 4 units inside the form.

## 5. Lists and Alignment

Lists and item alignment are crucial for organizing data and enhancing user experience.

### 5.1. List Group

In the second code block, you’re using the list-group-item class to display each skill:
<!-- 
listEl.addClass('list-group-item');
 -->
 	•	list-group-item: A Bootstrap class that styles list items with padding, border, and hover effects. It’s part of the list-group component used for displaying lists uniformly.

## 6. Component Styling and Consistency

Bootstrap components (like buttons, forms, lists, etc.) ensure design consistency. By applying predefined Bootstrap classes, you maintain a consistent look and feel across your site without having to write custom CSS.

## 7. Icons and Other Features

While the above code doesn’t use them, Bootstrap also includes support for icons (via libraries like Font Awesome), responsive images, navigation bars, and much more.

## Summary: What You Should Know About Bootstrap

	•	Grid System: Use Bootstrap’s 12-column grid system to create responsive layouts.
	•	Flexbox Utilities: Leverage Bootstrap’s Flexbox classes (d-flex, align-items-center, justify-content-*) for layout and alignment.
	•	Forms: Bootstrap’s form controls (form-group, form-control, etc.) make it easy to style inputs, labels, and buttons.
	•	Typography: Use classes like display-3 for headings and text-center, text-white for text alignment and color.
	•	Spacing Utilities: Use margin (m-*) and padding (p-*) utilities to control spacing without writing custom CSS.
	•	Components: Bootstrap provides pre-styled buttons, lists, and more for quick development.
	•	Responsiveness: Classes like col- adjust the layout for different screen sizes (mobile, tablet, desktop).