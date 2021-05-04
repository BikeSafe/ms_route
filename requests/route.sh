if [[ $1 == "POST" ]]
then
  printf "\nPOST route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  POST http://localhost:4003/route -d \
  '{
    "name":"Nombre Random",
    "creatorId2":2
  }'

elif [[ $1 == "GET" ]]
then

  printf "\nGET route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  GET http://localhost:4003/route/ -d \
  '{ "routeId":"60911c9fb5fa0f08d1132ce4"}'

  printf "\n\n"

elif [[ $1 == "PUBLIC" ]]
then

  printf "\nGET route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  GET http://localhost:4003/route/public -d \
  '{ "routeId":"60911c9fb5fa0f08d1132ce4"}'

  printf "\n\n"

elif [[ $1 == "QUALIFY" ]]
then

  printf "\nPUT route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  PUT http://localhost:4003/route/qualify -d \
  '{
      "routeId":"60911c9fb5fa0f08d1132ce4",
      "rating": 5
   }'
  printf "\n\n"

elif [[ $1 == "ADDMEMBER" ]]
then

  printf "\nPUT route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  PUT http://localhost:4003/route/add-member -d \
  '{
      "routeId":"60911c9fb5fa0f08d1132ce4",
      "id2": 1
   }'
  printf "\n\n"

elif [[ $1 == "DELMEMBER" ]]
then

  printf "\nPUT route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  PUT http://localhost:4003/route/remove-member -d \
  '{
      "routeId":"60911c9fb5fa0f08d1132ce4",
      "id2": 1
   }'
  printf "\n\n"

elif [[ $1 == "DELETE" ]]
then

  printf "\nDELETE route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  DELETE http://localhost:4003/route/ -d \
  '{ "routeId":"60911c9fb5fa0f08d1132ce4"}'

  printf "\n\n"

else

  printf "\nOptions:\
  \nPOST\
  \nGET\
  \nPUBLIC\
  \nQUALIFY\
  \nADDMEMBER\
  \nDELMEMBER\
  \nDELETE\n\n"

fi
