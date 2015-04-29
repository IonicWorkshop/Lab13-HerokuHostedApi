# Lab13-HerokuHostedApi
Api that is needed for the Lab13 CORS fix

Api Url:

* Hello World: [https://ioniccorsdemoapi.herokuapp.com/api/endpoint](https://ioniccorsdemoapi.herokuapp.com/)
* User Data: [https://ioniccorsdemoapi.herokuapp.com/api/endpoint](https://ioniccorsdemoapi.herokuapp.com/api/endpoint)

CORS Enabled Api Urls:

* Hello World: [https://ioniccorsdemoapi.herokuapp.com/api/endpoint](https://ioniccorsdemoapi.herokuapp.com/NoCors)
* User Data: [https://ioniccorsdemoapi.herokuapp.com/api/endpoint](https://ioniccorsdemoapi.herokuapp.com/api/endpointNoCors)


User Data Api Output:

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

1. Signup for a free Heroku account at [http://heroku.com](http://heroku.com)
1. Create a Node app.
1. Hook it up through their Git

** Add Heroku Git Remote Info**

1. Install Heroku tool belt
1. heroku login
1.heroku git:remote -a ioniccorsdemoapi
    * Change ioniccorsdemoapi to your Heroku app name

**Push Updates to heroku**
    git push heroku master

**Get Any Updates from Heroku**
     git pull heroku master