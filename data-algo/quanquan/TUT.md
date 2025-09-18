https://github.com/GoogleCloudPlatform/generative-ai/tree/main/gemini/getting-started

`/usr/bin/python3 `
Phải dùng path này chạy
location là `us-east1`

# Gg init

gcloud auth list
active \* là chuẩn

gcloud config list project
gcloud config set compute/region us-central1

## Active service

active and export key

gcloud iam service-accounts create tts-qwiklab
gcloud iam service-accounts keys create tts-qwiklab.json --iam-account tts-qwiklab@qwiklabs-gcp-04-5b6f56b5ae5e.iam.gserviceaccount.com
export GOOGLE_APPLICATION_CREDENTIALS=tts-qwiklab.json

# Python part

sudo apt-get install -y virtualenv
python3 -m venv venv
source venv/bin/activate

## Text to Speech part

curl -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
 -H "Content-Type: application/json; charset=utf-8" \
 "https://texttospeech.googleapis.com/v1/voices"

curl -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
 -H "Content-Type: application/json; charset=utf-8" \
 "https://texttospeech.googleapis.com/v1/voices?language_code=en"

Open Editor in cloud shell

```json
{
    'input':{
        'text':'Cloud Text-to-Speech API allows developers to include
           natural-sounding, synthetic human speech as playable audio in
           their applications. The Text-to-Speech API converts text or
           Speech Synthesis Markup Language (SSML) input into audio data
           like MP3 or LINEAR16 (the encoding used in WAV files).'
    },
    'voice':{
        'languageCode':'en-gb',
        'name':'en-GB-Standard-A',
        'ssmlGender':'FEMALE'
    },
    'audioConfig':{
        'audioEncoding':'MP3'
    }
}
```

Chú ý content trên sai format JSON nhưng ko quan trọng vì sẽ được feed vào terminal

Call api
curl -H "Authorization: Bearer "$(gcloud auth application-default print-access-token) \
-H "Content-Type: application/json; charset=utf-8" \
-d @synthesize-text.json "https://texttospeech.googleapis.com/v1/text:synthesize" \

> synthesize-text.txt

## Reverse txt response to file

Check codepy

Built Request:

```
{
    'input':{
        'ssml':'<speak><s>
           <emphasis level="moderate">Cloud Text-to-Speech API</emphasis>
           allows developers to include natural-sounding
           <break strength="x-weak"/>
           synthetic human speech as playable audio in their
           applications.</s>
           <s>The Text-to-Speech API converts text or
           <prosody rate="slow">Speech Synthesis Markup Language</prosody>
           <say-as interpret-as=\"characters\">SSML</say-as>
           input into audio data
           like <say-as interpret-as=\"characters\">MP3</say-as> or
           <sub alias="linear sixteen">LINEAR16</sub>
           <break strength="weak"/>
           (the encoding used in
           <sub alias="wave">WAV</sub> files).</s></speak>'
    },
    'voice':{
        'languageCode':'en-gb',
        'name':'en-GB-Standard-A',
        'ssmlGender':'FEMALE'
    },
    'audioConfig':{
        'speakingRate': 1.15,
        'pitch': -2,
        'audioEncoding':'OGG_OPUS',
        'effectsProfileId': ['headphone-class-device']
    }
}
```

export API_KEY=AIzaSyC89mBJaGaFgzXLtf6BBol1AMM3k97vuFg
curl "https://translation.googleapis.com/language/translate/v2?target=es&key=${API_KEY}&q=${TEXT}"

gcloud iam service-accounts create tts-qwiklab
gcloud iam service-accounts keys create tts-qwiklab.json --iam-account tts-qwiklab@qwiklabs-gcp-03-4d6f3af2c776.iam.gserviceaccount.com
export GOOGLE_APPLICATION_CREDENTIALS=tts-qwiklab.json
