<section class="section section-catalog bg-grey padding-a_80" style="padding-bottom:1px;">
  <div class="container">
    <div class="row">
      <div class="col">
        <h4 class="font-22 letter text-center margin-b_40"><?php echo $heading_title; ?></h4>
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