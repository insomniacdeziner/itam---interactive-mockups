 // FILE MANAGER
// ============================================================

$(document).ready(function(){

	// show, hide popup when caret icon is clicked
		$('.popup').hide();  
		$('.caret').hover(function(){
		  	$('.popup').toggle();
		  	$('.editBtn').toggle();
		});
		
	// show hide popup when table row on hover
	
	 	$('.table-row-popup').hide();
	 	$('.table-row').hover(function(){
		 	$('.table-row-popup').toggle();
	 	});
		
		
	// when the checkbox is clicked show ui controls
	$('.uicontorls').hide();
	
	$('input:checkbox').change(function(){
		if ($(this).is(':checked')) {
			$('.uicontorls').show();
		} else {
			$('.uicontorls').hide();
		}
	});	
});


 // Instalments
// ============================================================

// show hide table when caret is clicked
// toggle caret up/down
	
$(document).ready(function(){
	
	// hide elements until they are needed
	
	$('.table-expanded').hide();
	$('.table-expanded').hide();
	$('#hidden-table-row').hide();
	$('.fake-row').hide();
	$('#table-inputs').hide();
	
	// toggle up/down the caret when clicked
	$('#hidden-table-row-edit').click(function(){
		$('#hidden-table-row').toggle();
		$(this).find('i').toggleClass('fa fa-caret-down fa fa-caret-up');
	});

	// when the save button is clicked toggle the expanded row 
	$('#table-results').click(function(){
		$('#table-inputs').toggle();
		$('#table-results').toggle();
		$('.table-toggle').toggle();
	});
	
	// when the save button is clicked toggle the inputs 
	$('#save-btn').click(function(){
		$('#table-inputs').hide();
		$('#table-results').toggle();
		$('.table-toggle').toggle();
	});
	
	// toggle icon when clicked
	$('#table-view-toggle').click(function(){
	  $(this).find('i').toggleClass('fa fa-expand fa fa-th-list');
	});

	// toggle icon when clicked
	$('#table-expanded-btn').click(function(){
		$('.table-expanded').toggle();
		$('.table-list').toggle();
		$(this).find('i').toggleClass('fa fa-expand fa fa-th-list');
	});
});
