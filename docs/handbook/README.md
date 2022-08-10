## Overview

Metabase is an open source business intelligence tool. It lets you ask questions about your data, and displays answers in formats that make sense, whether that's a bar graph or a detailed table. Watch this [video](https://youtu.be/RxmOnTHEhwU) to learn how easily Metabase can help you to visualise any type of data

Your questions can be saved for later, making it easy to come back to them, or you can group questions into great looking dashboards. Metabase also makes it easy to share questions and dashboards with the rest of your team.

### Core Features

Metabase provides its users with multiple features in order to have a multitude of services for providing a seamless experience:

- 5 minute [setup](https://metabase.com/docs/latest/setting-up-metabase.html) (We're not kidding)
- Let anyone on your team [ask questions](https://metabase.com/docs/latest/users-guide/04-asking-questions.html) without knowing SQL
- Rich beautiful [dashboards](https://metabase.com/docs/latest/users-guide/06-sharing-answers.html) with auto refresh and fullscreen
- [SQL Mode](https://www.metabase.com/docs/latest/users-guide/writing-sql.html) for analysts and data pros
- Create canonical [segments and metrics](https://metabase.com/docs/latest/administration-guide/07-segments-and-metrics.html) for your team to use
- Send data to Slack or email on a schedule with [dashboard subscriptions](https://www.metabase.com/docs/latest/users-guide/dashboard-subscriptions.html)
- View data in Slack anytime with [MetaBot](https://metabase.com/docs/latest/users-guide/11-metabot.html)
- [Humanize data](https://metabase.com/docs/latest/administration-guide/03-metadata-editing.html) for your team by renaming, annotating and hiding fields
- See changes in your data with [alerts](https://www.metabase.com/docs/latest/users-guide/15-alerts.html)

For more information check out [metabase.com](https://metabase.com/)

***

## Setting up Metabase

There are certain [pre-requisites](https://www.metabase.com/docs/latest/developers-guide/build.html) you must follow in order to know how to build and run Metabase on your own computer so you can play around with it or test features in development. You can also run development branches of Metabase using a pre-built Docker image. There are 3 main steps to set up Metabase:

### Step - 1 : Install Metabase

Here is a [guide](https://github.com/Samagra-Development/metabase/blob/master/docs/operations-guide/installing-metabase.md) on how you can install Metabase and get it [up and running](../operations-guide/start.md).

### Step - 2 : Create an admin account

Here is a [guide](https://www.metabase.com/docs/latest/setting-up-metabase) to help you set up Metabase once you’ve gotten it installed through an admin account.

### Step - 3 : Connect it to a database

Here is a [guide](../administration-guide/01-managing-databases.md) on how to get Metabase connected it to your data. It's time to give you the lay of the land.

***

## Finding your way around

### The home page

![The home page](../images/EmptyHomepage.png)

Fresh out of the box, Metabase will show you a few things on the home page:

- Some [automatic explorations](/docs/users-guide/14-x-rays.md) of your tables that you can look at and save as a dashboard if you like any of them. (Administrators can permanently hide this section by clicking the `X` that appears on hover.)
- An area where things you or your teammates create will show up, along with a link to see all the dashboards, questions, and pulses you have.
- A list of the databases you've connected to Metabase. (As with x-rays, administrators can permanently hide this section by clicking the `X` that appears on hover. You can always click on "Browse Data" from the main nav bar to see your databases and tables.)

![Our data](/docs/users-guide/images/our-data.png)

Once you've created some [dashboards](/docs/users-guide/07-dashboards.md), any of them that you pin in the main "Our analytics" collection will show up on the homepage for all of your teammates, so that when they log in to Metabase they'll know right where to go.

### Browse your data

![Browse data](/docs/users-guide/images/browse-data.png)

If you connected your database to Metabase during setup, you'll see it listed at the bottom of the homepage along with the sample dataset that Metabase comes with. Click on a database to see its contents. You can click on a table to see its rows, or you can also click on the bolt icon to x-ray a table and see an automatic exploration of it, or click on the book icon to go to the data reference view for that table to learn more about it.

### Explore your analytics

As you and your team create dashboards and collections, they'll start to show up on the homepage. Click on a collection in the "Our analytics" section to see its contents, or click "browse all items" to see everything you and your team have made. [More about exploring](/docs/users-guide/03-basic-exploration.md)

### Ask a question or write a query

Click the `Ask a question` button in the top-right of Metabase to start a new simple exploration of one of your tables, ask a more detailed custom question using the notebook editor, or write a new SQL query if you want to really dig in.

### Make a new dashboard or pulse

In Metabase, dashboards are made up of saved questions that you can arrange and resize as you please. They're a great way to track important metrics and stats that you care about. Pulses are what regularly scheduled reports are called in Metabase. They can be sent out either via email, Slack, or both.

To make a dashboard or pulse, click the plus (+) icon in the top-right of the main navigation bar.

![Create menu](/docs/users-guide/images/create-menu.png)

[Here](dashboards.md) is a step-by-step guide to creating a new dashboards and adding questions / charts to the same.

### Use search to quickly find things

![Search results](/docs/users-guide/images/sharing-answers/search-results.gif)

The search bar at the top of the screen helps you find tables, dashboards, collections, saved questions, metrics, segments, and pulses in an instant. 

**A primer on databases**: To fully understand how to use Metabase, it’s useful to have at least a high-level understanding of databases, which can be found [here](/docs/users-guide/02-database-basics.md).

***

## Technical know-how

### Architecture

Here is a comprehensive [architectural overview](https://www.metabase.com/learn/administration/metabase-at-scale) of Metabase, for you to have a look at different functional blocks, depicting various aspects of the system. It is intended to capture and convey the architecture technology as well as multiple capabilities of the Metabase environment.

![image](https://user-images.githubusercontent.com/96038973/180979904-7cf62cbf-1cb2-4102-a480-274a5577c7fd.png)

### API Overview

Here is a detailed [API documentation](api-overview.md) for Metabase, for you to have a loook at summary of different API endpoints, their usage & description, their PARAMS as well as different retrieval operations that can be performed.

### Contribution Guidelines 
We love your input✨! We want to make contributing to this project as easy and transparent as possible. Make sure to read our [Guidelines](contribution-guidelines.md) before making any changes!

***

## Other References

- [Creating & Designing dashboards](dashboards.md) - This is a step-by-step guide to creating a new dashboard & adding questions to the same.

- [Frequently used Charts](frequently-used-charts.md) - This gives an overview of frequently used charts in our programs and how they can be created on Metabase

- [How to use databases safely](use-databases-safely.md) - This talks about ways to use databases safely while leveraging Metabase.

- [How to design mobile responsive dashboards?](mobile-responsive-dashboards.md) - This talks about some tips and tricks to create mobile-friendly dashboards for users.

- [Additional Features contributed by Samagra](additional-features.md) - This talks about some tips and tricks to create mobile-friendly dashboards for users.
 
- [Embedding a dashboard or a card?](https://www.metabase.com/learn/embedding/embedding-charts-and-dashboards) - This gives an overview of how a dashboard or an individual card can be embedded externally.

- [Frequently Asked Questions!](faq.md)
