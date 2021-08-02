$(document).ready(function () {
	$("#grid").kendoGrid({
		dataSource: {
			type: "odata",
			transport: {
				read: {
					url: "../SiteAssets/Patients.js",
				},
			},
		},
		rowTemplate: kendo.template($("#rowTemplate").html()),
		altRowTemplate: kendo.template($("#altRowTemplate").html()),
		height: 550,
	});
});
