function init(){
	$("table#equipmentList .equipmentAdd").click(function(){
		getEquipmentAddForm.call(this);
	});
	
	$("table#customerNoteList form").submit(function(){
		saveCustomerNote.call(this);
		return false;
	});
}

function getEquipmentAddForm(){
	var _button=this;
	var equipmentListTable = $(_button).parent();
}

function saveCustomerNote(){
	var _form=$(this);
	
	$.post(this.baseURI+"/notes/?ajax", _form.serialize(), function(result){
		_form.parent()
	});
}

$(document).ready(init);