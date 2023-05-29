# Api Documentation

## Places Endpoint

- base url : `https://getretore-api-ukc47aryda-et.a.run.app`

### Place

- Path : `/places`
- Method : `GET`
- Response :

   ```json
      {
        "success": false,
        "message": "Places fetched successfully",
        "data": [
          {
              "Place_Id": 0,
              "Place_Name": "Place_Name",
              "Description": "Description",
              "Category": "Category",
              "City": "City",
              "Price": 0,
              "Rating": 0,
              "Time_Minutes": 0,
              "Coordinate": "Coordinate",
              "Lat": 0,
              "Long": 0,
              "Image": "https://storage.googleapis.com/tourism-image-bucket/picture.png"
          },
          {
              "Place_Id": 0,
              "Place_Name": "Place_Name",
              "Description": "Description",
              "Category": "Category",
              "City": "City",
              "Price": 0,
              "Rating": 0,
              "Time_Minutes": 0,
              "Coordinate": "Coordinate",
              "Lat": 0,
              "Long": 0,
              "Image": "https://storage.googleapis.com/tourism-image-bucket/picture.png"
          }

        ]
      }
   ```

### Place Detail

- Path : `/places/{id}`
- Method : `GET`
- Response :

   ```json
      {
        "success": false,
        "message": "place fetched successfully",
        "data": {
            "Place_Id": 0,
            "Place_Name": "Place_Name",
            "Description": "Description",
            "Category": "Category",
            "City": "City",
            "Price": 0,
            "Rating": 0,
            "Time_Minutes": 0,
            "Coordinate": "Coordinate",
            "Lat": 0,
            "Long": 0,
            "Image": "https://storage.googleapis.com/tourism-image-bucket/picture.png"
        }
      }
   ```

### Recommendation

- Path : `/recommendation`
- Method : `POST`

- Request Body:
    ```json
      {
        "budget":9000
      }
    ```

- Response :

    ```json
    {
      "success": true,
      "message": "recommendation fetched successfully",
      "data": [
        {
            "Place_Id": 0,
            "Place_Name": "Place_Name",
            "Description": "Description",
            "Category": "Category",
            "City": "City",
            "Price": 0,
            "Rating": 0,
            "Time_Minutes": 0,
            "Coordinate": "Coordinate",
            "Lat": 0,
            "Long": 0,
            "Image": "https://storage.googleapis.com/tourism-image-bucket/picture.png"
        },
        {
            "Place_Id": 0,
            "Place_Name": "Place_Name",
            "Description": "Description",
            "Category": "Category",
            "City": "City",
            "Price": 0,
            "Rating": 0,
            "Time_Minutes": 0,
            "Coordinate": "Coordinate",
            "Lat": 0,
            "Long": 0,
            "Image": "https://storage.googleapis.com/tourism-image-bucket/picture.png"
        }

      ]
    }
    ```


