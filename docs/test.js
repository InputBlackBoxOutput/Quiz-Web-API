//  Use below response for testing
//  Source: https://opentdb.com/
//  The above resource is license under Creative Commons Attribution-ShareAlike 4.0 International License

/*
// Formatted to make it easy to read i.e. to make it human-readable :-)
{
   "response_code": 0,
   "results": [
      {
         "category": "Science: Computers",
         "type": "multiple",
         "difficulty": "medium",
         "question": "Whistler was the codename of this Microsoft Operating System.",
         "correct_answer": "Windows XP",
         "incorrect_answers": [
            "Windows 2000",
            "Windows 7",
            "Windows 95"
         ]
      },
      {
         "category": "Science: Computers",
         "type": "multiple",
         "difficulty": "medium",
         "question": "What five letter word is the motto of the IBM Computer company?",
         "correct_answer": "Think",
         "incorrect_answers": [
            "Click",
            "Logic",
            "Pixel"
         ]
      },
      {
         "category": "Science: Computers",
         "type": "multiple",
         "difficulty": "medium",
         "question": "The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?",
         "correct_answer": "Taiwan",
         "incorrect_answers": [
            "United States",
            "Germany",
            "People's Republic of China"
         ]
      },
      {
         "category": "Science: Computers",
         "type": "multiple",
         "difficulty": "medium",
         "question": "Nvidia's headquarters are based in which Silicon Valley city?",
         "correct_answer": "Santa Clara",
         "incorrect_answers": [
            "Palo Alto",
            "Cupertino",
            "Mountain View"
         ]
      },
      {
         "category": "Science: Computers",
         "type": "multiple",
         "difficulty": "easy",
         "question": "In web design, what does CSS stand for?",
         "correct_answer": "Cascading Style Sheet",
         "incorrect_answers": [
            "Counter Strike: Source",
            "Corrective Style Sheet",
            "Computer Style Sheet"
         ]
      },
      {
         "category": "Science: Computers",
         "type": "multiple",
         "difficulty": "medium",
         "question": "Which one of these is not an official development name for a Ubuntu release?",
         "correct_answer": "Mystic Mansion",
         "incorrect_answers": [
            "Trusty Tahr",
            "Utopic Unicorn",
            "Wily Werewolf"
         ]
      },
      {
         "category": "Science: Computers",
         "type": "multiple",
         "difficulty": "medium",
         "question": "In programming, the ternary operator is mostly defined with what symbol(s)?",
         "correct_answer": "?:",
         "incorrect_answers": [
            "??",
            "if then",
            "?"
         ]
      },
      {
         "category": "Science: Computers",
         "type": "multiple",
         "difficulty": "medium",
         "question": "Which of the following is a personal computer made by the Japanese company Fujitsu?",
         "correct_answer": "FM-7",
         "incorrect_answers": [
            "PC-9801",
            "Xmillennium ",
            "MSX"
         ]
      },
      {
         "category": "Science: Computers",
         "type": "multiple",
         "difficulty": "medium",
         "question": "How many bytes are in a single Kibibyte?",
         "correct_answer": "1024",
         "incorrect_answers": [
            "2400",
            "1000",
            "1240"
         ]
      },
      {
         "category": "Science: Computers",
         "type": "multiple",
         "difficulty": "hard",
         "question": "The acronym 'RIP' stands for which of these?",
         "correct_answer": "Routing Information Protocol",
         "incorrect_answers": [
            "Runtime Instance Processes",
            "Regular Interval Processes",
            "Routine Inspection Protocol"
         ]
      }
   ]
}
*/

const testQuestions0 = '{"response_code":0,"results":[{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Whistler was the codename of this Microsoft Operating System.","correct_answer":"Windows XP","incorrect_answers":["Windows 2000","Windows 7","Windows 95"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"What five letter word is the motto of the IBM Computer company?","correct_answer":"Think","incorrect_answers":["Click","Logic","Pixel"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?","correct_answer":"Taiwan","incorrect_answers":["United States","Germany","People\'s Republic of China"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Nvidia\'s headquarters are based in which Silicon Valley city?","correct_answer":"Santa Clara","incorrect_answers":["Palo Alto","Cupertino","Mountain View"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"In web design, what does CSS stand for?","correct_answer":"Cascading Style Sheet","incorrect_answers":["Counter Strike: Source","Corrective Style Sheet","Computer Style Sheet"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Which one of these is not an official development name for a Ubuntu release?","correct_answer":"Mystic Mansion","incorrect_answers":["Trusty Tahr","Utopic Unicorn","Wily Werewolf"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"In programming, the ternary operator is mostly defined with what symbol(s)?","correct_answer":"?:","incorrect_answers":["??","if then","?"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Which of the following is a personal computer made by the Japanese company Fujitsu?","correct_answer":"FM-7","incorrect_answers":["PC-9801","Xmillennium ","MSX"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"How many bytes are in a single Kibibyte?","correct_answer":"1024","incorrect_answers":["2400","1000","1240"]},{"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"The acronym \'RIP\' stands for which of these?","correct_answer":"Routing Information Protocol","incorrect_answers":["Runtime Instance Processes","Regular Interval Processes","Routine Inspection Protocol"]}]}';

