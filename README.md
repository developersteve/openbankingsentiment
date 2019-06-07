_Read this in other languages: [日本語](README-ja.md)._

[![Build Status](https://travis-ci.org/IBM/cognitive-social-crm.svg?branch=master)](https://travis-ci.org/IBM/cognitive-social-crm)

# Monitor Twitter feeds to better understand customer sentiment using Watson Assistant, Tone Analyzer, and Natural Language Understanding

In this code pattern, our server application subscribes to a Twitter feed as configured by the user. Each tweet received will be analyzed for emotional tone and sentiment, and the intent of the tweet will be determined by the Watson Assistant service. All data is stored in a Cloudant database, with the opportunity to store historical data as well. The resulting analysis is presented in a Web UI as a series of graphs and charts.

When the reader has completed this code pattern, they will understand how to:

- Run an application that monitors a Twitter feed.
- Send the tweets to Watson Tone Analyzer, Assistant, and Natural Language Understanding for processing and analysis.
- Store the information in a Cloudant database.
- Present the information in a Angular and nodejs web UI.
- Capture and analyze social media for a specified Twitter handle or hashtag and let Watson analyze the content.

## Flow

![](doc/source/images/architecture.png)

1. Tweets are pushed out by Twitter.
2. The Cognitive Social CRM app processes the tweet.
3. The Watson Tone Analyzer Service performs analysis of sentiment and emotional tone.
4. The Watson Natural Language Understanding Service pulls out keywords and entities.
5. The Watson Assistant Service extracts the intents (verbs) from the tweets.
6. Tweets and metadata are stored in Cloudant
7. The Web UI displays charts and graphs as well as the tweets.

## Included components

- [Watson Assistant](https://www.ibm.com/cloud/watson-assistant/): Watson Assistant is a robust platform that allows developers and non-technical users to collaborate on building conversational AI solution.
- [Watson Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer): Uses linguistic analysis to detect communication tones in written text.
- [Watson Natural Language Understanding](https://www.ibm.com/watson/services/natural-language-understanding): Natural language processing for advanced text analysis.
- [IBM Cloudant](https://www.ibm.com/cloud/cloudant): A managed NoSQL database service that moves application data closer to all the places it needs to be — for uninterrupted data access, offline or on.
- [Cloud Foundry](https://www.cloudfoundry.org/): Build, deploy, and run applications on an open source cloud platform.

## Featured technologies

- [Artificial Intelligence](https://medium.com/ibm-data-science-experience): Artificial intelligence can be applied to disparate solution spaces to deliver disruptive technologies.
- [Databases](https://en.wikipedia.org/wiki/IBM_Information_Management_System#.22Full_Function.22_databases): Repository for storing and managing collections of data.
- [Angular](https://angular.io/): A framework to build UI for mobile and desktop application.
- [Node.js](https://nodejs.org/): An open-source JavaScript run-time environment for executing server-side JavaScript code.
- [Express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js

# Steps

The setup is done in 3 primary steps. You will download the code, setup the application and then deploy the code to IBM Cloud. If you would like to run the code locally, there will be one more step to configure the credentials locally.

1. [Clone the repo](#1-clone-the-repo)
2. [Install Dependencies](#2-install-dependencies)
3. [Twitter Requirements](#3-twitter-requirements)
4. [Create Watson services with IBM Cloud](#4-create-watson-services-with-ibm-cloud)
5. [Import the Assistant workspace](#5-import-the-assistant-workspace)
6. [Configure credentials](#6-configure-credentials)
7. [Run the application](#7-run-the-application)

### 1. Clone the repo

Clone the `cognitive-social-CRM` locally. In a terminal, run:

```
$ git clone https://github.com/IBM/cognitive-social-crm
$ cd cognitive-social-crm
```

### 2. Install dependencies

The application requires the following software to be installed locally.

1. [Node (6.9+)](https://nodejs.org): Application runtime environment, download and install the package.
1. [Angular CLI (6.1.1)](https://www.npmjs.com/package/@angular/cli): A CLI for Angular applications, installed with: `npm install -g @angular/cli`.
1. [Angular (6.1.0)](https://angular.io): Angular will be added as a dependency of client in `package.json` when setting up client using `Angular cli`.
1. [Express (4.16.3)](https://expressjs.com): Express will be added as a dependency in `package.json` for server.

> If you have Angular CLI already installed. Please read the upgrade instructions for Angular CLI when you upgrade the software.

Run the following command, from the application folder, to install both the client and server dependencies.

```
$ npm run app-install
```

> NOTE: Currently Windows OS is not supported

### 3. Twitter requirements

To subscribe to Tweets from a specific handle or hashtag in this application, it is required to create a Twitter account and a Twitter application.
The Twitter account will be used as the account that receives the messages from other Twitter users as well as the owner of the application, required by Twitter, to receive Tweets.

- You can create a normal Twitter account on [Twitter](https://twitter.com/signup) or use an existing account. It is required to provide a unique email id that isn't already associated with an existing Twitter account as well as a phone number to verify the account.
- Once you have the Twitter account created and verified, log in to [Twitter Dev](https://developer.twitter.com/apps) and create an application.
- Select the Keys and Access Tokens tab and generate a Consumer Key and Secret.
  Keep this page open as you will need to use these tokens into setup procedure in the application later on.

### 4. Create Watson services with IBM Cloud

Either Setup the IBM Cloud Deployment or Setup Local Deployment.

#### Setup local Deployment

> Explanation: You will create the IBM Cloud services and configure them to use on a locally running server app.

If you do not already have a IBM Cloud account, [signup for IBM Cloud](https://cloud.ibm.com/registration).
Create the following services:

- [**Watson Assistant**](https://cloud.ibm.com/catalog/services/watson-assistant-formerly-conversation)
- [**Watson Tone Analyzer**](https://cloud.ibm.com/catalog/services/tone-analyzer)
- [**Watson Natural Language Understanding**](https://cloud.ibm.com/catalog/services/natural-language-understanding)
- [**IBM Cloudant DB**](https://cloud.ibm.com/catalog/services/cloudant)

>NOTE: When provisioning Cloudant, for `Available authentication methods` choose `Use both legacy credentials and IAM`

![Cloudant](https://raw.githubusercontent.com/IBM/watson-online-store/master/doc/source/images/cloudantChooseLegacy.png)

### 5. Import the Watson Assistant skill

- Find the Assistant service in your IBM Cloud Dashboard.
- Click on the service and then click on `Launch tool`.
- Go to the `Skills` tab.
- Click `Create new`
- Click the `Import skill` tab.
- Click `Choose JSON file`, go to your cloned repo dir, and `Open` the workspace.json file in [`data/assistant/workspace-social-crm-airline-classification.json`](data/assistant/workspace-social-crm-airline-classification.json).
- Select `Everything` and click `Import`.

To find the `WORKSPACE_ID` for Watson Assistant:

- Go back to the `Skills` tab.
- Click on the three dots in the upper right-hand corner of the **cognitive-social-crm** card and select `View API Details`.
- Copy the `Workspace ID` GUID.

_Optionally_, to view the Assistant dialog, click on the skill and choose the
`Dialog` tab. Here's a snippet of the dialog:

### 6. Configure credentials

The `env.sample` file should be copied to `.env` before the application is executed on IBM Cloud or locally. The `.env` file resides on the `server` folder as it is required by the server code.

> The `.env` file is where all the parameters like credentials, log settings and other constants required by this application is kept.

#### Configure service credentials

The credentials for IBM Cloud services (Tone Analyzer, Natural Language Understanding, and Cloudant), can be found in the `Services` menu in IBM Cloud, by selecting the `Service Credentials` option for each service.

> NOTE: When provisioning Cloudant, for `Available authentication methods` choose `Use both legacy credentials and IAM`

![Cloudant](https://raw.githubusercontent.com/IBM/watson-online-store/master/doc/source/images/cloudantChooseLegacy.png)

From the root of the project, go to `server` folder (`cd server`) and

Copy the [`env.sample`](server/env.sample) to `.env`.

```
$ cd server
$ cp env.sample .env
```

Add all the credentials that you have saved from creating the services, as explained earlier, in the `.env` file.

#### `env.sample`

```
# Copy this file to .env and replace the credentials with
# your own before starting the app.

CLOUDANT_USERNAME=<use cloudant username>
CLOUDANT_PASSWORD=<use cloudant password>
CLOUDANT_ANALYSIS_DB_NAME=analysis_db

## Un-comment and use either username+password or IAM apikey.
# NATURAL_LANGUAGE_UNDERSTANDING_USERNAME=<use natural language understanding username>
# NATURAL_LANGUAGE_UNDERSTANDING_PASSWORD=<use natural language understanding password>
NATURAL_LANGUAGE_UNDERSTANDING_IAM_APIKEY=<use natural language understanding iam API key>
NATURAL_LANGUAGE_UNDERSTANDING_URL=<use natural language understanding URL>

## Un-comment and use either username+password or IAM apikey.
# TONE_ANALYZER_USERNAME=<use tone analyzer username>
# TONE_ANALYZER_PASSWORD=<use tone analyzer password>
TONE_ANALYZER_IAM_APIKEY=<use tone analyzer iam API key>
TONE_ANALYZER_URL=<use tone analyzer url>

## Un-comment and use either username+password or IAM apikey.
# ASSISTANT_USERNAME=<use assistant username>
# ASSISTANT_PASSWORD=<use assistant password>
ASSISTANT_IAM_APIKEY=<use assistant iam apikey>
ASSISTANT_URL=<use assistant url>

ASSISTANT_CLASSIFICATION_WORKSPACE_ID=<use assistant workspace id>

# Configuration from you twitter account
TWITTER_CONSUMER_KEY=<use twitter consumer key>
TWITTER_CONSUMER_SECRET=<use twitter consumer secret>
TWITTER_ACCESS_TOKEN=<use twitter access token>
TWITTER_ACCESS_SECRET=<use twitter access secret>
#TWITTER_LISTEN_FOR=<use twitter hashtag or keyword or @tag>
TWITTER_LISTEN_TO=<use your @tag>
TWITTER_FILTER_CONTAINING=<use keyword you want to filter in tweets>
TWITTER_PROCESS_RETWEETS=true

# App level configuration
LOGGING=true
LOG_LEVEL=info
OUTPUT_TYPE=json
SAVE_TYPE=cloudant
```

### 7. Run the application

Either `Run the app on IBM Cloud` or `Run the app locally`.

#### Running the app on IBM Cloud

1. Compile the Angular client code and Express server code using the following command. This creates a `dist` folder in your project root directory and copies the compile code and necessary files to be deployed to IBM cloud.

```
$ npm run build
```

2. Connect to IBM Cloud in the command line tool and follow the prompts to log in

```
$ ibmcloud cf login -a https://api.ng.bluemix.net
```

> Make sure you set the `target` and `space` correctly using `ibmcloud target -o <target> -s <space>`

3. Push the app to IBM Cloud.

```
$ ibmcloud app push
```

4. The application should now be running on IBM Cloud and listening to Tweets. You can get the application URL by going to `Cloud Foundry Applications` section of IBM cloud dashboard. Click the name of the application you just pushed and clikc `Visit App URL` to access the application.

![](doc/source/images/ibm-cloud-dashboard.png)

![](doc/source/images/visit-app-url.png)

#### Running the app locally

Once all the credentials are in place, the application can be started with:

```
$ npm run start
```

The server runs on port `3000` and the `client` runs on port `4200`. You can access the UI by accessing the following URL in the browser:

`http://localhost:4200`

## Sample Output

You will see informations about Tweets:

![](doc/source/images/crm_ss_2.png)

as well as Classification of live tweets, Sentiment over time, Emotional Tone over time, and Keywords mentioned:

![](doc/source/images/crm_ss_1.png)

![](doc/source/images/crm_ss_3.png)

# Links

- [Watson Assistant](https://www.ibm.com/cloud/watson-assistant/)
- [Watson Tone Analyzer](https://www.ibm.com/watson/services/tone-analyzer/)
- [Watson Natural Language Understanding](https://www.ibm.com/watson/services/natural-language-understanding/)
- [IBM Cloudant db](https://www.ibm.com/cloud/cloudant)

# Learn more

- **Artificial Intelligence Code Patterns**: Enjoyed this Code Pattern? Check out our other [AI Code Patterns](https://developer.ibm.com/technologies/artificial-intelligence/).
- **AI and Data Code Pattern Playlist**: Bookmark our [playlist](https://www.youtube.com/playlist?list=PLzUbsvIyrNfknNewObx5N7uGZ5FKH0Fde) with all of our Code Pattern videos
- **With Watson**: Want to take your Watson app to the next level? Looking to utilize Watson Brand assets? [Join the With Watson program](https://www.ibm.com/watson/with-watson/) to leverage exclusive brand, marketing, and tech resources to amplify and accelerate your Watson embedded commercial solution.

## License

This code pattern is licensed under the Apache Software License, Version 2. Separate third party code objects invoked within this code pattern are licensed by their respective providers pursuant to their own separate licenses. Contributions are subject to the [Developer Certificate of Origin, Version 1.1 (DCO)](https://developercertificate.org/) and the [Apache Software License, Version 2](https://www.apache.org/licenses/LICENSE-2.0.txt).

[Apache Software License (ASL) FAQ](https://www.apache.org/foundation/license-faq.html#WhatDoesItMEAN)
