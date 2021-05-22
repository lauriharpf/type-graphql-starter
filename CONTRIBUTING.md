# Contributing to TypeGraphQL starter template

## Code of Conduct

This project and everyone participating in it is governed by the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [lauri.harpf@acelvia.com](mailto:lauri.harpf@acelvia.com).

## Got a Question or Problem?

Please ask any questions related to this project by [opening an issue with the Question template](https://github.com/lauriharpf/type-graphql-starter/issues/new?assignees=&labels=&template=question.md&title=).

## Found a Bug?

If you find a bug, [open an issue with the Bug report template](https://github.com/lauriharpf/type-graphql-starter/issues/new?assignees=&labels=&template=bug_report.md&title=). If possible, please [make a Pull Request](#submit-pr)) with a test that reproduces the issue and a fix.

## Improvements?

If you'd like to suggest a feature or an improvement, [open an issue with the Feature request template](https://github.com/lauriharpf/type-graphql-starter/issues/new?assignees=&labels=&template=feature_request.md&title=).

- **Major Features**: First open an issue and outline your proposal so that it can be discussed. This will also allow us to better coordinate our efforts, prevent duplication of work, and help get the change accepted into the project.
- **Small Features**: Can be crafted and directly [submitted as a Pull Request](#submit-pr).

## <a name="submit-pr"></a>Pull Requests?

Pull Requests are welcome! Before you submit your Pull Request (PR):

1. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add.
1. Fork this repo.
1. Make your changes in a new git branch:

```shell
git checkout -b my-fix-branch master
```

1. Create the change, including appropriate tests.
1. Commit your changes using a descriptive commit message.

```shell
git commit -a
```

1. Push your branch to GitHub:

   ```shell
   git push origin my-fix-branch
   ```

1. In GitHub, send a pull request to `type-graphql-starter:master`.

- If we suggest changes then:

  - Make the required updates.
  - Rebase your branch and force push to your GitHub repository (this will update your Pull Request):

    ```shell
    git rebase master -i
    git push -f
    ```

That's it! Thank you for your contribution!

### After your pull request is merged

After your pull request is merged, you can safely delete your branch and pull the changes
from the main (upstream) repository:

- Delete the remote branch on GitHub either through the GitHub web UI or your local shell as follows:

  ```shell
  git push origin --delete my-fix-branch
  ```

- Check out the master branch:

  ```shell
  git checkout master -f
  ```

- Delete the local branch:

  ```shell
  git branch -D my-fix-branch
  ```

- Update your master with the latest upstream version:

  ```shell
  git pull --ff upstream master
  ```
