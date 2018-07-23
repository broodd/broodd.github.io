<?php echo $header; ?>
<div class="catalog-wrap">
  <div class="container-fluid">
    <div class="row">
      <?php if($products) { ?>
      <div class="col-md-3 sidebar color-black font-gothic">
        <?php echo $column_left; ?>
      </div>
      <div class="col-md-9 catalog">
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
        <?php if($banner) { ?>
        <div class="row">
          <div class="col-12 catalog__image">
            <img class="w-100" src="/image/<?php echo $banner; ?>" alt="">
            <h2 class="font-22 letter"><?php echo $heading_title; ?></h2>
          </div>
        </div>
        <?php } ?>
        <?php if($categories) { ?>
        <div class="row">
          <?php foreach ($categories as $category) { ?>
          <div class="product col-sm-6 col-lg-4">
            <a href="<?php echo $category['href']; ?>">
              <div class="product__image">
                <img src="<?php echo $category['logo']; ?>" alt="">
              </div>
            </a>
            <div class="prouct__text text-center">
              <p class="font"><a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a></p>
            </div>
          </div>
          <?php } ?>
        </div>
        <?php } else { ?>
        <div class="row justify-content-between align-items-center margin-b_40">
          <div class="col-auto">
            <div class="select select-none menu-arrow color-black">
              <select id="input-sort" class="select" onchange="location = this.value;">
                <?php foreach ($sorts as $sorts) { ?>
                <?php if ($sorts['value'] == $sort . '-' . $order) { ?>
                <option value="<?php echo $sorts['href']; ?>" selected="selected"><?php echo $sorts['text']; ?></option>
                <?php } else { ?>
                <option value="<?php echo $sorts['href']; ?>"><?php echo $sorts['text']; ?></option>
                <?php } ?>
                <?php } ?>
              </select>
            </div>
          </div>
        </div>
        <div class="row" id="content">
          <?php foreach ($products as $product) { ?>
          <div class="product col-sm-6 col-lg-4">
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
        <?php } ?>
      </div>
      <?php } else { ?>
      <div class="col-md-12 catalog">
        <div class="bredcrumbs">
          <?php foreach ($breadcrumbs as $breadcrumb) { ?>
          <a href="<?php echo $breadcrumb['href']; ?>"><?php echo $breadcrumb['text']; ?></a>
          <span class="sep"> / </span>
          <?php } ?>
        </div>
        <h2 class="empty-cat"><?php echo $text_empty; ?></h2>
      </div>
      <?php } ?>
    </div>
  </div>
</div>

<?php echo $content_bottom; ?>
<?php echo $footer; ?>
