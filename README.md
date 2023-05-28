# Price Level Scanner

The Price Level Scanner is a web application that utilizes an OCR (Optical Character Recognition) API to scan screenshots of price levels from TradingView. The scanned price levels can then be copied and input into the [VPA (Volume Price Analysis) Indicator](https://github.com/adobrusky/trading-entry-indicator) for further analysis and trading purposes.

## Features

- Allows users to upload an image file containing price levels from TradingView.
- Utilizes an OCR API to extract the price levels from the uploaded image.
- Displays the scanned results in a text area for easy visibility.
- Provides a "Copy" button to conveniently copy the scan results to the clipboard.

## How to Use

1. Open the Price Level Scanner web application in your web browser.
2. Click on the "Upload Image" button to select an image file (screenshot) containing the price levels from TradingView.
3. Wait for the application to process the image and extract the text using the OCR API.
4. Once the scan is complete, the scanned results will be displayed in the "Scan Results" text area.
5. To copy the scan results, click on the "Copy" button next to the text area. The results will be copied to your clipboard, ready to be pasted into the VPA Indicator or any other desired location.

Note: It's important to ensure that the uploaded image contains clear and legible price levels for accurate scanning. Make sure it only includes price levels. Below is an example image. Notice the ticker symbol and candle countdown timer have been covered up with red paint so that those elements are not scanned.

![Example Price Levels](https://imgur.com/a/SPS54Ym)