## How to use databases safely in Metabase?

### Don't have too many joins in a SQL Query

As a rule of thumb, it is suggested not to have too many joins in a query.  We have to make sure they don't cause more work than you need to perform.  

A good workaround on that is to create a 'Materialized View' and then create a query on top of that.  A materialized view is a database object that contains the results of a query. 

Click [here](https://www.metabase.com/learn/administration/making-dashboards-faster#materialize-views-create-new-tables-to-store-query-results) for more details. 

### Precautions while running a SELECT query

It is best to put a limit of 10 rows at once when running a SELECT query. There may be cases where a database has thousands of records stored at one time. Running an SELECT query at such a stage would result in all of those records being processed at once.

### Cache your queries

You can configure caching to store the results of recently-asked questions so that they don’t need to be recalculated. 

Click [here](https://www.metabase.com/learn/administration/metabase-at-scale#cache-your-queries) to see more information on how to cache your queries in metabase.

### Only ask for data that you need

If people are running queries that return a lot of records, it won’t matter that Metabase is fast: the users will get their data only as fast as your data warehouse can return the requested records. Depending on the size of that database, it can be quite some time before those records return. 

Click [here](https://www.metabase.com/learn/administration/metabase-at-scale#metabase-application-best-practices) to see more information on some of the best practices a user can use for Metabase.

### Increase the maximum number of connections to each database

The default maximum number of connections for a single Metabase instance to each database is 15. That’s 15 for each database, so if you’ve connected Metabase to two databases, you’ll have a maximum of 30 connections.

You can increase the maximum number of connections to each database by changing the MB_JDBC_DATA_WAREHOUSE_MAX_CONNECTION_POOL_SIZE environment variable. 

### Sync with your databases only when you need to

By default, Metabase performs a lightweight sync every hour. The sync does not copy any of your data. Metabase merely checks to make sure the list of tables, columns, and rows it maintains in its application database is up to date with the tables, columns, and rows in your databases.

You can set the timing and [frequency of these synchronizations](https://www.metabase.com/docs/latest/administration-guide/01-managing-databases.html#choose-when-metabase-syncs-and-scans). For large databases, you might consider limiting the number of times Metabase performs the sync, and restricting those synchronizations to off-peak hours, especially if you aren’t frequently adding new tables to your database.

>Metabase sync settings
![sync](/docs/images/sync-settings.png)

### Look for bottlenecks

Metabase’s Enterprise Edition offers auditing tools for you to monitor the usage and performance of your application. You can, for example, see how many questions are being asked, by whom, and how long the questions took to run, which can help identify any bottlenecks that need attention.

![audit qus](/docs/images/audit-questions.png)

### Best practices for writing SQL queries

Finally, there are some best practices you should keep in mind while writing SQL queries. 

Here’s a [brief guide](https://www.metabase.com/learn/sql-questions/sql-best-practices.html) on how to follow these practices when writing these queries.
