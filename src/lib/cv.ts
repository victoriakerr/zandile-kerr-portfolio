/** Path to the CV PDF served from /public. Downloads are renamed on save. */
export const CV_PDF_URL = "/Zandile_Kerr_CV.pdf";
export const CV_FILE_NAME = "Zandile_Kerr_CV.pdf";

export function downloadCv() {
  const a = document.createElement("a");
  a.href = CV_PDF_URL;
  a.type = "application/pdf";
  a.download = CV_FILE_NAME;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export const certifications = [
  {
    name: "Google AI Essentials V1",
    issuer: "Coursera",
    date: "Issued Aug 2026",
    badge: "AI",
    url: "https://www.coursera.org/account/accomplishments",
  },
  {
    name: "Software Engineer",
    issuer: "TestGorilla",
    date: "Issued Jun 2026",
    badge: "99th percentile",
    url: "https://www.testgorilla.com",
  },
  {
    name: "Clean Code",
    issuer: "TestGorilla",
    date: "Issued Jun 2026",
    badge: "98th percentile",
    url: "https://www.testgorilla.com",
  },
  {
    name: "Problem Solving",
    issuer: "TestGorilla",
    date: "Issued Jun 2026",
    badge: "93rd percentile",
    url: "https://www.testgorilla.com",
  },
  {
    name: "Coding: Entry-Level Algorithms",
    issuer: "TestGorilla",
    date: "Issued Jun 2026",
    badge: "61st percentile",
    url: "https://www.testgorilla.com",
  },
  {
    name: "Job Application Essentials",
    issuer: "IBM",
    date: "Issued Oct 2023",
    badge: "Career",
    url: "https://www.credly.com",
  },
  {
    name: "CAPACITI AI Skills Accelerator",
    issuer: "CAPACITI",
    date: "2026",
    badge: "Participant",
    url: "https://capaciti.org.za",
  },
];

export const profileSummary = [
  "I'm a passionate and detail-oriented Software Developer based in South Africa, dedicated to building robust, scalable solutions with Python, Java, and modern web technologies.",
  "I specialize in full-stack development, seamlessly integrating systems, APIs, and databases, with strong expertise in SQL, OOP, and Agile methodologies. I've also served as a Tutor Supervisor at WeThinkCode_, where I mentored students and delivered technical modules in Python and problem-solving.",
  "As a CAPACITI AI Skills Accelerator participant and Google AI Essentials certified, I stay at the forefront of AI and software engineering, bringing these tools into real-world projects and learning spaces.",
  "I'm excited to collaborate with like-minded professionals and contribute to technological innovation across South Africa.",
];

export const skillTags = [
  "Python",
  "Java",
  "JavaScript",
  "React",
  "FastAPI",
  "SQL",
  "APIs",
  "Agile",
  "Technical Mentorship",
  "AI/ML",
];
