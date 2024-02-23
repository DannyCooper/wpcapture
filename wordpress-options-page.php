<?php
/**
 * Plugin Name: WordPress Options Page
 * Description: An example options page built with React.
 * Author: Daniel Post
 * Author URI: https://danielpost.com
 * License: GPL-3.0
 * Version: 1.0.0
 */

defined('ABSPATH') || exit;

require __DIR__ . '/vendor/autoload.php';

final class WP_React_Admin_Panel
{
	private static $instance;

	private $version = '1.0.0';

	private function __construct()
	{
		$this->define_constants();
		$this->includes();
	}

	private function includes()
	{
		if (is_admin()) {
			require_once(PLUGIN_NAME_ABSPATH . 'includes/menu.php');
		}
		require_once(PLUGIN_NAME_ABSPATH . 'includes/api.php');
		require_once(PLUGIN_NAME_ABSPATH . 'includes/class-fsd-data-encryption.php');
	}
	/**
	 * Define Plugin Constants.
	* @since 1.0
	*/
	private function define_constants()
	{
		$this->define('PLUGIN_NAME_DEV', false);
		$this->define('PLUGIN_NAME_REST_API_ROUTE', 'plugin-name/v1');
		$this->define('PLUGIN_NAME_URL', plugin_dir_url(__FILE__));
		$this->define('PLUGIN_NAME_ABSPATH', dirname(__FILE__) . '/');
		$this->define('PLUGIN_NAME_VERSION', $this->get_version());
	}

	/**
	 * Returns Plugin version for global
	* @since  1.0
	*/
	private function get_version()
	{
		return $this->version;
	}

	/**
	 * Define constant if not already set.
	*
	* @since  1.0
	* @param  string $name
	* @param  string|bool $value
	*/
	private function define($name, $value)
	{
		if (!defined($name)) {
			define($name, $value);
		}
	}

	public static function get_instance()
	{
		if (null === self::$instance) {
			self::$instance = new self();
		}
		return self::$instance;
	}
}

WP_React_Admin_Panel::get_instance();
