
function addData()
{
    let name =document.getElementById('fname').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let state = document.getElementById('state').value;
    let city = document.getElementById('city').value;

    let table = document.getElementById('entryTable');
    let row = table.insertRow(table.rows.length);
    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = email;
    row.insertCell(2).innerHTML = number;
    row.insertCell(3).innerHTML = state;
    row.insertCell(4).innerHTML = city;  
    
   name.textContent = "name";
   email.textContent = "email";
   number.textContent = "number";
   state.textContent = "state";
   city.textContent = "city";

        
   document.getElementById('entryForm').reset();


}
        document.getElementById('search').addEventListener('keyup', function() {
            const searchText = document.getElementById('search').value.toLowerCase();
            const table = document.getElementById('entryTable').getElementsByTagName('tbody')[0];
            const rows = table.getElementsByTagName('tr');
            
            for (let i = 0; i < rows.length; i++) {
                const cell1 = rows[i].getElementsByTagName('td')[0];
                if (cell1) {
                    const nameValue = cell1.textContent || cell1.innerText;
                    if (nameValue.toLowerCase().indexOf(searchText) > -1) {
                        rows[i].style.display = "";
                    } else {
                        rows[i].style.display = "none";
                    }
                }       
            }
        });

        



        function clearInputs() {

            // Clear input fields
            document.getElementById("nameInput").value = "";
            document.getElementById("emailInput").value = "";
            document.getElementById("numberInput").value = "";
            document.getElementById("addressInput").value = "";
        }       
function editData(button) {
    let row
    
}    