/*
// Formatted to make it easy to read i.e. to make it human-readable :-)
{
   "response_code":0,
   "results":[
      {
         "category":"Science: Mathematics",
         "type":"multiple",
         "difficulty":"medium",
         "question":"In a complete graph G, which has 12 vertices, how many edges are there?",
         "correct_answer":"66",
         "incorrect_answers":[
            "67",
            "34",
            "11"
         ]
      },
      {
         "category":"Science: Mathematics",
         "type":"multiple",
         "difficulty":"easy",
         "question":"How is the number 9 represented as a binary number?",
         "correct_answer":"1001",
         "incorrect_answers":[
            "1000",
            "1110",
            "1010"
         ]
      },
      {
         "category":"Science: Mathematics",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What is the area of a circle with a diameter of 20 inches if pi= 3.1415?",
         "correct_answer":"314.15 Inches",
         "incorrect_answers":[
            "380.1215 Inches",
            "3141.5 Inches",
            "1256.6 Inches"
         ]
      },
      {
         "category":"Science: Mathematics",
         "type":"multiple",
         "difficulty":"easy",
         "question":"In Roman Numerals, what does XL equate to?",
         "correct_answer":"40",
         "incorrect_answers":[
            "60",
            "15",
            "90"
         ]
      },
      {
         "category":"Science: Mathematics",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What is the alphanumeric representation of the imaginary number?",
         "correct_answer":"i",
         "incorrect_answers":[
            "e",
            "n",
            "x"
         ]
      },
      {
         "category":"Science: Mathematics",
         "type":"multiple",
         "difficulty":"hard",
         "question":"The decimal number 31 in hexadecimal would be what?",
         "correct_answer":"1F",
         "incorrect_answers":[
            "3D",
            "2E",
            "1B"
         ]
      },
      {
         "category":"Science: Mathematics",
         "type":"multiple",
         "difficulty":"easy",
         "question":"What is the symbol for Displacement?",
         "correct_answer":"delta",
         "incorrect_answers":[
            "dr",
            "Dp",
            "r"
         ]
      },
      {
         "category":"Science: Mathematics",
         "type":"multiple",
         "difficulty":"hard",
         "question":"What is the plane curve proposed by Descartes to challenge Fermat's extremum-finding techniques called?",
         "correct_answer":"Folium of Descartes",
         "incorrect_answers":[
            "Elliptic Paraboloid of Descartes",
            "Cartesian Coordinates",
            "Descarte's Helicoid"
         ]
      },
      {
         "category":"Science: Mathematics",
         "type":"multiple",
         "difficulty":"hard",
         "question":"The French mathematician &Eacute;variste Galois is primarily known for his work in which?",
         "correct_answer":"Galois Theory",
         "incorrect_answers":[
            "Galois' Continued Fractions",
            "Galois' Method for PDE's ",
            "Abelian Integration"
         ]
      },
      {
         "category":"Science: Mathematics",
         "type":"multiple",
         "difficulty":"hard",
         "question":"Which of these numbers is closest to the total number of possible states for an army standard Enigma Machine?",
         "correct_answer":"1.58 x 10^20",
         "incorrect_answers":[
            "1.58 x 10^22",
            "1.58 x  10^18",
            "1.58 x 10^24"
         ]
      }
   ]
}
*/

