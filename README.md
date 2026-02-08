# library-management-system
Library Management System
this is library management api backend forthe management of books
## routes and the endpoint

## /users
GET: get all the list from user in the system
POST: create a new/register a new user

## user/{id}
GET: user by their id
PUT :update user by their ID
DELETE: delete user by thier ID(cheack user if user have issued an book )&(is there penalty to be collected)

## user/subscription-detail/{id}
GET: get user subscription details by their ID
>> date of subscirption
>> valid til?
>> fine if any?

## /books
get :get all the books in system
POST: add new book new in system

## books/{id}
GET: get books by its ID
PUT:update book by its id
DELETE : delete book by its id

## /books/issued
GET:get all usued books

## /book /issued /withfine 
GET:get all issued books with thier fine amount

## subscription type
>> basic subscription(3 month)
>> standard (6 month)
>> premium (12 month)

>>if a user misses the reneval date then user should collected with $100
>> if user misses his subscription , then user is expected to pay$100
>> if user misses both renewal & subscription , then collect amount shoud $100


## command 
npm init
