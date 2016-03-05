(function($){
 $.fn.extend({
   waterfallflow: function(options){
	 var defaults = {
		col: 3,
		target: 'div'
     },
     options = $.extend(defaults, options);
	 return this.each(function (){
	   var $this = $(this),
		   $items = $this.children(options.target),
		   count = $items.length,
		   count_row = Math.ceil(count/options.col),
		   i = j = 0; /*i: num of row, j: num of col*/
		   $items.each(function(index){
			var $this = $(this);
			if(j == options.col){
			 i++;
			 j %= options.col;
			}
			$this.css({top: '0px', left: '0px'});
			var top_index = (i == 0 ? 0 : i - 1) * options.col + j,
				$top_item = $items.eq(top_index),
				pre_index = i * options.col + (j == 0 ? 0 : j - 1),
				$pre_item = $items.eq(pre_index),
				top = $top_item.position().top+( i==0 ? 0 : 1 ) * $top_item.innerHeight()+'px',
				left = $pre_item.position().left+( j==0 ? 0 : 1 )* $pre_item.innerWidth()+'px';	 
			$this.css({top: top, left: left});
			j++;
		 });	
	 });	 
   },
 })	
})(jQuery);