const testQuestions1 = `{"response_code":0,"results":[{"category":"Science: Mathematics","type":"multiple","difficulty":"medium","question":"In a complete graph G, which has 12 vertices, how many edges are there?","correct_answer":"66","incorrect_answers":["67","34","11"]},{"category":"Science: Mathematics","type":"multiple","difficulty":"easy","question":"How is the number 9 represented as a binary number?","correct_answer":"1001","incorrect_answers":["1000","1110","1010"]},{"category":"Science: Mathematics","type":"multiple","difficulty":"medium","question":"What is the area of a circle with a diameter of 20 inches if pi= 3.1415?","correct_answer":"314.15 Inches","incorrect_answers":["380.1215 Inches","3141.5 Inches","1256.6 Inches"]},{"category":"Science: Mathematics","type":"multiple","difficulty":"easy","question":"In Roman Numerals, what does XL equate to?","correct_answer":"40","incorrect_answers":["60","15","90"]},{"category":"Science: Mathematics","type":"multiple","difficulty":"medium","question":"What is the alphanumeric representation of the imaginary number?","correct_answer":"i","incorrect_answers":["e","n","x"]},{"category":"Science: Mathematics","type":"multiple","difficulty":"hard","question":"The decimal number 31 in hexadecimal would be what?","correct_answer":"1F","incorrect_answers":["3D","2E","1B"]},{"category":"Science: Mathematics","type":"multiple","difficulty":"easy","question":"What is the symbol for Displacement?","correct_answer":"delta","incorrect_answers":["dr","Dp","r"]},{"category":"Science: Mathematics","type":"multiple","difficulty":"hard","question":"What is the plane curve proposed by Descartes to challenge Fermat's extremum-finding techniques called?","correct_answer":"Folium of Descartes","incorrect_answers":["Elliptic Paraboloid of Descartes","Cartesian Coordinates","Descarte's Helicoid"]},{"category":"Science: Mathematics","type":"multiple","difficulty":"hard","question":"The French mathematician &Eacute;variste Galois is primarily known for his work in which?","correct_answer":"Galois Theory","incorrect_answers":["Galois' Continued Fractions","Galois' Method for PDE's ","Abelian Integration"]},{"category":"Science: Mathematics","type":"multiple","difficulty":"hard","question":"Which of these numbers is closest to the total number of possible states for an army standard Enigma Machine?","correct_answer":"1.58 x 10^20","incorrect_answers":["1.58 x 10^22","1.58 x  10^18","1.58 x 10^24"]}]}`;

/*
// Formatted to make it easy to read i.e. to make it human-readable :-)
{
   "response_code":0,
   "results":[
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"easy",
         "question":"Which type of rock is created by intense heat AND pressure?",
         "correct_answer":"Metamorphic",
         "incorrect_answers":[
            "Sedimentary",
            "Igneous",
            "Diamond"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"easy",
         "question":"What is the hottest planet in the Solar System?",
         "correct_answer":"Venus",
         "incorrect_answers":[
            "Mars",
            "Mercury",
            "Jupiter"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"easy",
         "question":"What is the first element on the periodic table?",
         "correct_answer":"Hydrogen",
         "incorrect_answers":[
            "Helium",
            "Oxygen",
            "Lithium"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"easy",
         "question":"Which element has the highest melting point?",
         "correct_answer":"Carbon",
         "incorrect_answers":[
            "Tungsten",
            "Platinum",
            "Osmium"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"hard",
         "question":"Which of the following plastic is commonly used for window frames, gutters and drain pipes?",
         "correct_answer":"Polyvinylchloride (PVC) ",
         "incorrect_answers":[
            "Polyethylene (PE)",
            "Polypropylene (PP)",
            "Polystyrene (PS)"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"hard",
         "question":"What element on the periodic table has 92 electrons?",
         "correct_answer":"Uranium",
         "incorrect_answers":[
            "Sulfur",
            "Hydrogen",
            "Iron"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"hard",
         "question":"What genetic disease is caused by having an extra Y chromosome (XYY)?",
         "correct_answer":"Jacob's Syndrome",
         "incorrect_answers":[
            "Klinefelter's Syndrome",
            "Turner's Syndrome",
            "Down Syndrome"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"hard",
         "question":"Which of the following is NOT a word used to describe an earthquake?",
         "correct_answer":"Drop-slide",
         "incorrect_answers":[
            "Foreshock",
            "Strike-slip",
            "Temblor"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"easy",
         "question":"What animal takes part in Schrodinger's most famous thought experiment?",
         "correct_answer":"Cat",
         "incorrect_answers":[
            "Dog",
            "Bat",
            "Butterfly"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What are human nails made of?",
         "correct_answer":"Keratin",
         "incorrect_answers":[
            "Bone",
            "Chitin",
            "Calcium"
         ]
      }
   ]
}
*/

const testQuestions2 = `{"response_code":0,"results":[{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"Which type of rock is created by intense heat AND pressure?","correct_answer":"Metamorphic","incorrect_answers":["Sedimentary","Igneous","Diamond"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"What is the hottest planet in the Solar System?","correct_answer":"Venus","incorrect_answers":["Mars","Mercury","Jupiter"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"What is the first element on the periodic table?","correct_answer":"Hydrogen","incorrect_answers":["Helium","Oxygen","Lithium"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"Which element has the highest melting point?","correct_answer":"Carbon","incorrect_answers":["Tungsten","Platinum","Osmium"]},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"Which of the following plastic is commonly used for window frames, gutters and drain pipes?","correct_answer":"Polyvinylchloride (PVC) ","incorrect_answers":["Polyethylene (PE)","Polypropylene (PP)","Polystyrene (PS)"]},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"What element on the periodic table has 92 electrons?","correct_answer":"Uranium","incorrect_answers":["Sulfur","Hydrogen","Iron"]},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"What genetic disease is caused by having an extra Y chromosome (XYY)?","correct_answer":"Jacob's Syndrome","incorrect_answers":["Klinefelter's Syndrome","Turner's Syndrome","Down Syndrome"]},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"Which of the following is NOT a word used to describe an earthquake?","correct_answer":"Drop-slide","incorrect_answers":["Foreshock","Strike-slip","Temblor"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"What animal takes part in Schrodinger's most famous thought experiment?","correct_answer":"Cat","incorrect_answers":["Dog","Bat","Butterfly"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"What are human nails made of?","correct_answer":"Keratin","incorrect_answers":["Bone","Chitin","Calcium"]}]}`;

