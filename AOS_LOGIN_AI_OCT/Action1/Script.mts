'AIUtil.SetContext Browser("creationtime:=0")
'systemUtil.Run ("C:\Program Files\Mozilla Firefox\firefox.exe")
systemUtil.Run ("C:\Program Files\Google\Chrome\Application\chrome.exe")
AIUtil.SetContext Browser("creationtime:=0")
Browser("creationtime:=0").Navigate("http://advantageonlineshopping.com/#/")
AIUtil("profile").Click
AIUtil("input", "Username").Type "dominikg"
AIUtil.FindTextBlock("Password").Click
AIUtil("input", "Password").Type "Password1"
AIUtil.FindTextBlock("SIGN IN").Click

