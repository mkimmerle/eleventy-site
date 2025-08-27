$(document).ready(function(){
// ====================================================== //

var jVal = {
	
	'fullName' : function() {
	
		$('body').append('<div id="fullNameInfo" class="info"></div>');
		
		var fullNameInfo = $('#fullNameInfo');
		var ele = $('#name');
		var pos = ele.offset();
		
		fullNameInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		if(ele.val().length <= 1) {
			jVal.errors = true;
				fullNameInfo.removeClass('correct').addClass('error').html('Please enter your name').show();
				ele.removeClass('normal').addClass('wrong');				
		} else {
				fullNameInfo.removeClass('error').addClass('correct').html('&nbsp;').show();
				ele.removeClass('wrong').addClass('normal');
		}
	},
	
	'email' : function() {
	
		$('body').append('<div id="emailInfo" class="info"></div>');
	
		var emailInfo = $('#emailInfo');
		var ele = $('#email');
		var pos = ele.offset();
		
		emailInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		var patt = /^.+@.+[.].{2,}$/i;
		
		if(!patt.test(ele.val())) {
			jVal.errors = true;
				emailInfo.removeClass('correct').addClass('error').html('Please enter a valid e-mail address').show();
				ele.removeClass('normal').addClass('wrong');					
		} else {
				emailInfo.removeClass('error').addClass('correct').html('&nbsp;').show();
				ele.removeClass('wrong').addClass('normal');
		}
	},
	
	'phone' : function() {
	
		$('body').append('<div id="phoneInfo" class="info"></div>');
		
		var phoneInfo = $('#phoneInfo');
		var ele = $('#phone');
		var pos = ele.offset();
		
		phoneInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		if(ele.val().length <= 1) {
			jVal.errors = true;
				phoneInfo.removeClass('correct').addClass('error').html('Please enter your telephone number').show();
				ele.removeClass('normal').addClass('wrong');				
		} else {
				phoneInfo.removeClass('error').addClass('correct').html('&nbsp;').show();
				ele.removeClass('wrong').addClass('normal');
		}
	},
	
	'comments' : function() {
	
		$('body').append('<div id="commentsInfo" class="info"></div>');
		
		var commentsInfo = $('#commentsInfo');
		var ele = $('#comments');
		var pos = ele.offset();
		
		commentsInfo.css({
			top: pos.top-3,
			left: pos.left+ele.width()+15
		});
		
		if(ele.val().length <= 1) {
			jVal.errors = true;
				commentsInfo.removeClass('correct').addClass('error').html('Please provide questions or comments').show();
				ele.removeClass('normal').addClass('wrong');				
		} else {
				commentsInfo.removeClass('error').addClass('correct').html('&nbsp;').show();
				ele.removeClass('wrong').addClass('normal');
		}
	},
	
	'sendIt' : function (){
		if(!jVal.errors) {
			$('#jform').submit();
		}
	}
};

// ====================================================== //

$('#send').click(function (){
	var obj = $.browser.webkit ? $('body') : $('html');
	obj.animate({ scrollTop: $('#jform').offset().top }, 350, function (){
		jVal.errors = false;
		jVal.fullName();
		jVal.email();
		jVal.phone();
		jVal.comments();
		jVal.sendIt();
	});
	return false;
});

$('#name').blur(jVal.fullName);
$('#email').blur(jVal.email);
$('#phone').blur(jVal.phone);
$('#comments').blur(jVal.comments);

// ====================================================== //
});