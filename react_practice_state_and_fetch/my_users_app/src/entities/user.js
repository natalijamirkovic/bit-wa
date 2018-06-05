class User {
    constructor (name, email, picture, dob){
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.dob = new Date(dob);
    }

  
  
    hideEmail(email) {

        const myEmail = this.email.split("@");
        myEmail[0] = myEmail[0].slice(0,3) + "...";
        const transformedEmail = myEmail.join("@");
    
        return transformedEmail;
    }
}

export {User}

