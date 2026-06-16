const contacts = [
    {
        id : 1,
        name : "Abel John Jose",
        role : "Department Representative",
        phoneNo : "+91 1234567890",
        mail : "example@email.com"
    },

    {   
        id : 2,
        name : "Abel John Jose",
        role : "Department Representative",
        phoneNo : "+91 1234567890",
        mail : "example@email.com"
    },

    {   
        id : 3,
        name : "Abel John Jose",
        role : "Department Representative",
        phoneNo : "+91 1234567890",
        mail : "example@email.com"
    },

];

function Help(){
    return (
        <main className ="help-page">
        <h1>Help</h1>
        <p>Questions, concerns or suggestions? Get in touch with us</p>
        <div className = "contact-flex">
            {
                contacts.map((contact) => (
                    <div key={contact.id} className="contact">
                        <p>{contact.name}</p>
                        <p>{contact.role}</p>
                        <p>{contact.phoneNo}</p>
                        <a href='{mailto:${contact.mail}'>{contact.mail}</a>
                    </div>
    ))}
        </div>
        </main>
    )
}

export default Help;