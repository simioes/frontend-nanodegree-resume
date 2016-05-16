/*
This is empty on purpose! Your code to build the resume will go here.
 */

  function findAndReplace(object, value, replacevalue){
    for(var x in object){
      if(typeof object[x] == 'object'){
        findAndReplace(object[x], value, replacevalue);
      }
      if(object[x] == value){
        object["name"] = replacevalue;
        // break; // uncomment to stop after first replacement
      }
    }
  }

  var formattedName = "Pedro Simões";
  var fomattedRole = "Web Developer";

  var nameText = HTMLheaderName.replace('%data%', formattedName);
  var roleText = HTMLheaderRole.replace('%data%', fomattedRole);

  $('#header').prepend(roleText);
  $('#header').prepend(nameText);

  var skills = "js, python, mysql";

  var bio = {
    "name": "Pedro Simões",
    "role": "Web Developer",
    "contacts": {
      "mobile": "123123123",
      "email": "simioes@gmail.com",
      "github": "simioes",
      "twitter": "ptsimoes",
      "location": "Porto"
    },
    "welcomeMessage": "Hello there!",
    "skills": [
      "python", "cloud", "django", "mysql"
    ],
    "bioPic": "images/fry.jpg"
  }

  var education = {
    "schools": [
      {
        "name": "ISEP",
        "location": "Porto",
        "degree": "LIC.",
        "majors": ["CS"],
        "dates": 2013,
        "url": "http://isep.ipp.pt"
      },
      {
        "name": "ISEP2",
        "location": "Porto2",
        "degree": "LIC.2",
        "majors": ["CS2"],
        "dates": 2014,
        "url": "http://isep.ipp.pt"
      }
    ],
      "onlineCourses": [
        {
          "title": "cenas"
        }
      ]
  }

  var work = {
    "jobs": [
      {
        "employer": "InVine",
        "title": "Web Developer",
        "dates": "November 2015 - Present",
        "description": "Worked with InVine platform creating new fixtures and   improving."
      }
    ]
  };

  var projects = {
    "projects": [
      {
        "title": "udacity resume",
        "dates": "2016",
        "description": "Create resume learning and improving JavaSript",
        "images": []
      }
    ]
  }

  findAndReplace(bio, "<", "&lt");
  findAndReplace(bio, ">", "&gt");

  findAndReplace(education, "<", "&lt");
  findAndReplace(education, ">", "&gt");

  findAndReplace(work, "<", "&lt");
  findAndReplace(work, ">", "&gt");

  findAndReplace(projects, "<", "&lt");
  findAndReplace(projects, ">", "&gt");

  if(bio.skills.length > 0){

    $('#header').append(HTMLskillsStart);

    var skillsText = HTMLskills.replace('%data%', bio.skills);
    //console.log(skillsText);
    //console.log(bio.skills);
    //document.getElementById('main').append(HTMLskillsStart);
    $('#skills').append(skillsText);
  }

function displayWork(){
  for(job in work.jobs){
    $("#WorkExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(formattedEmployerTitle);
    // console.log(work.jobs[job].title);
  }
}

displayWork();

$(document).click(function(loc) {
  console.log(loc.pageX, loc.pageY);
});


function inName(name){
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

  return name[0] + name[1];
}

$("#main").append(internationalizeButton);


projects.display = function(){
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $("#.project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}
