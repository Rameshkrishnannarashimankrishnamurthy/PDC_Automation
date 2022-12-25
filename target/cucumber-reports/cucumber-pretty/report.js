$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TeamsPage.feature");
formatter.feature({
  "line": 1,
  "name": "EventsPage",
  "description": "",
  "id": "eventspage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate that User is able to navigate  to \"Events page\" from \"Home Page\"",
  "description": "",
  "id": "eventspage;validate-that-user-is-able-to-navigate--to-\"events-page\"-from-\"home-page\"",
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
      "name": "@Test3"
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
  "name": "User clicks on all the members of our \"\u003cTeam\u003e\" of PDC",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Validate the PDC team \"\u003cTeam\u003e\" list",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "eventspage;validate-that-user-is-able-to-navigate--to-\"events-page\"-from-\"home-page\";",
  "rows": [
    {
      "cells": [
        "Team"
      ],
      "line": 10,
      "id": "eventspage;validate-that-user-is-able-to-navigate--to-\"events-page\"-from-\"home-page\";;1"
    },
    {
      "cells": [
        "Our Volunteers"
      ],
      "line": 11,
      "id": "eventspage;validate-that-user-is-able-to-navigate--to-\"events-page\"-from-\"home-page\";;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5061430800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate that User is able to navigate  to \"Events page\" from \"Home Page\"",
  "description": "",
  "id": "eventspage;validate-that-user-is-able-to-navigate--to-\"events-page\"-from-\"home-page\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Test3"
    },
    {
      "line": 3,
      "name": "@SomeTags"
    },
    {
      "line": 3,
      "name": "@ValidCase"
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
  "name": "User clicks on all the members of our \"Our Volunteers\" of PDC",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Validate the PDC team \"Our Volunteers\" list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 172594900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Our Volunteers",
      "offset": 39
    }
  ],
  "location": "HomePageSteps.userClicksOnAllTheMembersOfOurOfPDC(String)"
});
formatter.result({
  "duration": 180074500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Our Volunteers",
      "offset": 23
    }
  ],
  "location": "TeamsPageSteps.validateThePDCTeamList(String)"
});
formatter.result({
  "duration": 403632500,
  "status": "passed"
});
formatter.after({
  "duration": 665540800,
  "status": "passed"
});
});