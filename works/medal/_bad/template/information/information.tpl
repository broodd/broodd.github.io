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

<section class="section section-text padding-50_80">
  <div class="container container-small">
    <div class="row">
      <div class="col-12">
        <h4 class="font-22 letter text-center margin-b_40 bold"><?php echo $heading_title; ?></h4>
      </div>
    </div>
    <?php if($image) { ?>
    <div class="image-wrap">
      <img src="/image/<?php echo $image; ?>" class="w-100" alt="">
    </div>
    <?php } ?>
    <div class="row">
      <div class="col-12">
        <?php echo $description; ?>
      </div>
    </div>
    <?php if($id == '4') { ?>
    <div class="row justify-content-center justify-content-md-between align-items-center margin-t_50">
      <div class="col-sm-8 col-md-4">
        <p class="font-22 color-black text-center margin-b_40">Задайте нам вопрос</p>
        <form action="/index.php?route=information/contact" class="form form-border" method="post" enctype="multipart/form-data">
          <div class="input__placeholder">
            <span>Имя</span>
            <input name="name" type="text">
          </div>
          <div class="input__placeholder">
            <span>E-mail</span>
            <input name="email" type="text">
          </div>
          <div class="input__placeholder">
            <span>Телефон</span>
            <input type="text" placeholder="">
          </div>
          <div class="input__placeholder">
            <span>Сообщение</span>
            <textarea name="enquiry" rows="3" placeholder=""></textarea>
          </div>
          <input type="submit" value="Отправить">
        </form>
      </div>
      <div class="col-md-7 margin-md-t_30">
        <img src="/catalog/view/theme/medal/img/about_form.png" alt="">
      </div>
    </div>
    <?php } ?>
  </div>
</section>

<?php echo $content_bottom; ?>

<style>
  .section-catalog{
    padding-top:80px !important;
  }
</style>
<?php echo $footer; ?>