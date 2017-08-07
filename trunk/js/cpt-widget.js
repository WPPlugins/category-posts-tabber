/*
Plugin Name: Category Posts Tabber
Plugin URI: http://mythemeshop.com/plugins/wp-tab-widget/
Description: WP Tab Widget is the AJAXified plugin which loads content by demand, and thus it makes the plugin incredibly lightweight.
Author: Phan Thanh Phú
Author URI: http://chuanluon.com/
*/

jQuery(document).ready(function() {
	jQuery('.cpt-tab-item').click(function() {
		var me = jQuery(this);
		var current_tab = 'cpt-current-item';
		var current_content = 'cpt-current-content';

		if (!me.hasClass(current_tab)) {	
			var id_part = me.attr('id').split('-');
			var id = id_part[id_part.length - 1];
			
			jQuery('#cpt-tab li').each(function() {
				var item = jQuery(this).find('a');
				if (item.hasClass(current_tab)) {
					item.removeClass(current_tab);
				}
			});
			me.addClass(current_tab);

			jQuery('#cpt-content-wrapper .cpt-tab-content').each( function() {
				var item = jQuery(this);
				if (item.hasClass(current_content)) {
					item.removeAttr('style');
					item.removeClass(current_content);
				}

				if (item.attr('id').indexOf(id) > -1) {
					item.fadeIn(300);
					item.addClass(current_content);
				}
			});
		}

		return false;
	});
});