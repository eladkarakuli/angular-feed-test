# 500Tech Angular Test

## Overview

The goal is to create a simple RSS feed display with a search pane.

The search pane will allow to set the RSS url.

The main section will display the RSS feed of the current selected URL.

## Wireframes
![Alt text](https://s3.amazonaws.com/500tech-shared/angular+home+assignment+500tech+wireframes.png)

## Definitions

### Main screen

Will be made of

1. Header - showing the URL of the feed
2. Content - showing the feed items
<br>
Write a directive that displays the feed item. Each item displays:
* Title 
* Body
* Date


### Search pane
1. String input - RSS URL + search button
2. URL history list - list of searches the user made

* When searching for an RSS URL, its URL should be inserted to the top of the history list in an “active” (selected) state, and the main section should display its feed.
* When clicking on an item (URL) from that list, it should get an “active” (selected) state, and the main section should display its feed.
* When hitting browser back button, it should navigate back to the previous URL that was active
* Each search history item should also contain an “x” button, to remove that item from the list.
* The list items should be persistent, should stay on page refresh.


## Tools

Its suggested (not mandatory) to use the following tools

* yeoman
* grunt / gulp
* twitter bootstrap

## Submission

Please send your result as a Github/Bitbucket repository with clear instructions on how to setup and run.


Best of Luck !

500Tech Team
