# Api Documentation

- base url : `https://test---getretore-api-ukc47aryda-et.a.run.app/`

### Hello

- Path : `/hello`
- Method : `GET`
- Required:

  - Header:

    | Header | Value |
    | ------ | -----------| 
    | authorization | `Bearer <token>` | 
    
- Response :
    ```json
      {
        "error": "unauthenticated please provide the token in header"
      }
    ```

### Place

- Path : `/places`
- Method : `GET`
- Optional:

  - Query Params:

    | Query | Value | description |
    | ------ | ------ | ---------- |
    | limit | int | limit rlist return |
    | search | string | return list that name containing given param |
- Response :

   ```json
       [
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
   ```

### Place Detail

- Path : `/places/{id}`
- Method : `GET`
- Response :

   ```json
      [
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
    [
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
    
    ```


