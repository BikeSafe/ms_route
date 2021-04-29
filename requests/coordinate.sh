if [[ $1 == "POST" ]]
then
  printf "\nPOST coordinate\n\n"

  curl -i -H "Content-Type:application/json" -X \
  POST http://localhost:4003/coordinate -d \
  '{ "lat": 4.6, "lng": 5 }'

  printf "\n\n"

elif [[ $1 == "GET" ]]
then

  printf "\nGET coordinate\n\n"

  curl -i -H "Content-Type:application/json" -X \
  GET http://localhost:4003/coordinate -d \
  '{"coordinateId": "608a171eac071b00418609a7"}'

  printf "\n\n"

elif [[ $1 == "PUT" ]]
then

  printf "\nPUT coordinate\n\n"

  curl -i -H "Content-Type:application/json" -X \
  PUT http://localhost:4003/coordinate -d \
  '{ "lat": 47.3, "lng": 45 , "coordinateId": "608a171eac071b00418609a7"}'
  printf "\n\n"

elif [[ $1 == "DELETE" ]]
then

  printf "\nDELETE coordinate\n\n"

  curl -i -H "Content-Type:application/json" -X \
  DELETE http://localhost:4003/coordinate -d \
  '{"coordinateId": "608a171eac071b00418609a7"}'

  printf "\n\n"

else

  printf "\nOptions:\
  \nPOST\
  \nGET\
  \nPUT\
  \nDELETE\n"

fi
