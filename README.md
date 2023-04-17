# SHE - hackathon

![NOA](https://www.sympa.com/hubfs/Noa%20logo%20grey.png)

## ICEBREAKER

a) Individual assignment: Introduce yourself to the team. Tell the group your name, occupation, favourite food and Sanity experience/skill level.

b) Group assignment: Give your group a name. Need some help coming up with names? Ask [ChatGPT](https://chat.openai.com/auth/login?next=%2F) to give some examples! 

## Get started

1. One initial person on the team fork the repo to his/hers github.
2. The initial person adds your team members as contributors/admin to the repo
3. The rest of the team clones the repo from the initial persons github.
4. Create a .env file in the root folder and copy paste the example .env from discord
5. Open terminal inside the root folder and run `npm install`
6. Once the install is complete, run `npm run dev`
7. Open up your browser and go to  [http://localhost:3000/studio/desk](http://localhost:3000/studio)


## The Challenge

1. First task will be to connect the premade React component inside the studio to generate text from OpenAI, you will find this file at `/components/OpenAISanity/OpenAISanity.tsx`. You will need to create a function to fetch data from OpenAI. Once you created this function you will need to create a on click function trigger the generate text.  [https://platform.openai.com/docs/api-reference/introduction](https://platform.openai.com/docs/api-reference/introduction).

Example
![NOA](https://www.linkpicture.com/q/Screenshot-2023-04-13-at-20.28.59.png)


2. Task 2 will be the connection from Sanity to NextJS. Inside `Pages/fairytale/index.tsx` we have created a skeleton for you. Your task will be to print out the title, slug and image from Sanity. Create a grid layout with each fairytale and make each fairytale link up to it's own slug page `Pages/fairytale/[slug].tsx`. 

Example
![NOA](https://www.linkpicture.com/q/Screenshot-2023-04-13-at-20.36.17.png)


3. Task three is to create the slug page of each fairytale.  Inside the slug page you will need to show the title, image, history and the generated text. 

Example
![NOA](https://www.linkpicture.com/q/Screenshot-2023-04-13-at-20.44.14.png)

4. Task four will be to connect the generated text and make it generate a image with the OpenAI API. Documentation [here](https://platform.openai.com/docs/guides/images).


5. Task five is to create the best prompt. 



