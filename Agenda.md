# Agenda

> ***NOTE:** This agenda is copied from the previous term and needs to be adjusted to this semester. Otherwise, the topics are generally in the correct order.*

> These are my notes on what I plan to teach in each [**upcoming class**](#jan-23).
>
> ###### *... Warn those who are idle ..., encourage the disheartened, help the weak, be patient with everyone.*
>
> > My philosophy of teaching, taken from [the source](https://www.bible.com/bible/111/1TH.5.14.NIV)


> ## Starter Kits
>
> To grab a starting point for any in-class demos or practices, you can use [**tiged**](https://github.com/tiged/tiged) (based on [`degit`](https://github.com/Rich-Harris/degit) by Rich Harris, creator of Svelte). It will allow you to grab a copy of the starter kit folder to put into your student workbook.
> 
> You will need to have `pnpm` installed and working on your computer. Run the following code in the terminal from the **root** of your repository:
>
> ```bash
> pnpm dlx tiged --disable-cache --force dgilleland/CPSC-1520-Workbook/sk/-how-to- ./src/-how-to-
> ```
>
> ***Note:** You may need to <kbd>ctrl</kbd>+<kbd>c</kbd> to stop the `pnpm tlx tiged` command after it has finished downloading the demo folder.*


----

## Jan-Apr 2025 Schedule

### Jan 9 (W01)

- Course Introduction
- GitHub Account Setup
- Software Setup
- Workbook Setup
  - [000](./src/000/ReadMe.md)

### Jan 10

- **Today**
  - Workbook Lessons
    - [001](./src/001-StartHere/ReadMe.md)
- **Homework**
  - Read [**Mastering Markdown**](https://guides.github.com/features/mastering-markdown/) (includes GFM - *GitHub-Flavored-Markdown*)
  - Complete the [Practice Version Control](https://dgilleland.github.io/CPSC-1520/tutorials/0020/) tutorial
  - Complete [001](./src/001-StartHere/ReadMe.md#editing-your-github-profile) by changing your GitHub Profile.
  - Complete the [002](./src/002/ReadMe.md) lesson on your own

> **NOTE:** Be sure to commit and push what you do in your Student Workbook

----

## Jan 13 (W02)

- **Announcements**
  - **Quiz Readings** - Links for readings for individual quizzes can be found under the individual topics that the quizzes relate to. For convenience, I have posted a [*Summary of Quiz Readings*](./docs/QuizReadings.md). 
  - **Brightspace Content** - Topics on Brightspace were in the wrong order at the start of the term. The order has been corrected.
- **Today** *(Online)*
  - Practice Assignment (see Brightspace)
  - [003](./src/003/ReadMe.md) Intro to JavaScript
    - HTML & Emmet in VS Code
- **Homework**
  - Tutorial: [Querying the DOM](https://dgilleland.github.io/CPSC-1520/tutorials/0030/)
    - Put it in your student workbook under `~/src/query-dom/`
  - Tutorial: [Using Script Tags](https://dgilleland.github.io/CPSC-1520/tutorials/0040/)
    - Put it in your student workbook under `~/src/script-tags/`
  - Bookmark and read the docs on [Semantic HTML](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/)

## Jan 16

- **Today**
  - [ ] Characteristics of JavaScript
    - case-sensitive
    - **not** a type-safe language
    - looks a lot like C#, but has a number of differences
    - string literals can be wrapped in double or single quotes
    - string interpolation is performed with text inside a pair of back-ticks (`` ` ``)
      - placeholders in the form of `${expression}`
      - e.g.: `` `The count is ${count}` ``
  - [ ] ***Variables***
  - [ ] The browser's dev tools provides a **console** that is a REPL (Read-Eval-Print-Loop) environment for JavaScript
  - [ ] Node also provides/is a REPL for JavaScript
  - [ ] **Demo:** Combine the main points of [003](./src/003/ReadMe.md) and [004](./src/004/ReadMe.md)
    - Find and modify DOM elements with `document.querySelector()`
    - Link a JavaScript file
    - Create and use variables
- **Homework**
  - *Reminder to keep up with Quiz readings and completing the quizzes before their cutoff date.*
  - [ ] Review the [003 LOGs](./src/003/LOGs.md) and the [004 LOGs](./src/004/LOGs.md)
  - [ ] Read the following articles:
    - [Why JavaScript?](https://dgilleland.github.io/CPSC-1520/explanations/0010/)
    - [JavaScript as a Language](https://dgilleland.github.io/CPSC-1520/explanations/0020/)


## Jan 17

- **Today**
  - [ ] Lab 1 released/due **today**

----

## Jan 20 (W03)

- **Today** *(Online)*
  - Notice the `LOGs.md` files under each lesson - pay attention to these
  - Fast-Track [005](./src/005/ReadMe.md)
  - Math Review
    - In JavaScript, all numbers are floating point
  - Quick review on yesterday's code: What are *keywords* and what are *not* keywords.
  - What are *functions* in JavaScript?
  - [**006**](./src/006/ReadMe.md) intro
  - [**007**](./src/007/ReadMe.md) - Creating JavaScript Functions
- **Homework**
  - [ ] Do the [**Learn by Play** portion of the `005/ReadMe.md`](./src/005/ReadMe.md#learn-by-play)
  - [ ] Review the new [Finding DOM Elements](https://dgilleland.github.io/CPSC-1520/guides/0030/) guide.
  - [ ] Review [006 LOGs](./src/006/LOGs.md)
  - [ ] Complete [practice in `007`](./src/007/ReadMe.md#practice-agreement)
  - [ ] Review [007 LOGs](./src/007/LOGs.md)
  - [ ] **Optional** - Styling Challenge (CSS only - no JavaScript)

    ```ps
    pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A05-CPSC-1520-Instructor-Workbook-2025-Jan/sk/005.5 ./src/005.5
    ```



## Jan 23

- [ ] Housekeeping Tasks:
  - [ ] Getting the most out of ***LOGs** (Learning Outcome Guides)*
  - [ ] Version Control: Updating Your Workbook (commit & push)
  - [ ] [Downloading Starter Kits](#starter-kits)
  - [ ] Filling the Gaps: Self-study is the only way to fill in the gaps between what you do and don't know about HTML.

![HTML Iceberg](./docs/images/html-iceberg.jpg)

- **Today**
  - [**008**](./src/008/ReadMe.md) - Form Input and Handling Events
    - [ ] A *soft introduction* to Events and Event Handling in web pages.

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A02-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/soft-intro ./src/008/soft-intro
      ```

    - [ ] Demo Events *(the older demo)*

      ```ps
      pnpm dlx tiged --disable-cache --force CPSC-1520/DanG-A02-CPSC-1520-Instructor-Workbook-2025-Jan/sk/008/demo-events ./src/008/demo-events
      ```

    - Review [the lesson's LOGs](./src/008/LOGs.md)
      - Demo creating an event handler
      - Demo adding an event listener
      - Demo **mouse** events such as `click`, `dblclick`, `mouseenter`, `mouseleave`, `mousemove`
      - Demo adding and removing CSS classes programmatically (from `.classList`)
      - Demo an anonymous handler for an event listener
- **Homework**
  - [ ] Ensure you have been making notes on all the LOG items in your student workbook and that you have committed and pushed those notes.


## Jan 24

- **Today**
  - [ ] **In-Class Lab 2**
- **Homework**

----

## Jan 27 (W04)

- **Today** *(Online)*
- **Homework**


## Jan 30

- **Today**
- **Homework**


## Jan 31

- **Today**
- **Homework**


----


## Feb 03 (W05)

- **Today** *(Online)*
- **Homework**


## Feb 06

- **Today**
- **Homework**


## Feb 07

- **Today**
- **Homework**


----


## Feb 10 (W06)

- **Today** *(Online)*
- **Homework**


## Feb 13

- **Today**
- **Homework**


## Feb 14

- **Today**
- **Homework**


----


## Feb 24 (W07)

- **Today** *(Online)*
- **Homework**


## Feb 27

- **Today**
- **Homework**


## Feb 28

- **Today**
- **Homework**

----

## Mar 03 (W08)

- **Today** *(Online)*
- **Homework**


## Mar 06

- **Today**
- **Homework**


## Mar 07

- **Today**
- **Homework**

----

## Mar 10 (W09)

- **Today** *(Online)*
- **Homework**


## Mar 13

- **Today**
- **Homework**


## Mar 14

- **Today**
- **Homework**

----

## Mar 17 (W10)

- **Today** *(Online)*
- **Homework**


## Mar 20

- **Today**
- **Homework**


## Mar 21

- **Today**
- **Homework**

----

## Mar 24 (W11)

- **Today** *(Online)*
- **Homework**


## Mar 27

- **Today**
- **Homework**


## Mar 28

- **Today**
- **Homework**

----

## Mar 31 (W12)

- **Today** *(Online)*
- **Homework**


## Apr 03

- **Today**
- **Homework**


## Apr 04

- **Today**
- **Homework**

----

## Apr 07 (W13)

- **Today** *(Online)*
- **Homework**


## Apr 10

- **Today**
- **Homework**


## Apr 11

- **Today**
- **Homework**

----

## Apr 14 (W14)

- **Today** *(Online)*
- **Homework**


## Apr 17

- **Today**
- **Homework**

----

## Apr 24 (W15)

- **Today**
- **Homework**


## Apr 25

- **Today**
- **Homework**


----
