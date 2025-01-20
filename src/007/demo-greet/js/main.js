// This demonstrates using a parameter
// e.g. greetUser('Jane Doe');
// e.g. greetUser(prompt('Name:'));

/**
 * greetUser() modifies the intro header text with a custom message.
 * @param {string} username The name of the vistor to the page
 */
const greetUser = function (username) {
    // I have made greetUser a constant so that it cannot be changed!
    // select the h1
    let mainTitle = document.querySelector('h1.intro');
    // update the h1 inner HTML
    mainTitle.innerHTML = 'Welcome <i>' + username + '</i> to ' + mainTitle.innerHTML;
};

greetUser(prompt('What is your name?'));
//        \_______ string ___________/
//             gets passed into
//                 username
//              of greetUser()
