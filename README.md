# Bell Notification
[LIVE DEMO](https://muhammadrehman.com/list-notification-js-library/)

ListNotification is a light weighted JS library that can be easily embedded in any web applications. It's easy-to-use and developer friendly. The procedure of using this library is quite simple. There is one JS file that is responsible for making notifications on your screen. 

Below is the guide how to use this library.

![List-Notification-JS-Library-Muhammad-Rehman](https://user-images.githubusercontent.com/9959730/120376517-6c255100-c335-11eb-8067-5a819a861a0f.png)

## How to use?
* Download the library
* Place the CSS and JS file in your project or application
* Include the files in your application
* place an HTML div with the id "list-notification"
* All Done!

## Add a new notification
For adding a new notification in notification window you can use the following code.

```js
listNotify.addNotification( 
    {
	title: 'Awesome Library',
	description: 'A simple and easy to use library to display notifications',
	openNotification: true,
	url: 'https://github.com/MuhammadRehman/List-Notification',
	urlTarget: '_blank',
	highlight: true
    }
);
```

### Parameters of notifications
**title**
Title of the notification

**description**
A short description about the notification

**url**
Notification URL where you would like to redirect the user when they click on it.

**urlTarget**
Open a link in new or existing window

**openNotification**
Open the notification window when a new notification added

**highlight**
If set to "true" the notification will show the bell icon with highlighting effect.

## Changelog

### v1.0 ( 29-05-2021 )

* Initial Version

### v1.0.1 ( 03-06-2021 )

* New - Added new attribute "highlight"
* Tweaks - CSS Improvements
