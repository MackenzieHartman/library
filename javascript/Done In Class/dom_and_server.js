As Languages go, the Set of the Vocabulary is relatively small (and always available on "Cheat Sheets").
The number of Symbols and SYNTAX rules are relatively few (and likewise available on "Cheat Sheets").
With a little practice, the SYMATICS (the meaning) will quickly become obvious to you.

So much for Philosophy and encouragement 
      -- Take heart,
            I will get down to the facts.

....

HTML is a "HYPER-TEXT" -- "MARKUP-LANGUAGE".  
        The Basic Container ELEMENT is a PAGE -- a page of TEXT.

That MARKED-UP-PAGE will be STORED in a file (typically) of type .htm or .html.

A BROWSER Program (e.g., EXPLORER, CHROME, FOXFIRE,...)
        is use to process and display .htm (etc.) files.

You will MARKUP the TEXT on the PAGE
        to tell, or give hints. to the BROWSER
                     that will display  your page to the READER (the user, the viewer,...)
              HOW YOU WANT THE PAGE TO BE DISPLAYED.

You will use Beginning and Ending TAGS ( <xyz> ... </xyz> )  to give the BROWSER your instructions,
                  on how you want the Page-of-Text (Plus) to be DISPLAYED. 

         You are telling the BROWSER that,

                 you want this little piece of TEXT to be BOLD, or
                 you want this little piece of TEXT to be CENTERED, or
                 you want this little piece of TEXT to be in the STYLE call "Headline 1" (H1), or
                 you want this little piece of TEXT to be COLORED the COLOR represent by a COLOR CODE, or
                 you want this little piece of TEXT to be in this FONT and be this (absolute or relative) SIZE, or
                 etc., etc., etc.

You can also use the TAGS to you give different STYLES to different parts of you text.
          like above
          and in other ways like
                  setting margins & widths,
                  creating columns of various (relative or absolute) widths and heights,
                  set aside a rectangular space to insert a picture.
                  use the text to create a labeled INPUT BOX, etc.
                        (you also tell the BROWSER what to do with
                                      [or where to send]
                              the text the user entered into that INPUT BOX)
 

With the HYPER-ASPECT you are telling the BROWSER
                   the PLUS features you want the BROWSER  to use
        -- what you want to have inserted into your TEXT PAGE of MARKED-UP TEXT
                  and where you want it to be inserted.

With the HYPER-ASPECT  ("Hyper" means BEYOND -- beyond the text)
                you will provide "that PLUS".  

        You (actually the BROWSER by your command) 
                 can PULL other stuff
                                (RESOURCES, typically data files, often other HTML files)
                        onto that text page by telling the BROWSER where to find it. 
                     
                           Including:
                                 Bits-and-Pieces of HTML (located at some Universal  Resource Address),
                                 Pictures (located at some Universal Resource Address).
                                 Sounds (located at some Universal Resource Address),
                                etc., etc., etc.

        Sometimes, like with 

                    a SOUND file (activation will play the sound file)
                    a BUTTON, (activation will cause something to happen, per your instruction)
                    or a HYPER-JUMP
                         (to a specific location
                                [at an ANCHOR point] on your Page-of-Text-Plus
                                or to some other PAGE which is located at the given Universal Resource Address),

             you are instructing the BROWSER as to
                   what to do when the mouse is CLICKED over the text or the button.

When the BROWER Hyper-Jumps to
                  a new location
                  or another PAGE
         the BROWSER  keeps track of the location where it "Jumped From"
                           in a First-In-Last-Out (FIFO) STACK of "Jumped-From- Locations",
                  so that it may
                           (upon a BACK-BUTTON-CLICK or a BACK-COMMAND)
                  return to that "previous Location on the current Page" 
                                          or back to the previous PAGE
                                                    at the LOCATION
                                  from which this jump had been requested/activated,

                           (Detail: Jump-Back to the Location/PAGE indicated
                                              by the TOP element of "THE STACK of Jumped-From-Location" 
                                   AND then REMOVE(POP) that . 
                                            TOP element of "THE STACK of Jumped-From-Location",                
                                                     revealing as the new TOP Element,
                                                              the Jumped-From-Location prior to, the now current, location,
                           )



