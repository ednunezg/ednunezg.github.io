---
layout: page
title: Projects
permalink: /projects/
tagline: "a portfolio of my most singificant tech projects"
order: 1
---





<br>	
<div class="projects" id="projects">
<p> More available on my <a style="border-bottom: 1px dotted black;" href="http://www.github.com/eddypuffs">Github</a> page! </p>
</div>



<script type="text/javascript" src="/js/common.js"></script>


<script>

	//1. Open the projects JSON file
	
	var projects = [];
	loadJSON('../projects.json',
	         function(data) { generateContent(data); },
	         function(xhr) { console.error(xhr); }
	);


	//2. Generate "project" divs inside "projects"


	function generateContent(projects){
		console.log(projects);

		var projectsDiv = document.getElementById('projects');

		for (var i = 0; i < projects.length; i++) {
			

			//Check if hidden. NOTE: A non existent (null) hidden property is interpreted as false

			if(projects[i].hidden == "true") continue;

			//Determine the height of the project box

			var projectType = (projects[i].info.length > 220) ? "project" : "miniproject";

			//Create new project div

			var newDiv = document.createElement('div');
			newDiv.className = projectType;
			projectsDiv.appendChild(newDiv);
			

			//Create HTML structure for the project div
			var imageDiv = newDiv.appendChild(document.createElement("div"));
			imageDiv.className = "project-image";

			var bodyDiv = newDiv.appendChild(document.createElement("div"));
			bodyDiv.className = "project-body";
			
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
			if(projects[i].links.moreinfo != null){
				linksDiv.innerHTML += '<a href='+projects[i].links.moreinfo+'><i class="fa fa-info-circle"></i> More info</a><br>';
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
