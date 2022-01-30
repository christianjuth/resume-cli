import { open, mailto } from "openurl";

/**
 * Follow me on Twitter 🐦
 */
function twitter() {
  open("<your Twitter url>");
}

/**
 * Connect with my on LinkedIn 👔
 */
function linkedin() {
  open("<your LinkedIn url>");
}

/**
 * See my projects on GitHub 🚀
 */
function github() {
  open("<your GitHub url>");
}

/**
 * Check out some of my projects ✨
 */
function projects(str: "project1" | "project2") {
  switch (str) {
    case "project1":
      open("https://...");
      break;
    case "project2":
      open("https://...");
  }
}

/**
 * Contact me 📪
 */
function contact(info: {
  subject: string;
  name: string;
  email: string;
  phoneNumber: string;
}) {
  const { subject, name, email, phoneNumber } = info;
  const EMAIL = "your.email@example.com";

  const message = `
    Name: ${name}
    Email: ${email}
    ${phoneNumber ? `Number: ${phoneNumber}` : ""}
  `;

  mailto([EMAIL], {
    subject,
    body: message,
  });
}

export const cli = {
  twitter,
  linkedin,
  github,
  projects,
  contact,
};
