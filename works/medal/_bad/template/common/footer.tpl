<footer class="footer bg-dark">
  <div class="container">
    <div class="row">
      <div class="footer__item order-xl-first col-xl-3 col-lg-3 col-md-4 col-sm-6">
        <div class="footer__title font-18 bold"><?php echo $text_contact; ?></div>
        <div class="footer__icon d-flex">
          <i class="icon icon-phone"></i>
          <div>
            <p><a href="tel:">050 342 54 86</a></p>
            <p><a href="tel:">098 23 32 309</a></p>
          </div>
        </div>
        <div class="footer__icon d-flex">
          <i class="icon icon-mail"></i>
          <div>
            <p><a href="mailto:info@gmail.com"><?php echo $email; ?></a></p>
          </div>
        </div>
        <div class="d-flex">
          <span class="margin-r_5"><?php echo $text_social; ?></span>
          <a href="#"><i class="icon icon-facebook margin-0_5"></i></a>
          <a href="#"><i class="icon icon-twitter margin-0_5"></i></a>
        </div>
      </div>
      <div class="footer__item col-xl-4 order-md-first col-lg-6 col-md-9 order-last col-12">
        <div class="footer__title font-18 bold">Каталог</div>
        <div class="row">
          <?php $i=0; foreach (array_chunk($categories, 5) as $category) { $i++; ?>
          <div class="col-12 col-sm">
            <?php foreach ($category as $cat) {  ?>
            <p><a href="<?php echo $cat['href']; ?>"><?php echo $cat['name']; ?></a></p>
            <?php } ?>
          </div>
          <?php if($i > 1) break; } ?>
        </div>
      </div>
      <div class="footer__item col-xl-2 order-md-first col-lg-6 col-md-3 order-last col-12">
        <div class="footer__title font-18 bold"><?php echo $text_information; ?></div>
        <p><a href="/index.php?route=information/creation"><?php echo $text_create; ?></a></p>
        <p><a href="/about_us"><?php echo $text_about; ?></a></p>
        <p><a href="/delivery"><?php echo $text_deliv; ?></a></p>
        <p><a href="/index.php?route=information/contact"><?php echo $text_contact; ?></a></p>
      </div>
      <div class="footer__item col-xl-3 col-lg-5 col-sm-6 offset-lg-0 offset-md-2">
        <div class="footer__title font-18 bold"><?php echo $text_newsletter; ?></div>
        <p><?php echo $text_subinfo; ?></p>
        <form action="" class="form form-footer">
          <input id="input-newsletter" type="text" placeholder="E-mail">
          <input id="subcribe" type="submit" class="submit" value="<?php echo $text_send; ?>">
          <div id="error-msg"></div>
        </form>
      </div>

      <a href="#top" class="scroll"></a>
    </div>
  </div>
</footer>

<div class="copyright bg-dark">
  <div class="container">
    <div class="row justify-content-between">
      <div class="col-auto">
        <small><?php echo $text_copy; ?></small>
      </div>
      <div class="col-auto">
        <small><?php echo $text_increate; ?></small>
      </div>
    </div>
  </div>
</div>

</body></html>