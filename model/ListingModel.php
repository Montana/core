<?php

class ListingModel extends Database {

	private $_connection;

	var $id;

	var $settings;

	function __construct($id) {
		$this->id = $id;
		$this->_connection = parent::getInstance();
		$this->settings = [
			1 = ['delivery-countdown' => ['state' => false]],
			2 = ['delivery-countdown' => ['state' => false]]
		]
	}

	function find($id) {
		$query = mysql_query(, $this->_connection);
		while($row = mysql_fetch_object($query)) {
			return transformer($row);
		}
		// exception?
		return false;
	}

	function transformer($data) {
		return [
			'title' => html_fix($data['title'])
		]
	}

	
	public function getRating() {}
	public function getResources() {}
	public function getProperties() {}
	public function getOptions() {}
	public function getComments() {}
	public function getQuestions() {}
	public function getFAQ() {}

	
	public function has($setting) { return $this->settings[$setting]->state; }
	public function is($setting) { return $this->settings[$setting]->state; }
	public function hasPoints() { return $this->settings->points->state; }
}