<?php 

echo $header;
?>

<div class="container">
	<div class="row">
		<div class="col-12">
			<div class="bredcrumbs">
				<?php foreach ($breadcrumbs as $breadcrumb) { ?>
				<a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
				<span class="sep"> / </span>
				<?php } ?>
			</div>
		</div>
	</div>
</div>


<!-- <form action=""> -->
<section class="section section-order padding-50_80">
	<div class="container">
		<div class="row">
			<div class="col-12">
				<h4 class="font-22 text-center margin-b_40"><?php echo $heading_title; ?></h4>
			</div>
		</div>
		<div class="row checkout_form">
			<div class="col-sm-4 text-center">
				<h4 class="font text-center"><?php echo $text_your_details; ?></h4>
				<small><?php echo $text_i_am_returning_customer; ?></small>
				<a href="#" class="font-12 under margin-l_15" data-open="#sign-in"><?php echo $text_returning_customer; ?></a>
				<div class="form form-border margin-t_20">
					<div class="input__placeholder">
						<span><?php echo $entry_firstname; ?></span>
						<input type="text" name="firstname" value="<?php if (isset($address['firstname'])) echo $address['firstname']; elseif (isset($firstname)) echo $firstname; ?>" id="input-payment-firstname">
					</div>
					<div class="input__placeholder">
						<span><?php echo $entry_lastname; ?></span>
						<input type="text" name="lastname" value="<?php if (isset($lastname)) echo $lastname;?>" id="input-payment-lastname">
					</div>
					<div class="input__placeholder">
						<span><?php echo $entry_email; ?></span>
						<input type="text" name="email" value="<?php if (isset($email)) echo $email;?>" id="input-payment-email">
					</div>
					<div class="input__placeholder">
						<span><?php echo $entry_telephone; ?></span>
						<input type="text" name="telephone" value="<?php if (isset($telephone)) echo $telephone;?>" id="input-payment-telephone">
					</div>
				</div>
				<h4 class="font text-center margin-t_50"><?php echo $text_your_details; ?></h4>
				<div class="form form-border margin-t_20">
					<div class="input__placeholder active">
						<span><?php echo $entry_country; ?></span>
						<select name="country_id" id="input-payment-country">
							<option value=""><?php echo $text_select; ?></option>
							<?php foreach ($countries as $country) { ?>
							<?php if ($country['country_id'] == $country_id) { ?>
							<option value="<?php echo $country['country_id']; ?>" selected="selected"><?php echo $country['name']; ?></option>
							<?php } else { ?>
							<option value="<?php echo $country['country_id']; ?>"><?php echo $country['name']; ?></option>
							<?php } ?>
							<?php } ?>
						</select>
					</div>
					<div class="input__placeholder active">
						<span><?php echo $entry_zone; ?></span>
						<select name="zone_id" id="input-payment-zone">
						</select>
					</div>
					<div class="input__placeholder">
						<span><?php echo $entry_city; ?></span>
						<input type="text" name="city" value="<?php if (isset($city)) echo $city;?>" id="input-payment-city">
					</div>
					<div class="input__placeholder">
						<span><?php echo $entry_postcode; ?></span>
						<input type="text" name="postcode" value="<?php if (isset($postcode)) echo $postcode;?>" id="input-payment-postcode">
					</div>
					<div class="input__placeholder">
						<span><?php echo $entry_address_1; ?></span>
						<input type="text" name="address_1" value="<?php if (isset($address_1)) echo $address_1;?>" id="input-payment-address-1">
						<input type="text" name="address_2" value="<?php if (isset($address_2)) echo $address_2;?>" placeholder="<?php echo str_replace(':','',$entry_address_2); ?>" id="input-payment-address-2" class="d-none" />
						<input type="text" name="company" value="<?php if (isset($company)) echo $company;?>" placeholder="<?php echo str_replace(':','',$entry_company); ?>" id="input-payment-company" class="d-none" />
						<input type="checkbox" name="agree" value="1" checked="checked" class="d-none"/>
					</div>
				</div>
				<a href="#" class="font-12 under margin-t_20 d-block" data-open="#sign-up"><?php echo $text_register; ?></a>
				<h4 class="font text-center margin-t_50"><?php echo $text_comments; ?></h4>
				<div class="form form-border margin-t_20">
					<textarea name="comment" cols="30" rows="3" placeholder="<?php echo $text_comments; ?>"><?php echo $comment; ?></textarea>
				</div>
			</div>
			<div class="col-1 line-vertical d-none d-sm-block"></div>
			<div class="col-sm-7">
				<?php if ($shipping_methods) { ?>
				<h4 class="font margin-md-t_30"><?php echo $text_shipping_method; ?></h4>
				<?php foreach ($shipping_methods as $shipping_method) { ?>
				<div class="checkbox checkbox-margin margin-t_20 margin-b_40">
					<?php foreach ($shipping_method['quote'] as $quote) { ?>
					<?php if ($quote['code'] == $code || !$code) { ?>
					<?php $code = $quote['code']; ?>
					<input type="radio" name="shipping_method" value="<?php echo $quote['code']; ?>"  title="<?php echo $shipping_method['title']; ?>" checked="checked" />
					<?php } else { ?>
					<input type="radio" name="shipping_method" value="<?php echo $quote['code']; ?>"  title="<?php echo $shipping_method['title']; ?>" />
					<?php } ?>
					<?php } ?>
					<div class="checkbox__aside">
						<label><?php echo $shipping_method['title']; ?></label>
						<?php foreach ($shipping_method['quote'] as $quote) { ?>
						<p><?php echo $quote['title']; ?></p>
						<?php } ?>
					</div>
				</div>
				<?php } ?>
				<?php } ?>
				<?php if ($payment_methods) { ?>
				<h4 class="font"><?php echo $text_payment_method; ?></h4>
				<div class="margin-t_20"></div>
				<?php foreach ($payment_methods as $payment_method) { ?>
				<div class="checkbox checkbox-margin">
					<?php if ($payment_method['code'] == $code || !$code) { ?>
					<?php $code = $payment_method['code']; ?>
					<input type="radio" name="payment_method" value="<?php echo $payment_method['code']; ?>" title="<?php echo $payment_method['title']; ?>" checked="checked" />
					<?php } else { ?>
					<input type="radio" name="payment_method" value="<?php echo $payment_method['code']; ?>" title="<?php echo $payment_method['title']; ?>" />
					<?php } ?>
					<div class="checkbox__aside">
						<label><?php echo $payment_method['title']; ?></label>
					</div>
				</div>
				<?php } ?>
				<?php } ?>
			</div>
		</div>
	</div>
