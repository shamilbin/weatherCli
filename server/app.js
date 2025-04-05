

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

// call();


// import terminalImage from 'terminal-image';
// import got from 'got';
//got is a library that helps you download stuff from the internet 


// const body = await got(avatar_url).buffer();
//got(avatar_url).buffer()--> downloads the image and gives it in raw binary format (Node.js calls this a "buffer").

// console.log(await terminalImage.buffer(body));
//terminalImage.buffer(body) takes that image buffer and converts it to a format that can be printed in the terminal.

/* p.s: When you fetch an image(.jpg or .png) from the internet, 
it's in binary form and not readable text like JSON or HTML.
The terminalImage package knows how to take binary image data and turn it into colored characters 
and pixels you can see in the terminal. */
