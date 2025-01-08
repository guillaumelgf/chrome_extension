# Chrome Extension: Bank Expenses Scraper

My bank does not have a public API available for me to retrieve my expenses regularly and do my own expenses dashboards...

I was not able to find a way to programmatically authenticate to my bank account then fetch the internal API and retrieve my data.

So the idea is to build a Chrome extension that will :
- Detect when I am on the expense page of my bank account
- Intercept the responses of the endpoints regarding my transactions
- Send the response to my endpoint so I can deal with the data my own way !

This way by browsing my expenses like I would normally on my Chrome browser I will also be able to retrieve the data for myself.

## How it works

### Technical workflow

1. When you navigate to the expenses page, the extension detects the page context.
2. It injects a custom JavaScript script that overrides the `XMLHttpRequest` functionality.
3. This script intercepts the response from the server, extracts expense data, and sends it to your specified endpoint using an `XMLHttpRequest` or `fetch` API.
4. The modified `XMLHttpRequest` continues to function normally, ensuring the banking website operates without issues.

### Customization

You can easily use this code by adapting it for your use case for either :
- injecting scripts into a webpage
- intercepting API calls made on a webpage

For cases where manual user authentication is mandatory and 

## Legal Disclaimer

This tool is intended for personal use only. By using this extension, you take full responsibility for ensuring compliance with all applicable laws and the terms of service of your bank. The author is not responsible for any misuse or legal issues arising from the use of this tool.

## License

This project is licensed under the [MIT License](LICENSE).

