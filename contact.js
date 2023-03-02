
// OOP (object-oriented-programming)

class UserDetails {
    constructor(name, email, message) {
        this.name = name
        this.email = email
        this.message = message
    }
}


let btn = document.getElementById('send_response').addEventListener('click', myfunction)


function myfunction(e) {
    e.preventDefault()
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let message=document.getElementById('message').value

    
    
    if(name==='' || email==='' || message===''){
        alert('Please fill form details')
        
    }else{
        
        const userMessage=new UserDetails(name,email,message)
        localStorage.setItem('userMessage',JSON.stringify(userMessage))
        alert('Thanks for Your valuable Response. have a Good Day :)')
    }
   
    

}