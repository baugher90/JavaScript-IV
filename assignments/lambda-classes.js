// CODE here for your Lambda Classes
class Person {
    constructor(att) {
      this.age = att.age;
      this.location = att.location;
      this.name = att.name;
      this.gender = att.gender;
      this.subject = att.subject;
    }
  
    speak() {
      return `Hello my name is ${this.name}, I am from ${this.location} `;
    }
  }
//----------------------------------------------------------------------------  
  class Student extends Person {
    constructor(att) {
      super(att);
      this.previousBackground = att.previousBackground;
      this.className = att.className;
      this.favSubject = att.favSubject;
      this.grade = Math.random() * 100 || 0;
    }
    // Methods
    listSubjects() {
      return `${this.name}'s favorite subject is ${this.favSubject[Math.floor(Math.random() * this.favSubject.length)]}`;
    }

    PRAssignment() {
      return `${this.name} has submitted a PR for ${this.favSubject[Math.floor(Math.random() * this.favSubject.length)]}`;
    }

    sprintChallenge() {
      return `${this.name} has begun sprint challenge on ${this.favSubject[Math.floor(Math.random() * this.favSubject.length)]}`;
    }
  }
//----------------------------------------------------------------------------  
  
  class Instructor extends Person {
    constructor(att) {
      super(att)
      this.specialty = att.specialty;
      this.favLanguage = att.favLanguage;
      this.catchPhrase = att.catchPhrase;
    }
    
    demo() {
      return `Today we are learning about ${this.favLanguage}`;
    }
    
    grade(student) {
        let knowledge = Math.floor(Math.random() * (this.grade / 3));
        student.grade += knowledge;
      return `${student.name} receives a perfect score on ${this.favLanguage}`;
    }

    teach(student) {
        let knowledge = Math.floor(Math.random() * (this.grade / 3));
        student.grade += knowledge;
      let teach = Math.floor(Math.random()*2 +(student.grade));
      student.grade += teach;
      console.log(`${this.name} is teaching ${this.favLanguage} to ${student.name}`);
    }
  }
//----------------------------------------------------------------------------
class ProjectManager extends Instructor {
    constructor(att) {
      super(att);
      this.gradClassName = att.gradClassName;
      this.favInstructor = att.favInstructor;
      this.channel =att.channel;
    }
    
    standup() {
     console.log(`${this.name} announces to ${this.channel}, @channel standy time!​​​​​`)
    }
    
    debugCode(student) {
        console.log(`${this.name} debugs ${student.name}'s code on ${this.favLanguage[Math.floor(Math.random() * this.favLanguage.length)]}`)
    }
  }
//---------------------------------------------------------------------------- Instructors
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
    favLanguage: ['JavaScript'],
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });
//========================================
const george = new Instructor({
    name: 'George',
    location: 'Sandstone',
    age: 37,
    gender: 'male',
    favLanguage: 'SQL',
    specialty: 'Back-end',
    catchPhrase: `Forget the homies`
  });
//========================================
const josh = new Instructor({
    name: 'Josh',
    location: 'Banjo Town',
    age: 36,
    gender: 'male',
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `In Banjo we trust!`
  });
//========================================
const dustin = new Instructor({
    name: 'Dustin',
    location: 'Coolsville',
    age: 34,
    gender: 'male',
    favLanguage: 'JSX',
    specialty: 'Front-end',
    catchPhrase: `DJ Dustin is in the house!`
  });
//---------------------------------------------------------------------------- Project Managers
const ben_t = new ProjectManager({
    name: `Ben`,
    location: `Meme Town`,
    age: 9001,
    gender: `Apache Attack Meme Lord`,
    favLanguage: `Memaniese`,
    specialty: `Being a PM`,
    catchPhrase: `Bongo Cat gif`,
    gradClassName:`Web15`,
    favInstructor:['Dustin', 'Josh', 'George', 'Fred'],
    channel: 'Web18_Ben'
  });
  //========================================
  const yanrong = new ProjectManager({
    name: `Yanrong`,
    location: `Nashville`,
    age: 26,
    gender: `male`,
    favLanguage: `redux`,
    specialty: `Writing in pizza code`,
    catchPhrase: `Please fill out that stand up form while i take a nap.`,
    gradClassName:`Web15`,
    favInstructor:['Dustin', 'Josh', 'George', 'Fred'],
    channel: 'Web18_Yanrong'
  });
//========================================
  const phil = new ProjectManager({
    name: `Phil`,
    location: `Nashville`,
    age: 27,
    gender: `male`,
    favLanguage: `React`,
    specialty: `Building cool Apps`,
    catchPhrase: `Have you tried refreshing the page?`,
    gradClassName:`Web15`,
    favInstructor:['Dustin', 'Josh', 'George', 'Fred'],
    channel: 'Web18_Phil'
  });
