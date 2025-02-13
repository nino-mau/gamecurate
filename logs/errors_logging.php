<?php
require __DIR__ . '/../vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

$logger = new Logger('gamecurate');

$logger->pushHandler(new StreamHandler(__DIR__ . '/errors.log', Logger::WARNING));

// Custom error handler to log PHP errors
set_error_handler(function ($severity, $message, $file, $line) use ($logger) {
    $logger->error("Error [$severity]: $message in $file on line $line");
});

// Custom exception handler to log uncaught exceptions
set_exception_handler(function ($exception) use ($logger) {
    $logger->critical("Uncaught Exception: " . $exception->getMessage(), ['exception' => $exception]);
});
