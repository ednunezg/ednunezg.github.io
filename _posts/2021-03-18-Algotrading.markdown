---
layout: post
title: "Building a reliable and testable day trading bot on python"
date:   2021-03-18 12:58:00 +0529.4
categories: ["Tech"]
author: "Eduardo Nunez"
---

## About

Day trading involves a competition with a large crowd of investors to react to market conditions that you can predict and react with speed. In theory, trading in an automated fashion can allow you to generate profits with a speed and frequency that is impossible for a human to execute. Other added benefits include:

- You can detach yourself psychologically and emotionally from your trading decisions once you cement a trust in your strategy
- Your strategy is testable against historical price data. This also means you optimize algorithm parameter by permutating these on multiple backtests
- Low risk of manual error while placing orders

However, by doing this you are subject to the major risk of possible system failures. If you build this system, it is important that you have a fail safe methods to cover for losses caused by these failures. In this post, I will show you how I covered some of these cases.

A succesful strategy is one where you make judgements based on indicators you collect that can give you an edge on the market. In my experience, the process of selecting and tuning a succesful strategy is based more on how fast you can iterate and test different strategy parameters more than understanding the "why" of how your strategy might work. With no formal finance background, I managed to leverage my programming knowledge to create a system by which I can easily and quickly test my strategy on thousands of strategy permulations, and then decide if I should run my strategy that day based on my confidence level of historical results. In this post, I will walk through some of the decisions behind my trading strategy and the tech stack behind the bot+backtesting framework.

## My bot's strategy

My trading bot strategy falls into the category of low-frequency day trading with each trade consiting of a large quantity of stocks ($10k - $100k worth). The trades are low-frequency because the trades are contingent on a trendline being found on a candlestick chart once every few minutes. This is perhaps different from high-frequency day trading strategies where a trader might be sending hundreds or thousands of orders a day, and making profits on quick price movements.

For my strategy, I found it appropiate to use a STP and LMT OCO order type for placing orders. In an OCO order (one-cancels-the-other), your broker takes care of listening for an activation price by which you will enter a position. After this activation, the broker listens to two new price thresholds for which the position will close on a profit or loss.

![OCO order](/posts-photos/ALGOTRADING/oco.png){:class="img-responsive"}{: style="text-align: center;"}

This order type made it easy for me to build a backtesting framework, makes interpreting results straight forward, and removes the burden of having your software listen for the appropiate moment to close positions. If your software crashes and you have pending orders that have not closed the position, the OCO instructions implicit on the order puts the responsibility of closing positions on your broker.

I wouldn't reccomend this order type if you need to have control of better granularity (e.g. you want to exit your position 50% at some price point and 50% at another). This is also not recommended if your strategy is contingent on time if say, you want to force a position to close X minutes after you enter. in this case, entering and exiting positions with MARKET trigger orders would be more appropiate.


## Indicators leveraged for my bot's strategy

The bot has to go through the iterative process of

(1) Fetching price data and additional data useful for your indicators

(2) Calculating indicators

(3) Check if indicators results satisfy order placement criteria

(4) Place OCO order

(5) Idle wait for next time interval

