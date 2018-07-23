<div class="d-none toggle" id="sign-in">
	<div class="form-wrap border-radius shadow">
		<div class="form__image d-none d-md-block">
			<img src="/catalog/view/theme/medal/img/form_in.jpg" alt="">
		</div>
		<div class="form__aside">
			<div class="form__title d-flex justify-content-between align-items-center">
				<div class="font-18 letter bold"><?php echo $button_login; ?></div>
				<i class="icon icon-close"></i>
			</div>
			<div class="form__other">
				<div class="form">
					<div class="form-border">
						<div class="input__placeholder">
							<span><?php echo $entry_email; ?></span>
							<input type="text" name="email" value=""  id="input-email">
						</div>
						<div class="input__placeholder">
							<span><?php echo $entry_password; ?></span>
							<input type="text" name="password" value="" id="input-password">
						</div>
					</div>
					<div class="d-flex justify-content-between margin-t_20">
						<div>
							<input type="checkbox" id="check">
							<label for="check" class="font-12"><?php echo $text_agree; ?></label>
						</div>
						<a href="#" class="font-12 under"><?php echo $text_forgotten; ?></a>
					</div>
					<input type="submit" value="<?php echo $button_login; ?>" class="margin-t_30 loginaccount">
					<div class="d-flex justify-content-between margin-t_20">
						<a href="#" class="font-12"><?php echo $text_new_customer; ?></a>
						<a href="#" class="font-12 under hide-toggle" data-open="#sign-up"><?php echo $text_signin_register; ?></a>
					</div>
					<div class="for-errors"></div>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="d-none toggle" id="sign-up">
	<div class="form-wrap border-radius shadow">
		<div class="form__image d-none d-md-block">
			<img src="/catalog/view/theme/medal/img/form_up.jpg" alt="">
		</div>
		<div class="form__aside">
			<div class="form__title d-flex justify-content-between align-items-center">
				<div class="font-18 letter bold"><?php echo $text_returning; ?></div>
				<i class="icon icon-close"></i>
			</div>
			<div class="form__other">
				<div class="form">
					<div class="form-border">
						<div class="input__placeholder">
							<span><?php echo $entry_name; ?></span>
							<input type="text" name="name" value="" id="input-name">
						</div>
						<div class="input__placeholder">
							<span><?php echo $text_details; ?></span>
							<input type="text">
						</div>
						<div class="input__placeholder">
							<span><?php echo $entry_telephone; ?></span>
							<input type="text" name="telephone" value="" id="input-telephone">
						</div>
						<div class="input__placeholder">
							<span><?php echo $entry_email; ?></span>
							<input type="text" name="email" value="" id="input-email">
						</div>
						<div class="input__placeholder">
							<span><?php echo $entry_password; ?></span>
							<input type="text" name="password" value="" id="input-password">
						</div>
					</div>
					<!--<div class="d-flex justify-content-center margin-30_a margin-t_20">
						<a href="#"><i class="icon icon-facebook"></i></a>
						<a href="#"><i class="icon icon-google"></i></a>
					</div>-->
					<input type="checkbox" name="agree" value="1" class="d-none" checked/>
					<input type="submit" value="<?php echo $text_returning; ?>" class="margin_t_30 createaccount">
					<div class="d-flex justify-content-between margin-t_20">
						<a href="#" class="font-12"><?php echo $text_returning_customer; ?></a>
						<a href="#" class="font-12 under hide-toggle" data-open="#sign-in"><?php echo $button_login; ?></a>
					</div>
					<div class="for-errors"></div>
				</div>
			</div>
		</div>
	</div>
</div>
<style>
.quick_signup{
	cursor:pointer;
}
#modal-quicksignup .form-control{
	height:auto;
}</style>

