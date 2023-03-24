// Listen for messages from background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // Check the message type and respond accordingly
    switch(request.type) {
      // Handle "takeNotes" message
      case "takeNotes":
        const notes = prompt("What do you want to take notes on?");
        if (notes) {
          // Send a message to background.js with the notes content
          chrome.runtime.sendMessage({
            type: "notesTaken",
            notes: notes
          });
        }
        break;
  
      // Handle "setAlarm" message
      case "setAlarm":
        const time = prompt("What time do you want to set the alarm for?");
        if (time) {
          // Send a message to background.js with the alarm time
          chrome.runtime.sendMessage({
            type: "alarmSet",
            time: time
          });
        }
        break;
  
      // Handle "setReminder" message
      case "setReminder":
        const reminder = prompt("What do you want to set a reminder for?");
        const date = prompt("What date do you want to set the reminder for?");
        if (reminder && date) {
          // Send a message to background.js with the reminder content and date
          chrome.runtime.sendMessage({
            type: "reminderSet",
            reminder: reminder,
            date: date
          });
        }
        break;
  
      // Handle "sendEmail" message
      case "sendEmail":
        const recipientEmail = prompt("What is the recipient's email address?");
        const subject = prompt("What is the subject of the email?");
        const body = prompt("What is the body of the email?");
        if (recipientEmail && subject && body) {
          // Send a message to background.js with the email details
          chrome.runtime.sendMessage({
            type: "emailSent",
            recipientEmail: recipientEmail,
            subject: subject,
            body: body
          });
        }
        break;
  
      // Handle "sendText" message
      case "sendText":
        const recipientNumber = prompt("What is the recipient's phone number?");
        const message = prompt("What is the message you want to send?");
        if (recipientNumber && message) {
          // Send a message to background.js with the text message details
          chrome.runtime.sendMessage({
            type: "textSent",
            recipientNumber: recipientNumber,
            message: message
          });
        }
        break;
  
      // Handle "playMusic" message
      case "playMusic":
        const songName = prompt("What song do you want to play?");
        if (songName) {
          // Send a message to background.js to play the specified song
          chrome.runtime.sendMessage({
            type: "musicPlayed",
            songName: songName
          });
        }
        break;
  
      // Handle "getDirections" message
      case "getDirections":
        const destination = prompt("What is your destination?");
        if (destination) {
          // Send a message to background.js to get directions to the specified destination
          chrome.runtime.sendMessage({
            type: "directionsGot",
            destination: destination
          });
        }
        break;
  
      // Handle "makeCall" message
      case "makeCall":
        const phoneNumber = prompt("What is the phone number you want to call?");
        if (phoneNumber) {
          // Send a message to background.js to make a call to the specified phone number
          chrome.runtime.sendMessage({
            type: "callMade",
            phoneNumber: phoneNumber
          });
        }
        break;
  
      // Handle "createEvent" message
      // Send email
function sendEmail(recipient, subject, body) {
    chrome.runtime.sendMessage({
      type: "sendEmail",
      recipient: recipient,
      subject: subject,
      body: body
    });
  }
  
  // Play music
  function playMusic(song) {
    chrome.runtime.sendMessage({
      type: "playMusic",
      song: song
    });
  }
  
  // Get directions
  function getDirections(destination) {
    chrome.runtime.sendMessage({
      type: "getDirections",
      destination: destination
    });
  }
  
  // Create calendar event
  function createEvent(title, startDate, endDate) {
    chrome.runtime.sendMessage({
      type: "createEvent",
      title: title,
      startDate: startDate,
      endDate: endDate
    });
  }
  
  // Control smart home devices
  function controlDevice(device, action) {
    chrome.runtime.sendMessage({
      type: "controlDevice",
      device: device,
      action: action
    });
  }
  
  // Perform calculations
  function calculate(expression) {
    chrome.runtime.sendMessage({
      type: "calculate",
      expression: expression
    });
  }
  
  // Provide recommendations
  function recommend(item) {
    chrome.runtime.sendMessage({
      type: "recommend",
      item: item
    });
  }
  
  // Send money via mobile transfer app
  function sendMoney(amount, recipient, app) {
    chrome.runtime.sendMessage({
      type: "sendMoney",
      amount: amount,
      recipient: recipient,
      app: app
    });
  }
  
  // Translate languages
  function translate(text, targetLang) {
    chrome.runtime.sendMessage({
      type: "translate",
      text: text,
      targetLang: targetLang
    });
  }
  
  // Open app
  function openApp(appName) {
    chrome.runtime.sendMessage({
      type: "openApp",
      appName: appName
    });
  }
  
  // Listen for messages from the background script
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === "noteSaved") {
      console.log("Note saved!");
    } else if (request.type === "callMade") {
      console.log("Call made!");
    } else if (request.type === "textSent") {
      console.log("Text sent!");
    } else if (request.type === "emailSent") {
      console.log("Email sent!");
    } else if (request.type === "musicPlayed") {
      console.log("Music played!");
    } else if (request.type === "directionsGot") {
      console.log("Directions received!");
    } else if (request.type === "eventCreated") {
      console.log("Event created!");
    } else if (request.type === "deviceControlled") {
      console.log("Device controlled!");
    } else if (request.type === "calculationDone") {
      console.log("Calculation done!");
    } else if (request.type === "recommendationGiven") {
      console.log("Recommendation given!");
    } else if (request.type === "moneySent") {
      console.log("Money sent!");
    } else if (request.type === "translationDone") {
      console.log("Translation done!");
    } else if (request.type === "appOpened") {
      console.log("App opened!");
    }
  }):
