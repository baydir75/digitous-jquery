$(document).ready(() => {
    $(".form-control").keyup(() => {
        let value = $(".form-control").val();
        if (value.length > 5) {
            $(".form-control").removeClass("is-invalid");
            $(".form-control").addClass("is-valid");
        } else {
            $(".form-control").addClass("is-invalid");
        }
    });
})