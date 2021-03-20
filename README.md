# Video API

This is a video API, dedicated to a personal project to create a youtube clone, for educational purposes.

# How to Install

On the repository main directory

### Clone Repository

```sh
git init
git clone https://github.com/gabriels6/video-api

```

### NPM

```sh
npm install

node src/App/index.js

```

### YARN

```sh
yarn install

yarn start

```


# Routes

## Main URL (local)

localhost:3333/

## Authentication

POST: /login
BODY: {
    Email:String,
    Password:String
}
RETURNS: {
    auth:boolean,
    token:JsonWebToken (String)
}

POST: /logout
BODY: {
    auth: false,
    token: null
}

## User

GET: /User
HEADERS:{
    user-access-token:JsonWebToken(String)
}

GET: /User/public

POST: /User
BODY: {
    Name:String,
    Email:String,
    Password:String
}

PUT:  /User
HEADERS:{
    user-access-token:JsonWebToken(String)
}
BODY:{
    UpdateColumns:[
        Name:String,
        User_id:String,
        Description:String,
        Videos:[Video_Urls:String],
        Subscribers:[Usernames:String],
        CommunityPosts:[Post:{
            Title:String,
            Description:String
        },...],
        OtherChannels:[Channel:String],
        Location:String,
        isVerified:Boolean,
        Contacts:{
            Facebook:String,
            Twitter:String,
            Instagram:String
        },
        isActive:Boolean
    ]
}

## Channel

GET: /Channel
HEADERS:{
    user-access-token:JsonWebToken(String)
}

GET: /Channel/public

POST: /Channel
HEADERS:{
    user-access-token:JsonWebToken(String)
}

PUT: /Channel
HEADERS:{
    user-access-token:JsonWebToken(String)
}

## Video 

GET: /Video

POST: /Video
HEADERS:{
    user-access-token:JsonWebToken(String)
}
BODY:{
    Video_Id,
    UpdateColumns:[
        Channel_Id:String,
        Category:String,
        Thumbnail_Url:String,
        Video_Url:String,
        Video_Title:String,
        Video_Description:String,
        Likes:[Usernames:String],
        Dislikes:[Usernames:String],
        Comments:[
            {
                Username:String,
                Comment:String
            },{
                Username:String,
                Comment:String
            },...],
        Views:[String],
        isPrivate:Boolean,
        isActive:Boolean
    ]
}

PUT: /Video
HEADERS:{
    user-access-token:JsonWebToken(String)
}
BODY:{
    Category,
    Thumbnail_Url:String,
    Video_Url:String,
    Video_Title:String,
    Video_Description:String
}