</section>


<section class="section section-bag padding-50_80">
	<form method="post" enctype="multipart/form-data">
		<div class="container container-small">
			<div class="row">
				<div class="col-12">
					<h4 class="font-22 text-center margin-b_40"><?php echo $heading_title; ?></h4>
				</div>
			</div>
			<div class="row border-bottom">
				<div class="col-11 offset-xl-1">
					<span class="font-18 letter bold color-black"><?php echo $text_modify; ?>: </span>
					<span class="color-blue bold"><?php echo count($products); ?></span>
					<input type="hidden" name="" value="2">
				</div>
			</div>
			<?php foreach ($products as $product) { ?>
			<div class="row align-items-center count__row border-bottom">
				<div class="col-4 col-lg-1 offset-xl-1 bag__image d-flex justify-content-center">
					<img src="<?php echo $product['thumb']; ?>" alt="">
				</div>
				<div class="col-8 col-lg-3 bag__title">
					<div class="font bold"><a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a></div>
				</div>
				<div class="col-6 col-sm-3 col-lg-2">
					<div class="font-22 bag__price text-center"><?php echo $product['price']; ?></div>
				</div>
				<div class="col-6 col-sm-4 col-lg-2">
					<div class="font"><?php echo $product['quantity']; ?> шт</div>
				</div>
				<div class="col-12 col-sm-3 col-lg-2">
					<div class="font-22 color-blue bag__price bag__price-sum  text-center-md" data-option="count-sum"><?php echo $product['total']; ?></div>
				</div>
			</div>
			<?php } ?>
			<?php foreach ($totals as $total) { ?>
			<div class="row justify-content-center justify-content-md-end align-items-center count__row margin-30_a">
				<div class="col-auto col-sm-2">
					<span><?php echo $total['title']; ?>:</span>
				</div>
				<div class="col-auto col-sm-2">
					<div class="font-22 color-blue bag__price bag__price-total"><?php echo $total['text']; ?></div>
				</div>
				<div class="d-none d-md-block col-sm-1 col-lg-2 col-xl-1"></div>
			</div>
			<?php } ?>
			<div class="row justify-content-center justify-content-md-end align-items-center margin-30_a">
				<div class="col-sm-4 col-md-auto">
					<a href="/" class="btn btn-white btn-border margin-t_20"><?php echo $text_checkout_option; ?></a>
				</div>
				<div class="col-sm-4 col-md-3">
					<!-- <input type="submit" class="btn btn-blue margin-t_20" value="Оформить заказ"> -->
					<a href="" id="button-register" class="btn btn-blue margin-t_20 w-100 text-center"><?php echo $heading_title; ?></a>
					<input type="button" value="Подтвердить заказ" id="button-confirm" class="d-none" data-loading-text="Загрузка..." />
				</div>
				<div class="d-none d-md-block col-sm-2 col-lg-3 col-xl-2"></div>
			</div>
		</div>
	</form>
