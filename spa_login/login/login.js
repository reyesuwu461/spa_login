// API simulation using JSON Server
const userApi = {
  "validCredentials": [
    {
      "id": 1,
      "username": "user.api",
      "password": "pwdapi",
      "redirect": "home"
    },
    {
      "id": 2,
      "username": "033550336",
      "password": "814923",
      "redirect": "../spa/index.html"
    }
  ]
};

// Function to validate credentials against the API
function validateCredentials(username, password) {
  return userApi.validCredentials.find(user => 
    user.username === username && user.password === password
  );
}

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('uid').value.trim();
    const password = document.getElementById('verification_code').value.trim();
    
    // Validate input fields
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }
    
    // Check for additional unexpected fields
    const allInputs = loginForm.querySelectorAll('input[type="text"], input[type="password"]');
    if (allInputs.length > 2) {
      console.warn('Warning: Additional input fields detected in the form');
    }
    
    // Validate credentials
    const validUser = validateCredentials(username, password);
    
    if (validUser) {
      // Store only authentication status, not credentials
      sessionStorage.setItem('isLoggedIn', 'true');
      
      // Redirect based on user type
      if (username === 'user.api' && password === 'pwdapi') {
        window.location.href = 'home.html';
      } else {
        window.location.href = validUser.redirect || 'my-page.html';
      }
    } else {
      alert('Invalid username or password');
      // Clear fields
      document.getElementById('uid').value = '';
      document.getElementById('verification_code').value = '';
      document.getElementById('uid').focus();
    }
  });

  // Clear any previously stored credentials
  if (localStorage.getItem('verification_code')) {
    localStorage.removeItem('verification_code');
    console.log('Cleared previously stored password from localStorage');
  }
});

// Export for JSON Server (simulated)
if (typeof exports !== 'undefined') {
  exports.userApi = userApi;
}
