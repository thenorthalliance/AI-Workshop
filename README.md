# SHE - hackathon

![NOA](https://www.sympa.com/hubfs/Noa%20logo%20grey.png)

## ICEBREAKER

a) Individual assignment: Introduce yourself to the team. Tell the group your name, occupation, favourite food and Sanity experience/skill level.

b) Group assignment: Give your group a name. Need some help coming up with names? Ask [ChatGPT](https://chat.openai.com/auth/login?next=%2F) to give some examples! 

In this workshop, the teams will use AI to generate fairytales and images. You will experiment and challenge the gender bias that is in today's AI. The goal is to use an existing fairytale or generate a new one with AI to rewrite or change the perspective or gender of the main character

The teams are going to integrate OpenAI API into sanity to generate text and images.

Following our challenge you must upload an image in sanity and you can generate images with AI that will only be integrated in the frontend not saved to sanity. If you are pro and want to integrate it go ahead. 

## Get started

1. One initial person on the team fork the repo to his/hers github.
2. The initial person adds your team members as contributors/admin to the repo
3. The rest of the team clones the repo from the initial persons github.
4. Create a .env file in the root folder and copy paste the example `.env` from discord. Channels are created for each group
5. Open terminal inside the root folder and run `npm install`
6. Once the install is complete, run `npm run dev`
7. Open up your browser and go to  [http://localhost:3000/studio/desk](http://localhost:3000/studio)
8. Click on "Fairytales" and observe that you have 3 documents containing 3 Norwegian fairytales


## The Challenge

1 <br/>
**Task One** will be to connect the pre-made React component inside the studio to generate text from OpenAI. You will find this file at `/components/OpenAISanity/OpenAISanity.tsx`. 

a) Update `const callApi` to fetch data from OpenAI (check the code for tips)   
b) Inside the `generateStory` function you should call the `callApi` function you wrote over.

Click on one of the fairytales and observe that you have an OpenAI text generator input field that you can test.
Remember to Publish changes done in sanity studio. (It's a green button at the bottom of the page)


Example
![NOA](https://www.linkpicture.com/q/Screenshot-2023-04-13-at-20.28.59.png)

2 <br/>
**Task two** : Finish the skeleton of the slug page. We have already fetched the data from Sanity and hooked it up to the fairytale interface. You will find this file in `pages/fairytale/slug.tsx`  
*a) Print out the image, generated text and the title on the frontend page.*  
*b) Bonus: Give it some styling!*  
PS! Remember to generate the story in sanity studio and Publish.

3 <br/>
**Task Tree**: Continuing on the [slug] page.  Generate an image with the OpenAI api. This image will not be added to sanity, it will only be added to the frontend.  
*Replace the image prompt text with your own custom prompt in the function `generateNewStoryImage`. And see the results.*


4 <br/>
**Task Four** is where the magic happens! Your team will need to be creative and write some good prompts. Discuss how the prompts you write influence the results. We would love to see your progress and failed attempts, so save them for your presentation for later.  
*a. Use the sanity data and improve upon the `imagePromt` variable to get a good result.*  
*b. Experiment and have fun!* 

## Code Examples

Task one:
```
const response = await fetch('/api/openai', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({ prompt: promt, maxTokens: 100 }),
   }).then((res) => res.json())

   if (response.text) {
     onChange(response.text ? set(response.text) : unset())
   } else {
     console.log('error')
   }
   setIsLoading(false)
 }

 const generateStory = async () => {
   if (!promt) return
   try {
     callApi()
   } catch (error) {
     console.log('error', error)
   }
 }

 ```







