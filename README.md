# Transaction Management Backend (DevOps)

This coding challenge contains two tasks for you to complete:

- Build, run and monitor a simple backend application in a docker-compose environment. You will be expected to create a dashboard in [Grafana](https://grafana.com/) which includes a couple simple graph based on some metrics from the backend application. The metrics backend you will use is [Prometheus](https://prometheus.io/).
- Build a backend app that fulfills the [Transaction Management API](https://infra.devskills.app/transaction-management/api/3.1.0) and make the provided API tests pass.

This repository contains a boilerplate Flask application that you will use as a starting point. 

## Before you get started

### If you run into a problem

Need help? Head over to [our community on GitHub](https://github.com/orgs/DevSkillsHQ/discussions/categories/help) to get assistance.

### Your environment
You can do the challenge in whatever environment that you are comfortable with. We do however encourage you to use the gitpod environment which comes with most of the things that you need pre-installed. 
#### Local environment
  Clone the repo on your local computer. Since you will be using docker-compose, this requires you to have docker-compose installed.
#### Gitpod environment
Gitpod comes with both a pre-configured environment with all the prerequisites for this challenge pre-installed. 
- To open up a gitpod environment, follow [gitpod's instructions](https://www.gitpod.io/docs/getting-started#start-your-first-workspace) on how to create a git pod environment from a github repo (it's as simple as prefixing the url to this repo with `gitpod.io/#`).
- Unless you have used gitpod before, we recommend you to use the in-browser version of gitpod instead of connecting it to your local IDE in order to save time. 
- When you have the different services running in your gitpod environment, check the `PORTS`-tab for links that are publicly accessible.

### Try running the API tests

<details>
<summary>Remotely on the pipeline</summary>

Create and switch to a new `implementation` branch and push your code. This will trigger a new pipeline run which will execute the tests.
  
Check the 'Actions' tab to see the historical runs.

</details>

<details>
<summary>In gitpod environment (or locally) with npm</summary>
  
#### Prerequisites

1. [Install node](https://nodejs.org/en/)
3. Start your app using `npm start-flask-app`
  
#### Run the tests
```bash
 npm run test
```

You can either use the console output or generated screenshots/videos (*check the newly created files that appear after a test run*) to troubleshoot the test results.

</details>

### What we expect from you

1. Make the automated tests pass in the CI environment
2. Implement the [Transaction Management API](https://infra.devskills.app/transaction-management/api/3.1.0) by extending the existing flask boilerplate. In our evaluation, we will put emphasis on the code structure. Structure the code as if you were building a real-world application.
3. Use docker-compose to spin up 
   1. The Flask application.
   2. Prometheus
   3. Grafana
4. Create separate application and monitoring docker networks
5. Create a dashboard in Grafana with the following graphs
   1. One graph with a basic metric such as CPU, RAM or disc usage. 
   2. One graph with an application metric such as response times, error rates or similar.
6. Ensure that grafana is provisioned with both the data source and the dashboard pre-configured when the docker compose environment is created
7. Push your code to the new `implementation` branch. We encourage you to commit and push your changes regularly as it's a good way for you to showcase your thinking process.
8. Create a new pull request, but please **do not merge it**.
9. Document the tech decisions you've made by creating a new review on your PR ([see how](https://www.loom.com/share/94ae305e7fbf45d592099ac9f40d4274)). We will put a lot of emphasis on this review in our assessment so please elaborate how you have been reasoning.
10. Await further instructions from the hiring team. Expect follow-up questions from us on your Pull Request.

## Time estimate

Between **2-3 hours** depending on your experience level with these tools + the time to set up the project/environment (go with one of the provided boilerplates to move quicker).

Also, there is no countdown. The estimate is for you to plan your time.

---

Authored by [Alva Labs](https://www.alvalabs.io) via [DevSkills](https://devskills.co).

How was your experience? **[Don't hesitate to give us a shout](https://github.com/orgs/DevSkillsHQ/discussions/categories/feedback)**.
