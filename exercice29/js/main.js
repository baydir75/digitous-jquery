$(document).ready(() => {
    $(".btn").click(() => {
        let value = $(".form-control").val();
        if (value.length > 5) {
            $(".form-control").addClass("is-valid");
        } else {
            $(".form-control").addClass("is-invalid");
        }
    });
})