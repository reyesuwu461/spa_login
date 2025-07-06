# SPA with Login System

A Single Page Application with secure login functionality and content management system.

## Project Structure
SPA-LOGIN/
├── game/ # Game files directory
│ └── index.html # Game entry point
│
├── login/ # Login system directory
│ ├── img/ # Login-related images
│ ├── login.html # Login page
│ ├── login.js # Login logic and validation
│ └── styles.css # Login page styles
│
└── spa/ # Main application directory
├── db.json # Mock database (optional)
├── index.html # Main SPA entry point
├── script.js # Main application logic
└── styles.css # Application styles

text

## Features

### Login System
- Secure credential validation (UID and verification code)
- Session management using localStorage
- Form validation and error handling
- Redirect protection

### Main Application
- Content management for articles and products
- Dark/light theme toggle
- LocalStorage management interface
- Embedded game functionality
- CRUD operations for content items

### Game Integration
- Game overlay system
- Error handling for game loading
- Retry mechanism

## How It Works

1. **Authentication Flow**:
   - User accesses the application
   - `checkLoginStatus()` verifies authentication
   - If not logged in, redirects to `/login/login.html`
   - Successful login sets `isLoggedIn` flag and redirects to `/spa/index.html`

2. **Content Management**:
   - Tab system for switching between articles and products
   - Form dynamically adjusts based on content type
   - All data persisted in localStorage

3. **Theme System**:
   - Toggle between dark/light modes
   - Preference saved in localStorage

4. **Game Feature**:
   - Accessible via floating button
   - Loads game in overlay iframe
   - Handles loading errors gracefully

## Setup Instructions

1. Clone the repository
2. Open `/login/login.html` to start
3. Use these credentials:
   - UID: `033550336`
   - Verification Code: `814923`

## Dependencies

- Modern browser with localStorage support
- No external libraries required (vanilla JavaScript)

## Customization

- Edit `/spa/script.js` to modify content types
- Update `/login/login.js` to change credentials
- Modify CSS files for visual changes

## Known Issues

- Game path needs to be configured based on actual game location
- Form validation could be more robust

## Future Improvements

- Add proper backend authentication
- Implement proper user roles
- Add database integration
- Improve game loading reliability

This README provides:

1. Clear project structure explanation

2. Key features overview

3. vHow the system works

4. Setup instructions

5. Customization options

6. Areas for improvement