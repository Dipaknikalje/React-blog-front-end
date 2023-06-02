import React, { createContext, useState } from "react";

export const store = createContext();

const Details = (props) => {
  const [details, setDetails] = useState([
    {
      id: 1,
      title: "Sunshine",
      Image: "home_img/sunshine.jpg",
      category: "Nature",
      description:
        "Are you a travelholic looking for an exciting road trip? Look no further! From stunning mountain views to serene coastlines, these six picturesque road trip destinations are sure to provide you with the perfect getaway.",
    },
    {
      id: 2,
      title: "Nature",
      Image: "home_img/nature.jpg",
      category: "Nature",
      description:
        "Are you a travelholic looking for an exciting road trip? Look no further! From stunning mountain views to serene coastlines, these six picturesque road trip destinations are sure to provide you with the perfect getaway.",
    },
    {
      id: 3,
      title: "Wildlife",
      Image: "home_img/cheetah.jpg",
      category: "Nature",
      description:
        "The cheetah (Acinonyx jubatus) is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running...",
    },

    {
      id: 4,
      title: "Akira",
      Image: "bollywood_img/akira.jpg",
      category: "Bollywood",
      Release: "Date",
      rating: "3.5/5",
      description:
        "A gripping action thriller about a college girl Akira, who has grown up with the ideals of being self reliant. Her life spirals out of control when she becomes unwittingly involved in a crime involving four corrupt police officers.",
    },
    {
      id: 5,
      title: "Chhalang",
      Image: "bollywood_img/chhalang.jpg",
      category: "Bollywood",
      Release: "Date",
      rating: "3.0/5",
      description:
        "Chhalaang is star Rajkummar Rao and filmmaker Hansal Mehta’s fifth movie together, and even though it is the weakest of the lot — Aligarh and Shahid are both Oscar-worthy — it’s a consistently engaging picture, elevated by a handful of excellent performances, and a sharp script.",
    },
    {
      id: 6,
      title: "Drishyam",
      Image: "bollywood_img/drishyam.jpg",
      category: "Bollywood",
      Release: "Date",
      rating: "3.0/5",
      description:
        "The film stars Ajay Devgn, Tabu, Shriya Saran, Ishita Dutta and Rishab Chadha. It was released on 31 July 2015 and emerged as a critical and commercial success, ...",
    },
    {
      id: 7,
      title: "Gold",
      Image: "bollywood_img/gold.jpg",
      category: "Bollywood",
      Release: "Date",
      rating: "3.0/5",
      description:
        "Gold is based on the journey of India's first national hockey team to the 1948 Summer Olympics and follows Tapan Das, the man who won India its first gold medal ...",
    },
    {
      id: 8,
      title: "Lagaan",
      Image: "bollywood_img/lagaan.jpg",
      category: "Bollywood",
      Release: "Date",
      rating: "3.0/5",
      description:
        "Lagaan: Once Upon a Time in India is a 2001 epic sports drama film written and directed by Ashutosh Gowariker. The film was produced by Aamir Khan, ...",
    },

    {
      id: 9,
      title: "Mother INDIA",
      Image: "bollywood_img/mother_india.jpg",
      category: "Bollywood",
      Release: "Date",
      rating: "4.5/5",
      description:
        "Mother India is a 1957 Indian epic drama film, directed by Mehboob Khan and starring Nargis, Sunil Dutt, Rajendra Kumar and Raaj Kumar.",
    },
    {
      id: 10,
      title: "PK",
      Image: "bollywood_img/pk.jpg",
      category: "Bollywood",
      subcat: "Bollywood",
      description:
        "PK ( transl. Tipsy) is a 2014 Indian Hindi-language science-fiction comedy-drama film edited and directed by Rajkumar Hirani and written by Hirani and ...",
    },
    {
      id: 11,
      title: "Salam Bombay",
      Image: "bollywood_img/salam bombay.jpg",
      category: "Bollywood",
      description:
        "Salaam Bombay! is a 1988 Indian Hindi-language drama film, directed, co-written and co-produced by Mira Nair. The screenwriter was Nair's creative ...",
    },
    {
      id: 12,
      title: "Shaandar",
      Image: "bollywood_img/shaandar.jpg",
      category: "Bollywood",
      description:
        "Shaandaar ( transl. Magnificent) is a 2015 Indian Hindi-language romantic comedy film directed by Vikas Bahl and produced by Anurag Kashyap and Vikramaditya ...",
    },
    {
      id: 13,
      title: "Student Of the year",
      Image: "bollywood_img/syo.jpg",
      category: "Bollywood",
      subcat: "Bollywood",
      description:
        "Student of the Year is a 2012 Indian Hindi-language romantic comedy film directed by Karan Johar and produced by Dharma Productions and Red Chillies Entertainment.",
    },
    {
      id: 14,
      title: "Farzi all episodes are out now on Netflix ",
      Image:
        "https://media5.bollywoodhungama.in/wp-content/uploads/2023/03/Shahid-Kapoor-and-Raashii-Khanna-feature-in-romantic-track-Aasmaan-from-Farzi-watch-video.jpg",
      category: "Bollywood",
      description:
        "Farzi continues to create ripples globally. Celebrating the success, Prime Video has dropped a soothing melodic track 'Aasmaan' from Farzi. The song’s soothing vibe provides a stark contrast to the series’ fast-paced storyline and has a melody that is sure to rule everyone’s playlists. The song is composed by Tanishk Bagchi and sung by Raghav Meattle and Anumita Nadesan.",
    },
    {
      id: 15,
      title: "Sooryawanshi",
      Image: "bollywood_img/suryavanshi.jpg",
      category: "Bollywood",
      subcat: "Bollywood",

      description:
        "Sooryavanshi is a 2021 Indian Hindi-language action film written and directed by Rohit Shetty and produced by Reliance Entertainment, Rohit Shetty Picturez, ...",
    },
    {
      id: 16,
      title: "Batman VS Superman",
      Image: "hollywood_img/batman vs superman.jpg",
      category: "Hollywood",
      subcat: "Hollywood",
      Release: "Date",
      rating: "3.5/5",
      description:
        "Batman v Superman: Dawn of Justice is a 2016 American superhero film based on the DC Comics characters Batman and Superman. Distributed by Warner Bros.",
    },
    {
      id: 17,
      title: "Inception",
      Image: "hollywood_img/inception.jpg",
      category: "Hollywood",
      subcat: "Hollywood",
      Release: "Date",
      rating: "3.0/5",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., ...",
    },
    {
      id: 18,
      title: "Iron Man 4",
      Image: "hollywood_img/iron man 4.jpg",
      category: "Hollywood",
      Release: "Date",
      rating: "3.0/5",
      description:
        "Iron Man 4 Release Date 2023. Since the release of Iron Man 3 in 2013, Marvel fans have been eagerly awaiting information regarding Iron Man 4.",
    },
    {
      id: 19,
      title: "John Wick Chapter 2",
      Image: "hollywood_img/john wick chapter 2.jpg",
      category: "Hollywood",
      Release: "Date",
      rating: "3.0/5",
      description:
        "John Wick: Chapter 2 is a 2017 American action thriller film directed by Chad Stahelski and written by Derek Kolstad. The film is sequel to John Wick (2014) ...",
    },
    {
      id: 20,
      title: "Jumanji",
      Image: "Hollywood_img/jumanji.jpg",
      category: "Hollywood",
      Release: "Date",
      rating: "3.0/5",
      description:
        "Jumanji is a 1995 American fantasy adventure film directed by Joe Johnston from a screenplay by Jonathan Hensleigh, Greg Taylor, and Jim Strain, based on ...",
    },

    {
      id: 21,
      title: "Lost",
      Image: "hollywood_img/lost.jpg",
      category: "Hollywood",
      Release: "Date",
      rating: "4.5/5",
      description:
        "The show follows a large group of survivors that find themselves stuck on an island in the middle of nowhere after a plane crash. The show's main cast comprises ...",
    },
    {
      id: 22,
      title: "R.I.P.D",
      Image: "hollywood_img/ripd.jpg",
      category: "Hollywood",
      subcat: "Hollywood",
      rating: "4.5/5",
      description:
        "Read allA cop killed by his own partner joins RIPD, an afterlife law enforcement department working to apprehend various monsters disguised as humans living on ...",
    },
    {
      id: 23,
      title: "Succed",
      Image: "Hollywood_img/succed.jpg",
      category: "Bollywood",
      description:
        "Documentary. In 2007, four teenagers from disparate backgrounds are voted 'Most Likely To Succeed' during their senior year of high school.",
    },
    {
      id: 24,
      title: "Venom",
      Image: "Hollywood_img/venom.jpg",
      category: "Hollywood",
      subcat: "Hollywood",
      rating: "4.0/5",
      description:
        "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect ...",
    },
    {
      id: 25,
      title: "Justice League ",
      Image: "hollywood_img/justice league.jpg",
      category: "Hollywood-Top",
      description:
        "Justice League is a 2017 American superhero film based on the DC Comics superhero team of the same name. Produced by Warner Bros.",
    },
    {
      id: 26,
      title: "Artificial intelligence ",
      Image: "technology_img/ai.jpg",
      category: "Technology",
      subcat: "Technology",
      description:
        "What is artificial intelligence (AI)? Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.",
    },
    {
      id: 27,
      title: "Cloud computing ",
      Image: "technology_img/cloud_computing.jpg",
      category: "Technology",
      subcat: "Technology",
      description:
        "Simply put, cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”) to offer faster innovation, flexible resources, and economies of scale.",
    },
    {
      id: 28,
      title: "Cyber Security ",
      Image: "technology_img/cyber_security.jpg",
      category: "Technology",
      subcat: "Technology",
      description:
        "Cyber security refers to every aspect of protecting an organization and its employees and assets against cyber threats. As cyberattacks become more common and sophisticated and corporate networks grow more complex, a variety of cyber security solutions are required to mitigate corporate cyber risk.",
    },
    {
      id: 29,
      title: "DBA",
      Image: "technology_img/dba.jpg",
      category: "Technology",
      description:
        "A database administrator (DBA) is the information technician responsible for directing and performing all activities related to maintaining a successful ....",
    },
    {
      id: 30,
      title: "Machine Learning ",
      Image: "technology_img/machine_learning.jpg",
      category: "Technology",
      description:
        "Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that ...",
    },
    {
      id: 31,
      title: "Neural technology",
      Image: "technology_img/neural.jpg",
      category: "Technology",
      description:
        "Neural Technologies delivers data-driven business solutions for customers across global industry. Contact us to find out more about our digital transformation ...",
    },

    {
      id: 32,
      title: "Calisthenics",
      Image: "fitness_img/calisthenics.jpg",
      category: "Fitness",
      subcat: "Fitness",
      description:
        "Calisthenics are exercises that don't rely on anything but body weight. They allow for the development of strength, endurance, flexibility, and coordination ...",
    },

    {
      id: 33,
      title: "Aerobic Exercise",
      Image: "fitness_img/exercise.jpg",
      category: "Fitness",
      subcat: "Fitness",
      description:
        "Aerobic exercise is any type of cardiovascular conditioning, or “cardio.” It can include activities like brisk walking, swimming, running, or cycling. By definition, aerobic exercise means “with oxygen.” Your breathing and heart rate will increase during aerobic activities.",
    },
    {
      id: 34,
      title: "Fitness Games",
      Image: "fitness_img/fitnessgame.jpg",
      category: "Fitness",
      description:
        "Workout Games: #1 Balloony Tunes · Workout Games: #2 Plank Races · Workout Games: #3 Phone Number EMOM · Workout Games: #4 Cone Wars · Workout Games ...",
    },
    {
      id: 35,
      title: "Lunge Exercise",
      Image: "fitness_img/lunge.jpg",
      category: "Fitness",
      subcat: "Fitness",

      description:
        "The lunge is a popular, versatile exercise for strengthening the lower body. It works many muscles in one move and offers numerous benefits.",
    },
    {
      id: 36,
      title: "Planck Exercise",
      Image: "fitness_img/plank.jpg",
      category: "Fitness",
      description:
        "The plank exercise works the entire core, especially the rectus abdominis. It also works the abdominal muscles that run from the pelvis along ...",
    },

    {
      id: 37,
      title: "Jumbo Thali",
      Image: "food_img/indian.jpg",
      category: "Food",
      description:
        "Here are 8 biggest thalis of India that you just can't eat alone. Thali refers to a complete Indian meal in which a variety of dishes are ...",
    },
    {
      id: 38,
      title: "FISH",
      Image: "food_img/kerala_fish.jpeg",
      category: "Food-Top",
      subcat: "Food",

      description:
        " 1. Heat 1 tbsp oil in a pan. Add cumin and allow to splutter. · 2. Add ginger garlic and fry for 30 to 60 seconds. · 3. Fry until the raw smell ...",
    },

    {
      id: 39,
      title: "Mughalai Chicken",
      Image: "food_img/mughalai_chicken.jpg",
      category: "Food",
      subcat: "Food",
      description:
        " Mughlai Chicken is a restaurant style, north Indian recipe with a creamy, dark brown onion gravy that is perfect for a weekend meal!",
    },
    {
      id: 40,
      title: "Patra",
      Image: "food_img/patra.jpg",
      category: "Food-Top",
      subcat: "Food",

      description:
        "Patra Curry. Ingredients. ½ cup oil 2 medium onions, finely chopped 1 tsp Supreme Cumin Seeds 2 tins of Supreme Patra, sliced 1 tsp Supreme Ginger Powder",
    },
    {
      id: 41,
      title: "Poha",
      Image: "food_img/poha.jpg",
      category: "Food-Top",

      description:
        " Poha is basically rice flakes that have been parboiled, rolled, and flattened. In English, poha is called flattened rice or beaten rice.",
    },
    {
      id: 42,
      title: "Samosa",
      Image: "food_img/samosa.jpeg",
      category: "Food-Top",

      description:
        "A samosa or sambosa is a fried South Asian pastry with a savoury filling, including ingredients such as spiced potatoes, onions, peas, meat or fish.",
    },

    {
      id: 43,
      title: "Idali",
      Image: "food_img/idali.jpg",
      category: "Food-Top",

      description:
        "Idli or idly (plural: idlis) is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka.",
    },
    {
      id: 44,
      title: "Chhole",
      Image: "food_img/chhole.jpg",
      category: "Food",

      description:
        " Chole is a popular north Indian curry made with chickpeas a whole bunch of spices! It goes best with rice, parathas and bhaturas!",
    },
    {
      id: 45,
      title: "Maharashtrian Thali",
      Image: "food_img/thali.jpg",
      category: "Food",

      description:
        "We Maharashtrians are big time foodies and take pride in our cultural diversity. Maharashtra can never disappoint you, when it comes to food.",
    },
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>
        {props.children}
      </store.Provider>
    </div>
  );
};

export default Details;