</section>
<!-- </form> -->
<?php echo $content_bottom; ?>

<script type="text/javascript"><!--
var error = true;

// Login
$(document).delegate('#button-login', 'click', function() {
    $.ajax({
        url: 'index.php?route=checkout/checkout/login_validate',
        type: 'post',
        data: $('.login-form :input'),
        dataType: 'json',
        beforeSend: function() {
        	$('#button-login').button('loading');
		},  
        complete: function() {
            $('#button-login').button('reset');
        },              
        success: function(json) {
            $('.alert, .text-danger').remove();
            
            if (json['redirect']) {
                location = json['redirect'];
            } else if (json['error']) {
                $('.login-form .message').prepend('<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> ' + json['error']['warning'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
           }
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    }); 
});

// Register
$(document).delegate('#button-register', 'click', function(e)
{
	e.preventDefault();
	var data = $('.checkout_form input[type=\'text\'], .checkout_form input[type=\'date\'], .checkout_form input[type=\'datetime-local\'], .checkout_form input[type=\'time\'], .checkout_form input[type=\'password\'], .checkout_form input[type=\'hidden\'], .checkout_form input[type=\'checkbox\']:checked, .checkout_form input[type=\'radio\']:checked, .checkout_form textarea, .checkout_form select').serialize();
	data += '&_shipping_method='+ jQuery('.checkout_form input[name=\'shipping_method\']:checked').prop('title') + '&_payment_method=' + jQuery('.checkout_form input[name=\'payment_method\']:checked').prop('title');
	
    $.ajax({
        url: 'index.php?route=checkout/checkout/validate',
        type: 'post',
        data: data,
        dataType: 'json',
        beforeSend: function() {
			$('#button-register').button('loading');
		},  
        complete: function() {
            $('#button-register').button('reset');
        },          
        success: function(json) {
            $('.alert, .text-danger').remove();
                        
            if (json['redirect']) {
                location = json['redirect'];                
            } else if (json['error']) {
				error = true;
                if (json['error']['warning']) {
                    $('.error').prepend('<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> ' + json['error']['warning'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');
                }
                
		for (i in json['error']) {
                    $('[name="' + i + '"]').after('<div class="text-danger">' + json['error'][i] + '</div>');
		}
            } else 
	    {
			error = false;
			jQuery('[name=\'payment_method\']:checked').click();
			$('#button-confirm').trigger('click');
            }    
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    }); 
});
    $('#button-confirm').on('click', function() {
        $.ajax({
            type: 'get',
            url: 'index.php?route=payment/cod/confirm',
            cache: false,
            beforeSend: function() {
                $('#button-confirm').button('loading');
            },
            complete: function() {
                $('#button-confirm').button('reset');
            },
            success: function() {
                location = 'http://medal/index.php?route=checkout/success';
            }
        });
    });
$('select[name=\'country_id\']').on('change', function() {
	$.ajax({
        url: 'index.php?route=checkout/checkout/country&country_id=' + this.value,
        dataType: 'json',
        beforeSend: function() {
			$('select[name=\'country_id\']').after(' <i class="fa fa-spinner fa-spin"></i>');
        },
        complete: function() {
			$('.fa-spinner').remove();
        },          
        success: function(json) {
			if (json['postcode_required'] == '1') {
				$('input[name=\'postcode\']').parent().parent().addClass('required');
			} else {
				$('input[name=\'postcode\']').parent().parent().removeClass('required');
			}
			            
            html = '<option value=""><?php echo $text_select; ?></option>';
            
            if (json['zone'] && json['zone'] != '') {
                for (i = 0; i < json['zone'].length; i++) {
                    html += '<option value="' + json['zone'][i]['zone_id'] + '"';
                    
                    if (json['zone'][i]['zone_id'] == '<?php echo $zone_id; ?>') {
                        html += ' selected="selected"';
                    }
    
                    html += '>' + json['zone'][i]['name'] + '</option>';
                }
            } else {
                html += '<option value="0" selected="selected"><?php echo $text_none; ?></option>';
            }
            
            $('select[name=\'zone_id\']').html(html).val("");
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
});


$('select[name=\'shipping_country_id\']').on('change', function() {
	$.ajax({
        url: 'index.php?route=checkout/checkout/country&country_id=' + this.value,
        dataType: 'json',
        beforeSend: function() {
			$('select[name=\'country_id\']').after(' <i class="fa fa-spinner fa-spin"></i>');
        },
        complete: function() {
			$('.fa-spinner').remove();
        },          
        success: function(json) {
			if (json['postcode_required'] == '1') {
				$('input[name=\'postcode\']').parent().parent().addClass('required');
			} else {
				$('input[name=\'postcode\']').parent().parent().removeClass('required');
			}
			            
            html = '<option value=""><?php echo $text_select; ?></option>';
            
            if (json['zone'] && json['zone'] != '') {
                for (i = 0; i < json['zone'].length; i++) {
                    html += '<option value="' + json['zone'][i]['zone_id'] + '"';
                    
                    if (json['zone'][i]['zone_id'] == '<?php echo $zone_id; ?>') {
                        html += ' selected="selected"';
                    }
    
                    html += '>' + json['zone'][i]['name'] + '</option>';
                }
            } else {
                html += '<option value="0" selected="selected"><?php echo $text_none; ?></option>';
            }
            
            $('select[name=\'shipping_zone_id\']').html(html).val("");
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    });
});





$('select[name=\'country_id\'], select[name=\'zone_id\'], select[name=\'shipping_country_id\'], select[name=\'shipping_zone_id\'], input[type=\'radio\'][name=\'payment_address\'], input[type=\'radio\'][name=\'shipping_address\']').on('change', function() 
{
	if (this.name == 'contry_id') jQuery("select[name=\'zone_id\']").val("");
	if (this.name == 'shipping_country_id') jQuery("select[name=\'shipping_zone_id\']").val("");
	
    jQuery(".shipping-method").load('index.php?route=checkout/checkout/shipping_method', $('.checkout_form input[type=\'text\'], .checkout_form input[type=\'date\'], .checkout_form input[type=\'datetime-local\'], .checkout_form input[type=\'time\'], .checkout_form input[type=\'password\'], .checkout_form input[type=\'hidden\'], .checkout_form input[type=\'checkbox\']:checked, .checkout_form input[type=\'radio\']:checked,input[name=\'shipping_method\']:first, .checkout_form textarea, .checkout_form select'), function() 
    {
		if (jQuery("input[name=\'shipping_method\']:first").length) 
		{
			jQuery("input[name=\'shipping_method\']:first").attr('checked', 'checked').prop('checked', true).click();
		} else
		{
			jQuery("#cart_table").load('index.php?route=checkout/checkout/cart', $('.checkout_form input[type=\'text\'], .checkout_form input[type=\'date\'], .checkout_form input[type=\'datetime-local\'], .checkout_form input[type=\'time\'], .checkout_form input[type=\'password\'], .checkout_form input[type=\'hidden\'], .checkout_form input[type=\'checkbox\']:checked, .checkout_form input[type=\'radio\']:checked, .checkout_form textarea, .checkout_form select'));	
		}
    });

	jQuery(".payment-method").load('index.php?route=checkout/checkout/payment_method', $('.checkout_form input[type=\'text\'], .checkout_form input[type=\'date\'], .checkout_form input[type=\'datetime-local\'], .checkout_form input[type=\'time\'], .checkout_form input[type=\'password\'], .checkout_form input[type=\'hidden\'], .checkout_form input[type=\'checkbox\']:checked, .checkout_form input[type=\'radio\']:checked,input[name=\'shipping_method\']:first, .checkout_form textarea, .checkout_form select'), function() 
	{
		jQuery("[name=\'payment_method\']").removeAttr("checked").prop('checked', false);
	});
});    


$(document).delegate('input[name=\'shipping_method\']', 'click', function() 
{
    jQuery("#cart_table").load('index.php?route=checkout/checkout/cart', $('.checkout_form input[type=\'text\'], .checkout_form input[type=\'date\'], .checkout_form input[type=\'datetime-local\'], .checkout_form input[type=\'time\'], .checkout_form input[type=\'password\'], .checkout_form input[type=\'hidden\'], .checkout_form input[type=\'checkbox\']:checked, .checkout_form input[type=\'radio\']:checked, .checkout_form textarea, .checkout_form select'));
});  

$('body').delegate('[name=\'payment_method\']','click', function() 
{

	var data = $('.checkout_form input[type=\'text\'], .checkout_form input[type=\'date\'], .checkout_form input[type=\'datetime-local\'], .checkout_form input[type=\'time\'], .checkout_form input[type=\'password\'], .checkout_form input[type=\'hidden\'], .checkout_form input[type=\'checkbox\']:checked, .checkout_form input[type=\'radio\']:checked, .checkout_form textarea, .checkout_form select').serialize();
	data += '&_shipping_method='+ jQuery('.checkout_form input[name=\'shipping_method\']:checked').prop('title') + '&_payment_method=' + jQuery('.checkout_form input[name=\'payment_method\']:checked').prop('title');

	if (!error)
    $.ajax({
        url: 'index.php?route=checkout/checkout/confirm',
        type: 'post',
        data: data,
        success: function(html) 
        {
			jQuery(".payment").html(html);
			
			jQuery("#button-confirm").click();
			
        },
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
    }); 
});

$('select[name=\'country_id\']').trigger('change');
jQuery(document).ready(function()
{
	jQuery('input:radio[name=\'payment_method\']:first').attr('checked', true).prop('checked', true);
	<?php /*if ($opencart_version < 2000) {?>
	$('.colorbox').colorbox({
		width: 640,
		height: 480
	});
	<?php }*/?>
});
//--></script> 

<?php echo $footer;?>
