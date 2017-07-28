/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio= {
  name: "Jasper Ty";
  role: "Web Learner";
  contacts: {address: "19 Florist Lane, Scar. ON. M1E0A4", mobile: "647-377-3847", email: "jaspercyrus@gmail.com", github: "github.com/jct23",
    twitter: "None" },
  welcomeMessage: "Hello Everyone and Welcome to my Online Resume!";
  skills: ["Team Player","Strong organizational skills", "Pays attention to detail", "Proficient in Microsoft Office", 
           "Good communication skills", "A good multi-tasker and always willing to learn"],
  biopic: "None";
  display: "None";
};

var education= {
  "schools": [
    { "Name": "Centennial College",
      "Program": "Business Administration",
      "Years": "2009-2012"
    },
    { "Name": "George Brown College",
      "Program": "Culinary Management",
      "Years": "2016-2017"
    }
  ],
  display: "None";
};

var work= {
  "Employment": [
    { "Employer": "St. John the Compassionate",
      "Role": "Cook Volunteer",
      "Description": "Helps out the kitchen in preparing their meals by cutting ingredients and preparing other equipment.",
      "Years": "2015-2016"
    },
    { "Employer": "Prostate Cancer Canada",
      "Role": "Direct Marketing Volunteer",
      "Description": "Updating donor information and answering their inquiries. I also help in various Administrative work.",
      "Years": "2015-2016"
    },
    { "Employer": "Longos Supermarkets",
      "Role": "CSR/Cashier",
      "Description": "Processing debit/credit transactions", "Addressed customer concerns and promote Longos products",
      "Years": "2010-2014"
    },
  ],
  display: "None";
};

var projects= {
  "Projects": [
    { "Name": "None",
      "Type of project": "None",
      "Date": "None"
   ];
}
    document.getElementById("education").style.backgroundcolor= "black";
    
    var charEscape= function() {
      newHTML= _html;
      newHTML.replace("/<g>/", "&lt");
      newHTML.replace("/<g>/", "&gt");
    }
    
    if (bio.skills<0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill= HTMLskills.replace("%data%","bio.skills[0]");
      $("#skills").append(formattedSkill);
      formattedSkill= HTMLskills.replace("%data%", "bio.skills[1]");
      $("#skills").append(formattedSkill);
      formattedSkill= HTMLskills.replace("%data%", "bio.skills[2]");
      $("#skills").append(formattedSkill);
      formattedSkill= HTMLskills.replace("%data%", "bio.skills[3]");
      $("#skills").append(formattedSkill);
      formattedSkill= HTMLskills.replace("%data%", "bio.skills[4]");
    }
    
    for (job in employment) {
      $("#workExperience").append(HTMLworkStart);   //1.
      var formattedEmployer= HTMLworkEmployer.replace("%data%", "work.employment[job].employer");   //2.
      var formattedRole= HTMLworkTitle.replace("%data%", "work.employment[job].role");
      var formattedRoleEmployer= formattedEmployer + formattedRole;    //3.
      $(".work-entry:last").append(formattedRoleEmployer);    //4.
    
      var formattedYears= HTMLworkDates.replace("%data%", "work.employment[job].date");
      $(".date-text:last").append(formattedYears);
      var formattedDescription= HTMLworkDescription.repace("%data%", "work.employment[job].description");
      $(".work-entry:last").append(formattedDescription);
    }
    
   $(document).function(loc() {
      var X= loc.pageX;
      var Y= loc.pageY;
      logClicks(X,Y);
    });
    
    function job_Location(work_obj) {
        var jobLocation=[];
  
        for (job in work_obj.employment) {
        var newLocation= work.employment[job].location;
        jobLocation.push(newLocation);
        return newLocation;
      }
    };

$("#maindiv").append(internationalizedButton);

function inName(name):
  name= name.trim.split(' ');
  name[1]= name[1].toUpperCase();
  name[0]= name[0].split(0,1).toUpperCase() + name[0].split(1).toLowerCase();
  return name[0]+ " " +name[1];

projects.display= function() {
  for(projects in projects.projects) {
    $("#projects").append(HTMLprojectstart);
  }
  var formattedTitle= HTMLworkTitle.replace("%data%",projects.projects[project].title);
  $(".work-entry:last").append(formattedEmployerTitle);
}
    
 
    
    
    
    
    
