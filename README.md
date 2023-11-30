# Node.js Web Scraping Test Drive

## Overview

This project serves as a simple and generic example of web scraping in Node.js using the Puppeteer library. Web scraping is the process of extracting data from websites, and Puppeteer provides a high-level API to control headless browsers, making it an excellent choice for automated web scraping.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/): Make sure to install Node.js, which includes npm (Node Package Manager).

## Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/valerianofilipec/bysWebScraping.git
    ```

2. Navigate to the project directory:

    ```bash
    cd bysWebScraping
    ```

3. Install dependencies:

    ```bash
    npm install
    ```


## Usage
1. Open the scrape.js file in the src directory. This file contains the basic web scraping logic using Puppeteer.

2. Customize the url variable with the target website you want to scrape:

    ```bash
    const url = 'https://www.thesaurus.com/browse/word';
    ```

3. Run the script:

    ```bash
    node src/scrape.js
    ```

This will launch a headless browser, navigate to the specified URL, and extract information from the page. The scraped data will be logged to the console.

## Contributing
Feel free to contribute to this project by submitting issues or pull requests. If you encounter any problems or have suggestions for improvement, please let us know.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
Puppeteer: A high-level API to control headless browsers.

Node.js: JavaScript runtime built on Chrome's V8 JavaScript engine.

Happy Web Scraping! 🕸️