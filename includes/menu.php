<?php

function wop_add_admin_page() {
    add_menu_page(
        __( 'Options Page', 'wop' ),
        __( 'Options Page', 'wop' ),
        'manage_options',
        'wop-admin-page',
        'wop_render_admin_page'
    );
}

function wop_render_admin_page() {
    echo '<div id="wop-admin-page"></div>';
}
add_action( 'admin_menu', 'wop_add_admin_page' );

function wop_enqueue_scripts() {
    $page = get_current_screen();
    if ( 'toplevel_page_wop-admin-page' !== $page->id ) {
        return;
    }
    $asset_file = include( PLUGIN_NAME_ABSPATH . 'build/admin.asset.php' );
    wp_enqueue_script(
        'wop-admin-page',
        PLUGIN_NAME_URL . 'build/admin.js',
        $asset_file['dependencies'],
        $asset_file['version'],
        true
    );
    wp_enqueue_style( 'wp-components' );
}
add_action( 'admin_enqueue_scripts', 'wop_enqueue_scripts' );

