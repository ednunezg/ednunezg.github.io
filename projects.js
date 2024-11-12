var projects_json = [
	{
		"title":"Grateful Dead Show Archive",

		"date":"2024/06",

		"image":"/assets/projects/syf.png",

		"info": "Building an interactive Grateful Dead show database, visual archive. Meant to be an interactive tool for discovering shows adored by GD fans. If this is interesting to you, reach out !",

		"links":{
			"main":"https://deadlyarchive.com",
			"reddit":"https://www.reddit.com/r/gratefuldead/comments/1gmxt06/browse_shows_by_specific_song_rank_shows_by/"
		},

		"tags":["Python", "Flask", "React", "PostgreSQL", "TypeScript"]
	},
	{
		"title":"RAM Promaster Van Mobile Home",

		"date":"2020/11",

		"image":"/assets/projects/vanlife.png",

		"info":"Built out a mobile home outfitted with furniture, off grid solar electrical system, running water, kitchen, and more.",

		"links":{
			"moreinfo":"http://ednunez.me/tech/2021/03/18/VanBuild.html"
		},

		"tags":["CAD modeling", "Electrical wiring", "Carpentry", "Extreme patience"]
	},
	{
		"title":"Algorithmic Day Trading Bot",

		"date":"2020/04",

		"image":"/assets/projects/algotrading.png",

		"info":"Created day-trading bot with backtesting framework. Bot makes trading decisions based on support+resistance trendlines, news, and other key market indicators. Published python library for trendline detection component.",

		"links":{
			"moreinfo":"http://ednunez.me/tech/2021/03/18/Algotrading.html",
			"source":"https://github.com/ednunezg/pytrendline"
		},

		"tags":["Python", "Pandas", "Ameritrade API", "AWS", "Elastic Stack"]
	},
	{
		"title":"Glimpsecard - Augmented reality business cards",

		"date":"2019/08",

		"image":"/assets/projects/glimpsecard.png",

		"info":"Create augmented reality enabled business cards, viewable on your smartphone without an app.",

		"links":{
			"moreinfo":"http://ednunez.me/tech/2021/03/18/Glimpse.html",
			"landingpage":"https://glimpse-landing-page.netlify.app/"
		},

		"tags":["Node.js","React.js","JavaScript", "Shopify", "Stripe"]
	},
	{
		"hidden":"true",
		"title":"To-do list app with user authentication",
		"date":"2017/08",
		"image":"/assets/projects/todo.png",
		"info":"Built this for the purposes of learning React.js and handling authentication with Google and Facebook OAuth APIs. This web app allows a logged in user to add to-dos to his profile. All to-dos are synched with a MongoDB database.",
		"links":{
			"main":"https://todos-reactjs.herokuapp.com",
			"moreinfo":null,
			"source":"https://github.com/ednunezg/react-todolist"
		},
		"tags":["Node.js","React.js","Flux","JavaScript","MongoDB"]
	},
	{
		"hidden":"true",
		"title":"FKT Setter: A GPS logger for iOS",
		"date":"2017/08",
		"image":"/assets/projects/fkt-setter.png",
		"info":"[Insert GPS logger info here]",
		"links":{
			"main":null,
			"moreinfo":null,
			"source":null
		},
		"tags":["Swift","Node.js","MongoDB","REST API"]
	},


	{
		"title":"Training log viewer for runners and cyclists",
		"date":"2017/06",
		"image":"/assets/projects/strava.png",
		"info":"Simple, but beautiful, single page training log viewer for Strava users, bypassing social media clutter on Strava's website. Imports workouts via Strava's API and presents log with a calendar-like view.  Intended to be primarily used as a 'new tab' page.",
		"links":{
			"main":"https://stravalog.onrender.com",
			"moreinfo":null,
			"demo":null,
			"source":"https://github.com/ednunezg/StravaLog"
		},
		"tags":["Node.js","JavaScript","jQuery","REST API"]
	},

	{
		"title":"Speech Analytics iOS app",

		"date":"2017/04",

		"image":"/assets/projects/speechanalytics.png",

		"info":"iOS application buitl for my college Senior project. Detects speech stutters, monotony, long pauses, and filler words in real-time. It provides speakers with a statistical analysis of their performance to aid in improving their speech skills. Made with four other students for my Senior Design class.",

		"links":{
			"main":null,
			"moreinfo":null,
			"demo":"https://youtu.be/e7t3LG6ICfA",
			"source":"https://github.com/eddypuffs/Speech_Analytics_App"
		},

		"tags":["Swift","AudioKit Framework"]
	},


	{
		"title":"Chatroom Server and Client",

		"date":"2017/02",

		"image":"/assets/projects/chat.jpg",

		"info":"For my computer networks class, I developed a chatroom server and client program in Java. Special features include a user registration system and P2P file sharing between clients.",

		"links":{
			"main":null,
			"moreinfo":null,
			"source":"https://github.com/eddypuffs/Chat_Client_And_Server"
		},

		"tags":["Java","Sockets Programming"]
	},


	{
		"hidden":"true",

		"title":"OS161",

		"date":"2017/02",

		"image":"/assets/projects/os161.png",

		"info":"For my operating systems course, I extended the functionality of the primitive OS161 operating system written in C. I implemented smarter process schedulers, multi-threading and virtual memory.",

		"links":{
			"main":null,
			"moreinfo":null,
			"source":"https://github.com/eddypuffs/OS161-Schedulers"
		},

		"tags":["C"]
	},

	{
		"title":"Self navigating robot",

		"date":"2015/03",

		"image":"/assets/projects/cnc-alternative.jpg",

		"info":"Created prototype for a robot that autonomously navigates in 2D space to research portable and affordable solutions to CNC Mills. Future prototypes will include mounted drawing device. System relies on Arduino board, Zigbee communication, robot localization methods, and PID control.",

		"links":{
			"main":null,
			
			"moreinfo":"https://www.slideshare.net/EduardoNunez10/ed-nunez-mobile-robot-cnc-alternative",

			// "source":"https://github.com/ednunezg/CNC_Alternative_Bot"
		},

		"tags":["Arduino","Zigbee"]

	},

	{
		"title":"Printer resources notification app",

		"date":"2014/04",

		"image":"/assets/projects/csom-printer.png",

		"info":"Desktop app I made while working in Carlson IT sophomore year. App parses HTML text from printer servers, interprets whether printers have hit critical levels, and notifies the user via email or text.",

		"links":{
			"main":null,
			
			"moreinfo":null,

			"source":"https://github.com/eddypuffs/CSOM_Printer_Notifier"
		},

		"tags":["Java","HTML Parsing"]

	},

	{
		"title":"Engineers Without Borders UMN Checkout",

		"date":"2014/02",

		"image":"/assets/projects/ewb.jpg",

		"info":"My first hands-on software project. Made a dynamic website from scratch that allows EWB UMN members to reserve and checkout items from a catalog.",

		"links":{
			"main":"http://checkout.ewb-umn.org",
			
			"moreinfo":null,

			"source":"https://github.com/eddypuffs/checkout.ewb-umn.org"
		},

		"tags":["PHP","Javascript","mySQL"]

	}

];

window.projects_json = projects_json;
