<section class="section section-category padding-a_80">
  <div class="container">
    <div class="row">
      <div class="col">
        <h4 class="font-22 letter text-center margin-b_40"><?php echo $heading_title; ?></h4>
      </div>
    </div>
    <div class="row">
      <?php foreach ($categories as $category) { ?>
      <div class="col-lg-3 col-sm-6 col-12 margin-b_40">
        <a class="category_block <?php echo $category['color']; ?> d-flex" href="<?php echo $category['href']; ?>">
          <img src="/image/<?php echo $category['image']; ?>" alt="">
          <div class="category_block__text">
            <?php
            $search  = array('под', 'на', 'під');
            $replace = array('<br>под', '<br>на', '<br>під');
            ?>
            <h4 class="font-22 letter"><?php echo str_replace($search, $replace , $category['name']); ?></h4>
          </div>
        </a>
      </div>
      <?php } ?>
    </div>
  </div>
</section>