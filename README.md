# Gemini Workspace In Postman       

This project is aimed for the developers to interact with the Gemini API's through the Gemini Workspace in postman providing a central hub for exploration,integration and troubleshooting.This will reduce the initial learning curve to get started with the Gemini API's.

![image](https://github.com/user-attachments/assets/45f05066-b28f-4393-a507-1a97dbdbe157)

For a detailed walkthrough on getting started with this workspace and other onboarding videos, please refer to our [YouTube channel](https://youtube.com/@gemini-workspace?si=qhGk521dJ6MK4eS1).

# Get Started
This Gemini-Workspace Repository contains the JSON exported file of the Gemini-API collection containing all the Gemini features and API requests, Gemini - Testing and Production environment ,Scripts, GitHub Workflows for Automation via GitHub Action to ensure that the Workspace remains up to date by automatically fetching the latest Gemini API changes and updating the workspace on regular intervals.

## Step 1 : Fork the collection

You cannot directly make changes to the orignal collection , so you need to fork it first before using it. To fork the collection , simply click the run in postman button given below ⬇️.

  [<img src="https://run.pstmn.io/button.svg" alt="Run In Postman">](https://app.getpostman.com/run-collection/42721875-03179c6a-0bf6-4f72-85c4-25a129a1e099?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D42721875-03179c6a-0bf6-4f72-85c4-25a129a1e099%26entityType%3Dcollection%26workspaceId%3D2f9d5f9f-aea6-4fdf-bb27-0b87d62b69f9)

<img src="https://content.pstmn.io/3a5b447d-6821-42c8-9218-87fcc06176ba/Zm9yayBpbWcucG5n">

## Step 2 : Getting the API key

To get started working with Gemini APIs, you must first be authorized to access them. The easiest way to authenticate to the Gemini API is to configure an API key.

1. Go to the [Google AI Studio ](https://aistudio.google.com/prompts/new_chat) and click on **Get API key button**.
    

<img src="https://content.pstmn.io/32c9c665-ad5a-4538-b86e-11b1c007c7fc/MXN0IEd1aWRlLnBuZw==">

2\. Click on **Create API key button** to create the API key.

<img src="https://content.pstmn.io/7c531cdf-2128-40ed-8f66-17a1acf126fb/R3VpZGUgMi5wbmc=">

3\. Copy the generated API key and you are good to go !

## Step 3 : Configure your API key in Postman using Environments

Now that you have generated your API key , it's time to store it in the Gemini - testing environment so that it can be used as an authorization to access the Gemini API's and send requests.

1.Go to Gemini - testing Environment section and set the api key to your API key value

<img src="https://content.pstmn.io/36484c28-e942-4e06-8c2e-e212eeee665f/U2NyZWVuc2hvdCAyMDI1LTAzLTA5IDE5MjQxNy5wbmc=" width="617" height="111">

and now that you have configured the key , you can start exploring the collection !

# 🛠️ Troubleshooting or Stuck ?

If you’re having issues:

- Double-check if your API key is correctly set in the testing environment
    
- Ensure you’ve selected the right environment. **Gemini-Testing Environment**
    
- Look for detailed errors in the **response body and console**
    

**Watch this video**: [Getting Started with the Gemini Workspace](https://youtu.be/YETs9UNij1I)

If you are facing any issues , kindly contact the Gemini Team  
Email - [help@gemini-workspace-postman.com<br>](https://help@gemini-workspace-postman.com)


# Gemini Models

| **Model Variant** | **Input** | **Output** | **Optimised for** |
| --- | --- | --- | --- |
| [Gemini 2.5 Pro Preview](https://ai.google.dev/gemini-api/docs/models#gemini-2.5-pro-preview-03-25)  <br>_**gemini-2.5-pro-preview-03-25**_ | Audio, images, videos, and text | Text | Enhanced thinking and reasoning, multimodal understanding, advanced coding, and more |
| [Gemini 2.0 Flash](https://ai.google.dev/gemini-api/docs/models#gemini-2.0-flash)  <br>_**gemini-2.0-flash**_ | Audio, images, videos, and text | Text, images (experimental), and audio (coming soon) | Next generation features, speed, thinking, realtime streaming, and multimodal generation |
| [Gemini 2.0 Flash-Lite](https://ai.google.dev/gemini-api/docs/models#gemini-2.0-flash-lite)  <br>_**gemini-2.0-flash-lite**_ | Audio, images, videos, and text | Text | Cost efficiency and low latency |
| [Gemini 1.5 Flash<br>](https://ai.google.dev/gemini-api/docs/models#gemini-1.5-flash)_**gemini-1.5-flash**_ | Audio, images, videos, and text | Text | Fast and versatile performance across a diverse variety of tasks |
| [Gemini 1.5 Flash-8B<br>](https://ai.google.dev/gemini-api/docs/models#gemini-1.5-flash-8b)_**gemini-1.5-flash-8b**_ | Audio, images, videos, and text | Text | High volume and lower intelligence tasks |
| [Gemini 1.5 Pro<br>](https://ai.google.dev/gemini-api/docs/models#gemini-1.5-pro)_**gemini-1.5-pro**_ | Audio, images, videos, and text | Text | Complex reasoning tasks requiring more intelligence |
| [Gemini Embedding](https://ai.google.dev/gemini-api/docs/models#gemini-embedding)  <br>_**gemini-embedding-exp**_ | Text | Text embeddings | Measuring the relatedness of text strings |
| [Imagen 3](https://ai.google.dev/gemini-api/docs/models#imagen-3)  <br>imagen-3.0-generate-002 | Text | Images | Our most advanced image generation model |
| [Veo 2](https://ai.google.dev/gemini-api/docs/models#veo-2)  <br>veo-2.0-generate-001 | Text, images | Video | High quality video generation |
| [Gemini 2.0 Flash Live](https://ai.google.dev/gemini-api/docs/models#live-api)  <br>_**gemini-2.0-flash-live-001**_ | Audio, video, and text | Text, audio | Low-latency bidirectional voice and video interactions |