The basic tool of MARKUP is TAGS.

         The basic form of a TAG is

                   Beginning TAG                                    <name of tag>
                          That to which the TAG applies                BLA, Bla, bla,...
                   Ending TAG                                         </name of tag>

                   <b>some text to be displayed in BOLD</b>



         Some TAGS do not have a          Beginning TAG   and     Ending TAG. 
 
                   <!--    with some text between    -->    " with some text between"  is a COMMENT to help humans figure out "what's going on" 
                          The comments are "ignored" by the BROWSER
                                                               


CSS   The primary purpose of CSS is to keep all the STYLE DEFINITION INFORMATION for an entire set of webpages or websites CONSISTANT across everything or some particular subset thereof.   Part of the idea is to be able to make a STYLE CHANGE in A SINGLE Location and CHANGE of the Webpages APPEARENCE in an entire set.

In reality, the coding within the CSS definition is part of HTML (the styling part).  It is present as separate toward the end of keeping STYLE separate from CONTENT (the text, pictures, buttons, etc.).

One can say this STYLE (Fonts, Colors, Sizes,...) are APPLIED to this CONTENT.

The <div> ,,,, </div> often is used to create DIVISIONS (sections) of the various part of the CONTENT and the particular STYLE elements are applied to particular DIVISIONS of CONTENT.

A lot of CSS is used for differentiating and "correcting/adjusting" to each of their ways of doing things -- most likely you will not deal with this a lot.

JavaScript is a Procedural  Language.  It does things (in a step-by-step manner) that can't be done by a markup language.  It is a true programming language.  You will use JavaScript PROCESSED DATA (make calculations and conversions), to ACCESS data in DATABASES, to Store Data in DATABASE, etc.
 
Normally the .htm or .html files are located on a SERVER which contains WEBSITES.

WEBSITES on a SERVER consist of one or more FILE-DIRECTORYS with
        HTML files, 
        Cascading Style Sheets (CSS) files,
        Graphic files ( .gif, .jpg,...),
        JavaScript files (.js),
        etc.

Within the huge multi-multi-multi-location interconnected computer networks,
                 called the INTERNET,
        each PHYSICAL SERVER (Computer) is assigned to handle one or more DOMAIN NAMES.

A DOMAN NAME refers to exactly one LOGICAL SERVER.
       A LOGICAL SERVER may be a small part of one PHYSICAL SERVER
              or even 100's Computers -- in what sometimes is called a SERVER FARM.

DOMAIN NAMES take the form of
         up to 23 characters (Letters, Numbers, and "-"),    e.g., BizCity, Published-Instantly, MSN, GMAIL, GOOGLE, GODADDY,....
         followed by a PERIOD
         followed by a Top-Level-Domain Name (TLD),      e.g., COM, EDU, GOV, MIL, NET, BIZ, INFO, US, CA,...

        For Example:  BizCity.Com, BizCity.Biz, BizCity.Info, Published-Instantly.Com, IN.GOV, IUPUI.EDU, GMAIL.COM, Comcast.Net,...
 
        SUB-DOMAIN-NAMES are formed by putting
               a strings of characters (Letters, Numbers, and "-") followed by a PERIOD directly
                     in front a DOMAIN NAME,
                     or in front of an existing SUB-DOMAIN-NAME.

               For Example: Mackenzie.Hartman.BizCity.Com, danielle.voirol.Published-Instantly.Com, mail.GMAIL.COM,...



DOMAIN NAMES are "purchased/leased" from a domain name provider such as GoDaddy.Com,
        and domain name provider coordinate so that the DOMAIN NAMES are unique and "sold", each to only one person or organization.

Therefore a DOMAIN NAME will refer to exactly ONE LOGICAL SERVER.

When a WEBSITE is located on a server it is found (accessed) by its URL (Universal Resource Location).

Such URL's consist of a DOMAIN NAME (or SUB-DOMAIN-NAME) follow by a FORWARD SLASH ( / )


If an .htm is stored on a LOCAL hard-drive,
        a BROWSER Program (e.g., EXPLORER, CHROME, FOXFIRE,...) can treat the directory as LOCAL LOGICAL SERVER.