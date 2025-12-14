
document.getElementById('formCredentials').addEventListener('submit', function(event){
//Prevents default form submission(reload)
    event.preventDefault();

    //Getting form values
    const formData = {
        firstName: document.getElementById('fname').value,
        secondName: document.getElementById('sname').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    };

    //logging to the console
    console.log('Credentials submitted successfully..');
    console.log('First Name:', formData.firstName);
    console.log("Second Name: ", formData.secondName);
    console.log('Email Address: ', formData.email);
    console.log('Password: ', formData.password);

    //Optional
      console.log('Complete Form Data Object:', formData);

      //alert('Form Data Submitted Succesfully!!');

    //Clearing the form after submission
    this.reset();

});