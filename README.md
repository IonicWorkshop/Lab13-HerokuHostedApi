# Lab13-HerokuHostedApi
Api that is needed for the Lab13 CORS fix

Api Url: [https://ioniccorsdemoapi.herokuapp.com/api/endpoint](https://ioniccorsdemoapi.herokuapp.com/api/endpoint)

Api Output:

```json
  {
    "success":"true",
    "data":[
      {"name":"Josh","title":"Developer"},
      {"name":"Perry","title":"Developer"},
      {"name":"Max","title":"CEO"}
    ]
  }
```  

##Heroku Setup:**

** Add Heroku Git Remote Info**

1. Install Heroku tool belt
1. heroku login
1.heroku git:remote -a ioniccorsdemoapi

**Push Updates to heroku**
    git push heroku master

**Get Any Updates from Heroku**
     git pull heroku master