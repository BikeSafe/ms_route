if [[ $1 == "POST" ]]
then
  printf "\nPOST user\n\n"

  curl -i -H "Content-Type:application/json" -X \
  POST http://localhost:4003/user -d \
  '{"name":"Pepita", "id2": 8}'

elif [[ $1 == "GET" ]]
then

  printf "\nGET user\n\n"

  curl -i -H "Content-Type:application/json" -X \
  GET http://localhost:4003/user -d \
  '{"id2": 1}'

  printf "\n\n"

elif [[ $1 == "PUT" ]]
then

  printf "\nPUT specific user\n\n"

  curl -i -H "Content-Type:application/json" -X \
  PUT http://localhost:4003/user -d \
  '{"name":"Juan", "id2": 1}'
  printf "\n\n"

elif [[ $1 == "DELETE" ]]
then

  printf "\nDELETE specific user\n\n"

  curl -i -H "Content-Type:application/json" -X \
  DELETE http://localhost:4003/user -d \
  '{"id2": 1}'

  printf "\n\n"

else

  printf "\nOptions:\
  \nPOST\
  \nGET\
  \nGET id\
  \nPUT id\
  \nDELETE id\n\n"

fi