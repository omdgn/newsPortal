# 📰 News Portal

This is a simple and functional news portal front-end design that presents news content through a modern web interface.  
In this design, clicking on news or author images redirects the user to the corresponding content pages.

Special thanks to [WeatherAPI](https://www.weatherapi.com/weather/q/izmir-2437419) for providing weather data used in the widget.

## 📌 Project Overview

This project aims to deliver news in an accessible, readable, and interactive way. Static JSON files are used as the data source.

## ✨ Features

- **Homepage Design** – Delivered via `homepage.html`.
- **Finance Bar** – A scrolling financial ticker simulating real-time market movements (`financebar.json`).
- **News Cards** – Dynamically fetched from `news.json`.
- **Writers Section** – Author profiles are loaded from `yazarlar.json`.
- **Responsive CSS** – Basic styling provided via `style.css`.
- **JavaScript Interactions** – User interactions are handled in the `js/` directory.
> 📂 The categories **Gündem**, **Yazarlar**, and **Ekonomi** include subcategories in the dropdown menu.  
> 🔗 However, these subcategories are not linked to any pages and are non-clickable for now.


## 📱 Responsive Design & Assumptions

This project incorporates various responsive design techniques to enhance mobile and tablet experience:

### General Assumptions

- Larger screens utilize more visual space.
- Smaller screens use a more compact, vertically optimized layout.

### Visual & Component Behaviors

- The **slider** resizes to 95% width on mobile, with image height limited to 200px.
- ⚠️ ***Ad sections (`.sticky-ad.left`, `.sticky-ad.right`) and the weather widget are hidden on mobile.***
- ⚠️ ***Writers section (`#writers-section`) is also hidden on mobile to improve layout.***
- **Category menu** uses `flex-wrap` to wrap properly on smaller viewports.

### Structural Adjustments

- **Navbar** (`.main-nav`) stacks vertically on mobile devices.
- **Search box** and **login/register buttons** expand to full width on mobile.
- **News cards** (`.news-grid`) stack in a single column for better readability.
- **Footer** sections are stacked vertically for improved accessibility.

### UX-Focused Approach

- Hover effects are skipped on mobile.
- Menus and interactive areas are repositioned for easier tapping.

## 🛠️ Technologies Used

- HTML5  
- CSS3  
- JavaScript (Fetch API)  
- Static JSON Mock Data  

## 📁 Folder Structure

- `newsPortal/` – Main project directory
- `homepage.html` – Main page
- `style.css` – Styling rules
- `js/` – JavaScript interactions
- `financebar.json` – Mock finance data
- `news.json` – Mock news content
- `yazarlar.json` – Mock Author data
- `assets/` – Images, icons, etc.



## 🔗 Live Demo

[View Live Site](https://omdgn.github.io/newsPortal/homepage.html)

## 🧑‍💻 Developer Note

This project was created for the **SE 3355 Web Development** midterm. The goal was to enhance front-end development skills through a real-world news portal simulation. No backend or database integration is included.

