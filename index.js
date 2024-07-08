document.getElementById('myForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('companyError').textContent = '';

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var company = document.getElementById('company').value;

    // Validate name
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
    }
  
    // Validate email
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required';
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
    }

    // Validate password
    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'Password must be at least 6 characters';
    }

    // Validate company size
    if (companysize === '') {
        document.getElementById('company-sizeError').textContent = 'companysize is required';
    }
    // Validate company 
    if (company === '') {
        document.getElementById('companyError').textContent = 'company is required';
    } 
    
  
        // Example of form submission:
        // document.getElementById('registrationForm').submi
    // If no errors, submit the form (you can also perform further actions here)
    if (document.getElementById('nameError').textContent === '' &&
        document.getElementById('emailError').textContent === '' &&
        document.getElementById('passwordError').textContent === ''&& 
        document.getElementById('companyError').textContent === '') {
        alert('Form submitted successfully!');
        // Here you can also submit the form using AJAX or similar methods
    }

    
});

 

function validateEmail(email) {
    // Simple email regex pattern
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);


}



