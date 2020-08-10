
<div class="side-by-side <?php the_sub_field( 'orientation' ); ?>">
    <div class="container">
            
        <?php $image = get_sub_field( 'image' ); ?>
        <?php if ( $image ) { ?>
            <div class="image">
                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
            </div>
        <?php } ?>

        <div class="text">
            <?php if(get_sub_field( 'headline' )): ?>
                <h2 class="section-title"><?php the_sub_field( 'headline' ); ?></h2>
            <?php endif; ?>
            <?php the_sub_field( 'content' ); ?>
            <?php $button = get_sub_field( 'button' ); ?>
            <?php if ( $button ) { ?>
                <p><a class="button" href="<?php echo $button['url']; ?>" target="<?php echo $button['target']; ?>"><?php echo $button['title']; ?></a></p>
            <?php } ?>
        </div>
        
    </div>
</div>