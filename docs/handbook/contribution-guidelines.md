## Getting Started

To get an overview of the project, read the [README](/README.md). Here are some resources to help you get started with open source contributions:

- [Developer's Guide](https://www.metabase.com/docs/latest/developers-guide.html)
- [Contribution](https://www.metabase.com/docs/latest/contributing.html)
- [Documentation](/docs)
- [FAQs](https://github.com/Samagra-Development/metabase/blob/master/docs/faq/start.md)

## Issues

### Create a new issue

If you spot a problem with the docs, [search if an issue already exists](https://github.com/Samagra-Development/metabase/issues). If a related issue doesn't exist, you can open a new issue using a relevant [issue form](https://github.com/Samagra-Development/metabase/issues/new/choose).

### Solve an issue

Scan through our existing issues to find one that interests you. You can narrow down the search using labels as filters. If you find an issue to work on, you are welcome to open a PR with a fix.

## Git Workflow

Git can be a bit complicated to use in the beginning. This section describes the workflow that we recommend for regular contributors.

### Intial Setup

1. Fork the [Samagra-Development/metabase](https://github.com/Samagra-Development/metabase) repository

2. Now, let's clone the repository

```shell 
git clone git@github.com:GITHUB_USERNAME/metabase.git metabase
```

3. Add an upstream connection

```shell
git remote add upstream https://github.com/Samagra-Development/metabase.git
```

4. Making a Pull Request

Now if want to make a new change to the code base, we create a new 'feature branch' based off the latest version of the main branch:Now if want to make a new change to the code base, we create a new 'feature branch' based off the latest version of the main branch:

```shell
git checkout master
git pull upstream master
git checkout -b my-feature-branch 
# make your changes to the source code
git push origin HEAD
```

## Your PR is merged!

Congratulations 🎉🎉 The Metabase team thanks you ✨.

Once your PR is merged, you can find new issues and start working on them!










