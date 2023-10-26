'launch browser mozilla - failed in VEFT 
'launch browser chrome
'systemUtil.Run ("C:\Program Files\Mozilla Firefox\firefox.exe")
systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
'navigator to AOS
Browser("Google").Navigate "http://www.advantageonlineshopping.com/#/" @@ hightlight id_;_197818_;_script infofile_;_ZIP::ssf1.xml_;_
'script here
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "dominikg" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "65086e31b43f02d901c0868b5d78eb737b5c3c28273ddad6" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btn").Click @@ script infofile_;_ZIP::ssf4.xml_;_
