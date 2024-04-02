# 24-7
## Description

Created the Work Day Scheduler to be more comfortable in using jQuery and localStorage for everyday future applications. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## Mock-Up
The following animation demonstrates the acceptance application functionality:
![Gif of Work Day Scheduler Demo](assets/05-third-party-apis-homework-demo.gif)

## Installation

Requires the use of Web APIs jQuery, Day.js, and also CSS Framework Bootstrap.

## Usage
A user has a work day scheduler that has inputs for a 9-5 shift. The user will save inputs with the save icon buttons. The scheduler implements color coded time slots for past, present, and future work tasks in real time. The user work tasks will stay after the web page is refreshed unless user deletes text, and uses the save button to clear the text field. 

  ![Image of Work Day Scheduler](<assets/Workday Planner.png>)
    ```
- Deployed Link: https://astrange90.github.io/24-7/

## Credits

- UCI Web API  Module
- https://api.jquery.com/
- https://day.js.org/



