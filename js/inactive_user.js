let lastActivity = new Date();
let userIsActive = true;

function checkActivity() {
    const currentTime = new Date();

    if ((currentTime - lastActivity) > 60 * 1000) {
        userIsActive = false;
    }
}

// add event handlers (update lastActivity, when user do something on the page)
document.addEventListener('click', (event) => {
    lastActivity = new Date();
})
document.addEventListener('keydown', (event) => {
    lastActivity = new Date();
});
document.addEventListener('mousemove', (event) => {
    lastActivity = new Date();
});
document.addEventListener('scroll', (event) => {
    lastActivity = new Date();
});

// Every second check if user is active
// If not, show confirm window
setInterval(() => {
    // Every update user activity
    checkActivity();

    if (!userIsActive) {
        let alertIsClosed = false;
        const userAlert = document.querySelector('.inactive-user-alert');
        const userAlertYesBtn = userAlert.querySelector('.inactive-user-alert__btn_yes');
        const userAlertNoBtn = userAlert.querySelector('.inactive-user-alert__btn_no');
        userAlertYesBtn.addEventListener('click', event => {
            lastActivity = new Date();
            userIsActive = true;
            alertIsClosed = true;
            document.documentElement.style.overflow = '';
            userAlert.style.display = 'none';
        });

        userAlertNoBtn.addEventListener('click', event => {
            window.location.href = 'about:blank';
        });

        document.documentElement.style.overflow = 'hidden';
        userAlert.style.display = 'flex';

        // close window is user don't respond during 10 seconds
        setTimeout(() => {
            if (!(alertIsClosed)) {
                window.location.href = 'about:blank';
            }
        }, 10000);
    }
}, 1000);


