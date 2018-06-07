export class User {
    constructor (name, email, picture, dob){
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.dob = dob;
    }

  
  
    hideEmail(email) {

        const myEmail = this.email.split("@");
        myEmail[0] = myEmail[0].slice(0,3) + "...";
        const transformedEmail = myEmail.join("@");
    
        return transformedEmail;
    }
    getDate(){ 
        const date = new Date (this.dob).toDateString().split(" ");
        const newDate = `${date[1]} ${date[2]} ${date[3].slice(2)}`
        return newDate;
    }
}


