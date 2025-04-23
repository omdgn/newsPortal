📰 News Portal
A simple and functional news site front-end design that presents news content to users through a modern web interface.

📌 Project Overview
This project aims to deliver news in an accessible, readable, and interactive way for users. Static JSON files are used as the data source.

✨ Key Features
📄 Homepage Design: Delivered via homepage.html.
🔄 Finance Bar: A scrolling financial ticker simulating real-time market movements (financebar.json).
🗞️ News Cards: Dynamically fetched from news.json.
✍️ Writers Section: Author profiles are loaded from yazarlar.json.
🎨 Responsive CSS: Basic styling provided through style.css.
🧠 JavaScript Interactions: All user interactions are managed inside the js/ directory.

📱 Responsive Design & Assumptions
This project incorporates various responsive design techniques to enhance the experience on mobile and tablet devices. Below are the assumptions and mobile-specific adjustments:

📐 General Assumptions
Larger screens utilize more visual space, while smaller screens are optimized for a vertical layout with reduced clutter.

📉 Visual & Component Behaviors
The slider is resized to 95% width on small screens, and image height is limited to 200px.
***Ad sections (.sticky-ad.left, .sticky-ad.right) and the weather widget are fully hidden on mobile devices.***
***The writers section (#writers-section) is not displayed on mobile to preserve screen space.***
The category menu wraps lines using flex-wrap for proper alignment on smaller viewports.

🧱 Structural Adjustments
Navbar (.main-nav) is stacked vertically on mobile devices.
Search box and login/register buttons span full width on mobile instead of horizontal layout.
News cards (.news-grid) display in a single column on mobile for full-width visibility.
Footer is stacked vertically on small screens to improve readability.

💡 UX-Focused Approach
Hover effects are skipped for mobile as touchscreens don’t support them.
Menus and interactive elements are repositioned for easier tapping and navigation.

🛠️ Technologies Used
HTML5
CSS3
JavaScript (Fetch API)
Static JSON Mock Data

📁 Folder Structure
bash
Kopyala
Düzenle
newsPortal/
│
├── homepage.html          # Main page
├── style.css              # Styling rules
├── js/                    # JavaScript interactions
├── financebar.json        # Mock finance data
├── news.json              # Mock news content
├── yazarlar.json          # Author data (mock)
└── assets/                # Images, icons, etc.

🔗 Live Demo
[View Live Site](https://omdgn.github.io/newsPortal/homepage.html)

📌 Developer Note
This project was developed as part of the SE 3355 Web Development course midterm. It aims to improve front-end development skills through the simulation of a real-life news portal interface. There is no backend or database integration included.
