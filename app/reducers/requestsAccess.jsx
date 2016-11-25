const initialState = {
  data: [{
    "id": 1,
    "user_name": "rday0",
    "email": "rday0@yellowbook.com",
    "full_name": "Todd Richards",
    "phone": "46-(917)163-8462",
    "job_title": "Environmental Tech",
    "date": "10/18/2016",
    "admin": "Randy Day",
    "state": 'new'
  }, {
    "id": 2,
    "user_name": "kadams1",
    "email": "kadams1@bluehost.com",
    "full_name": "Lois Carroll",
    "phone": "66-(553)550-4187",
    "job_title": "Senior Sales Associate",
    "date": "2/6/2016",
    "admin": "Karen Adams",
    "state": 'new'
  }, {
    "id": 3,
    "user_name": "lcunningham2",
    "email": "lcunningham2@ftc.gov",
    "full_name": "Patricia Cruz",
    "phone": "48-(820)394-1273",
    "job_title": "Environmental Tech",
    "date": "10/12/2016",
    "admin": "Lois Cunningham",
    "state": 'new'
  }, {
    "id": 4,
    "user_name": "jsnyder3",
    "email": "jsnyder3@timesonline.co.uk",
    "full_name": "Justin Grant",
    "phone": "380-(863)714-2802",
    "job_title": "Help Desk Operator",
    "date": "1/10/2016",
    "admin": "Judith Snyder",
    "state": 'new'
  }, {
    "id": 5,
    "user_name": "mwhite4",
    "email": "mwhite4@issuu.com",
    "full_name": "Juan Fisher",
    "phone": "383-(866)631-6931",
    "job_title": "Assistant Manager",
    "date": "1/16/2016",
    "admin": "Michelle White",
    "state": 'new'
  }, {
    "id": 6,
    "user_name": "jcarter5",
    "email": "jcarter5@sbwire.com",
    "full_name": "Norma Anderson",
    "phone": "370-(796)408-0472",
    "job_title": "Registered Nurse",
    "date": "8/2/2016",
    "admin": "Jeremy Carter",
    "state": 'new'
  }, {
    "id": 7,
    "user_name": "aduncan6",
    "email": "aduncan6@usa.gov",
    "full_name": "Gary Carpenter",
    "phone": "62-(310)682-6330",
    "job_title": "Desktop Support Technician",
    "date": "2/27/2016",
    "admin": "Amanda Duncan",
    "state": 'new'
  }, {
    "id": 8,
    "user_name": "isimpson7",
    "email": "isimpson7@ifeng.com",
    "full_name": "Judy Bell",
    "phone": "43-(889)235-7637",
    "job_title": "Nurse Practicioner",
    "date": "5/3/2016",
    "admin": "Irene Simpson",
    "state": 'new'
  }, {
    "id": 9,
    "user_name": "jcox8",
    "email": "jcox8@com.com",
    "full_name": "Cheryl Bryant",
    "phone": "62-(189)291-6476",
    "job_title": "Community Outreach Specialist",
    "date": "3/13/2016",
    "admin": "Johnny Cox",
    "state": 'new'
  }, {
    "id": 10,
    "user_name": "rwoods9",
    "email": "rwoods9@ucla.edu",
    "full_name": "Sara Russell",
    "phone": "48-(517)876-2410",
    "job_title": "Administrative Officer",
    "date": "7/7/2016",
    "admin": "Ryan Woods",
    "state": 'new'
  }, {
    "id": 11,
    "user_name": "mwebba",
    "email": "mwebba@disqus.com",
    "full_name": "Frank Moreno",
    "phone": "63-(810)120-2931",
    "job_title": "Senior Quality Engineer",
    "date": "7/27/2016",
    "admin": "Maria Webb",
    "state": 'new'
  }, {
    "id": 12,
    "user_name": "psullivanb",
    "email": "psullivanb@netvibes.com",
    "full_name": "Jacqueline Cruz",
    "phone": "62-(779)410-1712",
    "job_title": "Programmer I",
    "date": "3/18/2016",
    "admin": "Patricia Sullivan",
    "state": 'new'
  }, {
    "id": 13,
    "user_name": "ahenryc",
    "email": "ahenryc@acquirethisname.com",
    "full_name": "Albert Gonzalez",
    "phone": "52-(145)474-0890",
    "job_title": "Senior Sales Associate",
    "date": "3/8/2016",
    "admin": "Alice Henry",
    "state": 'new'
  }, {
    "id": 14,
    "user_name": "aburtond",
    "email": "aburtond@live.com",
    "full_name": "Samuel Gomez",
    "phone": "52-(816)554-1684",
    "job_title": "Financial Advisor",
    "date": "7/2/2016",
    "admin": "Alice Burton",
    "state": 'new'
  }, {
    "id": 15,
    "user_name": "lwilliamse",
    "email": "lwilliamse@hatena.ne.jp",
    "full_name": "Craig Ray",
    "phone": "63-(318)980-9084",
    "job_title": "Web Designer IV",
    "date": "12/24/2015",
    "admin": "Lois Williams",
    "state": 'new'
  }, {
    "id": 16,
    "user_name": "afordf",
    "email": "afordf@ca.gov",
    "full_name": "Helen Franklin",
    "phone": "55-(476)814-0928",
    "job_title": "Financial Advisor",
    "date": "1/26/2016",
    "admin": "Amy Ford",
    "state": 'new'
  }, {
    "id": 17,
    "user_name": "tmillerg",
    "email": "tmillerg@github.io",
    "full_name": "Carlos Daniels",
    "phone": "7-(875)974-6555",
    "job_title": "Recruiter",
    "date": "3/5/2016",
    "admin": "Todd Miller",
    "state": 'new'
  }, {
    "id": 18,
    "user_name": "fortizh",
    "email": "fortizh@cbc.ca",
    "full_name": "Sean George",
    "phone": "86-(969)246-6504",
    "job_title": "Media Manager I",
    "date": "5/25/2016",
    "admin": "Frances Ortiz",
    "state": 'new'
  }, {
    "id": 19,
    "user_name": "esimmonsi",
    "email": "esimmonsi@issuu.com",
    "full_name": "Alan Romero",
    "phone": "62-(520)599-8982",
    "job_title": "Legal Assistant",
    "date": "5/14/2016",
    "admin": "Ernest Simmons",
    "state": 'new'
  }, {
    "id": 20,
    "user_name": "jwatsonj",
    "email": "jwatsonj@thetimes.co.uk",
    "full_name": "Alice Edwards",
    "phone": "63-(740)757-8308",
    "job_title": "Editor",
    "date": "4/8/2016",
    "admin": "Joshua Watson",
    "state": 'new'
  }, {
    "id": 21,
    "user_name": "dcrawfordk",
    "email": "dcrawfordk@answers.com",
    "full_name": "Dennis Harvey",
    "phone": "62-(618)153-6254",
    "job_title": "Senior Sales Associate",
    "date": "8/8/2016",
    "admin": "Deborah Crawford",
    "state": 'new'
  }, {
    "id": 22,
    "user_name": "nwarrenl",
    "email": "nwarrenl@surveymonkey.com",
    "full_name": "Eric Miller",
    "phone": "355-(797)995-9079",
    "job_title": "Assistant Media Planner",
    "date": "2/21/2016",
    "admin": "Nancy Warren",
    "state": 'new'
  }, {
    "id": 23,
    "user_name": "cfullerm",
    "email": "cfullerm@toplist.cz",
    "full_name": "Cheryl Burke",
    "phone": "62-(287)203-9017",
    "job_title": "Budget/Accounting Analyst I",
    "date": "2/5/2016",
    "admin": "Chris Fuller",
    "state": 'new'
  }, {
    "id": 24,
    "user_name": "sfordn",
    "email": "sfordn@blogs.com",
    "full_name": "Jane Martinez",
    "phone": "60-(489)699-9747",
    "job_title": "Senior Cost Accountant",
    "date": "11/17/2016",
    "admin": "Sandra Ford",
    "state": 'new'
  }, {
    "id": 25,
    "user_name": "khawkinso",
    "email": "khawkinso@apache.org",
    "full_name": "Lisa Turner",
    "phone": "62-(388)197-7956",
    "job_title": "Cost Accountant",
    "date": "8/4/2016",
    "admin": "Kelly Hawkins",
    "state": 'new'
  }, {
    "id": 26,
    "user_name": "thansenp",
    "email": "thansenp@bandcamp.com",
    "full_name": "Margaret Carter",
    "phone": "60-(641)644-6440",
    "job_title": "Project Manager",
    "date": "3/22/2016",
    "admin": "Todd Hansen",
    "state": 'new'
  }, {
    "id": 27,
    "user_name": "psmithq",
    "email": "psmithq@pen.io",
    "full_name": "Robert Diaz",
    "phone": "52-(832)842-7003",
    "job_title": "Geological Engineer",
    "date": "3/4/2016",
    "admin": "Patricia Smith",
    "state": 'new'
  }, {
    "id": 28,
    "user_name": "pstanleyr",
    "email": "pstanleyr@4shared.com",
    "full_name": "Martha Gomez",
    "phone": "53-(662)713-8090",
    "job_title": "Project Manager",
    "date": "2/23/2016",
    "admin": "Patrick Stanley",
    "state": 'new'
  }, {
    "id": 29,
    "user_name": "jhayess",
    "email": "jhayess@canalblog.com",
    "full_name": "Timothy Palmer",
    "phone": "81-(484)469-1957",
    "job_title": "Engineer II",
    "date": "11/5/2016",
    "admin": "Jimmy Hayes",
    "state": 'new'
  }, {
    "id": 30,
    "user_name": "prussellt",
    "email": "prussellt@bloglines.com",
    "full_name": "Chris Alvarez",
    "phone": "81-(881)469-5841",
    "job_title": "Safety Technician III",
    "date": "3/8/2016",
    "admin": "Peter Russell",
    "state": 'new'
  }, {
    "id": 31,
    "user_name": "jmilleru",
    "email": "jmilleru@mail.ru",
    "full_name": "Raymond Coleman",
    "phone": "92-(827)385-9601",
    "job_title": "Professor",
    "date": "3/30/2016",
    "admin": "Juan Miller",
    "state": 'new'
  }, {
    "id": 32,
    "user_name": "hreyesv",
    "email": "hreyesv@chicagotribune.com",
    "full_name": "Kevin Mccoy",
    "phone": "358-(156)585-8637",
    "job_title": "Civil Engineer",
    "date": "8/19/2016",
    "admin": "Harold Reyes",
    "state": 'new'
  }, {
    "id": 33,
    "user_name": "probinsonw",
    "email": "probinsonw@independent.co.uk",
    "full_name": "Dennis Vasquez",
    "phone": "86-(338)712-3346",
    "job_title": "Paralegal",
    "date": "10/31/2016",
    "admin": "Paula Robinson",
    "state": 'new'
  }, {
    "id": 34,
    "user_name": "wlawrencex",
    "email": "wlawrencex@drupal.org",
    "full_name": "Kenneth Wells",
    "phone": "593-(649)329-1302",
    "job_title": "Teacher",
    "date": "8/31/2016",
    "admin": "Wayne Lawrence",
    "state": 'new'
  }, {
    "id": 35,
    "user_name": "lmillery",
    "email": "lmillery@webs.com",
    "full_name": "John Reynolds",
    "phone": "380-(330)760-2590",
    "job_title": "Tax Accountant",
    "date": "3/7/2016",
    "admin": "Lisa Miller",
    "state": 'new'
  }, {
    "id": 36,
    "user_name": "tgrantz",
    "email": "tgrantz@dailymail.co.uk",
    "full_name": "Mark Shaw",
    "phone": "86-(355)485-8674",
    "job_title": "Project Manager",
    "date": "10/4/2016",
    "admin": "Tammy Grant",
    "state": 'new'
  }, {
    "id": 37,
    "user_name": "flane10",
    "email": "flane10@nytimes.com",
    "full_name": "Jeffrey Brooks",
    "phone": "62-(965)413-4130",
    "job_title": "Legal Assistant",
    "date": "9/19/2016",
    "admin": "Frances Lane",
    "state": 'new'
  }, {
    "id": 38,
    "user_name": "hgeorge11",
    "email": "hgeorge11@hc360.com",
    "full_name": "Harold Anderson",
    "phone": "46-(217)383-2514",
    "job_title": "Help Desk Technician",
    "date": "7/18/2016",
    "admin": "Henry George",
    "state": 'new'
  }, {
    "id": 39,
    "user_name": "nyoung12",
    "email": "nyoung12@yellowpages.com",
    "full_name": "Lillian White",
    "phone": "94-(769)896-9390",
    "job_title": "Information Systems Manager",
    "date": "1/4/2016",
    "admin": "Norma Young",
    "state": 'new'
  }, {
    "id": 40,
    "user_name": "aalexander13",
    "email": "aalexander13@archive.org",
    "full_name": "Virginia Wood",
    "phone": "7-(964)303-3209",
    "job_title": "Research Associate",
    "date": "12/14/2015",
    "admin": "Antonio Alexander",
    "state": 'new'
  }, {
    "id": 41,
    "user_name": "kharvey14",
    "email": "kharvey14@fc2.com",
    "full_name": "Keith Murphy",
    "phone": "420-(551)577-5553",
    "job_title": "Research Assistant I",
    "date": "9/14/2016",
    "admin": "Kathryn Harvey",
    "state": 'new'
  }, {
    "id": 42,
    "user_name": "amarshall15",
    "email": "amarshall15@cocolog-nifty.com",
    "full_name": "Carl Long",
    "phone": "81-(941)670-2754",
    "job_title": "Occupational Therapist",
    "date": "12/13/2015",
    "admin": "Antonio Marshall",
    "state": 'new'
  }, {
    "id": 43,
    "user_name": "aburke16",
    "email": "aburke16@ezinearticles.com",
    "full_name": "Debra Morris",
    "phone": "504-(365)797-8783",
    "job_title": "Nuclear Power Engineer",
    "date": "10/21/2016",
    "admin": "Annie Burke",
    "state": 'new'
  }, {
    "id": 44,
    "user_name": "kellis17",
    "email": "kellis17@wikipedia.org",
    "full_name": "Todd Hamilton",
    "phone": "55-(817)784-6052",
    "job_title": "Senior Editor",
    "date": "7/28/2016",
    "admin": "Kevin Ellis",
    "state": 'new'
  }, {
    "id": 45,
    "user_name": "jlewis18",
    "email": "jlewis18@canalblog.com",
    "full_name": "Timothy Ford",
    "phone": "972-(458)416-5967",
    "job_title": "Media Manager I",
    "date": "4/22/2016",
    "admin": "Justin Lewis",
    "state": 'new'
  }, {
    "id": 46,
    "user_name": "kferguson19",
    "email": "kferguson19@wired.com",
    "full_name": "Christopher Ryan",
    "phone": "48-(823)670-2689",
    "job_title": "Account Coordinator",
    "date": "7/18/2016",
    "admin": "Keith Ferguson",
    "state": 'new'
  }, {
    "id": 47,
    "user_name": "astewart1a",
    "email": "astewart1a@tripadvisor.com",
    "full_name": "Charles Brooks",
    "phone": "32-(740)877-4321",
    "job_title": "Pharmacist",
    "date": "5/1/2016",
    "admin": "Adam Stewart",
    "state": 'new'
  }, {
    "id": 48,
    "user_name": "mmorris1b",
    "email": "mmorris1b@patch.com",
    "full_name": "Jose Ford",
    "phone": "66-(454)291-2136",
    "job_title": "Software Consultant",
    "date": "10/23/2016",
    "admin": "Marie Morris",
    "state": 'new'
  }, {
    "id": 49,
    "user_name": "mparker1c",
    "email": "mparker1c@com.com",
    "full_name": "Victor Webb",
    "phone": "-(119)961-6156",
    "job_title": "Sales Representative",
    "date": "4/9/2016",
    "admin": "Mildred Parker",
    "state": 'new'
  }, {
    "id": 50,
    "user_name": "knichols1d",
    "email": "knichols1d@wufoo.com",
    "full_name": "Daniel Chapman",
    "phone": "380-(440)129-5888",
    "job_title": "Account Representative III",
    "date": "5/7/2016",
    "admin": "Kathryn Nichols",
    "state": 'new'
  }, {
    "id": 51,
    "user_name": "hcollins1e",
    "email": "hcollins1e@marketwatch.com",
    "full_name": "Carol Griffin",
    "phone": "62-(934)420-0328",
    "job_title": "Business Systems Development Analyst",
    "date": "6/20/2016",
    "admin": "Harry Collins",
    "state": 'new'
  }, {
    "id": 52,
    "user_name": "dwashington1f",
    "email": "dwashington1f@newsvine.com",
    "full_name": "Margaret Torres",
    "phone": "55-(411)244-0324",
    "job_title": "Professor",
    "date": "9/20/2016",
    "admin": "Douglas Washington",
    "state": 'new'
  }, {
    "id": 53,
    "user_name": "kcarr1g",
    "email": "kcarr1g@google.fr",
    "full_name": "Frances Hawkins",
    "phone": "48-(875)750-4465",
    "job_title": "Analyst Programmer",
    "date": "6/17/2016",
    "admin": "Kevin Carr",
    "state": 'new'
  }, {
    "id": 54,
    "user_name": "lfernandez1h",
    "email": "lfernandez1h@g.co",
    "full_name": "Steve Moreno",
    "phone": "358-(636)947-2901",
    "job_title": "Nurse Practicioner",
    "date": "8/26/2016",
    "admin": "Lawrence Fernandez",
    "state": 'new'
  }, {
    "id": 55,
    "user_name": "jramos1i",
    "email": "jramos1i@nsw.gov.au",
    "full_name": "Julie Fuller",
    "phone": "86-(357)512-5130",
    "job_title": "Research Assistant IV",
    "date": "3/2/2016",
    "admin": "Julie Ramos",
    "state": 'new'
  }, {
    "id": 56,
    "user_name": "dgardner1j",
    "email": "dgardner1j@google.es",
    "full_name": "Roy George",
    "phone": "30-(134)642-6120",
    "job_title": "Financial Analyst",
    "date": "9/12/2016",
    "admin": "Diane Gardner",
    "state": 'new'
  }, {
    "id": 57,
    "user_name": "pmills1k",
    "email": "pmills1k@goo.gl",
    "full_name": "Steven Ryan",
    "phone": "973-(330)353-3560",
    "job_title": "VP Product Management",
    "date": "4/24/2016",
    "admin": "Paula Mills",
    "state": 'new'
  }, {
    "id": 58,
    "user_name": "jnguyen1l",
    "email": "jnguyen1l@bloglines.com",
    "full_name": "Roy Perez",
    "phone": "86-(922)523-3338",
    "job_title": "Web Developer III",
    "date": "11/4/2016",
    "admin": "Janet Nguyen",
    "state": 'new'
  }, {
    "id": 59,
    "user_name": "sriley1m",
    "email": "sriley1m@hugedomains.com",
    "full_name": "Karen Simmons",
    "phone": "371-(503)920-9240",
    "job_title": "Web Developer II",
    "date": "4/14/2016",
    "admin": "Susan Riley",
    "state": 'new'
  }, {
    "id": 60,
    "user_name": "jcarroll1n",
    "email": "jcarroll1n@ucsd.edu",
    "full_name": "Walter Burns",
    "phone": "1-(414)688-1762",
    "job_title": "Data Coordiator",
    "date": "10/2/2016",
    "admin": "Jose Carroll",
    "state": 'new'
  }, {
    "id": 61,
    "user_name": "walvarez1o",
    "email": "walvarez1o@indiegogo.com",
    "full_name": "Carl Cole",
    "phone": "81-(531)605-0068",
    "job_title": "Senior Cost Accountant",
    "date": "5/4/2016",
    "admin": "Walter Alvarez",
    "state": 'new'
  }, {
    "id": 62,
    "user_name": "rlittle1p",
    "email": "rlittle1p@earthlink.net",
    "full_name": "Deborah Harris",
    "phone": "225-(122)697-2004",
    "job_title": "Software Consultant",
    "date": "3/3/2016",
    "admin": "Ruth Little",
    "state": 'new'
  }, {
    "id": 63,
    "user_name": "bcox1q",
    "email": "bcox1q@wired.com",
    "full_name": "Carol Davis",
    "phone": "86-(362)741-8039",
    "job_title": "Environmental Tech",
    "date": "6/25/2016",
    "admin": "Bruce Cox",
    "state": 'new'
  }, {
    "id": 64,
    "user_name": "mlawrence1r",
    "email": "mlawrence1r@myspace.com",
    "full_name": "Norma Bennett",
    "phone": "63-(722)573-6973",
    "job_title": "Senior Cost Accountant",
    "date": "3/5/2016",
    "admin": "Matthew Lawrence",
    "state": 'new'
  }, {
    "id": 65,
    "user_name": "hgilbert1s",
    "email": "hgilbert1s@reference.com",
    "full_name": "Tammy Hansen",
    "phone": "62-(521)568-8030",
    "job_title": "Environmental Specialist",
    "date": "8/31/2016",
    "admin": "Harold Gilbert",
    "state": 'new'
  }, {
    "id": 66,
    "user_name": "abaker1t",
    "email": "abaker1t@sfgate.com",
    "full_name": "Timothy Williamson",
    "phone": "93-(177)314-6974",
    "job_title": "Compensation Analyst",
    "date": "12/17/2015",
    "admin": "Anthony Baker",
    "state": 'new'
  }, {
    "id": 67,
    "user_name": "erice1u",
    "email": "erice1u@berkeley.edu",
    "full_name": "Ann Mason",
    "phone": "975-(434)800-7966",
    "job_title": "Geological Engineer",
    "date": "8/5/2016",
    "admin": "Eric Rice",
    "state": 'new'
  }, {
    "id": 68,
    "user_name": "rgordon1v",
    "email": "rgordon1v@ocn.ne.jp",
    "full_name": "Brenda Ward",
    "phone": "1-(703)561-8177",
    "job_title": "Nurse Practicioner",
    "date": "1/11/2016",
    "admin": "Ryan Gordon",
    "state": 'new'
  }, {
    "id": 69,
    "user_name": "fwhite1w",
    "email": "fwhite1w@techcrunch.com",
    "full_name": "John Larson",
    "phone": "234-(443)353-3357",
    "job_title": "Nuclear Power Engineer",
    "date": "4/9/2016",
    "admin": "Frances White",
    "state": 'new'
  }, {
    "id": 70,
    "user_name": "aburns1x",
    "email": "aburns1x@telegraph.co.uk",
    "full_name": "Ann Freeman",
    "phone": "253-(502)550-6226",
    "job_title": "Office Assistant II",
    "date": "5/10/2016",
    "admin": "Amanda Burns",
    "state": 'new'
  }, {
    "id": 71,
    "user_name": "jmoreno1y",
    "email": "jmoreno1y@berkeley.edu",
    "full_name": "John Duncan",
    "phone": "56-(675)218-1251",
    "job_title": "Nurse Practicioner",
    "date": "8/6/2016",
    "admin": "Jonathan Moreno",
    "state": 'new'
  }, {
    "id": 72,
    "user_name": "staylor1z",
    "email": "staylor1z@typepad.com",
    "full_name": "Louis Bryant",
    "phone": "380-(197)195-0517",
    "job_title": "Recruiting Manager",
    "date": "10/25/2016",
    "admin": "Steven Taylor",
    "state": 'new'
  }, {
    "id": 73,
    "user_name": "bnelson20",
    "email": "bnelson20@mozilla.org",
    "full_name": "Kimberly Chapman",
    "phone": "62-(527)941-1616",
    "job_title": "Chief Design Engineer",
    "date": "10/28/2016",
    "admin": "Beverly Nelson",
    "state": 'new'
  }, {
    "id": 74,
    "user_name": "ksullivan21",
    "email": "ksullivan21@harvard.edu",
    "full_name": "Ashley Jordan",
    "phone": "7-(553)709-5653",
    "job_title": "Human Resources Assistant III",
    "date": "1/7/2016",
    "admin": "Kathleen Sullivan",
    "state": 'new'
  }, {
    "id": 75,
    "user_name": "ghart22",
    "email": "ghart22@unblog.fr",
    "full_name": "Jennifer Anderson",
    "phone": "86-(937)700-8917",
    "job_title": "Senior Cost Accountant",
    "date": "1/11/2016",
    "admin": "George Hart",
    "state": 'new'
  }, {
    "id": 76,
    "user_name": "bduncan23",
    "email": "bduncan23@opensource.org",
    "full_name": "Lisa Freeman",
    "phone": "225-(463)696-9637",
    "job_title": "Statistician II",
    "date": "7/25/2016",
    "admin": "Billy Duncan",
    "state": 'new'
  }, {
    "id": 77,
    "user_name": "dturner24",
    "email": "dturner24@hexun.com",
    "full_name": "Barbara Holmes",
    "phone": "64-(878)311-1749",
    "job_title": "Software Test Engineer II",
    "date": "3/31/2016",
    "admin": "Dennis Turner",
    "state": 'new'
  }, {
    "id": 78,
    "user_name": "tbaker25",
    "email": "tbaker25@linkedin.com",
    "full_name": "Terry Mason",
    "phone": "62-(312)713-4987",
    "job_title": "Safety Technician I",
    "date": "12/5/2015",
    "admin": "Timothy Baker",
    "state": 'new'
  }, {
    "id": 79,
    "user_name": "bboyd26",
    "email": "bboyd26@paypal.com",
    "full_name": "Arthur Stewart",
    "phone": "86-(813)523-6681",
    "job_title": "Media Manager III",
    "date": "9/11/2016",
    "admin": "Bruce Boyd",
    "state": 'new'
  }, {
    "id": 80,
    "user_name": "ascott27",
    "email": "ascott27@php.net",
    "full_name": "Ryan Flores",
    "phone": "357-(818)987-9828",
    "job_title": "Research Nurse",
    "date": "2/3/2016",
    "admin": "Amy Scott",
    "state": 'new'
  }, {
    "id": 81,
    "user_name": "cgarrett28",
    "email": "cgarrett28@booking.com",
    "full_name": "Carolyn West",
    "phone": "86-(845)882-8362",
    "job_title": "Budget/Accounting Analyst IV",
    "date": "10/23/2016",
    "admin": "Christopher Garrett",
    "state": 'new'
  }, {
    "id": 82,
    "user_name": "erice29",
    "email": "erice29@live.com",
    "full_name": "Robin Grant",
    "phone": "381-(341)212-2681",
    "job_title": "Physical Therapy Assistant",
    "date": "4/6/2016",
    "admin": "Earl Rice",
    "state": 'new'
  }, {
    "id": 83,
    "user_name": "kbutler2a",
    "email": "kbutler2a@slideshare.net",
    "full_name": "Kenneth Woods",
    "phone": "55-(460)228-0376",
    "job_title": "Electrical Engineer",
    "date": "2/11/2016",
    "admin": "Kelly Butler",
    "state": 'new'
  }, {
    "id": 84,
    "user_name": "jpayne2b",
    "email": "jpayne2b@jiathis.com",
    "full_name": "Amanda Torres",
    "phone": "351-(394)894-0945",
    "job_title": "Sales Associate",
    "date": "5/21/2016",
    "admin": "Judith Payne",
    "state": 'new'
  }, {
    "id": 85,
    "user_name": "rjacobs2c",
    "email": "rjacobs2c@smugmug.com",
    "full_name": "Dennis Brown",
    "phone": "967-(284)637-7999",
    "job_title": "Safety Technician III",
    "date": "5/31/2016",
    "admin": "Roy Jacobs",
    "state": 'new'
  }, {
    "id": 86,
    "user_name": "pdean2d",
    "email": "pdean2d@gmpg.org",
    "full_name": "Jessica Snyder",
    "phone": "54-(564)400-6755",
    "job_title": "Civil Engineer",
    "date": "1/4/2016",
    "admin": "Pamela Dean",
    "state": 'new'
  }, {
    "id": 87,
    "user_name": "kholmes2e",
    "email": "kholmes2e@harvard.edu",
    "full_name": "Scott Gilbert",
    "phone": "1-(410)875-6633",
    "job_title": "Desktop Support Technician",
    "date": "11/23/2015",
    "admin": "Kimberly Holmes",
    "state": 'new'
  }, {
    "id": 88,
    "user_name": "vnichols2f",
    "email": "vnichols2f@answers.com",
    "full_name": "Douglas Perry",
    "phone": "81-(162)441-8986",
    "job_title": "Senior Cost Accountant",
    "date": "3/27/2016",
    "admin": "Victor Nichols",
    "state": 'new'
  }, {
    "id": 89,
    "user_name": "jfields2g",
    "email": "jfields2g@typepad.com",
    "full_name": "Carolyn George",
    "phone": "81-(425)836-5114",
    "job_title": "Accountant II",
    "date": "6/14/2016",
    "admin": "James Fields",
    "state": 'new'
  }, {
    "id": 90,
    "user_name": "kjones2h",
    "email": "kjones2h@intel.com",
    "full_name": "Thomas Bryant",
    "phone": "380-(206)748-6135",
    "job_title": "Marketing Assistant",
    "date": "11/9/2016",
    "admin": "Kenneth Jones",
    "state": 'new'
  }, {
    "id": 91,
    "user_name": "mmeyer2i",
    "email": "mmeyer2i@google.nl",
    "full_name": "Bonnie Lane",
    "phone": "51-(592)274-3383",
    "job_title": "Graphic Designer",
    "date": "3/30/2016",
    "admin": "Martin Meyer",
    "state": 'new'
  }, {
    "id": 92,
    "user_name": "bfernandez2j",
    "email": "bfernandez2j@usgs.gov",
    "full_name": "Janice Duncan",
    "phone": "86-(571)155-1148",
    "job_title": "Compensation Analyst",
    "date": "6/24/2016",
    "admin": "Bobby Fernandez",
    "state": 'new'
  }, {
    "id": 93,
    "user_name": "scrawford2k",
    "email": "scrawford2k@domainmarket.com",
    "full_name": "Marie Bowman",
    "phone": "63-(853)773-5638",
    "job_title": "Help Desk Operator",
    "date": "4/26/2016",
    "admin": "Steve Crawford",
    "state": 'new'
  }, {
    "id": 94,
    "user_name": "sshaw2l",
    "email": "sshaw2l@ustream.tv",
    "full_name": "Eugene Gutierrez",
    "phone": "48-(214)374-1116",
    "job_title": "Editor",
    "date": "4/23/2016",
    "admin": "Susan Shaw",
    "state": 'new'
  }, {
    "id": 95,
    "user_name": "bbanks2m",
    "email": "bbanks2m@naver.com",
    "full_name": "Michael Ryan",
    "phone": "48-(428)104-4139",
    "job_title": "VP Marketing",
    "date": "7/3/2016",
    "admin": "Brandon Banks",
    "state": 'new'
  }, {
    "id": 96,
    "user_name": "jtucker2n",
    "email": "jtucker2n@cdbaby.com",
    "full_name": "Jesse Crawford",
    "phone": "62-(265)393-8747",
    "job_title": "VP Quality Control",
    "date": "10/7/2016",
    "admin": "Jesse Tucker",
    "state": 'new'
  }, {
    "id": 97,
    "user_name": "ggarrett2o",
    "email": "ggarrett2o@dion.ne.jp",
    "full_name": "Jack Montgomery",
    "phone": "57-(170)385-2753",
    "job_title": "Sales Representative",
    "date": "6/17/2016",
    "admin": "Gary Garrett",
    "state": 'new'
  }, {
    "id": 98,
    "user_name": "jhawkins2p",
    "email": "jhawkins2p@oracle.com",
    "full_name": "Joan Bishop",
    "phone": "351-(268)999-4698",
    "job_title": "Director of Sales",
    "date": "11/6/2016",
    "admin": "Jerry Hawkins",
    "state": 'new'
  }, {
    "id": 99,
    "user_name": "bsanders2q",
    "email": "bsanders2q@wix.com",
    "full_name": "Wanda Palmer",
    "phone": "84-(786)272-5553",
    "job_title": "Financial Advisor",
    "date": "5/21/2016",
    "admin": "Billy Sanders",
    "state": 'new'
  }, {
    "id": 100,
    "user_name": "srice2r",
    "email": "srice2r@nydailynews.com",
    "full_name": "Virginia Rivera",
    "phone": "1-(203)331-6636",
    "job_title": "Assistant Media Planner",
    "date": "11/2/2016",
    "admin": "Stephen Rice",
    "state": 'new'
  }]
};

export default function requestsAccessData(state = initialState) {
  return state;
}
