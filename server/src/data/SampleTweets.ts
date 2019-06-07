const tweets = [
   {
      "text": "RT @programmableweb: What Makes the @bunq #API Today’s Best European #OpenBanking #API ? https://t.co/uuZXTGu1kY https://t.co/AmycO5CycJ",
      "post_date": "2019-06-07T03:48:00"
   },
   {
      "text": "RT @noikeanolife: #Digitalbanking or #banking done digitally? @raconteur https://t.co/X4LevY9vsl #Fintech #CX #biz #FutureofBanking #leader…",
      "post_date": "2019-06-07T03:40:00"
   },
   {
      "text": "RT @derarshuli: @Jordan_Fintech Conference Services and sound system managment https://t.co/zk6oEmZEUs\n #fintechjordan \n#fintech #bank #tec…",
      "post_date": "2019-06-07T03:13:00"
   },
   {
      "text": "@Jordan_Fintech Conference Services and sound system managment https://t.co/zk6oEmZEUs\n #fintechjordan \n#fintech… https://t.co/UHjEpXwOmH",
      "post_date": "2019-06-07T03:13:00"
   },
   {
      "text": "RT @BigData_Joe: [#Infographic] Global platforms redefining the payments landscape\n\nhttps://t.co/akBWZThyii \n\n#Fintech #Banking #BigTech #E…",
      "post_date": "2019-06-07T03:02:00"
   },
   {
      "text": "Ireland's Priviti and Aussie fintech Accurassi partner for Open Banking - Finextra - https://t.co/mbVpMGpceI #openbanking #banking #digital",
      "post_date": "2019-06-07T02:53:00"
   },
   {
      "text": "RT @stratorob: Why Artificial Intelligence to become a disruptive force in UK financial services sector https://t.co/5KiObBbIkK\n\n@guidodeck…",
      "post_date": "2019-06-07T02:38:00"
   },
   {
      "text": "#OpenBanking, yay or nay? 76% of bankers are concerned about data security and customer privacy. Find out why… https://t.co/PI021pccfV",
      "post_date": "2019-06-07T02:12:00"
   },
   {
      "text": "RT @NZSounds: * 25% Off * @SmithandCaughey \nToday Only till midnight\nBe in quick, exclusions apply.\nhttps://t.co/V4AmsAV8M9\n\n@ASBMobile use…",
      "post_date": "2019-06-07T01:09:00"
   },
   {
      "text": "TrueLayer scores $35 million from Tencent, Temasek and prior backers to expand its 'Open Banking network' in and ou… https://t.co/SJ74fZVbJt",
      "post_date": "2019-06-07T01:03:00"
   },
   {
      "text": "How New Entrepreneurs Usher Open Banking Into SMB FinServ - https://t.co/so093EXvnj - https://t.co/h4a2rCVyfF #openbanking #banking #digital",
      "post_date": "2019-06-07T00:53:00"
   },
   {
      "text": "What are the key security challenges of #openbanking?@techradar investigates https://t.co/5rJO5yNFwy",
      "post_date": "2019-06-06T23:35:00"
   },
   {
      "text": "RT @BritishChamber: Alastair Lukies CBE, UK Prime Minister's Business Council and Chairman of Fintech-Alliance will be speaking for us at t…",
      "post_date": "2019-06-06T23:28:00"
   },
   {
      "text": "Great move for both firms. @PayPal goes deeper into #OpenBanking and @Tink finds powerful distribution #. \n\nMasterf… https://t.co/qQrhyNQDIY",
      "post_date": "2019-06-06T23:18:00"
   },
   {
      "text": "* 25% Off * @SmithandCaughey \nToday Only till midnight\nBe in quick, exclusions apply.\nhttps://t.co/V4AmsAV8M9… https://t.co/azWT7HCwFh",
      "post_date": "2019-06-06T23:04:00"
   },
   {
      "text": "Industry Group Warns Of Open Banking Operational Dangers - PaymentsCompliance - https://t.co/iK0nlabqkZ #openbanking #banking #digital",
      "post_date": "2019-06-06T23:03:00"
   },
   {
      "text": "Alastair Lukies CBE, UK Prime Minister's Business Council and Chairman of Fintech-Alliance will be speaking for us… https://t.co/iR45p2mm4a",
      "post_date": "2019-06-06T23:01:00"
   },
   {
      "text": "Is Open Banking a complete fiasco? #Fintech #Money2020Europe #OpenBanking  https://t.co/ILYMxuKI19",
      "post_date": "2019-06-06T22:57:00"
   },
   {
      "text": "RT @antgrasso: The arrival of Open Banking has thrown together fintechs and legacy banks, but do these organisations make good partners?. h…",
      "post_date": "2019-06-06T22:55:00"
   },
   {
      "text": "RT @noikeanolife: #Digitalbanking or #banking done digitally? @raconteur https://t.co/X4LevY9vsl #Fintech #CX #biz #FutureofBanking #leader…",
      "post_date": "2019-06-06T22:22:00"
   },
   {
      "text": "@GarrettSCassidy @trezeohq Well done, @trezeohq is a perfect example of how #OpenBanking can help people get a hold of there finances.",
      "post_date": "2019-06-06T22:12:00"
   },
   {
      "text": "RT @sbmeunier: The evolution of open #ecosystems: From #OpenBanking to OpenX in which standardized APIs, insights from customer #data, and…",
      "post_date": "2019-06-06T22:08:00"
   },
   {
      "text": "RT @stratorob: Research Finds 89% of Merchants are Primed for #OpenBanking https://t.co/9kRhsha0B9\n\n@RAlexJimenez @DeepLearn007 @antgrasso…",
      "post_date": "2019-06-06T22:02:00"
   },
   {
      "text": ".@novopayment CEO @APFintech on why the key to #OpenBanking is more bank participation: https://t.co/Jcn0WKczJ9",
      "post_date": "2019-06-06T22:01:00"
   },
   {
      "text": "OPEN X is here &amp; open banking is the past\nhttps://t.co/JQYlinDPgc\n#Digital #Banking #API #FinancialServices… https://t.co/Cg7TBWI1Eg",
      "post_date": "2019-06-06T21:51:00"
   },
   {
      "text": "Interesting how #openbanking is become an ever greater theme in the traditional world. The world of finance is fina… https://t.co/zOXoP8T36h",
      "post_date": "2019-06-06T21:31:00"
   },
   {
      "text": "RT @KPMG: As markets in the world move towards #OpenBanking, is your #bank well-positioned to drive customer growth and value from the syst…",
      "post_date": "2019-06-06T21:14:00"
   },
   {
      "text": "RT @programmableweb: What Makes the @bunq #API Today’s Best European #OpenBanking #API ? https://t.co/uuZXTGu1kY https://t.co/AmycO5CycJ",
      "post_date": "2019-06-06T21:07:00"
   },
   {
      "text": "RT @MarkosZach: Such a great pleasure to be able to present at the 2nd @FinteQC Conference in lovely #Quebec! Many thanks to @UQAR colleagu…",
      "post_date": "2019-06-06T21:06:00"
   },
   {
      "text": ".@CGI_UKnews, #Ordo wield #OpenBanking to promote invoice payment transparency: https://t.co/igD9CuSJKT",
      "post_date": "2019-06-06T20:31:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-06T20:27:00"
   },
   {
      "text": "China's Tencent leads $35m investment in London fintech start-up - Yahoo News - https://t.co/WIqQxAQmru #openbanking #banking #digital",
      "post_date": "2019-06-06T20:23:00"
   },
   {
      "text": "RT @BradJCarr: Plenty happening on ⁦@IIF⁩ FRT podcast: former ⁦@OSFICanada⁩ Deputy Superintendent Mark Zelmer joins me to talk #OpenBanking…",
      "post_date": "2019-06-06T20:05:00"
   },
   {
      "text": ".@TABBank sounds off on bank branches, #openbanking in the US, and the biggest disruptions headed the way of… https://t.co/qwh9ph2Iah",
      "post_date": "2019-06-06T20:00:00"
   },
   {
      "text": "RT stratorob How #fintech revolution has killed off monogamous #banking https://t.co/jh5PIo7Sjs\n\nzachweinberg poli… https://t.co/fgtMZIl3aE",
      "post_date": "2019-06-06T19:58:00"
   },
   {
      "text": "RT @stratorob: How #fintech revolution has killed off monogamous #banking https://t.co/SOR8HzpJ9o\n\n@zachweinberg @policybazaar @funder @Urs…",
      "post_date": "2019-06-06T19:53:00"
   },
   {
      "text": "Balancing security and customer experience: PSD2 https://t.co/E0LdaFUqTJ via @Earthport #payments #OpenBanking",
      "post_date": "2019-06-06T19:45:00"
   },
   {
      "text": "RT @ParisFinForum: RT @pymnts https://t.co/Vy6FeGodOL .@novopayment CEO @APFintech  explains why collaboration is crucial to the global suc…",
      "post_date": "2019-06-06T19:41:00"
   },
   {
      "text": "RT @pymnts: .@novopayment CEO @APFintech  explains why collaboration is crucial to the global success of #OpenBanking: https://t.co/Jcn0WKc…",
      "post_date": "2019-06-06T19:41:00"
   },
   {
      "text": "RT @karenmpd: The key to #OpenBanking? More bank participation, says @novopayment CEO @APFintech: https://t.co/nCAGBn1p3I",
      "post_date": "2019-06-06T19:41:00"
   },
   {
      "text": "RT @pymnts: .@novopayment CEO @APFintech on why #OpenBanking needs more bank buy-in: https://t.co/Jcn0WKczJ9 #API",
      "post_date": "2019-06-06T19:40:00"
   },
   {
      "text": "How #fintech revolution has killed off monogamous #banking https://t.co/SOR8HzpJ9o\n\n@zachweinberg @policybazaar… https://t.co/xw8tvteepM",
      "post_date": "2019-06-06T19:34:00"
   },
   {
      "text": "RT @pymnts: .@novopayment CEO @APFintech  explains why collaboration is crucial to the global success of #OpenBanking: https://t.co/Jcn0WKc…",
      "post_date": "2019-06-06T19:31:00"
   },
   {
      "text": "RT @ParisFinForum: RT @pymnts https://t.co/Vy6FeGodOL .@novopayment CEO @APFintech  explains why collaboration is crucial to the global suc…",
      "post_date": "2019-06-06T19:28:00"
   },
   {
      "text": "RT @pymnts: .@novopayment CEO @APFintech on why #OpenBanking needs more bank buy-in: https://t.co/Jcn0WKczJ9 #API",
      "post_date": "2019-06-06T19:28:00"
   },
   {
      "text": "#FutureofFinance in #melbourne with @DecodedCo Head of Asia-Pacific Chris Monk talking all things #blockchain, #AI,… https://t.co/HE3wQeBPl2",
      "post_date": "2019-06-06T19:25:00"
   },
   {
      "text": "RT @stratorob: Tink, the European #OpenBanking platform, announces PayPal as a strategic investor https://t.co/CLRkIzvo05\n\n@VolpiIT @2601Ma…",
      "post_date": "2019-06-06T19:25:00"
   },
   {
      "text": "The evolution of open #ecosystems: From #OpenBanking to OpenX in which standardized APIs, insights from customer… https://t.co/oj83WYjDrp",
      "post_date": "2019-06-06T19:04:00"
   },
   {
      "text": "#OpenBanking: A Disruptive Threat? Or Competitive Opportunity?\n\nhttps://t.co/tDw5FHGaEL https://t.co/YLxXd5ravH",
      "post_date": "2019-06-06T19:03:00"
   },
   {
      "text": "RT @Epiphany_Srl: Join us at #EBADay in Stockholm next June 18-19! Meet us at stand 11 and discover how to become a leader in #OpenBanking…",
      "post_date": "2019-06-06T18:53:00"
   },
   {
      "text": "RT @Epiphany_Srl: #Money2020 was such a blast! We met many clients and partners and discussed about #OpenBanking at our booth.\ncc @JoannMor…",
      "post_date": "2019-06-06T18:53:00"
   },
   {
      "text": "Why did @DeutscheBankAG decide to open up earlier and beyond the scope of regulatory requirements? Interview with… https://t.co/zXQLZarpJM",
      "post_date": "2019-06-06T18:40:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Tapping into the Future of Mobile Payments\n\nhttps://t.co/r40YsHpKEU\n\n#Innovation #Fintech #Banking #Retai…",
      "post_date": "2019-06-06T18:39:00"
   },
   {
      "text": "RT @BigData_Joe: [#Infographic] Global platforms redefining the payments landscape\n\nhttps://t.co/akBWZThyii \n\n#Fintech #Banking #BigTech #E…",
      "post_date": "2019-06-06T18:27:00"
   },
   {
      "text": "[#Infographic] Global platforms redefining the payments landscape\n\nhttps://t.co/akBWZThyii \n\n#Fintech #Banking… https://t.co/mv2W2Wq0aV",
      "post_date": "2019-06-06T18:24:00"
   },
   {
      "text": ".@novopayment CEO @APFintech on why #OpenBanking needs more bank buy-in: https://t.co/Jcn0WKczJ9 #API",
      "post_date": "2019-06-06T18:14:00"
   },
   {
      "text": "RT @DeloitteItalia: .#OpenBanking round table - P. Gianturco - M. Giorgino, Scientific Director FinTech &amp; InsurTech Observatory @polimi - R…",
      "post_date": "2019-06-06T18:08:00"
   },
   {
      "text": "Riding the wave to #InstantPayments and #OpenBanking: The New Payments Architecture and P27 https://t.co/rd8ukp5hn4… https://t.co/GQnUacfr9B",
      "post_date": "2019-06-06T18:00:00"
   },
   {
      "text": "Research Finds 89% of Merchants are Primed for Open Banking https://t.co/u1mURTBhov #merchants #banking… https://t.co/umtyGEOUIf",
      "post_date": "2019-06-06T17:46:00"
   },
   {
      "text": "RT @DesjardinsLab: Thanks @MarkosZach to be here at #FinteQC talking about #API, #OpenBanking and  #disruption in #FinancialServices #finte…",
      "post_date": "2019-06-06T17:37:00"
   },
   {
      "text": "Such a great pleasure to be able to present at the 2nd @FinteQC Conference in lovely #Quebec! Many thanks to @UQAR… https://t.co/ME7ay972Wx",
      "post_date": "2019-06-06T17:31:00"
   },
   {
      "text": "@stefanovaccani @YapilyLtd  congratulation. Good luck with your continued growth. ❤️ a success story! #fundraising… https://t.co/xAyR7epsWu",
      "post_date": "2019-06-06T17:30:00"
   },
   {
      "text": "The key to #OpenBanking? More bank participation, says @novopayment CEO @APFintech: https://t.co/nCAGBn1p3I",
      "post_date": "2019-06-06T17:15:00"
   },
   {
      "text": "RT @stratorob: Why Artificial Intelligence to become a disruptive force in UK financial services sector https://t.co/5KiObBbIkK\n\n@guidodeck…",
      "post_date": "2019-06-06T17:13:00"
   },
   {
      "text": "Slow progress on open banking putting Canada further behind, observers warn - The Western Star -… https://t.co/Kw7PDvg9wg",
      "post_date": "2019-06-06T17:13:00"
   },
   {
      "text": "RT @paymentcomp: The Time to Develop an #OpenBanking Strategy is Now #BaaP #BaaS #openAPIs #Fintech https://t.co/ap0CuvJNWM via @FinancialB…",
      "post_date": "2019-06-06T17:08:00"
   },
   {
      "text": "RT @paymentcomp: The Time to Develop an #OpenBanking Strategy is Now #BaaP #BaaS #openAPIs #Fintech https://t.co/ap0CuvJNWM via @FinancialB…",
      "post_date": "2019-06-06T17:07:00"
   },
   {
      "text": "With the emergence of #openbanking, it’s clear that the bank branch is far from dead. Reimagining the #bankbranch d… https://t.co/tt8No3Tl3a",
      "post_date": "2019-06-06T17:00:00"
   },
   {
      "text": "Defending against disruption from open banking |   https://t.co/xXSZekAKI6 #banking #OpenBanking",
      "post_date": "2019-06-06T17:00:00"
   },
   {
      "text": "#TECH COMPANIES IN #FINANCIAL SERVICES: How Apple, Amazon, and Google are taking #FinancialServices by storm… https://t.co/zIKWhnzqvA",
      "post_date": "2019-06-06T16:56:00"
   },
   {
      "text": "RT @DesjardinsLab: Thanks @MarkosZach to be here at #FinteQC talking about #API, #OpenBanking and  #disruption in #FinancialServices #finte…",
      "post_date": "2019-06-06T16:52:00"
   },
   {
      "text": "RT @Vocalink: Superb talks by David Rich, EVP, Vocalink Services and Jim Wadsworth, SVP, Open Banking at the annual Mastercard Innovation F…",
      "post_date": "2019-06-06T16:50:00"
   },
   {
      "text": "RT @Epiphany_Srl: #Money2020 was such a blast! We met many clients and partners and discussed about #OpenBanking at our booth.\ncc @JoannMor…",
      "post_date": "2019-06-06T16:28:00"
   },
   {
      "text": "The financial services industry is shifting from Open Banking to Open X\n \nAre you ready?\n\n#infographic #OpenX… https://t.co/ZCXv28T55x",
      "post_date": "2019-06-06T16:25:00"
   },
   {
      "text": "RT stratorob Why Artificial Intelligence to become a disruptive force in UK financial services sector… https://t.co/peoZxXRTUc",
      "post_date": "2019-06-06T16:03:00"
   },
   {
      "text": "Why Artificial Intelligence to become a disruptive force in UK financial services sector https://t.co/5KiObBbIkK… https://t.co/asgpWbYWZw",
      "post_date": "2019-06-06T16:01:00"
   },
   {
      "text": "@Capgemini World #Fintech report: The #FinServ industry is looking beyond #OpenBanking to #OpenX which will require… https://t.co/D63Y0DyE2S",
      "post_date": "2019-06-06T16:01:00"
   },
   {
      "text": "RT @DesjardinsLab: Thanks @MarkosZach to be here at #FinteQC talking about #API, #OpenBanking and  #disruption in #FinancialServices #finte…",
      "post_date": "2019-06-06T15:59:00"
   },
   {
      "text": "#Openbanking concerns may hinder global adoption\n\nhttps://t.co/eATbN5D2Wl https://t.co/mbKWFrXH4h",
      "post_date": "2019-06-06T15:55:00"
   },
   {
      "text": "RT @Epiphany_Srl: #Money2020 was such a blast! We met many clients and partners and discussed about #OpenBanking at our booth.\ncc @JoannMor…",
      "post_date": "2019-06-06T15:52:00"
   },
   {
      "text": "RT @FinteQC: Open banking as one of the most influential trends that the potentially shape the future of finances 💱📊👨‍🏫 by Markos Zachariad…",
      "post_date": "2019-06-06T15:50:00"
   },
   {
      "text": ".@PayPal has invested in Swedish Open Banking Platform, Tink helping them pursue their European expansion plans and… https://t.co/3bh0z9JSF6",
      "post_date": "2019-06-06T15:30:00"
   },
   {
      "text": "RT @pymnts https://t.co/Vy6FeGodOL .@novopayment CEO @APFintech  explains why collaboration is crucial to the globa… https://t.co/F7ILWZZIOA",
      "post_date": "2019-06-06T15:25:00"
   },
   {
      "text": "RT @FinteQC: Open banking as one of the most influential trends that the potentially shape the future of finances 💱📊👨‍🏫 by Markos Zachariad…",
      "post_date": "2019-06-06T15:23:00"
   },
   {
      "text": "RT @FinteQC: Thank you for your passion Markos, it was definitely interesting 🤝\n#finteqc #OpenBanking https://t.co/xdQrlBknPD",
      "post_date": "2019-06-06T15:23:00"
   },
   {
      "text": "Miss #Money2020? We've got you covered:\n\nMastercard’s Wadsworth: Banks need time to fit into Open Banking future… https://t.co/JDj8ePHVS2",
      "post_date": "2019-06-06T15:23:00"
   },
   {
      "text": "Lessons being learnt from the PSD2 frontline https://t.co/JbAhRNEI18 @ForgeRock #OpenBanking #PSD2 #APIs #SCA",
      "post_date": "2019-06-06T15:21:00"
   },
   {
      "text": ".@novopayment CEO @APFintech  explains why collaboration is crucial to the global success of #OpenBanking: https://t.co/Jcn0WKczJ9",
      "post_date": "2019-06-06T15:15:00"
   },
   {
      "text": "FS industry ready to shift from Open Banking to 'Open X' - Capgemini https://t.co/PZBn7CwIof via @Finextra \n#API… https://t.co/MBtxTshvBU",
      "post_date": "2019-06-06T14:58:00"
   },
   {
      "text": "Canada seems to be falling behind other countries when it comes to open banking, which might not be implemented unt… https://t.co/PiygwSoZoy",
      "post_date": "2019-06-06T14:57:00"
   },
   {
      "text": "Fintechs likely see #OpenBanking as more of an opportunity because they're gaining access to data, while banks hav… https://t.co/oSqlwtF5L0",
      "post_date": "2019-06-06T14:43:00"
   },
   {
      "text": "RT @SimonsGedanken: #OpenBanking has not only been the #buzzword at #M2020Eu , even at #schiphol you can’t escape it. @Capgemini https://t.…",
      "post_date": "2019-06-06T14:39:00"
   },
   {
      "text": "#OpenBanking concerns may hinder global adoption @BIIntelligence\n  #WFTR19 https://t.co/zAsdeKVTVU",
      "post_date": "2019-06-06T14:33:00"
   },
   {
      "text": "#OpenBanking has not only been the #buzzword at #M2020Eu , even at #schiphol you can’t escape it. @Capgemini https://t.co/aE7YgYRyEP",
      "post_date": "2019-06-06T14:32:00"
   },
   {
      "text": "RT @the_idco: Thanks to all those who attended our DirectID Insights webinar, some great questions from the audience.\nDon't worry if you mi…",
      "post_date": "2019-06-06T14:31:00"
   },
   {
      "text": "#OpenBanking, yay or nay? 76% of bankers are concerned about data security and customer privacy. Find out why… https://t.co/hOWNi9qpUt",
      "post_date": "2019-06-06T14:30:00"
   },
   {
      "text": "RT @GetFutureBank: The Key To Open Banking? More Bank Participation https://t.co/qPuRHtrmgH  #AI #eCommerce #Payments #FinTech #DigitalBank…",
      "post_date": "2019-06-06T14:27:00"
   },
   {
      "text": "RT @creditkudos: Great to see @Finextra covering our announcement on our latest partnership with @CybertonicaLtd! Read more here: https://t…",
      "post_date": "2019-06-06T14:20:00"
   },
   {
      "text": "[#Infographic] Fintech Infrastructure Market Map\n\nhttps://t.co/Ff2VJruXXt\n\n#Innovation #Fintech #Banking #PSD2… https://t.co/nWxTZZawQY",
      "post_date": "2019-06-06T14:20:00"
   },
   {
      "text": "Great to see @Finextra covering our announcement on our latest partnership with @CybertonicaLtd! Read more here:… https://t.co/od0hJex7bs",
      "post_date": "2019-06-06T14:19:00"
   },
   {
      "text": "RT @OBE_Global: The countdown to our next #OpenBankingExcellence evening has begun. We will be discussing the state of #APIs and their #int…",
      "post_date": "2019-06-06T14:12:00"
   },
   {
      "text": "Some fantastic questions on our #webinar today - we love how specific some of these are. Never enough time to answe… https://t.co/A96Z42CdiI",
      "post_date": "2019-06-06T14:10:00"
   },
   {
      "text": "RT @FinteQC: Thank you for your passion Markos, it was definitely interesting 🤝\n#finteqc #OpenBanking https://t.co/xdQrlBknPD",
      "post_date": "2019-06-06T14:10:00"
   },
   {
      "text": "RT @FinMKTG: The evolution of open #banking #ecosystems:\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #da…",
      "post_date": "2019-06-06T14:08:00"
   },
   {
      "text": "Read @LexisPSL #financialservices newsletter\n\nhttps://t.co/rFnkQIvW9v   \n\n#Brexit #Banking #fintech #MiFID… https://t.co/IRblgNy3OY",
      "post_date": "2019-06-06T14:07:00"
   },
   {
      "text": "RT @Capgemini: #OpenBanking, yay or nay? 76% of bankers are concerned about data security and customer privacy. Find out why #FinTechs perc…",
      "post_date": "2019-06-06T14:07:00"
   },
   {
      "text": "Thank you for your passion Markos, it was definitely interesting 🤝\n#finteqc #OpenBanking https://t.co/xdQrlBknPD",
      "post_date": "2019-06-06T14:06:00"
   },
   {
      "text": "#OpenBanking, yay or nay? 76% of bankers are concerned about data security and customer privacy. Find out why… https://t.co/NF99hHv6Vc",
      "post_date": "2019-06-06T14:01:00"
   },
   {
      "text": "#OpenBanking, yay or nay? 76% of bankers are concerned about data security and customer privacy. Find out why… https://t.co/obOVeYWuo9",
      "post_date": "2019-06-06T14:01:00"
   },
   {
      "text": "Open Banking suite from Mastercard \n\nhttps://t.co/1XjsjlcW2z\n\n@jimwadsworth #Mastercard #OpenBanking #Money2020EU https://t.co/kJqBsVd1yC",
      "post_date": "2019-06-06T14:00:00"
   },
   {
      "text": "Thanks to all those who attended our DirectID Insights webinar, some great questions from the audience.\nDon't worry… https://t.co/FogJWdxjIb",
      "post_date": "2019-06-06T14:00:00"
   },
   {
      "text": "Mobile banking and contactless cards continue to surge in popularity https://t.co/xIeDQJRTmz #digitalbanking… https://t.co/nrR2dyaF98",
      "post_date": "2019-06-06T13:59:00"
   },
   {
      "text": "Where things get interesting is combining AIS &amp; PIS - giving #consumers better understanding of their money, and h… https://t.co/2s2FIOPpWw",
      "post_date": "2019-06-06T13:55:00"
   },
   {
      "text": "Can traditional banks and fintechs ever work together? #DigitalTransformation #FinTech #OpenBanking  https://t.co/wcfSGtOD8G",
      "post_date": "2019-06-06T13:42:00"
   },
   {
      "text": "FS industry ready to shift from Open Banking to 'Open X' #Fintech #banking #openbanking  https://t.co/vjhExx9krd",
      "post_date": "2019-06-06T13:36:00"
   },
   {
      "text": "RT @FinteQC: Open banking as one of the most influential trends that the potentially shape the future of finances 💱📊👨‍🏫 by Markos Zachariad…",
      "post_date": "2019-06-06T13:29:00"
   },
   {
      "text": "RT @Castlight: The @Castlight Affordability Passport® provides a real-time view of the consumer’s financial position, by presenting a compr…",
      "post_date": "2019-06-06T13:27:00"
   },
   {
      "text": "RT @hawkfx: Is Open Banking a complete fiasco? #Insurtech #Money2020Europe #OpenBanking #Fintech  https://t.co/6DJYc8DljC",
      "post_date": "2019-06-06T13:23:00"
   },
   {
      "text": "RT @hawkfx: Is Open Banking a complete fiasco? #Insurtech #Money2020Europe #OpenBanking #Fintech  https://t.co/6DJYc8DljC",
      "post_date": "2019-06-06T13:22:00"
   },
   {
      "text": "Is Open Banking a complete fiasco? #Insurtech #Money2020Europe #OpenBanking #Fintech  https://t.co/6DJYc8DljC",
      "post_date": "2019-06-06T13:22:00"
   },
   {
      "text": "RT @Epiphany_Srl: Join us at #EBADay in Stockholm next June 18-19! Meet us at stand 11 and discover how to become a leader in #OpenBanking…",
      "post_date": "2019-06-06T13:18:00"
   },
   {
      "text": "RT @ttavlas: There are still several obstacles to open banking monetization - Business Insider - https://t.co/bd9QtBEQvO #openbanking #bank…",
      "post_date": "2019-06-06T13:18:00"
   },
   {
      "text": "The Key To Open Banking? More Bank Participation https://t.co/qPuRHtrmgH  #AI #eCommerce #Payments #FinTech… https://t.co/xiqg5xcd6N",
      "post_date": "2019-06-06T13:17:00"
   },
   {
      "text": "London-based open banking startup Yapily raises $5.4 million https://t.co/r2zseX5CI7 #europe #startup #API #OpenBanking via @robinwauters",
      "post_date": "2019-06-06T13:15:00"
   },
   {
      "text": "Join us at #EBADay in Stockholm next June 18-19! Meet us at stand 11 and discover how to become a leader in… https://t.co/BZNHQQ2vMT",
      "post_date": "2019-06-06T13:12:00"
   },
   {
      "text": "Open banking as one of the most influential trends that the potentially shape the future of finances 💱📊👨‍🏫 by Marko… https://t.co/5ise0EH1Uh",
      "post_date": "2019-06-06T13:07:00"
   },
   {
      "text": "With #openbanking, we are seeing a new era of truly efficient #payment systems. Read more: https://t.co/WK5pFzIaql… https://t.co/WsQy625dr6",
      "post_date": "2019-06-06T13:01:00"
   },
   {
      "text": "How well do your really understand your most important external partner? Find out at https://t.co/YOewz1ju07 #banks… https://t.co/8Dx0AoN5iM",
      "post_date": "2019-06-06T13:01:00"
   },
   {
      "text": "Why #OpenBanking success requires an open mind about #fintech and #payments https://t.co/9KoDA8Ab2t #Unisys' Maria… https://t.co/T7PKoJN3lK",
      "post_date": "2019-06-06T13:00:00"
   },
   {
      "text": "Not very far off, Mobey Day Toronto is approaching. Thank you @PwC for sponsoring. Great line of speakers and agend… https://t.co/vGhmopOga2",
      "post_date": "2019-06-06T13:00:00"
   },
   {
      "text": "Thanks @MarkosZach to be here at #FinteQC talking about #API, #OpenBanking and  #disruption in #FinancialServices… https://t.co/Kmt1CrCL8l",
      "post_date": "2019-06-06T12:51:00"
   },
   {
      "text": "RT @MarkosZach: #OpenBanking is coming to #Canada and along with it so does our #research! Anyone who would like to contribute or find out…",
      "post_date": "2019-06-06T12:47:00"
   },
   {
      "text": "There are still several obstacles to open banking monetization - Business Insider - https://t.co/bd9QtBEQvO #openbanking #banking #digital",
      "post_date": "2019-06-06T12:43:00"
   },
   {
      "text": "RT @OpenBankingExpo: Insight: @EmmaSteeley, CEO, @AccountScore - those doubting the industry risk missing the revolution. Read more... http…",
      "post_date": "2019-06-06T12:30:00"
   },
   {
      "text": "FinTech - June Magazine Edition - FinTech Magazine - https://t.co/wgqMx36Ase #openbanking #banking #digital",
      "post_date": "2019-06-06T12:18:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-06T12:14:00"
   },
   {
      "text": "How New Entrepreneurs Usher Open Banking Into SMB FinServ - https://t.co/so093EXvnj - https://t.co/h4a2rCVyfF #openbanking #banking #digital",
      "post_date": "2019-06-06T12:13:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-06T12:10:00"
   },
   {
      "text": "Open Banking: Why Amazon &amp; co may soon be eating the banks' cake - Lexology - https://t.co/vtmFtyOvv0 #openbanking #banking #digital",
      "post_date": "2019-06-06T12:08:00"
   },
   {
      "text": "We still need to gain consumer trust to take advantage of Open Banking https://t.co/6Uj2gFoGdy #openbanking #FinTech https://t.co/iPG7LWX64B",
      "post_date": "2019-06-06T12:07:00"
   },
   {
      "text": "Read my blog on the transformation of Nordic and UK payment transformation @FinastraFS #openbanking… https://t.co/ulrqp3lnbI",
      "post_date": "2019-06-06T12:06:00"
   },
   {
      "text": "#FIMEnews | The new #FIMETestFactory4.0 #digital platform is bringing #global payments #testing processes in line w… https://t.co/DzEHKD7gam",
      "post_date": "2019-06-06T12:03:00"
   },
   {
      "text": "RT @token_io: WEBINAR: Whilst we've been at #M2020EU showcasing #OpenBanking and unveiling our Token X #stablecoin, we're also gearing up f…",
      "post_date": "2019-06-06T12:02:00"
   },
   {
      "text": "RT @UBM_Conferences: We are delighted to welcome @FioranoGlobal as the Exhibit Partner for Future Payment Summit on 14 June @RenHotels,Mumb…",
      "post_date": "2019-06-06T12:02:00"
   },
   {
      "text": "Axway's banking customers find new solutions and increase value with #APIs. ‣ Watch them explaining how they enhanc… https://t.co/8nIjKnzuWY",
      "post_date": "2019-06-06T11:38:00"
   },
   {
      "text": "RT @Epiphany_Srl: #Money2020 was such a blast! We met many clients and partners and discussed about #OpenBanking at our booth.\ncc @JoannMor…",
      "post_date": "2019-06-06T11:36:00"
   },
   {
      "text": "RT @WFSULLIVAN3: .@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to Experien…",
      "post_date": "2019-06-06T11:23:00"
   },
   {
      "text": "RT @token_io: WEBINAR: Whilst we've been at #M2020EU showcasing #OpenBanking and unveiling our Token X #stablecoin, we're also gearing up f…",
      "post_date": "2019-06-06T11:20:00"
   },
   {
      "text": "First, Fire All The Brokers: How Lemonade, A Millennial-Loved Fintech Unicorn, Is Disrupting The Insurance Business… https://t.co/31GE04FgRG",
      "post_date": "2019-06-06T11:15:00"
   },
   {
      "text": "RT @FintechPortugal: First, Fire All The Brokers: How Lemonade, A Millennial-Loved Fintech Unicorn, Is Disrupting The Insurance Business…",
      "post_date": "2019-06-06T11:15:00"
   },
   {
      "text": "First, Fire All The Brokers: How Lemonade, A Millennial-Loved Fintech Unicorn, Is Disrupting The Insurance Business… https://t.co/MkW2Dy9OTJ",
      "post_date": "2019-06-06T11:14:00"
   },
   {
      "text": "#OpenBanking, yay or nay? 76% of bankers are concerned about data security and customer privacy. Find out why… https://t.co/6VX5RenEur",
      "post_date": "2019-06-06T11:13:00"
   },
   {
      "text": "RT @Temenos: We are very proud to be Lead Sponsors at #EBAday 2019 taking place on the 18th-19th June in Stockholm. \nContact info@temenos.c…",
      "post_date": "2019-06-06T11:12:00"
   },
   {
      "text": "RT @Chakray_com: [#OpenBanking guide] Find out how #APIs are transforming the banking sector, and how it can benefit you. Download here: ht…",
      "post_date": "2019-06-06T11:08:00"
   },
   {
      "text": "We are very proud to be Lead Sponsors at #EBAday 2019 taking place on the 18th-19th June in Stockholm. \nContact inf… https://t.co/9rgpPjIaqz",
      "post_date": "2019-06-06T11:08:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-06T11:06:00"
   },
   {
      "text": "Keynote by @Google : Janne Uusilehto @uusilehto  at Mobey Day Toronto 11-12 June. #MobeyForum event hosted by… https://t.co/pDZnrlU89c",
      "post_date": "2019-06-06T11:05:00"
   },
   {
      "text": "The Central Bank of Nigeria (CBN) has recently stated that it considers Open Banking as a concept which must be con… https://t.co/6EwhF60sN7",
      "post_date": "2019-06-06T11:00:00"
   },
   {
      "text": "What is ‘Open Banking’ and why is it important?\n\nThe key benefits of embracing Open Banking, and improving your fin… https://t.co/RZk6DItC6J",
      "post_date": "2019-06-06T11:00:00"
   },
   {
      "text": "Ireland's Priviti and Aussie fintech Accurassi partner for Open Banking - Finextra - https://t.co/oue9D1xVPG #openbanking #banking #digital",
      "post_date": "2019-06-06T10:58:00"
   },
   {
      "text": "The convenience of Banking as a Service has been a major contributor to its phenomenal rise, but can it overcome th… https://t.co/4emw8H78ji",
      "post_date": "2019-06-06T10:56:00"
   },
   {
      "text": "RT @xinjamoney: For those not in Amsterdam🚴🏻‍♂️🇱🇺 here’s a neat summary🔭of #unthinktank @scriberian @money2020 #money2020EU #M2020Eu #openb…",
      "post_date": "2019-06-06T10:55:00"
   },
   {
      "text": "FinTech adoption rate has grown to 64% globally: EY Survey\nChina and India lead emerging markets with 87 percent ad… https://t.co/8UfpqXyn59",
      "post_date": "2019-06-06T10:54:00"
   },
   {
      "text": "RT @neirajones: World #FinTech Report 2019: The Industry is Transitioning from #OpenBanking to “Open X” \nhttps://t.co/Ni5QfeJWmT \n#markets…",
      "post_date": "2019-06-06T10:53:00"
   },
   {
      "text": "FinTech adoption rate has grown to 64% globally: EY Survey\nChina and India lead emerging markets with 87 percent ad… https://t.co/UfDFkivGxj",
      "post_date": "2019-06-06T10:50:00"
   },
   {
      "text": "RT @LoharPrasanna: The industry is transitioning from #OpenBanking to #OpenX\n#Capgemini World #FinTech Report 2019\nhttps://t.co/LQ8neXesnz…",
      "post_date": "2019-06-06T10:48:00"
   },
   {
      "text": "Voice technology delivers on banking needs. #OpenBanking   #MoveTheDial  @MobeyForum  via @stratandbiz https://t.co/QE4PlaDkFs",
      "post_date": "2019-06-06T10:33:00"
   },
   {
      "text": "How Open Banking &amp; AI Can Drive Innovation In The Finance Sector In India - Analytics India Magazine -… https://t.co/zaa35LWY23",
      "post_date": "2019-06-06T10:33:00"
   },
   {
      "text": "Throwback to #FTSFest19 #Day2 at Deloitte with key international players in #AI #Blockchain and #OpenBanking sharin… https://t.co/iYbMhulfRO",
      "post_date": "2019-06-06T10:29:00"
   },
   {
      "text": "Facebook will reportedly announce cryptocurrency this month, allowing employees to take it as salary… https://t.co/vNJCpVNctd",
      "post_date": "2019-06-06T10:25:00"
   },
   {
      "text": "Facebook will reportedly announce cryptocurrency this month, allowing employees to take it as salary… https://t.co/RfkRhO5Jqt",
      "post_date": "2019-06-06T10:24:00"
   },
   {
      "text": "WEBINAR: Whilst we've been at #M2020EU showcasing #OpenBanking and unveiling our Token X #stablecoin, we're also ge… https://t.co/OWGhbUIYHF",
      "post_date": "2019-06-06T10:24:00"
   },
   {
      "text": "RT @antgrasso: The arrival of Open Banking has thrown together fintechs and legacy banks, but do these organisations make good partners?. h…",
      "post_date": "2019-06-06T10:20:00"
   },
   {
      "text": "RT @a_verseckas: @PolybiusEU @Investsuite @olgakharif one if those where are the ICOs of 2017 now. Apparently, changing the world #OpenBa…",
      "post_date": "2019-06-06T10:19:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-06T10:15:00"
   },
   {
      "text": "RT @SchrempfRegina: Which are the services customers of #challengerbanks like most? No. 1 is a holistic overview of all accounts and expend…",
      "post_date": "2019-06-06T10:14:00"
   },
   {
      "text": "RT @WFSULLIVAN3: .@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to Experien…",
      "post_date": "2019-06-06T10:14:00"
   },
   {
      "text": "Ireland's Priviti and Aussie fintech Accurassi partner for Open Banking - Finextra - https://t.co/mbVpMGpceI #openbanking #banking #digital",
      "post_date": "2019-06-06T10:13:00"
   },
   {
      "text": "TrueLayer raises USD 35 mln from Tencent to expand open banking network - The Paypers - https://t.co/FVZ5S7HpSH… https://t.co/hzoZjXeObw",
      "post_date": "2019-06-06T10:13:00"
   },
   {
      "text": "RT @LoharPrasanna: The industry is transitioning from #OpenBanking to #OpenX\n#Capgemini World #FinTech Report 2019\nhttps://t.co/LQ8neXesnz…",
      "post_date": "2019-06-06T10:11:00"
   },
   {
      "text": "RT @MastercardEU: Jason Lane #Mastercard discusses #OpenBanking @m2020 @M2020EU @FT https://t.co/PvLrCFMRMk",
      "post_date": "2019-06-06T10:06:00"
   },
   {
      "text": "Whitepaper: One year after #PSD2\n\nWhat has happened since PSD2 and #GDPR were introduced, and why financial service… https://t.co/8YXv5CBpiQ",
      "post_date": "2019-06-06T10:00:00"
   },
   {
      "text": "Insight: @EmmaSteeley, CEO, @AccountScore - those doubting the industry risk missing the revolution. Read more...… https://t.co/uEpLUyqNfw",
      "post_date": "2019-06-06T09:59:00"
   },
   {
      "text": "Which are the services customers of #challengerbanks like most? No. 1 is a holistic overview of all accounts and ex… https://t.co/wTwKwhpByi",
      "post_date": "2019-06-06T09:56:00"
   },
   {
      "text": "RT @ttavlas: TrueLayer scores $35 million from Tencent, Temasek and prior backers to expand its 'Open Banking network' in and outside of Eu…",
      "post_date": "2019-06-06T09:52:00"
   },
   {
      "text": "The European #OpenBanking #platform @Tink announces @PayPal as a strategic investor https://t.co/svQVfjNiol via @TechCrunch",
      "post_date": "2019-06-06T09:46:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-06T09:35:00"
   },
   {
      "text": "The Key To Open Banking: Bank Participation - https://t.co/so093EXvnj - https://t.co/rFFgqR7gUY #openbanking #banking #digital",
      "post_date": "2019-06-06T09:33:00"
   },
   {
      "text": "#Money2020 was such a blast! We met many clients and partners and discussed about #OpenBanking at our booth.\ncc… https://t.co/3wUgIg2uFb",
      "post_date": "2019-06-06T09:32:00"
   },
   {
      "text": "“Open Banking is an evolving #revolution”, says Nilixa Devluka of @UKOpenBanking. “it’s providing the structure tha… https://t.co/rXsFPfESOB",
      "post_date": "2019-06-06T09:30:00"
   },
   {
      "text": "Excited to join @Lumio_app to help everyday people by shining a light on historically opaque, complex… https://t.co/V1mbvc3i3q",
      "post_date": "2019-06-06T09:28:00"
   },
   {
      "text": "RT @RikCoeckelbergs: Research Finds 89% of Merchants are Primed for Open Banking https://t.co/THsM0DhyPm #merchants #banking #openbanking",
      "post_date": "2019-06-06T09:26:00"
   },
   {
      "text": "RT @programmableweb: What Makes the @bunq #API Today’s Best European #OpenBanking #API ? https://t.co/uuZXTGu1kY https://t.co/AmycO5CycJ",
      "post_date": "2019-06-06T09:24:00"
   },
   {
      "text": "Research Finds 89% of Merchants are Primed for Open Banking https://t.co/THsM0DhyPm #merchants #banking #openbanking",
      "post_date": "2019-06-06T09:24:00"
   },
   {
      "text": "Unifii Digital Experience Platform Selected by Judo Bank - Which-50 - https://t.co/PxiGFqmeoB #openbanking #banking #digital",
      "post_date": "2019-06-06T09:23:00"
   },
   {
      "text": "RT @programmableweb: What Makes the @bunq #API Today’s Best European #OpenBanking #API ? https://t.co/uuZXTGu1kY https://t.co/AmycO5CycJ",
      "post_date": "2019-06-06T09:22:00"
   },
   {
      "text": "RT @FabrickPlatform: #openbanking news by #Fabrick \n🔷 Research Finds 89% of Merchants are Primed for Open Banking 🔷 \n\n#APIeconomy ⁦@thefint…",
      "post_date": "2019-06-06T09:21:00"
   },
   {
      "text": "RT @FabrickPlatform: #openbanking news by #Fabrick \n\n🔷How the big banks have maximised the Open Banking opportunity 🔷\n\n#financialEcosystem…",
      "post_date": "2019-06-06T09:21:00"
   },
   {
      "text": "RT @OBE_Global: The countdown to our next #OpenBankingExcellence evening has begun. We will be discussing the state of #APIs and their #int…",
      "post_date": "2019-06-06T09:21:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] New Innovative Business Models For Open Banking\n\nhttps://t.co/YoktkzSJsm\n\n#Innovation #Fintech #Banking #…",
      "post_date": "2019-06-06T09:18:00"
   },
   {
      "text": "Research Finds 89% of Merchants are Primed for Open Banking https://t.co/UPB64xeJDF #merchants #banking #openbanking #wealthtech #regtech",
      "post_date": "2019-06-06T09:16:00"
   },
   {
      "text": ".@Capgemini World FinTech Report 2019 - The industry is transitioning from #OpenBanking to “Open X”… https://t.co/NgPFSfhjYx",
      "post_date": "2019-06-06T09:15:00"
   },
   {
      "text": "RT @fintechjo1: Webinar starting in just under 1hr here at @CREALOGIX_en - strategic context around #OpenBanking: https://t.co/9QVGhDgWaI",
      "post_date": "2019-06-06T09:12:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-06T09:12:00"
   },
   {
      "text": "RT @antgrasso: The arrival of Open Banking has thrown together fintechs and legacy banks, but do these organisations make good partners?. h…",
      "post_date": "2019-06-06T09:10:00"
   },
   {
      "text": "[#Infographic] New Innovative Business Models For Open Banking\n\nhttps://t.co/YoktkzSJsm\n\n#Innovation #Fintech… https://t.co/2DkZkzHola",
      "post_date": "2019-06-06T09:10:00"
   },
   {
      "text": "Webinar starting in just under 1hr here at @CREALOGIX_en - strategic context around #OpenBanking: https://t.co/9QVGhDgWaI",
      "post_date": "2019-06-06T09:08:00"
   },
   {
      "text": "@CBA_Group_ teamed up with mobile money service M-Pesa &amp; telecoms operator Safaricom to launch mobile bank account… https://t.co/MGVZJ0P88O",
      "post_date": "2019-06-06T09:08:00"
   },
   {
      "text": "Together with IDC we interviewed over 150 C-level executives to determine the state of #OpenBanking adoption across… https://t.co/YDokfj3qee",
      "post_date": "2019-06-06T09:07:00"
   },
   {
      "text": "Meet @Devoteam today in #Berlin at @ForgeRock #IdentityLive! Our experts will not only show you how to save costs u… https://t.co/lDuNIcCIis",
      "post_date": "2019-06-06T09:07:00"
   },
   {
      "text": "In the new #OpenBanking era, #APIs will become the core of the banking business\nAPI monetization models - bank's vi… https://t.co/LqRPYFfg7o",
      "post_date": "2019-06-06T09:07:00"
   },
   {
      "text": "@arjan_bol Country Manager Netherlands, #Mastercard nails it: Just back from @money2020 #M2020EU talking about… https://t.co/smP3CuJxji",
      "post_date": "2019-06-06T09:04:00"
   },
   {
      "text": "FS industry ready to shift from Open Banking to 'Open X' - Capgemini - Finextra - https://t.co/rMxmGYRWgD #openbanking #banking #digital",
      "post_date": "2019-06-06T09:03:00"
   },
   {
      "text": "Digital banking now part of everyday  life in Europe https://t.co/EhyRufTvtg via @Finextra #fintech #finserv #banks… https://t.co/ossZIuwLN5",
      "post_date": "2019-06-06T09:00:00"
   },
   {
      "text": "“As #OpenBanking develops we’re pleased to be at the forefront of this, supporting businesses like Ordo in bringing… https://t.co/6yMfgyVR3a",
      "post_date": "2019-06-06T09:00:00"
   },
   {
      "text": "What Makes the @bunq #API Today’s Best European #OpenBanking #API ? https://t.co/uuZXTGu1kY https://t.co/AmycO5CycJ",
      "post_date": "2019-06-06T08:54:00"
   },
   {
      "text": "RT @antgrasso: The arrival of Open Banking has thrown together fintechs and legacy banks, but do these organisations make good partners?. h…",
      "post_date": "2019-06-06T08:52:00"
   },
   {
      "text": "RT @neirajones: Financial Services Industry Ready to Shift from #OpenBanking to Open X \nhttps://t.co/HlIrn69ljP \n#fintech #ecosystem \n@Ca…",
      "post_date": "2019-06-06T08:50:00"
   },
   {
      "text": "RT @The_LHoFT: Frenemies: 20 Top Funded Fintechs That Work With Banks\n\n➡ https://t.co/xHKV2pEb67\n\n#Fintech #Banking #Finserv #Payments #Reg…",
      "post_date": "2019-06-06T08:48:00"
   },
   {
      "text": "Lots of roles are in demand thanks to the decent global economy, but no one is in greater demand than the people w… https://t.co/9CdlRIz7eG",
      "post_date": "2019-06-06T08:40:00"
   },
   {
      "text": "Financial Services Industry Ready to Shift from #OpenBanking to Open X \nhttps://t.co/HlIrn69ljP \n#fintech… https://t.co/pYqDVK8YfI",
      "post_date": "2019-06-06T08:40:00"
   },
   {
      "text": "New research from @PaymentsCardsM reveals that European #financialinstitutions still have concerns about Open Banki… https://t.co/YqOsEcaxMb",
      "post_date": "2019-06-06T08:38:00"
   },
   {
      "text": "Frenemies: 20 Top Funded Fintechs That Work With Banks\n\n➡ https://t.co/xHKV2pEb67\n\n#Fintech #Banking #Finserv… https://t.co/fQZbY2uAMm",
      "post_date": "2019-06-06T08:35:00"
   },
   {
      "text": "The @Castlight Affordability Passport® provides a real-time view of the consumer’s financial position, by presentin… https://t.co/fKjOj74Huv",
      "post_date": "2019-06-06T08:33:00"
   },
   {
      "text": "#OpenBanking is a new, secure way for customers to take control of their financial data and share it with organisat… https://t.co/M0Fwu9Hgwz",
      "post_date": "2019-06-06T08:29:00"
   },
   {
      "text": "The Key To Open Banking? More Bank Participation - https://t.co/so093EXvnj - https://t.co/rFFgqR7gUY #openbanking #banking #digital",
      "post_date": "2019-06-06T08:23:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Disruption] Digital banking or banking done digitally?\n\nhttps://t.co/T19qxmcq19\n\n#DigitalTransformation #Innovation #F…",
      "post_date": "2019-06-06T08:23:00"
   },
   {
      "text": "EBA Global Seminar 2019: We extended the deadline for the discounted early bird registration until Friday, 7 June.… https://t.co/5XZbdgymmm",
      "post_date": "2019-06-06T08:21:00"
   },
   {
      "text": "The role of application networks in an #openbanking world #APIs https://t.co/Wy2931Clrx",
      "post_date": "2019-06-06T08:14:00"
   },
   {
      "text": "FS industry ready to shift from Open Banking to 'Open X' - Capgemini https://t.co/MEwOwrruEj via @Finextra… https://t.co/6b99UEK2W6",
      "post_date": "2019-06-06T08:10:00"
   },
   {
      "text": "RT @jamieveitch: What is #OpenBanking and how could it enable #financialinclusion - latest episode of the @resp_finance podcast, with guest…",
      "post_date": "2019-06-06T08:05:00"
   },
   {
      "text": "SEEBURGER provides MFT/B2B/EAI/API ready-to-run payments integration for PSD2 including XS2A, SEPA, payment standar… https://t.co/rNyZUNUFQb",
      "post_date": "2019-06-06T08:00:00"
   },
   {
      "text": "RT @BE_Fund: What is #openbanking? How can it support #financialinclusion? Find out more via the latest #podcast from @resp_finance. https:…",
      "post_date": "2019-06-06T07:59:00"
   },
   {
      "text": "[#Disruption] Digital banking or banking done digitally?\n\nhttps://t.co/T19qxmcq19\n\n#DigitalTransformation… https://t.co/dtJ1C7Vnra",
      "post_date": "2019-06-06T07:55:00"
   },
   {
      "text": "@Dentons Thank you for hosting Mobey Day Toronto. Great opportunity to have an overview on #openbanking from Canada… https://t.co/hodzLDWNbv",
      "post_date": "2019-06-06T07:48:00"
   },
   {
      "text": "Nick Triscritti from @Citi will be sharing a global view of the potential of #APIs in financial services at Mobey D… https://t.co/75F4xGCnvZ",
      "post_date": "2019-06-06T07:45:00"
   },
   {
      "text": "RT @cjemichael: Check out my article (on p24) on how OBIE is helping banks and third parties through the PSD2 exemption process for #OpenBa…",
      "post_date": "2019-06-06T07:45:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-06T07:44:00"
   },
   {
      "text": "RT @ghanem_elias: Learn the key findings of #WFTR19 by @Capgemini_Bnkg  \n\nJoin @WFSULLIVAN3 and me for the discussion @money2020 booth #J10…",
      "post_date": "2019-06-06T07:43:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-06T07:24:00"
   },
   {
      "text": "RT @WFSULLIVAN3: . @ghanem_elias now sharing findings from #WFTR19 and future of #OpenBanking (#OpenX) at @capgemini booth J101 at #M2020EU…",
      "post_date": "2019-06-06T07:19:00"
   },
   {
      "text": "RT @ayashaali: Why #OpenBanking will become a transformational force in the #corporatebanking market by @NordeaAPI https://t.co/N3h5HHX7D5…",
      "post_date": "2019-06-06T07:15:00"
   },
   {
      "text": "Applying for a mortgage can be time consuming, recourse heavy and stressful for customers. By implementing Open Ban… https://t.co/jvDJn7JKkl",
      "post_date": "2019-06-06T07:14:00"
   },
   {
      "text": "Why #OpenBanking will become a transformational force in the #corporatebanking market by @NordeaAPI… https://t.co/tVVe4qo25I",
      "post_date": "2019-06-06T07:12:00"
   },
   {
      "text": "Together with IDC we interviewed over 150 C-level executives to determine the state of #OpenBanking adoption across… https://t.co/3P3s3RGMw8",
      "post_date": "2019-06-06T07:08:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-06T07:01:00"
   },
   {
      "text": "Imran Gulamhuseinwala OBE, Open Banking Implementation Trustee, will be speaking during our Australian British Fina… https://t.co/ahYCbVLhgq",
      "post_date": "2019-06-06T07:00:00"
   },
   {
      "text": "RT @WFSULLIVAN3: .@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to Experien…",
      "post_date": "2019-06-06T06:58:00"
   },
   {
      "text": "RT @LoharPrasanna: The industry is transitioning from #OpenBanking to #OpenX\n#Capgemini World #FinTech Report 2019\nhttps://t.co/LQ8neXesnz…",
      "post_date": "2019-06-06T06:55:00"
   },
   {
      "text": "RT @WFSULLIVAN3: .@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to Experien…",
      "post_date": "2019-06-06T06:54:00"
   },
   {
      "text": "High percentage of people regularly use #digitalbanking, but there's a low awareness of #PSD2 and #OpenBanking - sh… https://t.co/mmUSunLTZu",
      "post_date": "2019-06-06T06:45:00"
   },
   {
      "text": "How can WSO2 Open Banking help your #openbanking implementations? Read our whitepaper and find out -… https://t.co/5HRjwadmoC",
      "post_date": "2019-06-06T06:45:00"
   },
   {
      "text": "#Mobile customer #banking engagements in Europe grew from 13% in 2011 to 56% by 2016. #Fintech businesses are… https://t.co/K7PzbNiLZB",
      "post_date": "2019-06-06T06:35:00"
   },
   {
      "text": "RT @dave_jennings: Psst. Hey, you. Yeah, you. Wanna get the skinny on a super cool use of #openbanking #fintech for #lenders? Easy onboardi…",
      "post_date": "2019-06-06T06:28:00"
   },
   {
      "text": "RT @FintechDistrict: 📰 ⁦@INGItalia⁩ ⁦@payvision⁩ e ⁦@FundingOptions⁩ chiose ⁦@getyolt⁩ for Business API 📰 ⁦@getyolt_it⁩ #fintech #openbanki…",
      "post_date": "2019-06-06T06:28:00"
   },
   {
      "text": "What insightful 2 weeks after travelling to HongKong for #HKMA, Bangkok for #BankofThailand on #OpenBanking and spe… https://t.co/k0b3ULhf8k",
      "post_date": "2019-06-06T06:28:00"
   },
   {
      "text": "📰 ⁦@INGItalia⁩ ⁦@payvision⁩ e ⁦@FundingOptions⁩ chiose ⁦@getyolt⁩ for Business API 📰 ⁦@getyolt_it⁩ #fintech… https://t.co/xI9j8AEXVs",
      "post_date": "2019-06-06T06:21:00"
   },
   {
      "text": "RT @jaypalter: In the age of data, command and control is not going to work.\nOlga Zoutendijk of @juliusbaer in conversation with @Rubicon…",
      "post_date": "2019-06-06T06:21:00"
   },
   {
      "text": "#openbanking news by #Fabrick \n\n🔷How the big banks have maximised the Open Banking opportunity 🔷… https://t.co/bCp05eWtpQ",
      "post_date": "2019-06-06T06:08:00"
   },
   {
      "text": "#OpenBanking - Given the inevitability and opportunity of open banking, the big question facing most banking execut… https://t.co/mDMSQchldb",
      "post_date": "2019-06-06T06:00:00"
   },
   {
      "text": "RT @antgrasso: The arrival of Open Banking has thrown together fintechs and legacy banks, but do these organisations make good partners?. h…",
      "post_date": "2019-06-06T05:59:00"
   },
   {
      "text": "RT @stratorob: Research Finds 89% of Merchants are Primed for #OpenBanking https://t.co/9kRhsha0B9\n\n@RAlexJimenez @DeepLearn007 @antgrasso…",
      "post_date": "2019-06-06T05:58:00"
   },
   {
      "text": "#OpenBanking may soon be leapfrogged by open experience, or Open X. #WFTR19\n@ghanem_elias @WFSULLIVAN3 https://t.co/OVWTdVDXIQ",
      "post_date": "2019-06-06T05:56:00"
   },
   {
      "text": "RT @RikCoeckelbergs: Watch out, the platforms are coming! Very insightful presentation on the real impact of #openbanking by @hakan_eroglu_…",
      "post_date": "2019-06-06T05:31:00"
   },
   {
      "text": "Check out what Niels and @PetteriPertola say about our new FX APIs in the sandbox https://t.co/2yP7uXY5bj\n\n#FX #OpenBanking",
      "post_date": "2019-06-06T05:30:00"
   },
   {
      "text": "RT @meniga: Very interesting presentation by @hakan_eroglu_tw from @Accenture on the future of #OpenBanking. Check out Meniga’s transaction…",
      "post_date": "2019-06-06T05:30:00"
   },
   {
      "text": "From #OpenBanking to #OpenX. World of #Fintech #Report highlights the great importance of #APIs and #ecosystems for… https://t.co/5Fi8VXoNqU",
      "post_date": "2019-06-06T05:22:00"
   },
   {
      "text": "RT @LoharPrasanna: The industry is transitioning from #OpenBanking to #OpenX\n#Capgemini World #FinTech Report 2019\nhttps://t.co/LQ8neXesnz…",
      "post_date": "2019-06-06T05:16:00"
   },
   {
      "text": "In the age of data, command and control is not going to work.\nOlga Zoutendijk of @juliusbaer in conversation with… https://t.co/jc0wgYVZ0w",
      "post_date": "2019-06-06T04:14:00"
   },
   {
      "text": "RT @antgrasso: The arrival of Open Banking has thrown together fintechs and legacy banks, but do these organisations make good partners?. h…",
      "post_date": "2019-06-06T03:59:00"
   },
   {
      "text": "RT @LoharPrasanna: The industry is transitioning from #OpenBanking to #OpenX\n#Capgemini World #FinTech Report 2019\nhttps://t.co/LQ8neXesnz…",
      "post_date": "2019-06-06T03:58:00"
   },
   {
      "text": "RT @noikeanolife: Can #banks and #fintechs ever work together? @raconteur https://t.co/adZdNVYiIB #UX #biz #Fintech #FutureofBanking #leade…",
      "post_date": "2019-06-06T03:40:00"
   },
   {
      "text": "RT @noikeanolife: Can #banks and #fintechs ever work together? @raconteur https://t.co/adZdNVYiIB #UX #biz #Fintech #FutureofBanking #leade…",
      "post_date": "2019-06-06T03:31:00"
   },
   {
      "text": "RT @antgrasso: The arrival of Open Banking has thrown together fintechs and legacy banks, but do these organisations make good partners?. h…",
      "post_date": "2019-06-06T03:27:00"
   },
   {
      "text": "RT @WFSULLIVAN3: . @ghanem_elias now sharing findings from #WFTR19 and future of #OpenBanking (#OpenX) at @capgemini booth J101 at #M2020EU…",
      "post_date": "2019-06-06T03:16:00"
   },
   {
      "text": "RT @neirajones: #Payments: @Mastercard Launches #OpenBanking #API Platform 😎⠀\nhttps://t.co/G6vbhvJ11V ⠀\n#fintech #regtech #infosec ⠀\n@jimwa…",
      "post_date": "2019-06-06T02:51:00"
   },
   {
      "text": "What is the current status of real-time #payments &amp; #openbanking initiatives in Europe &amp; beyond? One of the topics… https://t.co/R9vxLOlVRQ",
      "post_date": "2019-06-06T02:45:00"
   },
   {
      "text": "@PolybiusEU @Investsuite @olgakharif one if those \"where are the ICOs of 2017 now\". Apparently, changing the world #OpenBanking",
      "post_date": "2019-06-06T02:41:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-06T02:40:00"
   },
   {
      "text": "Kudos to @reflowzone team for using #OpenBanking to enable mobile bank payment experiences. https://t.co/GqidIiC088",
      "post_date": "2019-06-06T02:38:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-06T02:33:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-star p…",
      "post_date": "2019-06-06T02:25:00"
   },
   {
      "text": "Open To Change: Q&amp;A With Banco do Brasil Director Of Technology Gustavo Fosse - Global Finance -… https://t.co/Ks3nyxnfPK",
      "post_date": "2019-06-06T02:13:00"
   },
   {
      "text": "The arrival of Open Banking has thrown together fintechs and legacy banks, but do these organisations make good par… https://t.co/Y05LBfvmtp",
      "post_date": "2019-06-06T02:00:00"
   },
   {
      "text": "RT @FinastraFS: Together with IDC we interviewed over 150 C-level executives to determine the state of #OpenBanking adoption across Asia. W…",
      "post_date": "2019-06-06T01:34:00"
   },
   {
      "text": "What is #OpenBanking? https://t.co/OiGPAZtKwL #fintech #banking #financialservices https://t.co/SDN2UPQ7Ds",
      "post_date": "2019-06-06T01:30:00"
   },
   {
      "text": "China's Tencent leads $35m investment in London fintech start-up #Banking #openbanking #digital  https://t.co/WDJXV5Dp26",
      "post_date": "2019-06-06T01:18:00"
   },
   {
      "text": "FS industry ready to shift from Open Banking to 'Open X' - Capgemini - Finextra - https://t.co/dEVx0DbxyD #openbanking #banking #digital",
      "post_date": "2019-06-06T01:03:00"
   },
   {
      "text": "RT @BritishChamber: Join us and @AustCyber for the 3rd Australian British Financial Services Catalyst, 1-4 July, London. Full programme her…",
      "post_date": "2019-06-06T01:02:00"
   },
   {
      "text": "Join us and @AustCyber for the 3rd Australian British Financial Services Catalyst, 1-4 July, London. Full programme… https://t.co/hSRhudQJMz",
      "post_date": "2019-06-06T01:00:00"
   },
   {
      "text": "Very interesting panel chat going on right now around reimagining the role of banks in the life of today’s digital… https://t.co/ee4Nvybt4Y",
      "post_date": "2019-06-06T00:18:00"
   },
   {
      "text": "Together with IDC we interviewed over 150 C-level executives to determine the state of #OpenBanking adoption across… https://t.co/Sq8hw8OuJw",
      "post_date": "2019-06-06T00:00:00"
   },
   {
      "text": "RT @Lago72: #Payments Innovation Isn't Global Enough \nhttps://t.co/mwPFSyEyam\nv/ @payments_source\nHT @KVanderhoydonk\n\n#FinTech #FinServ #In…",
      "post_date": "2019-06-05T23:52:00"
   },
   {
      "text": "RT @hawkfx: Mastercard rolls out Open Banking suite #Insurtech #Mastercard #OpenBanking #Fintech  https://t.co/QmETr2AhbR",
      "post_date": "2019-06-05T23:52:00"
   },
   {
      "text": "RT @sudhirpai2: Pleased to join the #openbanking #psd2 debate at @GoldmanSachs financial congress. For banks It’s time to change the mindse…",
      "post_date": "2019-06-05T23:43:00"
   },
   {
      "text": "RT @RAlexJimenez: .@PayPal becomes strategic investor in European #fintech firm @tink  \n\nhttps://t.co/tEzCF3b4hw via @YahooFinance \n\n#payme…",
      "post_date": "2019-06-05T23:19:00"
   },
   {
      "text": "Mastercard Open Banking Solutions Support Innovation Across Europe - IBS Intelligence - https://t.co/wzq8Jh0yEK… https://t.co/8VLPXY01DW",
      "post_date": "2019-06-05T23:18:00"
   },
   {
      "text": ".@PayPal becomes strategic investor in European #fintech firm @tink  \n\nhttps://t.co/tEzCF3b4hw via @YahooFinance… https://t.co/ahaHEh8dcG",
      "post_date": "2019-06-05T23:15:00"
   },
   {
      "text": "RT @ttavlas: Slow progress on open banking putting Canada further behind, observers warn - The Telegram - https://t.co/roLS3zsXpB #openbank…",
      "post_date": "2019-06-05T22:51:00"
   },
   {
      "text": "Slow progress on open banking putting Canada further behind, observers warn - The Telegram -… https://t.co/S49fmEowxY",
      "post_date": "2019-06-05T22:43:00"
   },
   {
      "text": "Ireland's Priviti and Aussie fintech Accurassi partner for Open Banking - Finextra - https://t.co/oue9D1xVPG #openbanking #banking #digital",
      "post_date": "2019-06-05T22:43:00"
   },
   {
      "text": "Here's one way banks can offer more value to consumers through #openbanking: challenging interest rates to refinanc… https://t.co/VOAGJKPjYr",
      "post_date": "2019-06-05T22:31:00"
   },
   {
      "text": "RT @Vocalink: Superb talks by David Rich, EVP, Vocalink Services and Jim Wadsworth, SVP, Open Banking at the annual Mastercard Innovation F…",
      "post_date": "2019-06-05T22:22:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-star p…",
      "post_date": "2019-06-05T22:20:00"
   },
   {
      "text": "Tink lands €10M PayPal investment - PitchBook News &amp; Analysis - https://t.co/kMbLRH8mSb #openbanking #banking #digital",
      "post_date": "2019-06-05T22:08:00"
   },
   {
      "text": "Well done.  Onward @shefaliroy  and team.  @oxfordSBS #anotheralumna @OBA_Network  #openbanking @stevegotz… https://t.co/UPMkenCspx",
      "post_date": "2019-06-05T22:04:00"
   },
   {
      "text": "@Jane_Payplan Why? Why would you persist in half or more of your advice session with a client being data-gathering… https://t.co/OlOHjYtzMR",
      "post_date": "2019-06-05T21:59:00"
   },
   {
      "text": "@Jane_Payplan People certainly need to be confident their info is secure. And people won’t use a service if they do… https://t.co/256L2TPxCw",
      "post_date": "2019-06-05T21:46:00"
   },
   {
      "text": "RT @JoannMoretti: Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012 posit…",
      "post_date": "2019-06-05T21:42:00"
   },
   {
      "text": "#Hackers and scammers. In the digital age this non-stop thieving activity has become too sophisticated. #Security… https://t.co/hUnHT3gold",
      "post_date": "2019-06-05T21:40:00"
   },
   {
      "text": "European Regulators Brace For Big Tech Threat As Open Banking Beds In - PaymentsCompliance -… https://t.co/ODdZiQU612",
      "post_date": "2019-06-05T21:38:00"
   },
   {
      "text": "@Jane_Payplan @NedcabPaul You can use #OpenBanking to link to multiple accounts and it can be organised to report s… https://t.co/6omtdb4gmB",
      "post_date": "2019-06-05T21:24:00"
   },
   {
      "text": "Fintech @YapilyLtd raises $5.4M for Open Banking API\n#OpenBanking #Fintech #API #Investment\nhttps://t.co/a4ZhwwYx2m https://t.co/imwt5fSkKy",
      "post_date": "2019-06-05T21:20:00"
   },
   {
      "text": "Open banking is just a taste of what's to come - Finextra - https://t.co/UKxiGnW40I #openbanking #banking #digital",
      "post_date": "2019-06-05T21:18:00"
   },
   {
      "text": "And for budgeting during a debt solution - and to help, in the near future, with variable incomes. Likely to slash… https://t.co/oXO4vcriGN",
      "post_date": "2019-06-05T21:16:00"
   },
   {
      "text": "@OBE_Global Join the revolution! #OpenBanking #financialservices. #collaboration @MastercardEU @Equinix https://t.co/U5zCxsgI9S",
      "post_date": "2019-06-05T21:09:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T21:09:00"
   },
   {
      "text": "What is #OpenBanking and how could it enable #financialinclusion - latest episode of the @resp_finance podcast, wit… https://t.co/EWibuftBdT",
      "post_date": "2019-06-05T21:05:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T20:59:00"
   },
   {
      "text": "RT @ninamohanty: Two interesting #OpenBanking investment rounds, but pay attention to the WHO, not the number:\n- @TrueLayer raises $40m led…",
      "post_date": "2019-06-05T20:58:00"
   },
   {
      "text": "What is the right retail strategy for banking services in the digital era? Powered by APIs in an open banking envir… https://t.co/II9cDTclCw",
      "post_date": "2019-06-05T20:50:00"
   },
   {
      "text": "RT @SocieteGenerale: ⏰ Two days more of #Money2020 ! Meet Societe Generale's #OpenInnovation teams and fintechs, discover #OpenBanking serv…",
      "post_date": "2019-06-05T20:43:00"
   },
   {
      "text": "Tink secures strategic investment from PayPal - Fintech Futures - https://t.co/VuehJnRX6l #openbanking #banking #digital",
      "post_date": "2019-06-05T20:43:00"
   },
   {
      "text": "RT @FinastraFS: RT @thepower_50: Make sure to visit the @FinastraFS booth at #Money2020EU.\nMeanwhile, check out our interview w/@elirosner…",
      "post_date": "2019-06-05T20:38:00"
   },
   {
      "text": "World FinTech Report 2019: The Industry is Transitioning from Open Banking to “Open X” - Global Banking And Finance… https://t.co/SguJIU50uO",
      "post_date": "2019-06-05T20:33:00"
   },
   {
      "text": "RT @LouiseHBeaumont: \"#Money2020EU: Is #OpenBanking a complete fiasco?\"\n\nSummary of the panel I chaired with Imran Gulamhuseinwala Mark Har…",
      "post_date": "2019-06-05T20:31:00"
   },
   {
      "text": "RT @ConsorzioCBI: ...and even the second day is gone! 💪🏼✌🏼#M2020EU #money2020 #OpenBanking #CBIGlobe https://t.co/VV9XKZpX1t",
      "post_date": "2019-06-05T20:19:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T20:16:00"
   },
   {
      "text": "What is Open Banking? Jim Burnick is now on the stage #finteqc #OpenBanking #ecosystem #CustomerExperience https://t.co/3iMSf3HWMZ",
      "post_date": "2019-06-05T20:15:00"
   },
   {
      "text": "#OpenBanking: A Disruptive Threat? Or Competitive Opportunity?\n\nhttps://t.co/tDw5FHGaEL https://t.co/Is8xpi3NgZ",
      "post_date": "2019-06-05T20:00:00"
   },
   {
      "text": "RT @HanriverG: The 5 initiatives that will be carried out by the Indonesian  central bank will revolve the followin… https://t.co/yMvgY6MVXx",
      "post_date": "2019-06-05T20:00:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-05T20:00:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T19:55:00"
   },
   {
      "text": "TrueLayer scores $35 million from Tencent, Temasek and prior backers to expand its 'Open Banking network' in and ou… https://t.co/olFq85aKpu",
      "post_date": "2019-06-05T19:53:00"
   },
   {
      "text": "RT @LoharPrasanna: The industry is transitioning from #OpenBanking to #OpenX\n#Capgemini World #FinTech Report 2019\nhttps://t.co/LQ8neXesnz…",
      "post_date": "2019-06-05T19:49:00"
   },
   {
      "text": "#OpenBanking is a strategic opportunity for banks and a source of risk that needs to be carefully managed and mitig… https://t.co/M3oyDUvIHv",
      "post_date": "2019-06-05T19:42:00"
   },
   {
      "text": "RT @coccyTW: Pretty awesome to be in a meeting with @ThomasZink5 from @IDC Financial Insights, one of the companies I launched in 2006 whil…",
      "post_date": "2019-06-05T19:33:00"
   },
   {
      "text": "The 5 initiatives that will be carried out by the Indonesian  central bank will revolve the following key themes;… https://t.co/hjhaiBLN5W",
      "post_date": "2019-06-05T19:30:00"
   },
   {
      "text": "RT @Vocalink: Superb talks by David Rich, EVP, Vocalink Services and Jim Wadsworth, SVP, Open Banking at the annual Mastercard Innovation F…",
      "post_date": "2019-06-05T19:12:00"
   },
   {
      "text": "RT @LoharPrasanna: The industry is transitioning from #OpenBanking to #OpenX\n#Capgemini World #FinTech Report 2019\nhttps://t.co/LQ8neXesnz…",
      "post_date": "2019-06-05T19:02:00"
   },
   {
      "text": "RT @Pjotrww: Money20/20 Europe 2019 - Highlights Day 3 [Video] - see attached link\nhttps://t.co/XUpQFbTAgS… https://t.co/tA0SHdx68T",
      "post_date": "2019-06-05T18:51:00"
   },
   {
      "text": "Money20/20 Europe 2019 - Highlights Day 3 [Video] - see attached link\nhttps://t.co/InDtW89lOZ\n#blockchain… https://t.co/xKLZ43DW0F",
      "post_date": "2019-06-05T18:50:00"
   },
   {
      "text": "RT @Dentons: Join us at our Toronto office on June 11-12 for @MobeyForum’s #MobeyDay! This year’s theme will provide valuable insight into…",
      "post_date": "2019-06-05T18:46:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Tapping into the Future of Mobile Payments\n\nhttps://t.co/r40YsHpKEU\n\n#Innovation #Fintech #Banking #Retai…",
      "post_date": "2019-06-05T18:41:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Tapping into the Future of Mobile Payments\n\nhttps://t.co/r40YsHpKEU\n\n#Innovation #Fintech #Banking #Retai…",
      "post_date": "2019-06-05T18:40:00"
   },
   {
      "text": "Time to modernise consumer digital identity management. #ForgeRock is uniquely placed to help differentiate custome… https://t.co/K1YnJDwQSq",
      "post_date": "2019-06-05T18:18:00"
   },
   {
      "text": "RT @bottomlinetech: Are your financial institution &amp; business customers prepared for the challenges &amp; opportunities that #openbanking bring…",
      "post_date": "2019-06-05T18:18:00"
   },
   {
      "text": ".@PayPal becomes strategic investor in European #fintech firm @tink \n\nhttps://t.co/XJskDcPjbt via @YahooFinance… https://t.co/CqrzSswjr8",
      "post_date": "2019-06-05T18:15:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-05T18:11:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-05T18:10:00"
   },
   {
      "text": "RT @The_LHoFT: #OpenBanking requires an open mind about #Fintech and #payments \n\n\"More than simply offering customers more products, open b…",
      "post_date": "2019-06-05T18:01:00"
   },
   {
      "text": "The convergence of #realtimepayments and #openbanking is introducing complexity as well as opportunities into the p… https://t.co/b7iaODOD5f",
      "post_date": "2019-06-05T18:00:00"
   },
   {
      "text": "Contrasting 🇪🇺 #openbanking interoperability (PSD2) -- APIs bloom -- with a mandated API in the 🇬🇧, lowering coordi… https://t.co/w3FyQy2Opd",
      "post_date": "2019-06-05T17:47:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T17:37:00"
   },
   {
      "text": "RT @neirajones: #Fintech: @StarlingBank Partners with #Payments Platform #Tribe\nhttps://t.co/yji0eZ8laJ \n#OpenBanking #Banking #PSD2 \n@Trib…",
      "post_date": "2019-06-05T17:32:00"
   },
   {
      "text": "#Mastercard has unveiled a suite of #openbanking applications and services designed to help financial institutions… https://t.co/YRArwS74Fv",
      "post_date": "2019-06-05T17:32:00"
   },
   {
      "text": "Glad to hear a bit on #openbanking API developments -- and, by extension delaminated Account Information SP &amp; Payme… https://t.co/IHyWpg7j9g",
      "post_date": "2019-06-05T17:31:00"
   },
   {
      "text": "Open To Disruption: Q&amp;A With CaixaBank's Executive Director of Global Customer Experience Jordi Nicolau - Global Fi… https://t.co/kiu1g7Dcal",
      "post_date": "2019-06-05T17:28:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T17:24:00"
   },
   {
      "text": "RT @WFSULLIVAN3: . @ghanem_elias now sharing findings from #WFTR19 and future of #OpenBanking (#OpenX) at @capgemini booth J101 at #M2020EU…",
      "post_date": "2019-06-05T17:24:00"
   },
   {
      "text": "RT @fsimoneschi: It’s official!! I’m so proud of this team and how much we achieved in such a short amount of time! We’ll continue to work…",
      "post_date": "2019-06-05T17:13:00"
   },
   {
      "text": "RT @dsteingruberCH: . @tink, the European #OpenBanking  platform, announces @PayPal as a strategic investor. #Innovation #fintech #venturec…",
      "post_date": "2019-06-05T17:09:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T17:09:00"
   },
   {
      "text": "RT @hakan_eroglu_tw: The future of #OpenBanking is about #OpenData and #PlatformBanking. Thanks @dgwbirch for welcoming me on stage at Mone…",
      "post_date": "2019-06-05T17:09:00"
   },
   {
      "text": "RT @hakan_eroglu_tw: The future of #OpenBanking is about #OpenData and #PlatformBanking. Thanks @dgwbirch for welcoming me on stage at Mone…",
      "post_date": "2019-06-05T17:06:00"
   },
   {
      "text": "The #OpenBanking space is heating up. Within the past week, Tink announces $35M from Tencent/Connect, @TrueLayer ra… https://t.co/PgPeWnihFI",
      "post_date": "2019-06-05T17:04:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-05T17:02:00"
   },
   {
      "text": "Superb talks by David Rich, EVP, Vocalink Services and Jim Wadsworth, SVP, Open Banking at the annual Mastercard In… https://t.co/TLlwZNX6mU",
      "post_date": "2019-06-05T17:00:00"
   },
   {
      "text": "We investigate why #openbanking hasn't extended beyond basic APIs and embraced the #fintech community.… https://t.co/0uNna5okt4",
      "post_date": "2019-06-05T17:00:00"
   },
   {
      "text": "RT @FinastraFS: RT @pglyman: Love hearing @tranqy talk up conversational banking and open APIs to support the advancement of this tech @Fin…",
      "post_date": "2019-06-05T16:59:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T16:56:00"
   },
   {
      "text": "Mastercard rolls out Open Banking suite #Insurtech #Mastercard #OpenBanking #Fintech  https://t.co/QmETr2AhbR",
      "post_date": "2019-06-05T16:53:00"
   },
   {
      "text": "RT @joris_hensen: PSD2 is only the beginning for #openbanking and will evolve to an open data economy that empowers customers to control th…",
      "post_date": "2019-06-05T16:51:00"
   },
   {
      "text": "RT @FinMKTG: The evolution of open #banking #ecosystems:\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #da…",
      "post_date": "2019-06-05T16:44:00"
   },
   {
      "text": "China's Tencent leads $35m investment in London fintech start-up - Yahoo Finance - https://t.co/rN4QKAoPor #openbanking #banking #digital",
      "post_date": "2019-06-05T16:43:00"
   },
   {
      "text": "As seen on @THISDAYLIVE ! To read more on this click on https://t.co/d4Qnrw79Ju  #Openbanking #OpenbankingNigeria… https://t.co/0FNE1WzC7z",
      "post_date": "2019-06-05T16:30:00"
   },
   {
      "text": "RT @ghanem_elias: Banks + startups/BigTechs = ?\nOpen Banking may soon be leapfrogged by open experience\nOperation #OpenX\n\n#OpenBanking #M20…",
      "post_date": "2019-06-05T16:30:00"
   },
   {
      "text": "The countdown to our next #OpenBankingExcellence evening has begun. We will be discussing the state of #APIs and th… https://t.co/7UgMZbTBap",
      "post_date": "2019-06-05T16:29:00"
   },
   {
      "text": "Enjoyed participating the excellent panel discussion on the construct of #OpenBanking yesterday hosted by… https://t.co/D0YNaJnfsq",
      "post_date": "2019-06-05T16:28:00"
   },
   {
      "text": "RT @openbanking_ng: CBN prioritises Open Banking as Centric Gateway launch initiatives https://t.co/QKMZyyEpKK #Openbanking #OpenbankingNig…",
      "post_date": "2019-06-05T16:21:00"
   },
   {
      "text": "RT @Biz_Hack: The latest issue of Open Banking Expo Magazine is out now.\nRead it here:\nhttps://t.co/eSTkkfYL46\n\n#Banking #Finance #Business…",
      "post_date": "2019-06-05T16:20:00"
   },
   {
      "text": "RT @cjemichael: Check out my article (on p24) on how OBIE is helping banks and third parties through the PSD2 exemption process for #OpenBa…",
      "post_date": "2019-06-05T16:20:00"
   },
   {
      "text": ".@Mastercard has unveiled a suite of #openbanking applications and services designed to help financial institutions… https://t.co/8EIzy8DOn2",
      "post_date": "2019-06-05T16:15:00"
   },
   {
      "text": "PayPal becomes strategic investor in European fintech firm Tink - Yahoo Finance - https://t.co/03H7Vu10fF #openbanking #banking #digital",
      "post_date": "2019-06-05T16:13:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T16:03:00"
   },
   {
      "text": "\"...there are plenty of opportunities for traditional banks as well as newcomers. But now is the time to act.\"… https://t.co/4tc4qcksZF",
      "post_date": "2019-06-05T15:54:00"
   },
   {
      "text": "RT @TACD_Consumers: Are consumers in control of their financial data? Our panellists are discussing this at #TACDFORUM2019 #OpenBanking htt…",
      "post_date": "2019-06-05T15:49:00"
   },
   {
      "text": "RT @KVanderhoydonk: European financial institutions see Open Banking as the biggest current threat https://t.co/TPRLcaWZVo #business #oppor…",
      "post_date": "2019-06-05T15:46:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-05T15:36:00"
   },
   {
      "text": "RT @bottomlinetech: Are your financial institution &amp; business customers prepared for the challenges &amp; opportunities that #openbanking bring…",
      "post_date": "2019-06-05T15:33:00"
   },
   {
      "text": "#Openbanking has the potential to #revolutionise banking as @Spotify has the music industry! The ultimate aim - the… https://t.co/yebsTNSWqN",
      "post_date": "2019-06-05T15:33:00"
   },
   {
      "text": "Are your financial institution &amp; business customers prepared for the challenges &amp; opportunities that #openbanking b… https://t.co/0wWqZkkatu",
      "post_date": "2019-06-05T15:30:00"
   },
   {
      "text": "[#Disruption] New financial services marketplaces are now high-impact models\n\nhttps://t.co/YURjoDecIC\n\n#Innovation… https://t.co/t4eiNlnrDQ",
      "post_date": "2019-06-05T15:30:00"
   },
   {
      "text": "RT @MuleSoft: With the rise of #OpenBanking, banks can build internal &amp; external #API ecosystems to enhance the customer experience — learn…",
      "post_date": "2019-06-05T15:29:00"
   },
   {
      "text": "Money 20/20 Europe 2019: Is Open Banking a complete fiasco? https://t.co/xRidEdxjuv\n\n@dgwbirch @money2020… https://t.co/u4BQgoI0x1",
      "post_date": "2019-06-05T15:29:00"
   },
   {
      "text": "18 more #APIs! #travel #Kanji #blockchain #fishing #math #email #alerts #WebOfThings #openbanking… https://t.co/73UYRXrCLD",
      "post_date": "2019-06-05T15:29:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to underpin…",
      "post_date": "2019-06-05T15:26:00"
   },
   {
      "text": "Transition of Open Banking to Open X Report #Digital #openbanking #banking  https://t.co/bViO51zXPf",
      "post_date": "2019-06-05T15:26:00"
   },
   {
      "text": "Money 20/20 Europe 2019: Is #OpenBanking a complete fiasco? https://t.co/RWSw2N8JGr via @Finextra",
      "post_date": "2019-06-05T15:22:00"
   },
   {
      "text": "RT @cjemichael: Check out my article (on p24) on how OBIE is helping banks and third parties through the PSD2 exemption process for #OpenBa…",
      "post_date": "2019-06-05T15:18:00"
   },
   {
      "text": "RT @EquinixUK: Chairman of @FDATAglobal, @GavinLittlejohn discusses his top key critical success factors for #openbanking with @OBE_Global:…",
      "post_date": "2019-06-05T15:17:00"
   },
   {
      "text": "RT @Claire_Innes: 📯Three days of exciting announcements with @getyolt - just cant keep up! Awesome capture of the exact moment we announced…",
      "post_date": "2019-06-05T15:17:00"
   },
   {
      "text": "RT @cjemichael: Check out my article (on p24) on how OBIE is helping banks and third parties through the PSD2 exemption process for #OpenBa…",
      "post_date": "2019-06-05T15:14:00"
   },
   {
      "text": "RT @meniga: Great panel discussions on how #banks can leverage #data for commercial benefit in 2019!  Special thanks to @fredkelly @dh_habi…",
      "post_date": "2019-06-05T15:11:00"
   },
   {
      "text": "RT @fsimoneschi: It’s official!! I’m so proud of this team and how much we achieved in such a short amount of time! We’ll continue to work…",
      "post_date": "2019-06-05T15:07:00"
   },
   {
      "text": "📯Three days of exciting announcements with @getyolt - just cant keep up! Awesome capture of the exact moment we ann… https://t.co/Iqw80spQ6t",
      "post_date": "2019-06-05T15:04:00"
   },
   {
      "text": "#OpenBanking is a strategic opportunity for banks and a source of risk that needs to be carefully managed and mitig… https://t.co/uT0y4t2HO2",
      "post_date": "2019-06-05T15:00:00"
   },
   {
      "text": "NatWest came with an open banking solution that enables consumers to pay online merchants directly from their bank… https://t.co/ea0Eq2Bfxm",
      "post_date": "2019-06-05T15:00:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-05T14:56:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T14:53:00"
   },
   {
      "text": "RT @AmitBhute: Seems like both Mastercard and PayPal are trying to leverage #openbanking for account aggregation and PIS services https://t…",
      "post_date": "2019-06-05T14:52:00"
   },
   {
      "text": "RT @MastercardEU: Day 3 of @money2020 #M2020EU and we have another great line up of speakers talking about customer journeys in #payments,…",
      "post_date": "2019-06-05T14:49:00"
   },
   {
      "text": "RT @Biz_Hack: The latest issue of Open Banking Expo Magazine is out now.\nRead it here:\nhttps://t.co/eSTkkfYL46\n\n#Banking #Finance #Business…",
      "post_date": "2019-06-05T14:48:00"
   },
   {
      "text": "The latest issue of Open Banking Expo Magazine is out now.\nRead it here:\nhttps://t.co/eSTkkfYL46\n\n#Banking #Finance… https://t.co/eaPA6rebwn",
      "post_date": "2019-06-05T14:48:00"
   },
   {
      "text": "RT @HLPayments: .@NUAPAY commissions @censuswide survey showing 89% of merchants are ready for #OpenBanking https://t.co/9YptrCB2Gx",
      "post_date": "2019-06-05T14:42:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to underpin…",
      "post_date": "2019-06-05T14:39:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-05T14:32:00"
   },
   {
      "text": "RT @Ryan_EP: Great presentation from @FJRisseeuw on the @money2020 stage. Super proud the @FundingOptions team can announce we’ll be one of…",
      "post_date": "2019-06-05T14:30:00"
   },
   {
      "text": "RT @thepower_50: Make sure to visit the @FinastraFS booth at #Money2020EU.\nMeanwhile, check out our interview w/… https://t.co/5NOzrBIf4z",
      "post_date": "2019-06-05T14:30:00"
   },
   {
      "text": "Fintech news: UK fintech Yapily, which leverages the new Open Banking rules, raises $5.4m in seed funding… https://t.co/MLth8lSrRf",
      "post_date": "2019-06-05T14:30:00"
   },
   {
      "text": "How Open Banking Has Changed Financial Services So Far - \nhttps://t.co/qEUnEGT7Yk @forbes #fintech #openbanking #digitalbanking #finserv",
      "post_date": "2019-06-05T14:30:00"
   },
   {
      "text": "RT @coccyTW: Pretty awesome to be in a meeting with @ThomasZink5 from @IDC Financial Insights, one of the companies I launched in 2006 whil…",
      "post_date": "2019-06-05T14:29:00"
   },
   {
      "text": "RT @Epiphany_Srl: Last day at #Money2020 and so many visitors at our stand B74. #OpenBanking was the main topic on stage yesterday, and @sp…",
      "post_date": "2019-06-05T14:28:00"
   },
   {
      "text": "PayPal, Mastercard push open banking tech for PSD2 - PaymentsSource - https://t.co/90LTq3UVmg #openbanking #banking #digital",
      "post_date": "2019-06-05T14:28:00"
   },
   {
      "text": "RT @northzoneVC: Huge congrats to @fsimoneschi, Luca, @ShefaliRoy and the whole @TrueLayer team on closing your Series C. Fantastic achieve…",
      "post_date": "2019-06-05T14:26:00"
   },
   {
      "text": "RT @MuleSoft: With the rise of #OpenBanking, banks can build internal &amp; external #API ecosystems to enhance the customer experience — learn…",
      "post_date": "2019-06-05T14:25:00"
   },
   {
      "text": "RT @northzoneVC: Huge congrats to @fsimoneschi, Luca, @ShefaliRoy and the whole @TrueLayer team on closing your Series C. Fantastic achieve…",
      "post_date": "2019-06-05T14:24:00"
   },
   {
      "text": "Huge congrats to @fsimoneschi, Luca, @ShefaliRoy and the whole @TrueLayer team on closing your Series C. Fantastic… https://t.co/jBz9CmyUGN",
      "post_date": "2019-06-05T14:23:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-05T14:22:00"
   },
   {
      "text": "Now the next chapter begins! Looking forward to collaborating with the entire ecosystem to help make #openbanking w… https://t.co/JxLsQYssiq",
      "post_date": "2019-06-05T14:21:00"
   },
   {
      "text": "With the rise of #OpenBanking, banks can build internal &amp; external #API ecosystems to enhance the customer experien… https://t.co/zTBJlcsYMx",
      "post_date": "2019-06-05T14:20:00"
   },
   {
      "text": "And now the fun begins!!! @TrueLayer #OpenBanking #Payments #API https://t.co/FbXgz7u24P",
      "post_date": "2019-06-05T14:20:00"
   },
   {
      "text": "It’s official!! I’m so proud of this team and how much we achieved in such a short amount of time! We’ll continue t… https://t.co/CT8ke0gcvt",
      "post_date": "2019-06-05T14:16:00"
   },
   {
      "text": "Money20/20 Europe 2019: a bits and bobs round-up - Fintech Futures - https://t.co/XUamp0pzNA #openbanking #banking #digital",
      "post_date": "2019-06-05T14:13:00"
   },
   {
      "text": "With open banking plan, Brazil takes aim at big banks \n#Brazil\n#fintech\n#openbanking\n\nhttps://t.co/idzq59UNUF https://t.co/ubk5hBHBrA",
      "post_date": "2019-06-05T14:10:00"
   },
   {
      "text": "#OpenBanking may be moving slower than we thought, but the time to prepare is still now #FinTech #CDNTech… https://t.co/OOVQlJsbfB",
      "post_date": "2019-06-05T14:07:00"
   },
   {
      "text": "RT @meniga: Don't miss Meniga CEO &amp; Co-founder @georgl speak @money2020 starting at 9:35 am at the Transmutation Stage on how #banks can le…",
      "post_date": "2019-06-05T14:06:00"
   },
   {
      "text": "The next step in bringing #OpenBanking to businesses across Europe! #Money2020EU #fintech https://t.co/DlyAo3rp5j",
      "post_date": "2019-06-05T14:05:00"
   },
   {
      "text": "Transition of Open Banking to Open X: Report - BW Businessworld - https://t.co/A8Bd5qYe8h #openbanking #banking #digital",
      "post_date": "2019-06-05T13:58:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-05T13:47:00"
   },
   {
      "text": "\"We need to create those situations where consumers can get a better experience through convenience, while at the s… https://t.co/1KajJHNF4J",
      "post_date": "2019-06-05T13:45:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-05T13:44:00"
   },
   {
      "text": "Payments giant @Mastercard rolls out #OpenBanking suite designed to help financial institutions and third party pro… https://t.co/0RkrIiX8EH",
      "post_date": "2019-06-05T13:43:00"
   },
   {
      "text": "From #openbanking to \"Open X\".... New report from @Capgemini &amp; @Efma_news --&gt; World FinTech Report 2019:… https://t.co/gdCV9P7ipa",
      "post_date": "2019-06-05T13:42:00"
   },
   {
      "text": ".@NUAPAY commissions @censuswide survey showing 89% of merchants are ready for #OpenBanking https://t.co/9YptrCB2Gx",
      "post_date": "2019-06-05T13:42:00"
   },
   {
      "text": "RT @ninamohanty: Two interesting #OpenBanking investment rounds, but pay attention to the WHO, not the number:\n- @TrueLayer raises $40m led…",
      "post_date": "2019-06-05T13:40:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-05T13:40:00"
   },
   {
      "text": "RT @SIA_pressoffice: #PayCanSummit \"SIA experience in #instantpayments #OpenBanking and #blockchain can support the Canadian financial syst…",
      "post_date": "2019-06-05T13:38:00"
   },
   {
      "text": "Join us at our Toronto office on June 11-12 for @MobeyForum’s #MobeyDay! This year’s theme will provide valuable in… https://t.co/R78BZJjwXz",
      "post_date": "2019-06-05T13:34:00"
   },
   {
      "text": "This is becoming less of a contrary position and one of general acceptance. Key example being @Apple #applepaycash… https://t.co/m6foWQ611A",
      "post_date": "2019-06-05T13:34:00"
   },
   {
      "text": "RT @saltedge: Just in 2 weeks, we will be in the sunny city of #Barcelona for #BizzPay 7.0 organized by @GLCEurope. We are delighted to tak…",
      "post_date": "2019-06-05T13:34:00"
   },
   {
      "text": "European financial institutions see Open Banking as the biggest current threat https://t.co/TPRLcaWZVo #business #opportunity #openbanking",
      "post_date": "2019-06-05T13:32:00"
   },
   {
      "text": "RT @MastercardEU: Jason Lane #Mastercard discusses #OpenBanking @m2020 @M2020EU @FT https://t.co/PvLrCFMRMk",
      "post_date": "2019-06-05T13:29:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to underpin…",
      "post_date": "2019-06-05T13:29:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-05T13:29:00"
   },
   {
      "text": "RT @MastercardEU: \"Banks also have to overcome implementation and delivery challenges,\" says Jason Lane, EVP, Market Development, Europe, #…",
      "post_date": "2019-06-05T13:29:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-05T13:28:00"
   },
   {
      "text": "Find out why exactly #OpenBanking can be considered as #SME #banking growth lever\n\nJoin Pascale Devriese… https://t.co/9vmHuSsTVu",
      "post_date": "2019-06-05T13:27:00"
   },
   {
      "text": "Just in 2 weeks, we will be in the sunny city of #Barcelona for #BizzPay 7.0 organized by @GLCEurope. We are deligh… https://t.co/6cYeuogUMp",
      "post_date": "2019-06-05T13:27:00"
   },
   {
      "text": "RT @MastercardEU: Day 3 of @money2020 #M2020EU and we have another great line up of speakers talking about customer journeys in #payments,…",
      "post_date": "2019-06-05T13:26:00"
   },
   {
      "text": "RT @11FSPulse: Did you catch Ep. 10 of #Homescreen!?\n\nJim spoke to @iwoca's Product Lead @LaraGilman about all things business loans, their…",
      "post_date": "2019-06-05T13:25:00"
   },
   {
      "text": "RT @MastercardEU: We're looking forward to talking #OpenBanking with Gilberto Caldert @Marthalanefox on the Main Stage at 12.00 PM today @m…",
      "post_date": "2019-06-05T13:25:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-05T13:25:00"
   },
   {
      "text": "RT @MastercardEU: Jason Lane #Mastercard discusses #OpenBanking @m2020 @M2020EU @FT https://t.co/PvLrCFMRMk",
      "post_date": "2019-06-05T13:23:00"
   },
   {
      "text": "RT @MastercardUKbiz: An amazing stage at @money2020 for Mastercard International President Gilberto Caldert to talk about #openbanking and…",
      "post_date": "2019-06-05T13:19:00"
   },
   {
      "text": "RT @MastercardEU: Jason Lane #Mastercard discusses #OpenBanking @m2020 @M2020EU @FT https://t.co/PvLrCFMRMk",
      "post_date": "2019-06-05T13:18:00"
   },
   {
      "text": "RT @ftek_33: Well played #money2020! See you next year again. @FintecHQ #openbanking https://t.co/CI9ZAmaBS8",
      "post_date": "2019-06-05T13:17:00"
   },
   {
      "text": "Two weeks ago our CEO Carlos Figueredo was in Madrid to take part in a round table discussion for an article about… https://t.co/Jz1F9bBCoT",
      "post_date": "2019-06-05T13:16:00"
   },
   {
      "text": "RT @cjemichael: Most people I know have twice this number of identities - it’s a real problem but also a massive opportunity - the stakes a…",
      "post_date": "2019-06-05T13:13:00"
   },
   {
      "text": "As More Licenses Are Approved, And Challenger Banks Reduce Credit Requirements, North East Adviser Calls For Cautio… https://t.co/Ewl9uGI59O",
      "post_date": "2019-06-05T13:13:00"
   },
   {
      "text": "DIRECT BANK MARKET – GLOBAL INDUSTRY ANALYSIS, SIZE, SHARE, GROWTH, TRENDS, OPPORTUNITIES AND FORECAST 2019 – 2024… https://t.co/oiRIGOajKf",
      "post_date": "2019-06-05T13:13:00"
   },
   {
      "text": "UK competition watchdog probes Charter Court, OneSavings merger - Nasdaq - https://t.co/ff4wQblowL #openbanking #banking #digital",
      "post_date": "2019-06-05T13:13:00"
   },
   {
      "text": "ECB Policymaker Calls Bank Consolidation ‘Desirable’ - https://t.co/so093EXvnj - https://t.co/2LJlJJYXGP #openbanking #banking #digital",
      "post_date": "2019-06-05T13:13:00"
   },
   {
      "text": "RT @LouiseHBeaumont: VIDEO PANEL '#OpenBanking – meeting the needs of the consumer in a new era of #banking'\n\nWith @AccountScore @monzo @UK…",
      "post_date": "2019-06-05T13:11:00"
   },
   {
      "text": "Why Your Test Automation Is Failing - https://t.co/LQsYVca5ZS https://t.co/Dy96AU6iPv \n#DevOps #Cloud #Itoa… https://t.co/aj5x1bpxHt",
      "post_date": "2019-06-05T13:10:00"
   },
   {
      "text": "RT @Capgemini: Join @WFSULLIVAN3, @JimMarous, @leimer,  @Visible_Banking,  @GhelaBoskovich, @jblefevre60, @psb_dc,  @ccalmeja,  @MeganCaywo…",
      "post_date": "2019-06-05T13:05:00"
   },
   {
      "text": "RT @Capgemini: Join @WFSULLIVAN3, @JimMarous, @leimer,  @Visible_Banking,  @GhelaBoskovich, @jblefevre60, @psb_dc,  @ccalmeja,  @MeganCaywo…",
      "post_date": "2019-06-05T13:04:00"
   },
   {
      "text": "How the big banks have maximised the Open Banking opportunity - Global Banking And Finance Review -… https://t.co/8D2KhfZLiq",
      "post_date": "2019-06-05T12:58:00"
   },
   {
      "text": "Jason Lane #Mastercard discusses #OpenBanking @m2020 @M2020EU @FT https://t.co/PvLrCFMRMk",
      "post_date": "2019-06-05T12:47:00"
   },
   {
      "text": "It was a pleasure meeting you all at this year's @Money2020. Already looking forward to next year! #fintech #appsec… https://t.co/HbSQZmCMAg",
      "post_date": "2019-06-05T12:45:00"
   },
   {
      "text": "RT @ieDigitalFS: ‘The future of open banking...the success will be platform banking where banks will have to collaborate closely.’ #m2020eu…",
      "post_date": "2019-06-05T12:33:00"
   },
   {
      "text": "RT @coccyTW: Pretty awesome to be in a meeting with @ThomasZink5 from @IDC Financial Insights, one of the companies I launched in 2006 whil…",
      "post_date": "2019-06-05T12:33:00"
   },
   {
      "text": "🙌 Big shout-out to @ABNAMRO for sponsoring #APITheDocs Amsterdam! 🙌\n#OpenBanking #BeyondBanking #APIs #PSD2 \n\nWant… https://t.co/aYS4CC0Jmj",
      "post_date": "2019-06-05T12:32:00"
   },
   {
      "text": "RT @coccyTW: Pretty awesome to be in a meeting with @ThomasZink5 from @IDC Financial Insights, one of the companies I launched in 2006 whil…",
      "post_date": "2019-06-05T12:32:00"
   },
   {
      "text": "European financial institutions see Open Banking as the biggest current threat https://t.co/Zah7HlrTsI #business… https://t.co/zp5BOpU4b5",
      "post_date": "2019-06-05T12:32:00"
   },
   {
      "text": "RT @LoharPrasanna: The industry is transitioning from #OpenBanking to #OpenX\n#Capgemini World #FinTech Report 2019\nhttps://t.co/LQ8neXesnz…",
      "post_date": "2019-06-05T12:29:00"
   },
   {
      "text": "Tencent Leads Funding For Open Banking Startup TrueLayer - https://t.co/so093EXvnj - https://t.co/VmrsmAIr5W #openbanking #banking #digital",
      "post_date": "2019-06-05T12:18:00"
   },
   {
      "text": "RT @paymentcomp: To remain relevant within the new ecosystem, banks should start thinking beyond compliance &amp; incorporate #openbanking in t…",
      "post_date": "2019-06-05T12:13:00"
   },
   {
      "text": "RT @FabrickPlatform: Last day to visit our stand K62 at @money2020 Europe.\nWatch the video and join us! \n\n#M2020EU #openbanking  \n\n🎥 https:…",
      "post_date": "2019-06-05T12:13:00"
   },
   {
      "text": "Old Dominion Freight Line Provides Update for Second-Quarter 2019 - Global Banking And Finance Review -… https://t.co/X7pjQMRqe0",
      "post_date": "2019-06-05T12:13:00"
   },
   {
      "text": "Global Survey Confirms Digitalization Tops Chief Procurement Officers' Agendas - Global Banking And Finance Review… https://t.co/lbu7aSSonz",
      "post_date": "2019-06-05T12:13:00"
   },
   {
      "text": "ScoMo goes through the looking glass at Threadneedle Street - The Australian Financial Review -… https://t.co/OEFChF1mel",
      "post_date": "2019-06-05T12:13:00"
   },
   {
      "text": "Modi 2.0 gives us confidence both as allocator of capital &amp; investor: David Solomon, Goldman Sachs - Economic Times… https://t.co/Nge12q9e9Y",
      "post_date": "2019-06-05T12:13:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T12:11:00"
   },
   {
      "text": "RT @LoharPrasanna: The industry is transitioning from #OpenBanking to #OpenX\n#Capgemini World #FinTech Report 2019\nhttps://t.co/LQ8neXesnz…",
      "post_date": "2019-06-05T12:11:00"
   },
   {
      "text": "Mastercard rolls out Open Banking suite\nhttps://t.co/jNC4xXRpLl #OpenBanking #bankingtech #Banking #Finance",
      "post_date": "2019-06-05T12:05:00"
   },
   {
      "text": "From #Money2020Europe \n\nMastercard’s Wadsworth: Banks need time to fit into Open Banking future… https://t.co/CJPkILPxku",
      "post_date": "2019-06-05T12:05:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-05T12:04:00"
   },
   {
      "text": "Seems like both Mastercard and PayPal are trying to leverage #openbanking for account aggregation and PIS services https://t.co/Fm8IwIbZwW",
      "post_date": "2019-06-05T12:04:00"
   },
   {
      "text": "Check out my article (on p24) on how OBIE is helping banks and third parties through the PSD2 exemption process for… https://t.co/WTmeqGYcPe",
      "post_date": "2019-06-05T12:02:00"
   },
   {
      "text": "To remain relevant within the new ecosystem, banks should start thinking beyond compliance &amp; incorporate… https://t.co/kB5jJzXBSx",
      "post_date": "2019-06-05T12:01:00"
   },
   {
      "text": "#OpenBanking platform @tink has announced that online payments giant @PayPal is joining them as a strategic investo… https://t.co/aO0VsAvYM3",
      "post_date": "2019-06-05T12:00:00"
   },
   {
      "text": "#OpenBanking - To be or not to be? #keynote by our CEO @simsysims at #Arabnet_Beirut on June 12th #Fintech stage… https://t.co/O6v3WPxlHi",
      "post_date": "2019-06-05T12:00:00"
   },
   {
      "text": "[#Disruption] How the payments function can adapt for a digital future\n\nhttps://t.co/SgSUvcnulp\n\n#Innovation… https://t.co/s9wbDWT3Ko",
      "post_date": "2019-06-05T12:00:00"
   },
   {
      "text": "RT @tink: Big news today: @PayPal joins the Tink family! Couldn’t be more excited to announce that the fintech giant is a new investor and…",
      "post_date": "2019-06-05T11:59:00"
   },
   {
      "text": "An interesting article on @Irish_TechNews looking at #fintech and #OpenBanking https://t.co/YHyJwkMoJy",
      "post_date": "2019-06-05T11:57:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Open X is coming. Are Banks and FinTechs ready?\n\nhttps://t.co/QsTN4Jj3TB\n\n#Innovation #Fintech #Banking #…",
      "post_date": "2019-06-05T11:57:00"
   },
   {
      "text": "Last day to visit our stand K62 at @money2020 Europe.\nWatch the video and join us! \n\n#M2020EU #openbanking  \n\n🎥… https://t.co/BHBfzWmNum",
      "post_date": "2019-06-05T11:56:00"
   },
   {
      "text": "ThoughtWorks: Monetising Open Banking  by @thoughtworks #financialservices #openbanking https://t.co/Je0gfmSkrE via @SlideShare",
      "post_date": "2019-06-05T11:54:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Open X is coming. Are Banks and FinTechs ready?\n\nhttps://t.co/QsTN4Jj3TB\n\n#Innovation #Fintech #Banking #…",
      "post_date": "2019-06-05T11:53:00"
   },
   {
      "text": "RT @stratorob: Research Finds 89% of Merchants are Primed for #OpenBanking https://t.co/9kRhsha0B9\n\n@RAlexJimenez @DeepLearn007 @antgrasso…",
      "post_date": "2019-06-05T11:49:00"
   },
   {
      "text": "RT @Capgemini: Join @WFSULLIVAN3, @JimMarous, @leimer,  @Visible_Banking,  @GhelaBoskovich, @jblefevre60, @psb_dc,  @ccalmeja,  @MeganCaywo…",
      "post_date": "2019-06-05T11:48:00"
   },
   {
      "text": "RT @ghanem_elias: Join the discussion about #WFTR19 @money2020 booth #J101 \n\n#M2020EU #OpenBanking #OpenX \n\n@WFSULLIVAN3 @Capgemini_Bnkg @C…",
      "post_date": "2019-06-05T11:48:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T11:48:00"
   },
   {
      "text": "Join the discussion about #WFTR19 @money2020 booth #J101 \n\n#M2020EU #OpenBanking #OpenX \n\n@WFSULLIVAN3… https://t.co/zhFFSqvD9s",
      "post_date": "2019-06-05T11:47:00"
   },
   {
      "text": "Research Finds 89% of Merchants are Primed for #OpenBanking | The #Fintech Times https://t.co/BtmdG1KAgg https://t.co/oAlWwZDCrU",
      "post_date": "2019-06-05T11:44:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Open X is coming. Are Banks and FinTechs ready?\n\nhttps://t.co/QsTN4Jj3TB\n\n#Innovation #Fintech #Banking #…",
      "post_date": "2019-06-05T11:43:00"
   },
   {
      "text": "RT @pglyman: Love hearing @tranqy talk up conversational banking and open APIs to support the advancement of this t… https://t.co/zwmbeBAoFw",
      "post_date": "2019-06-05T11:42:00"
   },
   {
      "text": "#OpenBanking: @Mastercard's Pay by Bank App Now Allows Users to Buy Goods Through Their Own #Banking Apps Without P… https://t.co/NJeiJyO2hk",
      "post_date": "2019-06-05T11:40:00"
   },
   {
      "text": "RT @FinMKTG: The evolution of open #banking #ecosystems:\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #da…",
      "post_date": "2019-06-05T11:39:00"
   },
   {
      "text": "RT @WFSULLIVAN3: . @ghanem_elias now sharing findings from #WFTR19 and future of #OpenBanking (#OpenX) at @capgemini booth J101 at #M2020EU…",
      "post_date": "2019-06-05T11:38:00"
   },
   {
      "text": ". @ghanem_elias now sharing findings from #WFTR19 and future of #OpenBanking (#OpenX) at @capgemini booth J101 at… https://t.co/QtxQ4XZhYb",
      "post_date": "2019-06-05T11:38:00"
   },
   {
      "text": "Ireland's Priviti and Aussie fintech Accurassi partner for Open Banking - Finextra - https://t.co/qU90gLvaGS #openbanking #banking #digital",
      "post_date": "2019-06-05T11:38:00"
   },
   {
      "text": "Well played #money2020! See you next year again. @FintecHQ #openbanking https://t.co/CI9ZAmaBS8",
      "post_date": "2019-06-05T11:37:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-05T11:36:00"
   },
   {
      "text": "Pretty awesome to be in a meeting with @ThomasZink5 from @IDC Financial Insights, one of the companies I launched i… https://t.co/nn8WU35K3p",
      "post_date": "2019-06-05T11:36:00"
   },
   {
      "text": "RT @ghanem_elias: Learn the key findings of #WFTR19 by @Capgemini_Bnkg  \n\nJoin @WFSULLIVAN3 and me for the discussion @money2020 booth #J10…",
      "post_date": "2019-06-05T11:32:00"
   },
   {
      "text": "RT @ghanem_elias: Banks + startups/BigTechs = ?\nOpen Banking may soon be leapfrogged by open experience\nOperation #OpenX\n\n#OpenBanking #M20…",
      "post_date": "2019-06-05T11:32:00"
   },
   {
      "text": "RT @Chakray_com: [#OpenBanking guide] Find out how #APIs are transforming the banking sector, and how it can benefit you. Download here: ht…",
      "post_date": "2019-06-05T11:29:00"
   },
   {
      "text": "RT @FintechSIN: Over 80% of banks in #APAC have invested in #OpenBanking. Nuggets of info like this and more at @Accenture's latest report:…",
      "post_date": "2019-06-05T11:28:00"
   },
   {
      "text": "RT @FintechSIN: . @Temasek and Tencent to Invest US$35 Million in @TrueLayer https://t.co/CSOcA7iSgr #fintech #funding #openbanking #financ…",
      "post_date": "2019-06-05T11:28:00"
   },
   {
      "text": "The evolution of open #banking #ecosystems:\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom c… https://t.co/A5X9G4H05s",
      "post_date": "2019-06-05T11:27:00"
   },
   {
      "text": "RT @OBE_Global: It's great to see @MastercardEU shape a common #OpenBanking rule book to \"underpin, enable and safeguard greater choice of…",
      "post_date": "2019-06-05T11:20:00"
   },
   {
      "text": "RT @frankrhmueller: #OpenBanking &amp; #Identity: In the 25th-anniversary episode of #PayTechTalk I had the great honor of talking to none othe…",
      "post_date": "2019-06-05T11:18:00"
   },
   {
      "text": "RT @Chakray_com: [#OpenBanking guide] Find out how #APIs are transforming the banking sector, and how it can benefit you. Download here: ht…",
      "post_date": "2019-06-05T11:16:00"
   },
   {
      "text": "[#OpenBanking guide] Find out how #APIs are transforming the banking sector, and how it can benefit you. Download h… https://t.co/HnjqdIbU36",
      "post_date": "2019-06-05T11:15:00"
   },
   {
      "text": "The industry is transitioning from #OpenBanking to #OpenX\n#Capgemini World #FinTech Report 2019… https://t.co/GlmZgPwo67",
      "post_date": "2019-06-05T11:13:00"
   },
   {
      "text": "RT @FabrickPlatform: #Fabrick turns one today! \nWe are celebrating during Money 20/20 Europe presenting much news but ... there are as many…",
      "post_date": "2019-06-05T11:08:00"
   },
   {
      "text": "RT @ghanem_elias: Learn the key findings of #WFTR19 by @Capgemini_Bnkg  \n\nJoin @WFSULLIVAN3 and me for the discussion @money2020 booth #J10…",
      "post_date": "2019-06-05T11:05:00"
   },
   {
      "text": "Learn the key findings of #WFTR19 by @Capgemini_Bnkg  \n\nJoin @WFSULLIVAN3 and me for the discussion @money2020 boot… https://t.co/N5ByjDoQ9Z",
      "post_date": "2019-06-05T11:03:00"
   },
   {
      "text": "Pleased to join the #openbanking #psd2 debate at @GoldmanSachs financial congress. For banks It’s time to change th… https://t.co/vfouSWPICk",
      "post_date": "2019-06-05T11:03:00"
   },
   {
      "text": "Competition watchdog to probe £1.6bn One Savings Bank and Charter Court merger - City A.M. -… https://t.co/btku8etgOH",
      "post_date": "2019-06-05T11:03:00"
   },
   {
      "text": "Equinix is pleased to be hosting the London #OpenBanking meet-up on 20 June, with the @OBE_Global. This months' hot… https://t.co/j6PgELeS4U",
      "post_date": "2019-06-05T11:01:00"
   },
   {
      "text": "SEEBURGER at #EBAday, learn how a modern payments integration infrastructure can help consolidate payments and rela… https://t.co/JH5Bi2LjWs",
      "post_date": "2019-06-05T11:00:00"
   },
   {
      "text": "#Trends2019: With #OpenBanking gathering momentum, expect to see third party providers of #AR, #VR and #MR solution… https://t.co/xppRUbw5Eu",
      "post_date": "2019-06-05T11:00:00"
   },
   {
      "text": "RT @WFSULLIVAN3: .@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to Experien…",
      "post_date": "2019-06-05T10:59:00"
   },
   {
      "text": "RT @LouiseHBeaumont: \"#Money2020EU: Is #OpenBanking a complete fiasco?\"\n\nSummary of the panel I chaired with Imran Gulamhuseinwala Mark Har…",
      "post_date": "2019-06-05T10:59:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-05T10:58:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-05T10:53:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-05T10:47:00"
   },
   {
      "text": "RT @SundaysInHell: #openbanking #payments #digitalidentity thread - @apple have announced a privacy-focussed authentication service, so use…",
      "post_date": "2019-06-05T10:45:00"
   },
   {
      "text": "#openbanking to watch out for https://t.co/IXe1DqLCxR",
      "post_date": "2019-06-05T10:45:00"
   },
   {
      "text": "RT @MastercardUKbiz: An amazing stage at @money2020 for Mastercard International President Gilberto Caldert to talk about #openbanking and…",
      "post_date": "2019-06-05T10:43:00"
   },
   {
      "text": "RT @pymnts https://t.co/nMR4ehpn8U .@Mastercard takes PYMNTS inside the launch of its #OpenBanking platform:",
      "post_date": "2019-06-05T10:40:00"
   },
   {
      "text": "RT @Epiphany_Srl: Last day at #Money2020 and so many visitors at our stand B74. #OpenBanking was the main topic on stage yesterday, and @sp…",
      "post_date": "2019-06-05T10:39:00"
   },
   {
      "text": "RT @money2020: “Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consulting service…",
      "post_date": "2019-06-05T10:39:00"
   },
   {
      "text": "“Yesterday we launched new solutions designed to …connect … protect …  [and] resolve… on our #openbanking consultin… https://t.co/ksMUl63fCe",
      "post_date": "2019-06-05T10:33:00"
   },
   {
      "text": "RT @habito: Thanks for having us! Great panel discussions on how #banks can leverage #data for commercial benefit #fintech #openbanking #mo…",
      "post_date": "2019-06-05T10:32:00"
   },
   {
      "text": "RT @MastercardUKbiz: An amazing stage at @money2020 for Mastercard International President Gilberto Caldert to talk about #openbanking and…",
      "post_date": "2019-06-05T10:32:00"
   },
   {
      "text": ".@Mastercard takes PYMNTS inside the launch of its #OpenBanking platform: https://t.co/i3iBpfx8cD",
      "post_date": "2019-06-05T10:30:00"
   },
   {
      "text": "Chairman of @FDATAglobal, @GavinLittlejohn discusses his top key critical success factors for #openbanking with… https://t.co/j5cukmX7WO",
      "post_date": "2019-06-05T10:30:00"
   },
   {
      "text": "RT @MastercardUKbiz: An amazing stage at @money2020 for Mastercard International President Gilberto Caldert to talk about #openbanking and…",
      "post_date": "2019-06-05T10:29:00"
   },
   {
      "text": "RT @wrappcorp: We’re you there? Great discussion about #banks and the potential that lies in #leveraging #data for commercial use and of co…",
      "post_date": "2019-06-05T10:28:00"
   },
   {
      "text": "An amazing stage at @money2020 for Mastercard International President Gilberto Caldert to talk about #openbanking a… https://t.co/gXoFtkipk1",
      "post_date": "2019-06-05T10:25:00"
   },
   {
      "text": "RT @wrappcorp: We’re you there? Great discussion about #banks and the potential that lies in #leveraging #data for commercial use and of co…",
      "post_date": "2019-06-05T10:24:00"
   },
   {
      "text": "Single Connection to the #OpenBanking functionality and #realtime verification of TPP reg status! #Mastercard https://t.co/6V9cvPQe3Y",
      "post_date": "2019-06-05T10:24:00"
   },
   {
      "text": "UK-based #OpenBanking #fintech @TrueLayer has gained $35 million in investment #funding. \n\nHuge congratulations to… https://t.co/taGMA2wytf",
      "post_date": "2019-06-05T10:22:00"
   },
   {
      "text": "@marthalanefox @m2020EU on the topic of #OpenBanking with Gilberto Caldert, #Mastercard: \"We need to help build a b… https://t.co/ioZB20dASe",
      "post_date": "2019-06-05T10:22:00"
   },
   {
      "text": "Awareness doesn’t always drive acceptance \nWould you be happy for companies to share your information in this way,… https://t.co/GNE5rX2FIX",
      "post_date": "2019-06-05T10:22:00"
   },
   {
      "text": "RT @MastercardEU: We're looking forward to talking #OpenBanking with Gilberto Caldert @Marthalanefox on the Main Stage at 12.00 PM today @m…",
      "post_date": "2019-06-05T10:20:00"
   },
   {
      "text": "RT @Epiphany_Srl: Last day at #Money2020 and so many visitors at our stand B74. #OpenBanking was the main topic on stage yesterday, and @sp…",
      "post_date": "2019-06-05T10:19:00"
   },
   {
      "text": "RT @OBE_Global: It's great to see @MastercardEU shape a common #OpenBanking rule book to \"underpin, enable and safeguard greater choice of…",
      "post_date": "2019-06-05T10:19:00"
   },
   {
      "text": "RT @neirajones: #Payments: @Mastercard Launches #OpenBanking #API Platform 😎⠀\nhttps://t.co/G6vbhvJ11V ⠀\n#fintech #regtech #infosec ⠀\n@jimwa…",
      "post_date": "2019-06-05T10:19:00"
   },
   {
      "text": "We’re you there? Great discussion about #banks and the potential that lies in #leveraging #data for commercial use… https://t.co/OOLEwTrxoE",
      "post_date": "2019-06-05T10:18:00"
   },
   {
      "text": "It's great to see @MastercardEU shape a common #OpenBanking rule book to \"underpin, enable and safeguard greater ch… https://t.co/MhoEbdZ6kK",
      "post_date": "2019-06-05T10:17:00"
   },
   {
      "text": "Thanks for having us! Great panel discussions on how #banks can leverage #data for commercial benefit #fintech… https://t.co/Ik1RKKpz5F",
      "post_date": "2019-06-05T10:16:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T10:15:00"
   },
   {
      "text": "RT @Epiphany_Srl: Last day at #Money2020 and so many visitors at our stand B74. #OpenBanking was the main topic on stage yesterday, and @sp…",
      "post_date": "2019-06-05T10:13:00"
   },
   {
      "text": "TrueLayer gains $35 million investment - Fintech Futures - https://t.co/ABmsdsA8n1 #openbanking #banking #digital",
      "post_date": "2019-06-05T10:13:00"
   },
   {
      "text": "RT @neirajones: #Payments: @Mastercard Launches #OpenBanking #API Platform 😎⠀\nhttps://t.co/G6vbhvJ11V ⠀\n#fintech #regtech #infosec ⠀\n@jimwa…",
      "post_date": "2019-06-05T10:11:00"
   },
   {
      "text": "RT @The_LHoFT: #OpenBanking requires an open mind about #Fintech and #payments \n\n\"More than simply offering customers more products, open b…",
      "post_date": "2019-06-05T10:11:00"
   },
   {
      "text": "RT @creditkudos: Day 3 of #money2020eu is off to a great start with our CEO @fredkelly joining @dh_habito @georgl @fsimoneschi and @SanzSai…",
      "post_date": "2019-06-05T10:10:00"
   },
   {
      "text": "Open Banking:The future of banking https://t.co/s2i1XEPU0h #future #openbanking #banking",
      "post_date": "2019-06-05T10:10:00"
   },
   {
      "text": "Last day at #Money2020 and so many visitors at our stand B74. #OpenBanking was the main topic on stage yesterday, a… https://t.co/uSo4iZ8KDo",
      "post_date": "2019-06-05T10:09:00"
   },
   {
      "text": "RT @SundaysInHell: #openbanking #payments #digitalidentity thread - @apple have announced a privacy-focussed authentication service, so use…",
      "post_date": "2019-06-05T10:07:00"
   },
   {
      "text": "RT @ghanem_elias: Happy to present @Raisin_EN’s @davidjmaireles with Advanced ScaleUp trophy by #ScaleUpQualification \n\nDriving #AppliedInn…",
      "post_date": "2019-06-05T10:06:00"
   },
   {
      "text": "IAM Platform Curated Retweet:\n\nVia: https://t.co/kHpNSTWCQH\n\nBanking is essential, but what about banks? by ghanem_… https://t.co/0B9m7QPI7v",
      "post_date": "2019-06-05T10:05:00"
   },
   {
      "text": "RT @MastercardEU: We're looking forward to talking #OpenBanking with Gilberto Caldert @Marthalanefox on the Main Stage at 12.00 PM today @m…",
      "post_date": "2019-06-05T10:05:00"
   },
   {
      "text": "RT @WFSULLIVAN3: .@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to Experien…",
      "post_date": "2019-06-05T10:04:00"
   },
   {
      "text": "#OpenBanking: @Mastercard's Pay by Bank App Now Allows Users to Buy Goods Through Their Own #Banking Apps Without P… https://t.co/w2WjWtUVS7",
      "post_date": "2019-06-05T10:03:00"
   },
   {
      "text": "#Payments: @Mastercard Launches #OpenBanking #API Platform 😎⠀\nhttps://t.co/G6vbhvJ11V ⠀\n#fintech #regtech #infosec… https://t.co/pdsfFvA4rR",
      "post_date": "2019-06-05T10:03:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T10:02:00"
   },
   {
      "text": "Temasek and Tencent to Invest US$35 Million in UK Open Banking Startup #Banking #openbanking #digital  https://t.co/6ZI5OlaiJq",
      "post_date": "2019-06-05T10:01:00"
   },
   {
      "text": "RT @MastercardEU: We're looking forward to talking #OpenBanking with Gilberto Caldert @Marthalanefox on the Main Stage at 12.00 PM today @m…",
      "post_date": "2019-06-05T09:56:00"
   },
   {
      "text": "RT @meniga: Great panel discussions on how #banks can leverage #data for commercial benefit in 2019!  Special thanks to @fredkelly @dh_habi…",
      "post_date": "2019-06-05T09:53:00"
   },
   {
      "text": "Insight: @cjemichael, Head of Technology, Open Banking Implementation Entity, on the latest regulation… https://t.co/ffGvadaGQX",
      "post_date": "2019-06-05T09:51:00"
   },
   {
      "text": "RT @ForgeRock: Replay ⏪ our #openbanking expert Nick Caley (@xplicitconsent) joined @Accenture's Hakan Eroglu last week to discuss how #PSD…",
      "post_date": "2019-06-05T09:51:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-05T09:48:00"
   },
   {
      "text": "RT @SocieteGenerale: Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services https://t…",
      "post_date": "2019-06-05T09:47:00"
   },
   {
      "text": "We're looking forward to talking #OpenBanking with Gilberto Caldert @Marthalanefox on the Main Stage at 12.00 PM to… https://t.co/0mEVLkjmc6",
      "post_date": "2019-06-05T09:47:00"
   },
   {
      "text": "RT @Global_Kinetic: Digital banking now part of everyday  life in Europe https://t.co/yHAPVjI8bZ #digitalbanking #fintech #Payments #bankin…",
      "post_date": "2019-06-05T09:44:00"
   },
   {
      "text": "At #Money2020EU today, we're delighted to announce our partnership with #fintech Accurassi as Australia prepares fo… https://t.co/IiPeEfaJiY",
      "post_date": "2019-06-05T09:44:00"
   },
   {
      "text": "Societe Generale at @Money2020 (N40) to launch the group #OpenInnovation &amp; #OpenBanking platform of services… https://t.co/ft1W7kQCpM",
      "post_date": "2019-06-05T09:36:00"
   },
   {
      "text": "RT @cjemichael: Most people I know have twice this number of identities - it’s a real problem but also a massive opportunity - the stakes a…",
      "post_date": "2019-06-05T09:35:00"
   },
   {
      "text": "UK #Startup #Fintech @TrueLayer Just Won Funding from China's #Tencent &amp; Singaporean Wealth Fund @Temasek… https://t.co/493OH9cXAP",
      "post_date": "2019-06-05T09:35:00"
   },
   {
      "text": "RT @meniga: Great panel discussions on how #banks can leverage #data for commercial benefit in 2019!  Special thanks to @fredkelly @dh_habi…",
      "post_date": "2019-06-05T09:30:00"
   },
   {
      "text": "RT @meniga: Don't miss Meniga CEO &amp; Co-founder @georgl speak @money2020 starting at 9:35 am at the Transmutation Stage on how #banks can le…",
      "post_date": "2019-06-05T09:30:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Open X is coming. Are Banks and FinTechs ready?\n\nhttps://t.co/QsTN4Jj3TB\n\n#Innovation #Fintech #Banking #…",
      "post_date": "2019-06-05T09:25:00"
   },
   {
      "text": "RT @MastercardEU: Day 3 of @money2020 #M2020EU and we have another great line up of speakers talking about customer journeys in #payments,…",
      "post_date": "2019-06-05T09:23:00"
   },
   {
      "text": "Digital banking now part of everyday  life in Europe https://t.co/yHAPVjI8bZ #digitalbanking #fintech #Payments… https://t.co/LXkO66rX4z",
      "post_date": "2019-06-05T09:23:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Open X is coming. Are Banks and FinTechs ready?\n\nhttps://t.co/QsTN4Jj3TB\n\n#Innovation #Fintech #Banking #…",
      "post_date": "2019-06-05T09:18:00"
   },
   {
      "text": "RT @openbanking_ng: CBN prioritises Open Banking as Centric Gateway launch initiatives https://t.co/QKMZyyEpKK #Openbanking #OpenbankingNig…",
      "post_date": "2019-06-05T09:17:00"
   },
   {
      "text": "RT @WFSULLIVAN3: .@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to Experien…",
      "post_date": "2019-06-05T09:12:00"
   },
   {
      "text": "[#Infographic] Open X is coming. Are Banks and FinTechs ready?\n\nhttps://t.co/QsTN4Jj3TB\n\n#Innovation #Fintech… https://t.co/5SboU7BY0K",
      "post_date": "2019-06-05T09:10:00"
   },
   {
      "text": "Looks like Mastercard is defintely diversifying into non-cards business. #openbanking will be the next new network https://t.co/OYd67q4smn",
      "post_date": "2019-06-05T09:04:00"
   },
   {
      "text": "RT @FDXOrg: Want to learn more about how FDX is solving problems in #financial #datasharing? Check out our spotlight with FDX members Antho…",
      "post_date": "2019-06-05T09:01:00"
   },
   {
      "text": "Looking for high-quality #openbanking solutions for #AccountInformation or #PaymentInitiation? Don’t miss our partn… https://t.co/CqVL1RsUfO",
      "post_date": "2019-06-05T09:00:00"
   },
   {
      "text": "RT @meniga: Great panel discussions on how #banks can leverage #data for commercial benefit in 2019!  Special thanks to @fredkelly @dh_habi…",
      "post_date": "2019-06-05T08:48:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-05T08:47:00"
   },
   {
      "text": "Great panel discussions on how #banks can leverage #data for commercial benefit in 2019!  Special thanks to… https://t.co/BhNZ1fLPgx",
      "post_date": "2019-06-05T08:43:00"
   },
   {
      "text": "Banking as a service (Baas) and Open Banking are poised to overtake the traditional banking models and provide cust… https://t.co/fn8f08PJww",
      "post_date": "2019-06-05T08:38:00"
   },
   {
      "text": "RT @creditkudos: Day 3 of #money2020eu is off to a great start with our CEO @fredkelly joining @dh_habito @georgl @fsimoneschi and @SanzSai…",
      "post_date": "2019-06-05T08:35:00"
   },
   {
      "text": "RT @iliad_solutions: Look forward to hearing you speak @georgl \nFor those interested in #OpenBanking - here's how to successfully implement…",
      "post_date": "2019-06-05T08:35:00"
   },
   {
      "text": "RT @FabrickPlatform: 🔷 our NEW WEBSITE is online! 🔷\nThis makes it even easier to find #openbanking solutions that can revolutionize your bu…",
      "post_date": "2019-06-05T08:35:00"
   },
   {
      "text": "What is #openbanking? How can it support #financialinclusion? Find out more via the latest #podcast from… https://t.co/iKTJHiWXJX",
      "post_date": "2019-06-05T08:33:00"
   },
   {
      "text": "RT @puutwallet: FORGOT YOUR PUUT MOBILE WALLET PASSWORD? RESET IN LESS THAN 15 SECONDS.\n#puutwallet #ewallets #marketplace #messaging #p2p…",
      "post_date": "2019-06-05T08:32:00"
   },
   {
      "text": "RT @meniga: Don't miss Meniga CEO &amp; Co-founder @georgl speak @money2020 starting at 9:35 am at the Transmutation Stage on how #banks can le…",
      "post_date": "2019-06-05T08:31:00"
   },
   {
      "text": "RT @getloyalbe: It was great to see the auditorium packed for the #openbanking sessions at #Money2020EU led by @dgwbirch. Exciting times to…",
      "post_date": "2019-06-05T08:29:00"
   },
   {
      "text": "RT @cjemichael: Most people I know have twice this number of identities - it’s a real problem but also a massive opportunity - the stakes a…",
      "post_date": "2019-06-05T08:28:00"
   },
   {
      "text": "Most people I know have twice this number of identities - it’s a real problem but also a massive opportunity - the… https://t.co/BWpwPwYAeA",
      "post_date": "2019-06-05T08:28:00"
   },
   {
      "text": "RT @joris_hensen: PSD2 is only the beginning for #openbanking and will evolve to an open data economy that empowers customers to control th…",
      "post_date": "2019-06-05T08:27:00"
   },
   {
      "text": "RT @ndgitAPI: Have a look at Clas Beese's jump into the #NDGIT ball pool / #apiplatform  - #finletter #mediarelations #openbanking #platfor…",
      "post_date": "2019-06-05T08:27:00"
   },
   {
      "text": "Have a look at Clas Beese's jump into the #NDGIT ball pool / #apiplatform  - #finletter #mediarelations… https://t.co/cy0HcPZhdE",
      "post_date": "2019-06-05T08:26:00"
   },
   {
      "text": "RT @neirajones: #Payments: @Mastercard Launches #OpenBanking #API Platform 😎\nhttps://t.co/JsqI0m9X8S \n#fintech #regtech #infosec \n@jimwadsw…",
      "post_date": "2019-06-05T08:26:00"
   },
   {
      "text": "RT @pglyman: Love hearing @tranqy talk up conversational banking and open APIs to support the advancement of this t… https://t.co/QAQNGaDmn9",
      "post_date": "2019-06-05T08:25:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-05T08:24:00"
   },
   {
      "text": "RT @ElvinaSoogun: #OpenBanking: meh?\n\n@chyppings' @dgwbirch takes to the Industry Transmutation stage @money2020, explaining that #PSD2 isn…",
      "post_date": "2019-06-05T08:23:00"
   },
   {
      "text": "RT @stratorob: Research Finds 89% of Merchants are Primed for #OpenBanking https://t.co/9kRhsha0B9\n\n@RAlexJimenez @DeepLearn007 @antgrasso…",
      "post_date": "2019-06-05T08:15:00"
   },
   {
      "text": "Day 3 of #money2020eu is off to a great start with our CEO @fredkelly joining @dh_habito @georgl @fsimoneschi and… https://t.co/yFDk2oZNv9",
      "post_date": "2019-06-05T08:14:00"
   },
   {
      "text": "RT @The_LHoFT: #OpenBanking requires an open mind about #Fintech and #payments \n\n\"More than simply offering customers more products, open b…",
      "post_date": "2019-06-05T08:12:00"
   },
   {
      "text": "RT @letstechpodcast: We're excited to discuss with industry experts @MobeyForum at Mobey Day on topics including #openbanking #AI #FinTech…",
      "post_date": "2019-06-05T08:11:00"
   },
   {
      "text": "RT @letstechpodcast: We're excited to discuss with industry experts @MobeyForum at Mobey Day on topics including #openbanking #AI #FinTech…",
      "post_date": "2019-06-05T08:10:00"
   },
   {
      "text": "RT @Capgemini: To stay in the game, successful banks will embrace new roles, following a seemingly simple 3-step formula - Find out what th…",
      "post_date": "2019-06-05T08:09:00"
   },
   {
      "text": "RT @ghanem_elias: Banks + startups/BigTechs = ?\nOpen Banking may soon be leapfrogged by open experience\nOperation #OpenX\n\n#OpenBanking #M20…",
      "post_date": "2019-06-05T08:09:00"
   },
   {
      "text": "Banks + startups/BigTechs = ?\nOpen Banking may soon be leapfrogged by open experience\nOperation #OpenX… https://t.co/FEhE9sqTAj",
      "post_date": "2019-06-05T08:04:00"
   },
   {
      "text": "UK #Startup #Fintech @TrueLayer Just Won Funding from China's #Tencent &amp; Singaporean Wealth Fund @Temasek⠀… https://t.co/uDeDJLmjxP",
      "post_date": "2019-06-05T08:03:00"
   },
   {
      "text": "RT @Finance_Edge: 89% of merchants \"primed for open banking\" - @NUAPAY https://t.co/2mYypB08OA #OpenBanking",
      "post_date": "2019-06-05T08:03:00"
   },
   {
      "text": "RT @iliad_solutions: Look forward to hearing you speak @georgl \nFor those interested in #OpenBanking - here's how to successfully implement…",
      "post_date": "2019-06-05T08:00:00"
   },
   {
      "text": "RT @neirajones: #Payments: @Mastercard Launches #OpenBanking #API Platform 😎\nhttps://t.co/JsqI0m9X8S \n#fintech #regtech #infosec \n@jimwadsw…",
      "post_date": "2019-06-05T08:00:00"
   },
   {
      "text": "Look forward to hearing you speak @georgl \nFor those interested in #OpenBanking - here's how to successfully implem… https://t.co/6ne8Im4IDV",
      "post_date": "2019-06-05T07:58:00"
   },
   {
      "text": "RT @xinjamoney: For those not in Amsterdam🚴🏻‍♂️🇱🇺 here’s a neat summary🔭of #unthinktank @scriberian @money2020 #money2020EU #M2020Eu #openb…",
      "post_date": "2019-06-05T07:55:00"
   },
   {
      "text": "#OpenBanking requires an open mind about #Fintech and #payments \n\n\"More than simply offering customers more product… https://t.co/DvozuyCIRg",
      "post_date": "2019-06-05T07:51:00"
   },
   {
      "text": "RT @ghanem_elias: Re-bundling in financial services happening in the wake of evolving #FinTech landscape in the #OpenX era \n\n#M2020EU #Open…",
      "post_date": "2019-06-05T07:50:00"
   },
   {
      "text": "In the World Fintech Report out today, only 26% of bank executives and 43% of FinTech leaders said they had identif… https://t.co/xEGl7xTMYJ",
      "post_date": "2019-06-05T07:45:00"
   },
   {
      "text": "Most important, @Apple as 50% of the device market in the UK. The combination of these factors places them in a rel… https://t.co/9pBBTMKX0p",
      "post_date": "2019-06-05T07:44:00"
   },
   {
      "text": "#Mastercard unveils new #OpenBanking Solutions. Read more: https://t.co/zYAJVyAQ2S FinTech Futures #payments https://t.co/fUB0DzJvRw",
      "post_date": "2019-06-05T07:40:00"
   },
   {
      "text": "Day 3 of @money2020 #M2020EU and we have another great line up of speakers talking about customer journeys in… https://t.co/dlz8tjspux",
      "post_date": "2019-06-05T07:38:00"
   },
   {
      "text": "RT @Capgemini: Join @WFSULLIVAN3, @JimMarous, @leimer,  @Visible_Banking,  @GhelaBoskovich, @jblefevre60, @psb_dc,  @ccalmeja,  @MeganCaywo…",
      "post_date": "2019-06-05T07:37:00"
   },
   {
      "text": "RT @TLT_LLP: A year after the #GDPR came into effect, @EmmaFoxLaw asks if it's been a blessing or a curse for #digitalbanking - from its re…",
      "post_date": "2019-06-05T07:36:00"
   },
   {
      "text": "RT @Capgemini: To stay in the game, successful banks will embrace new roles, following a seemingly simple 3-step formula - Find out what th…",
      "post_date": "2019-06-05T07:33:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-05T07:32:00"
   },
   {
      "text": "#Payments: @Mastercard Launches #OpenBanking #API Platform 😎\nhttps://t.co/JsqI0m9X8S \n#fintech #regtech #infosec… https://t.co/CxGv3V8cS3",
      "post_date": "2019-06-05T07:29:00"
   },
   {
      "text": "RT @neirajones: #Fintech: @StarlingBank Partners with #Payments Platform #Tribe⠀\nhttps://t.co/OcB99os4Lr ⠀\n#OpenBanking #Banking #PSD2 ⠀\n@T…",
      "post_date": "2019-06-05T07:28:00"
   },
   {
      "text": "To stay in the game, successful banks will embrace new roles, following a seemingly simple 3-step formula - Find ou… https://t.co/RKGFOVH17W",
      "post_date": "2019-06-05T07:25:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-star p…",
      "post_date": "2019-06-05T07:22:00"
   },
   {
      "text": "Don't miss Meniga CEO &amp; Co-founder @georgl speak @money2020 starting at 9:35 am at the Transmutation Stage on how… https://t.co/ULu3MMUHHx",
      "post_date": "2019-06-05T07:20:00"
   },
   {
      "text": "RT @FintechSIN: Over 80% of banks in #APAC have invested in #OpenBanking. Nuggets of info like this and more at @Accenture's latest report:…",
      "post_date": "2019-06-05T07:18:00"
   },
   {
      "text": "RT @FintechSIN: . @Temasek and Tencent to Invest US$35 Million in @TrueLayer https://t.co/CSOcA7iSgr #fintech #funding #openbanking #financ…",
      "post_date": "2019-06-05T07:18:00"
   },
   {
      "text": "HSBC chooses Globality’s AI self-serve procurement platform https://t.co/rJfxGGsOPD #ArtificialIntelligenceAI… https://t.co/sDKfmskfg1",
      "post_date": "2019-06-05T07:15:00"
   },
   {
      "text": "In @Finextra, @Openvector argue that the UK’s largest banks have not as yet invested fully in the opportunities tha… https://t.co/rep7IML5m6",
      "post_date": "2019-06-05T07:14:00"
   },
   {
      "text": "PayPal Becomes a Strategic Investor, According to Tink - LearnBonds - https://t.co/hb5d8JXYWI #openbanking #banking #digital",
      "post_date": "2019-06-05T07:13:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-06-05T07:10:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications… https://t.co/P2GMmIOe7K",
      "post_date": "2019-06-05T07:10:00"
   },
   {
      "text": "#Mastercard commissioned a report on the current state of #openbanking, which you can read here -… https://t.co/WaAj3A9eoN",
      "post_date": "2019-06-05T07:10:00"
   },
   {
      "text": "RT @jimwadsworth: Looking forward to some great conversations about #OpenBanking over the next 3 days at… https://t.co/2OgsMyWVUn",
      "post_date": "2019-06-05T07:09:00"
   },
   {
      "text": "RT @ieDigitalFS: ‘The future of open banking...the success will be platform banking where banks will have to collaborate closely.’ #m2020eu…",
      "post_date": "2019-06-05T07:07:00"
   },
   {
      "text": "‘The future of open banking...the success will be platform banking where banks will have to collaborate closely.’… https://t.co/soukEyjuEc",
      "post_date": "2019-06-05T07:07:00"
   },
   {
      "text": "RT @LouiseHBeaumont: VIDEO PANEL '#OpenBanking – meeting the needs of the consumer in a new era of #banking'\n\nWith @AccountScore @monzo @UK…",
      "post_date": "2019-06-05T06:59:00"
   },
   {
      "text": "#openbanking #payments #digitalidentity thread - @apple have announced a privacy-focussed authentication service, s… https://t.co/FXzV0fLgFf",
      "post_date": "2019-06-05T06:59:00"
   },
   {
      "text": "MasterCard’s new #fintech #openbanking stuff 👉 https://t.co/B9ItPGTMJP",
      "post_date": "2019-06-05T06:53:00"
   },
   {
      "text": "RT @KalleDunkel: Metro is intending to use AISP / open banking in order to enhance their own SMB-customer credit offering. #M2020EU #openba…",
      "post_date": "2019-06-05T06:52:00"
   },
   {
      "text": "RT @LouiseHBeaumont: VIDEO PANEL '#OpenBanking – meeting the needs of the consumer in a new era of #banking'\n\nWith @AccountScore @monzo @UK…",
      "post_date": "2019-06-05T06:49:00"
   },
   {
      "text": "Swiss private banking on stage with @juliusbaer at #money2020 - #openbanking and #digitalassets anyone?! @WeAreSEBA https://t.co/BTalPok2uG",
      "post_date": "2019-06-05T06:43:00"
   },
   {
      "text": "Just arrived for day 3 of @Money2020? Visit Stand L11 to discover @theslideapp. Our new #BankingApp can help your f… https://t.co/wTEUQ5CNeo",
      "post_date": "2019-06-05T06:35:00"
   },
   {
      "text": "RT @c_ross_blanco: Open Banking:The future of banking https://t.co/ZH32MZT3nf #future #openbanking #banking",
      "post_date": "2019-06-05T06:34:00"
   },
   {
      "text": "Open Banking:The future of banking https://t.co/ZH32MZT3nf #future #openbanking #banking",
      "post_date": "2019-06-05T06:32:00"
   },
   {
      "text": "RT @openbanking_ng: Think compliance is expensive? In the age of open banking, it’s your smartest investment https://t.co/fTUw90RF3x @Finex…",
      "post_date": "2019-06-05T06:31:00"
   },
   {
      "text": "RT @Capgemini: Join @WFSULLIVAN3, @JimMarous, @leimer,  @Visible_Banking,  @GhelaBoskovich, @jblefevre60, @psb_dc,  @ccalmeja,  @MeganCaywo…",
      "post_date": "2019-06-05T06:14:00"
   },
   {
      "text": "VIDEO PANEL '#OpenBanking – meeting the needs of the consumer in a new era of #banking'\n\nWith @AccountScore @monzo… https://t.co/6ruICOXazw",
      "post_date": "2019-06-05T06:14:00"
   },
   {
      "text": "RT @wso2: .@SocieteGenerale has a number of #openbanking successes in Europe and Africa. Learn how they transformed their business with ope…",
      "post_date": "2019-06-05T06:13:00"
   },
   {
      "text": "RT @UrsBolt: Should sharing #EU bank #data be extended?\n\n#OpenBanking rules are a model for a broader digital solution. \nBut these rules ne…",
      "post_date": "2019-06-05T06:10:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-05T06:10:00"
   },
   {
      "text": "Psst. Hey, you. Yeah, you. Wanna get the skinny on a super cool use of #openbanking #fintech for #lenders? Easy onb… https://t.co/kWgbi0c8Z4",
      "post_date": "2019-06-05T06:10:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T06:10:00"
   },
   {
      "text": "RT @dsteingruberCH: . @tink, the European #OpenBanking  platform, announces @PayPal as a strategic investor. #Innovation #fintech #venturec…",
      "post_date": "2019-06-05T06:09:00"
   },
   {
      "text": "RT @Ryan_EP: Great presentation from @FJRisseeuw on the @money2020 stage. Super proud the @FundingOptions team can announce we’ll be one of…",
      "post_date": "2019-06-05T06:07:00"
   },
   {
      "text": "\"#Money2020EU: Is #OpenBanking a complete fiasco?\"\n\nSummary of the panel I chaired with Imran Gulamhuseinwala Mark… https://t.co/vyh41ZNeni",
      "post_date": "2019-06-05T06:05:00"
   },
   {
      "text": "IAM Platform Curated Retweet:\n\nVia: https://t.co/bfzG397PJw\n\n. tink, the European #OpenBanking  platform, announces… https://t.co/xhC6dakDVw",
      "post_date": "2019-06-05T06:03:00"
   },
   {
      "text": "Morning folks. I'm hosting a webinar  tomorrow (6th June 2019) with CREALOGIX Group where I'll be discussing how… https://t.co/F8mdAE5BSI",
      "post_date": "2019-06-05T06:01:00"
   },
   {
      "text": "📰 Banks and #FinTechs have (still) fear of #openbanking 📰 ⁦@CapgeminiItalia⁩ #fintech #fintechdistrict #fintechnews… https://t.co/JFoJGbpT1n",
      "post_date": "2019-06-05T06:00:00"
   },
   {
      "text": "Curious about state of #openbanking? Read the summary of yesterday’s discussions at #M2020EU @money2020 by @Finextra https://t.co/w5yrX9b6ck",
      "post_date": "2019-06-05T05:56:00"
   },
   {
      "text": "RT @TCS: Testing the waters or have you just embarked on an enterprise-wide #openbanking journey? Either way, our C3 strategy will prove us…",
      "post_date": "2019-06-05T05:56:00"
   },
   {
      "text": "RT @Capgemini: Join @WFSULLIVAN3, @JimMarous, @leimer,  @Visible_Banking,  @GhelaBoskovich, @jblefevre60, @psb_dc,  @ccalmeja,  @MeganCaywo…",
      "post_date": "2019-06-05T05:55:00"
   },
   {
      "text": "RT @ghanem_elias: Customers want Open X relationships. \n\nOperation Open X! \n\n#OpenBanking #OpenX #M2020EU #AppliedInnovation #WFTR19 \n\n@Cap…",
      "post_date": "2019-06-05T05:55:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-star p…",
      "post_date": "2019-06-05T05:52:00"
   },
   {
      "text": "RT @neirajones: #Fintech: @StarlingBank Partners with #Payments Platform #Tribe⠀\nhttps://t.co/OcB99os4Lr ⠀\n#OpenBanking #Banking #PSD2 ⠀\n@T…",
      "post_date": "2019-06-05T05:52:00"
   },
   {
      "text": "#openbanking news by #Fabrick \n🔷 Research Finds 89% of Merchants are Primed for Open Banking 🔷 \n\n#APIeconomy ⁦… https://t.co/Rc7Iy34cAK",
      "post_date": "2019-06-05T05:50:00"
   },
   {
      "text": "RT @dsteingruberCH: . @tink, the European #OpenBanking  platform, announces @PayPal as a strategic investor. #Innovation #fintech #venturec…",
      "post_date": "2019-06-05T05:47:00"
   },
   {
      "text": "RT @dsteingruberCH: . @tink, the European #OpenBanking  platform, announces @PayPal as a strategic investor. #Innovation #fintech #venturec…",
      "post_date": "2019-06-05T05:44:00"
   },
   {
      "text": ". @tink, the European #OpenBanking  platform, announces @PayPal as a strategic investor. #Innovation #fintech… https://t.co/q2UBFZdhzX",
      "post_date": "2019-06-05T05:44:00"
   },
   {
      "text": "RT @WFSULLIVAN3: .@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to Experien…",
      "post_date": "2019-06-05T05:41:00"
   },
   {
      "text": "RT @ghanem_elias: Re-bundling in financial services happening in the wake of evolving #FinTech landscape in the #OpenX era \n\n#M2020EU #Open…",
      "post_date": "2019-06-05T05:41:00"
   },
   {
      "text": "RT @ghanem_elias: New entrants in FS leading to rebundling of products and services \n\nThe future is not same for everyone! \n\n#M2020EU #Open…",
      "post_date": "2019-06-05T05:41:00"
   },
   {
      "text": "The industry is transitioning from #OpenBanking to “Open X”: Report https://t.co/ehTipoVA5e #technology #technews https://t.co/W0ymnR4AH0",
      "post_date": "2019-06-05T05:35:00"
   },
   {
      "text": "RT @Capgemini: Join @WFSULLIVAN3, @JimMarous, @leimer,  @Visible_Banking,  @GhelaBoskovich, @jblefevre60, @psb_dc,  @ccalmeja,  @MeganCaywo…",
      "post_date": "2019-06-05T05:24:00"
   },
   {
      "text": "RT @HederikLaloo: Togheter with my colleagues I am at the best banking event Money2020\n#Money2020 @HollandFinTech @bhive_eu next week in Am…",
      "post_date": "2019-06-05T05:20:00"
   },
   {
      "text": "RT @ghanem_elias: Customers want Open X relationships. \n\nOperation Open X! \n\n#OpenBanking #OpenX #M2020EU #AppliedInnovation #WFTR19 \n\n@Cap…",
      "post_date": "2019-06-05T05:18:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T05:15:00"
   },
   {
      "text": "Join @WFSULLIVAN3, @JimMarous, @leimer,  @Visible_Banking,  @GhelaBoskovich, @jblefevre60, @psb_dc,  @ccalmeja,… https://t.co/jYKMa6z31s",
      "post_date": "2019-06-05T05:15:00"
   },
   {
      "text": "The industry is transitioning from Open Banking to “Open X”: Report - Express Computer - https://t.co/Q5w5cys4CO… https://t.co/ZzjO2z0Fwl",
      "post_date": "2019-06-05T05:13:00"
   },
   {
      "text": "World FinTech Report 2019: The Industry is Transitioning from Open Banking to “Open X” - Business Wire -… https://t.co/vBUnx6U7m4",
      "post_date": "2019-06-05T05:03:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T05:01:00"
   },
   {
      "text": "RT @payvision: Excited to partner with @getyolt to support our clients and partners with open banking solutions\n#payments #openbanking #fin…",
      "post_date": "2019-06-05T04:53:00"
   },
   {
      "text": "Customers want Open X relationships. \n\nOperation Open X! \n\n#OpenBanking #OpenX #M2020EU #AppliedInnovation #WFTR19… https://t.co/NCD3aa20gu",
      "post_date": "2019-06-05T04:52:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T04:50:00"
   },
   {
      "text": "Money 20/20 Europe 2019: Is Open Banking a complete fiasco? - Finextra - https://t.co/4kQvaM4mOu #openbanking #banking #digital",
      "post_date": "2019-06-05T04:43:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Consumers are speaking their minds, and they want Open X relationships. Banks need to react! Read how in @ghanem_elias'…",
      "post_date": "2019-06-05T04:27:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T04:23:00"
   },
   {
      "text": "RT @FabrickPlatform: Let's start the 3 days #fintech of the @money2020 Europe. #Fabrick is waiting for you with its team, #Axerve, @Fintech…",
      "post_date": "2019-06-05T04:20:00"
   },
   {
      "text": "Consumers are speaking their minds, and they want Open X relationships. Banks need to react! Read how in… https://t.co/pZuUB7eXJD",
      "post_date": "2019-06-05T04:18:00"
   },
   {
      "text": "The open banking acid test #Digital #openbanking #banking  https://t.co/KiQda33DVH",
      "post_date": "2019-06-05T04:15:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-star p…",
      "post_date": "2019-06-05T04:14:00"
   },
   {
      "text": "Mastercard unveils new Open Banking Solutions – FinTech Futures - Fintech Futures - https://t.co/kQOGroythy #openbanking #banking #digital",
      "post_date": "2019-06-05T04:13:00"
   },
   {
      "text": "RT @stratorob: Research Finds 89% of Merchants are Primed for #OpenBanking https://t.co/9kRhsha0B9\n\n@RAlexJimenez @DeepLearn007 @antgrasso…",
      "post_date": "2019-06-05T04:11:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB…",
      "post_date": "2019-06-05T04:08:00"
   },
   {
      "text": "Mastercard unveils new Open Banking Solutions. #OpenBanking  https://t.co/XVVkxOWXCA",
      "post_date": "2019-06-05T04:07:00"
   },
   {
      "text": "Tink, the European #openbanking platform, announces PayPal as a strategic investor https://t.co/tGmlsr1VEc via @techcrunch",
      "post_date": "2019-06-05T04:05:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-05T04:01:00"
   },
   {
      "text": "RT @1WorldIdentity: Today in #digitalidentity and #payments news, #openbanking platform @Tink partners with @PayPal https://t.co/bwaUnc3JRy…",
      "post_date": "2019-06-05T04:00:00"
   },
   {
      "text": "RT @WFSULLIVAN3: INFOGRAPHIC - The Financial Services industry is shifting from #OpenBanking to #OpenX finds our #WFTR19 by @Capgemini.   #…",
      "post_date": "2019-06-05T03:59:00"
   },
   {
      "text": "Banking is essential, but what about banks? by @ghanem_elias\n\n#M2020Eu #WFTR19 #FinTech #OpenBanking https://t.co/SRsEhaDB1A",
      "post_date": "2019-06-05T03:58:00"
   },
   {
      "text": "RT stratorob \"Research Finds 89% of Merchants are Primed for #OpenBanking https://t.co/jElOIe79Jh\n\nRAlexJimenez Dee… https://t.co/BN9kJAKwen",
      "post_date": "2019-06-05T03:53:00"
   },
   {
      "text": "The open banking acid test #Banking #openbanking #digital  https://t.co/k0tpKfN8bT",
      "post_date": "2019-06-05T03:52:00"
   },
   {
      "text": "Research Finds 89% of Merchants are Primed for #OpenBanking https://t.co/9kRhsha0B9\n\n@RAlexJimenez @DeepLearn007… https://t.co/oqSeNnk3Od",
      "post_date": "2019-06-05T03:51:00"
   },
   {
      "text": ". @Temasek and Tencent to Invest US$35 Million in @TrueLayer https://t.co/CSOcA7iSgr #fintech #funding #openbanking… https://t.co/vd0UEEOCP8",
      "post_date": "2019-06-05T03:44:00"
   },
   {
      "text": "RT @ghanem_elias: Re-bundling in financial services happening in the wake of evolving #FinTech landscape in the #OpenX era \n\n#M2020EU #Open…",
      "post_date": "2019-06-05T03:39:00"
   },
   {
      "text": "Temasek and Tencent to Invest US$35 Million in Truelayer - Fintech News Singapore - https://t.co/BCFJgMQ9H9 #openbanking #banking #digital",
      "post_date": "2019-06-05T03:39:00"
   },
   {
      "text": "RT @ghanem_elias: Re-bundling in financial services happening in the wake of evolving #FinTech landscape in the #OpenX era \n\n#M2020EU #Open…",
      "post_date": "2019-06-05T03:37:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-05T03:26:00"
   },
   {
      "text": "Can #banks and #fintechs ever work together? @raconteur https://t.co/adZdNVYiIB #UX #biz #Fintech #FutureofBanking… https://t.co/JqwBgtKa4R",
      "post_date": "2019-06-05T03:26:00"
   },
   {
      "text": "£81.1m have poured into the Open Banking Implementation Entity (OBIE), a fraction of the total amount spent by the… https://t.co/QZ3v7xtGA4",
      "post_date": "2019-06-05T03:15:00"
   },
   {
      "text": "The Fintech Files: The open banking acid test - Financial News - https://t.co/PB2FGFyu8i #openbanking #banking #digital",
      "post_date": "2019-06-05T02:34:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-star p…",
      "post_date": "2019-06-05T02:17:00"
   },
   {
      "text": "RT @GhelaBoskovich: Standing room only for lessons learned from #openbanking with @Louisehbeaumont @nikhilkumarks @GavinLittlejohn @BANKIFI…",
      "post_date": "2019-06-05T02:16:00"
   },
   {
      "text": "RT @safwanzaheer: Mastercard tests water with its newly launched #OpenBanking solution\n#Fintech #OpenAPIs #PSD2 #Payments #Europe #Bigdata…",
      "post_date": "2019-06-05T01:59:00"
   },
   {
      "text": "RT @ninamohanty: Two interesting #OpenBanking investment rounds, but pay attention to the WHO, not the number:\n- @TrueLayer raises $40m led…",
      "post_date": "2019-06-05T01:56:00"
   },
   {
      "text": "RT @mavericsystems: Redefining #customerexperience with #openbanking. Discover its 3-phased approach to drive #customerengagement. Read now…",
      "post_date": "2019-06-05T01:42:00"
   },
   {
      "text": "RT @pymnts: .@Mastercard launches a platform designed to support #OpenBanking, and explains how APIs, trust and consumer education are key…",
      "post_date": "2019-06-05T01:38:00"
   },
   {
      "text": "RT @ghanem_elias: Re-bundling in financial services happening in the wake of evolving #FinTech landscape in the #OpenX era \n\n#M2020EU #Open…",
      "post_date": "2019-06-05T01:30:00"
   },
   {
      "text": "RT @stratorob: Tink, the European #OpenBanking platform, announces PayPal as a strategic investor https://t.co/CLRkIzvo05\n\n@VolpiIT @2601Ma…",
      "post_date": "2019-06-05T01:26:00"
   },
   {
      "text": "RT @GhelaBoskovich: Standing room only for lessons learned from #openbanking with @Louisehbeaumont @nikhilkumarks @GavinLittlejohn @BANKIFI…",
      "post_date": "2019-06-05T01:20:00"
   },
   {
      "text": "RT stratorob \"Tink, the European #OpenBanking platform, announces PayPal as a strategic investor… https://t.co/MX8xsy8Eyl",
      "post_date": "2019-06-05T01:18:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-star p…",
      "post_date": "2019-06-05T01:15:00"
   },
   {
      "text": "RT @ninamohanty: Two interesting #OpenBanking investment rounds, but pay attention to the WHO, not the number:\n- @TrueLayer raises $40m led…",
      "post_date": "2019-06-05T00:54:00"
   },
   {
      "text": "#Fintech: @StarlingBank Partners with #Payments Platform #Tribe⠀\nhttps://t.co/OcB99os4Lr ⠀\n#OpenBanking #Banking… https://t.co/ExYni36SOD",
      "post_date": "2019-06-05T00:39:00"
   },
   {
      "text": "Tink, the European #OpenBanking platform, announces PayPal as a strategic investor https://t.co/CLRkIzvo05… https://t.co/TN62Dh3zsr",
      "post_date": "2019-06-05T00:17:00"
   },
   {
      "text": "Mastercard Launches Open Banking Platform To Further API Standards\nhttps://t.co/j2OVZxt31K \n\n#paymentsecurity… https://t.co/zxWdBafvdx",
      "post_date": "2019-06-05T00:01:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-04T23:29:00"
   },
   {
      "text": "RT @FabrickPlatform: #Fabrick turns one today! \nWe are celebrating during Money 20/20 Europe presenting much news but ... there are as many…",
      "post_date": "2019-06-04T23:27:00"
   },
   {
      "text": "RT stratorob \"Visa launches a new financial innovation platform to drive digital payment services… https://t.co/vgMiHsTsZp",
      "post_date": "2019-06-04T23:18:00"
   },
   {
      "text": "World #FinTech Report 2019: The Industry is Transitioning from #OpenBanking to “Open X” \n\nhttps://t.co/oey6hXmBry \n\n#finserv #banking",
      "post_date": "2019-06-04T23:15:00"
   },
   {
      "text": "RT @stratorob: @Visa launches a new financial innovation platform to drive digital payment services https://t.co/V6pIyar6KY\n\n@JanEbenholtz…",
      "post_date": "2019-06-04T23:14:00"
   },
   {
      "text": "@Visa launches a new financial innovation platform to drive digital payment services https://t.co/V6pIyar6KY… https://t.co/3VZ1zm2YVZ",
      "post_date": "2019-06-04T23:14:00"
   },
   {
      "text": "RT @FinastraFS: RT @pglyman: Love hearing @tranqy talk up conversational banking and open APIs to support the advancement of this tech @Fin…",
      "post_date": "2019-06-04T23:09:00"
   },
   {
      "text": "RT @pglyman: Love hearing @tranqy talk up conversational banking and open APIs to support the advancement of this t… https://t.co/eMDyn3xQrl",
      "post_date": "2019-06-04T23:00:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-04T22:58:00"
   },
   {
      "text": "RT @SocieteGenerale: A fantastic day at @money2020 talking to industry players ! That‘s a part of the feed-back from @TreezorBanking’s team…",
      "post_date": "2019-06-04T22:43:00"
   },
   {
      "text": "Nearly Half of UK Consumers Want to Pay for Subscriptions with #DirectDebit, But Major Consumer Websites Fail to Of… https://t.co/pQceF4mRDI",
      "post_date": "2019-06-04T22:39:00"
   },
   {
      "text": "Happy birthday #fabrick! \nIt’s just the beginning of the journey. \nShaping the future of finance together.\n#fintech… https://t.co/qEG7PAUH2z",
      "post_date": "2019-06-04T22:30:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-star p…",
      "post_date": "2019-06-04T22:25:00"
   },
   {
      "text": "RT @ninamohanty: Two interesting #OpenBanking investment rounds, but pay attention to the WHO, not the number:\n- @TrueLayer raises $40m led…",
      "post_date": "2019-06-04T22:22:00"
   },
   {
      "text": "#OpenBanking requires an open mind about #fintech and #payments \n\nhttps://t.co/wsAKbYE8kC \n\n#finserv #banking #PSD2",
      "post_date": "2019-06-04T22:15:00"
   },
   {
      "text": "Last day of @money2020 &amp; we're looking forward to more inspiring &amp; insightful discussions around #openbanking, #AML… https://t.co/K3jxBaNKdd",
      "post_date": "2019-06-04T22:10:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-star p…",
      "post_date": "2019-06-04T22:07:00"
   },
   {
      "text": "We're excited to discuss with industry experts @MobeyForum at Mobey Day on topics including #openbanking #AI… https://t.co/mFSMNDMKiJ",
      "post_date": "2019-06-04T22:00:00"
   },
   {
      "text": "Today in #digitalidentity and #payments news, #openbanking platform @Tink partners with @PayPal https://t.co/bwaUnc3JRy #PSD2",
      "post_date": "2019-06-04T22:00:00"
   },
   {
      "text": "RT @tanerakcok: I was the guest of Gelecek Nasıl Gelecek in @Ekoturktv  presented by @cemsezer . We discussed about #finreach, #figo, #open…",
      "post_date": "2019-06-04T21:46:00"
   },
   {
      "text": "RT @rjptoronto: Hearing from some great CEO’s @ING_news @bigpaymeapp @AlternaBank from large established European Banks to new Asian attack…",
      "post_date": "2019-06-04T21:45:00"
   },
   {
      "text": "RT @ninamohanty: Two interesting #OpenBanking investment rounds, but pay attention to the WHO, not the number:\n- @TrueLayer raises $40m led…",
      "post_date": "2019-06-04T21:43:00"
   },
   {
      "text": "RT @ninamohanty: Two interesting #OpenBanking investment rounds, but pay attention to the WHO, not the number:\n- @TrueLayer raises $40m led…",
      "post_date": "2019-06-04T21:41:00"
   },
   {
      "text": "For those not in Amsterdam🚴🏻‍♂️🇱🇺 here’s a neat summary🔭of #unthinktank @scriberian @money2020 #money2020EU… https://t.co/GBdkpXn4Mg",
      "post_date": "2019-06-04T21:33:00"
   },
   {
      "text": "RT @pymnts: .@Mastercard launches a platform designed to support #OpenBanking, and explains how APIs, trust and consumer education are key…",
      "post_date": "2019-06-04T21:21:00"
   },
   {
      "text": ".@Mastercard launches a platform designed to support #OpenBanking, and explains how APIs, trust and consumer educat… https://t.co/H7Y56Fl3Xp",
      "post_date": "2019-06-04T21:20:00"
   },
   {
      "text": "RT @ninamohanty: Two interesting #OpenBanking investment rounds, but pay attention to the WHO, not the number:\n- @TrueLayer raises $40m led…",
      "post_date": "2019-06-04T21:18:00"
   },
   {
      "text": "RT @SmartPaymnts: One year in -- who has capitalized on #OpenBanking? Insights from @neirajones: https://t.co/Bx19KK4UOm",
      "post_date": "2019-06-04T21:13:00"
   },
   {
      "text": "Mastercard's Wadsworth: Banks need time to fit into Open Banking future - Bobsguide - https://t.co/yj2oNIX6wB #openbanking #banking #digital",
      "post_date": "2019-06-04T21:09:00"
   },
   {
      "text": "RT @OpenBankingExpo: @nationalbank will be speaking on the morning leadership panel at #obexpo in #Toronto in September. Their VP of digita…",
      "post_date": "2019-06-04T20:58:00"
   },
   {
      "text": "Join us next week at the Open Banking forum in Mexico City! #Fintech #OpenBanking  #latamopenbanking… https://t.co/w4UzcXRurt",
      "post_date": "2019-06-04T20:47:00"
   },
   {
      "text": "Great chat on #OpenBanking today at Rideau Club. If we got out of line Sir John A was ready with his whacking stick. https://t.co/dGAkKWh8N5",
      "post_date": "2019-06-04T20:46:00"
   },
   {
      "text": "Mastercard has unveiled a suite of open banking applications and services designed to help financial institutions a… https://t.co/1kZ1zkkeie",
      "post_date": "2019-06-04T20:45:00"
   },
   {
      "text": "RT @WFSULLIVAN3: All set for @ghanem_elias to share views on shift from #OpenBanking to #OpenX from #WFTR19.  #M2020Eu https://t.co/1rURRCv…",
      "post_date": "2019-06-04T20:45:00"
   },
   {
      "text": "@nationalbank will be speaking on the morning leadership panel at #obexpo in #Toronto in September. Their VP of dig… https://t.co/ROwtmQAdZQ",
      "post_date": "2019-06-04T20:43:00"
   },
   {
      "text": "Mastercard rolls out Open Banking suite #Fintech #banking #openbanking  https://t.co/m51pxLFSq5",
      "post_date": "2019-06-04T20:42:00"
   },
   {
      "text": "RT @MBetinova: Awesome session on problem solving using  #openbanking delivered by @doubleoconnor ,CEO of @getcoconut at Day 2 of #money202…",
      "post_date": "2019-06-04T20:34:00"
   },
   {
      "text": "Why #OpenBanking success requires an open mind about #fintech and #payments https://t.co/9KoDA8Ab2t #Unisys' Maria… https://t.co/cRIqdbHwsd",
      "post_date": "2019-06-04T20:30:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-04T20:29:00"
   },
   {
      "text": "RT @viviane41861305: World #FinTech Report 2019: The industry is transitioning from #OpenBanking to “Open X”\n\nhttps://t.co/a2zKonNQE8",
      "post_date": "2019-06-04T20:25:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-star p…",
      "post_date": "2019-06-04T20:25:00"
   },
   {
      "text": "RT @JoannMoretti: Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012 posit…",
      "post_date": "2019-06-04T20:24:00"
   },
   {
      "text": "Don't miss our Tweet Chat next week around #OpenBanking and Open X.  Follow #WFTR19 and join along with our rock-st… https://t.co/wrlzyxLyne",
      "post_date": "2019-06-04T20:23:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T20:13:00"
   },
   {
      "text": "RT @payvision: Excited to partner with @getyolt to support our clients and partners with open banking solutions\n#payments #openbanking #fin…",
      "post_date": "2019-06-04T20:12:00"
   },
   {
      "text": "RT @nordigen: Harness the Power of Open Banking data! Join our CEO @RolandsMesters at Madrid's @RevBanking conference to find out how we ca…",
      "post_date": "2019-06-04T20:07:00"
   },
   {
      "text": "World #FinTech Report 2019: The industry is transitioning from #OpenBanking to “Open X”\n\nhttps://t.co/a2zKonNQE8",
      "post_date": "2019-06-04T20:03:00"
   },
   {
      "text": "New trends such as #digitization, #openbanking, #AI and #blockchain are causing disruption in #banking, especially… https://t.co/1q7uqjIPS5",
      "post_date": "2019-06-04T20:01:00"
   },
   {
      "text": "Mastercard tests water with its newly launched #OpenBanking solution\n#Fintech #OpenAPIs #PSD2 #Payments #Europe… https://t.co/zHmtG3gsYn",
      "post_date": "2019-06-04T19:55:00"
   },
   {
      "text": "RT @ThePaypers: .@signicat, https://t.co/zreTLgb58T to offer #digitalidentity to German businesses https://t.co/aCreBIfuDN #identityscheme…",
      "post_date": "2019-06-04T19:45:00"
   },
   {
      "text": "Money20/20 Europe 2019 - Highlights Day 2\nhttps://t.co/0UOeaNrJlQ via @YouTube\n#money2020 #money2020EU #banking… https://t.co/CRKUcF7YJJ",
      "post_date": "2019-06-04T19:44:00"
   },
   {
      "text": "Mastercard rolls out Open Banking suite - Finextra - https://t.co/FuzkNzGrN1 #openbanking #banking #digital",
      "post_date": "2019-06-04T19:39:00"
   },
   {
      "text": "RT @colindeacon: I enjoyed attending the roundtable on #OpenBanking today. Great chance to “audit” what I’ve heard at the @SenateCA #BANC m…",
      "post_date": "2019-06-04T19:35:00"
   },
   {
      "text": "RT @ninamohanty: Two interesting #OpenBanking investment rounds, but pay attention to the WHO, not the number:\n- @TrueLayer raises $40m led…",
      "post_date": "2019-06-04T19:31:00"
   },
   {
      "text": "RT @TACD_Consumers: Are consumers in control of their financial data? Our panellists are discussing this at #TACDFORUM2019 #OpenBanking htt…",
      "post_date": "2019-06-04T19:19:00"
   },
   {
      "text": "RT stratorob \"RT TheRudinGroup: Interested in #fintech #openbanking ?\n\nJoin us for Twitter chat on June 11th at 10a… https://t.co/bQ74lOZWdS",
      "post_date": "2019-06-04T19:18:00"
   },
   {
      "text": "Open Banking suite from Mastercard \n\nhttps://t.co/1XjsjlcW2z\n\n@jimwadsworth #Mastercard #OpenBanking #Money2020EU https://t.co/ubylX7vkUO",
      "post_date": "2019-06-04T19:17:00"
   },
   {
      "text": "RT @ttavlas: Multi-factor authentication isn't always the answer in FinTech - Open Access Government - https://t.co/ezS8DwK10r #openbanking…",
      "post_date": "2019-06-04T19:17:00"
   },
   {
      "text": "What advantages does #openbanking have for customers as well as banks and service providers? Here are the details: https://t.co/vUT1OapEGV",
      "post_date": "2019-06-04T19:17:00"
   },
   {
      "text": "RT @SocieteGenerale: Want to meet @TreezorBanking @MoonshotOff #OpenInnovation platform and #SGVentures teams, or @ccalmeja #Cio ? It‘s now…",
      "post_date": "2019-06-04T19:15:00"
   },
   {
      "text": "Check out my latest article on the untenable state of financial data access in Canada. Hope you enjoy!… https://t.co/t0PdjusLY9",
      "post_date": "2019-06-04T19:13:00"
   },
   {
      "text": "RT @FDATAnorth: One more shot from our discussion in Ottawa today. Thank you to all who attended. As the turnout indicates, there is a lot…",
      "post_date": "2019-06-04T19:09:00"
   },
   {
      "text": "Multi-factor authentication isn't always the answer in FinTech - Open Access Government - https://t.co/ezS8DwK10r… https://t.co/X30LG4Dzxq",
      "post_date": "2019-06-04T19:09:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Be sure to head over to #Money2020EU Commercial Galvanization stage in time for @ghanem_elias 16:40 presentation today on…",
      "post_date": "2019-06-04T19:08:00"
   },
   {
      "text": "#EidMubarak #OPPOReno #OpenBooking #OpenBanking #USStateVisit #مجزرة_القيادة_العامة #rtalb #YaptıkYineBizYaparız… https://t.co/n2wNnG5aWq",
      "post_date": "2019-06-04T19:05:00"
   },
   {
      "text": "RT @openbanking_ng: CBN prioritises Open Banking as Centric Gateway launch initiatives https://t.co/QKMZyyEpKK #Openbanking #OpenbankingNig…",
      "post_date": "2019-06-04T19:02:00"
   },
   {
      "text": "While #OpenBanking may have been slow to take off, according to @PaymentsCardsM, 89% of merchants are primed for Op… https://t.co/LVnsFKmWSH",
      "post_date": "2019-06-04T19:01:00"
   },
   {
      "text": ".@tink gets investment from PayPal to expand: https://t.co/8z6XviVTg5 #payments #OpenBanking",
      "post_date": "2019-06-04T19:00:00"
   },
   {
      "text": "RT @itscinchy: Thanks to @FDATAnorth for including @itscinchy in their #openbanking roundtable in #Ottawa today. Interesting perspectives f…",
      "post_date": "2019-06-04T18:48:00"
   },
   {
      "text": "Thanks to @FDATAnorth for including @itscinchy in their #openbanking roundtable in #Ottawa today. Interesting persp… https://t.co/gIRAow6OOu",
      "post_date": "2019-06-04T18:46:00"
   },
   {
      "text": "RT @colindeacon: I enjoyed attending the roundtable on #OpenBanking today. Great chance to “audit” what I’ve heard at the @SenateCA #BANC m…",
      "post_date": "2019-06-04T18:46:00"
   },
   {
      "text": "RT @FDATAnorth: Our executive director Steve Boms discusses the benefits of #OpenBanking and #fintech with the British High Commission, mem…",
      "post_date": "2019-06-04T18:46:00"
   },
   {
      "text": "RT @FDATAnorth: Our executive director Steve Boms discusses the benefits of #OpenBanking and #fintech with the British High Commission, mem…",
      "post_date": "2019-06-04T18:45:00"
   },
   {
      "text": "RT @openbanking_ng: CBN prioritises Open Banking as Centric Gateway launch initiatives https://t.co/QKMZyyEpKK #Openbanking #OpenbankingNig…",
      "post_date": "2019-06-04T18:41:00"
   },
   {
      "text": "RT @colindeacon: I enjoyed attending the roundtable on #OpenBanking today. Great chance to “audit” what I’ve heard at the @SenateCA #BANC m…",
      "post_date": "2019-06-04T18:39:00"
   },
   {
      "text": "Mastercard rolls out Open Banking suite - Finextra - https://t.co/2KgoZDjpzJ #openbanking #banking #digital",
      "post_date": "2019-06-04T18:39:00"
   },
   {
      "text": "RT @neirajones: World #FinTech Report 2019: The Industry is Transitioning from #OpenBanking to “Open X” \nhttps://t.co/Ni5QfeJWmT \n#markets…",
      "post_date": "2019-06-04T18:35:00"
   },
   {
      "text": "RT @programmableweb: Exploring the @bunq #API: https://t.co/uuZXTGu1kY\n\n#openbanking #fintech #PSD2 https://t.co/xKZr3g9K0H",
      "post_date": "2019-06-04T18:33:00"
   },
   {
      "text": "RT @puutwallet: FORGOT YOUR PUUT MOBILE WALLET PASSWORD? RESET IN LESS THAN 15 SECONDS.\n#puutwallet #ewallets #marketplace #messaging #p2p…",
      "post_date": "2019-06-04T18:22:00"
   },
   {
      "text": "RT @ghanem_elias: #Money2020 where does #openbanking stand after a year? Is it dying faster than expected? I think so, letting the place to…",
      "post_date": "2019-06-04T18:20:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-04T18:19:00"
   },
   {
      "text": "Only a matter of time till #OpenBanking data sharing precipitates into other sectors. Should too",
      "post_date": "2019-06-04T18:18:00"
   },
   {
      "text": "World #FinTech Report 2019: The Industry is Transitioning from #OpenBanking to “Open X” \n\nhttps://t.co/8Dhvua1yvY \n\n#finserv #banking",
      "post_date": "2019-06-04T18:15:00"
   },
   {
      "text": "RT @FinastraFS: Efficiency is the main focus of corporates’ rising interest in #openbanking. https://t.co/ppPyEjD3Rc\n\nLearn more what other…",
      "post_date": "2019-06-04T18:14:00"
   },
   {
      "text": "RT @neirajones: World #FinTech Report 2019: The Industry is Transitioning from #OpenBanking to “Open X” \nhttps://t.co/Ni5QfeJWmT \n#markets…",
      "post_date": "2019-06-04T18:10:00"
   },
   {
      "text": "RT @colindeacon: I enjoyed attending the roundtable on #OpenBanking today. Great chance to “audit” what I’ve heard at the @SenateCA #BANC m…",
      "post_date": "2019-06-04T18:09:00"
   },
   {
      "text": "One more shot from our discussion in Ottawa today. Thank you to all who attended. As the turnout indicates, there i… https://t.co/59aeyoA1BZ",
      "post_date": "2019-06-04T18:04:00"
   },
   {
      "text": "Our executive director Steve Boms discusses the benefits of #OpenBanking and #fintech with the British High Commiss… https://t.co/9iVIVJoRgb",
      "post_date": "2019-06-04T18:01:00"
   },
   {
      "text": "One year in -- who has capitalized on #OpenBanking? Insights from @neirajones: https://t.co/Bx19KK4UOm",
      "post_date": "2019-06-04T18:01:00"
   },
   {
      "text": "PayPal invests $11.2m in Swedish open banking platform Tink | Bank Innovation - https://t.co/aBhtWrt4C5 -… https://t.co/cwTJyqKJeN",
      "post_date": "2019-06-04T17:59:00"
   },
   {
      "text": "RT @colindeacon: I enjoyed attending the roundtable on #OpenBanking today. Great chance to “audit” what I’ve heard at the @SenateCA #BANC m…",
      "post_date": "2019-06-04T17:57:00"
   },
   {
      "text": "RT @TACD_Consumers: Are consumers in control of their financial data? Our panellists are discussing this at #TACDFORUM2019 #OpenBanking htt…",
      "post_date": "2019-06-04T17:53:00"
   },
   {
      "text": "RT @WFSULLIVAN3: .@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to Experien…",
      "post_date": "2019-06-04T17:53:00"
   },
   {
      "text": "I enjoyed attending the roundtable on #OpenBanking today. Great chance to “audit” what I’ve heard at the @SenateCA… https://t.co/zhgEDyxuFb",
      "post_date": "2019-06-04T17:51:00"
   },
   {
      "text": "CBN prioritises Open Banking as Centric Gateway launch initiatives https://t.co/QKMZyyEpKK #Openbanking… https://t.co/rDWX5gCyVj",
      "post_date": "2019-06-04T17:48:00"
   },
   {
      "text": "RT @SocieteGenerale: What about digital transformation, embracing new business models in #OpenBanking and working with startups by @ccalmej…",
      "post_date": "2019-06-04T17:44:00"
   },
   {
      "text": "RT @hakan_eroglu_tw: The future of #OpenBanking is about #OpenData and #PlatformBanking. Thanks @dgwbirch for welcoming me on stage at Mone…",
      "post_date": "2019-06-04T17:41:00"
   },
   {
      "text": "RT @pglyman: Love hearing @tranqy talk up conversational banking and open APIs to support the advancement of this tech @FinastraFS @Geezeo…",
      "post_date": "2019-06-04T17:41:00"
   },
   {
      "text": "RT @ghanem_elias: Happy to present @Raisin_EN’s @davidjmaireles with Advanced ScaleUp trophy by #ScaleUpQualification \n\nDriving #AppliedInn…",
      "post_date": "2019-06-04T17:35:00"
   },
   {
      "text": "RT @ConsorzioCBI: ...and even the second day is gone! 💪🏼✌🏼#M2020EU #money2020 #OpenBanking #CBIGlobe https://t.co/VV9XKZpX1t",
      "post_date": "2019-06-04T17:33:00"
   },
   {
      "text": "...and even the second day is gone! 💪🏼✌🏼#M2020EU #money2020 #OpenBanking #CBIGlobe https://t.co/VV9XKZpX1t",
      "post_date": "2019-06-04T17:32:00"
   },
   {
      "text": ".@MastercardNews' @jimwadsworth on how @Mastercard is looking to press the gas on #OpenBanking: https://t.co/i3iBpfx8cD",
      "post_date": "2019-06-04T17:30:00"
   },
   {
      "text": "RT @neirajones: World #FinTech Report 2019: The Industry is Transitioning from #OpenBanking to “Open X” \nhttps://t.co/Ni5QfeJWmT \n#markets…",
      "post_date": "2019-06-04T17:29:00"
   },
   {
      "text": "Love hearing @tranqy talk up conversational banking and open APIs to support the advancement of this tech… https://t.co/wdMGJpp7Mc",
      "post_date": "2019-06-04T17:24:00"
   },
   {
      "text": "RT @c_mendez_serres: South Korea regulator FSC is working to have local banks open their systems to #fintech Goal is to improve payment opt…",
      "post_date": "2019-06-04T17:24:00"
   },
   {
      "text": "South Korea regulator FSC is working to have local banks open their systems to #fintech Goal is to improve payment… https://t.co/x6gHnhrE7O",
      "post_date": "2019-06-04T17:20:00"
   },
   {
      "text": "RT @hakan_eroglu_tw: The future of #OpenBanking is about #OpenData and #PlatformBanking. Thanks @dgwbirch for welcoming me on stage at Mone…",
      "post_date": "2019-06-04T17:16:00"
   },
   {
      "text": "#OpenBanking requires an open mind about #fintech and #payments \n\nhttps://t.co/3pwJFEG1Qa \n\n#finserv #banking #PSD2",
      "post_date": "2019-06-04T17:15:00"
   },
   {
      "text": "RT @hakan_eroglu_tw: The future of #OpenBanking is about #OpenData and #PlatformBanking. Thanks @dgwbirch for welcoming me on stage at Mone…",
      "post_date": "2019-06-04T17:14:00"
   },
   {
      "text": "RT @tink: Big news today: @PayPal joins the Tink family! Couldn’t be more excited to announce that the fintech giant is a new investor and…",
      "post_date": "2019-06-04T17:14:00"
   },
   {
      "text": "RT @getloyalbe: It was great to see the auditorium packed for the #openbanking sessions at #Money2020EU led by @dgwbirch. Exciting times to…",
      "post_date": "2019-06-04T17:13:00"
   },
   {
      "text": "Dondi Black tweeted: Mastercard Launches Open Banking Platform To Further API Standards pymnts #openbanking\nhttps://t.co/k1VOLau5y3",
      "post_date": "2019-06-04T17:13:00"
   },
   {
      "text": "Mastercard Launches Open Banking Platform To Further API Standards @pymnts #openbanking\nhttps://t.co/uruXzdWPr5",
      "post_date": "2019-06-04T17:12:00"
   },
   {
      "text": "Two interesting #OpenBanking investment rounds, but pay attention to the WHO, not the number:\n- @TrueLayer raises $… https://t.co/ElfNV3yyIr",
      "post_date": "2019-06-04T17:09:00"
   },
   {
      "text": "The future of #OpenBanking is about #OpenData and #PlatformBanking. Thanks @dgwbirch for welcoming me on stage at M… https://t.co/a46ZLMeCdd",
      "post_date": "2019-06-04T17:05:00"
   },
   {
      "text": "It was great to see the auditorium packed for the #openbanking sessions at #Money2020EU led by @dgwbirch. Exciting… https://t.co/WeYrmhgUew",
      "post_date": "2019-06-04T17:02:00"
   },
   {
      "text": "RT @neirajones: World #FinTech Report 2019: The Industry is Transitioning from #OpenBanking to “Open X” \nhttps://t.co/Ni5QfeJWmT \n#markets…",
      "post_date": "2019-06-04T17:00:00"
   },
   {
      "text": "RT @Clarke_Michael1: Another great update from @JordanRSullivan and @JeroenDeMarteau on latest policy discussions at #money2020 including t…",
      "post_date": "2019-06-04T16:50:00"
   },
   {
      "text": "Another great update from @JordanRSullivan and @JeroenDeMarteau on latest policy discussions at #money2020 includin… https://t.co/9x5TVXWdJI",
      "post_date": "2019-06-04T16:49:00"
   },
   {
      "text": "RT @Finacle: Join us at #EBADay 2019 and learn how Finacle Virtual Accounts Management can enable your bank future proof its digital cash m…",
      "post_date": "2019-06-04T16:45:00"
   },
   {
      "text": "World #FinTech Report 2019: The Industry is Transitioning from #OpenBanking to “Open X” \nhttps://t.co/Ni5QfeJWmT… https://t.co/19Y7z2xOEc",
      "post_date": "2019-06-04T16:42:00"
   },
   {
      "text": "#Mastercard launches #OpenBanking platform to further #API standards: https://t.co/dzzyGiFdjq\n\nMastercard… https://t.co/sFfcFHEn4Z",
      "post_date": "2019-06-04T16:40:00"
   },
   {
      "text": "#Fintech: #Worldpay Launches the #Exemption Engine for Strong Customer #Authentication to Optimize #Payments Under… https://t.co/zqUTyY17T8",
      "post_date": "2019-06-04T16:39:00"
   },
   {
      "text": "RT @TACD_Consumers: Are consumers in control of their financial data? Our panellists are discussing this at #TACDFORUM2019 #OpenBanking htt…",
      "post_date": "2019-06-04T16:33:00"
   },
   {
      "text": "RT @doubleoconnor: Thanks to everyone that came down to support at the Industry Transmutation Stage. Great presentations by Caroline from @…",
      "post_date": "2019-06-04T16:28:00"
   },
   {
      "text": "Thanks to everyone that came down to support at the Industry Transmutation Stage. Great presentations by Caroline f… https://t.co/ad5fkylhwL",
      "post_date": "2019-06-04T16:27:00"
   },
   {
      "text": "The security challenges faced by open banking #Digital #openbanking #banking  https://t.co/rJI5MZpUd2",
      "post_date": "2019-06-04T16:24:00"
   },
   {
      "text": "According to @Accenture at @money2020 all Regulators are looking at #OpenBanking and more specifically Taylor Swift… https://t.co/mRQUkI86sc",
      "post_date": "2019-06-04T16:21:00"
   },
   {
      "text": "RT @PJHines: .@Pelican_Pay partners with @StarlingBank to deliver pan-European small business and merchant payments services \nhttps://t.co/…",
      "post_date": "2019-06-04T16:19:00"
   },
   {
      "text": "@dgwbirch : “Come on Steve, surely if we truly open up Banking fully it will be complete anarchy”?!  @stkirsch : “O… https://t.co/nRMztTiI3E",
      "post_date": "2019-06-04T16:18:00"
   },
   {
      "text": "RT @tink: Big news today: @PayPal joins the Tink family! Couldn’t be more excited to announce that the fintech giant is a new investor and…",
      "post_date": "2019-06-04T16:11:00"
   },
   {
      "text": "RT @pymnts https://t.co/Gyq06nkYI1 .@tink raises $11 million from @PayPal:#payments #OpenBanking",
      "post_date": "2019-06-04T16:10:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-04T16:09:00"
   },
   {
      "text": "Catalyst Business Finance implements Open Banking - Bridging &amp; Commerical - https://t.co/yGyWSunFFQ #openbanking #banking #digital",
      "post_date": "2019-06-04T16:09:00"
   },
   {
      "text": "Are consumers in control of their financial data? Our panellists are discussing this at #TACDFORUM2019 #OpenBanking https://t.co/efoqJylWeF",
      "post_date": "2019-06-04T16:07:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T16:05:00"
   },
   {
      "text": "RT @NorthRowChecks: Imran Gulamhuseinwala, the implementation trustee for Open Banking, explains the lessons learned in the UK from the pre…",
      "post_date": "2019-06-04T16:03:00"
   },
   {
      "text": ".@tink raises $11 million from @PayPal: https://t.co/8z6XviVTg5 #payments #OpenBanking",
      "post_date": "2019-06-04T16:00:00"
   },
   {
      "text": "RT @enfuce: Looking for change-makers? You’ve found us! #teamenfuce #money2020europe #payments #OpenBanking https://t.co/VJOx3NysJg",
      "post_date": "2019-06-04T15:56:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-04T15:55:00"
   },
   {
      "text": "RT @Ryan_EP: Great presentation from @FJRisseeuw on the @money2020 stage. Super proud the @FundingOptions team can announce we’ll be one of…",
      "post_date": "2019-06-04T15:53:00"
   },
   {
      "text": "#OpenBanking is coming. @JeffreyAbbott tells us how traditional retail banks can stay relevant and retain customers… https://t.co/i7zkaFGyth",
      "post_date": "2019-06-04T15:51:00"
   },
   {
      "text": "39% of European financial institutions view the arrival of #openbanking regulation as the biggest current threat to… https://t.co/zn8p1nSC73",
      "post_date": "2019-06-04T15:51:00"
   },
   {
      "text": "#PayPal invests $11.2m in @Tink: https://t.co/27c29WyTPJ #fintech #OpenBanking https://t.co/LF1RP4gYfS",
      "post_date": "2019-06-04T15:50:00"
   },
   {
      "text": ".@MastercardNews' @jimwadsworth on why #OpenBanking needs a standard to deliver its full potential: https://t.co/tp1Kl01bMo",
      "post_date": "2019-06-04T15:46:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-04T15:46:00"
   },
   {
      "text": "RT @ghanem_elias: New entrants in FS leading to rebundling of products and services \n\nThe future is not same for everyone! \n\n#M2020EU #Open…",
      "post_date": "2019-06-04T15:41:00"
   },
   {
      "text": "RT @Future_Assetmgt: European financial institutions see Open Banking as the biggest current threat https://t.co/RpKeMxOfbB #business #oppo…",
      "post_date": "2019-06-04T15:37:00"
   },
   {
      "text": "European financial institutions see Open Banking as the biggest current threat https://t.co/RpKeMxOfbB #business… https://t.co/cwwc0HbOj0",
      "post_date": "2019-06-04T15:36:00"
   },
   {
      "text": "Swedish #OpenBanking Startup @Tink Announces #PayPal as a Strategic Investor \nhttps://t.co/RmW6g0QY47 \n#fintech… https://t.co/14jTAHhmMY",
      "post_date": "2019-06-04T15:35:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T15:29:00"
   },
   {
      "text": "Online #payments giant @PayPal invests in Swedish #Openbanking platform @tink. \n\nhttps://t.co/w98tbpAVH5 #PayPalxTink #Tink #PayPal",
      "post_date": "2019-06-04T15:28:00"
   },
   {
      "text": "RT @ghanem_elias: Re-bundling in financial services happening in the wake of evolving #FinTech landscape in the #OpenX era \n\n#M2020EU #Open…",
      "post_date": "2019-06-04T15:27:00"
   },
   {
      "text": "RT @ghanem_elias: Re-bundling in financial services happening in the wake of evolving #FinTech landscape in the #OpenX era \n\n#M2020EU #Open…",
      "post_date": "2019-06-04T15:25:00"
   },
   {
      "text": "RT @tink: Big news today: @PayPal joins the Tink family! Couldn’t be more excited to announce that the fintech giant is a new investor and…",
      "post_date": "2019-06-04T15:22:00"
   },
   {
      "text": "Awesome session on problem solving using  #openbanking delivered by @doubleoconnor ,CEO of @getcoconut at Day 2 of… https://t.co/UgITxVkIBb",
      "post_date": "2019-06-04T15:21:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T15:16:00"
   },
   {
      "text": "RT @enesturkcom: While I was tweeting about this #openbanking flood, @dgwbirch was joking with me from the stage as I was scrolling through…",
      "post_date": "2019-06-04T15:12:00"
   },
   {
      "text": "RT @WFSULLIVAN3: .@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to Experien…",
      "post_date": "2019-06-04T15:11:00"
   },
   {
      "text": ".@ghanem_elias shares how the industry needs to leapfrog #OpenBanking to #OpenX where we shift from\n1. Product to E… https://t.co/kElMB9Gwc4",
      "post_date": "2019-06-04T15:10:00"
   },
   {
      "text": "RT @Vocalink: #Mastercard commissioned a report on the current state of #openbanking, which you can read here - https://t.co/qKaEwYOKyi htt…",
      "post_date": "2019-06-04T15:09:00"
   },
   {
      "text": "RT @ghanem_elias: Re-bundling in financial services happening in the wake of evolving #FinTech landscape in the #OpenX era \n\n#M2020EU #Open…",
      "post_date": "2019-06-04T15:09:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T15:09:00"
   },
   {
      "text": "RT @SwoopFunding: It’s a packed house here at @money2020 for our CEO, Andrea Reynolds, and our fellow @nesta_uk winners, @getcoconut and @F…",
      "post_date": "2019-06-04T15:08:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T15:07:00"
   },
   {
      "text": "Re-bundling in financial services happening in the wake of evolving #FinTech landscape in the #OpenX era \n\n#M2020EU… https://t.co/LMsQnEjrxk",
      "post_date": "2019-06-04T15:07:00"
   },
   {
      "text": "Join us at #EBADay 2019 and learn how Finacle Virtual Accounts Management can enable your bank future proof its dig… https://t.co/keS1WGghML",
      "post_date": "2019-06-04T15:07:00"
   },
   {
      "text": "RT @MastercardEU: \"Banks also have to overcome implementation and delivery challenges,\" says Jason Lane, EVP, Market Development, Europe, #…",
      "post_date": "2019-06-04T15:06:00"
   },
   {
      "text": "Make sure to visit the @FinastraFS booth at #Money2020EU.\n\nMeanwhile, check out our interview w/@elirosner &amp; Smita… https://t.co/tfqa5IhpGx",
      "post_date": "2019-06-04T15:05:00"
   },
   {
      "text": "It’s a packed house here at @money2020 for our CEO, Andrea Reynolds, and our fellow @nesta_uk winners, @getcoconut… https://t.co/VkH5L6sAfl",
      "post_date": "2019-06-04T15:04:00"
   },
   {
      "text": "London fintech Yapily raises $5.4M for Open Banking API - TechRound - https://t.co/jRqcx7csw5 #openbanking #banking #digital",
      "post_date": "2019-06-04T15:04:00"
   },
   {
      "text": "UK startup fintech TrueLayer just won funding from China's Tencent and Singaporean wealth fund Temasek - Business I… https://t.co/luJ8F3qGjE",
      "post_date": "2019-06-04T15:04:00"
   },
   {
      "text": "RT @ttavlas: London fintech Yapily raises $5.4M for Open Banking API - TechRound - https://t.co/jRqcx7u3nD #openbanking #banking #digital",
      "post_date": "2019-06-04T15:03:00"
   },
   {
      "text": "RT @ghanem_elias: New entrants in FS leading to rebundling of products and services \n\nThe future is not same for everyone! \n\n#M2020EU #Open…",
      "post_date": "2019-06-04T15:02:00"
   },
   {
      "text": "While I was tweeting about this #openbanking flood, @dgwbirch was joking with me from the stage as I was scrolling… https://t.co/9jxo9wBsZT",
      "post_date": "2019-06-04T15:02:00"
   },
   {
      "text": "RT @ghanem_elias: Join us @money2020 #J101 in half hour at 13.30 for the first key findings session of #WFTR19! \n\n#M2020EU #OpenBanking #Op…",
      "post_date": "2019-06-04T15:01:00"
   },
   {
      "text": "RT @ghanem_elias: Happy to present @Raisin_EN’s @davidjmaireles with Advanced ScaleUp trophy by #ScaleUpQualification \n\nDriving #AppliedInn…",
      "post_date": "2019-06-04T15:00:00"
   },
   {
      "text": "RT @UKOpenBanking: 127 regulated providers now offer #OpenBanking, including 81 third party providers, 46 account providers, and 23 regulat…",
      "post_date": "2019-06-04T14:58:00"
   },
   {
      "text": "New entrants in FS leading to rebundling of products and services \n\nThe future is not same for everyone! \n\n#M2020EU… https://t.co/2ikUScpcz3",
      "post_date": "2019-06-04T14:58:00"
   },
   {
      "text": "RT @ghanem_elias: Happy to present @Raisin_EN’s @davidjmaireles with Advanced ScaleUp trophy by #ScaleUpQualification \n\nDriving #AppliedInn…",
      "post_date": "2019-06-04T14:57:00"
   },
   {
      "text": "That's a big number, and a bit of a surprise to me. Life in e-commerce is about to get interesting. Which of the bi… https://t.co/nXaqZ73dMP",
      "post_date": "2019-06-04T14:57:00"
   },
   {
      "text": "All set for @ghanem_elias to share views on shift from #OpenBanking to #OpenX from #WFTR19.  #M2020Eu https://t.co/1rURRCv5Wv",
      "post_date": "2019-06-04T14:55:00"
   },
   {
      "text": "dedicated to all PolishAPI project group members :-) #openbanking #psd2 #api https://t.co/j6I6O6XJQP",
      "post_date": "2019-06-04T14:54:00"
   },
   {
      "text": "London fintech Yapily raises $5.4M for Open Banking API - TechRound - https://t.co/jRqcx7u3nD #openbanking #banking #digital",
      "post_date": "2019-06-04T14:54:00"
   },
   {
      "text": "Great talk by @RoPaulette of @facebook. For a really cool use-case of #OpenBanking that is cross border and connect… https://t.co/rtKuwwL42S",
      "post_date": "2019-06-04T14:53:00"
   },
   {
      "text": "RT @token_io: Full house for @dgwbirch at his #Money2020Eu #OpenBanking sessions. \"If you saw this as a #PSD2 exercise, you made a mistake!…",
      "post_date": "2019-06-04T14:53:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to underpin…",
      "post_date": "2019-06-04T14:47:00"
   },
   {
      "text": "RT @PetitDonut1: Jim Wadsworth, SVP Open Banking for MasterCard, is really bullish about collabs between fintech companies and banks. PSD2'…",
      "post_date": "2019-06-04T14:47:00"
   },
   {
      "text": "RT @PetitDonut1: Jim Wadsworth, SVP Open Banking for MasterCard, is really bullish about collabs between fintech companies and banks. PSD2'…",
      "post_date": "2019-06-04T14:46:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to underpin…",
      "post_date": "2019-06-04T14:46:00"
   },
   {
      "text": "Paulette Rowe,  Head of Payments @facebook: fb/whatsapp 'should be able to send payments as easily as we can send p… https://t.co/KBjQwePnDG",
      "post_date": "2019-06-04T14:45:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T14:45:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T14:43:00"
   },
   {
      "text": "Calling all @Money2020-ers. The pink booth is filled with attendees curious to hear about how the race to September… https://t.co/XOEgoo9vhF",
      "post_date": "2019-06-04T14:43:00"
   },
   {
      "text": "RT @JeroenDeMarteau: According to @Accenture at @money2020 all Regulators are looking at #OpenBanking and more specifically Open data but a…",
      "post_date": "2019-06-04T14:41:00"
   },
   {
      "text": "RT @JeroenDeMarteau: According to @Accenture at @money2020 all Regulators are looking at #OpenBanking and more specifically Open data but a…",
      "post_date": "2019-06-04T14:40:00"
   },
   {
      "text": "#Fintech: #Worldpay Launches the #Exemption Engine for Strong Customer #Authentication to Optimize #Payments Under… https://t.co/kSLr3gJE0M",
      "post_date": "2019-06-04T14:40:00"
   },
   {
      "text": "@Sequent and TIS Selected by Major Japanese Bank and Leading Card Issuer to Deliver #SecureMobilePayments… https://t.co/IVjI0iXYK3",
      "post_date": "2019-06-04T14:39:00"
   },
   {
      "text": "RT @saltedge: Like all big #technology #innovations, #OpenBanking will bring both challenges and opportunities for #fintech market players.…",
      "post_date": "2019-06-04T14:38:00"
   },
   {
      "text": "RT @GTSoftware: There are still spaces left! Don’t miss tomorrow’s free webinar, where we will be discussing the role of #APIs in #OpenBank…",
      "post_date": "2019-06-04T14:36:00"
   },
   {
      "text": "RT @GTSoftware: There are still spaces left! Don’t miss tomorrow’s free webinar, where we will be discussing the role of #APIs in #OpenBank…",
      "post_date": "2019-06-04T14:35:00"
   },
   {
      "text": "Like all big #technology #innovations, #OpenBanking will bring both challenges and opportunities for #fintech marke… https://t.co/LMBiVMm1kC",
      "post_date": "2019-06-04T14:34:00"
   },
   {
      "text": ".@ idgorilla: GuruAllan moderating a great discussion with Kevin Morris and Brad Keats. #openbanking and… https://t.co/jKLW00oOSe",
      "post_date": "2019-06-04T14:32:00"
   },
   {
      "text": "Day 2 of @money2020 is coming to a close! One more day left to come chat with us about #PSD2 compliance and… https://t.co/UhG96W7M91",
      "post_date": "2019-06-04T14:30:00"
   },
   {
      "text": ".@Mastercard launches #OpenBanking platform to further #API standards: https://t.co/i3iBpffwO3",
      "post_date": "2019-06-04T14:30:00"
   },
   {
      "text": "Very interesting presentation by @hakan_eroglu_tw from @Accenture on the future of #OpenBanking. Check out Meniga’s… https://t.co/6PIk985gGw",
      "post_date": "2019-06-04T14:29:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T14:28:00"
   },
   {
      "text": "Really proud of this customer case which we enabled with #CM colleagues - a true example of how #APIs can be levera… https://t.co/CoM4FJhlrb",
      "post_date": "2019-06-04T14:27:00"
   },
   {
      "text": ".@Pelican_Pay partners with @StarlingBank to deliver pan-European small business and merchant payments services… https://t.co/Hfauk8UqTd",
      "post_date": "2019-06-04T14:27:00"
   },
   {
      "text": "@GuruAllan moderating a great discussion with Kevin Morris and Brad Keats. #openbanking and #digitalhealth are unit… https://t.co/8zNXZnau6h",
      "post_date": "2019-06-04T14:26:00"
   },
   {
      "text": "RT @cfigueredo12: Thank you @BBVAInnovation for having me as part of your panel discussion at the BBVA Open Summit 2019 in Mexico City abou…",
      "post_date": "2019-06-04T14:25:00"
   },
   {
      "text": "Thank you @BBVAInnovation for having me as part of your panel discussion at the BBVA Open Summit 2019 in Mexico Cit… https://t.co/cc9lsB2ekl",
      "post_date": "2019-06-04T14:24:00"
   },
   {
      "text": "Watch out, the platforms are coming! Very insightful presentation on the real impact of #openbanking by… https://t.co/mz0NlpQqBY",
      "post_date": "2019-06-04T14:24:00"
   },
   {
      "text": "Had productive meetings with @RapydPayments, @TransferMate, @Mastercard &amp; numerous of other industry leaders during… https://t.co/sJDJNsv6rY",
      "post_date": "2019-06-04T14:22:00"
   },
   {
      "text": "[#Infographic] Delivering on the promises of Open Banking\n\nhttps://t.co/3yokZ6zdve\n\n#Innovation #Fintech #Banking… https://t.co/nZEWFemD8u",
      "post_date": "2019-06-04T14:20:00"
   },
   {
      "text": "RT @FabrickPlatform: #Fabrick turns one today! \nWe are celebrating during Money 20/20 Europe presenting much news but ... there are as many…",
      "post_date": "2019-06-04T14:18:00"
   },
   {
      "text": "RT @ghanem_elias: From bundling, to un-bundling to re-bundling! \nEntry of new players have set the stage for re-bundling of products and se…",
      "post_date": "2019-06-04T14:16:00"
   },
   {
      "text": "RT @WFSULLIVAN3: VIDEO:  Catch the highlights of our recently released #WFTR19 and swing by @Capgemini booth J101 at 13:30 or 15:30 today w…",
      "post_date": "2019-06-04T14:16:00"
   },
   {
      "text": "According to @Accenture at @money2020 all Regulators are looking at #OpenBanking and more specifically Open data bu… https://t.co/A5MDqOAthe",
      "post_date": "2019-06-04T14:14:00"
   },
   {
      "text": "Exciting new partnership with the team at Ordo, providing leading edge platform for secure and transparent #payment… https://t.co/pyaLWAlqmr",
      "post_date": "2019-06-04T14:13:00"
   },
   {
      "text": "#APIs and #OpenBanking. Great talk by by @JUggeldahl, @Nordea_FI https://t.co/oJ1YL04e38",
      "post_date": "2019-06-04T14:13:00"
   },
   {
      "text": "RT @ghanem_elias: From bundling, to un-bundling to re-bundling! \nEntry of new players have set the stage for re-bundling of products and se…",
      "post_date": "2019-06-04T14:12:00"
   },
   {
      "text": "RT @ghanem_elias: Happy to present @Raisin_EN’s @davidjmaireles with Advanced ScaleUp trophy by #ScaleUpQualification \n\nDriving #AppliedInn…",
      "post_date": "2019-06-04T14:10:00"
   },
   {
      "text": ".@signicat, https://t.co/zreTLgb58T to offer #digitalidentity to German businesses https://t.co/aCreBIfuDN… https://t.co/EvOu4clmkL",
      "post_date": "2019-06-04T14:10:00"
   },
   {
      "text": "RT @gargsm: Great to discuss @reflowzone payments with @UKOpenBanking team at @money2020. Amazing people behind the #openbanking success ht…",
      "post_date": "2019-06-04T14:08:00"
   },
   {
      "text": "Happy to present @Raisin_EN’s @davidjmaireles with Advanced ScaleUp trophy by #ScaleUpQualification \n\nDriving… https://t.co/dytERxEa0E",
      "post_date": "2019-06-04T14:08:00"
   },
   {
      "text": "RT @gargsm: Great to discuss @reflowzone payments with @UKOpenBanking team at @money2020. Amazing people behind the #openbanking success ht…",
      "post_date": "2019-06-04T14:06:00"
   },
   {
      "text": "@Tink, the European #openbanking platform, announces @PayPal as a strategic investor – #TechCrunch https://t.co/5o4cJzdabb",
      "post_date": "2019-06-04T14:05:00"
   },
   {
      "text": "Slow progress on open banking putting Canada further behind, observers warn https://t.co/EsX8KFX9t3 via… https://t.co/AZsKlN3Sms",
      "post_date": "2019-06-04T14:04:00"
   },
   {
      "text": "While #OpenBanking is on everyone’s lips, what’s really happening? I was recently invited to discuss the topic with… https://t.co/b3VHGG5urL",
      "post_date": "2019-06-04T13:58:00"
   },
   {
      "text": "From bundling, to un-bundling to re-bundling! \nEntry of new players have set the stage for re-bundling of products… https://t.co/LGwFU3fcCF",
      "post_date": "2019-06-04T13:58:00"
   },
   {
      "text": "RT @enfuce: Day 2 at #Money2020! Stop by our booth Y30 for a chat or participate in our competition and win a Suunto sports watch! #payment…",
      "post_date": "2019-06-04T13:52:00"
   },
   {
      "text": "89% of merchants \"primed for open banking\" - @NUAPAY https://t.co/2mYypB08OA #OpenBanking",
      "post_date": "2019-06-04T13:51:00"
   },
   {
      "text": "RT @KristianT: Standing room only for @dgwbirch's interview with Raman Bhatia, head of digital bank UK at @HSBC. Looking at the promise of…",
      "post_date": "2019-06-04T13:51:00"
   },
   {
      "text": "EU’s Online Economy May Lose €57Bn over New #Payments Rules \nhttps://t.co/wsvA5TiEQj \n#authentication #OpenBanking… https://t.co/ZpY32Gh1YG",
      "post_date": "2019-06-04T13:50:00"
   },
   {
      "text": "The future of banking lies in mobile apps: https://t.co/Ld5kw2XYVc\n#digitalbanking #fintech #Payments #banking… https://t.co/sXUVW8Tlus",
      "post_date": "2019-06-04T13:49:00"
   },
   {
      "text": "In #Payments Today: Observers warn slow progress on #openbanking is putting Canada further behind, @PaymentsCanada… https://t.co/brLgdsD4Gt",
      "post_date": "2019-06-04T13:48:00"
   },
   {
      "text": "RT @TACD_Consumers: #TACDFORUM2019 will soon be kicking off in Washington D.C. #digital #food #openbanking  #privacy #Competition https://t…",
      "post_date": "2019-06-04T13:48:00"
   },
   {
      "text": "Looking forward to speaking about the future of #OpenBanking today at #m2020eu https://t.co/lJUvtZzgGU",
      "post_date": "2019-06-04T13:46:00"
   },
   {
      "text": "Be sure to head over to #Money2020EU Commercial Galvanization stage in time for @ghanem_elias 16:40 presentation to… https://t.co/5J2WGiLWpg",
      "post_date": "2019-06-04T13:46:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T13:46:00"
   },
   {
      "text": "RT @GhelaBoskovich: Standing room only for lessons learned from #openbanking with @Louisehbeaumont @nikhilkumarks @GavinLittlejohn @BANKIFI…",
      "post_date": "2019-06-04T13:44:00"
   },
   {
      "text": "RT @opeadeoye: We what...?\n\nWe. Keep. Moving.\n\nThanks for the hustle @dejiolowe\n\n#OpenBanking https://t.co/ie2P0uh1Mt",
      "post_date": "2019-06-04T13:43:00"
   },
   {
      "text": "@C_M_OConnor @MalauzaiMonkeys Which makes https://t.co/lrXz22DNKZ a true platform. We work with everyone. #fintech… https://t.co/DTwVcrl66G",
      "post_date": "2019-06-04T13:38:00"
   },
   {
      "text": "There are still spaces left! Don’t miss tomorrow’s free webinar, where we will be discussing the role of #APIs in… https://t.co/Gzps7K6FU1",
      "post_date": "2019-06-04T13:37:00"
   },
   {
      "text": "Nuapay research finds 89 percent of merchants are primed for Open Banking https://t.co/sNUHhH0ssy via @ThePaypers v… https://t.co/0SBrJj6ZWf",
      "post_date": "2019-06-04T13:35:00"
   },
   {
      "text": "RT @gargsm: Great to discuss @reflowzone payments with @UKOpenBanking team at @money2020. Amazing people behind the #openbanking success ht…",
      "post_date": "2019-06-04T13:26:00"
   },
   {
      "text": "RT @nafisalam: The #futureofbanking is moving to a shared #marketplace where #banks must think beyond #openbanking\n\n#API #Finserv #Fintech…",
      "post_date": "2019-06-04T13:25:00"
   },
   {
      "text": "The #futureofbanking is moving to a shared #marketplace where #banks must think beyond #openbanking\n\n#API #Finserv… https://t.co/D6O9siX66g",
      "post_date": "2019-06-04T13:25:00"
   },
   {
      "text": "Great to discuss @reflowzone payments with @UKOpenBanking team at @money2020. Amazing people behind the… https://t.co/dDBGcjCSTd",
      "post_date": "2019-06-04T13:25:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T13:23:00"
   },
   {
      "text": "RT @FabrickPlatform: #Fabrick turns one today! \nWe are celebrating during Money 20/20 Europe presenting much news but ... there are as many…",
      "post_date": "2019-06-04T13:21:00"
   },
   {
      "text": "RT @b2econsulting: NEW EVENT - Join us on 13th June to discuss #OpenBanking &amp; what it means for mobile for switching for new services &amp; wha…",
      "post_date": "2019-06-04T13:19:00"
   },
   {
      "text": "European #OpenBanking platform @tink announces @PayPal as strategic investor https://t.co/EEOKl6JMSq | @sohear for… https://t.co/1AG8sTaECm",
      "post_date": "2019-06-04T13:16:00"
   },
   {
      "text": "RT @RawdonAdams: Correspondents removing services should be a catalyst for increased #OpenBanking activity in this region. \n\nhttps://t.co/W…",
      "post_date": "2019-06-04T13:15:00"
   },
   {
      "text": "Talk about a couple that kicks ass. @BrynnPutnam's fitness startup @getthemirrornears $300M valuation w/ fresh fund… https://t.co/4Wgt3g2aVy",
      "post_date": "2019-06-04T13:15:00"
   },
   {
      "text": "RT @Aranchalee: #m2020eu #Railsbank delighted to have Author of Banking 2020 Mark Swain doing a book signing on stand K72 today at 4.30pm a…",
      "post_date": "2019-06-04T13:12:00"
   },
   {
      "text": "#m2020eu #Railsbank delighted to have Author of Banking 2020 Mark Swain doing a book signing on stand K72 today at… https://t.co/5FkCaTDdnu",
      "post_date": "2019-06-04T13:11:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T13:08:00"
   },
   {
      "text": "E-commerce groups including @amazon, @Worldpay_Global and @stripe sound alarm over lack of preparedness for PSD2's… https://t.co/a97tW8TAfb",
      "post_date": "2019-06-04T13:07:00"
   },
   {
      "text": "Over 80% of banks in #APAC have invested in #OpenBanking. Nuggets of info like this and more at @Accenture's latest… https://t.co/ohJPvhTIoW",
      "post_date": "2019-06-04T13:05:00"
   },
   {
      "text": "Research Finds 89% of Merchants are Primed for Open Banking\nhttps://t.co/JwouC0MlYI #fintech #banking #openbanking… https://t.co/Abl2EJxhYr",
      "post_date": "2019-06-04T13:04:00"
   },
   {
      "text": "Efficiency is the main focus of corporates’ rising interest in #openbanking. https://t.co/ppPyEjD3Rc\n\nLearn more wh… https://t.co/kgNVJPQl5A",
      "post_date": "2019-06-04T13:01:00"
   },
   {
      "text": "Menno van Leeuwen (@MennovL ), @MoneYouNL paints an in-depth picture of current Dutch #banking and #fintech system,… https://t.co/26nNaSkebC",
      "post_date": "2019-06-04T13:00:00"
   },
   {
      "text": "RT @GetFutureBank: Report: The Industry is Transitioning from #OpenBanking to “Open X” https://t.co/Dizh6M1hcz\n#fintech #banking  #openapi…",
      "post_date": "2019-06-04T12:58:00"
   },
   {
      "text": "#PayPal invests $11.2m in @Tink: https://t.co/urBNvXrZTo #fintech #openbanking https://t.co/2hTlrqRDmU",
      "post_date": "2019-06-04T12:56:00"
   },
   {
      "text": "Full house for @dgwbirch at his #Money2020Eu #OpenBanking sessions. \"If you saw this as a #PSD2 exercise, you made… https://t.co/fADaNDMjqG",
      "post_date": "2019-06-04T12:55:00"
   },
   {
      "text": "Report: The Industry is Transitioning from #OpenBanking to “Open X” https://t.co/Dizh6M1hcz\n#fintech #banking… https://t.co/phsGnr5Hiz",
      "post_date": "2019-06-04T12:53:00"
   },
   {
      "text": "What is the right retail strategy for banking services in the digital era? Powered by APIs in an open banking envir… https://t.co/UMIYgq31r3",
      "post_date": "2019-06-04T12:50:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T12:46:00"
   },
   {
      "text": "TACD public forum starting now with @edmpirg &amp; @moniquegoyens kicking off a day full of interesting debates around… https://t.co/6RZoF2aKlv",
      "post_date": "2019-06-04T12:46:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T12:43:00"
   },
   {
      "text": "RT @Global_Kinetic: Fintech &amp; Financial Institutions: Friends, Not Foes https://t.co/uIe3W7eNy5\n#digitalbanking #fintech #Payments #banking…",
      "post_date": "2019-06-04T12:42:00"
   },
   {
      "text": "Excited to partner with @getyolt to support our clients and partners with open banking solutions\n#payments… https://t.co/qbMQf5010d",
      "post_date": "2019-06-04T12:41:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T12:41:00"
   },
   {
      "text": "LIVE: @stkirsch will be on the Industry Transmutation Stage today at 5.25pm. Not able to make it? Not to worry - we… https://t.co/606PPKME8t",
      "post_date": "2019-06-04T12:39:00"
   },
   {
      "text": "RT @tanerakcok: I was the guest of Gelecek Nasıl Gelecek in @Ekoturktv  presented by @cemsezer . We discussed about #finreach, #figo, #open…",
      "post_date": "2019-06-04T12:36:00"
   },
   {
      "text": "RT @Global_Kinetic: Fintech &amp; Financial Institutions: Friends, Not Foes https://t.co/uIe3W7eNy5\n#digitalbanking #fintech #Payments #banking…",
      "post_date": "2019-06-04T12:32:00"
   },
   {
      "text": "Fintech &amp; Financial Institutions: Friends, Not Foes https://t.co/uIe3W7eNy5\n#digitalbanking #fintech #Payments… https://t.co/wFQL5e9GqB",
      "post_date": "2019-06-04T12:31:00"
   },
   {
      "text": "RT @KristianT: Standing room only for @dgwbirch's interview with Raman Bhatia, head of digital bank UK at @HSBC. Looking at the promise of…",
      "post_date": "2019-06-04T12:31:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: Brazil develops open banking model https://t.co/PT47xCMWN5 via @ThePaypers #OpenBanking #APIs",
      "post_date": "2019-06-04T12:14:00"
   },
   {
      "text": "PayPal invests in Tink - Finextra - https://t.co/qzXYauuiX8 #openbanking #banking #digital",
      "post_date": "2019-06-04T12:14:00"
   },
   {
      "text": "RT @Infosys: Banks must craft their own #openbanking ecosystems. The winners will build a trusted platform that encompasses end-to-end cust…",
      "post_date": "2019-06-04T12:11:00"
   },
   {
      "text": "RT @GhelaBoskovich: Standing room only for lessons learned from #openbanking with @Louisehbeaumont @nikhilkumarks @GavinLittlejohn @BANKIFI…",
      "post_date": "2019-06-04T12:10:00"
   },
   {
      "text": "I was the guest of Gelecek Nasıl Gelecek in @Ekoturktv  presented by @cemsezer . We discussed about #finreach,… https://t.co/wIpZ6cU4n8",
      "post_date": "2019-06-04T12:09:00"
   },
   {
      "text": "Can banks and fintechs ever work together? - ​ \n#FinTech #OpenBanking \n#DigitalTransformation \nhttps://t.co/raan9eESBI via @raconteur",
      "post_date": "2019-06-04T12:07:00"
   },
   {
      "text": ".@Tink Gets Investment From @PayPal To Expand - https://t.co/uDh3o1ZaN5 #openbanking #Money2020EU",
      "post_date": "2019-06-04T12:06:00"
   },
   {
      "text": "Research Finds 89% of Merchants are Primed for Open Banking - The Fintech Times - https://t.co/U6GjhGCkR0 #openbanking #banking #digital",
      "post_date": "2019-06-04T12:04:00"
   },
   {
      "text": "Can't stop \"Open Banking\" success.... #openbanking #fintech #disruptive https://t.co/J2ZdUQV50d",
      "post_date": "2019-06-04T12:04:00"
   },
   {
      "text": "PayPal invests in Tink https://t.co/wmMZmTImDW\n\n#openbanking #fintech",
      "post_date": "2019-06-04T12:04:00"
   },
   {
      "text": "[#Disruption] Where in the payments industry has there been most innovation in the last 2 years?… https://t.co/KWJo5f8VEP",
      "post_date": "2019-06-04T12:00:00"
   },
   {
      "text": "RT @MobeyForum: One more week to Mobey Day Toronto. Join us on June 11-12, 2019. Event hosted by @Dentons \n \nHappy to welcome @letstechpodc…",
      "post_date": "2019-06-04T11:59:00"
   },
   {
      "text": "#openbanking &amp; #fintech types - keen to talk industry readiness (and resistance) to Sept. #PSD2 deadline. Blunt tal… https://t.co/dDSOSe47B6",
      "post_date": "2019-06-04T11:59:00"
   },
   {
      "text": "RT @BankingHub: The increased velocity of #OpenBanking technology developments and further standardization of APIs have made independent fi…",
      "post_date": "2019-06-04T11:57:00"
   },
   {
      "text": "RT @UKOpenBanking: Fantastic to see so much interest in #openbanking at the start of day2 of #m2020EU – a great panel sharing #insights and…",
      "post_date": "2019-06-04T11:54:00"
   },
   {
      "text": "FORGOT YOUR PUUT MOBILE WALLET PASSWORD? RESET IN LESS THAN 15 SECONDS.\n#puutwallet #ewallets #marketplace… https://t.co/wum3Dt1wwh",
      "post_date": "2019-06-04T11:54:00"
   },
   {
      "text": "RT @token_io: Stop by stand H10 to meet the team and talk all things #OpenBanking and #tokendigitalmoney. Thank you @thepower_50 for featur…",
      "post_date": "2019-06-04T11:48:00"
   },
   {
      "text": "RT @HollandFinTech: Sooo what does the audience think about the progress in #OpenBanking so far? Clearly waaaaay more to do... Panel with @…",
      "post_date": "2019-06-04T11:44:00"
   },
   {
      "text": "Slow progress on open banking putting Canada further behind, observers warn - Financial Post -… https://t.co/NbL7cdZiBK",
      "post_date": "2019-06-04T11:44:00"
   },
   {
      "text": "RT @UKOpenBanking: Fantastic to see so much interest in #openbanking at the start of day2 of #m2020EU – a great panel sharing #insights and…",
      "post_date": "2019-06-04T11:43:00"
   },
   {
      "text": "RT @Vocalink: #Mastercard commissioned a report on the current state of #openbanking, which you can read here - https://t.co/qKaEwYOKyi htt…",
      "post_date": "2019-06-04T11:43:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T11:43:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T11:41:00"
   },
   {
      "text": "RT @Infosys: Banks must craft their own #openbanking ecosystems. The winners will build a trusted platform that encompasses end-to-end cust…",
      "post_date": "2019-06-04T11:41:00"
   },
   {
      "text": "Stop by stand H10 to meet the team and talk all things #OpenBanking and #tokendigitalmoney. Thank you @thepower_50… https://t.co/SrarV1keCH",
      "post_date": "2019-06-04T11:41:00"
   },
   {
      "text": "World #FinTech #Report 2019: The Industry is Transitioning from Open Banking to “Open X” https://t.co/MhRKyMLgL6… https://t.co/fJdDhxXSpt",
      "post_date": "2019-06-04T11:40:00"
   },
   {
      "text": "@UkQualco @Harlequins The team are looking forward to attending. Naturally we’ll be on the lookout🧐 for insight on… https://t.co/sbYuxrOVOf",
      "post_date": "2019-06-04T11:40:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T11:38:00"
   },
   {
      "text": "#TACDFORUM2019 will soon be kicking off in Washington D.C. #digital #food #openbanking  #privacy #Competition https://t.co/Q4aN2ymtgy",
      "post_date": "2019-06-04T11:36:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T11:36:00"
   },
   {
      "text": "RT @mgboydcom: The corporate benefits to #openbanking according to finnair says @JUggeldahl @nordea at #APIDaysFinland https://t.co/os5KgNn…",
      "post_date": "2019-06-04T11:32:00"
   },
   {
      "text": "RT @lifewingmate: @NordeaAPI powers @Finnair’s value creation services and dispels myths! DX is also a very important aspect #apidaysfinlan…",
      "post_date": "2019-06-04T11:32:00"
   },
   {
      "text": "RT @KristianT: Standing room only for @dgwbirch's interview with Raman Bhatia, head of digital bank UK at @HSBC. Looking at the promise of…",
      "post_date": "2019-06-04T11:32:00"
   },
   {
      "text": "RT @ElvinaSoogun: #OpenBanking: meh?\n\n@chyppings' @dgwbirch takes to the Industry Transmutation stage @money2020, explaining that #PSD2 isn…",
      "post_date": "2019-06-04T11:31:00"
   },
   {
      "text": "RT @UKOpenBanking: #openbanking is a hot topic at #M2020EU - follow @OBL_events for news and views from the OB team as it happens - here an…",
      "post_date": "2019-06-04T11:31:00"
   },
   {
      "text": "Mastercard Launches Open Banking Platform To Further API Standards https://t.co/6PBsyIejMi #payments #openbanking #apis",
      "post_date": "2019-06-04T11:30:00"
   },
   {
      "text": "Our Head of Technology @cjemichael hosts this #openbanking webinar on the #opportunity of #openbanking for #banks -… https://t.co/uQrDoz2mH8",
      "post_date": "2019-06-04T11:30:00"
   },
   {
      "text": "RT @UKOpenBanking: Fantastic to see so much interest in #openbanking at the start of day2 of #m2020EU – a great panel sharing #insights and…",
      "post_date": "2019-06-04T11:29:00"
   },
   {
      "text": "RT @OBL_events: Day 2: Our Trustee @imrangulam talking about \"#openbanking - Lessons Learned from Year One\" at #Money2020EU #Money2020Europ…",
      "post_date": "2019-06-04T11:28:00"
   },
   {
      "text": "RT @ghanem_elias: Join us @money2020 booth #J101 today at 13.30 and 15.30 to know the key findings of #WFTR19 \n\n#OpenBanking #OpenX #M2020E…",
      "post_date": "2019-06-04T11:25:00"
   },
   {
      "text": "And what a 2 years it has been 🎂! Proud to be part of a such a passionate team at the forefront of #OpenBanking &amp; e… https://t.co/URa5B54mvG",
      "post_date": "2019-06-04T11:24:00"
   },
   {
      "text": "RT @UKOpenBanking: Fantastic to see so much interest in #openbanking at the start of day2 of #m2020EU – a great panel sharing #insights and…",
      "post_date": "2019-06-04T11:23:00"
   },
   {
      "text": "RT @ElvinaSoogun: #OpenBanking: meh?\n\n@chyppings' @dgwbirch takes to the Industry Transmutation stage @money2020, explaining that #PSD2 isn…",
      "post_date": "2019-06-04T11:22:00"
   },
   {
      "text": ".@Tink, the European #openbanking #platform, announces #PayPal as a strategic investor – @TechCrunch cc @SvetBnov… https://t.co/0Fx5uvNJaT",
      "post_date": "2019-06-04T11:21:00"
   },
   {
      "text": "RT @getyolt: #OpenBanking is all about putting people back in the driving seat. For open banking to be a success, it has to be consumer-fir…",
      "post_date": "2019-06-04T11:21:00"
   },
   {
      "text": "RT @the_idco: In this interview with Instant Focus at the FinTechStage Festival 2019, our CEO, James Varga, discusses The IDCo.'s worldwide…",
      "post_date": "2019-06-04T11:20:00"
   },
   {
      "text": "A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institu… https://t.co/jKvvtOseL9",
      "post_date": "2019-06-04T11:17:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T11:17:00"
   },
   {
      "text": "Engagement and communication to facilitate adoption in open banking. By the way our developer portal helps pave the… https://t.co/e0FBujdAej",
      "post_date": "2019-06-04T11:13:00"
   },
   {
      "text": "NEW EVENT - Join us on 13th June to discuss #OpenBanking &amp; what it means for mobile for switching for new services… https://t.co/yMLMgavuCI",
      "post_date": "2019-06-04T11:13:00"
   },
   {
      "text": "RT @SocieteGenerale: Want to meet @TreezorBanking @MoonshotOff #OpenInnovation platform and #SGVentures teams, or @ccalmeja #Cio ? It‘s now…",
      "post_date": "2019-06-04T11:10:00"
   },
   {
      "text": "@NordeaAPI powers @Finnair’s value creation services and dispels myths! DX is also a very important aspect… https://t.co/5afZNSoyUR",
      "post_date": "2019-06-04T11:09:00"
   },
   {
      "text": "The corporate benefits to #openbanking according to finnair says @JUggeldahl @nordea at #APIDaysFinland https://t.co/os5KgNn5GY",
      "post_date": "2019-06-04T11:09:00"
   },
   {
      "text": "We agree, but it has to be implemented well. \n\"APIs – realising benefits beyond the hype\"\nhttps://t.co/Mtip8ab3sJ… https://t.co/7vYJ588KzY",
      "post_date": "2019-06-04T11:07:00"
   },
   {
      "text": "RT @WFSULLIVAN3: INFOGRAPHIC - The Financial Services industry is shifting from #OpenBanking to #OpenX finds our #WFTR19 by @Capgemini.   #…",
      "post_date": "2019-06-04T11:07:00"
   },
   {
      "text": "@dgwbirch at #M2020EU EU rules lead to asymmetrical competition: Banks have to deliver customer data to third parti… https://t.co/KQJKhYUwmK",
      "post_date": "2019-06-04T11:05:00"
   },
   {
      "text": "RT @saltedge: The 1st day at @money2020 Europe was absolutely fantastic! Ready for Day 2 and enjoying the Fireside chat the value of #OpenB…",
      "post_date": "2019-06-04T11:05:00"
   },
   {
      "text": "Who benefits most from open banking? Our survey says... competitors we haven’t heard of yet #openbanking… https://t.co/CxzZp2Ld8e",
      "post_date": "2019-06-04T11:04:00"
   },
   {
      "text": "Banking Automation Bulletin by RBR is on top of all the news coming out of #M2020EU #payments #openbanking #CX #DX… https://t.co/JOvbgMhoA6",
      "post_date": "2019-06-04T11:03:00"
   },
   {
      "text": "let's see where @JUggeldahl will tell us #PSD2 is at here at @ApidaysFinland. it does feel like the initial hyperac… https://t.co/eS2mlPiNQx",
      "post_date": "2019-06-04T11:02:00"
   },
   {
      "text": "RT @OBL_events: Day 2: Our Trustee @imrangulam talking about \"#openbanking - Lessons Learned from Year One\" at #Money2020EU #Money2020Europ…",
      "post_date": "2019-06-04T11:01:00"
   },
   {
      "text": "What triggered open banking? Where are we now? Hype Cycle, staying relevant, competitive landscape #openbanking… https://t.co/qr9VAEEWvP",
      "post_date": "2019-06-04T11:00:00"
   },
   {
      "text": "RT @OBL_events: Day 2: Our Trustee @imrangulam talking about \"#openbanking - Lessons Learned from Year One\" at #Money2020EU #Money2020Europ…",
      "post_date": "2019-06-04T11:00:00"
   },
   {
      "text": "RT @Ryan_EP: Great presentation from @FJRisseeuw on the @money2020 stage. Super proud the @FundingOptions team can announce we’ll be one of…",
      "post_date": "2019-06-04T11:00:00"
   },
   {
      "text": "RT @Midwinterfs: Our Executive Director @julian_plummer takes advisers and licensees through the \"once in a lifetime\" #openbanking opportun…",
      "post_date": "2019-06-04T10:59:00"
   },
   {
      "text": "Very entertaining way to tell the ugly truth for banks from Dave Birch #OpenBanking #Money2020EU https://t.co/mRKk7o6clb",
      "post_date": "2019-06-04T10:59:00"
   },
   {
      "text": "RT @MastercardEU: \"Banks also have to overcome implementation and delivery challenges,\" says Jason Lane, EVP, Market Development, Europe, #…",
      "post_date": "2019-06-04T10:58:00"
   },
   {
      "text": "Imran Gulamhuseinwala, the implementation trustee for Open Banking, explains the lessons learned in the UK from the… https://t.co/3gRsRyHcM8",
      "post_date": "2019-06-04T10:58:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to underpin…",
      "post_date": "2019-06-04T10:57:00"
   },
   {
      "text": "RT @ghanem_elias: #Money2020 where does #openbanking stand after a year? Is it dying faster than expected? I think so, letting the place to…",
      "post_date": "2019-06-04T10:57:00"
   },
   {
      "text": "Great story of our CEO @FJRisseeuw  live on stage here @money2020 @getyolt #openbanking #fintech https://t.co/BfFGl7RFPr",
      "post_date": "2019-06-04T10:57:00"
   },
   {
      "text": "Join us @money2020 #J101 in half hour at 13.30 for the first key findings session of #WFTR19! \n\n#M2020EU… https://t.co/g0pwCxgunn",
      "post_date": "2019-06-04T10:57:00"
   },
   {
      "text": "PayPal look to Tink in the Open Banking market\nhttps://t.co/zsgWB1ehmr\n#OpenBanking #FinTech #investments https://t.co/dGPW6M5HpC",
      "post_date": "2019-06-04T10:55:00"
   },
   {
      "text": "RT @Ryan_EP: Great presentation from @FJRisseeuw on the @money2020 stage. Super proud the @FundingOptions team can announce we’ll be one of…",
      "post_date": "2019-06-04T10:54:00"
   },
   {
      "text": "RT @tink: Big news today: @PayPal joins the Tink family! Couldn’t be more excited to announce that the fintech giant is a new investor and…",
      "post_date": "2019-06-04T10:53:00"
   },
   {
      "text": "RT @Ryan_EP: Great presentation from @FJRisseeuw on the @money2020 stage. Super proud the @FundingOptions team can announce we’ll be one of…",
      "post_date": "2019-06-04T10:52:00"
   },
   {
      "text": "RT @chyppings: @dgwbirch  on stage discussing #openbanking #psd2 #Money2020EU https://t.co/nO8tmcgtqf",
      "post_date": "2019-06-04T10:52:00"
   },
   {
      "text": "Great presentation from @FJRisseeuw on the @money2020 stage. Super proud the @FundingOptions team can announce we’l… https://t.co/BqC9t3Yxks",
      "post_date": "2019-06-04T10:51:00"
   },
   {
      "text": "RT @pekkakokko: @getyolt @FJRisseeuw: Open Banking will empower customers like Spotify empowered music listeners. #Money2020EU #openbanking…",
      "post_date": "2019-06-04T10:50:00"
   },
   {
      "text": "Bank response #OpenBanking #Money2020EU https://t.co/0p4ZxvQ0Ka",
      "post_date": "2019-06-04T10:50:00"
   },
   {
      "text": "Here is CASHOFF Europe Director Darren Hughes, explaining the benefits of CASHOFF services for banks, brands and in… https://t.co/k8SyMIByyb",
      "post_date": "2019-06-04T10:50:00"
   },
   {
      "text": "@dgwbirch  on stage discussing #openbanking #psd2 #Money2020EU https://t.co/nO8tmcgtqf",
      "post_date": "2019-06-04T10:49:00"
   },
   {
      "text": "Day 2: Our Trustee @imrangulam talking about \"#openbanking - Lessons Learned from Year One\" at #Money2020EU… https://t.co/smRq1ASq1r",
      "post_date": "2019-06-04T10:49:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T10:48:00"
   },
   {
      "text": "RT @Jarkko_Moilanen: The best comment corner at #APIdaysFinland event. People with me are keyplayers in Nordic Open Banking business \n@JUgg…",
      "post_date": "2019-06-04T10:48:00"
   },
   {
      "text": "The gold model of a bank #OpenBanking #Money2020EU https://t.co/QrJUpGTfaQ",
      "post_date": "2019-06-04T10:46:00"
   },
   {
      "text": "RT @thepower_50: Make sure to visit @Currencycloud's booth at #Money2020EU. \n\nThey are featured in our \"Ones to Watch\" supplement. :)\n\n#fin…",
      "post_date": "2019-06-04T10:46:00"
   },
   {
      "text": "RT @thepower_50: Make sure to visit @Currencycloud's booth at #Money2020EU. \n\nThey are featured in our \"Ones to Watch\" supplement. :)\n\n#fin…",
      "post_date": "2019-06-04T10:45:00"
   },
   {
      "text": "RT @IdentityNorth: It's here! Check out the IdentityNORTH 2019 agenda. From Open Banking and Biometrics, to Privacy and Quantum, IdentityNO…",
      "post_date": "2019-06-04T10:45:00"
   },
   {
      "text": "Make sure to connect w/@token_io at #Money2020EU.\n\nThey are featured in our \"Ones to Watch\" supplement. :)… https://t.co/rUQvaf4Pco",
      "post_date": "2019-06-04T10:45:00"
   },
   {
      "text": "The best comment corner at #APIdaysFinland event. People with me are keyplayers in Nordic Open Banking business… https://t.co/DJoDociaZY",
      "post_date": "2019-06-04T10:45:00"
   },
   {
      "text": "In this interview with Instant Focus at the FinTechStage Festival 2019, our CEO, James Varga, discusses The IDCo.'s… https://t.co/lJrngFujl6",
      "post_date": "2019-06-04T10:44:00"
   },
   {
      "text": "RT @neirajones: #Fintech: @StarlingBank Partners with #Payments Platform #Tribe\nhttps://t.co/yji0eZ8laJ \n#OpenBanking #Banking #PSD2 \n@Trib…",
      "post_date": "2019-06-04T10:44:00"
   },
   {
      "text": "RT @getyolt: #OpenBanking is all about putting people back in the driving seat. For open banking to be a success, it has to be consumer-fir…",
      "post_date": "2019-06-04T10:42:00"
   },
   {
      "text": "#Openbanking tech will empower consumers like Spotify empowered music listeners #FinTech #OpenAPIs https://t.co/BgfSyq9uqb",
      "post_date": "2019-06-04T10:42:00"
   },
   {
      "text": "Chinese Tencent (WeChat &amp; co) leads investment in TrueLayer, at the heart of European #OpenBanking. Watch your data… https://t.co/u0aNaN9TKa",
      "post_date": "2019-06-04T10:41:00"
   },
   {
      "text": "RT @FabrickPlatform: #Fabrick turns one today! \nWe are celebrating during Money 20/20 Europe presenting much news but ... there are as many…",
      "post_date": "2019-06-04T10:39:00"
   },
   {
      "text": "World #FinTech Report 2019: The Industry is Transitioning from #OpenBanking to “Open X” ⠀\nhttps://t.co/Nx9SFNqlbT ⠀… https://t.co/gNvMjWaPyB",
      "post_date": "2019-06-04T10:39:00"
   },
   {
      "text": "Yolt to integrate raisin #ING #OpenBanking #Money2020EU",
      "post_date": "2019-06-04T10:39:00"
   },
   {
      "text": "Swedish #OpenBanking Startup @Tink Announces #PayPal as a Strategic Investor ⠀\nhttps://t.co/FvfywYIipw ⠀\n#fintech… https://t.co/xW7iUEzHkc",
      "post_date": "2019-06-04T10:39:00"
   },
   {
      "text": "RT @pekkakokko: @getyolt @FJRisseeuw: Open Banking will empower customers like Spotify empowered music listeners. #Money2020EU #openbanking…",
      "post_date": "2019-06-04T10:39:00"
   },
   {
      "text": "Fund raise momentum for open banking startups. Strategic investors are placing their bets : Paypal (Tink), MasterCa… https://t.co/UXNlMbOt7S",
      "post_date": "2019-06-04T10:38:00"
   },
   {
      "text": "RT @getyolt: #OpenBanking is all about putting people back in the driving seat. For open banking to be a success, it has to be consumer-fir…",
      "post_date": "2019-06-04T10:37:00"
   },
   {
      "text": "Interesting statement from Frank Jan Risseeuw, CEO of @yolt:\n„Open Banking is the Spotify of the financial world“… https://t.co/NNULIOWRoa",
      "post_date": "2019-06-04T10:37:00"
   },
   {
      "text": "@getyolt @FJRisseeuw: Open Banking will empower customers like Spotify empowered music listeners. #Money2020EU… https://t.co/NNttrPj3Ty",
      "post_date": "2019-06-04T10:37:00"
   },
   {
      "text": "Power to the people #OpenBanking #Money2020EU https://t.co/CebS9oy1PN",
      "post_date": "2019-06-04T10:37:00"
   },
   {
      "text": "RT @SocieteGenerale: Want to meet @TreezorBanking @MoonshotOff #OpenInnovation platform and #SGVentures teams, or @ccalmeja #Cio ? It‘s now…",
      "post_date": "2019-06-04T10:36:00"
   },
   {
      "text": "#OpenBanking is all about putting people back in the driving seat. For open banking to be a success, it has to be c… https://t.co/uzGQiUNVIX",
      "post_date": "2019-06-04T10:36:00"
   },
   {
      "text": "@News_ZV @AccentureDACH @SwissBankingSBA @hakan_eroglu_tw @fintechrockers @NeiraOsci @Salz_Er @comboeuf @roitavor… https://t.co/dwC64VxBxf",
      "post_date": "2019-06-04T10:35:00"
   },
   {
      "text": "Research from @iressUK found a vast majority (96%) of lenders believe #OpenBanking could improve the intermediary m… https://t.co/PKXTgpqelr",
      "post_date": "2019-06-04T10:35:00"
   },
   {
      "text": "Standing room only for @dgwbirch's interview with Raman Bhatia, head of digital bank UK at @HSBC. Looking at the pr… https://t.co/3doa6xJrVh",
      "post_date": "2019-06-04T10:34:00"
   },
   {
      "text": "RT @neirajones: #Fintech: @StarlingBank Partners with #Payments Platform #Tribe\nhttps://t.co/yji0eZ8laJ \n#OpenBanking #Banking #PSD2 \n@Trib…",
      "post_date": "2019-06-04T10:34:00"
   },
   {
      "text": "#Fabrick turns one today! \nWe are celebrating during Money 20/20 Europe presenting much news but ... there are as m… https://t.co/4bpvtgdFvj",
      "post_date": "2019-06-04T10:33:00"
   },
   {
      "text": "\"Open Banking is the Spotify of the financial world.\" @FJRisseeuw takes the stage! Tune in and catch up on… https://t.co/yt8f5UtcaO",
      "post_date": "2019-06-04T10:32:00"
   },
   {
      "text": "RT @tink: Big news today: @PayPal joins the Tink family! Couldn’t be more excited to announce that the fintech giant is a new investor and…",
      "post_date": "2019-06-04T10:20:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-04T10:20:00"
   },
   {
      "text": "RT @HollandFinTech: Sooo what does the audience think about the progress in #OpenBanking so far? Clearly waaaaay more to do... Panel with @…",
      "post_date": "2019-06-04T10:18:00"
   },
   {
      "text": "RT @GhelaBoskovich: Standing room only for lessons learned from #openbanking with @Louisehbeaumont @nikhilkumarks @GavinLittlejohn @BANKIFI…",
      "post_date": "2019-06-04T10:18:00"
   },
   {
      "text": "RT @KalleDunkel: CItibank is going beyond PSD2 compliance with pay-later API (done) and pre-authorization API (in-development) #M2020EU #op…",
      "post_date": "2019-06-04T10:17:00"
   },
   {
      "text": "Research Finds 89% of Merchants are Primed for Open Banking #fintech #openbanking #retail  https://t.co/5AoeaSRcsS https://t.co/ZmEBfZOEKq",
      "post_date": "2019-06-04T10:17:00"
   },
   {
      "text": "RT @GhelaBoskovich: Standing room only for lessons learned from #openbanking with @Louisehbeaumont @nikhilkumarks @GavinLittlejohn @BANKIFI…",
      "post_date": "2019-06-04T10:14:00"
   },
   {
      "text": "Want to understand how OAuth Dynamic Client Registration fits in #OpenBanking?\n\"Successful Third Party Onboarding f… https://t.co/0HJ8exkK3w",
      "post_date": "2019-06-04T10:13:00"
   },
   {
      "text": "RT @ttavlas: Mastercard Launches Open Banking Platform To Further API Standards - https://t.co/so093EXvnj - https://t.co/oyAeoUCO8P #openba…",
      "post_date": "2019-06-04T10:13:00"
   },
   {
      "text": "RT @UKOpenBanking: Fantastic to see so much interest in #openbanking at the start of day2 of #m2020EU – a great panel sharing #insights and…",
      "post_date": "2019-06-04T10:11:00"
   },
   {
      "text": "RT @ghanem_elias: #Money2020 where does #openbanking stand after a year? Is it dying faster than expected? I think so, letting the place to…",
      "post_date": "2019-06-04T10:11:00"
   },
   {
      "text": "Authentication logic critical #SCA to any success for #OpenBanking. But it needs serious regulatory intervention &amp;… https://t.co/v57xpqdTS3",
      "post_date": "2019-06-04T10:08:00"
   },
   {
      "text": "Enjoying the packed \"#OpenBanking: Lessons learned from year one.\"  Some great discussion explaining how… https://t.co/yG0az2INCW",
      "post_date": "2019-06-04T10:08:00"
   },
   {
      "text": "RT @tink: Big news today: @PayPal joins the Tink family! Couldn’t be more excited to announce that the fintech giant is a new investor and…",
      "post_date": "2019-06-04T10:07:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T10:05:00"
   },
   {
      "text": "Tink Receives Strategic Investment from Paypal - FinSMEs - https://t.co/qi4Bg8R308 #openbanking #banking #digital",
      "post_date": "2019-06-04T10:04:00"
   },
   {
      "text": "RT @UKOpenBanking: Fantastic to see so much interest in #openbanking at the start of day2 of #m2020EU – a great panel sharing #insights and…",
      "post_date": "2019-06-04T10:03:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T10:00:00"
   },
   {
      "text": "Sooo what does the audience think about the progress in #OpenBanking so far? Clearly waaaaay more to do... Panel wi… https://t.co/LfCFj1zHke",
      "post_date": "2019-06-04T09:59:00"
   },
   {
      "text": "Fantastic to see so much interest in #openbanking at the start of day2 of #m2020EU – a great panel sharing… https://t.co/j4tnW3iBWr",
      "post_date": "2019-06-04T09:59:00"
   },
   {
      "text": "RT @SocieteGenerale: Want to meet @TreezorBanking @MoonshotOff #OpenInnovation platform and #SGVentures teams, or @ccalmeja #Cio ? It‘s now…",
      "post_date": "2019-06-04T09:59:00"
   },
   {
      "text": "RT @Vocalink: #Mastercard commissioned a report on the current state of #openbanking, which you can read here - https://t.co/qKaEwYOKyi htt…",
      "post_date": "2019-06-04T09:58:00"
   },
   {
      "text": "Looking forward to joining the #OpenBanking  conversation today at #Money2020EU! @FJRisseeuw takes the stage in t-m… https://t.co/RSyKI5gI0w",
      "post_date": "2019-06-04T09:58:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T09:55:00"
   },
   {
      "text": "RT @programmableweb: Exploring the @bunq #API: https://t.co/uuZXTGu1kY\n\n#openbanking #fintech #PSD2 https://t.co/xKZr3g9K0H",
      "post_date": "2019-06-04T09:53:00"
   },
   {
      "text": "RT @simonvc: \"Comply Compete Innovate.\" @imrangulam @LouiseHBeaumont \nStanding room only #openbanking session at #M2020EU https://t.co/vosB…",
      "post_date": "2019-06-04T09:52:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T09:51:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Looking forward to #WFTR19 \"Leapfrogging #OpenBanking to Open X\" chat next week w/ @jimmarous @leimer @visible_banking @gh…",
      "post_date": "2019-06-04T09:51:00"
   },
   {
      "text": "This marks an exciting next step for us and ensure we can support our clients and partners! \n\n#OpenBanking #OpenData #psd2",
      "post_date": "2019-06-04T09:51:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T09:51:00"
   },
   {
      "text": "RT @creditkudos: We're ready for #Money2020EU day 2. Today is all about #openbanking and #partnership - let's grab a coffee and talk improv…",
      "post_date": "2019-06-04T09:50:00"
   },
   {
      "text": "[#Disruption] What are the pros &amp; cons, opportunities, and challenges brought by Open Banking in Europe?… https://t.co/zhNagk1kkV",
      "post_date": "2019-06-04T09:50:00"
   },
   {
      "text": "\"Comply Compete Innovate.\" @imrangulam @LouiseHBeaumont \nStanding room only #openbanking session at #M2020EU https://t.co/vosBFsGBuq",
      "post_date": "2019-06-04T09:49:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-04T09:48:00"
   },
   {
      "text": "RT @GhelaBoskovich: Standing room only for lessons learned from #openbanking with @Louisehbeaumont @nikhilkumarks @GavinLittlejohn @BANKIFI…",
      "post_date": "2019-06-04T09:47:00"
   },
   {
      "text": "RT @UrsBolt: Should sharing #EU bank #data be extended?\n\n#OpenBanking rules are a model for a broader digital solution. \nBut these rules ne…",
      "post_date": "2019-06-04T09:47:00"
   },
   {
      "text": "RT @SocieteGenerale: Want to meet @TreezorBanking @MoonshotOff #OpenInnovation platform and #SGVentures teams, or @ccalmeja #Cio ? It‘s now…",
      "post_date": "2019-06-04T09:46:00"
   },
   {
      "text": "RT @ElvinaSoogun: #OpenBanking: meh?\n\n@chyppings' @dgwbirch takes to the Industry Transmutation stage @money2020, explaining that #PSD2 isn…",
      "post_date": "2019-06-04T09:46:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-04T09:46:00"
   },
   {
      "text": "RT @thepower_50: Make sure to connect w/our The #Fintech Power 50 member @Mambu_com at #Money2020EU! \n\nhttps://t.co/uTfrLsVKqc\n\n#fintech #o…",
      "post_date": "2019-06-04T09:45:00"
   },
   {
      "text": "Make sure to connect w/our The #Fintech Power 50 member @Mambu_com at #Money2020EU! \n\nhttps://t.co/uTfrLsVKqc… https://t.co/NZurJNAlMp",
      "post_date": "2019-06-04T09:45:00"
   },
   {
      "text": "RT @IIDB_ie: Last chance for early bird tickets!\n#FinTech track with @markgcummins of @BusinessDCU. \n→ #P2P Lending\n→ #crowdfunding\n→ #Open…",
      "post_date": "2019-06-04T09:43:00"
   },
   {
      "text": "Standing room only for lessons learned from #openbanking with @Louisehbeaumont @nikhilkumarks @GavinLittlejohn… https://t.co/wUlVNy7Tyw",
      "post_date": "2019-06-04T09:42:00"
   },
   {
      "text": "RT @ElvinaSoogun: #OpenBanking: meh?\n\n@chyppings' @dgwbirch takes to the Industry Transmutation stage @money2020, explaining that #PSD2 isn…",
      "post_date": "2019-06-04T09:41:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T09:40:00"
   },
   {
      "text": "Consumer awareness of #PSD2 and #OpenBanking in general is very low in the Nordics. Apparently so in other EU count… https://t.co/RMOvt3Y5VL",
      "post_date": "2019-06-04T09:40:00"
   },
   {
      "text": "RT @WFSULLIVAN3: INFOGRAPHIC - The Financial Services industry is shifting from #OpenBanking to #OpenX finds our #WFTR19 by @Capgemini.   #…",
      "post_date": "2019-06-04T09:39:00"
   },
   {
      "text": "RT @Dan_Krow: #openbanking is not about #api and #tech. It’s about changing the way our business works. \nLooking forward for realistic and…",
      "post_date": "2019-06-04T09:38:00"
   },
   {
      "text": "Who said #OpenBanking is boring? \nFull house to listen “Open Banking: lessons learned from year one” at… https://t.co/UjjOhO0neI",
      "post_date": "2019-06-04T09:37:00"
   },
   {
      "text": "RT @ghanem_elias: #Money2020 where does #openbanking stand after a year? Is it dying faster than expected? I think so, letting the place to…",
      "post_date": "2019-06-04T09:37:00"
   },
   {
      "text": "#Money2020 where does #openbanking stand after a year? Is it dying faster than expected? I think so, letting the pl… https://t.co/OuDefN5RfX",
      "post_date": "2019-06-04T09:36:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-04T09:36:00"
   },
   {
      "text": "Nearly Half of UK Consumers Want to Pay for Subscriptions with #DirectDebit, But Major Consumer Websites Fail to Of… https://t.co/eJBnAKl8JT",
      "post_date": "2019-06-04T09:35:00"
   },
   {
      "text": "PSD2 is only the beginning for #openbanking and will evolve to an open data economy that empowers customers to cont… https://t.co/WxaXncG2Q1",
      "post_date": "2019-06-04T09:34:00"
   },
   {
      "text": "#openbanking is not about #api and #tech. It’s about changing the way our business works. \nLooking forward for real… https://t.co/X1T8ddqPi1",
      "post_date": "2019-06-04T09:33:00"
   },
   {
      "text": "Meanwhile, right next doors @douwelycklama from @Innopay shares his view on the European #OpenBanking scene… https://t.co/4kNIsl9CSf",
      "post_date": "2019-06-04T09:33:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T09:32:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T09:31:00"
   },
   {
      "text": "RT @Global_Kinetic: Digital banking now part of everyday life for Europeans https://t.co/hvTRePzhnH\n#digitalbanking #fintech #Payments #ban…",
      "post_date": "2019-06-04T09:31:00"
   },
   {
      "text": "RT @tink: Big news today: @PayPal joins the Tink family! Couldn’t be more excited to announce that the fintech giant is a new investor and…",
      "post_date": "2019-06-04T09:29:00"
   },
   {
      "text": "Mastercard Launches Open Banking API Platform - https://t.co/so093EXvnj - https://t.co/oyAeoUCO8P #openbanking #banking #digital",
      "post_date": "2019-06-04T09:29:00"
   },
   {
      "text": "The always jovial and inspiring David Birch opening the #PSD2 track at #Money2020EU #payments #OpenBanking… https://t.co/v6GEwRqNmh",
      "post_date": "2019-06-04T09:29:00"
   },
   {
      "text": "RT @ElvinaSoogun: #OpenBanking: meh?\n\n@chyppings' @dgwbirch takes to the Industry Transmutation stage @money2020, explaining that #PSD2 isn…",
      "post_date": "2019-06-04T09:29:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T09:28:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T09:27:00"
   },
   {
      "text": "#OpenBanking: meh?\n\n@chyppings' @dgwbirch takes to the Industry Transmutation stage @money2020, explaining that… https://t.co/DxmJ1tm0RW",
      "post_date": "2019-06-04T09:26:00"
   },
   {
      "text": "RT @noelpeatfield: Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer #openbank…",
      "post_date": "2019-06-04T09:26:00"
   },
   {
      "text": "@douwelycklama: We are moving towards Open Data Economy, Australia showing an example. #OpenBanking #FinTech… https://t.co/Vd2jaOlRdu",
      "post_date": "2019-06-04T09:26:00"
   },
   {
      "text": "Want to meet @TreezorBanking @MoonshotOff #OpenInnovation platform and #SGVentures teams, or @ccalmeja #Cio ? It‘s… https://t.co/gj3f777bK4",
      "post_date": "2019-06-04T09:25:00"
   },
   {
      "text": "#Fintech: @StarlingBank Partners with #Payments Platform #Tribe\nhttps://t.co/yji0eZ8laJ \n#OpenBanking #Banking… https://t.co/IensB5jS9S",
      "post_date": "2019-06-04T09:24:00"
   },
   {
      "text": "Does this signal the beginning of mainstream open banking? https://t.co/X2brJ7yXx5 \n@editor_Maguire @TrueLayer… https://t.co/QhvWg6Dw84",
      "post_date": "2019-06-04T09:23:00"
   },
   {
      "text": "Grab a coffee and come and find us at kiosk 21 at @money2020 in #Amsterdam .. let's talk about all things… https://t.co/yaGcnPw6cD",
      "post_date": "2019-06-04T09:23:00"
   },
   {
      "text": "Big news today: @PayPal joins the Tink family! Couldn’t be more excited to announce that the fintech giant is a new… https://t.co/eu9VMaSyDw",
      "post_date": "2019-06-04T09:23:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to underpin…",
      "post_date": "2019-06-04T09:23:00"
   },
   {
      "text": "Digital banking now part of everyday life for Europeans https://t.co/hvTRePzhnH\n#digitalbanking #fintech #Payments… https://t.co/EG14XvT4q3",
      "post_date": "2019-06-04T09:23:00"
   },
   {
      "text": "Make sure to visit @Currencycloud's booth at #Money2020EU. \n\nThey are featured in our \"Ones to Watch\" supplement. :… https://t.co/XBUxOe95EH",
      "post_date": "2019-06-04T09:15:00"
   },
   {
      "text": "Have you heard about the new software solution, WWS Open API, from @AurigaSW? If you are a third party provider who… https://t.co/zZf9uvIRUj",
      "post_date": "2019-06-04T09:15:00"
   },
   {
      "text": "@douwelycklama summarising the key messages on #OpenBanking. In case somebody is still wondering, #psd2 is just the… https://t.co/7rehizYa6I",
      "post_date": "2019-06-04T09:14:00"
   },
   {
      "text": "One more week to Mobey Day Toronto. Join us on June 11-12, 2019. Event hosted by @Dentons \n \nHappy to welcome… https://t.co/S7T8QglAlf",
      "post_date": "2019-06-04T09:10:00"
   },
   {
      "text": "RT @UrsBolt: The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom customer #d…",
      "post_date": "2019-06-04T09:07:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-04T09:04:00"
   },
   {
      "text": "\"Banks also have to overcome implementation and delivery challenges,\" says Jason Lane, EVP, Market Development, Eur… https://t.co/m4eTo8Bu3D",
      "post_date": "2019-06-04T09:04:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-04T09:03:00"
   },
   {
      "text": "RT @SocieteGenerale: Presented for the 1st time at @money2020 Societe Generale’s worldwide #OpenInnovation🚀 and #OpenBanking💳 platform is l…",
      "post_date": "2019-06-04T09:01:00"
   },
   {
      "text": "Insight: @OakesLiz, Executive Vice President, New Payment Platforms, @Mastercard #api #OpenBanking… https://t.co/22OuJdBVIL",
      "post_date": "2019-06-04T08:54:00"
   },
   {
      "text": "Togheter with my colleagues I am at the best banking event Money2020\n#Money2020 @HollandFinTech @bhive_eu next week… https://t.co/FFmlCqZWPK",
      "post_date": "2019-06-04T08:54:00"
   },
   {
      "text": "RT @WFSULLIVAN3: VIDEO:  Catch the highlights of our recently released #WFTR19 and swing by @Capgemini booth J101 at 13:30 or 15:30 today w…",
      "post_date": "2019-06-04T08:51:00"
   },
   {
      "text": "#Tink, the European #openbanking platform, announces #PayPal as a strategic #investor\n\nhttps://t.co/lPBvKPIxC7 https://t.co/RPedtPfT0L",
      "post_date": "2019-06-04T08:50:00"
   },
   {
      "text": "RT @saltedge: The 1st day at @money2020 Europe was absolutely fantastic! Ready for Day 2 and enjoying the Fireside chat the value of #OpenB…",
      "post_date": "2019-06-04T08:49:00"
   },
   {
      "text": "RT @RikCoeckelbergs: European financial institutions see Open Banking as the biggest current threat https://t.co/bv1mhsfL2c #business #oppo…",
      "post_date": "2019-06-04T08:49:00"
   },
   {
      "text": "RT @opeadeoye: We what...?\n\nWe. Keep. Moving.\n\nThanks for the hustle @dejiolowe\n\n#OpenBanking https://t.co/ie2P0uh1Mt",
      "post_date": "2019-06-04T08:49:00"
   },
   {
      "text": "RT @saltedge: At @saltedge we are working hard to spread out the opportunities that #OpenBanking creates for financial institutions across…",
      "post_date": "2019-06-04T08:49:00"
   },
   {
      "text": "Come and visit us at Y22! #M2020EU #money2020 #openbanking #CBIglobe https://t.co/XJOBEgqDe0",
      "post_date": "2019-06-04T08:48:00"
   },
   {
      "text": "Successful Third Party Onboarding for #OpenBanking UK - https://t.co/XwTs0w8Vo9 #PSD2 #fintech #banking https://t.co/DuyWNNLTey",
      "post_date": "2019-06-04T08:45:00"
   },
   {
      "text": "This is already possible just using a payment token linked to the debit and credit accounts. Far more secure than c… https://t.co/5SRk0FVHQ2",
      "post_date": "2019-06-04T08:44:00"
   },
   {
      "text": "At @saltedge we are working hard to spread out the opportunities that #OpenBanking creates for financial institutio… https://t.co/iPtognXSub",
      "post_date": "2019-06-04T08:44:00"
   },
   {
      "text": "RT @programmableweb: Exploring the @bunq #API: https://t.co/uuZXTGu1kY\n\n#openbanking #fintech #PSD2 https://t.co/xKZr3g9K0H",
      "post_date": "2019-06-04T08:42:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T08:42:00"
   },
   {
      "text": "RT @WFSULLIVAN3: VIDEO:  Catch the highlights of our recently released #WFTR19 and swing by @Capgemini booth J101 at 13:30 or 15:30 today w…",
      "post_date": "2019-06-04T08:42:00"
   },
   {
      "text": "European financial institutions see Open Banking as the biggest current threat https://t.co/bv1mhsfL2c #business #opportunity #openbanking",
      "post_date": "2019-06-04T08:42:00"
   },
   {
      "text": "@OBE_Global Join the Revolution !! We are starting a library of learning.  Please feel free to contact us so we can… https://t.co/oNvtmZCGnB",
      "post_date": "2019-06-04T08:41:00"
   },
   {
      "text": "Explore this interesting article from @Finextra about the trepidation of #openbanking amongst incumbents: https://t.co/5PrdaHQNdw",
      "post_date": "2019-06-04T08:40:00"
   },
   {
      "text": "EU’s Online Economy May Lose €57Bn over New #Payments Rules ⠀\nhttps://t.co/ey7ZhOYxQr ⠀\n#authentication… https://t.co/5XpKosBbnR",
      "post_date": "2019-06-04T08:39:00"
   },
   {
      "text": "The evolution of open #banking #ecosystems:\n\nFrom #OpenBanking to OpenX in which standardized APIs, insights \nfrom… https://t.co/NIux5kmY4A",
      "post_date": "2019-06-04T08:39:00"
   },
   {
      "text": ".@tink receives strategic #investment from PayPal #openbanking #payments #data #accountaggregation https://t.co/S3mss55G2A",
      "post_date": "2019-06-04T08:36:00"
   },
   {
      "text": "RT @WFSULLIVAN3: INFOGRAPHIC - The Financial Services industry is shifting from #OpenBanking to #OpenX finds our #WFTR19 by @Capgemini.   #…",
      "post_date": "2019-06-04T08:32:00"
   },
   {
      "text": "RT @tink: Our CEO @Dkjellen will take the @money2020 stage on Wednesday to talk about how Tink has out-engineered the financial industry –…",
      "post_date": "2019-06-04T08:32:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to underpin…",
      "post_date": "2019-06-04T08:31:00"
   },
   {
      "text": "RT @MastercardEU: A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institutions…",
      "post_date": "2019-06-04T08:31:00"
   },
   {
      "text": "Our Trustee @imrangulam is talking #OpenBanking lessons learned with @GavinLittlejohn @hartley98 @nikhilkumarks &amp;… https://t.co/LoVVc8X7Jm",
      "post_date": "2019-06-04T08:30:00"
   },
   {
      "text": "RT @davidjmaireles: Making the most of it\n#OpenBanking will touch a range of enabling capabilities\n\nhttps://t.co/rXrJZz8tLj\n\n#PSD2 #CX #ban…",
      "post_date": "2019-06-04T08:29:00"
   },
   {
      "text": "RT @ttavlas: Mastercard Launches Open Banking Platform To Further API Standards - https://t.co/so093EXvnj - https://t.co/oyAeoUCO8P #openba…",
      "post_date": "2019-06-04T08:26:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to underpin…",
      "post_date": "2019-06-04T08:25:00"
   },
   {
      "text": "Mastercard Launches Open Banking Platform To Further API Standards - https://t.co/so093EXvnj -… https://t.co/ZLhsv6uheA",
      "post_date": "2019-06-04T08:24:00"
   },
   {
      "text": "RT @SocieteGenerale: ⏰ Two days more of #Money2020 ! Meet Societe Generale's #OpenInnovation teams and fintechs, discover #OpenBanking serv…",
      "post_date": "2019-06-04T08:23:00"
   },
   {
      "text": "RT @MastercardEU: #Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to underpin…",
      "post_date": "2019-06-04T08:22:00"
   },
   {
      "text": "#Mastercard commissioned a report on the current state of #openbanking, which you can read here -… https://t.co/oRS0xSPyBT",
      "post_date": "2019-06-04T08:21:00"
   },
   {
      "text": "RT @SocieteGenerale: A fantastic day at @money2020 talking to industry players ! That‘s a part of the feed-back from @TreezorBanking’s team…",
      "post_date": "2019-06-04T08:21:00"
   },
   {
      "text": "RT @SocieteGenerale: ⏰ Two days more of #Money2020 ! Meet Societe Generale's #OpenInnovation teams and fintechs, discover #OpenBanking serv…",
      "post_date": "2019-06-04T08:21:00"
   },
   {
      "text": "#OpenBanking 15 months later? Get the scoop, warts and all! Yolt CEO @FJRisseeuw takes the stage today #Money2020EU… https://t.co/yzXheTNqCF",
      "post_date": "2019-06-04T08:20:00"
   },
   {
      "text": "#OpenBanking 15 months later? Get the scoop, warts and all! Yolt CEO @FJRisseeuw takes the stage today #Money2020EU… https://t.co/M1UXuFbHh6",
      "post_date": "2019-06-04T08:20:00"
   },
   {
      "text": "True #OpenBanking #Money2020EU https://t.co/Wj9npQVGdj",
      "post_date": "2019-06-04T08:20:00"
   },
   {
      "text": "RT @SocieteGenerale: What about digital transformation, embracing new business models in #OpenBanking and working with startups by @ccalmej…",
      "post_date": "2019-06-04T08:19:00"
   },
   {
      "text": "RT @opeadeoye: We what...?\n\nWe. Keep. Moving.\n\nThanks for the hustle @dejiolowe\n\n#OpenBanking https://t.co/ie2P0uh1Mt",
      "post_date": "2019-06-04T08:18:00"
   },
   {
      "text": "Copies of our Open Banking World Series Report are available from Nuapay’s stand G115 at Money2020. Grab your copy… https://t.co/TZ3pefDfWD",
      "post_date": "2019-06-04T08:07:00"
   },
   {
      "text": "Copies of our Open Banking World Series Report are available from Nuapay’s stand G115 at Money2020. Grab your copy… https://t.co/DWDnA6U1uN",
      "post_date": "2019-06-04T08:05:00"
   },
   {
      "text": "The game is on in the Dutch banking scene - The Paypers - https://t.co/MAC8dNrY4W #openbanking #banking #digital",
      "post_date": "2019-06-04T08:04:00"
   },
   {
      "text": "RT @FabrickPlatform: Let's start the 3 days #fintech of the @money2020 Europe. #Fabrick is waiting for you with its team, #Axerve, @Fintech…",
      "post_date": "2019-06-04T08:02:00"
   },
   {
      "text": "RT @JoannMoretti: Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012 posit…",
      "post_date": "2019-06-04T08:00:00"
   },
   {
      "text": "RT @CMeiske: #PayPal has made a strategic investment in Swedish #OpenBanking platform #Tink as part of a wider partnership between the two…",
      "post_date": "2019-06-04T07:58:00"
   },
   {
      "text": "Our CFO, Jürgen Schneider, joins the @Finextra team today @money2020 EU to discuss the benefits of #OpenBanking for… https://t.co/JwskIYNdlg",
      "post_date": "2019-06-04T07:57:00"
   },
   {
      "text": "PSD2 status update. #psd2 #eba #banking #openbanking https://t.co/EfVpPeY7Lm",
      "post_date": "2019-06-04T07:57:00"
   },
   {
      "text": "RT @mavericsystems: Redefining #customerexperience with #openbanking. Discover its 3-phased approach to drive #customerengagement. Read now…",
      "post_date": "2019-06-04T07:56:00"
   },
   {
      "text": "Looking for change-makers? You’ve found us! #teamenfuce #money2020europe #payments #OpenBanking https://t.co/VJOx3NysJg",
      "post_date": "2019-06-04T07:56:00"
   },
   {
      "text": "#PayPal has made a strategic investment in Swedish #OpenBanking platform #Tink as part of a wider partnership betwe… https://t.co/4z5z1pBr8B",
      "post_date": "2019-06-04T07:56:00"
   },
   {
      "text": "A new suite of market leading applications and services: Open Banking Solutions™ is available for financial institu… https://t.co/exeOUzXaiO",
      "post_date": "2019-06-04T07:55:00"
   },
   {
      "text": "RT @JoannMoretti: Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012 posit…",
      "post_date": "2019-06-04T07:54:00"
   },
   {
      "text": "The 1st day at @money2020 Europe was absolutely fantastic! Ready for Day 2 and enjoying the Fireside chat the value… https://t.co/1eLJsu1qX1",
      "post_date": "2019-06-04T07:53:00"
   },
   {
      "text": "\"To avoid disruption, some banks might think they have to make it difficult for third parties to access financial d… https://t.co/Z7z5cunJ0O",
      "post_date": "2019-06-04T07:53:00"
   },
   {
      "text": "RT @enfuce: Day 2 at #Money2020! Stop by our booth Y30 for a chat or participate in our competition and win a Suunto sports watch! #payment…",
      "post_date": "2019-06-04T07:48:00"
   },
   {
      "text": "Come and talk to us about the evolution of payments and all the great services that can be delivered through open b… https://t.co/hdIXnDtacw",
      "post_date": "2019-06-04T07:48:00"
   },
   {
      "text": "In the age of data command and control doesn’t work #OpenBanking #change #Money2020EU",
      "post_date": "2019-06-04T07:48:00"
   },
   {
      "text": "#PayPal unveils #digital #commerce platform https://t.co/mVCMfIaj3B #banking #fintech #openbanking #payments",
      "post_date": "2019-06-04T07:47:00"
   },
   {
      "text": "Day 2 at #Money2020! Stop by our booth Y30 for a chat or participate in our competition and win a Suunto sports wat… https://t.co/ZByeiucZ8e",
      "post_date": "2019-06-04T07:46:00"
   },
   {
      "text": "#PayPal has made a strategic #investment in Swedish #OpenBanking platform #Tink as part of a wider partnership betw… https://t.co/CUj4XvRzBN",
      "post_date": "2019-06-04T07:45:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-04T07:44:00"
   },
   {
      "text": "#PayPal has made a strategic #investment in Swedish #OpenBanking platform #Tink as part of a wider partnership betw… https://t.co/Ko7S4WFqbX",
      "post_date": "2019-06-04T07:44:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-04T07:43:00"
   },
   {
      "text": "Big or small, your customers expect you to keep up with the latest wave of #technology, and your business depends o… https://t.co/86ibtrsSVc",
      "post_date": "2019-06-04T07:42:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T07:38:00"
   },
   {
      "text": "RT @creditkudos: We're ready for #Money2020EU day 2. Today is all about #openbanking and #partnership - let's grab a coffee and talk improv…",
      "post_date": "2019-06-04T07:38:00"
   },
   {
      "text": "We're ready for #Money2020EU day 2. Today is all about #openbanking and #partnership - let's grab a coffee and talk… https://t.co/VkhET7d4ed",
      "post_date": "2019-06-04T07:37:00"
   },
   {
      "text": "We had a great first day yesterday at #M2020EU and excited for today's talks and panels 🎉 #openbanking #PSD2… https://t.co/QWYF6XcZV0",
      "post_date": "2019-06-04T07:37:00"
   },
   {
      "text": "The increased velocity of #OpenBanking technology developments and further standardization of APIs have made indepe… https://t.co/uDAMPdqPWG",
      "post_date": "2019-06-04T07:36:00"
   },
   {
      "text": "INFOGRAPHIC - The Financial Services industry is shifting from #OpenBanking to #OpenX finds our #WFTR19 by… https://t.co/TAKg9e8NA4",
      "post_date": "2019-06-04T07:36:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Join @ghanem_elias and I at @Capgemini #J101 #M2020EU booth at 13:30 or 15:30 today to get a sneak preview of our recently…",
      "post_date": "2019-06-04T07:33:00"
   },
   {
      "text": "#Mastercard today unveiled its new suite of Open Banking Solutions™, market-leading applications and services to un… https://t.co/DEScuYRJL1",
      "post_date": "2019-06-04T07:32:00"
   },
   {
      "text": "New trends in finance, from open banking to the rise of fintech startups, are shaking the industry and putting cust… https://t.co/jyWniKmMrn",
      "post_date": "2019-06-04T07:31:00"
   },
   {
      "text": "Join @ghanem_elias and I at @Capgemini #J101 #M2020EU booth at 13:30 or 15:30 today to get a sneak preview of our r… https://t.co/VjhJR3DzOx",
      "post_date": "2019-06-04T07:30:00"
   },
   {
      "text": "RT @davidjmaireles: Making the most of it\n#OpenBanking will touch a range of enabling capabilities\n\nhttps://t.co/rXrJZz8tLj\n\n#PSD2 #CX #ban…",
      "post_date": "2019-06-04T07:29:00"
   },
   {
      "text": "RT @SentenialSEPA: What impact will Open Banking and Instant Payments have on your payment strategy? Meet us at Money 20/20 stand G115 http…",
      "post_date": "2019-06-04T07:29:00"
   },
   {
      "text": "What about digital transformation, embracing new business models in #OpenBanking and working with startups by… https://t.co/MCnc75AbLi",
      "post_date": "2019-06-04T07:27:00"
   },
   {
      "text": "RT @SocieteGenerale: Presented for the 1st time at @money2020 Societe Generale’s worldwide #OpenInnovation🚀 and #OpenBanking💳 platform is l…",
      "post_date": "2019-06-04T07:25:00"
   },
   {
      "text": "It’s @money2020 day two! \n\nWe’ve got limited time slots left for our free PSD2 consultations here at the event! \n\nS… https://t.co/uLInr2ueAu",
      "post_date": "2019-06-04T07:14:00"
   },
   {
      "text": "Nordic @tink announces @PayPal as a strategic investor – TechCrunch #fintech #openbanking https://t.co/KYomN7z5QM",
      "post_date": "2019-06-04T07:13:00"
   },
   {
      "text": "RT @11FSPulse: Did you catch Ep. 10 of #Homescreen!?\n\nJim spoke to @iwoca's Product Lead @LaraGilman about all things business loans, their…",
      "post_date": "2019-06-04T07:09:00"
   },
   {
      "text": "Second day #Money2020 #amsterdam full of sessions with #openbanking and the team of @collectAI https://t.co/PitYQpsHj0",
      "post_date": "2019-06-04T07:03:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-04T07:02:00"
   },
   {
      "text": "#openbanking is a great opportunity for advisers to make themselves the centre of their client’s financial universe… https://t.co/uJE2uytZar",
      "post_date": "2019-06-04T06:57:00"
   },
   {
      "text": "Our Executive Director @julian_plummer takes advisers and licensees through the \"once in a lifetime\" #openbanking o… https://t.co/PKiZKAh8oS",
      "post_date": "2019-06-04T06:55:00"
   },
   {
      "text": "RT @SocieteGenerale: ⏰ Two days more of #Money2020 ! Meet Societe Generale's #OpenInnovation teams and fintechs, discover #OpenBanking serv…",
      "post_date": "2019-06-04T06:54:00"
   },
   {
      "text": "London fintech Yapily raises $5.4M to offer a single API to connect to banks - TechCrunch - https://t.co/e6NuhRS5IN… https://t.co/2T0tED4vsK",
      "post_date": "2019-06-04T06:54:00"
   },
   {
      "text": "The security challenges faced by open banking #Banking #openbanking #digital  https://t.co/OHaMmNtPkM",
      "post_date": "2019-06-04T06:53:00"
   },
   {
      "text": "RT @SeddikJamai: #Openbanking is dead ! Long life to #OpenX \n\nX for experience, X for ecosystem, X for cross sectoral collaboration !\n\n#M20…",
      "post_date": "2019-06-04T06:52:00"
   },
   {
      "text": "#Openbanking is dead ! Long life to #OpenX \n\nX for experience, X for ecosystem, X for cross sectoral collaboration… https://t.co/yoLjQRayRz",
      "post_date": "2019-06-04T06:51:00"
   },
   {
      "text": "new version of our wp on \"Data, Innovation and Transatlantic Competition in Finance: The Case of the Access to Acco… https://t.co/0hGT579s1q",
      "post_date": "2019-06-04T06:47:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T06:45:00"
   },
   {
      "text": "What Makes the bunq API Today's Best European Open Banking API - ProgrammableWeb - https://t.co/fwXBQW6XPn #openbanking #banking #digital",
      "post_date": "2019-06-04T06:44:00"
   },
   {
      "text": "World FinTech Report 2019 is now available! @Capgemini @Capgemini_Bnkg \n#OpenBanking #OpenInnovation… https://t.co/yuPlqUrKJc",
      "post_date": "2019-06-04T06:43:00"
   },
   {
      "text": "#FinancialServices industry is moving to a shared #marketplace where #banks must think beyond #openbanking and tran… https://t.co/fRCH0u5XUN",
      "post_date": "2019-06-04T06:43:00"
   },
   {
      "text": "#openbanking news by #Fabrick  \n\n🔷 #Tink, the European open banking platform, announces ⁦@PayPal⁩ as a strategic in… https://t.co/iy2EuZaIqN",
      "post_date": "2019-06-04T06:35:00"
   },
   {
      "text": "I have recently participated in the discussion about #openbanking, #psd2, and #api in Europe. A few of my thoughts… https://t.co/NUWsUX5bMv",
      "post_date": "2019-06-04T06:34:00"
   },
   {
      "text": "Tink, the European open banking platform, announces PayPal as a strategic investor - TechCrunch -… https://t.co/02R0keYgor",
      "post_date": "2019-06-04T06:34:00"
   },
   {
      "text": "RT @token_io: #Money2020Eu is off to a great start and we look forward to the next three days talking all things #OpenBanking and #tokendig…",
      "post_date": "2019-06-04T06:20:00"
   },
   {
      "text": "RT @stratorob: How #fintech revolution has killed off monogamous #banking https://t.co/SOR8HzpJ9o\n\n@zachweinberg @policybazaar @funder @Urs…",
      "post_date": "2019-06-04T06:16:00"
   },
   {
      "text": "RT @KalleDunkel: CItibank is going beyond PSD2 compliance with pay-later API (done) and pre-authorization API (in-development) #M2020EU #op…",
      "post_date": "2019-06-04T06:15:00"
   },
   {
      "text": "RT @SocieteGenerale: ⏰ Two days more of #Money2020 ! Meet Societe Generale's #OpenInnovation teams and fintechs, discover #OpenBanking serv…",
      "post_date": "2019-06-04T06:13:00"
   },
   {
      "text": "World #FinTech Report 2019: The Industry is Transitioning from #OpenBanking to “Open X” @Capgemini\nhttps://t.co/tpMwUcqnUJ",
      "post_date": "2019-06-04T06:12:00"
   },
   {
      "text": "Exploring the @bunq #API: https://t.co/uuZXTGu1kY\n\n#openbanking #fintech #PSD2 https://t.co/xKZr3g9K0H",
      "post_date": "2019-06-04T06:12:00"
   },
   {
      "text": "RT @SocieteGenerale: ⏰ Two days more of #Money2020 ! Meet Societe Generale's #OpenInnovation teams and fintechs, discover #OpenBanking serv…",
      "post_date": "2019-06-04T06:11:00"
   },
   {
      "text": "RT @ConsorzioCBI: Thank you @money2020 for the amazing party and see you tomorrow! #M2020EU #money2020 #openbanking #CBIGlobe https://t.co/…",
      "post_date": "2019-06-04T06:09:00"
   },
   {
      "text": "Global PSD2 and Open Banking Biometric Authentication Market 2019 – 3M Cogent, Nok Nok Labs, Apple, Gemalto, Iritec… https://t.co/OX5brimDJu",
      "post_date": "2019-06-04T06:04:00"
   },
   {
      "text": "RT @ghanem_elias: Join us @money2020 booth #J101 today at 13.30 and 15.30 to know the key findings of #WFTR19 \n\n#OpenBanking #OpenX #M2020E…",
      "post_date": "2019-06-04T05:57:00"
   },
   {
      "text": "RT @ghanem_elias: Join us @money2020 booth #J101 today at 13.30 and 15.30 to know the key findings of #WFTR19 \n\n#OpenBanking #OpenX #M2020E…",
      "post_date": "2019-06-04T05:54:00"
   },
   {
      "text": "RT @SocieteGenerale: ⏰ Two days more of #Money2020 ! Meet Societe Generale's #OpenInnovation teams and fintechs, discover #OpenBanking serv…",
      "post_date": "2019-06-04T05:48:00"
   },
   {
      "text": "⏰ Two days more of #Money2020 ! Meet Societe Generale's #OpenInnovation teams and fintechs, discover #OpenBanking s… https://t.co/AK2EfZ9TKi",
      "post_date": "2019-06-04T05:46:00"
   },
   {
      "text": "Join us @money2020 booth #J101 today at 13.30 and 15.30 to know the key findings of #WFTR19 \n\n#OpenBanking #OpenX… https://t.co/eTiIPsoOVn",
      "post_date": "2019-06-04T05:36:00"
   },
   {
      "text": "RT @NeonomicsAS: What a day it's been! We had so much fun talking to a lot of FinTech enthusiasts here at @money2020 today. Come by at our…",
      "post_date": "2019-06-04T05:33:00"
   },
   {
      "text": "RT @stratorob: How #fintech revolution has killed off monogamous #banking https://t.co/SOR8HzpJ9o\n\n@zachweinberg @policybazaar @funder @Urs…",
      "post_date": "2019-06-04T05:32:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T05:31:00"
   },
   {
      "text": "VIDEO:  Catch the highlights of our recently released #WFTR19 and swing by @Capgemini booth J101 at 13:30 or 15:30… https://t.co/ikCgjQlU6H",
      "post_date": "2019-06-04T05:30:00"
   },
   {
      "text": "RT @davidjmaireles: Making the most of it\n#OpenBanking will touch a range of enabling capabilities\n\nhttps://t.co/rXrJZz8tLj\n\n#PSD2 #CX #ban…",
      "post_date": "2019-06-04T05:22:00"
   },
   {
      "text": "Making the most of it\n#OpenBanking will touch a range of enabling capabilities\n\nhttps://t.co/rXrJZz8tLj\n\n#PSD2 #CX… https://t.co/B4WOPBkWFU",
      "post_date": "2019-06-04T05:21:00"
   },
   {
      "text": "Redefining #customerexperience with #openbanking. Discover its 3-phased approach to drive #customerengagement. Read… https://t.co/rAYWQGu2E4",
      "post_date": "2019-06-04T05:19:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T05:19:00"
   },
   {
      "text": "Should sharing #EU bank #data be extended?\n\n#OpenBanking rules are a model for a broader digital solution. \nBut the… https://t.co/0SJ9wfPi1c",
      "post_date": "2019-06-04T05:18:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T05:16:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-04T05:15:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T05:02:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T04:59:00"
   },
   {
      "text": "RT @NeonomicsAS: What a day it's been! We had so much fun talking to a lot of FinTech enthusiasts here at @money2020 today. Come by at our…",
      "post_date": "2019-06-04T04:49:00"
   },
   {
      "text": "RT @JoannMoretti: Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012 posit…",
      "post_date": "2019-06-04T04:42:00"
   },
   {
      "text": "Advisers will be Gate Keeper of all financial information for clients under #OpenBanking #adviserinnovation",
      "post_date": "2019-06-04T04:28:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T04:27:00"
   },
   {
      "text": "RT @JoannMoretti: Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012 posit…",
      "post_date": "2019-06-04T04:26:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shift from…",
      "post_date": "2019-06-04T04:23:00"
   },
   {
      "text": "Our #WFTR19 was released this morning.  You can download the @Capgemini Report and explore our findings on the shif… https://t.co/azWrY9NTDh",
      "post_date": "2019-06-04T04:23:00"
   },
   {
      "text": "World FinTech Report 2019: The Industry is Transitioning from Open Banking to “Open X” - Yahoo Finance -… https://t.co/Me3vb041IR",
      "post_date": "2019-06-04T04:19:00"
   },
   {
      "text": "89% of merchants 'primed for open banking' says Nuapay research - Finextra - https://t.co/gRwzsaYwHl #openbanking #banking #digital",
      "post_date": "2019-06-04T04:19:00"
   },
   {
      "text": "RT @DreadBong0: Are you guys paying attention?\n\nIf not, you should be..\n\n$QNT #Overledger #Blockchain #DLT #crypto #OpenBanking https://t.c…",
      "post_date": "2019-06-04T04:15:00"
   },
   {
      "text": "RT @TietoCorp: What changes are #PSD2 and #OpenBanking bringing? Listen to Jarkko Turunen’s response during Tieto #futurecredit event in St…",
      "post_date": "2019-06-04T04:06:00"
   },
   {
      "text": "World FinTech Report 2019: The Industry is Transitioning from Open Banking to “Open X” - Business Wire -… https://t.co/3fWnzzaZDQ",
      "post_date": "2019-06-04T04:04:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-04T04:02:00"
   },
   {
      "text": "\"Will people ever commit to one provider? And who will they choose?\" \nWhat does Tinder have in common with… https://t.co/tURSJfCURO",
      "post_date": "2019-06-04T03:32:00"
   },
   {
      "text": "RT @UKOpenBanking: 127 regulated providers now offer #OpenBanking, including 81 third party providers, 46 account providers, and 23 regulat…",
      "post_date": "2019-06-04T03:24:00"
   },
   {
      "text": "RT @noikeanolife: #Digitalbanking or #banking done digitally? @raconteur https://t.co/X4LevY9vsl #Fintech #CX #biz #FutureofBanking #leader…",
      "post_date": "2019-06-04T03:22:00"
   },
   {
      "text": "#identitii is @money2020. Up next is the session '#Openbanking 2.0 - where next for @HSBC_UK?\" that will explore ho… https://t.co/faUl9vsBIr",
      "post_date": "2019-06-04T03:21:00"
   },
   {
      "text": "#Digitalbanking or #banking done digitally? @raconteur https://t.co/X4LevY9vsl #Fintech #CX #biz #FutureofBanking… https://t.co/YNdItYdOO9",
      "post_date": "2019-06-04T03:20:00"
   },
   {
      "text": "RT @JoannMoretti: Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012 posit…",
      "post_date": "2019-06-04T03:06:00"
   },
   {
      "text": "RT @CaroBowler: The revolution will not be televised. Open Banking is on its way to an apathetic audience here in Australia. How can we imp…",
      "post_date": "2019-06-04T02:20:00"
   },
   {
      "text": "How AI Could Help Small Businesses - Harvard Business Review - https://t.co/tWeAthQN1K #openbanking #banking #digital",
      "post_date": "2019-06-04T02:04:00"
   },
   {
      "text": "What Bank of America's Digital Assistant Tells Us About the Future of Banking - Motley Fool -… https://t.co/BF3cxd4w5y",
      "post_date": "2019-06-04T02:04:00"
   },
   {
      "text": "Ventas Announces Pricing of Public Offering of Common Stock - Global Banking And Finance Review -… https://t.co/SCbevch5uI",
      "post_date": "2019-06-04T02:04:00"
   },
   {
      "text": "Banks Must Take Libor's End Seriously, Fed's Vice Chair Says - Law360 - https://t.co/hl53tsfyYM #openbanking #banking #digital",
      "post_date": "2019-06-04T02:04:00"
   },
   {
      "text": "Bankingblocks signs for Five Degrees Matrix - Finextra - https://t.co/VRfwn7dMHA #openbanking #banking #digital",
      "post_date": "2019-06-04T02:04:00"
   },
   {
      "text": "From Green Beret to mobile banking 'pioneer': Citizens' John Rosenfeld - American Banker - https://t.co/cwrVEq75C8… https://t.co/WDhhBdDoJI",
      "post_date": "2019-06-04T01:59:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-04T01:18:00"
   },
   {
      "text": "RT @stratorob: How #fintech revolution has killed off monogamous #banking https://t.co/SOR8HzpJ9o\n\n@zachweinberg @policybazaar @funder @Urs…",
      "post_date": "2019-06-04T00:33:00"
   },
   {
      "text": "Calling all fintechs, banks, developers - book a meeting today with Finastra at Money20/20 to see how you can start… https://t.co/vQm759JpA8",
      "post_date": "2019-06-04T00:03:00"
   },
   {
      "text": "RT @identitii: Looking forward to hearing some interesting panel discussions around #openbanking today from @money2020. #m2020eu  https://t…",
      "post_date": "2019-06-03T23:50:00"
   },
   {
      "text": "RT @wso2: .@SocieteGenerale has a number of #openbanking successes in Europe and Africa. Learn how they transformed their business with ope…",
      "post_date": "2019-06-03T23:46:00"
   },
   {
      "text": "RT @JoannMoretti: Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012 posit…",
      "post_date": "2019-06-03T23:23:00"
   },
   {
      "text": "Got 5mins? You can build a new app in that time! Join Finastra's @C_FinTech Director Innovation @money2020 and see… https://t.co/YUVJJwYcJe",
      "post_date": "2019-06-03T23:22:00"
   },
   {
      "text": "RT @JoannMoretti: Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012 posit…",
      "post_date": "2019-06-03T23:21:00"
   },
   {
      "text": "RT @JoannMoretti: Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012 posit…",
      "post_date": "2019-06-03T23:14:00"
   },
   {
      "text": "Today's quote at #Money2020 Tony McLaughlin-Citi “Platforms &amp; APIs now eating the world (evolving Andreessen's 2012… https://t.co/a9wWNnfLSJ",
      "post_date": "2019-06-03T23:11:00"
   },
   {
      "text": "RT @stratorob: How #fintech revolution has killed off monogamous #banking https://t.co/SOR8HzpJ9o\n\n@zachweinberg @policybazaar @funder @Urs…",
      "post_date": "2019-06-03T22:31:00"
   },
   {
      "text": "RT @iconsolutions: Heading to #EBAday2019 this month? We are participating in two panels on the 18th June, discussing #PaymentsTransformati…",
      "post_date": "2019-06-03T22:19:00"
   },
   {
      "text": "RT stratorob \"How #fintech revolution has killed off monogamous #banking https://t.co/jh5PIo7Sjs\n\nzachweinberg poli… https://t.co/wT517m9yHi",
      "post_date": "2019-06-03T22:13:00"
   },
   {
      "text": "As #OpenBanking becomes institutionalised in the Australian banking\nsystem, it is paramount for key industry bodies… https://t.co/Rf7deZjkcX",
      "post_date": "2019-06-03T22:06:00"
   },
   {
      "text": "According to the study, 90% of large banks in Asia Pacific plan to provide Open Banking services for their commerci… https://t.co/1NqaAwakDL",
      "post_date": "2019-06-03T22:03:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-06-03T22:01:00"
   },
   {
      "text": "Updats: we're going to @MobeyForum Mobey Day on June 11-12 in Toronto! Excited to meet industry leaders and chat wi… https://t.co/l3V5yZXG4r",
      "post_date": "2019-06-03T21:58:00"
   },
   {
      "text": "Stakeholders in Canadian #OpenBanking are looking for a path to implementation, but it’s best not to rush this stra… https://t.co/yKU8lYmIOa",
      "post_date": "2019-06-03T21:52:00"
   },
   {
      "text": "Looking forward to hearing some interesting panel discussions around #openbanking today from @money2020. #m2020eu… https://t.co/Ew646tXcSj",
      "post_date": "2019-06-03T21:45:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-06-03T21:35:00"
   },
   {
      "text": "How #fintech revolution has killed off monogamous #banking https://t.co/SOR8HzpJ9o\n\n@zachweinberg @policybazaar… https://t.co/QarQQXINcK",
      "post_date": "2019-06-03T21:34:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-06-03T21:18:00"
   },
   {
      "text": "RT @NeonomicsAS: What a day it's been! We had so much fun talking to a lot of FinTech enthusiasts here at @money2020 today. Come by at our…",
      "post_date": "2019-06-03T21:00:00"
   },
   {
      "text": "RT @NeonomicsAS: What a day it's been! We had so much fun talking to a lot of FinTech enthusiasts here at @money2020 today. Come by at our…",
      "post_date": "2019-06-03T20:59:00"
   },
   {
      "text": "A deal is DONE. Global Payments to buy TSYS for $21.5 billion https://t.co/L7lQZTWplQ\n\n#fintech #FintexAfrica… https://t.co/mkGA6d779I",
      "post_date": "2019-06-03T20:46:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T20:41:00"
   },
   {
      "text": "RT @SocieteGenerale: During #Money2020 #M2020EU let’s meet our teams and discuss #OpenInnovation #OpenBanking #BankingAsAService #Insurtech…",
      "post_date": "2019-06-03T20:40:00"
   },
   {
      "text": "RT @SocieteGenerale: Presented for the 1st time at @money2020 Societe Generale’s worldwide #OpenInnovation🚀 and #OpenBanking💳 platform is l…",
      "post_date": "2019-06-03T20:40:00"
   },
   {
      "text": "Thank you @money2020 for the amazing party and see you tomorrow! #M2020EU #money2020 #openbanking #CBIGlobe https://t.co/0l7qVi6TWo",
      "post_date": "2019-06-03T20:35:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T20:28:00"
   },
   {
      "text": "RT @wso2: .@SocieteGenerale has a number of #openbanking successes in Europe and Africa. Learn how they transformed their business with ope…",
      "post_date": "2019-06-03T20:25:00"
   },
   {
      "text": "RT @EY_Scotland: Looking forward to having @PeterNeufeld from @EY_Seren join us for the Digital customer experience in the age of open data…",
      "post_date": "2019-06-03T20:01:00"
   },
   {
      "text": "There are some good ones on this list!\nhttps://t.co/A3CzontE7Y\n#hr #banking #financial #mobile #marketing… https://t.co/fa1ZKSQd6X",
      "post_date": "2019-06-03T19:48:00"
   },
   {
      "text": "What a day it's been! We had so much fun talking to a lot of FinTech enthusiasts here at @money2020 today. Come by… https://t.co/CBMmjUiY2F",
      "post_date": "2019-06-03T19:46:00"
   },
   {
      "text": "#openbanking is a hot topic at #M2020EU - follow @OBL_events for news and views from the OB team as it happens - he… https://t.co/tE06EJVq16",
      "post_date": "2019-06-03T19:44:00"
   },
   {
      "text": "RT @Eternic_io: We’re proud to be #money2020eu this week supporting our partner company @NeonomicsAS. If you are looking for #AccountInform…",
      "post_date": "2019-06-03T19:39:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T19:34:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T19:27:00"
   },
   {
      "text": "RT @SocieteGenerale: Presented for the 1st time at @money2020 Societe Generale’s worldwide #OpenInnovation🚀 and #OpenBanking💳 platform is l…",
      "post_date": "2019-06-03T19:21:00"
   },
   {
      "text": "RT @FintechPortugal: Fintech start-ups are vying for partnership deals with the likes of Apple and Facebook \n\n#fintechPortugal #Fintech #Po…",
      "post_date": "2019-06-03T19:14:00"
   },
   {
      "text": "Fintech start-ups are vying for partnership deals with the likes of Apple and Facebook \n\n#fintechPortugal #Fintech… https://t.co/UUhZtJnIjq",
      "post_date": "2019-06-03T19:13:00"
   },
   {
      "text": "RT @TreezorBanking: Treezor team is ready in #Amsterdam for @money2020 , day 1 . Stop by our booth (N40), to discuss opportunities about #B…",
      "post_date": "2019-06-03T19:10:00"
   },
   {
      "text": "RT @FabrickPlatform: Let's start the 3 days #fintech of the @money2020 Europe. #Fabrick is waiting for you with its team, #Axerve, @Fintech…",
      "post_date": "2019-06-03T19:06:00"
   },
   {
      "text": "Fintech start-ups are vying for partnership deals with the likes of Apple and Facebook \n\n#fintechPortugal #Fintech… https://t.co/wBGa3tvFKg",
      "post_date": "2019-06-03T19:05:00"
   },
   {
      "text": "RT @SocieteGenerale: A fantastic day at @money2020 talking to industry players ! That‘s a part of the feed-back from @TreezorBanking’s team…",
      "post_date": "2019-06-03T19:02:00"
   },
   {
      "text": "Did you catch Ep. 10 of #Homescreen!?\n\nJim spoke to @iwoca's Product Lead @LaraGilman about all things business loa… https://t.co/C59chDUU05",
      "post_date": "2019-06-03T18:59:00"
   },
   {
      "text": "RT @SentenialSEPA: What impact will Open Banking and Instant Payments have on your payment strategy? Meet us at Money 20/20 stand G115 http…",
      "post_date": "2019-06-03T18:48:00"
   },
   {
      "text": "Paving the path forward for Canadian #openbanking. \n#fintech via @globeandmail \nhttps://t.co/xxlmSaP60E https://t.co/RJldhBzk7N",
      "post_date": "2019-06-03T18:30:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-03T18:27:00"
   },
   {
      "text": "RT @ambajorat: Tomorrow in Amsterdam at @money2020 #money2020EU - dm for a coffee or a chat. @figoAPI @finreach #joinedforces #psd2 #openba…",
      "post_date": "2019-06-03T18:26:00"
   },
   {
      "text": "RT @SocieteGenerale: A fantastic day at @money2020 talking to industry players ! That‘s a part of the feed-back from @TreezorBanking’s team…",
      "post_date": "2019-06-03T18:22:00"
   },
   {
      "text": "RT @SocieteGenerale: Presented for the 1st time at @money2020 Societe Generale’s worldwide #OpenInnovation🚀 and #OpenBanking💳 platform is l…",
      "post_date": "2019-06-03T18:22:00"
   },
   {
      "text": "RT @token_io: Great to hear from @zachperret at #Money2020Eu on how Europe is challenging thinking @Plaid. Agree that data is just the firs…",
      "post_date": "2019-06-03T18:19:00"
   },
   {
      "text": "RT @SocieteGenerale: Presented for the 1st time at @money2020 Societe Generale’s worldwide #OpenInnovation🚀 and #OpenBanking💳 platform is l…",
      "post_date": "2019-06-03T18:08:00"
   },
   {
      "text": "In this blog post @mishraksunil details the 6 strategies for #banks to successfully embrace the #platform business… https://t.co/vrvH2CaUpA",
      "post_date": "2019-06-03T18:00:00"
   },
   {
      "text": "Open banking requires an open mind about fintech and payments - PaymentsSource - https://t.co/ho8z8r7QCV #openbanking #banking #digital",
      "post_date": "2019-06-03T17:59:00"
   },
   {
      "text": "Tapping into the Future of Mobile Payments\n\nhttps://t.co/EpeAjDWyop \n\n#Innovation #Fintech #Banking #Retail #PSD2… https://t.co/ZLrDrIp8la",
      "post_date": "2019-06-03T17:54:00"
   },
   {
      "text": "#openbanking goes beyond technology or regulation; it impacts banking business models, from a centralized to a coll… https://t.co/jrlZt9K6Zv",
      "post_date": "2019-06-03T17:46:00"
   },
   {
      "text": "@hakanerogl speaking at the #NDGIT #OpenBankingNight at #TobaccoTheatre in #Amsterdam about #OpenBanking #Challenges https://t.co/QancFp5NuD",
      "post_date": "2019-06-03T17:41:00"
   },
   {
      "text": "RT @ambajorat: Tomorrow in Amsterdam at @money2020 #money2020EU - dm for a coffee or a chat. @figoAPI @finreach #joinedforces #psd2 #openba…",
      "post_date": "2019-06-03T17:40:00"
   },
   {
      "text": "RT @jimwadsworth: Looking forward to some great conversations about #OpenBanking over the next 3 days at #Money2020EU in Amsterdam! https:/…",
      "post_date": "2019-06-03T17:36:00"
   },
   {
      "text": "RT @SocieteGenerale: Presented for the 1st time at @money2020 Societe Generale’s worldwide #OpenInnovation🚀 and #OpenBanking💳 platform is l…",
      "post_date": "2019-06-03T17:32:00"
   },
   {
      "text": "RT @SocieteGenerale: A fantastic day at @money2020 talking to industry players ! That‘s a part of the feed-back from @TreezorBanking’s team…",
      "post_date": "2019-06-03T17:31:00"
   },
   {
      "text": "RT @ambajorat: Tomorrow in Amsterdam at @money2020 #money2020EU - dm for a coffee or a chat. @figoAPI @finreach #joinedforces #psd2 #openba…",
      "post_date": "2019-06-03T17:30:00"
   },
   {
      "text": "Presented for the 1st time at @money2020 Societe Generale’s worldwide #OpenInnovation🚀 and #OpenBanking💳 platform i… https://t.co/XBFfArS4mP",
      "post_date": "2019-06-03T17:23:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-06-03T17:23:00"
   },
   {
      "text": "RT @SASsoftwareUKI: In 2019, the biggest competitor to your #bank may be online. Discover more about the threats and opportunities from #Op…",
      "post_date": "2019-06-03T17:21:00"
   },
   {
      "text": "RT @TreezorBanking: Treezor team is ready in #Amsterdam for @money2020 , day 1 . Stop by our booth (N40), to discuss opportunities about #B…",
      "post_date": "2019-06-03T17:04:00"
   },
   {
      "text": "RT @ttavlas: Fintech start-ups are vying for partnership deals with the likes of Apple and Facebook - CNBC - https://t.co/XKCYOPo6Us #openb…",
      "post_date": "2019-06-03T17:04:00"
   },
   {
      "text": "RT @ssjaini: Open Banking use case focused on Accounting platforms for corporates and sme. Time to learn about new ways of doing business w…",
      "post_date": "2019-06-03T17:00:00"
   },
   {
      "text": "RT @stratorob: Why Artificial Intelligence to become a disruptive force in UK financial services sector https://t.co/5KiObBbIkK\n\n@guidodeck…",
      "post_date": "2019-06-03T16:59:00"
   },
   {
      "text": "Fintech start-ups are vying for partnership deals with the likes of Apple and Facebook - CNBC -… https://t.co/GopfSQ2dLY",
      "post_date": "2019-06-03T16:59:00"
   },
   {
      "text": "Utility Settlement Coin gains £50m backing and moves forward with backing of banks - The TRADE News -… https://t.co/Rf4AKzPUe9",
      "post_date": "2019-06-03T16:59:00"
   },
   {
      "text": "RT @opeadeoye: We what...?\n\nWe. Keep. Moving.\n\nThanks for the hustle @dejiolowe\n\n#OpenBanking https://t.co/ie2P0uh1Mt",
      "post_date": "2019-06-03T16:55:00"
   },
   {
      "text": "A ‘made in Canada’ approach is the best way forward to an open banking system: https://t.co/DBWXC2SLWD via… https://t.co/vjYNM4pjEi",
      "post_date": "2019-06-03T16:53:00"
   },
   {
      "text": "RT stratorob \"Why Artificial Intelligence to become a disruptive force in UK financial services sector… https://t.co/139zw32FUf",
      "post_date": "2019-06-03T16:48:00"
   },
   {
      "text": "Why Artificial Intelligence to become a disruptive force in UK financial services sector https://t.co/5KiObBbIkK… https://t.co/5MGtqznDDx",
      "post_date": "2019-06-03T16:48:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T16:45:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T16:32:00"
   },
   {
      "text": "RT @wso2: .@SocieteGenerale has a number of #openbanking successes in Europe and Africa. Learn how they transformed their business with ope…",
      "post_date": "2019-06-03T16:31:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T16:31:00"
   },
   {
      "text": "A warm welcome to Rahul Das, Head of Payments @WilliamHill to the #FTC19 Advisory Board.\n\nView the full line-up:… https://t.co/tzW1iSsnRR",
      "post_date": "2019-06-03T16:25:00"
   },
   {
      "text": "RT @UKOpenBanking: Our Head of Regulatory Nilixa Devlukia joins @LouiseHBeaumont @EmmaSteeley &amp; @simonvc for this #openbanking #webinar foc…",
      "post_date": "2019-06-03T16:23:00"
   },
   {
      "text": "RT @SocieteGenerale: A fantastic day at @money2020 talking to industry players ! That‘s a part of the feed-back from @TreezorBanking’s team…",
      "post_date": "2019-06-03T16:22:00"
   },
   {
      "text": "A fantastic day at @money2020 talking to industry players ! That‘s a part of the feed-back from @TreezorBanking’s t… https://t.co/EMTxXCaFUi",
      "post_date": "2019-06-03T16:21:00"
   },
   {
      "text": "HSBC - app-to-app errors https://t.co/2HdQ3EiWQ1 #OpenBanking #PSD2 #APIs",
      "post_date": "2019-06-03T16:20:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T16:18:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-06-03T16:13:00"
   },
   {
      "text": "RT @FDXOrg: Want to learn more about how FDX is solving problems in #financial #datasharing? Check out our spotlight with FDX members Antho…",
      "post_date": "2019-06-03T16:05:00"
   },
   {
      "text": "Want to learn more about how FDX is solving problems in #financial #datasharing? Check out our spotlight with FDX m… https://t.co/96cqGA0uz7",
      "post_date": "2019-06-03T16:05:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-06-03T15:59:00"
   },
   {
      "text": "'Customers are demanding innovation from their banks.'\nGreat first day at @money2020 - lots of conversations about… https://t.co/nz1hebJPiD",
      "post_date": "2019-06-03T15:50:00"
   },
   {
      "text": "RT @FinastraFS: RT: @The_LHoFT The Future of #Banking: \"The new world is one of transient relationships, shorter-term commitments and every…",
      "post_date": "2019-06-03T15:47:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-06-03T15:38:00"
   },
   {
      "text": "RT @arcapde: BEUC's contribution to the upcoming @OECD_BizFin competition cttee best practice roundtable on competition policy \"Digital Dis…",
      "post_date": "2019-06-03T15:36:00"
   },
   {
      "text": "Our Head of Regulatory Nilixa Devlukia joins @LouiseHBeaumont @EmmaSteeley &amp; @simonvc for this #openbanking… https://t.co/xaK6UGs214",
      "post_date": "2019-06-03T15:35:00"
   },
   {
      "text": "RT @arcapde: BEUC's contribution to the upcoming @OECD_BizFin competition cttee best practice roundtable on competition policy \"Digital Dis…",
      "post_date": "2019-06-03T15:32:00"
   },
   {
      "text": "Open banking requires an open mind about fintech and payments - PaymentsSource - https://t.co/JrQwZdaAvF #openbanking #banking #digital",
      "post_date": "2019-06-03T15:24:00"
   },
   {
      "text": "Barclays - Fetching Standing Orders, Direct Debits, and Beneficiaries returns 400 error response… https://t.co/zzzJ7h65Sz",
      "post_date": "2019-06-03T15:22:00"
   },
   {
      "text": "RT @opeadeoye: We what...?\n\nWe. Keep. Moving.\n\nThanks for the hustle @dejiolowe\n\n#OpenBanking https://t.co/ie2P0uh1Mt",
      "post_date": "2019-06-03T15:17:00"
   },
   {
      "text": "RT @OBL_events: @EmmaSteeley CEO of #AccountScore at the #OBL #OpenBanking webinar @money2020 https://t.co/Iug3BvAyMQ",
      "post_date": "2019-06-03T15:11:00"
   },
   {
      "text": "Mastercard leads investment in open banking firm Konsentus for Europe expansion - Mobile Payments Today -… https://t.co/cFnKcTYaGz",
      "post_date": "2019-06-03T15:09:00"
   },
   {
      "text": "Tomorrow in Amsterdam at @money2020 #money2020EU - dm for a coffee or a chat. @figoAPI @finreach #joinedforces #psd2 #openbanking",
      "post_date": "2019-06-03T15:02:00"
   },
   {
      "text": "What are the main challenges to loan origination in a digital setting?\n4. Multi-channel consistency. Ensure an effi… https://t.co/ctDQjAUucd",
      "post_date": "2019-06-03T15:00:00"
   },
   {
      "text": "IAM Platform Curated Retweet:\n\nVia: https://t.co/gEqaq4FxtM\n\n#Fintech will automate the daily work of finance in co… https://t.co/m6dockuHDf",
      "post_date": "2019-06-03T15:00:00"
   },
   {
      "text": "With the emergence of #openbanking it’s clear the bank branch is far from dead &amp; hearing this in client conversatio… https://t.co/tWhSsbG7is",
      "post_date": "2019-06-03T14:52:00"
   },
   {
      "text": "We are in the @Entirl Fintech Cafe until 6pm ready to meet businesses and talk all things funding and #openbanking… https://t.co/9vJI1zvE0P",
      "post_date": "2019-06-03T14:52:00"
   },
   {
      "text": "@EmmaSteeley CEO of #AccountScore at the #OBL #OpenBanking webinar @money2020 https://t.co/Iug3BvAyMQ",
      "post_date": "2019-06-03T14:46:00"
   },
   {
      "text": "RT @Epiphany_Srl: First day at #Money2020 in Amsterdam! \nAre you looking for #PSD2 compliance? Or willing to embrace #OpenBanking? Epiphany…",
      "post_date": "2019-06-03T14:34:00"
   },
   {
      "text": "RT @Epiphany_Srl: First day at #Money2020 in Amsterdam! \nAre you looking for #PSD2 compliance? Or willing to embrace #OpenBanking? Epiphany…",
      "post_date": "2019-06-03T14:33:00"
   },
   {
      "text": "RT @Global_Kinetic: More Americans now do most of their banking on mobile than those who choose to stay old-school (link: https://t.co/Lbwf…",
      "post_date": "2019-06-03T14:32:00"
   },
   {
      "text": "RT @Epiphany_Srl: First day at #Money2020 in Amsterdam! \nAre you looking for #PSD2 compliance? Or willing to embrace #OpenBanking? Epiphany…",
      "post_date": "2019-06-03T14:30:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T14:24:00"
   },
   {
      "text": "RT @SocieteGenerale: During #Money2020 #M2020EU let’s meet our teams and discuss #OpenInnovation #OpenBanking #BankingAsAService #Insurtech…",
      "post_date": "2019-06-03T14:24:00"
   },
   {
      "text": "More Americans now do most of their banking on mobile than those who choose to stay old-school (link:… https://t.co/vIi32V8R4v",
      "post_date": "2019-06-03T14:23:00"
   },
   {
      "text": "RT @OBL_events: Simon Vans Colina, thanks for joining #OBL #OpenBanking #Money2020Europe webinar and sharing your thoughts on the current o…",
      "post_date": "2019-06-03T14:18:00"
   },
   {
      "text": "@OBE_Global Practical market insight as you’d expect from Sam Everington #starlingBank  Always worth listening to !… https://t.co/gMDozPNmOx",
      "post_date": "2019-06-03T14:17:00"
   },
   {
      "text": "RT @OBL_events: @ThePayRegExpert @LouiseHBeaumont in deep discussion on the latest challenges for participants and consumers #OBL #OpenBank…",
      "post_date": "2019-06-03T14:16:00"
   },
   {
      "text": "#Openness + #Connectivity: two characteristics that are propelling the financial services business forward: this is… https://t.co/lYZQkpw01o",
      "post_date": "2019-06-03T14:12:00"
   },
   {
      "text": "Simon Vans Colina, thanks for joining #OBL #OpenBanking #Money2020Europe webinar and sharing your thoughts on the c… https://t.co/9mZujXKm5K",
      "post_date": "2019-06-03T14:10:00"
   },
   {
      "text": "The new @tink report has just been released today. An interesting view of what #European #bankers think of… https://t.co/HNPhiMuvTY",
      "post_date": "2019-06-03T14:10:00"
   },
   {
      "text": "@ThePayRegExpert @LouiseHBeaumont in deep discussion on the latest challenges for participants and consumers #OBL… https://t.co/NbHB2XgwU1",
      "post_date": "2019-06-03T14:05:00"
   },
   {
      "text": "RT @rjptoronto: Hearing from some great CEO’s @ING_news @bigpaymeapp @AlternaBank from large established European Banks to new Asian attack…",
      "post_date": "2019-06-03T14:00:00"
   },
   {
      "text": "RT @EY_Scotland: Looking forward to having @PeterNeufeld from @EY_Seren join us for the Digital customer experience in the age of open data…",
      "post_date": "2019-06-03T13:59:00"
   },
   {
      "text": "Great piece from our very own @wbckley highlighting his suggestions on #OpenBanking in Canada: https://t.co/onsRg9mvD4",
      "post_date": "2019-06-03T13:57:00"
   },
   {
      "text": "RT @Epiphany_Srl: First day at #Money2020 in Amsterdam! \nAre you looking for #PSD2 compliance? Or willing to embrace #OpenBanking? Epiphany…",
      "post_date": "2019-06-03T13:55:00"
   },
   {
      "text": "89% of merchants 'primed for open banking' says Nuapay research #Digital #openbanking #banking  https://t.co/zeRdxDsr1S",
      "post_date": "2019-06-03T13:51:00"
   },
   {
      "text": "Plenty of great #networking opportunities @money2020 event in #amsterdam today! #money2020eu #makedatagreatagain… https://t.co/mP8TNvjHso",
      "post_date": "2019-06-03T13:42:00"
   },
   {
      "text": "RT @Epiphany_Srl: First day at #Money2020 in Amsterdam! \nAre you looking for #PSD2 compliance? Or willing to embrace #OpenBanking? Epiphany…",
      "post_date": "2019-06-03T13:41:00"
   },
   {
      "text": "RT @Epiphany_Srl: First day at #Money2020 in Amsterdam! \nAre you looking for #PSD2 compliance? Or willing to embrace #OpenBanking? Epiphany…",
      "post_date": "2019-06-03T13:39:00"
   },
   {
      "text": "RT @Epiphany_Srl: First day at #Money2020 in Amsterdam! \nAre you looking for #PSD2 compliance? Or willing to embrace #OpenBanking? Epiphany…",
      "post_date": "2019-06-03T13:37:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T13:35:00"
   },
   {
      "text": "RT @thepower_50: Make sure to connect w/the @ficoba team at #Money2020EU!\n\nMeanwhile, check out our interview w/@SophieGuibaud from #IFGS20…",
      "post_date": "2019-06-03T13:29:00"
   },
   {
      "text": "Great to hear from @zachperret at #Money2020Eu on how Europe is challenging thinking @Plaid. Agree that data is jus… https://t.co/IWFQXg6FnP",
      "post_date": "2019-06-03T13:29:00"
   },
   {
      "text": "Multi-factor authentication isn't always the answer in FinTech : https://t.co/423enNedwO \n#digitalbanking #fintech… https://t.co/I2IPE0WSag",
      "post_date": "2019-06-03T13:28:00"
   },
   {
      "text": "First day at #Money2020 in Amsterdam! \nAre you looking for #PSD2 compliance? Or willing to embrace #OpenBanking? Ep… https://t.co/ZgseAL8Opq",
      "post_date": "2019-06-03T13:26:00"
   },
   {
      "text": "Our magazine is being distributed at the Money20/20 lounges...grab one if your there in Amsterdam!… https://t.co/PQXLnAbwQU",
      "post_date": "2019-06-03T13:22:00"
   },
   {
      "text": "RT @nafisalam: #AI is Accelerating the Growth of #FinTech Companies \n\n#digitalbanking #fintech #Payments #banking #openbanking  #ai #finser…",
      "post_date": "2019-06-03T13:17:00"
   },
   {
      "text": "RT @TLT_LLP: A year after the #GDPR came into effect, @EmmaFoxLaw asks if it's been a blessing or a curse for #digitalbanking - from its re…",
      "post_date": "2019-06-03T13:12:00"
   },
   {
      "text": "Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech #banking… https://t.co/rMsSTu0vMi",
      "post_date": "2019-06-03T13:12:00"
   },
   {
      "text": "Banks continue to feel #PSD2 and #OpenBanking discomfort https://t.co/cRtznYAV1y",
      "post_date": "2019-06-03T13:10:00"
   },
   {
      "text": "RT @nafisalam: #AI is Accelerating the Growth of #FinTech Companies \n\n#digitalbanking #fintech #Payments #banking #openbanking  #ai #finser…",
      "post_date": "2019-06-03T13:10:00"
   },
   {
      "text": "RT @rjptoronto: Hearing from some great CEO’s @ING_news @bigpaymeapp @AlternaBank from large established European Banks to new Asian attack…",
      "post_date": "2019-06-03T13:10:00"
   },
   {
      "text": "#AI is Accelerating the Growth of #FinTech Companies \n\n#digitalbanking #fintech #Payments #banking #openbanking… https://t.co/OiJoGFQA3s",
      "post_date": "2019-06-03T13:09:00"
   },
   {
      "text": "RT @thepower_50: Make sure to connect w/the @ficoba team at #Money2020EU!\n\nMeanwhile, check out our interview w/@SophieGuibaud from #IFGS20…",
      "post_date": "2019-06-03T13:05:00"
   },
   {
      "text": "Make sure to connect w/the @ficoba team at #Money2020EU!\n\nMeanwhile, check out our interview w/@SophieGuibaud from… https://t.co/tGeFX8oUm1",
      "post_date": "2019-06-03T13:05:00"
   },
   {
      "text": "See DirectID live in action and find out why 30+ financial institutions (and growing!) across the globe are already… https://t.co/l7MySPUNTW",
      "post_date": "2019-06-03T13:04:00"
   },
   {
      "text": "RT @UKOpenBanking: Our Head of Regulatory Nilixa Devlukia joins @LouiseHBeaumont @EmmaSteeley &amp; @winciewong for this #openbanking #webinar…",
      "post_date": "2019-06-03T13:02:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T13:00:00"
   },
   {
      "text": "In 2019, the biggest competitor to your #bank may be online. Discover more about the threats and opportunities from… https://t.co/Tc3srs43Xa",
      "post_date": "2019-06-03T13:00:00"
   },
   {
      "text": "For anyone who missed this interesting article #openbanking #psd2 #ASPSP #fintech #banking  First shared by… https://t.co/hiAi3hqn7G",
      "post_date": "2019-06-03T12:59:00"
   },
   {
      "text": "Congrats to my friends over at Konsentus, great news! #Payments #PSD2 #OpenBanking Mastercard invests in UK regtech… https://t.co/MHaS0IDoNX",
      "post_date": "2019-06-03T12:58:00"
   },
   {
      "text": "RT @UKOpenBanking: Our Head of Regulatory Nilixa Devlukia joins @LouiseHBeaumont @EmmaSteeley &amp; @winciewong for this #openbanking #webinar…",
      "post_date": "2019-06-03T12:57:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Conceptual Diagram of Banking as a Service VS Banking as a Platform\n\nhttps://t.co/kOwRBCXxCx\n\n#DigitalTra…",
      "post_date": "2019-06-03T12:57:00"
   },
   {
      "text": "RT @MastercardEU: We're kicking off the week @money2020 in Amsterdam to talk #innovation #technology #openbanking #digitalbanking and more…",
      "post_date": "2019-06-03T12:55:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T12:50:00"
   },
   {
      "text": "Blue Prism CEO: We Developed The RPA Platform Digital Exchange To Free The Makers To Innovate - Forbes -… https://t.co/DpPuccGGb1",
      "post_date": "2019-06-03T12:44:00"
   },
   {
      "text": "RT @getyolt: Excited to be joining in at #M2020EU! Yolt CEO @FJRisseeuw takes the stage at 12:30 tomorrow to talk #openbanking one year on…",
      "post_date": "2019-06-03T12:43:00"
   },
   {
      "text": "RT @UKOpenBanking: Our Head of Regulatory Nilixa Devlukia joins @LouiseHBeaumont @EmmaSteeley &amp; @winciewong for this #openbanking #webinar…",
      "post_date": "2019-06-03T12:42:00"
   },
   {
      "text": "RT @token_io: #Money2020Eu is off to a great start and we look forward to the next three days talking all things #OpenBanking and #tokendig…",
      "post_date": "2019-06-03T12:42:00"
   },
   {
      "text": "RT @Finance_Edge: Fintech / bank collaboration - the challenge of cultural mismatch #openbanking https://t.co/TnFOMdfHWb",
      "post_date": "2019-06-03T12:40:00"
   },
   {
      "text": "RT @UKOpenBanking: Our Head of Regulatory Nilixa Devlukia joins @LouiseHBeaumont @EmmaSteeley &amp; @winciewong for this #openbanking #webinar…",
      "post_date": "2019-06-03T12:39:00"
   },
   {
      "text": "RT @getyolt: Excited to be joining in at #M2020EU! Yolt CEO @FJRisseeuw takes the stage at 12:30 tomorrow to talk #openbanking one year on…",
      "post_date": "2019-06-03T12:35:00"
   },
   {
      "text": "RT @FintechieB: Calling all fintechs, banks, developers - book a meeting today with Finastra at Money20/20 to see how you can start develop…",
      "post_date": "2019-06-03T12:35:00"
   },
   {
      "text": "Our Head of Regulatory Nilixa Devlukia joins @LouiseHBeaumont @EmmaSteeley &amp; @winciewong for this #openbanking… https://t.co/j3zDMRWj6e",
      "post_date": "2019-06-03T12:35:00"
   },
   {
      "text": "Calling all fintechs, banks, developers - book a meeting today with Finastra at Money20/20 to see how you can start… https://t.co/qdCXQgCRai",
      "post_date": "2019-06-03T12:34:00"
   },
   {
      "text": "89% of merchants 'primed for open banking' says Nuapay research - Finextra - https://t.co/jDHJeNoP2c #openbanking #banking #digital",
      "post_date": "2019-06-03T12:34:00"
   },
   {
      "text": "Fintech / bank collaboration - the challenge of cultural mismatch #openbanking https://t.co/TnFOMdfHWb",
      "post_date": "2019-06-03T12:31:00"
   },
   {
      "text": "@dejiolowe I wish he explored 'open punching APIs...he would have stormed the ring with various punching usecases t… https://t.co/uMPEH5nhVk",
      "post_date": "2019-06-03T12:30:00"
   },
   {
      "text": "RT @ThePayRegExpert: Open Banking here ready to answer your questions. Stand R21. #openbanking #M2020EU https://t.co/nrxiI7Xdub",
      "post_date": "2019-06-03T12:29:00"
   },
   {
      "text": "RT @ConsorzioCBI: Don’t miss to visit is at Y22!  #M2020EU #OpenBanking #CBIGlobe #Money2020 https://t.co/puf10yTpie",
      "post_date": "2019-06-03T12:27:00"
   },
   {
      "text": "RT @ttavlas: 89% of merchants 'primed for open banking' says Nuapay research - Finextra - https://t.co/gRwzsaYwHl #openbanking #banking #di…",
      "post_date": "2019-06-03T12:27:00"
   },
   {
      "text": "RT @ttavlas: 89% of merchants 'primed for open banking' says Nuapay research - Finextra - https://t.co/gRwzsaYwHl #openbanking #banking #di…",
      "post_date": "2019-06-03T12:24:00"
   },
   {
      "text": "89% of merchants 'primed for open banking' says Nuapay research - Finextra - https://t.co/gRwzsaYwHl #openbanking #banking #digital",
      "post_date": "2019-06-03T12:24:00"
   },
   {
      "text": "Great recognition on our 2nd birthday!! 🥳 A lot has happened in just two years @getyolt from being the 1st to conne… https://t.co/03UNt1mAhT",
      "post_date": "2019-06-03T12:21:00"
   },
   {
      "text": "Had an amazing experience in sharing my views around managing #AI and #ML projects. Talk organized by Project Manag… https://t.co/YQZIKn7gKg",
      "post_date": "2019-06-03T12:16:00"
   },
   {
      "text": "RT @Flanks_io: #Fintech will automate the daily work of finance in companies. 🤖@OpenAccessGov #PSD2 #banking #openbanking #AutoBanking\n\nhtt…",
      "post_date": "2019-06-03T12:08:00"
   },
   {
      "text": "RT @TreezorBanking: Treezor team is ready in #Amsterdam for @money2020 , day 1 . Stop by our booth (N40), to discuss opportunities about #B…",
      "post_date": "2019-06-03T12:08:00"
   },
   {
      "text": "RT @NCFACanada: Paving the path forward for Canadian #openbanking. \n#fintech via @globeandmail \nhttps://t.co/qJNMvn3b2k https://t.co/IuHFFs…",
      "post_date": "2019-06-03T12:06:00"
   },
   {
      "text": "Why #OpenBanking is set to be a game-changer in helping #banks deliver a better customer experience https://t.co/soXK3GXXIA via @abcnews",
      "post_date": "2019-06-03T12:04:00"
   },
   {
      "text": "Treezor team is ready in #Amsterdam for @money2020 , day 1 . Stop by our booth (N40), to discuss opportunities abou… https://t.co/99mlwIMPKj",
      "post_date": "2019-06-03T12:02:00"
   },
   {
      "text": "Paving the path forward for Canadian #openbanking. \n#fintech via @globeandmail \nhttps://t.co/qJNMvn3b2k https://t.co/IuHFFsCHnI",
      "post_date": "2019-06-03T12:00:00"
   },
   {
      "text": "[#Disruption] 5 ways tech is challenging traditional banking models\n\nhttps://t.co/EabiB44bx7… https://t.co/ajqMSzrEo8",
      "post_date": "2019-06-03T12:00:00"
   },
   {
      "text": "RT @TheAIBook: #data is so important to turn banks into platforms. Platforms are sticky and have strong network effects. More producers att…",
      "post_date": "2019-06-03T11:59:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-03T11:58:00"
   },
   {
      "text": "Excited to be joining in at #M2020EU! Yolt CEO @FJRisseeuw takes the stage at 12:30 tomorrow to talk #openbanking o… https://t.co/Y4yK2YPu68",
      "post_date": "2019-06-03T11:54:00"
   },
   {
      "text": "RT @meniga: Do your #customers have #bank accounts with more than one #bank? #AccountAggregation is the perfect way to use #OpenBanking as…",
      "post_date": "2019-06-03T11:54:00"
   },
   {
      "text": "The security challenges faced by open banking  https://t.co/Ja45VyOD9H\n#fintech #event #banking #openbanking… https://t.co/VkOLv6xMQl",
      "post_date": "2019-06-03T11:47:00"
   },
   {
      "text": "RT @ACI_Worldwide: Two big trends #payments players need to capitalize on: #openbanking &amp; personal #data economy argues @Lui_Zurawski #mone…",
      "post_date": "2019-06-03T11:41:00"
   },
   {
      "text": "RT @jimwadsworth: Looking forward to some great conversations about #OpenBanking over the next 3 days at #Money2020EU in Amsterdam! https:/…",
      "post_date": "2019-06-03T11:40:00"
   },
   {
      "text": "RT @moneyfintech: Good luck w stand &amp; the conference @enfuce ! You rock💪 #fintech #financialservices #Money2020Europe #OpenBanking https://…",
      "post_date": "2019-06-03T11:35:00"
   },
   {
      "text": "Good luck w stand &amp; the conference @enfuce ! You rock💪 #fintech #financialservices #Money2020Europe #OpenBanking https://t.co/rXjIb8fh9F",
      "post_date": "2019-06-03T11:35:00"
   },
   {
      "text": "Making Open Banking Mainstream - Finextra - https://t.co/jDrPbbZSFX #openbanking #banking #digital",
      "post_date": "2019-06-03T11:34:00"
   },
   {
      "text": "RT @ForgeRock: #ICYMI - ForgeRock is the first #Identity #AccessManagement vendor to conform to the @OpenID Foundation's Financial-grade #A…",
      "post_date": "2019-06-03T11:31:00"
   },
   {
      "text": "RT @Ai_Connects_Us: Ai Editorial: Assessing the impact of open APIs on #payments landscape\n\nhttps://t.co/kc4SPjeEIr\n\n@Voyego #openAPI #open…",
      "post_date": "2019-06-03T11:31:00"
   },
   {
      "text": "China and India lead global fintech services adoption https://t.co/22WPrKf2y1 via @Finextra\n#credit #openbanking… https://t.co/V0zfSjrfFH",
      "post_date": "2019-06-03T11:30:00"
   },
   {
      "text": "What's key for #OpenBanking to become a success story? We spoke to Sam Everington from Starling Bank to get his gre… https://t.co/xyxX2q83cG",
      "post_date": "2019-06-03T11:28:00"
   },
   {
      "text": "Check out the interview with @georgl on seizing #OpenBanking the @financialit_net Summer Issue page 15 at… https://t.co/oEO7uxpfhP",
      "post_date": "2019-06-03T11:28:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T11:20:00"
   },
   {
      "text": "RT @WFSULLIVAN3: If you are attending #M2020Eu, let's find time to connect at @Capgemini booth J101 to discuss #FinTech, #OpenBanking, and…",
      "post_date": "2019-06-03T11:15:00"
   },
   {
      "text": "Indonesia's Central Bank Governor Unveils 5 Key Payments Initiative - Fintech News Singapore -… https://t.co/zCpQhwyzUZ",
      "post_date": "2019-06-03T11:14:00"
   },
   {
      "text": "What impact will Open Banking and Instant Payments have on your payment strategy? Meet us at Money 20/20 stand G115… https://t.co/JplCvYHOqD",
      "post_date": "2019-06-03T11:09:00"
   },
   {
      "text": "RT @TLT_LLP: A year after the #GDPR came into effect, @EmmaFoxLaw asks if it's been a blessing or a curse for #digitalbanking - from its re…",
      "post_date": "2019-06-03T11:09:00"
   },
   {
      "text": "What impact will Open Banking and Instant Payments have on your payment strategy? Meet us at Money 20/20 stand G115… https://t.co/Ibv1lsIimb",
      "post_date": "2019-06-03T11:08:00"
   },
   {
      "text": "RT @TLT_LLP: A year after the #GDPR came into effect, @EmmaFoxLaw asks if it's been a blessing or a curse for #digitalbanking - from its re…",
      "post_date": "2019-06-03T11:07:00"
   },
   {
      "text": "RT @thepower_50: Make sure to connect w/@meniga at #Money2020EU. \n\nThey are featured in our \"Ones to Watch\" supplement. :)\n\n#fintech #openb…",
      "post_date": "2019-06-03T11:07:00"
   },
   {
      "text": "Metro is intending to use AISP / open banking in order to enhance their own SMB-customer credit offering. #M2020EU #openbanking",
      "post_date": "2019-06-03T11:07:00"
   },
   {
      "text": "RT @thepower_50: Make sure to connect w/@meniga at #Money2020EU. \n\nThey are featured in our \"Ones to Watch\" supplement. :)\n\n#fintech #openb…",
      "post_date": "2019-06-03T11:05:00"
   },
   {
      "text": "Make sure to connect w/@meniga at #Money2020EU. \n\nThey are featured in our \"Ones to Watch\" supplement. :)\n\n#fintech… https://t.co/v3F5G2tB1M",
      "post_date": "2019-06-03T11:05:00"
   },
   {
      "text": "Are you guys paying attention?\n\nIf not, you should be..\n\n$QNT #Overledger #Blockchain #DLT #crypto #OpenBanking https://t.co/IRZVF8MdYf",
      "post_date": "2019-06-03T11:04:00"
   },
   {
      "text": "CItibank is going beyond PSD2 compliance with pay-later API (done) and pre-authorization API (in-development) #M2020EU #openbanking",
      "post_date": "2019-06-03T11:04:00"
   },
   {
      "text": "Tremendous Opportunities in Open Banking Market with List of Key Players Such as Accern Corporation, JackHenry and… https://t.co/RxfFaRQaGV",
      "post_date": "2019-06-03T11:04:00"
   },
   {
      "text": "RT @TLT_LLP: A year after the #GDPR came into effect, @EmmaFoxLaw asks if it's been a blessing or a curse for #digitalbanking - from its re…",
      "post_date": "2019-06-03T11:03:00"
   },
   {
      "text": "Two big trends #payments players need to capitalize on: #openbanking &amp; personal #data economy argues @Lui_Zurawski… https://t.co/yhK42QDjfp",
      "post_date": "2019-06-03T11:03:00"
   },
   {
      "text": "A year after the #GDPR came into effect, @EmmaFoxLaw asks if it's been a blessing or a curse for #digitalbanking -… https://t.co/HSula9jadN",
      "post_date": "2019-06-03T10:58:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T10:58:00"
   },
   {
      "text": "Did you miss the full presentation in Oslo where we introduced our new premium FX APIs? See what you missed here… https://t.co/PtTx5H3Pke",
      "post_date": "2019-06-03T10:55:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-06-03T10:47:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-03T10:43:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T10:43:00"
   },
   {
      "text": "Hearing from some great CEO’s @ING_news @bigpaymeapp @AlternaBank from large established European Banks to new Asia… https://t.co/O4DFgTsEyb",
      "post_date": "2019-06-03T10:40:00"
   },
   {
      "text": "We’re proud to be #money2020eu this week supporting our partner company @NeonomicsAS. If you are looking for… https://t.co/h2HAfh27rq",
      "post_date": "2019-06-03T10:37:00"
   },
   {
      "text": "RT @thepower_50: Make sure to visit our The #Fintech Power 50 member @BankingCircle at #Money2020EU.\n\nMeanwhile, check out our interview w/…",
      "post_date": "2019-06-03T10:37:00"
   },
   {
      "text": "Feel free to join me talking about From Threat to Opportunity: the impact of open banking on incumbent banks - June… https://t.co/VUAKiNGNHZ",
      "post_date": "2019-06-03T10:36:00"
   },
   {
      "text": "RT @ConsorzioCBI: Innovation + open platform are the key words for future!\n#M2020EU #Money2020 #CBIGlobe #openbanking @lilianafratinip http…",
      "post_date": "2019-06-03T10:34:00"
   },
   {
      "text": "RT @EquinixUK: What must we do to make #openbanking a success? @StarlingBank's @samever looks into this and more with @OBE_Global: https://…",
      "post_date": "2019-06-03T10:33:00"
   },
   {
      "text": "Banks must craft their own #openbanking ecosystems. The winners will build a trusted platform that encompasses end-… https://t.co/MovI35Id2D",
      "post_date": "2019-06-03T10:32:00"
   },
   {
      "text": ".@SocieteGenerale has a number of #openbanking successes in Europe and Africa. Learn how they transformed their bus… https://t.co/rWdGh6wH3E",
      "post_date": "2019-06-03T10:30:00"
   },
   {
      "text": "What must we do to make #openbanking a success? @StarlingBank's @samever looks into this and more with @OBE_Global:… https://t.co/H197vfO30e",
      "post_date": "2019-06-03T10:30:00"
   },
   {
      "text": "Multi-factor authentication isn't always the answer in FinTech - Open Access Government - https://t.co/ezS8DwK10r… https://t.co/4onIlQXZyt",
      "post_date": "2019-06-03T10:24:00"
   },
   {
      "text": "RT @ConsorzioCBI: Innovation + open platform are the key words for future!\n#M2020EU #Money2020 #CBIGlobe #openbanking @lilianafratinip http…",
      "post_date": "2019-06-03T10:22:00"
   },
   {
      "text": "Innovation + open platform are the key words for future!\n#M2020EU #Money2020 #CBIGlobe #openbanking @lilianafratinip https://t.co/sGcrQ38jIU",
      "post_date": "2019-06-03T10:18:00"
   },
   {
      "text": "RT @DataScientistFr: [#Infographic] Conceptual Diagram of Banking as a Service VS Banking as a Platform\n\n https://t.co/QxapF5Unsz \n\n#Digita…",
      "post_date": "2019-06-03T10:16:00"
   },
   {
      "text": "[#Infographic] Conceptual Diagram of Banking as a Service VS Banking as a Platform\n\n https://t.co/QxapF5Unsz … https://t.co/cJGJxo2klz",
      "post_date": "2019-06-03T10:16:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-03T10:13:00"
   },
   {
      "text": "RT @WFSULLIVAN3: No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredible.  Th…",
      "post_date": "2019-06-03T10:12:00"
   },
   {
      "text": "RT @SocieteGenerale: During #Money2020 #M2020EU let’s meet our teams and discuss #OpenInnovation #OpenBanking #BankingAsAService #Insurtech…",
      "post_date": "2019-06-03T10:11:00"
   },
   {
      "text": "[#Infographic] Conceptual Diagram of Banking as a Service VS Banking as a Platform\n\n https://t.co/wqhJU0vxhV … https://t.co/xwWStdPZFz",
      "post_date": "2019-06-03T10:10:00"
   },
   {
      "text": "[#Infographic] Conceptual Diagram of Banking as a Service VS Banking as a Platform\n\n https://t.co/esStC1YVSq … https://t.co/nYRrLOrYhv",
      "post_date": "2019-06-03T10:10:00"
   },
   {
      "text": "Heading to #EBAday2019 this month? We are participating in two panels on the 18th June, discussing… https://t.co/YhkSEkavnd",
      "post_date": "2019-06-03T10:10:00"
   },
   {
      "text": "In this article, Brian Costello discusses the current state of #OpenBanking, explaining how multi-factor authentica… https://t.co/pM1yGFci0Z",
      "post_date": "2019-06-03T10:06:00"
   },
   {
      "text": "RT @tink: One of the biggest #openbanking reports of 2019 is now live! Read the first of our three big insights and download the report to…",
      "post_date": "2019-06-03T10:06:00"
   },
   {
      "text": "No matter how many times I see these stats, I still continue to be wow'ed.  @WeChatApp platform success is incredib… https://t.co/KkvBfgNtl0",
      "post_date": "2019-06-03T10:04:00"
   },
   {
      "text": "UK API standards expert Chris Wood: \"The API Economy has foisted change on many other markets outside banking... ba… https://t.co/2JDP2isYee",
      "post_date": "2019-06-03T10:01:00"
   },
   {
      "text": "Tier 1 and 2 banks will offer at least 5 external retail banking APIs in 2019 \n30 Most Common #OpenBanking #APIs in… https://t.co/EkigV62L46",
      "post_date": "2019-06-03T09:59:00"
   },
   {
      "text": "RT @TeamSupercharge: Read our jargon-free briefing and see how the tech behind #OpenBanking, #Microservices, #BigData or #MachineLearning i…",
      "post_date": "2019-06-03T09:57:00"
   },
   {
      "text": "RT @TeamSupercharge: Read our jargon-free briefing and see how the tech behind #OpenBanking, #Microservices, #BigData or #MachineLearning i…",
      "post_date": "2019-06-03T09:56:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-03T09:53:00"
   },
   {
      "text": "RT @MennovL: Who in financial services does not want to be(come) ‘secure banking platform of the future’ ING’s CEO pitching at #M2020EU 🤔 T…",
      "post_date": "2019-06-03T09:47:00"
   },
   {
      "text": "Looking forward to having @PeterNeufeld from @EY_Seren join us for the Digital customer experience in the age of op… https://t.co/sNS2BKCr3T",
      "post_date": "2019-06-03T09:46:00"
   },
   {
      "text": "APIs and digital transformation will be key in the mortgage market, says IRESS https://t.co/qX5imsTozR #openbanking… https://t.co/nHrmA7kKSl",
      "post_date": "2019-06-03T09:45:00"
   },
   {
      "text": "Don't miss @georgl’s panel on 5th of June at 9:35 am on the Industry Transmutation Stage! Georg will be sharing ins… https://t.co/XnUIYZqs2H",
      "post_date": "2019-06-03T09:43:00"
   },
   {
      "text": "Read our jargon-free briefing and see how the tech behind #OpenBanking, #Microservices, #BigData or… https://t.co/dwJ9rX43pg",
      "post_date": "2019-06-03T09:37:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-03T09:33:00"
   },
   {
      "text": "RT @b_motif: @decodingloyalty Exciting stuff! Love my #monzo #openbanking (and excellent artwork on show by our own @JoniBelaruski too!)",
      "post_date": "2019-06-03T09:32:00"
   },
   {
      "text": "European financial institutions see #OpenBanking as the biggest current threat https://t.co/q1OqwOON7x",
      "post_date": "2019-06-03T09:30:00"
   },
   {
      "text": "One of the biggest #openbanking reports of 2019 is now live! Read the first of our three big insights and download… https://t.co/KOy6yiokV7",
      "post_date": "2019-06-03T09:28:00"
   },
   {
      "text": "Why #OpenBanking will become a transformational force in the #corporatebanking market?  https://t.co/NjaDuwYz9L",
      "post_date": "2019-06-03T09:27:00"
   },
   {
      "text": "RT @SocieteGenerale: During #Money2020 #M2020EU let’s meet our teams and discuss #OpenInnovation #OpenBanking #BankingAsAService #Insurtech…",
      "post_date": "2019-06-03T09:24:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Conceptual Diagram of Banking as a Service VS Banking as a Platform\n\nhttps://t.co/kOwRBCXxCx\n\n#DigitalTra…",
      "post_date": "2019-06-03T09:24:00"
   },
   {
      "text": "RT @FMFinTech: The security challenges faced by #openbanking\n\n#financialservices #tech #banking\n\n@sbmeunier @leimer @JPNicols @rshevlin @ma…",
      "post_date": "2019-06-03T09:23:00"
   },
   {
      "text": "RT @OpenBankingExpo: Feature: Not about banking - as Open Banking evolves beyond apps, take a look at some of the innovators creating a buz…",
      "post_date": "2019-06-03T09:21:00"
   },
   {
      "text": "RT @OpenBankingExpo: Feature: Not about banking - as Open Banking evolves beyond apps, take a look at some of the innovators creating a buz…",
      "post_date": "2019-06-03T09:20:00"
   },
   {
      "text": "#ICYMI - ForgeRock is the first #Identity #AccessManagement vendor to conform to the @OpenID Foundation's Financial… https://t.co/h7bQ63zEK2",
      "post_date": "2019-06-03T09:14:00"
   },
   {
      "text": "RT @jimwadsworth: Looking forward to some great conversations about #OpenBanking over the next 3 days at #Money2020EU in Amsterdam! https:/…",
      "post_date": "2019-06-03T09:13:00"
   },
   {
      "text": "Remarkable that #Plaid touches 100m consumers in North America in a non #OpenBanking environment #M2020EU",
      "post_date": "2019-06-03T09:12:00"
   },
   {
      "text": "Feature: Not about banking - as Open Banking evolves beyond apps, take a look at some of the innovators creating a… https://t.co/HwgBbgRTZb",
      "post_date": "2019-06-03T09:12:00"
   },
   {
      "text": "[#Infographic] Conceptual Diagram of Banking as a Service VS Banking as a Platform\n\nhttps://t.co/kOwRBCXxCx… https://t.co/zxFBdrUUTz",
      "post_date": "2019-06-03T09:10:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-03T09:07:00"
   },
   {
      "text": "#openbanking the first step towards #digitalbanking. Sign up for webinar  - https://t.co/nRVBvfEYlM #PSD2 #fintech #banking",
      "post_date": "2019-06-03T09:07:00"
   },
   {
      "text": "RT @getyolt: It's our #birthday! From launching in the UK, France &amp; Italy to joining forces with amazing #fintechs to driving #OpenBanking…",
      "post_date": "2019-06-03T09:07:00"
   },
   {
      "text": "Come meet Eleni Coldrey from @EquinixUK in booth C90 at #Money2020EU to talk about #OpenBanking and digital transfo… https://t.co/KH1uVtHIKe",
      "post_date": "2019-06-03T09:05:00"
   },
   {
      "text": "It's our #birthday! From launching in the UK, France &amp; Italy to joining forces with amazing #fintechs to driving… https://t.co/g8rQi95xea",
      "post_date": "2019-06-03T09:01:00"
   },
   {
      "text": "Open Banking here ready to answer your questions. Stand R21. #openbanking #M2020EU https://t.co/nrxiI7Xdub",
      "post_date": "2019-06-03T08:59:00"
   },
   {
      "text": "RT @creditkudos: .@money2020 is almost upon us! Make sure to come see @fredkelly join the panel to discuss different approaches to leveragi…",
      "post_date": "2019-06-03T08:53:00"
   },
   {
      "text": "RT @tink: Our CEO @Dkjellen will take the @money2020 stage on Wednesday to talk about how Tink has out-engineered the financial industry –…",
      "post_date": "2019-06-03T08:49:00"
   },
   {
      "text": "RT @thepower_50: Make sure to visit our The #Fintech Power 50 member @BankingCircle at #Money2020EU.\n\nMeanwhile, check out our interview w/…",
      "post_date": "2019-06-03T08:48:00"
   },
   {
      "text": "RT @MennovL: Who in financial services does not want to be(come) ‘secure banking platform of the future’ ING’s CEO pitching at #M2020EU 🤔 T…",
      "post_date": "2019-06-03T08:46:00"
   },
   {
      "text": "RT @SocieteGenerale: During #Money2020 #M2020EU let’s meet our teams and discuss #OpenInnovation #OpenBanking #BankingAsAService #Insurtech…",
      "post_date": "2019-06-03T08:44:00"
   },
   {
      "text": "RT @SocieteGenerale: During #Money2020 #M2020EU let’s meet our teams and discuss #OpenInnovation #OpenBanking #BankingAsAService #Insurtech…",
      "post_date": "2019-06-03T08:42:00"
   },
   {
      "text": "@OBE_Global Congratulations to all the #Yapily Team on securing their funding !!  We all ❤️ a success story &amp; this… https://t.co/9hOnx6zaI3",
      "post_date": "2019-06-03T08:41:00"
   },
   {
      "text": "UK #Regtech #Konsentus Closes Multi-Million-Pound pre-Series A Round ⠀\nhttps://t.co/EFfytCq3sD ⠀\n#fintech… https://t.co/EM4Ymb8Lxt",
      "post_date": "2019-06-03T08:39:00"
   },
   {
      "text": "Who in financial services does not want to be(come) ‘secure banking platform of the future’ ING’s CEO pitching at… https://t.co/hSpjBCBsQa",
      "post_date": "2019-06-03T08:31:00"
   },
   {
      "text": "Let's start the 3 days #fintech of the @money2020 Europe. #Fabrick is waiting for you with its team, #Axerve,… https://t.co/ablIqbzN1M",
      "post_date": "2019-06-03T08:30:00"
   },
   {
      "text": "RT @SocieteGenerale: During #Money2020 #M2020EU let’s meet our teams and discuss #OpenInnovation #OpenBanking #BankingAsAService #Insurtech…",
      "post_date": "2019-06-03T08:30:00"
   },
   {
      "text": "During #Money2020 #M2020EU let’s meet our teams and discuss #OpenInnovation #OpenBanking #BankingAsAService… https://t.co/aybKGVSKnJ",
      "post_date": "2019-06-03T08:29:00"
   },
   {
      "text": "RT @FabrickPlatform: #openbanking news by #Fabrick \n\n🔷 The role of application networks in an open banking world 🔷\n\n#APIeconomy #fintech #b…",
      "post_date": "2019-06-03T08:27:00"
   },
   {
      "text": "RT @Global_Kinetic: AI is Accelerating the Growth of FinTech Companies https://t.co/kk59GXDbap\n#digitalbanking #fintech #Payments #banking…",
      "post_date": "2019-06-03T08:24:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-03T08:22:00"
   },
   {
      "text": "AI is Accelerating the Growth of FinTech Companies https://t.co/kk59GXDbap\n#digitalbanking #fintech #Payments… https://t.co/jL2iOVrocr",
      "post_date": "2019-06-03T08:22:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-03T08:20:00"
   },
   {
      "text": "Yolt | Unthink Money #spinoff #ING #OpenBanking #Money2020EU ⁦@sparkassen_hub⁩  https://t.co/6MRtzaQjtV",
      "post_date": "2019-06-03T08:20:00"
   },
   {
      "text": "#data is so important to turn banks into platforms. Platforms are sticky and have strong network effects. More prod… https://t.co/uTHfsqfDDg",
      "post_date": "2019-06-03T08:19:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T08:19:00"
   },
   {
      "text": "Santander and eBay to launch loans app in UK https://t.co/56ur6SCAab via @financialtimes #SMEs #loans #santander… https://t.co/RFoNuLv8Pr",
      "post_date": "2019-06-03T08:16:00"
   },
   {
      "text": "RT @ConsorzioCBI: Don’t miss to visit is at Y22!  #M2020EU #OpenBanking #CBIGlobe #Money2020 https://t.co/puf10yTpie",
      "post_date": "2019-06-03T08:13:00"
   },
   {
      "text": "Look for Raisin CEO @TamazGeorgadze at @money2020 this afternoon in #Amsterdam, where he'll be discussing new reven… https://t.co/1zfIhm7M4r",
      "post_date": "2019-06-03T08:12:00"
   },
   {
      "text": "Don’t miss to visit is at Y22!  #M2020EU #OpenBanking #CBIGlobe #Money2020 https://t.co/puf10yTpie",
      "post_date": "2019-06-03T08:12:00"
   },
   {
      "text": "Do your #customers have #bank accounts with more than one #bank? #AccountAggregation is the perfect way to use… https://t.co/wNjH4kH9dC",
      "post_date": "2019-06-03T08:11:00"
   },
   {
      "text": "#Money2020Eu is off to a great start and we look forward to the next three days talking all things #OpenBanking and… https://t.co/z5R1AJ0Cxp",
      "post_date": "2019-06-03T08:08:00"
   },
   {
      "text": "RT @saltedge: @money2020 Europe is starting today! Come by our stand #W20 on the way to the main stage and have a chat with Dmitrii, @Lisa_…",
      "post_date": "2019-06-03T08:08:00"
   },
   {
      "text": "Make sure to visit our The #Fintech Power 50 member @BankingCircle at #Money2020EU.\n\nMeanwhile, check out our inter… https://t.co/HvufxC8lBv",
      "post_date": "2019-06-03T08:05:00"
   },
   {
      "text": "@money2020 Europe is starting today! Come by our stand #W20 on the way to the main stage and have a chat with Dmitr… https://t.co/MvtX1290Zx",
      "post_date": "2019-06-03T08:04:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-03T08:04:00"
   },
   {
      "text": "Making Open Banking Mainstream - Finextra - https://t.co/keIg6ziA1b #openbanking #banking #digital",
      "post_date": "2019-06-03T08:04:00"
   },
   {
      "text": "APIs and open platforms excite banking leaders at FusionONE 2019 - Finextra - https://t.co/Bg6egYzJfC #openbanking #banking #digital",
      "post_date": "2019-06-03T08:04:00"
   },
   {
      "text": "A huge vote of confidence in Konsentus and #openbanking from MasterCard!\nhttps://t.co/1mn1aniUzv via @Finextra",
      "post_date": "2019-06-03T08:01:00"
   },
   {
      "text": "@money2020 we have arrived! Stop by the pink booth to talk to us about what's happening in the run-up to September,… https://t.co/k7GLRPpVmk",
      "post_date": "2019-06-03T07:47:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T07:44:00"
   },
   {
      "text": "Why #OpenBanking is set to be a game-changer in helping #banks deliver a better customer experience https://t.co/cxwNKSNYex via @abcnews",
      "post_date": "2019-06-03T07:42:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Looking forward to #WFTR19 \"Leapfrogging #OpenBanking to Open X\" chat next week w/ @jimmarous @leimer @visible_banking @gh…",
      "post_date": "2019-06-03T07:36:00"
   },
   {
      "text": "RT @thepower_50: Make sure to connect w/the @saltedge team at #Money2020EU.\n\nMeanwhile, check out our interview w/@Lisa_Gutu from #Finovate…",
      "post_date": "2019-06-03T07:35:00"
   },
   {
      "text": "UK #Regtech #Konsentus Closes Multi-Million-Pound pre-Series A Round \nhttps://t.co/dmOdZ5uMCC \n#fintech… https://t.co/7xInPw9p78",
      "post_date": "2019-06-03T07:29:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T07:28:00"
   },
   {
      "text": "RT @WFSULLIVAN3: If you are attending #M2020Eu, let's find time to connect at @Capgemini booth J101 to discuss #FinTech, #OpenBanking, and…",
      "post_date": "2019-06-03T07:22:00"
   },
   {
      "text": "If you are attending #M2020Eu, let's find time to connect at @Capgemini booth J101 to discuss #FinTech,… https://t.co/hn5D7JNnCC",
      "post_date": "2019-06-03T07:21:00"
   },
   {
      "text": "RT @MastercardEU: We're kicking off the week @money2020 in Amsterdam to talk #innovation #technology #openbanking #digitalbanking and more…",
      "post_date": "2019-06-03T07:20:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Looking forward to #WFTR19 \"Leapfrogging #OpenBanking to Open X\" chat next week w/ @jimmarous @leimer @visible_banking @gh…",
      "post_date": "2019-06-03T07:17:00"
   },
   {
      "text": "RT @tink: Our CEO @Dkjellen will take the @money2020 stage on Wednesday to talk about how Tink has out-engineered the financial industry –…",
      "post_date": "2019-06-03T07:16:00"
   },
   {
      "text": "We’re here! #tink @money2020 #OpenBanking https://t.co/V2RiCEnYVj",
      "post_date": "2019-06-03T07:16:00"
   },
   {
      "text": "Some major lenders are ahead of the curve and #LeadingByExample. @MandSBank and Bluestone Group are among those who… https://t.co/6tm0FiVGpX",
      "post_date": "2019-06-03T07:14:00"
   },
   {
      "text": "RT @opeadeoye: We what...?\n\nWe. Keep. Moving.\n\nThanks for the hustle @dejiolowe\n\n#OpenBanking https://t.co/ie2P0uh1Mt",
      "post_date": "2019-06-03T07:14:00"
   },
   {
      "text": "We what...?\n\nWe. Keep. Moving.\n\nThanks for the hustle @dejiolowe\n\n#OpenBanking https://t.co/ie2P0uh1Mt",
      "post_date": "2019-06-03T07:12:00"
   },
   {
      "text": "RT @jimwadsworth: Looking forward to some great conversations about #OpenBanking over the next 3 days at #Money2020EU in Amsterdam! https:/…",
      "post_date": "2019-06-03T07:10:00"
   },
   {
      "text": "RT @MastercardEU: We're kicking off the week @money2020 in Amsterdam to talk #innovation #technology #openbanking #digitalbanking and more…",
      "post_date": "2019-06-03T07:08:00"
   },
   {
      "text": "The ⁦@TietoCorp⁩ team ready to talk about #virtualaccounts, #openbanking, #instantpayments, #lending and more at… https://t.co/ZHOlp1NcBH",
      "post_date": "2019-06-03T07:08:00"
   },
   {
      "text": "RT @TCS: Testing the waters or have you just embarked on an enterprise-wide #openbanking journey? Either way, our C3 strategy will prove us…",
      "post_date": "2019-06-03T07:07:00"
   },
   {
      "text": "We're kicking off the week @money2020 in Amsterdam to talk #innovation #technology #openbanking #digitalbanking and… https://t.co/ExdsGuFLo8",
      "post_date": "2019-06-03T07:04:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-03T07:04:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-03T07:02:00"
   },
   {
      "text": "RT @lorraineh_Roma: Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and #Scotland: h…",
      "post_date": "2019-06-03T07:01:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T07:00:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Looking forward to #WFTR19 \"Leapfrogging #OpenBanking to Open X\" chat next week w/ @jimmarous @leimer @visible_banking @gh…",
      "post_date": "2019-06-03T07:00:00"
   },
   {
      "text": "Read my interview on @BandCNews discussing the #bridging #finance market, lender funding, #OpenBanking and… https://t.co/XdPAJ2xFzC",
      "post_date": "2019-06-03T06:59:00"
   },
   {
      "text": "Looking forward to some great conversations about #OpenBanking over the next 3 days at #Money2020EU in Amsterdam! https://t.co/RVisQksadT",
      "post_date": "2019-06-03T06:58:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T06:50:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T06:49:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Looking forward to #WFTR19 \"Leapfrogging #OpenBanking to Open X\" chat next week w/ @jimmarous @leimer @visible_banking @gh…",
      "post_date": "2019-06-03T06:47:00"
   },
   {
      "text": "Visualizing the Future of #Banking Talent \nhttps://t.co/HdDkYJMfIZ\nv/ @VisualCap \n\n#fintech #AI #ML #Innovation… https://t.co/bBuiYsHNBt",
      "post_date": "2019-06-03T06:41:00"
   },
   {
      "text": "RT @SocieteGenerale: At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by @ccalmeja…",
      "post_date": "2019-06-03T06:38:00"
   },
   {
      "text": "At #M2020EU Europe in Amsterdam for the next 3 days? Societe Generale's #OpenInnovation team is too, lead by… https://t.co/wNnOyTwY5H",
      "post_date": "2019-06-03T06:38:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Looking forward to #WFTR19 \"Leapfrogging #OpenBanking to Open X\" chat next week w/ @jimmarous @leimer @visible_banking @gh…",
      "post_date": "2019-06-03T06:25:00"
   },
   {
      "text": "#openbanking news by #Fabrick \n\n🔷 The role of application networks in an open banking world 🔷\n\n#APIeconomy #fintech… https://t.co/pIAkXj7l8e",
      "post_date": "2019-06-03T06:18:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-03T06:15:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Looking forward to #WFTR19 \"Leapfrogging #OpenBanking to Open X\" chat next week w/ @jimmarous @leimer @visible_banking @gh…",
      "post_date": "2019-06-03T06:10:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-03T05:56:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-06-03T05:26:00"
   },
   {
      "text": "RT @WFSULLIVAN3: Leapfrogging #OpenBanking to Open X.  Stop by our @Capgemini booth at #M2020EU to learn more. \n\n#WFTR19 #AppliedInnovation…",
      "post_date": "2019-06-03T05:21:00"
   },
   {
      "text": "Looking forward to #WFTR19 \"Leapfrogging #OpenBanking to Open X\" chat next week w/ @jimmarous @leimer… https://t.co/QoOvd55lIX",
      "post_date": "2019-06-03T05:16:00"
   },
   {
      "text": "Making Open Banking Mainstream - Finextra - https://t.co/VhWFJSGK6q #openbanking #banking #digital",
      "post_date": "2019-06-03T05:04:00"
   },
   {
      "text": "Leapfrogging #OpenBanking to Open X.  Stop by our @Capgemini booth at #M2020EU to learn more. \n\n#WFTR19… https://t.co/KM5Oq05uMg",
      "post_date": "2019-06-03T05:00:00"
   },
   {
      "text": "Open banking platform to support DCB Bank’s future growth - Express Computer - https://t.co/KeINCrP95T #openbanking #banking #digital",
      "post_date": "2019-06-03T04:54:00"
   },
   {
      "text": "RT: @The_LHoFT The Future of #Banking: \"The new world is one of transient relationships, shorter-term commitments a… https://t.co/EJxOxnHHuN",
      "post_date": "2019-06-03T04:18:00"
   },
   {
      "text": "RT @Lago72: #AI-Powered #Chatbots Further Automating #DigitalBanking \nv/ @PwC \nHT @ravikikan @MikeQuindazzi \n\n#FinServ #FinTech #Banking #F…",
      "post_date": "2019-06-03T04:16:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-03T03:50:00"
   },
   {
      "text": "In fintech race, Go-Jek app extends consumer credit to offline stores - Nikkei Asian Review -… https://t.co/W3kLr3KB6E",
      "post_date": "2019-06-03T03:34:00"
   },
   {
      "text": "Ping An OneConnect unveils open platform for financial industry, the platform joins hands with Hong Kong Cyberport… https://t.co/A4q7xNyVlj",
      "post_date": "2019-06-03T03:34:00"
   },
   {
      "text": "RT @antgrasso: The journey toward PSD2: to stay balanced and competitive in this banking revolution a “white label” turnkey solution help t…",
      "post_date": "2019-06-03T03:11:00"
   },
   {
      "text": "#openbanking #innovation Adopting « an API-centric mindset that accelerates integration and innovation and provides… https://t.co/QWojkWhjfb",
      "post_date": "2019-06-03T02:50:00"
   },
   {
      "text": "RT @ubleam: 🙏🏻 Qualified scaleup in Financial Services. \n\n#InnovationAndTechnology #OpenBanking #OpenInnovation #OpenX #CustomerExperience…",
      "post_date": "2019-06-03T02:47:00"
   },
   {
      "text": "RT @CaroBowler: The revolution will not be televised. Open Banking is on its way to an apathetic audience here in Australia. How can we imp…",
      "post_date": "2019-06-03T02:38:00"
   },
   {
      "text": "CBN Harps on Open Banking - THISDAY Newspapers - https://t.co/wEceyp6jNO #openbanking #banking #digital",
      "post_date": "2019-06-03T02:37:00"
   },
   {
      "text": "RT @Infosys: Banks must craft their own #openbanking ecosystems. The winners will build a trusted platform that encompasses end-to-end cust…",
      "post_date": "2019-06-03T02:06:00"
   },
   {
      "text": "RT @FinastraFS: Join Finastra's @elirosner Chief Product &amp; Technology Officer, as he discusses how to transform a bank's tech platform at @…",
      "post_date": "2019-06-03T00:48:00"
   },
   {
      "text": "RT @FinastraFS: Got 5mins? You can build a new app in that time! Join Finastra's @C_FinTech Director Innovation @money2020 and see how easy…",
      "post_date": "2019-06-03T00:47:00"
   },
   {
      "text": "RT: @The_LHoFT The Future of #Banking: \"The new world is one of transient relationships, shorter-term commitments a… https://t.co/f9WnlYHgkc",
      "post_date": "2019-06-03T00:42:00"
   },
   {
      "text": "The revolution will not be televised. Open Banking is on its way to an apathetic audience here in Australia. How ca… https://t.co/XdIz5GdXQz",
      "post_date": "2019-06-03T00:28:00"
   },
   {
      "text": "RT @FinastraFS: RT: @The_LHoFT The Future of #Banking: \"The new world is one of transient relationships, shorter-term commitments and every…",
      "post_date": "2019-06-02T23:44:00"
   },
   {
      "text": "The Open X made reality. Join us #Money2020EU to learn about the new generation of #OpenBanking… https://t.co/zIZOMFno7L",
      "post_date": "2019-06-02T23:16:00"
   },
   {
      "text": "RT @thepower_50: Make sure to connect w/the @saltedge team at #Money2020EU.\n\nMeanwhile, check out our interview w/@Lisa_Gutu from #Finovate…",
      "post_date": "2019-06-02T23:00:00"
   },
   {
      "text": "RT @Flanks_io: #Fintech will automate the daily work of finance in companies. 🤖@OpenAccessGov #PSD2 #banking #openbanking #AutoBanking\n\nhtt…",
      "post_date": "2019-06-02T21:22:00"
   },
   {
      "text": "RT @LouiseHBeaumont: Heading to @money2020 EU shortly - you have four golden opportunities to come and heckle me\n\nhttps://t.co/SglxIN3l2h…",
      "post_date": "2019-06-02T20:41:00"
   },
   {
      "text": "Actually, the ⁦@MalauzaiMonkeys⁩ connect to over 39 cores (and growing). So, there are not many “new” cores for us… https://t.co/U0egvA9JFR",
      "post_date": "2019-06-02T20:39:00"
   },
   {
      "text": "RT @LouiseHBeaumont: Heading to @money2020 EU shortly - you have four golden opportunities to come and heckle me\n\nhttps://t.co/SglxIN3l2h…",
      "post_date": "2019-06-02T20:35:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-02T20:23:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-02T19:43:00"
   },
   {
      "text": "RT @ConsorzioCBI: We are waiting for you! ✌🏼 #M2020EU #OpenBanking #CBIGlobe https://t.co/bMh2p6mQhW",
      "post_date": "2019-06-02T19:31:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-06-02T19:25:00"
   },
   {
      "text": "#Payments Innovation Isn't Global Enough \nhttps://t.co/mwPFSyEyam\nv/ @payments_source\nHT @KVanderhoydonk\n\n#FinTech… https://t.co/M2QvceA2U7",
      "post_date": "2019-06-02T19:04:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-02T18:58:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-02T18:48:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-02T18:43:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-02T18:38:00"
   },
   {
      "text": "RT @opeadeoye: #OpenBanking We. Keep. Moving. https://t.co/gmYodBteKD",
      "post_date": "2019-06-02T18:23:00"
   },
   {
      "text": "#London fintech Yapily latest to benefit from #OpenBanking goldrush https://t.co/5A51XSHlC4 #fintech #banking #payments",
      "post_date": "2019-06-02T18:12:00"
   },
   {
      "text": "RT @News_ZV: Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve @Salz_Er @comb…",
      "post_date": "2019-06-02T18:05:00"
   },
   {
      "text": "Finance 2.0 – \"Make Banking sexy\" und die Gallier\n#OpenBanking @joris_hensen @fintechrockers @NeiraOsci @ggreve… https://t.co/6CNPinWwMO",
      "post_date": "2019-06-02T18:00:00"
   },
   {
      "text": "We are waiting for you! ✌🏼 #M2020EU #OpenBanking #CBIGlobe https://t.co/bMh2p6mQhW",
      "post_date": "2019-06-02T17:17:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking about… https://t.co/cMP2j3LxQ0",
      "post_date": "2019-06-02T17:15:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-06-02T17:15:00"
   },
   {
      "text": "The drive towards #OpenBanking in #Europe is creating an attractive environment for#Fintech fund raising,  London-b… https://t.co/Gw99jt69uc",
      "post_date": "2019-06-02T17:00:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-06-02T16:03:00"
   },
   {
      "text": "The role of application networks in an open banking world #Digital #openbanking #banking  https://t.co/B0Sew9B4xr",
      "post_date": "2019-06-02T16:03:00"
   },
   {
      "text": "Three Big Drivers of the Payments Revolution: Lean In or Lose Out #paylead #UX #openbanking\nhttps://t.co/1jbK26MSkR",
      "post_date": "2019-06-02T15:53:00"
   },
   {
      "text": "RT @Epiphany_Srl: Still not ready for the next #PSD2 deadlines or willing to embrace #OpenBanking? \nEpiphany can help you! Join us at #EBAD…",
      "post_date": "2019-06-02T15:46:00"
   },
   {
      "text": "RT @Flanks_io: #Fintech will automate the daily work of finance in companies. 🤖@OpenAccessGov #PSD2 #banking #openbanking #AutoBanking\n\nhtt…",
      "post_date": "2019-06-02T15:34:00"
   },
   {
      "text": "#Fintech will automate the daily work of finance in companies. 🤖@OpenAccessGov #PSD2 #banking #openbanking… https://t.co/ePMfwDABYB",
      "post_date": "2019-06-02T15:34:00"
   },
   {
      "text": "@OBE_Global #financialInclusion just one of the games changers to be delivered by  #OpenBanking  👍🏻😊 #fintech… https://t.co/yBgVU4rsxh",
      "post_date": "2019-06-02T15:23:00"
   },
   {
      "text": "A small revolution happened back in Jan 2018 that you probably missed. 2018 will go down as the year of… https://t.co/Gmf9d0WZZI",
      "post_date": "2019-06-02T15:23:00"
   },
   {
      "text": "Make sure to connect w/the @saltedge team at #Money2020EU.\n\nMeanwhile, check out our interview w/@Lisa_Gutu from… https://t.co/XGDg4ZU5RA",
      "post_date": "2019-06-02T15:10:00"
   },
   {
      "text": "@OBE_Global  another great article from @Finance_Edge  Thank you! #OpenBanking #PSD2 https://t.co/bAK3oUoYK8",
      "post_date": "2019-06-02T15:09:00"
   },
   {
      "text": "RT @Klaus_Mueller: On my way to Washington DC to meet European 🇪🇺 and US 🇺🇸 consumerrights colleagues at the #TACDFORUM2019. We'll be discu…",
      "post_date": "2019-06-02T14:26:00"
   },
   {
      "text": "RT @CoinRivet: #Bitcoin is back in the game, having more than doubled in price this year. But don’t bet on it overhauling the banking estab…",
      "post_date": "2019-06-02T14:10:00"
   },
   {
      "text": "RT @CoinRivet: #Bitcoin is back in the game, having more than doubled in price this year. But don’t bet on it overhauling the banking estab…",
      "post_date": "2019-06-02T14:07:00"
   },
   {
      "text": "#Bitcoin is back in the game, having more than doubled in price this year. But don’t bet on it overhauling the bank… https://t.co/CLz7TrycLg",
      "post_date": "2019-06-02T14:04:00"
   },
   {
      "text": "Check it out: Our @token_io booth is taking shape! 🔨 Come see us tomorrow at #M2020EU #payments #openbanking… https://t.co/u7QL6C20Ir",
      "post_date": "2019-06-02T13:58:00"
   },
   {
      "text": "Iryna Agieieva from @bookingcom talks about the opportunities &amp; challenges of  #SCA, gives us a rundown on alternat… https://t.co/LLTwohYf0D",
      "post_date": "2019-06-02T13:30:00"
   },
   {
      "text": "The security challenges faced by open banking - TechRadar - https://t.co/awuutWFhoR #openbanking #banking #digital",
      "post_date": "2019-06-02T13:09:00"
   },
   {
      "text": "RT @FintecHQ: FinTecSystems will be attending #Money2020 next week in #Amsterdam. Catch our Colleagues @martinschmid_de and Amadeus (@ftek_…",
      "post_date": "2019-06-02T13:04:00"
   },
   {
      "text": "RT @FintecHQ: FinTecSystems will be attending #Money2020 next week in #Amsterdam. Catch our Colleagues @martinschmid_de and Amadeus (@ftek_…",
      "post_date": "2019-06-02T13:03:00"
   },
   {
      "text": "Day 2 #apohackathon #figo in Dusseldorf. The teams spread out to focus on the challenges! Next phase finished hacks… https://t.co/V34m7B18AJ",
      "post_date": "2019-06-02T12:51:00"
   },
   {
      "text": "RT @nafisalam: Is #OpenBanking #secured\n\n#Reputation, #compliance and #relationships with key partners are key factors when doing business…",
      "post_date": "2019-06-02T12:48:00"
   },
   {
      "text": "RT @Lago72: #AI-Powered #Chatbots Further Automating #DigitalBanking \nv/ @PwC \nHT @ravikikan @MikeQuindazzi \n\n#FinServ #FinTech #Banking #F…",
      "post_date": "2019-06-02T12:40:00"
   },
   {
      "text": "RT @nitingarg_ng: Historically, #fintech was local. This is changing rapidly. The fintech game is now global;\n\n #technology #banking #finse…",
      "post_date": "2019-06-02T12:27:00"
   },
   {
      "text": "RT @FinastraFS: RT: @The_LHoFT The Future of #Banking: \"The new world is one of transient relationships, shorter-term commitments and every…",
      "post_date": "2019-06-02T12:24:00"
   },
   {
      "text": "Historically, #fintech was local. This is changing rapidly. The fintech game is now global;\n\n #technology #banking… https://t.co/5YoBg8sVza",
      "post_date": "2019-06-02T12:19:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-06-02T12:08:00"
   },
   {
      "text": "Testing the waters or have you just embarked on an enterprise-wide #openbanking journey? Either way, our C3 strateg… https://t.co/RcuInPhl4D",
      "post_date": "2019-06-02T12:02:00"
   },
   {
      "text": "RT @puutwallet: LOG ONTO PUUT MOBILE WALLET WITH PHONE NUMBER IN 15 SECONDS\n#ewallets #digitalwallets #govtech #openbanking #marketplace #m…",
      "post_date": "2019-06-02T11:47:00"
   },
   {
      "text": "LOG ONTO PUUT MOBILE WALLET WITH PHONE NUMBER IN 15 SECONDS\n#ewallets #digitalwallets #govtech #openbanking… https://t.co/8hAxDUtYa0",
      "post_date": "2019-06-02T11:47:00"
   },
   {
      "text": "RT @opeadeoye: #OpenBanking We. Keep. Moving. https://t.co/gmYodBteKD",
      "post_date": "2019-06-02T11:14:00"
   },
   {
      "text": "RT @AliHKassim: @Piscalux, thanks for sharing this. It's amazing what you can do with foresight and fortitude. This is an initiative that s…",
      "post_date": "2019-06-02T11:11:00"
   },
   {
      "text": "@Piscalux, thanks for sharing this. It's amazing what you can do with foresight and fortitude. This is an initiativ… https://t.co/JhPGThGMAM",
      "post_date": "2019-06-02T10:51:00"
   },
   {
      "text": "Tier 1 and 2 banks will offer at least 5 external retail banking APIs in 2019 \n30 Most Common #OpenBanking #APIs in… https://t.co/cHsTOyzwuJ",
      "post_date": "2019-06-02T10:30:00"
   },
   {
      "text": "RT: @The_LHoFT The Future of #Banking: \"The new world is one of transient relationships, shorter-term commitments a… https://t.co/362JmrVxG0",
      "post_date": "2019-06-02T10:30:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-02T10:27:00"
   },
   {
      "text": "RT @nafisalam: Is #OpenBanking #secured\n\n#Reputation, #compliance and #relationships with key partners are key factors when doing business…",
      "post_date": "2019-06-02T10:21:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Disruption] Which countries are the most advanced in Open Banking?\n\nhttps://t.co/qQ6pr8XWpm\n\n#Innovation #Fintech #Ban…",
      "post_date": "2019-06-02T10:20:00"
   },
   {
      "text": "RT @PetitDonut1: Jim Wadsworth, SVP Open Banking for MasterCard, is really bullish about collabs between fintech companies and banks. PSD2'…",
      "post_date": "2019-06-02T09:37:00"
   },
   {
      "text": "Jim Wadsworth, SVP Open Banking for MasterCard, is really bullish about collabs between fintech companies and banks… https://t.co/GtT98RVF9p",
      "post_date": "2019-06-02T09:24:00"
   },
   {
      "text": "RT @nafisalam: Is #OpenBanking #secured\n\n#Reputation, #compliance and #relationships with key partners are key factors when doing business…",
      "post_date": "2019-06-02T09:11:00"
   },
   {
      "text": "RT @nafisalam: Is #OpenBanking #secured\n\n#Reputation, #compliance and #relationships with key partners are key factors when doing business…",
      "post_date": "2019-06-02T09:09:00"
   },
   {
      "text": "[#Disruption] Which countries are the most advanced in Open Banking?\n\nhttps://t.co/qQ6pr8XWpm\n\n#Innovation #Fintech… https://t.co/7BZ5RLITNJ",
      "post_date": "2019-06-02T09:00:00"
   },
   {
      "text": "Is #OpenBanking #secured\n\n#Reputation, #compliance and #relationships with key partners are key factors when doing… https://t.co/bvqa1wqHbM",
      "post_date": "2019-06-02T08:54:00"
   },
   {
      "text": "RT @Jvowens: London fintech Yapily raises $5.4M to offer a single API to connect to banks |  https://t.co/qaNggaOF1R #UKFinTech #fintech #o…",
      "post_date": "2019-06-02T08:37:00"
   },
   {
      "text": "RT @BitcoinLvx: @BitcoinLvx is a cryptocurrency that is spendable https://t.co/NAliVg62ms #puutwallet #blockchain #fintech #wallets #ewalle…",
      "post_date": "2019-06-02T08:34:00"
   },
   {
      "text": "London fintech Yapily latest to benefit from Open Banking goldrush https://t.co/GhGOW2tssL via @Finextra \n#fintech… https://t.co/6SmvFjMQf9",
      "post_date": "2019-06-02T08:00:00"
   },
   {
      "text": "As markets in the world move towards #OpenBanking, is your #bank well-positioned to drive customer growth and value… https://t.co/xBDWY0tHXy",
      "post_date": "2019-06-02T07:39:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-06-02T07:24:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-06-02T07:22:00"
   },
   {
      "text": "RT @arcapde: BEUC's contribution to the upcoming @OECD_BizFin competition cttee best practice roundtable on competition policy \"Digital Dis…",
      "post_date": "2019-06-02T07:15:00"
   },
   {
      "text": "OneConnect’s “Gamma O ” -first open platform offering vertical integration of turnkey Fintech solutions\n\nread more… https://t.co/YmTklk0ScH",
      "post_date": "2019-06-02T07:14:00"
   },
   {
      "text": "RT @opeadeoye: #OpenBanking We. Keep. Moving. https://t.co/gmYodBteKD",
      "post_date": "2019-06-02T06:56:00"
   },
   {
      "text": "RT @opeadeoye: #OpenBanking We. Keep. Moving. https://t.co/gmYodBteKD",
      "post_date": "2019-06-02T06:15:00"
   },
   {
      "text": "APIs In Open Banking, Cross-Border B2B Payments - https://t.co/so093EXvnj - https://t.co/lp1BQadyS6 #openbanking #banking #digital",
      "post_date": "2019-06-02T05:54:00"
   },
   {
      "text": "Going to #Money2020eu (3-5 June)? 🇳🇱🌷 Let's meet up! \nI'll be there with the @token_io team showcasing our latest i… https://t.co/hhU8KkSooI",
      "post_date": "2019-06-02T05:45:00"
   },
   {
      "text": "RT @Jvowens: London fintech Yapily raises $5.4M to offer a single API to connect to banks |  https://t.co/qaNggaOF1R #UKFinTech #fintech #o…",
      "post_date": "2019-06-02T04:35:00"
   },
   {
      "text": "RT @lucasoft_co_uk: RT @Jvowens London fintech Yapily raises $5.4M to offer a single API to connect to banks | https://t.co/Zn2HMJyNSZ #UKF…",
      "post_date": "2019-06-02T04:00:00"
   },
   {
      "text": "RT @Jvowens London fintech Yapily raises $5.4M to offer a single API to connect to banks | https://t.co/Zn2HMJyNSZ… https://t.co/09ovqmNgG4",
      "post_date": "2019-06-02T04:00:00"
   },
   {
      "text": "Hey @VirginMoney - when are you going to launch your #openbanking API?",
      "post_date": "2019-06-02T02:36:00"
   },
   {
      "text": "RT @viviane41861305: #APIs and open platforms excite banking leaders at FusionONE 2019.\nOn day one of the FusionONE #openbanking developer…",
      "post_date": "2019-06-02T02:14:00"
   },
   {
      "text": "RT @viviane41861305: #APIs and open platforms excite banking leaders at FusionONE 2019.\nOn day one of the FusionONE #openbanking developer…",
      "post_date": "2019-06-02T02:13:00"
   },
   {
      "text": "India has come a long way in open banking. Here's what it needs for the home run. - Economic Times -… https://t.co/1Eg8zwO64Q",
      "post_date": "2019-06-02T01:53:00"
   },
   {
      "text": "Reflow launches Mobile bank payments leveraging #OpenBanking https://t.co/Dp5cpQ8nfM #fintech #banking #payments",
      "post_date": "2019-06-02T01:50:00"
   },
   {
      "text": "RT @Jvowens: London fintech Yapily raises $5.4M to offer a single API to connect to banks |  https://t.co/qaNggaOF1R #UKFinTech #fintech #o…",
      "post_date": "2019-06-02T01:20:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-02T00:34:00"
   },
   {
      "text": "Only 1.3% of Transactions are Payments in 2019 #Digital #openbanking #banking  https://t.co/XIOyJSLB3U",
      "post_date": "2019-06-02T00:26:00"
   },
   {
      "text": "RT @ittechbuz: Only 1.3% of Transactions are Payments in 2019 #Digital #openbanking #banking  https://t.co/i2cPfj6sog",
      "post_date": "2019-06-02T00:17:00"
   },
   {
      "text": "Tested #verifiedme app by @SecureKey. While they are still developing different functions and connections, it’s pot… https://t.co/ODGUtLk5mi",
      "post_date": "2019-06-02T00:11:00"
   },
   {
      "text": "#APIs and open platforms excite banking leaders at FusionONE 2019.\nOn day one of the FusionONE #openbanking develop… https://t.co/vzL47djGbQ",
      "post_date": "2019-06-01T23:41:00"
   },
   {
      "text": "Plenty happening on ⁦@IIF⁩ FRT podcast: former ⁦@OSFICanada⁩ Deputy Superintendent Mark Zelmer joins me to talk… https://t.co/8tHAOy1B4O",
      "post_date": "2019-06-01T23:35:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T23:32:00"
   },
   {
      "text": "RT @Jvowens: London fintech Yapily raises $5.4M to offer a single API to connect to banks |  https://t.co/qaNggaOF1R #UKFinTech #fintech #o…",
      "post_date": "2019-06-01T23:16:00"
   },
   {
      "text": "RT @Jvowens: London fintech Yapily raises $5.4M to offer a single API to connect to banks |  https://t.co/qaNggaOF1R #UKFinTech #fintech #o…",
      "post_date": "2019-06-01T23:15:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T23:03:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T22:09:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T22:06:00"
   },
   {
      "text": "RT @Jvowens: London fintech Yapily raises $5.4M to offer a single API to connect to banks |  https://t.co/qaNggaOF1R #UKFinTech #fintech #o…",
      "post_date": "2019-06-01T21:55:00"
   },
   {
      "text": "RT @Jvowens: London fintech Yapily raises $5.4M to offer a single API to connect to banks |  https://t.co/qaNggaOF1R #UKFinTech #fintech #o…",
      "post_date": "2019-06-01T21:39:00"
   },
   {
      "text": "RT @Jvowens: London fintech Yapily raises $5.4M to offer a single API to connect to banks |  https://t.co/qaNggaOF1R #UKFinTech #fintech #o…",
      "post_date": "2019-06-01T21:37:00"
   },
   {
      "text": "RT @opeadeoye: #OpenBanking We. Keep. Moving. https://t.co/gmYodBteKD",
      "post_date": "2019-06-01T20:43:00"
   },
   {
      "text": "Only 1.3% of Transactions are Payments in 2019 #Digital #openbanking #banking  https://t.co/i2cPfj6sog",
      "post_date": "2019-06-01T20:35:00"
   },
   {
      "text": "BEUC's contribution to the upcoming @OECD_BizFin competition cttee best practice roundtable on competition policy \"… https://t.co/p3W5L0Bb1k",
      "post_date": "2019-06-01T20:35:00"
   },
   {
      "text": "India has come a long way in open banking. Here's what it needs for the home run. - Economic Times -… https://t.co/aDjo4PqtID",
      "post_date": "2019-06-01T20:28:00"
   },
   {
      "text": "There are so many blessings to look forward to this month. Just make sure you have  a positive mindset and a winnin… https://t.co/2jBIIWpwsq",
      "post_date": "2019-06-01T20:24:00"
   },
   {
      "text": "RT @yasharn: @AliPaterson @SophieTheen @alexhobern @foshma @ValKristensen Sure guys. \n\nReach out to see if I can assist in any way. \n\nyasha…",
      "post_date": "2019-06-01T20:11:00"
   },
   {
      "text": "Only 1.3% of Transactions are Payments in 2019 #Banking #openbanking #digital  https://t.co/elokNA10Bq",
      "post_date": "2019-06-01T20:11:00"
   },
   {
      "text": "RT @opeadeoye: #OpenBanking We. Keep. Moving. https://t.co/gmYodBteKD",
      "post_date": "2019-06-01T20:00:00"
   },
   {
      "text": "@AliPaterson @SophieTheen @alexhobern @foshma @ValKristensen Sure guys. \n\nReach out to see if I can assist in any w… https://t.co/sDYfwMreBz",
      "post_date": "2019-06-01T19:43:00"
   },
   {
      "text": "RT @opeadeoye: #OpenBanking We. Keep. Moving. https://t.co/gmYodBteKD",
      "post_date": "2019-06-01T19:39:00"
   },
   {
      "text": "5 #ecosystem requirements for successful #OpenBanking\n#APIs | Enabling assets | Use cases | Killer apps |… https://t.co/5dz3VSVDD9",
      "post_date": "2019-06-01T19:33:00"
   },
   {
      "text": "#OpenBanking and its #security challenges. #Banks opening up to third parties could suddenly become attractive targ… https://t.co/qO6nOVW75N",
      "post_date": "2019-06-01T19:13:00"
   },
   {
      "text": "#OpenBanking We. Keep. Moving. https://t.co/gmYodBteKD",
      "post_date": "2019-06-01T19:01:00"
   },
   {
      "text": "RT @BitcoinLvx: @BitcoinLvx is a cryptocurrency that is spendable https://t.co/NAliVg62ms #puutwallet #blockchain #fintech #wallets #ewalle…",
      "post_date": "2019-06-01T18:56:00"
   },
   {
      "text": "RT @BitcoinLvx: @BitcoinLvx is a cryptocurrency that is spendable https://t.co/NAliVg62ms #puutwallet #blockchain #fintech #wallets #ewalle…",
      "post_date": "2019-06-01T18:55:00"
   },
   {
      "text": "@BitcoinLvx is a cryptocurrency that is spendable https://t.co/NAliVg62ms #puutwallet #blockchain #fintech #wallets… https://t.co/8Ar519awOB",
      "post_date": "2019-06-01T18:54:00"
   },
   {
      "text": "RT @maupanas: Only 1.3% of Transactions are Payments in 2019 #Digital #openbanking #banking  https://t.co/sjQgwPGOZ0",
      "post_date": "2019-06-01T18:51:00"
   },
   {
      "text": "RT @ReadFin: The top 200 banks hold about 70 percent of all U.S. depository accounts. https://t.co/ichB23OCxw #fintech #openbanking https:/…",
      "post_date": "2019-06-01T18:48:00"
   },
   {
      "text": "#OpenBanking could have important implications for bank liquidity. Read more. 👇 https://t.co/cN6Y6lnxyD",
      "post_date": "2019-06-01T18:36:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T18:15:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T18:09:00"
   },
   {
      "text": "Stockholm-based fintech startup Open Payments raises €1.2 million for its PSD2 compliant platform - EU-Startups -… https://t.co/PPSO7lT7Th",
      "post_date": "2019-06-01T18:03:00"
   },
   {
      "text": "Reflow goes live with FlowPay - Finextra - https://t.co/5mnYqTduXC #openbanking #banking #digital",
      "post_date": "2019-06-01T18:03:00"
   },
   {
      "text": "Only 1.3% of Transactions are Payments in 2019 #Digital #openbanking #banking  https://t.co/sjQgwPGOZ0",
      "post_date": "2019-06-01T17:44:00"
   },
   {
      "text": "RT @davidjmaireles: The value of #personalization in #banking is $0.2 - $0.45 trillions\nDelivering experiences that are both world class to…",
      "post_date": "2019-06-01T17:23:00"
   },
   {
      "text": "APIs In Open Banking, Cross-Border B2B Payments - https://t.co/so093EXvnj - https://t.co/lp1BQadyS6 #openbanking #banking #digital",
      "post_date": "2019-06-01T17:03:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-06-01T17:02:00"
   },
   {
      "text": "Payments convergence is happening now: Financial institutions cannot afford to waste time and money investing in ou… https://t.co/vM97WwOse8",
      "post_date": "2019-06-01T17:02:00"
   },
   {
      "text": "RT @Klaus_Mueller: On my way to Washington DC to meet European 🇪🇺 and US 🇺🇸 consumerrights colleagues at the #TACDFORUM2019. We'll be discu…",
      "post_date": "2019-06-01T16:53:00"
   },
   {
      "text": "Looking forward to attending #Money2020 - come and hear how we have been bringing #openbanking to life at Bud and c… https://t.co/OoBwIqEomv",
      "post_date": "2019-06-01T16:16:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-06-01T16:13:00"
   },
   {
      "text": "RT @ttavlas: Everyone’s Hodling Bitcoin: Only 1.3% of Transactions are Payments in 2019 - CCN - https://t.co/wGoEYCju11 #openbanking #banki…",
      "post_date": "2019-06-01T16:09:00"
   },
   {
      "text": "The Ripple Effect: XRP Payments Coming to Stores Via Banking Giant - The Daily Hodl - https://t.co/W4HixG3kmP #openbanking #banking #digital",
      "post_date": "2019-06-01T16:08:00"
   },
   {
      "text": "Everyone’s Hodling Bitcoin: Only 1.3% of Transactions are Payments in 2019 - CCN - https://t.co/wGoEYCju11 #openbanking #banking #digital",
      "post_date": "2019-06-01T16:08:00"
   },
   {
      "text": "Marketplace Lending News Roundup – June 1, 2019 - Lend Academy - https://t.co/psoD9HWGOB #openbanking #banking #digital",
      "post_date": "2019-06-01T16:08:00"
   },
   {
      "text": "RT @fintech_connect: The #fintech industry in London has continued to show record levels of #investment and growth; being driven by positiv…",
      "post_date": "2019-06-01T15:38:00"
   },
   {
      "text": "The #fintech industry in London has continued to show record levels of #investment and growth; being driven by posi… https://t.co/OGJnzxyZVK",
      "post_date": "2019-06-01T15:30:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T14:51:00"
   },
   {
      "text": "RT @PelicanPay: Meet us next week, stand K21 at @Money2020 in #Amsterdam &amp; discover how #PelicanPay #OpenBanking Hub can support #SMEs in t…",
      "post_date": "2019-06-01T14:31:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T14:20:00"
   },
   {
      "text": "RT @CPTBookings: The role of application networks in an open banking world #Digital #openbanking #banking  https://t.co/dd0HrZhdhS",
      "post_date": "2019-06-01T14:18:00"
   },
   {
      "text": "The role of application networks in an open banking world #Digital #openbanking #banking  https://t.co/dd0HrZhdhS",
      "post_date": "2019-06-01T14:15:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T13:53:00"
   },
   {
      "text": "We're excited to be attending @money2020 early next week! Our CEO Andrea Reynolds will be joined by the other… https://t.co/aVJOyd4Bnz",
      "post_date": "2019-06-01T13:45:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-06-01T13:27:00"
   },
   {
      "text": "RT @Jvowens: London fintech Yapily raises $5.4M to offer a single API to connect to banks |  https://t.co/qaNggaOF1R #UKFinTech #fintech #o…",
      "post_date": "2019-06-01T13:25:00"
   },
   {
      "text": "RT @Lago72: #AI-Powered #Chatbots Further Automating #DigitalBanking \nv/ @PwC \nHT @ravikikan @MikeQuindazzi \n\n#FinServ #FinTech #Banking #F…",
      "post_date": "2019-06-01T13:12:00"
   },
   {
      "text": "Innovation Leader’s list of Top 25 Corporate Innovation Hubs in #London includes @HSBC Ventures which invests money… https://t.co/23IeDpWj1z",
      "post_date": "2019-06-01T13:08:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T12:56:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T12:51:00"
   },
   {
      "text": "[#Innovation] The role of application networks in an open banking world\n\n https://t.co/VD6uZHIvyk … https://t.co/Sd6y36qmMp",
      "post_date": "2019-06-01T12:49:00"
   },
   {
      "text": "RT @davidjmaireles: The value of #personalization in #banking is $0.2 - $0.45 trillions\nDelivering experiences that are both world class to…",
      "post_date": "2019-06-01T12:36:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T12:21:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T12:09:00"
   },
   {
      "text": "RT @ArnaudAuger: The Disruptive Trends in #Payments by Robert Carlisle, exec from @Visa \n\n1️⃣ #ConnectedDevices 🤖📈\n2️⃣ #UX at the POS 💳\n3️⃣…",
      "post_date": "2019-06-01T12:02:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T11:58:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T11:57:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T11:56:00"
   },
   {
      "text": "[#Innovation] The role of application networks in an open banking world\n\n https://t.co/A4dDJkhfc3 … https://t.co/TCnxWN9WgQ",
      "post_date": "2019-06-01T11:48:00"
   },
   {
      "text": "Fifth Third Bank Files Application with Office of the Comptroller of the Currency to Convert to National Bank Chart… https://t.co/afHdYRCRTn",
      "post_date": "2019-06-01T11:43:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-06-01T11:41:00"
   },
   {
      "text": "[#Innovation] The role of application networks in an open banking world\n\n https://t.co/PKJtiDpidK … https://t.co/boWcXGu7X6",
      "post_date": "2019-06-01T11:39:00"
   },
   {
      "text": "RT @puutwallet: LOG ONTO PUUT MOBILE WALLET WITH EMAIL ADDRESS IN 20 SECONDS. \n#ewallets #digitalwallets #govtech #openbanking #marketplace…",
      "post_date": "2019-06-01T11:24:00"
   },
   {
      "text": "London fintech Yapily raises $5.4M to offer a single API to connect to banks |  https://t.co/qaNggaOF1R #UKFinTech… https://t.co/SB7K20qbek",
      "post_date": "2019-06-01T11:24:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T11:17:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T10:44:00"
   },
   {
      "text": "RT @davidjmaireles: The value of #personalization in #banking is $0.2 - $0.45 trillions\nDelivering experiences that are both world class to…",
      "post_date": "2019-06-01T10:39:00"
   },
   {
      "text": "The value of #personalization in #banking is $0.2 - $0.45 trillions\nDelivering experiences that are both world clas… https://t.co/5JtufK5Prv",
      "post_date": "2019-06-01T10:37:00"
   },
   {
      "text": "RT @PelicanPay: #PelicanPay PaaS offers #fintechs a fast track route to leverage the enormous growth opportunities that #OpenBanking brings…",
      "post_date": "2019-06-01T10:23:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-06-01T10:20:00"
   },
   {
      "text": "#PelicanPay PaaS offers #fintechs a fast track route to leverage the enormous growth opportunities that… https://t.co/w8YeDxUQiX",
      "post_date": "2019-06-01T10:16:00"
   },
   {
      "text": "RT @Lago72: #AI-Powered #Chatbots Further Automating #DigitalBanking \nv/ @PwC \nHT @ravikikan @MikeQuindazzi \n\n#FinServ #FinTech #Banking #F…",
      "post_date": "2019-06-01T10:16:00"
   },
   {
      "text": "RT @puutwallet: LOG ONTO PUUT MOBILE WALLET WITH EMAIL ADDRESS IN 20 SECONDS. \n#ewallets #digitalwallets #govtech #openbanking #marketplace…",
      "post_date": "2019-06-01T09:35:00"
   },
   {
      "text": "RT @BitcoinLvx: Understanding the difference between a cryptocurrency coin and a cryptocurrency token https://t.co/NAliVg62ms #fintech #wal…",
      "post_date": "2019-06-01T09:34:00"
   },
   {
      "text": "RT @BitcoinLvx: How cryptocurrencies work. #puutwallet #fintech #wallets #ewallets #digitalwallets #govtech #openbanking #marketplace #mess…",
      "post_date": "2019-06-01T09:33:00"
   },
   {
      "text": "RT @puutwallet: LOG ONTO PUUT MOBILE WALLET WITH EMAIL ADDRESS IN 20 SECONDS. \n#ewallets #digitalwallets #govtech #openbanking #marketplace…",
      "post_date": "2019-06-01T09:33:00"
   },
   {
      "text": "LOG ONTO PUUT MOBILE WALLET WITH EMAIL ADDRESS IN 20 SECONDS. \n#ewallets #digitalwallets #govtech #openbanking… https://t.co/YjDyc6GZmM",
      "post_date": "2019-06-01T09:31:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T09:20:00"
   },
   {
      "text": "RT @Lago72: #AI-Powered #Chatbots Further Automating #DigitalBanking \nv/ @PwC \nHT @ravikikan @MikeQuindazzi \n\n#FinServ #FinTech #Banking #F…",
      "post_date": "2019-06-01T09:19:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw\n\n#DigitalTransformation…",
      "post_date": "2019-06-01T09:12:00"
   },
   {
      "text": "RT @Lago72: #AI-Powered #Chatbots Further Automating #DigitalBanking \nv/ @PwC \nHT @ravikikan @MikeQuindazzi \n\n#FinServ #FinTech #Banking #F…",
      "post_date": "2019-06-01T09:06:00"
   },
   {
      "text": "[#Innovation] The role of application networks in an open banking world\n\nhttps://t.co/iMRhUrdWOw… https://t.co/L8hmbT1lnI",
      "post_date": "2019-06-01T09:00:00"
   },
   {
      "text": "RT @Lago72: #AI-Powered #Chatbots Further Automating #DigitalBanking \nv/ @PwC \nHT @ravikikan @MikeQuindazzi \n\n#FinServ #FinTech #Banking #F…",
      "post_date": "2019-06-01T08:58:00"
   },
   {
      "text": "RT @Lago72: #AI-Powered #Chatbots Further Automating #DigitalBanking \nv/ @PwC \nHT @ravikikan @MikeQuindazzi \n\n#FinServ #FinTech #Banking #F…",
      "post_date": "2019-06-01T08:52:00"
   },
   {
      "text": "#SEB just released its first pure Large Corporation #API at the SEB #DeveloperPortal: Foreign Exchange Rates.  It d… https://t.co/Vg4KWmksMP",
      "post_date": "2019-06-01T08:44:00"
   },
   {
      "text": "#AI-Powered #Chatbots Further Automating #DigitalBanking \nv/ @PwC \nHT @ravikikan @MikeQuindazzi \n\n#FinServ #FinTech… https://t.co/GzaZxOXVAQ",
      "post_date": "2019-06-01T08:37:00"
   },
   {
      "text": "RT @puutwallet: SIGN UP FOR PUUT MOBILE WALLET IN LESS THAN 1 MINUTE #puutwallet #fintech #wallets #ewallets #digitalwallets #govtech #open…",
      "post_date": "2019-06-01T08:22:00"
   },
   {
      "text": "RT @puutwallet: SIGN UP FOR PUUT MOBILE WALLET IN LESS THAN 1 MINUTE #puutwallet #fintech #wallets #ewallets #digitalwallets #govtech #open…",
      "post_date": "2019-06-01T08:21:00"
   },
   {
      "text": "SIGN UP FOR PUUT MOBILE WALLET IN LESS THAN 1 MINUTE #puutwallet #fintech #wallets #ewallets #digitalwallets… https://t.co/JtY2TNeemF",
      "post_date": "2019-06-01T08:20:00"
   },
   {
      "text": "RT @LouiseHBeaumont: Heading to @money2020 EU shortly - you have four golden opportunities to come and heckle me\n\nhttps://t.co/SglxIN3l2h…",
      "post_date": "2019-06-01T08:18:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: In the future, banking will be about making connections at the right time, through the right channel with the right adv…",
      "post_date": "2019-06-01T08:13:00"
   },
   {
      "text": "RT @FintecHQ: FinTecSystems will be attending #Money2020 next week in #Amsterdam. Catch our Colleagues @martinschmid_de and Amadeus (@ftek_…",
      "post_date": "2019-06-01T07:45:00"
   },
   {
      "text": "FinTecSystems will be attending #Money2020 next week in #Amsterdam. Catch our Colleagues @martinschmid_de and Amade… https://t.co/Oee9uueUxK",
      "post_date": "2019-06-01T07:44:00"
   },
   {
      "text": "RT @davidjmaireles: #OpenBanking: Interoperability global movement\n#Payments readiness vs potential \n\nhttps://t.co/U7k1B4tgLL\n\n#regulation…",
      "post_date": "2019-06-01T07:25:00"
   },
   {
      "text": "RT @FDXOrg: #Financial #datasharing can be a complicated topic. So we're launching an educational webinar series! Find out more here👇 and j…",
      "post_date": "2019-06-01T07:18:00"
   },
   {
      "text": "#OpenBanking: Interoperability global movement\n#Payments readiness vs potential \n\nhttps://t.co/U7k1B4tgLL… https://t.co/xSWRRVFyBy",
      "post_date": "2019-06-01T07:14:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T07:02:00"
   },
   {
      "text": "RT @FabrickPlatform: 🔷 our NEW WEBSITE is online! 🔷\nThis makes it even easier to find #openbanking solutions that can revolutionize your bu…",
      "post_date": "2019-06-01T06:26:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-06-01T06:15:00"
   },
   {
      "text": "RT @jaypalter: The Future of #Banking \nhttps://t.co/oTOQy3RZXh\n#openbanking #superapps #unbundling #rebundling \nvia @GhelaBoskovich https:/…",
      "post_date": "2019-06-01T05:58:00"
   },
   {
      "text": "On my way to Washington DC to meet European 🇪🇺 and US 🇺🇸 consumerrights colleagues at the #TACDFORUM2019. We'll be… https://t.co/L3tjcptTHx",
      "post_date": "2019-06-01T05:57:00"
   },
   {
      "text": "RT @jaypalter: The Future of #Banking \nhttps://t.co/oTOQy3RZXh\n#openbanking #superapps #unbundling #rebundling \nvia @GhelaBoskovich https:/…",
      "post_date": "2019-06-01T05:56:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T05:45:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T05:37:00"
   },
   {
      "text": "RT @FabrickPlatform: Have a good weekend of relaxation, because Monday starts the @money2020 Europe. It will be 3 days Intensive and full o…",
      "post_date": "2019-06-01T05:04:00"
   },
   {
      "text": "RT @Openvector: Our CEO speaking yesterday about #openbanking and #api in Mexico City at the #BBVAOpenSummit. https://t.co/QqmELSW9wL",
      "post_date": "2019-06-01T04:15:00"
   },
   {
      "text": ".@ursgubser, from #Worldline, will address how person-to-person #payments will ultimately lead to person-to-merchan… https://t.co/1Oacv9GbuI",
      "post_date": "2019-06-01T04:00:00"
   },
   {
      "text": "RT @FinastraFS: Join Finastra's @elirosner Chief Product &amp; Technology Officer, as he discusses how to transform a bank's tech platform at @…",
      "post_date": "2019-06-01T03:37:00"
   },
   {
      "text": "Deep Dive: Real-time #Payments’ Impact On #Liquidity Management, via @pymnts \nhttps://t.co/fdksAYBR46 \n#treasury… https://t.co/9o5HQtVgcE",
      "post_date": "2019-06-01T03:20:00"
   },
   {
      "text": "Antelop unveils mobile-first digital banking and payments platform - NFC World - https://t.co/LvoxjbAfJ7 #openbanking #banking #digital",
      "post_date": "2019-06-01T02:43:00"
   },
   {
      "text": "RT @Finacle: Banks consider #OpenBanking #APIs as the top technology for the future of #innovation, higher than #AI, #MachineLearning #chat…",
      "post_date": "2019-06-01T02:42:00"
   },
   {
      "text": "RT @Finacle: Banks consider #OpenBanking #APIs as the top technology for the future of #innovation, higher than #AI, #MachineLearning #chat…",
      "post_date": "2019-06-01T02:41:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T02:32:00"
   },
   {
      "text": "I’ll be at #m2020eu so let’s catch up in regards to #Payments #Fintech #OpenBanking #Neobanks #ChallengerBanks… https://t.co/Hh7wA3Gvl9",
      "post_date": "2019-06-01T02:31:00"
   },
   {
      "text": "RT @UrsBolt: #OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive targets of #cy…",
      "post_date": "2019-06-01T01:06:00"
   },
   {
      "text": "#OpenBanking and its #security challenges.\n\n#Banks opening up to third parties could suddenly become attractive tar… https://t.co/FZevA089UW",
      "post_date": "2019-06-01T00:56:00"
   },
   {
      "text": "Global Open Banking Market 2019 ACCERN CORPORATION (US), JACKHENRY AND ASSOCIATES (US), D3 BANKING (US) - World Ind… https://t.co/d1rdQiYjmW",
      "post_date": "2019-06-01T00:53:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-06-01T00:42:00"
   },
   {
      "text": "Open Banking deadline for PDS2 is coming soon with some cautious optimism in Europe #openbanking  https://t.co/DY9zoD1sQG",
      "post_date": "2019-06-01T00:38:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-06-01T00:08:00"
   },
   {
      "text": "RT @cgledhill: UK open-banking #FinTech Yapily raises £4.2m in seed funding 🇬🇧\n\nhttps://t.co/c2LDCaRW5M #openbanking https://t.co/pCJD17GgOY",
      "post_date": "2019-06-01T00:07:00"
   },
   {
      "text": "RT @InfosistemaSA: What are the main Challenges to Loan Origination in a Digital Setting?\n5. Adaptability. Adapting the waiting time to eac…",
      "post_date": "2019-05-31T23:31:00"
   },
   {
      "text": "#OpenBanking opens greater value\n6 focus areas for banks to drive maximum value and benefits from #OpenBanking  https://t.co/keoqPrk4Sj",
      "post_date": "2019-05-31T23:26:00"
   },
   {
      "text": "The #Security Challenges Faced by #OpenBanking \nhttps://t.co/yluj2hM8fo \n#banking #fintech #infosec #dataprotection… https://t.co/W9ktsdQQQh",
      "post_date": "2019-05-31T23:09:00"
   },
   {
      "text": "The #Security Challenges Faced by #OpenBanking \nhttps://t.co/OvZN2TCV8E \n#banking #fintech #infosec #dataprotection… https://t.co/um0R8Mr5Ih",
      "post_date": "2019-05-31T23:06:00"
   },
   {
      "text": "UK open-banking FinTech raises £4.2m in seed funding - BusinessCloud - https://t.co/55bIFqMivB #openbanking #banking #digital",
      "post_date": "2019-05-31T22:58:00"
   },
   {
      "text": "US open banking fintech unicorn Plaid has launched in the UK - Pulse Live Kenya - https://t.co/OgTwNjt8Ao #openbanking #banking #digital",
      "post_date": "2019-05-31T22:33:00"
   },
   {
      "text": "RT @FDXOrg: #Financial #datasharing can be a complicated topic. So we're launching an educational webinar series! Find out more here👇 and j…",
      "post_date": "2019-05-31T22:21:00"
   },
   {
      "text": "#Financial #datasharing can be a complicated topic. So we're launching an educational webinar series! Find out more… https://t.co/8DtZXPkxis",
      "post_date": "2019-05-31T22:20:00"
   },
   {
      "text": "Steve Wozniak on common #innovation mistakes\n#tech #futurism #payments #openbanking #ambition #fintechs… https://t.co/fOyqT8fqLZ",
      "post_date": "2019-05-31T22:06:00"
   },
   {
      "text": "RT @indusnettech: With Millennials and Generation Z expecting more from their banks, our latest blog talks about why API integration is the…",
      "post_date": "2019-05-31T21:23:00"
   },
   {
      "text": "Why #OpenBanking is set to be a game-changer in helping #banks deliver a better customer experience https://t.co/soXK3GXXIA via @abcnews",
      "post_date": "2019-05-31T21:21:00"
   },
   {
      "text": "Responsive Tiles offer a digital banking experience with simple money management tools that support daily and long-… https://t.co/WLT8pldznL",
      "post_date": "2019-05-31T21:20:00"
   },
   {
      "text": "Preparing for PSD2 and Open Banking #Banking #openbanking #digital  https://t.co/84UecsH2nw",
      "post_date": "2019-05-31T20:47:00"
   },
   {
      "text": "RT @Infosys: Banks must craft their own #openbanking ecosystems. The winners will build a trusted platform that encompasses end-to-end cust…",
      "post_date": "2019-05-31T20:34:00"
   },
   {
      "text": "RT @ForgeRock: Let's talk about what digital identity can do for #financialservices, #openbanking, and #PSD2. Meet us at booth #B70 on June…",
      "post_date": "2019-05-31T20:19:00"
   },
   {
      "text": "RT @ForgeRock: Replay ⏪ our #openbanking expert Nick Caley (@xplicitconsent) joined @Accenture's Hakan Eroglu last week to discuss how #PSD…",
      "post_date": "2019-05-31T20:19:00"
   },
   {
      "text": "RT @ForgeRock: Check out Hakan Eroglu from @Accenture and our very own Nick Caley (@xplicitconsent), discuss how #OpenBanking should be tre…",
      "post_date": "2019-05-31T20:18:00"
   },
   {
      "text": "RT @Investsuite: Meet our Growth team @HederikLaloo @chris_eics and Marcel Walther at Money 20/20 #Money2020 @HollandFinTech @bhive_eu next…",
      "post_date": "2019-05-31T20:15:00"
   },
   {
      "text": "With #GDPR and #PSD2 on the horizon, Mobile ID World is headed to Amsterdam to report on the latest #FinTech trends… https://t.co/qv5Rt0WREc",
      "post_date": "2019-05-31T20:00:00"
   },
   {
      "text": "RT @ArnaudAuger: The Disruptive Trends in #Payments by Robert Carlisle, exec from @Visa \n\n1️⃣ #ConnectedDevices 🤖📈\n2️⃣ #UX at the POS 💳\n3️⃣…",
      "post_date": "2019-05-31T19:41:00"
   },
   {
      "text": "Deep Dive: Real-time #Payments’ Impact On #Liquidity Management, via @pymnts ⠀\nhttps://t.co/B4EYfB8xZP ⠀\n#treasury… https://t.co/7lvbJJwwNc",
      "post_date": "2019-05-31T19:40:00"
   },
   {
      "text": "Cholamandalam Investment and Finance Co. receives $222M, student loan management platform @Pillar_App closes its se… https://t.co/UoAmlCMzMO",
      "post_date": "2019-05-31T19:39:00"
   },
   {
      "text": "RT @neirajones: Visa’s CEO Takes a Dark View of Faster #Payments, Just Not Visa’s Faster Payments 🙄 ⠀\nhttps://t.co/SvoJtlEVdE ⠀\n#fintech #c…",
      "post_date": "2019-05-31T19:31:00"
   },
   {
      "text": "4) #OpenBanking 🏦\n\n🇪🇺 #PSD2 pushes #Banks to provide access to third party providers \n\n#API are growing!… https://t.co/pMI15WJvP0",
      "post_date": "2019-05-31T19:23:00"
   },
   {
      "text": "The Disruptive Trends in #Payments by Robert Carlisle, exec from @Visa \n\n1️⃣ #ConnectedDevices 🤖📈\n2️⃣ #UX at the PO… https://t.co/aMrJrvPWYP",
      "post_date": "2019-05-31T19:06:00"
   },
   {
      "text": "RT @FinastraFS: Got 5mins? You can build a new app in that time! Join Finastra's @C_FinTech Director Innovation @money2020 and see how easy…",
      "post_date": "2019-05-31T18:56:00"
   },
   {
      "text": "RT @JuntosGlobal: Want to learn how one bank changed the traditional chatbot rules to drive growth? Join us at the LATAM Open Banking &amp; Fin…",
      "post_date": "2019-05-31T18:52:00"
   },
   {
      "text": "RT @AlliedPayment: Thanks to @FinastraFS for including @AlliedPayment @ldangelo &amp; @Ralph_Marcucc in today's #FusionOne  #London session abo…",
      "post_date": "2019-05-31T18:34:00"
   },
   {
      "text": "Visa’s CEO Takes a Dark View of Faster #Payments, Just Not Visa’s Faster Payments 🙄 \nhttps://t.co/GNbg7dIGpH… https://t.co/vkWZcSuanV",
      "post_date": "2019-05-31T18:02:00"
   },
   {
      "text": "@nigelverdon @SpaceX Fly me to the moon , let me play with those stars #OpenBanking",
      "post_date": "2019-05-31T17:42:00"
   },
   {
      "text": "Visa’s CEO Takes a Dark View of Faster #Payments, Just Not Visa’s Faster Payments 🙄 ⠀\nhttps://t.co/SvoJtlEVdE ⠀… https://t.co/KxerY8uDl9",
      "post_date": "2019-05-31T17:40:00"
   },
   {
      "text": "Paving the path forward for Canadian open banking /via @globeandmail https://t.co/ONZS1kWpGm #openbanking #fintech",
      "post_date": "2019-05-31T17:32:00"
   },
   {
      "text": "#OpenBanking will change the game in Financial Services in this country for everyone; Fintechs, Banks, etc. The wor… https://t.co/bNO92hEiQR",
      "post_date": "2019-05-31T17:28:00"
   },
   {
      "text": "RT @leimer: Banking is not the same in every locality, but we are moving more and more toward that global reality.  Come to my presentation…",
      "post_date": "2019-05-31T17:27:00"
   },
   {
      "text": "US open banking fintech unicorn Plaid has launched in the UK - Business Insider - https://t.co/OJYC6CUuVM #openbanking #banking #digital",
      "post_date": "2019-05-31T17:23:00"
   },
   {
      "text": "Britain’s Biggest Lenders Have Poured £81.1M into the #OpenBanking Implementation Entity so Far… https://t.co/aqKkHmPoFy",
      "post_date": "2019-05-31T17:08:00"
   },
   {
      "text": "In another installment @tink the EBA clarifications on PSD2 are shared. The big news? The API quality needs to incr… https://t.co/lqAEgMUZKv",
      "post_date": "2019-05-31T17:07:00"
   },
   {
      "text": "RT @openpaymentseu: Join us in shaping the Open Banking future and create state-of-the-art Developer Experience (DX)?\n\nWe are looking for s…",
      "post_date": "2019-05-31T17:03:00"
   },
   {
      "text": "The Future of #Banking \nhttps://t.co/oTOQy3RZXh\n#openbanking #superapps #unbundling #rebundling \nvia @GhelaBoskovich https://t.co/w7yRpdQIyq",
      "post_date": "2019-05-31T16:55:00"
   },
   {
      "text": "Want to learn how one bank changed the traditional chatbot rules to drive growth? Join us at the LATAM Open Banking… https://t.co/StszBsX1m5",
      "post_date": "2019-05-31T16:53:00"
   },
   {
      "text": "RT @colin_timmis: A trip to XeroCon London in November 2019 is well worth the effort and investment to get there - join us and a bunch of S…",
      "post_date": "2019-05-31T16:52:00"
   },
   {
      "text": "RT @PelicanPay: Meet us next week, stand K21 at @Money2020 in #Amsterdam &amp; discover how #PelicanPay #OpenBanking Hub can support #SMEs in t…",
      "post_date": "2019-05-31T16:49:00"
   },
   {
      "text": "RT @steveellis: Great comments on #OpenBanking from banks @ING_news @clear_bank, @RBS; pundits like @Peerster @lizlum @InnFin and experts f…",
      "post_date": "2019-05-31T16:39:00"
   },
   {
      "text": "Meet us next week, stand K21 at @Money2020 in #Amsterdam &amp; discover how #PelicanPay #OpenBanking Hub can support… https://t.co/WxFVbanTgw",
      "post_date": "2019-05-31T16:37:00"
   },
   {
      "text": "RT @SASsoftwareUKI: #Data is a priceless source of insight for #banks to improve #CX. Discover the opportunities that #OpenBanking can brin…",
      "post_date": "2019-05-31T16:37:00"
   },
   {
      "text": "Great comments on #OpenBanking from banks @ING_news @clear_bank, @RBS; pundits like @Peerster @lizlum @InnFin and e… https://t.co/ZW2VU9e3sW",
      "post_date": "2019-05-31T16:36:00"
   },
   {
      "text": "Think compliance is expensive? In the age of open banking, it’s your smartest investment https://t.co/fTUw90RF3x… https://t.co/6JgYPtdnkz",
      "post_date": "2019-05-31T16:30:00"
   },
   {
      "text": "Some interesting feedback and stats from European FIs from their experience so far with #OpenBanking - opportunitie… https://t.co/Qx8HVGJQbr",
      "post_date": "2019-05-31T16:28:00"
   },
   {
      "text": "Ed Adshead-Grant, @bottomlinetech gives us his two cents on the rise of open APIs. #OpenBanking #API #payments… https://t.co/9ufidVcSDl",
      "post_date": "2019-05-31T16:20:00"
   },
   {
      "text": "RT @ThePaypers: Monzo is a #bank that lives in your #phone, founded on the principle that your money should ‘just work’. It should be easy…",
      "post_date": "2019-05-31T16:18:00"
   },
   {
      "text": "As Open Banking and #PSD2 take effect, it seems there is no aspect of the banks’ operations not being disrupted by… https://t.co/0tE2XikqiC",
      "post_date": "2019-05-31T16:17:00"
   },
   {
      "text": "RT @FabrickPlatform: #openbanking news by #Fabrick\n\n🔷 The security challenges faced by open banking 🔷\n\n ⁦@techradar⁩ #fintech #cybersecurit…",
      "post_date": "2019-05-31T16:14:00"
   },
   {
      "text": "London-Based #OpenBanking Startup Yapily raises $5.4 million\nhttps://t.co/AxzRUOYIiJ \n#banking #API #fintech… https://t.co/taBcotOVzY",
      "post_date": "2019-05-31T16:14:00"
   },
   {
      "text": "When you get a resounding yes: how and not if when it comes to #openbanking! Read @VinayP_Volante six takeaways fro… https://t.co/QM1zWIy0Zb",
      "post_date": "2019-05-31T16:10:00"
   },
   {
      "text": "RT @neirajones: London-Based #OpenBanking Startup Yapily raises $5.4 million⠀\nhttps://t.co/hmfI412FE7 ⠀\n#banking #API #fintech @YapilyLtd h…",
      "post_date": "2019-05-31T16:05:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-31T15:50:00"
   },
   {
      "text": "US open banking fintech unicorn Plaid has launched in the UK https://t.co/gyojL15DMj via @businessinsider \n#fintech… https://t.co/zC5WF1G14O",
      "post_date": "2019-05-31T15:45:00"
   },
   {
      "text": "Britain’s Biggest Lenders Have Poured £81.1M into the #OpenBanking Implementation Entity so Far ⠀… https://t.co/wuZ3cogTKw",
      "post_date": "2019-05-31T15:40:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-31T15:35:00"
   },
   {
      "text": "Real-time payments and #openbanking, along with the opening up of customer banking data to 3rd parties and streamli… https://t.co/p0QFGimIeG",
      "post_date": "2019-05-31T15:33:00"
   },
   {
      "text": "Ai Editorial: Assessing the impact of open APIs on #payments landscape\n\nhttps://t.co/kc4SPjeEIr\n\n@Voyego #openAPI… https://t.co/Y6iQncLN7i",
      "post_date": "2019-05-31T15:25:00"
   },
   {
      "text": "Our CEO speaking yesterday about #openbanking and #api in Mexico City at the #BBVAOpenSummit. https://t.co/QqmELSW9wL",
      "post_date": "2019-05-31T15:21:00"
   },
   {
      "text": "India has come a long way in open banking. Here's what it needs for the home run. - Economic Times -… https://t.co/pII6QsKYZZ",
      "post_date": "2019-05-31T15:18:00"
   },
   {
      "text": "Customers now expect convenience, security &amp; #personalisation...and that demands a far more #agile, personal bank… https://t.co/zVySABkwRo",
      "post_date": "2019-05-31T15:15:00"
   },
   {
      "text": "US #OpenBanking #Fintech Unicorn @Plaid Has Launched in the UK \nhttps://t.co/n3FsaMApek \n#banking #markets https://t.co/12PPjkOHim",
      "post_date": "2019-05-31T15:04:00"
   },
   {
      "text": "Global PSD2 and Open Banking Biometric Authentication Market Status Analysis and Forecast 2019-2025 - Market Resear… https://t.co/nmO8zW1sEZ",
      "post_date": "2019-05-31T15:03:00"
   },
   {
      "text": "What are the main Challenges to Loan Origination in a Digital Setting?\n5. Adaptability. Adapting the waiting time t… https://t.co/E7cQrJWtmA",
      "post_date": "2019-05-31T15:00:00"
   },
   {
      "text": "Four key tactics to better deliver #APIs and improve #customerexperience through #openbanking -… https://t.co/R6Mu2nksBY",
      "post_date": "2019-05-31T15:00:00"
   },
   {
      "text": "RT @DigitalBankingT: London fintech Yapily raises $5.4M to offer a single API to connect to banks - TechCrunch… https://t.co/ntJmcn3fW5",
      "post_date": "2019-05-31T14:56:00"
   },
   {
      "text": "London fintech Yapily raises $5.4M to offer a single API to connect to banks - TechCrunch - https://t.co/e6NuhRS5IN… https://t.co/d7ItQTEOs9",
      "post_date": "2019-05-31T14:48:00"
   },
   {
      "text": "If you didn’t have chance to watch my FusionONE session live, the recording is ready! #FusionONE - Open APIs in EME… https://t.co/CvlVtfrdeO",
      "post_date": "2019-05-31T14:40:00"
   },
   {
      "text": "Nationwide - Beneficiaries endpoint returning 500 error response https://t.co/AyioJqDZwH #OpenBanking #PSD2 #APIs",
      "post_date": "2019-05-31T14:33:00"
   },
   {
      "text": "The role of application networks in an open banking world - Finextra - https://t.co/AwMJlnnyrw #openbanking #banking #digital",
      "post_date": "2019-05-31T14:33:00"
   },
   {
      "text": "RT @leimer: Banking is not the same in every locality, but we are moving more and more toward that global reality.  Come to my presentation…",
      "post_date": "2019-05-31T14:30:00"
   },
   {
      "text": "Khul jaa sim sim: why Indian bankers are fretting about unlocking their data caves - Economic Times -… https://t.co/CpuXHALgiZ",
      "post_date": "2019-05-31T14:28:00"
   },
   {
      "text": "Thrilled to host our\nglobal #openbanking experts on June 6 in Toronto. Contact me directly if you\nare interested in… https://t.co/ew4x0kAw60",
      "post_date": "2019-05-31T14:26:00"
   },
   {
      "text": "RT @ThePaypers: Monzo is a #bank that lives in your #phone, founded on the principle that your money should ‘just work’. It should be easy…",
      "post_date": "2019-05-31T14:21:00"
   },
   {
      "text": "[#Infographic] Tapping into the Future of Mobile Payments\n\nhttps://t.co/r40YsHpKEU\n\n#Innovation #Fintech #Banking… https://t.co/pbsJnloWPe",
      "post_date": "2019-05-31T14:20:00"
   },
   {
      "text": "Money 2020 is only 3 weeks away 🤩\nMeet @saltedge crew at booth W20. Dmitrii Barbasura, @Lisa_Gutu and… https://t.co/avQ9bQ55In",
      "post_date": "2019-05-31T14:15:00"
   },
   {
      "text": "RT @leimer: Banking is not the same in every locality, but we are moving more and more toward that global reality.  Come to my presentation…",
      "post_date": "2019-05-31T14:14:00"
   },
   {
      "text": "In this blog post mishraksunil details the 6 strategies for #banks to successfully embrace the #platform business m… https://t.co/KzGEFCZrYq",
      "post_date": "2019-05-31T14:12:00"
   },
   {
      "text": "In this blog post @mishraksunil details the 6 strategies for #banks to successfully embrace the #platform business… https://t.co/7XUCyuuyjz",
      "post_date": "2019-05-31T14:09:00"
   },
   {
      "text": "RT @railsbank: Interested in the future of #openbanking and how @Railsbank is going to change the world of financial services?\n\nCheck out t…",
      "post_date": "2019-05-31T14:09:00"
   },
   {
      "text": "RT @IngledewStephen: Huge thanks  @jamesvarga for sharing awesome @the_idco proposition with @BanquePopulaire executives @businessfrance ,…",
      "post_date": "2019-05-31T14:01:00"
   },
   {
      "text": "RT @openpaymentseu: Join us in shaping the Open Banking future and create state-of-the-art Developer Experience (DX)?\n\nWe are looking for s…",
      "post_date": "2019-05-31T13:52:00"
   },
   {
      "text": "@MojoMortgagesUK on APIs and open banking https://t.co/Odwvm7Fj0c #OpenBanking #APIs #Mortgages",
      "post_date": "2019-05-31T13:51:00"
   },
   {
      "text": "Global Alliance Fintech Link - @LeumiDigital @cibc @NAB launch online portal to drive #collaboration with #FinTechs… https://t.co/3Zeap4CNRq",
      "post_date": "2019-05-31T13:51:00"
   },
   {
      "text": "RT @ftcrunch: “Emerging technologies and the pace of innovation are driving changes throughout the banking industry at an unprecedented rat…",
      "post_date": "2019-05-31T13:50:00"
   },
   {
      "text": "RT @ThePaypers: Monzo is a #bank that lives in your #phone, founded on the principle that your money should ‘just work’. It should be easy…",
      "post_date": "2019-05-31T13:46:00"
   },
   {
      "text": "RT @Investsuite: Meet our Growth team @HederikLaloo @chris_eics and Marcel Walther at Money 20/20 #Money2020 @HollandFinTech @bhive_eu next…",
      "post_date": "2019-05-31T13:40:00"
   },
   {
      "text": "London-Based #OpenBanking Startup Yapily raises $5.4 million⠀\nhttps://t.co/hmfI412FE7 ⠀\n#banking #API #fintech… https://t.co/WMQgV031MR",
      "post_date": "2019-05-31T13:40:00"
   },
   {
      "text": "The #Security Challenges Faced by #OpenBanking ⠀\nhttps://t.co/Oi9HbHdJbE ⠀\n#banking #fintech #infosec… https://t.co/YHgHztf3j6",
      "post_date": "2019-05-31T13:40:00"
   },
   {
      "text": "RT @railsbank: Interested in the future of #openbanking and how @Railsbank is going to change the world of financial services?\n\nCheck out t…",
      "post_date": "2019-05-31T13:36:00"
   },
   {
      "text": "Calling all fintechs, banks, developers - book a meeting today with Finastra at Money20/20 to see how you can start… https://t.co/lUTePsYZDQ",
      "post_date": "2019-05-31T13:30:00"
   },
   {
      "text": "Still a little fuzzy on open banking? Check out our rundown on the topic, along with our tips on how to use open ba… https://t.co/TCtf1Is5n2",
      "post_date": "2019-05-31T13:30:00"
   },
   {
      "text": "RT @railsbank: Check out our founder @nigelverdon talk through #openbanking and about the global vision of @Railsbank - solving any financi…",
      "post_date": "2019-05-31T13:24:00"
   },
   {
      "text": "RT @railsbank: Interested in the future of #openbanking and how @Railsbank is going to change the world of financial services?\n\nCheck out t…",
      "post_date": "2019-05-31T13:24:00"
   },
   {
      "text": "Join us in discussing #openbankdata and we'll show you how DirectID Insights can empower you to onboard customers i… https://t.co/yUOG6YAMB5",
      "post_date": "2019-05-31T13:22:00"
   },
   {
      "text": "In #Payments Today: Paving the path forward for #openbanking in #Canada; #Indonesia unveils standard QR code for… https://t.co/iEFOl78Xdy",
      "post_date": "2019-05-31T13:21:00"
   },
   {
      "text": "We are delighted to be partnered with @Money_LIVE_ : #NordicBanking, the region's most innovative banking… https://t.co/kw2EvGIhFY",
      "post_date": "2019-05-31T13:21:00"
   },
   {
      "text": "RT @KaiClaus: EY's #payments newsletter covers topics from #OpenBanking transformation to balancing #PSD2 and #GDPR. Read the complete arti…",
      "post_date": "2019-05-31T13:21:00"
   },
   {
      "text": "RT @FintechPortugal: Build a Startup with Lisbon's Top Investors and Founders. FI Lisbon Applications Open Now\n\n#fintechPortugal #Fintech #…",
      "post_date": "2019-05-31T13:18:00"
   },
   {
      "text": ".@cibc @bank_leumi &amp; @NAB try another way to get closer to #FinTech #innovation -- is this the silver bullet? Is th… https://t.co/mduGw6ms2F",
      "post_date": "2019-05-31T13:16:00"
   },
   {
      "text": "RT @Global_Kinetic: Why API integration will allow the digital banking ecosystem to thrive in 2019 https://t.co/3leZNGIbQv #digitalbanking…",
      "post_date": "2019-05-31T13:12:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-05-31T13:12:00"
   },
   {
      "text": "FINTECHNA is out!\nGet your summary of the most important fintech news of the week. \n\nhttps://t.co/QKvtkxPbOI… https://t.co/QnB68SXhlJ",
      "post_date": "2019-05-31T13:08:00"
   },
   {
      "text": "Are you going to Money2020? Pop by our Invest NI Europe Stand R24, Hall 7 or contact us directly to set up a meetin… https://t.co/4ynfPURUpm",
      "post_date": "2019-05-31T13:07:00"
   },
   {
      "text": "Our latest piece on #OpenBanking ... \n\nBoth @psb_dc and @leimer will be in Amsterdam next week. Find us on stage or… https://t.co/a5BMJmaDmh",
      "post_date": "2019-05-31T13:05:00"
   },
   {
      "text": "'Standardization of APIs is vital for getting the benefits of open banking.' Hear about @DanskeBank_DK approach to… https://t.co/3HKh4jgzgV",
      "post_date": "2019-05-31T13:05:00"
   },
   {
      "text": "In the future, banking will be about making connections at the right time, through the right channel with the right… https://t.co/MLxiUKw0ET",
      "post_date": "2019-05-31T13:05:00"
   },
   {
      "text": "On 29th May BULPROS hosted a special event on #API Economy and #OpenBanking, organized in partnership with IBM and… https://t.co/Sp15XFBUCI",
      "post_date": "2019-05-31T13:03:00"
   },
   {
      "text": "#Banks globally have started to acknowledge Open #Banking as a critical influence on their #digitaltransformations,… https://t.co/1DeQuh6pBW",
      "post_date": "2019-05-31T13:02:00"
   },
   {
      "text": "Future of banking: why retail banks have to go digital https://t.co/dFogJJiRHI #digitalbanking #fintech #Payments… https://t.co/mCyDp8sr9J",
      "post_date": "2019-05-31T13:01:00"
   },
   {
      "text": "Monzo is a #bank that lives in your #phone, founded on the principle that your money should ‘just work’. It should… https://t.co/8eIHefmU4Y",
      "post_date": "2019-05-31T13:00:00"
   },
   {
      "text": "RT @IngledewStephen: Huge thanks  @jamesvarga for sharing awesome @the_idco proposition with @BanquePopulaire executives @businessfrance ,…",
      "post_date": "2019-05-31T12:41:00"
   },
   {
      "text": "Huge thanks  @jamesvarga for sharing awesome @the_idco proposition with @BanquePopulaire executives @businessfrance… https://t.co/S4rMkAiJsR",
      "post_date": "2019-05-31T12:41:00"
   },
   {
      "text": "RT @leimer: Banking is not the same in every locality, but we are moving more and more toward that global reality.  Come to my presentation…",
      "post_date": "2019-05-31T12:40:00"
   },
   {
      "text": "RT @FinastraFS: Join Finastra's @elirosner Chief Product &amp; Technology Officer, as he discusses how to transform a bank's tech platform at @…",
      "post_date": "2019-05-31T12:33:00"
   },
   {
      "text": "RT @FinastraFS: Got 5mins? You can build a new app in that time! Join Finastra's @C_FinTech Director Innovation @money2020 and see how easy…",
      "post_date": "2019-05-31T12:32:00"
   },
   {
      "text": "Our CEO @Dkjellen will take the @money2020 stage on Wednesday to talk about how Tink has out-engineered the financi… https://t.co/qXYAPl2IBz",
      "post_date": "2019-05-31T12:31:00"
   },
   {
      "text": "Mobile Banking App Review 2019 takes a closer look at AISPs – how do the money manager apps compare against the est… https://t.co/rTSd8kYxJp",
      "post_date": "2019-05-31T12:30:00"
   },
   {
      "text": "RT @FinTechFeed: “Emerging technologies and the pace of innovation are driving changes throughout the banking industry at an unprecedented…",
      "post_date": "2019-05-31T12:24:00"
   },
   {
      "text": "ATB Financial ends fiscal year with strong revenue and customer growth - Canada NewsWire - https://t.co/H74FTwh0FN… https://t.co/WSL4nfTqZi",
      "post_date": "2019-05-31T12:23:00"
   },
   {
      "text": "Hong Kong virtual bank Livi names Michael Wang Lan as chief executive - South China Morning Post -… https://t.co/y63tOl4GGq",
      "post_date": "2019-05-31T12:23:00"
   },
   {
      "text": "RT @Infosys: Banks must craft their own #openbanking ecosystems. The winners will build a trusted platform that encompasses end-to-end cust…",
      "post_date": "2019-05-31T12:14:00"
   },
   {
      "text": "RT @TreezorBanking: #Money2020 starts next week! Would you like to meet us? Our sales team and our CEO Eric Lassus will be happy to discuss…",
      "post_date": "2019-05-31T12:13:00"
   },
   {
      "text": "RT @ttavlas: Preparing for PSD2 and Open Banking - Market Mirror - https://t.co/MNSmVESn4n #openbanking #banking #digital",
      "post_date": "2019-05-31T12:12:00"
   },
   {
      "text": "RT @TreezorBanking: #Money2020 starts next week! Would you like to meet us? Our sales team and our CEO Eric Lassus will be happy to discuss…",
      "post_date": "2019-05-31T12:11:00"
   },
   {
      "text": "#Money2020 starts next week! Would you like to meet us? Our sales team and our CEO Eric Lassus will be happy to dis… https://t.co/1MVHbzovdW",
      "post_date": "2019-05-31T12:10:00"
   },
   {
      "text": "RT @ttavlas: Preparing for PSD2 and Open Banking - Market Mirror - https://t.co/MNSmVESn4n #openbanking #banking #digital",
      "post_date": "2019-05-31T12:09:00"
   },
   {
      "text": "Preparing for PSD2 and Open Banking - Market Mirror - https://t.co/MNSmVESn4n #openbanking #banking #digital",
      "post_date": "2019-05-31T12:08:00"
   },
   {
      "text": "Raisin expansion to US mentioned by The Economist\n#fintech #deposit #openbanking #usa https://t.co/fLyxz5qcJ9",
      "post_date": "2019-05-31T12:06:00"
   },
   {
      "text": "RT @AGFinTech: Don’t be a stranger! Come visit our team at stand K53 at @money2020 Europe next week &amp; discuss #Blockchain #OpenBanking #Pay…",
      "post_date": "2019-05-31T12:03:00"
   },
   {
      "text": "Banks must craft their own #openbanking ecosystems. The winners will build a trusted platform that encompasses end-… https://t.co/7GPVOMBOPz",
      "post_date": "2019-05-31T12:00:00"
   },
   {
      "text": "June 4th @FDATAnorth in collaboration w/ @UKinCanada is holding a dicussion on the benefits of #openbanking in Otta… https://t.co/8SxVEPdG0N",
      "post_date": "2019-05-31T11:58:00"
   },
   {
      "text": "RT @AGFinTech: Don’t be a stranger! Come visit our team at stand K53 at @money2020 Europe next week &amp; discuss #Blockchain #OpenBanking #Pay…",
      "post_date": "2019-05-31T11:57:00"
   },
   {
      "text": "RT @rob2775: With alumni from @iZettle, #Sweden #startup @openpaymentseu raises €1.2m funding - as it builds a #PSD2 inspired #OpenBanking…",
      "post_date": "2019-05-31T11:54:00"
   },
   {
      "text": "🔷 our NEW WEBSITE is online! 🔷\nThis makes it even easier to find #openbanking solutions that can revolutionize your… https://t.co/S8uZzHrmmi",
      "post_date": "2019-05-31T11:54:00"
   },
   {
      "text": "With alumni from @iZettle, #Sweden #startup @openpaymentseu raises €1.2m funding - as it builds a #PSD2 inspired… https://t.co/9rvx5eQsy2",
      "post_date": "2019-05-31T11:50:00"
   },
   {
      "text": "APIs and open platforms excite banking leaders at FusionONE 2019 - Finextra - https://t.co/jsSl94769F #openbanking #banking #digital",
      "post_date": "2019-05-31T11:48:00"
   },
   {
      "text": "Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next… https://t.co/hJOVsL50Tf",
      "post_date": "2019-05-31T11:42:00"
   },
   {
      "text": "US #OpenBanking #Fintech Unicorn @Plaid Has Launched in the UK ⠀\nhttps://t.co/CX81RuuQZY ⠀\n#banking #markets… https://t.co/r1OdwVZEM9",
      "post_date": "2019-05-31T11:40:00"
   },
   {
      "text": "#FlashBackFriday: The AFF Tech Disrupt Conference 2019 - TechCity - https://t.co/NRnzLiGljm #openbanking #banking #digital",
      "post_date": "2019-05-31T11:38:00"
   },
   {
      "text": "A trip to XeroCon London in November 2019 is well worth the effort and investment to get there - join us and a bunc… https://t.co/W82H0JyRkR",
      "post_date": "2019-05-31T11:35:00"
   },
   {
      "text": "RT @Global_Kinetic: Why API integration will allow the digital banking ecosystem to thrive in 2019 https://t.co/3leZNGIbQv #digitalbanking…",
      "post_date": "2019-05-31T11:13:00"
   },
   {
      "text": "#PelicanPay #OpenBanking Hub can offer #Banks pan-European, #API Interoperability, integrated #fraud detection solu… https://t.co/xQIsNaRugP",
      "post_date": "2019-05-31T11:12:00"
   },
   {
      "text": "Finastra sees small banks as a way to catch up in U.S. core tech #Banking #openbanking #digital  https://t.co/BfrO2mAgq2",
      "post_date": "2019-05-31T11:11:00"
   },
   {
      "text": "As part of our Bank Data Across Sectors series, we've outlined why now is the time for mortgage providers to start… https://t.co/IUCv2TUVBu",
      "post_date": "2019-05-31T11:07:00"
   },
   {
      "text": "Mortgage technology provider @twenty7tec keeping open banking on hold until lenders ready https://t.co/kVDyidvNS9 #OpenBanking",
      "post_date": "2019-05-31T11:06:00"
   },
   {
      "text": "UK open-banking #FinTech Yapily raises £4.2m in seed funding 🇬🇧\n\nhttps://t.co/c2LDCaRW5M #openbanking https://t.co/pCJD17GgOY",
      "post_date": "2019-05-31T11:06:00"
   },
   {
      "text": "RT @the_idco: Next up, Mark Curran, Director of Payments and Open Banking at @cybgplc and our partners in @HelloB app.\n@FinTechScotland\n#op…",
      "post_date": "2019-05-31T11:04:00"
   },
   {
      "text": "RT @ieDigitalFS: 'Emerging technologies and the pace of innovation are driving changes throughout the banking industry at an unprecedented…",
      "post_date": "2019-05-31T10:59:00"
   },
   {
      "text": "RT @Finacle: Banks consider #OpenBanking #APIs as the top technology for the future of #innovation, higher than #AI, #MachineLearning #chat…",
      "post_date": "2019-05-31T10:58:00"
   },
   {
      "text": "RT @PeterHeywood_: Open banking – build it and they will come?  Industry pundits spoke about customers walking through a promised land of m…",
      "post_date": "2019-05-31T10:55:00"
   },
   {
      "text": "RT @IIDB_ie: Last chance for early bird tickets!\n#FinTech track with @markgcummins of @BusinessDCU. \n→ #P2P Lending\n→ #crowdfunding\n→ #Open…",
      "post_date": "2019-05-31T10:52:00"
   },
   {
      "text": "RT @Global_Kinetic: Why API integration will allow the digital banking ecosystem to thrive in 2019 https://t.co/3leZNGIbQv #digitalbanking…",
      "post_date": "2019-05-31T10:52:00"
   },
   {
      "text": "RT @Global_Kinetic: Why API integration will allow the digital banking ecosystem to thrive in 2019 https://t.co/3leZNGIbQv #digitalbanking…",
      "post_date": "2019-05-31T10:41:00"
   },
   {
      "text": "Next up, Mark Curran, Director of Payments and Open Banking at @cybgplc and our partners in @HelloB app.… https://t.co/7egCyC6AoM",
      "post_date": "2019-05-31T10:36:00"
   },
   {
      "text": "#RT @TechMarketView: The growth of API providers like @Yapily, @TrueLayer et al, highlights the #OpenBanking opport… https://t.co/BrWRCbDWpc",
      "post_date": "2019-05-31T10:30:00"
   },
   {
      "text": "Last chance for early bird tickets!\n#FinTech track with @markgcummins of @BusinessDCU. \n→ #P2P Lending\n→… https://t.co/gJWMbAEi0h",
      "post_date": "2019-05-31T10:30:00"
   },
   {
      "text": "Read our #psd2 blog update to discover the latest on two-factor authentication (2FA), how one-click retailers may b… https://t.co/EO1c9NsQGu",
      "post_date": "2019-05-31T10:29:00"
   },
   {
      "text": "Mark Curran from @cybgplc on stage now telling us how banks are approaching #OpenBanking and what it means for thei… https://t.co/KTCFYdJ9tj",
      "post_date": "2019-05-31T10:27:00"
   },
   {
      "text": "RT @FabrickPlatform: #openbanking news by #Fabrick\n\n🔷 The security challenges faced by open banking 🔷\n\n ⁦@techradar⁩ #fintech #cybersecurit…",
      "post_date": "2019-05-31T10:23:00"
   },
   {
      "text": "Why API integration will allow the digital banking ecosystem to thrive in 2019 https://t.co/3leZNGIbQv… https://t.co/8GUImqtmkV",
      "post_date": "2019-05-31T10:22:00"
   },
   {
      "text": "RT @FabrickPlatform: #openbanking news by #Fabrick\n\n🔷 The security challenges faced by open banking 🔷\n\n ⁦@techradar⁩ #fintech #cybersecurit…",
      "post_date": "2019-05-31T10:22:00"
   },
   {
      "text": "RT @FabrickPlatform: #Hype on air at “Filo Diretto” #RaiRadio1 because #fintech is for everyone\n\n#openbanking https://t.co/V35Tv6OSL2",
      "post_date": "2019-05-31T10:22:00"
   },
   {
      "text": "RT @FabrickPlatform: Have a good weekend of relaxation, because Monday starts the @money2020 Europe. It will be 3 days Intensive and full o…",
      "post_date": "2019-05-31T10:22:00"
   },
   {
      "text": "Have a good weekend of relaxation, because Monday starts the @money2020 Europe. It will be 3 days Intensive and ful… https://t.co/FxZdW9LyXc",
      "post_date": "2019-05-31T10:19:00"
   },
   {
      "text": "RT @railsbank: Interested in the future of #openbanking and how @Railsbank is going to change the world of financial services?\n\nCheck out t…",
      "post_date": "2019-05-31T10:14:00"
   },
   {
      "text": "Banks consider #OpenBanking #APIs as the top technology for the future of #innovation, higher than #AI,… https://t.co/DPnam2ytMT",
      "post_date": "2019-05-31T10:07:00"
   },
   {
      "text": "RT @68santos: Inside GCHQ: the art of spying in the digital age\nBritain’s biggest intelligence service is rethinking its mission — and recr…",
      "post_date": "2019-05-31T10:02:00"
   },
   {
      "text": "RT @FintechPortugal: Build a Startup with Lisbon's Top Investors and Founders. FI Lisbon Applications Open Now\n\n#fintechPortugal #Fintech #…",
      "post_date": "2019-05-31T10:02:00"
   },
   {
      "text": "Got 5mins? You can build a new app in that time! Join Finastra's @C_FinTech Director Innovation @money2020 and see… https://t.co/T7KiA9LPyY",
      "post_date": "2019-05-31T10:01:00"
   },
   {
      "text": "Study: 1 in 10 #banks will disappear over the next 5 years\n\nStudy shows that the industry faces a critical transfor… https://t.co/JFmfie7OJK",
      "post_date": "2019-05-31T10:00:00"
   },
   {
      "text": "Banks consider #OpenBanking #APIs as the top technology for the future of #innovation, higher than #AI,… https://t.co/GFUWGglzwP",
      "post_date": "2019-05-31T10:00:00"
   },
   {
      "text": "Videos ✔️Demos ✔️t-shirts ✔️and we're almost ready for @money2020! Our schedule is filling up fast but we have a fe… https://t.co/G1Am7Y4wFJ",
      "post_date": "2019-05-31T10:00:00"
   },
   {
      "text": "\"Whether it’s driven by consumer demand, made compulsory by regulation or simply by the next stage in the natural e… https://t.co/Muuh5OTezr",
      "post_date": "2019-05-31T09:48:00"
   },
   {
      "text": "In another installment of #TinkThinks, we share the EBA’s clarifications on PSD2. The big news? The banks’ API qual… https://t.co/GaO1KnI2eE",
      "post_date": "2019-05-31T09:48:00"
   },
   {
      "text": "Simplify and accelerate your journey to #OpenBanking with the delivery of PSD2-compliant and secure #APIs. Learn mo… https://t.co/DcbRWF8jtE",
      "post_date": "2019-05-31T09:48:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-05-31T09:43:00"
   },
   {
      "text": "RT @Investsuite: Meet our Growth team @HederikLaloo @chris_eics and Marcel Walther at Money 20/20 #Money2020 @HollandFinTech @bhive_eu next…",
      "post_date": "2019-05-31T09:42:00"
   },
   {
      "text": "Meet our Growth team @HederikLaloo @chris_eics and Marcel Walther at Money 20/20 #Money2020 @HollandFinTech… https://t.co/MDbaw46NGO",
      "post_date": "2019-05-31T09:41:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-05-31T09:35:00"
   },
   {
      "text": "RT @the_idco: Our CEO, @jamesvarga, is speaking at the @FinTechScotland meetup today, discussing the value in #PSD2 &amp; dissecting our journe…",
      "post_date": "2019-05-31T09:32:00"
   },
   {
      "text": "What changes are #PSD2 and #OpenBanking bringing? Listen to Jarkko Turunen’s response during Tieto #futurecredit ev… https://t.co/AyJkgVfa8a",
      "post_date": "2019-05-31T09:32:00"
   },
   {
      "text": "RT @TechMarketView: The growth of API providers like @Yapily, @TrueLayer et al, highlights the #OpenBanking opportunity as the ecosystem ex…",
      "post_date": "2019-05-31T09:29:00"
   },
   {
      "text": "The growth of API providers like @Yapily, @TrueLayer et al, highlights the #OpenBanking opportunity as the ecosyste… https://t.co/jtecwZQtLJ",
      "post_date": "2019-05-31T09:28:00"
   },
   {
      "text": "RT @kushlani_ds: #Openbanking enables banks to reach a wider range of customer groups through a multitude of third-party applications in th…",
      "post_date": "2019-05-31T09:24:00"
   },
   {
      "text": "#Data is a priceless source of insight for #banks to improve #CX. Discover the opportunities that #OpenBanking can… https://t.co/Ihy8FSfwfd",
      "post_date": "2019-05-31T09:14:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-05-31T09:11:00"
   },
   {
      "text": "RT @FinastraFS: Join Finastra's @elirosner Chief Product &amp; Technology Officer, as he discusses how to transform a bank's tech platform at @…",
      "post_date": "2019-05-31T09:11:00"
   },
   {
      "text": "RT @UrsBolt: «#Democratization of #finance needs access to data beyond #banking.»\n\n@RozChowKoo, founder/CEO @CXAGroup does it by #digitaliz…",
      "post_date": "2019-05-31T09:11:00"
   },
   {
      "text": ". moon based open banking  through a strategic relationship with @SpaceX #openbanking ? https://t.co/y5UoYM9tFL",
      "post_date": "2019-05-31T09:08:00"
   },
   {
      "text": "Banks continue to feel PSD2 and Open Banking discomfort\n\nhttps://t.co/uWM404NT6l\n\n#OpenBanking #PSD2 #banking… https://t.co/IQhU99kj2j",
      "post_date": "2019-05-31T09:06:00"
   },
   {
      "text": "Industry Insight: Andrew Moor, CEO, Equitable Bank - Canada Focus\n#OpenBanking #industryinsight… https://t.co/M7AGpUQvZN",
      "post_date": "2019-05-31T09:03:00"
   },
   {
      "text": "Join Finastra's @elirosner Chief Product &amp; Technology Officer, as he discusses how to transform a bank's tech platf… https://t.co/ykLVFaLo9E",
      "post_date": "2019-05-31T09:00:00"
   },
   {
      "text": "RT @TargetGroupLtd: '#OpenBanking will undoubtedly lead to more competition.... banks must step up their focus on #UX in order to hold on t…",
      "post_date": "2019-05-31T09:00:00"
   },
   {
      "text": "One API to rule them all ... I wonder how this works alongside the push for standard APIs #OpenBanking #FinTech… https://t.co/Y7k22pjPyc",
      "post_date": "2019-05-31T09:00:00"
   },
   {
      "text": "Open banking API platform @YapilyLtd raises $5.4 million seed funding https://t.co/BfFLtTLUy1 #OpenBanking #FinTech #APIs",
      "post_date": "2019-05-31T08:59:00"
   },
   {
      "text": ". Thanks to @INTERAC for the opportunity to share some thoughs on #openbanking https://t.co/E6YOFXBHPo",
      "post_date": "2019-05-31T08:59:00"
   },
   {
      "text": "What do consumers think of Open Banking a year after its launch in the UK? #OpenBanking https://t.co/gHeNISv3U7 https://t.co/4N0sIHe18F",
      "post_date": "2019-05-31T08:59:00"
   },
   {
      "text": "RT @FabrickPlatform: #Hype on air at “Filo Diretto” #RaiRadio1 because #fintech is for everyone\n\n#openbanking https://t.co/lGIxfyreXl",
      "post_date": "2019-05-31T08:56:00"
   },
   {
      "text": "Is Open Banking being hobbled by outages? https://t.co/reNYA89GdA #finech #openbanking #innovation #banking https://t.co/0R0EaHbUbL",
      "post_date": "2019-05-31T08:55:00"
   },
   {
      "text": "RT @FabrickPlatform: #Hype on air at “Filo Diretto” #RaiRadio1 because #fintech is for everyone\n\n#openbanking https://t.co/V35Tv6OSL2",
      "post_date": "2019-05-31T08:52:00"
   },
   {
      "text": "#Hype on air at “Filo Diretto” #RaiRadio1 because #fintech is for everyone\n\n#openbanking https://t.co/V35Tv6OSL2",
      "post_date": "2019-05-31T08:52:00"
   },
   {
      "text": "RT @saltedge: @saltedge's CEO, Dmitrii Barbasura, describes ASPSPs’ main concerns related to the implementation of TPP identification and e…",
      "post_date": "2019-05-31T08:50:00"
   },
   {
      "text": "Interested in the future of #openbanking and how @Railsbank is going to change the world of financial services?\n\nCh… https://t.co/QRTE8jfWVG",
      "post_date": "2019-05-31T08:48:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-05-31T08:47:00"
   },
   {
      "text": "Our CEO, @jamesvarga, is speaking at the @FinTechScotland meetup today, discussing the value in #PSD2 &amp; dissecting… https://t.co/TCfbrdu8vt",
      "post_date": "2019-05-31T08:43:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-05-31T08:42:00"
   },
   {
      "text": "London #fintech @YapilyLtd latest to benefit from #OpenBanking goldrush!\n\nhttps://t.co/ld2eUJmVc1\n\n#PSD2 #API #Data",
      "post_date": "2019-05-31T08:25:00"
   },
   {
      "text": "As markets in the world move towards #OpenBanking, is your #bank well-positioned to drive customer growth and value… https://t.co/RYIndUvJCY",
      "post_date": "2019-05-31T08:24:00"
   },
   {
      "text": "RT @MastercardEU: We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology #openba…",
      "post_date": "2019-05-31T08:15:00"
   },
   {
      "text": "RT @Icemanwings: PSD2 and Open Banking rush eroding banks’ mobile security measures #OpenBanking #Security #Fintech #Digital  https://t.co/…",
      "post_date": "2019-05-31T08:12:00"
   },
   {
      "text": "My panel discussion in Mexico about how #openbanking is transforming the financial service world. #bbvaopensummit https://t.co/db6FgZctqg",
      "post_date": "2019-05-31T08:09:00"
   },
   {
      "text": "RT @Epiphany_Srl: Still not ready for the next #PSD2 deadlines or willing to embrace #OpenBanking? \nEpiphany can help you! Join us at #EBAD…",
      "post_date": "2019-05-31T07:56:00"
   },
   {
      "text": "Looking forward to attending @money2020 next week. There are some hot topics on the planner including #AI ,… https://t.co/C0GCtdTrOI",
      "post_date": "2019-05-31T07:47:00"
   },
   {
      "text": "We've got a great line up of speakers at @Money2020 in Amsterdam next week talking  about #innovation #technology… https://t.co/o8XmF5rsDg",
      "post_date": "2019-05-31T07:44:00"
   },
   {
      "text": "RT @JCtheOriginal: I'm going to be at @money2020 with the team. Book some time in with us to talk about #openbanking, #apis, data and produ…",
      "post_date": "2019-05-31T07:31:00"
   },
   {
      "text": "[#Disruption] Innovation is the key theme for payments \n\nhttps://t.co/nOhskqURpE\n\n#Fintech #Banking #MobileBanking… https://t.co/SPfbZWdGi1",
      "post_date": "2019-05-31T07:30:00"
   },
   {
      "text": ".@NatWest_Help launches online payments service with #OpenBanking https://t.co/k1rUklhLIs",
      "post_date": "2019-05-31T07:17:00"
   },
   {
      "text": "I hope to see tons of engagement in #psd2 at #money2020 this year! Come and book a meeting with the team if you're… https://t.co/uLPxF5DUC3",
      "post_date": "2019-05-31T07:14:00"
   },
   {
      "text": "RT @LouiseHBeaumont: UK lenders make strides with #Open Banking, but #fintechs still frustrated....\n\nhttps://t.co/u7iRtJDBdJ\n\n@yapily @Soph…",
      "post_date": "2019-05-31T07:13:00"
   },
   {
      "text": "RT @LouiseHBeaumont: UK lenders make strides with #Open Banking, but #fintechs still frustrated....\n\nhttps://t.co/u7iRtJDBdJ\n\n@yapily @Soph…",
      "post_date": "2019-05-31T07:09:00"
   },
   {
      "text": "Yapily, a #London #fintech #startup that offers an #OpenBanking based API platform to enable financial services pro… https://t.co/2n5xrFSAZr",
      "post_date": "2019-05-31T07:02:00"
   },
   {
      "text": "RT @CH_Strategies: New minister is responsible for Consumer Data Right and open banking regimes, among other FinTech initiatives https://t.…",
      "post_date": "2019-05-31T07:00:00"
   },
   {
      "text": "PSD2 and Open Banking rush eroding banks’ mobile security measures #OpenBanking #Security #Fintech #Digital  https://t.co/9CrwZBQMR0 @TSGTSG",
      "post_date": "2019-05-31T07:00:00"
   },
   {
      "text": "#PSD2  in Europe is being associated with a major change in payments and data protection\n\n#travel #airlines… https://t.co/GrW2eZeFiT",
      "post_date": "2019-05-31T06:59:00"
   },
   {
      "text": "#Openbanking enables banks to reach a wider range of customer groups through a multitude of third-party application… https://t.co/D0wAMPTKbt",
      "post_date": "2019-05-31T06:20:00"
   },
   {
      "text": "Trepidation about Open Banking rules persist among incumbents. https://t.co/Mtuzn2gAOU\n\n#openbanking #fintech #psd2… https://t.co/spTGkBs5na",
      "post_date": "2019-05-31T06:14:00"
   },
   {
      "text": "📰 US #openbanking #fintech ⁦@Plaid⁩ launches in the UK 📰⁦@businessinsider⁩ #fintechnews #fintechdistrict #31May  https://t.co/lT1jlMLymz",
      "post_date": "2019-05-31T06:13:00"
   },
   {
      "text": "#openbanking news by #Fabrick\n\n🔷 The security challenges faced by open banking 🔷\n\n ⁦@techradar⁩ #fintech… https://t.co/K5s8Y1bhsN",
      "post_date": "2019-05-31T05:59:00"
   },
   {
      "text": "Are technical glitches holding back the banking revolution? Why some #fintech companies are frustrated despite prog… https://t.co/RLgI1U7KZN",
      "post_date": "2019-05-31T05:45:00"
   },
   {
      "text": "With Millennials and Generation Z expecting more from their banks, our latest blog talks about why API integration… https://t.co/qKOrwb0Uts",
      "post_date": "2019-05-31T05:45:00"
   },
   {
      "text": "RT @token_io: We're almost ready for @money2020! Add War for the Planet of the #APIs panel to your schedule. @stkirsch will be on the Indus…",
      "post_date": "2019-05-31T05:21:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-31T05:07:00"
   },
   {
      "text": "RT @hakan_eroglu_tw: Just 4 days left - meet me at #Money2020 and talk about #OpenBanking opportunities for banks and other players https:/…",
      "post_date": "2019-05-31T04:19:00"
   },
   {
      "text": "RT @leimer: Banking is not the same in every locality, but we are moving more and more toward that global reality.  Come to my presentation…",
      "post_date": "2019-05-31T04:06:00"
   },
   {
      "text": "Open Banking use case focused on Accounting platforms for corporates and sme. Time to learn about new ways of doing… https://t.co/1F4ztGc33Q",
      "post_date": "2019-05-31T04:05:00"
   },
   {
      "text": "Open banking system to the cannabis industry, 33 attorneys general urge - Los Angeles Times -… https://t.co/zF4GaoDN0G",
      "post_date": "2019-05-31T03:18:00"
   },
   {
      "text": "Open Banking is coming  #openbanking https://t.co/kxn13BXZ1E",
      "post_date": "2019-05-31T03:08:00"
   },
   {
      "text": "RT @FintechPortugal: Why Governments Should Be Using Blockchain \n\n#fintechPortugal #Fintech #Portugal #Porto #Lisbon #Insurtech #TechFin #B…",
      "post_date": "2019-05-31T02:53:00"
   },
   {
      "text": "RT @68santos: Why Governments Should Be Using Blockchain \n\n#fintechPortugal #Fintech #Portugal #Porto #Lisbon #Insurtech #TechFin #Banking…",
      "post_date": "2019-05-31T02:53:00"
   },
   {
      "text": "RT @68santos: Why Governments Should Be Using Blockchain \n\n#fintechPortugal #Fintech #Portugal #Porto #Lisbon #Insurtech #TechFin #Banking…",
      "post_date": "2019-05-31T02:52:00"
   },
   {
      "text": "Finastra sees small banks as a way to catch up in U.S. core tech #Digital #openbanking #banking  https://t.co/XOmfQVqWDS",
      "post_date": "2019-05-31T02:15:00"
   },
   {
      "text": "Edited Transcript of https://t.co/AL2SXMMNVa earnings conference call or presentation 30-May-19 1:00pm GMT - Yahoo… https://t.co/muCuwcXwIl",
      "post_date": "2019-05-31T02:03:00"
   },
   {
      "text": "New minister is responsible for Consumer Data Right and open banking regimes, among other FinTech initiatives… https://t.co/fEIrU6oTs3",
      "post_date": "2019-05-31T01:43:00"
   },
   {
      "text": "RT @FINSIA: Chris Monk @DecodedCo educating #FINSIA @perth members and guests on the use of #blockchain, #AI, #MachineLearning and #openban…",
      "post_date": "2019-05-31T00:55:00"
   },
   {
      "text": "RT @TheBanker: [Video] Open Banking fosters a 'coopetitive' environment between #fintechs and #banks, explains HSBC’s Nadine Lagarmitte. In…",
      "post_date": "2019-05-31T00:49:00"
   },
   {
      "text": "London fintech Yapily raises $5.4M to offer a single API to connect to banks \nhttps://t.co/3JBugpObz0 via… https://t.co/rSZql3nQ7a",
      "post_date": "2019-05-31T00:42:00"
   },
   {
      "text": "Chris Monk @DecodedCo educating #FINSIA @perth members and guests on the use of #blockchain, #AI, #MachineLearning… https://t.co/oNFfaOpL8c",
      "post_date": "2019-05-31T00:18:00"
   },
   {
      "text": "Paving the path forward for Canadian open banking #Banking #openbanking #fintech  https://t.co/PGPTMQv7EJ",
      "post_date": "2019-05-31T00:06:00"
   },
   {
      "text": "Khul jaa sim sim: why Indian bankers are fretting about unlocking their data caves - Economic Times -… https://t.co/5CDxToEkho",
      "post_date": "2019-05-31T00:01:00"
   },
   {
      "text": "As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity.… https://t.co/wb9k7Hw4xc",
      "post_date": "2019-05-30T23:15:00"
   },
   {
      "text": "RT @KVanderhoydonk: Open Banking:The future of banking https://t.co/IET3B47wTp #future #openbanking #banking",
      "post_date": "2019-05-30T23:03:00"
   },
   {
      "text": "RT @leimer: Banking is not the same in every locality, but we are moving more and more toward that global reality.  Come to my presentation…",
      "post_date": "2019-05-30T22:58:00"
   },
   {
      "text": "The security challenges faced by #openbanking\n\n#financialservices #tech #banking\n\n@sbmeunier @leimer @JPNicols… https://t.co/yiDeDkzSqw",
      "post_date": "2019-05-30T22:55:00"
   },
   {
      "text": "RT @technisys_com: Today our CMO @germanpuglieseb presented a speech on #OpenBanking at @fintechamericas , in Miami. German talked about ho…",
      "post_date": "2019-05-30T22:52:00"
   },
   {
      "text": "RT @FabrickPlatform: With #Fabrick at Amsterdam, there will be partner companies such as #Axerve, @viperamobile @FintechDistrict and @Hype_…",
      "post_date": "2019-05-30T22:48:00"
   },
   {
      "text": "RT @leimer: Banking is not the same in every locality, but we are moving more and more toward that global reality.  Come to my presentation…",
      "post_date": "2019-05-30T22:31:00"
   },
   {
      "text": "Just 4 days left - meet me at #Money2020 and talk about #OpenBanking opportunities for banks and other players https://t.co/j7pAxL5vOD",
      "post_date": "2019-05-30T22:27:00"
   },
   {
      "text": "RT @railsbank: Check out our founder @nigelverdon talk through #openbanking and about the global vision of @Railsbank - solving any financi…",
      "post_date": "2019-05-30T22:18:00"
   },
   {
      "text": "Great article Liz Maguire from ANZ You remind us that lost in all the #opendata ‘noise’, is the fact that customers… https://t.co/npGxDQAYwK",
      "post_date": "2019-05-30T22:13:00"
   },
   {
      "text": "RT @leimer: Banking is not the same in every locality, but we are moving more and more toward that global reality.  Come to my presentation…",
      "post_date": "2019-05-30T22:09:00"
   },
   {
      "text": "RT @leimer: Banking is not the same in every locality, but we are moving more and more toward that global reality.  Come to my presentation…",
      "post_date": "2019-05-30T22:08:00"
   },
   {
      "text": "Banking is not the same in every locality, but we are moving more and more toward that global reality.  Come to my… https://t.co/9Ob2GNrF8K",
      "post_date": "2019-05-30T22:02:00"
   },
   {
      "text": "Watch our CEO Carlos Figueredo’s panel discussion about #openbanking at the BBVA Open Summit in Mexico City now.… https://t.co/18t6ZAGgAt",
      "post_date": "2019-05-30T22:00:00"
   },
   {
      "text": "Watch the live stream of my panel discussion with @lopezmoctezuma right now about #openbanking and #innovation. https://t.co/qEPpn4uAiQ",
      "post_date": "2019-05-30T21:55:00"
   },
   {
      "text": "My thanks to Mark Zelmer, former @OSFICanada Deputy Superintendent for joining me on FRT. Mark’s a great forward th… https://t.co/FKyu4MBydr",
      "post_date": "2019-05-30T21:31:00"
   },
   {
      "text": "Paving the path forward for Canadian open banking - The Globe and Mail - https://t.co/MEDN3O9eFN #openbanking #banking #digital",
      "post_date": "2019-05-30T21:18:00"
   },
   {
      "text": "Master, partner, spin off or stop\nMastering core activities and partnering for non-core activities is the key to th… https://t.co/EPjEORgb08",
      "post_date": "2019-05-30T21:16:00"
   },
   {
      "text": ".@Payments_NZ Limited has launched its new #API Centre designed to give startups &amp; smaller companies a shot at ente… https://t.co/jEQmSXqCcZ",
      "post_date": "2019-05-30T21:10:00"
   },
   {
      "text": "🎧 New FRT podcast episode explores the future of #OpenBanking and its potential impact on fiduciary duties and bank… https://t.co/UTaKPMiOGR",
      "post_date": "2019-05-30T20:55:00"
   },
   {
      "text": "RT @LouiseHBeaumont: Heading to @money2020 EU shortly - you have four golden opportunities to come and heckle me\n\nhttps://t.co/SglxIN3l2h…",
      "post_date": "2019-05-30T20:43:00"
   },
   {
      "text": "RT @FabrickPlatform: With #Fabrick at Amsterdam, there will be partner companies such as #Axerve, @viperamobile @FintechDistrict and @Hype_…",
      "post_date": "2019-05-30T20:13:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-05-30T20:06:00"
   },
   {
      "text": "RT @RawdonAdams: Correspondents removing services should be a catalyst for increased #OpenBanking activity in this region. \n\nhttps://t.co/W…",
      "post_date": "2019-05-30T19:51:00"
   },
   {
      "text": "HSBC slammed by startup for Open Banking uptime of just 20% - AltFi - https://t.co/Bu2EP6RWst #openbanking #banking #digital",
      "post_date": "2019-05-30T19:48:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T19:42:00"
   },
   {
      "text": "RT @pelican_ai: What are the opportunities and challenges of #OpenBanking? Take a look at our article on how #API interoperability can help…",
      "post_date": "2019-05-30T19:39:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-05-30T19:36:00"
   },
   {
      "text": "International Banking Innovation Forum - Biometric Update - https://t.co/lcv8JtWOWi #openbanking #banking #digital",
      "post_date": "2019-05-30T19:33:00"
   },
   {
      "text": "RBC Ventures aims to remodel the home renovation experience with the acquisition of Smart Reno - Canada NewsWire -… https://t.co/M8StoZ14HQ",
      "post_date": "2019-05-30T19:33:00"
   },
   {
      "text": "Reflow goes live with FlowPay - Finextra - https://t.co/u52yY3mgk1 #openbanking #banking #digital",
      "post_date": "2019-05-30T19:33:00"
   },
   {
      "text": "NBB forges ahead with open banking in Bahrain - Fintech Futures - https://t.co/uEA72Cx0sS #openbanking #banking #digital",
      "post_date": "2019-05-30T19:33:00"
   },
   {
      "text": "RT @Epiphany_Srl: Still not ready for the next #PSD2 deadlines or willing to embrace #OpenBanking? \nEpiphany can help you! Join us at #EBAD…",
      "post_date": "2019-05-30T19:14:00"
   },
   {
      "text": "Swedish fintech startup Open Payments raises €1.2 million - https://t.co/rLnSZxg5GC - https://t.co/EbiicIMSUl #openbanking #banking #digital",
      "post_date": "2019-05-30T19:03:00"
   },
   {
      "text": "Cornèr and NDGIT open direct developer portal for third party... - Finextra - https://t.co/tsUVcPPnxW #openbanking #banking #digital",
      "post_date": "2019-05-30T18:48:00"
   },
   {
      "text": "2018-2025 Open Banking Report On Global And United States Market, Status And Forecast, By Players, Types And Applic… https://t.co/Es8hkehSYQ",
      "post_date": "2019-05-30T18:48:00"
   },
   {
      "text": "RT @raminwright: \"Canadians should be in control of their data.\" The #DataForum is highlighting Canada's push towards Data Portability and…",
      "post_date": "2019-05-30T18:41:00"
   },
   {
      "text": "RT @richsmolencfo: A Silicon Valley fintech is looking to supercharge access to financial data for UK startups\nhttps://t.co/DEj00YyR1f\n#fin…",
      "post_date": "2019-05-30T18:38:00"
   },
   {
      "text": "A Silicon Valley fintech is looking to supercharge access to financial data for UK startups\nhttps://t.co/DEj00YyR1f… https://t.co/8P5dC4ALFX",
      "post_date": "2019-05-30T18:37:00"
   },
   {
      "text": "list of open banking API aggregators grows by the month. The winner will provide tools to enable the creation of mo… https://t.co/Q0yTZ8OkkK",
      "post_date": "2019-05-30T18:18:00"
   },
   {
      "text": "\"Canadians should be in control of their data.\" The #DataForum is highlighting Canada's push towards Data Portabili… https://t.co/DcPO8dCDAE",
      "post_date": "2019-05-30T18:17:00"
   },
   {
      "text": "It begins with #FAPI and ends with global #OpenBanking standards. We're excited to work with @OpenID Foundation to… https://t.co/SPOgmZ8kkN",
      "post_date": "2019-05-30T18:14:00"
   },
   {
      "text": "RT @Overledgering: From June to December #2019 world of #blockchain #interoperability will boil with a volcanic kind of action in #news abo…",
      "post_date": "2019-05-30T18:10:00"
   },
   {
      "text": "From June to December #2019 world of #blockchain #interoperability will boil with a volcanic kind of action in… https://t.co/7cVXili5Zl",
      "post_date": "2019-05-30T18:06:00"
   },
   {
      "text": "RT @SentenialSEPA: What impact will Open Banking and Instant Payments have on your payment strategy? Meet us at Money 20/20 to discuss your…",
      "post_date": "2019-05-30T18:03:00"
   },
   {
      "text": "Finastra sees small banks as a way to catch up in U.S. core tech - American Banker - https://t.co/gzri2LGNmR #openbanking #banking #digital",
      "post_date": "2019-05-30T18:03:00"
   },
   {
      "text": "Finding new alternative data sources to augment models\nUsage of alternative #data sets\n\n https://t.co/PCGbUTOVy5… https://t.co/ARhOlLoovY",
      "post_date": "2019-05-30T17:45:00"
   },
   {
      "text": "Where do you see your financial institution? According to @EYnews Sara Elinson, future bank business models will be… https://t.co/giOsrfZKVk",
      "post_date": "2019-05-30T17:22:00"
   },
   {
      "text": "RT @maupanas: Open banking: putting consumers in the driver's seat #Digital #openbanking #banking  https://t.co/gk72YR5pP1",
      "post_date": "2019-05-30T17:17:00"
   },
   {
      "text": "RT @TACD_Consumers: We still have a few places left at #TACDFORUM2019 in Washington D.C. on 4 June. We'll be discussing consumer protection…",
      "post_date": "2019-05-30T17:09:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] What is payment tokenization?\n\nhttps://t.co/pgNbua8EAx\n\n#Innovation #Fintech #Banking #OpenBanking #APIs…",
      "post_date": "2019-05-30T17:08:00"
   },
   {
      "text": "RT @decodingloyalty: Great to have our team providing fresh new insights at our latest #openbanking debrief here at Motif. To find out more…",
      "post_date": "2019-05-30T17:02:00"
   },
   {
      "text": "RT @ttavlas: FindBiometrics to Report Live From Money20/20 Europe 2019 - findBIOMETRICS - https://t.co/mwH1Q1QnKb #openbanking #banking #di…",
      "post_date": "2019-05-30T17:01:00"
   },
   {
      "text": "RT @LouiseHBeaumont: Heading to @money2020 EU shortly - you have four golden opportunities to come and heckle me… https://t.co/cYHPt73RLD",
      "post_date": "2019-05-30T16:57:00"
   },
   {
      "text": "63% said that their organization needs more than 12 months to offer Open Banking Services and 45% said that their g… https://t.co/VcW5QnhnFY",
      "post_date": "2019-05-30T16:56:00"
   },
   {
      "text": "In the end, he asked some questions to the audience about open banking strategies. According to the audience, the f… https://t.co/j2N5YhAvJe",
      "post_date": "2019-05-30T16:54:00"
   },
   {
      "text": "RT @Epiphany_Srl: Still not ready for the next #PSD2 deadlines or willing to embrace #OpenBanking? \nEpiphany can help you! Join us at #EBAD…",
      "post_date": "2019-05-30T16:50:00"
   },
   {
      "text": "RT @LouiseHBeaumont: UK lenders make strides with #Open Banking, but #fintechs still frustrated....\n\nhttps://t.co/u7iRtJDBdJ\n\n@yapily @Soph…",
      "post_date": "2019-05-30T16:50:00"
   },
   {
      "text": "Heading to @money2020 EU shortly - you have four golden opportunities to come and heckle me… https://t.co/ZrSFE13cVg",
      "post_date": "2019-05-30T16:49:00"
   },
   {
      "text": "RT @BlackieMcDonald: The introduction of #openbanking on 1st July will undoubtedly shake up the market. @Fiserv shares how open banking wil…",
      "post_date": "2019-05-30T16:48:00"
   },
   {
      "text": "Today our CMO @germanpuglieseb presented a speech on #OpenBanking at @fintechamericas , in Miami. German talked abo… https://t.co/EHyLxcMfDc",
      "post_date": "2019-05-30T16:44:00"
   },
   {
      "text": "Are you joining the #EBADAY event in Stockholm? We are! \n\n#openbanking #psd2 https://t.co/M6Fvuu4dvQ",
      "post_date": "2019-05-30T16:36:00"
   },
   {
      "text": "Excellent advice provided by @WhichUK if you are experiencing online banking issues, Monzo being an example today.… https://t.co/bXMwHcnugO",
      "post_date": "2019-05-30T16:34:00"
   },
   {
      "text": "NAB launches online fintech collaboration portal - Finance - Strategy - iTnews - https://t.co/9wFCvPq9Jp #openbanking #banking #digital",
      "post_date": "2019-05-30T16:28:00"
   },
   {
      "text": "Although the size, scale and timing of the impact are uncertain, the potential for major disruption is clear. How w… https://t.co/NwGNKo7ZGY",
      "post_date": "2019-05-30T16:26:00"
   },
   {
      "text": "Feature: Big ambitions - what's stopping the world’s technology giants from becoming fully-fledged banks?  #banks… https://t.co/79ts8B5LC1",
      "post_date": "2019-05-30T16:15:00"
   },
   {
      "text": "With the emergence of #openbanking, it’s clear that the bank branch is far from dead. Reimagining the #bankbranch d… https://t.co/siZmCe3kmG",
      "post_date": "2019-05-30T16:12:00"
   },
   {
      "text": "RT @BlackieMcDonald: The introduction of #openbanking on 1st July will undoubtedly shake up the market. @Fiserv shares how open banking wil…",
      "post_date": "2019-05-30T16:03:00"
   },
   {
      "text": "RT @Epiphany_Srl: Still not ready for the next #PSD2 deadlines or willing to embrace #OpenBanking? \nEpiphany can help you! Join us at #EBAD…",
      "post_date": "2019-05-30T16:02:00"
   },
   {
      "text": "RT @Unisys_FS: Excited to be part of #FintechAmericas2019. \"It's not just about being innovative, but managing innovation,\" said Ray Ruga,…",
      "post_date": "2019-05-30T16:01:00"
   },
   {
      "text": "RT @Epiphany_Srl: Still not ready for the next #PSD2 deadlines or willing to embrace #OpenBanking? \nEpiphany can help you! Join us at #EBAD…",
      "post_date": "2019-05-30T16:01:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-30T16:01:00"
   },
   {
      "text": "Defending against disruption from open banking |   https://t.co/xXSZekAKI6 #banking #OpenBanking",
      "post_date": "2019-05-30T16:00:00"
   },
   {
      "text": "RT @unisyscorp: Excited to be part of #FintechAmericas2019. \"It's not just about being innovative, but managing innovation,\" said Ray Ruga,…",
      "post_date": "2019-05-30T15:59:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-05-30T15:57:00"
   },
   {
      "text": "\"We did a survey &amp; 85% of CIOs reported their BIGGEST challenge to digital transformation efforts is SECURITY,\" say… https://t.co/orTETOxaiB",
      "post_date": "2019-05-30T15:55:00"
   },
   {
      "text": "FindBiometrics to Report Live From Money20/20 Europe 2019 - findBIOMETRICS - https://t.co/mwH1Q1QnKb #openbanking #banking #digital",
      "post_date": "2019-05-30T15:53:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] What is payment tokenization?\n\nhttps://t.co/pgNbua8EAx\n\n#Innovation #Fintech #Banking #OpenBanking #APIs…",
      "post_date": "2019-05-30T15:52:00"
   },
   {
      "text": "UK lenders make strides with #Open Banking, but #fintechs still frustrated....\n\nhttps://t.co/u7iRtJDBdJ\n\n@yapily… https://t.co/EyO4KrKV0C",
      "post_date": "2019-05-30T15:52:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] What is payment tokenization?\n\nhttps://t.co/pgNbua8EAx\n\n#Innovation #Fintech #Banking #OpenBanking #APIs…",
      "post_date": "2019-05-30T15:51:00"
   },
   {
      "text": "RT @Unisys_FS: \"We did a survey &amp; 85% of CIOs reported their BIGGEST challenge to digital transformation efforts is SECURITY,\" says David P…",
      "post_date": "2019-05-30T15:51:00"
   },
   {
      "text": "Excited to be part of #FintechAmericas2019. \"It's not just about being innovative, but managing innovation,\" said R… https://t.co/znzq1hB5dQ",
      "post_date": "2019-05-30T15:44:00"
   },
   {
      "text": "RT @MekebebTesfaye: #OpenBanking startup @Plaid officially expands to the UK.\n\nMy thoughts on why the country is a natural destination for…",
      "post_date": "2019-05-30T15:40:00"
   },
   {
      "text": "\"We did a survey &amp; 85% of CIOs reported their BIGGEST challenge to digital transformation efforts is SECURITY,\" say… https://t.co/oEotvjOfM5",
      "post_date": "2019-05-30T15:39:00"
   },
   {
      "text": "Still not ready for the next #PSD2 deadlines or willing to embrace #OpenBanking? \nEpiphany can help you! Join us at… https://t.co/JwCYm0Go2l",
      "post_date": "2019-05-30T15:34:00"
   },
   {
      "text": "RT @EquinixUK: Great blog from @maurofr with a round-up of our webinar on #openbanking with @finextra.  He makes some further interesting c…",
      "post_date": "2019-05-30T15:32:00"
   },
   {
      "text": "Great blog from @maurofr with a round-up of our webinar on #openbanking with @finextra.  He makes some further inte… https://t.co/sD5AZzGOnE",
      "post_date": "2019-05-30T15:30:00"
   },
   {
      "text": "[#Infographic] What is payment tokenization?\n\nhttps://t.co/pgNbua8EAx\n\n#Innovation #Fintech #Banking #OpenBanking… https://t.co/CUsJ21UfUq",
      "post_date": "2019-05-30T15:30:00"
   },
   {
      "text": "Excited to be part of #FintechAmericas2019. \"It's not just about being innovative, but managing innovation,\" said R… https://t.co/ZuSS8nn424",
      "post_date": "2019-05-30T15:25:00"
   },
   {
      "text": "RT @neirajones: UK #OpenBanking Consumer #Awareness Remains Low \nhttps://t.co/dWOJrpZOh2 \n#markets #banking #fintech https://t.co/mwctsAbrgG",
      "post_date": "2019-05-30T15:00:00"
   },
   {
      "text": "What are the opportunities and challenges of #OpenBanking? Take a look at our article on how #API interoperability… https://t.co/SKNkGG6djQ",
      "post_date": "2019-05-30T15:00:00"
   },
   {
      "text": "RT @creditkudos: Can banks technology move fast enough? Our Head of Strategy tackled this subject in the latest white paper from @CREALOGIX…",
      "post_date": "2019-05-30T14:59:00"
   },
   {
      "text": "RT @InnoLead: .@innolead’s new map of Top 25 Corporate #Innovation Hubs in #London features @FinTechLabLDN, run by @accenture. The accelera…",
      "post_date": "2019-05-30T14:57:00"
   },
   {
      "text": "RT @LexisUK_FinServ: Read @LexisPSL #financialservices newsletter\n\nhttps://t.co/dKirM13qFQ  \n\n#Brexit #Banking #fintech #MiFID #Whistleblow…",
      "post_date": "2019-05-30T14:49:00"
   },
   {
      "text": "Read @LexisPSL #financialservices newsletter\n\nhttps://t.co/dKirM13qFQ  \n\n#Brexit #Banking #fintech #MiFID… https://t.co/6t8ZwHA184",
      "post_date": "2019-05-30T14:38:00"
   },
   {
      "text": "NatWest becomes first UK partner for open banking platform Tink - Fintech Futures - https://t.co/8QLGuPr4QB #openbanking #banking #digital",
      "post_date": "2019-05-30T14:28:00"
   },
   {
      "text": "US open banking fintech unicorn Plaid has launched in the UK - Business Insider - https://t.co/OJYC6CUuVM #openbanking #banking #digital",
      "post_date": "2019-05-30T14:28:00"
   },
   {
      "text": "Soon you will be able to access the LIVE areas of the ASPSPs that have chosen #Fabrick as their #PSD2 Gateway. If y… https://t.co/x3xRG5d4e8",
      "post_date": "2019-05-30T14:20:00"
   },
   {
      "text": "[#Disruption] How Payment APIs Can Deliver Personalized Services\n\nhttps://t.co/CPxatz4HCs\n\n#Innovation #Fintech… https://t.co/14JzJ8gBuq",
      "post_date": "2019-05-30T14:20:00"
   },
   {
      "text": "Discover how #OpenBanking enables financial institutions create greater collaboration to offer tailored services fo… https://t.co/EN8uSCTxQ2",
      "post_date": "2019-05-30T14:12:00"
   },
   {
      "text": "#OpenBanking startup @Plaid officially expands to the UK.\n\nMy thoughts on why the country is a natural destination… https://t.co/OKRZ92GFtY",
      "post_date": "2019-05-30T14:11:00"
   },
   {
      "text": "With open banking plan, Brazil takes aim at big banks \n#Brazil\n#fintech\n#openbanking\n\nhttps://t.co/idzq59UNUF https://t.co/qgaEVs1mx3",
      "post_date": "2019-05-30T14:10:00"
   },
   {
      "text": "The Monetization of Open Banking Report 2019 - Business Insider - Business Insider - https://t.co/W1d4lb3aWd #openbanking #banking #digital",
      "post_date": "2019-05-30T14:08:00"
   },
   {
      "text": ".@RBI allows banks to use #Aadhaar for #eKYC https://t.co/pM0os72dKv  #identification #openbanking #authentication",
      "post_date": "2019-05-30T13:56:00"
   },
   {
      "text": "Is the adoption of #OpenBanking behind the anticipated schedule? | @FinTech_Futures #FinTech https://t.co/zG5iEMVaFC",
      "post_date": "2019-05-30T13:49:00"
   },
   {
      "text": "RT @JDCanDigital: June 4th @FDATAnorth in collaboration w/ @UKinCanada  is holding a dicussion on the benefits of #openbanking in Ottawa. L…",
      "post_date": "2019-05-30T13:47:00"
   },
   {
      "text": "“Emerging technologies and the pace of innovation are driving changes throughout the banking industry at an unprece… https://t.co/psWoTmYZSo",
      "post_date": "2019-05-30T13:45:00"
   },
   {
      "text": "#European #FIs see #OpenBanking as the biggest current threat \n\n#banking #finserv #tech #innovation #fintech… https://t.co/ZEDrYGzKjg",
      "post_date": "2019-05-30T13:41:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T13:38:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-05-30T13:33:00"
   },
   {
      "text": "RT @SunTecGroup: Can Digitalisation and Open banking join forces to change your banking experience? https://t.co/6jlOde6WTw  #OpenBanking #…",
      "post_date": "2019-05-30T13:31:00"
   },
   {
      "text": "RT @decodingloyalty: Looking to the future direction of #openbanking apps. We've been running an ongoing syndicate to provide #innovation g…",
      "post_date": "2019-05-30T13:31:00"
   },
   {
      "text": "RT @decodingloyalty: We ran a week long community speaking to existing users of #openbanking apps, highly engaged and very insightful. Grea…",
      "post_date": "2019-05-30T13:30:00"
   },
   {
      "text": "In the battle of banks vs. fintechs, the customer loses. Our latest blog helps you make sense of open banking and g… https://t.co/oGijCB3dmK",
      "post_date": "2019-05-30T13:30:00"
   },
   {
      "text": "PSD2 as the driving force behind open banking in Europe, what will be driving force in N.America? To all my FS coll… https://t.co/MQpNLYSdSF",
      "post_date": "2019-05-30T13:25:00"
   },
   {
      "text": "RT @twenty7tec: #OpenBanking is just one of many developments we are keeping under wraps, for now. Read what our Head of Lender Relationshi…",
      "post_date": "2019-05-30T13:15:00"
   },
   {
      "text": "Pivotal CIO sees big promise for IT industry with open banking initiative\nhttps://t.co/nB5HCh6mSq\n@pivotal… https://t.co/d30MMGRbdA",
      "post_date": "2019-05-30T13:08:00"
   },
   {
      "text": "Twenty7Tec keeping Open Banking process on hold until lenders ready - Mortgage Solutions - https://t.co/JpXNUbWRjF… https://t.co/Ix8BYin0EC",
      "post_date": "2019-05-30T13:08:00"
   },
   {
      "text": "RT @MadTech_News: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech #technology #Fi…",
      "post_date": "2019-05-30T13:03:00"
   },
   {
      "text": "RT @technisys_com: This morning, our CMO @germanpuglieseb  talk at @fintechamericas , in Miami about #OpenBanking. Is LATAM Ready for the R…",
      "post_date": "2019-05-30T12:57:00"
   },
   {
      "text": "The cost of #openbanking in the UK: £81m and counting https://t.co/Xm9GfFFCqe via @FinancialNews",
      "post_date": "2019-05-30T12:56:00"
   },
   {
      "text": "Check out our founder @nigelverdon talk through #openbanking and about the global vision of @Railsbank - solving an… https://t.co/hOdQuj9h2h",
      "post_date": "2019-05-30T12:52:00"
   },
   {
      "text": "RT @saltedge: @saltedge's CEO, Dmitrii Barbasura, describes ASPSPs’ main concerns related to the implementation of TPP identification and e…",
      "post_date": "2019-05-30T12:52:00"
   },
   {
      "text": "What will the next wave of #OpenBanking look like? - from Gunnar Berger @Nordea and @fintechanders @FinastraFS #APIs https://t.co/bn2E7jguYU",
      "post_date": "2019-05-30T12:49:00"
   },
   {
      "text": "Will today’s retail banks become the pipes to more user-friendly PFM apps? https://t.co/jz6u9RRPAs\n\n#PFM #banking… https://t.co/81LNYqpsbY",
      "post_date": "2019-05-30T12:46:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-05-30T12:38:00"
   },
   {
      "text": "Financial institutions conflicted but cautiously optimistic about open banking opportunity - Bdaily -… https://t.co/DZmCVFMXoI",
      "post_date": "2019-05-30T12:38:00"
   },
   {
      "text": "Open banking aims to create competition in payments space - RNZ - https://t.co/gYUYzMhNDp #openbanking #banking #digital",
      "post_date": "2019-05-30T12:38:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next week…",
      "post_date": "2019-05-30T12:37:00"
   },
   {
      "text": "RT @bahrainedb: One of the leading Islamic banks in Bahrain @khcbonline has officially announced its readiness to adopt #OpenBanking servic…",
      "post_date": "2019-05-30T12:34:00"
   },
   {
      "text": "Let's talk #innovation #technology #openbanking #digitalbanking and more! We're getting ready for #Money2020EU next… https://t.co/anblFvZvI1",
      "post_date": "2019-05-30T12:33:00"
   },
   {
      "text": "RT @bahrainedb: One of the leading Islamic banks in Bahrain @khcbonline has officially announced its readiness to adopt #OpenBanking servic…",
      "post_date": "2019-05-30T12:32:00"
   },
   {
      "text": "RT @technisys_com: This morning, our CMO @germanpuglieseb  talk at @fintechamericas , in Miami about #OpenBanking. Is LATAM Ready for the R…",
      "post_date": "2019-05-30T12:32:00"
   },
   {
      "text": "This morning, our CMO @germanpuglieseb  talk at @fintechamericas , in Miami about #OpenBanking. Is LATAM Ready for… https://t.co/awGmdTolyz",
      "post_date": "2019-05-30T12:29:00"
   },
   {
      "text": "Yogesh Mathur of @Gemalto looks at #OpenBanking and putting #consumers in the driver’s seat ~… https://t.co/JrtRh0IM9W",
      "post_date": "2019-05-30T12:26:00"
   },
   {
      "text": "@saltedge's CEO, Dmitrii Barbasura, describes ASPSPs’ main concerns related to the implementation of TPP identifica… https://t.co/A4tn2Vh7HH",
      "post_date": "2019-05-30T12:24:00"
   },
   {
      "text": "RT @Global_Kinetic: A digital effect? Children now experiencing significant difficulties in handling payments https://t.co/yIpyoIgEC8 #digi…",
      "post_date": "2019-05-30T12:23:00"
   },
   {
      "text": "Brokers are waiting for APIs and not investing in their businesses – Mojo Mortgages - Mortgage Solutions -… https://t.co/DYlATAjgB2",
      "post_date": "2019-05-30T12:23:00"
   },
   {
      "text": "RT @FinTechFeed: “Emerging technologies and the pace of innovation are driving changes throughout the banking industry at an unprecedented…",
      "post_date": "2019-05-30T12:17:00"
   },
   {
      "text": "RT @bahrainedb: One of the leading Islamic banks in Bahrain @khcbonline has officially announced its readiness to adopt #OpenBanking servic…",
      "post_date": "2019-05-30T12:17:00"
   },
   {
      "text": "One of the leading Islamic banks in Bahrain @khcbonline has officially announced its readiness to adopt… https://t.co/gdG2BdWBsY",
      "post_date": "2019-05-30T12:16:00"
   },
   {
      "text": "RT @FSCom1: Are you going to Money20/20? Pop by our Invest NI Europe Stand R34, Hall 7 or contact us directly to set up a meeting to discus…",
      "post_date": "2019-05-30T12:13:00"
   },
   {
      "text": "RT @WFSULLIVAN3: London #fintech Yapily raises $5.4M to offer a single #API to connect to banks via @maxjdm   #OpenBanking https://t.co/Y6J…",
      "post_date": "2019-05-30T12:07:00"
   },
   {
      "text": "RT @FinTechFeed: “Emerging technologies and the pace of innovation are driving changes throughout the banking industry at an unprecedented…",
      "post_date": "2019-05-30T12:04:00"
   },
   {
      "text": "“Emerging technologies and the pace of innovation are driving changes throughout the banking industry at an unprece… https://t.co/p112utvxOn",
      "post_date": "2019-05-30T12:03:00"
   },
   {
      "text": "RT @SunTecGroup: Can Digitalisation and Open banking join forces to change your banking experience? https://t.co/6jlOde6WTw  #OpenBanking #…",
      "post_date": "2019-05-30T12:03:00"
   },
   {
      "text": "Don’t be a stranger! Come visit our team at stand K53 at @money2020 Europe next week &amp; discuss #Blockchain… https://t.co/YjxwH3gRgn",
      "post_date": "2019-05-30T12:00:00"
   },
   {
      "text": "Open banking in Aotearoa - BlueNotes - https://t.co/Wyf8bGnyRt #openbanking #banking #digital",
      "post_date": "2019-05-30T11:58:00"
   },
   {
      "text": "RT @ieDigitalFS: 'Emerging technologies and the pace of innovation are driving changes throughout the banking industry at an unprecedented…",
      "post_date": "2019-05-30T11:52:00"
   },
   {
      "text": "Open Payments targets Nordic and European markets with €1.2m seed round - Fintech Futures - https://t.co/BfcenP761I… https://t.co/hBzmdm3f0i",
      "post_date": "2019-05-30T11:48:00"
   },
   {
      "text": "RT @SunTecGroup: Can Digitalisation and Open banking join forces to change your banking experience? https://t.co/6jlOde6WTw  #OpenBanking #…",
      "post_date": "2019-05-30T11:45:00"
   },
   {
      "text": "A digital effect? Children now experiencing significant difficulties in handling payments https://t.co/yIpyoIgEC8… https://t.co/ul3jMMQCv1",
      "post_date": "2019-05-30T11:45:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T11:38:00"
   },
   {
      "text": "RT @FabrickPlatform: With #Fabrick at Amsterdam, there will be partner companies such as #Axerve, @viperamobile @FintechDistrict and @Hype_…",
      "post_date": "2019-05-30T11:37:00"
   },
   {
      "text": "RT @FabrickPlatform: #openbanking news by #Fabrick \n🔷Let's talk: Disruption🔷 ⁦@DynamicBusiness  \n\n#APIeconomy #fintech ⁩  https://t.co/uQMk…",
      "post_date": "2019-05-30T11:37:00"
   },
   {
      "text": "RT @WFSULLIVAN3: London #fintech Yapily raises $5.4M to offer a single #API to connect to banks via @maxjdm   #OpenBanking https://t.co/Y6J…",
      "post_date": "2019-05-30T11:37:00"
   },
   {
      "text": "Can Digitalisation and Open banking join forces to change your banking experience? https://t.co/6jlOde6WTw… https://t.co/mBQ7bsZdnF",
      "post_date": "2019-05-30T11:36:00"
   },
   {
      "text": "RT @decodingloyalty: We ran a week long community speaking to existing users of #openbanking apps, highly engaged and very insightful. Grea…",
      "post_date": "2019-05-30T11:34:00"
   },
   {
      "text": "London #fintech Yapily raises $5.4M to offer a single #API to connect to banks via @maxjdm   #OpenBanking https://t.co/Y6JydFtoGS",
      "post_date": "2019-05-30T11:30:00"
   },
   {
      "text": "Trepidation about #OpenBanking rules persist among incumbents #fintech #Betterworth https://t.co/0eRQEz6PvU",
      "post_date": "2019-05-30T11:29:00"
   },
   {
      "text": "Build a Startup with Lisbon's Top Investors and Founders. FI Lisbon Applications Open Now\n\n#fintechPortugal… https://t.co/SskCfmTpEI",
      "post_date": "2019-05-30T11:29:00"
   },
   {
      "text": "Indeed #OpenBanking technologies are reshaping international banking. The upside is efficiency, convenience and cos… https://t.co/tT1ps0sqN7",
      "post_date": "2019-05-30T11:28:00"
   },
   {
      "text": "With the emergence of #openbanking, it’s clear that the bank branch is far from dead. Learn more about reimagining… https://t.co/138sSIfy8v",
      "post_date": "2019-05-30T11:28:00"
   },
   {
      "text": "Build a Startup with Lisbon's Top Investors and Founders. FI Lisbon Applications Open Now\n\n#fintechPortugal… https://t.co/YD5M90bCmj",
      "post_date": "2019-05-30T11:28:00"
   },
   {
      "text": "We ran a week long community speaking to existing users of #openbanking apps, highly engaged and very insightful. G… https://t.co/sPnsXHNGBj",
      "post_date": "2019-05-30T11:25:00"
   },
   {
      "text": "Great to have the opportunity to talk through #openbanking  and about the global vision of Railsbank - solving any… https://t.co/rCkCn1g3sY",
      "post_date": "2019-05-30T11:20:00"
   },
   {
      "text": "RT @Capgemini: Learn how our #OpenBanking solution hosted on the @awscloud helps banks go beyond traditional banking and become a bank of t…",
      "post_date": "2019-05-30T11:18:00"
   },
   {
      "text": "Open banking aims to create competition in payments space - RNZ - https://t.co/bsfZb9NDcy #openbanking #banking #digital",
      "post_date": "2019-05-30T11:18:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T11:16:00"
   },
   {
      "text": "RT @decodingloyalty: Great to have our team providing fresh new insights at our latest #openbanking debrief here at Motif. To find out more…",
      "post_date": "2019-05-30T11:15:00"
   },
   {
      "text": "RT @pingidentity: Watch an illustration of the backend workflows of #OpenBanking in our whiteboard Youtube playlist which includes dynamic…",
      "post_date": "2019-05-30T11:11:00"
   },
   {
      "text": "Looking to the future direction of #openbanking apps. We've been running an ongoing syndicate to provide… https://t.co/j0RtYUpq2K",
      "post_date": "2019-05-30T11:10:00"
   },
   {
      "text": "PSD2 And Open Banking market with top key players Accern Corporation, JackHenry and Associates, D3 Banking, Demyst… https://t.co/SBZGWcmgWj",
      "post_date": "2019-05-30T11:08:00"
   },
   {
      "text": "London fintech Yapily latest to benefit from Open Banking goldrush - Finextra - https://t.co/R9AtgpsotZ #openbanking #banking #digital",
      "post_date": "2019-05-30T11:08:00"
   },
   {
      "text": "RT @decodingloyalty: Great to have our team providing fresh new insights at our latest #openbanking debrief here at Motif. To find out more…",
      "post_date": "2019-05-30T11:06:00"
   },
   {
      "text": "#Trends2019: Faced with the possibility of consolidation, #banks that adopt #OpenBanking early will end up on the w… https://t.co/WciJS7tGYg",
      "post_date": "2019-05-30T11:03:00"
   },
   {
      "text": "RT @openpaymentseu: Join us in shaping the Open Banking future and create state-of-the-art Developer Experience (DX)?\n\nWe are looking for s…",
      "post_date": "2019-05-30T11:01:00"
   },
   {
      "text": "Finacle: #Trends2019: Faced with the possibility of consolidation, #banks that adopt #OpenBanking early will end up… https://t.co/IRtu7rGzaW",
      "post_date": "2019-05-30T11:00:00"
   },
   {
      "text": "#Trends2019: Faced with the possibility of consolidation, #banks that adopt #OpenBanking early will end up on the w… https://t.co/ssRABfrjRm",
      "post_date": "2019-05-30T10:59:00"
   },
   {
      "text": "#OpenBanking is just one of many developments we are keeping under wraps, for now. Read what our Head of Lender Rel… https://t.co/ldYn9Mcvrq",
      "post_date": "2019-05-30T10:57:00"
   },
   {
      "text": "RT @ieDigitalFS: 'Emerging technologies and the pace of innovation are driving changes throughout the banking indus… https://t.co/phyd15HOh1",
      "post_date": "2019-05-30T10:56:00"
   },
   {
      "text": "@decodingloyalty Exciting stuff! Love my #monzo #openbanking (and excellent artwork on show by our own @JoniBelaruski too!)",
      "post_date": "2019-05-30T10:52:00"
   },
   {
      "text": "RT @decodingloyalty: Great to have our team providing fresh new insights at our latest #openbanking debrief here at Motif. To find out more…",
      "post_date": "2019-05-30T10:51:00"
   },
   {
      "text": "RT @ieDigitalFS: 'Emerging technologies and the pace of innovation are driving changes throughout the banking industry at an unprecedented…",
      "post_date": "2019-05-30T10:50:00"
   },
   {
      "text": "RT @decodingloyalty: Great to have our team providing fresh new insights at our latest #openbanking debrief here at Motif. To find out more…",
      "post_date": "2019-05-30T10:50:00"
   },
   {
      "text": "'Emerging technologies and the pace of innovation are driving changes throughout the banking industry at an unprece… https://t.co/0V4YQRxjP4",
      "post_date": "2019-05-30T10:50:00"
   },
   {
      "text": "Seems a lot of banks are still worried about the open banking (PSD2) world we are about to enter in September....… https://t.co/j3hz3297bp",
      "post_date": "2019-05-30T10:48:00"
   },
   {
      "text": "Great to have our team providing fresh new insights at our latest #openbanking debrief here at Motif. To find out m… https://t.co/y9kw7QYwBr",
      "post_date": "2019-05-30T10:46:00"
   },
   {
      "text": "The theme of this article is ‘opportunity’. There is an opportunity for both the financial services industry and fo… https://t.co/m39PPHWxi4",
      "post_date": "2019-05-30T10:45:00"
   },
   {
      "text": "#RT @TechMarketView: #OpenBanking has already been a catalyst for significant change. The genie is firmly out of th… https://t.co/JQIEOOeu49",
      "post_date": "2019-05-30T10:31:00"
   },
   {
      "text": "What impact will Open Banking and Instant Payments have on your payment strategy? Meet us at Money 20/20 to discuss… https://t.co/Cy5XBtimOI",
      "post_date": "2019-05-30T10:29:00"
   },
   {
      "text": "What impact will Open Banking and Instant Payments have on your payment strategy? Meet us at Money 20/20 to discuss… https://t.co/n5g6CCrXwn",
      "post_date": "2019-05-30T10:28:00"
   },
   {
      "text": "RT @malin_patel: @helen_undy interesting to hear your take on the positive impact #AI could have on finance and mental health at #Diversity…",
      "post_date": "2019-05-30T10:27:00"
   },
   {
      "text": "I'm going to be at @money2020 with the team. Book some time in with us to talk about #openbanking, #apis, data and… https://t.co/3vrumg9MBP",
      "post_date": "2019-05-30T10:24:00"
   },
   {
      "text": "Cifas’ CEO Mike Haley takes a dive into the emergence of #openbanking in this week’s blog post.  How is it reshapin… https://t.co/xPckF90c6V",
      "post_date": "2019-05-30T10:14:00"
   },
   {
      "text": "London fintech Yapily raises $5.4M to offer a single API to connect to banks - TechCrunch - https://t.co/e6NuhRS5IN… https://t.co/AZ6ve7Krp6",
      "post_date": "2019-05-30T10:13:00"
   },
   {
      "text": "With #Fabrick at Amsterdam, there will be partner companies such as #Axerve, @viperamobile @FintechDistrict and… https://t.co/wxifsKludp",
      "post_date": "2019-05-30T10:09:00"
   },
   {
      "text": "RT @creditkudos: Can banks technology move fast enough? Our Head of Strategy tackled this subject in the latest white paper from @CREALOGIX…",
      "post_date": "2019-05-30T10:05:00"
   },
   {
      "text": "Can banks technology move fast enough? Our Head of Strategy tackled this subject in the latest white paper from… https://t.co/RD6uIQD3Xx",
      "post_date": "2019-05-30T10:05:00"
   },
   {
      "text": "RT @nordigen: Harness the Power of Open Banking data! Join our CEO @RolandsMesters at Madrid's @RevBanking conference to find out how we ca…",
      "post_date": "2019-05-30T10:04:00"
   },
   {
      "text": "The cost of open banking: £81m and counting - Financial News - https://t.co/4o1vGmPOj4 #openbanking #banking #digital",
      "post_date": "2019-05-30T10:03:00"
   },
   {
      "text": "The security challenges faced by open banking - TechRadar - https://t.co/awuutWFhoR #openbanking #banking #digital",
      "post_date": "2019-05-30T10:03:00"
   },
   {
      "text": "IAM Platform Curated Retweet:\n\nVia: https://t.co/ljutrcTm4x\n\nStarting with #OpenBanking, how technology helps resha… https://t.co/vNhqKeTQTj",
      "post_date": "2019-05-30T10:00:00"
   },
   {
      "text": "IAM Platform Curated Retweet:\n\nVia: https://t.co/ljutrcTm4x\n\nStarting with #OpenBanking, how technology helps resha… https://t.co/s6I1qqOxwc",
      "post_date": "2019-05-30T10:00:00"
   },
   {
      "text": "We're almost ready for @money2020! Add War for the Planet of the #APIs panel to your schedule. @stkirsch will be on… https://t.co/1rXoLrsXgJ",
      "post_date": "2019-05-30T09:59:00"
   },
   {
      "text": "RT @pingidentity: Watch an illustration of the backend workflows of #OpenBanking in our whiteboard Youtube playlist which includes dynamic…",
      "post_date": "2019-05-30T09:58:00"
   },
   {
      "text": "RT @UrsBolt: «#Democratization of #finance needs access to data beyond #banking.»\n\n@RozChowKoo, founder/CEO @CXAGroup does it by #digitaliz…",
      "post_date": "2019-05-30T09:58:00"
   },
   {
      "text": "Inside GCHQ: the art of spying in the digital age\nBritain’s biggest intelligence service is rethinking its mission… https://t.co/WDmhOviXGE",
      "post_date": "2019-05-30T09:34:00"
   },
   {
      "text": "Inside GCHQ: the art of spying in the digital age\nBritain’s biggest intelligence service is rethinking its mission… https://t.co/sObTtkDpSu",
      "post_date": "2019-05-30T09:33:00"
   },
   {
      "text": "RT @BitcoinLvx: How cryptocurrencies work. #puutwallet #fintech #wallets #ewallets #digitalwallets #govtech #openbanking #marketplace #mess…",
      "post_date": "2019-05-30T09:31:00"
   },
   {
      "text": "How cryptocurrencies work. #puutwallet #fintech #wallets #ewallets #digitalwallets #govtech #openbanking… https://t.co/PFOWsDcRSb",
      "post_date": "2019-05-30T09:30:00"
   },
   {
      "text": "FORGOT YOUR PUUT WEB WALLET PASSWORD? RESET IN LESS THAN 20 SECONDS. \n#puutwallet #fintech #wallets #ewallets… https://t.co/Bl0SXpzfmM",
      "post_date": "2019-05-30T09:26:00"
   },
   {
      "text": "Great collaborative article on #openbanking initiatives from the CEE region. Thanks https://t.co/q6Zy1Eg5FY for inv… https://t.co/o9IpTfIUO5",
      "post_date": "2019-05-30T09:18:00"
   },
   {
      "text": "Our CEO waking up in #MexicoCity to speak at @BBVAInnovation conference about #openbanking today May 30. https://t.co/b8S5kNk4Nd",
      "post_date": "2019-05-30T09:07:00"
   },
   {
      "text": "#OpenBanking or #UnkownBanking \nMany not aware of option to bring financial #data together\n\nhttps://t.co/5QvfoDJaQh… https://t.co/yClqzvm3Ca",
      "post_date": "2019-05-30T09:07:00"
   },
   {
      "text": "In my blogging series as the EBA day lead up Gunnar Berger this weeks outlines the impact of Open Banking on corpor… https://t.co/Fa8kcATdw4",
      "post_date": "2019-05-30T09:00:00"
   },
   {
      "text": "@helen_undy interesting to hear your take on the positive impact #AI could have on finance and mental health at… https://t.co/3RFDOK6pkY",
      "post_date": "2019-05-30T08:59:00"
   },
   {
      "text": "#OpenBanking has already been a catalyst for significant change. The genie is firmly out of the bottle, and the bra… https://t.co/6F105zHH11",
      "post_date": "2019-05-30T08:54:00"
   },
   {
      "text": "What is the future of banking? - ​ https://t.co/dGa312FipL via @raconteur #openbanking",
      "post_date": "2019-05-30T08:48:00"
   },
   {
      "text": "European FIs see Open Banking as the biggest current threat #psd2 #openbanking #fintech https://t.co/U5mYrY51Oe",
      "post_date": "2019-05-30T08:25:00"
   },
   {
      "text": "Book a session with our digital banking experts and get started with your digital journey: https://t.co/3WL9ByKb6y… https://t.co/vAO3EG6uXH",
      "post_date": "2019-05-30T08:11:00"
   },
   {
      "text": "More fintechs will be global, driven by 3 mutually reinforcing reasons: an evolution towards regulatory openness, a… https://t.co/7mjDKTygo5",
      "post_date": "2019-05-30T08:00:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T07:56:00"
   },
   {
      "text": "RT @UKOpenBanking: 127 regulated providers now offer #OpenBanking, including 81 third party providers, 46 account providers, and 23 regulat…",
      "post_date": "2019-05-30T07:52:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T07:50:00"
   },
   {
      "text": "Open banking: putting consumers in the driver's seat #Digital #openbanking #banking  https://t.co/gk72YR5pP1",
      "post_date": "2019-05-30T07:44:00"
   },
   {
      "text": "RT @Temenos: Good morning from #TelAviv. We have just kicked off our conversations with @johnschlesinger  on #ModernBanking #OpenBanking #T…",
      "post_date": "2019-05-30T07:42:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Disruption] Open banking opens opportunities for greater customer value\n\nhttps://t.co/KnPVzVrFz4\n\n#Innovation #Fintech…",
      "post_date": "2019-05-30T07:22:00"
   },
   {
      "text": "@cashoff_uk here in Baku for Monex Summit Caspian. Talk to Billy and Darren about CASHOFF white label services for… https://t.co/ojEjTKRmdH",
      "post_date": "2019-05-30T07:21:00"
   },
   {
      "text": "Good morning from #TelAviv. We have just kicked off our conversations with @johnschlesinger  on #ModernBanking… https://t.co/TCN7Ul0cvC",
      "post_date": "2019-05-30T07:18:00"
   },
   {
      "text": "Open banking: putting consumers in the driver's seat #Digital #openbanking #banking  https://t.co/AM1pMTzKvw",
      "post_date": "2019-05-30T07:18:00"
   },
   {
      "text": "RT @openpaymentseu: Join us in shaping the Open Banking future and create state-of-the-art Developer Experience (DX)?\n\nWe are looking for s…",
      "post_date": "2019-05-30T07:15:00"
   },
   {
      "text": "RT @openpaymentseu: Join us in shaping the Open Banking future and create state-of-the-art Developer Experience (DX)?\n\nWe are looking for s…",
      "post_date": "2019-05-30T07:14:00"
   },
   {
      "text": "Join us in shaping the Open Banking future and create state-of-the-art Developer Experience (DX)?\n\nWe are looking f… https://t.co/snn4pEoN26",
      "post_date": "2019-05-30T07:14:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T07:00:00"
   },
   {
      "text": ". @ING_news: Europeans continue to adopt a cautious approach to fintech - EuropeanCEO \nhttps://t.co/1RNvZzBDsR… https://t.co/vouKOfPIxw",
      "post_date": "2019-05-30T07:00:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T06:40:00"
   },
   {
      "text": "Less than 3 weeks to #EBADay &amp; some topics shaping the agenda are: #digitaltransformation, innovation through #APIs… https://t.co/g6c8jVoss0",
      "post_date": "2019-05-30T06:36:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T06:35:00"
   },
   {
      "text": "RT @AndrewClearBank: A movement that is growing. I'm sure it will change the world of Banking, but it's going to take longer than many pred…",
      "post_date": "2019-05-30T06:33:00"
   },
   {
      "text": "RT @UrsBolt: «#Democratization of #finance needs access to data beyond #banking.»\n\n@RozChowKoo, founder/CEO @CXAGroup does it by #digitaliz…",
      "post_date": "2019-05-30T06:29:00"
   },
   {
      "text": "RT @ttavlas: Open banking: putting consumers in the driver's seat - IT-Online - https://t.co/JOogcfg9Ev #openbanking #banking #digital",
      "post_date": "2019-05-30T06:29:00"
   },
   {
      "text": "RT @NordeaAPI: Check out this nice IoT payments release using our APIs by our good friends @connax_io #openbanking #PSD2 #IoT https://t.co/…",
      "post_date": "2019-05-30T06:24:00"
   },
   {
      "text": "Open banking: putting consumers in the driver's seat - IT-Online - https://t.co/JOogcfg9Ev #openbanking #banking #digital",
      "post_date": "2019-05-30T06:18:00"
   },
   {
      "text": "#openbanking news by #Fabrick \n🔷Let's talk: Disruption🔷 ⁦@DynamicBusiness  \n\n#APIeconomy #fintech ⁩  https://t.co/uQMkilCYLl",
      "post_date": "2019-05-30T06:14:00"
   },
   {
      "text": "Financial Institutions Conflicted but Cautiously Optimistic About Open Banking Opportunity https://t.co/e8bw4tnBpA… https://t.co/FCOZnO2jQ0",
      "post_date": "2019-05-30T06:10:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T06:09:00"
   },
   {
      "text": "RT @nordigen: Harness the Power of Open Banking data! Join our CEO @RolandsMesters at Madrid's @RevBanking conference to find out how we ca…",
      "post_date": "2019-05-30T05:56:00"
   },
   {
      "text": "Global PSD2 and Open Banking Biometric Authentication Market Size 2019: Iritech, Nok Nok Labs, VoiceVault, 3M Cogen… https://t.co/s2Plx35cTO",
      "post_date": "2019-05-30T05:38:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T05:38:00"
   },
   {
      "text": "RT @hakan_eroglu_tw: Proud to be on stage at Bank of Thailand to talk about #OpenBanking and how it fits to #GDPR and the upcoming Thai Per…",
      "post_date": "2019-05-30T05:37:00"
   },
   {
      "text": "Proud to be on stage at Bank of Thailand to talk about #OpenBanking and how it fits to #GDPR and the upcoming Thai… https://t.co/aKlNqh4MYD",
      "post_date": "2019-05-30T05:37:00"
   },
   {
      "text": "RT @KPMG: As markets in the world move towards #OpenBanking, is your #bank well-positioned to drive customer growth and value from the syst…",
      "post_date": "2019-05-30T05:22:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T05:22:00"
   },
   {
      "text": "About #psd2 and #openbanking @RevistaBiz: https://t.co/nkN1GLWkbe",
      "post_date": "2019-05-30T04:53:00"
   },
   {
      "text": "Banks optimistic about open banking but regulation a struggle - Verdict - https://t.co/Pf1w0wUwTr #openbanking #banking #digital",
      "post_date": "2019-05-30T04:48:00"
   },
   {
      "text": "«#Democratization of #finance needs access to data beyond #banking.»\n\n@RozChowKoo, founder/CEO @CXAGroup does it by… https://t.co/GupvEJ7jmt",
      "post_date": "2019-05-30T04:19:00"
   },
   {
      "text": "Pivotal CIO sees big promise for IT industry with open banking initiative - CIO Australia - https://t.co/3g64aGZiaT… https://t.co/6XGMD8tUxL",
      "post_date": "2019-05-30T04:13:00"
   },
   {
      "text": "RT @illionInsights: The introduction of #OpenBanking is set to give consumers greater control over their data. But there's benefits for bus…",
      "post_date": "2019-05-30T04:11:00"
   },
   {
      "text": "The introduction of #OpenBanking is set to give consumers greater control over their data. But there's benefits for… https://t.co/PzFC6dF07l",
      "post_date": "2019-05-30T04:04:00"
   },
   {
      "text": "Pivotal CIO sees big promise for IT industry with open banking initiative - CIO - CIO Australia -… https://t.co/rxWFdKIdNb",
      "post_date": "2019-05-30T04:03:00"
   },
   {
      "text": "RT @Capgemini: Learn how our #OpenBanking solution hosted on the @awscloud helps banks go beyond traditional banking and become a bank of t…",
      "post_date": "2019-05-30T03:38:00"
   },
   {
      "text": "Open banking in Aoteroa - BlueNotes - https://t.co/Wyf8bGnyRt #openbanking #banking #digital",
      "post_date": "2019-05-30T02:38:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T02:02:00"
   },
   {
      "text": "RT @MadTech_News: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech #technology #Fi…",
      "post_date": "2019-05-30T01:20:00"
   },
   {
      "text": "Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/AiwbC9Z9dd …",
      "post_date": "2019-05-30T01:18:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-30T01:13:00"
   },
   {
      "text": "Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech… https://t.co/cUOSDBG1bH",
      "post_date": "2019-05-30T01:05:00"
   },
   {
      "text": "Correspondents removing services should be a catalyst for increased #OpenBanking activity in this region. \n\nhttps://t.co/WJEdxYNtjs",
      "post_date": "2019-05-30T00:55:00"
   },
   {
      "text": "Very broad financial services competition is coming to the Caribbean. In fact, this has already begun. Incumbent ba… https://t.co/cqjIaqOLLJ",
      "post_date": "2019-05-30T00:53:00"
   },
   {
      "text": "Financial Institutions Conflicted but Cautiously Optimistic About Open Banking Opportunity - The Fintech Times -… https://t.co/dYNRXWDDbZ",
      "post_date": "2019-05-30T00:48:00"
   },
   {
      "text": "RT @Innov_Aus: The #FinTech sector will now be looking to @SenatorHume for positive action and guidance especially on a number of stalled r…",
      "post_date": "2019-05-30T00:36:00"
   },
   {
      "text": "RT @technisys_com: \"APIs can be new products that a company offers to open up new business channels, or to sell more of its traditional pro…",
      "post_date": "2019-05-30T00:34:00"
   },
   {
      "text": "The #FinTech sector will now be looking to @SenatorHume for positive action and guidance especially on a number of… https://t.co/IkxwsK6VJH",
      "post_date": "2019-05-30T00:30:00"
   },
   {
      "text": "RT @KPMG: As markets in the world move towards #OpenBanking, is your #bank well-positioned to drive customer growth and value from the syst…",
      "post_date": "2019-05-30T00:18:00"
   },
   {
      "text": "Open Banking Report On Global And United States Market, Status And Forecast, By Players, Types And Applications 201… https://t.co/zYnpyZrTmu",
      "post_date": "2019-05-30T00:08:00"
   },
   {
      "text": "RT @FabrickPlatform: #openbanking news by #Fabrick \n🔷 One Year On: The Impact of the #GDPR on Digital Banking 🔷 \n\n#fintech #financialEcosys…",
      "post_date": "2019-05-30T00:05:00"
   },
   {
      "text": "PSD2, threat or opportunity for banks? - Global Banking And Finance Review - https://t.co/ujMroAdmte #openbanking #banking #digital",
      "post_date": "2019-05-29T23:53:00"
   },
   {
      "text": "RT @idawongtaylor: @FINSIA ‘Future of Finance’ series kicks off this morning in #Adelaide with event sponsor @BankSA, moderator @BenOwen82…",
      "post_date": "2019-05-29T23:53:00"
   },
   {
      "text": "RT @JDCanDigital: June 4th @FDATAnorth in collaboration w/ @UKinCanada  is holding a dicussion on the benefits of #openbanking in Ottawa. L…",
      "post_date": "2019-05-29T23:35:00"
   },
   {
      "text": "Come and meet our partners #Microsoft and Accenture at Finastra stand U10 at Money20/20 to discuss cloud banking, o… https://t.co/kVw5rLEQVd",
      "post_date": "2019-05-29T23:03:00"
   },
   {
      "text": "FSI BLOG - Four key tactics to better deliver #APIs and improve #customerexperience through #openbanking -… https://t.co/doPpvs9ZAV",
      "post_date": "2019-05-29T23:00:00"
   },
   {
      "text": "@FINSIA ‘Future of Finance’ series kicks off this morning in #Adelaide with event sponsor @BankSA, moderator… https://t.co/BaMhKHTuh7",
      "post_date": "2019-05-29T22:48:00"
   },
   {
      "text": "RT @UKOpenBanking: 127 regulated providers now offer #OpenBanking, including 81 third party providers, 46 account providers, and 23 regulat…",
      "post_date": "2019-05-29T22:47:00"
   },
   {
      "text": "RT @Capgemini: Learn how our #OpenBanking solution hosted on the @awscloud helps banks go beyond traditional banking and become a bank of t…",
      "post_date": "2019-05-29T22:39:00"
   },
   {
      "text": "Trepidation about #OpenBanking rules persist among incumbents https://t.co/R4J63LPZ4m via @Finextra",
      "post_date": "2019-05-29T22:36:00"
   },
   {
      "text": "@Richbrown99 ... that, I haven't been following #openbanking properly but I'm-thinking- it's just banks being able… https://t.co/IKIBdIhBc9",
      "post_date": "2019-05-29T22:21:00"
   },
   {
      "text": "Learn how our #OpenBanking solution hosted on the @awscloud helps banks go beyond traditional banking and become a… https://t.co/9JbS8zoUxr",
      "post_date": "2019-05-29T22:20:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-29T22:19:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-29T22:06:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T22:02:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-05-29T21:55:00"
   },
   {
      "text": "RT @KPMG: As markets in the world move towards #OpenBanking, is your #bank well-positioned to drive customer growth and value from the syst…",
      "post_date": "2019-05-29T21:49:00"
   },
   {
      "text": "Competition is heating up in the #openbanking space! https://t.co/d3x7HBkSMC",
      "post_date": "2019-05-29T21:44:00"
   },
   {
      "text": "RT @ConsorzioCBI: Ed #APIHour sia!!! 🍾 #OpenBanking #CBIGlobe #PSD2 https://t.co/0N5FZX7vvc",
      "post_date": "2019-05-29T21:19:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T21:18:00"
   },
   {
      "text": "Learn how our #OpenBanking solution hosted on the @awscloud helps banks go beyond traditional banking and become a… https://t.co/l230bxBNVf",
      "post_date": "2019-05-29T21:09:00"
   },
   {
      "text": "#FinTech enabler banks in the #US\nBanks operating behind the scenes, partnering with #ChallengerBanks in order to o… https://t.co/ExEt69oAme",
      "post_date": "2019-05-29T20:43:00"
   },
   {
      "text": "Good to be back at @ThinkRiseLDN #HomeofFinTech earlier today for an insightful firechat on #OpenBanking as part of… https://t.co/X3gDPwzVyx",
      "post_date": "2019-05-29T20:34:00"
   },
   {
      "text": "RT @FabrickPlatform: If you also participate in @money2020 Europe, let's meet in Amsterdam! You can find us at stand K62 or contact us to m…",
      "post_date": "2019-05-29T20:15:00"
   },
   {
      "text": "Great Rise Presents talk on #OpenBanking earlier today: @imrangulam of @UKOpenBanking in conversation w/ @Barclays… https://t.co/p3daWFk4x4",
      "post_date": "2019-05-29T20:07:00"
   },
   {
      "text": "RT @KPMG: As markets in the world move towards #OpenBanking, is your #bank well-positioned to drive customer growth and value from the syst…",
      "post_date": "2019-05-29T19:50:00"
   },
   {
      "text": "Our Head of Open Banking Support @JUggeldahl explaining @Zendesk Helsinki meetup how our commercial API offering lo… https://t.co/rCzQYXY5HD",
      "post_date": "2019-05-29T19:44:00"
   },
   {
      "text": "European financial institutions see #OpenBanking as the biggest current threat\nhttps://t.co/k2paQ7KL7l\n#banking… https://t.co/cbjCLRhP70",
      "post_date": "2019-05-29T19:42:00"
   },
   {
      "text": "RT @big_river_tech: @openfintech is set to create the operating system for the financial industry. Who else is forever changing the world o…",
      "post_date": "2019-05-29T19:41:00"
   },
   {
      "text": "RT @enfuce: Come and meet us at #Money2020 to discuss how #collaboration is the key factor in #paymentprocessing and #openbanking, and how…",
      "post_date": "2019-05-29T19:38:00"
   },
   {
      "text": "Congratulations on your appointment Jane Hume and welcome to the 4th Industrial Revolution #youthquake4 #fintech… https://t.co/roTfhvwpfX",
      "post_date": "2019-05-29T19:22:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T19:22:00"
   },
   {
      "text": "RT @germanpuglieseb: See you tomorrow! #openbanking #digitalbanking https://t.co/k5VRE4GMps",
      "post_date": "2019-05-29T19:21:00"
   },
   {
      "text": "RT @technisys_com: Ricardo showed the story of #digitalbanking and how we got to #openbanking. He highlighted how banks can transform thems…",
      "post_date": "2019-05-29T19:18:00"
   },
   {
      "text": "RT @technisys_com: Ricardo showed the story of #digitalbanking and how we got to #openbanking. He highlighted how banks can transform thems…",
      "post_date": "2019-05-29T19:15:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T19:07:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T19:06:00"
   },
   {
      "text": "RT @roysolberg: Looks like the cat it out of the bag! @oyvir and I have have made an @ActionsOnGoogle/@Dialogflow voice assistant for @Sban…",
      "post_date": "2019-05-29T19:06:00"
   },
   {
      "text": "RT @FinMKTG: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API #…",
      "post_date": "2019-05-29T19:01:00"
   },
   {
      "text": "Lowell Putnam, gives some interesting insights on writing your own playbook, how being honest about imperfection in… https://t.co/Mf7JalHDos",
      "post_date": "2019-05-29T19:00:00"
   },
   {
      "text": "Are you going to Money20/20? Pop by our Invest NI Europe Stand R34, Hall 7 or contact us directly to set up a meeti… https://t.co/N9lLj3bt47",
      "post_date": "2019-05-29T19:00:00"
   },
   {
      "text": "RT @sshekhar77: Open Banking is not technology project but a business project about building an new ecosystem to build new products, new se…",
      "post_date": "2019-05-29T18:57:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T18:45:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T18:40:00"
   },
   {
      "text": "RT @IIDB_ie: Early bird tickets until May 31st!\n#FinTech track with @markgcummins of @BusinessDCU. \n\n→ #P2P Lending\n→ #crowdfunding\n→ #Open…",
      "post_date": "2019-05-29T18:40:00"
   },
   {
      "text": "European financial institutions see #OpenBanking as the biggest current threat https://t.co/qGkxlYoEpQ",
      "post_date": "2019-05-29T18:36:00"
   },
   {
      "text": "RT @GaganJhajj1: Silicon Valley #fintech @Plaid, which last year secured a valuation of $2.65bn, has expanded to the #UK to take advantage…",
      "post_date": "2019-05-29T18:23:00"
   },
   {
      "text": "Silicon Valley #fintech @Plaid, which last year secured a valuation of $2.65bn, has expanded to the #UK to take adv… https://t.co/MPJlw4Gwnl",
      "post_date": "2019-05-29T18:23:00"
   },
   {
      "text": "RT @saltedge: One week is left until @money2020 Europe in Amsterdam! Come and visit @saltedge at stand W20 to find out more about what we h…",
      "post_date": "2019-05-29T18:19:00"
   },
   {
      "text": "Easy Transfer processes billions of dollars in tuition for overseas Chinese students - TechCrunch -… https://t.co/RSSt5eyOll",
      "post_date": "2019-05-29T18:08:00"
   },
   {
      "text": "Wintrust closes on acquisition of Oak Bank | Northwest Indiana Business Headlines - https://t.co/UOwzc1QaRv -… https://t.co/lfgTengYpo",
      "post_date": "2019-05-29T18:08:00"
   },
   {
      "text": "But wait, there’s more! @CdnInfoLaw @VLennox @CCUA_ACCF @ElecTranAssoc will also join on a panel discussion on the… https://t.co/CmEM7b7wjg",
      "post_date": "2019-05-29T17:56:00"
   },
   {
      "text": "Join us June 4th in collaboration w/ @UKinCanada for a dicussion on the benefits of #openbanking in Ottawa. Looking… https://t.co/h7wwOF6lCP",
      "post_date": "2019-05-29T17:55:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T17:34:00"
   },
   {
      "text": "RT @GTSoftware: PSD2 and #OpenBanking are changing how the #financial service industry does business. Join us June 5th for a free webinar a…",
      "post_date": "2019-05-29T17:29:00"
   },
   {
      "text": "RT @ConsorzioCBI: Ed #APIHour sia!!! 🍾 #OpenBanking #CBIGlobe #PSD2 https://t.co/0N5FZX7vvc",
      "post_date": "2019-05-29T17:28:00"
   },
   {
      "text": "RT @68santos: PayPal's Latest Milestone: $10 Billion In Small Business Loans \n\n#fintechPortugal #Fintech #Portugal #Porto #Lisbon #Insurtec…",
      "post_date": "2019-05-29T17:20:00"
   },
   {
      "text": "Ed #APIHour sia!!! 🍾 #OpenBanking #CBIGlobe #PSD2 https://t.co/0N5FZX7vvc",
      "post_date": "2019-05-29T17:15:00"
   },
   {
      "text": "RT @FintechPortugal: PayPal's Latest Milestone: $10 Billion In Small Business Loans \n\n#fintechPortugal #Fintech #Portugal #Porto #Lisbon #I…",
      "post_date": "2019-05-29T17:15:00"
   },
   {
      "text": "RT @UKOpenBanking: At  #M2020EU our Trustee @imrangulam will be talking #OpenBanking lessons learned with @gavinlittlejohn Mark Hartley @ba…",
      "post_date": "2019-05-29T17:15:00"
   },
   {
      "text": "RT @GTSoftware: PSD2 and #OpenBanking are changing how the #financial service industry does business. Join us June 5th for a free webinar a…",
      "post_date": "2019-05-29T17:12:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T17:10:00"
   },
   {
      "text": "\"APIs can be new products that a company offers to open up new business channels, or to sell more of its traditiona… https://t.co/DEC7eoxAq0",
      "post_date": "2019-05-29T17:08:00"
   },
   {
      "text": "According to him the arrival of Bigtechs and more innovative financial institutions bring the need for banks to evo… https://t.co/l9kA8EJot6",
      "post_date": "2019-05-29T17:03:00"
   },
   {
      "text": "Ricardo showed the story of #digitalbanking and how we got to #openbanking. He highlighted how banks can transform… https://t.co/gUvxcuixqD",
      "post_date": "2019-05-29T17:02:00"
   },
   {
      "text": "When it comes to open banking, credit unions may have some unexpected advantages over banks. @jessicamacht,… https://t.co/jGzHjZG5u9",
      "post_date": "2019-05-29T17:02:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T16:54:00"
   },
   {
      "text": "LIVE Techstars Lisbon in partnership with Semapa Next Demo Day 2019 \n\nTechstars\n#fintechPortugal #Fintech #Portugal… https://t.co/bK8TDk1IKw",
      "post_date": "2019-05-29T16:54:00"
   },
   {
      "text": "LIVE Techstars Lisbon in partnership with Semapa Next Demo Day 2019 \n\nTechstars\n#fintechPortugal #Fintech #Portugal… https://t.co/G41bFGXJno",
      "post_date": "2019-05-29T16:53:00"
   },
   {
      "text": "PayPal's Latest Milestone: $10 Billion In Small Business Loans \n\n#fintechPortugal #Fintech #Portugal #Porto #Lisbon… https://t.co/ud7lyz3NKm",
      "post_date": "2019-05-29T16:44:00"
   },
   {
      "text": "PayPal's Latest Milestone: $10 Billion In Small Business Loans \n\n#fintechPortugal #Fintech #Portugal #Porto #Lisbon… https://t.co/BEQLcZn2eV",
      "post_date": "2019-05-29T16:43:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Disruption] Open banking opens opportunities for greater customer value\n\nhttps://t.co/KnPVzVrFz4\n\n#Innovation #Fintech…",
      "post_date": "2019-05-29T16:40:00"
   },
   {
      "text": "[#Disruption] Open banking opens opportunities for greater customer value\n\nhttps://t.co/KnPVzVrFz4\n\n#Innovation… https://t.co/xcTDIZInW6",
      "post_date": "2019-05-29T16:40:00"
   },
   {
      "text": "RT @GTSoftware: PSD2 and #OpenBanking are changing how the #financial service industry does business. Join us June 5th for a free webinar a…",
      "post_date": "2019-05-29T16:39:00"
   },
   {
      "text": "RT @UKOpenBanking: 127 regulated providers now offer #OpenBanking, including 81 third party providers, 46 account providers, and 23 regulat…",
      "post_date": "2019-05-29T16:34:00"
   },
   {
      "text": "One of the most annoying things about #OpenBanking is having to renew my access to my other accounts through the fu… https://t.co/Je8kYbOYVu",
      "post_date": "2019-05-29T16:31:00"
   },
   {
      "text": "Open banking: Innovating identity to fight against fraud https://t.co/fAe9EdiZWd @Finextra #Openbanking… https://t.co/BmyQPrC0r9",
      "post_date": "2019-05-29T16:30:00"
   },
   {
      "text": "Financial institutions conflicted but cautiously optimistic about #openbanking opportunity https://t.co/HIPyI3MyEP… https://t.co/Hp58IGzvqI",
      "post_date": "2019-05-29T16:30:00"
   },
   {
      "text": "RT @pingidentity: In this #OpenBanking TPP client #authentication blog post, learn how to implement Private Key JWT using the Ping Identity…",
      "post_date": "2019-05-29T16:12:00"
   },
   {
      "text": "A movement that is growing. I'm sure it will change the world of Banking, but it's going to take longer than many p… https://t.co/hjR2SoNQOd",
      "post_date": "2019-05-29T16:10:00"
   },
   {
      "text": "#Openbanking will be instrumental in transforming traditional bank architectures into faster, nimbler more agile pl… https://t.co/7fddELhlgW",
      "post_date": "2019-05-29T16:08:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T16:06:00"
   },
   {
      "text": "RT @bottomlinetech: [ WEBINAR ] Join @bottomlinetech own Rodney Nilson and Joseph Schwartz, along with @AmerBanker, will present Open (#API…",
      "post_date": "2019-05-29T16:02:00"
   },
   {
      "text": "[ WEBINAR ] Join @bottomlinetech own Rodney Nilson and Joseph Schwartz, along with @AmerBanker, will present Open (… https://t.co/pYBHRPFDsn",
      "post_date": "2019-05-29T16:01:00"
   },
   {
      "text": "As markets in the world move towards #OpenBanking, is your #bank well-positioned to drive customer growth and value… https://t.co/42LE5uf82f",
      "post_date": "2019-05-29T16:00:00"
   },
   {
      "text": "RT @UKOpenBanking: 127 regulated providers now offer #OpenBanking, including 81 third party providers, 46 account providers, and 23 regulat…",
      "post_date": "2019-05-29T15:55:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-05-29T15:54:00"
   },
   {
      "text": "RT @FinMKTG: In #Thailand the #banks collaborate to build a common #Blockchain #ecosystem.\n\nSam Tanskul, #KrungsriFinnovate at @TheAsianBan…",
      "post_date": "2019-05-29T15:50:00"
   },
   {
      "text": "RT @nbobba: Time to showcase what's next for @wizelyapp. This is a culmination of immense learnings, relentless dreaming &amp; consistent quest…",
      "post_date": "2019-05-29T15:49:00"
   },
   {
      "text": "#Finserv is well represented with 26 #platforms... and more to come\n# of Platforms with &gt;$100 Million Value by Indu… https://t.co/JFaOTTliKc",
      "post_date": "2019-05-29T15:37:00"
   },
   {
      "text": "Scanning the #fintech landscape: 10 #disruptive models \n\n#Finserv #Banking #Payment #DigitalBanking #neobank… https://t.co/BIaep5crpP",
      "post_date": "2019-05-29T15:36:00"
   },
   {
      "text": "RT @JDCanDigital: 2/2 On June 4th, @FDATAnorth in collaboration w/@UKinCanada also looks forward to remarks from @CdnInfoLaw @VLennox @CCUA…",
      "post_date": "2019-05-29T15:34:00"
   },
   {
      "text": "RT @JDCanDigital: June 4th @FDATAnorth in collaboration w/ @UKinCanada  is holding a dicussion on the benefits of #openbanking in Ottawa. L…",
      "post_date": "2019-05-29T15:34:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T15:28:00"
   },
   {
      "text": "2/2 On June 4th, @FDATAnorth in collaboration w/@UKinCanada also looks forward to remarks from @CdnInfoLaw @VLennox… https://t.co/ihlyROO2XR",
      "post_date": "2019-05-29T15:24:00"
   },
   {
      "text": "RT @UKOpenBanking: 127 regulated providers now offer #OpenBanking, including 81 third party providers, 46 account providers, and 23 regulat…",
      "post_date": "2019-05-29T15:24:00"
   },
   {
      "text": "RT @GTSoftware: PSD2 and #OpenBanking are changing how the #financial service industry does business. Join us June 5th for a free webinar a…",
      "post_date": "2019-05-29T15:15:00"
   },
   {
      "text": "Watch an illustration of the backend workflows of #OpenBanking in our whiteboard Youtube playlist which includes dy… https://t.co/diy6U8Ktu3",
      "post_date": "2019-05-29T15:15:00"
   },
   {
      "text": "RT @JDCanDigital: June 4th @FDATAnorth in collaboration w/ @UKinCanada  is holding a dicussion on the benefits of #openbanking in Ottawa. L…",
      "post_date": "2019-05-29T15:14:00"
   },
   {
      "text": "RT @BANKIFI_global: #Openbanking lessons learned will be fun and incisive with @LouiseHBeaumont as chair and @bankifi @hartley98 (let's sta…",
      "post_date": "2019-05-29T15:13:00"
   },
   {
      "text": "June 4th @FDATAnorth in collaboration w/ @UKinCanada  is holding a dicussion on the benefits of #openbanking in Ott… https://t.co/fky9qsYR3Z",
      "post_date": "2019-05-29T15:13:00"
   },
   {
      "text": "127 regulated providers now offer #OpenBanking, including 81 third party providers, 46 account providers, and 23 re… https://t.co/suNJfe5bNz",
      "post_date": "2019-05-29T15:13:00"
   },
   {
      "text": "#Openbanking lessons learned will be fun and incisive with @LouiseHBeaumont as chair and @bankifi @hartley98 (let's… https://t.co/bjb1S2CCzT",
      "post_date": "2019-05-29T15:05:00"
   },
   {
      "text": "Plaid launches in U.K. to boost open banking on both sides of the Atlantic - American Banker -… https://t.co/sduDcRH7Rc",
      "post_date": "2019-05-29T15:03:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T15:00:00"
   },
   {
      "text": "Stuart Stoyan, believes that open banking will naturally cultivate diversification by creating space for brokers an… https://t.co/3MOZ9DRO9J",
      "post_date": "2019-05-29T15:00:00"
   },
   {
      "text": "PSD2 and #OpenBanking are changing how the #financial service industry does business. Join us June 5th for a free w… https://t.co/IMIrUkclK8",
      "post_date": "2019-05-29T14:58:00"
   },
   {
      "text": "RT @wso2: Is #openbanking a threat to banks? Certainly not. You can create better financial products, reach out to wider customer base, sta…",
      "post_date": "2019-05-29T14:57:00"
   },
   {
      "text": "See you tomorrow! #openbanking #digitalbanking https://t.co/k5VRE4GMps",
      "post_date": "2019-05-29T14:55:00"
   },
   {
      "text": "@TMANY_NYCE @BNYMellon Director of Treasury discusses #OpenBanking and #PSD2. Today’s largest market cap companies… https://t.co/MngAL1XGd4",
      "post_date": "2019-05-29T14:54:00"
   },
   {
      "text": "RT @ttavlas: Indonesia Unveils Payment System Roadmap, Launches QR Code System - Regulation Asia - https://t.co/hMjml3VuXy #openbanking #ba…",
      "post_date": "2019-05-29T14:48:00"
   },
   {
      "text": "FSB Publishes Updates On Work To Assess And Address Correspondent Banking Declines - Exchange News Direct -… https://t.co/BxJBoTi8tJ",
      "post_date": "2019-05-29T14:38:00"
   },
   {
      "text": "Tech Mahindra &amp; Strands collaborate to provide customized digital banking solution to financial institutions global… https://t.co/Y3ox3HGcuV",
      "post_date": "2019-05-29T14:38:00"
   },
   {
      "text": "Melding SEO and Paid Search Boosts Banking Website Sales - The Financial Brand - https://t.co/XbjBDSD0PZ #openbanking #banking #digital",
      "post_date": "2019-05-29T14:38:00"
   },
   {
      "text": "RT @Global_Kinetic: What the Future of Fintech Looks Like https://t.co/kAjkllzD5u \n#digitalbanking #fintech #Payments #banking #openbanking…",
      "post_date": "2019-05-29T14:37:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T14:35:00"
   },
   {
      "text": "RT @wso2: Is #openbanking a threat to banks? Certainly not. You can create better financial products, reach out to wider customer base, sta…",
      "post_date": "2019-05-29T14:34:00"
   },
   {
      "text": "Tim Jones @Transamerica on importance of design interface in #OpenBanking: “Without a design layer, data is perceiv… https://t.co/qrTN9c6Dv3",
      "post_date": "2019-05-29T14:30:00"
   },
   {
      "text": "#OpenBanking is coming. @JeffreyAbbott tells us how traditional retail banks can stay relevant and retain customers… https://t.co/l77cBIuBAl",
      "post_date": "2019-05-29T14:26:00"
   },
   {
      "text": "RT @machine_ml: RT @BusinessDCU: RT @IIDB_ie: Early bird tickets until May 31st!\n#FinTech track with @markgcummins of @BusinessDCU. \n\n→ #P2…",
      "post_date": "2019-05-29T14:25:00"
   },
   {
      "text": "SA to get fintech innovation hub https://t.co/bIVTGYdqf2 #digitalbanking #fintech #Payments #banking #openbanking… https://t.co/7WChhB7xwS",
      "post_date": "2019-05-29T14:05:00"
   },
   {
      "text": "RT @IIDB_ie: Early bird tickets until May 31st!\n#FinTech track with @markgcummins of @BusinessDCU. \n\n→ #P2P Lending\n→ #crowdfunding\n→ #Open…",
      "post_date": "2019-05-29T14:04:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T14:03:00"
   },
   {
      "text": "RT @BusinessDCU: RT @IIDB_ie: Early bird tickets until May 31st!\n#FinTech track with @markgcummins of @BusinessDCU.… https://t.co/P4RICurGEE",
      "post_date": "2019-05-29T14:02:00"
   },
   {
      "text": "RT @IIDB_ie: Early bird tickets until May 31st!\n#FinTech track with @markgcummins of @BusinessDCU. \n\n→ #P2P Lending\n→ #crowdfunding\n→ #Open…",
      "post_date": "2019-05-29T14:00:00"
   },
   {
      "text": "RT @c_mendez_serres: PSD2 was recently implemented in The Netherlands. Consumer awareness about PSD2 and #openbanking was a priority. As cu…",
      "post_date": "2019-05-29T13:53:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T13:52:00"
   },
   {
      "text": ".@RyanJamesWeeks: US #openbanking #fintech Plaid confirms UK launch https://t.co/BzrHQ5Hz2F via @FinancialNews",
      "post_date": "2019-05-29T13:45:00"
   },
   {
      "text": "Looking forward to this session to learn and share lessons on #OpenBanking globally! https://t.co/L2tG6UpiZU",
      "post_date": "2019-05-29T13:44:00"
   },
   {
      "text": "PSD2 was recently implemented in The Netherlands. Consumer awareness about PSD2 and #openbanking was a priority. As… https://t.co/GF3GYDGWN3",
      "post_date": "2019-05-29T13:44:00"
   },
   {
      "text": "Enterprise Engineering, Inc. Expands Open Banking Services with Competitive Readiness Assessment - Associated Press… https://t.co/eOifMyqfIr",
      "post_date": "2019-05-29T13:43:00"
   },
   {
      "text": "- 2019 promises to be the year of #OpenBanking\n- Marketplace lending companies raised just under $10bn in 2018.\n- T… https://t.co/DqOe9TzyLM",
      "post_date": "2019-05-29T13:33:00"
   },
   {
      "text": "Payments Canada Summit 2019: Six Takeaways https://t.co/W1PWS7z9Sj via @Finextra #fintech #openbanking #blockchain #payment # Canada #summit",
      "post_date": "2019-05-29T13:32:00"
   },
   {
      "text": "Will open banking be the next event horizon for the banking industry or simply a passing fad? We’re here to help yo… https://t.co/8YRNn2Z4pW",
      "post_date": "2019-05-29T13:30:00"
   },
   {
      "text": "RT @roysolberg: Looks like the cat it out of the bag! @oyvir and I have have made an @ActionsOnGoogle/@Dialogflow voice assistant for @Sban…",
      "post_date": "2019-05-29T13:30:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T13:24:00"
   },
   {
      "text": "RT @c_mendez_serres: 14/06/2019 is a milestone for #bankingindustry with PSD2 compliance. It is a checkpoint before full implementation in…",
      "post_date": "2019-05-29T13:23:00"
   },
   {
      "text": "\"56% [of European financial institutions] fear that consumer loyalty towards banks will be significantly reduced as… https://t.co/FzgaI9kLLh",
      "post_date": "2019-05-29T13:18:00"
   },
   {
      "text": "RT @TCS: #OpenBanking is coming. @JeffreyAbbott tells us how traditional retail banks can stay relevant and retain customers. https://t.co/…",
      "post_date": "2019-05-29T13:17:00"
   },
   {
      "text": "14/06/2019 is a milestone for #bankingindustry with PSD2 compliance. It is a checkpoint before full implementation… https://t.co/wuZ40YcUDe",
      "post_date": "2019-05-29T13:15:00"
   },
   {
      "text": ".@innolead’s new map of Top 25 Corporate #Innovation Hubs in #London features @FinTechLabLDN, run by @accenture. Th… https://t.co/XEII4DOlU1",
      "post_date": "2019-05-29T13:03:00"
   },
   {
      "text": "We have exciting news to share at #Money2020.  Meet with us to hear how we are strengthening our strategy to help F… https://t.co/OX15ZuDoET",
      "post_date": "2019-05-29T12:51:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-05-29T12:45:00"
   },
   {
      "text": "Is Open Banking being hobbled by outages? - Finextra - https://t.co/exDdwmRP3e #openbanking #banking #digital",
      "post_date": "2019-05-29T12:43:00"
   },
   {
      "text": "RT @ThinkRiseLDN: Full house this morning for our Rise Presents talk on #OpenBanking with @imrangulam \n\n#HomeofFinTech #FinTech #LondonTech…",
      "post_date": "2019-05-29T12:38:00"
   },
   {
      "text": "RT @Global_Kinetic: What the Future of Fintech Looks Like https://t.co/kAjkllzD5u \n#digitalbanking #fintech #Payments #banking #openbanking…",
      "post_date": "2019-05-29T12:33:00"
   },
   {
      "text": "What the Future of Fintech Looks Like https://t.co/kAjkllzD5u \n#digitalbanking #fintech #Payments #banking… https://t.co/dG1OzDKqaO",
      "post_date": "2019-05-29T12:20:00"
   },
   {
      "text": "RT @wso2: Is #openbanking a threat to banks? Certainly not. You can create better financial products, reach out to wider customer base, sta…",
      "post_date": "2019-05-29T12:19:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T12:07:00"
   },
   {
      "text": "This week: NFC ticketing in Paris, NFC cool chain pilot tracks perishables, NatWest uses open banking to cut fees,… https://t.co/FdFvfmjR83",
      "post_date": "2019-05-29T12:03:00"
   },
   {
      "text": ".@ursgubser, from #Worldline, will address how person-to-person #payments will ultimately lead to person-to-merchan… https://t.co/WdG5NTEtk3",
      "post_date": "2019-05-29T12:01:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T12:01:00"
   },
   {
      "text": "Check out this nice IoT payments release using our APIs by our good friends @connax_io #openbanking #PSD2 #IoT https://t.co/6hqkzDPpDq",
      "post_date": "2019-05-29T11:38:00"
   },
   {
      "text": "Really looking forward to seeing @ThingPay launched and the guys @connax_io during #Arctic15\nWill be good to see ho… https://t.co/sDtnnk3J7S",
      "post_date": "2019-05-29T11:38:00"
   },
   {
      "text": "#Futureofbanking: Why customers choose online-only banks? What is the motivation for digital transformation in Fina… https://t.co/FygLMl2voQ",
      "post_date": "2019-05-29T11:34:00"
   },
   {
      "text": "At  #M2020EU our Trustee @imrangulam will be talking #OpenBanking lessons learned with @gavinlittlejohn Mark Hartle… https://t.co/LOJVnyUPDu",
      "post_date": "2019-05-29T11:32:00"
   },
   {
      "text": "RT @WorldlineGlobal: .@ursgubser, from #Worldline, will address how person-to-person #payments will ultimately lead to person-to-merchant p…",
      "post_date": "2019-05-29T11:22:00"
   },
   {
      "text": "RT @roysolberg: Looks like the cat it out of the bag! @oyvir and I have have made an @ActionsOnGoogle/@Dialogflow voice assistant for @Sban…",
      "post_date": "2019-05-29T11:19:00"
   },
   {
      "text": "@PayExpo That is pretty bad. But the proof is in the pudding. If by adopting open banking will you close more or fe… https://t.co/kwO1jT027R",
      "post_date": "2019-05-29T11:18:00"
   },
   {
      "text": "RT @creditkudos: .@money2020 is almost upon us! Make sure to come see @fredkelly join the panel to discuss different approaches to leveragi…",
      "post_date": "2019-05-29T11:12:00"
   },
   {
      "text": "I have been told for 30+ years to never hand over my login/password to anyone, even to a bank employee. This is a p… https://t.co/rJ6lTVcDyQ",
      "post_date": "2019-05-29T11:08:00"
   },
   {
      "text": "RT @roysolberg: Looks like the cat it out of the bag! @oyvir and I have have made an @ActionsOnGoogle/@Dialogflow voice assistant for @Sban…",
      "post_date": "2019-05-29T11:03:00"
   },
   {
      "text": "RT @JoannMoretti: #Banking without a #bank? That's exactly what #PSD2 &amp; #OpenBanking will lead to! As a #bank you can't afford to lose the…",
      "post_date": "2019-05-29T11:03:00"
   },
   {
      "text": "RT @roysolberg: Looks like the cat it out of the bag! @oyvir and I have have made an @ActionsOnGoogle/@Dialogflow voice assistant for @Sban…",
      "post_date": "2019-05-29T10:56:00"
   },
   {
      "text": "Looks like the cat it out of the bag! @oyvir and I have have made an @ActionsOnGoogle/@Dialogflow voice assistant f… https://t.co/fFsEi0z4Rf",
      "post_date": "2019-05-29T10:52:00"
   },
   {
      "text": "RT @RoisinLevine: Packed @ThinkRiseLDN for @UKOpenBanking's Imran Gulamhuseinwala fireside chat with Caroline Ambrose, Open Banking Directo…",
      "post_date": "2019-05-29T10:49:00"
   },
   {
      "text": "RT @ThePaypers: From 1,100 #fintechs headquartered in CEE, only about 20% have successfully closed an equity #funding round. @HannesCizek,…",
      "post_date": "2019-05-29T10:48:00"
   },
   {
      "text": "From 1,100 #fintechs headquartered in CEE, only about 20% have successfully closed an equity #funding round.… https://t.co/cNcsw3NisM",
      "post_date": "2019-05-29T10:47:00"
   },
   {
      "text": "Key quote from the Innovate Finance conference earlier this month:\n\"Banks are no longer treating Open Banking as a… https://t.co/bKppPlq9DZ",
      "post_date": "2019-05-29T10:44:00"
   },
   {
      "text": "RT @the_idco: Ahead of @money2020 next week, access the #FrictionlessFinanceReport here, providing you with everything you need to know in…",
      "post_date": "2019-05-29T10:44:00"
   },
   {
      "text": "Ahead of @money2020 next week, access the #FrictionlessFinanceReport here, providing you with everything you need t… https://t.co/llTfXklO0H",
      "post_date": "2019-05-29T10:43:00"
   },
   {
      "text": "Harness the Power of Open Banking data! Join our CEO @RolandsMesters at Madrid's @RevBanking conference to find out… https://t.co/ukLl1nN3kY",
      "post_date": "2019-05-29T10:41:00"
   },
   {
      "text": "RT @ftek_33: Today at #motorfinance19 in Munich. Another day of great discussions about digitalization of #automotive @FintecHQ #openbankin…",
      "post_date": "2019-05-29T10:41:00"
   },
   {
      "text": "RT @torryharris: Monetize your #OpenBanking #APIs through #marketplace #banking. Concierge Bank™ App, a marketplace-banking product from To…",
      "post_date": "2019-05-29T10:37:00"
   },
   {
      "text": "RT @ThinkRiseLDN: Full house this morning for our Rise Presents talk on #OpenBanking with @imrangulam \n\n#HomeofFinTech #FinTech #LondonTech…",
      "post_date": "2019-05-29T10:37:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T10:36:00"
   },
   {
      "text": "Fintechs and financial inclusion: Looking past the hype and exploring their potential @CGAP https://t.co/pKQdRzpqF9… https://t.co/P94Eii44ds",
      "post_date": "2019-05-29T10:32:00"
   },
   {
      "text": "Is #openbanking a threat to banks? Certainly not. You can create better financial products, reach out to wider cust… https://t.co/kdNinirQXD",
      "post_date": "2019-05-29T10:30:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T10:27:00"
   },
   {
      "text": "@ThinkRiseLDN @BarclaysLDN thanks for the #OpenBanking event! \n@PracticusLtd #FinTech team - updates for you are on the way!",
      "post_date": "2019-05-29T10:23:00"
   },
   {
      "text": "Great start to the day listening to Caroline Ambrose interview @imrangulam at Rise, created by Barclays.\nThe summar… https://t.co/suVs3ppogI",
      "post_date": "2019-05-29T10:19:00"
   },
   {
      "text": "RT @tom_studer: Enjoyed the morning session @finance20ch already🤙\nInteresting panel discussion about #openbanking #api with @pahueg @joris_…",
      "post_date": "2019-05-29T10:14:00"
   },
   {
      "text": "RT @FabrickPlatform: #openbanking news by #Fabrick \n🔷 One Year On: The Impact of the #GDPR on Digital Banking 🔷 \n\n#fintech #financialEcosys…",
      "post_date": "2019-05-29T10:13:00"
   },
   {
      "text": "Regulation is still the key challenge for #OpenBanking roll-out https://t.co/6cio1qxyI5",
      "post_date": "2019-05-29T10:11:00"
   },
   {
      "text": "Trepidation about #OpenBanking rules persist among incumbents https://t.co/ntgMfRpanj via @Finextra",
      "post_date": "2019-05-29T10:09:00"
   },
   {
      "text": "RT @creditkudos: .@money2020 is almost upon us! Make sure to come see @fredkelly join the panel to discuss different approaches to leveragi…",
      "post_date": "2019-05-29T10:06:00"
   },
   {
      "text": "Prolifics launches API stress testing suite\n#OpenBanking #api https://t.co/dPb1ZtnBSJ #Testing #ASPSP #PSD2 https://t.co/ofMYdh1Pf2",
      "post_date": "2019-05-29T10:01:00"
   },
   {
      "text": "Understanding the difference between a cryptocurrency coin and a cryptocurrency token https://t.co/NAliVg62ms… https://t.co/bW5xnO4AZz",
      "post_date": "2019-05-29T10:00:00"
   },
   {
      "text": "RT @puutwallet: HOW TO SIGN UP FOR PUUT WEB WALLET IN LESS THAN 1 MINUTE\n#puutwallet #fintech #wallets #ewallets #digitalwallets #govtech #…",
      "post_date": "2019-05-29T09:51:00"
   },
   {
      "text": "RT @BitcoinLvx: @BitcoinLvx is a true store of value with no volatility #puutwallet #fintech #wallets #ewallets #digitalwallets #govtech #o…",
      "post_date": "2019-05-29T09:51:00"
   },
   {
      "text": "RT @puutwallet: LOG ONTO PUUT WEB WALLET IN 20 SECONDS\n\nGo to https://t.co/iRRCvmYWlC to get started. \n#puutwallet #fintech #wallets #ewall…",
      "post_date": "2019-05-29T09:50:00"
   },
   {
      "text": "RT @puutwallet: LOG ONTO PUUT WEB WALLET IN 20 SECONDS\n\nGo to https://t.co/iRRCvmYWlC to get started. \n#puutwallet #fintech #wallets #ewall…",
      "post_date": "2019-05-29T09:48:00"
   },
   {
      "text": "LOG ONTO PUUT WEB WALLET IN 20 SECONDS\n\nGo to https://t.co/iRRCvmYWlC to get started. \n#puutwallet #fintech… https://t.co/sZaujlqrGJ",
      "post_date": "2019-05-29T09:47:00"
   },
   {
      "text": "RT @RoeschLena: Very interesting talk on the future of #OpenBanking by @imrangulam @UKOpenBanking at @ThinkRiseLDN https://t.co/hbCAzZ3Uat",
      "post_date": "2019-05-29T09:47:00"
   },
   {
      "text": "RT @RoisinLevine: Packed @ThinkRiseLDN for @UKOpenBanking's Imran Gulamhuseinwala fireside chat with Caroline Ambrose, Open Banking Directo…",
      "post_date": "2019-05-29T09:47:00"
   },
   {
      "text": "Two fifths (39%) of European financial institutions view the arrival of Open Banking regulation as the biggest curr… https://t.co/bD8PKNqYgn",
      "post_date": "2019-05-29T09:39:00"
   },
   {
      "text": "RT @SwoopFunding: This time next week we're delighted to be attending @money2020. Our CEO Andrea Reynolds will be joined by the other @Nest…",
      "post_date": "2019-05-29T09:38:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-05-29T09:37:00"
   },
   {
      "text": "Very interesting talk on the future of #OpenBanking by @imrangulam @UKOpenBanking at @ThinkRiseLDN https://t.co/hbCAzZ3Uat",
      "post_date": "2019-05-29T09:36:00"
   },
   {
      "text": "Trepidation about #OpenBanking rules persist among incumbents read the latest from ⁦@Finextra⁩ some interesting sta… https://t.co/w3ibWb9nfa",
      "post_date": "2019-05-29T09:35:00"
   },
   {
      "text": "Interesting event on the future of Open Banking this morning... at a great venue too #OpenBanking #fintech https://t.co/vsnNyw1nj7",
      "post_date": "2019-05-29T09:33:00"
   },
   {
      "text": "RT @creditkudos: .@money2020 is almost upon us! Make sure to come see @fredkelly join the panel to discuss different approaches to leveragi…",
      "post_date": "2019-05-29T09:32:00"
   },
   {
      "text": "Study by #OpenBanking platform @tink has revealed ...\n40% see PSD2 as biggest threat to business model, 56% fear it… https://t.co/Ssbo0xFQm7",
      "post_date": "2019-05-29T09:32:00"
   },
   {
      "text": ".@money2020 is almost upon us! Make sure to come see @fredkelly join the panel to discuss different approaches to l… https://t.co/jnk1PcTGrJ",
      "post_date": "2019-05-29T09:31:00"
   },
   {
      "text": "Indonesia Unveils Payment System Roadmap, Launches QR Code System #Banking #openbanking #digital  https://t.co/daJedW7mR5",
      "post_date": "2019-05-29T09:30:00"
   },
   {
      "text": "Packed @ThinkRiseLDN for @UKOpenBanking's Imran Gulamhuseinwala fireside chat with Caroline Ambrose, Open Banking D… https://t.co/CsTIloE7fn",
      "post_date": "2019-05-29T09:26:00"
   },
   {
      "text": "RT @saltedge: One week is left until @money2020 Europe in Amsterdam! Come and visit @saltedge at stand W20 to find out more about what we h…",
      "post_date": "2019-05-29T09:23:00"
   },
   {
      "text": "RT @ftek_33: Today at #motorfinance19 in Munich. Another day of great discussions about digitalization of #automotive @FintecHQ #openbankin…",
      "post_date": "2019-05-29T09:21:00"
   },
   {
      "text": "RT @saltedge: One week is left until @money2020 Europe in Amsterdam! Come and visit @saltedge at stand W20 to find out more about what we h…",
      "post_date": "2019-05-29T09:13:00"
   },
   {
      "text": "One week left. Meet @saltedge during @money2020 for a chat at the stand W20 #M2020EU #fintech #OpenBanking… https://t.co/R2e3msyiFL",
      "post_date": "2019-05-29T09:10:00"
   },
   {
      "text": "Full house this morning for our Rise Presents talk on #OpenBanking with @imrangulam \n\n#HomeofFinTech #FinTech… https://t.co/DMgLeErwkN",
      "post_date": "2019-05-29T09:07:00"
   },
   {
      "text": "Are you a third party provider who would like to use the @AurigaSW PSD2 #API? Register here to start using the serv… https://t.co/0ud5YS3xxh",
      "post_date": "2019-05-29T09:05:00"
   },
   {
      "text": "Soon time to talk Open Banking from a classic theater in Göteborg #openbanking #digitalbanking https://t.co/LnCzOpnfj2",
      "post_date": "2019-05-29T09:04:00"
   },
   {
      "text": "Trepidation about Open Banking rules persist among incumbents - Finextra - https://t.co/KkHCTtQ4ON #openbanking #banking #digital",
      "post_date": "2019-05-29T09:03:00"
   },
   {
      "text": "One week is left until @money2020 Europe in Amsterdam! Come and visit @saltedge at stand W20 to find out more about… https://t.co/nPKXnfLEHh",
      "post_date": "2019-05-29T09:01:00"
   },
   {
      "text": "RT @FinMKTG: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API #…",
      "post_date": "2019-05-29T08:59:00"
   },
   {
      "text": "RT @DigitalBankingT: Silicon Valley fintech Plaid pushes into UK market - Financial Times https://t.co/1uFTzgkm7n… https://t.co/MScpAnh3KA",
      "post_date": "2019-05-29T08:56:00"
   },
   {
      "text": "RT @MargiottaTony: Awesome insights from ⁦@imrangulam⁩ ⁦@ThinkRiseLDN⁩ #openbanking #Homeoffintech #fintech https://t.co/Qu7eODD855",
      "post_date": "2019-05-29T08:56:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T08:56:00"
   },
   {
      "text": "Silicon Valley fintech Plaid pushes into UK market - Financial Times - https://t.co/P7CplnXjgP #openbanking #banking #digital",
      "post_date": "2019-05-29T08:53:00"
   },
   {
      "text": "Awesome insights from ⁦@imrangulam⁩ ⁦@ThinkRiseLDN⁩ #openbanking #Homeoffintech #fintech https://t.co/gxmIKofeHL",
      "post_date": "2019-05-29T08:48:00"
   },
   {
      "text": "RT @FabrickPlatform: \"It's still a small number of banks that are wondering how to play an active role with #PSD2, but it's growing!\" This…",
      "post_date": "2019-05-29T08:47:00"
   },
   {
      "text": "RT @FabrickPlatform: #openbanking news by #Fabrick \n🔷 One Year On: The Impact of the #GDPR on Digital Banking 🔷 \n\n#fintech #financialEcosys…",
      "post_date": "2019-05-29T08:47:00"
   },
   {
      "text": "RT @FabrickPlatform: If you also participate in @money2020 Europe, let's meet in Amsterdam! You can find us at stand K62 or contact us to m…",
      "post_date": "2019-05-29T08:47:00"
   },
   {
      "text": "RT @FabrickPlatform: #Axerve will be at the #NetcommForum 2019 today and tomorrow. From 3 to 5 June he will be at @money2020 Europe at #Fab…",
      "post_date": "2019-05-29T08:47:00"
   },
   {
      "text": "#Axerve will be at the #NetcommForum 2019 today and tomorrow. From 3 to 5 June he will be at @money2020 Europe at… https://t.co/QdGkogqzD3",
      "post_date": "2019-05-29T08:46:00"
   },
   {
      "text": "RT @Jonas_epp: “Its the #mindset which is the key enabler for #openbanking beside #technology - and this seems still to lack behind in #swi…",
      "post_date": "2019-05-29T08:41:00"
   },
   {
      "text": "If you also participate in @money2020 Europe, let's meet in Amsterdam! You can find us at stand K62 or contact us t… https://t.co/MfehFjZwoO",
      "post_date": "2019-05-29T08:41:00"
   },
   {
      "text": "RT @IIDB_ie: Early bird tickets until May 31st!\n#FinTech track with @markgcummins of @BusinessDCU. \n\n→ #P2P Lending\n→ #crowdfunding\n→ #Open…",
      "post_date": "2019-05-29T08:41:00"
   },
   {
      "text": "Early bird tickets until May 31st!\n#FinTech track with @markgcummins of @BusinessDCU. \n\n→ #P2P Lending\n→… https://t.co/3fxXBHj2Xj",
      "post_date": "2019-05-29T08:35:00"
   },
   {
      "text": "RT @joris_hensen: Amazing day at #Finance20 🇨🇭and panel with @roitavor @jamesferreti @pahueg about reality of #OpenBanking. Our discussions…",
      "post_date": "2019-05-29T08:31:00"
   },
   {
      "text": "RT @cttiernan: @MyKron opening up the @ThinkRiseLDN #OpenBanking morning session. https://t.co/kN7U0vzekM",
      "post_date": "2019-05-29T08:30:00"
   },
   {
      "text": "RT @BakerLJ: Wow! Standing room only for the latest #RisePresents event: #OpenBanking\n\nHere on behalf of @seldon_io to hear from @imrangula…",
      "post_date": "2019-05-29T08:30:00"
   },
   {
      "text": "In this #OpenBanking TPP client #authentication blog post, learn how to implement Private Key JWT using the Ping Id… https://t.co/EDpELK4l9I",
      "post_date": "2019-05-29T08:30:00"
   },
   {
      "text": "RT @Lumio_app: We are at @ThinkRiseLDN this morning. Hearing the latest update on #openBanking from @imrangulam     #lumio #OpenBanking htt…",
      "post_date": "2019-05-29T08:30:00"
   },
   {
      "text": "RT @furthermore_ux: Nice to hear about the importance of the user experience in #OpenBanking by @imrangulam @ThinkRiseLDN this morning. Fri…",
      "post_date": "2019-05-29T08:30:00"
   },
   {
      "text": "RT @trezeohq: Great to get an update on @UKOpenBanking from @imrangulam. It's all about making transaction data more useful, and safer, for…",
      "post_date": "2019-05-29T08:27:00"
   },
   {
      "text": "RT @BakerLJ: Wow! Standing room only for the latest #RisePresents event: #OpenBanking\n\nHere on behalf of @seldon_io to hear from @imrangula…",
      "post_date": "2019-05-29T08:27:00"
   },
   {
      "text": "Nice to hear about the importance of the user experience in #OpenBanking by @imrangulam @ThinkRiseLDN this morning.… https://t.co/OTUyUAJA5n",
      "post_date": "2019-05-29T08:23:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T08:19:00"
   },
   {
      "text": "RT @BakerLJ: Wow! Standing room only for the latest #RisePresents event: #OpenBanking\n\nHere on behalf of @seldon_io to hear from @imrangula…",
      "post_date": "2019-05-29T08:17:00"
   },
   {
      "text": "RT @ThinkRiseLDN: Full house this morning to hear from @imrangulam on #OpenBanking - the present and the future #HomeOfFinTech https://t.co…",
      "post_date": "2019-05-29T08:17:00"
   },
   {
      "text": "Full house this morning to hear from @imrangulam on #OpenBanking - the present and the future #HomeOfFinTech https://t.co/1mPdncYajc",
      "post_date": "2019-05-29T08:17:00"
   },
   {
      "text": "RT @Ana_f4p: \"it should be easier for financial companies to connect to each other in the UK, where #openbanking regulations ... encourage…",
      "post_date": "2019-05-29T08:16:00"
   },
   {
      "text": "Packed house for our Rise Presents and #openbanking #homeoffintech @ThinkRiseLDN #Fintech #Londonisopen https://t.co/mrt9vZFYYP",
      "post_date": "2019-05-29T08:14:00"
   },
   {
      "text": "Indonesia Unveils Payment System Roadmap, Launches QR Code System - Regulation Asia - https://t.co/hMjml3VuXy #openbanking #banking #digital",
      "post_date": "2019-05-29T08:13:00"
   },
   {
      "text": "Great to get an update on @UKOpenBanking from @imrangulam. It's all about making transaction data more useful, and… https://t.co/7JPKsa7vy5",
      "post_date": "2019-05-29T08:13:00"
   },
   {
      "text": "RT @rgarciadelacruz: See you 4th July in the #uRegTech #Unconference with +80 CEOs &amp; Founders of the most innovative in #OpenBanking #PSD2…",
      "post_date": "2019-05-29T08:11:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T08:08:00"
   },
   {
      "text": "We are at @ThinkRiseLDN this morning. Hearing the latest update on #openBanking from @imrangulam     #lumio… https://t.co/YFeKro0ixB",
      "post_date": "2019-05-29T08:08:00"
   },
   {
      "text": "Wow! Standing room only for the latest #RisePresents event: #OpenBanking\n\nHere on behalf of @seldon_io to hear from… https://t.co/L5AUQyWqVe",
      "post_date": "2019-05-29T08:07:00"
   },
   {
      "text": "RT @joris_hensen: Amazing day at #Finance20 🇨🇭and panel with @roitavor @jamesferreti @pahueg about reality of #OpenBanking. Our discussions…",
      "post_date": "2019-05-29T08:06:00"
   },
   {
      "text": "RT @chloealready: It's packed today @ThinkRiseLDN for this #OpenBanking #event #fintech. Great intro @MyKron as always @imrangulam  @Barcla…",
      "post_date": "2019-05-29T08:06:00"
   },
   {
      "text": "RT @cttiernan: @MyKron opening up the @ThinkRiseLDN #OpenBanking morning session. https://t.co/kN7U0vzekM",
      "post_date": "2019-05-29T08:06:00"
   },
   {
      "text": "Monetize your #OpenBanking #APIs through #marketplace #banking. Concierge Bank™ App, a marketplace-banking product… https://t.co/47DV6zMNsD",
      "post_date": "2019-05-29T08:06:00"
   },
   {
      "text": "It's packed today @ThinkRiseLDN for this #OpenBanking #event #fintech. Great intro @MyKron as always @imrangulam… https://t.co/RNzHNCnzIL",
      "post_date": "2019-05-29T08:06:00"
   },
   {
      "text": "@MyKron opening up the @ThinkRiseLDN #OpenBanking morning session. https://t.co/kN7U0vzekM",
      "post_date": "2019-05-29T08:05:00"
   },
   {
      "text": "RT @KaiClaus: EY's #payments newsletter covers topics from #OpenBanking transformation to balancing #PSD2 and #GDPR. Read the complete arti…",
      "post_date": "2019-05-29T08:05:00"
   },
   {
      "text": "“Banks are facing a rush to capitalise on the modern retail customer and they’re not paying enough respect to organ… https://t.co/knqCzcbLwJ",
      "post_date": "2019-05-29T08:05:00"
   },
   {
      "text": "\"it should be easier for financial companies to connect to each other in the UK, where #openbanking regulations ...… https://t.co/2gMqlRrlRx",
      "post_date": "2019-05-29T07:52:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Open Banking: The problem is complex\n\nhttps://t.co/qQ6pr8GlxO\n\n#Innovation #Fintech #Banking #PSD2 #OpenB…",
      "post_date": "2019-05-29T07:43:00"
   },
   {
      "text": "With Resident your bank statements can be imported via CSV files OR live bank feeds can be set up automatically sen… https://t.co/tuEaswinUv",
      "post_date": "2019-05-29T07:40:00"
   },
   {
      "text": "RT @Guardsquare: Visit us at #Money2020EU 3-5 June, to learn how we can help your business comply with #PSD2 regulations. @money2020 #appse…",
      "post_date": "2019-05-29T07:35:00"
   },
   {
      "text": "The slides from the #openbanking and #security forum in Mexico - https://t.co/o1xsbVyVU7  #PSD2 #IAM #banking https://t.co/8HRtgBMcoG",
      "post_date": "2019-05-29T07:34:00"
   },
   {
      "text": "Interesting findings by @MoneyhubApp on UK savings habits #fintech #OpenBanking https://t.co/EVW8YdGSUa",
      "post_date": "2019-05-29T07:33:00"
   },
   {
      "text": "US open banking fintech Plaid confirms UK launch - Financial News - https://t.co/grl5QB17So #openbanking #banking #digital",
      "post_date": "2019-05-29T07:33:00"
   },
   {
      "text": "Visit us at #Money2020EU 3-5 June, to learn how we can help your business comply with #PSD2 regulations. @money2020… https://t.co/dri90xsFs1",
      "post_date": "2019-05-29T07:30:00"
   },
   {
      "text": "EY's #payments newsletter covers topics from #OpenBanking transformation to balancing #PSD2 and #GDPR. Read the com… https://t.co/L2QrXS3LJz",
      "post_date": "2019-05-29T07:22:00"
   },
   {
      "text": "Financial Institutions Conflicted but Cautiously Optimistic About Open Banking Opportunity - The Fintech Times -… https://t.co/B3WCiwNWym",
      "post_date": "2019-05-29T07:18:00"
   },
   {
      "text": "Today at #motorfinance19 in Munich. Another day of great discussions about digitalization of #automotive @FintecHQ… https://t.co/2Nej0kMuEp",
      "post_date": "2019-05-29T07:16:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-05-29T07:05:00"
   },
   {
      "text": "RT JimMarous: RT Xbond49: One in 10 #European 🇪🇺 #Banks to disappear over the next five years from ATKearney… https://t.co/mljtHbvML9",
      "post_date": "2019-05-29T07:05:00"
   },
   {
      "text": "@saltedge acts as a bridge between #banks, #eWallets &amp; other #financialinstitutions and end-users, solving problems… https://t.co/Kth6WCXNe3",
      "post_date": "2019-05-29T07:01:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T07:00:00"
   },
   {
      "text": "GPS Head of Marketing, @NimHaas shares her views on 'Is #openbanking ready to catch fire?' Featured on page 16 of… https://t.co/X2VeWJpeOH",
      "post_date": "2019-05-29T06:45:00"
   },
   {
      "text": "RT @FGraillot: Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️  https://t.co/…",
      "post_date": "2019-05-29T06:44:00"
   },
   {
      "text": "RT @BlackieMcDonald: The introduction of #openbanking on 1st July will undoubtedly shake up the market. @Fiserv shares how open banking wil…",
      "post_date": "2019-05-29T06:39:00"
   },
   {
      "text": "Starting with #OpenBanking, how technology helps reshaping the banking industry. #FinTech #API #InsurTech\n\n➡️… https://t.co/3jp44CPV73",
      "post_date": "2019-05-29T06:36:00"
   },
   {
      "text": "RT @rgarciadelacruz: See you 4th July in the #uRegTech #Unconference with +80 CEOs &amp; Founders of the most innovative in #OpenBanking #PSD2…",
      "post_date": "2019-05-29T06:31:00"
   },
   {
      "text": "#openbanking news by #Fabrick \n🔷 One Year On: The Impact of the #GDPR on Digital Banking 🔷 \n\n#fintech… https://t.co/9wHooM6yXk",
      "post_date": "2019-05-29T06:29:00"
   },
   {
      "text": "Leveling the playing field with open banking - Ranjit Sarai ,Chief Product Officer at @getstack STACK gives fintech… https://t.co/vK0ZLiRlqY",
      "post_date": "2019-05-29T06:26:00"
   },
   {
      "text": "#Banking without a #bank? That's exactly what #PSD2 &amp; #OpenBanking will lead to! As a #bank you can't afford to los… https://t.co/S2rxneZnLi",
      "post_date": "2019-05-29T06:24:00"
   },
   {
      "text": "Explore the hottest trends and developments impacting the payments industry in EY's latest #payments newsletter.… https://t.co/788Sp5fP0A",
      "post_date": "2019-05-29T06:14:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-29T06:10:00"
   },
   {
      "text": "RT @antgrasso: [Open Banking] PSD2 can translate into new sources of revenue for you and your partner ecosystem, and can deliver a friction…",
      "post_date": "2019-05-29T05:57:00"
   },
   {
      "text": "RT @NZSounds: @plambrechtsen @RomesSiena @scottjpalmer @paulbrislen @Coleadve @DylanReeve @Paymark @RumbleTalk That's the beauty of Paymark…",
      "post_date": "2019-05-29T05:40:00"
   },
   {
      "text": "RT @Avaloq: The future of banking lies in #openbanking. Its aim is to make the world of banking more open and accessible. Read in our blogp…",
      "post_date": "2019-05-29T05:36:00"
   },
   {
      "text": "The future of banking lies in #openbanking. Its aim is to make the world of banking more open and accessible. Read… https://t.co/sMYed9SKIh",
      "post_date": "2019-05-29T05:30:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-05-29T05:11:00"
   },
   {
      "text": "RT @TheoSchilter: What a great day for #OpenBanking in europe! Thanks to #Finance20 the collaboration among #FinTech and #Banks just got ac…",
      "post_date": "2019-05-29T05:05:00"
   },
   {
      "text": "One of the 1st use-cases leveraging PIS with #openbanking and a salvo targeted towards death of #cards within… https://t.co/8H3QIa99e6",
      "post_date": "2019-05-29T05:00:00"
   },
   {
      "text": "RT @pingidentity: Read this APAC blog to learn how the frameworks &amp; standards piloted by #OpenBanking are leading to an Open API regime, be…",
      "post_date": "2019-05-29T04:28:00"
   },
   {
      "text": "RT @BlackieMcDonald: The introduction of #openbanking on 1st July will undoubtedly shake up the market. @Fiserv shares how open banking wil…",
      "post_date": "2019-05-29T04:26:00"
   },
   {
      "text": "RT @sophie_al: Have you heard of the @ForgeRock Open Banking Sandbox as a Service? It's a fully compliant solution for #OpenBanking and #PS…",
      "post_date": "2019-05-29T04:24:00"
   },
   {
      "text": "The introduction of #openbanking on 1st July will undoubtedly shake up the market. @Fiserv shares how open banking… https://t.co/K7ASMAqsPB",
      "post_date": "2019-05-29T04:12:00"
   },
   {
      "text": "Growth Street in dispute over Open Banking data - P2P Finance News - https://t.co/0feobQTR83 #openbanking #banking #digital",
      "post_date": "2019-05-29T04:08:00"
   },
   {
      "text": "RT @Jonas_epp: “Its the #mindset which is the key enabler for #openbanking beside #technology - and this seems still to lack behind in #swi…",
      "post_date": "2019-05-29T04:06:00"
   },
   {
      "text": "Read this APAC blog to learn how the frameworks &amp; standards piloted by #OpenBanking are leading to an Open API regi… https://t.co/QBODie5N71",
      "post_date": "2019-05-29T04:00:00"
   },
   {
      "text": "A scathing Royal Commission. A new Code of Practice. Digital disruption and #OpenBanking. What can banks do to surv… https://t.co/n0CiVG2quS",
      "post_date": "2019-05-29T04:00:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-29T03:37:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-29T03:07:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-29T02:29:00"
   },
   {
      "text": "RT @FIMEnews: On May 25-26 we’re speaking at The Digital Fifth’s #openbanking masterclass in Mumbai. To become an expert in open #APIs, reg…",
      "post_date": "2019-05-29T02:02:00"
   },
   {
      "text": "RT @jasonlratcliffe: Really interesting talk this morning from Proviso + FinTech Australia + Stone and Chalk at Lot14. Very exciting to lis…",
      "post_date": "2019-05-29T01:33:00"
   },
   {
      "text": "#M2020EU is just a week away! \n\nGet a demo of Seamless #CX, 1st class #privacy #ux and #Consent management.\n\nJoin t… https://t.co/x8rNJABewT",
      "post_date": "2019-05-29T01:22:00"
   },
   {
      "text": "Really interesting talk this morning from Proviso + FinTech Australia + Stone and Chalk at Lot14. Very exciting to… https://t.co/NS5vFJ1n7L",
      "post_date": "2019-05-29T01:13:00"
   },
   {
      "text": "RT @MIjarral: When we get to truly open platforms and marketplaces of #APIs, apps &amp; #analytics, then we can start to fully integrate bankin…",
      "post_date": "2019-05-29T01:07:00"
   },
   {
      "text": "RT @MIjarral: When we get to truly open platforms and marketplaces of #APIs, apps &amp; #analytics, then we can start to fully integrate bankin…",
      "post_date": "2019-05-29T01:06:00"
   },
   {
      "text": "When we get to truly open platforms and marketplaces of #APIs, apps &amp; #analytics, then we can start to fully integr… https://t.co/1ZAOcbQ3KW",
      "post_date": "2019-05-29T01:06:00"
   },
   {
      "text": "6 key areas #banks should focus on now to drive maximum value from #openbanking:\n #banking https://t.co/L5fqn5Wows",
      "post_date": "2019-05-29T00:45:00"
   },
   {
      "text": "RT @NZSounds: Check out these #DailyDeals online now!\nhttps://t.co/SYv1mXr9E4  \n\nNo credit card?\n@WestpacNZ @CoopBankNZ &amp; @ASBBank mobile a…",
      "post_date": "2019-05-29T00:36:00"
   },
   {
      "text": "RT @NZSounds: Check out these #DailyDeals online now!\nhttps://t.co/SYv1mXr9E4  \n\nNo credit card?\n@WestpacNZ @CoopBankNZ &amp; @ASBBank mobile a…",
      "post_date": "2019-05-29T00:35:00"
   },
   {
      "text": "Open Banking hobbled by outages - Finextra - https://t.co/Ukq7Cujwr0 #openbanking #banking #digital",
      "post_date": "2019-05-29T00:33:00"
   },
   {
      "text": "ThoughtWorks: Monetising Open Banking  by @thoughtworks #financialservices #openbanking https://t.co/R98AILVtl0 via @SlideShare",
      "post_date": "2019-05-29T00:25:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-05-29T00:16:00"
   },
   {
      "text": "RT @Jonas_epp: “Its the #mindset which is the key enabler for #openbanking beside #technology - and this seems still to lack behind in #swi…",
      "post_date": "2019-05-29T00:12:00"
   },
   {
      "text": "Calling all fintechs, banks, developers - book a meeting today with Finastra at Money20/20 to see how you can start… https://t.co/KmRvs4aJYD",
      "post_date": "2019-05-28T23:09:00"
   },
   {
      "text": "one in ten #European #banks will disappear over e 5 yrs as more agile #digital challengers embrace the changes wrou… https://t.co/575Jp5nyt5",
      "post_date": "2019-05-28T23:06:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T22:19:00"
   },
   {
      "text": "RT @TheBanker: [Video] Open Banking fosters a 'coopetitive' environment between #fintechs and #banks, explains HSBC’s Nadine Lagarmitte. In…",
      "post_date": "2019-05-28T21:53:00"
   },
   {
      "text": "RT @PaymentCounsel: 'Open Banking and Innovation: Let's Not Wait for PSD3!'\n\nRead my new article on the Payments Guru website: https://t.co…",
      "post_date": "2019-05-28T21:51:00"
   },
   {
      "text": "RT @iressUK: 96% of #lenders surveyed believe #OpenBanking will improve the mortgage application process over next 2 years https://t.co/LUg…",
      "post_date": "2019-05-28T21:30:00"
   },
   {
      "text": "RT @Fin_Rights_CLC: 'People experiencing financial hardship are valuable to fringe lenders and other services who may take advantage of the…",
      "post_date": "2019-05-28T21:29:00"
   },
   {
      "text": "RT @68santos: Cryptocurrency Visa card could open a back door for dirty money.\nRegulators must stand firm on anti-money laundering requirem…",
      "post_date": "2019-05-28T21:28:00"
   },
   {
      "text": "Cryptocurrency Visa card could open a back door for dirty money.\nRegulators must stand firm on anti-money launderin… https://t.co/Tsp4Y6RNUf",
      "post_date": "2019-05-28T21:28:00"
   },
   {
      "text": "RT @PwCCollider: Just as @anna_maria_maj , we at @PwC @PwCCollider are equally excited by #openbanking &amp; #fintech in general. That is why w…",
      "post_date": "2019-05-28T21:18:00"
   },
   {
      "text": "RT @jedmurphy: #OpenBanking and its venture beyond bank data https://t.co/HW8op8MV51 via @LinkedIn  #cardlytics",
      "post_date": "2019-05-28T21:09:00"
   },
   {
      "text": "When it comes to open banking, credit unions may have some unexpected advantages over banks. @jessicamacht,… https://t.co/sROryqoFii",
      "post_date": "2019-05-28T21:02:00"
   },
   {
      "text": "Cryptocurrency Visa card could open a back door for dirty money.\nRegulators must stand firm on anti-money launderin… https://t.co/Hgh8W6iWPm",
      "post_date": "2019-05-28T20:59:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T20:50:00"
   },
   {
      "text": "Open banking could be a huge opportunity for your bank. Read our latest blog to see how to make the most of it.… https://t.co/58D3WZTv2m",
      "post_date": "2019-05-28T20:30:00"
   },
   {
      "text": "RT @UrsBolt: In #Thailand the #banks collaborate to build a common #Blockchain #ecosystem.\n\nSam Tanskul, #KrungsriFinnovate at @TheAsianBan…",
      "post_date": "2019-05-28T20:24:00"
   },
   {
      "text": "RT @rgarciadelacruz: See you 4th July in the #uRegTech #Unconference with +80 CEOs &amp; Founders of the most innovative in #OpenBanking #PSD2…",
      "post_date": "2019-05-28T20:23:00"
   },
   {
      "text": "My relationship with #money has changed for the better thanks to #fintech and #openbanking. I am now back in contro… https://t.co/Q43O2tgnKg",
      "post_date": "2019-05-28T20:10:00"
   },
   {
      "text": "RT @TheoSchilter: What a great day for #OpenBanking in europe! Thanks to #Finance20 the collaboration among #FinTech and #Banks just got ac…",
      "post_date": "2019-05-28T20:08:00"
   },
   {
      "text": "RT @creditkudos: Less than 2 weeks to go until voting finished for the Consumer @CreditAwards! To vote for us, head here: https://t.co/ERXN…",
      "post_date": "2019-05-28T19:59:00"
   },
   {
      "text": "In the future, #banking will be about making connections at the right time, through the right channel with the righ… https://t.co/QgOIyEPorz",
      "post_date": "2019-05-28T19:57:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T19:42:00"
   },
   {
      "text": "RT @nordigen: Thrilled to announce that @TietoCorp is partnering with Nordigen! Our solutions will enhance Tieto's Insurance-in-a-Box and W…",
      "post_date": "2019-05-28T19:34:00"
   },
   {
      "text": "RT @enfuce: Come and meet us at #Money2020 to discuss how #collaboration is the key factor in #paymentprocessing and #openbanking, and how…",
      "post_date": "2019-05-28T19:32:00"
   },
   {
      "text": "RT @WeAre80dB: When someone mentions open banking, you might think of solutions like automatic payments, automatic savings and checking how…",
      "post_date": "2019-05-28T19:26:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T19:14:00"
   },
   {
      "text": "RT @rgarciadelacruz: See you 4th July in the #uRegTech #Unconference with +80 CEOs &amp; Founders of the most innovative in #OpenBanking #PSD2…",
      "post_date": "2019-05-28T19:11:00"
   },
   {
      "text": "RT @joris_hensen: Amazing day at #Finance20 🇨🇭and panel with @roitavor @jamesferreti @pahueg about reality of #OpenBanking. Our discussions…",
      "post_date": "2019-05-28T19:04:00"
   },
   {
      "text": "RT @rgarciadelacruz: See you 4th July in the #uRegTech #Unconference with +80 CEOs &amp; Founders of the most innovative in #OpenBanking #PSD2…",
      "post_date": "2019-05-28T19:03:00"
   },
   {
      "text": "RT @TheoSchilter: What a great day for #OpenBanking in europe! Thanks to #Finance20 the collaboration among #FinTech and #Banks just got ac…",
      "post_date": "2019-05-28T19:03:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-05-28T18:59:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-05-28T18:58:00"
   },
   {
      "text": "RT @joris_hensen: Amazing day at #Finance20 🇨🇭and panel with @roitavor @jamesferreti @pahueg about reality of #OpenBanking. Our discussions…",
      "post_date": "2019-05-28T18:50:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-05-28T18:50:00"
   },
   {
      "text": "RT @wso2: 📌 Save the date: June 6, 2019\n#OpenBanking is set to revolutionize the #financialservices industry in #Mexico. Our webinar will e…",
      "post_date": "2019-05-28T18:46:00"
   },
   {
      "text": "RT @IIDB_ie: Early bird tickets until May 31st!\n#FinTech track with @markgcummins of @BusinessDCU. \n\n→ #P2P Lending\n→ #crowdfunding\n→ #Open…",
      "post_date": "2019-05-28T18:23:00"
   },
   {
      "text": "RT @rinoborini: Panel #OpenBanking w/ @joris_hensen @JamesFerretti @roitavor and Moderator @pahueg 🙌🏻 Hm, no Swiss Bank on the Panel... why…",
      "post_date": "2019-05-28T18:16:00"
   },
   {
      "text": "FSI BLOG - Four key tactics to better deliver #APIs and improve #customerexperience through #openbanking -… https://t.co/n2GKMmnR14",
      "post_date": "2019-05-28T18:00:00"
   },
   {
      "text": "RT @BitcoinLvx: @BitcoinLvx is a true store of value with no volatility #puutwallet #fintech #wallets #ewallets #digitalwallets #govtech #o…",
      "post_date": "2019-05-28T17:57:00"
   },
   {
      "text": "RT @wso2: 📌 Save the date: June 6, 2019\n#OpenBanking is set to revolutionize the #financialservices industry in #Mexico. Our webinar will e…",
      "post_date": "2019-05-28T17:57:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T17:56:00"
   },
   {
      "text": "@BitcoinLvx is a true store of value with no volatility #puutwallet #fintech #wallets #ewallets #digitalwallets… https://t.co/owpW6iR7eR",
      "post_date": "2019-05-28T17:56:00"
   },
   {
      "text": "RT @ttavlas: New report calls out failing Open Banking API services - Finextra - https://t.co/y8ezD08NAh #openbanking #banking #digital",
      "post_date": "2019-05-28T17:55:00"
   },
   {
      "text": "RT @daviddoughty: RT @TheoSchilter: #OpenBanking wll be enriching as USB did back then - thanks #Finance20 #Fintech https://t.co/4BGKVLgqYA",
      "post_date": "2019-05-28T17:48:00"
   },
   {
      "text": "RT @TheoSchilter: Thanks @VolkerKoppe for showing how @Visa is helping to make #OpenBanking become a reality #Finance20 #FinTech @nummo_com…",
      "post_date": "2019-05-28T17:44:00"
   },
   {
      "text": "Thanks @VolkerKoppe for showing how @Visa is helping to make #OpenBanking become a reality #Finance20 #FinTech… https://t.co/P7flkMsS2u",
      "post_date": "2019-05-28T17:43:00"
   },
   {
      "text": "RT @joris_hensen: Amazing day at #Finance20 🇨🇭and panel with @roitavor @jamesferreti @pahueg about reality of #OpenBanking. Our discussions…",
      "post_date": "2019-05-28T17:38:00"
   },
   {
      "text": "RT @MastercardEU: We're getting ready for #Money2020EU next week iin Amsterdam and we hope to see you at our stand.  Join us to talk about…",
      "post_date": "2019-05-28T17:12:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T17:02:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-05-28T17:00:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Innovation] BBVA builds a global payment platform for the future\n\nhttps://t.co/u9iYGRxBN1\n\n#DigitalTransformation #Fin…",
      "post_date": "2019-05-28T16:53:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-05-28T16:42:00"
   },
   {
      "text": "RT @adnco_officiel: How is #AI Used in #Banking ?\n\n#ArtificialIntelligence #OpenBanking #OnlineBanking #FinancialInstitutions #Customer #Cu…",
      "post_date": "2019-05-28T16:41:00"
   },
   {
      "text": "What a great day for #OpenBanking in europe! Thanks to #Finance20 the collaboration among #FinTech and #Banks just… https://t.co/6FVQRPBBrJ",
      "post_date": "2019-05-28T16:38:00"
   },
   {
      "text": "[#Innovation] BBVA builds a global payment platform for the future\n\nhttps://t.co/u9iYGRxBN1\n\n#DigitalTransformation… https://t.co/pVW74FVaWG",
      "post_date": "2019-05-28T16:35:00"
   },
   {
      "text": "Payments as a driver for lifestyle #banking\n$41 Trillion in #Mobile #payments – #China tech target #digital banking… https://t.co/5nAPW7XqnO",
      "post_date": "2019-05-28T16:27:00"
   },
   {
      "text": "Time to showcase what's next for @wizelyapp. This is a culmination of immense learnings, relentless dreaming &amp; cons… https://t.co/ESTPUDv6JI",
      "post_date": "2019-05-28T16:26:00"
   },
   {
      "text": "How is #AI Used in #Banking ?\n\n#ArtificialIntelligence #OpenBanking #OnlineBanking #FinancialInstitutions #Customer… https://t.co/zMqNESh1GW",
      "post_date": "2019-05-28T16:23:00"
   },
   {
      "text": "New report calls out failing Open Banking API services - Finextra - https://t.co/y8ezD08NAh #openbanking #banking #digital",
      "post_date": "2019-05-28T16:08:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-05-28T15:59:00"
   },
   {
      "text": "RT @MastercardEU: We're getting ready for #Money2020EU next week iin Amsterdam and we hope to see you at our stand.  Join us to talk about…",
      "post_date": "2019-05-28T15:55:00"
   },
   {
      "text": "What does #OpenBanking look like to a futurist? Based in Hong Kong, @matejaperenic writes for our new white paper,… https://t.co/MUp5VHyTO0",
      "post_date": "2019-05-28T15:53:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-05-28T15:48:00"
   },
   {
      "text": "Amazing day at #Finance20 🇨🇭and panel with @roitavor @jamesferreti @pahueg about reality of #OpenBanking. Our discu… https://t.co/JzAkCjcyaa",
      "post_date": "2019-05-28T15:37:00"
   },
   {
      "text": "NatWest leverages open banking to cut transaction fees by 25% - NFC World - https://t.co/Bxf0vbPiBo #openbanking #banking #digital",
      "post_date": "2019-05-28T15:33:00"
   },
   {
      "text": "In #Thailand the #banks collaborate to build a common #Blockchain #ecosystem.\n\nSam Tanskul, #KrungsriFinnovate at… https://t.co/Gmxv11hy5J",
      "post_date": "2019-05-28T15:33:00"
   },
   {
      "text": "RT @Identiverse: Get an overview of the current #OpenBanking projects around the world &amp; detail on the differences in each jurisdiction's i…",
      "post_date": "2019-05-28T15:32:00"
   },
   {
      "text": "RT @meniga: Don't miss @georgl panel presentation @money2020 in Amsterdam on 5th of June at 9:35 am! Georg will be sharing insights on how…",
      "post_date": "2019-05-28T15:32:00"
   },
   {
      "text": "According to @Capgemini, 78% of banks want to use API to improve customer service. Here's\nfour key tactics to help… https://t.co/rfOLLLuF9h",
      "post_date": "2019-05-28T15:32:00"
   },
   {
      "text": "RT @token_io: First anniversary of this milestone rapidly approaching! Watch this space. #OpenBanking #payments https://t.co/tD8IeQcYYL",
      "post_date": "2019-05-28T15:28:00"
   },
   {
      "text": "RT @EquinixUK: Exciting times ahead for the #fintech industry, with #openbanking excellence bringing like-minded people together to share t…",
      "post_date": "2019-05-28T15:26:00"
   },
   {
      "text": "RT @CREALOGIX_en: Which markets are ready for #OpenBanking? What are the regulatory and technological framework conditions? Download our fr…",
      "post_date": "2019-05-28T15:23:00"
   },
   {
      "text": "RT @wso2: 📌 Save the date: June 6, 2019\n#OpenBanking is set to revolutionize the #financialservices industry in #Mexico. Our webinar will e…",
      "post_date": "2019-05-28T15:23:00"
   },
   {
      "text": "📌 Save the date: June 6, 2019\n#OpenBanking is set to revolutionize the #financialservices industry in #Mexico. Our… https://t.co/m4z1RgDPyM",
      "post_date": "2019-05-28T15:19:00"
   },
   {
      "text": "RT @Geezeo: No one really knows exactly how much #disruption and dislocation #AI will cause. However, FIs that find smart uses for AI will…",
      "post_date": "2019-05-28T15:18:00"
   },
   {
      "text": "RT EngineLondon \"RT cinteractionlab: #OpenBanking is revolutionising the way people access and understand their mon… https://t.co/nOeRqyVvc6",
      "post_date": "2019-05-28T15:11:00"
   },
   {
      "text": "That's a wrap! #fidorgrandtour in #Manila #Philippines is over. We continue our #grandtour to #Bangkok #Thailand ne… https://t.co/rJWq7tJN81",
      "post_date": "2019-05-28T15:11:00"
   },
   {
      "text": "RT @cinteractionlab: #OpenBanking is revolutionising the way people access and understand their money. What role does design play in this e…",
      "post_date": "2019-05-28T15:08:00"
   },
   {
      "text": "Check out our partner company @money2020 next week! Fantastic solutions for: #openbanking #PSD2 #Payments… https://t.co/tyvwq1cIy1",
      "post_date": "2019-05-28T15:05:00"
   },
   {
      "text": "Five #PaymentTrends That Decide The #Future Of #Payments\n\n#PaymentsMarkets #Trends #PaymentsAsAService #License… https://t.co/Xq7PdiDq2B",
      "post_date": "2019-05-28T15:03:00"
   },
   {
      "text": "To design an effective #OpenBanking framework for Canada, it helps to understand how other jurisdictions are naviga… https://t.co/7XlqhqzulN",
      "post_date": "2019-05-28T15:01:00"
   },
   {
      "text": "When someone mentions open banking, you might think of solutions like automatic payments, automatic savings and che… https://t.co/FjgyBkvkGI",
      "post_date": "2019-05-28T15:00:00"
   },
   {
      "text": "RT @The_LHoFT: The Future of #Banking:\n\n\"The new world is one of transient relationships, shorter-term commitments and everything online al…",
      "post_date": "2019-05-28T14:55:00"
   },
   {
      "text": "RT @EquinixUK: Exciting times ahead for the #fintech industry, with #openbanking excellence bringing like-minded people together to share t…",
      "post_date": "2019-05-28T14:53:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Open Banking: The problem is complex\n\nhttps://t.co/qQ6pr8GlxO\n\n#Innovation #Fintech #Banking #PSD2 #OpenB…",
      "post_date": "2019-05-28T14:51:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Open Banking: The problem is complex\n\nhttps://t.co/qQ6pr8GlxO\n\n#Innovation #Fintech #Banking #PSD2 #OpenB…",
      "post_date": "2019-05-28T14:50:00"
   },
   {
      "text": "NatWest leverages open banking to cut transaction fees by 25% #payments #paytech #openbanking https://t.co/T2XZA9goMA",
      "post_date": "2019-05-28T14:50:00"
   },
   {
      "text": "Just as @anna_maria_maj , we at @PwC @PwCCollider are equally excited by #openbanking &amp; #fintech in general. That i… https://t.co/7wHjU7qsE1",
      "post_date": "2019-05-28T14:45:00"
   },
   {
      "text": "RT @MastercardEU: Let's talk #innovation #technology #openbanking and more! We're getting ready for #Money2020EU next week in Amsterdam and…",
      "post_date": "2019-05-28T14:43:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T14:41:00"
   },
   {
      "text": "Burger King’s Impossible Burger Test Brings In Traffic - https://t.co/so093EXvnj - https://t.co/MiuEUXdFkX #openbanking #banking #digital",
      "post_date": "2019-05-28T14:33:00"
   },
   {
      "text": "SBI Virtual Currencies: The Bank-Backed Japanese Exchange With Big Plans - Cointelegraph - https://t.co/ajv3Cbsugx… https://t.co/pVfDTMsp4T",
      "post_date": "2019-05-28T14:33:00"
   },
   {
      "text": "What New #BusinessModels does #OpenBanking Enable ?\n\n#Customers #Needs #Behaviors #Technology… https://t.co/lQZulYRLxt",
      "post_date": "2019-05-28T14:32:00"
   },
   {
      "text": "No one really knows exactly how much #disruption and dislocation #AI will cause. However, FIs that find smart uses… https://t.co/mMbjpNwusD",
      "post_date": "2019-05-28T14:30:00"
   },
   {
      "text": "Exciting times ahead for the #fintech industry, with #openbanking excellence bringing like-minded people together t… https://t.co/81x4HnIwTy",
      "post_date": "2019-05-28T14:30:00"
   },
   {
      "text": "96% of #lenders surveyed believe #OpenBanking will improve the mortgage application process over next 2 years… https://t.co/q8UiuMy38z",
      "post_date": "2019-05-28T14:25:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Open Banking: The problem is complex\n\nhttps://t.co/qQ6pr8GlxO\n\n#Innovation #Fintech #Banking #PSD2 #OpenB…",
      "post_date": "2019-05-28T14:20:00"
   },
   {
      "text": "Welcome to new #OpenBanking providers @yoyowallet, Industrial and Commercial Bank of China Limited &amp; Oxlin. Search… https://t.co/igqpVK5o3W",
      "post_date": "2019-05-28T14:20:00"
   },
   {
      "text": "[#Infographic] Open Banking: The problem is complex\n\nhttps://t.co/qQ6pr8GlxO\n\n#Innovation #Fintech #Banking #PSD2… https://t.co/cRTfxLFPyD",
      "post_date": "2019-05-28T14:20:00"
   },
   {
      "text": "@token_io getting a mention in the @EPAssoc #Payments 101 course as the 1st PISP to complete end to end transaction using #OpenBanking",
      "post_date": "2019-05-28T14:16:00"
   },
   {
      "text": "RT @DigitalBankingT: Open Payments targets Nordic and European markets with €1.2m seed round - Fintech Futures… https://t.co/rcWpg511oD",
      "post_date": "2019-05-28T14:11:00"
   },
   {
      "text": "RT @ttavlas: Open Payments targets Nordic and European markets with €1.2m seed round - Fintech Futures - https://t.co/BfcenP761I #openbanki…",
      "post_date": "2019-05-28T14:07:00"
   },
   {
      "text": "CEO of Nummo joins Visa and Deutsche Bank discussing future of #openbanking and why product pushes are not the way… https://t.co/hj4N63f6pA",
      "post_date": "2019-05-28T14:04:00"
   },
   {
      "text": "Open Payments targets Nordic and European markets with €1.2m seed round - Fintech Futures - https://t.co/BfcenP761I… https://t.co/3ZSnAB1tBz",
      "post_date": "2019-05-28T14:03:00"
   },
   {
      "text": "Open banking is the law of the land in Europe, but it's only a whisper among U.S. bank regulators. Whether it's a h… https://t.co/SB5fMIbrIP",
      "post_date": "2019-05-28T13:55:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T13:53:00"
   },
   {
      "text": "RT @tom_studer: Enjoyed the morning session @finance20ch already🤙\nInteresting panel discussion about #openbanking #api with @pahueg @joris_…",
      "post_date": "2019-05-28T13:51:00"
   },
   {
      "text": "With the emergence of #openbanking, it’s clear that the bank branch is far from dead. Learn more about reimagining… https://t.co/hewFpruuFu",
      "post_date": "2019-05-28T13:48:00"
   },
   {
      "text": "RT @GetFutureBank: Great to see the team from one of our newest partners and market entrant @AlignMoney on stage at Finovate SF.  Their Ban…",
      "post_date": "2019-05-28T13:47:00"
   },
   {
      "text": "\"#OpenBanking is happening because there is an opportunity to make the financial infrastructure of a nation more ef… https://t.co/ov45kaP2Jz",
      "post_date": "2019-05-28T13:44:00"
   },
   {
      "text": "As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity.… https://t.co/BM5lqrDd3G",
      "post_date": "2019-05-28T13:36:00"
   },
   {
      "text": "The world of payments is well and truly open #Banking #openbanking #digital  https://t.co/K9tCOGlgPH",
      "post_date": "2019-05-28T13:35:00"
   },
   {
      "text": "Swedish fintech startup Open Payments raises €1.2 million - https://t.co/rLnSZxg5GC - https://t.co/EbiicIMSUl #openbanking #banking #digital",
      "post_date": "2019-05-28T13:33:00"
   },
   {
      "text": "Get data about financial institution locations and demographics with FDIC Bank Data API https://t.co/Pv4AzcKhnc… https://t.co/wSFbAEh5qE",
      "post_date": "2019-05-28T13:32:00"
   },
   {
      "text": "RT @enfuce: Come and meet us at #Money2020 to discuss how #collaboration is the key factor in #paymentprocessing and #openbanking, and how…",
      "post_date": "2019-05-28T13:30:00"
   },
   {
      "text": "RT @ubleam: 🙏🏻 Qualified scaleup in Financial Services. \n\n#InnovationAndTechnology #OpenBanking #OpenInnovation #OpenX #CustomerExperience…",
      "post_date": "2019-05-28T13:25:00"
   },
   {
      "text": "How #openbanking could save branch banking https://t.co/dgJQ9kzQG5 via @EYnews \n#fintech #banking #APIs https://t.co/Ogfh4gzmf1",
      "post_date": "2019-05-28T13:05:00"
   },
   {
      "text": "Which markets are ready for #OpenBanking? What are the regulatory and technological framework conditions? Download… https://t.co/xmQ1D6AZX8",
      "post_date": "2019-05-28T13:01:00"
   },
   {
      "text": "UK #OpenBanking initiative stalling due to bank led outages https://t.co/7hGQLgv5S2",
      "post_date": "2019-05-28T13:00:00"
   },
   {
      "text": "As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity.… https://t.co/1dTAuWX3EG",
      "post_date": "2019-05-28T12:56:00"
   },
   {
      "text": "RT @TheBanker: [Video] Open Banking fosters a 'coopetitive' environment between #fintechs and #banks, explains HSBC’s Nadine Lagarmitte. In…",
      "post_date": "2019-05-28T12:45:00"
   },
   {
      "text": "RT @toddschweitzer: new corp vc fund in Philippines - Aboitiz / Unionbank #fintech #openbanking #startupsea https://t.co/KKHufla3Am",
      "post_date": "2019-05-28T12:26:00"
   },
   {
      "text": "Next big step after BaaS (Banking as a Service Platform) launched in 2018.  https://t.co/Nrqp6zLUuQ #openbanking… https://t.co/CINGGfSBe0",
      "post_date": "2019-05-28T12:25:00"
   },
   {
      "text": "#Openbanking is the #Futureofbanking\n\nIt has become apparent that the future of #banking will be driven by open bus… https://t.co/F8h0OKRae1",
      "post_date": "2019-05-28T12:20:00"
   },
   {
      "text": "Enjoyed the morning session @finance20ch already🤙\nInteresting panel discussion about #openbanking #api with @pahueg… https://t.co/8NaYotAGIJ",
      "post_date": "2019-05-28T12:05:00"
   },
   {
      "text": "Great to see the team from one of our newest partners and market entrant @AlignMoney on stage at Finovate SF.  Thei… https://t.co/h3RU5oDBOT",
      "post_date": "2019-05-28T12:03:00"
   },
   {
      "text": "6 key areas #banks should focus on now to drive maximum value from #OpenBanking\nhttps://t.co/r6XWPcpqWV",
      "post_date": "2019-05-28T12:02:00"
   },
   {
      "text": "Mexican bank Banregio is jumping ahead of open banking regulations, incorporating non-financial services into its d… https://t.co/2WZlFvN9wE",
      "post_date": "2019-05-28T12:00:00"
   },
   {
      "text": "Why #partner with PaymentComponents? By partnering with us you will have the opportunity to ride the #OpenBanking w… https://t.co/XIq1CaiiRx",
      "post_date": "2019-05-28T12:00:00"
   },
   {
      "text": "Let's talk #innovation #technology #openbanking and more! We're getting ready for #Money2020EU next week in Amsterd… https://t.co/TbUlsQEejL",
      "post_date": "2019-05-28T11:50:00"
   },
   {
      "text": "@StarlingBank - Pioneering the Platformification of Banking, featuring @MeganCaywood, @AnneBoden, @awscloud,… https://t.co/nhDrIk3Xg8",
      "post_date": "2019-05-28T11:47:00"
   },
   {
      "text": "RT @TheoSchilter: #OpenBanking wll be enriching as USB did back then - thanks #Finance20 #Fintech https://t.co/BeOc0GD8d6",
      "post_date": "2019-05-28T11:45:00"
   },
   {
      "text": "One of our great customers. Read about Danske Banks views on #Openbanking and #PSD2 https://t.co/zDXXqFY6uk",
      "post_date": "2019-05-28T11:38:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T11:33:00"
   },
   {
      "text": "Our Developer Portal is introducing access to Swedish corporate customer data in production for the Account Informa… https://t.co/57FsmFwkar",
      "post_date": "2019-05-28T11:32:00"
   },
   {
      "text": "RT @puutwallet: HOW TO SIGN UP FOR PUUT WEB WALLET IN LESS THAN 1 MINUTE\n#puutwallet #fintech #wallets #ewallets #digitalwallets #govtech #…",
      "post_date": "2019-05-28T11:31:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T11:30:00"
   },
   {
      "text": "HOW TO SIGN UP FOR PUUT WEB WALLET IN LESS THAN 1 MINUTE\n#puutwallet #fintech #wallets #ewallets #digitalwallets… https://t.co/LFIXrEOUMu",
      "post_date": "2019-05-28T11:30:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T11:28:00"
   },
   {
      "text": "6 key areas #banks should focus on now to drive maximum value from #OpenBanking\nhttps://t.co/D7KKWA2YBI",
      "post_date": "2019-05-28T11:19:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T11:11:00"
   },
   {
      "text": "RT @ramyelkhoulany: Calling all fintechs, banks, developers - book a meeting today with Finastra at Money20/20 to see how you can start dev…",
      "post_date": "2019-05-28T11:10:00"
   },
   {
      "text": "RT @creditkudos: Less than 2 weeks to go until voting finished for the Consumer @CreditAwards! To vote for us, head here: https://t.co/ERXN…",
      "post_date": "2019-05-28T11:08:00"
   },
   {
      "text": "Let's talk #innovation #technology #openbanking and more! We're getting ready for #Money2020EU next week in Amsterd… https://t.co/r37WRYQz89",
      "post_date": "2019-05-28T11:06:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T11:06:00"
   },
   {
      "text": "An Introduction to Open #Banking #OpenBanking #AML #KYC #RegTech https://t.co/JGooKhWpZs",
      "post_date": "2019-05-28T11:01:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T11:01:00"
   },
   {
      "text": "\"It's still a small number of banks that are wondering how to play an active role with #PSD2, but it's growing!\" Th… https://t.co/5rHUm9959e",
      "post_date": "2019-05-28T10:59:00"
   },
   {
      "text": "Make the Move from Mobile Apps to Next-Generation Progressive Web Applications https://t.co/kBDEJtJ0oQ  #AI… https://t.co/wo5iJUWFqE",
      "post_date": "2019-05-28T10:59:00"
   },
   {
      "text": "RT @TheoSchilter: #Finance20 now with a cool discussion on #OpenBanking all with @nummo_com to bring you the #FinancialHealth \nGo #nummo go…",
      "post_date": "2019-05-28T10:58:00"
   },
   {
      "text": "Less than 2 weeks to go until voting finished for the Consumer @CreditAwards! To vote for us, head here:… https://t.co/FNGbFDOHPn",
      "post_date": "2019-05-28T10:56:00"
   },
   {
      "text": "RT @sophie_al: Have you heard of the @ForgeRock Open Banking Sandbox as a Service? It's a fully compliant solution for #OpenBanking and #PS…",
      "post_date": "2019-05-28T10:50:00"
   },
   {
      "text": "It has been an honor to speak about evolving #payment #technology and the impact of #realtime payments, #api… https://t.co/ODNndEyavv",
      "post_date": "2019-05-28T10:48:00"
   },
   {
      "text": "Our CEO, @jamesvarga, shares his expertise and explains why convenience is key to the escalation of Open Banking wi… https://t.co/CWIfpV1UHm",
      "post_date": "2019-05-28T10:44:00"
   },
   {
      "text": "Have you heard of the @ForgeRock Open Banking Sandbox as a Service? It's a fully compliant solution for… https://t.co/ZKkyqCfLS2",
      "post_date": "2019-05-28T10:39:00"
   },
   {
      "text": "OBIE publishes latest version of Open Banking standard - Finextra - https://t.co/bjPYH8VAwb #openbanking #banking #digital",
      "post_date": "2019-05-28T10:28:00"
   },
   {
      "text": "Everything you need to know about how to comply with #openbanking in Australia - https://t.co/Ew7bxsa1Op #fintech… https://t.co/FYBDqwMSC1",
      "post_date": "2019-05-28T10:22:00"
   },
   {
      "text": "RT @TheoSchilter: #OpenBanking wll be enriching as USB did back then - thanks #Finance20 #Fintech https://t.co/4BGKVLgqYA",
      "post_date": "2019-05-28T10:11:00"
   },
   {
      "text": "Thrilled to announce that @TietoCorp is partnering with Nordigen! Our solutions will enhance Tieto's Insurance-in-a… https://t.co/s6ey5fpoC0",
      "post_date": "2019-05-28T10:10:00"
   },
   {
      "text": "#OpenBanking wll be enriching as USB did back then - thanks #Finance20 #Fintech https://t.co/BeOc0GD8d6",
      "post_date": "2019-05-28T10:10:00"
   },
   {
      "text": "RT @PaymentCounsel: 'Open Banking and Innovation: Let's Not Wait for PSD3!'\n\nRead my new article on the Payments Guru website: https://t.co…",
      "post_date": "2019-05-28T10:05:00"
   },
   {
      "text": "RT @ttavlas: 2018-2025 Open Banking Report On Global And United States Market, Status And Forecast, By Players, Types And Applications - Am…",
      "post_date": "2019-05-28T09:57:00"
   },
   {
      "text": "RT @rinoborini: Panel #OpenBanking w/ @joris_hensen @JamesFerretti @roitavor and Moderator @pahueg 🙌🏻 Hm, no Swiss Bank on the Panel... why…",
      "post_date": "2019-05-28T09:57:00"
   },
   {
      "text": "RT @TheoSchilter: #Finance20 now with a cool discussion on #OpenBanking all with @nummo_com to bring you the #FinancialHealth \nGo #nummo go…",
      "post_date": "2019-05-28T09:49:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] What new business models does Open Banking enable? \n\nhttps://t.co/JW3HF9WKad\n\n#Innovation #Fintech #Banki…",
      "post_date": "2019-05-28T09:48:00"
   },
   {
      "text": "[#Tech] Fighting fraud in open banking\n\nhttps://t.co/rXTJo9UZBG\n\n#Innovation #Fintech #Banking #PSD2 #OpenBanking… https://t.co/3ETWanwZgl",
      "post_date": "2019-05-28T09:45:00"
   },
   {
      "text": "RT @rinoborini: @roitavor from @nummo_com ➡️  #OpenBanking is wonderful, big chance for financial institutions 🙌🏻✌🏻 #finance20 #fintech htt…",
      "post_date": "2019-05-28T09:44:00"
   },
   {
      "text": "RT @TheoSchilter: #Finance20 now with a cool discussion on #OpenBanking all with @nummo_com to bring you the #FinancialHealth \nGo #nummo go…",
      "post_date": "2019-05-28T09:43:00"
   },
   {
      "text": "Our CEO Carlos Figueredo is back in Mexico to speak at the BBVA Open Summit conference where he will speak about… https://t.co/po8WONddmL",
      "post_date": "2019-05-28T09:42:00"
   },
   {
      "text": "Great discussion around #openbanking with @roitavor @JamesFerretti @joris_hensen and greatly moderated by @pahueg… https://t.co/8mOPuOxoNw",
      "post_date": "2019-05-28T09:36:00"
   },
   {
      "text": "Startupbootcamp’s Commerce 2019 \n\n#fintechPortugal #Fintech #Portugal #Porto #Lisbon #Insurtech #TechFin #Banking… https://t.co/bdwjlRkIWu",
      "post_date": "2019-05-28T09:34:00"
   },
   {
      "text": "RT @nimisc: Convenience does not trump privacy in any case. Add transparency and control to that however and it really works for clients. S…",
      "post_date": "2019-05-28T09:33:00"
   },
   {
      "text": "@roitavor from @nummo_com ➡️  #OpenBanking is wonderful, big chance for financial institutions 🙌🏻✌🏻 #finance20… https://t.co/r9DH5RWjPs",
      "post_date": "2019-05-28T09:30:00"
   },
   {
      "text": "2018-2025 Open Banking Report On Global And United States Market, Status And Forecast, By Players, Types And Applic… https://t.co/0lkEHKsIXc",
      "post_date": "2019-05-28T09:28:00"
   },
   {
      "text": "RT @nimisc: #OpenBanking is as much about internal support as it is about getting #apis right and working with the right partners @joris_he…",
      "post_date": "2019-05-28T09:27:00"
   },
   {
      "text": "We @nummo_com never talk about #OpenBanking says @roitavor Clients don‘t care about it, they care about the service… https://t.co/hb2ZP5OPpR",
      "post_date": "2019-05-28T09:25:00"
   },
   {
      "text": "RT @Jonas_epp: “Its the #mindset which is the key enabler for #openbanking beside #technology - and this seems still to lack behind in #swi…",
      "post_date": "2019-05-28T09:25:00"
   },
   {
      "text": "#OpenBanking is as much about internal support as it is about getting #apis right and working with the right partne… https://t.co/hGcPQikclA",
      "post_date": "2019-05-28T09:23:00"
   },
   {
      "text": "#OpenBanking in Switzerland is so far behind -  quote @roitavor during panel discussion with @JamesFerretti… https://t.co/xhTC3x5FgN",
      "post_date": "2019-05-28T09:22:00"
   },
   {
      "text": "Convenience does not trump privacy in any case. Add transparency and control to that however and it really works fo… https://t.co/9Swp9pyzhL",
      "post_date": "2019-05-28T09:22:00"
   },
   {
      "text": "Are firms truly ready for #openbanking and #PSD2? Among other matters, banks and #fintech firms need to understand… https://t.co/MVCe9xKAE5",
      "post_date": "2019-05-28T09:20:00"
   },
   {
      "text": "RT @TheFinanceLab: Want to learn more about the potential of #OpenBanking? Join us and Lab Fellows, @CoGo_UK @bippit_ltd and @NestEgg_ai at…",
      "post_date": "2019-05-28T09:11:00"
   },
   {
      "text": "#Finance20 now with a cool discussion on #OpenBanking all with @nummo_com to bring you the #FinancialHealth \nGo… https://t.co/ASyJYQQy5I",
      "post_date": "2019-05-28T09:10:00"
   },
   {
      "text": "Panel #OpenBanking w/ @joris_hensen @JamesFerretti @roitavor and Moderator @pahueg 🙌🏻 Hm, no Swiss Bank on the Pane… https://t.co/fueGRAiL7d",
      "post_date": "2019-05-28T09:09:00"
   },
   {
      "text": "#OpenBanking and its venture beyond bank data https://t.co/HW8op8MV51 via @LinkedIn  #cardlytics",
      "post_date": "2019-05-28T09:07:00"
   },
   {
      "text": "Busy first day back at work today! Heading down to London for our final @OB4Good interview with @NationwidePress an… https://t.co/WSUhb8KKo1",
      "post_date": "2019-05-28T09:06:00"
   },
   {
      "text": "RT @Nicolas2Pinto: [#Infographic] Evolution of Digital Payments\n\nhttps://t.co/1ZVFibScRv\n\n#Innovation #Fintech #Banking #PSD2 #OpenBanking…",
      "post_date": "2019-05-28T09:05:00"
   },
   {
      "text": "[#Infographic] Evolution of Digital Payments\n\nhttps://t.co/1ZVFibScRv\n\n#Innovation #Fintech #Banking #PSD2… https://t.co/ObNK4tI1N9",
      "post_date": "2019-05-28T09:05:00"
   },
   {
      "text": "Come and meet us at #Money2020 to discuss how #collaboration is the key factor in #paymentprocessing and… https://t.co/4DTDXQmk6q",
      "post_date": "2019-05-28T09:02:00"
   },
   {
      "text": "new corp vc fund in Philippines - Aboitiz / Unionbank #fintech #openbanking #startupsea https://t.co/KKHufla3Am",
      "post_date": "2019-05-28T08:42:00"
   },
   {
      "text": "RT @SASsoftwareUKI: \"The difference between winning and losing for #banks will be in the #data\". Find out how #OpenBanking will impact the…",
      "post_date": "2019-05-28T08:40:00"
   },
   {
      "text": "RT @finance20ch: #OpenBanking can attracts new customers, says @joris_hensen from @DeutscheBank #finance20 #fintech https://t.co/DKpcK7I7Bz",
      "post_date": "2019-05-28T08:37:00"
   },
   {
      "text": "RT @nummo_com: Hey #Zurich! Our CEO @RoiTavor is speaking today at @finance20ch  Conference '19 about #openbanking! Stay tuned😁",
      "post_date": "2019-05-28T08:32:00"
   },
   {
      "text": "#OpenBanking can attracts new customers, says @joris_hensen from @DeutscheBank #finance20 #fintech https://t.co/DKpcK7I7Bz",
      "post_date": "2019-05-28T08:30:00"
   },
   {
      "text": "Stockholm-based fintech startup Open Payments raises €1.2 million for its PSD2 compliant platform - EU-Startups -… https://t.co/h5NGeHHU1i",
      "post_date": "2019-05-28T08:23:00"
   },
   {
      "text": "RT @nummo_com: Hey #Zurich! Our CEO @RoiTavor is speaking today at @finance20ch  Conference '19 about #openbanking! Stay tuned😁",
      "post_date": "2019-05-28T08:20:00"
   },
   {
      "text": "RT @FinTECHTalents: @saltedge acts as a bridge between #banks, #eWallets &amp; other #financialinstitutions and end-users, solving problems of…",
      "post_date": "2019-05-28T08:19:00"
   },
   {
      "text": "@saltedge acts as a bridge between #banks, #eWallets &amp; other #financialinstitutions and end-users, solving problems… https://t.co/6lm6YbLxfp",
      "post_date": "2019-05-28T08:01:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: What's deterring collaboration between banks and #FinTechs in an #OpenBanking environment? Register now and be the firs…",
      "post_date": "2019-05-28T07:49:00"
   },
   {
      "text": "RT @bahrainfintech_: The @CBB_News aims to nurture Bahrain’s #FinTech ecosystem and transform the Kingdom into a #digital hub. \n\nLearn more…",
      "post_date": "2019-05-28T07:44:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T07:34:00"
   },
   {
      "text": "RT @rgarciadelacruz: See you 4th July in the #uRegTech #Unconference with +80 CEOs &amp; Founders of the most innovative in #OpenBanking #PSD2…",
      "post_date": "2019-05-28T07:33:00"
   },
   {
      "text": "Mastercard seeks closer relationship with #fintech #startups in #India\n#fintechs #openbanking #payments #finance… https://t.co/kOfIZ0nuqA",
      "post_date": "2019-05-28T07:33:00"
   },
   {
      "text": "RT @fintechjo1: This graphic from @globaldataplc #OpenBanking analysis does a great job of illustrating the range of competencies and stake…",
      "post_date": "2019-05-28T07:31:00"
   },
   {
      "text": "How regulation is unlocking the potential of open banking in the UK https://t.co/s23FtGs8ll #fintech #startup #openbanking via @BrettKing",
      "post_date": "2019-05-28T07:30:00"
   },
   {
      "text": "Let's talk about what #digitalidentity can do for #financialservices, #openbanking, and #PSD2. Meet us at booth… https://t.co/P4z5jC3zm1",
      "post_date": "2019-05-28T07:25:00"
   },
   {
      "text": "RT @Capgemini_Bnkg: What's deterring collaboration between banks and #FinTechs in an #OpenBanking environment? Register now and be the firs…",
      "post_date": "2019-05-28T07:21:00"
   },
   {
      "text": "Hey #Zurich! Our CEO @RoiTavor is speaking today at @finance20ch  Conference '19 about #openbanking! Stay tuned😁",
      "post_date": "2019-05-28T07:18:00"
   },
   {
      "text": "This graphic from @globaldataplc #OpenBanking analysis does a great job of illustrating the range of competencies a… https://t.co/EBmQwVBWJs",
      "post_date": "2019-05-28T07:15:00"
   },
   {
      "text": "RT @FGraillot: As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity. #FinTech #API…",
      "post_date": "2019-05-28T06:59:00"
   },
   {
      "text": "As #OpenBanking is spreading in Financial Services, here are details on how to monetize this tech opportunity.… https://t.co/Ra8gtFNWJw",
      "post_date": "2019-05-28T06:51:00"
   },
   {
      "text": "The Future of #Banking https://t.co/DagMsUZRoV via @The_LHoFT #fintech #finserv #innovation #openbanking",
      "post_date": "2019-05-28T06:50:00"
   },
   {
      "text": "Looking forward to hear @roitavor talking about #OpenBanking here at #Finance20 https://t.co/tbi8l3wJy1",
      "post_date": "2019-05-28T06:43:00"
   },
   {
      "text": "\"Alongside budgeting, spending insights &amp; #money management tools, @StarlingBank's marketplace allows users to find… https://t.co/MSonH7ag2Y",
      "post_date": "2019-05-28T06:41:00"
   },
   {
      "text": "How has #technology disrupted your job in the last two years? How do you think it will affect you in the next 6 mon… https://t.co/FM4NiNsZUC",
      "post_date": "2019-05-28T06:41:00"
   },
   {
      "text": "RT @openpaymentseu: We're live with our developer portal and sandbox where third-party providers can create PSD2-compliant applications. Re…",
      "post_date": "2019-05-28T06:23:00"
   },
   {
      "text": "Our member @OpenWrks have just graduated from @Accenture FinTech Innovation Lab\n\nHere CEO @bettsolly chats celebrat… https://t.co/fu9aQCf8oV",
      "post_date": "2019-05-28T06:12:00"
   },
   {
      "text": "With the emergence of #openbanking, it’s clear that the bank branch is far from dead. Learn more about reimagining… https://t.co/bJZQNcKsWg",
      "post_date": "2019-05-28T06:08:00"
   },
   {
      "text": "The success of #hype: innovation to put the customer increasingly at the center\n\n#openbanking #Fabrick https://t.co/FXhLTbgAXD",
      "post_date": "2019-05-28T05:45:00"
   },
   {
      "text": "RT @rgarciadelacruz: See you 4th July in the #uRegTech #Unconference with +80 CEOs &amp; Founders of the most innovative in #OpenBanking #PSD2…",
      "post_date": "2019-05-28T05:30:00"
   },
   {
      "text": "RT @Fin_Rights_CLC: 'People experiencing financial hardship are valuable to fringe lenders and other services who may take advantage of the…",
      "post_date": "2019-05-28T05:22:00"
   },
   {
      "text": "See you 4th July in the #uRegTech #Unconference with +80 CEOs &amp; Founders of the most innovative in #OpenBanking… https://t.co/NpAGp3ZDXg",
      "post_date": "2019-05-28T05:22:00"
   },
   {
      "text": "Looking forward to gazing into the crystal ball of \"Payments of the Future\" with my co-panelists in Munich on Monda… https://t.co/BDQwpKNc0O",
      "post_date": "2019-05-28T05:07:00"
   }
];

export default tweets;
