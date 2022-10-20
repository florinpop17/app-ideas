# Bug Tracker

**Tier:** 3-Advanced

Bug tracking applications are some of the most commonly used tools in a
Developer's workflow. These pieces of software are invaluable when trying
to maintain usable software that excites its users and makes their lives
easier, because, even with the best made software, bugs will crop up.

Bug trackers exist to ensure that the right developers are notified
of bugs when they appear, and that the right stakeholders are notified
when a bug is squashed. The basic bug tracker workflow is as follows:

1. A bug is reported in the bug tracking system

2. The bug is assigned to a developer (either by a user or by the
   developers themselves)

3. The developer, when able to work on the bug, updates the bug's
   status to "In Progress"

4. The developer and the bug reporter converse in the Comments section
   of the Bug

5. The developer completes the bugfix and updates the bug's status
   to "Done"

6. The user who reported the bug is notified that the bug has
   been fixed.

There are plenty of variations and additional features that can be
added to the workflow above, so once the basic functionality has been
completed, try adding your own preferences and flair to the application!

The major benefit to building a bug tracking application of your very own
is that it can be a major, real-world project for your portfolio or to
sharpen your skills with more true-to-life requirements.

## User Stories

### Authentication

- [ ] User can log into the system
- [ ] User can log out of the system

### Reporting a Bug

- [ ] User can define a bug containing a description of the issue
- [ ] User can enter a title for the bug
- [ ] User can select a specific status for the bug, or leave the default
      value of "Not Started".
- [ ] User can click a "Cancel" button to return to the previous page without
      saving the bug
- [ ] User can click a "Save" button to save the bug
- [ ] User can see an error message if "Save" is clicked, but the title and
      description are not filled in

### Listing Bugs

- [ ] User can see a list of all bugs in the system
- [ ] User can filter the bug list by status

### Working on a Bug

- [ ] User can view a bug by selecting a bug from a list of bugs in the system
- [ ] User can view a specific bug's title
- [ ] User can view a specific bug's description
- [ ] User can view a specific bug's status
- [ ] User can change a bug's status
- [ ] User can claim a bug by changing its status to "In Progress"
- [ ] User can comment on a bug by typing their message in the bug's comment
      section and hitting "Submit"
- [ ] User can complete a bug by changing its status to "Done"

## Bonus features

### Teams

- [ ] User can be added to a Team
- [ ] User can create a Team
- [ ] User can add other Users to a Team
- [ ] User can switch between Teams they are a part of
- [ ] User can create a bug for a specific Team
- [ ] User can filter the bug list for a specific Team

## Useful links and resources

- [IBM's Explanation of Bug Tracking](https://www.ibm.com/topics/bug-tracking):
  a more in-depth explanation of bug tracking systems

## Example projects

- [JIRA](https://www.atlassian.com/software/jira)
- [Backlog](https://nulab.com/backlog-lp/bug-tracking/)
- [Bugzilla](https://www.bugzilla.org/) - an open-source option! ([The Code](https://github.com/bugzilla/bugzilla))
