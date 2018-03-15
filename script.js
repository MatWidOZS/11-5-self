$(function() {

	function Button(text) {
		this.text = text || 'Default_';
	}

	Button.prototype = {
		create: function() {
			var self = this;
			this.$element = $('<button>');
			this.$element.text(this.text);

			this.$element.click(function() {
				alert(self.text);
			});

			this.$element.appendTo($('body')); //or $('body').append(this.$element);
		}
	}

	var btn1 = new Button('Hello!');

	btn1.create();

	var btn2 = new Button('Click me!');

	btn2.create();

	var btnDefault = new Button();

	btnDefault.create();
});