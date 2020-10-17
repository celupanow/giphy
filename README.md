
  
  
  
  
  

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]

[![Forks][forks-shield]][forks-url]

[![Stargazers][stars-shield]][stars-url]

[![Issues][issues-shield]][issues-url]

[![MIT License][license-shield]][license-url]

[![LinkedIn][linkedin-shield]][linkedin-url]

  
  
  

<!-- PROJECT LOGO -->

<br />

<p align="center">

<a href="https://github.com/celupanow/giphy">

<img src="images/logo.png" alt="Logo" width="80" height="80">

</a>

  

<h3 align="center">YOUR_TITLE</h3>

  

<p align="center">

YOUR_SHORT_DESCRIPTION

<br />

<a href="https://github.com/celupanow/giphy"><strong>Explore the docs »</strong></a>

<br />

<br />

<a href="https://github.com/celupanow/giphy">View Demo</a>

·

<a href="https://github.com/celupanow/giphy/issues">Report Bug</a>

·

<a href="https://github.com/celupanow/giphy/issues">Request Feature</a>

</p>

</p>

  
  
  

<!-- TABLE OF CONTENTS -->

## Table of Contents

  

* [About the Project](#about-the-project)

* [Built With](#built-with)

* [Getting Started](#getting-started)

* [Prerequisites](#prerequisites)

* [Installation](#installation)

* [Usage](#usage)

* [Roadmap](#roadmap)

* [Contributing](#contributing)

* [License](#license)

* [Contact](#contact)

* [Acknowledgements](#acknowledgements)

  
  
  

<!-- ABOUT THE PROJECT -->

## About The Project

  

[![Product Name Screen Shot][product-screenshot]](https://example.com)

  

Here's a blank template to get started:

**To avoid retyping too much info. Do a search and replace with your text editor for the following:**

`celupanow`, `giphy`, ` `, `christina@christinalupanow.com`

  
  

### Built With

  

* []()

* []()

* []()

  
  
  

<!-- GETTING STARTED -->

## Getting Started

  

To get a local copy up and running follow these simple steps.

  

### Prerequisites

  

This is an example of how to list things you need to use the software and how to install them.

* npm

```sh

npm install npm@latest -g

```

  

### Installation

  

1. Clone the repo

```sh

git clone https://github.com/celupanow/giphy.git

```

2. Install NPM packages

```sh

npm install

```

  
  
  

<!-- USAGE EXAMPLES -->

## Usage

  

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

  

_For more examples, please refer to the [Documentation](https://example.com)_

  
  
  

<!-- ROADMAP -->

## Roadmap

  

See the [open issues](https://github.com/celupanow/giphy/issues) for a list of proposed features (and known issues).

  
  
  

<!-- CONTRIBUTING -->

## Contributing

  

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

  

1. Fork the Project

2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)

3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)

4. Push to the Branch (`git push origin feature/AmazingFeature`)

5. Open a Pull Request

  
  
  

<!-- LICENSE -->

## License

  

Distributed under the MIT License. See `LICENSE` for more information.

  
  
  

<!-- CONTACT -->

## Contact

  

Your Name - [@ ](https://twitter.com/ ) - christina@christinalupanow.com

  

Project Link: [https://github.com/celupanow/giphy](https://github.com/celupanow/giphy)

  
  
  

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

  

* []()

* []()

* []()

  
  
  
  
  

<!-- MARKDOWN LINKS & IMAGES -->

<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/celupanow/giphy.svg?style=flat-square

[contributors-url]: https://github.com/celupanow/giphy/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/celupanow/giphy.svg?style=flat-square

[forks-url]: https://github.com/celupanow/giphy/network/members

[stars-shield]: https://img.shields.io/github/stars/celupanow/giphy.svg?style=flat-square

[stars-url]: https://github.com/celupanow/giphy/stargazers

[issues-shield]: https://img.shields.io/github/issues/celupanow/giphy.svg?style=flat-square

[issues-url]: https://github.com/celupanow/giphy/issues

[license-shield]: https://img.shields.io/github/license/celupanow/giphy.svg?style=flat-square

[license-url]: https://github.com/celupanow/giphy/blob/master/LICENSE.txt

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555

[linkedin-url]: https://linkedin.com/in/celupanow

[product-screenshot]: images/screenshot.png


# giphy
This website uses the Giphy API to pull gifs and display them based on search parameters. Allows users to add their own. Gifs are displayed static and can be clicked to animate or return to static.

Working Link
[Deployed on GitHub Pages](https://celupanow.github.io/giphy)

## Objectives

 - Display a row of buttons that will search the Giphy API.
 - Display the first ten gifs returned by the Giphy API.
 - Allow the user to click each gif to start and stop them.
 - Allow the user to input their own search term and add the button to the page.
 - Display the rating of each gif.
 
## How It Works
When the page loads, it runs a function that displays several buttons that are created from an array of pre-existing search terms and an input field with a submit button. When the user clicks on one of the existing search buttons, a function will run that first uses an AJAX call to the Giphy API to return the first ten gifs and then displays the static version of those gifs and their rating to the DOM. When the user clicks on any of these gifs, a function will run that checks the data state of the gif. If the data state is still, it will animate the gif. If the data state is animate, it will still the gif. If the user types something into the input box and then hits the submit button, their input gets pushed to the original array and the function that displays buttons runs again to repopulate all of the buttons, including the new addition from the user. The user must then click the new button to display the gifs relating to their search term.

## Technologies

 - HTML
 - CSS
 - jQuery
 - JavaScript
 - AJAX
 - Giphy API

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwNTIwMzk2MDgsMjExNDA3NzYzMSwtOD
EwNDA3NzYxLDIwNTAwNzY5NDddfQ==
-->