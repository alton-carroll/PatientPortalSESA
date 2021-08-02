$(document).ready(function () {
	$("#appbar").kendoAppBar({
		position: "top",
		positionMode: "sticky",
		items: [
			{
				className: "navbar-brand",
				type: "contentItem",
				template:
					"<a class='navbar-brand' href='Home.html'><img src='../SiteAssets/Medical-Icon.png' alt='Medical Icon' width='80' height='80' /></a>",
			},
			{
				className: "nav-link active",
				type: "contentItem",
				template:
					"<li class='nav-item' style='bottom:0px'><a class='nav-link active' href='Home.html'>Home</a></li>",
			},
			{
				className: "nav-link",
				type: "contentItem",
				template:
					"<li class='nav-item' style='bottom:0px'><a class='nav-link' href='Patient.html'>Patients</a></li>",
			},
			{
				className: "nav-link",
				type: "contentItem",
				template:
					"<li class='nav-item' style='bottom:0px'><a class='nav-link' href='Appointments.html'>Appoinments</a></li>",
			},
			{
				className: "nav-link",
				type: "contentItem",
				template:
					"<li class='nav-item'style='bottom:0px'><a class='nav-link' href='Home.html'>Administration</a></li>",
			},
		],
	});
});
