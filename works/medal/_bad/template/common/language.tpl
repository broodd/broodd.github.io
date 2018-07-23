<?php if (count($languages) > 1) { ?>
<form action="<?php echo $action; ?>" method="post" enctype="multipart/form-data" id="language">
  <select name="lang_choice" class="lang-choice">
    <?php foreach ($languages as $language) { ?>
    <?php if ($language['code'] == $code) { ?>
    <option selected="selected" value="<?php echo $language['code']; ?>"><?php echo strtoupper($language['code']); ?></option>
    <?php } else { ?>
    <option value="<?php echo $language['code']; ?>"><?php echo strtoupper($language['code']); ?></option>
    <?php } ?>
    <?php } ?>
  </select>
  <input type="hidden" name="code" value="" />
  <input type="hidden" name="redirect" value="<?php echo $redirect; ?>" />
</form>
<?php } ?>
