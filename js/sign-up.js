document.querySelector('.sign-up__form').addEventListener('submit', event => {
    event.preventDefault();

    const firstNameInput = document.querySelector("#first-name");
    const surnameInput = document.querySelector("#surname");
    const emailInput = document.querySelector("#email");

    const namePattern = /^[A-Z][a-z]*$/;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let isValid = true;
    let message = '<div>Please correct the highlighted fields:</div>';

    if (namePattern.test(firstNameInput.value)) {
        firstNameInput.classList.remove("invalid-input");
    } else {
        firstNameInput.classList.add("invalid-input");
        isValid = false;
        message += '<div>Please enter a valid first name (Only Latin letters, first letter capitalized).</div>';
    }

    if (namePattern.test(surnameInput.value)) {
        surnameInput.classList.remove("invalid-input");
    } else {
        surnameInput.classList.add("invalid-input");
        isValid = false;
        message += '<div>Please enter a valid surname (Only Latin letters, first letter capitalized).</div>';
    }

    if (emailPattern.test(emailInput.value)) {
        emailInput.classList.remove("invalid-input");
    } else {
        emailInput.classList.add("invalid-input");
        isValid = false;
        message += '<div>Please enter a valid email address.</div>';
    }

    if (!isValid) {
        document.querySelector(".sign-up__form-messages").innerHTML = message;
        document.querySelector(".sign-up__form-messages").classList.remove("hidden");
    } else {
        document.querySelector(".sign-up__form-messages").classList.add("hidden");

        const userData = {
            firstName: firstNameInput.value,
            lastName: surnameInput.value,
            email: emailInput.value,
        };
        localStorage.setItem("userData", JSON.stringify(userData));

        if (firstNameInput.value === "Sigma") {
            const day = new Date().getDate();
            const month = new Date().getMonth();
            const year = new Date().getFullYear();
            const celebration =  document.createElement('div');
            celebration.classList.add('celebration');
            const celebrationMessage = document.createElement('div');
            celebrationMessage.classList.add('celebration__message');
            celebrationMessage.classList.add('title');
            celebrationMessage.innerText = `Only today (${day}.${month}.${year}), for users with the name Sigma, you get a 120% discount!`;
            celebration.appendChild(celebrationMessage);
            document.body.appendChild(celebration);
            celebration.classList.remove('hidden');
            setTimeout(() => {
                celebration.classList.add('hidden');
            }, 5000);
        }
    }
});