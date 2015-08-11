/**
 * 
 */
angular.module('todoApp', []).controller('TodoListController', function() {
	var todoList = this;
	todoList.todos = [ {
		text : 'learn angular',
		done : true
	}, {
		text : 'build an angular app',
		done : false
	}, {
		text : 'something different',
		done : true
	} ];

	todoList.addTodo = function() {
		if (!todoList.todoText) {
			todoList.message = "Bitte Todo-Bezeichnung eingeben";
		} else {
			todoList.todos.push({
				text : todoList.todoText,
				done : false
			});
			todoList.todoText = '';
			// todoList.todoText = 'Noch etwas zu tun?';
			todoList.message = "neues Todo erzeugt";
		}
	};

	todoList.remaining = function() {
		var count = 0;
		angular.forEach(todoList.todos, function(todo) {
			count += todo.done ? 0 : 1;
		});
		return count;
	};

	todoList.archive = function() {
		var oldTodos = todoList.todos;
		todoList.todos = [ {
			text : 'erledigte Todo\'s archiviert',
			done : true
		} ];
		angular.forEach(oldTodos, function(todo) {
			if (!todo.done)
				todoList.todos.push(todo);
		});
	};

	todoList.message = "AngularJS controller is all set";
});
