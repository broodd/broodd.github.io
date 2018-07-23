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
<div class="container">
<?php if ($attention) { ?>
<div class="alert alert-info"><i class="fa fa-info-circle"></i> <?php echo $attention; ?>
  <button type="button" class="close" data-dismiss="alert">&times;</button>
</div>
<?php } ?>
<?php if ($success) { ?>
<div class="alert alert-success"><i class="fa fa-check-circle"></i> <?php echo $success; ?>
  <button type="button" class="close" data-dismiss="alert">&times;</button>
</div>
<?php } ?>
<?php if ($error_warning) { ?>
<div class="alert alert-danger"><i class="fa fa-exclamation-circle"></i> <?php echo $error_warning; ?>
  <button type="button" class="close" data-dismiss="alert">&times;</button>
</div>
<?php } ?>
</div>
<section class="section section-bag padding-50_80">
  <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data">
    <div class="container container-small">
      <div class="row">
        <div class="col-12">
          <h4 class="font-22 text-center margin-b_40"><?php echo $heading_title; ?></h4>
        </div>
      </div>
      <div class="row border-bottom">
        <div class="col-11 offset-xl-1">
          <span class="font-18 letter bold color-black"><?php echo $text_items; ?>: </span>
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
          <div class="font bold"><a href="<?php echo $product['href']; ?>"><?php echo $product['name']; ?></a><?php if (!$product['stock']) { ?>
            <span class="text-danger">***</span>
            <?php } ?></div>
        </div>
        <div class="col-6 col-sm-3 col-lg-2">
          <div class="font-22 bag__price text-center"><?php echo $product['price']; ?></div>
        </div>
        <div class="col-6 col-sm-4 col-lg-2">
          <div class="count">
            <div class="count__minus">-</div>
            <input type="text" name="quantity[<?php echo $product['cart_id']; ?>]" value="<?php echo $product['quantity']; ?>" class="count__input">
            <div class="count__plus">+</div>
          </div>
        </div>
        <div class="col-12 col-sm-3 col-lg-2">
          <div class="font-22 color-blue bag__price bag__price-sum  text-center-md" data-option="count-sum"><?php echo $product['total']; ?></div>
        </div>
        <div class="col-12 col-sm-auto col-lg-1 text-center-md">
          <div class="count__close" onclick="cart.remove('<?php echo $product['cart_id']; ?>');">
            <i class="icon icon-close"></i>
          </div>
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
          <input type="submit" class="btn btn-white btn-border margin-t_20" value="<?php echo $button_update_cart; ?>">
        </div>
        <div class="col-sm-4 col-md-auto">
          <a href="<?php echo $continue; ?>" class="btn btn-white btn-border margin-t_20"><?php echo $button_shopping; ?></a>
        </div>
        <div class="col-sm-4 col-md-3">
          <!-- <input type="submit" class="btn btn-blue margin-t_20" value="Оформить заказ"> -->
          <a href="<?php echo $checkout; ?>" class="btn btn-blue margin-t_20 w-100 text-center"><?php echo $button_checkout; ?></a>
        </div>
        <div class="d-none d-md-block col-sm-2 col-lg-3 col-xl-2"></div>
      </div>
    </div>
  </form>
</section>

<?php echo $content_bottom; ?>
<?php echo $footer; ?>
