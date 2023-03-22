import React, { createContext, useState } from 'react'

export const store = createContext()

const Details = (props) => {
  const [details, setDetails] = useState([
    {
      "id": 1,
      "title": "Sunshine",
      "Image": "home_img/sunshine.jpg",
      "category": "Nature",
      "description": "Are you a travelholic looking for an exciting road trip? Look no further! From stunning mountain views to serene coastlines, these six picturesque road trip destinations are sure to provide you with the perfect getaway."
    },
    {
      "id": 2,
      "title": "Nature",
      "Image": "home_img/nature.jpg",
      "category": "Nature",
      "description": "Are you a travelholic looking for an exciting road trip? Look no further! From stunning mountain views to serene coastlines, these six picturesque road trip destinations are sure to provide you with the perfect getaway."
    },
    {
      "id": 3,
      "title": "Wildlife",
      "Image": "home_img/cheetah.jpg",
      "category": "Nature",
      "description": "Are you a travelholic looking for an exciting road trip? Look no further! From stunning mountain views to serene coastlines, these six picturesque road trip destinations are sure to provide you with the perfect getaway."
    },


    {
      "id": 4,
      "title": "Akira",
      "Image": "bollywood_img/akira.jpg",
      "category": "Bollywood",
      "Release": "Date",
      "rating": "3.5/5",
      "description":"A gripping action thriller about a college girl Akira, who has grown up with the ideals of being self reliant. Her life spirals out of control when she becomes unwittingly involved in a crime involving four corrupt police officers."
    },
    {
      "id": 5,
      "title": "Chhalang",
      "Image": "bollywood_img/chhalang.jpg",
      "category": "Bollywood",
      "Release":"Date",
      "rating": "3.0/5",
      "description": "Chhalaang is a hilarious yet inspiring journey by Montu."
    },
    {
      "id": 6,
      "title": "Drishyam",
      "Image": "bollywood_img/drishyam.jpg",
      "category": "Bollywood",
      "Release":"Date",
      "rating": "3.0/5",
      "description": "Movie review"
    },
    {
      "id": 7,
      "title": "Gold",
      "Image": "bollywood_img/gold.jpg",
      "category": "Bollywood",
      "Release":"Date",
      "rating": "3.0/5",
      "description": "Moview Review"
    },
    {
      "id": 8,
      "title": "Lagaan",
      "Image": "bollywood_img/lagaan.jpg",
      "category": "Bollywood",
      "Release":"Date",
      "rating": "3.0/5",
      "description": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
    },
  
  {
    "id": 9,
    "title": "Mother INDIA",
    "Image": "bollywood_img/mother_india.jpg",
    "category": "Bollywood",
    "Release":"Date",
    "rating": "4.5/5",
    "description": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." },
  {
    "id": 10,
    "title": "PK comes in top 10 movie from bollywood",
    "Image": "bollywood_img/pk.jpg",
    "category": "Bollywood-Top",
    "subcat":"Bollywood",
    "description":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." },
  {
    "id": 11,
    "title": "lorem epsum",
    "Image": "bollywood_img/salam bombay.jpg",
    "category": "Bollywood-Top",
    "description":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."},
  {
    "id": 12,
    "title": "Shaandar",
    "Image": "bollywood_img/shaandar.jpg",
    "category": "Bollywood-Top",
    "description":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."},
  {
    "id": 13,
    "title": "Student Of the year”..",
    "Image": "bollywood_img/syo.jpg",
    "category": "Bollywood-Top",
    "subcat":"Bollywood",
    "description":"lorem epsum" },
  {
    "id": 14,
    "title": "Farzi all episodes are out now on Netflix ",
    "Image": "https://media5.bollywoodhungama.in/wp-content/uploads/2023/03/Shahid-Kapoor-and-Raashii-Khanna-feature-in-romantic-track-Aasmaan-from-Farzi-watch-video.jpg",
    "category": "Bollywood-Top",
    "description":"Farzi continues to create ripples globally. Celebrating the success, Prime Video has dropped a soothing melodic track 'Aasmaan' from Farzi. The song’s soothing vibe provides a stark contrast to the series’ fast-paced storyline and has a melody that is sure to rule everyone’s playlists. The song is composed by Tanishk Bagchi and sung by Raghav Meattle and Anumita Nadesan."
  },
  {
    "id": 15,
    "title": "Sooryawanshi",
    "Image": "bollywood_img/suryavanshi.jpg",
    "category": "Bollywood-Top",
    "subcat":"Bollywood",

    "description":"Power of police is shown in this movie"
  },
  {
    "id": 16,
    "title": "Batman VS Superman",
    "Image": "hollywood_img/batman vs superman.jpg",
    "category": "Hollywood",
    "Release": "Date",
    "rating": "3.5/5",
    "description":"Lorem Ipsum" },
  {
    "id": 17,
    "title": "Inception",
    "Image": "hollywood_img/inception.jpg",
    "category": "Hollywood",
    "Release":"Date",
    "rating": "3.0/5",
    "description": "Lorem epsum"
  },
  {
    "id": 18,
    "title": "Iron Man 4",
    "Image": "hollywood_img/iron man 4.jpg",
    "category": "Hollywood",
    "Release":"Date",
    "rating": "3.0/5",
    "description": "Movie review"
  },
  {
    "id": 19,
    "title": "John Wick Chapter 2",
    "Image": "hollywood_img/john wick chapter 2.jpg",
    "category": "Hollywood",
    "Release":"Date",
    "rating": "3.0/5",
    "description": "Moview Review"
  },
  {
    "id": 20,
    "title": "JUmanji",
    "Image": "Hollywood_img/jumanji.jpg",
    "category": "Hollywood",
    "Release":"Date",
    "rating": "3.0/5",
    "description": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
  },

{
  "id": 21,
  "title": "Lost",
  "Image": "hollywood_img/lost.jpg",
  "category": "Hollywood",
  "Release":"Date",
  "rating": "4.5/5",
  "description": "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." 
},
{
  "id": 22,
  "title": "R.I.P.D",
  "Image": "hollywood_img/ripd.jpg",
  "category": "Hollywood-Top",
  "subcat":"Hollywood",
  "description":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." },
{
  "id": 23,
  "title": "Succed",
  "Image": "Hollywood_img/succed.jpg",
  "category": "Bollywood-Top",
  "description":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."},
{
  "id": 24,
  "title": "Venom",
  "Image": "Hollywood_img/venom.jpg",
  "category": "Hollywood-Top",
  "description":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."},
{
  "id": 25,
  "title": "Jumanji”..",
  "Image": "hollywood_img/jumanji.jpg",
  "category": "Hollywood-Top",
  "subcat":"Hollywood",
  "description":"lorem epsum" },
{
  "id": 26,
  "title": "Justice League ",
  "Image": "hollywood_img/justice league.jpg",
  "category": "Hollywood-Top",
  "description":"Farzi continues to create ripples globally. Celebrating the success, Prime Video has dropped a soothing melodic track 'Aasmaan' from Farzi. The song’s soothing vibe provides a stark contrast to the series’ fast-paced storyline and has a melody that is sure to rule everyone’s playlists. The song is composed by Tanishk Bagchi and sung by Raghav Meattle and Anumita Nadesan."
},
{
  "id": 27,
  "title": "Inception",
  "Image": "hollywood_img/inception.jpg",
  "category": "Hollywood-Top",
  "subcat":"Hollywood",

  "description":"Power of police is shown in this movie"
},

  {
    "id":28 ,
    "title": "Artificial intelligence ",
    "Image":"technology_img/ai.jpg",
    "category": "Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id":29,
    "title": "Cloud computing ",
    "Image":"technology_img/cloud_computing.jpg",
    "category": "Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id":30 ,
    "title": "Cyber Security ",
    "Image":"technology_img/cyber_security.jpg",
    "category": "Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id":31 ,
    "title": "DBA",
    "Image":"technology_img/dba.jpg",
    "category": "Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id":32 ,
    "title": "Machine Learning ",
    "Image":"technology_img/machine_learning.jpg",
    "category": "Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id":33 ,
    "title": "Neural technology",
    "Image":"technology_img/neural.jpg",
    "category": "Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
   },
   {
    "id": 34,
    "title": "DBA",
    "Image":"technology_img/dba.jpg",
    "category": "Technology",
    "description":"IoT and data remain naturally connected together. Data consumed and created continues developing at an ever-increasing rate. This convergence of data is energizing widespread IoT adoption as there will be almost 30.73 billion IoT connected gadgets by 2020. The Internet of Things (IoT) is an interconnection of a few gadgets, networks, technologies, and HR to accomplish a common objective. There are a variety of IoT-based applications being utilized in various segments and have succeeded with regards to giving gigantic advantages to the users. The ability to present data in an absorbable and important manner is the thing that makes an IoT solution alluring to customers. Anybody can print datasets on a page and hand them off, yet it would require significant investment and time on the user’s end to filter through that data physically and shape it into something they can work with. Data analytics provides clients with the ability to effortlessly get on trends or patterns within the data gathered by their device. The insight given by the data analysis guarantees a user is well furnished with the knowledge expected to settle on effective business or personal product decisions with confidence."
  },
  {
    "id": 35,
    "title": "Artificial Intelligence",
    "Image":"technology_img/ai.jpg",
    "category": "Technology-Top",
    "subcat":"Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  
  {
    "id": 36,
    "title": "cloud Computing",
    "Image":"technology_img/cloud_computing.jpg",
    "category": "Technology-Top",
    "subcat":"Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  
  {
    "id": 37,
    "title": "Cyber Security",
    "Image":"technology_img/cyber_security.jpg",
    "category": "Technology-Top",
    "subcat":"Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  
  {
    "id": 38,
    "title": "DBA",
    "Image":"technology_img/dba.jpg",
    "category": "Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  
  {
    "id": 39,
    "title": "Neural",
    "Image":"technology_img/neural.jpg",
    "category": "Technology-Top",
    "subcat":"Technology",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  ,

  {
    "id": 40,
    "title": "Calisthenics",
    "Image":"fitness_img/calisthenics.jpg",
    "category": "Fitness",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
    
  {
    "id": 41,
    "title": "Aerobic Exercise",
    "Image":"fitness_img/exercise.jpg",
    "category": "Fitness",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 42,
    "title": "Fitness Games",
    "Image":"fitness_img/fitnessgame.jpg",
    "category": "Fitness",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 43,
    "title": "Lunge Exercise",
    "Image":"fitness_img/lunge.jpg",
    "category": "Fitness",
    "subcat":"Fitness",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 44,
    "title": "Planck Exercise",
    "Image":"fitness_img/plank.jpg",
    "category": "Fitness",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 45,
    "title": "Aerobic Exercise",
    "Image":"fitness_img/exercise.jpg",
    "category": "Fitness",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 46,
    "title": "Aerobic Exercise",
    "Image":"fitness_img/exercise.jpg", 
    "category": "Fitness-Top",
    "subcat":"Fitness",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 47,
    "title": "Planck Exercise",
    "Image":"fitness_img/plank.jpg",
    "category": "Fitness-Top",
    "subcat":"Fitness",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 48,
    "title": "Lunge Exercise",
    "Image":"fitness_img/lunge.jpg", 
    "category": "Fitness-Top",
    "subcat":"Fitness",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 49,
    "title": "Fitness Games",
    "Image":"fitness_img/fitnessgame.jpg",
    "category": "Fitness-Top",
    "subcat":"Fitness",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
  "id": 50,
  "title": "Calisthenics",
  "Image":"fitness_img/calisthenics.jpg",
   "category": "Fitness-Top",
    "subcat":"Fitness",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 51,
    "title": "Jumbo Thali",
    "Image":"food_img/indian.jpg",
    "category": "Food",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 52,
    "title": "FISH",
    "Image":"food_img/kerala_fish.jpeg",
    "category": "Food-Top",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
 
  {
    "id": 53,
    "title": "Mughalai Chicken",
    "Image":"food_img/mughalai_chicken.jpg",
    "category": "Food",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 54,
    "title": "Patra",
    "Image":"food_img/patra.jpg",
    "category": "Food-Top",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 55,
    "title": "Poha",
    "Image":"food_img/poha.jpg",
    "category": "Food-Top",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 56,
    "title": "Samosa",
    "Image":"food_img/samosa.jpeg",
    "category": "Food-Top",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 57,
    "title": "Maharashtrian Thali",
    "Image":"food_img/thali.jpg",
    "category": "Food-Top",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 58,
    "title": "Patra",
    "Image":"food_img/patra.jpg",
    "category": "Food",
    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 59,
    "title": "Maharashtrian Thali",
    "Image":"food_img/thali.jpg",
    "category": "Food-Top",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 60,
    "title": "Jumbo Thali",
    "Image":"food_img/indian.jpg",
    "category": "Food-Top",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 61,
    "title": "Idali",
    "Image":"food_img/idali.jpg",
    "category": "Food-Top",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 62,
    "title": "Chhole",
    "Image":"food_img/chhole.jpg",
    "category": "Food",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },
  {
    "id": 63,
    "title": "Maharashtrian Thali",
    "Image":"food_img/thali.jpg",
    "category": "Food",
    "subcat":"Food",

    "description":"lorem epsun lorem epsum Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi incidunt animi accusamus quibusdam quisquam nam itaque natus voluptatem quaerat delectus omnis aliquid adipisci consectetur asperiores, consequatur, vel, tempore labore fuga?"
  },

 
  ]);
  return (
    <div>
      <store.Provider value={[details, setDetails]}>

        {props.children}


      </store.Provider>
    </div>
  )
}

export default Details;