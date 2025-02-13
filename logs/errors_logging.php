<?php
require __DIR__ . '/../vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Level;
use Monolog\ErrorHandler;

$logger = new Logger('gamecurate');

$logger->pushHandler(new StreamHandler(__DIR__ . '/errors.log', Level::Debug));

// Use monolog built in error handler 
ErrorHandler::register($logger);
