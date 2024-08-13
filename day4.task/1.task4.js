const data =
    {
    "fullName": "Sanduri Madhava Reddy",
    "contactInformation": {
    "phone": "+91 9963695759",
    "email": "madhavreddy9963@gmail.com"
    },
    "professionalSummary": "Beginner for software MERN Fullstack",
    "workExperience": "Fresher",
    "education": {
    "degree": "B.Sc Computers",
    "institution": "Sreechaitanya Degree College",
    "yearOfGraduation": 2018
    },
    "skills": "MongoDB, Express.Js, React.js, Node.js",
    "certifications": "Typing Lower Certification",
    "languages": "English, Telugu, Hindi",
    "hobbiesInterests": "Watching movies"
    }
 
  function printObject(obj, prefix = '') {
    const entries = Object.entries(obj);
    for (let i = 0; i < entries.length; i++) {
    const [key, value] = entries[i];
    if (typeof value === 'object' && value !== null) {
    printObject(value, prefix + key + '.');
    } else {
    console.log(prefix + key + ": " + value);
    }
    }
    }
    
    printObject(data);