/*
// Formatted to make it easy to read i.e. to make it human-readable :-)
{
   "response_code":0,
   "results":[
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What mineral has the lowest number on the Mohs scale?",
         "correct_answer":"Talc",
         "incorrect_answers":[
            "Quartz",
            "Diamond",
            "Gypsum"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"medium",
         "question":"How many degrees Fahrenheit is 100 degrees Celsius? ",
         "correct_answer":"212",
         "incorrect_answers":[
            "326",
            "100",
            "451"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"easy",
         "question":"How many bones are in the human body?",
         "correct_answer":"206",
         "incorrect_answers":[
            "203",
            "209",
            "200"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"hard",
         "question":"'The Big Bang Theory' was first theorized by a priest of what religious ideology?",
         "correct_answer":"Catholic",
         "incorrect_answers":[
            "Christian",
            "Jewish",
            "Islamic"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"easy",
         "question":"The element involved in making human blood red is which of the following?",
         "correct_answer":"Iron",
         "incorrect_answers":[
            "Copper",
            "Iridium",
            "Cobalt"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"easy",
         "question":"The asteroid belt is located between which two planets?",
         "correct_answer":"Mars and Jupiter",
         "incorrect_answers":[
            "Jupiter and Saturn",
            "Mercury and Venus",
            "Earth and Mars"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"medium",
         "question":"About how old is Earth?",
         "correct_answer":"4.5 Billion Years",
         "incorrect_answers":[
            "3.5 Billion Years",
            "2.5 Billion Years",
            "5.5 Billion Years"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"hard",
         "question":"Burning which of these metals will produce a bright white flame?",
         "correct_answer":"Magnesium",
         "incorrect_answers":[
            "Copper",
            "Lithium",
            "Lead"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"hard",
         "question":"Muscle fiber is constructed of bundles small long organelles called what?",
         "correct_answer":"Myofibrils",
         "incorrect_answers":[
            "Epimysium",
            "Myofiaments",
            "Myocardium"
         ]
      },
      {
         "category":"Science & Nature",
         "type":"multiple",
         "difficulty":"medium",
         "question":"What are human nails made of?",
         "correct_answer":"Keratin",
         "incorrect_answers":[
            "Bone",
            "Chitin",
            "Calcium"
         ]
      }
   ]
}
*/
const testQuestions = `{"response_code":0,"results":[{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"What mineral has the lowest number on the Mohs scale?","correct_answer":"Talc","incorrect_answers":["Quartz","Diamond","Gypsum"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"How many degrees Fahrenheit is 100 degrees Celsius? ","correct_answer":"212","incorrect_answers":["326","100","451"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"How many bones are in the human body?","correct_answer":"206","incorrect_answers":["203","209","200"]},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"'The Big Bang Theory' was first theorized by a priest of what religious ideology?","correct_answer":"Catholic","incorrect_answers":["Christian","Jewish","Islamic"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"The element involved in making human blood red is which of the following?","correct_answer":"Iron","incorrect_answers":["Copper","Iridium","Cobalt"]},{"category":"Science & Nature","type":"multiple","difficulty":"easy","question":"The asteroid belt is located between which two planets?","correct_answer":"Mars and Jupiter","incorrect_answers":["Jupiter and Saturn","Mercury and Venus","Earth and Mars"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"About how old is Earth?","correct_answer":"4.5 Billion Years","incorrect_answers":["3.5 Billion Years","2.5 Billion Years","5.5 Billion Years"]},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"Burning which of these metals will produce a bright white flame?","correct_answer":"Magnesium","incorrect_answers":["Copper","Lithium","Lead"]},{"category":"Science & Nature","type":"multiple","difficulty":"hard","question":"Muscle fiber is constructed of bundles small long organelles called what?","correct_answer":"Myofibrils","incorrect_answers":["Epimysium","Myofiaments","Myocardium"]},{"category":"Science & Nature","type":"multiple","difficulty":"medium","question":"What are human nails made of?","correct_answer":"Keratin","incorrect_answers":["Bone","Chitin","Calcium"]}]}`;