//imports
const puppeteer       = require('puppeteer-extra')
const StealthPlugin   = require('puppeteer-extra-plugin-stealth')
const ua              = require('puppeteer-extra-plugin-anonymize-ua')
const pluginProxy     = require('puppeteer-extra-plugin-proxy')
const AdblockerPlugin = require('puppeteer-extra-plugin-adblocker')

//defines
puppeteer.use(StealthPlugin())
puppeteer.use(AdblockerPlugin())

//main function
