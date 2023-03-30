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
    },
    {
      "line": 3,
      "name": "@SmokeTest"
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
  "duration": 3939615500,
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
      "name": "@SmokeTest"
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
  "duration": 127676201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Career Development Centre",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.userClicksOnTabOnHomePageNavigationBar(String)"
});
formatter.result({
  "duration": 5069396700,
  "status": "passed"
});
formatter.match({
  "location": "CDCPageSteps.userIsAbleToBookAppointmentsForMockInterviews()"
});
formatter.result({
  "duration": 106200,
  "status": "passed"
});
formatter.after({
  "duration": 637047500,
  "status": "passed"
});
formatter.uri("ContactUs.feature");
formatter.feature({
  "line": 1,
  "name": "ContactUs",
  "description": "",
  "id": "contactus",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate that User is able to submit \"Contact Us\" form Home Page",
  "description": "",
  "id": "contactus;validate-that-user-is-able-to-submit-\"contact-us\"-form-home-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ContactUs"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Test2"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
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
  "name": "User Enters \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cCategory\u003e\",\"\u003cEmail\u003e\" and \"\u003cMessage\u003e\" in Contact Us form",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Send Message button",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "contactus;validate-that-user-is-able-to-submit-\"contact-us\"-form-home-page;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Category",
        "Email",
        "Message",
        "Pagelink"
      ],
      "line": 10,
      "id": "contactus;validate-that-user-is-able-to-submit-\"contact-us\"-form-home-page;;1"
    },
    {
      "cells": [
        "TestAutomation",
        "TestAutomation",
        "CDC",
        "testautomationpdc@gmail.com",
        "This is a test automation scenario please ignore",
        "ContactUs"
      ],
      "line": 11,
      "id": "contactus;validate-that-user-is-able-to-submit-\"contact-us\"-form-home-page;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2930543199,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate that User is able to submit \"Contact Us\" form Home Page",
  "description": "",
  "id": "contactus;validate-that-user-is-able-to-submit-\"contact-us\"-form-home-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@ContactUs"
    },
    {
      "line": 3,
      "name": "@Test2"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
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
  "name": "User clicks on \"ContactUs\" tab on Home page\u0027s navigation bar",
  "matchedColumns": [
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User Enters \"TestAutomation\",\"TestAutomation\",\"CDC\",\"testautomationpdc@gmail.com\" and \"This is a test automation scenario please ignore\" in Contact Us form",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Clicks on Send Message button",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 33985500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ContactUs",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.userClicksOnTabOnHomePageNavigationBar(String)"
});
formatter.result({
  "duration": 5071670000,
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
  "location": "HomePageSteps.userEntersAndInContactUsForm(String,String,String,String,String)"
});
formatter.result({
  "duration": 562071100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.userClicksOnSendMessageButton()"
});
formatter.result({
  "duration": 85148800,
  "status": "passed"
});
formatter.after({
  "duration": 623771500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "Validate that User is able to submit \"Contact Us\" form API",
  "description": "",
  "id": "contactus;validate-that-user-is-able-to-submit-\"contact-us\"-form-api",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ContactUs"
    },
    {
      "line": 14,
      "name": "@SmokeTest"
    },
    {
      "line": 14,
      "name": "@Regression"
    },
    {
      "line": 14,
      "name": "@Test3"
    },
    {
      "line": 14,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is able to launch web browser and PDC website is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User Enters \"\u003cFirstName\u003e\",\"\u003cLastName\u003e\",\"\u003cCategory\u003e\",\"\u003cEmail\u003e\" and \"\u003cMessage\u003e\" in Contact Us form through API",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "contactus;validate-that-user-is-able-to-submit-\"contact-us\"-form-api;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "Category",
        "Email",
        "Message"
      ],
      "line": 20,
      "id": "contactus;validate-that-user-is-able-to-submit-\"contact-us\"-form-api;;1"
    },
    {
      "cells": [
        "TestAutomation",
        "TestAutomation",
        "CDC",
        "testautomationpdc@gmail.com",
        "This is a test automation scenario please ignore"
      ],
      "line": 21,
      "id": "contactus;validate-that-user-is-able-to-submit-\"contact-us\"-form-api;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2953954300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Validate that User is able to submit \"Contact Us\" form API",
  "description": "",
  "id": "contactus;validate-that-user-is-able-to-submit-\"contact-us\"-form-api;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 14,
      "name": "@ContactUs"
    },
    {
      "line": 14,
      "name": "@Test3"
    },
    {
      "line": 14,
      "name": "@Regression"
    },
    {
      "line": 14,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "User is able to launch web browser and PDC website is loaded",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
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
  "duration": 33728600,
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
  "duration": 1010327099,
  "status": "passed"
});
formatter.after({
  "duration": 597905701,
  "status": "passed"
});
formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "HomePage",
  "description": "",
  "id": "homepage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate that User is able to navigate to \"\u003cPagelink\u003e\" Page from Home Page headers",
  "description": "",
  "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@HomePage"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Home"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
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
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;",
  "rows": [
    {
      "cells": [
        "Pagelink"
      ],
      "line": 8,
      "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;1"
    },
    {
      "cells": [
        "Career Development Centre"
      ],
      "line": 9,
      "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;2"
    },
    {
      "cells": [
        "Events"
      ],
      "line": 10,
      "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;3"
    },
    {
      "cells": [
        "Projects"
      ],
      "line": 11,
      "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;4"
    },
    {
      "cells": [
        "ContactUs"
      ],
      "line": 12,
      "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;5"
    },
    {
      "cells": [
        "Join the Team"
      ],
      "line": 13,
      "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2883320500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validate that User is able to navigate to \"Career Development Centre\" Page from Home Page headers",
  "description": "",
  "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@HomePage"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Home"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
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
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 26473499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Career Development Centre",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.userClicksOnTabOnHomePageNavigationBar(String)"
});
formatter.result({
  "duration": 5068595201,
  "status": "passed"
});
formatter.after({
  "duration": 618723501,
  "status": "passed"
});
formatter.before({
  "duration": 2918502801,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Validate that User is able to navigate to \"Events\" Page from Home Page headers",
  "description": "",
  "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@HomePage"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Home"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
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
  "name": "User clicks on \"Events\" tab on Home page\u0027s navigation bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 37568799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Events",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.userClicksOnTabOnHomePageNavigationBar(String)"
});
formatter.result({
  "duration": 5052276101,
  "status": "passed"
});
formatter.after({
  "duration": 627934200,
  "status": "passed"
});
formatter.before({
  "duration": 2884354100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate that User is able to navigate to \"Projects\" Page from Home Page headers",
  "description": "",
  "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@HomePage"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Home"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
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
  "name": "User clicks on \"Projects\" tab on Home page\u0027s navigation bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 43561100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Projects",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.userClicksOnTabOnHomePageNavigationBar(String)"
});
formatter.result({
  "duration": 5058337499,
  "status": "passed"
});
formatter.after({
  "duration": 628714600,
  "status": "passed"
});
formatter.before({
  "duration": 2915364200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validate that User is able to navigate to \"ContactUs\" Page from Home Page headers",
  "description": "",
  "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@HomePage"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Home"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
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
  "name": "User clicks on \"ContactUs\" tab on Home page\u0027s navigation bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 40215799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ContactUs",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.userClicksOnTabOnHomePageNavigationBar(String)"
});
formatter.result({
  "duration": 5071868000,
  "status": "passed"
});
formatter.after({
  "duration": 638573900,
  "status": "passed"
});
formatter.before({
  "duration": 2945074699,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate that User is able to navigate to \"Join the Team\" Page from Home Page headers",
  "description": "",
  "id": "homepage;validate-that-user-is-able-to-navigate-to-\"\u003cpagelink\u003e\"-page-from-home-page-headers;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@HomePage"
    },
    {
      "line": 3,
      "name": "@Regression"
    },
    {
      "line": 3,
      "name": "@Home"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
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
  "name": "User clicks on \"Join the Team\" tab on Home page\u0027s navigation bar",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 28011201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join the Team",
      "offset": 16
    }
  ],
  "location": "HomePageSteps.userClicksOnTabOnHomePageNavigationBar(String)"
});
formatter.result({
  "duration": 5091339000,
  "status": "passed"
});
formatter.after({
  "duration": 627738400,
  "status": "passed"
});
formatter.uri("TeamsPage.feature");
formatter.feature({
  "line": 1,
  "name": "TeamsPage",
  "description": "",
  "id": "teamspage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Validate that User is able to navigate  to \"\u003cPagelink\u003e\" from \"Home Page\"",
  "description": "",
  "id": "teamspage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\"",
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
      "name": "@Teams"
    },
    {
      "line": 3,
      "name": "@SmokeTest"
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
  "id": "teamspage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";",
  "rows": [
    {
      "cells": [
        "Team"
      ],
      "line": 10,
      "id": "teamspage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";;1"
    },
    {
      "cells": [
        "Our Volunteers"
      ],
      "line": 11,
      "id": "teamspage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";;2"
    },
    {
      "cells": [
        "Team"
      ],
      "line": 12,
      "id": "teamspage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";;3"
    },
    {
      "cells": [
        "Alumni"
      ],
      "line": 13,
      "id": "teamspage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2984898800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Validate that User is able to navigate  to \"\u003cPagelink\u003e\" from \"Home Page\"",
  "description": "",
  "id": "teamspage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Teams"
    },
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
      "name": "@SmokeTest"
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
  "duration": 28552401,
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
  "duration": 5144130000,
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
  "duration": 828429401,
  "status": "passed"
});
formatter.after({
  "duration": 612692000,
  "status": "passed"
});
formatter.before({
  "duration": 2934656400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Validate that User is able to navigate  to \"\u003cPagelink\u003e\" from \"Home Page\"",
  "description": "",
  "id": "teamspage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Teams"
    },
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
      "name": "@SmokeTest"
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
  "name": "User clicks on all the members of our \"Team\" of PDC",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Validate the PDC team \"Team\" list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 31171999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Team",
      "offset": 39
    }
  ],
  "location": "HomePageSteps.userClicksOnAllTheMembersOfOurOfPDC(String)"
});
formatter.result({
  "duration": 5143866500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Team",
      "offset": 23
    }
  ],
  "location": "TeamsPageSteps.validateThePDCTeamList(String)"
});
formatter.result({
  "duration": 513308800,
  "status": "passed"
});
formatter.after({
  "duration": 650783201,
  "status": "passed"
});
formatter.before({
  "duration": 2916525001,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validate that User is able to navigate  to \"\u003cPagelink\u003e\" from \"Home Page\"",
  "description": "",
  "id": "teamspage;validate-that-user-is-able-to-navigate--to-\"\u003cpagelink\u003e\"-from-\"home-page\";;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Teams"
    },
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
      "name": "@SmokeTest"
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
  "name": "User clicks on all the members of our \"Alumni\" of PDC",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Validate the PDC team \"Alumni\" list",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.userIsAbleToLaunchWebBrowserAndPDCWebsiteIsLoaded()"
});
formatter.result({
  "duration": 38410699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alumni",
      "offset": 39
    }
  ],
  "location": "HomePageSteps.userClicksOnAllTheMembersOfOurOfPDC(String)"
});
formatter.result({
  "duration": 5154553501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alumni",
      "offset": 23
    }
  ],
  "location": "TeamsPageSteps.validateThePDCTeamList(String)"
});
formatter.result({
  "duration": 548805500,
  "status": "passed"
});
formatter.after({
  "duration": 635133801,
  "status": "passed"
});
});