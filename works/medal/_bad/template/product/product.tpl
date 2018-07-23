<?php echo $header; ?>
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

<section class="section section-product padding-50_80">
  <div class="container">
    <div class="row">
      <div class="col-12 col-sm-2 col-md-1">
        <?php if ($images) { ?>
        <div class="slick-wrap slick__vertical">
          <div class="slick__img">
            <img src="<?php echo $popup; ?>" alt="">
          </div>
          <?php foreach ($images as $image) { ?>
          <div class="slick__img">
            <img src="<?php echo $image['popup']; ?>" alt="">
          </div>
          <?php } ?>
        </div>
        <?php } ?>
      </div>
      <div class="col-12 col-sm-4 order-first order-sm-0">
        <div class="slick-wrap slick__for">
          <div class="slick__img">
            <img src="<?php echo $popup; ?>" alt="">
          </div>
          <?php foreach ($images as $image) { ?>
          <div class="slick__img">
            <img src="<?php echo $image['popup']; ?>" alt="">
          </div>
          <?php } ?>
        </div>
      </div>
      <div class="col-sm col-xl-4 margin-md-t_30" id="product">
        <div class="row">
          <div class="col-12">
            <h3 class="font-22"><?php echo $heading_title; ?></h3>
            <p class="font-12 color-green margin-t_20"><?php echo $stock; ?></p>
            <p class="font-12 color-black margin-b_40"><?php echo $text_model; ?> <?php echo $model; ?></p>
          </div>
        </div>
        <div class="row margin-b_40">
          <div class="col-auto">
            <?php if (!$special) { ?>
            <div class="font-22 color-blue"><?php echo $price; ?></div>
            <?php } else { ?>
            <span style="text-decoration: line-through;"><?php echo $price; ?></span>
            <div class="font-22 color-blue"><?php echo $special; ?></div>
            <?php } ?>
          </div>
          <div class="col-auto">
            <div class="count">
              <div class="count__minus">-</div>
              <input type="text" class="count__input" name="quantity" value="<?php echo $minimum; ?>" id="input-quantity">
              <div class="count__plus">+</div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <!-- <input type="submit" class="btn btn-blue" value="В корзину"> -->
            <a class="btn <?php echo ($logged) ? 'btn-blue' : 'btn-disable'; ?> w-100 text-center" href="#" id="button-cart"><?php echo $button_cart; ?></a>
            <input type="hidden" name="product_id" value="<?php echo $product_id; ?>" />
          </div>
          <?php if($logged){ ?>
          <div class="col-12 col-md-6 margin-md-t_30">
            <a name="favorite" class="sticker star margin-r_5" href="#" onclick="wishlist.add('<?php echo $product_id; ?>');" title="В закладки">
              <i class="icon icon-star"></i>
            </a>
            <a href="#" onclick="wishlist.add('<?php echo $product_id; ?>');" class="font-14 color-black"><?php echo $button_wishlist; ?></a>
          </div>
          <?php } else { ?>
          <div class="col-12 col-md-6 margin-md-t_30">
            <p class="font-14">Зарегистрируйтесь для оформления заказа</p>
          </div>
          <?php } ?>
        </div>
        <div class="row margin-t_50">
          <div class="col-12">
            <?php if ($options) { ?>
            <?php foreach ($options as $option) { ?>
            <?php if ($option['type'] == 'textarea') { ?>
            <p class="font"><?php echo $option['name']; ?></p>
            <textarea name="option[<?php echo $option['product_option_id']; ?>]" rows="3" placeholder="<?php echo $option['name']; ?>" id="input-option<?php echo $option['product_option_id']; ?>" class="textarea bg-grey border-r_bottom margin-t_20"><?php echo $option['value']; ?></textarea>
            <?php } ?>
            <?php } ?>
            <?php } ?>
          </div>
        </div>
      </div>
      <div class="col-xl-3 margin-md-t_30 border-xl-l">
        <p class="font bold">Характеристики:</p>
        <div class="text margin-t_30">
          <?php echo $description; ?>
        </div>
      </div>
    </div>
  </div>
</section>

<?php if ($products) { ?>
<section class="section section-catalog bg-grey padding-a_80">
  <div class="container">
    <div class="row">
      <div class="col">
        <h4 class="font-22 letter text-center margin-b_40">Вас может заинтересовать</h4>
      </div>
    </div>
    <div class="slick-wrap slick__4 margin-row margin-b_90">
      <?php foreach ($products as $product) { ?>
      <div class="product">
        <div class="product__image">
          <img src="<?php echo $product['thumb']; ?>" alt="">
          <div class="stickers">
            <div class="left">
              <?php if($product['upc']) { ?>
              <div class="sticker yellow"><span><?php echo $product['upc']; ?></span></div>
              <?php } ?>
              <?php if($product['ean']) { ?>
              <div class="sticker blue"><span><?php echo $product['ean']; ?></span></div>
              <?php } ?>
            </div>
            <div class="right">
              <a class="sticker star" href="#" onclick="wishlist.add('<?php echo $product['product_id']; ?>');" title="В закладки"><i class="icon icon-star"></i></a>
            </div>
          </div>
          <div class="code"><span><?php echo $text_model; ?> <?php echo $product['model']; ?></span></div>
        </div>
        <div class="prouct__text">
          <a href="<?php echo $product['href']; ?>"><p class="font"><?php echo $product['name']; ?></p></a>
        </div>
        <div class="product__price">
          <div class="price">
            <?php if (!$product['special']) { ?>
            <span><?php echo $product['price']; ?></span>
            <?php } else { ?>
            <del><?php echo $product['price']; ?></del>
            <span><?php echo $product['special']; ?></span>
            <?php } ?>
          </div>
          <a href="#" onclick="cart.add('<?php echo $product['product_id']; ?>');" class="btn btn-blue"><?php echo $button_cart; ?></a>
        </div>
      </div>
      <?php } ?>
    </div>
  </div>
</section>
<?php } ?>

