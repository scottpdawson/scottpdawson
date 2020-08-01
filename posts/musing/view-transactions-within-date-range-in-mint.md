---
title: "View transactions within a specific date range in Mint"
date: "2020-01-23"
permalink: "view-transactions-within-date-range-in-mint/"
hero: "/images/2020/01/mint-transactions.png"
description: "You can do all kinds of cool queries in Mint, if you know the proper URL structure."
---

When I read Fast Company's article titled [What the hell happened to Mint?](https://www.fastcompany.com/90453586/what-the-hell-happened-to-mint) I saw a reference to a Mint help article that promised to [allow filtering by date range in the transactions view](https://help.mint.com/Accounts-and-Transactions/972190281/How-can-I-view-transactions-within-a-specific-date-range.htm). I clicked in and gave it a test drive. Guess what? It doesn't work. Clearly, Mint has changed their URL structure since the help content was written.

Fear not, dear reader. Turns out, you CAN do all kinds of cool queries, if you know the proper URL structure. Here goes.

## Mint Transactions URL Structure

The structure is simple ...  
https://mint.intuit.com/transaction.event#location:{_QUERY\_GOES\_HERE_}

The magical part is QUERY\_GOES\_HERE, and that's where we have the syntax for startDate and endDate. For example, for FY2019, use this:

"startDate":"01/01/2019","endDate":"12/31/2019"

## Adding Category, Name, Tag, and/or Notes Queries to the Date Range

If you want to group this with a query by category, transaction name, tag, or the contents of the notes field _(this one blew my mind, since I've wished for this for awhile)_, I've got you covered.

- **category:** "query":"category=:Groceries"
- **transaction name (description):** "query":"Wegmans"
- **tag:** "query":"tag:strawberries"
- **notes:** "query":"notes:lunch with Joe"
- **grouping a few together:** "query":"description:Silver Queen Farms, tag:strawberries"

Assuming that the quotes above turn into fancy quotes or some other kind of nonsense, here are functioning links that use this syntax for the examples above. You can hit 'em, modify 'em, and bookmark 'em. Enjoy!

- [FY 2019 for Groceries](https://mint.intuit.com/transaction.event#location:{"startDate":"01/01/2019","endDate":"12/31/2019","query":"category=:Groceries"})
- [FY 2019 for Wegmans](https://mint.intuit.com/transaction.event#location:{"startDate":"01/01/2019","endDate":"12/31/2019","query":"Wegmans"})
- [FY 2019 for 'strawberries' tag](https://mint.intuit.com/transaction.event#location:{"startDate":"01/01/2019","endDate":"12/31/2019","query":"tag:strawberries"})
- [FY 2019 for 'strawberries' tag from Silver Queen Farms](https://mint.intuit.com/transaction.event#location:{"startDate":"01/01/2019","endDate":"12/31/2019","query":"description:Silver%20Queen%20Farms,tag:strawberries"})
- [FY 2019 for notes containing 'lunch with Joe'](https://mint.intuit.com/transaction.event#location:{"startDate":"01/01/2019","endDate":"12/31/2019","query":"notes:lunch%20with%20Joe"})
