"use strict";
exports.__esModule = true;
exports.cli = void 0;
var openurl_1 = require("openurl");
/**
 * Follow me on Twitter 🐦
 */
function twitter() {
    (0, openurl_1.open)("<your Twitter url>");
}
/**
 * Connect with my on LinkedIn 👔
 */
function linkedin() {
    (0, openurl_1.open)("<your LinkedIn url>");
}
/**
 * See my projects on GitHub 🚀
 */
function github() {
    (0, openurl_1.open)("<your GitHub url>");
}
/**
 * Check out some of my projects ✨
 */
function projects(str) {
    switch (str) {
        case "project1":
            (0, openurl_1.open)("https://...");
            break;
        case "project2":
            (0, openurl_1.open)("https://...");
    }
}
/**
 * Contact me 📪
 */
function contact(info) {
    var subject = info.subject, name = info.name, email = info.email, phoneNumber = info.phoneNumber;
    var EMAIL = "your.email@example.com";
    var message = "\n    Name: ".concat(name, "\n    Email: ").concat(email, "\n    ").concat(phoneNumber ? "Number: ".concat(phoneNumber) : "", "\n  ");
    (0, openurl_1.mailto)([EMAIL], {
        subject: subject,
        body: message
    });
}
exports.cli = {
    twitter: twitter,
    linkedin: linkedin,
    github: github,
    projects: projects,
    contact: contact
};
