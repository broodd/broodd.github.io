<!DOCTYPE html>
<!--[if IE]><![endif]-->
<!--[if IE 8 ]><html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie8"><![endif]-->
<!--[if IE 9 ]><html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>" class="ie9"><![endif]-->
<!--[if (gt IE 9)|!(IE)]><!-->
<html dir="<?php echo $direction; ?>" lang="<?php echo $lang; ?>">
<!--<![endif]-->
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?php echo $title; ?></title>
<base href="<?php echo $base; ?>" />
<?php if ($description) { ?>
<meta name="description" content="<?php echo $description; ?>" />
<?php } ?>
<?php if ($keywords) { ?>
<meta name="keywords" content= "<?php echo $keywords; ?>" />
<?php } ?>
<link href="catalog/view/theme/medal/libs/bootstrap-grid.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">
<link href="catalog/view/theme/medal/libs/fontello.css" rel="stylesheet">
<link href="catalog/view/theme/medal/libs/slick.css" rel="stylesheet">
<link href="catalog/view/theme/medal/css/style.css" rel="stylesheet">
<link href="catalog/view/theme/medal/css/media.css" rel="stylesheet">

<script src="catalog/view/theme/medal/libs/jquery-2.1.3.min.js" type="text/javascript"></script>
<script src="catalog/view/javascript/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script src="catalog/view/theme/medal/libs/slick.min.js" type="text/javascript"></script>
<script src="catalog/view/theme/medal/js/script.js" type="text/javascript"></script>
<?php foreach ($styles as $style) { ?>
<link href="<?php echo $style['href']; ?>" type="text/css" rel="<?php echo $style['rel']; ?>" media="<?php echo $style['media']; ?>" />
<?php } ?>
<script src="catalog/view/javascript/common.js" type="text/javascript"></script>
<?php foreach ($links as $link) { ?>
<link href="<?php echo $link['href']; ?>" rel="<?php echo $link['rel']; ?>" />
<?php } ?>
<?php foreach ($scripts as $script) { ?>
<script src="<?php echo $script; ?>" type="text/javascript"></script>
<?php } ?>
<?php foreach ($analytics as $analytic) { ?>
<?php echo $analytic; ?>
<?php } ?>
</head>
<body class="<?php echo $class; ?>">
<div class="window d-none"></div>

<?php echo $quicksignup; ?>

<div class="header-top bg-dark" id="top">
    <div class="container">
        <div class="row justify-content-between">
            <div class="col-12 col-sm-auto left">
                <ul class="ul d-flex justify-content-between w-100p">
                    <li><a href="/about_us"><?php echo $text_about; ?></a></li>
                    <li><a href="/delivery"><?php echo $text_deliv; ?></a></li>
                    <li><a href="/index.php?route=information/contact"><?php echo $text_cont; ?></a></li>
                </ul>
            </div>
            <div class="col-12 col-sm-auto right d-flex justify-content-between">
                <div class="tel">
                    <i class="icon icon-phone margin-r_5"></i>
                    <a href="tel:<?php echo $telephone; ?>"><?php echo $telephone; ?></a>
                </div>
                <div class="select">
                    <?php echo $language; ?>
                </div>
            </div>
        </div>
    </div>
</div>



<div class="navbar color-black">
    <div class="container">
        <div class="row justify-content-sm-between align-items-center">
            <div class="col-auto d-block d-lg-none">
                <div id="sandwich">
                    <div class="sw-topper"></div>
                    <div class="sw-bottom"></div>
                    <div class="sw-footer"></div>
                </div>
            </div>
            <div class="col-auto brand-wrap">
                <h1 class="brand"><a href="/">Медаль ТОП</a></h1>
            </div>
            <div class="col-12 col-xl-auto menu-wrap order-last order-xl-0 order-spec">
                <nav class="nav nav-main d-none d-lg-block">
                    <ul class="ul menu d-flex flex-column flex-lg-row">
                        <li><a href="/index.php?route=information/creation"><?php echo $text_create; ?></a></li>
                        <?php $i=0; foreach ($categories as $category) { $i++; ?>
                        <li>
                            <a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
                        </li>
                        <?php if($i > 5) break; } ?>
                        <li class="has-submenu open-nav">
                            <a href="catalog_subcat.html"><?php echo $text_more; ?></a>
                            <ul class="ul submenu">
                                <?php foreach ($categories as $category) { ?>
                                <?php if ($category['children']) { ?>
                                <li class="has-submenu">
                                    <a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a>
                                    <ul class="ul submenu">
                                        <?php foreach ($category['children'] as $child) { ?>
                                        <li><a href="<?php echo $child['href']; ?>"><?php echo $child['name']; ?></a></li>
                                        <?php } ?>
                                    </ul>
                                </li>
                                <?php } else { ?>
                                <li><a href="<?php echo $category['href']; ?>"><?php echo $category['name']; ?></a></li>
                                <?php } ?>
                                <?php } ?>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-auto icon-wrap">
                <a href="/index.php?route=product/search" class="ic">
                    <img src="/catalog/view/theme/medal/img/icon_search.svg" alt="">
                </a>
                <?php if ($logged) { ?>
                <a href="/index.php?route=account/account" class="ic">
                    <img src="/catalog/view/theme/medal/img/icon_people.svg" alt="">
                </a>
                <?php } else { ?>
                <a href="#" data-open="#sign-in" class="ic">
                    <img src="/catalog/view/theme/medal/img/icon_people.svg" alt="">
                </a>
                <?php } ?>
                <a href="/index.php?route=account/wishlist" class="ic">
                    <img src="/catalog/view/theme/medal/img/icon_star.svg" alt="">
                    <span class="notify wish_count"><?php echo $text_wishlist; ?></span>
                </a>
                <a href="/index.php?route=checkout/cart" class="ic">
                    <img src="/catalog/view/theme/medal/img/icon_bag.svg" alt="">
                    <span class="notify cart_count"><?php echo $cart_count; ?></span>
                </a>
            </div>
            <nav class="col-12 nav nav-bottom d-none">
                <div class="container">
                    <div class="row">
                        <?php foreach (array_chunk($categories, 4) as $category) { ?>
                        <div class="col-lg-4 menu-wrap">
                            <ul class="ul menu">
                                <?php foreach ($category as $cat) { ?>
                                <li data-hover="#cat<?php echo $cat['id']; ?>"><a href="<?php echo $cat['href']; ?>"><?php echo $cat['name']; ?></a></li>
                                <?php } ?>
                            </ul>

                            <!-- *******************************************
                                sorry but maket and menu so so so bad for OpenCart, Wordpress, I don`t know how do this another
                            *******************************************
                            -->
                            <?php foreach ($category as $cat) { ?>
                            <?php if ($cat['children']) { ?>
                            <ul class="ul submenu" id="cat<?php echo $cat['id']; ?>">
                                <?php foreach ($cat['children'] as $child) { ?>
                                <li><a href="<?php echo $child['href']; ?>"><?php echo $child['name']; ?></a></li>
                                <?php } ?>
                            </ul>
                            <?php } ?>
                            <?php } ?>
                        </div>
                        <?php } ?>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</div>