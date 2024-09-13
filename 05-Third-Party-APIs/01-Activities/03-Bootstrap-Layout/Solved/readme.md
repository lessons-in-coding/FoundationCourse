## 1. Header Section (<header> with class jumbotron)
<header class="jumbotron jumbotron-fluid">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-12 col-md-6">
            <img class='img-fluid' src="https://via.placeholder.com/1920x1080" alt="video placeholder" />
        </div>

        <div class="col-12 col-md-6">
            <h1></h1>
            <p></p>
            <button class="btn btn-primary"></button>
        </div>
      </div>
    </div>
</header>

## 2. Main Content Section (<main> with class container)
<main class="container">
    
    <section class="row">
      <div class="col-12 col-md-9">
        <h2></h2>
        <section class="row justify-content-around">
          <div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header"></h3>
              <div class="card-body">
                <p class="card-text"></p>
                <button class="btn btn-block btn-info"></button>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header"></h3>
              <div class="card-body">
                <p class="card-text"></p>
                <button class="btn btn-block btn-info"></button>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4 mb-3">
            <div class="card">
              <h3 class="card-header"></h3>
              <div class="card-body">
                <p class="card-text"></p>
                <button class="btn btn-block btn-info"></button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="col-12 col-md-3">
        <h2></h2>
        <p></p>
      </div>
    </section>
    <hr />

## 3. Contact Section (row justify-content-center)
    <section class="row justify-content-center">
      <div class="col-12 col-sm-6 col-md-4">
        <address>
          <h2></h2>
          <h5><a href="tel:555.555.5555"></a></h5>
          <h5><a href="mailto:info@coolcompany.biz"></a></h5>
        </address>
      </div>
      <div class="col-12 col-sm-6 col-md-4">
        <h2></h2>
        <form>
          <div class="form-group">
            <label for="name-input"></label>
            <input type="text" class="form-control" id="name-input" placeholder="Leave your name" />
          </div>
          <div class="form-group">
            <label for="comment-input"></label>
            <textarea name="comment" id="comment-input" class="form-control"></textarea>
          </div>
          <button class="btn btn-success"></button>
        </form>
      </div>
    </section>
</main>

<!-- 
1. Header Section (<header class="jumbotron">)

	•	Purpose: This section is the introductory part, giving users a large visual with a call to action.
	•	Bootstrap Concepts:
	•	jumbotron-fluid: A full-width container meant to grab attention.
	•	Grid System: Uses Bootstrap’s grid system to split content into two columns (col-12 col-md-6):
	•	Left Column (col-12 col-md-6): Displays an image. The class img-fluid makes sure the image is responsive and resizes according to the screen width.
	•	Right Column (col-12 col-md-6): Contains a headline (<h1>), paragraph (<p>), and a call-to-action button (<button>).
	•	Mobile-first approach: The columns are stacked vertically (one below the other) on small screens and displayed side-by-side on larger screens (col-12 on small devices, col-md-6 on medium and up).

2. Main Content Section (<main class="container">)

	•	Purpose: The main section contains services and an “About Us” section.
	•	Bootstrap Concepts:
	•	Container: The container class provides padding and centers content on larger screens.
	•	Row and Column Layout:
	•	row class: Defines a new row, where the grid system can apply.
	•	Two major divisions:
	1.	Services (col-12 col-md-9): This takes up 75% of the width on medium+ devices and 100% on smaller devices.
	•	Service Cards: Each service is contained within a card, making use of the card component.
	•	Responsive Grid: The cards stack vertically on smaller screens (using col-12 col-sm-6) and are aligned horizontally on larger screens (col-lg-4).
	•	Buttons: btn-block makes buttons take up the full width of their parent containers, enhancing touch targets for mobile users.
	2.	About Us (col-12 col-md-3): This section takes up 25% of the width on medium+ devices.
	•	Contains text about the company in a p tag, wrapped in a column layout for responsiveness.
	•	Separation via <hr />: A horizontal rule (<hr />) visually separates the content from the next section.

3. Contact Section (<section class="row justify-content-center">)

	•	Purpose: The contact section allows users to get in touch and leave comments.
	•	Bootstrap Concepts:
	•	Center Alignment (justify-content-center): Ensures the form and contact information are centered within the row.
	•	Two Columns:
	1.	Contact Info (col-12 col-sm-6 col-md-4): Displays the company name and contact information.
	2.	Comment Form (col-12 col-sm-6 col-md-4): A form where users can leave their name and a comment.
	•	Form Elements: Each form input is wrapped with form-group to space out form controls, while form-control ensures inputs and text areas are styled properly.

Key Bootstrap Layout Concepts:

	1.	Mobile-First Design: Bootstrap grid classes (col-12, col-md-6, etc.) ensure that the layout adapts to different screen sizes. It starts by stacking content vertically on smaller screens and adjusts to a side-by-side layout on larger screens.
	2.	Grid System: The layout relies heavily on Bootstrap’s 12-column grid system. For example:
	•	col-12 col-md-6: Full width on smaller devices, half-width on medium+ devices.
	•	col-12 col-sm-6 col-lg-4: Full width on small devices, half-width on medium devices, one-third width on large devices.
	3.	Card Component: The card class is used for displaying information in neatly styled boxes.
	4.	Flexbox Utilities: Classes like justify-content-center and align-items-end are based on Flexbox to control alignment and spacing.

How the Developer Thinks:

	1.	Responsiveness: Ensure that the layout works on all screen sizes, starting from mobile and scaling up to desktop.
	2.	Content Separation: Different sections of the page are logically separated using rows, columns, and components like cards and forms.
	3.	Consistency: Buttons, form controls, and content containers follow consistent styling using Bootstrap classes to maintain a uniform design.
	4.	User Experience: Buttons are full-width (btn-block) on smaller screens to make touch interaction easier, while forms are aligned centrally to be accessible and user-friendly.

By using the grid system and Bootstrap components, the developer can ensure a clean, responsive layout that adapts to different devices and screen sizes with minimal effort.
 -->
