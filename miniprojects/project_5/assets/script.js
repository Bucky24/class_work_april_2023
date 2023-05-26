var now = dayjs();
$("#timeHolder").text(now.format("MMM D, YYYY [at] h:m:ss a"));

writeProjectsToTable();

setInterval(function () {
    var now = dayjs();
    $("#timeHolder").text(now.format("MMM D, YYYY [at] h:m:ss a"));
}, 1000);

$("#doThingButton").on("click", function() {
    $("#exampleModal").addClass("show");
    $("#exampleModal").css("display", "block");
});

function closeModal() {
    $("#exampleModal").removeClass("show");
    $("#exampleModal").css("display", "none");
}

$("#exampleModal button[data-bs-dismiss='modal']").on("click", function() {
    closeModal();
});

$("#projectDate").datepicker();

$("#addProjectButton").on("click", function(event) {
    event.preventDefault();

    var name = $("#projectName").val();
    var type = $("#projectType").val();
    var date = $("#projectDate").val();

    var projectData = JSON.parse(localStorage.getItem("projectData"));
    if (!projectData) {
        projectData = [];
    }

    projectData.push({
        name: name,
        type: type,
        date: date,
    });

    localStorage.setItem("projectData", JSON.stringify(projectData));

    $("#projectName").val("");
    $("#projectType").val("");
    $("#projectDate").val("");

    writeProjectsToTable();

    closeModal();
});

function writeProjectsToTable() {
    var projectData = JSON.parse(localStorage.getItem("projectData"));
    if (!projectData) {
        projectData = [];
    }

    var now = dayjs();

    $("#projectTableBody").html("");

    for (var i=0;i<projectData.length;i++) {
        var difference = dayjs(projectData[i].date).diff(now, "day");

        var newRow = $("<tr>");
        if (difference < 0) {
            newRow.addClass("pastdue");
        } else if (difference === 0) {
            newRow.addClass("duetoday");
        }

        var nameCell = $("<td>");
        nameCell.text(projectData[i].name);
        newRow.append(nameCell);

        var typeCell = $("<td>");
        typeCell.text(projectData[i].type);
        newRow.append(typeCell);

        var dateCell = $("<td>");
        dateCell.text(projectData[i].date);
        newRow.append(dateCell);

        var actionsCell = $("<td>");
        var deleteButton = $("<button>");
        deleteButton.text("Delete");
        deleteButton.attr("data-index", i);
        actionsCell.append(deleteButton);
        deleteButton.on("click", function() {
            var projectData = JSON.parse(localStorage.getItem("projectData"));
            if (!projectData) {
                projectData = [];
            }

            var index = $(this).attr("data-index");

            projectData.splice(index, 1);

            localStorage.setItem("projectData", JSON.stringify(projectData));

            writeProjectsToTable();
        });
        newRow.append(actionsCell);
    
        $("#projectTableBody").append(newRow);
    }

}