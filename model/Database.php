<?php

class Database {
	var $_instance;

	function __construct() { }

	function getInstance() {
		if(!$this->instance) {
			$this->$_instance = $this->connect();
		}
		return $this->$_instance;
	}

	private function connect() {
	}
} 