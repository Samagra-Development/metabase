## Frequently Used Charts

Charts helps our users get a clearer picture of large amounts of data and how they compare with other data. These Charts convey information quickly and easily to the user. A Metabase dashboard contains a set of Charts and Data tables brought together which you can share with your team.

Metabase provides us with following kinds of Charts:

### Big Number

The Numbers option is for displaying a single number, nice and big. The options for numbers include:

- Adding character prefixes or suffixes to it (so you can do things like put a currency symbol in front or a percent at the end)

- Setting the number of decimal places you want to include

- Multiplying your result by a number (like if you want to multiply a decimal by 100 to make it look like a percent). If you want to divide by a number, then just multiply it by a decimal (e.g, if your result is 100, but you want it to display as 1, simply multiply it by 0.01).

>For example

![number eg](/docs/images/Number.png)

### Bar Chart

A bar chart or bar graph is a chart or graph that presents categorical data with rectangular bars with heights or lengths proportional to the values that they represent.

Although the Metabase graphs can be plotted vertically (bars standing up) or horizontally (bars laying flat from left to right), the most usual type of bar graph is vertical.

>ratings data with a bar chart 

![bar chart](/docs/images/BarChart.png)

### Pie Chart

A pie or donut chart can be used when breaking out a metric by a single dimension, especially when the number of possible breakouts is small, like users by gender. If you have more than a few breakouts, like users per country, it’s usually better to use a bar chart so that your users can more easily compare the relative sizes of each bar.

>a pie chart showing percentage of revenue earned by a company through different social media platforms
![pie chart](/docs/images/PieChart.png)

### Line Chart

A Line chart, also known as a line graph, is a type of chart used to visualize the value of something over time. It is a graphical representation which connects a series of data points with a continous line.

>for example, here's a line chart which displays total ratings a product has recieved over a period of time

![Line Chart](/docs/images/LineChart.png)

### Table

The Table option is good for looking at tabular data or for lists of things like users or orders. By default the Metabase shows the data in a tabular format first. The visualization options for tables allow you to add, hide, or rearrange fields in the table you’re looking at, as well as modify their formatting.

>table format which shows data based on various reviews of a product
![table](/docs/images/Table.png)

### Map

When you select the Map visualization setting, Metabase will automatically try and pick the best kind of map to use based on the table or result set. Here are the maps that Metabase uses:

- United States Map. Creating a map of the United States from your data requires your results to include a State column that contains two-letter state codes (e.g., “AK” for Alaska, “VT” for Vermont, and so on). This column with state codes lets you do things like visualize the count of people broken out by state, with darker states representing more people.

>following data shows reviews of a product throughout across the united states map
![us map](/docs/images/USMap.png)

- World Map. To visualize your results in the format of a map of the world broken out by country, your result must contain a column with two-letter country codes. (E.g., count of users by country.)

>the same data displayed across the world map
![world map](/docs/images/WorldMap.png)

- Pin Map. If your results contains a latitude and longitude field, Metabase will try to display the results as a pin map of the world. Metabase will put one pin on the map for each row in your table, based on the latitude and longitude fields. You can try this with the Sample Database that’s included in Metabase: start a new question and select the People table, use raw data for your view, and choose the Map option for your visualization. You’ll see a map of the world, with each dot representing the latitude and longitude coordinates of a single person from the People table.

>reviews data spread across a grid map
![grid map](/docs/images/GridMap.png)

### Filters

Have you ever found yourself in a situation where it seems like you need to create nearly identical copies of the same dashboard, with just one different variable? Maybe you have an Earnings dashboard, but you want to see the data for each city your business is in, or maybe you have a KPI dashboard that you want to see broken out by month.

You can choose from a number of filter types:

- Time

- Location

- ID

>for example, the following filter sorts all the reviewers whose name starts with chris
![filter](/docs/images/Filter.png)


### Additional Charts

Metabase provides much more variations on visualizing data and various chart types. Click [here](https://www.metabase.com/docs/latest/users-guide/05-visualizing-results.html) to see various chart types and learn how you can use them in your Metabase account!







