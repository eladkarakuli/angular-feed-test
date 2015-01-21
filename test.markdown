# 500Tech Angular Test

## Overview

The goal is to create a simple RSS feed display.

The sidebar will allow to set the RSS feed URL and see history of URLs.

The main section will display the RSS feed of the current selected URL.

## Wireframes
![Alt text](https://s3.amazonaws.com/500tech-shared/angular+home+assignment+500tech+wireframes.png)

## Definitions

### Main screen

Will be made of

1. Header - showing the URL of the feed
2. Content - showing the feed items
<br>
The feed items themselves should be written as a directive that displays the title, date, and body.

### Sidebar
1. String input - RSS URL + submit button
2. URL history list - list of URLs the user viewed

* When submitting an RSS URL, its URL should be inserted to the top of the history list in an “active” (selected) state, and the main section should display its feed.
* When clicking on an item (URL) from that list, it should get an “active” (selected) state, and the main section should display its feed.
* When hitting browser back button, it should navigate back to the previous URL that was active
* Each history item should also contain an “x” button, to remove that item from the list.
* The list items should be persistent, should stay on page refresh.

## RSS feed API
Google JSON Feed API:
http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&q=URL

Sample feeds:
http://www.feedforall.com/sample.xml
http://www.feedforall.com/sample-feed.xml
http://www.feedforall.com/blog-feed.xml
http://www.rss-specifications.com/blog-feed.xml


## Tools

Its suggested (not mandatory) to use the following tools

* yeoman
* grunt / gulp
* twitter bootstrap

## Submission

Please send your result as a Github/Bitbucket repository with clear instructions on how to setup and run.
Feel free to add text for describing the decisions you've made along the way.

Best of Luck !

500Tech Team
