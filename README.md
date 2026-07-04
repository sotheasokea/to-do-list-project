# Interactive To-Do List Web App

A clean, responsive, and user-friendly To-Do List application built with native JavaScript and styled with Bootstrap 5. This app allows users to seamlessly schedule daily activities, log tasks with specific dates/times, and track completed historical items with ease.

---

## Features

* **Task Management:** Easily add, track, and permanently delete tasks.
* **Dual Tracking Boxes:** Separate list zones for active items and finished tasks ("Completed List").
* **Persistent Storage:** Uses browser `localStorage` to keep your plans intact even after a page refresh.
* **Mobile-Optimized Date/Time Elements:** Implements an advanced seamless runtime type-switching trick to fix the classic "blank input field" visual bug common on iOS and Android mobile browsers.
* **Responsive Styling:** Fluid grids powered by Bootstrap ensure the layout scales beautifully from smartphones up to large desktop screens.

---

## Mobile-Friendly Input Optimization

Standard mobile browsers like Safari or Chrome on mobile often render `<input type="date">` and `type="time"` as completely blank containers, stripping away default text indicators. 

This project solves this design discrepancy using a responsive event listener switch in the HTML template code:

```html
<input 
  type="text" 
  placeholder="mm/dd/yyyy" 
  onfocus="this.type = 'date'" 
  onblur="if (!this.value) this.type = 'text';" 
  class="form-control" 
  id="input-date" 
/>
## Run the project locally
```clone the repository:

git clone [https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git](https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git)