class Show {
    constructor(id, title, cover) {
        this.id = id;
        this.title = title;
        this.cover = cover;
        this.seasons = [];
        this.cast = [];
        this.summary;
    }
}

export default Show;