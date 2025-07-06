document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const uid = document.getElementById('uid').value.trim();
        const code = document.getElementById('verification_code').value.trim();
        
        if (uid === '033550336' && code === '814923') {
            localStorage.setItem('isLoggedIn', 'true');
            // Redirigir al SPA principal
            window.location.href = '../spa/index.html';
        } else {
            alert('Invalid UID or Verification Code');
            document.getElementById('uid').value = '';
            document.getElementById('verification_code').value = '';
            document.getElementById('uid').focus();
        }
    });
});