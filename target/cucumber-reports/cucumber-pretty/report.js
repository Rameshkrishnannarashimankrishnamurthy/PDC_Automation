$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage",
  "description": "",
  "id": "homepage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Validate that User is able to submit \"Contact Us\" form API",
  "description": "",
  "id": "homepage;validate-that-user-is-able-to-submit-\"contact-us\"-form-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@HomePage"
    },
    {
      "line": 26,
      "name": "@SmokeTest"
    },
    {
      "line": 26,
      "name": "@Regression"
    },
    {
      "line": 26,
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is able to launch web browser and PDC website is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User Enters \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cCategory\u003e\",\"\u003cEmail\u003e\" and \"\u003cMessage\u003e\" in Contact Us form through API",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "homepage;validate-that-user-is-able-to-submit-\"contact-us\"-form-api;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Category",
        "Email",
        "Message"
      ],
      "line": 32,
      "id": "homepage;validate-that-user-is-able-to-submit-\"contact-us\"-form-api;;1"
    },
    {
      "cells": [
        "TestAutomation",
        "TestAutomation",
        "CDC",
        "testautomationpdc@gmail.com",
        "This is a test automation scenario please ignore"
      ],
      "line": 33,
      "id": "homepage;validate-that-user-is-able-to-submit-\"contact-us\"-form-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5016369500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Validate that User is able to submit \"Contact Us\" form API",
  "description": "",
  "id": "homepage;validate-that-user-is-able-to-submit-\"contact-us\"-form-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 26,
      "name": "@Test3"
    },
    {
      "line": 26,
      "name": "@HomePage"
    },
    {
      "line": 26,
      "name": "@Regression"
    },
    {
      "line": 26,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "User is able to launch web browser and PDC website is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "User Enters \"TestAutomation\",\"TestAutomation\",\"CDC\",\"testautomationpdc@gmail.com\" and \"This is a test automation scenario please ignore\" in Contact Us form through API",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 132093600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomation",
      "offset": 13
    },
    {
      "val": "TestAutomation",
      "offset": 30
    },
    {
      "val": "CDC",
      "offset": 47
    },
    {
      "val": "testautomationpdc@gmail.com",
      "offset": 53
    },
    {
      "val": "This is a test automation scenario please ignore",
      "offset": 87
    }
  ],
  "location": "HomePageSteps.userEntersAndInContactUsFormThroughAPI(String,String,String,String,String)"
});
formatter.result({
  "duration": 961411400,
  "status": "passed"
});
formatter.after({
  "duration": 619189200,
  "status": "passed"
});
});