

import readline from "readline-sync";
import axios from "axios";
import dotenv from "dotenv";
import chalk from "chalk";
import got from "got";

dotenv.config();

async function call() {
  try {
    console.clear();
    let cityName = readline.question(chalk.bold.green("Enter your city :"));
    let apiKey = process.env.KEY;

    if (!cityName) {
      console.clear();
      console.log(chalk.bold.red("🔎 Enter a valid city name :"));
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

    let response = await axios.get(url);

    console.clear();
    console.log(chalk.bold.cyanBright(` 🌥️  Weather Report of ${cityName}`));
    // console.log(response.data);

    // console.log(`${chalk.bold.yellow("📍 Location           :")}${location}`);
    // console.log(`${chalk.bold.yellow("👥 Followers          :")}${followers}`);
    // console.log(`${chalk.bold.yellow("🔁 Following          :")}${following}`);

    console.log(
      `${chalk.bold.yellow(`\n\n The temperature in ${cityName} is  :`)}${
        response.data.main.temp
      }`
    );
    console.log(
      `${chalk.bold.yellow(` The Pressure in ${cityName} is     :`)}${
        response.data.main.pressure
      }`
    );
    console.log(
      `${chalk.bold.yellow(` The Humidity in ${cityName} is     :`)}${
        response.data.main.humidity
      }`
    );
    console.log(
      `${chalk.bold.yellow(` The Discription of ${cityName} is  :`)}${
        response.data.weather.description
      }`
    );
    console.log(
      `${chalk.bold.yellow(` The Latitude of ${cityName} is     :`)}${
        response.data.coord.lat
      }`
    );
    console.log(
      `${chalk.bold.yellow(` The Longtitude of ${cityName} is   :`)}${
        response.data.coord.lon
      }\n\n`
    );
  } catch (error) {
    console.log(error);
  }
}

call();







// import readline from "readline-sync";
// import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

// async function main() {
//   try {
//     let cityName = readline.question("Enter the City Name : ");
//     let apiKey = process.env.KEY;

//     if (!cityName) {
//       return console.log("Please Enter a City Name");
//     }

//     let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

//     let response = await axios.get(url);
//     console.log(response.data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// main();


// temp
// pressure
// humidity
// description
// lat
// lon



// Task 1
// Fix your github cli
// use chalk and terminal image , got 


// Task 2
// Use openweather api
// and get me details and beatify it
//  temp
// pressure
// humidity
// description
// lat
// lon

// when you complete this add a screenshot of it in grp

// Deadline : 10:00pm 4th April 2025