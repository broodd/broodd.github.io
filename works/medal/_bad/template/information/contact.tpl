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


<section class="section section-contanct padding-50_80">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h4 class="font-22 margin-b_40"><?php echo $heading_title; ?></h4>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 text">
        <p><?php echo $comment; ?></p>
      </div>
      <div class="col-md-7 offset-md-1">
        <div class="row">
          <div class="col-sm-6 contact">
            <div class="contact__image">
              <img src="/catalog/view/theme/medal/img/ic_phone.svg" alt="">
            </div>
            <div class="contact__aside">
              <p><a href="#">050 342 54 86</a></p>
              <p><a href="#">098 23 32 309</a></p>
            </div>
          </div>
          <div class="col-sm-6 contact">
            <div class="contact__image">
              <img src="/catalog/view/theme/medal/img/ic_map.svg" alt="">
            </div>
            <div class="contact__aside">
              <p><?php echo htmlspecialchars_decode($address); ?></p>
            </div>
          </div>
          <div class="col-sm-6 contact">
            <div class="contact__image">
              <img src="/catalog/view/theme/medal/img/ic_mail.svg" alt="">
            </div>
            <div class="contact__aside">
              <p><a href="mailto:<?php echo $email2; ?>"><?php echo $email2; ?></a></p>
            </div>
          </div>
          <div class="col-sm-6 contact">
            <div class="contact__image">
              <img src="/catalog/view/theme/medal/img/ic_clock.svg" alt="">
            </div>
            <div class="contact__aside">
              <?php echo htmlspecialchars_decode($open); ?>
            </div>
          </div>
        </div>
        <div class="text-center margin-t_30">
          <span class="margin-r_5"><?php echo $text_location; ?>:</span>
          <a href="#"><i class="icon icon-facebook margin-0_5"></i></a>
          <a href="#"><i class="icon icon-twitter margin-0_5"></i></a>
        </div>
      </div>
    </div>
    <div class="row margin-t_50">
      <div class="col-md-4">
        <h4 class="font-22 text-center margin-b_40"><?php echo $text_contact; ?></h4>
        <form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" class="form form-border">
          <input type="text" placeholder="<?php echo $entry_name; ?>" name="name" value="<?php echo $name; ?>" id="input-name">
          <input type="text" placeholder="<?php echo $entry_email; ?>" name="email" value="<?php echo $email; ?>" id="input-email">
          <input type="text" placeholder="Телефон">
          <textarea name="enquiry" cols="30" rows="10" placeholder="<?php echo $entry_enquiry; ?>" id="input-enquiry"><?php echo $enquiry; ?></textarea>
          <input type="submit" value="<?php echo $button_submit; ?>">
        </form>
        <?php if ($error_name) { ?>
        <div class="text-danger"><?php echo $error_name; ?></div>
        <?php } ?>
        <?php if ($error_email) { ?>
        <div class="text-danger"><?php echo $error_email; ?></div>
        <?php } ?>
        <?php if ($error_enquiry) { ?>
        <div class="text-danger"><?php echo $error_enquiry; ?></div>
        <?php } ?>
      </div>
      <div class="col-md-7 offset-md-1 map-wrap">
        <div id="map" class="map"></div>
      </div>
    </div>
  </div>
</section>

<?php echo $content_bottom; ?>


<script>
    function initMap() {
        var myLatLng = {<?php echo $geocode; ?>};
        // 50.4280074,30.5565428,16z

        var image = '/catalog/view/theme/medal/img/map.svg';
        var map = new google.maps.Map(document.getElementById('map'), {
            center: myLatLng,
            zoom: 14.8,
            disableDefaultUI: true
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: "Cidade do Porto",
            icon: image
        });

        // Create a marker and set its position.
        // var marker = new google.maps.Marker({
        //   map: map,
        //   position: myLatLng,
        //   title: 'Hello World!'
        // });
    }
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1GXBTskGoO4JILEDZNZuhRK4P2D8-eho&callback=initMap"
        async defer></script>
<style>
  .section-catalog{
    padding-top: 80px !important;
  }
</style>
<?php echo $footer; ?>
