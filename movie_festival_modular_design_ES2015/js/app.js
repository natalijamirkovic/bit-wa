import * as data from "./data.js";

import * as ui from "./ui.js";



const createMovieButton = document.querySelector("#create-movie"),
    createProgramButton = document.querySelector("#create-program"),
    addMovieToProgramButton = document.querySelector("#add-movie");

const onMovieButtonClick = () => {
    const movieErrorElement = document.querySelector("#movie-error");

    const { title, length, genre } = ui.collectMovieData();

    if (!data.isValidateMovie(title, length, genre)) {
        movieErrorElement.textContent = "Invalid input!";
        return;
    }

    const createdMovie = data.createMovie(title, length, genre);
    const index = data.addMovie(createdMovie);

    ui.updateMovieList(createdMovie, index);
    ui.clearInputs();
};


const onCreateProgramClick =  () => {
    const programErrorElement = document.querySelector("#program-error");

    const { date } = ui.collectProgramData();

    if (!data.isValidProgram(date)) {
        programErrorElement.textContent = "Invalid input!";
        return;
    }

    const createdProgram = data.createProgram(date);
    const index = data.addProgram(createdProgram);

    ui.updateProgramList(createdProgram, index);
};


const onAddMovieClick = () => {

    const { movieIndex, programIndex } = ui.collectAddMovieFormData();

    const { program, oldProgramData } = data.addMovieToProgram(movieIndex, programIndex);

    ui.updateProgramData(program, oldProgramData);

};


export const init = () => {
    createMovieButton.addEventListener("click", onMovieButtonClick);
    createProgramButton.addEventListener("click", onCreateProgramClick);
    addMovieToProgramButton.addEventListener("click", onAddMovieClick);
}

