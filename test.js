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

const testQuestions = '{"response_code":0,"results":[{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Whistler was the codename of this Microsoft Operating System.","correct_answer":"Windows XP","incorrect_answers":["Windows 2000","Windows 7","Windows 95"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"What five letter word is the motto of the IBM Computer company?","correct_answer":"Think","incorrect_answers":["Click","Logic","Pixel"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"The computer OEM manufacturer Clevo, known for its Sager notebook line, is based in which country?","correct_answer":"Taiwan","incorrect_answers":["United States","Germany","People\'s Republic of China"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Nvidia\'s headquarters are based in which Silicon Valley city?","correct_answer":"Santa Clara","incorrect_answers":["Palo Alto","Cupertino","Mountain View"]},{"category":"Science: Computers","type":"multiple","difficulty":"easy","question":"In web design, what does CSS stand for?","correct_answer":"Cascading Style Sheet","incorrect_answers":["Counter Strike: Source","Corrective Style Sheet","Computer Style Sheet"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Which one of these is not an official development name for a Ubuntu release?","correct_answer":"Mystic Mansion","incorrect_answers":["Trusty Tahr","Utopic Unicorn","Wily Werewolf"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"In programming, the ternary operator is mostly defined with what symbol(s)?","correct_answer":"?:","incorrect_answers":["??","if then","?"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"Which of the following is a personal computer made by the Japanese company Fujitsu?","correct_answer":"FM-7","incorrect_answers":["PC-9801","Xmillennium ","MSX"]},{"category":"Science: Computers","type":"multiple","difficulty":"medium","question":"How many bytes are in a single Kibibyte?","correct_answer":"1024","incorrect_answers":["2400","1000","1240"]},{"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"The acronym \'RIP\' stands for which of these?","correct_answer":"Routing Information Protocol","incorrect_answers":["Runtime Instance Processes","Regular Interval Processes","Routine Inspection Protocol"]}]}';
