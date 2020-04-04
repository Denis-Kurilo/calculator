var modelController = (function(){

	var Income = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	}

	var Expense = function(id, description, value){
		this.id = id;
		this.description = description;
		this.value = value;
	}

	function addItem(type, desc, val){
		var newItem, ID;

		//Генерируем ID 
		if(data.allItems[type].length > 0){
			var lastIndex = data.allItems[type].length -1
			ID = data.allItems[type][lastIndex].id + 1;
		}else{
			ID = 0;
		}

		// В зависимости от записи используем соответсвующий конструктор и создаем объект
		if(type === 'inc'){
			newItem = new Income(ID, desc, val);
		}else if(type === 'exp'){
			newItem = new Expense(ID, desc, val);
		}

		//Записываем "запись" / объект в нашу структуру данных
		data.allItems[type].push(newItem);

		//Возвращаем новый объект
		return newItem;
	}

	var data = {
		allItems: {
			inc: [],
			exp: []
		},
		totals: {
			inc: 0,
			exp: 0
		}
	}


	return{
		addItem: addItem,
		test: function(){
			console.log(data);
		}
	}



})();