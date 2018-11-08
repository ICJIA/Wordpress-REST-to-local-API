# Wordpress REST to local API

> Experimental script to pull down and save all Wordpress content via the Wordpress REST API.

## About

This script uses a custom WP endpoint:

- [https://cjcc.icjia-api.cloud/wp-json/wp/v2/sitemeta](https://cjcc.icjia-api.cloud/wp-json/wp/v2/sitemeta)

Code for this endpoint (and others) is here:

- [https://github.com/ICJIA/cjcc-wordpress-client/blob/master/wordpress/icjia-functions.php](https://github.com/ICJIA/cjcc-wordpress-client/blob/master/wordpress/icjia-functions.php)

## Installation

- Clone this repo, then:

```bash
npm i install
```

## Usage

```bash
node api.js
```
