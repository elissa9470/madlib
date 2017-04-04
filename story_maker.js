function makeStory() {
    // get form values (2 points)
    var name1 = document.getElementById('name1').value;
    var name2 = document.getElementById('name2').value;
    var name3 = document.getElementById('name3').value;
    var noun1 = document.getElementById('noun1').value;
    var verb1 = document.getElementById('verb1').value;
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var adjective4 = document.getElementById('adjective4').value;
    var adjective5 = document.getElementById('adjective5').value;
    var adjective6 = document.getElementById('adjective6').value;
    var adverb1 = document.getElementById('adverb1').value;
    var number = document.getElementById('number').value;


    // Set title of story. Use at least one form value in the title. (2 points)
    var title = name1 + "'s Favorite Class";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "On the first day of school, " + name1 + " " + verb1 + "s into Webpage Designs. Here, " + name1 + " meets two other hard workers, " + name2 + " and " + name3 + ". Every day, they made lots of " + adjective1 + " webpages, and got " + adjective2 + " grades!";
    var paragraph2 = "One day, " + name1 + ", " + name2 + ", and " + name3 + " decided to play with their " + noun1 + " instead of listening to the teacher, Mr. Cooper, who was teaching class! Mr. Cooper was very disappointed. He told the three " + adjective4 + " students to " + adverb1 + " leave the classroom.";
    var paragraph3 = "The next day, the three friends attempted to create a " + adjective3 + " webpage, but they just could not figure out what to do. They became very " + adjective6 + " and gave up. " + name1 + ", " + name2 + ", and " + name3 + " all failed the assignment. Mr. Cooper called their parents, who were all extremely " + adjective5 + ". " + name1 + ", " + name2 + ", and "+ name3 + " were all grounded for " + number + " weeks! So, the moral of the story is, never play with a " + noun1 + " in Webpage Designs." ;


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
    document.getElementById('title').innerHTML = title;
    document.getElementById('one').innerHTML = paragraph1;
    document.getElementById('two').innerHTML = paragraph2;
    document.getElementById('three').innerHTML = paragraph3;

}
