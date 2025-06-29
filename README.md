# Portfolio Website

A full-stack portfolio website built with React and Express.js to showcase projects, experience, and contact information.

## 🚀 Live Demo

Visit the live site: [](https://www.venkatsubra.com/)

## 📁 Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── Components/     # React components
│   │   │   ├── Contact/    # Contact form component
│   │   │   ├── Experience/ # Experience section
│   │   │   ├── Footer/     # Footer component
│   │   │   ├── Hero/       # Hero section with interactive dots
│   │   │   ├── MyWork/     # Projects showcase
│   │   │   └── Navbar/     # Navigation component
│   │   ├── assets/         # Images, data files, and static assets
│   │   ├── pages/          # Main App component
│   │   └── main.jsx        # React entry point
│   ├── public/             # Public assets
│   └── package.json        # Client dependencies
├── server/
│   └── server.js           # Express server
├── package.json            # Server dependencies and scripts
└── README.md
```

## 🛠️ Technology Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Framer Motion** - Animations and transitions
- **EmailJS** - Contact form functionality
- **CSS3** - Styling with responsive design

### Backend
- **Express.js** - Web server framework
- **EmailJS Node** - Server-side email handling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🌟 Features

- **Interactive Hero Section** - Animated dot canvas that responds to mouse movement
- **Experience Filter** - Filter experiences by category (Software Development, Research, Other)
- **Project Showcase** - Hover effects with GIF previews
- **Contact Form** - Functional contact form with email integration
- **Responsive Design** - Mobile-friendly layout
- **Smooth Animations** - Framer Motion animations throughout

## 🔧 Server Setup

The server is built with Express.js and handles:

1. **Static File Serving** - Serves the built React app from `client/dist`
2. **API Routes** - Contact form submission endpoint at `/api/contact`
3. **Email Integration** - Uses EmailJS to send contact form submissions
4. **Environment Variables** - Manages sensitive data like API keys

### Environment Variables

Create a `.env` file in the root directory:

```env
EMAIL_JS_SERVICE_ID=your_emailjs_service_id
EMAIL_JS_TEMPLATE_ID=your_emailjs_template_id
EMAIL_JS_PUBLIC_KEY=your_emailjs_public_key
PORT=8000
```

## 🚀 Running Locally

### Prerequisites
- Node.js (v23.9.0 or higher)
- npm (v10.9.2 or higher)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/venkatsubra01/portfolio.git
   cd portfolio
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables**
   - Create a `.env` file in the root directory
   - Add your EmailJS credentials (see Environment Variables section above)

5. **Run in development mode**

   **Option A: Run both server and client separately**
   
   Terminal 1 (Server):
   ```bash
   npm start
   ```
   
   Terminal 2 (Client):
   ```bash
   cd client
   npm run dev
   ```
   
   - Server runs on `http://localhost:8000`
   - Client runs on `http://localhost:5173`

   **Option B: Build and run production mode**
   ```bash
   npm run build
   npm start
   ```
   - Full app runs on `http://localhost:8000`

### Development URLs
- **Frontend Development**: `http://localhost:5173`
- **Backend Server**: `http://localhost:8000`
- **Production Build**: `http://localhost:8000`

## 📧 Contact Form Setup

The contact form uses EmailJS for email functionality:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up a service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

## 🚢 Deployment

The project is configured for Heroku deployment:

1. **Heroku Build Process**:
   - `heroku-postbuild` script runs `npm run build`
   - Installs client dependencies and builds React app
   - Server serves built files from `client/dist`

2. **Deploy to Heroku**:
   ```bash
   git add .
   git commit -m "Deploy to Heroku"
   git push heroku main
   ```

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- Desktop: > 1254px
- Tablet: 1060px - 1254px  
- Mobile: < 1060px

## 🎨 Customization

### Adding New Projects
Edit `client/src/assets/mywork_data.js` to add new projects with:
- Project name, description, and images
- Technology tags with colors
- Links to live demos or repositories

### Adding New Experience
Edit `client/src/assets/myexperience_data.js` to add new experience with:
- Company information and dates
- Role descriptions and achievements
- Technology tags and categories

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Venkat Subramanian**
- GitHub: [@venkatsubra01](https://github.com/venkatsubra01)
- LinkedIn: [venkat-subramanian5](https://www.linkedin.com/in/venkat-subramanian5)

---

Built with ❤️ using React and Express.js
