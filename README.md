    # Systems Limited Clone - Web Engineering Project

A collaborative web development project cloning the Systems Limited website.

## 📁 Project Structure

```
Systems-Limited-Clone/
├── common/                      # 🔒 SHARED (Do NOT modify without team approval)
│   ├── bootstrap.min.css        # Bootstrap CSS
│   └── bootstrap.bundle.min.js  # Bootstrap JS
│
├── 01_home_Yawar/              # 👤 YAWAR's Section
│   ├── index.html              # Home Page
│   ├── style.css               # Home Page Styles
│   ├── script.js               # Home Page JavaScript
│   └── assets/                 # Home assets + SHARED LOGOS
│       ├── logo-white.svg      # 🔒 Shared logo (white version)
│       └── logo-dark.svg       # 🔒 Shared logo (dark version)
│
├── 02_services_Inayat/         # 👤 INAYAT's Section
│   ├── services.html           # Services Page
│   ├── style.css               # Services Page Styles
│   ├── script.js               # Services Page JavaScript
│   └── assets/                 # Service icons, images
│
├── 03_insights_Salar/          # 👤 SALAR's Section
│   ├── insights.html           # Insights/Blog Page
│   ├── style.css               # Insights Page Styles
│   ├── script.js               # Insights Page JavaScript
│   └── assets/                 # Blog images, thumbnails
│
└── 04_contact_Misha/           # 👤 MISHA's Section
    ├── contact.html            # Contact Page
    ├── style.css               # Contact Page Styles
    ├── script.js               # Contact Page JavaScript
    └── assets/                 # Maps, office photos
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yawar2518/systems-limited-clone-website.git
cd Systems-Limited-Clone
```

### 2. Open in VS Code
```bash
code .
```

### 3. Install Live Server Extension
- Install "Live Server" extension in VS Code
- Right-click on any HTML file → "Open with Live Server"

---

## 👥 Team Member Guidelines

### 🔴 IMPORTANT RULES

1. **ONLY work in YOUR assigned folder**
   - Yawar → `01_home_Yawar/`
   - Inayat → `02_services_Inayat/`
   - Salar → `03_insights_Salar/`
   - Misha → `04_contact_Misha/`

2. **DO NOT modify these files without team approval:**
   - `common/` folder (Bootstrap files)
   - `01_home_Yawar/assets/logo-*.svg` (shared logos)
   - Navbar/Footer HTML in other members' files

3. **DO NOT change navigation links** - They are already configured

---

## 📝 What Each Member Should Do

### Yawar (Home Page)
**File:** `01_home_Yawar/index.html`
- [ ] Create hero section with video/image background
- [ ] Add company introduction section
- [ ] Create statistics/counter section
- [ ] Add client logos section
- [ ] Build "Why Choose Us" section
- Add your styles in `style.css` under the marked section
- Add your JavaScript in `script.js` under the marked section

### Inayat (Services Page)
**File:** `02_services_Inayat/services.html`
- [ ] Create services grid/cards
- [ ] Add individual service details
- [ ] Build service categories
- [ ] Add icons for each service
- [ ] Create call-to-action sections
- Add your styles in `style.css` under the marked section
- Add your JavaScript in `script.js` under the marked section

### Salar (Insights Page)
**File:** `03_insights_Salar/insights.html`
- [ ] Create blog/article cards
- [ ] Add category filters
- [ ] Build featured article section
- [ ] Create pagination
- [ ] Add search functionality
- Add your styles in `style.css` under the marked section
- Add your JavaScript in `script.js` under the marked section

### Misha (Contact Page)
**File:** `04_contact_Misha/contact.html`
- [ ] Create contact form with validation
- [ ] Add Google Maps embed
- [ ] Build office locations section
- [ ] Add contact information cards
- [ ] Create FAQ section (optional)
- Add your styles in `style.css` under the marked section
- Add your JavaScript in `script.js` under the marked section

---

## 🎨 Styling Guidelines

### Color Palette (Use these CSS variables)
```css
--systems-blue: #0047AB;      /* Primary Blue */
--systems-blue-dark: #003380; /* Dark Blue */
--systems-blue-light: #1a5dc8;/* Light Blue */
--systems-dark: #121212;      /* Near Black */
--systems-gray: #6c757d;      /* Gray */
--systems-gray-light: #f8f9fa;/* Light Gray */
--systems-white: #ffffff;     /* White */
```

### Where to Add Your Styles
Each `style.css` file has a marked section at the bottom:
```css
/* ============================================
   [YOUR NAME] - [Page] Page Specific Styles
   ============================================ */
/* Add your custom styles below this line */
```

### Where to Add Your JavaScript
Each `script.js` file has a marked section at the bottom:
```javascript
// ============================================
// [YOUR NAME] - [Page] Page Specific JavaScript
// ============================================
// Add your custom JavaScript below this line
```

---

## 🔄 Git Workflow

### Before Starting Work
```bash
git pull origin main
```

### After Making Changes
```bash
git add .
git commit -m "Yawar: Added hero section to home page"
git push origin main
```

### Commit Message Format
```
[YourName]: Brief description of changes
```
Examples:
- `Yawar: Added hero section with video background`
- `Inayat: Created service cards grid`
- `Salar: Added blog post filtering`
- `Misha: Implemented contact form validation`

---

## 🔗 Navigation Links (Already Configured)

| Page | URL |
|------|-----|
| Home | `../01_home_Yawar/index.html` |
| Services | `../02_services_Inayat/services.html` |
| Insights | `../03_insights_Salar/insights.html` |
| Contact | `../04_contact_Misha/contact.html` |

---

## ✅ Pre-built Features (Already Working)

- ✅ Responsive navbar with scroll effect (transparent → white)
- ✅ Logo switching on scroll (white → dark)
- ✅ Dropdown menu for Services
- ✅ Search overlay functionality
- ✅ Mobile responsive navigation
- ✅ Footer with links and social icons
- ✅ All page routing configured

---

## 🛠 Technologies Used

- HTML5
- CSS3 (with CSS Variables)
- JavaScript (ES6+)
- Bootstrap 5.3
- Font Awesome 6.4
- Google Fonts (Montserrat)

---

## 📞 Need Help?

Contact the team lead (Yawar) for:
- Navbar/Footer changes
- Shared assets modifications
- Merge conflicts
- General project questions

---

## 📅 Project Timeline

Before the Final Exam
---

