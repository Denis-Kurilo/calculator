var controller = (function(budgetCtrl, uiCtrl){

	

	var setupEventListeners = function(){
		var DOM = uiCtrl.getDomStrings();

		document.querySelector(DOM.form).addEventListener('submit', ctrlAddItem);
	}

	//ф-я срабатывает при отправки формы
	function ctrlAddItem (event){
		event.preventDefault();
		console.log('FIRED');

		//Получить данные из формы 
		var input = uiCtrl.getInput();
		console.log(input);

		if(input.description != '' && !isNaN(input.value) && input.value > 0){
			//Добавить полученные данные в модель 
			var newItem = budgetCtrl.addItem(input.type, input.description, input.value);
			budgetCtrl.test();

			//Добавить запись в UI
			uiCtrl.renderListItem(newItem, input.type);
			uiCtrl.clearFields();
			generateTestData.init();

			//Посчитать бюджет

			//Отобразить бюджет в UI
		}


		
	}

	return{
		init: function(){
			console.log('App started!');
			setupEventListeners();
		}
	}



})(modelController, viewController);

controller.init();