My strategy relied on trendline detection as the key indicator for deciding whether to execute trades. This was achieved with the use of my python library <b>[pytrendline](https://github.com/ednunezg/pytrendline)</b> which you can use for detecting trendlines formed at the support or resistance level of candlesticks.

Another indicators I leveraged were news sentiments based on keywords matched against a stock's news feed. SMA curves, EMA curves, and number of price inflection points were also computed and analyzed against a set of criteria to decide if the trade is worth doing.
## What do you need to build reliable and back-testable trading bot?

A succesful testable bot should be one that can be made with an offline and online mode of operation. If these two modes can be provided as an input, you can leverage the offline mode for performing historical tests using a backtesting framework that wraps around the program, and the online mode for a production use case.

I designed my program with the following inputs:
  * List of symbols to trade with (my strategy at the moment does require I filter through stocks manually at the beginning of the day)
  * Online or offline mode
  * If offline mode provided, specify the date to simulate 

The online mode for my bot pulls realtime prices and places OCO orders via the Ameritrade API whereas the offline mode pulls historical prices and saves order placement information in a file.

![Bot operation](/posts-photos/ALGOTRADING/tech-arch.png){:class="img-responsive"}
{: style="text-align: center;"}

The backtesting software was created to wrap around the offline version of the bot, and calculate statistics for what profit/losses would have been like on specified dates. One of the key features of my backtesting software was also providing an input file containing values to permutate for different configuraiton values. This way I can compare profits amongst different set of configurations.

![Bcktesting](/posts-photos/ALGOTRADING/backtesting.png){:class="img-responsive"}
{: style="text-align: center;"}

#### I leveraged the following dependencies:

* Core program: Python language and Pandas lib for plenty of matrix operations
* Placing orders: <b>[Ameritrade API order placement endpoint](https://developer.tdameritrade.com/apis) </b>
* Fetching OHLC price information: <b>[Ameritrade API price history endpoint](https://developer.tdameritrade.com/apis).</b>
* Fetching news: <b>[IEX Cloud news endpoint](https://iexcloud.io/docs/api/#news)</b>. Handy API gives a feed of latest news from many sources just providing stock symbol as an input
* Log output and alerting: <b>[Logz.io](https://logz.io/)</b>. Logz.io is a useful ELK-as-a-service platform in which I pushed all of my online mode logs for the purposes of long term retention, debugging, and alerting.
* Visualization of candlestick chart, EMA/SMA curves, trendlines: <b>[Bokeh](https://bokeh.org/)</b>. All of my trades generated also create an output HTML file with a visualization snapshot of the stock's candlesticks, trendlines, curves and other indicators at that point in time. Really useful for debugging

![Tech infra](/posts-photos/ALGOTRADING/tech-dependencies.png){:class="img-responsive"}
{: style="text-align: center;"}

## Hosting and ensuring reliability

One of the things I learned along the way is that it is not enough to trust the broker will handle your order exactly as you expect and it is worthwhile to have some sort of a redundancy check to ensure proper integrity of your orders. Maybe you commit a change to your code that messes up the request to the order placement API and causes unexpected results. Or maybe there's an edge case you forgot about, such as the market closing with your positions still open and the broker isn't doing this for you.

I strongly suggest building a seperate program that runs periodically to check for such cases. I did this because if my main bot were ever to crash, I can have some trust in the seperate program to cover any lingering problems. Another option would be to integrate this periodic routine as a seperate thread in the main program, but you would need to properly handle the program rebooting upon crashing.

This made my choice for cloud hosting easy: I use an Amazon EC2 instance that is scheduled to run the trading bot on NYSE market open time each day. Then, a server-less AWS Lambda operation takes care of running a routine every minute to check for the edge cases.

## Lessons learned and a word of caution

Taking on this project as both a challenging feat and the pursuit of an extra source of income turned out being extremely rewarding and fruitful in learning how to best design reliable+complex backend systems.

The two main challenging pieces of solving this puzzle involved proper order lifecycle management and building the backtesting software.

I found that there were a LOT of edge cases to handle when placing orders: What if I don't have sufficient account balance and I need to adjust stock unit quantity? What happens if the broker doesn't place the order as expected? How do I handle timeouts with the broker API? All of this led to a thorough examination of edge cases and proper fail-safe methods where appropiate.

Building the backtesting software required a complex set of features that warranted extreme code modularity and organization. Upon calling the bot in offline mode I had to determine price levels for which the order entered and exit, compute profit/loss statistics, compute aggregate statistics, etc. It was additionally challenging to make the entire backtesting run as fast as possible in order to test multiple configurations, and there was plenty of opportunities to leverage multiprocessing to get the job efficiently.

One thing I will say in advance to those hoping to take on algo-trading: don't take any historical results for granted. Although I made it an effort to find configurations that lead to consistently profitable results for the last 3+ years, I learned that none of it should be proof of your strategy working indefinitely in the future. A change in market conditions can render your strategy useless at any point in time and that's something you might have to accept and deal with.

Additionally, I would be aware of conditions that could be causing a mismatch between stocks tested and future orders placed for a stock. In my case, I didn't consider that some stocks couldn't be shorted by my broker when it came to running the bot in a production use case, but I had been calculating my profits and losses assuming that all stocks could be shorted. This has caused me a significant mismatch between backtesting results and expected results which has made it a challenge to correctly make sense of my tests.