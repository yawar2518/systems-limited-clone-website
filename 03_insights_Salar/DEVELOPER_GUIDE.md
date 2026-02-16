# Developer Guide - 03_insights_Salar Section

## Quick Start

1. Open `insights.html` in a browser
2. The page will display a professional blog/insights section
3. Test filtering by clicking category buttons
4. Try the newsletter subscription form

## File Structure

### insights.html
- Main page file
- Contains HTML structure for:
  - Navigation (from common styles)
  - Blog filter buttons
  - 6-card blog grid
  - Featured insights section
  - Newsletter signup form
  - Footer (from common styles)

### style.css
- All custom styling for the insights page
- Includes responsive media queries
- Color variables use CSS custom properties (--systems-*)
- Organized into sections with comments

### script.js
- JavaScript functionality
- Blog filtering logic
- Newsletter form handling
- Event listeners and interactions
- All vanilla JavaScript (no dependencies)

### assets/
- 6 SVG image files (blog-1.svg through blog-6.svg)
- README.md with asset documentation

## Key Classes & IDs

### HTML Elements
```
.blog-filter-section     - Filter buttons container
.filter-btn              - Individual filter button
.blog-section            - Main blog cards container
.blog-grid               - Grid layout for cards
.blog-card               - Individual blog article card
.blog-image-wrapper      - Image container with overlay
.blog-overlay            - Hover overlay
.featured-insights       - Featured section
.newsletter-section      - Newsletter signup area
```

### Data Attributes
```
data-category="all"              - All articles
data-category="digital"          - Digital Transformation
data-category="cloud"            - Cloud Solutions
data-category="data"             - Data Analytics
data-category="enterprise"       - Enterprise Solutions
```

## CSS Custom Properties (Variables)

Located in `:root` section:
```css
--systems-blue: #0047AB              /* Primary blue */
--systems-blue-dark: #003380         /* Dark blue */
--systems-gray: #6c757d              /* Gray text */
--systems-gray-light: #f8f9fa        /* Light gray bg */
--systems-white: #ffffff             /* White */
--transition-speed: 0.3s             /* Animation duration */
```

## JavaScript Functions

### Blog Filtering
```javascript
// Event listener on filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Filter logic here
    });
});
```

### Newsletter Form
```javascript
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Form submission logic
});
```

## How to Customize

### Change Blog Categories
1. Edit `data-category` in HTML cards
2. Update filter buttons with new categories
3. Add CSS for new category badges

### Modify Blog Cards
1. Duplicate a card in HTML
2. Change category, title, excerpt
3. Update image reference
4. Add new author/date

### Update Styling
1. Modify colors in `:root` section
2. Adjust grid columns in `.blog-grid`
3. Modify animation times in `--transition-speed`

### Add New Images
1. Save SVG to assets/ folder
2. Follow naming convention (blog-7.svg, etc.)
3. Update HTML to reference new image
4. Add documentation to assets/README.md

## Testing

### Browser DevTools
- Inspect elements with F12
- Check responsive design with device emulation
- Test filter functionality in console
- Monitor network tab for image loading

### Functionality Testing
- [ ] Filter buttons work correctly
- [ ] Hover effects on cards appear
- [ ] Newsletter form validates email
- [ ] Images load without errors
- [ ] Responsive layout on mobile
- [ ] Navigation links work

## Performance Tips

1. **Optimize Images**
   - SVG format already optimized
   - Consider lazy loading for many cards

2. **CSS Optimization**
   - Use CSS Grid over Flexbox for layout
   - Hardware acceleration with transform/opacity
   - Minimize repaints with will-change

3. **JavaScript Optimization**
   - Event delegation for many elements
   - Debounce scroll events if needed
   - Cache DOM queries

## Integration with Other Pages

- Links in navbar already point to insights.html
- Footer contains link to insights page
- Common styling from common/ folder

## Troubleshooting

### Images not showing
- Check assets folder exists
- Verify image filenames match references
- Check browser console for 404 errors

### Filter not working
- Check filter button data-category values
- Verify blog card data-category matches
- Open DevTools console for JavaScript errors

### Newsletter form not submitting
- Check email input type="email"
- Verify form event listener is attached
- Check browser console for errors

## Future Integration

### Backend API Integration
```javascript
// Example: Connect Load More button
loadMoreBtn.addEventListener('click', async function() {
    const response = await fetch('/api/blog/articles');
    const data = await response.json();
    // Add new cards to grid
});
```

### Database Schema (Suggested)
```
BlogArticles Table:
- id (primary key)
- title (string)
- excerpt (string)
- content (text)
- author (string)
- date (timestamp)
- category (string)
- image_url (string)
- views (integer)
```

## Resources

- [MDN Web Docs - CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

---

**Created**: February 1, 2026  
**Version**: 1.0  
**Status**: ✅ Production Ready
