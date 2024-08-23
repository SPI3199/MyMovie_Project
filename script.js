        function movies(){
            window.location.href = "Page1.html";
        }

        function create_movies(){
            window.location.href = "create.html";
        }
    
        document.getElementById('email').addEventListener('input', function() {
            validateEmail();
        });
        
        document.getElementById('password').addEventListener('input', function() {
            validatePassword();
        });
        
        function validateEmail() {
            const emailInput = document.getElementById('email');
            const emailLabel = document.getElementById('emailLabel');
            const emailMessage = document.getElementById('emailMessage');
            const emailValue = emailInput.value;
        
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        
            if (emailValue.length > 0) {
                emailInput.classList.add('active');
                emailLabel.classList.add('active');
                emailLabel.textContent = 'Active';
        
                if (emailPattern.test(emailValue)) {
                    emailInput.classList.remove('invalid');
                    emailInput.classList.add('active');
                    emailMessage.classList.add('active');
                    emailMessage.classList.remove('invalid');
                    emailMessage.textContent = 'Active';
                } else {
                    emailInput.classList.add('invalid');
                    emailInput.classList.remove('active');
                    emailLabel.textContent = 'Bad';
                    emailMessage.classList.add('invalid');
                    emailMessage.classList.remove('active');
                    emailMessage.textContent = 'Error';
                }
            } else {
                resetField(emailInput, emailLabel, emailMessage);
            }
        }
        
        function validatePassword() {
            const passwordInput = document.getElementById('password');
            const passwordLabel = document.getElementById('passwordLabel');
            const passwordMessage = document.getElementById('passwordMessage');
            const passwordValue = passwordInput.value;
        
            if (passwordValue.length > 0) {
                passwordInput.classList.add('active');
                passwordLabel.classList.add('active');
                passwordLabel.textContent = 'Active';
        
                if (passwordValue.length >= 8) {
                    passwordInput.classList.remove('invalid');
                    passwordInput.classList.add('active');
                    passwordMessage.classList.add('active');
                    passwordMessage.classList.remove('invalid');
                    passwordMessage.textContent = 'Valid password';
                } else {
                    passwordInput.classList.add('invalid');
                    passwordInput.classList.remove('active');
                    passwordLabel.textContent = 'Bad';
                    passwordMessage.classList.add('invalid');
                    passwordMessage.classList.remove('active');
                    passwordMessage.textContent = 'Password too short';
                }
            } else {
                resetField(passwordInput, passwordLabel, passwordMessage);
            }
        }
        
        function resetField(input, label, message) {
            input.classList.remove('active', 'invalid');
            label.classList.remove('active');
            message.classList.remove('active', 'invalid');
            label.style.display = 'none';
            message.textContent = '';
        }
      
      
        
