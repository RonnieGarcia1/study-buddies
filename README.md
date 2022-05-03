STUDY BUDDIES: TAKE HOME CHALLENGE # 1

```
Install dependencies:

$ npm install
$ npm init (-y to go through all prompts)
$ npm install express dotenv cors
```

```
Postgres SQL dependencies

$ npm install pg-promise
```

```
Start the app:

$ npm start

Web Access (local url) :localhost:3333
```

```
Inside of the Scripts objects in package.json, insert:

"db:init": "psql -U postgres -f db/schema.sql",
"db:seed": "psql -U postgres -f db/seed.sql"

-

Seed Database:

$ npm run db:init
$ npm run db:seed
```

```
  Resource         Method  Route                 Description
  ![x] Groups      GET     /groups               Returns a list of all groups.
  ![] Groups      POST    /groups               Creates a new group.
  ![x] Groups      GET     /groups{gid}          Returns details about the group with an id of {gid}.
  ![x] Groups      PUT     /groups{gid}          Update details of the group with an id of {gid}.
  ![x] Events      GET     /groups/{gid}/events  Return all events associated with the group with and id of{gid}.
  ![] Events      POST     /groups/{gid}/events Creates a new event associated with the group with an id of {gid}.
  ![x] Events      GET     /events/{eid}        Returns the details of an event with an id of{eid}.
  ![x] Events      PUT     /events/{eid}        Update details of the event with an id of{eid}.

  ![x] Users      GET     /users/{uid}/events    Return all events associated with the user with and id of{uid}
  ![x] User      POST     /users/{uid}/events    Creates a new event associated with the user with an id of {uid}.

```

created by Ronnie Garcia