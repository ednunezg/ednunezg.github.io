---
layout: page
title: Projects
permalink: /projects/
tagline: "a portfolio of stuff I've worked on outside of my main career"
order: 1
---

<div class="projects" id="projects">

</div>

<div class="projects-bottom">
	<p> More available on my <a style="border-bottom: 1px dotted black;" href="http://www.github.com/ednunezg">Github</a> page! </p>
</div>


<script type="text/javascript" src="/projects.js"></script>

<script>

	//1. Open the projects JSON file
	
	var projects = window.projects_json;
	generateContent(projects);

	//2. Generate "project" divs inside "projects"


	function generateContent(projects){

		var projectsDiv = document.getElementById('projects');
		
		for (var i = 0; i < projects.length; i++) {
			

			//Check if hidden. NOTE: A non existent (null) hidden property is interpreted as false

			if(projects[i].hidden == "true") continue;


			//Create new project div

			var newDiv = document.createElement('div');
			newDiv.className = "project";
			projectsDiv.appendChild(newDiv);
			

			//Create HTML structure for the project div
			var imageDiv = newDiv.appendChild(document.createElement("div"));
			imageDiv.className = "project-image";

			var bodyDiv = newDiv.appendChild(document.createElement("div"));
			bodyDiv.className = "project-body";

			var clearDiv = newDiv.appendChild(document.createElement("div"));
			clearDiv.className = "clear:both";

			
			var titleDiv = bodyDiv.appendChild(document.createElement("div"));
			titleDiv.className = "project-title";

			var infoDiv = bodyDiv.appendChild(document.createElement("div"));
			infoDiv.className = "project-info";

			var linksDiv = bodyDiv.appendChild(document.createElement("div"));
			linksDiv.className = "project-links";

			var tagsDiv = bodyDiv.appendChild(document.createElement("ul"));
			tagsDiv.className = "project-tags";


			//image content
			imageDiv.innerHTML = '<img src="{{ site.url }}'+projects[i].image+'" >';
			
			//title content
			titleDiv.innerHTML = '<h2>'+projects[i].title+"</h2>" + '<div class="date">' + projects[i].date + '</div> <br>'
			
			//info content
			infoDiv.innerHTML = '<p>' + projects[i].info + '</p>';

			//links content
			if(projects[i].links.main != null){
				linksDiv.innerHTML += '<a href='+projects[i].links.main+'><i class="fa fa-external-link"></i> Link</a><br>';
			}
			
			if(projects[i].links.demo != null){
				linksDiv.innerHTML += '<a href='+projects[i].links.demo+'><i class="fa fa-external-link"></i> Demo</a><br>';
			}

			if(projects[i].links.moreinfo != null){
				linksDiv.innerHTML += '<a href='+projects[i].links.moreinfo+'><i class="fa fa-info-circle"></i> More info</a><br>';
			}

			if(projects[i].links.reddit != null){
				linksDiv.innerHTML += '<a href='+projects[i].links.reddit+'><i class="fa fa-reddit"></i> Reddit Announcement</a><br>';
			}

			if(projects[i].links.landingpage != null){
				linksDiv.innerHTML += '<a href='+projects[i].links.landingpage+'><i class="fa fa-external-link"></i> Landing page</a><br>';
			}

			if(projects[i].links.source != null){
				linksDiv.innerHTML += '<a href='+projects[i].links.source+'><i class="fa fa-github"></i> Source Code</a><br>';
			}

			//tags content
			for (var j = 0; j < projects[i].tags.length; j++) {
				var tag = projects[i].tags[j];
				tagsDiv.innerHTML+='<li class="project-tag">'+tag+'</li>'
			}


			projectsDiv.appendChild(document.createElement('br'));
		
		}

	}
	
</script>