<?php echo $content_bottom; ?>


<script type="text/javascript"><!--
$('select[name=\'recurring_id\'], input[name="quantity"]').change(function(){
	$.ajax({
		url: 'index.php?route=product/product/getRecurringDescription',
		type: 'post',
		data: $('input[name=\'product_id\'], input[name=\'quantity\'], select[name=\'recurring_id\']'),
		dataType: 'json',
		beforeSend: function() {
			$('#recurring-description').html('');
		},
		success: function(json) {
			$('.alert, .text-danger').remove();

			if (json['success']) {
				$('#recurring-description').html(json['success']);
			}
		}
	});
});
//--></script>
<script type="text/javascript"><!--
$('#button-cart').on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('btn-disable')){
        return false
    }
	$.ajax({
		url: 'index.php?route=checkout/cart/add',
		type: 'post',
		data: $('#product input[type=\'text\'], #product input[type=\'hidden\'], #product input[type=\'radio\']:checked, #product input[type=\'checkbox\']:checked, #product select, #product textarea'),
		dataType: 'json',
		beforeSend: function() {
			$('#button-cart').button('loading');
		},
		complete: function() {
			$('#button-cart').button('reset');
		},
		success: function(json) {
			$('.alert, .text-danger').remove();
			$('.form-group').removeClass('has-error');

			if (json['error']) {
				if (json['error']['option']) {
					for (i in json['error']['option']) {
						var element = $('#input-option' + i.replace('_', '-'));

						if (element.parent().hasClass('input-group')) {
							element.parent().after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
						} else {
							element.after('<div class="text-danger">' + json['error']['option'][i] + '</div>');
						}
					}
				}

				if (json['error']['recurring']) {
					$('select[name=\'recurring_id\']').after('<div class="text-danger">' + json['error']['recurring'] + '</div>');
				}

				// Highlight any found errors
				$('.text-danger').parent().addClass('has-error');
			}

			if (json['success']) {
				$('.breadcrumb').after('<div class="alert alert-success">' + json['success'] + '<button type="button" class="close" data-dismiss="alert">&times;</button></div>');

				$('#cart > button').html('<i class="fa fa-shopping-cart"></i> ' + json['total']);

				$('html, body').animate({ scrollTop: 0 }, 'slow');

				$('#cart > ul').load('index.php?route=common/cart/info ul li');
			}
		},
        error: function(xhr, ajaxOptions, thrownError) {
            alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
        }
	});
});
//--></script>
<script type="text/javascript"><!--
$('.date').datetimepicker({
	pickTime: false
});

$('.datetime').datetimepicker({
	pickDate: true,
	pickTime: true
});

$('.time').datetimepicker({
	pickDate: false
});

$('button[id^=\'button-upload\']').on('click', function() {
	var node = this;

	$('#form-upload').remove();

	$('body').prepend('<form enctype="multipart/form-data" id="form-upload" style="display: none;"><input type="file" name="file" /></form>');

	$('#form-upload input[name=\'file\']').trigger('click');

	if (typeof timer != 'undefined') {
    	clearInterval(timer);
	}

	timer = setInterval(function() {
		if ($('#form-upload input[name=\'file\']').val() != '') {
			clearInterval(timer);

			$.ajax({
				url: 'index.php?route=tool/upload',
				type: 'post',
				dataType: 'json',
				data: new FormData($('#form-upload')[0]),
				cache: false,
				contentType: false,
				processData: false,
				beforeSend: function() {
					$(node).button('loading');
				},
				complete: function() {
					$(node).button('reset');
				},
				success: function(json) {
					$('.text-danger').remove();

					if (json['error']) {
						$(node).parent().find('input').after('<div class="text-danger">' + json['error'] + '</div>');
					}

					if (json['success']) {
						alert(json['success']);

						$(node).parent().find('input').attr('value', json['code']);
					}
				},
				error: function(xhr, ajaxOptions, thrownError) {
					alert(thrownError + "\r\n" + xhr.statusText + "\r\n" + xhr.responseText);
				}
			});
		}
	}, 500);
});
//--></script>
<script type="text/javascript"><!--
$('#review').delegate('.pagination a', 'click', function(e) {
    e.preventDefault();

    $('#review').fadeOut('slow');

    $('#review').load(this.href);

    $('#review').fadeIn('slow');
});

$('#review').load('index.php?route=product/product/review&product_id=<?php echo $product_id; ?>');

$('#button-review').on('click', function() {
	$.ajax({
		url: 'index.php?route=product/product/write&product_id=<?php echo $product_id; ?>',
		type: 'post',
		dataType: 'json',
		data: $("#form-review").serialize(),
		beforeSend: function() {
			$('#button-review').button('loading');
		},
		complete: function() {
			$('#button-review').button('reset');
		},
		success: function(json) {
			$('.alert-success, .alert-danger').remove();

			if (json['error']) {
				$('#review').after('<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> ' + json['error'] + '</div>');
			}

			if (json['success']) {
				$('#review').after('<div class="alert alert-success"><i class="fa fa-check-circle"></i> ' + json['success'] + '</div>');

				$('input[name=\'name\']').val('');
				$('textarea[name=\'text\']').val('');
				$('input[name=\'rating\']:checked').prop('checked', false);
			}
		}
	});
});

$(document).ready(function() {
	$('.thumbnails').magnificPopup({
		type:'image',
		delegate: 'a',
		gallery: {
			enabled:true
		}
	});
});
//--></script>
<?php echo $footer; ?>