<script type="text/javascript"><!--
$(document).delegate('.quick_signup', 'click', function(e) {
	$('#modal-quicksignup').modal('show');
});
//--></script>
<script type="text/javascript"><!--
$('#sign-up input').on('keydown', function(e) {
	if (e.keyCode == 13) {
		$('#sign-up .createaccount').trigger('click');
	}
});
$('#sign-up .createaccount').click(function() {
	$.ajax({
		url: 'index.php?route=common/quicksignup/register',
		type: 'post',
		data: $('#sign-up input[type=\'text\'], #sign-up input[type=\'password\'], #sign-up input[type=\'checkbox\']:checked'),
		dataType: 'json',
		beforeSend: function() {
			$('#sign-up .createaccount').button('loading');
			$('#sign-up .alert-danger').remove();
		},
		complete: function() {
			$('#sign-up .createaccount').button('reset');
		},
		success: function(json) {
			$('#sign-up .for-errors').removeClass('has-error');

			if(json['islogged']){
				 window.location.href="index.php?route=account/account";
			}
			if (json['error_name']) {
				$('#sign-up #input-name').parent().addClass('has-error');
				$('#sign-up #input-name').focus();
			}
			if (json['error_email']) {
				$('#sign-up #input-email').parent().addClass('has-error');
				$('#sign-up #input-email').focus();
			}
			if (json['error_telephone']) {
				$('#sign-up #input-telephone').parent().addClass('has-error');
				$('#sign-up #input-telephone').focus();
			}
			if (json['error_password']) {
				$('#sign-up #input-password').parent().addClass('has-error');
				$('#sign-up #input-password').focus();
			}
			if (json['error']) {
				$('#sign-up .for-errors').append('<div class="alert alert-danger" style="margin:5px;"><i class="fa fa-exclamation-circle"></i> ' + json['error'] + '</div>');
			}

			if (json['now_login']) {
				$('.quick-login').before('<li class="dropdown"><a href="<?php echo $account; ?>" title="<?php echo $text_account; ?>" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-user"></i> <span class="hidden-xs hidden-sm hidden-md"><?php echo $text_account; ?></span> <span class="caret"></span></a><ul class="dropdown-menu dropdown-menu-right"><li><a href="<?php echo $account; ?>"><?php echo $text_account; ?></a></li><li><a href="<?php echo $order; ?>"><?php echo $text_order; ?></a></li><li><a href="<?php echo $transaction; ?>"><?php echo $text_transaction; ?></a></li><li><a href="<?php echo $download; ?>"><?php echo $text_download; ?></a></li><li><a href="<?php echo $logout; ?>"><?php echo $text_logout; ?></a></li></ul></li>');

				$('.quick-login').remove();
			}
			if (json['success']) {
				$('#modal-quicksignup .main-heading').html(json['heading_title']);
				success = json['text_message'];
				success += '<div class="buttons"><div class="text-right"><a onclick="loacation();" class="btn btn-primary">'+ json['button_continue'] +'</a></div></div>';
				$('#modal-quicksignup .modal-body').html(success);
			}
		}
	});
});
//--></script>
<script type="text/javascript"><!--
$('#sign-in input').on('keydown', function(e) {
	if (e.keyCode == 13) {
		$('#sign-in .loginaccount').trigger('click');
	}
});
$('#sign-in .loginaccount').click(function() {
	$.ajax({
		url: 'index.php?route=common/quicksignup/login',
		type: 'post',
		data: $('#sign-in input[type=\'text\'], #sign-in input[type=\'password\']'),
		dataType: 'json',
		beforeSend: function() {
			$('#sign-in .loginaccount').button('loading');
			$('#sign-in .alert-danger').remove();
		},
		complete: function() {
			$('#sign-in .loginaccount').button('reset');
		},
		success: function(json) {
			$('#modal-quicksignup .form-group').removeClass('has-error');
			if(json['islogged']){
				 window.location.href="index.php?route=account/account";
			}

			if (json['error']) {
				$('#sign-in .for-errors').append('<div class="alert alert-danger" style="margin:5px;"><i class="fa fa-exclamation-circle"></i> ' + json['error'] + '</div>');
				$('#sign-in #input-email').parent().addClass('has-error');
				$('#sign-in #input-password').parent().addClass('has-error');
				$('#sign-in #input-email').focus();
			}
			if(json['success']){
				loacation();
				$('#modal-quicksignup').modal('hide');
			}

		}
	});
});
//--></script>
<script type="text/javascript"><!--
function loacation() {
	location.reload();
}
//--></script>