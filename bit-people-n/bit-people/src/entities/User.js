

export class User {
    constructor(name, surname, email, avatar, picture, dob, gender) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.avatar = avatar;
        this.picture = picture;
        this.dob = dob;
        this.gender = gender;
    }

    getUserEmail() {
        const emailArr = this.email.split('@');
        emailArr[0] = emailArr[0].slice(0, 3) + '...';
        return emailArr.join('@');
    }
    getDate() {
        const date = new Date(this.dob).toDateString().split(" ");
        const newDate = `${date[1]} ${date[2]} ${date[3].slice(2)}`;
        return newDate;
    }

}