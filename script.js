let notifyOpen = 0; // Check notification list is open or not
let newNotifications = 0; // Counter new notifications
let maxNotificationLength = 10;

notifyList = function( defaultValues ) {

    this.default = {
        title: 'Untitled',
        description: '',
        openNotification: false,
        url: 'javascript:void(0)',
        urlTarget: '_self'
    };

    // Overwriting default values
  	for( var key in defaultValues ){
    	this.default[key] = defaultValues[key];
  	}
    
    window.addEventListener('click', function(e){   
        if (!document.getElementById('list-notification').contains(e.target)){
            hideNotification();
        }
    });

    // Open/Close Notification window
    function showNotifications() {     
           
        if( notifyOpen == 0 ) {
            showNotification();
        } else {
            hideNotification();
        }
    }

    // Add hide class to hide notification list
    function hideNotification() {
        document.querySelectorAll('.list-notify-item').forEach(item => {
            
            // Add hide class on all notifications
            item.classList.add('hide');

            // Remove highlighted new notification
            item.classList.remove('active');

            document.getElementById('list-notify-list').classList.remove('open');
        });

        notifyOpen = 0;
        newNotifications = 0;        
        
        updateCounter();

        hideCounter();
    }

    // Remove hide class to display notification list
    function showNotification() {
        document.querySelectorAll('.list-notify-item').forEach(item => {
            item.classList.remove('hide');
            document.getElementById('list-notify-list').classList.add('open');
        });

        notifyOpen = 1;
    }

    // Push notification in a list
    function pushNotificationInList(notification) {

        console.log( notification );
        var element = document.getElementById("list-notify-list");

        var str = '<a href="'+ getValues( notification, 'url' ) +'" target="'+ getValues( notification, 'urlTarget' ) +'"><div class="list-notify-item active '+ ( notifyOpen == 0 ? 'hide' : '' ) +'"><div class="ln-title">'+ getValues( notification, 'title' ) +'</div><p class="ln-desc">'+ getValues( notification, 'description' ) +'</p><div class="ln-extras"></div></div></a>';
        element.insertAdjacentHTML( 'afterbegin', str );

        addCounter();

        if( notification.openNotification == true ) {
            showNotification();
        }

        notificationOverFlow();
    }

    // Set default values if any value not pass from the function
    function getValues( notification, param ) {
        return ( notification[param] !== undefined ? notification[param] : listNotify.default[param] );
    }

    // Manage notification counter
    function addCounter() {

        newNotifications += 1; // Increment of new notification

        updateCounter();
        
        showCounter();
    }

    // Update counter value
    function updateCounter() {

        document.getElementById('list-notify-icon').getElementsByClassName('badge')[0].innerHTML = newNotifications;
    }

    // Remove Counter
    function hideCounter() {

        if( getNotificationCounter() == 0 ) {
            document.getElementById('list-notify-icon').getElementsByClassName('badge')[0].classList.add('hide');
        }
    }

    // Display Counter on notification
    function showCounter() {

        document.getElementById('list-notify-icon').getElementsByClassName('badge')[0].classList.remove('hide');

    }

    // Number of new notification
    function getNotificationCounter() {
        var notif_counter = document.getElementById('list-notify-icon').getElementsByClassName('badge')[0].innerHTML;

        notif_counter = parseInt( notif_counter );

        return notif_counter;
    }

    // Render HTML of notification
    function render() {

        var element = document.getElementById("list-notification");

        var str = '<div class="list-notify"><div id="list-notify-icon"><a href="#" class="notification"><span><img src="bell.png"/></span><span class="badge"></span></a></div><div id="list-notify-list"></div></div>';
        element.insertAdjacentHTML( 'afterbegin', str );
    }

    function notificationOverFlow() {        

        let notificaionLength = document.querySelectorAll("#list-notify-list .list-notify-item").length;

        let overflownotifications = notificaionLength - maxNotificationLength;

        if( overflownotifications > 0 ) {
            for( let i = 1; i <= overflownotifications; i++ ) {
                let notifcationList = document.getElementById('list-notify-list');
                notifcationList.removeChild(notifcationList.lastElementChild);
            }
        }
    }

    this.ready = function() {

        render();
        hideNotification();
    }

    this.openNotitication = function() {        
        showNotifications();
    }

    this.closeNotification = function() {
        hideNotification();
    }

    this.addNotification = function( data ) {
        pushNotificationInList(data);
    }
}

var listNotify = new notifyList();
listNotify.ready();

document.getElementById("list-notify-icon").onclick = listNotify.openNotitication;

listNotify.addNotification( 
    {
        title: 'Easy Notification',
        description: 'The simple and easy to use JS library to manage notifications on your site',
        openNotification: true,
        showBell: true,
    }
);

listNotify.addNotification( 
    {
        title: 'Developer Friendly',
        description: 'The simple JS library is developer friendly',
        openNotification: true,
        showBell: true,
    }
);

listNotify.addNotification( 
    {
        title: 'Easily Customizable',
        description: 'You can easily customize the things according to your need, a very simple JS file and css file which you can customize in your own way',
        openNotification: true,
        showBell: true,
    }
);

listNotify.addNotification( 
    {
        title: 'Light Weighted Library',
        description: 'You can easily customize the things according to your need, a very simple JS file and css file which you can customize in your own way',
        openNotification: true,
        showBell: true,
    }
);