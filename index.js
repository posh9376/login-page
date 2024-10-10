document.addEventListener('DOMContentLoaded', ()=>{
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let userName  = e.target.sername.value
        let mail = e.target.mail.value
        let pass = e.target.password.value

        setTimeout(send(userName, mail),5000)
    })

    

    function send(username, email) {
        alert(`Your username ${username} and email ${email} have been successfully registered`)
    }
})