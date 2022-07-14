## Additional Features

### 1. Custom Map Colors

Map visualization is used to analyze and display the geographically related data and present it in the form of maps. This kind of data expression is clearer and more intuitive. When we define Custom colors to some particular Map regions, we can visually see the distribution or proportion of data in each region. 

Let's say there are 3 kinds of divisions for a Map. Assuming X is data and Y is geo region => The map is divided into the following way:

For ranges of X => (X1 - X2) - X12, (X2 -X3 ) - X23 and so on.

Similarly for ranges of Y => Y12, Y23, ....

A third entity called color (C) => C12, C23 ...

**Sample data**

Y - States of India i.e. Maharashtra, Punjab, etc.

X - Corresponding values for each Y variable i.e. population of 3Cr, 4Cr, etc.

C - Corresponding color

**Possible Configurations**

Equally divided in terms of X ranges i.e. X12 = X23 = X34 ...
Equally divided in terms of Y ranges i.e. Y12 = Y23 = Y34 ...

The following JSON config defines different custom colors for each parameter

Custom JSON config defining either a combination of

- X and C

```json
[
   {
           "X": {
               "start": 1,
               "end": 60
           },
           "color":  "#00FF00"
   },
   {
           "X": {
               "start": 61,
               "end": 140
           },
           "color":  "#FF0000"
   }
]
```

- Y and C

```json
[
  {
          "Y": {
               "start": 1,
              "end": 5
          },
          "color":  "#00FF00"
  },
  {
          "Y": {
              "start": 6,
              "end": 30           
          },
          "color":  "#FF0000"
  }
]
```

>Example of a Map with custom colors assigned to its various regions

![map chart](/docs/images/CustomMap.png)

### 2. [Download Card as PDF/Image]()
>This section is under construction

### 3. [Download Dashboard as PDF/Image]()
>This section is under construction

### 4. [Download Table as a CSV with conditional formatting]()
>This section is under construction

## [Visualizing Data with Maps](https://www.metabase.com/learn/visualization/maps)

This section covers how to implement Maps in Metabase. More specifically, it showcases how to visualize data using maps in Metabase. Along with that, it details various map types, options, data configurations, additional features and suitable examples.