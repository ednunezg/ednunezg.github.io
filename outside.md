---
layout: page
title: Ed Goes Outside
permalink: /outside/
tagline: "putting one foot in front of the other"
order: 4
---

<div class="outside">

<div style="text-align: center;"><img src="{{ site.url }}/assets/nature-cover.jpg" width="700" alt="image"></div><br>


<h3> Running </h3>


<div class="outside-racing">

<p>I kinda suck at running, but it shapes a significant part of who I am and what I do in my free time. I love to go on long trail runs as means to achieve ultimate consciousness of my natural surroundings. It's my vehicle for finding inner peace and overcoming my existential dread. </p>

<h4>2017&nbsp; Race&nbsp; Calendar</h4>

		<ul>
		<li>April 8 - <a href="https://www.zumbroendurancerun.com/">Zumbro 50 Mile</a> --- <a href="/running/2017/04/10/zumbro50.html">Race report</a> </li>
		<li>July 29 - <a href="http://www.voyageur50.com/"> Voyageur 50 Mile</a></li>
		<li>Sep 16 - <a href="https://www.thenorthface.com/get-outdoors/endurance-challenge/wisconsin.html"> Wisconsin North Face 50 Mile</a></li>
		</ul>

		<br>

<h4 style="display:inline"> Past Races</h4>&nbsp;&nbsp;<small style="color:#666;display:inline" class="showpast" id="showpast">[ Show/Hide ]</small>
<br style="clear:both" /><br>


		<div id="past-races" class="past-races" style="display:none">

			<h5>2016</h5>
				<ul>
				<li>Oct 30 - <a href="http://http://www.capecodmarathon.com/">Cape Cod Marathon (DNF)</a></li>
				</ul>

			<h5>2015</h5>
				<ul>
				<li>April 15 - <a href="http://www.getingearevents.com/results.html">Get in Gear Half Marathon</a></li>
				<li>Oct 31 - <a href="http://www.minnesotamonster.org/half-marathon.html">Monster Dash Half Marathon</a></li>
				</ul>

			<h5>2014</h5>
				<ul>
				<li>Oct 5 --- <a href="https://www.tcmevents.org/tcmarathon/">Twin Cities Marathon</a></li>
				</ul>

		</div>

</div>

<hr>
<br>

<h3> Adventures </h3>


<div class="outside-adventures">
	<p> I am fascinated with long distance, self-powered travel. I enjoy the simplicity of carrying everything I need on my pack, and the liberating feeling one gets walking for days at a time. </p>
	

	<h4>Upcoming Trips</h4>
		<ul>
		<li>Aug 2017 - Superior Hiking Trail Thru Hike</li>
		</ul>

	<h4>Past Trips</h4>

	<h5>2017</h5>
		<ul>
		<li>July 2017 - <a href="/adventures/2017/07/24/ColoradoTrail.html">Colorado Trail Thru Hike</a></li>
		<li>March 2017 - <a href="/adventures/2017/03/23/SkyeTrail.html">Scotland's Skye Trail - Portree to Duntulm</a></li>
		</ul>

	<h5>2016</h5>
		<ul>
		<li>May 2016 - <a href="/adventures/2016/05/31/GR20.html">Corsica's GR20</a></li>
		<li>May 2016 - <a href="/adventures/2016/05/31/Iceland.html">Three days meandering in Iceland</a></li>
		<li>Nov 2016 - <a href="/adventures/2016/11/29/BoucherTontoBright.html">Grand Canyon - Boucher-Tonto-Bright Angel Loop</a></li>
		</ul>

	<h5>2015</h5>
		<ul>
		<li>Aug 2015 - <a href="/adventures/2015/08/30/john-muir-trail.html">John Muir Trail - Red's Meadow to Mount Whitney</a></li>
		</ul>

	<br>

</div>
<hr>
	<br>
	<img src="{{ site.url }}/assets/icon_strava.png" width="26px"> Follow me on <a href="https://www.strava.com/athletes/19002578"> Strava</a>

</div>

<script>

	function togglePastRaces(){
	    var pastraces=document.getElementById('past-races');

	    if (pastraces.style.display === 'none') {
	        pastraces.style.display = 'block';
	    } else {
	        pastraces.style.display = 'none';
	    }
	}

	// Run when Page is ready
	window.onload=function(){
		console.log("Hello world");
	    document.getElementById('showpast').addEventListener('click',togglePastRaces,false);
    }

</script>
