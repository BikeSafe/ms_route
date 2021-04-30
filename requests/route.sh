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
  GET http://localhost:4003/route/$2

  printf "\n\n"

elif [[ $1 == "PUBLIC" ]]
then

  printf "\nGET route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  GET http://localhost:4003/route/public

  printf "\n\n"

elif [[ $1 == "QUALIFY" ]]
then

  printf "\nPUT route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  PUT http://localhost:4003/route/qualify -d \
  '{
      "routeId":"608b4b778372ae00316b961d",
      "rating": 5
   }'
  printf "\n\n"

elif [[ $1 == "ADDMEMBER" ]]
then

  printf "\nPUT route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  PUT http://localhost:4003/route/add-member -d \
  '{
      "routeId":"608b4b778372ae00316b961d",
      "id2": 1
   }'
  printf "\n\n"

elif [[ $1 == "DELMEMBER" ]]
then

  printf "\nPUT route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  PUT http://localhost:4003/route/remove-member -d \
  '{
      "routeId":"608b4b778372ae00316b961d",
      "id2": 1
   }'
  printf "\n\n"

elif [[ $1 == "DELETE" ]]
then

  printf "\nDELETE route\n\n"

  curl -i -H "Content-Type:application/json" -X \
  DELETE http://localhost:4003/route/$2

  printf "\n\n"

else

  printf "\nOptions:\
  \nPOST\
  \nGET :routeId\
  \nPUBLIC\
  \nQUALIFY\
  \nADDMEMBER\
  \nDELMEMBER\
  \nDELETE :routeId\n\n"

fi