//---------------------------------------------------------------------------- Students
const christian_ipanaque = new Student({
    name: "Christian Ipanaque",
    age: 32,
    gender: "Male",
    location: "Seattle, WA",
    previousBackground: "Server Hardware Technician",
    className: "WEB18",
    favSubject: ["Computer Science","Redux","Algorithms","Data Structures","Computer Architecture"],
  })
//========================================
const liz_B = new Student({
    name: "Lizzy B",
    age: 27,
    gender: "Female",
    location: "Portland, OR",
    previousBackground: "Biology/Health Science grad",
    className: "WEB12",
    favSubject: ["CSS","React","Ternaries","SQL","Node"],
  })
//========================================
const joshk = new Student({
    name: "Josh Kersting",
    age: 27,
    gender: "Male",
    location: "Muskegon, Mi",
    previousBackground: "Data Analyst",
    className: "WEB18",
    favSubject: ["Computer Science",,"Algorithms","Data Structures","Computer Architecture","Photography","Cooking"],
  })
//========================================
const leslie_t = new Student({
    name: "Leslie Thompson",
    age: 31,
    location: "San Francisco, CA",
    gender: "F",
    previousBackground: "Retail Management",
    className: "Web18",
    favSubject: ["CSS", "JavaScript", "Cooking", "Biology"],
  });
//========================================
const patrick = new Student ({
    name: 'Patrick Steveson',
    location: 'Illinois',
    age: 27,
    gender: 'male',
    previousBackground: 'Finance',
    className: 'Web18',
    favSubject: ['Html', 'CSS', 'JavaScript'],
});
//========================================
const tracy_pilcher = new Student({
    name: "Tracy Pilcher",
    age: 58,
    gender: "Female",
    location: "Hamtramck, MI",
    previousBackground: "LAMP Web Developer",
    className: "WEB18",
    favSubject: ["PHP", "MySQL", "Permaculture Gardening"],
  })
//========================================
const chadkidd = new Student({
    name: "Chad Kidd",
    age: 32,
    gender: "Female",
    location: "Los Angeles, CA",
    previousBackground: ["DJ", "PA", "CSR", "Management"],
    className: "WEB18",
    favSubject: ["CSS", "JS", "Music", "Getting This Bread",],
  }) 
//========================================
const brellin = new Student({
    name: 'Will Umstead',
    age: 26,
    location: 'Tuscola, Texas',
    gender: 'Male',
    previousBackground: 'Army',
    className: 'WEB18',
    favSubject: ['PHP', 'CSS', 'JavaScript'],
});

//----------------------------------------------------------------------------
let instructorArray = [];
instructorArray.push(fred,george,josh,dustin);

let pmArray = [];
pmArray.push(ben_t,yanrong,phil);

let studentArray = [];
studentArray.push(christian_ipanaque,liz_B,joshk,leslie_t,patrick,tracy_pilcher,chadkidd,brellin);




//---------------------------------------------------------------------------- Grade

function teach(stAr,pmAr,inAr) {
    let student = stAr[Math.floor(Math.random() * stAr.length)];
    console.log(student.speak());
    console.log(student.listSubjects());

    let projectManager = pmAr[Math.floor(Math.random() * pmAr.length)];
      let pmIntro = Math.floor(Math.random() * 2);
      if (pmIntro === 0) {
        projectManager.standup();
      } else {
        debugCode(student);
      }
    console.log(pmIntro);

    let instructor = inAr[Math.floor(Math.random() * inAr.length)];
    console.log(instructor);
    

    let graduate = "";
    //If no winner then battle
    while (!graduate) {
      let active = "";
      let passive = "";
      //--Determining who is active
      let attDef = Math.floor(Math.random() * 2);
      if (attDef === 0) {
        active = instructor;
        passive = student;
      } else {
        active = projectManager;
        passive = student;
      } 
      //--Determining which method to use
      let normSpec = Math.floor(Math.random() * 2);
      if (normSpec === 0) {
        active.teach(passive);
      } else {
        active.grade(passive);
      }
      //--checking grade to see if student can graduate
      if (student.grade >= 70) {
        graduate = student;
      }
    }
    debugger;
    //--If student can graduate 
    if (graduate === student) {
      console.log(
        `${student.name} has graduated from Lambda!`
      );
    //--If if student doesn't graduate...  
    } else {
      console.log(
        `${student.name} needs to study more!`
      );
    }
  }


//teach(studentArray,pmArray,instructorArray);

