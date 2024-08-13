const person = 
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
            for (const [key, value] of Object.entries(obj)) {
            if (typeof value === 'object' && value !== null) {
            printObject(value, prefix + key + '.');
            } else {
            console.log(prefix + key + ": " + value);
            }
            }
            }
            
            printObject(person);


// function printObject(obj, prefix = '') {
//     for (const key in obj) {
//     if (typeof obj[key] === 'object' && obj[key] !== null) {
//     printObject(obj[key], prefix + key + '.');
//     } else {
//     console.log(prefix + key + ": " + obj[key]);
//     }
//     }
//     }
    
//     printObject(person);
    

