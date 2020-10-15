# Course Match

**Tier:** 2-Intermediate

# Desciption:

Course Match is a simple matchmaking software that pairs students who have classes together, or let's students see other students based on their courses. This idea can be implemented to any school. Mark Zuckerberg actually made a website of this kind for Harvard and it is said to be one of the predecessors to Facebook. 

# In code:

You basically have an Array (or list depending on the language you're using) that stores the available courses. 

```
const courses = [
    'Math',
    'German',
    'Biology',
    'Chemistry'
    'etc'
]
```
You can then give each course it's own array/list that stores the student in that course. 

```
const Math = [
    'Bill Gates',
    'Mark Zuckerberg',
    'Jeff Bezos',
    '...'
]

```

If you implement this in a React App or just a simple HTML and JS, it can be a very useful Website/Program.

# Developer Notes:

You will need to use a database. If you haven't done this before, this is a great project to learn the necessary skills. I recommend using Firebase, as it's simple to use and easy to learn. 

# Bonus Features:

User can make an in-built chat app where the students can chat. This can be achieved by using a database like Google Firebase (What I used). 

# Useful links and resources:

- [Google Firebase](https://firebase.google.com/)
- [ReactJs](https://reactjs.org/)