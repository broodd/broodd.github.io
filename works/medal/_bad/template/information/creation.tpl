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

<section class="section section-bag padding-50_80 creation">
  <form action="/index.php?route=information/creation" method="POST" enctype="multipart/form-data">
  <div class="container container">
    <div class="row">
      <div class="col-12">
        <h4 class="font-22 text-center margin-b_40 margin-t_50"><?php echo $heading_title; ?></h4>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-4">
        <div class="row const-title justify-content-between">
          <div class="col-auto d-flex">
            <p class="font bold"><?php echo $text_tier1; ?>: </p>
            <p class="margin-l_45 elname">Арена (синий мрамор)</p>
          </div>
          <div class="col-auto d-flex">
            <p class="font bold"><?php echo $text_height; ?>: </p>
            <p class="margin-l_45 elheight">110 см</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center const-row">
      <div class="col-lg-4 const-left">
        <button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;">Previous</button>
        <div class="slick-wrap slick__1-const-1 slick-arrow-md_small">

          <div class="slick__img"><img src="/catalog/view/theme/medal/img/const_for_1.png" alt=""></div>

        </div>
        <button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;">Next</button>
      </div>
      <div class="col-lg-8 const-right">
        <div class="slick-wrap slick__10-const-1 slick-const slick-arrow_prop slick-arrow-md_small">
          <div class="image">
            <label class="const__img"><input type="radio" data-price="100" data-height="50 см" data-name="Арена 1" data-num="1" value="detal1" name="arena"><img src="/catalog/view/theme/medal/img//const_for_1.png" alt=""></label>
            <label class="const__img"><input type="radio" data-price="200" data-height="60 см" data-name="Арена 2" data-num="2" value="detal2" name="arena"><img src="/catalog/view/theme/medal/img/const_detal.png" alt=""></label>
          </div>
          <div class="image">
            <label class="const__img"><input type="radio" data-price="300" data-height="70 см" data-name="Арена 3" data-num="3" value="detal3" name="arena"><img src="/catalog/view/theme/medal/img/const_for_1.png" alt=""></label>
            <label class="const__img"><input type="radio" data-price="150" data-height="80 см" data-name="Арена 4" data-num="4" value="detal4" name="arena"><img src="/catalog/view/theme/medal/img/const_detal.png" alt=""></label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-8 offset-lg-4">
        <div class="row const-title justify-content-between">
          <div class="col-auto d-flex">
            <p class="font bold"><?php echo $text_tier2; ?>: </p>
            <p class="margin-l_45 elname">Арена (синий мрамор)</p>
          </div>
          <div class="col-auto d-flex">
            <p class="font bold"><?php echo $text_height; ?>: </p>
            <p class="margin-l_45 elheight">110 см</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center const-row">
      <div class="col-lg-4 const-left">
        <button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;">Previous</button>
        <div class="slick-wrap slick__1-const-1 slick-arrow-md_small">

          <div class="slick__img"><img src="/catalog/view/theme/medal/img/const_for_2.png" alt=""></div>

        </div>
        <button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;">Next</button>
      </div>
      <div class="col-lg-8 const-right">
        <div class="slick-wrap slick__10-const-1 slick-const slick-arrow_prop slick-arrow-md_small">
          <div class="image">
            <label class="const__img"><input type="radio" data-price="600" data-height="50 см" data-name="Арена 1" data-num="1" value="detal1" name="arena2"><img src="/catalog/view/theme/medal/img/const_for_2.png" alt=""></label>
            <label class="const__img"><input type="radio" data-price="540" data-height="60 см" data-name="Арена 2" data-num="2" value="detal2" name="arena2"><img src="/catalog/view/theme/medal/img/const_detal.png" alt=""></label>
          </div>
          <div class="image">
            <label class="const__img"><input type="radio" data-price="1100" data-height="70 см" data-name="Арена 3" data-num="3" value="detal3" name="arena2"><img src="/catalog/view/theme/medal/img/const_for_2.png" alt=""></label>
            <label class="const__img"><input type="radio" data-price="800" data-height="80 см" data-name="Арена 4" data-num="4" value="detal4" name="arena2"><img src="/catalog/view/theme/medal/img/const_detal.png" alt=""></label>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-8 offset-lg-4">
        <div class="row const-title justify-content-between">
          <div class="col-auto d-flex">
            <p class="font bold"><?php echo $text_tier3; ?>: </p>
            <p class="margin-l_45 elname">Арена (синий мрамор)</p>
          </div>
          <div class="col-auto d-flex">
            <p class="font bold"><?php echo $text_height; ?>: </p>
            <p class="margin-l_45 elheight">110 см</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row align-items-center const-row">
      <div class="col-lg-4 const-left">
        <button class="slick-prev slick-arrow" aria-label="Previous" type="button" style="display: block;">Previous</button>
        <div class="slick-wrap slick__1-const-1 slick-arrow-md_small">

          <div class="slick__img"><img src="/catalog/view/theme/medal/img/const_for_3.png" alt=""></div>

        </div>
        <button class="slick-next slick-arrow" aria-label="Next" type="button" style="display: block;">Next</button>
      </div>
      <div class="col-lg-8 const-right">
        <div class="slick-wrap slick__10-const-1 slick-const slick-arrow_prop slick-arrow-md_small">
          <div class="image">
            <label class="const__img"><input type="radio" data-price="60" data-height="50 см" data-name="Арена 1" data-num="1" value="detal1" name="arena3"><img src="/catalog/view/theme/medal/img/const_for_3.png" alt=""></label>
            <label class="const__img"><input type="radio" data-price="150" data-height="60 см" data-name="Арена 2" data-num="2" value="detal2" name="arena3"><img src="/catalog/view/theme/medal/img/const_detal.png" alt=""></label>
          </div>
          <div class="image">
            <label class="const__img"><input type="radio" data-price="1500" data-height="70 см" data-name="Арена 3" data-num="3" value="detal3" name="arena3"><img src="/catalog/view/theme/medal/img/const_for_1.png" alt=""></label>
            <label class="const__img"><input type="radio" data-price="400" data-height="80 см" data-name="Арена 4" data-num="4" value="detal4" name="arena3"><img src="/catalog/view/theme/medal/img/const_for_3.png" alt=""></label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr>
  <div class="container">
    <div class="row margin-b_40 margin-t_50">
      <div class="col-sm-6 col-md-5 col-lg-4 col-xl-3 offset-md-0 offset-lg-1 offset-xl-2">
        <div class="margin-b_40">
          <span class="font bold const__desc"><?php echo $text_tprice; ?>:</span> <span class="font-22 color-blue"><span class="total-price">504</span> грн</span>
        </div>
        <div>
          <span class="font const__desc"><?php echo $text_theight; ?>:</span> <span class="font"><span class="total-height">65</span> см</span>
        </div>
      </div>
      <div class="col-sm-6 col-md-7 col-lg-5 col-xl-4 offset-lg-1 margin-sm-t_30">
        <textarea required name="comment" id="" rows="3" class="textarea bg-grey border-r_bottom" placeholder="<?php echo $text_comment; ?>"></textarea>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-auto col-lg-3 col-xl-2">
        <input type="hidden" name="tprice" class="tprice">
        <input type="hidden" name="theight" class="theight">
        <input class="btn btn-blue text-center" value="<?php echo $text_submit; ?>" type="submit">
        <!-- <a class="btn btn-blue w-100 text-center">Заказать</a> -->
      </div>
    </div>
  </div>
  </form>
</section>

<?php echo $content_bottom; ?>

<style>
  .section-catalog{
    padding-top:80px !important;
  }
</style>
<?php echo $footer; ?>