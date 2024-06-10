<div style="display: flex; align-items: center; gap: 10px;">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" height="20">
  </a>
  <a href="https://github.com/ColdWeatherBoyy/pt-timer/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/ColdWeatherBoyy/pt-timer.svg?style=for-the-badge" alt="Contributors" height="20">
  </a>
  <a href="https://github.com/ColdWeatherBoyy/pt-timer">
      <img src="https://img.shields.io/badge/GitHub-Repo-699897?logo=github" alt="Repo Size" height="20">
  </a>
  <a href="https://physicaltherapytimers.eliassz.com">
      <img src="https://img.shields.io/badge/Live-Site-72a1be" alt="Repo Size" height="20">
  </a>
</div>
<br />
<div style="text-align:center">
  <h1>Physical Therapy Timers</h1>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About the Project

This is a <a href="https://nextjs.org/">Next.js</a> project bootstrapped with <a href="https://github.com/vercel/next.js/tree/canary/packages/create-next-app">`create-next-app`</a> and scaffolded with <a href="https://docs.amplify.aws/nextjs/start/manual-installation/">`npm create amplify@latest`</a> for its <a href="https://aws.amazon.com/amplify/">AWS Amplify</a> backend and deployment, using Cognito for user accounts and DynamoDB for database. The purpose is a platform is to create and save simple timers to a user's account to make completing physical therapy exercises/stretches easier as each timer also saves the number of reps that particular timer needs to run in a row. I built this for my <a href="https://www.github.com/antalsz">brother</a>, who wanted a tool to help him with his PT exercises.

Doing Physical Therapy yourself or any other ? The live site is up and active <a href="https://physicaltherapytimers.eliassz.com/">here</a>. Please let me know if you have any feedback or suggestions!

## Built With

<div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap; padding-left: 20px;">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" height="25">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" height="25">
  <img src="https://img.shields.io/badge/AWS_Amplify-FF9900?style=for-the-badge&logo=AWS-Amplify&logoColor=white" alt="AWS Amplify" height="25">
  <img src="https://img.shields.io/badge/AWS_Cognito-232F3E?style=for-the-badge&logo=Amazon-AWS&logoColor=white" alt="AWS Cognito" height="25">
  <img src="https://img.shields.io/badge/AWS_DynamoDB-4053D6?style=for-the-badge&logo=Amazon-DynamoDB&logoColor=white" alt="AWS DynamoDB" height="25">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" height="25">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" height="25">
</div>

## Installation

1. **Clone the Repository**: Clone the repository to your local machine using `git clone` and the URL of the repository.
2. **Install Dependencies**: Run `npm install` to install the necessary dependencies.
3. **Set Up AWS and Amplify**: Ensure you have an [AWS account](https://aws.amazon.com/) and configure your account for [local development](https://docs.amplify.aws/nextjs/start/account-setup/). In step 5, do this within the project directory you just cloned.
4. **Run The App**: Run `npm run dev` to start the development server and the Amplify sandbox server concurrently. At this point, your backend sandbox should be working and Next should be handling the frontend development server.

## Usage

Once set up properly, run `npm run dev` to concurrently start the Next.js development server and the Amplify sandbox server. The application will be available at [http://localhost:3000](http://localhost:3000). You can create an account, log in, and create timers. The timers will be saved to your account and will be available when you log in again.

## Roadmap

Not sure much more will happen on this project, but, if so, next steps include:

- Add caching to the DynamoDB queries to reduce the number of reads and writes.
- Adjust how account validation is being handled.
- Add more user account features
- Make audio mutable
- Make a React Native version for mobile devices

## Acknowledgements

Thanks to [The Mushroom Kingdom](https://themushroomkingdom.net) for the audio files. Thanks to [Flowbite](https://flowbite.com/) for the SVG paths used on the buttons. Most importantly, thanks to [Antal](https://www.github.com/antalsz) for the business requirements, the guidance, and the testing.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

<div>
Thanks for checking this out! I'm Elias! If you have questions about this app or just want to know more about me, and you can reach me at any of the following places:
<ul style="list-style: none">
<li>Connect with me on <a href="https://www.linkedin.com/in/elias-sz/">LinkedIn</a></li>
<li>See what I'm working on at <a href="https://www.github.com/ColdWeatherBoyy">GitHub</a> or on my <a href="https://www.eliassz.com">portfolio</a></li>
<li>Write me a note at <a href="mailto:elias.spector.zabusky@gmail.com">elias.spector.zabusky@gmail.com</a></li>
</div>
