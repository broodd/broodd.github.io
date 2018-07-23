<section class="section section-cart">
  <div class="container">
    <div class="row">
      <?php $i=1; foreach (array_chunk($banners, 2) as $banner) { ?>
      <div class="col-sm-6 cart-wrap <?php echo ($i%2==0) ? 'cart-right' : 'cart-left'; ?>">
        <?php foreach($banner as $key => $bann) { ?>
        <?php if($i == 1 && $key == 0){
          $cartClass = 'bg bg-purple';
        } elseif($i == 2 && $key == 1){
          $cartClass = 'bg bg-lime';
        } else {
          $cartClass = '';
        } ?>
        <div class="cart <?php echo $cartClass; ?>">
          <img src="<?php echo $bann['orig']; ?>" alt="">
          <div class="cart__text">
            <h3 class="font-18 letter"><a href="<?php echo $bann['link']; ?>"><?php echo $bann['title']; ?></a></h3>
            <p><?php echo $bann['effect']; ?></p>
            <a href="<?php echo $bann['link']; ?>" class="btn btn-white">К покупкам</a>
          </div>
        </div>
        <?php } ?>
      </div>
      <?php $i++; } ?>
    </div>
  </div>
</section>
