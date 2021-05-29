# List Notification
ListNotification is a light weighted JS library that can be easily use in any web applications. It's easy to use and developer friendly. The procedure of using this library is quite very simple there is one JS file that is responsibe for making notifications on your screen. Below is the guide how to use this library.

![list-notification](https://user-images.githubusercontent.com/9959730/120082298-8b28a680-c0db-11eb-8f34-61fff4ab0654.png)

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
	title: 'Light Weighted Library',
	description: 'You can easily customize the things according to your need, a very simple JS file and css file which you can customize in your own way',
    	openNotification: true,
	url: 'https://github.com/MuhammadRehman/List-Notification',
	urlTarget: '_blank'
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
