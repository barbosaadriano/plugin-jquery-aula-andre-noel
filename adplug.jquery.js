(function ($){
	$.fn.greenify = function() {
		this.css("color","green");
		return this;
	};
	$.fn.abimage = function(){
		$(this).each(function(){
			$(this).parent().append($('<figcaption></figcaption>').text($(this).attr('alt')));
			$(this).css('width','200px');
		});
		return this;
	};
	$.fn.hover = function(){
	};
	$.fn.trocatroca = function() {
		var texto = this.text();
		texto = texto.replace(/e|i|o|u|a/gi,function fx(x){
			switch(x) {
				case 'e':
					return '<span class="tte h" alt="e">enter</span>';
				case 'i':
					return '<span class="tti h" alt="i">inis</span>';
				case 'o':
					return '<span class="tto h" alt="o">omber</span>';
				case 'u':
					return '<span class="ttu h" alt="u">ufter</span>';				
				case 'a':
					return '<span class="tta h" alt="a">ais</span>';
			}
		});
		this.html(texto);
		return this;
	};
}(jQuery));

