# Quick Start Guide - PCKey Digital Solutions Website

## 🚀 Getting Started

### Method 1: Open Directly in Browser
1. Navigate to the FRONTEND folder
2. Double-click `index.html` to open in your default browser
3. Navigate to other pages using the menu

### Method 2: Using a Local Server (Recommended)
For better testing of dynamic features, use a local server:

#### Option A: Python (if installed)
```bash
cd /Users/kailash/Downloads/FRONTEND-updated/FRONTEND
python3 -m http.server 8000
```
Then open: http://localhost:8000

#### Option B: VS Code Live Server
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

#### Option C: Node.js http-server
```bash
npx http-server -p 8000
```

## 📄 Pages Overview

### Home Page (index.html)
- **URL**: `/index.html` or `/`
- **Features**: Hero section, Services, Technologies, FAQ, Contact

### About Page (service.html)
- **URL**: `/service.html`
- **Features**: Company info, Why Choose Us, Team members

## 🎨 Customization Quick Reference

### Change Company Name
Update in these files:
- `index.html` - `<title>` tag
- `service.html` - `<title>` tag
- `navbar.html` - Company name in header
- `footer.html` - Footer heading and copyright

### Change Contact Information
Update in these files:
- `footer.html` - All contact details
- `index.html` - Contact section
- Update email links and phone numbers

### Change Colors
In both `index.html` and `service.html`, find this section in `<head>`:
```javascript
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          primary: '#1e94df',    // Your primary color
          secondary: '#272727ff', // Your secondary color
        }
      }
    }
  }
</script>
```

### Add/Remove Services
In `index.html`, find the Services Section and modify the service cards.

### Modify Navigation Menu
Edit `navbar.html` to add or remove menu items.

## 🔍 Testing Checklist

### Desktop Testing
- ✅ Navigation works
- ✅ All links functional
- ✅ Typing animation working
- ✅ FAQ accordion opens/closes
- ✅ Hover effects working
- ✅ Contact form validates

### Mobile Testing
- ✅ Hamburger menu opens
- ✅ All sections responsive
- ✅ Touch targets adequate
- ✅ Text readable
- ✅ Images scale properly

### Cross-Page Testing
- ✅ Navbar loads on all pages
- ✅ Footer loads on all pages
- ✅ Navigation between pages works
- ✅ Active page highlighted in menu

## 🐛 Troubleshooting

### Navbar/Footer Not Showing
**Problem**: Header or footer not appearing
**Solution**: Make sure you're running from a local server (not just opening the file)

### Typing Effect Not Working
**Problem**: Typing animation not starting
**Solution**: Check browser console for JavaScript errors, ensure app.js is loaded

### Styles Not Applied
**Problem**: Page looks unstyled
**Solution**: Check internet connection (Tailwind CSS loads from CDN)

### Images Not Loading
**Problem**: Images showing broken icon
**Solution**: Ensure all .webp and .avif files are in the same directory as HTML files

## 📱 WhatsApp Button
The WhatsApp floating button is configured with: **+91 9348710327**
To change: Edit the `href` in the WhatsApp link in `index.html`

## 🎯 File Dependencies

```
index.html
  ├─ Loads: navbar.html (via app.js)
  ├─ Loads: footer.html (via app.js)
  └─ Includes: app.js

service.html
  ├─ Loads: navbar.html (via app.js)
  ├─ Loads: footer.html (via app.js)
  └─ Includes: app.js

app.js
  ├─ Manages: Typing effect
  ├─ Manages: FAQ accordion
  ├─ Manages: Mobile menu
  └─ Manages: Smooth scrolling
```

## 🚀 Deployment

### For GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Select main branch
5. Your site will be at: `https://username.github.io/repository-name`

### For Netlify
1. Sign up at netlify.com
2. Drag and drop the FRONTEND folder
3. Site will be live instantly

### For cPanel/Traditional Hosting
1. Upload all files to public_html directory
2. Ensure index.html is in the root
3. Set proper file permissions (644 for files, 755 for directories)

## 📊 Performance Tips

1. **Optimize Images**: Convert large images to WebP format
2. **Enable Caching**: Configure server caching headers
3. **Minify Code**: Use tools to minify JavaScript for production
4. **CDN**: Tailwind CSS is already on CDN for fast loading
5. **Lazy Loading**: Consider adding lazy loading for images

## 🔐 Security Checklist

- ✅ No sensitive data in client-side code
- ✅ Form validation in place
- ✅ External links open in new tab (where appropriate)
- ✅ Email/phone links properly formatted
- ⚠️ Add backend validation for contact form before production

## 📞 Support

For questions or issues with this website:
- Email: info@pckeydigital.com
- Phone: +91 9348710327

---

**Last Updated**: November 30, 2025
**Version**: 1.0
**Framework**: Tailwind CSS
**Browser Compatibility**: All modern browsers
