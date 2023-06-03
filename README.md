# Group Repository for COMP SCI 2207/7207 Web & Database Computing Web Application Project (2023 Semester 1) 

Your group's shared repository for the WDC 2023 Web App Project. 

Auto commit/push/sync to Github is disabled by default in this repository.  
- Enable the GitDoc extension to use this fucntionality (either in your VSCode settings, or in the Dev Container settings) 

See [HERE](https://myuni.adelaide.edu.au/courses/85266/pages/2023-web-application-group-project-specification) for the project specification.

We recommend using the 'Shared Repository Model (Branch & Pull)' to collaborate on your work in this single repostory.
- You can read more about collaborating on GitHub repositories [HERE](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)
- When working on the same file at the same time, the 'Live Share' feature in VSCode can also help.

# Student Clubs

## Built with
### Frontend
[VueJS](https://vuejs.org/)

[Vue-Router](https://router.vuejs.org/) 

[Pinia](https://pinia.vuejs.org/) for state management

### Backend
[ExpressJS](https://expressjs.com/) for the server

[Passport.js](https://www.passportjs.org/) for authentication

[MySQL](https://www.mysql.com/) as the database

## Setup
### Requirements
Internet Browser (Chrome, Firefox, Safari, etc)

[Git](https://git-scm.com/downloads) for version control.

[Node.js](https://nodejs.org) is required to install dependencies and run scripts via `npm`.

[VSCode](https://code.visualstudio.com/) with [Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack
)

[Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Installation
After installing the tools required, you can go ahead and clone the repository
using Git in your terminal.

```
git clone https://github.com/sjcy2704/23S1_WDC_UG070_world-execute-me-
```

After cloning the repository, change directory to the repository and you will find two main folders called **Front-End**
and **Back-end**.

Change directory to each of the folder using the commands
`cd Front-End` and `cd Back-end`. On each folder run the following command to
install the dependencies

```
npm install
```

### Running the Web App
To run the web application, you will need to have the Docker for Desktop
running. Then, open the repository in your VSCode and it should
appear a notification to `Reopen in Container`. It should look like this:

![image](https://github.com/UAdelaide/23S1_WDC_UG070_world-execute-me-/assets/109910337/88fc1bfd-99d2-4ad1-8b15-e73822164dbd)

After you reopen the project in a container, open the terminal and run the
following command:

```
service mysql start
```

Once you successfully start the mysql server, you will need a new terminal
having in total two terminals. Change directory to either one of
the main folders in each terminal (Front-end in one terminal and Back-end in the
other one) and run the following commands:

```
// For Front-end
npm run dev

// For Back-end
npm start
```

After running both commands in their respective terminals, you can go ahead and
see the web application running in your browser.

```
http://localhost:5173
```


