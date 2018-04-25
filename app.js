$(document).ready(function() {
    $("#food_item").keydown(function(e) {
        if (e.keyCode == 13) {
            if ($("#food_item").val().trim().length == 0) {
                return
            } else {
                if ($("select[name=item]").val() == null) {
                    return
                } else {
                    if ($("select[name=item]").val() == "vegetable") {
                        var food_entry = $("input[id=food_item]").val();
                        $("ul.veggie_item").append("<li class='veggie_item'>" + food_entry + "</li>");
                        $("input#food_item").val("")
                    } else if ($("select[name=item]").val() == "protein") {
                        var food_entry = $("input[id=food_item]").val();
                        $("ul.protein_item").append("<li class='protein_item'>" + food_entry + "</li>");
                        $("input#food_item").val("")
                    } else if ($("select[name=item]").val() == "grain") {
                        var food_entry = $("input[id=food_item]").val();
                        $("ul.grain_item").append("<li class='grain_item'>" + food_entry + "</li>");
                        $("input#food_item").val("")
                    } else if ($("select[name=item]").val() == "dairy") {
                        var food_entry = $("input[id=food_item]").val();
                        $("ul.dairy_item").append("<li class='dairy_item'>" + food_entry + "</li>");
                        $("input#food_item").val("")
                    } else if ($("select[name=item]").val() == "misc") {
                        var food_entry = $("input[id=food_item]").val();
                        $("ul.misc_item").append("<li class='misc_item'>" + food_entry + "</li>");
                        $("input#food_item").val("")
                    }
                }
            }
        }
    });
    $("ul").on("click", "li", function() {
        $(this).toggleClass("line_out")
    });
    $("ul").on("dblclick", "li", function() {
        $(this).remove()
    })
});