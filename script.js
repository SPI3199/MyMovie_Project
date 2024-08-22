


document.getElementById('form').addEventListener('Submit',function(event){
    event.preventDefault();

    const emailInput = document.getElementById('email');
    const email = emailInput.value;
    const errorMessage = document.getElementById('error-message');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email))
            errorMessage.textContent='Invalid email address';
        clearInputs();
    });


    document.getElementById('form').addEventListener('Submit',function(event){
        event.preventDefault();
    
        const passwordInput = document.getElementById('password');
        const password = passwordInput.value;
        const errorMessage = document.getElementById('error-message');
        const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/;
    
        if (!passwordRegex.test(password))
                errorMessage.textContent='Invalid Number';
            clearInputs();
        });


        function index(){
            window.location.href = "index.html";
        }
        
        function movies(){
            window.location.href = "Page1.html";
        }
        
        function create_movies(){
            window.location.href = "create.html";
        }
        
        
        function my_movies(){
            window.location.href = "movies.html";
        }