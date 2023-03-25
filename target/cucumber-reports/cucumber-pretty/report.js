$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CDCPage.feature");
formatter.feature({
  "line": 1,
  "name": "CDCPage",
  "description": "",
  "id": "cdcpage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate that User is able to navigate  to \"\u003cPagelink\u003e\" from \"Home Page\"",
  "description": "",
  "id": "cdcpage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\"",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ValidCase"
    },
    {
      "line": 3,
      "name": "@SomeTags"
    },
    {
      "line": 3,
      "name": "@CDCPage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is able to launch web browser and PDC website is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on \"\u003cPagelink\u003e\" tab on Home page\u0027s navigation bar",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is able to Book appointments for Mock Interviews",
  "keyword": "When "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "cdcpage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";",
  "rows": [
    {
      "cells": [
        "Pagelink"
      ],
      "line": 10,
      "id": "cdcpage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";;1"
    },
    {
      "cells": [
        "Career Development Centre"
      ],
      "line": 11,
      "id": "cdcpage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4478666700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate that User is able to navigate  to \"Career Development Centre\" from \"Home Page\"",
  "description": "",
  "id": "cdcpage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@SomeTags"
    },
    {
      "line": 3,
      "name": "@ValidCase"
    },
    {
      "line": 3,
      "name": "@CDCPage"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is able to launch web browser and PDC website is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User clicks on \"Career Development Centre\" tab on Home page\u0027s navigation bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User is able to Book appointments for Mock Interviews",
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 192583800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Career Development Centre",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.userClicksOnTabOnHomePageSNavigationBar(String)"
});
formatter.result({
  "duration": 5073650200,
  "status": "passed"
});
formatter.match({
  "location": "CDCPageSteps.userIsAbleToBookAppointmentsForMockInterviews()"
});
formatter.result({
  "duration": 75600,
  "status": "passed"
});
formatter.after({
  "duration": 1036907400,
  "status": "passed"
});
});