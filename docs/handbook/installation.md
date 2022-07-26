## Installation

Metabase can be run just about anywhere so checkout our [Installation Guides](https://www.metabase.com/docs/latest/operations-guide/installing-metabase.html) for detailed instructions for various deployments. Here's the TLDR:

### Docker

To run Metabase via Docker, just type

```
docker run -d -p 3000:3000 --name metabase metabase/metabase
```

### JAR file

To run Metabase via a JAR file, you will need to have a Java Runtime Environment installed on your system.

We recommend the latest LTS version of JRE from [AdoptOpenJDK](https://adoptopenjdk.net/releases.html) with HotSpot JVM and x64 architecture, but other [Java versions](https://www.metabase.com/docs/latest/operations-guide/java-versions.html) might work too.

Go to the [Metabase download page](https://metabase.com/start/jar.html) and download the latest release. Place the downloaded JAR file into a newly created directory (as it will create some files when it is run), and run it with the following command:

```
java -jar metabase.jar
```

Now, open a browser and go to [http://localhost:3000](http://localhost:3000) , and you will be asked a set of questions that will set up a user account, and then you can add a database connection. For this to work you will need to get some information about which database you want to connect to, such as the Host Name and Port that it is running on, the Database Name and the User and Password that you will be using.

Once you have added this connection, you will be taken into the app and you'll be ready to ask your first question.

For a more detailed walkthrough, check out our [Getting Started](https://www.metabase.com/docs/latest/getting-started.html) guide.