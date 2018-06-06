$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WWatchers.feature");
formatter.feature({
  "line": 1,
  "name": "Weight Watchers Assessment",
  "description": "",
  "id": "weight-watchers-assessment",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Program-2",
  "description": "",
  "id": "weight-watchers-assessment;program-2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Weightwatchers page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify the given text",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on find a meeting link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify if title contains desired text",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click submit",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "weight-watchers-assessment;program-2;",
  "rows": [
    {
      "cells": [
        ""
      ],
      "line": 16,
      "id": "weight-watchers-assessment;program-2;;1"
    },
    {
      "cells": [
        ""
      ],
      "line": 17,
      "id": "weight-watchers-assessment;program-2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Program-2",
  "description": "",
  "id": "weight-watchers-assessment;program-2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Weightwatchers page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "verify the given text",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "click on find a meeting link",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "verify if title contains desired text",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click submit",
  "keyword": "And "
});
formatter.match({
  "location": "Wwisteps.user_is_on_Weightwatchers_page()"
});
formatter.result({
  "duration": 4223732328,
  "status": "passed"
});
formatter.match({
  "location": "Wwisteps.verify_the_given_text()"
});
formatter.result({
  "duration": 2020753106,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Unable to get browser\nBuild info: version: \u00273.12.0\u0027, revision: \u00277c6e0b3\u0027, time: \u00272018-05-08T14:04:26.12Z\u0027\nSystem info: host: \u0027DESKTOP-3SIT80N\u0027, ip: \u0027192.168.1.218\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {acceptInsecureCerts: false, browserName: internet explorer, browserVersion: 11, javascriptEnabled: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:ieOptions: {browserAttachTimeout: 0, elementScrollBehavior: 0, enablePersistentHover: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.fileUploadDialogTimeout: 3000, ie.forceCreateProcessApi: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:39846/, nativeEvents: true, requireWindowFocus: false}, setWindowRect: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}}\nSession ID: d555c6ea-d86f-4826-b2a6-964f82ab2f9e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:275)\r\n\tat pages.PageOne.VerifyHomePage(PageOne.java:37)\r\n\tat stepDef.Wwisteps.verify_the_given_text(Wwisteps.java:29)\r\n\tat ✽.Then verify the given text(WWatchers.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Wwisteps.click_on_find_a_meeting_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Wwisteps.verify_if_title_contains_desired_text()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Wwisteps.click_submit()"
});
formatter.result({
  "status": "skipped"
});
});