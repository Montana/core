<?php 

class Listing extends ListingModel {

	private $_connection;

	var $id;

	var $settings;

	function __construct($id, $connection) {
		parent::__construct($id, $connection);
	}

}