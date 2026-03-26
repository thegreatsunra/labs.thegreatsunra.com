function deleteIngredient() {
	$('.delete-ingredient a').live("click", function(event) {
		$(this).closest("li").remove();
		event.preventDefault();
	})
}

function addIngredient() {
	$('.add-ingredient a').click(function(event) {
		$("ul.ingredients-list").append("<li class=\"ingredient-item ingredient-2\"><div class=\"amount-input\"><label>Amount</label> <input type=\"text\" class=\"text\" /></div><div class=\"ingredient-input\"><label>Ingredient</label> <input type=\"text\" class=\"text\" /> <span class=\"delete-ingredient\"> <a href=\"#\"><img src=\"delete.png\" alt=\"delete\" /></a></span></div></li>");
		event.preventDefault();
	});
}

function addStep() {
	$('.add-step a').click(function(event) {
		$("ul.steps-list").append("<li class=\"step-item step-1\"><label>Step 2</label> <input type=\"text\" class=\"text\" /> <span class=\"delete-step\"> <a href=\"#\"><img src=\"delete.png\" alt=\"delete\" /></a></span></li>");
		event.preventDefault();
	});
}

function deleteStep() {
	$('.delete-step a').live("click", function(event) {
		$(this).closest("li").remove();
		event.preventDefault();
	})
}

function amountNotice() {
	$(".ingredient-item .notice").hide();
	$(".amount-input:eq(0) input").focus(function() {
		$(".ingredient-item .notice").fadeIn();
	})
	$(".amount-input:eq(0) input").blur(function() {
	$(".ingredient-item .notice").fadeOut("fast");
	})
}

function requiredField() {
	$(".required-notice").hide();
	$("input.required, textarea.required, select.required").blur(function() {
		if (this.value == this.defaultValue) {
			$(this).next().fadeIn();
		} else if ($(this).next().is(":visible")) {
			$(this).next().fadeOut("fast");
		}
	})
}

$(addIngredient);
$(deleteIngredient);
$(addStep);
$(deleteStep);
$(amountNotice);
$(requiredField);